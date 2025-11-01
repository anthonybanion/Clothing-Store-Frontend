export const Text = ({ children, variant = 'default' }) => {
  const variants = {
    // Texto 1
    'small-regular': 'text-[#71717A] text-sm font-normal font-inter',
    // Texto 2
    'paragraph-semibold': 'text-[#1C1C1C] text-lg font-semibold font-inter',
    // Texto 3
    'small-regular-primary': 'text-[#1C1C1C] text-sm font-normal font-inter',
    // Texto 4
    'small-semibold': 'text-[#71717A] text-sm font-semibold font-inter',
  };

  return <span className={variants[variant]}>{children}</span>;
};
