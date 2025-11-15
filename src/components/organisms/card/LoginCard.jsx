import { RedBrand } from '../../molecules/brands/RedBrand';
import { LoginInput } from '../../molecules/inputs_block/LoginInput';
import { LoginButton } from '../../molecules/buttons_block/LoginButton';
import { Title } from '../../atoms/title/Title';
import { LoginBottomText } from '../../molecules/bottom_text/LoginBottomText';
export const LoginCard = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center xl:gap-6 w-full min-h-screen">
      <RedBrand></RedBrand>
      <div className="bg-bg-card flex flex-col gap-8 items-center justify-center px-6 py-8 w-full max-w-98 min-h-[55vh] sm:min-h-[58vh] md:min-h-[65vh] xl:max-w-124 rounded-lg">
        <div>
          <Title variant="h3SemiBold">Login</Title>
        </div>
        <div className="flex flex-col gap-3 xl:gap-4 w-full items-center">
          <LoginInput />
          <LoginButton />
          <LoginBottomText />
        </div>
      </div>
    </div>
  );
};
