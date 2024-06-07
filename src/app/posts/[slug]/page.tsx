import { getPost } from '@/service/posts';
import React from 'react';

type Props = {
  params: { slug: string };
};
export default async function page({ params: { slug } }: Props) {
  const post = await getPost(slug);

  return (
    <article>
      <h1>{post[0].title}</h1>
    </article>
  );
}
