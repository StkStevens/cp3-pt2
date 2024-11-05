import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8 text-center">
      <p>Desenvolvido por (Estevam Melo Acosta / RM555124)</p>
      <div className="flex justify-center space-x-4 mt-2 text-gray-400">
        <i className="fab fa-instagram text-2xl hover:text-white transition duration-300 cursor-pointer">@estevameloacosta</i>
      </div>
    </footer>
  );
};

export default Footer;