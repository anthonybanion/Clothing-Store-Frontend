import { Button } from '../../atoms/button/Button';

export const RegisterButton = () => {
  return (
    <div className="flex flex-col gap-3 w-full sm:w-80 xl:gap-4  xl:w-96">
      <Button
        color="bg-text-icons"
        hoverColor="hover:bg-text-primary focus:bg-text-primary active:bg-text-primary"
      >
        Next
      </Button>
      <Button
        color="bg-primary"
        hoverColor="hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-hover"
      >
        Login With Google
      </Button>
    </div>
  );
};
