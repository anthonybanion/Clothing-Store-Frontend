// pages/LoginPage.jsx
import AuthTemplate from '../../components/templates/auth_layout/AuthTemplate';
import { SignUpForm } from '../../components/organisms/forms/SignUpForm';

export default function SignUpPage() {
  const handleSignUp = async (formData) => {
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
      <SignUpForm onSubmit={handleSignUp} />
    </AuthTemplate>
  );
}
