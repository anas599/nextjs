import React from 'react';
import formatDate from '../action/formatDate';
import VoteButton from './voteUpButton';
import VoteDownButton from './voteDownButton';
import Image from 'next/image';
import comment from '../lib/comment';

const singleComment = () => {
  return (
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
  );
};

export default singleComment;
