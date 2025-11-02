import { ProductCard } from '../molecules/ProductCard';

export const ProductList = ({ products }) => (
  <div className="bg-pink-300 p-4 grid grid-cols-2 gap-8 m-8">
    {products.map((product) => (
      <ProductCard key={product._id} product={product} />
    ))}
  </div>
);
