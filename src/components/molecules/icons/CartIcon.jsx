import { Button } from '../../atoms/button/Button';
import { FaShoppingCart } from 'react-icons/fa';

export const CartIcon = ({ onToggle }) => {
  return (
    <Button
      icon={FaShoppingCart}
      onClick={onToggle}
      variant="ghost"
      className=" p-2"
    />
  );
};
