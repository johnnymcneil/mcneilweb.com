import { Inter, Space_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import Image from 'next/image';
import Archimedes from '@/images/archimedes.png';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});
const space_mono = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
  weight: ['400', '700'],
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: 'Jonathan McNeil | 3D Specialist & Web Developer',
  description:
    'Jonathan McNeil is a 3D Specialist & Web Developer based in Phoenix, AZ.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${space_mono.variable}`}
    >
      <body className="bg-stone-100 grid min-h-screen grid-rows-[auto_1fr_auto]">
        <header className=" p-4">
          <div className="container mx-auto flex flex-col gap-4 items-center justify-start">
            <a
              href="/"
              title="Go to home page"
              className="font-mono font-bold uppercase tracking-wider text-stone-700 text-2xl hover:text-yellow-600 transition-colors"
            >
              McNeil Web
            </a>
          </div>
        </header>
        {children}
        <footer className="p-4">
          <div className="container mx-auto flex items-center justify-center font-mono text-neutral-500">
            <span>
              Copyright &copy; {new Date().getFullYear()} Jonathan McNeil. All
              rights reserved.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
