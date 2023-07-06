import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <header>
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="/about"
        >
          About
        </Link>
      </nav>
    </>
  );
}
