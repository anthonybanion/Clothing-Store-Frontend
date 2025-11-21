// ==========================================
//
// Description: Order Detail Service
//
// File: orderDetailService.js
// Author: Anthony Bañon
// Created: 2025-11-20
// Last Updated: 2025-11-20
// ==========================================

import { apiClient } from '../api';

export const orderDetailService = {
  // Get one order detail by ID
  async getOne(id) {
    return await apiClient.get(`/order-details/${id}`);
  },

  // Get all order details
  async getAll(filters = {}) {
    // Manage query parameters for filters
    const queryParams = new URLSearchParams();
    // Add filters if they exist
    if (filters.orderId) queryParams.append('orderId', filters.orderId);
    if (filters.productId) queryParams.append('productId', filters.productId);
    if (filters.minQuantity)
      queryParams.append('minQuantity', filters.minQuantity);
    if (filters.maxQuantity)
      queryParams.append('maxQuantity', filters.maxQuantity);
    if (filters.page) queryParams.append('page', filters.page);
    if (filters.limit) queryParams.append('limit', filters.limit);

    // Construct the final endpoint with query parameters
    const queryString = queryParams.toString();
    const endpoint = queryString
      ? `/order-details?${queryString}`
      : '/order-details';

    return await apiClient.get(endpoint);
  },

  // Get order details by order ID
  async getByOrder(orderId, filters = {}) {
    // Manage query parameters for pagination
    const queryParams = new URLSearchParams();
    if (filters.page) queryParams.append('page', filters.page);
    if (filters.limit) queryParams.append('limit', filters.limit);

    const queryString = queryParams.toString();
    const endpoint = queryString
      ? `/order-details/order/${orderId}?${queryString}`
      : `/order-details/order/${orderId}`;

    return await apiClient.get(endpoint);
  },

  // Get order details by product ID
  async getByProduct(productId, filters = {}) {
    // Manage query parameters for pagination
    const queryParams = new URLSearchParams();
    if (filters.page) queryParams.append('page', filters.page);
    if (filters.limit) queryParams.append('limit', filters.limit);

    const queryString = queryParams.toString();
    const endpoint = queryString
      ? `/order-details/product/${productId}?${queryString}`
      : `/order-details/product/${productId}`;

    return await apiClient.get(endpoint);
  },

  // Create a new order detail
  async create(data) {
    return await apiClient.post('/order-details', data);
  },

  // Create multiple order details
  async createMultiple(orderDetails) {
    return await apiClient.post('/order-details/bulk', {
      orderDetails: orderDetails,
    });
  },

  // Update order detail (full update)
  async update(id, data) {
    return await apiClient.put(`/order-details/${id}`, data);
  },

  // Update order detail (partial update)
  async updatePartial(id, data) {
    return await apiClient.patch(`/order-details/${id}`, data);
  },

  // Update order detail quantity
  async updateQuantity(id, quantity) {
    return await apiClient.patch(`/order-details/${id}/quantity`, {
      quantity: quantity,
    });
  },

  // Delete order detail
  async delete(id) {
    return await apiClient.delete(`/order-details/${id}`);
  },

  // Delete all order details for an order
  async deleteByOrder(orderId) {
    return await apiClient.delete(`/order-details/order/${orderId}`);
  },
};
