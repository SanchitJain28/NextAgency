import Header from "@/components/header-footer/Header";
import { Highlighter } from "@/components/magicui/highlighter";
import {
  BoltIcon,
  LayersIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
} from "lucide-react";
import React from "react";
import { Metadata } from "next";

// ====================================================================
// SEO METADATA OBJECT (For Next.js 15 App Router)
// ====================================================================
// This object tells Google and other search engines what your page is about.
// It populates the <head> section of your HTML.
export const metadata: Metadata = {
  title: "Headless Next.js: Get Shopify Speed on Your WooCommerce Store",
  description:
    "Unlock Shopify's lightning-fast speed and seamless UX on your WooCommerce store. Learn how a headless Next.js frontend creates the ultimate hybrid ecommerce solution.",
  keywords: [
    "Headless Next.js",
    "WooCommerce Shopify hybrid",
    "Headless WooCommerce",
    "How to get Shopify speed in WooCommerce",
    "Next.js for eCommerce performance",
    "Headless eCommerce 2025",
    "Shopify benefits in WooCommerce",
    "WooCommerce with Shopify checkout",
    "Next.js frontend for WooCommerce",
    "React ecommerce",
  ],
  alternates: {
    canonical: "https://www.topcomsolutions.com/blog/best-of-woo-and-shopify",
  },
  openGraph: {
    title: "Headless Next.js: Get Shopify Speed on Your WooCommerce Store",
    description:
      "Unlock Shopify's lightning-fast speed and seamless UX on your WooCommerce store. Learn how a headless Next.js frontend creates the ultimate hybrid ecommerce solution.",
    url: "https://www.topcomsolutions.com/blog/best-of-woo-and-shopify",
    siteName: "Your Brand Name", // ⚠️ ACTION REQUIRED: Replace with your site/brand name
    images: [
      {
        url: "https://topcomsolutions.com/images/og-headless-woocommerce.png",
        width: 1200,
        height: 630,
        alt: "Diagram showing WooCommerce backend with a Next.js frontend",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Headless Next.js: Get Shopify Speed on Your WooCommerce Store",
    description:
      "Unlock Shopify's lightning-fast speed and seamless UX on your WooCommerce store. Learn how a headless Next.js frontend creates the ultimate hybrid ecommerce solution.",
    creator: "@yourTwitterHandle",
    images: ["https://topcomsolutions.com/images/og-headless-woocommerce.png"],
  },
};

const JsonLdSchema = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.topcomsolutions.com/blog/best-of-woo-and-shopify",
    },
    headline:
      "How a Headless Next.js Frontend Gives Your WooCommerce Store the Best of WooCommerce and Shopify",
    description:
      "Discover how to combine WooCommerce's backend flexibility with Shopify's frontend speed using a headless Next.js architecture. Get the best of both platforms.",
    image: "https://topcomsolutions.com/images/og-headless-woocommerce.png",
    author: {
      "@type": "Organization", 
      name: "TopCom Solutions",
      url: "https://www.topcomsolutions.com/about-us",
    },
    publisher: {
      "@type": "Organization",
      name: "TopCom Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://topcomsolutions.com/logo.png",
      },
    },
    datePublished: "2025-09-21", 
    dateModified: "2025-09-21",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default function page() {
  return (
    <div>

      <head>
        <JsonLdSchema />
      </head>
      <Header />
      <div className="px-2">
        <IntroductionSection />
        <HeadlessFrontendSection />
        <NextJSStrengthsSection />
        <ShopifyStrengthsSection />
        <CaseStudySection />
        <ConclusionCTASection />
      </div>
    </div>
  );
}


