import { HomeHeader } from '../../components/organisms/home_header/HomeHeader';
import { Carousel } from '../../components/organisms/corousel/Corousel';
import { CategoryGrid } from '../../components/organisms/category_grid/CategoryGrid';
import { useHomePageLogic } from './homePageLogic';
import { LoadingSpinner } from '../../components/atoms/spinner/LoadingSpinner';

import slide1 from '../../assets/images/carousel/slide1.webp';
import slide2 from '../../assets/images/carousel/slide2.webp';
import slide3 from '../../assets/images/carousel/slide3.webp';

export default function HomePage() {
  const { categories, loading } = useHomePageLogic();

  if (loading) {
    return (
      <div>
        <HomeHeader />
        <Carousel images={[slide1, slide2, slide3]} />
        <LoadingSpinner message="Loading categories..." />
      </div>
    );
  }

  return (
    <div>
      <HomeHeader />
      <Carousel images={[slide1, slide2, slide3]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <CategoryGrid categories={categories} />
      </div>

      <p className="text-center mt-8">
        Discover the latest trends in fashion and shop your favorite styles.
      </p>
    </div>
  );
}
