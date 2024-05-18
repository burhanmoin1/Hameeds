import { Inter } from "next/font/google";
import Head from 'next/head';
import "./globals.css";
import Header from './Header';
import Footer from './Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hameed's, the leather finishing specialists",
  description: "Hameed's is a leading manufacturer and distributor of high-quality leather finishing chemicals in Pakistan.",
  keywords: "leather finishing chemicals, chemical specialties, Pakistan leather chemical, karachi leather chemical, korangi leather finishing",
  author: "Burhan Moin",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />
        {/* Add more meta tags as needed */}
      </Head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
