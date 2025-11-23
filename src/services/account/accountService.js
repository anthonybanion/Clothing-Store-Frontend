// ==========================================
//
// Description: Account Service
//
// File: accountService.js
// Author: Anthony Bañon
// Created: 2025-11-20
// Last Updated: 2025-11-20
// ==========================================

import { apiClient } from '../api';

export const accountService = {
  // Get one account by ID
  async getOne(id) {
    return await apiClient.get(`/accounts/${id}`);
  },

  // Get all accounts
  async getAll(filters = {}) {
    const queryParams = new URLSearchParams();

    // Add filters if they exist
    if (filters.username) queryParams.append('username', filters.username);
    if (filters.role) queryParams.append('role', filters.role);
    if (filters.is_active !== undefined)
      queryParams.append('is_active', filters.is_active);
    if (filters.sort) queryParams.append('sort', filters.sort);
    if (filters.page) queryParams.append('page', filters.page);
    if (filters.limit) queryParams.append('limit', filters.limit);

    const queryString = queryParams.toString();
    const endpoint = queryString ? `/accounts?${queryString}` : '/accounts';

    return await apiClient.get(endpoint);
  },

  // Create a new account
  async create(username, password, role, personId) {
    return await apiClient.post('/accounts', {
      username,
      password,
      role: Array.isArray(role) ? role : [role], // Ensure role is an array
      person: personId, // Reference to the person ID
    });
  },

  // Register a new public account
  async register(username, password, role, personId) {
    return await apiClient.post('/accounts/register', {
      username,
      password,
      role: Array.isArray(role) ? role : [role], // Ensure role is an array
      person: personId, // Reference to the person ID
    });
  },

  // Update account (full update)
  async update(id, data) {
    return await apiClient.put(`/accounts/${id}`, data);
  },

  // Update account (partial update)
  async updatePartial(id, data) {
    return await apiClient.patch(`/accounts/${id}`, data);
  },

  // Update account username
  async updateUsername(id, username) {
    return await apiClient.patch(`/accounts/${id}/username`, { username });
  },

  // Update account role
  async updateRole(id, role) {
    return await apiClient.patch(`/accounts/${id}/role`, { role });
  },

  // Reset account password
  async resetPassword(id, newPassword) {
    return await apiClient.post(`/accounts/${id}/reset-password`, {
      newPassword,
    });
  },

  // Update account status
  async updateStatus(id, isActive) {
    return await apiClient.patch(`/accounts/${id}/status`, {
      is_active: isActive,
    });
  },

  // Force logout (invalidate tokens)
  async forceLogout(id) {
    return await apiClient.post(`/accounts/${id}/force-logout`);
  },

  // Delete account
  async delete(id) {
    return await apiClient.delete(`/accounts/${id}`);
  },
};
