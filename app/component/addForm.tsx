// @ts-nocheck
'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useGlobalContext } from '../context/store';
import formatDate from '../action/formatDate';
import VoteButton from './voteUpButton';
import VoteDownButton from './voteDownButton';
import Image from 'next/image';

type Params = {
  params: {
    id: string;
  };
};

function AddForm({ params: { id } }: Params) {
  const { data: session, status } = useSession();
  const { datax, setDatax } = useGlobalContext();

  const nameAc = session?.user?.name;
  const userPic = session?.user?.image;
  const idAc = +session?.user?.id;
  const [content, setComment] = useState('');
  useEffect(() => {}, [datax]);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const commentData = {
      content: content,
      coincommentId: id,
      authorId: 1,
      username: nameAc,
      userpic: userPic,
      upvote: 0,
      downvote: 0,
    };

    try {
      const res = await fetch(`${process.env.DEPLOYDOMAIN}/api/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setDatax(data); //datax is state of the global context
      setComment('');
    } catch (error) {
      console.error('An error occurred while posting the comment.', error);
    }
  };
  return (
    // new comment section will show if new comment is added
    <section>
      {typeof datax.username === 'undefined' ? null : (
        <div className="  text-black dark:text-gray-200 p-4 antialiased flex max-w-lg shadowFilter ">
          <Image
            className="rounded-full h-8 w-8 mr-2 mt-1 "
            src={'/userIcon.svg'}
            alt="Profile image"
            width={50}
            height={50}
          />
          <div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-3xl px-4 pt-2 pb-2.5">
              <div className="font-semibold text-sm leading-relaxed">
                {datax.username}
              </div>
              <div className="text-normal leading-snug md:leading-normal">
                {datax.content}
              </div>
            </div>
            <div className="text-sm ml-4 mt-0.5 text-gray-500 dark:text-gray-400">
              {formatDate(datax.createdAt)}
            </div>
          </div>
          {/* <section className="mx-4 flex flex-row ">
            <div className="flex  flex-row gap-2  items-center cursor-pointer text-lime-500 hover:text-white border-2 border-lime-500 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm  text-center mr-2 mb-2 dark:border-lime-500 dark:text-lime-500 dark:hover:text-white dark:hover:bg-lime-600 dark:focus:ring-lime-800">
              <VoteButton params={{ datax }} />
            </div>
            <div className="flex  flex-row gap-2  items-center cursor-pointer text-red-700 hover:text-white border-2 border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm  text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
              <VoteDownButton params={{ datax }} />
            </div>
          </section> */}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="z-50  text-zinc-950 flex flex-col items-center justify-center pb-20 "
      >
        <label className="flex flex-col justify-center items-center mb-2 text-sm font-medium text-gray-900 dark:text-white w-full">
          Add your Prediction and analysis in a comment:
          <input
            type="text"
            value={content}
            onChange={(e) => setComment(e.target.value)}
            className="h-20 block p-2.5 w-full sm:w-4/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </label>

        <button
          type="submit"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add Comment
          </span>
        </button>
      </form>
    </section>
  );
}

export default AddForm;
