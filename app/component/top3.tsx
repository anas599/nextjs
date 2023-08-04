import * as Icon from 'react-icons/fa';
import formatNumber from '../action/formatNumber';
import { useEffect, useState } from 'react';
import Loading from '../component/loading';
import PopUpCrypto from './popupCrypto';
function Top3() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${process.env.DEPLOYDOMAIN}/api/coinTop3`);

      if (res.ok) {
        const data = await res.json();
        setData(data);
      } else {
        console.error('Failed to fetch data');
      }
    }
    fetchData();
  }, []);

  if (!data) {
    return <Loading />;
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
                <PopUpCrypto
                  price={crypto.quote.USD.price}
                  name={crypto.name}
                />{' '}
              </div>
            </div>
          </div>
        ))
      }
    </section>
  );
}

export default Top3;