const IntroductionSection = () => {
  return (
    // Main section container with a white background.
    <section className="bg-white">
      {/* Centered content container with responsive padding. */}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:py-8 sm:px-6 lg:px-8">
        {/* Header: Contains the main title of the blog post. */}
        <header className="mb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#333333] leading-tight">
            How a Headless <Highlighter>Next.js Frontend</Highlighter> Gives
            Your WooCommerce Store the Best of WooCommerce{" "}
            {/* Using the primary green color for emphasis. */}
            <span className="text-[#16A34A]">and</span> Shopify
          </h1>
        </header>

        {/* Main Content: The body of the introduction. */}
        <div className="space-y-6 text-lg text-[#333333] leading-relaxed">
          <p>
            If you’ve ever run an online store, you know the trade-off:
            WooCommerce gives you total freedom, while Shopify gives you
            unmatched speed and user experience. WooCommerce is open-source,
            endlessly customizable, and deeply integrated with WordPress. But
            when it comes to performance, smooth checkout, and that polished
            “Shopify feel,” WooCommerce often lags behind.
          </p>
          <p>
            On the flip side, Shopify shines with fast, modern storefronts and a
            frictionless shopping experience—but it locks you into its
            ecosystem, limiting flexibility and raising long-term costs.
          </p>
          {/* A highlighted sentence to break up the text and draw attention. */}
          <p className="text-2xl font-bold text-center text-[#16A34A] py-6 ">
            <Highlighter action="underline" color="#F87315">
              Here’s the good news: you don’t actually have to choose between
              them.
            </Highlighter>
          </p>
          <p>
            With a headless Next.js frontend for your WooCommerce store, you can
            combine WooCommerce’s powerful backend and flexibility with
            Shopify’s lightning-fast performance.
          </p>
          <p>
            Think of it this way: your team still manages products, orders, and
            plugins inside WooCommerce, but your customers enjoy a Shopify-like
            storefront—blazing fast, SEO-friendly, and seamless to shop in.
          </p>
        </div>

        {/* Aside: A distinct call-to-action block at the end. */}
        <aside className="mt-4 bg-[#F1F5F9] rounded-xl -px-6 py-8 text-center border border-slate-200">
          <p className="text-xl md:text-2xl font-bold text-[#333333]">
            👉 Get Shopify’s UX in your WooCommerce store with Next.js.
          </p>
          <p className="mt-2 text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            It’s the best of both worlds—and it’s how smart brands are scaling
            without giving up control.
          </p>
          {/* The main Call-to-Action button using the specified orange color. */}
          <button className="mt-6 bg-[#F97316] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-orange-300">
            Learn How
          </button>
        </aside>
      </div>
    </section>
  );
};

