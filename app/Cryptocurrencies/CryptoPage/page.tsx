import { useRouter } from 'next/router';

export default function CryptoPage() {
  const router = useRouter();
  const { cryptoId } = router.query;

  // Fetch the data for the specific crypto element using cryptoId

  return (
    <div>
      <h1>Crypto Details</h1>
      <p>Crypto ID: {cryptoId}</p>
      {/* Render the data for the specific crypto element */}
    </div>
  );
}
