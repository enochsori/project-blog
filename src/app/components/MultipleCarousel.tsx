'use client';

import { Post } from '@/service/types';
import React, { useState } from 'react';
import PostCard from './PostCard';

type Props = {
  posts: Post[];
};
export default function MultipleCarousel({ posts }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? posts.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === posts.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className='w-full max-w-4xl mx-auto py-16 px-4 relative'>
      <div className='relative'>
        <PostCard post={posts[currentIndex]} />
      </div>

      <button
        onClick={prevSlide}
        className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full'
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full'
      >
        ❯
      </button>

      <div className='flex justify-center py-2'>
        {posts.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 mx-1 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-black' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
