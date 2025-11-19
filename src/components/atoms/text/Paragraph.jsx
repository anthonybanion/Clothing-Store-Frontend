// ==========================================
//
// Description: Text Component
//
// File: Text.jsx
// Author: Anthony Bañon
// Created: 2025-11-09
// Last Updated: 2025-11-09
// ==========================================

export const Paragraph = ({
  children,
  variant = 'normal',
  className = '',
  ...props
}) => {
  // Define variant styles
  const variants = {
    normal: 'font-normal font-inter',
    semibold: 'font-semibold font-inter',
    bold: 'font-bold font-inter',
  };

  return (
    <span className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};
