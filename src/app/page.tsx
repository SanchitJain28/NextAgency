"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Reducing Cart Abandonment with Smart Related Products",
    excerpt:
      "Discover how AI-powered product recommendations can keep customers engaged and reduce your cart abandonment rate by up to 35%.",
    slug: "reducing-cart-abandonment",
    image: "/blog/reducing-cart-abondonment/image1.png",
    category: "Strategy",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Increase Average Order Value (AOV) on Shopify",
    excerpt:
      "Learn proven strategies to boost your AOV without spending more on customer acquisition. Increase revenue by 20-40% with smart recommendations.",
    slug: "increase-aov-shopify",
    image: "/blog/increase-aov-shopify/image1.png",
    category: "Growth",
    readTime: "10 min read",
  },
  {
    id: 3,
    title: "AI vs Traditional Product Recommendations",
    excerpt:
      "Compare traditional frequently bought together systems with modern AI-powered recommendations. See why AI recommendations convert 3-5x better.",
    slug: "ai-vs-traditional-product-recommendations-shopify",
    image: "/blog/ai-vs-traditional-shopify/image1.png",
    category: "AI & Tech",
    readTime: "12 min read",
  },
];

export default function BlogSection() {
  return (
    <section className="px-4 py-16 bg-black sm:px-6 lg:px-8 border-y border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center lg:text-left"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-white border rounded-full bg-white/10 border-white/20">
            Blog & Resources
          </span>
          <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl text-balance">
            Latest from Our Blog
          </h2>
          <p className="max-w-3xl text-lg text-gray-400">
            Strategies, tips, and insights to help you maximize your Shopify
            store&apos;s potential with AI-powered recommendations
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/blog/${blog.slug}`}>
                <div className="flex flex-col h-full overflow-hidden transition-all duration-300 border cursor-pointer group bg-white/5 border-white/10 rounded-xl hover:border-white/20 hover:bg-white/10">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                    <Image
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-semibold text-red-400 border rounded-full bg-red-500/20 border-red-500/30">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-6">
                    <h3 className="mb-3 text-xl font-bold text-white transition-colors line-clamp-2 group-hover:text-red-400">
                      {blog.title}
                    </h3>
                    <p className="flex-grow mb-4 text-sm text-gray-400 line-clamp-2">
                      {blog.excerpt}
                    </p>

                    {/* Meta & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-xs text-gray-500">
                        {blog.readTime}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 transition-all group-hover:text-red-400 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/blog">
            <button className="flex items-center justify-center gap-2 px-8 py-3 mx-auto font-semibold text-white transition border rounded-full bg-white/10 hover:bg-white/20 border-white/20">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
