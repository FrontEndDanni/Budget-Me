import React, { useState, useEffect } from "react";
import axios from "axios";
import "./cryptorates.scss";

function CoinList() {
  const [coins, setCoins] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "25",
        offset: "0",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_COINRANKING_API_KEY,
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setCoins(response.data.data.coins);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="coin-list">
      <h1>Crypto Coins</h1>
      <center><span className="cryptoSpan">Catch a glimpse at crypto.</span>
      <br />
     <input
        className="searchCrypto"
        type="text"
        placeholder="Search for a coin..."
        value={searchQuery}
        onChange={handleSearch}
      /></center> 
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((coin) => (
            <tr key={coin.id}>
              <td>{coin.name}</td>
              <td>{coin.symbol}</td>
              <td>{coin.price}</td>
              <td>{coin.marketCap}</td>
              <td>{coin.change}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoinList;
