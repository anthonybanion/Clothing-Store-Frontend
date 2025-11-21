// ==========================================
//
// Description: Person Service
//
// File: personService.js
// Author: Anthony Bañon
// Created: 2025-11-20
// Last Updated: 2025-11-20
// ==========================================

import { apiClient } from '../api';

export const personService = {
  // Register a new person
  async create(firstName, lastName, dni, email) {
    return await apiClient.post('/persons', {
      first_name: firstName,
      last_name: lastName,
      dni,
      email,
    });
  },

  // Get person by ID
  async getOne(id) {
    return await apiClient.get(`/persons/${id}`);
  },

  // Get all persons
  async getAll(filters = {}) {
    // ✅ Agregar soporte para filtros como en categories
    const queryParams = new URLSearchParams();
    if (filters.name) queryParams.append('name', filters.name);
    if (filters.is_active !== undefined)
      queryParams.append('is_active', filters.is_active);
    if (filters.sort) queryParams.append('sort', filters.sort);
    if (filters.page) queryParams.append('page', filters.page);
    if (filters.limit) queryParams.append('limit', filters.limit);

    const queryString = queryParams.toString();
    const endpoint = queryString ? `/persons?${queryString}` : '/persons';
    return await apiClient.get(endpoint);
  },

  // Update person by ID (full update)
  async update(id, data) {
    return await apiClient.put(`/persons/${id}`, data);
  },

  // Update person by ID (partial update)
  async updatePartial(id, data) {
    return await apiClient.patch(`/persons/${id}`, data);
  },

  // Update person status (activate/deactivate)
  async updateStatus(id, isActive) {
    return await apiClient.patch(`/persons/${id}/status`, {
      is_active: isActive,
    });
  },

  // Delete person image
  async deleteImage(id) {
    return await apiClient.delete(`/persons/${id}/image`);
  },

  // Delete person by ID
  async delete(id) {
    return await apiClient.delete(`/persons/${id}`);
  },
};
