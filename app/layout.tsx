import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SandpackCSS } from './blog/[slug]/sandpack';
import Head from 'next/head';


export const metadata: Metadata = {
  metadataBase: new URL('https://marshng.dev'),
  title: 'Minh Nguyen',
  description: 'Developer, writer, and lifelong learner.',
  openGraph: {
    title: 'Minh Nguyen',
    description: 'Developer, writer, and lifelong learner.',
    url: 'https://marshng.dev',
    siteName: 'Minh Nguyen',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/Cadentia_4588_72dpi_web.jpg',
        alt: 'Minh Nguyen',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

import { ApolloWrapper } from './ApolloWrapper';

// ...

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <Head>
        <meta property="og:title" content="One Of My Internet Footprint" />
        <meta property="og:description" content="Developer, writer, and lifelong learner." />
        <meta property="og:image" content="/Cadentia_4588_72dpi_web.jpg" />
        <meta property="og:url" content="https://www.marshng.dev" />
        <SandpackCSS />
        {/* Add other meta tags as needed */}
      </Head>

      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          <ApolloWrapper>{children}</ApolloWrapper>
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
