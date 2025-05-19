import React from "react";

const CoinsDetails = ({ selectedCoin, setSelectedCoin }) => {
  return (
    <div>
      {selectedCoin && (
        <div className="my-6 p-4 bg-white/5 border border-white/20 rounded-lg text-sm">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-bold">{selectedCoin.name} Details</h2>
            <button
              onClick={() => setSelectedCoin(null)}
              className="text-red-400 hover:underline text-sm"
            >
              Close
            </button>
          </div>

          <div className="flex items-center border border-white/20 w-fit p-4 rounded-sm gap-4 mb-4">
            <img
              src={selectedCoin.image}
              alt={selectedCoin.name}
              className="w-14 h-14"
            />
            <div>
              <h3 className="text-lg font-semibold">{selectedCoin.name}</h3>
              <p className="text-lg text-gray-300">
                Symbol: {selectedCoin.symbol}
              </p>
            </div>
          </div>

          {/* Clean 2-column definition list style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm">
            <div className="flex justify-between border-b border-b-white">
              <span className="font-medium">Current Price:</span>
              <span>${selectedCoin.current_price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between border-b border-b-white">
              <span className="font-medium">ATH:</span>
              <span>${selectedCoin.ath.toLocaleString()}</span>
            </div>
            <div className="flex justify-between border-b border-b-white">
              <span className="font-medium">ATL:</span>
              <span>${selectedCoin.atl.toLocaleString()}</span>
            </div>
            <div className="flex justify-between border-b border-b-white">
              <span className="font-medium">Market Cap:</span>
              <span>${selectedCoin.market_cap.toLocaleString()}</span>
            </div>
            <div className="flex justify-between border-b border-b-white">
              <span className="font-medium">Volume (24h):</span>
              <span>${selectedCoin.total_volume.toLocaleString()}</span>
            </div>
            <div className="flex justify-between border-b border-b-white">
              <span className="font-medium">Circulating Supply:</span>
              <span>{selectedCoin.circulating_supply.toLocaleString()}</span>
            </div>
            <div className="flex justify-between border-b border-b-white">
              <span className="font-medium">Max Supply:</span>
              <span>{selectedCoin.max_supply?.toLocaleString() || "N/A"}</span>
            </div>
            <div className="flex justify-between border-b border-b-white">
              <span className="font-medium">ATH Date:</span>
              <span>{new Date(selectedCoin.ath_date).toLocaleString()}</span>
            </div>
            <div className="flex justify-between border-b border-b-white">
              <span className="font-medium">ATL Date:</span>
              <span>{new Date(selectedCoin.atl_date).toLocaleString()}</span>
            </div>
            <div className="flex justify-between border-b border-b-white">
              <span className="font-medium">Last Updated:</span>
              <span>
                {new Date(selectedCoin.last_updated).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinsDetails;
