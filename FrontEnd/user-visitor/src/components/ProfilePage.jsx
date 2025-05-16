import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Switch,
  FormControlLabel,
  Tabs,
  Tab,
  Paper,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Theme configuration
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: darkMode ? "#90caf9" : "#1976d2",
          },
          secondary: {
            main: darkMode ? "#f48fb1" : "#d32f2f",
          },
          background: {
            default: darkMode ? "#121212" : "#f9f9f9",
            paper: darkMode ? "#1e1e1e" : "#ffffff",
          },
          text: {
            primary: darkMode ? "#ffffff" : "#000000",
            secondary: darkMode ? "#aaaaaa" : "#666666",
          },
        },
        typography: {
          fontFamily: "Poppins, Arial, sans-serif",
        },
      }),
    [darkMode]
  );

  const tabs = ["Personal Information", "Security Settings", "Notifications & Alerts", "Account Settings"];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ padding: 4, backgroundColor: "background.default", minHeight: "100vh" }}>
        {/* Dark Mode Toggle */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography variant="h5" fontWeight="600" color="text.primary">
            Profile Page
          </Typography>
          <FormControlLabel
            control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
            label="Dark Mode"
          />
        </Box>

        {/* Tabs */}
        <Paper sx={{ marginBottom: 4, borderRadius: 2, backgroundColor: "background.paper" }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            sx={{
              backgroundColor: "background.paper",
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab} />
            ))}
          </Tabs>
        </Paper>

        {/* Tab Content */}
        <Paper sx={{ padding: 4, borderRadius: 2, backgroundColor: "background.paper" }}>
          {activeTab === 0 && (
            <Box>
              <Typography variant="h6" fontWeight="600" mb={3} color="text.primary">
                Personal Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                  <Box
                    component="img"
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                    sx={{ width: 150, height: 150, borderRadius: "50%", mb: 2 }}
                  />
                  <Button variant="outlined" component="label">
                    Upload your picture
                    <input hidden accept="image/*" type="file" />
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="First Name" placeholder="Place Holder" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Last Name" placeholder="Place Holder" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Title" placeholder="Place Holder" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Designation" placeholder="Place Holder" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Work Phone" placeholder="Place Holder" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Mobile Phone" placeholder="Place Holder" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email" placeholder="Place Holder" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Date of Joining" placeholder="Place Holder" variant="outlined" />
                </Grid>
              </Grid>
            </Box>
          )}

          {activeTab === 1 && (
            <Box>
              <Typography variant="h6" fontWeight="600" mb={3} color="text.primary">
                Security Settings
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Enter Your Password" placeholder="Place Holder" type="password" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Enter Your New Password" placeholder="Place Holder" type="password" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Confirm New Password" placeholder="Place Holder" type="password" />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Switch color="primary" />}
                    label="Two Factor Authentication"
                    labelPlacement="end"
                  />
                </Grid>
              </Grid>
            </Box>
          )}

          {activeTab === 2 && (
            <Box>
              <Typography variant="h6" fontWeight="600" mb={3} color="text.primary">
                Notifications & Alerts
              </Typography>
              <Grid container spacing={2}>
                {[
                  { label: "New User Registration Alert", description: "Stay updated with each new entry to the system." },
                  { label: "User Account Login Attempts Notifications", description: "Track user login activities for enhanced security." },
                  { label: "Test Start And End Alerts", description: "Never miss a test session initiation or conclusion." },
                  { label: "Automated Attendance Report Generation", description: "Get notified when attendance tracking is complete." },
                  { label: "Cheating Detection Alerts", description: "Instantly catch suspicious activities during the exam." },
                  { label: "Result Generation Alerts", description: "Receive notifications when results are processed and ready." },
                  { label: "System Update And Maintenance Alerts", description: "Stay informed on essential system upgrades and maintenance." },
                ].map((alert, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Paper sx={{ padding: 2, borderRadius: 2, backgroundColor: "background.paper" }}>
                      <FormControlLabel control={<Switch />} label={alert.label} />
                      <Typography variant="body2" color="text.secondary">
                        {alert.description}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {activeTab === 3 && (
            <Box>
              <Typography variant="h6" fontWeight="600" mb={3} color="text.primary">
                Account Settings
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Placeholder content for Account Settings.
              </Typography>
            </Box>
          )}
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default ProfilePage;
