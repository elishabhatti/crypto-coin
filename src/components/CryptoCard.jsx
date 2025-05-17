import React from 'react'

const CryptoCard = ({ image, name, price }) => {
  return (
    <div className="bg-white/5 border border-white/10 p-4 rounded-lg shadow-md transition hover:bg-white/10">
      <img src={image} alt={name} className="w-16 h-16 mx-auto mb-4" />
      <h2 className="text-xl font-semibold text-center">{name}</h2>
      <h3 className="text-md text-center">${price.toLocaleString()}</h3>
    </div>
  );
}

export default CryptoCard;
