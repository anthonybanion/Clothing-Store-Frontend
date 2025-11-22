import { PasswordInput } from '../../molecules/inputs/PasswordInput';
import { UsernameInput } from '../../molecules/inputs/UsernameInput';
import { SignInButton } from '../../molecules/buttons/SignInButton';
import { Title } from '../../atoms/text/Title';
import { Paragraph } from '../../atoms/text/Paragraph';
import { Link } from '../../atoms/link/Link';
import { ErrorMessage } from '../../atoms/text/ErrorMessage';

export const LoginForm = ({
  formData,
  errors,
  touched,
  isLoading,
  onFieldChange,
  onFieldBlur,
  onSubmit,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const canSubmit =
    !isLoading &&
    formData.username &&
    formData.password &&
    Object.keys(errors).length === 0;

  return (
    <div className="w-full flex flex-col justify-center h-62 sm:h-84 px-8 sm:px-16 md:px-22 lg:px-24 xl:px-26">
      <form onSubmit={handleSubmit} noValidate>
        <Title variant="subtitle" className="mb-4 sm:mb-6 text-center">
          Login
        </Title>

        <div className="flex flex-col gap-2 sm:gap-3">
          <div>
            <UsernameInput
              value={formData.username}
              onChange={onFieldChange('username')}
              onBlur={onFieldBlur('username')}
              disabled={isLoading}
              hasError={touched.username && errors.username}
            />
            {touched.username && errors.username && (
              <ErrorMessage>{errors.username}</ErrorMessage>
            )}
          </div>
          <div>
            <PasswordInput
              value={formData.password}
              onChange={onFieldChange('password')}
              onBlur={onFieldBlur('password')}
              disabled={isLoading}
              hasError={touched.password && errors.password}
            />
            {touched.password && errors.password && (
              <ErrorMessage>{errors.password}</ErrorMessage>
            )}
          </div>
          <SignInButton
            type="submit"
            disabled={!canSubmit}
            isLoading={isLoading}
          >
            {isLoading ? 'Starting...' : 'Login'}
          </SignInButton>
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
