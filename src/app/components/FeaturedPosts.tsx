import React from 'react';
import PostGrid from './PostGrid';
import { getFeaturedPosts } from '@/service/posts';

export default async function FeaturedPosts() {
  // 1. Read all post data
  const posts = await getFeaturedPosts();

  // 2. Display all post dat

  return (
    <section className='my-2 px-2'>
      <h2 className='text-2xl font-bold mb-2'>Featured posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
}
