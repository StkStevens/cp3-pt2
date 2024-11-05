import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-4 px-8 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold tracking-widest">Outlet Esportivo</h1>
      <nav>
        <ul className="flex space-x-6 text-lg font-medium">
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">Produtos</li>
          <li className="hover:text-gray-200 cursor-pointer">Ofertas</li>
          <li className="hover:text-gray-200 cursor-pointer">Contato</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;