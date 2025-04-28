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
import Home from '../components/Home';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Help from '../components/Help';
import Login from '../components/login';
import Signup from '../components/Signup';


// Navigation structure
// Updated Navigation Structure
const NAVIGATION = [
  {
    segment: 'Home',
    title: 'Home',
    icon: <TipsAndUpdatesIcon />, // Replace with an appropriate home icon if needed
  },
  {
    segment: 'Services',
    title: 'Services',
    icon: <ContactEmergencyIcon />,
  },
  {
    segment: 'About',
    title: 'About Us',
    icon: <ShoppingCartIcon />, // Replace with a suitable icon for "About Us"
  },
  {
    segment: 'Testimonials',
    title: 'View Testimonial',
    icon: <BarChartIcon />, // Replace with an appropriate icon
  },
  {
    segment: 'Help',
    title: 'Help',
    icon: <SecurityIcon />, // Replace with a suitable icon for "Help"
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Account Page',
  },
  {
    segment: 'Login',
    title: 'Login',
    icon: <TipsAndUpdatesIcon />, // Replace with an appropriate login icon
  },
  {
    segment: 'Signup',
    title: 'Sign Up',
    icon: <BarChartIcon />, // Replace with an appropriate signup icon
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
                {/* New Sidebar Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/About" element={<About />} />
                <Route path="/Testimonials" element={<Testimonials />} />
                <Route path="/Help" element={<Help />} />
    
                {/* Account Page Routes */}
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
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
