// components/ProductList.jsx
import { ProductCard } from '../../molecules/ProductCard';
import { useApiData } from '../../../hooks/useApiData';
import { productsService } from '../../../services/productService';

export const ProductList = () => {
  const { data, loading, error } = useApiData(productsService.getAll, {
    products: [],
  });

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos: {error.message}</p>;

  const products = data?.products || [];

  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};
