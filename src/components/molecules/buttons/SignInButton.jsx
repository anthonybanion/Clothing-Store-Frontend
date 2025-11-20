import { Button } from '../../atoms/button/Button';
import { Paragraph } from '../../atoms/text/Paragraph';

export const SignInButton = ({ onClick }) => {
  return (
    <Button variant="default" onClick={onClick}>
      <Paragraph variant="bold">Sign In</Paragraph>
    </Button>
  );
};
