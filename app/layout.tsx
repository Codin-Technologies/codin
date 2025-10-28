import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Codin Technologies | Transform with Purpose',
  description:
    'Making advanced technology accessible, adoptable, and implementable for organizations of all sizes. Leading IT consulting in Dar es Salaam, Tanzania.',
  keywords: [
    'IT consulting',
    'software development',
    'digital transformation',
    'Tanzania',
    'Dar es Salaam',
    'technology solutions',
    'SME technology',
  ],
  authors: [{ name: 'Codin Technologies' }],
  creator: 'Codin Technologies',
  publisher: 'Codin Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://codintech.co.tz'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://codintech.co.tz',
    title: 'Codin Technologies | Transform with Purpose',
    description:
      'Making advanced technology accessible for organizations across Africa and beyond.',
    siteName: 'Codin Technologies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codin Technologies',
    description:
      'Making advanced technology accessible for organizations across Africa and beyond.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
