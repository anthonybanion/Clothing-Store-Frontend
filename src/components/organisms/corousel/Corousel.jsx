// organisms/CarouselOrganism.jsx
import { useState } from 'react';
import { CarouselSlide } from '../../molecules/slides/CarouselSlide';
import { CarouselButton } from '../../molecules/buttons/CarouselButton';

export const Carousel = ({ images = [] }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative overflow-hidden w-full h-64 md:h-80 lg:min-h-110">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <CarouselSlide key={i} src={img} alt={`slide-${i}`} />
        ))}
      </div>

      {/* Controles */}
      <CarouselButton onPrev={prev} onNext={next} />
    </div>
  );
};
