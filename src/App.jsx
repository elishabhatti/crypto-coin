import React, { useEffect, useState } from "react";
import axios from "axios";
import CryptoList from "./components/CryptoList";
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
      <CryptoList coinsData={currentPosts} />
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
