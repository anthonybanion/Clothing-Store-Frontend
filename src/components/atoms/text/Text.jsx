// ==========================================
//
// Description: Text
//
// File: Text.jsx
// Author: Anthony Bañon
// Created: 2025-11-09
// Last Updated: 2025-11-09
// ==========================================

export const Text = ({ children, variant = 'default', color }) => {
  const variants = {
    default: 'text-base font-normal font-inter xl:text-lg',
    paragraphSemibold: 'text-sm font-semibold font-inter xl:text-lg',
    smallRegular: 'text-sm font-normal font-inter',
  };

  const colorClass = color ? `text-${color}` : 'text-text-primary';

  return (
    <span className={`${variants[variant]} ${colorClass}`}>{children}</span>
  );
};
