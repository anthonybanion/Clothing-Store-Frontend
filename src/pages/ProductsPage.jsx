// components/pages/ProductsPage.jsx
import { useApiData } from '../hooks/useApiData';
import { Navigation } from '../components/organisms/Navigation';
import { productsService } from '../services/productService';
import { ProductList } from '../components/organisms/ProductList';
import { LoadingSpinner } from '../components/atoms/LoadingSpinner';
import { MainLayout } from '../components/templates/MainLayout';

export const ProductsPage = () => {
  const { data: products, loading } = useApiData(productsService.getAll);
  if (loading) return <LoadingSpinner />;

  return (
    <MainLayout sidebar={<Navigation />} header={<h1>Productos</h1>}>
      <ProductList products={products} />
    </MainLayout>
  );
};
