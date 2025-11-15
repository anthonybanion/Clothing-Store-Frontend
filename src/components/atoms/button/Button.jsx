/**
 * Atomic Button Component
 * Reusable button with variant support
 * Uses design system tokens from Figma
 */
export const Button = ({
  children,
  variant = 'default',
  className = '',
  ...props
}) => {
  const baseStyles =
    'font-inter font-bold rounded-xl text-base w-full px-4 py-2 text-text-inverse transition-colors';

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
