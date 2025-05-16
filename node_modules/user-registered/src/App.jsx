import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import Dashboard from './components/Dashboard';

import AOS from "aos";
import "aos/dist/aos.css";
import Home from './components/pages/Home';
import DashboardPage from './components/pages/DashboardPage';
import NewsAndUpdatePage from './components/pages/NewsAndUpdatePage';
import HelpPage from './components/pages/HelpPage';
import TestsPage from './components/pages/TestsPage';
import ProfilePage from './components/pages/ProfilePage';
import NewsPageMain from './components/pages/NewsPageMain';
import HelpPageMain from './components/pages/HelpPageMain';
import ServicesPage from './components/pages/ServicesPage';
import ViewInstructionPage from './components/pages/ViewInstructionPage';
import PracticeTest from './components/pages/PracticeTest';
import ChatBox from './components/pages/ChatBox';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import ContactUs from './components/pages/ContactUs';
import SettingsPage from './components/pages/SettingsPage';
import Login from '../../login';

function App() {
  const [isAOSActive, setIsAOSActive] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Authentication check
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const isValidToken = !!token; // Add proper token validation in real app
    
    setIsAuthenticated(isValidToken);
  
    if (!isValidToken && location.pathname !== '/login') {
      navigate('/login');
    }
  }, [navigate, location.pathname]);

  // Screen size check for AOS
  useEffect(() => {
    const checkScreenSize = () => {
      setIsAOSActive(window.innerWidth > 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Initialize AOS
  useEffect(() => {
    if (isAOSActive) {
      AOS.init({ duration: 700, easing: "ease-out-cubic" });
    }
  }, [isAOSActive]);

  return (
    <Routes>
      {/* Public route - Login */}
      <Route path="/login" element={<Login />} />

      {/* Protected routes - Redirect to login if not authenticated */}
      <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />}  />
      <Route 
        path="/dashboard" 
        element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" replace />} 
      />
      <Route path="/newspage" element={isAuthenticated ? <NewsAndUpdatePage /> : <Navigate to="/login" replace />} />
      <Route path="/helppage" element={isAuthenticated ? <HelpPage /> : <Navigate to="/login" replace />} />
      <Route path="/testpage" element={isAuthenticated ? <TestsPage /> : <Navigate to="/login" replace />} />
      <Route path="/profilepage" element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" replace />} />
      <Route path="/newspagemain" element={isAuthenticated ? <NewsPageMain /> : <Navigate to="/login" replace />} />
      <Route path="/helppagemain" element={isAuthenticated ? <HelpPageMain /> : <Navigate to="/login" replace />} />
      <Route path="/servicepage" element={isAuthenticated ? <ServicesPage /> : <Navigate to="/login" replace />} />
      <Route path="/viewinstructionpage" element={isAuthenticated ? <ViewInstructionPage /> : <Navigate to="/login" replace />} />
      <Route path="/practicetest" element={isAuthenticated ? <PracticeTest /> : <Navigate to="/login" replace />} />
      <Route path="/chatpage" element={isAuthenticated ? <ChatBox /> : <Navigate to="/login" replace />} />
      <Route path="/PrivacyPolicy" element={isAuthenticated ? <PrivacyPolicy /> : <Navigate to="/login" replace />} />
      <Route path="/ContactUs" element={isAuthenticated ? <ContactUs /> : <Navigate to="/login" replace />} />
      <Route path="/settings" element={isAuthenticated ? <SettingsPage /> : <Navigate to="/login" replace />} />
      // Add this as the last route:
<Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;