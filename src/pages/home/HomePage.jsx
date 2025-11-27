// ==========================================
//
// Description: Home Page
//
// File: HomePage.jsx
// Author: Anthony Bañon
// Created: 2025-11-25
// Last Updated: 2025-11-25
// ==========================================

import { HomeTemplate } from '../../components/templates/home_layout/HomeTemplate';
import { CategoryGrid } from '../../components/organisms/category_grid/CategoryGrid';
import { useHomePageLogic } from './homePageLogic';
import { useMemo } from 'react';

import slide1 from '../../assets/images/carousel/slide1.webp';
import slide2 from '../../assets/images/carousel/slide2.webp';
import slide3 from '../../assets/images/carousel/slide3.webp';

export default function HomePage() {
  // Use custom hook for home page logic
  const { categories, loading } = useHomePageLogic();

  // Memoize carousel images to avoid re-creation on each render
  const carouselImages = useMemo(() => [slide1, slide2, slide3], []);

  // ADD THIS - useMemo for categoriesContent
  const categoriesContent = useMemo(
    () => <CategoryGrid categories={categories} />,
    [categories]
  );

  return (
    <HomeTemplate
      carouselImages={carouselImages}
      categoriesContent={categoriesContent}
      isLoading={loading}
    />
  );
}
