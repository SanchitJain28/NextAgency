import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog/posts";
import { ReadingProgress } from "../components/ReadingProgress";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { TableOfContents } from "../components/TableOfContents";
import { MarkdownContent } from "../components/MarkdownContent";
import { RelatedPosts } from "../components/RelatedPosts";
import { AuthorBio } from "../components/AuthorBio";
import { Clock, Calendar, ArrowLeft, ArrowRight, BookOpen } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: { absolute: "Blog Article Not Found | ScaleFront Agency" },
    };
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.scalefront.io";
  const postUrl = `${siteUrl}/blog/${slug}`;
  const imageUrl = post.image || `${siteUrl}/og-image.png`;

  const cleanDescription =
    post.description && post.description.length > 158
      ? post.description
          .slice(0, 155)
          .trim()
          .replace(/[.,;:\s]+\S*$/, "") + "..."
      : post.description;

  const pageTitle =
    post.title.length > 47 ? { absolute: post.title } : post.title;

  return {
    title: pageTitle,
    description: cleanDescription,
    keywords: post.tags || [],
    authors: [{ name: post.author }],
    creator: "ScaleFront",
    publisher: "ScaleFront",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `${siteUrl}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: cleanDescription,
      url: `/blog/${slug}`,
      siteName: "ScaleFront",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      tags: post.tags || [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: cleanDescription,
      images: [imageUrl],
      creator: "@scalefront",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug, 3);
  const siteUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.scalefront.io";
  const postUrl = `${siteUrl}/blog/${slug}`;

  const faqs = post.faqs || [];

  return (
    <>
      <ReadingProgress />

      <article className="min-h-screen bg-white text-neutral-900 antialiased">
        {/* ── ARTICLE HEADER (FULL WIDTH & CLEAN) ── */}
        <header className="border-b border-neutral-200 bg-[#faf9f6] pt-12 pb-12 sm:pt-16 sm:pb-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Blog", href: "/blog" },
                {
                  label: post.category,
                  href: `/blog?category=${encodeURIComponent(post.category)}`,
                },
                { label: post.title },
              ]}
            />

            {/* Category & Read Time */}
            <div className="flex flex-wrap items-center gap-3 mb-5 font-mono text-xs">
              <span className="px-2.5 py-1 border border-neutral-200 bg-neutral-100 text-neutral-800 font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-neutral-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime}
              </span>
              <span className="text-neutral-300">&bull;</span>
              <span className="text-neutral-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            {/* Article Title */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.12] mb-6 max-w-5xl"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              {post.title}
            </h1>

            {/* Article Description / Excerpt */}
            <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-4xl mb-8 font-sans">
              {post.description}
            </p>

            {/* Author Line & Tags */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-neutral-200">
              <div className="flex items-center gap-2.5 font-mono text-xs">
                <div className="w-7 h-7 bg-neutral-900 text-white font-bold flex items-center justify-center">
                  {post.author?.charAt(0) || "S"}
                </div>
                <span className="font-bold text-neutral-800 uppercase">
                  {post.author}
                </span>
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 border border-neutral-200 bg-white text-neutral-600 uppercase"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* ── FEATURED HERO IMAGE (FULL WIDTH CONTAINER) ── */}
        {post.image && (
          <div className="border-b border-neutral-200 bg-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative aspect-[21/9] sm:aspect-[16/7] overflow-hidden border border-neutral-200 bg-neutral-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </div>
            </div>
          </div>
        )}

        {/* ── ARTICLE CONTENT & SIDEBAR (FULL RESPONSIVE GRID) ── */}
        <div className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Main Content Column */}
              <div className="flex-1 min-w-0 w-full">
                <div
                  className="
                  prose prose-neutral max-w-none font-sans
                  [&>*]:text-neutral-800
                  [&>h1]:text-3xl sm:[&>h1]:text-4xl [&>h1]:font-extrabold [&>h1]:mt-12 [&>h1]:mb-4 [&>h1]:leading-[1.15] [&>h1]:tracking-tight [&>h1]:text-neutral-900 [&>h1]:[font-family:'Bricolage_Grotesque',sans-serif]
                  [&>h2]:text-2xl sm:[&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:leading-[1.2] [&>h2]:tracking-tight [&>h2]:text-neutral-900 [&>h2]:[font-family:'Bricolage_Grotesque',sans-serif] [&>h2]:pt-6 [&>h2]:border-t [&>h2]:border-neutral-200
                  [&>h3]:text-xl sm:[&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:leading-snug [&>h3]:text-neutral-900 [&>h3]:[font-family:'Bricolage_Grotesque',sans-serif]
                  [&>h4]:text-lg [&>h4]:font-bold [&>h4]:mt-6 [&>h4]:mb-2 [&>h4]:text-neutral-900 [&>h4]:[font-family:'Bricolage_Grotesque',sans-serif]
                  [&>p]:text-base sm:[&>p]:text-lg [&>p]:leading-[1.8] [&>p]:mb-6 [&>p]:text-neutral-700
                  [&>ul]:text-base sm:[&>ul]:text-lg [&>ul]:leading-[1.8] [&>ul]:mb-6 [&>ul]:text-neutral-700 [&>ul]:list-disc [&>ul]:pl-6
                  [&>ol]:text-base sm:[&>ol]:text-lg [&>ol]:leading-[1.8] [&>ol]:mb-6 [&>ol]:text-neutral-700 [&>ol]:list-decimal [&>ol]:pl-6
                  [&>li]:mb-2 [&>li]:text-neutral-700
                  [&>blockquote]:border-l-4 [&>blockquote]:border-[var(--sf-primary)] [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:italic [&>blockquote]:text-neutral-700 [&>blockquote]:text-lg sm:[&>blockquote]:text-xl [&>blockquote]:my-8 [&>blockquote]:bg-[#faf9f6]
                  [&>a]:text-[var(--sf-primary)] [&>a]:underline [&>a]:underline-offset-4 [&>a]:font-medium hover:[&>a]:text-[var(--sf-primary-deep)]
                  [&>strong]:font-bold [&>strong]:text-neutral-900
                  [&_code]:text-sm [&_code]:bg-neutral-100 [&_code]:border [&_code]:border-neutral-200 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-neutral-800
                  [&>pre]:bg-[#181310] [&>pre]:text-neutral-100 [&>pre]:p-6 [&>pre]:border [&>pre]:border-neutral-800 [&>pre]:overflow-x-auto [&>pre]:my-8 [&>pre]:text-sm
                  [&>table]:w-full [&>table]:border-collapse [&>table]:my-8 [&>table]:text-sm
                  [&_th]:border [&_th]:border-neutral-200 [&_th]:bg-neutral-100 [&_th]:p-3.5 [&_th]:text-left [&_th]:font-bold [&_th]:text-neutral-900
                  [&_td]:border [&_td]:border-neutral-200 [&_td]:p-3.5 [&_td]:text-neutral-700
                  [&>img]:my-10 [&>img]:w-full [&>img]:border [&>img]:border-neutral-200
                "
                >
                  <MarkdownContent content={post.content} />
                </div>

                {/* FAQ Section */}
                {faqs.length > 0 && (
                  <div className="pt-12 mt-16 border-t border-neutral-200">
                    <div className="font-mono text-xs text-[var(--sf-primary)] uppercase tracking-widest font-bold mb-1">
                      QUESTIONS &amp; ANSWERS
                    </div>
                    <h2
                      className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-8"
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                      }}
                    >
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <details
                          key={index}
                          className="p-6 border border-neutral-200 bg-white group cursor-pointer"
                        >
                          <summary className="flex items-start justify-between font-bold text-lg text-neutral-900 list-none">
                            <span
                              className="flex-1 pr-4"
                              style={{
                                fontFamily: "'Bricolage Grotesque', sans-serif",
                              }}
                            >
                              {faq.question}
                            </span>
                            <span className="font-mono text-sm text-neutral-400 group-open:rotate-45 transition-transform">
                              +
                            </span>
                          </summary>
                          <p className="mt-4 text-base text-neutral-600 leading-relaxed font-sans">
                            {faq.answer}
                          </p>
                        </details>
                      ))}
                    </div>
                  </div>
                )}

                {/* Author Bio */}
                <AuthorBio author={post.author} />

                {/* CTA Box (Matching /blog design) */}
                <div className="mt-12 border border-neutral-200 bg-[#faf9f6] p-8 sm:p-10 text-center">
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    Need Custom Shopify Architecture?
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto mb-6 leading-relaxed">
                    We engineer bespoke Shopify themes, private apps, and
                    headless storefronts designed for speed and conversion.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link
                      href="/contact-us"
                      className="px-6 py-3 bg-[var(--sf-primary)] hover:bg-[var(--sf-primary-deep)] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      Discuss Your Project
                    </Link>
                    <Link
                      href="/earn"
                      className="px-6 py-3 border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-900 font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      Free Store Audit
                    </Link>
                  </div>
                </div>

                {/* Related Posts */}
                <RelatedPosts posts={relatedPosts} />

                {/* Back to Blog Button */}
                <div className="mt-14 pt-8 border-t border-neutral-200 text-center">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-[var(--sf-primary)] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back to all articles
                  </Link>
                </div>
              </div>

              {/* ── DESKTOP STICKY SIDEBAR ── */}
              <aside className="hidden lg:block lg:w-80 shrink-0">
                <div className="sticky top-28 space-y-6">
                  <TableOfContents content={post.content} />

                  {/* Sidebar Strategy Card */}
                  <div className="border border-neutral-200 bg-[#faf9f6] p-6">
                    <div className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--sf-primary)] mb-2">
                      SCALEFRONT SERVICES
                    </div>
                    <h4
                      className="text-base font-bold text-neutral-900 mb-2"
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                      }}
                    >
                      Scale Your Store with Experts
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                      Get a comprehensive technical review of your Shopify theme
                      and app architecture.
                    </p>
                    <Link
                      href="/contact-us"
                      className="block w-full py-2.5 px-4 text-center bg-neutral-900 hover:bg-[var(--sf-primary)] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      Book Strategy Call
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Article/TechArticle Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TechArticle",
              headline: post.title,
              description: post.description,
              image: post.image || `${siteUrl}/og-image.png`,
              datePublished: post.date,
              dateModified: post.date,
              author: {
                "@type": "Organization",
                name: post.author,
                url: siteUrl,
              },
              publisher: {
                "@type": "Organization",
                name: "ScaleFront",
                logo: {
                  "@type": "ImageObject",
                  url: `${siteUrl}/logo.png`,
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": postUrl,
              },
              articleSection: post.category || "Technology",
              keywords: post.tags?.join(", ") || "",
              proficiencyLevel: "Intermediate",
            }),
          }}
        />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: siteUrl,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: `${siteUrl}/blog`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: post.title,
                  item: postUrl,
                },
              ],
            }),
          }}
        />

        {/* FAQ Schema if FAQs detected */}
        {faqs.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
        )}

        {post.category?.toLowerCase().includes("tutorial") ||
        post.title.toLowerCase().includes("how to") ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "HowTo",
                name: post.title,
                description: post.description,
                image: {
                  "@type": "ImageObject",
                  url: post.image || `${siteUrl}/og-image.png`,
                },
                totalTime: post.readingTime || "PT10M",
                step: [
                  {
                    "@type": "HowToStep",
                    name: "Understand the Requirements",
                    text: "Learn about the technical requirements and prerequisites needed for implementation.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Follow Implementation Steps",
                    text: "Follow the detailed step-by-step guide provided in the article.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Test and Optimize",
                    text: "Test your implementation and optimize based on the best practices shared.",
                  },
                ],
              }),
            }}
          />
        ) : null}
      </article>
    </>
  );
}
