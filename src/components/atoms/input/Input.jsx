export const Input = ({ children, variant = 'default', text, type }) => {
  const variants = {
    default:
      'font-normal border border-text-secondary rounded-xl font-inter hover:border-border focus:border-border focus:ring focus:ring-border outline-none transition-colors text-sm w-full sm:w-80 h-10 px-4 py-2 xl:w-96 xl:h-12 xl:text-lg placeholder:text-text-placeholder hover:placeholder:text-text-secondary focus:placeholder:text-text-secondary text-text-primary',
  };

  const inputText = text ? text : 'Input Field';
  const inputType = type ? type : 'text';

  return (
    <input
      type={inputType}
      className={variants[variant]}
      placeholder={inputText}
    />
  );
};
