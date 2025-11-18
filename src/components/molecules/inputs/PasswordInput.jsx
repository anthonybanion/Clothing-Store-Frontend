import { Input } from '../../atoms/input/Input';

export const PasswordInput = ({ hasError, message, ...props }) => {
  return (
    <div className="w-full">
      <Input
        variant={hasError ? 'error' : 'default'}
        type="password"
        placeholder="Password"
        message={message}
        {...props}
      />
    </div>
  );
};
