import getSingleCrypto from '@/lib/getSingleCrypto';
import { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import { Suspense } from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import formatNumber from '../../action/formatNumber';
import { on } from 'events';

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
  const prisma = new PrismaClient();
  const allComments = await prisma.comment.findMany();
  const oneComment = await prisma.coinComment.findMany({
    where: {
      coincommentId: crypto.id.toString(),
    },
    // select: {
    //   id: true,
    //   createdAt: true,
    //   content: true,
    //   authorId: true,
    //   coincommentId: true, // Include the coincommentId field in the response
    //   upvote: true,
    //   downvote: true,
    // },
  });
  // console.log(oneComment);
  return (
    <>
      <section className="pt-20 grid justify-items-center gap-4 ">
        <div className="mx-auto flex max-w-screen-sm items-center justify-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-1 rounded-t-lg m-3 shadow-lg">
            <div className="flex items-center justify-center bg-gray-800 back flex-col p-3 w-30vw text-center">
              <h2>{crypto.name}</h2>
              <h2>{crypto.symbol}</h2>
              <Image
                src={crypto.image.large}
                alt={crypto.name}
                width={50}
                height={50}
              />
              <p>Price: {crypto.market_data.current_price.usd} $</p>
              <p>Volume: {formatNumber(crypto.market_data.total_volume.usd)}</p>
            </div>
          </div>
        </div>
        <Suspense fallback={<h2>Loading...</h2>}></Suspense>
      </section>
      <section className="border-double border-4 border-sky-500">
        <div>
          <h2>Comments</h2>
          {oneComment.map((comment) => (
            <div className="m-3" key={comment.id}>
              <h2>Date : {comment.createdAt.toDateString()}</h2>
              <h3> Comment : {comment.content}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
