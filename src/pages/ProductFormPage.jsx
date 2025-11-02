// components/pages/ProductFormPage.jsx
import { useForm } from '../../hooks/useForm';
import {
  validateRequired,
  validateUrl,
  validateMinLength,
} from '../../utils/validations';

export const ProductFormPage = () => {
  const form = useForm({
    sku: '',
    name: '',
    price: '',
    image: '',
  });

  // ✅ Validaciones ESPECÍFICAS de producto aquí mismo
  const validateProductField = (name, value) => {
    switch (name) {
      case 'sku':
        return validateRequired(value) || validateMinLength(value, 3);
      case 'name':
        return validateRequired(value) || validateMinLength(value, 2);
      case 'price':
        return (
          validateRequired(value) || (value <= 0 ? 'Precio mayor a 0' : '')
        );
      case 'image':
        return value ? validateUrl(value) : '';
      default:
        return '';
    }
  };

  const handleSubmit = () => {
    const errors = {};
    Object.keys(form.values).forEach((field) => {
      errors[field] = validateProductField(field, form.values[field]);
    });

    // Manejar errores...
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>SKU</label>
        <input
          type="text"
          value={form.values.sku}
          onChange={(e) => form.handleChange('sku', e.target.value)}
          onBlur={() => form.handleBlur('sku')}
        />
        {form.touched.sku && form.errors.sku && <span>{form.errors.sku}</span>}
      </div>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={form.values.name}
          onChange={(e) => form.handleChange('name', e.target.value)}
          onBlur={() => form.handleBlur('name')}
        />
        {form.touched.name && form.errors.name && (
          <span>{form.errors.name}</span>
        )}
      </div>
      <div>
        <label>Price</label>
        <input
          type="number"
          value={form.values.price}
          onChange={(e) => form.handleChange('price', e.target.value)}
          onBlur={() => form.handleBlur('price')}
        />
        {form.touched.price && form.errors.price && (
          <span>{form.errors.price}</span>
        )}
      </div>
      <div>
        <label>Image URL</label>
        <input
          type="text"
          value={form.values.image}
          onChange={(e) => form.handleChange('image', e.target.value)}
          onBlur={() => form.handleBlur('image')}
        />
        {form.touched.image && form.errors.image && (
          <span>{form.errors.image}</span>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
