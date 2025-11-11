import { RedBrand } from '../../molecules/brands/RedBrand';
import { LoginInput } from '../../molecules/inputs_block/LoginInput';
import { LoginButton } from '../../molecules/buttons_block/LoginButton';
import { Title } from '../../atoms/title/Title';
export const LoginCard = () => {
  return (
    <div className="flex flex-col gap-3 xl:gap-4">
      <RedBrand></RedBrand>
      <Title variant="h3SemiBold">Login</Title>
      <LoginInput />
      <LoginButton />
    </div>
  );
};
