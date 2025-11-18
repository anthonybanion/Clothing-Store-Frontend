import { Input } from '../../atoms/input/Input';

export const FirstNameInput = ({ isValid, message, ...props }) => {
  const variant =
    isValid === true ? 'success' : isValid === false ? 'error' : 'default';

  return (
    <div className="w-full">
      <Input
        variant={variant}
        type="text"
        placeholder="First name"
        message={message}
        {...props}
      />
    </div>
  );
};
