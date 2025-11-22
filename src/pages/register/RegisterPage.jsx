// ==========================================
//
// Description: Page to register person
//
// File: RegisterPage.jsx
// Author: Anthony Bañon
// Created: 2025-11-21
// Last Updated: 2025-11-21
// ==========================================

import { useNavigate } from 'react-router-dom';
import AuthTemplate from '../../components/templates/auth_layout/AuthTemplate';
import { RegisterForm } from '../../components/organisms/forms/RegisterForm';
import { personService } from '../../services/person/personService';
import { useNotification } from '../../hooks/useNotification';
import { usePersonForm } from '../../hooks/usePersonForm';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { showSuccess, showError } = useNotification();
  const {
    formData,
    errors,
    touched,
    isSubmitting,
    updateField,
    setFieldTouched,
    validateForm,
    setIsSubmitting,
  } = usePersonForm();

  const handleRegister = async () => {
    // Validate complete form
    const isValid = validateForm();
    if (!isValid) return;

    setIsSubmitting(true);

    try {
      // Call service to create person
      await personService.create(
        formData.firstName,
        formData.lastName,
        formData.dni,
        formData.email
      );

      showSuccess('Account created successfully!');

      // Redirect after success
      setTimeout(() => {
        navigate('/signup', {
          state: { message: 'Registration successful. Please login.' },
        });
      }, 1500);
    } catch (error) {
      console.error('Registration error:', error);

      if (error.message.includes('409')) {
        showError('Email or DNI already exists');
      } else if (error.message.includes('UNAUTHORIZED')) {
        showError('Session expired. Please try again.');
      } else {
        showError('Registration failed. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle loading state
  const handleFieldChange = (fieldName) => (event) => {
    updateField(fieldName, event.target.value);
  };

  const handleFieldBlur = (fieldName) => () => {
    setFieldTouched(fieldName);
  };

  return (
    <AuthTemplate>
      <RegisterForm
        formData={formData}
        errors={errors}
        touched={touched}
        isLoading={isSubmitting}
        onFieldChange={handleFieldChange}
        onFieldBlur={handleFieldBlur}
        onSubmit={handleRegister}
      />
    </AuthTemplate>
  );
}
