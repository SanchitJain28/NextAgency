import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/blog/posts';
import { Header } from '@/components/header-footer/Header';
import Footer from '@/components/header-footer/Footer';
import { ReadingProgress } from '@/components/blog/ReadingProgress';
import { Breadcrumbs } from '@/components/blog/Breadcrumbs';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { SocialShare } from '@/components/blog/SocialShare';
import { MarkdownContent } from '@/components/blog/MarkdownContent';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { AuthorBio } from '@/components/blog/AuthorBio';
import { NewsletterSignup } from '@/components/blog/NewsletterSignup';
import { FontSizeControl } from '@/components/blog/FontSizeControl';
import { DarkModeToggle } from '@/components/blog/DarkModeToggle';
import { SummarizeWithAI } from '@/components/blog/SummarizeWithAI';

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

  const relatedPosts = getRelatedPosts(slug, 3);
  const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://scalefront.io';
  const postUrl = `${siteUrl}/blog/${slug}`;

  // Extract FAQ items if present in content
  const faqMatches = post.content.matchAll(/###\s+(.+?)\n\n(.+?)(?=\n###|\n##|$)/gs);
  const faqs = Array.from(faqMatches).map(match => ({
    question: match[1].trim(),
    answer: match[2].trim(),
  }));

  return (
    <>
      <ReadingProgress />
      <Header />

      <article className="min-h-screen bg-[#fafafa] dark:bg-gray-900">
        {/* Hero/Header - Medium Style */}
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-[680px] mx-auto px-6 py-16">
            {/* Controls */}
            <div className="flex items-center justify-between mb-8">
              <Breadcrumbs
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: post.category, href: `/blog?category=${encodeURIComponent(post.category)}` },
                  { label: post.title },
                ]}
              />
              <div className="flex items-center gap-3">
                <FontSizeControl />
                <DarkModeToggle />
              </div>
            </div>

            {/* Title - Large serif like Medium */}
            <h1 className="text-[42px] md:text-[52px] font-bold text-[#292929] dark:text-white mb-4 leading-[1.15] tracking-tight font-serif">
              {post.title}
            </h1>

            {/* Description - Medium subtitle style */}
            <p className="text-[24px] text-[#6B6B6B] dark:text-gray-300 mb-10 leading-[1.4] font-serif">
              {post.description}
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-8">
              <div className="flex items-center gap-3 text-[14px] text-[#6B6B6B] dark:text-gray-400">
                <span className="font-medium text-[#292929] dark:text-white">{post.author}</span>
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
              <SocialShare title={post.title} url={postUrl} description={post.description} />
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-[#6B6B6B] dark:text-gray-300 text-xs rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="bg-white dark:bg-gray-900">
            <div className="max-w-[1000px] mx-auto px-6 py-12">
              <div className="relative aspect-[2/1] overflow-hidden rounded-lg">
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
        <div className="bg-white dark:bg-gray-900">
          <div className="max-w-[1400px] mx-auto px-6 py-12">
            <div className="flex flex-col lg:flex-row gap-12 justify-center">
              {/* Main Content - Centered */}
              <div className="w-full lg:max-w-[680px] mx-auto lg:mx-0">
                {/* Table of Contents - Mobile */}
                <div className="lg:hidden mb-8">
                  <TableOfContents content={post.content} />
                </div>

                {/* AI Summarize Feature */}
                <SummarizeWithAI content={post.content} title={post.title} />

                {/* Article Content */}
                <div className="medium-content
                  [&>*]:text-[#292929] dark:[&>*]:text-white
                  [&>*]:font-serif
                  [&>h1]:text-[36px] [&>h1]:font-bold [&>h1]:mt-12 [&>h1]:mb-4 [&>h1]:leading-[1.25] [&>h1]:tracking-tight
                  [&>h2]:text-[32px] [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:leading-[1.25] [&>h2]:tracking-tight
                  [&>h3]:text-[26px] [&>h3]:font-bold [&>h3]:mt-10 [&>h3]:mb-3 [&>h3]:leading-[1.3]
                  [&>h4]:text-[22px] [&>h4]:font-bold [&>h4]:mt-8 [&>h4]:mb-3 [&>h4]:leading-[1.3]
                  [&>p]:text-[21px] [&>p]:leading-[1.58] [&>p]:mb-8 [&>p]:text-[#292929] dark:[&>p]:text-gray-200 [&>p]:tracking-[-0.003em]
                  [&>ul]:text-[21px] [&>ul]:leading-[1.58] [&>ul]:mb-8 [&>ul]:text-[#292929] dark:[&>ul]:text-gray-200
                  [&>ol]:text-[21px] [&>ol]:leading-[1.58] [&>ol]:mb-8 [&>ol]:text-[#292929] dark:[&>ol]:text-gray-200
                  [&>li]:mb-3 [&>li]:text-[#292929] dark:[&>li]:text-gray-200
                  [&>blockquote]:border-l-[3px] [&>blockquote]:border-[#292929] dark:[&>blockquote]:border-gray-600 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-[#6B6B6B] dark:[&>blockquote]:text-gray-400 [&>blockquote]:text-[21px] [&>blockquote]:my-8
                  [&>a]:text-[#292929] dark:[&>a]:text-blue-400 [&>a]:underline [&>a]:underline-offset-2
                  [&>strong]:font-bold [&>strong]:text-[#292929] dark:[&>strong]:text-white
                  [&_code]:text-[16px] [&_code]:bg-[#f5f5f5] dark:[&_code]:bg-gray-800 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:font-mono [&_code]:text-[#292929] dark:[&_code]:text-gray-200
                  [&>pre]:bg-[#292929] dark:[&>pre]:bg-gray-950 [&>pre]:text-gray-100 [&>pre]:p-6 [&>pre]:rounded [&>pre]:overflow-x-auto [&>pre]:my-8 [&>pre]:text-[16px]
                  [&>table]:w-full [&>table]:border-collapse [&>table]:my-8 [&>table]:text-[18px]
                  [&_th]:border [&_th]:border-gray-300 dark:[&_th]:border-gray-700 [&_th]:bg-gray-50 dark:[&_th]:bg-gray-800 [&_th]:p-4 [&_th]:text-left [&_th]:font-semibold [&_th]:text-[#292929] dark:[&_th]:text-white
                  [&_td]:border [&_td]:border-gray-300 dark:[&_td]:border-gray-700 [&_td]:p-4 [&_td]:text-[#292929] dark:[&_td]:text-gray-200
                  [&>img]:my-12 [&>img]:w-full [&>img]:rounded-lg
                ">
                  <MarkdownContent content={post.content} />
                </div>

                {/* Author Bio */}
                <AuthorBio author={post.author} />

                {/* Newsletter */}
                <NewsletterSignup />

                {/* CTA Section */}
                <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-12">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded p-10 text-center">
                    <h3 className="text-[28px] font-bold text-[#292929] dark:text-white mb-4 font-serif">
                      Need Expert Help with Your Shopify Store?
                    </h3>
                    <p className="text-[18px] text-[#6B6B6B] dark:text-gray-300 mb-8 leading-[1.6] font-serif">
                      Get a free consultation with our Shopify optimization experts. We have helped dozens of brands improve their store performance and increase conversions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        href="/earn"
                        className="inline-block px-8 py-3 bg-white dark:bg-gray-900 text-[#292929] dark:text-white font-medium rounded border border-gray-300 dark:border-gray-600 hover:border-[#292929] dark:hover:border-gray-400 transition-colors text-[16px]"
                      >
                        Free Store Audit
                      </Link>
                      <Link
                        href="/contact-us"
                        className="inline-block px-8 py-3 bg-[#292929] dark:bg-white text-white dark:text-[#292929] font-medium rounded hover:bg-black dark:hover:bg-gray-100 transition-colors text-[16px]"
                      >
                        Schedule Consultation
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Related Posts */}
                <RelatedPosts posts={relatedPosts} />

                {/* Back to Blog */}
                <div className="mt-16 text-center">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[#292929] dark:text-white hover:text-black dark:hover:text-gray-300 font-medium text-[16px]"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to all articles
                  </Link>
                </div>
              </div>

              {/* Sidebar - Desktop (Sticky on the right) */}
              <aside className="hidden lg:block lg:w-80 flex-shrink-0">
                <div className="sticky top-24">
                  <TableOfContents content={post.content} />
                </div>
              </aside>
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
                '@id': postUrl,
              },
            }),
          }}
        />

        {/* FAQ Schema if FAQs detected */}
        {faqs.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map(faq => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
        )}
      </article>
      <Footer />
    </>
  );
}
