// ==========================================
// Description: Application Constants
// File: utils/constants.js
// Author: Anthony Bañon
// Created: 2025-11-22
// Last Updated: 2025-11-22
// ==========================================

// ====================
// ROLES
// ====================
export const ROLE = {
  ADMIN: 'admin',
  CLIENT: 'client',
  USER: 'user',
};

// ====================
// HTTP STATUS CODES
// ====================
export const HTTP_STATUS = {
  // Success
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,

  // Client errors
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,

  // Server errors
  INTERNAL_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
};

// ====================
// FORM VALIDATION RULES
// ====================
export const VALIDATION = {
  USERNAME: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 30,
    PATTERN: /^[a-zA-Z0-9_]+$/,
  },
  PASSWORD: {
    MIN_LENGTH: 6,
    MAX_LENGTH: 128,
    PATTERN: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
  },
  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 50,
    PATTERN: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s']+$/,
  },
  EMAIL: {
    MAX_LENGTH: 254,
    PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  DNI: {
    LENGTH: 8,
    PATTERN: /^\d+$/,
  },
};

// ====================
// APPLICATION ROUTES
// ====================
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  SIGNUP: '/signup',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
};

// ====================
// STORAGE KEYS
// ====================
export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  USER: 'user',
  THEME: 'theme_preference',
  LANGUAGE: 'language_preference',
};

// ====================
// API CONFIGURATION
// ====================
export const API_CONFIG = {
  TIMEOUT: 30000,
  RETRY_ATTEMPTS: 3,
};

// ====================
// UI & UX CONSTANTS
// ====================
export const UI = {
  DEBOUNCE_DELAY: 300,
  TOAST_DURATION: 5000,
  AUTO_LOGOUT: 30 * 60 * 1000, // 30 minutes
  LOADING_DELAY: 500, // Minimum loading indicator time
};

// ====================
// ERROR MESSAGES
// ====================
export const ERROR_MESSAGES = {
  // Network
  NETWORK_ERROR: 'Network error. Please check your connection.',
  SERVER_ERROR: 'Server error. Please try again later.',

  // Auth
  UNAUTHORIZED: 'Session expired. Please login again.',
  FORBIDDEN: 'You do not have permission to perform this action.',
  INVALID_CREDENTIALS: 'Invalid username or password.',

  // Resources
  NOT_FOUND: 'Resource not found.',
  CONFLICT: 'This resource already exists.',

  // Validation
  VALIDATION_ERROR: 'Please check the form for errors.',
  REQUIRED_FIELD: 'This field is required.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  PASSWORD_MISMATCH: 'Passwords do not match.',
};

// ====================
// SUCCESS MESSAGES
// ====================
export const SUCCESS_MESSAGES = {
  // Auth
  LOGIN_SUCCESS: 'Login successful!',
  LOGOUT_SUCCESS: 'Logout successful!',

  // Registration flow
  PERSON_CREATED: 'Personal information saved successfully!',
  ACCOUNT_CREATED: 'Account created successfully!',
  REGISTRATION_COMPLETE: 'Registration completed successfully!',

  // Profile
  PROFILE_UPDATED: 'Profile updated successfully!',
  PASSWORD_CHANGED: 'Password changed successfully!',
};

// ====================
// FORM DEFAULTS
// ====================
export const FORM_DEFAULTS = {
  ROLE: 'client',
  IS_ACTIVE: true,
};
