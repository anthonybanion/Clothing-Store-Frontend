import { Paragraph } from '../../atoms/text/Paragraph';
export const LoginBottomText = () => {
  return (
    <div className="flex justify-between w-full sm:max-w-80 xl:max-w-96">
      <Paragraph variant="extraSmall" color="text-secondary">
        Do you have an account?
      </Paragraph>
      <Paragraph variant="extraSmall" color="primary">
        Sign In
      </Paragraph>
    </div>
  );
};
