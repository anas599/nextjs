import axios from 'axios';
async function exchanges() {
  const apiKey = '7974008e-e711-40f4-8b21-42c19b00e602';
  const apiExchanges =
    'https://pro-api.coinmarketcap.com/v1/exchange/info?slug=binance,coinbase-exchange';

  try {
    const response = await axios.get(apiExchanges, {
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
      },
    });
    const data = Object.values(response.data.data);
    return (
      <>
        {data.map((exchange: any) => (
          <section key={exchange.id} className="text-white">
            <h2>{exchange.name}</h2>
          </section>
        ))}
      </>
    );
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    throw error; // Throw the error to be handled by the caller
  }
}
export default exchanges;
// ,coinbase-exchange,kraken,kucoin,bybit,okx,gate-io,huobi,bitget,lbank
