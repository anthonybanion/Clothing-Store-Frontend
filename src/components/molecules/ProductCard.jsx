// components/molecules/ProductCard.jsx
import { ProductItem } from '../atoms/ProductItem';

export const ProductCard = ({ product }) => (
  <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow flex flex-col items-center">
    <ProductItem product={product} />
    <button className="mt-4 bg-blue-500 text-white text-sm font-medium py-1.5 px-4 rounded hover:bg-blue-600 transition-colors">
      Ver detalles
    </button>
  </div>
);
