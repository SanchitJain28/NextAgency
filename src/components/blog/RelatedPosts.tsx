import Link from 'next/link';
import Image from 'next/image';
import { BlogPostMetadata } from '@/lib/blog/posts';

interface RelatedPostsProps {
  posts: BlogPostMetadata[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-12">
      <h2 className="text-[28px] font-bold text-[#292929] dark:text-white mb-8 font-serif">
        Related Articles
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.slice(0, 3).map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group"
          >
            <article className="h-full flex flex-col">
              {post.image && (
                <div className="relative aspect-[2/1] mb-4 overflow-hidden rounded bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <h3 className="text-[18px] font-bold text-[#292929] dark:text-white mb-2 leading-[1.3] group-hover:text-black dark:group-hover:text-gray-200 transition-colors line-clamp-2 font-serif">
                {post.title}
              </h3>
              <p className="text-[14px] text-[#6B6B6B] dark:text-gray-400 line-clamp-2 flex-grow">
                {post.description}
              </p>
              <div className="mt-3 text-[13px] text-[#6B6B6B] dark:text-gray-500">
                {post.readingTime}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
