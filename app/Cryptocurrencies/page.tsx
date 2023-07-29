// import { useSession } from 'next-auth/react';
// const { data: session, status } = useSession();
// console.log(status);
import type { Metadata } from 'next';
import Image from 'next/image';
import axios from 'axios';
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
    <div className="grid justify-center items-center justify-items-center align-content-center grid-cols-4 grid-rows-4 gap-x-4 gap-y-4 pt-20">
      {crypto.map((crypto: any) => (
        <Link
          href="/Cryptocurrencies/[id]"
          as={`/Cryptocurrencies/${crypto.id}`}
          key={crypto.id}
        >
          <div
            id={crypto.id}
            className="flex flex-col justify-center glow-blue-100"
          >
            <Image
              src={crypto.image}
              alt={crypto.name}
              width={50}
              height={50}
              className="rounded-lg"
            />
            <p>Name: {crypto.name}</p>
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
