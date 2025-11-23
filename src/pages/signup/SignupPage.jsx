// ==========================================
//
// Description: Sign Up Page
//
// File: SignupPage.jsx
// Author: Anthony Bañon
// Created: 2025-11-22
// Last Updated: 2025-11-22
// ==========================================

import AuthTemplate from '../../components/templates/auth_layout/AuthTemplate';
import { SignupForm } from '../../components/organisms/signup_form/SignupForm';
import { signupFormLogic } from '../../components/organisms/signup_form/signupFormLogic';
import { signupPageLogic } from './signupPageLogic';
import { useCallback } from 'react';
import { LoadingSpinner } from '../../components/atoms/spinner/LoadingSpinner';

export default function SignUpPage() {
  // Page business logic
  const { handleSignup, personId, isChecking } = signupPageLogic();
  console.log('📍 SignupPage - personId:', personId);
  // Form business logic
  const formLogic = signupFormLogic(personId);

  // Handle form submission
  const handleFormSubmit = useCallback(() => {
    if (formLogic.canSubmit) {
      formLogic.setIsSubmitting(true);
      handleSignup(formLogic.formData).finally(() => {
        formLogic.setIsSubmitting(false);
      });
    }
  }, [
    formLogic.canSubmit,
    formLogic.formData,
    handleSignup,
    formLogic.setIsSubmitting,
  ]);

  if (isChecking) {
    return (
      <AuthTemplate>
        <LoadingSpinner message="Verifying registration..." />
      </AuthTemplate>
    );
  }

  // ✅ If personId is not present, redirect to initial registration step
  if (!personId) {
    return (
      <AuthTemplate>
        <div className="flex justify-center items-center h-64">
          <span className="text-error">Redirecting to registration...</span>
        </div>
      </AuthTemplate>
    );
  }

  return (
    <AuthTemplate>
      <SignupForm
        // Form state
        formData={formLogic.formData}
        errors={formLogic.errors}
        touched={formLogic.touched}
        isSubmitting={formLogic.isSubmitting}
        canSubmit={formLogic.canSubmit}
        // Form actions
        createFieldHandlers={formLogic.createFieldHandlers}
        onSubmit={handleFormSubmit}
      />
    </AuthTemplate>
  );
}
