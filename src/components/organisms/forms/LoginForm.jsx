import { PasswordInput } from '../../molecules/inputs/PasswordInput';
import { UsernameInput } from '../../molecules/inputs/UsernameInput';
import { GoogleLoginButton } from '../../molecules/buttons/GoogleLoginButton';
import { SignInButton } from '../../molecules/buttons/SignInButton';
import { Title } from '../../atoms/text/Title';
import { Paragraph } from '../../atoms/text/Paragraph';
import { Link } from '../../atoms/link/Link';
import { useState } from 'react';

export const LoginForm = ({ onSubmit, isLoading = false }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // validación rápida
    if (!username || !password) {
      // Podés mostrar mensaje, toast, etc.

      return alert('Please enter both username and password.');
    }

    if (onSubmit) onSubmit?.({ username, password });
  };

  return (
    <div className="w-full flex flex-col justify-center h-62 sm:h-84 px-8 sm:px-16 md:px-22 lg:px-24 xl:px-26">
      <form onSubmit={handleSubmit}>
        <Title variant="subtitle" className="mb-4 sm:mb-6 text-center">
          Login
        </Title>

        <div className="flex flex-col gap-2 sm:gap-3">
          <UsernameInput
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isLoading}
          />
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
          <SignInButton type="submit" disabled={isLoading}>
            {isLoading ? 'Starting...' : 'Login'}
          </SignInButton>

          <GoogleLoginButton
            type="button"
            onClick={() => {
              console.log('Google login clicked');
              /* lógica de Google */
            }}
          />
        </div>

        <div className="mt-1.5 md:mt-2 flex justify-between">
          <Paragraph className="text-xs md:text-sm text-text-secondary">
            Do you have an account?
          </Paragraph>
          <Link
            to="/register"
            variant="secondary"
            className="text-xs md:text-sm"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};
