import * as React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import SecurityIcon from '@mui/icons-material/Security';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import ExamManagement from '../components/ExamManagement'; // Updated import path
import PlagiarismPage from '../components/PlagiarismPage';
import ReportingPage from '../components/ReportingPage';
import SecurityPolicy from '../components/SecurityPolicyPage';
import UserManagementPage from '../components/UserManagementPage';
import PerformanceStatistics from '../components/psstats';
import ProfilePage from '../components/ProfilePage';
import SecurityPage from '../components/SecurityPage';

// Example Components for Other Pages
const SSHPage = () => <Typography>SSH Page</Typography>;


// Navigation structure
const NAVIGATION = [
  {
    segment: 'Exammanagement',
    title: 'Exam Management',
    icon: <TipsAndUpdatesIcon />,
    children: [
      {
        segment: 'PerformanceStatistics',
        title: 'Performance-Statistics',
        icon: <HorizontalRuleIcon />,
      },
      {
        segment: 'SSH',
        title: 'SSH',
        icon: <HorizontalRuleIcon />,
      },
    ],
  },
  {
    segment: 'usermanagement',
    title: 'User Management',
    icon: <ContactEmergencyIcon />,
  },
  {
    segment: 'Security',
    title: 'Security',
    icon: <SecurityIcon />,
  },
  {
    segment: 'Reporting',
    title: 'Reporting',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'Plagiarism',
    title: 'Plagiarism',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'securitypolicy',
    title: 'Security & Policy',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Account Page',
  },
  {
    segment: 'Profile',
    title: 'Profile',
    icon: <BarChartIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DashboardLayoutBasic(props) {
  const { window } = props;

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <Router>
      <AppProvider
        navigation={NAVIGATION}
        branding={{
          logo: '',
          title: 'PROCTOR AI',
        }}
        theme={demoTheme}
        window={demoWindow}
      >
        <DashboardLayout>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<ExamManagement />} />
            
            {/* Exam Management and its Subroutes */}
            <Route path="/" element={<ExamManagement />} />
            <Route path="/PerformanceStatistics" element={<PerformanceStatistics />} />
            <Route path="/exam-management/ssh" element={<SSHPage />} />
            
            {/* Other Routes */}
            <Route path="/usermanagement" element={<UserManagementPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/reporting" element={<ReportingPage />} />
            <Route path="/plagiarism" element={<PlagiarismPage />} />
            <Route path="/securitypolicy" element={<SecurityPolicy />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </DashboardLayout>
      </AppProvider>
    </Router>
  );
}

DashboardLayoutBasic.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default DashboardLayoutBasic;
