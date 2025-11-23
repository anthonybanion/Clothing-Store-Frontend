import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductPage } from '../pages/product/ProductPage';
import { HomePage } from '../pages/home/HomePage';
import { ProfilePage } from '../pages/profile/ProfilePage';
import LoginPage from '../pages/login/LoginPage';
import { UnauthorizedPage } from '../pages/auth/Unauthorized';
import { ProtectedRoute } from './ProtectedRoute';
import RegisterPage from '../pages/register/RegisterPage';
import SignupPage from '../pages/signup/SignupPage';
import { SignupRoute } from './SignupRoute';
export const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/signup"
        element={
          <SignupRoute>
            <SignupPage />
          </SignupRoute>
        }
      />
      <Route path="/products" element={<ProductPage />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
    </Routes>
  );
};
