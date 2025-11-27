// ==========================================
//
// Description: Home Template
//
// File: HomeTemplate.jsx
// Author: Anthony Bañon
// Created: 2025-11-25
// Last Updated: 2025-11-25
// ==========================================

import { HomeHeader } from '../../organisms/home_header/HomeHeader';
import { Carousel } from '../../organisms/corousel/Corousel';
import { LoadingSpinner } from '../../atoms/spinner/LoadingSpinner';

export const HomeTemplate = ({
  children,
  carouselImages,
  categoriesContent,
  isLoading = false,
}) => {
  return (
    <div>
      <HomeHeader />
      <Carousel images={carouselImages} />

      {/* ✅ Container layout en template */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {isLoading ? (
          <LoadingSpinner message="Loading categories..." />
        ) : (
          categoriesContent
        )}
      </div>

      {/* ✅ Contenido fijo en template */}
      <p className="text-center mt-8">
        Discover the latest trends in fashion and shop your favorite styles.
      </p>

      {children}
    </div>
  );
};
