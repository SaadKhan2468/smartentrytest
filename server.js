const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(express.json({ limit: '10mb' }));

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'smart_proctor_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

// Login endpoint with better debugging
app.post('/api/login', (req, res) => {
  const { email, password, role } = req.body; 
  console.log('Login attempt:', { email, password, role });

  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: err.message });
    }
    
    console.log('Query results:', results);
    
    if (results.length > 0) {
      const user = results[0];
      console.log('User found:', user);
      
      const userRole = user.role || 'student';
      console.log('User role:', userRole, 'Selected role:', role);
      
      if (role && role !== userRole) {
        console.log('Role mismatch');
        return res.status(403).json({ 
          success: false, 
          message: 'Wrong role selected' 
        });
      }
      
      const token = jwt.sign(
        { 
          id: user.id,
          role: userRole,
          name: `${user.first_name} ${user.last_name}`
        },
        'your_secret_key',
        { expiresIn: '1h' }
      );
      
      console.log('Login successful, sending token');
      res.status(200).json({ 
        success: true, 
        token,
        role: userRole,
        message: 'Login successful'
      });
    } else {
      console.log('Invalid credentials');
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  });
});


// Signup endpoint
app.post('/api/signup', (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    studentId,
    password,
    dob,
    intermediateDomain,
    intermediateMarks,
    intermediateGrade,
    matricDomain,
    matricMarks,
    matricGrade
  } = req.body;

  // Check if email or student ID already exists
  const checkQuery = 'SELECT * FROM users WHERE email = ? OR student_id = ?';
  db.query(checkQuery, [email, studentId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length > 0) {
      return res.status(400).json({ 
        success: false,
        message: 'Email or Student ID already exists' 
      });
    }

    // Insert new user
    const insertQuery = `
      INSERT INTO users 
      (first_name, last_name, email, phone, student_id, password, dob,
       intermediate_domain, intermediate_marks, intermediate_grade,
       matric_domain, matric_marks, matric_grade, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
    `;

    db.query(insertQuery, [
      firstName,
      lastName,
      email,
      phone,
      studentId,
      password,
      dob,
      intermediateDomain,
      intermediateMarks,
      intermediateGrade,
      matricDomain,
      matricMarks,
      matricGrade
    ], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      
      res.status(201).json({
        success: true,
        message: 'User registered successfully'
      });
    });
  });
});


// Add this after the regular login endpoint
app.post('/api/admin/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Admin login attempt:', { email, password });
  
    const query = 'SELECT * FROM admins WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: err.message });
      }
      
      console.log('Admin query results:', results);
      
      if (results.length > 0) {
        const admin = results[0];
        const token = jwt.sign(
          { id: admin.id, role: 'admin' },
          'your_secret_key',
          { expiresIn: '1h' }
        );
        
        res.status(200).json({ 
          success: true, 
          token,
          role: 'admin',
          message: 'Admin login successful'
        });
      } else {
        res.status(401).json({ success: false, message: 'Invalid admin credentials' });
      }
    });
  });


