// API Client Service
const API_BASE = import.meta.env.VITE_API_URL;
const STATIC_BASE = import.meta.env.VITE_STATIC_URL;

// Function to make API requests
export const apiRequest = (endpoint, options = {}) => {
  return fetch(`${API_BASE}${endpoint}`, options);
};

// Returns the full URL for an image or a placeholder if no imagePath is provided
export const getImageUrl = (imagePath) => {
  if (!imagePath) return '/placeholder.jpg';
  const cleanPath = imagePath.replace('/uploads', '');
  return `${STATIC_BASE}${cleanPath}`;
};
