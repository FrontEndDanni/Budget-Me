import React, { useState, useEffect } from "react";
import axios from "axios";
import "./cryptorates.scss";

function CoinList() {
  const [coins, setCoins] = useState([]);

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
        limit: "50",
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

  return (
    <div className="coin-list">
      <h1>Crypto Coins</h1>
      <center><span className="cryptoSpan">Get a peek at the latest cryptocurrency exchange rates.</span></center>
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
          {coins.map((coin) => (
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