// Fixed save-report endpoint
// Fixed save-report endpoint
app.post('/api/save-report', (req, res) => {
  const { userId, report } = req.body;
  const token = req.headers.authorization?.split(' ')[1];
  console.log('Received save-report request:', { userId, reportSize: Object.keys(report).length });
  console.log('Report data sample:', Object.keys(report).slice(0, 2).map(key => ({ key, data: report[key] })));

  if (!token) {
    console.error('No token provided');
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, 'your_secret_key');
    console.log('Token decoded:', decoded);
    
    // Skip processing if the report is empty
    if (Object.keys(report).length === 0) {
      console.log('Empty report, skipping database update');
      return res.status(200).json({ 
        success: true, 
        message: 'No data to save',
        timestamp: new Date().toISOString()
      });
    }
    
    // Format report data for storage
    const formattedReport = {};
    Object.entries(report).forEach(([key, detection]) => {
      formattedReport[key] = {
        type: detection.type,
        message: detection.message,
        timestamp: detection.timestamp,
        userName: decoded.name || detection.userName || 'Unknown'
      };
    });
    
    console.log('Formatted report sample:', Object.keys(formattedReport).slice(0, 2).map(key => ({ key, data: formattedReport[key] })));

    // Check if user exists first
    const checkUserQuery = 'SELECT id FROM users WHERE id = ?';
    db.query(checkUserQuery, [userId], (err, results) => {
      if (err) {
        console.error('User check error:', err);
        return res.status(500).json({ success: false, message: 'Database error during user check', error: err.message });
      }
      
      if (results.length === 0) {
        console.error('User not found:', userId);
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      
      // User exists, proceed with update
      // First check if reports column exists and has valid JSON
      const checkReportsQuery = 'SELECT reports FROM users WHERE id = ?';
      db.query(checkReportsQuery, [userId], (err, results) => {
        if (err) {
          console.error('Reports check error:', err);
          return res.status(500).json({ success: false, message: 'Database error during reports check', error: err.message });
        }
        
        let existingReports = {};
        
        try {
          // Check if reports field exists and is valid JSON
          if (results[0].reports) {
            try {
              existingReports = typeof results[0].reports === 'string' 
                ? JSON.parse(results[0].reports) 
                : results[0].reports;
            } catch (parseError) {
              console.warn('Invalid JSON in reports column, defaulting to empty object:', parseError.message);
              existingReports = {}; // Default to empty object if JSON is invalid
            }
          }
          
          console.log('Existing reports sample:', Object.keys(existingReports).slice(0, 2));
          
          // Merge existing reports with new ones
          const mergedReports = { ...existingReports, ...formattedReport };
          console.log('Merged reports size:', Object.keys(mergedReports).length);
          
          // Update the user's report with the merged data
          const updateQuery = 'UPDATE users SET reports = ? WHERE id = ?';
          const jsonReports = JSON.stringify(mergedReports);
          
          db.query(updateQuery, [jsonReports, userId], (err, result) => {
            if (err) {
              console.error('Database update error:', err);
              return res.status(500).json({ success: false, message: 'Database error during update', error: err.message });
            }
            
            console.log('Report saved successfully for user:', userId);
            res.status(200).json({ 
              success: true, 
              message: 'Report saved successfully',
              timestamp: new Date().toISOString(),
              count: Object.keys(formattedReport).length
            });
          });
        } catch (error) {
          console.error('Report processing error:', error);
          return res.status(500).json({ success: false, message: 'Error processing report', error: error.message });
        }
      });
    });
  } catch (err) {
    console.error('Token verification error:', err);
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
});
// Add this endpoint before app.listen()
app.get('/api/users/reports', (req, res) => {
  const query = `
    SELECT id, email, first_name, last_name, reports 
    FROM users 
    WHERE reports IS NOT NULL
  `;
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Reports endpoint error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    
    // Parse JSON reports if they're stored as strings
    const usersWithParsedReports = results.map(user => ({
      ...user,
      reports: typeof user.reports === 'string' ? 
        JSON.parse(user.reports) : 
        user.reports
    }));
    
    res.json(usersWithParsedReports);
  });
});

// Add this endpoint after other routes in server.js
// Add this endpoint after other routes in server.js
// In server.js
app.post('/api/verify-token', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    console.log('Verify-token: No token provided');
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, 'your_secret_key');
    console.log('Verify-token: Token decoded:', decoded);
    const query = 'SELECT id FROM admins WHERE id = ?';
    db.query(query, [decoded.id], (err, results) => {
      if (err) {
        console.error('Verify-token: Database error:', err);
        return res.status(500).json({ success: false, message: 'Database error' });
      }
      if (results.length > 0) {
        console.log('Verify-token: User found, token valid');
        res.status(200).json({ success: true, message: 'Token is valid' });
      } else {
        console.log('Verify-token: User not found');
        res.status(401).json({ success: false, message: 'User not found' });
      }
    });
  } catch (err) {
    console.error('Verify-token: Token verification error:', err);
    res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});