import React from 'react';
import Image from 'next/image';
const MiddleContent = () => {
  return (
    <section className="middleContent mt-10 mb-10 p-5">
      <div
        className="drop-shadow-lg
      text-center
      text-5xl
      font-semibold
      bg-gradient-to-r
      bg-clip-text
      text-transparent
      from-indigo-500
      via-purple-500
      to-indigo-500
      animate-text
      h-max
      p-5
      "
      >
        Features
      </div>{' '}
      <div className="flex justify-center">
        <div className="h-1 rounded-full w-1/3 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"></div>{' '}
      </div>
      <div className="vertical-line"></div>
      <div className="horizontal-line "></div>
      <div className="flex flex-col md:flex-row justify-center items-center pt-10 pb-10 shadowDrop border-l-2 border-b-2">
        <div className="w-full md:w-2/4 bg-gradient-to-r from-purple-800 via-violet-900 drop-shadow-md hover:drop-shadow-xl p-2 md:p-6">
          <h2 className="text-center md:text-left">
            Stay Ahead with Crypto Prices & Volume
          </h2>
          <p className="text-center md:text-left">
            With our real-time data feed, you will never miss a beat. Keep track
            of market trends and make informed decisions with our unparalleled
            access to cryptocurrency metrics.
          </p>
        </div>
        <Image
          src="/chartBG1.jpg"
          alt="Picture Chart"
          width={400}
          height={400}
          className="rounded-3xl drop-shadow-lg mt-5 md:mt-0"
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center pt-10 pb-10 shadowDrop border-r-2 border-b-2">
        <div className="flex justify-center items-center flex-col w-full md:w-2/4 bg-gradient-to-r from-purple-800 via-violet-900 drop-shadow-md hover:drop-shadow-xl p-2 md:p-6">
          <h2 className="text-center md:text-left">
            Stay Ahead with Crypto Prices & Volume
          </h2>
          <p className="text-center md:text-left">
            With our real-time data feed, you will never miss a beat. Keep track
            of market trends and make informed decisions with our unparalleled
            access to cryptocurrency metrics.
          </p>
        </div>
        <Image
          src="/chart2BG.jpg"
          alt="Picture Chart"
          width={400}
          height={400}
          className="rounded-3xl drop-shadow-lg mt-5 md:mt-0"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center pt-10 pb-10 shadowDrop border-l-2">
        <div className="flex justify-center items-center flex-col w-full md:w-2/4 bg-gradient-to-r from-purple-800 via-violet-900 drop-shadow-md hover:drop-shadow-xl p-2 md:p-6">
          <h2 className="text-center md:text-left">
            Discuss and add your comments and predictions within the
            cryptocurrency page
          </h2>
          <p className="text-center md:text-left">
            You can Upvote or downvote any comment in the cryptocurrency page.
          </p>
        </div>
        <Image
          src="/cryptocurrency-community.jpg"
          alt="Picture Chart"
          width={400}
          height={400}
          className="rounded-3xl drop-shadow-lg mt-5 md:mt-0"
        />
      </div>
    </section>
  );
};

export default MiddleContent;
