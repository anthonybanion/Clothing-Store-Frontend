export const Text = ({ children, variant = 'default', color }) => {
  const variants = {
    'paragraph-semibold': 'text-sm font-semibold font-inter xl:text-lg',
    'small-regular': 'text-sm font-normal font-inter',
  };

  const colorClass = color ? `text-${color}` : 'text-text-primary';

  return (
    <span className={`${variants[variant]} ${colorClass}`}>{children}</span>
  );
};
