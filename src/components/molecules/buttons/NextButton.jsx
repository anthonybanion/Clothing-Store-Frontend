import { Button } from '../../atoms/button/Button';
import { Paragraph } from '../../atoms/text/Paragraph';

export const NextButton = ({ onClick }) => {
  return (
    <Button variant="secondary" onClick={onClick}>
      <Paragraph variant="bold">Next Step</Paragraph>
    </Button>
  );
};
