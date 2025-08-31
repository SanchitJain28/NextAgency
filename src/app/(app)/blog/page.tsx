import Header from "@/components/header-footer/Header"
import { BlogCard } from "./BlogCard"

const blogs = [
  {
    title: "Ultimate Guide to Headless WooCommerce with Next.js: Boost Speed and SEO in 2025",
    description:
      "Discover how headless eCommerce helps you optimize WooCommerce speed, scale beyond 500+ products, and improve search rankings.",
    href: "/headless-woocommerce-with-nextjs",
  },
  {
    title: "Why a Next.js Headless Frontend is the Best Way to Scale Your Large WooCommerce Store (500+ Products)",
    description:
      "Learn the best WooCommerce SEO optimization with Next.js strategies to improve speed, conversions, and long‑term growth.",
    href: "/nextjs-headless-frontend",
  },
  {
    title: "How a Headless Next.js Frontend Gives Your WooCommerce Store the Best of WooCommerce and Shopify",
    description: "Explore how a WooCommerce–Shopify hybrid gives you Shopify‑like speed with WooCommerce flexibility.",
    href: "/best-of-woo-and-shopify",
  },
] as const

export default function BlogIndexPage() {
  return (
    <main className="bg-white">
        <Header/>
      <section className="mx-auto max-w-5xl px-4 py-10 md:py-14">
        <header className="mb-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#333333] text-balance">Blog</h1>
          <p className="mt-2 text-[#333333]/80">Latest insights and guides.</p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((b) => (
            <BlogCard key={b.href} blog={b} />
          ))}
        </div>
      </section>
    </main>
  )
}
