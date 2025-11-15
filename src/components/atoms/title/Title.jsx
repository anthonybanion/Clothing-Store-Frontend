// ==========================================
//
// Description: Title
//
// File: Title.jsx
// Author: Anthony Bañon
// Created: 2025-11-09
// Last Updated: 2025-11-09
// ==========================================
export const Title = ({
  children,
  variant = 'default',
  className = '',
  ...props
}) => {
  const baseStyles = 'font-inter text-text-primary';

  const variants = {
    default: 'text-xl font-semibold',
    h2Bold: 'text-2xl font-bold xl:text-3xl',
    h3SemiBold: 'text-lg font-semibold xl:text-2xl',
  };

  return (
    <h1
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
};
