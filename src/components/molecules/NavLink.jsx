// components/atoms/NavLink.jsx
import { Link } from 'react-router-dom';

export const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-blue-500 hover:text-blue-700 transition-colors"
    >
      {children}
    </Link>
  );
};
