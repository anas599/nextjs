// import { useSession } from 'next-auth/react';
// const { data: session, status } = useSession();
// console.log(status);
// import { faBtc } from 'cryptocurrency-icons/icons';
import axios from 'axios';

async function fetchCryptoData() {
  const apiMarket =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false';

  try {
    const response = await axios.get(apiMarket);
    // console.log(response.data); // Return the data from the response

    return (
      <div>
        {response.data.map((crypto: any) => (
          <div key={crypto.id}>
            <p>Name: {crypto.name}</p>
            <p>Symbol: {crypto.symbol}</p>
            <p>Price: {crypto.current_price} $</p>
            <p>Volume: {crypto.total_volume}</p>
            <img src={crypto.image} alt={crypto.name} />
            <p>Price Change: {crypto.priceChange}</p>
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
