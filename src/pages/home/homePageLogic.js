// ==========================================
//
// Description: Home Page Business Logic
//
// File: homePageLogic.js
// Author: Anthony Bañon
// Created: [Fecha]
// Last Updated: [Fecha]
// ==========================================

import { categoryService } from '../../services/category/categoryService';
import { useNotification } from '../../hooks/useNotification';
import { useState, useEffect, useMemo } from 'react';

const STATIC_URL =
  import.meta.env.VITE_STATIC_URL || 'http://localhost:5000/uploads';

export const useHomePageLogic = () => {
  const { showError } = useNotification();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await categoryService.getAll();
        console.log('Categories response:', response);

        const categoriesData = response.data?.categories || [];
        const transformedCategories = categoriesData.map((category) => ({
          id: category._id,
          name: category.name,
          imageSrc: category.image?.desktop
            ? `${STATIC_URL}${category.image.desktop.replace('/uploads/', '/')}`
            : '/default-image.jpg',
          imageAlt: category.name,
        }));

        console.log('Transformed categories:', transformedCategories);
        setCategories(transformedCategories);
      } catch (error) {
        console.error('Get categories error:', error);
        showError('Failed to load categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [showError]);

  const result = useMemo(
    () => ({
      categories,
      loading,
    }),
    [categories, loading]
  );

  return result;
};
