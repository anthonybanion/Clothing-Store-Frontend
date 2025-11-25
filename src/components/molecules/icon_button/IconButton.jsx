// components/molecules/IconButton.jsx
import { Button } from '../atoms/Button';

export const IconButton = ({
  icon: IconComponent,
  onClick,
  className = '',
  iconClassName = 'w-6 h-6 text-text-icons',
  ...props
}) => {
  return (
    <Button
      variant="secondary"
      onClick={onClick}
      className={`!w-auto !p-2 ${className}`}
      {...props}
    >
      <IconComponent className={iconClassName} />
    </Button>
  );
};
