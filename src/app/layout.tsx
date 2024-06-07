import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Provider from '@/service/provider';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='mx-auto'>
        <Provider attribute='class' defaultTheme='system' enableSystem>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
