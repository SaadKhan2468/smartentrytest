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
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const HomePage = ({ mode = "light" }) => {
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
            borderRadius: 2,
            textAlign: "center",
            backgroundColor: "background.paper",
            marginBottom: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ textAlign: "left", maxWidth: "50%" }}>
            <Typography variant="h5" fontWeight="600" color="text.primary" mb={2}>
              Get Ready to Ace It: Your Journey Starts with Our Practice Test!
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              Empower your institution with seamless registration, secure exams, and real-time
              results—all in one platform.
            </Typography>
            <Button variant="contained" color="primary">
              Start Practice Test
            </Button>
          </Box>
          <Box
            component="img"
            src="https://v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1/u/a43967b2/65298572-0-banner.jpg" // Replace with the actual image
            alt="Practice Test"
            sx={{ maxWidth: "40%", width: "100%", marginLeft: "auto" }}
          />
        </Paper>

        {/* Statistics Section */}
        <Grid container spacing={2} mb={4}>
          {[
            { title: "Satisfied User", count: "89,935", percentage: "+1.01% this week" },
            { title: "Test", count: "89,935", percentage: "+1.01% this week" },
            { title: "Efficient Proctoring", count: "89,935", percentage: "+1.01% this week" },
            { title: "Mechanisms", count: "89,935", percentage: "+1.01% this week" },
          ].map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                elevation={3}
                sx={{
                  padding: 2,
                  textAlign: "center",
                  backgroundColor: "background.paper",
                  borderRadius: 2,
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="700" color="text.primary">
                    {stat.count}
                  </Typography>
                  <Typography variant="body2" fontWeight="500" color="text.secondary" mb={1}>
                    {stat.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="success.main"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <ArrowUpwardIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                    {stat.percentage}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call-to-Action Section */}
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            borderRadius: 2,
            textAlign: "center",
            backgroundColor: "background.paper",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box
            component="img"
            src="https://v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1/u/a43967b2/65298572-0-banner.jpg" // Replace with the actual image
            alt="System Demo"
            sx={{ maxWidth: "40%", width: "100%", marginRight: "auto" }}
          />
          <Box sx={{ textAlign: "left", maxWidth: "50%" }}>
            <Typography variant="h5" fontWeight="600" color="text.primary" mb={2}>
              Get Ready to Ace It: Your Journey Starts with Our Practice Test!
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              Empower your institution with seamless registration, secure exams, and real-time
              results—all in one platform.
            </Typography>
            <Button variant="outlined" color="primary">
              View System Demo
            </Button>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
