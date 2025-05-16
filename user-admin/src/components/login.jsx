import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Checkbox,
  Link,
  Divider,
  MenuItem,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const Login = ({ onLoginSuccess }) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectRole, setSelectRole] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!selectRole) {
      alert("Please select a role!");
      return;
    }

    // Block Student role login attempts
    if (selectRole === "student") {
      setError("Wrong role selected");
      alert("Wrong role selected");
      return;
    }

    loginUser();
  };

  const loginUser = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }), // Only email and password for admin
      });

      const data = await response.json();

      if (data.success) {
        // Save token to localStorage
        localStorage.setItem('authToken', data.token);
        
        
        console.log("Login successful, calling callback");
        // Call the callback from parent component
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      } else {
        setError(data.message || 'Login failed');
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login service unavailable');
      alert('Login service unavailable');
    }
  };

  return (
    <Box
  sx={{
    height: "100vh",
    display: "flex",
    backgroundColor: "#f9f9f9",
  }}
>
      <Grid container sx={{ height: "100%", width: "100vw" }}>
        {/* Left Section */}
         <Grid
      item
      xs={12}
      md={6}
      sx={{
        background: `url('https://i.ibb.co/W49sSMr4/Rectangle-6427.png') center center/cover no-repeat`,
        minHeight: '50vh', // Minimum height for mobile
      }}
    />
          {/* Placeholder image */}
        

        {/* Right Section */}
       <Grid
      item
      xs={12}
      md={6}
      sx={{
        backgroundColor: "#ffffff",
        padding: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: '50vh' // Minimum height for mobile
      }}
    >
          <Typography variant="h4" fontWeight="700" sx={{ marginBottom: 2 }}>
            Log in
          </Typography>
          
          {error && (
            <Typography variant="body2" color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}
          
          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            
            {/* Password Input */}
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ marginBottom: 2 }}
            />

            {/* User Role Dropdown */}
            <TextField
              select
              label="Select Role"
              value={selectRole}
              onChange={(e) => setSelectRole(e.target.value)}
              fullWidth
              sx={{ marginBottom: 2 }}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="student">Student</MenuItem>
            </TextField>
            
            {/* Remember Me and Forgot Password */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 3,
              }}
            >
              <Box display="flex" alignItems="center">
                <Checkbox />
                <Typography variant="body2">Remember me</Typography>
              </Box>
              <Link href="#" underline="hover" color="primary">
                Forgot Password?
              </Link>
            </Box>
            
            {/* Sign In Button */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#000000",
                color: "#ffffff",
                textTransform: "none",
                fontWeight: "700",
                marginBottom: 2,
                "&:hover": {
                  backgroundColor: "#333333",
                },
              }}
            >
              Sign in
            </Button>
          </form>
          
          {/* Divider */}
          <Divider sx={{ my: 3 }}>Or Signin With</Divider>
          
          {/* Google Sign-in */}
          <Button
            variant="outlined"
            fullWidth
            startIcon={<GoogleIcon />}
            sx={{
              textTransform: "none",
              fontWeight: "700",
              color: "#000000",
              borderColor: "#000000",
              "&:hover": {
                borderColor: "#333333",
                backgroundColor: "#f1f1f1",
              },
            }}
          >
            Google
          </Button>
          
          {/* Signup Link */}
          <Box sx={{ marginTop: 3, textAlign: "center" }}>
            <Typography variant="body2">
              Don't have an account?{" "}
              <Link href="#" underline="hover" color="primary">
                Signup
              </Link>
            </Typography>
          </Box>
          
          {/* Footer Links */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              marginTop: 4,
              fontSize: "12px",
              color: "text.secondary",
            }}
          >
            <Link href="#" underline="hover">
              Contact Us
            </Link>
            <Link href="#" underline="hover">
              FAQ
            </Link>
            <Link href="#" underline="hover">
              Privacy Policy
            </Link>
            <Link href="#" underline="hover">
              Cookies Setting
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;