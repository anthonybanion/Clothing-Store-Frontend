// ==========================================
//
// Description: Order Service
//
// File: orderService.js
// Author: Anthony Bañon
// Created: 2025-11-20
// Last Updated: 2025-11-20
// ==========================================

import { apiClient } from '../api';

export const orderService = {
  // Get one order by ID
  async getOne(id) {
    return await apiClient.get(`/orders/${id}`);
  },

  // Get all orders
  async getAll(filters = {}) {
    // Manage query parameters for filters
    const queryParams = new URLSearchParams();
    // Add filters if they exist
    if (filters.status) queryParams.append('status', filters.status);
    if (filters.dateFrom) queryParams.append('dateFrom', filters.dateFrom);
    if (filters.dateTo) queryParams.append('dateTo', filters.dateTo);
    if (filters.page) queryParams.append('page', filters.page);
    if (filters.limit) queryParams.append('limit', filters.limit);

    // Construct the final endpoint with query parameters
    const queryString = queryParams.toString();
    const endpoint = queryString ? `/orders?${queryString}` : '/orders';

    return await apiClient.get(endpoint);
  },

  // Get my orders (current user)
  async getMyOrders(filters = {}) {
    // Manage query parameters for filters
    const queryParams = new URLSearchParams();
    // Add pagination filters if they exist
    if (filters.page) queryParams.append('page', filters.page);
    if (filters.limit) queryParams.append('limit', filters.limit);

    const queryString = queryParams.toString();
    const endpoint = queryString
      ? `/orders/my-orders?${queryString}`
      : '/orders/my-orders';

    return await apiClient.get(endpoint);
  },

  // Create a new order
  async create(data) {
    return await apiClient.post('/orders', data);
  },

  // Update order (full update)
  async update(id, data) {
    return await apiClient.put(`/orders/${id}`, data);
  },

  // Update order (partial update)
  async updatePartial(id, data) {
    return await apiClient.patch(`/orders/${id}`, data);
  },

  // Update order status
  async updateStatus(id, status) {
    return await apiClient.patch(`/orders/${id}/status`, {
      status: status,
    });
  },

  // Delete order
  async delete(id) {
    return await apiClient.delete(`/orders/${id}`);
  },
};
