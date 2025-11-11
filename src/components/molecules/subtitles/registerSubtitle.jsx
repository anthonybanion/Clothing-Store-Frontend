import { Title } from '../../atoms/text/Title';
import { Paragraph } from '../../atoms/text/Paragraph';

export const RegisterSubtitle = () => {
  return (
    <div className="flex flex-col gap-2">
      <Title variant="h3SemiBold">Create Account</Title>
      <Paragraph variant="smallSemibold" color="text-placeholder">
        Tell us a little about yourself
      </Paragraph>
    </div>
  );
};
