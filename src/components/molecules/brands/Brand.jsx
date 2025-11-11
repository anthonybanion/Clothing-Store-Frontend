import { Title } from '../../atoms/title/Title.jsx';
import { ShoppingBag } from 'lucide-react';

export const Brand = () => {
  return (
    <div className="flex items-start gap-3 ">
      <ShoppingBag size={26} style={{ color: 'var(--color-primary)' }} />
      <Title variant="default" color="text-primary">
        Clothing Store
      </Title>
    </div>
  );
};
