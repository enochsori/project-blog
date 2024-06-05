import Image from 'next/image';
import Banner from './components/Banner';

export default function HomePage() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between '>
      <Banner />
    </main>
  );
}
