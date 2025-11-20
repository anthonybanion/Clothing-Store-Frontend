// pages/LoginPage.jsx
import AuthTemplate from '../../components/templates/auth_layout/AuthTemplate';
import { LoginForm } from '../../components/organisms/forms/LoginForm';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LoginPage() {
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = async ({ username, password }) => {
    try {
      setError('');
      const result = await login(username, password);

      if (result.success) {
        navigate('/');
      } else {
        setError(result.error);
      }
    } catch (err) {
      console.error('Login failed:', err);
      setError(err.message || 'Login failed');
    }
  };

  return (
    <AuthTemplate>
      <LoginForm onSubmit={handleLogin} isLoading={loading} />
      {error && <p className="text-red-500">{error}</p>}
    </AuthTemplate>
  );
}
