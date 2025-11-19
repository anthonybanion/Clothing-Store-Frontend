import { PasswordInput } from '../../molecules/inputs/PasswordInput';
import { UsernameInput } from '../../molecules/inputs/UsernameInput';
import { ConfirmPasswordInput } from '../../molecules/inputs/ConfirmPasswordInput';
import { GoogleSignUpButton } from '../../molecules/buttons/GoogleSignUpButton';
import { SignUpButton } from '../../molecules/buttons/SignUpButton';
import { Title } from '../../atoms/text/Title';
import { Paragraph } from '../../atoms/text/Paragraph';
import { Link } from '../../atoms/link/Link';

export const SignUpForm = ({ onSubmit, isLoading = false }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit();
  };

  return (
    <div className="w-full flex flex-col justify-center h-82 sm:h-114 px-8 sm:px-16 md:px-22 lg:px-24 xl:px-26">
      <form onSubmit={handleSubmit}>
        <div className="mb-4 sm:mb-6 text-center">
          <Title variant="subtitle">Create Account</Title>
          <Paragraph className="text-xs md:text-sm text-center text-text-secondary">
            Choose how you'll sign in
          </Paragraph>
        </div>

        <div className="flex flex-col gap-2 sm:gap-3">
          <UsernameInput />
          <PasswordInput />
          <ConfirmPasswordInput />
          <SignUpButton type="submit" disabled={isLoading}>
            {isLoading ? 'Iniciando...' : 'Iniciar Sesión'}
          </SignUpButton>
          <GoogleSignUpButton
            type="button"
            onClick={() => {
              /* lógica de Google */
            }}
          />
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
