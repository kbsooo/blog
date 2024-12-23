import type { Metadata } from "next";
import "./globals.css";
import { Fira_Code } from "next/font/google";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "kbsoo/home",
  description: "KBSOO's blog",
};

const firaCode = Fira_Code({
  weight: ['300'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={firaCode.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
