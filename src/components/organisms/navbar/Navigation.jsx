// components/organisms/Navigation.jsx
import { NavLink } from '../molecules/NavLink';

export const Navigation = () => {
  return (
    <nav className="flex flex-col gap-4 p-4 bg-gray-100">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Productos</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
};
