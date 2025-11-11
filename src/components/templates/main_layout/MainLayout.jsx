// components/templates/MainLayout.jsx
export const MainLayout = ({ children, sidebar, header }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-600 text-white p-4 text-center text-2xl font-bold">
        {header || <h1>Mi App</h1>}
      </header>
      <div className="content flex">
        <aside className="bg-gray-200 w-42 p-4">{sidebar}</aside>
        <main className="main flex-1">{children}</main>
      </div>
    </div>
  );
};
