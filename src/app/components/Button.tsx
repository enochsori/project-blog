'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  url: string;
  text: string;
};

const Button = ({ url, text }: Props) => {
  const router = useRouter();
  return (
    <button
      className='bg-primary-600 text-white dark:text-gray-700 font-bold py-1 px-4 rounded-lg hover:opacity-75'
      onClick={() => router.push(`/${url}`)}
    >
      {text}
    </button>
  );
};

export default Button;
