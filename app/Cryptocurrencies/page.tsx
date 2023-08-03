'use client';
import Image from 'next/image';
import Link from 'next/link';
import formatNumber from '../action/formatNumber';
import getAllCryptos from '@/lib/getAllCryptos';
import { useEffect, useState } from 'react';
import Loading from '../component/loading';
function Cryptocurrencies() {
  const [cryptoLength, setCryptoLength] = useState(20);
  const [crypto, setCrypto] = useState<Crypto[]>([]);

  useEffect(() => {
    const fetchCryptos = async () => {
      const cryptoData: Crypto[] = await getAllCryptos();
      setCrypto(cryptoData.slice(0, cryptoLength));
    };

    fetchCryptos();
  }, [cryptoLength]);
  if (!crypto) {
    return <Loading />;
  }
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center items-center content-center pt-20 pb-20">
        {crypto.map((crypto: any) => (
          <Link
            href="/Cryptocurrencies/[id]"
            as={`/Cryptocurrencies/${crypto.id}`}
            key={crypto.id}
            className="glass flex items-center content-center justify-center"
          >
            <div
              id={crypto.id}
              className="grid justify-center glow-blue-100 justify-items-center p-4"
            >
              <Image
                src={crypto.image}
                alt={crypto.name}
                width={50}
                height={50}
                className="rounded-lg"
              />
              <p>{crypto.name}</p>
              <p>Symbol: {crypto.symbol}</p>
              <p>Price: {crypto.current_price} $</p>
              <p>Volume: {formatNumber(crypto.total_volume)}</p>
              <p>Market Cap: {formatNumber(crypto.market_cap)}</p>
              <p>24h Change: {crypto.price_change_percentage_24h}</p>
            </div>
          </Link>
        ))}
      </div>
      {crypto.length > 0 ? (
        <div className="flex justify-center items-center pb-20">
          <button
            onClick={() => setCryptoLength(cryptoLength + 20)}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="rounded-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
              Show More!
            </span>
          </button>
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
}

export default Cryptocurrencies;
