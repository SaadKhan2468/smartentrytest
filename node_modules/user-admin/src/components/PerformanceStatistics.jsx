import React from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    h1: {
      fontWeight: 700, // Reduced from 900
      fontSize: "2.5rem",
      textAlign: "left",
    },
    h2: {
      fontWeight: 500, // Reduced from 600
      fontSize: "1.5rem",
      textAlign: "left",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      textAlign: "left",
    },
    // Add h3 definition if needed, or rely on default/adjust usage
    h3: {
      fontWeight: 600, // Example: Define h3 weight
      fontSize: "1.25rem",
    }
  },
});

const cheatingData = [
  { name: "A", value: 10 },
  { name: "B", value: 20 },
  { name: "C", value: 15 },
  { name: "D", value: 25 },
  { name: "E", value: 18 },
  { name: "F", value: 22 },
];

const expectationsData = [
  { name: "1", value: 50 },
  { name: "2", value: 80 },
  { name: "3", value: 45 },
  { name: "4", value: 90 },
  { name: "5", value: 65 },
];

const PerformanceStatistics = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" style={{ padding: "30px", background: "#f8f8f8", borderRadius: "12px" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h1">Performance Statistics</Typography>
          <Button variant="contained" style={{ backgroundColor: "black", color: "white" }}>Report</Button>
        </Box>
        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} style={{ padding: "30px", borderRadius: "12px", height: "100%" }}>
              <Typography variant="h2">Students</Typography>
              <Typography variant="h3" fontWeight={900}>3456</Typography>
              <Typography variant="h2" style={{ marginTop: "20px" }}>Teachers</Typography>
              <Typography variant="h3" fontWeight={900}>05</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} style={{ padding: "30px", borderRadius: "12px", height: "100%" }}>
              <Typography variant="h2">Difficulty Level</Typography>
              <Box mt={2}>
                <Typography>Hard</Typography>
                <Box bgcolor="black" height={6} width={100} borderRadius={4} />
                <Typography>Normal</Typography>
                <Box bgcolor="black" height={6} width={150} mt={1} borderRadius={4} />
                <Typography>Easy</Typography>
                <Box bgcolor="black" height={6} width={50} mt={1} borderRadius={4} />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} style={{ padding: "30px", borderRadius: "12px", height: "100%" }}>
              <Typography variant="h2">Top Performance</Typography>
              <Box mt={2}>
                <Typography>Muhammad Ali</Typography>
                <Typography>Sanam Fatima</Typography>
                <Typography>Rafey Shahan</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Box mt={6}>
          <Paper elevation={3} style={{ padding: "30px", borderRadius: "12px" }}>
            <Typography variant="h2">Cheating Incidents</Typography>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={cheatingData}>
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip />
                <Bar dataKey="value" fill="maroon" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Box>
        <Box mt={6}>
          <Grid container spacing={4} alignItems="stretch">
            <Grid item xs={12} md={8}>
              <Paper elevation={3} style={{ padding: "30px", borderRadius: "12px", height: "100%" }}>
                <Typography variant="h2">Overview</Typography>
                <Grid container spacing={2} mt={2}>
                  <Grid item xs={6}><Typography>Average Time Taken</Typography><Typography fontWeight={700}>165 min</Typography></Grid>
                  <Grid item xs={6}><Typography>Lowest Score</Typography><Typography fontWeight={700}>122 / 400</Typography></Grid>
                  <Grid item xs={6}><Typography>Average Rating</Typography><Typography fontWeight={700}>7 / 10</Typography></Grid>
                  <Grid item xs={6}><Typography>Cheating Behaviours</Typography><Typography fontWeight={700}>19</Typography></Grid>
                  <Grid item xs={6}><Typography>Average Scoring</Typography><Typography fontWeight={700}>264 / 400</Typography></Grid>
                  <Grid item xs={6}>
                    <Typography>Overall Experience</Typography>
                    <Button variant="contained" style={{ backgroundColor: "black", color: "white" }}>Feedback</Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} style={{ padding: "30px", borderRadius: "12px", height: "100%" }}>
                <Typography variant="h2">Expectations</Typography>
                <ResponsiveContainer width="100%" height={150}>
                  <LineChart data={expectationsData}>
                    <XAxis dataKey="name" hide />
                    <YAxis hide />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="maroon" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default PerformanceStatistics;
