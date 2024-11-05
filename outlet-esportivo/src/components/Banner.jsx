import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-72 bg-cover bg-center flex items-center justify-center text-center text-white p-6" style={{ backgroundImage: "url('/caminho/para/imagem.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold">Semana Especial de Descontos!</h2>
        <p className="text-xl mt-2 font-semibold">Até 50% OFF em produtos selecionados</p>
      </div>
    </div>
  );
};

export default Banner;