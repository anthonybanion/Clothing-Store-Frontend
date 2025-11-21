// ==========================================
//
// Description: Category Service
//
// File: categoryService.js
// Author: Anthony Bañon
// Created: 2025-11-20
// Last Updated: 2025-11-20
// ==========================================

// ==========================================
//
// Description: Category Service
//
// File: categoryService.js
// Author: Anthony Bañon
// Created: 2025-11-20
// Last Updated: 2025-11-20
// ==========================================

import { apiClient } from '../api';

export const categoryService = {
  // Get one category by ID
  async getOne(id) {
    return await apiClient.get(`/categories/${id}`);
  },

  // Get all categories
  async getAll(filters = {}) {
    // Manage query parameters for filters
    const queryParams = new URLSearchParams();
    // Add filters if they exist
    if (filters.name) queryParams.append('name', filters.name);
    // Add is_active filter if it exists
    if (filters.is_active !== undefined)
      queryParams.append('is_active', filters.is_active);
    // Add sort filter if it exists
    if (filters.sort) queryParams.append('sort', filters.sort);
    // Add pagination filters if they exist
    if (filters.page) queryParams.append('page', filters.page);
    if (filters.limit) queryParams.append('limit', filters.limit);
    // Construct the final endpoint with query parameters
    const queryString = queryParams.toString();
    const endpoint = queryString ? `/categories?${queryString}` : '/categories';

    return await apiClient.get(endpoint);
  },

  // Create a new category
  async create(data) {
    // To handle images, you need to use FormData instead of JSON
    if (data.image instanceof File) {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('description', data.description || '');
      formData.append('image', data.image);

      return await apiClient.request('/categories', {
        method: 'POST',
        body: formData,
        // No Content-Type header for FormData, let browser set it
      });
    }

    return await apiClient.post('/categories', data);
  },

  // Update category (full update)
  async update(id, data) {
    // Manager image for full update
    if (data.image instanceof File) {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('description', data.description || '');
      formData.append('image', data.image);

      return await apiClient.request(`/categories/${id}`, {
        method: 'PUT',
        body: formData,
      });
    }

    return await apiClient.put(`/categories/${id}`, data);
  },

  // Update category (partial update)
  async updatePartial(id, data) {
    // Manage image for partial update
    if (data.image instanceof File) {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key !== 'image') {
          formData.append(key, data[key]);
        }
      });
      formData.append('image', data.image);

      return await apiClient.request(`/categories/${id}`, {
        method: 'PATCH',
        body: formData,
      });
    }

    return await apiClient.patch(`/categories/${id}`, data);
  },

  // Update category status
  async updateStatus(id, isActive) {
    return await apiClient.patch(`/categories/${id}/status`, {
      is_active: isActive,
    });
  },

  // Delete category image
  async deleteImage(id) {
    return await apiClient.delete(`/categories/${id}/image`);
  },

  // Delete category
  async delete(id) {
    return await apiClient.delete(`/categories/${id}`);
  },
};
