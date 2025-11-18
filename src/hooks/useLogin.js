// hooks/useLogin.js
import { useState } from 'react';
import { loginService } from '../services/auth/loginService';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function executed by LoginPage
  const login = async (username, password) => {
    try {
      setLoading(true);
      setError(null);

      // Call service
      const resp = await loginService(username, password);

      // Save tokens (if backend returns them)
      if (resp.accessToken) {
        localStorage.setItem('accessToken', resp.accessToken);
      }
      if (resp.refreshToken) {
        localStorage.setItem('refreshToken', resp.refreshToken);
      }

      return resp; // Let page decide what to do (redirect, message, etc.)
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    loading,
    error,
  };
};
