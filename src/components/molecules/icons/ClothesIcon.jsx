import { Button } from '../../atoms/button/Button';
import { GiClothes } from 'react-icons/gi';

export const ClothesIcon = ({ onToggle }) => {
  return (
    <Button
      icon={GiClothes}
      onClick={onToggle}
      variant="ghost"
      className=" p-2"
    />
  );
};
