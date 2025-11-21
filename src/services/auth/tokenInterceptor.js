// ==========================================
//
// Description: Token Interceptor
//
// File: tokenInterceptor.js
// Author: Anthony Bañon
// Created: 2025-11-19
// Last Updated: 2025-11-19
// ==========================================

class TokenInterceptor {
  constructor() {
    this.isRefreshing = false;
    this.failedQueue = [];
    this.authFunctions = null;
  }
  // Set auth functions from AuthContext
  setAuthFunctions(functions) {
    // Save the functions to use later
    this.authFunctions = functions;
  }
  // Handle 401 Unauthorized responses
  async handleUnauthorized() {
    // If auth functions are not set, redirect to login
    if (!this.authFunctions) {
      this.redirectToLogin();
      return false;
    }

    // If already refreshing, queue the request
    if (this.isRefreshing) {
      // Return a promise that resolves when the token is refreshed
      return new Promise((resolve, reject) => {
        // Add to the queue
        this.failedQueue.push({ resolve, reject });
      });
    }

    this.isRefreshing = true;

    try {
      const success = await this.authFunctions.handleRefresh();
      // If refresh was successful
      if (success) {
        // Process the queue of failed requests
        this.failedQueue.forEach(({ resolve }) => resolve());
        this.failedQueue = [];
        return true;
      } else {
        throw new Error('Token refresh failed');
      }
    } catch (refreshError) {
      // Log the error
      console.error('Token refresh failed:', refreshError);

      // Reject all queued requests
      this.failedQueue.forEach(({ reject }) => reject(refreshError));
      // Clear the queue
      this.failedQueue = [];

      this.authFunctions.logout();
      return false;
    } finally {
      this.isRefreshing = false;
    }
  }
  // Redirect to login page
  redirectToLogin() {
    // Clear local storage and redirect to login page
    localStorage.clear();
    // Redirect to login page
    window.location.href = '/login';
  }
}

export const tokenInterceptor = new TokenInterceptor();
