import Link from 'next/link';
import Image from 'next/image';
import { BlogPostMetadata } from '@/lib/blog/posts';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';

interface RelatedPostsProps {
  posts: BlogPostMetadata[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <div className="mt-16 border-t border-neutral-200 pt-12">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200">
        <div>
          <div className="font-mono text-xs text-[var(--sf-primary)] uppercase tracking-widest font-bold mb-1">
            CONTINUE READING
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Related Articles
          </h2>
        </div>
        <Link
          href="/blog"
          className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-[var(--sf-primary)] transition-colors"
        >
          View all →
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col bg-white border border-neutral-200 hover:border-neutral-900 transition-all duration-200 no-underline"
          >
            {post.image ? (
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 border-b border-neutral-200">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ) : (
              <div className="aspect-[16/10] bg-neutral-100 border-b border-neutral-200 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-neutral-400" />
              </div>
            )}

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800 font-mono text-[10px] font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readingTime}
                  </span>
                </div>

                <h3
                  className="text-base font-bold text-neutral-900 group-hover:text-[var(--sf-primary)] transition-colors leading-snug mb-2 line-clamp-2"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {post.title}
                </h3>

                <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-4">
                  {post.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between font-mono text-[11px] text-neutral-500 mt-auto">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
                <span className="font-bold text-neutral-900 group-hover:text-[var(--sf-primary)] flex items-center gap-1 uppercase">
                  Read <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
