import getSingleCrypto from '@/lib/getSingleCrypto';
import { Suspense } from 'react';
import type { Metadata } from 'next';

type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Params): Promise<Metadata> {
  const cryptoData: Promise<Crypto1> = getSingleCrypto(id);
  const crypto: Crypto1 = await cryptoData;

  return {
    title: crypto.name,
    description: `This is the page of ${crypto.name}`,
  };
}

export default async function CryptoPage({ params: { id } }: Params) {
  const cryptoData: Promise<Crypto1> = getSingleCrypto(id);

  const crypto = await cryptoData;

  return (
    <>
      <h2>{crypto.name}</h2>
      <h2>{crypto.symbol}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}></Suspense>
    </>
  );
}
