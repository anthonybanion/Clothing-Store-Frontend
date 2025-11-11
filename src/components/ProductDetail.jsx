// components/ProductDetail.jsx
import { useApiData } from '../../hooks/useApiData';
import { productsService } from '../../services/productService';

export const ProductDetail = ({ id }) => {
  const { data, loading, error } = useApiData(() =>
    productsService.getById(id)
  );

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>Error al cargar producto: {error.message}</p>;

  const product = data.product;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p>{product.description}</p>
      <p className="font-semibold">${product.price}</p>
    </div>
  );
};
