// ==========================================
//
// Description: Account Validation
//
// File: accountValidation.js
// Author: Anthony Bañon
// Created: 2025-11-21
// Last Updated: 2025-11-21
// ==========================================

// Regular expressions
const USERNAME_REGEX = /^[a-zA-Z0-9._]{2,30}$/;

// Funciones de validación individuales
export const validateUsername = (username) => {
  if (!username) return 'Username is required';
  if (username.length < 2 || username.length > 30)
    return 'Username must be 2-30 characters';
  if (!USERNAME_REGEX.test(username))
    return 'Username may only contain letters, numbers, dots, and underscores';
  return '';
};

export const validatePassword = (password) => {
  if (!password) return 'Password is required';
  if (password.length < 6) return 'Password must be at least 6 characters';
  if (password.length > 255) return 'Password cannot exceed 255 characters';
  return '';
};

export const validateNewPassword = (password) => {
  if (!password) return 'New password is required';
  if (password.length < 6) return 'New password must be at least 6 characters';
  if (password.length > 255) return 'New password cannot exceed 255 characters';
  return '';
};

export const validateRole = (role) => {
  if (!role) return 'Role is required';
  if (!['client', 'admin'].includes(role))
    return 'Role must be either "client" or "admin"';
  return '';
};

export const validateActive = (active) => {
  if (active === undefined || active === null) return '';
  if (typeof active !== 'boolean') return 'Active status must be true or false';
  return '';
};

export const validatePerson = (person) => {
  if (!person) return 'Person is required';
  // Validación básica de MongoDB ID (24 caracteres hex)
  if (typeof person !== 'string' || !/^[0-9a-fA-F]{24}$/.test(person))
    return 'Valid person ID is required';
  return '';
};

// Validación completa del formulario
export const validateAccountForm = (formData, isPartialUpdate = false) => {
  const errors = {};

  // Validaciones condicionales para actualización parcial
  if (!isPartialUpdate || formData.username !== undefined) {
    errors.username = validateUsername(formData.username);
  }

  if (!isPartialUpdate || formData.password !== undefined) {
    errors.password = validatePassword(formData.password);
  }

  if (!isPartialUpdate || formData.role !== undefined) {
    errors.role = validateRole(formData.role);
  }

  if (formData.active !== undefined) {
    errors.active = validateActive(formData.active);
  }

  if (!isPartialUpdate || formData.person !== undefined) {
    errors.person = validatePerson(formData.person);
  }

  // Para actualización parcial: validar que hay al menos un campo
  if (isPartialUpdate && Object.keys(formData).length === 0) {
    errors._general = 'At least one field must be provided for update';
  }

  // Filtrar errores vacíos y determinar si es válido
  const filteredErrors = Object.fromEntries(
    Object.entries(errors).filter(([_, value]) => value !== '')
  );

  const isValid = Object.keys(filteredErrors).length === 0;

  return { errors: filteredErrors, isValid };
};

// Validaciones específicas para operaciones individuales
export const validateAccountStatus = (active) => {
  if (active === undefined || active === null)
    return 'Active field is required';
  if (typeof active !== 'boolean') return 'Active must be true or false';
  return '';
};

export const validateResetPassword = (newPassword) => {
  return validateNewPassword(newPassword);
};

export const validateAccountUsername = (username) => {
  return validateUsername(username);
};

export const validateAccountRole = (role) => {
  return validateRole(role);
};

// Validación individual de campo (útil para validación en tiempo real)
export const validateAccountField = (
  fieldName,
  value,
  isPartialUpdate = false
) => {
  const validators = {
    username: validateUsername,
    password: validatePassword,
    newPassword: validateNewPassword,
    role: validateRole,
    active: validateActive,
    person: validatePerson,
  };

  if (!validators[fieldName]) {
    return '';
  }

  return validators[fieldName](value);
};

// Utilidad para verificar si el formulario tiene cambios
export const hasAccountChanges = (originalData, currentData) => {
  return Object.keys(currentData).some((key) => {
    return currentData[key] !== originalData[key];
  });
};

// Validación para login
export const validateLoginForm = (credentials) => {
  const errors = {};

  errors.username = validateUsername(credentials.username);
  errors.password = validatePassword(credentials.password);

  const filteredErrors = Object.fromEntries(
    Object.entries(errors).filter(([_, value]) => value !== '')
  );

  const isValid = Object.keys(filteredErrors).length === 0;

  return { errors: filteredErrors, isValid };
};
