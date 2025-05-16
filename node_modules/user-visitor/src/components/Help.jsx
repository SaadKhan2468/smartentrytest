import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";

const Help = ({ mode = "light" }) => {
  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#90caf9" : "#1976d2",
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

  const faqs = [
    {
      question: "How can I register for courses?",
      answer:
        "Step-by-step guide on using the online registration feature, reducing paperwork and minimizing errors.",
    },
    {
      question: "How are admit cards generated?",
      answer:
        "Explanation of the automated admit card generation process, ensuring timely delivery to students upon successful registration.",
    },
    {
      question: "How does the entry test work?",
      answer:
        "Information on how entry tests are administered with dynamically generated, randomized question sets to ensure fairness.",
    },
    {
      question: "What security measures are in place during exams?",
      answer:
        "Detailed description of security features like tab restrictions, abnormal movement detection, and safeguards to prevent academic dishonesty.",
    },
  ];

  const troubleshooting = [
    {
      title: "What to do if you encounter issues",
      description:
        "Solutions for common technical issues like login problems, registration troubles, or exam difficulties.",
    },
    {
      title: "How to contact support",
      description:
        "Information on how to reach out for technical assistance or other queries related to system usage.",
    },
  ];

  const systemUsage = [
    {
      title: "Navigating the Platform",
      description:
        "Log in to your account and navigate the dashboard to access key features like fee status, exam schedules, and information dashboards, helping you stay informed and manage your academic progress.",
    },
    {
      title: "Post-Exam Processes",
      description:
        "Receive your exam results instantly in the 'Results' section. The post-exam analysis report offers insights into your performance, highlighting strengths and areas for improvement.",
    },
    {
      title: "Understanding Exam Security Features",
      description:
        "To ensure exam integrity, copying and pasting is prohibited, and eye movements are monitored. Multiple warnings will lead to escalating consequences, including possible disqualification.",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          padding: 4,
          backgroundColor: "background.default",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Top Section */}
        <Grid container spacing={3} sx={{ marginBottom: 6 }}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={1}
              sx={{
                padding: 3,
                border: "1px solid #ccc",
                borderRadius: "8px",
                textAlign: "left",
              }}
            >
              <Typography variant="h6" fontWeight="700" mb={1}>
                Got a Question?
              </Typography>
              <Typography
                variant="body2"
                fontWeight="400"
                color="text.secondary"
              >
                We’re here to help
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={1}
              sx={{
                padding: 3,
                border: "1px solid #ccc",
                borderRadius: "8px",
                textAlign: "left",
              }}
            >
              <Typography variant="h6" fontWeight="700" mb={1}>
                What Is The Smart Entry Test Proctor System?
              </Typography>
              <Typography
                variant="body2"
                fontWeight="400"
                color="text.secondary"
              >
                A robust platform designed to automate and streamline key
                academic processes, including course registration, exam
                administration, and result processing. This ensures enhanced
                efficiency, accuracy, and security across all academic
                operations.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* FAQ Section */}
        <Typography
          variant="h6"
          fontWeight="700"
          mb={2}
          sx={{ textAlign: "left" }}
        >
          Frequently Asked Questions
        </Typography>
        <Grid container spacing={3} mb={6}>
          {faqs.map((faq, index) => (
            <Grid item xs={12} key={index}>
              <Paper
                elevation={1}
                sx={{
                  padding: 3,
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  textAlign: "left",
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight="600"
                  mb={1}
                  sx={{ textAlign: "left" }}
                >
                  {faq.question}
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight="400"
                  color="text.secondary"
                >
                  {faq.answer}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Troubleshooting Section */}
        <Typography
          variant="h6"
          fontWeight="700"
          mb={2}
          sx={{ textAlign: "left" }}
        >
          Troubleshooting
        </Typography>
        <Grid container spacing={3} mb={6}>
          {troubleshooting.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={1}
                sx={{
                  padding: 3,
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  textAlign: "left",
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight="600"
                  mb={1}
                  sx={{ textAlign: "left" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight="400"
                  color="text.secondary"
                >
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* System Usage Section */}
        <Typography
          variant="h6"
          fontWeight="700"
          mb={2}
          sx={{ textAlign: "left" }}
        >
          System Usage
        </Typography>
        <Grid container spacing={3}>
          {systemUsage.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={1}
                sx={{
                  padding: 3,
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  textAlign: "left",
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight="600"
                  mb={1}
                  sx={{ textAlign: "left" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight="400"
                  color="text.secondary"
                >
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

export default Help;
