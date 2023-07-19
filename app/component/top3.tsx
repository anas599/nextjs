import * as Icon from 'react-icons/fa';
import axios from 'axios';
import formatNumber from '../action/formatNumber';

async function Top3() {
  const apiKey = '7974008e-e711-40f4-8b21-42c19b00e602';
  const apiMarket =
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=3&convert=USD';

  try {
    const response = await axios.get(apiMarket, {
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
      },
    });

    return (
      <section className="flex flex-row">
        {response.data.data.map((crypto: any) => (
          <div
            className={`mx-auto flex max-w-screen-sm items-center justify-center`}
            key={crypto.id}
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-1 rounded-t-lg m-3 shadow-lg">
              <div className="flex items-center justify-center bg-gray-800 back flex-col p-3 w-30vw text-center">
                <h3 className="text-4xl p-3">{crypto.name}</h3>
                {crypto.name === 'Bitcoin' && (
                  <Icon.FaBitcoin
                    className="text-9xl p-3 "
                    style={{ fill: 'url(#myGradient)' }}
                  />
                )}
                {crypto.name === 'Ethereum' && (
                  <Icon.FaEthereum
                    className="text-9xl p-3"
                    style={{ fill: 'url(#myGradient)' }}
                  />
                )}
                {crypto.name === 'Tether' && (
                  <Icon.FaDollarSign
                    className="text-9xl p-3"
                    style={{ fill: 'url(#myGradient)' }}
                  />
                )}
                <p className="p-3">
                  Price:
                  {formatNumber(
                    crypto.quote.USD.price.toLocaleString('en-US', {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                      style: 'currency',
                      currency: 'USD',
                    }),
                  )}
                </p>
                <p className="p-3">
                  Volume 24h: {formatNumber(crypto.quote.USD.volume_24h)}
                </p>
                <p className="p-3">
                  Total supply: {formatNumber(crypto.total_supply)}
                </p>
                <p className="p-3">
                  Circulating supply: {formatNumber(crypto.circulating_supply)}
                </p>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="rounded-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
                    Buy now!
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    throw error; // Throw the error to be handled by the caller
  }
}

export default Top3;
