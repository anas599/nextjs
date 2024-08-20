/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    SECRET: process.env.SECRET,
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    DEPLOYDOMAIN: process.env.DEPLOYDOMAIN,
  },
  images: {
    domains: [
      "coin-images.coingecko.com",
      "lh3.googleusercontent.com",
      "s2.coinmarketcap.com",
      "avatars.githubusercontent.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.coingecko.com",
        port: "",
        pathname: "/coins/images/**",
      },
    ],
  },
};
https: module.exports = nextConfig;
