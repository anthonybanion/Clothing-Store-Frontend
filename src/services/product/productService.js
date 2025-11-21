// ==========================================
//
// Description: Product Service
//
// File: productService.js
// Author: Anthony Bañon
// Created: 2025-11-20
// Last Updated: 2025-11-20
// ==========================================

import { apiClient } from '../api';

export const productService = {
  // Get one product by ID
  async getOne(id) {
    return await apiClient.get(`/products/${id}`);
  },

  // Get all products
  async getAll(filters = {}) {
    // Manage query parameters for filters
    const queryParams = new URLSearchParams();
    // Add filters if they exist
    if (filters.name) queryParams.append('name', filters.name);
    if (filters.sku) queryParams.append('sku', filters.sku);
    if (filters.category) queryParams.append('category', filters.category);
    if (filters.is_active !== undefined)
      queryParams.append('is_active', filters.is_active);
    if (filters.sort) queryParams.append('sort', filters.sort);
    if (filters.page) queryParams.append('page', filters.page);
    if (filters.limit) queryParams.append('limit', filters.limit);

    // Construct the final endpoint with query parameters
    const queryString = queryParams.toString();
    const endpoint = queryString ? `/products?${queryString}` : '/products';

    return await apiClient.get(endpoint);
  },

  // Get products by category
  async getByCategory(categoryId) {
    return await apiClient.get(`/products/category/${categoryId}`);
  },

  // Create a new product
  async create(data) {
    // To handle images, use FormData instead of JSON
    if (data.image instanceof File) {
      const formData = new FormData();
      formData.append('sku', data.sku);
      formData.append('name', data.name);
      formData.append('price', data.price.toString());
      formData.append('category', data.category);
      formData.append('description', data.description || '');
      formData.append('stock', data.stock?.toString() || '0');
      formData.append('image', data.image);

      return await apiClient.request('/products', {
        method: 'POST',
        body: formData,
      });
    }

    return await apiClient.post('/products', data);
  },

  // Update product (full update)
  async update(id, data) {
    // Manage image for full update
    if (data.image instanceof File) {
      const formData = new FormData();
      formData.append('sku', data.sku);
      formData.append('name', data.name);
      formData.append('price', data.price.toString());
      formData.append('category', data.category);
      formData.append('description', data.description || '');
      formData.append('stock', data.stock?.toString() || '0');
      formData.append('image', data.image);

      return await apiClient.request(`/products/${id}`, {
        method: 'PUT',
        body: formData,
      });
    }

    return await apiClient.put(`/products/${id}`, data);
  },

  // Update product (partial update)
  async updatePartial(id, data) {
    // Manage image for partial update
    if (data.image instanceof File) {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key !== 'image') {
          const value = data[key];
          // Convert numbers to strings for FormData
          formData.append(
            key,
            typeof value === 'number' ? value.toString() : value
          );
        }
      });
      formData.append('image', data.image);

      return await apiClient.request(`/products/${id}`, {
        method: 'PATCH',
        body: formData,
      });
    }

    return await apiClient.patch(`/products/${id}`, data);
  },

  // Update product stock
  async updateStock(id, quantity) {
    return await apiClient.patch(`/products/${id}/stock`, {
      quantity: Number(quantity),
    });
  },

  // Update product status
  async updateStatus(id, isActive) {
    return await apiClient.patch(`/products/${id}/status`, {
      is_active: isActive,
    });
  },

  // Delete product image
  async deleteImage(id) {
    return await apiClient.delete(`/products/${id}/image`);
  },

  // Delete product
  async delete(id) {
    return await apiClient.delete(`/products/${id}`);
  },
};
