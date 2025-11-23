// ==========================================
//
// Description: Register Form Business Logic
//
// File: registerFormLogic.js
// Author: Anthony Bañon
// Created: 2025-11-21
// Last Updated: 2025-11-21
// ==========================================

import { useForm } from '../../../hooks/useForm';
import {
  validatePersonForm,
  validatePersonField,
} from '../../../validations/personValidation';
import { useCallback } from 'react';

// Initial form state
const initialFormState = {
  firstName: '',
  lastName: '',
  dni: '',
  email: '',
};

// Default touched fields
const defaultTouchedState = {
  firstName: false,
  lastName: false,
  dni: false,
  email: false,
};

// Register form logic
export const registerFormLogic = () => {
  // Use generic form hook
  const form = useForm(initialFormState, {
    validateForm: (formData) => validatePersonForm(formData, false),
    validateField: (fieldName, value) =>
      validatePersonField(fieldName, value, { isPartialUpdate: false }),
    defaultTouched: defaultTouchedState,
  });

  // Check if form can be submitted
  const canSubmit = Boolean(
    !form.isSubmitting &&
      form.formData.firstName?.trim() &&
      form.formData.lastName?.trim() &&
      form.formData.dni?.trim() &&
      form.formData.email?.trim() &&
      Object.values(form.errors).every((error) => !error)
  );

  // Create event handlers for form fields
  const createFieldHandlers = useCallback(
    (fieldName) => ({
      onChange: (event) => form.updateField(fieldName, event.target.value),
      onBlur: () => form.setFieldTouched(fieldName),
    }),
    [form.updateField, form.setFieldTouched]
  );

  return {
    // Form state
    formData: form.formData,
    errors: form.errors,
    touched: form.touched,
    isSubmitting: form.isSubmitting,

    // Form actions
    validateForm: form.validateForm,
    setIsSubmitting: form.setIsSubmitting,
    resetForm: form.resetForm,

    // Business logic
    canSubmit,
    createFieldHandlers,
  };
};
