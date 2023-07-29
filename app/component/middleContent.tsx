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
        border-b-2 rounded-full"
      >
        Features
      </div>{' '}
      <div className="flex justify-center items-center mt-10 mb-10 pt-10 pb-10">
        <div className="w-2/4 bg-gradient-to-r from-purple-800 via-violet-900 drop-shadow-md hover:drop-shadow-xl p-2">
          <h2>Stay Ahead with Crypto Prices & Volume</h2>
          <p>
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
          className="rounded-3xl drop-shadow-lg "
        />
      </div>
      <div className="flex justify-center items-center flex-row-reverse mt-10 mb-10 pt-10 pb-10">
        <div className="flex justify-center items-center flex-col w-2/4 bg-gradient-to-r from-purple-800 via-violet-900 drop-shadow-md hover:drop-shadow-xl p-2">
          <h2>Stay Ahead with Crypto Prices & Volume</h2>
          <p>
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
          className="rounded-3xl drop-shadow-lg"
        />
        <div />
      </div>
      <div className="flex justify-center items-center flex-row mt-10 mb-10 pt-10 pb-10">
        <div className="flex justify-center items-center flex-col w-2/4 bg-gradient-to-r from-purple-800 via-violet-900 drop-shadow-md hover:drop-shadow-xl p-2">
          <h2>
            Discuss and add your comments and predictions within the
            cryptocurrency page
          </h2>
          <p>
            You can Upvote or downvote any comment in the cryptocurrency page.
          </p>
        </div>
        <Image
          src="/cryptocurrency-community.jpg"
          alt="Picture Chart"
          width={400}
          height={400}
          className="rounded-3xl drop-shadow-lg"
        />
        <div />
      </div>
    </section>
  );
};

export default MiddleContent;
