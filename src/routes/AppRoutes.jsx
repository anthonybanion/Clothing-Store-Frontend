import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductPage } from '../pages/product/ProductPage';
import { HomePage } from '../pages/home/HomePage';
import { ProfilePage } from '../pages/profile/ProfilePage';
import LoginPage from '../pages/auth/LoginPage';
import { UnauthorizedPage } from '../pages/auth/Unauthorized';
import { ProtectedRoute } from './ProtectedRoute';
import RegisterPage from '../pages/register/RegisterPage';
export const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/register" element={<RegisterPage />} />
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
