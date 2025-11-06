import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductsPage } from '../pages/ProductsPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { UnauthorizedPage } from '../pages/Unauthorized';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
    </Routes>
  );
};
