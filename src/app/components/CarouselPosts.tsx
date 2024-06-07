import { getNonFeaturedPosts } from '@/service/posts';
import React from 'react';
import PostCard from './PostCard';
import MultiCarousel from './MultiCarousel';
import MultipleCarousel from './MultiCarouselSlick';

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();

  return (
    <section className='my-4'>
      <h2 className='text-2xl font-bold my-2'>You May Like</h2>

      <MultipleCarousel>
        {posts.map((post) => (
          <PostCard post={post} key={post.path} />
        ))}
      </MultipleCarousel>
    </section>
  );
}
