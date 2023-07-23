/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.coingecko.com',
        port: '',
        pathname: '/coins/images/**',
      },
    ],
  },
};
//assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579) on
https: module.exports = nextConfig;
