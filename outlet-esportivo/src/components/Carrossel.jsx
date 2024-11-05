import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carrossel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  // Definindo produtos com nomes e preços variados
  const products = [
    { id: 1, name: 'Bolsa Grande', price: 'R$ 150,00', image: 'produto1.jpg' },
    { id: 2, name: 'Meias', price: 'R$ 20,00', image: 'produto2.jpg' },
    { id: 3, name: 'Bolsinha', price: 'R$ 80,00', image: 'produto3.jpg' },
    { id: 4, name: 'Tênis de Corrida', price: 'R$ 949,99', image: 'tenis.png' },
    { id: 5, name: 'Camiseta Esportiva', price: 'R$ 99,99', image: 'camiseta.jpg' }
  ];

  return (
    <div className="p-8 bg-gray-100">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-blue-600 font-bold mt-2">{product.price}</p>
                <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrossel;