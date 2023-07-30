import axios from 'axios';
import Image from 'next/image';
import formatNumber from '../action/formatNumber';
import Link from 'next/link';
async function exchanges() {
  const apiKey = '7974008e-e711-40f4-8b21-42c19b00e602';
  const apiExchanges =
    'https://pro-api.coinmarketcap.com/v1/exchange/info?slug=binance,coinbase-exchange,kraken,kucoin,bybit,okx,gate-io,huobi,bitget,lbank';

  try {
    const response = await axios.get(apiExchanges, {
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
      },
    });
    const data = Object.values(response.data.data);
    return (
      <section className="flex flex-row gap-3 flex-wrap justify-center items-center p-20">
        {data.map((exchange: any) => (
          <div key={exchange.id} className=" ">
            <Link
              className="text-white glass p-5 flex flex-col items-center justify-center"
              href={exchange.urls.website[0]}
              target="_blank"
            >
              <Image
                src={exchange.logo}
                alt={exchange.name}
                width={50}
                height={50}
              />
              <h2>{exchange.name}</h2>
              <p>Spot Volume: ${formatNumber(exchange.spot_volume_usd)}</p>
              <p>Since: {exchange.date_launched}</p>
            </Link>
          </div>
        ))}
      </section>
    );
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    throw error; // Throw the error to be handled by the caller
  }
}
export default exchanges;
// ,coinbase-exchange,kraken,kucoin,bybit,okx,gate-io,huobi,bitget,lbank
