// ==========================================
//
// Description: Text
//
// File: Text.jsx
// Author: Anthony Bañon
// Created: 2025-11-09
// Last Updated: 2025-11-09
// ==========================================

export const Paragraph = ({
  children,
  variant = 'default',
  className = '',
  ...props
}) => {
  const variants = {
    default: 'text-base font-normal font-inter xl:text-lg text-text-primary',
    paragraphSemibold:
      'text-sm font-semibold font-inter xl:text-lg text-text-primary',
    smallRegular: 'text-sm font-normal font-inter text-text-primary',
    smallSemibold:
      'text-sm font-semibold font-inter xl:text-base text-text-primary',
    extraSmall: 'text-xs font-normal font-inter xl:text-sm text-text-primary',
  };

  return (
    <span className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};
