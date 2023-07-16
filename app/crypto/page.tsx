import axios from 'axios';
import * as MaterialDesign from 'react-icons/fa';
import { CryptoIcon } from './iconprop';

async function crypto() {
  const apiMarket =
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=1&convert=JOD';
  try {
    const response = await axios.get(apiMarket, {
      headers: {
        'X-CMC_PRO_API_KEY': '7974008e-e711-40f4-8b21-42c19b00e602',
      },
    });
    // console.log(response.data.data); // Return the data from the response
    return (
      <div>
        <CryptoIcon name="FaAngry" />
        {response.data.data.map((crypto: any) => {
          console.log('Crypto name:', typeof crypto.name);

          return (
            <div key={crypto.symbol}>
              <p>Name: {crypto.name}</p>
              {/* if crypto.name is undefined return loading else return Cryptoicon name = crrypt.name */}
              {/* <CryptoIcon name={crypto.name} /> */}

              {/* <CryptoIcon name={crypto.name}></CryptoIcon> */}
              <p>Symbol: {crypto.symbol}</p>
              <p>Price: {crypto.quote.JOD.price} JOD</p>
              <p>Volume: {crypto.quote.JOD.volume_24h}</p>
              <img src={crypto.image} alt={crypto.name} />
              <p>Price Change: {crypto.priceChange}</p>
            </div>
          );
        })}{' '}
      </div>
    );
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    throw error; // Throw the error to be handled by the caller
  }
}

export default crypto;
