// services/productsService.js
import { apiRequest } from './api';

export const productsService = {
  // GET ALL
  getAll: () => apiRequest('/products'),

  // GET BY ID
  getById: (id) => apiRequest(`/products/${id}`),

  // CREATE
  create: (productData) =>
    apiRequest('/products', {
      method: 'POST',
      body: JSON.stringify(productData),
    }),

  // UPDATE
  update: (id, productData) =>
    apiRequest(`/products/${id}`, {
      method: 'PATCH', // o PUT dependiendo de tu backend
      body: JSON.stringify(productData),
    }),

  // DELETE
  delete: (id) =>
    apiRequest(`/products/${id}`, {
      method: 'DELETE',
    }),
};
