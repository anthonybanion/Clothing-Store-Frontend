import { Title } from '../../atoms/title/Title.jsx';
import { ShoppingBag } from 'lucide-react';

export const RedBrand = () => {
  return (
    <div className="flex items-start gap-2 ">
      <ShoppingBag className="w-6 h-6 xl:w-8 xl:h-8 text-[var(--color-primary)]" />
      <Title variant="h2Bold" color="primary">
        Clothing Store
      </Title>
    </div>
  );
};
