import { Button } from '../../atoms/button/Button';
import { FaUser } from 'react-icons/fa';

export const UserIcon = ({ onToggle }) => {
  return (
    <Button icon={FaUser} onClick={onToggle} variant="ghost" className=" p-2" />
  );
};
