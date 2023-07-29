// 'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Top3 from './component/top3';
import Header from './component/header';
import CoinMC from './crypto/fetchCoinMC';
import PopUpCrypto from './component/popupCrypto';
import MiddleContent from './component/middleContent';

export default function Component() {
  return (
    <>
      <header>
        <Header />
      </header>
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
        p-5"
      >
        Top 3 Cryptocurrencies
      </div>{' '}
      <PopUpCrypto />
      <div className="grid justify-items-center ">
        <svg className="animate-bounce h-20 w-20 m-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.0"
            stroke="url(#myGradient)"
          >
            <defs>
              <linearGradient id="myGradient" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#9333EA" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </svg>
      </div>
      <Top3 />
      <MiddleContent />
    </>
  );
}
