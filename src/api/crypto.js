const apiUrl = 'https://api.coinlore.net/api/tickers/';

const symbolsToFetch = ['BTC', 'ETH', 'XRP', 'LTC', 'BCH'];

const fetchData = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    const filteredCoins = data.data.filter(coin =>
      symbolsToFetch.includes(coin.symbol)
    );

    return filteredCoins || [];
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default fetchData;
