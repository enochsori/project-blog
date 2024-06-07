import Image from 'next/image';
import React from 'react';
import Button from './Button';
import profileImage from '../../../public/images/profile.png';

export default function Profile() {
  return (
    <section className='flex flex-col items-center justify-center'>
      <Image
        src={profileImage}
        width={200}
        height={200}
        alt='picture of me'
        priority
        className=' rounded-full mb-2'
      />
      <h2 className='font-bold text-3xl'>Hi, I am Enoch</h2>
      <h3 className='font-semibold text-xl'>Full-stack developer</h3>
      <p className='mb-4'>hoping and coding for tomorrow</p>
      <Button url='contact' text='Contact Me' />
    </section>
  );
}
