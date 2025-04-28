import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";

const About = ({ mode = "light" }) => {
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
                src="https://via.placeholder.com/150x150" // Replace with your actual image URL
                alt="Hero Illustration"
                sx={{ width: "100%", maxWidth: 200, margin: "0 auto" }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h5" fontWeight="700" color="text.primary" mb={2}>
                Every Certification Tells A Story
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Write a new Chapter with Proctor AI
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* What We Do Section */}
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            borderRadius: 3,
            backgroundColor: "background.paper",
            marginBottom: 4,
          }}
        >
          <Typography variant="h6" fontWeight="700" color="text.primary" mb={2}>
            What We Do?
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            At Proctor AI, we believe in the limitless potential within each individual—the ability to learn,
            adapt, and continually improve. When we grow, we not only enhance our own capabilities but also make a
            meaningful impact on our professions, communities, and the lives we touch.
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Through our innovative Smart Entry Test Proctor system and global reach, we provide the tools necessary
            for institutions to conduct secure, high-stakes exams that certify and license professionals who protect
            and advance communities worldwide. We empower candidates with comprehensive preparation materials,
            including scenario-based labs and practice tests, and continuously innovate our proctoring technologies
            to drive progress across all industries—from healthcare to education, technology to transportation, and
            beyond.
          </Typography>
        </Paper>

        {/* Transforming the World Section */}
        <Typography
          variant="h6"
          fontWeight="700"
          color="text.primary"
          textAlign="center"
          mb={3}
        >
          Transforming The World, One Exam At A Time...
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { title: "Test Centers", icon: "🏫" },
            { title: "Employees", icon: "👨‍💼" },
            { title: "Exams", icon: "📝" },
            { title: "Happy Users", icon: "😊" },
            { title: "Online Proctoring System", icon: "🌐" },
            { title: "Languages", icon: "🗣️" },
          ].map((item, index) => (
            <Grid item xs={12} sm={4} key={index} textAlign="center">
              <Typography variant="h5" fontWeight="700" color="text.primary">
                {item.icon}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {item.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default About;
