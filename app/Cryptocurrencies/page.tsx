// import { useSession } from 'next-auth/react';
// const { data: session, status } = useSession();
// console.log(status);
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import formatNumber from '../action/formatNumber';
async function fetchCryptoData() {
  const apiMarket =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false';

  try {
    const response = await axios.get(apiMarket);
    // console.log(response.data); // Return the data from the response

    return (
      <div className="grid justify-center items-center justify-items-center align-content-center grid-cols-4 grid-rows-4 gap-x-4 gap-y-4">
        {response.data.map((crypto: any) => (
          <div key={crypto.id} id={crypto.id}>
            <Link href={`/crypto/${crypto.id}`}>
              <a>Name: {crypto.name}</a>
            </Link>{' '}
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
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    throw error; // Throw the error to be handled by the caller
  }
}

export default fetchCryptoData;
