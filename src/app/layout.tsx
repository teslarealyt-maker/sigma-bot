import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';
import AnimatedBackground from '@/components/AnimatedBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sigma Bot - Elevate Your Discord Server',
  description: 'The ultimate Discord bot for server management, entertainment, and community engagement',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1a1a1a]`}>
        <AnimatedBackground />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}