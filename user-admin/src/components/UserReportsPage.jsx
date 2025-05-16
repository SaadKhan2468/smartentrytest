import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button, // Import Button
  Collapse, // Import Collapse
} from '@mui/material';

const UserReportsPage = () => {
  const [users, setUsers] = useState([]);
  const [expandedReportId, setExpandedReportId] = useState(null); // Track which report is expanded

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users/reports');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };
    fetchReports();
  }, []);

  const handleReadMoreClick = (id) => {
    setExpandedReportId(expandedReportId === id ? null : id); // Toggle expansion
  };

  const displayShortenedReport = (report) => {
    if (!report) return 'No reports';
    const reportString = JSON.stringify(report, null, 2);
    const maxLength = 50; // Adjust as needed
    return reportString.length > maxLength ? reportString.substring(0, maxLength) + '...' : reportString;
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        User Reports
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Reports</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <React.Fragment key={user.id}>
                <TableRow>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{`${user.first_name || ''} ${user.last_name || ''}`}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {user.reports ? (
                      <>
                        {displayShortenedReport(user.reports)}
                        <Button size="small" onClick={() => handleReadMoreClick(user.id)}>
                          {expandedReportId === user.id ? 'Read Less' : 'Read More'}
                        </Button>
                      </>
                    ) : 'No reports'}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
                    <Collapse in={expandedReportId === user.id} timeout="auto" unmountOnExit>
                      <Box sx={{ margin: 1 }}>
                        <Typography variant="body2" gutterBottom component="div">
                          Full Report:
                        </Typography>
                        <pre style={{ whiteSpace: 'pre-wrap' }}>
                          {user.reports ? JSON.stringify(user.reports, null, 2) : 'No reports'}
                        </pre>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserReportsPage;