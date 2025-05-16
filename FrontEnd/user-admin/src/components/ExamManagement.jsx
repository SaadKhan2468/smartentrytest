import React, { useMemo } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

// Dark and Light Theme Configuration with Poppins Font
const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#90caf9' : '#1976d2',
      },
      secondary: {
        main: mode === 'dark' ? '#f48fb1' : '#d32f2f',
      },
      background: {
        default: mode === 'dark' ? '#121212' : '#f9f9f9',
        paper: mode === 'dark' ? '#1e1e1e' : '#ffffff',
      },
      text: {
        primary: mode === 'dark' ? '#ffffff' : '#000000',
        secondary: mode === 'dark' ? '#aaaaaa' : '#666666',
      },
    },
    typography: {
      fontFamily: 'Poppins, Arial, sans-serif',
    },
  });

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Read',
      data: [200, 240, 270, 300, 320, 350, 380, 400, 380, 350, 300, 250],
      borderColor: '#D32F2F',
      backgroundColor: 'rgba(211, 47, 47, 0.1)',
      tension: 0.4,
    },
    {
      label: 'Unread',
      data: [150, 170, 200, 220, 260, 280, 320, 350, 330, 310, 280, 240],
      borderColor: '#512DA8',
      backgroundColor: 'rgba(81, 45, 168, 0.1)',
      tension: 0.4,
    },
  ],
};

const historyData = [
  { title: 'Mechanical Engineering', id: '0001234', date: '12 Aug 24', year: '2022', percentage: '89.654%' },
  { title: 'Mechanical Engineering', id: '0001235', date: '13 Aug 24', year: '2022', percentage: '90.123%' },
  { title: 'Mechanical Engineering', id: '0001236', date: '14 Aug 24', year: '2022', percentage: '88.765%' },
];

const ExamManagement = ({ mode = 'light' }) => {
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ padding: 3, backgroundColor: 'background.default', borderRadius: 2 }}>
        {/* Title Section */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h5" fontWeight="900" color="text.primary" sx={{ textAlign: 'left' }}>
            Manage Question Pools
          </Typography>
          <Button variant="contained" color="primary">
            Create
          </Button>
        </Box>

        {/* Cards and Chart Section */}
        <Grid container spacing={2}>
          {/* Left Section: Cards */}
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" gap={2}>
              {/* First Card */}
              <Card>
                <CardContent sx={{ textAlign: 'left', alignItems: 'flex-start' }}>
                  <Typography variant="h6" fontWeight="900" color="text.primary">
                    89,935
                  </Typography>
                  <Typography variant="body2" fontWeight="500" color="text.secondary">
                    Satisfied User
                  </Typography>
                  <Typography variant="caption" color="success.main">
                    +10.1% this week
                  </Typography>
                </CardContent>
              </Card>
              {/* Second Card */}
              <Card>
                <CardContent sx={{ textAlign: 'left', alignItems: 'flex-start' }}>
                  <Typography variant="h6" fontWeight="900" color="text.primary">
                    89,935
                  </Typography>
                  <Typography variant="body2" fontWeight="500" color="text.secondary">
                    Difficulty Level
                  </Typography>
                  <Typography variant="caption" color="error.main">
                    +10.1% this week
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          {/* Right Section: Chart */}
          <Grid item xs={12} md={8}>
            <Paper
              elevation={3}
              sx={{
                padding: 2,
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                backgroundColor: 'background.paper',
                overflow: 'hidden',
                height: '270px', // Reduced canvas height
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  textAlign: 'left',
                }}
              >
                <Typography variant="h6" fontWeight="900" mb={2} color="text.primary">
                  Now vs Previous Performances
                </Typography>
                <Line
                  data={data}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'top',
                        labels: { color: theme.palette.text.primary },
                      },
                    },
                    scales: {
                      x: {
                        ticks: { color: theme.palette.text.primary },
                        grid: { color: theme.palette.divider },
                      },
                      y: {
                        ticks: { color: theme.palette.text.primary },
                        grid: { color: theme.palette.divider },
                      },
                    },
                  }}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* History Table Section */}
        <Box mt={4}>
          <Typography
            variant="h6"
            fontWeight="900"
            mb={2}
            color="text.primary"
            sx={{ textAlign: 'left' }}
          >
            History Of Exams
          </Typography>
          <TableContainer component={Paper} elevation={3} sx={{ backgroundColor: 'background.paper' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: 'text.primary', fontWeight: '500' }}>Exam Title</TableCell>
                  <TableCell sx={{ color: 'text.primary', fontWeight: '500' }}>Exam ID</TableCell>
                  <TableCell sx={{ color: 'text.primary', fontWeight: '500' }}>Date</TableCell>
                  <TableCell sx={{ color: 'text.primary', fontWeight: '500' }}>Year</TableCell>
                  <TableCell sx={{ color: 'text.primary', fontWeight: '500' }}>Percentage</TableCell>
                  <TableCell sx={{ color: 'text.primary', fontWeight: '500' }}>Report</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {historyData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.year}</TableCell>
                    <TableCell>{row.percentage}</TableCell>
                    <TableCell>
                      <Button variant="outlined" size="small" color="primary">
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ExamManagement;
