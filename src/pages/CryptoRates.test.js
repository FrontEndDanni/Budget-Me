const CoinList = require('./CryptoRates')

test("filters coins by name correctly", () => {
    const coins = [
      { id: 1, name: "Bitcoin" },
      { id: 2, name: "Ethereum" },
      { id: 3, name: "Cardano" },
    ];
    const searchQuery = "ETH";
    const expectedFilteredCoins = [{ id: 2, name: "Ethereum" }];
  
    const { getByPlaceholderText, getByText } = render(<CoinList coins={coins} />);
    const searchInput = getByPlaceholderText("Search for a coin...");
    fireEvent.change(searchInput, { target: { value: searchQuery } });
  
    expectedFilteredCoins.forEach((coin) => {
      expect(getByText(coin.name)).toBeInTheDocument();
    });
  });
  