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
  async getOneAccount(accountId) {
    return await apiClient.get(`/accounts/${accountId}`);
  },

  // Get all accounts
  async getAllAccounts() {
    return await apiClient.get('/accounts');
  },

  // Create a new account
  async createOneAccount(accountData) {
    return await apiClient.post('/accounts', accountData);
  },

  // Update account (full update)
  async updateAccount(accountId, accountData) {
    return await apiClient.put(`/accounts/${accountId}`, accountData);
  },

  // Update account username
  async updateAccountUsername(accountId, username) {
    return await apiClient.put(`/accounts/${accountId}/username`, { username });
  },

  // Update account role
  async updateAccountRole(accountId, role) {
    return await apiClient.put(`/accounts/${accountId}/role`, { role });
  },

  // Reset account password
  async resetAccountPassword(accountId, newPassword) {
    return await apiClient.post(`/accounts/${accountId}/reset-password`, {
      newPassword,
    });
  },

  // Update account status
  async updateAccountStatus(accountId, isActive) {
    return await apiClient.patch(`/accounts/${accountId}/status`, {
      is_active: isActive,
    });
  },

  // Force logout (invalidate tokens)
  async forceLogout(accountId) {
    return await apiClient.post(`/accounts/${accountId}/force-logout`);
  },

  // Delete account
  async deleteAccount(accountId) {
    return await apiClient.delete(`/accounts/${accountId}`);
  },
};
