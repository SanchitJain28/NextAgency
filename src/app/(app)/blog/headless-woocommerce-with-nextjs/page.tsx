import Header from "@/components/header-footer/Header";
import React from "react";
import { StatCard } from "./StatCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default:
      "Headless WooCommerce with Next.js 2025: Ultimate Migration Guide | 5x Faster Performance",
    template: "%s | Headless WooCommerce Next.js Guide",
  },
  description:
    "Complete guide to headless WooCommerce with Next.js in 2025. Boost your store's speed 5x, improve SEO rankings, and achieve 23% higher conversions. Step-by-step migration tutorial included.",
  keywords: [
    "headless WooCommerce",
    "Next.js ecommerce",
    "WooCommerce migration",
    "headless commerce 2025",
    "WooCommerce performance",
    "Next.js WooCommerce",
    "ecommerce SEO",
    "WooCommerce vs Shopify",
    "headless ecommerce guide",
    "WooCommerce optimization",
    "Next.js storefront",
    "GraphQL WooCommerce",
    "WooCommerce speed optimization",
    "headless commerce benefits",
    "ecommerce performance 2025",
    "WooCommerce Next.js tutorial",
    "headless ecommerce migration",
    "WooCommerce headless setup",
    "Next.js ecommerce development",
    "WooCommerce performance optimization",
  ],
  authors: [{ name: "Topcom Solutions" }],
  creator: "Topcom Solutions",
  publisher: "Topcom Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.topcomsolutions.com/"),
  alternates: {
    canonical:
      "https://www.topcomsolutions.com/blog/headless-woocommerce-with-nextjs",
  },
  openGraph: {
    title: "Headless WooCommerce with Next.js 2025: Ultimate Migration Guide",
    description:
      "Transform your WooCommerce store with Next.js for 5x faster performance and 23% higher conversions. Complete migration guide with real case studies.",
    url: "https://www.topcomsolutions.com/blog/headless-woocommerce-with-nextjs",
    siteName: "Topcom Solutions",
    images: [
      {
        url: "https://www.topcomsolutions.com/images/og-headless-woocommerce.png",
        width: 1200,
        height: 630,
        alt: "Headless WooCommerce with Next.js Migration Guide - 5x Faster Performance",
      },
      {
        url: "https://www.topcomsolutions.com/images/og-headless-woocommerce.png",
        width: 800,
        height: 800,
        alt: "Headless WooCommerce Next.js Guide Square Image",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Headless WooCommerce with Next.js 2025: Ultimate Migration Guide",
    description:
      "Transform your WooCommerce store with Next.js for 5x faster performance and 23% higher conversions. Complete migration guide included.",
    images: [
      "https://www.topcomsolutions.com/images/og-headless-woocommerce.png",
    ],
    creator: "@topcomsolutions",
    site: "@topcomsolutions",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "ecommerce development",
  classification: "Business",
  other: {
    "article:author": "Topcom Solutions",
    "article:section": "E-commerce Development",
    "article:tag":
      "headless commerce, WooCommerce, Next.js, ecommerce optimization",
    "article:published_time": "2025-01-01T00:00:00.000Z",
    "article:modified_time": new Date().toISOString(),
    "og:article:author": "Your Agency Name",
    "og:article:section": "E-commerce Development",
    "og:article:tag": "headless WooCommerce, Next.js, ecommerce performance",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Headless WooCommerce with Next.js 2025: Ultimate Migration Guide",
  description:
    "Complete guide to headless WooCommerce with Next.js in 2025. Boost your store's speed 5x, improve SEO rankings, and achieve 23% higher conversions.",
  author: {
    "@type": "Organization",
    name: "Topcom Solutions",
    url: "https://www.topcomsolutions.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Topcom Solutions",
    logo: {
      "@type": "ImageObject",
      url: "https://topcomsolutions.com/images/logo.png",
    },
  },
  datePublished: "2025-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  image: ["https://www.topcomsolutions.com/images/og-headless-woocommerce.png"],
  url: "https://topcomsolutions.com/blog/headless-woocommerce-with-nextjs",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://topcomsolutions.com/blog/headless-woocommerce-with-nextjs",
  },
  articleSection: "E-commerce Development",
  keywords:
    "headless WooCommerce, Next.js ecommerce, WooCommerce migration, headless commerce 2025, ecommerce SEO",
  wordCount: 3500,
  articleBody:
    "Complete guide covering headless WooCommerce setup with Next.js, migration steps, performance benefits, and real case studies showing 5x speed improvements and 23% conversion increases.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://topcomsolutions.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: "https://topcomsolutions.com/about-us",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Headless WooCommerce with Next.js Guide",
      item: "https://topcomsolutions.com/blog/headless-woocommerce-with-nextjs",
    },
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Migrate WooCommerce to Headless Next.js Setup",
  description:
    "Step-by-step guide to migrating your WooCommerce store to a headless Next.js frontend for better performance and SEO.",
  image: "https://www.topcomsolutions.com/images/og-headless-woocommerce.png",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "INR",
    value: "75000-500000",
  },
  supply: [
    {
      "@type": "HowToSupply",
      name: "WooCommerce Store",
    },
    {
      "@type": "HowToSupply",
      name: "Next.js Knowledge",
    },
    {
      "@type": "HowToSupply",
      name: "GraphQL Understanding",
    },
  ],
  tool: [
    {
      "@type": "HowToTool",
      name: "WPGraphQL Plugin",
    },
    {
      "@type": "HowToTool",
      name: "Next.js Framework",
    },
    {
      "@type": "HowToTool",
      name: "Vercel Hosting",
    },
  ],
  step: [
    {
      "@type": "HowToStep",
      name: "Pre-Migration Checklist",
      text: "Audit your store, create backups, and choose proper hosting setup.",
      image: "https://yourdomain.com/images/step-1-checklist.jpg",
    },
    {
      "@type": "HowToStep",
      name: "Install WPGraphQL",
      text: "Install WPGraphQL and WooCommerce extension to expose your store data via GraphQL endpoints.",
      image: "https://yourdomain.com/images/step-2-wpgraphql.jpg",
    },
    {
      "@type": "HowToStep",
      name: "Build Next.js App",
      text: "Create new Next.js project and connect to WooCommerce GraphQL endpoint.",
      image: "https://yourdomain.com/images/step-3-nextjs.jpg",
    },
    {
      "@type": "HowToStep",
      name: "Fetch WooCommerce Data",
      text: "Use GraphQL queries to fetch products, categories, and store data in your Next.js frontend.",
      image: "https://yourdomain.com/images/step-4-data-fetching.jpg",
    },
    {
      "@type": "HowToStep",
      name: "Optimize for SEO & Speed",
      text: "Implement image optimization, meta tags, and caching for maximum performance.",
      image: "https://yourdomain.com/images/step-5-optimization.jpg",
    },
    {
      "@type": "HowToStep",
      name: "Test Compatibility",
      text: "Test dashboard functionality, checkout process, and overall user experience.",
      image: "https://yourdomain.com/images/step-6-testing.jpg",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is headless WooCommerce with Next.js?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Headless WooCommerce with Next.js is a setup where you use WooCommerce as the backend for managing products and orders, while Next.js powers the frontend that customers interact with. This separation provides better performance, SEO, and scalability.",
      },
    },
    {
      "@type": "Question",
      name: "How much faster is headless WooCommerce with Next.js?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Headless WooCommerce with Next.js can be 2-5x faster than traditional WooCommerce sites, with page load times often under 1.2 seconds. This speed improvement can lead to 18-23% higher conversion rates.",
      },
    },
    {
      "@type": "Question",
      name: "Do I lose WooCommerce functionality with headless setup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, you keep all WooCommerce backend functionality including product management, order processing, inventory tracking, and the admin dashboard. Only the frontend (what customers see) changes to Next.js.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of migrating to headless WooCommerce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Migration costs typically range from ₹75,000 to ₹5,00,000 depending on store size and complexity. The investment pays off through improved performance, SEO rankings, and higher conversion rates.",
      },
    },
  ],
};

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div>
        <Header />
        <IntroductionSection />
        <WhatIsHeadlessCommerce />
        <MigrationSegment />
        <BenefitsSection />
        <CaseStudySection />
        <CTASection />
      </div>
    </>
  );
}

