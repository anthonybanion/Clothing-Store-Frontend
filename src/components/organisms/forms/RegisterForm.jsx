import { FirstNameInput } from '../../molecules/inputs/FirstNameInput';
import { LastNameInput } from '../../molecules/inputs/LastNameInput';
import { DniInput } from '../../molecules/inputs/DniInput';
import { EmailInput } from '../../molecules/inputs/EmailInput';
import { GoogleSignUpButton } from '../../molecules/buttons/GoogleSignUpButton';
import { NextButton } from '../../molecules/buttons/NextButton';
import { Title } from '../../atoms/text/Title';
import { Paragraph } from '../../atoms/text/Paragraph';
import { Link } from '../../atoms/link/Link';

export const RegisterForm = ({ onSubmit, isLoading = false }) => {
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
            Tell us a little about you
          </Paragraph>
        </div>

        <div className="flex flex-col gap-2 sm:gap-3">
          <FirstNameInput />
          <LastNameInput />
          <DniInput />
          <EmailInput />
          <Link to="/signup">
            <NextButton type="submit" disabled={isLoading}>
              {isLoading ? 'Iniciando...' : 'Iniciar Sesión'}
            </NextButton>
          </Link>
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
