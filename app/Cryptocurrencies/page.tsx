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
    <div className="grid justify-center items-center justify-items-center align-content-center grid-cols-4 grid-rows-4 gap-x-4 gap-y-4">
      {crypto.map((crypto: any) => (
        <Link
          href="/Cryptocurrencies/[id]"
          as={`/Cryptocurrencies/${crypto.id}`}
          key={crypto.id}
        >
          <div id={crypto.id}>
            <p>Name: {crypto.name}</p>
            <p>Symbol: {crypto.symbol}</p>
            <p>Price: {crypto.current_price} $</p>
            <p>Volume: {formatNumber(crypto.total_volume)}</p>
            <Image
              src={crypto.image}
              alt={crypto.name}
              width={50}
              height={50}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Cryptocurrencies;
