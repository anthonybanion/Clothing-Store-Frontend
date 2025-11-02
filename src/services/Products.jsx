// components/Products.jsx
import { useState, useEffect } from 'react';
import { productsAPI } from '../services/api';

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const result = await productsAPI.getAll();

        // Acceder a la propiedad "data" que contiene el array
        if (result.data && Array.isArray(result.data)) {
          setProducts(result.data);
        } else {
          console.error('No se encontró data:', result);
          setProducts([]);
        }
      } catch (error) {
        console.error('Error cargando productos:', error);
      }
    };

    loadProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - {product.sku}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
