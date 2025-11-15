import { RedBrand } from '../../molecules/brands/RedBrand';
import { RegisterInput } from '../../molecules/inputs_block/RegisterInput';
import { RegisterButton } from '../../molecules/buttons_block/RegisterButton';
import { RegisterSubtitle } from '../../molecules/subtitles/RegisterSubtitle';
import { RegisterBottomText } from '../../molecules/bottom_text/RegisterBottomText';
export const RegisterCard = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center xl:gap-6 w-full">
      <RedBrand></RedBrand>
      <div className="bg-bg-card flex flex-col gap-3 items-center justify-center px-6 py-8 w-full max-w-98 min-h-[70vh] sm:min-h-[65vh] md:min-h-[60vh] xl:max-w-124 rounded-lg">
        <RegisterSubtitle />
        <RegisterInput />
        <RegisterButton />
        <RegisterBottomText />
      </div>
    </div>
  );
};
