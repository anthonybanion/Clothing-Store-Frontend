import { HomeHeader } from '../../components/organisms/home_header/HomeHeader';
import { Carousel } from '../../components/organisms/corousel/Corousel';
import { CategoryGrid } from '../../components/organisms/category_grid/CategoryGrid';
import { homePageLogic } from './homePageLogic';

import slide1 from '../../assets/images/carousel/slide1.webp';
import slide2 from '../../assets/images/carousel/slide2.webp';
import slide3 from '../../assets/images/carousel/slide3.webp';

export default function HomePage() {
  const { categories } = homePageLogic();

  return (
    <div>
      <HomeHeader />
      <Carousel images={[slide1, slide2, slide3]} />
      <CategoryGrid categories={categories} />
      <p>
        Discover the latest trends in fashion and shop your favorite styles.
      </p>
    </div>
  );
}
