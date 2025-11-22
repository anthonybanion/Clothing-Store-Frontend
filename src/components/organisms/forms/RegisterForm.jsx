// ==========================================
//
// Description: Register Form
//
// File: RegisterForm.jsx
// Author: Anthony Bañon
// Created: 2025-11-21
// Last Updated: 2025-11-21
// ==========================================

import { FirstNameInput } from '../../molecules/inputs/FirstNameInput';
import { LastNameInput } from '../../molecules/inputs/LastNameInput';
import { DniInput } from '../../molecules/inputs/DniInput';
import { EmailInput } from '../../molecules/inputs/EmailInput';
import { NextButton } from '../../molecules/buttons/NextButton';
import { Title } from '../../atoms/text/Title';
import { Paragraph } from '../../atoms/text/Paragraph';
import { ErrorMessage } from '../../atoms/text/ErrorMessage';
import { Link } from '../../atoms/link/Link';

export const RegisterForm = ({
  formData,
  errors,
  touched,
  isLoading,
  onFieldChange,
  onFieldBlur,
  onSubmit,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  // Determine if the form can be submitted
  const canSubmit =
    !isLoading &&
    formData.firstName &&
    formData.lastName &&
    formData.dni &&
    formData.email &&
    Object.keys(errors).length === 0;

  return (
    <div className="w-full flex flex-col justify-center h-82 sm:h-114 px-8 sm:px-16 md:px-22 lg:px-24 xl:px-26">
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4 sm:mb-6 text-center">
          <Title variant="subtitle">Create Account</Title>
          <Paragraph className="text-xs md:text-sm text-center text-text-secondary">
            Tell us a little about you
          </Paragraph>
        </div>

        <div className="flex flex-col gap-2 sm:gap-3">
          <div>
            <FirstNameInput
              value={formData.firstName}
              onChange={onFieldChange('firstName')}
              onBlur={onFieldBlur('firstName')}
              disabled={isLoading}
              hasError={touched.firstName && errors.firstName}
            />
            {touched.firstName && errors.firstName && (
              <ErrorMessage>{errors.firstName}</ErrorMessage>
            )}
          </div>
          <div>
            <LastNameInput
              value={formData.lastName}
              onChange={onFieldChange('lastName')}
              onBlur={onFieldBlur('lastName')}
              disabled={isLoading}
              hasError={touched.lastName && errors.lastName}
            />
            {touched.lastName && errors.lastName && (
              <ErrorMessage>{errors.lastName}</ErrorMessage>
            )}
          </div>
          <div>
            <DniInput
              value={formData.dni}
              onChange={onFieldChange('dni')}
              onBlur={onFieldBlur('dni')}
              disabled={isLoading}
              hasError={touched.dni && errors.dni}
            />
            {touched.dni && errors.dni && (
              <ErrorMessage>{errors.dni}</ErrorMessage>
            )}
          </div>
          <div>
            <EmailInput
              value={formData.email}
              onChange={onFieldChange('email')}
              onBlur={onFieldBlur('email')}
              disabled={isLoading}
              hasError={touched.email && errors.email}
            />
            {touched.email && errors.email && (
              <ErrorMessage>{errors.email}</ErrorMessage>
            )}
          </div>
          <NextButton type="submit" disabled={!canSubmit} isLoading={isLoading}>
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </NextButton>
        </div>

        <div className="mt-1.5 md:mt-2 flex justify-between">
          <Paragraph className="text-xs md:text-sm text-text-secondary">
            Do you have an account?
          </Paragraph>
          <Link to="/login" variant="secondary" className="text-xs md:text-sm">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};
