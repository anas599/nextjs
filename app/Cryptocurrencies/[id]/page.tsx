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
async function getComment({ params: { id } }: Params) {
  try {
    const res = await fetch(`http://localhost:3000/api/`); //when deployed, change to the domain name
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('An error occurred while fetching the data.', error);
  }
}

import getSingleCrypto from '@/lib/getSingleCrypto';
import { Suspense } from 'react';

import Image from 'next/image';
import type { Metadata } from 'next';
import formatNumber from '../../action/formatNumber';
import AddForm from '@/app/component/addForm';
import PopUpCrypto from '@/app/component/popupCrypto';
import { FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa';

export default async function CryptoPage({ params: { id } }: Params) {
  const cryptoData: Promise<Crypto1> = getSingleCrypto(id);
  const crypto = await cryptoData;
  const mycomment = await getComment({ params: { id } });
  const filterComment = mycomment.filter(
    (item: any) => item.coincommentId === id,
  );

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
          {filterComment.map((comment: any) => (
            <div className="m-3" key={comment.id}>
              <h2>Date : {comment.createdAt}</h2>
              <h3> Comment : {comment.content}</h3>
              <div className="flex gap-2  items-center ">
                <div className="flex gap-2 items-center cursor-pointer border-2 border-lime-500 rounded-full p-1 text-lime-500">
                  <FaArrowCircleUp className="text-lime-500" />
                  {comment.upvote}
                </div>
                <div className="flex gap-2  items-center cursor-pointer border-2 border-red-600 rounded-full p-1 text-red-600 ">
                  <FaArrowCircleDown className="text-red-600" />
                  {comment.downvote}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <AddForm params={{ id }} />
    </>
  );
}

export async function getServerProps(context: any) {
  const id = context.params.id;

  const cryptoData = await getSingleCrypto(id);
  const mycomment = await getComment({ params: { id } });
  const filterComment = mycomment.filter(
    (item: any) => item.coincommentId === id,
  );

  return {
    props: {
      crypto: cryptoData,
      mycomment: filterComment,
    },
  };
}
