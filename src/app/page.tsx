import { Header } from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Flame,
  Globe,
  LineChart,
  Plug,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-work-sans",
});

export default function page() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProblemSolutionSection />
      <BenefitsSection />
      <CaseStudySection />
      <ServicesSection />
      <BlogPostSection />
    </div>
  );
}

const HeroSection = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-white text-[#333333] border border-[#E2E8F0]"
    >
      <div className="mx-auto max-w-7xl px-6 py-6 sm:py-20">
        <header className="space-y-2">
          <h1
            id="hero-heading"
            className="text-pretty text-3xl font-bold leading-tight tracking-tight md:text-4xl"
          >
            {
              "⚡ Supercharge Your WooCommerce & Shopify with Next.js Headless Frontend"
            }
          </h1>

          <p className="max-w-3xl text-pretty text-base leading-normal md:text-lg">
            {
              "Struggling with a slow WooCommerce or Shopify store? We help brands migrate to headless WooCommerce with Next.js and build lightning-fast, SEO-optimized Next.js eCommerce websites that scale."
            }
          </p>
        </header>

        {/* Benefit bullets */}
        <div className="mt-5 rounded-md bg-[#F1F5F9] p-4 sm:p-5">
          <ul className="grid gap-2 sm:grid-cols-2">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 rounded bg-white p-1.5">
                <Rocket className="h-4 w-4 text-[#16A34A]" aria-hidden="true" />
              </span>
              <p className="text-sm leading-relaxed">
                <span className="font-semibold">
                  WooCommerce Speed Optimization
                </span>{" "}
                – Make your store load in under 2 seconds.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 rounded bg-white p-1.5">
                <Flame className="h-4 w-4 text-[#16A34A]" aria-hidden="true" />
              </span>
              <p className="text-sm leading-relaxed">
                <span className="font-semibold">Shopify Headless Frontend</span>{" "}
                – Modern, fast, and conversion-focused.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 rounded bg-white p-1.5">
                <Globe className="h-4 w-4 text-[#16A34A]" aria-hidden="true" />
              </span>
              <p className="text-sm leading-relaxed">
                <span className="font-semibold">
                  Next.js for eCommerce Scalability
                </span>{" "}
                – Handle 500+ products without slowdown.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 rounded bg-white p-1.5">
                <LineChart
                  className="h-4 w-4 text-[#16A34A]"
                  aria-hidden="true"
                />
              </span>
              <p className="text-sm leading-relaxed">
                <span className="font-semibold">
                  WooCommerce SEO Optimization with Next.js
                </span>{" "}
                – Rank higher, get more clicks.
              </p>
            </li>
            <li className="flex items-start gap-2 sm:col-span-2">
              <span className="mt-0.5 rounded bg-white p-1.5">
                <Plug className="h-4 w-4 text-[#16A34A]" aria-hidden="true" />
              </span>
              <p className="text-sm leading-relaxed">
                <span className="font-semibold">
                  WooCommerce & Shopify Hybrid Solutions
                </span>{" "}
                – Best of both worlds.
              </p>
            </li>
          </ul>
        </div>

        {/* CTAs */}
        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="bg-[#F97316] text-black hover:opacity-90 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <Link href="#audit" aria-describedby="audit-desc">
              {"👉 Get a Free Speed Audit"}
            </Link>
          </Button>
          <p id="audit-desc" className="sr-only">
            Free performance evaluation of your WooCommerce or Shopify store.
          </p>

          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-[#F97316] text-[#333333] hover:bg-[#F1F5F9] focus-visible:ring-offset-2 bg-transparent"
          >
            <Link href="#contact">{"📞 Talk to Our Headless Experts"}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProblemSolutionSection = () => {
  const items = [
    {
      title: "WooCommerce speed optimization",
      desc: "Pages that load under 2 seconds.",
    },
    {
      title: "Custom UI freedom for Shopify",
      desc: "No more cookie-cutter themes.",
    },
    {
      title: "Scalability for 500+ products",
      desc: "Optimized product pages, lightning-fast filtering, and seamless checkout.",
    },
    {
      title: "Smart Sell Alpha AI",
      desc: "Recommendations to boost conversions.",
    },
  ];
  return (
    <section
      aria-labelledby="slow-store-heading"
      className="w-full border-t"
      style={{ borderColor: "#F1F5F9", backgroundColor: "#FFFFFF" }}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 py-6 md:py-16">
        <h2
          id="slow-store-heading"
          className="text-pretty text-2xl md:text-3xl font-semibold"
          style={{ color: "#333333" }}
        >
          Is Your eCommerce Store Slow and Losing Sales?
        </h2>

        <p
          className="mt-4 text-base leading-relaxed"
          style={{ color: "#333333" }}
        >
          If your WooCommerce store with 500+ products takes 5 seconds or more
          to load, you’re already losing up to 20% of customers who won’t wait.
          On the other hand, Shopify websites often feel fast but come with
          frustrating limits on customization—making it hard to build a unique
          brand experience.
        </p>

        <p
          className="mt-4 text-base leading-relaxed"
          style={{ color: "#333333" }}
        >
          This is exactly where our Headless WooCommerce with Next.js frontend
          comes in. By migrating your WooCommerce or Shopify store to a Next.js
          eCommerce setup, you get:
        </p>

        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((it) => (
            <li key={it.title} className="flex items-start gap-3">
              <span
                className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full"
                aria-hidden="true"
                style={{ backgroundColor: "#16A34A" }}
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4 mx-1" fill="none">
                  <path
                    d="M5 10.5l3 3 7-7"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="text-sm font-medium" style={{ color: "#333333" }}>
                {it.title} <span className="font-normal">→ {it.desc}</span>
              </p>
            </li>
          ))}
        </ul>

        <p
          className="mt-6 text-base leading-relaxed"
          style={{ color: "#333333" }}
        >
          In short: whether you’re searching for how to make a WooCommerce
          website fast or how to make Shopify faster, our solution bridges the
          gap—speed like Shopify, flexibility like WooCommerce, powered by
          Next.js.
        </p>

        <div className="mt-8">
          <Link
            href="/blog/ultimate-guide-to-headless-woocommerce"
            className="inline-flex items-center gap-1.5 text-sm font-medium underline decoration-2 underline-offset-4 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded"
            style={{ color: "#F97316" }}
          >
            <span>Learn How We Fix Slow Stores</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  function IconCheck(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        className="shrink-0"
        {...props}
      >
        <path
          d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
          stroke="#16A34A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 4 12 14.01l-3-3"
          stroke="#16A34A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <div>
      <section
        aria-labelledby="benefits-heading"
        className="bg-white text-[#333333]"
      >
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
          <header className="space-y-2">
            <h2
              id="benefits-heading"
              className="font-sans text-pretty text-2xl md:text-3xl font-semibold leading-tight"
            >
              Get the Best of WooCommerce and Shopify with Headless Next.js
            </h2>
            <p className="font-sans text-sm md:text-base leading-relaxed">
              Tired of choosing between WooCommerce’s control and Shopify’s
              speed? With our headless Next.js eCommerce solution, you don’t
              have to pick one—you get both. If you’ve ever searched “how to
              make a WooCommerce website fast” or “how to make a Shopify website
              fast,” this is the answer you’ve been looking for.
            </p>
          </header>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <article className="rounded-lg border border-[#F1F5F9] bg-white p-4 md:p-5">
              <div className="flex items-start gap-3">
                <IconCheck />
                <div className="space-y-1">
                  <h3 className="font-sans text-base font-medium">
                    Speed That Sells
                  </h3>
                  <p className="font-sans text-sm leading-relaxed">
                    WooCommerce sites with 500+ products often crawl at 5+
                    seconds per load. Our Next.js frontend brings that down to
                    under 1 second with SSR/SSG, making your store 2–5x faster.
                    Faster speed = higher conversions.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-[#F1F5F9] bg-white p-4 md:p-5">
              <div className="flex items-start gap-3">
                <IconCheck />
                <div className="space-y-1">
                  <h3 className="font-sans text-base font-medium">
                    SEO That Dominates
                  </h3>
                  <p className="font-sans text-sm leading-relaxed">
                    Google loves speed and server-side rendering. With a
                    headless WooCommerce or Shopify frontend, your dynamic
                    product pages rank higher, bringing in more traffic without
                    extra ad spend.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-[#F1F5F9] bg-white p-4 md:p-5">
              <div className="flex items-start gap-3">
                <IconCheck />
                <div className="space-y-1">
                  <h3 className="font-sans text-base font-medium">
                    Scalable & Reliable
                  </h3>
                  <p className="font-sans text-sm leading-relaxed">
                    Whether you have 500 products or 50,000, Next.js scales
                    effortlessly. Handle 10,000+ visitors at once without
                    crashing—perfect for sales seasons and ad campaigns.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-[#F1F5F9] bg-white p-4 md:p-5">
              <div className="flex items-start gap-3">
                <IconCheck />
                <div className="space-y-1">
                  <h3 className="font-sans text-base font-medium">
                    Customization Without Limits
                  </h3>
                  <p className="font-sans text-sm leading-relaxed">
                    Shopify often limits design flexibility, while WooCommerce
                    slows down with heavy themes. With our Next.js frontend, you
                    get Shopify-level speed + WooCommerce’s open-source freedom
                    to design exactly what you want.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-[#F1F5F9] bg-white p-4 md:p-5 md:col-span-2">
              <div className="flex items-start gap-3">
                <IconCheck />
                <div className="space-y-1">
                  <h3 className="font-sans text-base font-medium">
                    Smarter Sales with Sell Alpha
                  </h3>
                  <p className="font-sans text-sm leading-relaxed">
                    For Shopify stores, we add Sell Alpha AI
                    recommendations—increasing average order value by 10–20%
                    automatically.
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-6 border-t border-[#F1F5F9] pt-4">
            <a
              href="/blogs"
              className="font-sans text-sm md:text-base text-[#F97316] underline underline-offset-4 hover:opacity-90"
            >
              See the Benefits in Action – Read how a headless Next.js frontend
              can transform your WooCommerce store
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const CaseStudySection = () => {
  return (
    <div>
      <section
        aria-labelledby="case-studies"
        className="bg-white text-[#333333]"
      >
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-14">
          <header className="mb-6 md:mb-8">
            <h2
              id="case-studies"
              className="text-pretty text-2xl md:text-3xl font-semibold"
            >
              Real Stores, Real Results
            </h2>
            <p className="mt-2 text-sm md:text-base leading-relaxed">
              When it comes to headless WooCommerce and Shopify websites with
              Next.js, results speak louder than promises. Here’s how we’ve
              helped real businesses transform speed, conversions, and user
              experience:
            </p>
          </header>

          {/* WooCommerce Case Study */}
          <article
            aria-labelledby="woo-cs-title"
            className="border-t border-[#F1F5F9] pt-6 md:pt-8"
          >
            <h3 id="woo-cs-title" className="text-lg md:text-xl font-semibold">
              WooCommerce Case Study
            </h3>
            <p className="mt-2 text-sm md:text-base leading-relaxed">
              A growing bookstore with 500+ products was stuck at 5-second load
              times. After migrating to a headless WooCommerce frontend with
              Next.js, the site now loads in just 1 second—a 5x performance
              boost. The result?
            </p>

            <ul className="mt-3 grid gap-2">
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2
                  className="h-4 w-4 mt-0.5 shrink-0 text-[#16A34A]"
                  aria-hidden="true"
                />
                <span>20% more sales</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2
                  className="h-4 w-4 mt-0.5 shrink-0 text-[#16A34A]"
                  aria-hidden="true"
                />
                <span>Higher Google rankings</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2
                  className="h-4 w-4 mt-0.5 shrink-0 text-[#16A34A]"
                  aria-hidden="true"
                />
                <span>Happier customers</span>
              </li>
            </ul>

            <div
              aria-label="WooCommerce Quick Stats"
              className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              <div className="rounded-lg border border-zinc-300 bg-white p-4">
                <p className="text-xs font-medium">Load time</p>
                <p className="mt-1 text-lg md:text-xl font-semibold">5s → 1s</p>
              </div>
              <div className="rounded-lg border border-zinc-300 bg-white p-4">
                <p className="text-xs font-medium">Sales growth</p>
                <p className="mt-1 text-lg md:text-xl font-semibold">+20%</p>
              </div>
              <div className="rounded-lg border border-zinc-300 bg-white p-4">
                <p className="text-xs font-medium">Products</p>
                <p className="mt-1 text-lg md:text-xl font-semibold">500+</p>
              </div>
            </div>
          </article>

          {/* Shopify Case Study */}
          <article
            aria-labelledby="shopify-cs-title"
            className="border-t border-[#F1F5F9] pt-6 md:pt-8 mt-6 md:mt-8"
          >
            <h3
              id="shopify-cs-title"
              className="text-lg md:text-xl font-semibold"
            >
              Shopify Case Study
            </h3>
            <p className="mt-2 text-sm md:text-base leading-relaxed">
              A fashion brand on Shopify wanted faster speeds and smarter
              upselling. We built a custom Next.js Shopify storefront, powered
              by Sell Alpha AI product recommendations. The results?
            </p>

            <ul className="mt-3 grid gap-2">
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2
                  className="h-4 w-4 mt-0.5 shrink-0 text-[#16A34A]"
                  aria-hidden="true"
                />
                <span>15% more conversions</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2
                  className="h-4 w-4 mt-0.5 shrink-0 text-[#16A34A]"
                  aria-hidden="true"
                />
                <span>Higher average order value</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2
                  className="h-4 w-4 mt-0.5 shrink-0 text-[#16A34A]"
                  aria-hidden="true"
                />
                <span>Smoother checkout</span>
              </li>
            </ul>

            <div
              aria-label="Shopify Quick Stats"
              className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              <div className="rounded-lg border border-zinc-300 bg-white p-4">
                <p className="text-xs font-medium">Conversions</p>
                <p className="mt-1 text-lg md:text-xl font-semibold">+15%</p>
              </div>
              <div className="rounded-lg border border-zinc-300 bg-white p-4">
                <p className="text-xs font-medium">Avg. order value</p>
                <p className="mt-1 text-lg md:text-xl font-semibold">+12%</p>
              </div>
              <div className="rounded-lg border border-zinc-300 bg-white p-4">
                <p className="text-xs font-medium">Page loads</p>
                <p className="mt-1 text-lg md:text-xl font-semibold">
                  60% faster
                </p>
              </div>
            </div>
          </article>

          {/* Why It Works */}
          <article
            aria-labelledby="why-works"
            className="border-t border-[#F1F5F9] pt-6 md:pt-8 mt-6 md:mt-8"
          >
            <h3 id="why-works" className="text-lg md:text-xl font-semibold">
              Why It Works
            </h3>
            <ul className="mt-3 grid gap-2">
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2
                  className="h-4 w-4 mt-0.5 shrink-0 text-[#16A34A]"
                  aria-hidden="true"
                />
                <span>18–23% higher conversions</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2
                  className="h-4 w-4 mt-0.5 shrink-0 text-[#16A34A]"
                  aria-hidden="true"
                />
                <span>Up to 60% faster load times</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2
                  className="h-4 w-4 mt-0.5 shrink-0 text-[#16A34A]"
                  aria-hidden="true"
                />
                <span>SEO-optimized, scalable stores</span>
              </li>
            </ul>
          </article>

          {/* CTA */}
          <div className="mt-6 md:mt-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-[#F97316] underline underline-offset-4 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded-sm"
            >
              Get Your Success Story: Ready to scale your WooCommerce or Shopify
              website with headless Next.js? Contact us today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section aria-labelledby="services-heading" className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
        <header className="max-w-3xl">
          <h2
            id="services-heading"
            className="text-balance text-2xl font-semibold text-[#333333] md:text-3xl"
          >
            Our Headless Next.js Solutions for WooCommerce and Shopify
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-[#333333] md:text-base">
            Looking to take your online store to the next level? We specialize
            in WooCommerce Next.js migration and Shopify headless development,
            built for speed, scalability, and sales growth.
          </p>
        </header>

        {/* Services: 3 Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-3 md:gap-6">
          {/* Migration */}
          <article className="rounded-lg border border-[#F1F5F9] bg-white p-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-[#16A34A]/10">
                {/* check icon */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="text-[#16A34A]"
                >
                  <path
                    d="M7.629 13.233L3.9 9.504l1.414-1.414 2.315 2.315 6.06-6.06 1.414 1.414-7.474 7.474z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <h3 className="text-sm font-semibold text-[#333333]">
                Migration
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#333333]">
              Transform your store with a headless Next.js frontend while
              keeping the backend you know. For WooCommerce, keep your familiar
              dashboard with Shopify-like performance. For Shopify, get a
              lightning-fast custom storefront.
            </p>
            <p className="mt-3 text-sm font-medium text-[#333333]">
              Pricing starts at ₹75,000 and goes up to ₹5,00,000, depending on
              features and scale.
            </p>
            <p className="sr-only">
              SEO keyword: WooCommerce Next.js migration cost
            </p>
          </article>

          {/* Maintenance */}
          <article className="rounded-lg border border-[#F1F5F9] bg-white p-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-[#16A34A]/10">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="text-[#16A34A]"
                >
                  <path
                    d="M7.629 13.233L3.9 9.504l1.414-1.414 2.315 2.315 6.06-6.06 1.414 1.414-7.474 7.474z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <h3 className="text-sm font-semibold text-[#333333]">
                Maintenance
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#333333]">
              A high-performing store needs ongoing care. We provide eCommerce
              maintenance in India to keep your site secure, optimized, and
              blazing fast.
            </p>
            <p className="mt-3 text-sm font-medium text-[#333333]">
              Plans start at ₹5,000/month and go up to ₹30,000/month, based on
              your support needs.
            </p>
          </article>

          {/* Sell Alpha for Shopify */}
          <article className="rounded-lg border border-[#F1F5F9] bg-white p-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-[#16A34A]/10">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="text-[#16A34A]"
                >
                  <path
                    d="M7.629 13.233L3.9 9.504l1.414-1.414 2.315 2.315 6.06-6.06 1.414 1.414-7.474 7.474z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <h3 className="text-sm font-semibold text-[#333333]">
                Sell Alpha for Shopify
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#333333]">
              Boost conversions with Sell Alpha AI—Shopify plugins for related
              products, “Frequently Bought Together,” and AI-powered search.
            </p>
            <p className="mt-3 text-sm font-medium text-[#333333]">
              With Shopify headless migrations, we include 3 months of Sell
              Alpha free.
            </p>
          </article>
        </div>

        {/* Pricing table */}
        <div className="mt-10 rounded-xl border border-[#F1F5F9]">
          <div className="grid grid-cols-1 divide-y divide-[#F1F5F9] md:grid-cols-3 md:divide-x md:divide-y-0">
            {/* Basic */}
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#333333]">Basic</h3>
              </div>
              <p className="mt-3 text-2xl font-semibold text-[#333333]">
                ₹75,000
              </p>
              <p className="text-xs text-[#333333]">Migration</p>
              <p className="mt-2 text-base font-semibold text-[#333333]">
                ₹5,000<span className="text-sm font-normal">/month</span>
              </p>
              <p className="text-xs text-[#333333]">Maintenance</p>
              <ul className="mt-4 space-y-2 text-sm text-[#333333]">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-[3px] bg-[#16A34A]/10">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 20 20"
                      className="text-[#16A34A]"
                      aria-hidden="true"
                    >
                      <path
                        d="M7.629 13.233L3.9 9.504l1.414-1.414 2.315 2.315 6.06-6.06 1.414 1.414-7.474 7.474z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Headless Next.js storefront
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-[3px] bg-[#16A34A]/10">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 20 20"
                      className="text-[#16A34A]"
                      aria-hidden="true"
                    >
                      <path
                        d="M7.629 13.233L3.9 9.504l1.414-1.414 2.315 2.315 6.06-6.06 1.414 1.414-7.474 7.474z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Core pages & speed optimization
                </li>
              </ul>
            </div>

            {/* Standard */}
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#333333]">
                  Standard
                </h3>
                <span className="rounded-md bg-[#16A34A]/10 px-2 py-0.5 text-xs font-medium text-[#16A34A]">
                  Popular
                </span>
              </div>
              <p className="mt-3 text-2xl font-semibold text-[#333333]">
                ₹2,50,000
              </p>
              <p className="text-xs text-[#333333]">Migration</p>
              <p className="mt-2 text-base font-semibold text-[#333333]">
                ₹15,000<span className="text-sm font-normal">/month</span>
              </p>
              <p className="text-xs text-[#333333]">Maintenance</p>
              <ul className="mt-4 space-y-2 text-sm text-[#333333]">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-[3px] bg-[#16A34A]/10">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 20 20"
                      className="text-[#16A34A]"
                      aria-hidden="true"
                    >
                      <path
                        d="M7.629 13.233L3.9 9.504l1.414-1.414 2.315 2.315 6.06-6.06 1.414 1.414-7.474 7.474z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Enhanced pages + SEO setup
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-[3px] bg-[#16A34A]/10">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 20 20"
                      className="text-[#16A34A]"
                      aria-hidden="true"
                    >
                      <path
                        d="M7.629 13.233L3.9 9.504l1.414-1.414 2.315 2.315 6.06-6.06 1.414 1.414-7.474 7.474z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Performance & analytics
                </li>
              </ul>
            </div>

            {/* Premium */}
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#333333]">
                  Premium
                </h3>
              </div>
              <p className="mt-3 text-2xl font-semibold text-[#333333]">
                ₹5,00,000
              </p>
              <p className="text-xs text-[#333333]">Migration</p>
              <p className="mt-2 text-base font-semibold text-[#333333]">
                ₹30,000<span className="text-sm font-normal">/month</span>
              </p>
              <p className="text-xs text-[#333333]">Maintenance</p>
              <ul className="mt-4 space-y-2 text-sm text-[#333333]">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-[3px] bg-[#16A34A]/10">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 20 20"
                      className="text-[#16A34A]"
                      aria-hidden="true"
                    >
                      <path
                        d="M7.629 13.233L3.9 9.504l1.414-1.414 2.315 2.315 6.06-6.06 1.414 1.414-7.474 7.474z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Advanced SEO & personalization
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-[3px] bg-[#16A34A]/10">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 20 20"
                      className="text-[#16A34A]"
                      aria-hidden="true"
                    >
                      <path
                        d="M7.629 13.233L3.9 9.504l1.414-1.414 2.315 2.315 6.06-6.06 1.414 1.414-7.474 7.474z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Complex catalogs & integrations
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA line */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 rounded-lg border border-[#F1F5F9] bg-white p-4 md:flex-row md:items-center">
          <p className="text-pretty text-sm leading-relaxed text-[#333333] md:text-base">
            Request a Quote today and discover why businesses trust us for
            WooCommerce Next.js migration and Shopify headless pricing
            solutions.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-[#F97316] px-4 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:ring-offset-2"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

const BlogPostSection = () => {
  type Post = {
    title: string;
    description: string;
    href: string;
  };
  const posts: Post[] = [
    {
      title:
        "Ultimate Guide to Headless WooCommerce with Next.js: Boost Speed and SEO in 2025",
      description:
        "Discover how headless eCommerce helps you optimize WooCommerce speed, scale beyond 500+ products, and improve search rankings.",
      href: "/blog",
    },
    {
      title:
        "Why a Next.js Headless Frontend is the Best Way to Scale Your Large WooCommerce Store (500+ Products)",
      description:
        "Learn the best WooCommerce SEO optimization with Next.js strategies to improve speed, conversions, and long‑term growth.",
      href: "/blog",
    },
    {
      title:
        "How a Headless Next.js Frontend Gives Your WooCommerce Store the Best of WooCommerce and Shopify",
      description:
        "Explore how a WooCommerce–Shopify hybrid gives you Shopify‑like speed with WooCommerce flexibility.",
      href: "/blog",
    },
  ];
  return <div className="">
    <section aria-labelledby="insights-heading" className="bg-white">
      <div className="mx-auto w-full max-w-screen-lg px-6 py-10 md:py-12">
        <header className="mb-6 md:mb-8">
          <h2 id="insights-heading" className="text-balance text-xl font-semibold text-[#333333] md:text-2xl">
            Learn How to Transform Your eCommerce Store
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#333333]">
            Stay ahead in 2025 with our expert insights on headless WooCommerce Next.js development, WooCommerce–Shopify
            hybrid performance, and Next.js eCommerce tips. Whether you’re fixing a slow WooCommerce store or planning a
            Shopify headless frontend migration, our blog shows you proven ways to boost speed, scalability, and SEO.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {posts.map((post) => (
            <article key={post.title} className="flex h-full flex-col rounded-lg border border-[#F1F5F9] bg-white p-4">
              <div className="mb-3">
                <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-2 py-0.5 text-xs font-medium text-[#16A34A]">
                  Featured
                </span>
              </div>
              <h3 className="text-pretty text-base font-semibold leading-6 text-[#333333]">
                <Link href={post.href} className="hover:underline focus:outline-none focus-visible:underline">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-[#333333]">{post.description}</p>
              <div className="mt-4">
                <Link
                  href={post.href}
                  className="text-sm font-medium text-[#F97316] hover:underline focus:outline-none focus-visible:underline"
                  aria-label={`Read article: ${post.title}`}
                >
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-md bg-[#F97316] px-4 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90 focus:outline-none"
            aria-label="Read more insights on our blog"
          >
            Read More Insights
          </Link>
        </div>
      </div>
    </section>
  </div>;
};
