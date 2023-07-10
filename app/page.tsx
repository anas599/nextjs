'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function Component() {
  const { data: session, status } = useSession();
  console.log(session?.user?.name);
  const nameAc = session?.user?.name;

  return (
    <>
      <header className="m-3">
        <h1 className="text">HEY THERE IM ANAS ALSAMMARRAIE</h1>
        <h2>IM A Software Developer LOCATED IN AMMAN, Jordan</h2>
        <p>
          I have experience in React js, JavaScript, HTML/CSS, Ruby on Rails,
          and Python, as well as certification in AWS Cloud Practitioner with
          extensive knowledge in MySQL, PostgreSQL, and DynamoDB. Additionally,
          I can help optimize your AWS environment for maximum performance and
          efficiency, with expertise in and .
        </p>
      </header>
      <nav>
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3 my-3"
          href="/user"
        >
          User
        </Link>
        {status === 'authenticated' ? (
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3 my-3"
            href="/api/auth/signout"
          >
            Sign Out
          </Link>
        ) : (
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3 my-3"
            href="/api/auth/signin"
          >
            Sign In
          </Link>
        )}
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3 my-3"
          href="/about"
        >
          About
        </Link>
        <p className="m-3"> logged in as: {nameAc}</p>
      </nav>
    </>
  );
}
