// utils/validations.js

// Regular expressions (las mismas del backend)
const SKU_REGEX = /^[A-Z0-9-]{3,20}$/;
const NAME_REGEX = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 .,'\-]{2,150}$/;
const IMAGE_URL_REGEX = /^https:\/\/.*$/;

// Funciones de validación para React
export const validateSku = (sku) => {
  if (!sku) return 'SKU is required';
  if (sku.length < 3 || sku.length > 20) return 'SKU must be 3-20 characters';
  if (!SKU_REGEX.test(sku))
    return 'SKU can only contain uppercase letters, numbers, and hyphen';
  return '';
};

export const validateName = (name) => {
  if (!name) return 'Product name is required';
  if (name.length < 2 || name.length > 150)
    return 'Name must be 2-150 characters';
  if (!NAME_REGEX.test(name)) return 'Product name contains invalid characters';
  return '';
};

export const validateImage = (image) => {
  if (!image) return ''; // Opcional
  try {
    new URL(image);
    if (!IMAGE_URL_REGEX.test(image)) return 'Image must be HTTPS URL';
  } catch {
    return 'Image must be a valid URL';
  }
  return '';
};

export const validateDescription = (description) => {
  if (!description) return ''; // Opcional
  if (description.length < 2 || description.length > 2000)
    return 'Description must be 2-2000 characters';
  return '';
};

export const validatePrice = (price) => {
  if (!price && price !== 0) return 'Price is required';
  const numPrice = parseFloat(price);
  if (isNaN(numPrice) || numPrice < 0.01) return 'Price must be greater than 0';
  return '';
};

export const validateStock = (stock) => {
  if (!stock && stock !== 0) return 'Stock is required';
  const numStock = parseInt(stock);
  if (isNaN(numStock) || numStock < 0)
    return 'Stock must be a non-negative integer';
  return '';
};

// Validación completa del producto
export const validateProduct = (productData, isPartialUpdate = false) => {
  const errors = {};

  if (!isPartialUpdate || productData.sku !== undefined) {
    errors.sku = validateSku(productData.sku);
  }

  if (!isPartialUpdate || productData.name !== undefined) {
    errors.name = validateName(productData.name);
  }

  if (productData.image !== undefined) {
    errors.image = validateImage(productData.image);
  }

  if (productData.description !== undefined) {
    errors.description = validateDescription(productData.description);
  }

  if (!isPartialUpdate || productData.price !== undefined) {
    errors.price = validatePrice(productData.price);
  }

  if (!isPartialUpdate || productData.stock !== undefined) {
    errors.stock = validateStock(productData.stock);
  }

  // Para actualización parcial: validar que hay al menos un campo
  if (isPartialUpdate && Object.keys(productData).length === 0) {
    errors._general = 'At least one field must be provided for update';
  }

  // Filtrar errores vacíos
  const filteredErrors = Object.fromEntries(
    Object.entries(errors).filter(([_, value]) => value !== '')
  );

  return filteredErrors;
};
