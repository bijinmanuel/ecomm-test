import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ShopNext - Premium E-commerce Store',
  description: 'Discover premium products with exceptional quality and fast shipping. Your one-stop shop for electronics, furniture, and more.',
  keywords: 'e-commerce, online shopping, electronics, furniture, premium products',
  authors: [{ name: 'ShopNext Team' }],
  creator: 'ShopNext',
  publisher: 'ShopNext',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://shopnext.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shopnext.com',
    title: 'ShopNext - Premium E-commerce Store',
    description: 'Discover premium products with exceptional quality and fast shipping.',
    siteName: 'ShopNext',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShopNext - Premium E-commerce Store',
    description: 'Discover premium products with exceptional quality and fast shipping.',
    creator: '@shopnext',
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}