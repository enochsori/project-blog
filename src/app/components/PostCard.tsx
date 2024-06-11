import { Post } from '@/service/types';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  post: Post;
};

export default function PostCard({
  post: { title, description, path, category, date },
}: Props) {
  return (
    <section className='rounded-md overflow-hidden shadow-lg dark:bg-slate-700 '>
      <Link href={`/posts/${path}`}>
        <Image
          className='w-full'
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />

        <div className='flex flex-col items-center p-4'>
          <time className='self-end'>{date.toString()}</time>
          <h3 className='text-lg font-bold'>{title}</h3>
          <p className='w-full truncate text-center'>{description}</p>
          <span className='text-sm rounded-lg bg-secondary-50 text-default dark:text-gray-800 font-semibold px-3 my-2'>
            {category}
          </span>
        </div>
      </Link>
    </section>
  );
}
