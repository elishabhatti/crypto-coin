import React from 'react'
import CryptoCard from './CryptoCard'

const CryptoList = ({ coinsData }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {coinsData.map((coin, index) => (
        <CryptoCard
          key={index}
          image={coin.image}
          name={coin.name}
          price={coin.current_price}
        />
      ))}
    </div>
  );
}

export default CryptoList;
