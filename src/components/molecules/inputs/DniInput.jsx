import { Input } from '../../atoms/input/Input';

export const DniInput = ({ isValid, message, ...props }) => {
  const variant =
    isValid === true ? 'success' : isValid === false ? 'error' : 'default';

  return (
    <div className="w-full">
      <Input
        variant={variant}
        type="text"
        placeholder="DNI of 8 digits"
        message={message}
        {...props}
      />
    </div>
  );
};
