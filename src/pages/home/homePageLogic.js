import { categoryService } from '../../services/category/categoryService';
import { useNotification } from '../../hooks/useNotification';
import { useState, useEffect } from 'react';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const homePageLogic = () => {
  const { showError } = useNotification();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await categoryService.getAll();
        console.log('API Response:', response); // Para debugging

        // Extraer el array de categorías de response.data.categories
        const categoriesData = response.data?.categories || [];

        // Transformar los datos para que coincidan con lo que espera CategoryCard
        const transformedCategories = categoriesData.map((category) => ({
          id: category._id,
          name: category.name,
          imageSrc: category.image?.desktop
            ? `${BASE_URL}${category.image.desktop}`
            : '/default-category.jpg',
          imageAlt: category.name,
          description: category.description,
        }));

        console.log('Transformed categories:', transformedCategories); // Para debugging
        setCategories(transformedCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
        showError('Failed to load categories');
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [showError]);

  return {
    categories,
    loading,
  };
};
