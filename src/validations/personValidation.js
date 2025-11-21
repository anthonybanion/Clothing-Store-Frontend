// ==========================================
//
// Description: Person Validation
//
// File: personValidation.js
// Author: Anthony Bañon
// Created: 2025-11-21
// Last Updated: 2025-11-21
// ==========================================

// Expresiones regulares
const NAME_REGEX = /^[A-Za-zÁÉÍÓÚáéíóúÑñ']{2,50}$/;
const DNI_REGEX = /^[0-9]{8}$/;
const EMAIL_REGEX = /^[\w\.-]{1,64}@[\w\.-]+\.\w{2,63}$/;

// Validation functions
export const validateFirstName = (firstName) => {
  if (!firstName) return 'First name is required';
  if (firstName.length < 2 || firstName.length > 50)
    return 'First name must be 2-50 characters';
  if (!NAME_REGEX.test(firstName))
    return 'First name contains invalid characters';
  return '';
};

export const validateLastName = (lastName) => {
  if (!lastName) return 'Last name is required';
  if (lastName.length < 2 || lastName.length > 50)
    return 'Last name must be 2-50 characters';
  if (!NAME_REGEX.test(lastName))
    return 'Last name contains invalid characters';
  return '';
};

export const validateDni = (dni) => {
  if (!dni) return 'DNI is required';
  if (dni.length !== 8) return 'DNI must be exactly 8 digits';
  if (!DNI_REGEX.test(dni)) return 'DNI must contain only numbers (8 digits)';
  return '';
};

export const validateEmail = (email) => {
  if (!email) return 'Email is required';
  if (!EMAIL_REGEX.test(email)) return 'Invalid email address format';
  if (email.length < 5 || email.length > 100)
    return 'Email must be 5-100 characters';
  return '';
};

export const validateIsActive = (isActive) => {
  if (isActive === undefined || isActive === null) return '';
  if (typeof isActive !== 'boolean')
    return 'Active status must be true or false';
  return '';
};

// Complete form validation
export const validatePersonForm = (formData, isPartialUpdate = false) => {
  const errors = {};

  // Conditional validations for partial update
  if (!isPartialUpdate || formData.firstName !== undefined) {
    errors.firstName = validateFirstName(formData.firstName);
  }

  if (!isPartialUpdate || formData.lastName !== undefined) {
    errors.lastName = validateLastName(formData.lastName);
  }

  if (!isPartialUpdate || formData.dni !== undefined) {
    errors.dni = validateDni(formData.dni);
  }

  if (!isPartialUpdate || formData.email !== undefined) {
    errors.email = validateEmail(formData.email);
  }

  if (formData.isActive !== undefined) {
    errors.isActive = validateIsActive(formData.isActive);
  }

  // For partial update: validate that there is at least one field
  if (isPartialUpdate && Object.keys(formData).length === 0) {
    errors._general = 'At least one field must be provided for update';
  }

  // Filter out empty errors and determine if valid
  const filteredErrors = Object.fromEntries(
    Object.entries(errors).filter(([_, value]) => value !== '')
  );

  const isValid = Object.keys(filteredErrors).length === 0;

  return { errors: filteredErrors, isValid };
};

// Individual field validation (useful for real-time validation)
export const validatePersonField = (
  fieldName,
  value,
  isPartialUpdate = false
) => {
  const validators = {
    firstName: validateFirstName,
    lastName: validateLastName,
    dni: validateDni,
    email: validateEmail,
    isActive: validateIsActive,
  };

  if (!validators[fieldName]) {
    return '';
  }

  return validators[fieldName](value);
};

// Utility to check if the form has changes
export const hasFormChanges = (originalData, currentData) => {
  return Object.keys(currentData).some((key) => {
    return currentData[key] !== originalData[key];
  });
};
