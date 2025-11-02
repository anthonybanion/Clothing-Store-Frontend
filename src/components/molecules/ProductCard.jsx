import { ProductItem } from '../atoms/ProductItem';

export const ProductCard = ({ product }) => (
  <div className=" bg-red-100 m-2 p-4 h-32 w-100 rounded shadow hover:shadow-lg transition-shadow">
    <ProductItem product={product} />
    <button className="mt-2 bg-blue-500 text-white py-1 px-2 rounded">
      Ver detalles
    </button>
  </div>
);
