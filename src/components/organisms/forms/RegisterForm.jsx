import { FirstNameInput } from '../../molecules/inputs/FirstNameInput';
import { LastNameInput } from '../../molecules/inputs/LastNameInput';
import { DniInput } from '../../molecules/inputs/DniInput';
import { EmailInput } from '../../molecules/inputs/EmailInput';
import { NextButton } from '../../molecules/buttons/NextButton';
import { Title } from '../../atoms/text/Title';
import { Paragraph } from '../../atoms/text/Paragraph';
import { Link } from '../../atoms/link/Link';
import { useState } from 'react';

export const RegisterForm = ({ onSubmit, isLoading = false }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation check
    if (!firstName || !lastName || !dni || !email) {
      return alert('Please fill in all fields.');
    }

    if (onSubmit) onSubmit({ firstName, lastName, dni, email });
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
          <FirstNameInput
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            disabled={isLoading}
          />
          <LastNameInput
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            disabled={isLoading}
          />
          <DniInput
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            disabled={isLoading}
          />
          <EmailInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
          <Link to="/signup">
            <NextButton type="submit" disabled={isLoading}>
              {isLoading ? 'Iniciando...' : 'Iniciar Sesión'}
            </NextButton>
          </Link>
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
