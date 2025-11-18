import { Input } from '../../atoms/input/Input';

export const UsernameInput = ({ isValid, message, ...props }) => {
  const variant =
    isValid === true ? 'success' : isValid === false ? 'error' : 'default';

  return (
    <div className="w-full">
      <Input
        variant={variant}
        type="text"
        placeholder="Username"
        message={message}
        {...props}
      />
    </div>
  );
};
