import { Button } from '../../atoms/button/Button';

export const LoginButton = () => {
  return (
    <div className="flex flex-col gap-3 xl:gap-4">
      <Button
        text="Next"
        color="bg-text-icons"
        hoverColor="hover:bg-text-primary focus:bg-text-primary active:bg-text-primary"
      />
      <Button
        text="Login With Google"
        color="bg-primary"
        hoverColor="hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-hover"
      />
    </div>
  );
};
