import * as Icon from 'react-icons/fa';
import formatNumber from '../action/formatNumber';
import { useEffect, useState } from 'react';
function Top3() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${process.env.DEPLOYDOMAIN}/api/coinTop3`);

      if (res.ok) {
        const data = await res.json();
        setData(data);
        console.log(data);
      } else {
        console.error('Failed to fetch data');
      }
    }
    fetchData();
  }, []);

  if (!data) {
    return (
      <div role="status" className="flex items-center justify-center p-5">
        <svg
          aria-hidden="true"
          className="w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <section className="flex flex-col md:flex-row">
      {
        // @ts-ignore
        data.data.map((crypto: any) => (
          <div
            className={`mx-auto flex flex-col md:max-w-screen-sm items-center justify-center `}
            key={crypto.id}
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-1 rounded-t-lg m-3 shadow-lg ">
              <div className="flex items-center justify-center bg-gray-800 back flex-col p-3 w-80vw md:w-30vw text-center">
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
                {crypto.name === 'Tether USDt' && (
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
        ))
      }
    </section>
  );
}

export default Top3;
