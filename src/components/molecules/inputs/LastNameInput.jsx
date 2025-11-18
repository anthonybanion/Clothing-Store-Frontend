import { Input } from '../../atoms/input/Input';

export const LastNameInput = ({ isValid, message, ...props }) => {
  const variant =
    isValid === true ? 'success' : isValid === false ? 'error' : 'default';

  return (
    <div className="w-full">
      <Input
        variant={variant}
        type="text"
        placeholder="Last name"
        message={message}
        {...props}
      />
    </div>
  );
};
