import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { getPostBySlug, getAllPosts } from '@/lib/blog/posts';
import { Header } from '@/components/header-footer/Header';
import Footer from '@/components/header-footer/Footer';
import 'highlight.js/styles/github-dark.css';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | ScaleFront Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [post.image] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <article className="min-h-screen bg-[#fafafa]">
        {/* Hero/Header - Medium Style */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-[680px] mx-auto px-6 py-16">
            {/* Category */}
            <Link
              href="/blog"
              className="inline-block text-[13px] text-gray-600 hover:text-gray-900 mb-6 font-medium"
            >
              ← {post.category}
            </Link>

            {/* Title - Large serif like Medium */}
            <h1 className="text-[42px] md:text-[52px] font-bold text-[#292929] mb-4 leading-[1.15] tracking-tight font-serif">
              {post.title}
            </h1>

            {/* Description - Medium subtitle style */}
            <p className="text-[24px] text-[#6B6B6B] mb-10 leading-[1.4] font-serif">
              {post.description}
            </p>

            {/* Meta Info */}
            <div className="flex items-center gap-3 text-[14px] text-[#6B6B6B] border-t border-gray-200 pt-8">
              <span className="font-medium text-[#292929]">{post.author}</span>
              <span>·</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-[#6B6B6B] text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="bg-white">
            <div className="max-w-[1000px] mx-auto px-6 py-12">
              <div className="relative aspect-[2/1] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        )}

        {/* Content - True Medium Style */}
        <div className="bg-white">
          <div className="max-w-[680px] mx-auto px-6 py-12">
            <div className="medium-content
              [&>*]:text-[#292929]
              [&>*]:font-serif
              [&>h1]:text-[36px] [&>h1]:font-bold [&>h1]:mt-12 [&>h1]:mb-4 [&>h1]:leading-[1.25] [&>h1]:tracking-tight
              [&>h2]:text-[32px] [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:leading-[1.25] [&>h2]:tracking-tight
              [&>h3]:text-[26px] [&>h3]:font-bold [&>h3]:mt-10 [&>h3]:mb-3 [&>h3]:leading-[1.3]
              [&>h4]:text-[22px] [&>h4]:font-bold [&>h4]:mt-8 [&>h4]:mb-3 [&>h4]:leading-[1.3]
              [&>p]:text-[21px] [&>p]:leading-[1.58] [&>p]:mb-8 [&>p]:text-[#292929] [&>p]:tracking-[-0.003em]
              [&>ul]:text-[21px] [&>ul]:leading-[1.58] [&>ul]:mb-8 [&>ul]:text-[#292929]
              [&>ol]:text-[21px] [&>ol]:leading-[1.58] [&>ol]:mb-8 [&>ol]:text-[#292929]
              [&>li]:mb-3 [&>li]:text-[#292929]
              [&>blockquote]:border-l-[3px] [&>blockquote]:border-[#292929] [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-[#6B6B6B] [&>blockquote]:text-[21px] [&>blockquote]:my-8
              [&>a]:text-[#292929] [&>a]:underline [&>a]:underline-offset-2
              [&>strong]:font-bold [&>strong]:text-[#292929]
              [&_code]:text-[16px] [&_code]:bg-[#f5f5f5] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:font-mono [&_code]:text-[#292929]
              [&>pre]:bg-[#292929] [&>pre]:text-gray-100 [&>pre]:p-6 [&>pre]:rounded [&>pre]:overflow-x-auto [&>pre]:my-8 [&>pre]:text-[16px]
              [&>table]:w-full [&>table]:border-collapse [&>table]:my-8 [&>table]:text-[18px]
              [&_th]:border [&_th]:border-gray-300 [&_th]:bg-gray-50 [&_th]:p-4 [&_th]:text-left [&_th]:font-semibold [&_th]:text-[#292929]
              [&_td]:border [&_td]:border-gray-300 [&_td]:p-4 [&_td]:text-[#292929]
              [&>img]:my-12 [&>img]:w-full
            ">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight, rehypeRaw]}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* CTA Section - Medium style */}
            <div className="mt-16 border-t border-gray-200 pt-12">
              <div className="bg-gray-50 rounded p-10 text-center">
                <h3 className="text-[28px] font-bold text-[#292929] mb-4 font-serif">
                  Need Expert Help with Your Shopify Store?
                </h3>
                <p className="text-[18px] text-[#6B6B6B] mb-8 leading-[1.6] font-serif">
                  Get a free consultation with our Shopify optimization experts. We have helped dozens of brands improve their store performance and increase conversions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/earn"
                    className="inline-block px-8 py-3 bg-white text-[#292929] font-medium rounded border border-gray-300 hover:border-[#292929] transition-colors text-[16px]"
                  >
                    Free Store Audit
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-block px-8 py-3 bg-[#292929] text-white font-medium rounded hover:bg-black transition-colors text-[16px]"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-16 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#292929] hover:text-black font-medium text-[16px]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to all articles
              </Link>
            </div>
          </div>
        </div>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.description,
              image: post.image,
              datePublished: post.date,
              dateModified: post.date,
              author: {
                '@type': 'Organization',
                name: post.author,
              },
              publisher: {
                '@type': 'Organization',
                name: 'ScaleFront',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://scalefront.io/logo.png',
                },
              },
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `https://scalefront.io/blog/${post.slug}`,
              },
            }),
          }}
        />
      </article>
      <Footer />
    </>
  );
}
