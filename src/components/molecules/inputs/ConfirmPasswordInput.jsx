import { Input } from '../../atoms/input/Input';

export const ConfirmPasswordInput = ({ hasError, message, ...props }) => {
  return (
    <div className="w-full">
      <Input
        variant={hasError ? 'error' : 'default'}
        type="password"
        placeholder="Confirm Password"
        message={message}
        {...props}
      />
    </div>
  );
};
