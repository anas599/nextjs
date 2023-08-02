import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import formatNumber from '../action/formatNumber';
import getAllCryptos from '@/lib/getAllCryptos';
export const metadata: Metadata = {
  title: 'All Cryptocurrencies',
};
async function Cryptocurrencies() {
  const cryptoData: Promise<Crypto[]> = getAllCryptos();
  const crypto = await cryptoData;
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center items-center content-center pt-20">
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
  );
}

export default Cryptocurrencies;
