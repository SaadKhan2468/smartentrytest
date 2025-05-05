import React from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Checkbox,
  Link,
  Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { MenuItem } from "@mui/material";


const Login = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Grid container sx={{ maxWidth: "1200px", borderRadius: 2, overflow: "hidden" }}>
        {/* Left Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            background: `url('https://i.ibb.co/W49sSMr4/Rectangle-6427.png') center center/cover no-repeat`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Placeholder image URL; replace it with your actual image path */}
        </Grid>

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
          }}
        >
          <Typography variant="h4" fontWeight="700" sx={{ marginBottom: 2 }}>
            Log in
          </Typography>
          {/* Email Input */}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          {/* Password Input */}
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            sx={{ marginBottom: 2 }}
          />

          {/* User Role Dropdown */}
<TextField
  select
  label="Select Role"
  value={selectRole} // Bind state to the dropdown
  onChange={(e) => setSelectRole(e.target.value)} // Update state on change
  fullWidth
  sx={{ marginBottom: 2 }}
>
  <MenuItem value="admin">Admin</MenuItem>
  <MenuItem value="registered">Student</MenuItem>
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
            variant="contained"
            fullWidth
/*************  ✨ Windsurf Command 🌟  *************/
onClick={() => {
  if (selectRole === "registered") {
    window.location.href = "http://localhost:5173/registered";
  } else if (selectRole === "admin") {
    window.location.href = "http://localhost:5174/admin";
  } else {
    alert("Please select a role!");
  }
}}
/*******  939ded69-775c-46c8-86be-1006eae093b8  *******/
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
              Don’t have an account?{" "}
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
