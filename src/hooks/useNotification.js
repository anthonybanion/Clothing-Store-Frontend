// ==========================================
//
// Description: Notification
//
// File: useNotification.js
// Author: Anthony Bañon
// Created: 2025-11-21
// Last Updated: 2025-11-21
// ==========================================

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom hook for notifications
export const useNotification = () => {
  const showSuccess = (message, options = {}) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false, // Optional: show progress bar
      closeOnClick: true, // Optional: close on click
      pauseOnHover: true, // Optional: pause on hover
      draggable: true, // Optional: allow drag to dismiss
      ...options,
    });
  };

  const showError = (message, options = {}) => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...options,
    });
  };

  const showWarning = (message, options = {}) => {
    toast.warn(message, {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...options,
    });
  };

  const showInfo = (message, options = {}) => {
    toast.info(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...options,
    });
  };

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
  };
};
