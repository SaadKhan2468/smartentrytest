import React from 'react';
import { Box, Typography, Grid, Button, Card, CardContent, useTheme } from '@mui/material';
import { Line, Bar } from 'react-chartjs-2';

const UserManagementPage = () => {
  const theme = useTheme(); // Use the website's current theme

  // Sample data for charts
  const lineChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'New Users',
        data: [5, 10, 8, 12, 15, 10, 14],
        borderColor: theme.palette.text.primary, // Adapt line color to current theme
        borderWidth: 2,
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const barChartData = {
    labels: ['Users', 'Tests', 'Login', 'Logouts', 'Services', 'Files', 'Results'],
    datasets: [
      {
        label: 'Users Activity',
        data: [10, 15, 20, 25, 20, 18, 22],
        backgroundColor: theme.palette.text.primary, // Adapt bar color to current theme
      },
    ],
  };

  return (
    <Box
      sx={{
        padding: 4,
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default, // Use current theme's background
        color: theme.palette.text.primary, // Use current theme's text color
      }}
    >
      {/* Header Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h5" fontWeight="900">
          User Management
        </Typography>
        <Button
          variant="contained"
          sx={{
            fontWeight: 500,
            backgroundColor: theme.palette.text.primary, // Use primary text color for the button
            color: theme.palette.background.default, // Use background color for text
            borderRadius: '8px',
            padding: '8px 16px',
            '&:hover': {
              backgroundColor: theme.palette.text.secondary, // Slightly lighter color on hover
            },
          }}
        >
          Add User Account
        </Button>
      </Box>

      {/* Top Section: Charts */}
      <Grid container spacing={3} mb={4}>
        {['New Users in last 30 days', 'Past Users', 'Regular Users'].map((title, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              elevation={3}
              sx={{
                backgroundColor: theme.palette.background.paper, // Adapt card background to theme
                color: theme.palette.text.primary,
                borderRadius: '12px',
                padding: 2,
              }}
            >
              <CardContent>
                <Typography variant="body1" fontWeight="500" sx={{ marginBottom: 2 }}>
                  {title}
                </Typography>
                <Box sx={{ height: '150px' }}>
                  <Line
                    data={lineChartData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: { legend: { display: false } },
                    }}
                  />
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    marginTop: 2,
                    fontWeight: 500,
                    backgroundColor: theme.palette.text.primary,
                    color: theme.palette.background.default,
                    borderRadius: '8px',
                    '&:hover': { backgroundColor: theme.palette.text.secondary },
                  }}
                >
                  View More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Middle Section: User Activity and Privacy Policy */}
      <Grid container spacing={3} mb={4}>
        {/* Users Activity */}
        <Grid item xs={12} md={8}>
          <Card
            elevation={3}
            sx={{
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              borderRadius: '12px',
              padding: 2,
            }}
          >
            <CardContent>
              <Typography variant="body1" fontWeight="500" sx={{ marginBottom: 2 }}>
                Users Activity
              </Typography>
              <Box sx={{ height: '200px' }}>
                <Bar
                  data={barChartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        {/* Privacy Policy */}
        <Grid item xs={12} md={4}>
          <Card
            elevation={3}
            sx={{
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              borderRadius: '12px',
              padding: 2,
            }}
          >
            <CardContent>
              <Typography variant="body1" fontWeight="500" sx={{ marginBottom: 2 }}>
                Privacy Policy
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  fontWeight: 500,
                  backgroundColor: theme.palette.text.primary,
                  color: theme.palette.background.default,
                  borderRadius: '8px',
                  '&:hover': { backgroundColor: theme.palette.text.secondary },
                }}
              >
                Update Policy
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Bottom Section: Delete and Modify User Account */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card
            elevation={3}
            sx={{
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              borderRadius: '12px',
              padding: 2,
            }}
          >
            <CardContent>
              <Typography variant="body1" fontWeight="500" sx={{ marginBottom: 2 }}>
                Find anyone behaving suspicious?
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  fontWeight: 500,
                  backgroundColor: theme.palette.text.primary,
                  color: theme.palette.background.default,
                  borderRadius: '8px',
                  '&:hover': { backgroundColor: theme.palette.text.secondary },
                }}
              >
                Delete User Account
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            elevation={3}
            sx={{
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              borderRadius: '12px',
              padding: 2,
            }}
          >
            <CardContent>
              <Typography variant="body1" fontWeight="500" sx={{ marginBottom: 2 }}>
                Warn anyone?
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  fontWeight: 500,
                  backgroundColor: theme.palette.text.primary,
                  color: theme.palette.background.default,
                  borderRadius: '8px',
                  '&:hover': { backgroundColor: theme.palette.text.secondary },
                }}
              >
                Modify User Account
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserManagementPage;

