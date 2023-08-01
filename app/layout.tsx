import './globals.css';
import { Inter } from 'next/font/google';
import { NextAuthProvider } from './context/NextAuthProvider';
import Navbar from './component/navBar';
import Footer from './component/footer';
const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Crypto Blog',
  description: 'Track your Cryptocurrency profits easier',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} middleContent bg-scroll text-slate-100 mx-auto`}
      >
        <NextAuthProvider>
          <Navbar />
          {children}
        </NextAuthProvider>
        <Footer />
      </body>
    </html>
  );
}
