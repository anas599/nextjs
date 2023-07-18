import axios from 'axios';
async function CoinMC() {
  const apiMarket =
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=1&convert=USD';
  try {
    const response = await axios.get(apiMarket, {
      headers: {
        'X-CMC_PRO_API_KEY': '7974008e-e711-40f4-8b21-42c19b00e602',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    throw error; // Throw the error to be handled by the caller
  }
}
export default CoinMC;
