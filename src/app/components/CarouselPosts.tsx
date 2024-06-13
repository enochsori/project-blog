import { getNonFeaturedPosts } from "@/service/posts";
import PostCard from "./PostCard";
import MultiCarousel from "./MultiCarousel";
import MultipleCarousel from "./MultipleCarousel";

const CarouselPosts = async () => {
  const posts = await getNonFeaturedPosts();

  return (
    <section className='my-4'>
      <h2 className='text-2xl font-bold my-2'>You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard post={post} key={post.path} />
        ))}
      </MultiCarousel>
    </section>
  );
};

export default CarouselPosts;
