// ==========================================
//
// Description: Login Service
//
// File: loginService.js
// Author: Anthony Bañon
// Created: 2025-11-18
// Last Updated: 2025-11-18
// Changes: Add login service functions
// ==========================================

import { apiClient } from '../api';

export const authService = {
  // Login
  async login(username, password) {
    return await apiClient.post('/auth/login', { username, password });
  },

  // Validar token
  async validateToken(token) {
    return await apiClient.post('/auth/validate', { token });
  },

  // Cambiar contraseña
  async changePassword(oldPassword, newPassword) {
    return await apiClient.post('/auth/change-password', {
      oldPassword,
      newPassword,
    });
  },

  // Obtener perfil
  async getProfile() {
    return await apiClient.get('/auth/profile');
  },

  // Refresh token
  async refreshToken(refreshToken) {
    return await apiClient.post('/auth/refresh', { refreshToken });
  },

  // Logout
  async logout() {
    return await apiClient.post('/auth/logout');
  },
};
