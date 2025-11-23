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
import { STORAGE_KEYS, ERROR_MESSAGES } from '../utils/constants';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN)
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem(STORAGE_KEYS.USER)) || null
  );
  const [role, setRole] = useState(localStorage.getItem('userRole') || null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!accessToken;

  // Save to localStorage when states change
  useEffect(() => {
    if (accessToken)
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
    else localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);

    if (refreshToken)
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
    else localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);

    if (user) localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    else localStorage.removeItem(STORAGE_KEYS.USER);

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
      const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
      if (!token) {
        setLoading(false);
        return;
      }

      const validation = await authService.validateToken(token);
      if (validation.valid) {
        await getProfile();
      } else {
        await handleTokenRefresh();
      }
    } catch (error) {
      logout();
    } finally {
      setLoading(false);
    }
  };

  const handleTokenRefresh = async () => {
    try {
      const currentRefreshToken = localStorage.getItem(
        STORAGE_KEYS.REFRESH_TOKEN
      );
      if (!currentRefreshToken) {
        throw new Error(ERROR_MESSAGES.UNAUTHORIZED);
      }

      const result = await authService.refreshToken(currentRefreshToken);
      if (result.data && result.data.accessToken) {
        setAccessToken(result.data.accessToken);

        if (result.data.refreshToken) {
          setRefreshToken(result.data.refreshToken);
        }
        return true;
      }
      return false;
    } catch (error) {
      logout();
      return false;
    }
  };

  const getProfile = async () => {
    try {
      const profile = await authService.getProfile();
      if (profile.data) {
        setUser(profile.data.user || profile.data);
        setRole(profile.data.role || profile.data.user?.role);
      }
    } catch (error) {
      throw error;
    }
  };

  const login = async (username, password) => {
    try {
      setLoading(true);
      const result = await authService.login(username, password);

      if (result.data) {
        const { accessToken, refreshToken, user, role } = result.data;
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        setUser(user);
        setRole(role);
        return { success: true, data: result.data };
      }
      return { success: false, error: ERROR_MESSAGES.INVALID_CREDENTIALS };
    } catch (error) {
      return {
        success: false,
        error: error.message || ERROR_MESSAGES.INVALID_CREDENTIALS,
      };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      if (accessToken) {
        await authService.logout();
      }
    } catch (error) {
      // Silent fail on logout error
    } finally {
      setAccessToken(null);
      setRefreshToken(null);
      setUser(null);
      setRole(null);
      localStorage.clear();
    }
  };

  const value = {
    accessToken,
    refreshToken,
    user,
    role,
    isAuthenticated,
    loading,
    login,
    logout,
    refreshAuthToken: handleTokenRefresh,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
