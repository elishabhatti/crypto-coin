import React, { useEffect, useState } from "react";
import axios from "axios";
import CryptoCard from "./components/CryptoCard";
import Pagination from "./components/Pagination";

const App = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        setCoinsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="dark bg-black text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Crypto Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentPosts.map((coin) => (
          <div key={coin.id}>
            <div className="bg-white/5 border border-white/10 p-4 rounded-lg shadow-md transition hover:bg-white/10">
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
      <Pagination
        totalPosts={coinsData.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
