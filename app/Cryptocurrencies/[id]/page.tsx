import getSingleCrypto from '@/lib/getSingleCrypto';
import { Suspense } from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import formatNumber from '../../action/formatNumber';
import AddForm from '@/app/component/addForm';
import VoteButton from '@/app/component/voteUpButton';
import VoteDownButton from '@/app/component/voteDownButton';
import formatDate from '@/app/action/formatDate';
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
    const res = await fetch(`${process.env.DEPLOYDOMAIN}/api/comments`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('An error occurred while fetching the data.', error);
  }
}
export default async function CryptoPage({ params: { id } }: Params) {
  const cryptoData: Promise<Crypto1> = getSingleCrypto(id);
  const crypto = await cryptoData;
  const mycomment = await getComment({ params: { id } });
  const filterComment =
    mycomment?.length === undefined
      ? []
      : mycomment?.filter((item: any) => item.coincommentId === id);

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
        <Suspense
          fallback={<h2 className="flex max-w-full">Loading...</h2>}
        ></Suspense>
      </section>

      <section className="border-double border-4 border-sky-500 glass mx-6">
        <div>
          <h2 className="text-center mb-10 text-xl">Comments</h2>
          {filterComment.map((comment: any) => (
            <>
              <div className="  text-black dark:text-gray-200 p-4 antialiased flex max-w-lg shadowFilter ">
                <Image
                  className="rounded-full h-8 w-8 mr-2 mt-1 "
                  src={comment.userpic}
                  alt="Profile image"
                  width={50}
                  height={50}
                />
                <div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-3xl px-4 pt-2 pb-2.5">
                    <div className="font-semibold text-sm leading-relaxed">
                      {comment.username}
                    </div>
                    <div className="text-normal leading-snug md:leading-normal">
                      {comment.content}
                    </div>
                  </div>
                  <div className="text-sm ml-4 mt-0.5 text-gray-500 dark:text-gray-400">
                    {formatDate(comment.createdAt)}
                  </div>
                </div>
                <section className="mx-4 flex flex-row ">
                  <div className="flex  flex-row gap-2  items-center cursor-pointer text-lime-500 hover:text-white border-2 border-lime-500 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm  text-center mr-2 mb-2 dark:border-lime-500 dark:text-lime-500 dark:hover:text-white dark:hover:bg-lime-600 dark:focus:ring-lime-800">
                    <VoteButton params={{ comment }} />
                  </div>
                  <div className="flex  flex-row gap-2  items-center cursor-pointer text-red-700 hover:text-white border-2 border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm  text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                    <VoteDownButton params={{ comment }} />
                  </div>
                </section>
              </div>
            </>
          ))}
        </div>
        <AddForm params={{ id }} />
      </section>
    </>
  );
}

async function getProp(context: any) {
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
