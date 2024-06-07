import Link from 'next/link';
import React from 'react';
import DarkModeButton from './DarkModeButton';
import NavMenu from './NavMenu';

export default function Header() {
  const menuStyles = 'hover:opacity-60';
  return (
    <header className='w-full flex justify-between items-center p-4 mb-4 text-2xl border-b border-gray-300'>
      <Link href='/'>
        <h1 className='font-bold text-3xl'>{"Enoch's Blog"}</h1>
      </Link>
      <div className='flex items-center gap-4'>
        <nav className='md:flex hidden items-center gap-6 font-semibold '>
          <Link className={menuStyles} href='/'>
            Home
          </Link>
          <Link className={menuStyles} href='/about'>
            About
          </Link>
          <Link className={menuStyles} href='/posts'>
            Posts
          </Link>
          <Link className={menuStyles} href='/contact'>
            Contact
          </Link>
        </nav>
        <NavMenu />
        <DarkModeButton />
      </div>
    </header>
  );
}
