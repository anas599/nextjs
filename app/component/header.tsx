import Image from 'next/image';

function Header() {
  return (
    <section className="relative">
      <div>
        <Image
          src="/headerBG.png"
          alt="btcBackground"
          className=""
          width={300}
          height={200}
          priority
        />
      </div>
      <h1 className="">Track your Cryptocurrency profits easier</h1>
      <h2>To display crypto blog alongside comments</h2>
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
    </section>
  );
}

export default Header;