const HeadlessFrontendSection = () => {
  // Data for the benefits cards to keep the JSX clean.
  const benefits = [
    {
      icon: <BoltIcon className="text-white h-6 w-6" />,
      title: "Lightning-fast performance",
      description:
        "Next.js optimizes page loads, image delivery, and dynamic routing. Your store can run 2–5x faster, directly boosting conversions.",
    },
    {
      icon: <TrendingUpIcon className="text-white h-6 w-6" />,
      title: "SEO advantage",
      description:
        "With server-side rendering and static site generation, Next.js gives you the edge in search rankings. That’s critical in today’s headless eCommerce 2025 landscape.",
    },
    {
      icon: <LayersIcon className="text-white h-6 w-6" />,
      title: "Scalability",
      description:
        "Whether you have 50 products or 50,000, Next.js handles growth smoothly without slowing down.",
    },
    {
      icon: <ShoppingCartIcon className="text-white h-6 w-6" />,
      title: "Shopify experience, WooCommerce control",
      description:
        "You keep WooCommerce’s backend, but your customers enjoy Shopify benefits in WooCommerce, like faster navigation and checkout.",
    },
  ];

  return (
    // Section container with a light gray background to visually separate it from the intro.
    <section className="bg-[#F1F5F9] border-t border-slate-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:py-24 sm:px-6 lg:px-8">
        <header className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#333333] leading-tight">
            What is a <span className="text-[#16A34A]">Headless Next.js</span>{" "}
            Frontend?
          </h2>
        </header>

        <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm space-y-6 text-lg text-[#333333] leading-relaxed">
          <p>
            Let’s break it down. A headless setup means you separate your
            store’s backend (where you manage products, orders, and settings)
            from the frontend (what customers see and interact with). In this
            case, WooCommerce remains your backend—you still use the familiar
            WordPress dashboard for inventory, pricing, and plugins. But instead
            of relying on WooCommerce’s default theme system, your store’s
            frontend runs on Next.js, a modern React framework built for speed
            and scalability.
          </p>
          <p className="font-semibold">
            Why does this matter? Because it creates a WooCommerce Shopify
            hybrid. You keep WooCommerce’s flexibility, open-source control, and
            low costs, while delivering the kind of slick, high-performance
            shopping experience Shopify is famous for. Customers get
            Shopify-like speed and checkout flows, while you avoid Shopify’s
            lock-ins and fees.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-[#333333] mb-12">
            Here are the key headless WooCommerce Next.js benefits:
          </h3>
          {/* Responsive grid for the benefits cards. */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start transition-transform transform hover:-translate-y-2"
              >
                <div className="bg-[#16A34A] p-3 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold text-[#333333] mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white p-8 md:p-10 rounded-xl shadow-sm space-y-6 text-lg text-[#333333] leading-relaxed">
          <p>
            Think of it as the best of both worlds: you’re not abandoning
            WooCommerce, just upgrading its frontend. In practice, this means
            you can answer the common merchant question: “How to get Shopify
            speed in WooCommerce?” The answer is simple—go headless with
            Next.js.
          </p>
          <p>
            By combining the best of WooCommerce and Shopify with Next.js, you
            future-proof your store. Customers get a seamless, modern shopping
            experience, while you stay in full control of your backend. That’s
            the real power of a headless WooCommerce for Shopify UX.
          </p>
        </div>
      </div>
    </section>
  );
};

const NextJSStrengthsSection = () => {
  const CheckCircleIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-[#16A34A] shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
  const wooCommerceStrengths = [
    "Open-source flexibility: Change anything you want—design, checkout, integrations.",
    "Cost-effective: No monthly lock-in fees. You own your store.",
    "Ecosystem power: Thousands of WordPress plugins and themes at your disposal.",
    "Full control: From product data to hosting, nothing is outside your reach.",
  ];

  const nextjsBenefits = [
    {
      title: "Speed (2–5x faster)",
      description:
        "Next.js optimizes performance with server-side rendering and static site generation. The result? Customers experience Shopify-level speed—a huge win for conversions.",
    },
    {
      title: "SEO gains",
      description:
        "Google loves fast, structured pages. With Next.js, your store isn’t just faster—it’s more discoverable.",
    },
    {
      title: "Scalability",
      description:
        "Whether you’re selling 100 items or 100,000, Next.js for eCommerce performance ensures your store grows without slowing down.",
    },
    {
      title: "Shopify experience, WooCommerce backbone",
      description:
        "This is where the magic happens. Customers feel like they’re shopping on Shopify, but you keep WooCommerce’s backend freedom. It’s the best of WooCommerce and Shopify with Next.js.",
    },
  ];

  const codeSnippet = `
// pages/products/[id].js
import { useEffect, useState } from "react";

export default function ProductPage({ id }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(\`/wp-json/wc/v3/products/\${id}?consumer_key=YOUR_KEY&consumer_secret=YOUR_SECRET\`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p dangerouslySetInnerHTML={{ __html: product.description }} />
      <p>Price: {product.price}</p>
    </div>
  );
}`;

  return (
    <section className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#333333] leading-tight">
            <Highlighter action="box" padding={1}>
              WooCommerce’s Strengths Amplified by{" "}
              <span className="text-[#16A34A]">Next.js</span>
            </Highlighter>
          </h2>
        </header>

        <div className="space-y-6 text-lg text-[#333333] leading-relaxed mb-16">
          <p>
            One of the biggest reasons merchants choose WooCommerce is control.
            As an open-source platform built on WordPress, WooCommerce gives you
            total freedom: customize your store, extend it with plugins, and
            never worry about platform lock-in. It’s the opposite of Shopify’s
            “walled garden.”
          </p>
          <p>
            But WooCommerce alone has limits. It can be slow, especially at
            scale, and its default themes aren’t designed for the kind of
            polished, lightning-fast shopping experience today’s customers
            expect. That’s where Next.js steps in—and why a WooCommerce Shopify
            hybrid makes so much sense.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-[#F1F5F9] p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-[#333333] mb-6">
              WooCommerce’s Built-In Strengths
            </h3>
            <ul className="space-y-4">
              {wooCommerceStrengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon />
                  <span className="ml-3 text-gray-700">{strength}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#F1F5F9] p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-[#333333] mb-6">
              How Next.js Supercharges WooCommerce
            </h3>
            <ul className="space-y-4">
              {nextjsBenefits.slice(0, 2).map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon />
                  <span className="ml-3 text-gray-700">
                    <strong>{benefit.title}:</strong> {benefit.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#F1F5F9] p-8 rounded-xl mb-16">
          <ul className="space-y-4">
            {nextjsBenefits.slice(2).map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircleIcon />
                <span className="ml-3 text-gray-700">
                  <strong>{benefit.title}:</strong> {benefit.description}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 flex items-start text-gray-700">
            <CheckCircleIcon />
            <span className="ml-3">
              So when merchants ask, “How to get Shopify speed in
              WooCommerce?”—this is the answer.
            </span>
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-[#333333] mb-8">
            Example: Fetching Products with Next.js
          </h3>
          <p className="text-center text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Here’s a simple look at how a Next.js frontend can fetch WooCommerce
            products via the REST API:
          </p>
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 overflow-x-auto">
            <pre className="language-javascript">
              <code className="text-white text-sm leading-relaxed">
                {codeSnippet}
              </code>
            </pre>
          </div>
        </div>

        <div className="mt-16 text-lg text-[#333333] leading-relaxed space-y-6">
          <p>
            This snippet shows just how easily Next.js and WooCommerce can work
            together. The backend (WooCommerce) powers your product data, while
            the frontend (Next.js) delivers it to customers at blazing speed.
          </p>
          <p>
            In other words, Next.js turns WooCommerce into a true headless
            eCommerce 2025 solution—modern, scalable, and future-ready.
          </p>
        </div>
      </div>
    </section>
  );
};

const ShopifyStrengthsSection = () => {
  const CheckCircleIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-[#16A34A] shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
  const shopifyStrengths = [
    "Fast, frictionless checkout: Shopify is famous for its one-page, conversion-friendly checkout.",
    "Scalability: Stores can handle huge traffic spikes without slowing down.",
    "App ecosystem: Tools like Sell Alpha extend functionality with minimal setup.",
  ];

  const nextjsDelivery = [
    {
      title: "Checkout that converts",
      description:
        "Next.js enables streamlined checkout flows that mimic Shopify’s simplicity. That means less cart abandonment and more sales—essentially WooCommerce with Shopify checkout.",
    },
    {
      title: "Scalable performance",
      description:
        "Built with server-side rendering and static site generation, Next.js makes sure your store stays fast and stable, even under heavy traffic. This is why Next.js for eCommerce performance is a game-changer.",
    },
    {
      title: "Modern UX",
      description:
        "Navigation is snappy, product pages load instantly, and the experience feels as polished as any Shopify store. It’s truly the headless WooCommerce for Shopify UX approach.",
    },
  ];

  return (
    <section className="bg-[#F1F5F9] border-t border-slate-200">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#333333] leading-tight">
            Shopify’s Strengths Brought to{" "}
            <span className="text-[#16A34A]">WooCommerce</span>
          </h2>
        </header>

        <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm space-y-6 text-lg text-[#333333] leading-relaxed mb-16">
          <p>
            Shopify has built its reputation on one thing: customer experience.
            From lightning-fast storefronts to seamless checkout, it delivers an
            eCommerce journey that feels modern and effortless. That’s why so
            many merchants are drawn to Shopify in the first place. But the
            trade-off is real—you give up flexibility, customization, and full
            control of your store.
          </p>
          <p>
            Now imagine if you could bring Shopify’s best features directly into
            WooCommerce without sacrificing control. That’s exactly what happens
            when you go headless with Next.js. It transforms WooCommerce into a
            WooCommerce Shopify hybrid, combining Shopify’s performance
            strengths with WooCommerce’s open-source backbone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-[#333333] mb-6">
              What Shopify Does Best
            </h3>
            <ul className="space-y-4">
              {shopifyStrengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon />
                  <span className="ml-3 text-gray-700">{strength}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm row-span-2">
            <h3 className="text-2xl font-bold text-[#333333] mb-6">
              How Next.js Delivers the Shopify Experience to WooCommerce
            </h3>
            <ul className="space-y-4">
              {nextjsDelivery.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon />
                  <p className="ml-3 text-gray-700">
                    <strong className="text-[#333333]">{item.title}:</strong>{" "}
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-[#333333] mb-6">
              The Role of Apps Like Sell Alpha
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Shopify’s app ecosystem is one of its biggest selling points. But
              now, WooCommerce merchants can get the same edge. With
              integrations like Sell Alpha, your headless WooCommerce store
              gains advanced features—personalized product recommendations,
              upsells, and marketing automation—without giving up flexibility.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm text-lg text-[#333333] leading-relaxed space-y-6">
          <h3 className="text-2xl font-bold text-center text-[#333333]">
            Why This Matters for 2025 and Beyond
          </h3>
          <p>
            In the evolving landscape of headless eCommerce 2025, speed and UX
            are everything. Customers don’t care what platform you’re
            running—they care about how quickly they can browse, buy, and move
            on. By adopting Next.js, you’re effectively answering the question:
            “How to get Shopify speed in WooCommerce?” The answer is simple: use
            Next.js to unlock Shopify-level performance on WooCommerce’s
            flexible backbone.
          </p>
          <p className="font-semibold text-center text-[#16A34A]">
            The result? A store that feels like Shopify to your customers but
            works like WooCommerce for you. That’s the real promise of a
            WooCommerce Shopify hybrid—Shopify strengths, WooCommerce freedom,
            all powered by Next.js.
          </p>
        </div>
      </div>
    </section>
  );
};

const CaseStudySection = () => {
  const results = [
    {
      stat: "28%",
      title: "Cart Abandonment Reduced",
      description:
        "By implementing WooCommerce with Shopify checkout flows, shoppers experienced the same fast, intuitive checkout Shopify is known for.",
    },
    {
      stat: "<1.5s",
      title: "Page Load Time",
      description:
        "Thanks to Next.js for eCommerce performance, page load times dropped from 4.2 seconds. That’s nearly 3x faster, directly boosting conversions.",
    },
    {
      stat: "200%",
      title: "Traffic Spike Handled",
      description:
        "During seasonal sales, traffic spiked, but the site stayed smooth, proving the benefits of a headless setup in high-traffic scenarios.",
    },
  ];

  return (
    <section className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#333333] leading-tight">
            Case Study:{" "}
            <span className="text-[#16A34A]">Best of Both Worlds</span>
          </h2>
        </header>

        <div className="bg-[#F1F5F9] p-8 md:p-10 rounded-xl shadow-sm space-y-6 text-lg text-[#333333] leading-relaxed mb-16">
          <p>
            Let’s look at a real-world example. A mid-sized fashion retailer was
            running its store on WooCommerce. They loved the
            flexibility—managing products, plugins, and content through
            WordPress was easy. But their biggest pain points were slow page
            loads and a clunky checkout process. Customers were dropping off
            before completing purchases, and the store felt outdated compared to
            Shopify competitors.
          </p>
          <p>
            Instead of migrating to Shopify (and losing control), they chose a
            WooCommerce Shopify hybrid setup with a headless Next.js frontend.
            The results were dramatic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm transition-transform transform hover:-translate-y-2"
            >
              <p className="text-6xl font-extrabold text-[#16A34A]">
                {result.stat}
              </p>
              <h4 className="text-xl font-bold text-[#333333] mt-4 mb-2">
                {result.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#F1F5F9] p-8 md:p-10 rounded-xl shadow-sm text-lg text-[#333333] leading-relaxed space-y-6">
          <p>
            In short, the retailer now enjoys the best of WooCommerce and
            Shopify with Next.js: Shopify-like speed and UX for customers,
            WooCommerce freedom and flexibility for the business. It’s a
            future-ready solution that perfectly captures the promise of
            headless eCommerce 2025.
          </p>
          <p className="font-semibold text-center">
            This case study shows the answer to a common merchant question: “How
            to get Shopify speed in WooCommerce?” The solution isn’t switching
            platforms—it’s going headless with Next.js.
          </p>
        </div>
      </div>
    </section>
  );
};

// 💡 NOTE: You were missing a <ConclusionCTASection/> component, I've added a placeholder.
// You can design this section to be a final call-to-action for your readers.
const ConclusionCTASection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-[#333333]">
          Ready to Build a High-Performance Store?
        </h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Stop choosing between speed and flexibility. A headless Next.js
          frontend for your WooCommerce store gives you the best of both worlds.
          Let&apos;s talk about how we can transform your ecommerce experience.
        </p>
        <button className="mt-8 bg-[#F97316] hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-orange-300">
          Get Your Free Consultation
        </button>
      </div>
    </section>
  );
};
