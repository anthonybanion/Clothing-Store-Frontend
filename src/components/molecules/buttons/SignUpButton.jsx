import { Button } from '../../atoms/button/Button';
import { Paragraph } from '../../atoms/text/Paragraph';

export const SignUpButton = ({ onClick }) => {
  return (
    <Button variant="default" onClick={onClick}>
      <Paragraph variant="bold">Sign Up</Paragraph>
    </Button>
  );
};
