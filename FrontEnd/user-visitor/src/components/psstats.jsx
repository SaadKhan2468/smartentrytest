import React from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  Paper,
  Button,
  Divider,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    h1: {
      fontWeight: 900,
      textAlign: "left",
    },
    h2: {
      fontWeight: 500,
      textAlign: "left",
    },
    body1: {
      fontWeight: 400,
    },
  },
});

const PerformanceStatistics = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" style={{ padding: "20px" }}>
        <Typography variant="h1" gutterBottom>
          Performance Statistics
        </Typography>

        <Grid container spacing={3}>
          {/* Students and Teachers Section */}
          <Grid item xs={12} sm={4}>
            <Paper style={{ padding: "20px" }}>
              <Typography variant="h2">Students</Typography>
              <Typography variant="h3" fontWeight={900}>
                3456
              </Typography>
              <Typography variant="h2" style={{ marginTop: "20px" }}>
                Teachers
              </Typography>
              <Typography variant="h3" fontWeight={900}>
                05
              </Typography>
            </Paper>
          </Grid>

          {/* Difficulty Level Section */}
          <Grid item xs={12} sm={4}>
            <Paper style={{ padding: "20px" }}>
              <Typography variant="h2">Difficulty Level</Typography>
              <Box mt={2}>
                <Typography>Hard</Typography>
                <Box bgcolor="black" height={8} width={100} />
                <Typography>Normal</Typography>
                <Box bgcolor="black" height={8} width={70} mt={1} />
                <Typography>Easy</Typography>
                <Box bgcolor="black" height={8} width={40} mt={1} />
              </Box>
            </Paper>
          </Grid>

          {/* Top Performance Section */}
          <Grid item xs={12} sm={4}>
            <Paper style={{ padding: "20px" }}>
              <Typography variant="h2">Top Performance</Typography>
              <Box mt={2}>
                <Typography>Muhammad Ali</Typography>
                <Typography>Sanam Fatima</Typography>
                <Typography>Rafey Shahan</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Cheating Incidents Section */}
        <Box mt={4}>
          <Paper style={{ padding: "20px" }}>
            <Typography variant="h2">Cheating Incidents</Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={4}>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  <li>Watching here and there</li>
                  <li>Eating or Drinking</li>
                  <li>Gadget Detection</li>
                  <li>Finger Movement</li>
                  <li>Eye Gaze Detection</li>
                </ul>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box height={200} bgcolor="#D32F2F"></Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        {/* Overview Section */}
        <Box mt={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Paper style={{ padding: "20px" }}>
                <Typography variant="h2">Overview</Typography>
                <Grid container spacing={2} mt={2}>
                  <Grid item xs={6}>
                    <Typography>Average Time Taken</Typography>
                    <Typography>165 min</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Lowest Score</Typography>
                    <Typography>122 / 400</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Average Rating</Typography>
                    <Typography>7 / 10</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Cheating Behaviours</Typography>
                    <Typography>19</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Average Scoring</Typography>
                    <Typography>264 / 400</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Overall Experience</Typography>
                    <Button variant="contained" color="primary">
                      Feedback
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* Expectations Section */}
            <Grid item xs={12} md={4}>
              <Paper style={{ padding: "20px" }}>
                <Typography variant="h2">Expectations</Typography>
                <Box height={200} bgcolor="#D32F2F" mt={2}></Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default PerformanceStatistics;
