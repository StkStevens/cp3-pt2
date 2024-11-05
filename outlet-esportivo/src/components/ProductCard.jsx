import React from 'react';

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg transform transition duration-200 hover:scale-105">
      <img src={image} alt={name} className="h-40 w-full object-cover rounded-t-lg" />
      <h3 className="text-xl font-semibold mt-2">{name}</h3>
      <p className="text-blue-600 font-bold mt-1">{price}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Comprar</button>
    </div>
  );
};

export default ProductCard;