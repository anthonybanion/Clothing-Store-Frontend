import { Input } from '../../atoms/input/Input';

export const RegisterInput = () => {
  return (
    <div className="flex flex-col gap-3 xl:gap-4 w-full sm:w-80 xl:w-96">
      <Input variant="default" type="text">
        First Name
      </Input>
      <Input variant="default" type="text">
        Last Name
      </Input>
      <Input variant="default" type="text">
        DNI
      </Input>
      <Input variant="default" type="email">
        Email
      </Input>
    </div>
  );
};
