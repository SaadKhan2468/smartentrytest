import React from 'react';
import { Box, Typography, Button, Card, CardContent, Switch } from '@mui/material';

const SecurityPolicyPage = () => {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: '#ffffff', // Explicit white background for visibility
        fontFamily: 'Poppins, Arial, sans-serif',
        minHeight: '100vh', // Full viewport height
        color: '#000', // Default text color for visibility
      }}
    >
      {/* Page Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography
          variant="h5"
          fontWeight="900"
          sx={{
            textAlign: 'start',
            color: '#000', // Explicit text color
          }}
        >
          System Security & Policy
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
          Update Policy
        </Button>
      </Box>

      {/* Policy Description */}
      <Card
        elevation={3}
        sx={{
          borderRadius: '12px',
          marginBottom: 4,
          backgroundColor: '#f9f9f9', // Light background for card
        }}
      >
        <CardContent>
          <Typography
            variant="body1"
            fontWeight="500"
            sx={{
              textAlign: 'start',
              color: '#000',
              lineHeight: 1.6,
            }}
          >
            The System Policy screen outlines the essential rules and guidelines that govern the
            operation and usage of the Smart Entry Test Proctor system. These policies are designed
            to ensure the system’s security, integrity, and compliance with legal and regulatory
            standards. They provide a framework for managing user access, protecting sensitive data,
            maintaining the integrity of the examination process, and ensuring overall system
            reliability.
          </Typography>
        </CardContent>
      </Card>

      {/* Settings Section */}
      <Box display="flex" flexDirection="column" gap={3}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="body1"
            fontWeight="500"
            sx={{
              textAlign: 'start',
              color: '#000',
            }}
          >
            Backup
          </Typography>
          <Switch
            sx={{
              '& .MuiSwitch-thumb': { backgroundColor: '#000' },
              '& .MuiSwitch-track': { backgroundColor: '#ccc' },
            }}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="body1"
            fontWeight="500"
            sx={{
              textAlign: 'start',
              color: '#000',
            }}
          >
            Reporting Issues
          </Typography>
          <Switch
            sx={{
              '& .MuiSwitch-thumb': { backgroundColor: '#000' },
              '& .MuiSwitch-track': { backgroundColor: '#ccc' },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SecurityPolicyPage;