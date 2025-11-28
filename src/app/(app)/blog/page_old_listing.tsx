import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/blog/posts';
import { Header } from '@/components/header-footer/Header';
import Footer from '@/components/header-footer/Footer';

export const metadata: Metadata = {
  title: 'Blog | ScaleFront - Shopify Growth & E-commerce Insights',
  description: 'Learn how to grow your Shopify store with expert insights on e-commerce, conversion optimization, and store performance. Tips and strategies for online success.',
  openGraph: {
    title: 'ScaleFront Blog - E-commerce Growth Insights',
    description: 'Expert tips and strategies for growing your Shopify store',
    type: 'website',
    url: 'https://scalefront.io/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScaleFront Blog - E-commerce Growth Insights',
    description: 'Expert tips and strategies for growing your Shopify store',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-[#fafafa]">
        {/* Hero Section - Medium Style */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-[1192px] mx-auto px-6 py-20">
            <h1 className="text-[52px] md:text-[64px] font-bold text-[#292929] mb-6 leading-[1.1] tracking-tight font-serif">
              The ScaleFront Blog
            </h1>
            <p className="text-[24px] text-[#6B6B6B] leading-[1.4] font-serif max-w-[680px]">
              Expert insights on Shopify optimization, e-commerce growth, and online store success
            </p>
          </div>
        </div>

        {/* Blog Grid - Medium Style */}
        <div className="bg-white">
          <div className="max-w-[1192px] mx-auto px-6 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group cursor-pointer"
                >
                  <article className="h-full flex flex-col">
                    {/* Image */}
                    {post.image && (
                      <div className="relative aspect-[2/1] mb-5 overflow-hidden bg-gray-100">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Category */}
                    <div className="mb-3">
                      <span className="text-[13px] text-[#6B6B6B] font-medium">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-[24px] font-bold text-[#292929] mb-3 leading-[1.3] group-hover:text-black transition-colors line-clamp-3 font-serif">
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p className="text-[16px] text-[#6B6B6B] mb-4 line-clamp-3 flex-grow leading-[1.5] font-serif">
                      {post.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-2 text-[13px] text-[#6B6B6B]">
                      <span className="font-medium text-[#292929]">{post.author}</span>
                      <span>·</span>
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </time>
                      <span>·</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* No posts message */}
            {posts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-[#6B6B6B] text-[18px] font-serif">No blog posts yet. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}