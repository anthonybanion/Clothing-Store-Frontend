// ==========================================
//
// Description: Auth Context
//
// File: AuthContext.jsx
// Author: Anthony Bañon
// Created: 2025-11-18
// Last Updated: 2025-11-18
// ==========================================

import { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/auth/authService';
import { tokenInterceptor } from '../services/auth/tokenInterceptor';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('accessToken')
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem('refreshToken')
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );
  const [role, setRole] = useState(localStorage.getItem('userRole') || null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!accessToken;

  // Save to localStorage when states change
  useEffect(() => {
    if (accessToken) localStorage.setItem('accessToken', accessToken);
    else localStorage.removeItem('accessToken');

    if (refreshToken) localStorage.setItem('refreshToken', refreshToken);
    else localStorage.removeItem('refreshToken');

    if (user) localStorage.setItem('user', JSON.stringify(user));
    else localStorage.removeItem('user');

    if (role) localStorage.setItem('userRole', role);
    else localStorage.removeItem('userRole');
  }, [accessToken, refreshToken, user, role]);

  // Verify authentication on load and set up interceptor
  useEffect(() => {
    checkAuth();
    setupInterceptor();
  }, []);

  const setupInterceptor = () => {
    tokenInterceptor.setAuthFunctions({
      handleRefresh: handleTokenRefresh,
      logout: logout,
    });
  };

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      // If there is no token, we are not authenticated
      if (!token) {
        setLoading(false);
        return;
      }

      // Validate token with the backend
      const validation = await authService.validateToken(token);
      // If valid, get profile; if not, try to refresh
      if (validation.valid) {
        // Token is valid, get user profile
        await getProfile();
      } else {
        // Try to refresh the token
        await handleTokenRefresh();
      }
    } catch (error) {
      console.error('Error checking auth:', error);
      logout();
    } finally {
      setLoading(false);
    }
  };
  // Handle token refresh
  const handleTokenRefresh = async () => {
    try {
      // Get the refresh token from state or localStorage
      const currentRefreshToken = localStorage.getItem('refreshToken');
      if (!currentRefreshToken) {
        throw new Error('No refresh token available');
      }
      // Call the authService to refresh the token
      const result = await authService.refreshToken(currentRefreshToken);
      if (result.data && result.data.accessToken) {
        // Update access token in state and localStorage
        setAccessToken(result.data.accessToken);

        // Update refresh token if a new one is provided
        if (result.data.refreshToken) {
          setRefreshToken(result.data.refreshToken);
        }
        return true;
      }
      return false;
    } catch (error) {
      console.error('Token refresh failed:', error);
      logout();
      return false;
    }
  };
  // Get user profile
  const getProfile = async () => {
    try {
      // Call the authService to get the profile
      const profile = await authService.getProfile();

      if (profile.data) {
        // Update user and role state
        setUser(profile.data.user || profile.data);
        setRole(profile.data.role || profile.data.user?.role);
      }
    } catch (error) {
      console.error('Error getting profile:', error);
      throw error;
    }
  };
  // Login function
  const login = async (username, password) => {
    try {
      // Start loading
      setLoading(true);
      // Call the authService to login
      const result = await authService.login(username, password);
      // If login is successful, update states
      if (result.data) {
        const { accessToken, refreshToken, user, role } = result.data;
        // Update states and localStorage
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        setUser(user);
        setRole(role);
        // Return success
        return { success: true, data: result.data };
      }
      // Return failure
      return { success: false, error: 'Login failed' };
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: error.message || 'Login failed',
      };
    } finally {
      setLoading(false);
    }
  };
  // Logout function
  const logout = async () => {
    try {
      if (accessToken) {
        // Call the authService to logout
        await authService.logout();
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear all auth states and localStorage
      setAccessToken(null);
      setRefreshToken(null);
      setUser(null);
      setRole(null);
      localStorage.clear();
    }
  };

  const value = {
    // Estado
    accessToken,
    refreshToken,
    user,
    role,
    isAuthenticated,
    loading,

    // Acciones
    login,
    logout,
    refreshAuthToken: handleTokenRefresh,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
// Custom hook to use the AuthContext
export const useAuth = () => {
  // Get the context
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
