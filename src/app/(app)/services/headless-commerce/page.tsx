import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Terminal } from "lucide-react";
import ComparisonTable from "@/components/shared/ComparisonTable";

export const metadata: Metadata = {
  title: "Headless Shopify Development Services | ScaleFront",
  description:
    "We build fast, custom storefronts using Next.js and Shopify Hydrogen — paired with clear advice on whether headless makes financial sense for your store.",
  alternates: {
    canonical: "https://scalefront.io/services/headless-commerce",
  },
  openGraph: {
    title: "Headless Shopify Development Services | ScaleFront",
    description:
      "We build fast, custom storefronts using Next.js and Shopify Hydrogen — paired with clear advice on whether headless makes financial sense for your store.",
    url: "https://scalefront.io/services/headless-commerce",
    siteName: "ScaleFront",
    type: "website",
    images: [
      {
        url: "https://scalefront.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Headless Shopify Development by ScaleFront",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Headless Shopify Development Services | ScaleFront",
    description:
      "We build fast, custom storefronts using Next.js and Shopify Hydrogen — paired with clear advice on whether headless makes financial sense for your store.",
    images: ["https://scalefront.io/og-image.jpg"],
  },
};

export default function HeadlessShopifyPage() {
  const faqData = [
    {
      question: "What is headless Shopify development?",
      answer:
        "Headless Shopify separates your storefront interface from your ecommerce backend. Shopify still manages orders, inventory, payments, and checkout securely, while a custom frontend built with modern web tools delivers what shoppers see.",
    },
    {
      question: "What are the main benefits of going headless?",
      answer:
        "A headless storefront gives you complete design control, instant page transitions without full browser reloads, multi-region routing from a single backend, and the ability to run web and mobile apps together.",
    },
    {
      question: "What are the biggest drawbacks of headless Shopify?",
      answer:
        "Headless stores cost significantly more to build and maintain than traditional themes. Most third-party Shopify App Store plugins do not work automatically, requiring custom API coding and separate monthly cloud hosting accounts.",
    },
    {
      question: "When should a store choose headless over a custom theme?",
      answer:
        "Choose headless if you need complex product builders, custom 3D configurators, multi-brand storefronts sharing one catalog, or an omnichannel setup where web and mobile applications pull from the same inventory database.",
    },
    {
      question: "When should a brand avoid headless development?",
      answer:
        "Avoid headless if your business has not outgrown standard Shopify Liquid capabilities or relies on non-technical staff installing App Store plugins. A custom theme delivers equal speed without extra maintenance overhead.",
    },
    {
      question: "Does a headless storefront make Shopify faster?",
      answer:
        "Yes, but only if built properly. Headless eliminates theme DOM script clutter and pre-renders static pages on edge servers, but an unoptimized build with bloated client-side JavaScript can actually load slower than Liquid.",
    },
    {
      question: "How much does a headless Shopify build typically cost?",
      answer:
        "Total cost depends on catalog complexity, custom product configurator requirements, third-party API connections, and your chosen headless CMS. Because each build is custom-engineered, we provide fixed pricing after reviewing your technical scope.",
    },
    {
      question: "Is headless Shopify more expensive to maintain each month?",
      answer:
        "Yes. You must pay for external frontend cloud hosting such as Vercel or Cloudflare, a headless content management system subscription, and retain experienced developers to maintain API integrations and frontend code dependencies.",
    },
    {
      question: "Is headless Shopify good for search engine optimization (SEO)?",
      answer:
        "Yes, because modern frameworks use server-side rendering to deliver complete HTML to search crawlers. However, you must carefully configure canonical tags, dynamic XML sitemaps, structured schema data, and 301 redirect maps during launch.",
    },
    {
      question: "How do third-party Shopify apps work on a headless store?",
      answer:
        "They do not work by simple click-to-install methods. Apps that inject frontend scripts into Liquid must be replaced by direct API queries or custom React components connecting to each vendor's public developer API.",
    },
    {
      question: "Which frontend framework is best for headless Shopify?",
      answer:
        "Next.js and Shopify Hydrogen are the industry standards. Next.js offers unmatched static generation, vast community documentation, and easy Vercel hosting. Hydrogen provides tight, native alignment with Shopify Storefront API features and Oxygen hosting.",
    },
    {
      question: "What is Shopify Hydrogen, and how does it work?",
      answer:
        "Hydrogen is Shopify's official React-based framework built on Remix. It provides pre-built commerce components, built-in Storefront API hooks, and deploys directly to Shopify Oxygen servers across global edge networks with minimal setup.",
    },
    {
      question: "Do we still use Shopify checkout on a headless site?",
      answer:
        "Yes. Shoppers browse on your custom frontend, but when clicking checkout, they are redirected to Shopify’s native checkout. This guarantees complete PCI compliance, fraud protection, and full compatibility with Shopify Checkout Extensibility.",
    },
    {
      question: "How do non-technical marketing teams edit pages on headless?",
      answer:
        "Content teams use a headless content management system like Sanity or Contentful. We build modular, visual blocks so your team can write articles, create promotional landing pages, and update banners without developer help.",
    },
    {
      question: "Which headless CMS do you recommend with Shopify?",
      answer:
        "Sanity.io is our top recommendation because of its real-time collaborative editor, structured content schema, and strong visual live previewing. Contentful and Strapi are also solid alternatives depending on existing company infrastructure.",
    },
    {
      question: "How long does a headless Shopify migration usually take?",
      answer:
        "A full headless migration usually takes eight to fourteen weeks. This timeframe encompasses technical system architecture, custom Figma design implementation, third-party API component engineering, rigorous QA testing, and complete 301 URL redirect mapping.",
    },
    {
      question: "Do we need Shopify Plus to build a headless store?",
      answer:
        "No. Shopify's Storefront API is accessible on all standard plans including Basic and Advanced. However, Shopify Plus provides higher API rate limits, custom checkout scripts, multipass login, and access to Shopify Hydrogen hosting.",
    },
    {
      question: "Can we build a mobile app using the same headless backend?",
      answer:
        "Yes. Because your catalog, cart, and customer accounts connect through Shopify’s Storefront API, iOS and Android native apps can share the exact same backend logic, pricing rules, and inventory counts as your website.",
    },
    {
      question: "What happens to our customer accounts and order history?",
      answer:
        "All customer records, saved shipping addresses, and past order histories remain safely stored in Shopify. We use Shopify’s Customer Account API to authenticate buyers securely on your custom frontend without losing data.",
    },
    {
      question: "How do we get started with a headless feasibility audit?",
      answer:
        "Send us your store link and required custom features. We will review your catalog and tell you honestly whether headless architecture is worth the investment or if a custom theme serves your business better.",
    },
  ];

  const comparisonRows = [
    {
      included: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">Higher Initial Build Investment</strong>
          Requires dedicated full-stack software engineering across frontend frameworks, Storefront APIs, and CMS schemas.
        </>
      ),
      excluded: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">Lower Upfront Build Investment</strong>
          Custom Liquid builds require fewer moving parts, lower initial engineering costs, and a much faster time to market.
        </>
      ),
    },
    {
      included: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">Separate Edge Infrastructure Overhead</strong>
          Requires ongoing monthly cloud hosting (Vercel or Oxygen) and dedicated developer support for API and framework updates.
        </>
      ),
      excluded: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">Zero Hosting &amp; Server Maintenance</strong>
          Shopify manages all server infrastructure, SSL certificates, platform updates, and global CDN hosting automatically.
        </>
      ),
    },
    {
      included: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">Custom API App Integrations</strong>
          Standard App Store plugins cannot inject scripts automatically. Every review tool, search filter, and popup needs custom API connections.
        </>
      ),
      excluded: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">One-Click App Store Compatibility</strong>
          Thousands of pre-built Shopify App Store plugins install and work directly inside your Liquid theme without developer intervention.
        </>
      ),
    },
    {
      included: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">Sub-Second Global Edge Performance</strong>
          Static generation, React Server Components, and edge CDN distribution produce sub-100ms page loads with zero theme script bloat.
        </>
      ),
      excluded: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">Fast When Cleanly Coded</strong>
          Custom Liquid themes regularly score 90+ on mobile PageSpeed, but can slow down when merchants install too many third-party apps.
        </>
      ),
    },
    {
      included: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">Dedicated Headless CMS Workflow</strong>
          Non-technical marketing staff use structured visual studios like Sanity or Contentful with live visual previewing.
        </>
      ),
      excluded: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">Native Shopify Theme Customizer</strong>
          Visual drag-and-drop sections and blocks directly inside Shopify admin that your team already knows how to use.
        </>
      ),
    },
    {
      included: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">Unlimited Interactive Freedom</strong>
          Any React component, WebGL 3D visualizer, custom bundle builder, or dynamic configurator runs natively without Liquid restrictions.
        </>
      ),
      excluded: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">DOM &amp; Liquid Template Boundaries</strong>
          Bound by Shopify Liquid template files. Complex multi-step configurators and real-time 3D models are difficult to run smoothly.
        </>
      ),
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://scalefront.io/services/headless-commerce#service",
        name: "Headless Shopify Development Services",
        serviceType: "Headless Commerce Development",
        description:
          "Custom headless Shopify development services using Next.js and Shopify Hydrogen, Storefront API integration, headless CMS modeling, and global edge deployments.",
        provider: {
          "@type": "Organization",
          name: "ScaleFront",
          url: "https://scalefront.io",
          logo: "https://scalefront.io/logo/updated_logo.png",
          email: "hello@scalefront.io",
          telephone: "+919650296375",
        },
        areaServed: "Worldwide",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Headless Shopify Development Offerings",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Next.js Headless Shopify Development",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Shopify Hydrogen & Remix Storefronts",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sanity & Contentful Headless CMS Implementation",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://scalefront.io/services/headless-commerce#faq",
        mainEntity: faqData.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://scalefront.io",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://scalefront.io/services/custom-shopify-development",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Headless Shopify Development",
            item: "https://scalefront.io/services/headless-commerce",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article
        className="min-h-screen bg-[var(--sf-paper)] text-[var(--sf-ink)] selection:bg-[var(--sf-primary-soft)] selection:text-[var(--sf-ink)]"
        style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
      >
        {/* Top Breadcrumbs Bar */}
        <div className="border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="hover:text-[var(--sf-primary)] transition-colors uppercase font-bold"
              >
                Home
              </Link>
              <span className="text-[var(--sf-ink-mute)]">/</span>
              <span className="text-[var(--sf-ink-mute)] uppercase">Services</span>
              <span className="text-[var(--sf-ink-mute)]">/</span>
              <span className="text-[var(--sf-primary)] font-bold uppercase">
                Headless Shopify Development
              </span>
            </div>
          </div>
        </div>

        {/* MAIN CONTAINER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* HERO SECTION */}
          <header id="hero" className="mb-16 pb-12 border-b-2 border-[var(--sf-ink)]">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--sf-ink)] bg-[var(--sf-paper)] text-xs font-mono font-bold uppercase tracking-wider mb-6">
              <Terminal className="w-3.5 h-3.5 text-[var(--sf-primary)]" />
              <span>Decoupled Shopify Architecture</span>
            </div>

            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--sf-ink)] leading-[1.05] mb-6 max-w-4xl"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Headless Shopify Development Services
            </h1>

            <p className="text-xl sm:text-2xl text-[var(--sf-ink-soft)] leading-relaxed mb-8 max-w-3xl">
              We build fast, custom storefronts using Next.js and Shopify Hydrogen — paired with clear advice on whether headless makes financial sense for your store.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                className="px-7 py-3.5 border-2 border-[var(--sf-ink)] bg-[var(--sf-primary)] hover:bg-[var(--sf-primary-deep)] text-white text-sm font-bold uppercase tracking-wider transition-all hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 inline-flex items-center gap-2.5"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  boxShadow: "var(--sf-shadow-sm)",
                }}
              >
                <Image
                  src="/icons/call.png"
                  alt="Call icon"
                  width={18}
                  height={18}
                  className="w-4 h-4 object-contain brightness-0 invert"
                />
                Book a Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919650296375"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] hover:bg-white text-[var(--sf-ink)] text-sm font-bold uppercase tracking-wider transition-all hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 inline-flex items-center gap-2.5"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  boxShadow: "var(--sf-shadow-sm)",
                }}
              >
                <Image
                  src="/icons/whatsapp.png"
                  alt="WhatsApp icon"
                  width={18}
                  height={18}
                  className="w-4.5 h-4.5 object-contain"
                />
                Chat on WhatsApp
              </a>
            </div>
          </header>

          {/* SECTION 1: WHAT HEADLESS SHOPIFY ACTUALLY MEANS */}
          <section id="what-it-means" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              What headless Shopify development actually means
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
              <p>
                In a standard Shopify store, the frontend (what customers see) and the backend (where you manage inventory, payments, and orders) are bundled into a single system powered by Liquid templates. Every time a shopper loads a page, Shopify&apos;s servers render that Liquid code and send the finished HTML to the browser.
              </p>
              <p>
                Headless architecture splits those two halves apart.
              </p>
              <p>
                Shopify remains your ecommerce engine. It continues to store your products, track inventory across locations, process credit cards, run fraud detection, and execute checkout. But instead of using Shopify&apos;s default theme layer to display your products, we build a completely custom frontend application using modern web frameworks like Next.js or Shopify Hydrogen.
              </p>
              <p>
                The two systems communicate continuously through Shopify’s Storefront GraphQL API. When a customer lands on your site, the custom frontend requests product details, prices, and variant availability from Shopify behind the scenes and renders the page instantly.
              </p>
              <p>
                This decoupling gives you total control over how your store looks, behaves, and loads. You are no longer restricted by Liquid template boundaries or theme file conventions. However, separating your frontend from Shopify introduces real technical responsibilities that every merchant must understand before making the leap.
              </p>
            </div>
          </section>

          {/* SECTION 2: COMPARISON TABLE */}
          <section id="comparison-table" className="mb-20">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-4"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Headless Shopify vs. Traditional Liquid Themes
            </h2>
            <p className="text-base text-[var(--sf-ink-soft)] mb-8 max-w-3xl">
              An objective comparison of investment requirements, maintenance overhead, app compatibility, and design freedom.
            </p>

            <ComparisonTable
              includedHeader={
                <>
                  Headless Shopify Storefront{" "}
                  <span className="underline decoration-[var(--sf-primary)] decoration-2">
                    (Decoupled Next.js / Hydrogen)
                  </span>
                </>
              }
              excludedHeader={
                <>
                  Traditional Shopify Liquid Theme{" "}
                  <span className="underline decoration-rose-500 decoration-2">
                    (Monolithic Architecture)
                  </span>
                </>
              }
              rows={comparisonRows}
            />
          </section>

          {/* SECTION 3: WHEN YOU NEED HEADLESS (AND WHEN YOU DO NOT) */}
          <section id="when-to-use" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              When you actually need headless (and when you definitely do not)
            </h2>

            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-8">
              Headless development is often marketed as the universal next step for every growing brand. That claim is misleading. For the vast majority of ecommerce businesses, a well-engineered{" "}
              <Link
                href="/services/theme-development"
                className="text-[var(--sf-primary)] font-bold underline hover:text-[var(--sf-primary-deep)]"
              >
                custom Shopify theme
              </Link>{" "}
              provides identical loading speed and far better return on investment.
            </p>

            <div className="space-y-10">
              <div className="border-l-2 border-[var(--sf-primary)] pl-5">
                <h3
                  className="text-xl font-bold text-[var(--sf-ink)] mb-3"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  When Headless Makes Genuine Business Sense
                </h3>
                <ul className="space-y-3 text-base text-[var(--sf-ink-soft)] list-disc list-inside">
                  <li>
                    <strong>Complex Product Configurators and 3D Visualizers:</strong> If your catalog requires interactive custom builders — such as engraving previews, custom furniture modular assembly, or interactive technical sizing — Liquid&apos;s server-rendered model struggles. React-based frontends render complex state changes instantly without page refreshes.
                  </li>
                  <li>
                    <strong>True Omnichannel Commerce:</strong> If you sell products through a web store, native mobile apps (iOS and Android), digital retail displays, and point-of-sale kiosks, headless allows all channels to pull from a single Shopify inventory and order database.
                  </li>
                  <li>
                    <strong>Multi-Region and Multi-Brand Complexity:</strong> High-growth international brands running multiple regional storefronts with localized pricing, distinct language catalogs, and customized regional delivery routing can serve everything from one codebase via edge routing.
                  </li>
                  <li>
                    <strong>Heavy Editorial Storytelling:</strong> Brands that operate as publishing houses or media companies alongside their shop require deep editorial layouts, visual journals, and modular lookbooks that far exceed standard Shopify blog capabilities.
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5">
                <h3
                  className="text-xl font-bold text-[var(--sf-ink)] mb-3"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  When You Should Avoid Headless (Honest Advisory)
                </h3>
                <ul className="space-y-3 text-base text-[var(--sf-ink-soft)] list-disc list-inside">
                  <li>
                    <strong>Your Store Has Not Outgrown Standard Liquid Capabilities:</strong> The initial engineering overhead and ongoing maintenance retainers will eat your profit margins without providing a proportional increase in sales.
                  </li>
                  <li>
                    <strong>You Rely Heavily on Marketing Apps:</strong> If your marketing team regularly installs and tests new Shopify App Store plugins for countdown timers, loyalty points, or upsell popups, headless will frustrate you. None of these apps run out of the box; each requires developer hours to connect via APIs.
                  </li>
                  <li>
                    <strong>You Just Want a &ldquo;Faster Website&rdquo;:</strong> A cleanly written custom Shopify theme without excessive apps regularly scores 90+ on Google PageSpeed Insights. You do not need to rebuild your store on a headless stack simply to make your pages load quickly.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 4: MODERN TECH STACK */}
          <section id="tech-stack" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Our modern headless technology stack
            </h2>

            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-6">
              Building a reliable headless store requires battle-tested frameworks, rock-solid APIs, and fast global hosting networks. We do not experiment with unproven tools on client production stores.
            </p>

            <div className="space-y-4 text-base text-[var(--sf-ink-soft)] leading-relaxed">
              <div className="border-l-2 border-[var(--sf-primary)] pl-4">
                <strong className="text-[var(--sf-ink)] font-mono uppercase text-sm block mb-1">
                  1. Frontend Frameworks: Next.js &amp; Shopify Hydrogen
                </strong>
                <p>
                  <strong>Next.js (React):</strong> The premier web framework for ecommerce. We use Next.js with React Server Components to pre-render product pages statically (SSG) and revalidate data incrementally (ISR) when catalog updates occur in Shopify.
                </p>
                <p className="mt-1">
                  <strong>Shopify Hydrogen (Remix):</strong> Shopify’s official headless framework built on Remix. Hydrogen offers native hooks designed specifically for the Storefront API, optimistic cart updates, and direct deployment to Shopify Oxygen.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <strong className="text-[var(--sf-ink)] font-mono uppercase text-sm block mb-1">
                  2. Commerce Layer: Shopify Storefront GraphQL API
                </strong>
                <p>
                  All storefront data flows through Shopify&apos;s Storefront API. This high-performance GraphQL interface allows our frontend application to request exact data objects — product titles, variant prices, inventory levels, and media galleries — with zero payload waste. Includes Customer Account API and edge Cart API.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <strong className="text-[var(--sf-ink)] font-mono uppercase text-sm block mb-1">
                  3. Content Management: Sanity.io or Contentful
                </strong>
                <p>
                  Because headless storefronts bypass Shopify&apos;s theme customizer, we integrate a dedicated headless Content Management System. Sanity gives your marketing team a collaborative visual studio where they can build landing pages, structure blog posts, and embed live Shopify products into editorial articles with zero technical knowledge.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <strong className="text-[var(--sf-ink)] font-mono uppercase text-sm block mb-1">
                  4. Edge Hosting: Vercel, Cloudflare Pages, or Shopify Oxygen
                </strong>
                <p>
                  Your frontend is deployed to global Content Delivery Networks (CDNs). Every visitor is served from an edge server closest to their physical location, reducing Time to First Byte (TTFB) to under 100 milliseconds worldwide.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <strong className="text-[var(--sf-ink)] font-mono uppercase text-sm block mb-1">
                  5. Secure Checkout: Native Shopify Checkout Extensibility
                </strong>
                <p>
                  Shoppers browse on your fast custom frontend, but when they proceed to checkout, they transition to Shopify’s native checkout. This ensures payments, tax calculation, shipping validation, and fraud protection remain 100% PCI-compliant on Shopify&apos;s infrastructure.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 5: 5-PHASE LIFECYCLE */}
          <section id="lifecycle" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              The 5-phase headless development and migration lifecycle
            </h2>

            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-8">
              Migrating to a headless architecture is a software engineering engagement. We guide your store through a disciplined five-phase process to guarantee complete data continuity and zero downtime.
            </p>

            <div className="space-y-6">
              <div className="border-l-2 border-[var(--sf-primary)] pl-5">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  Phase I: Technical Audit &amp; Feasibility Scoping
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)]">
                  We review your complete catalog, current app stack, and operational workflows. We identify which third-party tools can be replaced by API integrations, define the content structure required inside the headless CMS, and determine whether Next.js or Hydrogen best aligns with your team&apos;s technical goals.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  Phase II: Component Design System &amp; UX Prototyping
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)]">
                  We design your storefront in Figma, building a cohesive component design system. We map out micro-interactions, mobile navigation flows, instant slide-out cart drawers, variant selection states, and filter panels before writing any code.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  Phase III: Frontend Engineering &amp; Storefront API Integration
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)]">
                  We scaffold the frontend codebase, connect the Shopify Storefront GraphQL endpoints, and configure static page generation. We implement state management for cart sessions, build real-time inventory checks, and integrate your chosen headless CMS for non-technical page editing.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  Phase IV: Third-Party API Middleware Engineering
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)]">
                  Because traditional Shopify App Store plugins cannot inject frontend scripts into headless sites, we build custom API connections for your essential tools: customer reviews (Klaviyo, Yotpo, Judge.me), instant search (Algolia, Typesense), loyalty programs, and tracking pixels.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  Phase V: SEO Migration, Edge Deployment &amp; Launch
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)]">
                  Before flipping the switch, we test the store against rigorous quality standards: comprehensive 301 URL redirect mapping from old Shopify URLs to the new architecture, verification of dynamic XML sitemaps, canonical tags, structured JSON-LD schema, test transactions, and team CMS training.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 6: HEADLESS SEO */}
          <section id="seo" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Headless Shopify SEO: Preserving rankings and traffic
            </h2>

            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-6">
              One of the biggest risks of an improperly built headless store is catastrophic SEO traffic loss. When developers build client-side rendered single-page applications, search engine crawlers see blank HTML shells instead of indexable content.
            </p>

            <div className="space-y-6 text-base text-[var(--sf-ink-soft)] leading-relaxed">
              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1">
                  1. Server-Side Rendering (SSR) &amp; Static Site Generation (SSG)
                </h3>
                <p>
                  Every product, collection, and blog page is generated as full, static HTML on edge servers before a visitor or search bot requests it. When Googlebot crawls your site, it reads complete heading tags, body copy, and metadata immediately.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1">
                  2. Dynamic XML Sitemaps &amp; Canonical Preservation
                </h3>
                <p>
                  Our headless applications generate dynamic XML sitemaps pulled directly from Shopify&apos;s Storefront API and the headless CMS whenever products are published. We maintain strict canonical URL structures to eliminate duplicate content risks across variant URLs.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1">
                  3. Structured JSON-LD Schema
                </h3>
                <p>
                  We embed rich structured data schema directly into page templates: Product and Offer schema (with live price, availability, and SKU), AggregateRating and Review schema connected to your review provider&apos;s API, and BreadcrumbList schema for rich search result snippets.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 7: SERVICES INCLUDED */}
          <section id="services-included" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Services included in our headless Shopify engagements
            </h2>

            <div className="border-l-2 border-[var(--sf-primary)] pl-5 space-y-2 text-base text-[var(--sf-ink-soft)]">
              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Full-Cycle Headless Storefront Development:</strong> Complete architecture, UI/UX design, Next.js or Hydrogen frontend engineering, and production edge deployment.</li>
                <li><strong>Monolithic Liquid to Headless Migration:</strong> Safe data migration from traditional Shopify themes to a headless stack with zero lost orders or broken customer links.</li>
                <li><strong>Headless CMS Implementation:</strong> Data modeling, custom visual editing components, and workflow setup in Sanity.io or Contentful.</li>
                <li><strong>Custom Third-Party API Integrations:</strong> Connecting customer reviews, fast search engines, loyalty portals, and analytics through dedicated serverless endpoints.</li>
                <li><strong>Performance Tuning &amp; Core Web Vitals Audits:</strong> Diagnosing and optimizing API response payloads, image compression pipelines, and JavaScript bundle sizes.</li>
                <li><strong>Ongoing Retainers &amp; Edge Maintenance:</strong> Proactive framework upgrades, API version maintenance, uptime monitoring, and ongoing feature development.</li>
              </ul>
            </div>
          </section>

          {/* SECTION 8: 20 FAQs */}
          <section id="faq" className="mb-20 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Frequently Asked Questions
            </h2>

            <div className="divide-y-2 divide-[var(--sf-ink)] border-y-2 border-[var(--sf-ink)]">
              {faqData.map((faq, index) => (
                <div key={index} className="py-6">
                  <h3
                    className="text-lg sm:text-xl font-bold text-[var(--sf-ink)] mb-3"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    {faq.question}
                  </h3>
                  <p className="text-base text-[var(--sf-ink-soft)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* FINAL CTA SECTION */}
          <section
            id="consultation"
            className="p-8 sm:p-12 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]"
            style={{ boxShadow: "var(--sf-shadow-sm)" }}
          >
            <div className="max-w-3xl">
              <h2
                className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--sf-ink)] mb-4"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Ready to explore headless architecture for your Shopify store?
              </h2>
              <p className="text-lg sm:text-xl text-[var(--sf-ink-soft)] leading-relaxed mb-8">
                Tell us about your product catalog, technical requirements, and custom features. We will review your store and provide an honest assessment of whether headless architecture is the right path forward.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact-us"
                  className="px-7 py-3.5 border-2 border-[var(--sf-ink)] bg-[var(--sf-primary)] hover:bg-[var(--sf-primary-deep)] text-white text-sm font-bold uppercase tracking-wider transition-all hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 inline-flex items-center gap-2.5"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    boxShadow: "var(--sf-shadow-sm)",
                  }}
                >
                  <Image
                    src="/icons/call.png"
                    alt="Call icon"
                    width={18}
                    height={18}
                    className="w-4 h-4 object-contain brightness-0 invert"
                  />
                  Book a Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/919650296375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] hover:bg-white text-[var(--sf-ink)] text-sm font-bold uppercase tracking-wider transition-all hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 inline-flex items-center gap-2.5"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    boxShadow: "var(--sf-shadow-sm)",
                  }}
                >
                  <Image
                    src="/icons/whatsapp.png"
                    alt="WhatsApp icon"
                    width={18}
                    height={18}
                    className="w-4.5 h-4.5 object-contain"
                  />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
