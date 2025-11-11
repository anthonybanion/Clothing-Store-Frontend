import React from 'react';
import { getImageUrl } from '../../services/apiClient';

export const ProductItem = ({ product }) => {
  const imageUrl = getImageUrl(product.image?.desktop);

  return (
    <div className="flex flex-col items-center">
      <img
        src={imageUrl}
        alt={product.name || 'Producto sin nombre'}
        className="w-64 h-64 object-cover rounded-lg border border-gray-200"
        onError={(e) => {
          console.log('Error cargando imagen:', e.target.src);
          e.target.src = '/placeholder-image.jpg';
        }}
      />
      <h3 className="mt-2 text-sm font-medium text-gray-900">
        {product.name || 'Producto sin nombre'}
      </h3>
      <p className="text-sm text-gray-500">
        {product.price
          ? `$${product.price.toFixed(2)}`
          : 'Precio no disponible'}
      </p>
    </div>
  );
};
