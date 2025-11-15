// ==========================================
//
// Description: Input
//
// File: Input.jsx
// Author: Anthony Bañon
// Created: 2025-11-11
// Last Updated: 2025-11-11
// ==========================================

export const Input = ({ variant = 'default', className = '', ...props }) => {
  const baseStyles =
    'font-inter font-normal border rounded-xl outline-none transition-colors text-sm w-full px-4 py-2';

  const variants = {
    default:
      'border-text-secondary text-text-primary placeholder-text-placeholder hover:border-border focus:border-border focus:ring focus:ring-border',
  };

  return (
    <input
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    />
  );
};
