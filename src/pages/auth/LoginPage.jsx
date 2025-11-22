// ==========================================
//
// Description: Login Page
//
// File: LoginPage.jsx
// Author: Anthony Bañon
// Created: 2025-11-21
// Last Updated: 2025-11-21
// ==========================================

import AuthTemplate from '../../components/templates/auth_layout/AuthTemplate';
import { LoginForm } from '../../components/organisms/forms/LoginForm';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../../hooks/useNotification';
import { useLoginForm } from '../../hooks/useLoginForm';

export default function LoginPage() {
  const { login, loading } = useAuth();
  const { showError } = useNotification();
  const navigate = useNavigate();

  const {
    formData,
    errors,
    touched,
    updateField,
    setFieldTouched,
    validateForm,
  } = useLoginForm();

  const handleLogin = async () => {
    if (!validateForm()) return;

    try {
      const result = await login(formData.username, formData.password);

      if (result.success) {
        navigate('/');
      } else {
        showError(result.error || 'Login failed');
      }
    } catch (err) {
      console.error('Login failed:', err);
      showError(err.message || 'Login failed');
    }
  };

  const handleFieldChange = (fieldName) => (event) => {
    updateField(fieldName, event.target.value);
  };

  const handleFieldBlur = (fieldName) => () => {
    setFieldTouched(fieldName);
  };

  return (
    <AuthTemplate>
      <LoginForm
        formData={formData}
        errors={errors}
        touched={touched}
        isLoading={loading}
        onFieldChange={handleFieldChange}
        onFieldBlur={handleFieldBlur}
        onSubmit={handleLogin}
      />
    </AuthTemplate>
  );
}
