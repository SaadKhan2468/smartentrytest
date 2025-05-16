// TestDashboard.jsx
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import SecurityIcon from '@mui/icons-material/Security';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';
import ExamManagement from './ExamManagement';
import UserManagementPage from './UserManagementPage';
import PerformanceStatistics from './PerformanceStatistics';
import DetailedReports from './DetailedReports';
import SecurityPage from './SecurityPage';
import ReportingPage from './ReportingPage';
import PlagiarismPage from './PlagiarismPage';
import SecurityPolicy from './SecurityPolicyPage';
import ProfilePage from './ProfilePage';
import ProtectedRoute from './ProtectedRoute';
import UserReportsPage from './UserReportsPage';
import AssignmentIcon from '@mui/icons-material/Assignment';

const drawerWidth = 240;
const collapsedWidth = 60;

const TestDashboard = ({ onLogout }) => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const drawer = (
    <Box sx={{ width: open ? drawerWidth : collapsedWidth, overflowX: 'hidden' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1, backgroundColor: '#F5F5F5' }}>
        {open && (
          <Box sx={{ fontSize: '1.5rem', fontWeight: 'bold', ml: 2 }}>PROCTOR AI</Box>
        )}
        <IconButton onClick={handleDrawerToggle}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Box>
      <List>
        <ListItem button component={Link} to="/admin-dashboard/exammanagement">
          <ListItemIcon><TipsAndUpdatesIcon /></ListItemIcon>
          {open && <ListItemText primary="Exam Management" />}
        </ListItem>
        <ListItem button component={Link} to="/admin-dashboard/usermanagement">
          <ListItemIcon><ContactEmergencyIcon /></ListItemIcon>
          {open && <ListItemText primary="User Management" />}
        </ListItem>
        <ListItem button component={Link} to="/admin-dashboard/security">
          <ListItemIcon><SecurityIcon /></ListItemIcon>
          {open && <ListItemText primary="Security" />}
        </ListItem>
        <ListItem button component={Link} to="/admin-dashboard/reporting">
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          {open && <ListItemText primary="Reporting" />}
        </ListItem>
        <ListItem button component={Link} to="/admin-dashboard/plagiarism">
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          {open && <ListItemText primary="Plagiarism" />}
        </ListItem>
        <ListItem button component={Link} to="/admin-dashboard/systempolicy">
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          {open && <ListItemText primary="System Policy" />}
        </ListItem>
        <ListItem button component={Link} to="/admin-dashboard/profile">
          <ListItemIcon><BarChartIcon /></ListItemIcon>
          {open && <ListItemText primary="Profile" />}
        </ListItem>
        <ListItem button component={Link} to="/admin-dashboard/reports">
  <ListItemIcon><AssignmentIcon /></ListItemIcon>
  {open && <ListItemText primary="View Reports" />}
</ListItem>
        <ListItem button onClick={onLogout}>
          <ListItemIcon><LogoutIcon /></ListItemIcon>
          {open && <ListItemText primary="Logout" />}
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#fff' }}>
      <Drawer
        sx={{
          width: open ? drawerWidth : collapsedWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: open ? drawerWidth : collapsedWidth,
            boxSizing: 'border-box',
            backgroundColor: '#F5F5F5',
            transition: 'width 0.3s',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {drawer}
      </Drawer>
      <Box sx={{ flexGrow: 1, p: 2, backgroundColor: '#fff', width: '100%' }}>
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
            <Route path="reports" element={<UserReportsPage />} />
          </Route>
        </Routes>
      </Box>
    </Box>
  );
};

export default TestDashboard;