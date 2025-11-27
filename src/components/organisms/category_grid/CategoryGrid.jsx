import { CategoryCard } from '../../molecules/cards/CategoryCard';
import { LoadingSpinner } from '../../atoms/spinner/LoadingSpinner';
import { memo } from 'react';

export const CategoryGrid = memo(({ categories }) => {
  if (!categories || categories.length === 0) {
    return <LoadingSpinner message="No categories available at the moment." />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 sm:gap-4 lg:gap-10">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          imageMobile={category.imageMobile}
          imageDesktop={category.imageDesktop}
          alt={category.imageAlt}
          name={category.name}
        />
      ))}
    </div>
  );
});
