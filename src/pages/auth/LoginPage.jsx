// pages/LoginPage.jsx
import AuthTemplate from '../../components/templates/auth_layout/AuthTemplate';
import { LoginForm } from '../../components/organisms/forms/LoginForm';
import { useLogin } from '../../hooks/useLogin';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const { login: apiLogin, loading, error } = useLogin();
  const { login: authLogin } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async ({ username, password }) => {
    try {
      const resp = await apiLogin(username, password);

      // Set auth context resp = { accessToken, refreshToken, user, role }
      authLogin({
        accessToken: resp.accessToken,
        refreshToken: resp.refreshToken,
        user: resp.user,
        role: resp.role,
      });

      navigate('/');
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <AuthTemplate>
      <LoginForm onSubmit={handleLogin} isLoading={loading} />
      {error && <p className="text-red-500">{error}</p>}
    </AuthTemplate>
  );
}
