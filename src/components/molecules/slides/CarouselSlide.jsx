// ==========================================
//
// Description: Corousel Slide
//
// File: CarouselSlide.jsx
// Author: Anthony Bañon
// Created: 2025-11-24
// Last Updated: 2025-11-24
// ==========================================

import { Image } from '../../atoms/image/Image';

export const CarouselSlide = ({ src, alt }) => (
  <div className="flex-[0_0_100%] h-64 md:h-80 lg:min-h-110">
    <Image src={src} alt={alt} className="object-top" />
  </div>
);
