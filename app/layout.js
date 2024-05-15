import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hameed's, the real chemical specialties",
  description: "Hameed’s is a leading manufacturer and distributor of high-quality leather finishing chemicals in Pakistan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
