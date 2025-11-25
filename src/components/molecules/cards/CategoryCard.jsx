import { Image } from '../../atoms/image/Image';
import { Paragraph } from '../../atoms/text/Paragraph';

export const CategoryCard = ({ src, alt, name }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200">
      <div className="w-full h-48 overflow-hidden rounded-lg shadow-md">
        <Image src={src} alt={alt} />
      </div>
      <Paragraph className="mt-2 text-center font-semibold">{name}</Paragraph>
    </div>
  );
};
