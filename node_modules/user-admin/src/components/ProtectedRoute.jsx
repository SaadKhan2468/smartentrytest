// ProtectedRoute.jsx
import React, { useEffect, useState, useMemo } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const checkAuth = async () => {
      const token = localStorage.getItem('authToken');
      console.log('ProtectedRoute: Checking token:', !!token);
      if (!token) {
        if (isMounted) {
          console.log('ProtectedRoute: No token, redirecting to login');
          setIsAuthenticated(false);
        }
        return;
      }

      try {
        console.log('ProtectedRoute: Verifying token with server');
        const response = await fetch('http://localhost:5000/api/verify-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        console.log('ProtectedRoute: Token verification result:', data);
        if (isMounted) {
          setIsAuthenticated(data.success);
          if (!data.success) {
            console.log('ProtectedRoute: Invalid token, clearing storage');
            localStorage.removeItem('authToken');
            setError(data.message || 'Invalid token');
          }
        }
      } catch (error) {
        console.error('ProtectedRoute: Token verification error:', error);
        if (isMounted) {
          setIsAuthenticated(false);
          localStorage.removeItem('authToken');
          setError('Token verification failed');
        }
      }
    };

    checkAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  // Memoize the render result to prevent unnecessary re-renders
  const renderContent = useMemo(() => {
    if (isAuthenticated === null) {
      console.log('ProtectedRoute: Loading authentication state');
      return <div>Loading...</div>;
    }

    if (error) {
      console.log('ProtectedRoute: Error occurred:', error);
    }

    console.log('ProtectedRoute: Rendering, isAuthenticated:', isAuthenticated);
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
  }, [isAuthenticated, error]);

  return renderContent;
};

export default ProtectedRoute;