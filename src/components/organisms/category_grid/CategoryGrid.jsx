import { CategoryCard } from '../../molecules/cards/CategoryCard';

export const CategoryGrid = ({ categories }) => {
  if (!categories || categories.length === 0) {
    return (
      <div className="text-center py-8">
        <p>No categories available at the moment.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-4 lg:gap-6">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          src={category.imageSrc}
          alt={category.imageAlt}
          name={category.name}
        />
      ))}
    </div>
  );
};
