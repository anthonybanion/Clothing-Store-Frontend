import { Brand } from '../../molecules/brand/Brand';
import { HamburgerMenu } from '../../molecules/menus/HamburgerMenu';
import { HomeIcon } from '../../molecules/icons/HomeIcon';
import { CartIcon } from '../../molecules/icons/CartIcon';
import { UserIcon } from '../../molecules/icons/UserIcon';
import { ClothesIcon } from '../../molecules/icons/ClothesIcon';
import { Link } from '../../atoms/link/Link';
import { Paragraph } from '../../atoms/text/Paragraph';

export const HomeHeader = () => {
  return (
    <header className="flex justify-between items-center py-4 px-4 border-b border-border h-13 md:h-16">
      <Brand />

      <div className=" hidden md:flex md:gap-6">
        <Link to="/clothes">
          <Paragraph className="text-xs md:text-sm text-text-secondary">
            Men
          </Paragraph>
        </Link>
        <Link to="/woman">
          <Paragraph className="text-xs md:text-sm text-text-secondary">
            Woman
          </Paragraph>
        </Link>
        <Link to="/accessories">
          <Paragraph className="text-xs md:text-sm text-text-secondary">
            Accessories
          </Paragraph>
        </Link>
      </div>

      <div className=" hidden sm:flex md:gap-4">
        <Link to="/">
          <HomeIcon />
        </Link>
        <Link to="/clothes">
          <ClothesIcon />
        </Link>
        <Link to="/cart">
          <CartIcon />
        </Link>
        <Link to="/profile">
          <UserIcon />
        </Link>
      </div>

      <div className="sm:hidden">
        <HamburgerMenu />
      </div>
    </header>
  );
};
