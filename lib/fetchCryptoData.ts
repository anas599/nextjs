import axios from 'axios';

async function fetchCryptoData() {
  const apiMarket =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false';

  try {
    const response = await axios.get(apiMarket);
    // console.log(response.data); // Return the data from the response

    return response.data;
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    throw error; // Throw the error to be handled by the caller
  }
}

export default fetchCryptoData;