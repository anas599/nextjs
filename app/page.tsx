'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Top3 from './component/top3';
import Header from './component/header';

export default function Component() {
  const { data: session, status } = useSession();
  console.log(session?.user?.name);
  const nameAc = session?.user?.name;

  return (
    <>
      <header className="m-3">
        <Header />
      </header>
      <h2>Best Cryto Currently</h2>
      <Top3 />
    </>
  );
}
