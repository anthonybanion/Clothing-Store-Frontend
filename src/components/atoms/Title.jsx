export const Title = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'text-text-primary text-xl font-semibold font-family-inter',
  };

  return <h1 className={variants[variant]}>{children}</h1>;
};
