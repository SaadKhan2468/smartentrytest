// App.jsx
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayoutBasic from './components/Dashboard';
import Login from './components/login';
import './App.css';
import TestDashboard from './components/TestDashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('authToken');
      console.log('App: Checking token on mount:', !!token);
      if (!token) {
        console.log('App: No token found, setting isAuthenticated to false');
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      try {
        console.log('App: Verifying token with server');
        const response = await fetch('http://localhost:5000/api/verify-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        console.log('App: Token verification result:', data);
        if (data.success) {
          console.log('App: Valid token, setting isAuthenticated to true');
          setIsAuthenticated(true);
        } else {
          console.log('App: Invalid token, clearing storage');
          localStorage.removeItem('authToken');
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('App: Token verification error:', error);
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
        console.log('App: Authentication check complete, isAuthenticated:', isAuthenticated);
      }
    };

    checkAuth();
  }, []);

  const handleLogin = () => {
    console.log('App: Login successful, setting isAuthenticated to true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    console.log('App: Logging out, clearing token and setting isAuthenticated to false');
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  if (isLoading) {
    console.log('App: Loading authentication state');
    return <div>Loading...</div>;
  }

  console.log('App: Rendering routes, isAuthenticated:', isAuthenticated);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/admin-dashboard" replace />
          ) : (
            <Login onLoginSuccess={handleLogin} />
          )
        }
      />
      <Route
        path="/admin-dashboard/*"
        element={
          isAuthenticated ? (
            <TestDashboard onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;