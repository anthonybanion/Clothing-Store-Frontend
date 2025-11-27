// components/molecules/menus/HamburgerMenu.jsx
import { IoMenu } from 'react-icons/io5';
import { Button } from '../../atoms/button/Button';

export const HamburgerMenu = ({ onToggle }) => {
  return (
    <Button icon={IoMenu} onClick={onToggle} variant="ghost" className=" p-2" />
  );
};
