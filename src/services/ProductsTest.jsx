import { useState, useEffect } from 'react';

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((result) => {
        console.log('📡 Result completo:', result);

        // Acceder a la propiedad "data" que contiene el array
        if (result.data && Array.isArray(result.data)) {
          setProducts(result.data);
        } else {
          console.error('No se encontró data:', result);
          setProducts([]);
        }
      })
      .catch((error) => console.error('Error:', error));
  }, []);
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {' '}
            {product.name} - {product.sku}{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
