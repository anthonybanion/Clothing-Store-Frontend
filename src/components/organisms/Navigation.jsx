export const Navigation = () => {
  return (
    <nav className=" bg-gray-400 h-full text-white p-4">
      <ul className="d-flex flex-column align-items-between ">
        <li className="font-bold">
          <a href="/products">Productos</a>
        </li>
        <li className="font-bold">
          <a href="/about">Acerca de</a>
        </li>
        <li className="font-bold">
          <a href="/contact">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};
