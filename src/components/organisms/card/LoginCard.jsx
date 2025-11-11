import { RedBrand } from '../../molecules/brands/RedBrand';
import { LoginInput } from '../../molecules/inputs_block/LoginInput';
import { LoginButton } from '../../molecules/buttons_block/LoginButton';
import { Title } from '../../atoms/title/Title';
import { LoginBottomText } from '../../molecules/bottom_text/LoginBottomText';
export const LoginCard = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center xl:gap-6 w-full">
      <RedBrand></RedBrand>
      <div className="bg-bg-card flex flex-col gap-3 items-center justify-center px-8 w-full max-w-98 h-auto min-h-100 xl:gap-4 xl:max-w-124 xl:min-h-115 rounded-lg">
        <Title variant="h3SemiBold">Login</Title>
        <LoginInput />
        <LoginButton />
        <LoginBottomText />
      </div>
    </div>
  );
};
