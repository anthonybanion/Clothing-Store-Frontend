// components/ProductForm.jsx
import { useState } from 'react';
import { productsService } from '../../services/productService';

export const ProductForm = () => {
  const [formData, setFormData] = useState({ name: '', price: 0 });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await productsService.create(formData);
      setMessage(res.message || 'Producto creado');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 p-6 bg-gray-100 rounded-xl"
    >
      <input
        type="text"
        placeholder="Nombre del producto"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="p-2 rounded border"
      />
      <input
        type="number"
        placeholder="Precio"
        value={formData.price}
        onChange={(e) =>
          setFormData({ ...formData, price: parseFloat(e.target.value) })
        }
        className="p-2 rounded border"
      />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded">
        Crear producto
      </button>
      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  );
};
