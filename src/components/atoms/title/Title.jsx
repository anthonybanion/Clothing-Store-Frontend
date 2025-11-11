// ==========================================
//
// Description: Title
//
// File: Title.jsx
// Author: Anthony Bañon
// Created: 2025-11-09
// Last Updated: 2025-11-09
// ==========================================

export const Title = ({ children, variant = 'default', color }) => {
  const variants = {
    default: 'text-xl font-semibold font-family-inter',
    h2Bold: 'text-2xl font-bold font-family-inter xl:text-3xl',
    h3SemiBold: 'text-lg font-semibold font-family-inter xl:text-2xl',
  };
  const colorClass = color ? `text-${color}` : 'text--color-primary';

  return <h1 className={`${variants[variant]} ${colorClass}`}>{children}</h1>;
};
