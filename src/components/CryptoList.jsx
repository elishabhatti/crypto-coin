import React from "react";
import CryptoCard from "./CryptoCard";

const CryptoList = ({ coinsData, onCoinClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {coinsData.map((coin) => (
        <CryptoCard
          key={coin.id}
          image={coin.image}
          name={coin.name}
          price={coin.current_price}
          onClick={() => onCoinClick(coin)}
        />
      ))}
    </div>
  );
};

export default CryptoList;
