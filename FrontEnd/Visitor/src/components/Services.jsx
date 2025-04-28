import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Paper,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";

const ServicesPage = ({ mode = "light" }) => {
  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#90caf9" : "#1976d2",
      },
      secondary: {
        main: mode === "dark" ? "#f48fb1" : "#d32f2f",
      },
      background: {
        default: mode === "dark" ? "#121212" : "#f9f9f9",
        paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#000000",
        secondary: mode === "dark" ? "#aaaaaa" : "#666666",
      },
    },
    typography: {
      fontFamily: "Poppins, Arial, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ padding: 4, backgroundColor: "background.default", minHeight: "100vh" }}>
        {/* Hero Section */}
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            borderRadius: 3,
            textAlign: "center",
            backgroundColor: "background.paper",
            marginBottom: 4,
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src="https://via.placeholder.com/150x150" // Replace with your actual image
                alt="Hero Illustration"
                sx={{ width: "100%", maxWidth: 200, margin: "0 auto" }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography
                variant="h5"
                fontWeight="700"
                color="text.primary"
                textAlign="left"
                mb={2}
              >
                Get Ready To Ace It: Your Journey Starts With Our Practice Test!
              </Typography>
              <Button variant="contained" color="primary">
                Start Practice Test
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Buttons Section */}
        <Grid container spacing={3} mb={4}>
          {[
            { title: "Are you a real user?", button: "View" },
            { title: "Need Instructions", button: "View" },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Paper
                elevation={2}
                sx={{
                  padding: 3,
                  textAlign: "center",
                  borderRadius: 3,
                  backgroundColor: "background.paper",
                }}
              >
                <Typography variant="h6" fontWeight="500" color="text.primary" mb={2}>
                  {item.title}
                </Typography>
                <Button variant="outlined" color="primary">
                  {item.button}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Information Section */}
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            borderRadius: 3,
            backgroundColor: "background.paper",
            marginBottom: 4,
          }}
        >
          <Typography
            variant="h6"
            fontWeight="700"
            color="text.primary"
            textAlign="center"
            mb={2}
          >
            Make Sure That It’s the Right Option for You!
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="center"
            mb={3}
          >
            Once you’ve confirmed you can test online, be sure it’s the right choice for your
            circumstances and environment. For example, taking your exam with OnVUE means you’ll
            need to:
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {[
              { title: "Test your system", icon: "🖥️" },
              { title: "Find a distraction-free space", icon: "🛋️" },
              { title: "Show consent to monitoring", icon: "✅" },
              { title: "Observe Test", icon: "📚" },
            ].map((item, index) => (
              <Grid item xs={6} sm={3} key={index} textAlign="center">
                <Typography variant="h6" color="text.primary">
                  {item.icon}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Typography
            variant="body2"
            color="primary"
            sx={{ textAlign: "center", marginTop: 2, cursor: "pointer" }}
          >
            Still confused? View More
          </Typography>
        </Paper>

        {/* Ready to Go Online Section */}
        <Typography
          variant="h6"
          fontWeight="700"
          color="text.primary"
          textAlign="center"
          mb={3}
        >
          Ready To Go Online?
        </Typography>
        <Grid container spacing={3}>
          {[
            {
              title: "Watch Video Guides",
              description: "Get a preview of the check-in and testing experience",
            },
            {
              title: "Get the FAQs",
              description: "Check out some helpful info and tips",
            },
            {
              title: "Visit Online Testing Page",
              description: "Find your program’s rules for online testing",
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Paper
                elevation={2}
                sx={{
                  padding: 3,
                  borderRadius: 3,
                  backgroundColor: "background.paper",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" fontWeight="600" color="text.primary" mb={1}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default ServicesPage;
