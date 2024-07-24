import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
          setAuthenticated(false);
          setLoading(false);
          return;
        }

        // Verify token by sending a request to the backend
        await axios.get('http://localhost:8000/user/verify', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setAuthenticated(true);
      } catch (error) {
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <div>Loading...</div>;

  return authenticated ? children : <Navigate to="/login" state={{ from: location }} />;
};

export default ProtectedRoute;
