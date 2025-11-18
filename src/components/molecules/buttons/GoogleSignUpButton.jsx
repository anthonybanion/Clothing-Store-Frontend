import { Button } from '../../atoms/button/Button';
import { FaGoogle } from 'react-icons/fa';
import { Paragraph } from '../../atoms/text/Paragraph';

export const GoogleSignUpButton = ({ onClick }) => {
  return (
    <Button
      variant="default"
      className="flex items-center justify-center gap-2"
      onClick={onClick}
    >
      <FaGoogle className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
      <Paragraph variant="bold">Sign Up with Google</Paragraph>
    </Button>
  );
};
