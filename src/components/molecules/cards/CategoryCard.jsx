import { ResponsiveImage } from '../responsive_image/ResponsiveImage';
import { Paragraph } from '../../atoms/text/Paragraph';

export const CategoryCard = ({ imageMobile, imageDesktop, alt, name }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200">
      <div className="w-full h-48 overflow-hidden rounded-lg shadow-md">
        <ResponsiveImage
          mobileSrc={imageMobile}
          desktopSrc={imageDesktop}
          alt={alt}
        />
      </div>
      <Paragraph className="mt-2 text-center font-semibold">{name}</Paragraph>
    </div>
  );
};
