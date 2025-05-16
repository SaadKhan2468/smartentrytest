import React from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  Paper,
  Button,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import StarIcon from "@mui/icons-material/Star";

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
    // Add other variants if needed
  },
});

const DetailedReports = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" style={{ padding: "30px", background: "#f8f8f8", borderRadius: "12px" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h1">Detailed Reports</Typography>
          <Button variant="contained" style={{ backgroundColor: "black", color: "white" }}>History</Button>
        </Box>
        
        {/* Exam Overview Section */}
        <Paper elevation={3} style={{ padding: "30px", borderRadius: "12px", marginBottom: "20px" }}>
          <Typography variant="h2">Exam Overview</Typography>
          <Grid container spacing={3} mt={2}>
            <Grid item xs={12} md={4}><TextField fullWidth label="Exam Name" variant="outlined" /></Grid>
            <Grid item xs={12} md={4}><TextField fullWidth label="Participants" variant="outlined" /></Grid>
            <Grid item xs={12} md={4}><TextField fullWidth label="Exam ID" variant="outlined" /></Grid>
            <Grid item xs={12} md={4}><TextField fullWidth label="Average Score" variant="outlined" /></Grid>
            <Grid item xs={12} md={4}><TextField fullWidth label="Date" type="date" variant="outlined" InputLabelProps={{ shrink: true }} /></Grid>
          </Grid>
        </Paper>
        
        {/* Participants Summary & Cheating Incidents */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: "30px", borderRadius: "12px" }}>
              <Typography variant="h2">Participants Summary</Typography>
              <TextField fullWidth label="Total participants" variant="outlined" style={{ marginTop: "10px" }} />
              <TextField fullWidth label="Pass : Fail" variant="outlined" style={{ marginTop: "10px" }} />
              <TextField fullWidth label="Top Performer" variant="outlined" style={{ marginTop: "10px" }} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: "30px", borderRadius: "12px" }}>
              <Typography variant="h2">Cheating Incidents</Typography>
              <TextField fullWidth label="No. of Cheating Incidents" variant="outlined" style={{ marginTop: "10px" }} />
              <TextField fullWidth label="Cheating Detection Details" variant="outlined" style={{ marginTop: "10px" }} />
              <Button fullWidth variant="contained" style={{ backgroundColor: "black", color: "white", marginTop: "15px" }}>View Details</Button>
            </Paper>
          </Grid>
        </Grid>
        
        {/* Participants Ratings & Download Report */}
        <Grid container spacing={4} mt={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: "30px", borderRadius: "12px" }}>
              <Typography variant="h2">Participants Ratings</Typography>
              <Box display="flex" alignItems="center" mt={2}>
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <StarIcon key={index} style={{ color: index < 3 ? "black" : "lightgray" }} />
                ))}
              </Box>
              <Button fullWidth variant="contained" style={{ backgroundColor: "black", color: "white", marginTop: "15px" }}>Collect Feedback</Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: "30px", borderRadius: "12px" }}>
              <Typography variant="h2">Download Report</Typography>
              <Select fullWidth variant="outlined" defaultValue="PDF" style={{ marginTop: "10px" }}>
                <MenuItem value="PDF">PDF</MenuItem>
                <MenuItem value="Excel">Excel</MenuItem>
              </Select>
              <Button fullWidth variant="contained" style={{ backgroundColor: "black", color: "white", marginTop: "15px" }}>Download</Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default DetailedReports;
