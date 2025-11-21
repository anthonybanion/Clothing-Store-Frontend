// pages/LoginPage.jsx
import AuthTemplate from '../../components/templates/auth_layout/AuthTemplate';
import { RegisterForm } from '../../components/organisms/forms/RegisterForm';

export default function RegisterPage() {
  const handleRegister = async (formData) => {
    // ✅ TODA la lógica fuerte va AQUÍ en la página
    console.log('Datos del registro:', formData);

    // Aquí iría:
    // - Llamadas a API
    // - Manejo de estado global
    // - Redirecciones
    // - Manejo de errores
  };

  return (
    <AuthTemplate>
      <RegisterForm onSubmit={handleRegister} />
    </AuthTemplate>
  );
}
