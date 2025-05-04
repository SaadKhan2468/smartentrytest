import React from 'react';
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
} from '@mui/material';

const rows = [
  { title: 'Pharm D', id: '0001234', date: '12 Aug 24', year: '2022', participants: '81.0987%', report: 'DOWNLOAD' },
  {
    title: 'Software Engineering',
    id: '0001264',
    date: '13 Aug 24',
    year: '2022',
    participants: '88.6740%',
    report: 'DOWNLOAD',
  },
  {
    title: 'Anesthesia',
    id: '0001294',
    date: '14 Aug 24',
    year: '2022',
    participants: '81.9987%',
    report: 'DOWNLOAD',
  },
  {
    title: 'Mechanical Engineering',
    id: '0001094',
    date: '15 Aug 24',
    year: '2022',
    participants: '91.0987%',
    report: 'DOWNLOAD',
  },
];

const ReportingPage = () => {
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
        <Typography variant="h5" fontWeight="900" sx={{ textAlign: 'start' }}>
          Reporting and Evidences
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
          Download Report
        </Button>
      </Box>

      {/* Overview Section */}
      <Box mb={3}>
        <Typography
          variant="body1"
          fontWeight="500"
          sx={{ textAlign: 'start', marginBottom: '12px' }}
        >
          Overview
        </Typography>
        <TableContainer component={Paper} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: '600', fontFamily: 'Poppins', textAlign: 'start' }}>
                  Exam Title
                </TableCell>
                <TableCell sx={{ fontWeight: '600', fontFamily: 'Poppins', textAlign: 'start' }}>
                  Exam ID
                </TableCell>
                <TableCell sx={{ fontWeight: '600', fontFamily: 'Poppins', textAlign: 'start' }}>
                  Date
                </TableCell>
                <TableCell sx={{ fontWeight: '600', fontFamily: 'Poppins', textAlign: 'start' }}>
                  Participants
                </TableCell>
                <TableCell sx={{ fontWeight: '600', fontFamily: 'Poppins', textAlign: 'start' }}>
                  Average Scores
                </TableCell>
                <TableCell sx={{ fontWeight: '600', fontFamily: 'Poppins', textAlign: 'start' }}>
                  Report
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ textAlign: 'start' }}>{row.title}</TableCell>
                  <TableCell sx={{ textAlign: 'start' }}>{row.id}</TableCell>
                  <TableCell sx={{ textAlign: 'start' }}>{row.date}</TableCell>
                  <TableCell sx={{ textAlign: 'start' }}>{row.year}</TableCell>
                  <TableCell sx={{ textAlign: 'start' }}>{row.participants}</TableCell>
                  <TableCell sx={{ textAlign: 'start' }}>
                    <Button
                      variant="text"
                      sx={{
                        fontWeight: '600',
                        fontFamily: 'Poppins',
                        textTransform: 'capitalize',
                        color: '#000',
                      }}
                    >
                      {row.report}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Button
            variant="contained"
            sx={{
              fontWeight: 500,
              fontFamily: 'Poppins',
              backgroundColor: '#000',
              color: '#fff',
              borderRadius: '8px',
              padding: '6px 12px',
              '&:hover': { backgroundColor: '#333' },
            }}
          >
            View More
          </Button>
        </Box>
      </Box>

      {/* Reporting Section */}
      <Card
        elevation={3}
        sx={{
          padding: 3,
          borderRadius: '12px',
        }}
      >
        <Typography
          variant="h6"
          fontWeight="900"
          sx={{
            textAlign: 'start',
          }}
        >
          Reporting
        </Typography>
        <Box mt={2} display="flex" alignItems="center" height="150px">
          <Box flex={1} sx={{ borderRight: '1px solid #ccc', textAlign: 'center' }}>
            <Typography variant="h6" fontWeight="900">
              |{' '}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default ReportingPage;
