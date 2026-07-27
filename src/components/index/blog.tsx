import Link from "next/link";

const POSTS = [
  {
    href: "/blog/reducing-cart-abandonment",
    cat: "Strategy",
    time: "8 min read",
    title: "Reducing Cart Abandonment with Smart Related Products",
    excerpt:
      "Discover how AI-powered product recommendations can keep customers engaged and reduce your cart abandonment rate by up to 35%.",
  },
  {
    href: "/blog/increase-aov-shopify",
    cat: "Growth",
    time: "10 min read",
    title: "How to Increase Average Order Value on Shopify",
    excerpt:
      "Proven strategies to boost your AOV without spending more on customer acquisition. Increase revenue by 20–40% with smart recommendations.",
  },
  {
    href: "/blog/ai-vs-traditional-product-recommendations-shopify",
    cat: "AI & Tech",
    time: "12 min read",
    title: "AI vs Traditional Product Recommendations: What Works",
    excerpt:
      "Compare traditional frequently-bought-together systems with modern AI-powered recommendations. See why AI converts 3–5x better.",
  },
];

export default function Blog() {
  return (
    <section aria-labelledby="blog-heading" className="py-[120px] px-10 bg-[#f7f8fa]">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[#1677ff] mb-4">
          Blog & resources
        </div>
        <h2 id="blog-heading" className="text-[40px] font-semibold tracking-[-0.025em] leading-[1.1] text-[#111111] mb-5">
          Shopify insights from the engineers building it
        </h2>
        <p className="text-[18px] text-[#6b7280] max-w-[600px] leading-[1.55] mb-12">
          In-depth guides on Shopify development, headless commerce, CRO,
          and performance optimization — written by the team that ships it
          daily.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POSTS.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="block p-8 bg-white border border-[#d9dee7] rounded-lg transition-colors hover:border-[#1677ff]"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-semibold tracking-[0.06em] uppercase text-[#1677ff]">
                  {post.cat}
                </span>
                <span className="text-[13px] text-[#6b7280]">
                  {post.time}
                </span>
              </div>
              <h3 className="text-lg font-semibold tracking-[-0.01em] leading-[1.3] text-[#111111] mb-3">
                {post.title}
              </h3>
              <p className="text-[15px] text-[#6b7280] leading-[1.55]">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center h-12 px-7 text-[15px] font-semibold tracking-[0.02em] rounded-lg bg-transparent text-[#111111] border border-[#d9dee7] hover:bg-[#f7f8fa] transition-colors"
          >
            View all articles
          </Link>
        </div>
      </div>
    </section>
  );
}
