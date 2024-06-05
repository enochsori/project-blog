import Link from 'next/link';
import React from 'react';
import DarkModeButton from './DarkModeButton';

export default function Navbar() {
  const menuStyles = 'hover:opacity-60';
  return (
    <header className='w-full flex justify-between p-4 mb-4 text-2xl border-b border-gray-300'>
      <Link href='/'>
        <h1 className='font-bold text-4xl'>Enoch's Blog</h1>
      </Link>
      <nav className='flex items-center gap-6 font-semibold'>
        <Link className={menuStyles} href='/'>
          Home
        </Link>
        <Link className={menuStyles} href='/about'>
          About
        </Link>
        <Link className={menuStyles} href='/post'>
          Posts
        </Link>
        <Link className={menuStyles} href='/contact'>
          Contact
        </Link>
        <DarkModeButton />
      </nav>
    </header>
  );
}
