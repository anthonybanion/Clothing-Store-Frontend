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
  className = '',
  ...props
}) => {
  const baseStyles =
    'flex justify-center items-center font-inter font-bold rounded-xl text-sm sm:text-base w-full px-4 h-6 sm:h-8 py-2.5 sm:py-4 text-text-inverse transition-colors';
  // Define variant styles
  const variants = {
    default:
      'bg-primary hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-hover',
    secondary:
      'bg-text-icons hover:bg-text-primary focus:bg-text-primary active:bg-text-primary',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
