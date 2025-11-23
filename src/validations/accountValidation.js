// ==========================================
//
// Description: Account Validation
//
// File: accountValidation.js
// Author: Anthony Bañon
// Created: 2025-11-21
// Last Updated: 2025-11-21
// ==========================================

// Regular expressions (consistentes con backend)
const USERNAME_REGEX = /^[a-zA-Z0-9._]{2,30}$/;

// Funciones de validación individuales - ESTANDARIZADAS A NULL
export const validateUsername = (username) => {
  if (!username) return 'Username is required';
  if (username.length < 2 || username.length > 30)
    return 'Username must be 2-30 characters';
  if (!USERNAME_REGEX.test(username))
    return 'Username may only contain letters, numbers, dots, and underscores';
  return null; // ← Cambiado a null
};

export const validatePassword = (password) => {
  if (!password) return 'Password is required';
  if (password.length < 6) return 'Password must be at least 6 characters';
  if (password.length > 255) return 'Password cannot exceed 255 characters';
  return null; // ← Cambiado a null
};

export const validateNewPassword = (password) => {
  if (!password) return 'New password is required';
  if (password.length < 6) return 'New password must be at least 6 characters';
  if (password.length > 255) return 'New password cannot exceed 255 characters';
  return null; // ← Cambiado a null
};

export const validateRole = (role) => {
  if (!role) return 'Role is required';
  if (!['client', 'admin'].includes(role))
    return 'Role must be either "client" or "admin"';
  return null; // ← Cambiado a null
};

export const validateActive = (active, isRequired = false) => {
  if (isRequired && (active === undefined || active === null))
    return 'Active status is required';
  if (active !== undefined && active !== null && typeof active !== 'boolean')
    return 'Active status must be true or false';
  return null; // ← Cambiado a null
};

export const validatePerson = (person) => {
  if (!person) return 'Person is required';
  // Validación básica de MongoDB ID (24 caracteres hex)
  if (typeof person !== 'string' || !/^[0-9a-fA-F]{24}$/.test(person))
    return 'Valid person ID is required';
  return null; // ← Cambiado a null
};

// Helper para validación condicional
const validateIfPresent = (value, validator, isRequired = false) => {
  if (value === undefined) return null;
  return validator(value, isRequired);
};

// Complete form validation
export const validateAccountForm = (formData, isPartialUpdate = false) => {
  const errors = {};

  // Validación condicional más limpia
  errors.username = validateIfPresent(
    formData.username,
    validateUsername,
    !isPartialUpdate
  );

  errors.password = validateIfPresent(
    formData.password,
    validatePassword,
    !isPartialUpdate
  );

  errors.role = validateIfPresent(
    formData.role,
    validateRole,
    !isPartialUpdate
  );

  errors.active = validateActive(formData.active, !isPartialUpdate);
  errors.person = validateIfPresent(
    formData.person,
    validatePerson,
    !isPartialUpdate
  );

  // Para partial update: validar que al menos un campo esté presente
  if (isPartialUpdate && Object.keys(formData).length === 0) {
    errors._general = 'At least one field must be provided for update';
  }

  // Filtrar solo errores reales (no null)
  const filteredErrors = Object.fromEntries(
    Object.entries(errors).filter(([_, value]) => value !== null)
  );

  const isValid = Object.keys(filteredErrors).length === 0;

  return { errors: filteredErrors, isValid };
};

// Validaciones específicas para operaciones individuales
export const validateAccountStatus = (active) => {
  return validateActive(active, true);
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

// Individual field validation (para validación en tiempo real)
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
    active: (val) => validateActive(val, !isPartialUpdate),
    person: validatePerson,
  };

  if (!validators[fieldName]) {
    return null;
  }

  return validators[fieldName](value);
};

// Utility to check if the form has changes
export const hasAccountChanges = (originalData, currentData) => {
  return Object.keys(currentData).some((key) => {
    return currentData[key] !== originalData[key];
  });
};

// ELIMINAR: validateLoginForm - Ya existe en authValidation.js
