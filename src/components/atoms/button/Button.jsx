export const Button = ({
  children,
  variant = 'default',
  color,
  hoverColor,
  onClick,
}) => {
  const variants = {
    default:
      'font-inter font-bold rounded-xl text-base w-full sm:w-80 h-10 px-4 py-2 xl:w-96 xl:h-12 xl:text-lg text-text-inverse transition-colors',
  };

  // Use direct Tailwind class names
  const colorClass = color ? `${color}` : 'bg-primary';

  // Use direct Tailwind class names
  const hoverClass = hoverColor
    ? hoverColor
    : 'hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-hover';

  return (
    <button
      className={`${variants[variant]} ${colorClass} ${hoverClass}`}
      onClick={onClick}
    >
      {children ? children : 'Button'}
    </button>
  );
};
