// services/productService.js
import { apiRequest } from './api';

export const productsService = {
  getAll: async () => {
    const res = await apiRequest('/products');
    return {
      products: res.data?.products || [],
      pagination: {
        totalItems: res.data?.totalItems ?? 0,
        totalPage: res.data?.totalPage ?? 1,
        currentPage: res.data?.currentPage ?? 1,
      },
      message: res.message,
    };
  },

  getById: async (id) => {
    const res = await apiRequest(`/products/${id}`);
    return {
      product: res.data || null,
      message: res.message,
    };
  },

  create: async (productData) => {
    const res = await apiRequest('/products', {
      method: 'POST',
      body: JSON.stringify(productData),
    });
    return {
      product: res.data || null,
      message: res.message,
    };
  },

  update: async (id, productData) => {
    const res = await apiRequest(`/products/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(productData),
    });
    return {
      product: res.data || null,
      message: res.message,
    };
  },

  delete: async (id) => {
    const res = await apiRequest(`/products/${id}`, { method: 'DELETE' });
    return {
      success: true,
      message: res.message,
    };
  },
};
