import React from 'react';
import { Box, Typography, Grid, Button, Card, CardContent, Switch } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

// Chart Data
const data = {
  labels: ['Copied', 'Not Copied', 'Process', 'Evidence not found'],
  datasets: [
    {
      data: [25, 30, 20, 25],
      backgroundColor: ['#FF6384', '#FFC0CB', '#FFCE56', '#D3D3D3'],
      hoverBackgroundColor: ['#FF6384', '#FFC0CB', '#FFCE56', '#D3D3D3'],
    },
  ],
};

const PlagiarismPage = () => {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: '#f9f9f9',
        fontFamily: 'Poppins, Arial, sans-serif',
        minHeight: '100vh',
      }}
    >
      {/* Page Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" fontWeight="900">
          Plagiarism
        </Typography>
        <Button
          variant="contained"
          sx={{
            fontWeight: 500,
            fontFamily: 'Poppins',
            backgroundColor: '#000',
            color: '#fff',
            borderRadius: '8px',
            padding: '8px 16px',
            '&:hover': { backgroundColor: '#333' },
          }}
        >
          Collect Feedback
        </Button>
      </Box>

      <Grid container spacing={3}>
        {/* Left Section: Plagiarism Score */}
        <Grid item xs={12} md={6}>
          <Card
            elevation={3}
            sx={{
              padding: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '350px',
              borderRadius: '12px',
            }}
          >
            <CardContent>
              <Typography variant="h6" fontWeight="900" gutterBottom>
                Plagiarism Score
              </Typography>
              <Box display="flex" alignItems="center" gap={2} mt={2}>
                <Typography
                  variant="h4"
                  fontWeight="900"
                  sx={{
                    border: '1px solid #000',
                    padding: '8px 16px',
                    borderRadius: '8px',
                  }}
                >
                  32%
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    fontWeight: 500,
                    fontFamily: 'Poppins',
                    backgroundColor: '#000',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#333' },
                  }}
                >
                  Review
                </Button>
              </Box>

              {/* Previous vs Now Section */}
              <Box mt={4} display="flex" alignItems="center" justifyContent="center" gap={4}>
                <Box textAlign="center">
                  <Typography variant="h5" fontWeight="900">
                    43%
                  </Typography>
                  <Typography variant="body2" fontWeight="500" color="textSecondary">
                    Previous
                  </Typography>
                </Box>
                <Typography variant="h4" fontWeight="900">
                  :
                </Typography>
                <Box textAlign="center">
                  <Typography variant="h5" fontWeight="900">
                    32%
                  </Typography>
                  <Typography variant="body2" fontWeight="500" color="textSecondary">
                    Now
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Section: Plagiarism Evidence */}
        <Grid item xs={12} md={6}>
          <Card
            elevation={3}
            sx={{
              padding: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '350px',
              borderRadius: '12px',
            }}
          >
            <CardContent>
              <Typography variant="h6" fontWeight="900" gutterBottom>
                Plagiarism Evidence
              </Typography>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '250px', // Explicit height for the chart
                }}
              >
                <Doughnut
                  data={data}
                  options={{
                    responsive: true,
                    maintainAspectRatio: true, // Ensures the chart maintains its aspect ratio
                    plugins: {
                      legend: {
                        position: 'bottom',
                        labels: {
                          font: {
                            family: 'Poppins',
                            weight: '500',
                          },
                        },
                      },
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Plagiarism Settings Section */}
      <Box mt={4}>
        <Typography variant="h6" fontWeight="900" gutterBottom>
          Plagiarism Settings
        </Typography>
        <Box display="flex" flexDirection="column" gap={3}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography fontWeight="500">Detect Sensitivity levels</Typography>
            <Switch />
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography fontWeight="500">Similarity Thresholds</Typography>
            <Switch />
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography fontWeight="500">Phrase and Sentence Matching</Typography>
            <Switch />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PlagiarismPage;
