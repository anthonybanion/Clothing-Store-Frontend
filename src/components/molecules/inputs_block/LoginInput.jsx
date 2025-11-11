import { Input } from '../../atoms/input/Input';

export const LoginInput = () => {
  return (
    <div className="flex flex-col gap-3 xl:gap-4">
      <Input variant="default" text="Username" type="text" />
      <Input variant="default" text="Password" type="password" />
    </div>
  );
};
