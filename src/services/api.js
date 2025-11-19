// ==========================================
//
// Description: Api Service
//
// File: api.js
// Author: Anthony Bañon
// Created: 2025-11-18
// Last Updated: 2025-11-18
// Changes: Add refresh token handling in API client
// ==========================================

import { tokenInterceptor } from './auth/tokenInterceptor';
const BASE_URL = import.meta.env.VITE_API_URL;

class ApiClient {
  constructor() {
    this.baseURL = BASE_URL;
  }

  async request(endpoint, options = {}) {
    const token = localStorage.getItem('accessToken');

    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      ...options,
    };

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, config);

      if (!response.ok) {
        // handle expired token
        if (response.status === 401) {
          // Try to refresh the token
          const refreshed = await tokenInterceptor.handleUnauthorized();
          if (refreshed) {
            // Retry the request with the new token
            const newToken = localStorage.getItem('accessToken');
            // Update Authorization header
            config.headers.Authorization = `Bearer ${newToken}`;
            // Retry the original request
            const retryResponse = await fetch(
              `${this.baseURL}${endpoint}`,
              config
            );

            if (retryResponse.ok) {
              return await retryResponse.json();
            }
          }
          throw new Error('UNAUTHORIZED');
        }
        // Other errors
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          // Use message from response if available
          errorData.message ||
            `Error ${response.status}: ${response.statusText}`
        );
      }

      return await response.json();
    } catch (error) {
      // Log error for debugging
      console.error('Error en petición:', error);
      throw error;
    }
  }
  // Helper methods for different HTTP verbs
  get(endpoint) {
    return this.request(endpoint, { method: 'GET' });
  }

  post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  patch(endpoint, data) {
    return this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }
}

export const apiClient = new ApiClient();