const IntroductionSection = () => {
  const SpeedIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-[#16A34A]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );

  // A simple icon component for SEO.
  const SeoIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-[#16A34A]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );

  return (
    <div className="bg-white font-sans">
      <main className="container mx-auto px-6 py-4 ">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base font-semibold leading-7 text-[#16A34A]">
            Ultimate Guide 2025
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-[#333333] sm:text-6xl">
            Headless WooCommerce with Next.js
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A complete guide to boosting your store&apos;s speed, performance,
            and SEO rankings by going headless.
          </p>
        </div>

        <div className="mt-8 sm:mt-20">
          <div className="mx-auto max-w-7xl">
            <div className="prose lg:prose-xl max-w-none text-[#333333]">
              <p>
                Running a WooCommerce store in 2025 comes with its own set of
                challenges. While WooCommerce is one of the most flexible
                eCommerce platforms, many store owners struggle with{" "}
                <strong className="font-semibold">
                  slow page load times, clunky performance, and SEO roadblocks
                </strong>
                . A few extra seconds of delay is all it takes for customers to
                bounce—and lost traffic means lost sales.
              </p>
              <p>
                Search engines are just as unforgiving. Google’s Core Web Vitals
                reward fast, mobile-friendly sites, and a sluggish WooCommerce
                setup can push your store down the rankings. That directly
                impacts visibility, conversions, and revenue.
              </p>
              <p>
                This is where a headless WooCommerce setup with Next.js changes
                the game. By separating the WooCommerce backend (for product
                management and order handling) from a{" "}
                <strong className="font-semibold text-[#16A34A]">
                  lightning-fast Next.js frontend
                </strong>
                , you keep the dashboard you already know but deliver a modern,
                high-performing shopping experience.
              </p>
            </div>
          </div>
        </div>

        {/* Highlighted Stat Section */}
        <div className="mt-8">
          <div className="relative isolate">
            <div className="mx-auto max-w-4xl lg:max-w-7xl">
              <figure className="bg-[#F1F5F9] p-8 rounded-2xl shadow-sm">
                <blockquote className="text-xl font-medium leading-8 tracking-tight text-gray-900 text-center">
                  <p>
                    “Stores that adopt a headless approach with Next.js have
                    reported conversion rate boosts of{" "}
                    <span className="font-bold text-[#F97316]">18–23%</span>,
                    thanks to faster load times and improved SEO. If you’re
                    serious about scaling...headless architecture is the upgrade
                    you’ve been waiting for.”
                  </p>
                </blockquote>
              </figure>
            </div>
          </div>
        </div>

        {/* Features/Benefits Section */}
        <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col border-l-4 border-[#16A34A] pl-6">
              <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-[#333333]">
                <SpeedIcon />
                Blazing-Fast Speed
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-base leading-6 text-gray-600">
                <p className="flex-auto">
                  Next.js pre-renders pages at build time (SSG), serving static
                  files from a CDN. This dramatically reduces load times
                  compared to traditional WooCommerce sites, leading to a better
                  user experience and lower bounce rates.
                </p>
              </dd>
            </div>
            <div className="flex flex-col border-l-4 border-[#16A34A] pl-6">
              <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-[#333333]">
                <SeoIcon />
                Unbeatable SEO
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-base leading-6 text-gray-600">
                <p className="flex-auto">
                  With superior performance and server-side rendering
                  capabilities, a headless setup helps you ace Google&apos;s
                  Core Web Vitals. Get better search engine rankings, more
                  organic traffic, and higher visibility for your products.
                </p>
              </dd>
            </div>
          </dl>
        </div>

        {/* Call to Action Button */}
        {/* <div className="mt-20 text-center">
          <a
            href="#getting-started"
            className="inline-block bg-[#F97316] text-white font-bold text-lg py-4 px-10 rounded-lg shadow-md hover:bg-orange-600 transition-transform transform hover:scale-105"
          >
            Let&apos;s Build It
          </a>
        </div> */}
      </main>
    </div>
  );
};

const WhatIsHeadlessCommerce = () => {
  return (
    <div className=" px-6 max-w-7xl mx-auto sm:mt-20 border-t border-gray-200 pt-8 sm:pt-20">
      <div className=" mx-auto ">
        <h2 className="text-3xl font-bold tracking-tight text-[#333333] sm:text-4xl">
          What is a Headless WooCommerce Setup with Next.js?
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          At its core, a headless WooCommerce setup means splitting your store
          into two parts:
        </p>
      </div>

      <div className="mx-auto mt-6 max-w-5xl sm:mt-16 lg:max-w-none">
        <div className="grid grid-cols-1 gap-x-8 gap-y-2 max-w-7xl mx-auto lg:max-w-none lg:grid-cols-2">
          {/* Backend Card */}
          <div className="flex flex-col items-start bg-[#F1F5F9] p-8 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#16A34A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <dt className="text-xl font-semibold leading-7 text-[#333333]">
                Backend (WooCommerce)
              </dt>
            </div>
            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p className="flex-auto">
                You still manage products, orders, and inventory inside the
                WordPress dashboard. Nothing changes there.
              </p>
            </dd>
          </div>
          {/* Frontend Card */}
          <div className="flex flex-col items-start bg-[#F1F5F9] p-8 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#16A34A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <dt className="text-xl font-semibold leading-7 text-[#333333]">
                Frontend (Next.js)
              </dt>
            </div>
            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p className="flex-auto">
                Instead of using WordPress themes to display your store, you use
                Next.js, a React-based framework, to power the storefront your
                customers interact with.
              </p>
            </dd>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-16">
        <div className="mx-auto max-w-7xl">
          <div className="prose lg:prose-xl max-w-none text-[#333333]">
            <p>
              This separation gives you the best of both worlds: WooCommerce’s
              flexibility in the backend and a lightning-fast, modern frontend
              that’s built for performance.
            </p>
            <p>
              So, why Next.js? Unlike traditional WordPress themes, Next.js is
              built for speed, scalability, and SEO. It supports{" "}
              <strong className="font-semibold">
                Server-Side Rendering (SSR)
              </strong>{" "}
              and{" "}
              <strong className="font-semibold">
                Static Site Generation (SSG)
              </strong>
              , which means your product pages load instantly and are
              pre-optimized for search engines. Faster pages = higher rankings +
              better user experience. And since Next.js integrates smoothly with
              APIs, it’s easier to scale your store without being tied to slow
              PHP templates.
            </p>
            <p>
              Think of it this way: with a normal WooCommerce site, every page
              request hits your WordPress server. With headless Next.js, pages
              are served statically or on-demand—reducing load times
              dramatically. Your customers get Shopify-like speed, while you
              still enjoy WooCommerce’s pricing flexibility and plugin
              ecosystem.
            </p>
          </div>
        </div>
      </div>

      {/* Shopify Comparison Section */}
      <div className="mt-12 sm:mt-16">
        <div className="relative isolate">
          <div className="mx-auto max-w-4xl lg:max-w-7xl">
            <figure className="bg-orange-50 p-8 rounded-2xl shadow-sm border border-orange-200">
              <blockquote className="text-lg leading-8 text-gray-800">
                <p>
                  Now, let’s put it in perspective with Shopify’s Storefront
                  API. Shopify has already embraced headless commerce, allowing
                  developers to build custom storefronts with React or Vue. But
                  here’s the catch: you’re still locked into Shopify’s
                  ecosystem, transaction fees, and pricing model.{" "}
                  <strong className="font-semibold text-[#F97316]">
                    With headless WooCommerce + Next.js, you keep ownership of
                    your data, avoid high platform fees, and still deliver the
                    Shopify-level performance
                  </strong>{" "}
                  and UX customers expect.
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-16">
        <div className="mx-auto max-w-7xl">
          <div className="prose lg:prose-xl max-w-none text-[#333333]">
            <p>
              In short: Headless WooCommerce with Next.js is about combining the
              freedom of WooCommerce with the speed and SEO benefits of Next.js.
              It’s a forward-looking approach to eCommerce in 2025—giving your
              store the performance edge it needs to compete with Shopify and
              beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MigrationSegment = () => {
  const StepIcon = ({ children }: { children: React.ReactNode }) => (
    <div className="flex-shrink-0 bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
      {children}
    </div>
  );
  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto px-6 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#333333] sm:text-4xl">
              Step-by-Step Migration Guide
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Switching to a headless WooCommerce setup with Next.js might sound
              intimidating, but it’s easier when you break it down into clear
              steps. This guide will walk you through the process from
              preparation to testing, so you can enjoy Shopify-level performance
              without losing WooCommerce flexibility.
            </p>
          </div>

          {/* Steps Wrapper */}
          <div className="space-y-12">
            {/* Step 1: Pre-Migration Checklist */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col items-center md:items-start">
                <StepIcon>1</StepIcon>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold leading-7 text-[#333333]">
                  Pre-Migration Checklist
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Before you dive in, you need to make sure your store is ready:
                </p>
                <ul className="mt-6 space-y-4 text-left">
                  <li className="p-4 bg-[#F1F5F9] rounded-lg border border-gray-200">
                    <strong>Audit your store:</strong> Check your current site
                    speed, broken links, and SEO health. Tools like GTmetrix or
                    Google PageSpeed Insights will give you a baseline.
                  </li>
                  <li className="p-4 bg-[#F1F5F9] rounded-lg border border-gray-200">
                    <strong>Backups are non-negotiable:</strong> Use plugins
                    like UpdraftPlus or BlogVault to create a full backup of
                    your WordPress site, including the database and media files.
                  </li>
                  <li className="p-4 bg-[#F1F5F9] rounded-lg border border-gray-200">
                    <strong>Choose the right hosting:</strong> Since Next.js
                    apps are best deployed on Vercel, you’ll want to keep
                    WooCommerce on a reliable WordPress host (Kinsta, WP Engine,
                    or Cloudways). This dual hosting setup ensures maximum
                    performance.
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2: Install WPGraphQL */}
            <div className="flex flex-col items-center md:flex-row gap-8">
              <StepIcon>2</StepIcon>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold leading-6 text-[#333333]">
                  Install WPGraphQL
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  To connect WooCommerce (backend) with Next.js (frontend),
                  you’ll need WPGraphQL and WPGraphQL for WooCommerce. These
                  plugins expose your store data via GraphQL endpoints, making
                  it easy for Next.js to fetch products, categories, and
                  checkout details.
                </p>
                <ul className="mt-4 list-disc list-inside text-gray-600 text-left">
                  <li>Install and activate WPGraphQL.</li>
                  <li>
                    Add the WooCommerce extension for full product and order
                    queries.
                  </li>
                  <li>
                    Confirm that your GraphQL endpoint (usually
                    yourdomain.com/graphql) is working.
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3: Build Your Next.js App */}
            <div className="flex flex-col items-center md:flex-row gap-8">
              <StepIcon>3</StepIcon>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold leading-7 text-[#333333]">
                  Build Your Next.js App
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Now it’s time to set up your Next.js storefront:
                </p>
                <ul className="mt-4 list-disc list-inside text-gray-600 text-left">
                  <li>
                    Create a new Next.js project (npx create-next-app@latest).
                  </li>
                  <li>
                    Install Apollo Client or urql to handle GraphQL queries.
                  </li>
                  <li>Connect to your WooCommerce GraphQL endpoint.</li>
                </ul>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  This is where your static and dynamic rendering power comes
                  in. Product category pages can be statically generated for
                  SEO, while checkout and cart pages can be server-rendered for
                  real-time updates.
                </p>
              </div>
            </div>

            {/* Step 4: Fetch WooCommerce Data */}
            <div className="flex flex-col items-center md:flex-row gap-8">
              <StepIcon>4</StepIcon>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold leading-7 text-[#333333]">
                  Fetch WooCommerce Data
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Here’s an example of how you can fetch products with GraphQL
                  inside your Next.js app:
                </p>
                <div className="mt-4 bg-gray-900 text-white p-4 rounded-lg text-left text-sm overflow-x-auto">
                  <pre>
                    <code>
                      {`query GetProducts {
  products(first: 10) {
    nodes {
      id
      name
      description
      price
      image {
        uri
        title
      }
    }
  }
}`}
                    </code>
                  </pre>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  With Apollo Client, you can run this query and display
                  products instantly in a React component. The result? Faster
                  load times and better SEO-friendly markup.
                </p>
              </div>
            </div>

            {/* Step 5: Optimize for SEO & Speed */}
            <div className="flex flex-col items-center md:flex-row gap-8">
              <StepIcon>5</StepIcon>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold leading-7 text-[#333333]">
                  Optimize for SEO & Speed
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Next.js gives you a performance edge, but you’ll want to
                  fine-tune your storefront:
                </p>
                <ul className="mt-4 list-disc list-inside text-gray-600 text-left">
                  <li>
                    <strong>Use Image Optimization:</strong> Next.js
                    &lt;Image&gt; automatically serves responsive images in
                    modern formats like WebP.
                  </li>
                  <li>
                    <strong>Implement SEO best practices:</strong> Add meta
                    tags, Open Graph data, and schema markup using the next-seo
                    package.
                  </li>
                  <li>
                    <strong>Leverage caching & CDN:</strong> Vercel
                    automatically handles caching, but you can further speed
                    things up with incremental static regeneration (ISR).
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 6: Test Compatibility */}
            <div className="flex flex-col items-center md:flex-row gap-8">
              <StepIcon>6</StepIcon>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold leading-7 text-[#333333]">
                  Test Dashboard and Checkout Compatibility
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  One of the biggest worries store owners have is: “Will I lose
                  WooCommerce’s dashboard or checkout flow?” The answer is no.
                </p>
                <ul className="mt-4 list-disc list-inside text-gray-600 text-left">
                  <li>
                    You’ll still manage everything—orders, customers,
                    coupons—inside the WooCommerce admin panel.
                  </li>
                  <li>
                    For checkout, you can either stick with WooCommerce’s native
                    flow or integrate a Shopify checkout for hybrid performance
                    (giving you the best of WooCommerce and Shopify in one
                    store).
                  </li>
                </ul>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Make sure to test all user flows: product browsing,
                  add-to-cart, checkout, and post-purchase emails. Once
                  everything runs smoothly, your headless store is ready to go
                  live.
                </p>
              </div>
            </div>
          </div>

          {/* Wrapping Up Section */}
          <div className="mt-16 border-t border-gray-200 pt-10 text-center">
            <h3 className="text-xl font-bold text-[#333333]">
              Wrapping Up This Step
            </h3>
            <p className="mt-4 text-base leading-7 text-gray-600 max-w-2xl mx-auto">
              Migrating WooCommerce to a headless Next.js setup is not just
              about speed. It’s about future-proofing your store for SEO,
              scalability, and modern customer expectations. Once live, you’ll
              notice pages load in milliseconds, your search rankings improve,
              and your bounce rates drop.
            </p>
            <p className="mt-4 text-base font-semibold leading-7 text-gray-700 max-w-2xl mx-auto">
              The effort pays off with higher conversions and a store that feels
              as smooth as Shopify—while keeping WooCommerce’s freedom and cost
              advantage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  const BenefitCard = ({
    icon,
    title,
    children,
  }: {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="flex flex-col bg-[#F1F5F9] p-8 rounded-2xl border border-gray-200 shadow-sm transition-transform transform hover:-translate-y-1">
      <div className="flex items-center gap-x-4">
        <span className="text-4xl">{icon}</span>
        <h3 className="text-2xl font-semibold leading-tight text-[#333333]">
          {title}
        </h3>
      </div>
      <div className="mt-4 text-base leading-7 text-gray-600 space-y-4">
        {children}
      </div>
    </div>
  );

  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#333333] sm:text-4xl">
            Key Benefits for WooCommerce and Shopify Stores
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            By now, you know what a headless WooCommerce setup with Next.js
            looks like. But the real question is: why should you make the
            switch? Let’s break down the key benefits that matter most for both
            WooCommerce and Shopify users.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Speed */}
          <BenefitCard icon="🚀" title="1. Speed: 2–5x Faster Load Times">
            <p>
              Traditional WooCommerce sites often rely on PHP-based themes that
              slow down as your catalog grows. A headless Next.js frontend
              solves this by serving static or server-rendered pages through a
              global CDN.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Product pages load in milliseconds.</li>
              <li>Customers can browse without waiting for slow refreshes.</li>
              <li>
                Cart and checkout flows stay snappy, even during traffic spikes.
              </li>
            </ul>
            <p>
              This speed boost isn’t just a nice-to-have—it’s a conversion
              driver. Studies show that faster sites can increase revenue by{" "}
              <strong className="font-semibold text-[#F97316]">18–23%</strong>,
              putting real money back in your pocket.
            </p>
          </BenefitCard>

          {/* Card 2: SEO */}
          <BenefitCard icon="🔎" title="2. Built-In SEO Advantage">
            <p>
              Google rewards websites that load fast, are mobile-friendly, and
              use clean code structures. With Next.js, your store benefits from:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                <strong>Server-Side Rendering (SSR):</strong> Search engines see
                fully rendered product pages.
              </li>
              <li>
                <strong>Static Site Generation (SSG):</strong> Category pages
                and blog posts are pre-rendered for instant delivery.
              </li>
              <li>
                <strong>Schema and meta optimization:</strong> Easier to
                implement structured data for products, reviews, and FAQs.
              </li>
            </ul>
            <p>
              The result? Higher rankings, more organic traffic, and lower ad
              spend. Instead of fighting WooCommerce’s slow theme performance,
              you’re working with a system designed for SEO-first eCommerce.
            </p>
          </BenefitCard>

          {/* Card 3: Scalability */}
          <BenefitCard icon="📈" title="3. Scalability for Growth">
            <p>
              One of the biggest advantages of going headless is scalability. As
              your store grows, Next.js handles traffic spikes without melting
              your server. You can add new features—subscription models,
              multi-language support, or regional storefronts—without dragging
              down performance.
            </p>
            <p>
              For WooCommerce users, this means no more worrying about site
              crashes on Black Friday. For Shopify users exploring headless, it
              means you can escape theme limitations and build custom
              storefronts tailored to your brand.
            </p>
          </BenefitCard>

          {/* Card 4: Hybrid Options */}
          <BenefitCard
            icon="🤝"
            title="4. WooCommerce + Shopify Hybrid Options"
          >
            <p>
              Here’s where things get exciting: you don’t have to choose between
              WooCommerce and Shopify. With a headless setup, you can combine
              them.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Use WooCommerce for product management and flexibility.</li>
              <li>
                Plug in Shopify Checkout for its secure, conversion-optimized
                flow.
              </li>
              <li>
                Enhance the experience with Sell Alpha, an AI-powered tool that
                delivers personalized product recommendations.
              </li>
            </ul>
            <p>
              This hybrid approach gives you the best of WooCommerce and
              Shopify—flexibility, speed, and a checkout process trusted
              worldwide. It’s a win-win for stores that want to scale without
              compromise.
            </p>
          </BenefitCard>

          {/* Card 5: Future-Proofing */}
          <div className="md:col-span-2">
            <BenefitCard icon="⚡" title="5. Future-Proofing Your Store">
              <p>
                Headless commerce isn’t just a trend—it’s the future of
                eCommerce in 2025. With Next.js evolving rapidly and tools like
                Sell Alpha bringing AI-driven personalization to the table, your
                store won’t just keep up with competitors—it’ll stay ahead.
              </p>
              <p>
                Instead of patching performance issues year after year, you’ll
                have a storefront that’s built for long-term growth.
              </p>
            </BenefitCard>
          </div>
        </div>
      </div>
    </div>
  );
};

const CaseStudySection = () => {
  return (
    <div className="bg-[#F1F5F9] font-sans">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#333333] sm:text-4xl">
            Case Study: Real-World Results
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            To see the impact of a headless WooCommerce setup with Next.js,
            let’s look at a real example: a mid-sized online bookstore that
            migrated in early 2025.
          </p>
        </div>

        {/* The Challenge */}
        <div className="max-w-7xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-md mb-16">
          <h3 className="text-2xl font-semibold text-[#333333] mb-4">
            The Challenge
          </h3>
          <p className="text-gray-600 leading-7">
            Before the migration, their WooCommerce site was struggling. Product
            pages took{" "}
            <strong className="font-semibold text-red-500">
              4–5 seconds to load
            </strong>
            , mobile shoppers often abandoned carts, and organic traffic was
            flat. Despite having a large catalog of 20,000+ books, slow
            performance and poor Core Web Vitals scores were holding them back
            in search rankings.
          </p>
        </div>

        {/* Animated Stats Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Static Card for Page Load Time */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg text-center transform transition-all hover:scale-105">
            <div className="flex justify-center items-center mb-4">
              <span className="text-4xl">⏱️</span>
            </div>
            <p className="text-5xl font-bold text-[#16A34A]">
              &lt;1.2<span className="text-3xl">s</span>
            </p>
            <p className="mt-2 text-base text-gray-600">Page Load Times</p>
          </div>
          {/* Animated Stat Cards */}
          <StatCard
            value={32}
            suffix="%"
            label="Decrease in Bounce Rate"
            icon="📉"
          />
          <StatCard
            value={41}
            suffix="%"
            label="Growth in Organic Traffic"
            icon="📈"
          />
          <StatCard value={19} suffix="%" label="Increase in Sales" icon="💰" />
        </div>

        {/* The Solution & Conclusion */}
        <div className="max-w-7xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold text-[#333333] mb-4">
            The Solution & Results
          </h3>
          <div className="prose lg:prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              After switching to a headless WooCommerce + Next.js frontend, the
              results were immediate: page load times dropped, bounce rate
              decreased by 32%, organic traffic grew by 41%, and most
              importantly, sales increased by 19%.
            </p>
            <p>
              The bookstore kept WooCommerce as the backend for inventory and
              orders, but used Next.js to deliver a Shopify-like customer
              experience. They later integrated Shopify Checkout for reliability
              during flash sales, ensuring customers never abandoned carts due
              to payment friction.
            </p>
            <p className="font-semibold text-[#333333]">
              This case study proves one thing: headless eCommerce isn’t just
              theory—it delivers measurable performance and revenue gains.
              Whether you’re selling books, clothing, or digital products, the
              headless WooCommerce Next.js benefits are clear: faster sites,
              higher rankings, and happier customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CTASection = () => {
  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <h2 className="text-3xl font-bold tracking-tight text-[#333333] sm:text-4xl">
            Conclusion: Transform with{" "}
            <span className="text-[#16A34A]">[Your Agency Name]</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            If your WooCommerce store feels sluggish, or you’ve been eyeing
            Shopify’s speed but don’t want to give up WooCommerce’s flexibility,
            a headless WooCommerce setup with Next.js is the solution. It’s the
            smartest way to unlock Shopify-level performance, boost SEO, and
            future-proof your online store in 2025.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            At <strong className="font-semibold">[Your Agency Name]</strong>, we
            specialize in building high-performance, headless eCommerce stores.
            Our team can handle everything—from auditing your current site to
            migrating you onto a lightning-fast Next.js frontend—without
            disrupting your existing WooCommerce operations.
          </p>

          {/* Highlighted Offer Card */}
          <div className="mt-12 bg-[#F1F5F9] border border-gray-200 rounded-2xl p-8 shadow-lg">
            <p className="text-2xl font-bold text-[#333333]">
              💡 Here’s our offer:
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Get a{" "}
              <strong className="font-semibold">free performance audit</strong>{" "}
              of your WooCommerce store today. If you’re ready to move forward,
              migration packages start from{" "}
              <strong className="font-semibold text-[#16A34A]">
                ₹75,000 to ₹5,00,000
              </strong>
              , depending on the size and complexity of your store.
            </p>
          </div>

          {/* Final CTA */}
          <p className="mt-12 text-lg leading-8 text-gray-600">
            Don’t let slow load times cost you customers. Partner with us, and
            let’s transform your WooCommerce store into a scalable, SEO-friendly
            powerhouse built for growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-[#F97316] px-6 py-4 text-lg font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-transform transform hover:scale-105"
            >
              Get Your Free Audit Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
