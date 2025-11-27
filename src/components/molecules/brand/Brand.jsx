import { Title } from '../../atoms/text/Title';
import { IoBagHandleSharp } from 'react-icons/io5';

export const Brand = () => {
  return (
    <div className="flex items-start gap-3 ">
      <IoBagHandleSharp size={26} style={{ color: 'var(--color-primary)' }} />
      <Title variant="brand" color="text-primary">
        Clothing Store
      </Title>
    </div>
  );
};
