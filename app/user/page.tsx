'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';

export default function User() {
  const [formatExpire, setFormatExpire] = useState('');

  const { data: session, status } = useSession();
  const nameAc = session?.user?.name;
  const emailAc = session?.user?.email;
  useEffect(() => {
    const expireAc = session?.expires ? new Date(session.expires) : new Date();
    setFormatExpire(format(expireAc, 'yyyy-MM-dd HH:mm:ss'));
  }, [session?.expires]);
  return (
    <section className="pt-28">
      <h1 className="m-3 text-center font-bold">User Dashboard</h1>
      <section className="w-max mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg text-center flex flex-col items-center shadow-blue-500/20">
        <div className="flex items-center justify-between"></div>
        <div className="mt-6 w-fit mx-auto">
          <Image
            src={session?.user?.image || '/userIcon.svg'}
            className="rounded-full w-28 "
            alt="profile picture"
            width={80}
            height={80}
          />
        </div>

        <div className="mt-8 ">
          <h2 className="text-white font-bold text-2xl tracking-wide">
            {nameAc}
          </h2>
          <h2 className="text-white font-bold text-2xl tracking-wide">
            {emailAc}
          </h2>
        </div>
        <p className="text-emerald-400 font-semibold mt-2.5">Active</p>
        <span className="text-gray-400 text-sm text-center">
          Session expires at: <br />
          {formatExpire}
        </span>
      </section>
    </section>
  );
}
