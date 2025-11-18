import { Input } from '../../atoms/input/Input';

export const EmailInput = ({ isValid, message, ...props }) => {
  const variant =
    isValid === true ? 'success' : isValid === false ? 'error' : 'default';

  return (
    <div className="w-full">
      <Input
        variant={variant}
        type="email"
        placeholder="Email"
        message={message}
        {...props}
      />
    </div>
  );
};
