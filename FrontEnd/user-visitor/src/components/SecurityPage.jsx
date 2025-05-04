import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
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

const SecurityPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Theme Configuration
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

  const tabs = ["Lock Down Settings", "Alerts", "Anomaly Detection Settings"];

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
            Security Page
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
                Lock Down Settings
              </Typography>
              <Grid container spacing={2}>
                {[
                  {
                    label: "Browser Lockdown",
                    description: "Disable opening new tabs, windows, or browsers during the exam.",
                  },
                  {
                    label: "Clipboard Restriction",
                    description: "Disable copying, pasting, or using the clipboard during the exam.",
                  },
                  {
                    label: "Keyboard Shortcut Blocks",
                    description: "Disable common keyboard shortcuts like Alt+Tab, Ctrl+C, Ctrl+V, and Print Screen.",
                  },
                  {
                    label: "Session Timeout",
                    description: "Set time limits for inactivity, auto-locking the exam if no action is detected.",
                  },
                  {
                    label: "Exit Confirmation",
                    description:
                      "Require confirmation to exit the exam, with penalties for early submission or unauthorized attempts to leave.",
                  },
                  {
                    label: "Recording",
                    description:
                      "Disable any screen capture or recording tools to prevent capturing exam content.",
                  },
                  {
                    label: "Automated Warnings",
                    description:
                      "Issue automated warnings when suspicious activities (e.g., switching tabs or minimizing the window) are detected.",
                  },
                ].map((setting, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Paper sx={{ padding: 2, borderRadius: 2, backgroundColor: "background.paper" }}>
                      <FormControlLabel control={<Switch />} label={setting.label} />
                      <Typography variant="body2" color="text.secondary">
                        {setting.description}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {activeTab === 1 && (
            <Box>
              <Typography variant="h6" fontWeight="600" mb={3} color="text.primary">
                Alerts
              </Typography>
              <Grid container spacing={2}>
                {[
                  {
                    label: "Realtime Alerts",
                    description: "Alerts when an exam session starts or ends.",
                  },
                  {
                    label: "Maintenance Alerts",
                    description: "Alerts for unscheduled maintenance or urgent fixes or updates.",
                  },
                  {
                    label: "Security Alerts",
                    description:
                      "Notifications of detected security breaches or potential threats and suspicious login attempts.",
                  },
                  {
                    label: "Performance Metrics",
                    description:
                      "Notifications of negative or unusual feedback from participants.",
                  },
                  {
                    label: "Custom Alerts",
                    description: "Allow admins to set custom alerts based on specific criteria or events.",
                  },
                  {
                    label: "Notification Alerts",
                    description:
                      "Options to receive alerts via email, SMS, or in-app notifications.",
                  },
                  {
                    label: "User Alerts",
                    description:
                      "Notifications of user account problems, such as suspension or deactivation and registry of new users.",
                  },
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

          {activeTab === 2 && (
            <Box>
              <Typography variant="h6" fontWeight="600" mb={3} color="text.primary">
                Anomaly Detection Settings
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Placeholder content for anomaly detection settings and rules.
              </Typography>
              <Button variant="contained" color="primary">
                Update Settings
              </Button>
            </Box>
          )}
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default SecurityPage;
