import React, { useState } from "react";
import CoinsDetails from "./CoinsDetails";

const CryptoCard = ({ currentPosts, coinsData }) => {
  const [selectedCoin, setSelectedCoin] = useState(null);

  const handleCryptoCoinCard = (id) => {
    const coin = coinsData.find((coin) => coin.id === id);
    setSelectedCoin(coin);
  };

  return (
    <div className="flex flex-col  lg:items-start gap-6">
      {selectedCoin && (
        <div className="w-full">
          <CoinsDetails
            selectedCoin={selectedCoin}
            setSelectedCoin={setSelectedCoin}
          />
        </div>
      )}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 w-full`}
      >
        {currentPosts.map((coin) => (
          <div onClick={() => handleCryptoCoinCard(coin.id)} key={coin.id}>
            <div className="bg-white/5 border border-white/10 p-4 rounded-lg shadow-md transition hover:bg-white/10 cursor-pointer">
              <img
                src={coin.image}
                alt={coin.name}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-center">{coin.name}</h2>
              <h3 className="text-md text-center">
                ${coin.current_price.toLocaleString()}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoCard;
