import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({
  children,
  isAuthenticated, // from context or props
  requiredRole, // client or admin
  userRole, // from context or props
  redirectTo = '/login',
}) => {
  // If not authenticated
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  // If requires a specific role and doesn't have it
  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};
