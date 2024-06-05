import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './Button';

export default function Banner() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Image
        src='/images/profile.png'
        width={200}
        height={200}
        alt='picture of me'
        className=' rounded-full mb-4'
      />
      <p className='font-bold text-2xl'>Hi, I am Enoch</p>
      <p className='font-bold'>Full-stack developer</p>
      <p className='mb-4'>hoping and coding for tomorrow</p>
      <Button url='contact' text='Contact Me' />
    </div>
  );
}
