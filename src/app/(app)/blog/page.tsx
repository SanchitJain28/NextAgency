import Header from "@/components/header-footer/Header"
import { BlogCard } from "./BlogCard"
import Footer from "@/components/header-footer/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Headless eCommerce Blog - WooCommerce Next.js Optimization Guides | Top Com Agency",
  description: "Expert insights on headless WooCommerce, Next.js eCommerce development, speed optimization, and Shopify migrations. Learn how to build faster online stores that convert better.",
  keywords: [
    "headless WooCommerce Next.js blog",
    "WooCommerce speed optimization guides",
    "Next.js eCommerce development tutorials",
    "Shopify headless frontend blog",
    "WooCommerce SEO optimization tips",
    "headless eCommerce best practices",
    "WooCommerce 500+ products optimization",
    "eCommerce performance optimization blog",
    "Next.js for eCommerce scalability guides"
  ],
  openGraph: {
    title: "Headless eCommerce Expert Blog - WooCommerce & Next.js Optimization",
    description: "Get the latest insights on making your WooCommerce store faster with Next.js, headless architecture best practices, and eCommerce optimization strategies.",
    type: "website",
    siteName: "Top Com Agency Blog",
  },
  alternates: {
    canonical: "/blog",
    types: {
      "application/rss+xml": "/blog/rss.xml", // Add RSS feed if you have one
    },
  },
  other: {
    "article:section": "eCommerce Development",
    "article:tag": "headless WooCommerce, Next.js, eCommerce optimization",
  },
}

const blogs = [
  {
    title: "Ultimate Guide to Headless WooCommerce with Next.js: Boost Speed and SEO in 2025",
    description:
      "Discover how headless eCommerce helps you optimize WooCommerce speed, scale beyond 500+ products, and improve search rankings.",
    href: "/blog/headless-woocommerce-with-nextjs",
    publishedAt: "2025-01-15",
    readTime: "12 min read",
    category: "WooCommerce Optimization",
    tags: ["headless WooCommerce", "Next.js", "speed optimization", "SEO"]
  },
  {
    title: "Why a Next.js Headless Frontend is the Best Way to Scale Your Large WooCommerce Store (500+ Products)",
    description:
      "Learn the best WooCommerce SEO optimization with Next.js strategies to improve speed, conversions, and long‑term growth.",
    href: "/blog/nextjs-headless-frontend",
    publishedAt: "2025-01-10", 
    readTime: "10 min read",
    category: "Scalability",
    tags: ["Next.js frontend", "WooCommerce scaling", "large stores"]
  },
  {
    title: "How a Headless Next.js Frontend Gives Your WooCommerce Store the Best of WooCommerce and Shopify",
    description: "Explore how a WooCommerce–Shopify hybrid gives you Shopify‑like speed with WooCommerce flexibility.",
    href: "/blog/best-of-woo-and-shopify",
    publishedAt: "2025-01-05",
    readTime: "8 min read", 
    category: "Platform Comparison",
    tags: ["WooCommerce vs Shopify", "hybrid approach", "headless architecture"]
  },
] as const

export default function BlogIndexPage() {
  return (
    <main className="bg-white">
      {/* Structured Data for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Top Com Agency Headless eCommerce Blog",
            "description": "Expert insights on headless WooCommerce, Next.js eCommerce development, and optimization strategies",
            "url": "https://topcomagency.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Top Com Agency",
              "logo": {
                "@type": "ImageObject",
                "url": "https://topcomagency.com/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://topcomagency.com/blog"
            },
            "blogPost": blogs.map(blog => ({
              "@type": "BlogPosting",
              "headline": blog.title,
              "description": blog.description,
              "url": `https://topcomagency.com${blog.href}`,
              "datePublished": blog.publishedAt,
              "author": {
                "@type": "Organization", 
                "name": "Top Com Agency"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Top Com Agency"
              }
            }))
          })
        }}
      />

      <Header/>
      
      <article className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <header className="mb-8 md:mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#333333] text-balance mb-4">
            Headless eCommerce Development Blog
          </h1>
          <p className="text-lg md:text-xl text-[#333333]/80 max-w-3xl mx-auto leading-relaxed">
            Expert insights on <strong>headless WooCommerce</strong>, <strong>Next.js eCommerce development</strong>, 
            speed optimization strategies, and building faster online stores that convert better.
          </p>
          <div className="mt-6 h-1 w-20 bg-[#16A34A] mx-auto" aria-hidden="true" />
        </header>

        {/* Featured Topics Section */}
        <section className="mb-10 md:mb-12">
          <h2 className="text-2xl font-semibold text-[#333333] mb-6 text-center">
            What You&apos;ll Learn Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-[#16A34A]">
                🚀 Speed Optimization
              </h3>
              <p className="text-sm text-gray-600">
                Learn how to make your <strong>WooCommerce store 10x faster</strong> with 
                headless Next.js architecture and advanced optimization techniques.
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-[#16A34A]">
                📈 Scaling Strategies
              </h3>
              <p className="text-sm text-gray-600">
                Discover best practices for <strong>WooCommerce stores with 500+ products</strong> 
                and how to maintain performance at scale.
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-[#16A34A]">
                🔧 Migration Guides
              </h3>
              <p className="text-sm text-gray-600">
                Step-by-step tutorials for <strong>Shopify to Next.js migration</strong> and 
                WooCommerce headless transformations.
              </p>
            </div>
          </div>
        </section>

        {/* Main Blog Section */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#333333]">
              Latest Articles on Headless eCommerce
            </h2>
            <div className="text-sm text-gray-500">
              {blogs.length} articles
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <article key={blog.href} className="group">
                <BlogCard blog={blog} />
                
                {/* Enhanced article preview with schema-friendly data */}
                <div className="mt-4 hidden">
                  <time dateTime={blog.publishedAt} className="text-xs text-gray-500">
                    {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long', 
                      day: 'numeric'
                    })}
                  </time>
                  <div className="text-xs text-gray-500 mt-1">
                    {blog.readTime} • {blog.category}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Tags: {blog.tags.join(', ')}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup Section */}
        <section className="mt-16 text-center bg-gray-50 rounded-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#333333] mb-4">
            Stay Updated on Headless eCommerce Trends
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get the latest insights on <strong>WooCommerce speed optimization</strong>, 
            <strong>Next.js eCommerce development</strong>, and headless architecture 
            delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email for eCommerce tips..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
              aria-label="Email for newsletter subscription"
            />
            <button 
              type="button"
              className="px-6 py-2 bg-[#16A34A] text-white rounded-lg hover:bg-[#15803d] transition-colors"
            >
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            No spam. Unsubscribe anytime. Get practical eCommerce optimization tips.
          </p>
        </section>

        {/* Popular Topics */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[#333333] mb-6">
            Popular Topics We Cover
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Headless WooCommerce",
              "Next.js eCommerce", 
              "WooCommerce Speed Optimization",
              "Shopify Migration",
              "eCommerce SEO",
              "Performance Optimization",
              "Large Store Scaling",
              "Headless Architecture",
              "WooCommerce vs Shopify"
            ].map((topic) => (
              <span 
                key={topic}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-[#16A34A] hover:text-white transition-colors cursor-pointer"
              >
                {topic}
              </span>
            ))}
          </div>
        </section>
      </article>
      
      <Footer/>
    </main>
  )
}