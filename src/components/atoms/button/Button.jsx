// ==========================================
//
// Description: Button Component
//
// File: Button.jsx
// Author: Anthony Bañon
// Created: 2025-11-14
// Last Updated: 2025-11-14
// ==========================================

export const Button = ({
  children,
  variant = 'default',
  icon: IconComponent,
  iconClassName = 'w-5 h-5 md:w-6 md:h-6 text-text-icons',
  className = '',
  ...props
}) => {
  const baseStyles =
    'flex justify-center items-center font-inter font-bold rounded-xl transition-colors text-sm sm:text-base text-text-inverse';
  // Define variant styles
  const variants = {
    default:
      'bg-primary hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-hover',
    secondary:
      'bg-text-icons hover:bg-text-primary focus:bg-text-primary active:bg-text-primary',
    ghost:
      'bg-transparent hover:bg-[var(--color-bg-info)] focus:bg-[var(--color-bg-info)] active:bg-[var(--color-bg-info)] focus:outline-none',
  };

  const isIconButton = !children && IconComponent;
  const buttonVariant = isIconButton ? 'ghost' : variant;

  return (
    <button
      className={`${baseStyles} ${variants[buttonVariant]} ${className}`}
      {...props}
    >
      {IconComponent && <IconComponent className={iconClassName} />}
      {children}
    </button>
  );
};
