// ==========================================
//
// Description: Sign Up Page Logic
//
// File: signupPageLogic.js
// Author: Anthony Bañon
// Created: 2025-11-22
// Last Updated: 2025-11-22
// ==========================================

import { useNavigate, useLocation } from 'react-router-dom';
import { useNotification } from '../../hooks/useNotification';
import { accountService } from '../../services/account/accountService';
import { useEffect, useState } from 'react';

// Page business logic for signup page
export const signupPageLogic = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { showSuccess, showError } = useNotification();

  const [personId, setPersonId] = useState(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const personIdFromState = location.state?.personId;

    if (!personIdFromState) {
      showError('Please complete personal information first');
      setTimeout(() => {
        navigate('/register', {
          state: {
            message: 'Please complete personal information first',
          },
        });
      }, 1000);
    } else {
      setPersonId(personIdFromState);
    }

    setIsChecking(false);
  }, [location, navigate, showError]);

  // Handle account creation
  const handleSignup = async (formData) => {
    if (!personId) {
      showError(
        'Missing personal information. Please complete registration first.'
      );
      navigate('/register');
      return { success: false };
    }
    try {
      // Prepare data for API (exclude confirmPassword)
      const { confirmPassword, ...accountData } = formData;

      // Include personId in the account data
      const accountDataWithPerson = {
        ...accountData,
        person: personId, // ← AQUÍ usas el personId
      };

      // Call service to create account
      await accountService.register(
        accountDataWithPerson.username,
        accountDataWithPerson.password,
        accountDataWithPerson.role,
        accountDataWithPerson.person
      );

      showSuccess('Account created successfully!');

      // Redirect after success
      setTimeout(() => {
        navigate('/login', {
          state: {
            message: 'Signup successful. Please login.',
            username: formData.username,
          },
        });
      }, 1500);

      return { success: true };
    } catch (error) {
      console.error('Signup error:', error);

      // Handle specific error cases
      if (error.response?.status === 409) {
        showError('Username already exists');
      } else if (error.response?.status === 400) {
        showError('Invalid data. Please check your information.');
        navigate('/register');
      } else {
        showError('Signup failed. Please try again.');
      }

      return { success: false, error: error.message };
    }
  };

  return {
    handleSignup,
    personId,
    isChecking,
  };
};
