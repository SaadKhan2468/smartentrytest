// Dashboard.jsx
import * as React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, useNavigate, Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import SecurityIcon from '@mui/icons-material/Security';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import ExamManagement from './ExamManagement';
import PlagiarismPage from './PlagiarismPage';
import ReportingPage from './ReportingPage';
import SecurityPolicy from './SecurityPolicyPage';
import UserManagementPage from './UserManagementPage';
import PerformanceStatistics from './PerformanceStatistics';
import ProfilePage from './ProfilePage';
import SecurityPage from './SecurityPage';
import DetailedReports from './DetailedReports';
import ProtectedRoute from './ProtectedRoute';

const NAVIGATION = [
  {
    segment: 'exammanagement',
    title: 'Exam Management',
    icon: <TipsAndUpdatesIcon />,
    children: [
      { segment: 'performancestatistics', title: 'Performance-Statistics' },
      { segment: 'detailedreports', title: 'Detailed-Reports' },
    ],
  },
  { segment: 'usermanagement', title: 'User Management', icon: <ContactEmergencyIcon /> },
  { segment: 'security', title: 'Security', icon: <SecurityIcon /> },
  { segment: 'reporting', title: 'Reporting', icon: <ShoppingCartIcon /> },
  { segment: 'plagiarism', title: 'Plagiarism', icon: <ShoppingCartIcon /> },
  { segment: 'systempolicy', title: 'System Policy', icon: <ShoppingCartIcon /> },
  { kind: 'divider' },
  { kind: 'header', title: 'Account Page' },
  { segment: 'profile', title: 'Profile', icon: <BarChartIcon /> },
];

const demoTheme = createTheme({
  cssVariables: { colorSchemeSelector: 'data-toolpad-color-scheme' },
  colorSchemes: { light: true, dark: false },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 600, lg: 1200, xl: 1536 },
  },
});

function DashboardLayoutBasic({ window, onLogout }) {
  const navigate = useNavigate();

  const router = React.useMemo(() => ({
    Link: RouterLink,
    navigate, // Provide the navigate function from useNavigate
  }), [navigate]);

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{ logo: '', title: 'PROCTOR AI' }}
      theme={demoTheme}
      window={demoWindow}
      router={router} // Pass the complete router object
    >
      <DashboardLayout>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Button
              variant="outlined"
              onClick={() => navigate('/admin-dashboard/usermanagement')}
              sx={{ mr: 1 }}
            >
              Go to User Management
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate('/admin-dashboard/exammanagement/performancestatistics')}
            >
              Go to Performance Statistics
            </Button>
          </Box>
          <Button variant="contained" color="primary" onClick={onLogout}>
            Logout
          </Button>
        </Box>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route index element={<ExamManagement />} />
            <Route path="exammanagement" element={<ExamManagement />} />
            <Route path="exammanagement/performancestatistics" element={<PerformanceStatistics />} />
            <Route path="exammanagement/detailedreports" element={<DetailedReports />} />
            <Route path="usermanagement" element={<UserManagementPage />} />
            <Route path="security" element={<SecurityPage />} />
            <Route path="reporting" element={<ReportingPage />} />
            <Route path="plagiarism" element={<PlagiarismPage />} />
            <Route path="systempolicy" element={<SecurityPolicy />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func,
  onLogout: PropTypes.func.isRequired,
};

export default DashboardLayoutBasic;