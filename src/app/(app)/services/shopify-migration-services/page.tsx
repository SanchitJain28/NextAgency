import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, RefreshCw } from "lucide-react";
import ComparisonTable from "@/components/shared/ComparisonTable";

export const metadata: Metadata = {
  title: {
    absolute: "Shopify Migration Service | Zero Downtime & SEO Preserved",
  },
  description:
    "Migrate your store to Shopify from WooCommerce, Magento, or WordPress with zero order downtime. Full customer data, order history, and SEO redirects preserved.",
  alternates: {
    canonical: "/services/shopify-migration-services",
  },
  openGraph: {
    title: "Shopify Migration Service | Zero Downtime & SEO Preserved",
    description:
      "Migrate your store to Shopify from WooCommerce, Magento, or WordPress with zero order downtime. Full customer data, order history, and SEO redirects preserved.",
    url: "https://www.scalefront.io/services/shopify-migration-services",
    siteName: "ScaleFront",
    type: "website",
    images: [
      {
        url: "https://scalefront.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shopify Store Migration Services by ScaleFront",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Migration Service | Zero Downtime & SEO Preserved",
    description:
      "Migrate your store to Shopify from WooCommerce, Magento, or WordPress with zero order downtime. Full customer data, order history, and SEO redirects preserved.",
    images: ["https://scalefront.io/og-image.jpg"],
  },
};

export default function ShopifyMigrationServicesPage() {
  const faqData = [
    {
      question: "Will my store go offline during the migration?",
      answer:
        "No. Your existing store remains fully operational and continues taking orders on your current server throughout development. The final cutover occurs via DNS updates in minutes after all data has been verified.",
    },
    {
      question: "Will moving to Shopify cause my store to lose search engine rankings?",
      answer:
        "Not when executed properly. We map every legacy URL to its new Shopify equivalent using strict 301 redirects, preserving historical page equity, metadata, and organic Google visibility without traffic drops.",
    },
    {
      question: "Can you migrate customer passwords from our old platform?",
      answer:
        "No. Passwords cannot be exported because legacy databases store them as one-way encrypted hashes. We migrate all customer profiles and send automated activation emails so shoppers can set passwords in one click.",
    },
    {
      question: "How long does a complete store migration typically take?",
      answer:
        "Most standard migrations take 2 to 4 weeks. This covers catalog data extraction, custom Liquid theme configuration, payment setup, comprehensive checkout testing, and final delta data synchronization before launch.",
    },
    {
      question: "Why hire an independent developer rather than a traditional migration agency?",
      answer:
        "You communicate directly with the developer executing your database scripts and theme code. This eliminates account manager overhead, prevents technical misunderstandings, and delivers faster turnarounds at fixed rates.",
    },
    {
      question: "Do you migrate customer reviews and product ratings?",
      answer:
        "Yes. We export your historical review database from plugins like WooCommerce Product Reviews or Yotpo and import them directly into Shopify-compatible platforms like Judge.me, Okendo, or Stamped with verified timestamps intact.",
    },
    {
      question: "What happens to active customer subscriptions during migration?",
      answer:
        "Active subscription tokens in Stripe or PayPal must be securely re-mapped. We connect customer payment tokens to Shopify subscription apps like Recharge or native Shopify Subscriptions to prevent billing interruptions.",
    },
    {
      question: "Can you handle products with more than 100 variants?",
      answer:
        "Yes. We either utilize Shopify GraphQL 2,000-variant capability or split complex catalogs into linked parent and child products connected seamlessly via visual color and size swatch selectors.",
    },
    {
      question: "Can we redesign our storefront layout during the migration?",
      answer:
        "Yes. You can either replicate your current store design with pixel parity or rebuild your layout on an Online Store 2.0 theme optimized for mobile speed and conversion.",
    },
    {
      question: "Do we need Shopify Plus for our store migration?",
      answer:
        "No. Standard migrations to Shopify Basic or Advanced handle full catalogs, orders, and customer accounts. Shopify Plus is only necessary for wholesale B2B portals, custom checkout scripts, or multipass login.",
    },
  ];

  const comparisonRows = [
    {
      included: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            Zero Server Maintenance Overhead
          </strong>
          Fully managed global cloud infrastructure, automated security updates,
          99.99% uptime, and zero PHP or Linux patch cycles.
        </>
      ),
      excluded: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            High Maintenance &amp; Server Management
          </strong>
          Requires dedicated cloud hosting (AWS, DigitalOcean), PHP upgrades, MySQL
          tuning, and constant server security patches.
        </>
      ),
    },
    {
      included: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            Built-In PCI Level 1 Compliance
          </strong>
          Level 1 PCI-DSS compliant out of the box with enterprise DDoS
          protection, free SSL certificates, and zero merchant compliance
          liability.
        </>
      ),
      excluded: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            Merchant Liability &amp; Security Risks
          </strong>
          Store owners bear full legal liability for payment data breaches, SQL
          injection exploits, and outdated plugin vulnerabilities.
        </>
      ),
    },
    {
      included: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            Industry-Leading Shop Pay Checkout
          </strong>
          One-click checkout with Shop Pay converting up to 36% higher than
          traditional checkouts across 150M+ registered buyers.
        </>
      ),
      excluded: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            High Checkout Friction &amp; Drop-Off
          </strong>
          Self-hosted checkouts suffer high abandonment from multi-step forms,
          plugin conflicts, and slow database lookups on mobile.
        </>
      ),
    },
    {
      included: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            Automatic Peak Traffic Scaling
          </strong>
          Handles thousands of orders per minute during flash sales and Black
          Friday without server crashes or slow page responses.
        </>
      ),
      excluded: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            Database Lockouts &amp; Server Crashes
          </strong>
          Flash sales and traffic surges easily overload PHP workers and lock
          MySQL tables, causing cart crashes during peak promotions.
        </>
      ),
    },
    {
      included: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            Predictable Monthly Investment
          </strong>
          Simple flat subscription covering hosting, CDN, security, and checkout,
          cutting long-term operational costs by 30% to 50%.
        </>
      ),
      excluded: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            Unpredictable Retainers &amp; Hosting Fees
          </strong>
          Monthly cloud hosting ($500–$5,000+), emergency developer retainers, and
          costly plugin licenses create high recurring expenses.
        </>
      ),
    },
    {
      included: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            Unified Global Markets
          </strong>
          Native multicurrency, localized languages, international domains, and
          duty calculations managed from one single admin.
        </>
      ),
      excluded: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            Fragile Multisite Installations
          </strong>
          Requires separate WordPress or Magento installations that desynchronize
          stock counts and break currency conversions.
        </>
      ),
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://scalefront.io/services/shopify-migration-services#service",
        name: "Shopify Migration Service",
        serviceType: "Shopify Store Migration",
        description:
          "Zero-downtime eCommerce store migration services to Shopify from WooCommerce, Magento, WordPress, and BigCommerce, including full catalog data, customer accounts, order history, and 1:1 SEO redirect preservation.",
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
          name: "Shopify Migration Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "WooCommerce to Shopify Migration",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Magento to Shopify Migration",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Shopify 2.0 Theme & Store Migration",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "1:1 SEO 301 Redirect Architecture",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://scalefront.io/services/shopify-migration-services#faq",
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
            name: "Shopify Migration Service",
            item: "https://scalefront.io/services/shopify-migration-services",
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
              <span className="text-[var(--sf-ink-mute)] uppercase">
                Services
              </span>
              <span className="text-[var(--sf-ink-mute)]">/</span>
              <span className="text-[var(--sf-primary)] font-bold uppercase">
                Shopify Migration Services
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--sf-primary-soft)] border border-[var(--sf-primary)] text-[var(--sf-ink)] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--sf-primary)] animate-pulse" />
                Zero Downtime Guarantee
              </span>
              <span className="hidden sm:inline-block text-[var(--sf-ink-mute)]">
                1:1 301 SEO Mappings
              </span>
            </div>
          </div>
        </div>

        {/* MAIN CONTAINER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* HERO SECTION */}
          <header
            id="hero"
            className="mb-16 pb-12 border-b-2 border-[var(--sf-ink)]"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--sf-ink)] bg-[var(--sf-paper)] text-xs font-mono font-bold uppercase tracking-wider mb-6">
              <RefreshCw className="w-3.5 h-3.5 text-[var(--sf-primary)]" />
              <span>Zero-Downtime Store Replatforming</span>
            </div>

            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--sf-ink)] leading-[1.05] mb-6 max-w-4xl"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Shopify Migration Services
            </h1>

            <p className="text-xl sm:text-2xl text-[var(--sf-ink-soft)] leading-relaxed mb-8 max-w-3xl">
              We move your store to Shopify from WooCommerce, Magento, or WordPress with zero order downtime. Full customer data, order history, and search engine rankings preserved.
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

          {/* SECTION 1: WHAT A STORE MIGRATION ACTUALLY INVOLVES */}
          <section id="what-it-means" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              What a store migration actually involves
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
              <p>
                Moving an online store is not like copying files between folders on a computer. Every ecommerce platform organizes its database differently.
              </p>
              <p>
                In WooCommerce, custom product details live inside a single table called postmeta. In Magento, product data is distributed across dozens of separate database tables using an entity-attribute-value model. In Shopify, products follow a structured format built around variants, collections, and Metafields.
              </p>
              <p>
                When you migrate, you cannot just export a CSV file from your old store and import it into Shopify. If you try, images break, product variations disconnect, customer passwords disappear, and historical orders lose their associations.
              </p>
              <p>
                A proper technical migration extracts your raw database records, cleans the fields, formats the information to match Shopify schemas, and transfers it using verified scripts. At the same time, we build your new storefront layout on Shopify Online Store 2.0 and establish redirect maps so zero customer traffic or Google ranking power is lost.
              </p>
            </div>
          </section>

          {/* SECTION 2: COMPARISON TABLE */}
          <section id="comparison-table" className="mb-20">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-4"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Modern Shopify vs. Legacy Self-Hosted Platforms
            </h2>
            <p className="text-base text-[var(--sf-ink-soft)] mb-8 max-w-3xl">
              An objective comparison of maintenance overhead, checkout conversion rates, security compliance, and long-term operating costs.
            </p>

            <ComparisonTable
              includedHeader={
                <>
                  Modern Shopify Architecture{" "}
                  <span className="underline decoration-[var(--sf-primary)] decoration-2">
                    (Fully Managed SaaS)
                  </span>
                </>
              }
              excludedHeader={
                <>
                  Legacy Self-Hosted Platforms{" "}
                  <span className="underline decoration-rose-500 decoration-2">
                    (WooCommerce / Magento / WordPress)
                  </span>
                </>
              }
              rows={comparisonRows}
            />
          </section>

          {/* SECTION 3: PROTECTING SEARCH RANKINGS & TRAFFIC */}
          <section id="seo-preservation" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Protecting your search rankings and organic traffic
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-8">
              <p>
                The biggest risk when migrating away from an established store is losing search engine visibility. If product URLs change without proper redirects, search engines encounter dead ends, rankings drop, and buyers land on 404 pages.
              </p>
              <p>
                We protect your rankings through a strict technical process called 1:1 redirect mapping. Before anything changes on your live store, we crawl every URL on your website and analyze your highest-converting pages from Google Search Console.
              </p>
            </div>

            <div className="space-y-6 text-base text-[var(--sf-ink-soft)] leading-relaxed">
              <div className="border-l-2 border-[var(--sf-primary)] pl-4">
                <strong className="text-[var(--sf-ink)] font-mono uppercase text-sm block mb-1">
                  1. Complete Pre-Launch URL Crawl &amp; Audit
                </strong>
                <p>
                  We crawl every legacy URL on your domain including products, categories, tags, blog articles, and legal documents. We correlate this with historical Google Search Console data to prioritize high-equity landing pages.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <strong className="text-[var(--sf-ink)] font-mono uppercase text-sm block mb-1">
                  2. Strict 1:1 301 Permanent Redirect Mapping
                </strong>
                <p>
                  Every legacy URL maps directly to its exact new equivalent on Shopify. We never use lazy wildcard redirects to the homepage. Page authority, ranking weight, and external backlinks transfer directly to the new product or collection page.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <strong className="text-[var(--sf-ink)] font-mono uppercase text-sm block mb-1">
                  3. Metadata &amp; On-Page Signal Continuity
                </strong>
                <p>
                  We carry over your exact page titles, meta descriptions, image descriptions, and heading tags on high-traffic pages. Search crawlers find the new storefront faster and cleaner, but the core signals that earned your rankings stay intact.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <strong className="text-[var(--sf-ink)] font-mono uppercase text-sm block mb-1">
                  4. Day-One XML Sitemap Submission &amp; Search Console Monitoring
                </strong>
                <p>
                  Immediately following DNS cutover, we submit new Shopify XML sitemaps to Google Search Console and begin daily crawl log monitoring to detect and resolve any unexpected 404 errors within minutes.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4: PLATFORMS WE MIGRATE FROM */}
          <section id="platforms" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Platforms and scenarios we migrate from
            </h2>

            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-8">
              Every platform has its own database idiosyncrasies. Here is how we handle transitions from the most common systems:
            </p>

            <div className="space-y-10">
              <div className="border-l-2 border-[var(--sf-primary)] pl-5">
                <h3
                  className="text-xl font-bold text-[var(--sf-ink)] mb-3"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  1. WooCommerce and WordPress to Shopify
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)] mb-4 leading-relaxed">
                  WooCommerce works well for smaller shops. But as catalogs expand past a few hundred items and merchants stack plugins for shipping, subscriptions, reviews, and filters, performance degrades. A typical WordPress store runs 30 to 50 active plugins, creating security vulnerabilities and slow database response times on mobile devices.
                </p>
                <ul className="space-y-2.5 text-base text-[var(--sf-ink-soft)] list-disc list-inside">
                  <li>
                    <strong>Plugin Consolidation:</strong> We clean out plugin bloat by replacing dozens of third-party WordPress scripts with native Shopify features.
                  </li>
                  <li>
                    <strong>Custom Fields to Metafields:</strong> Advanced Custom Fields (ACF) data—such as technical dimensions, materials, or PDF manuals—maps directly into native Shopify 2.0 Metafields for clean editing.
                  </li>
                  <li>
                    <strong>URL Structure Transformation:</strong> WooCommerce arbitrary URL schemes are cleanly mapped to Shopify fixed `/products/` and `/collections/` paths with permanent redirects.
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5">
                <h3
                  className="text-xl font-bold text-[var(--sf-ink)] mb-3"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  2. Magento (Adobe Commerce) to Shopify
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)] mb-4 leading-relaxed">
                  Merchants usually move away from Magento because infrastructure and ongoing maintenance have become unsustainable. A mid-sized Magento store often requires dedicated AWS cloud hosting costing thousands of dollars every month, paired with steep retainers for security patches and upgrade cycles.
                </p>
                <ul className="space-y-2.5 text-base text-[var(--sf-ink-soft)] list-disc list-inside">
                  <li>
                    <strong>Complex Catalog Simplification:</strong> We restructure complex configurable products with dozens of attribute sets into clean Shopify options or connected product sets.
                  </li>
                  <li>
                    <strong>Elimination of Server Retainers:</strong> You migrate to fully managed SaaS infrastructure with 99.99% uptime, zero manual security patches, and automatic peak scaling.
                  </li>
                  <li>
                    <strong>B2B &amp; Wholesale Rebuilding:</strong> Customer-specific price tiers and volume discounts are rebuilt using Shopify B2B tools or private API integrations.
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5">
                <h3
                  className="text-xl font-bold text-[var(--sf-ink)] mb-3"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  3. Upgrading to Shopify 2.0 &amp; Store Consolidations
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)] mb-4 leading-relaxed">
                  Many migrations happen within Shopify itself. Stores built prior to 2021 often run vintage hardcoded Liquid themes where marketing updates require code edits, or brands manage multiple international stores across fragmented accounts.
                </p>
                <ul className="space-y-2.5 text-base text-[var(--sf-ink-soft)] list-disc list-inside">
                  <li>
                    <strong>Online Store 2.0 Upgrades:</strong> Converting vintage Liquid themes to modern JSON templates gives your team drag-and-drop sections and blocks across every page without touching code.
                  </li>
                  <li>
                    <strong>Shopify-to-Shopify Consolidations:</strong> Merging regional international stores into a single admin using Shopify Markets reduces software subscriptions and synchronizes inventory globally.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 5: DATA MIGRATION MATRIX TABLE */}
          <section id="data-migration" className="mb-20">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-4"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              What data gets migrated to Shopify
            </h2>
            <p className="text-base text-[var(--sf-ink-soft)] mb-8 max-w-3xl">
              Every data entity is extracted via verified APIs, scrubbed of database inconsistencies, and reconciled line by line before launch.
            </p>

            <div className="overflow-x-auto border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
                    <th
                      className="p-4 sm:p-5 text-base sm:text-lg font-bold text-[var(--sf-ink)] border-r-2 border-[var(--sf-ink)] w-1/4"
                      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                    >
                      Asset Category
                    </th>
                    <th
                      className="p-4 sm:p-5 text-base sm:text-lg font-bold text-[var(--sf-ink)] border-r-2 border-[var(--sf-ink)] w-2/5"
                      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                    >
                      What Moves Over
                    </th>
                    <th
                      className="p-4 sm:p-5 text-base sm:text-lg font-bold text-[var(--sf-ink)]"
                      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                    >
                      How It Is Handled
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-[var(--sf-ink)]/15 text-sm sm:text-base text-[var(--sf-ink)]">
                  <tr>
                    <td className="p-4 sm:p-5 font-bold border-r-2 border-[var(--sf-ink)]/15 align-top">
                      Products &amp; Variants
                    </td>
                    <td className="p-4 sm:p-5 border-r-2 border-[var(--sf-ink)]/15 align-top text-[var(--sf-ink-soft)]">
                      Titles, descriptions, prices, sale prices, SKUs, inventory counts, weights, tags, and product images.
                    </td>
                    <td className="p-4 sm:p-5 align-top text-[var(--sf-ink-soft)]">
                      Cleaned, formatted, and reconciled against the old database line by line.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold border-r-2 border-[var(--sf-ink)]/15 align-top">
                      Customer Profiles
                    </td>
                    <td className="p-4 sm:p-5 border-r-2 border-[var(--sf-ink)]/15 align-top text-[var(--sf-ink-soft)]">
                      Names, email addresses, phone numbers, default shipping addresses, and order history associations.
                    </td>
                    <td className="p-4 sm:p-5 align-top text-[var(--sf-ink-soft)]">
                      Customer records move over directly. Passwords cannot be copied due to encryption; customers receive a one-click activation link to set a password.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold border-r-2 border-[var(--sf-ink)]/15 align-top">
                      Order History
                    </td>
                    <td className="p-4 sm:p-5 border-r-2 border-[var(--sf-ink)]/15 align-top text-[var(--sf-ink-soft)]">
                      Line items, quantities, historical prices, taxes, dates, and fulfillment states.
                    </td>
                    <td className="p-4 sm:p-5 align-top text-[var(--sf-ink-soft)]">
                      Preserved as historical records so customer service can look up past orders and customer lifetime value stays accurate.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold border-r-2 border-[var(--sf-ink)]/15 align-top">
                      Collections &amp; Tags
                    </td>
                    <td className="p-4 sm:p-5 border-r-2 border-[var(--sf-ink)]/15 align-top text-[var(--sf-ink-soft)]">
                      Product categories, brand groupings, and custom tags.
                    </td>
                    <td className="p-4 sm:p-5 align-top text-[var(--sf-ink-soft)]">
                      Rebuilt as automated smart collections or manual collections with matching filters.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold border-r-2 border-[var(--sf-ink)]/15 align-top">
                      SEO 301 Redirects
                    </td>
                    <td className="p-4 sm:p-5 border-r-2 border-[var(--sf-ink)]/15 align-top text-[var(--sf-ink-soft)]">
                      Every legacy product, category, blog, and informational page URL.
                    </td>
                    <td className="p-4 sm:p-5 align-top text-[var(--sf-ink-soft)]">
                      Mapped 1:1 into Shopify URL redirect table to prevent broken links and ranking drops.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold border-r-2 border-[var(--sf-ink)]/15 align-top">
                      Blogs &amp; Static Pages
                    </td>
                    <td className="p-4 sm:p-5 border-r-2 border-[var(--sf-ink)]/15 align-top text-[var(--sf-ink-soft)]">
                      Articles, published dates, author credits, images, and policy pages.
                    </td>
                    <td className="p-4 sm:p-5 align-top text-[var(--sf-ink-soft)]">
                      Rebuilt in Shopify blog structure with proper heading hierarchy and clean formatting.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 6: THE 5-PHASE LIFECYCLE */}
          <section id="lifecycle" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              The 5-phase zero-downtime migration lifecycle
            </h2>

            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-8">
              Replatforming a live retail store is a disciplined software engineering engagement. We guide your store through a five-phase process so your existing site stays open and taking orders right up to the final domain switch.
            </p>

            <div className="space-y-6">
              <div className="border-l-2 border-[var(--sf-primary)] pl-5">
                <h3
                  className="text-lg font-bold text-[var(--sf-ink)] mb-1"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Phase I: Catalog Audit &amp; Technical Scoping
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)]">
                  We inspect your current database, review active third-party plugins, and clean up duplicate customer accounts or missing SKUs. We run a complete crawl of your live domain to map every URL that needs a 301 redirect.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5">
                <h3
                  className="text-lg font-bold text-[var(--sf-ink)] mb-1"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Phase II: Staging Environment Setup &amp; Test Migration
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)]">
                  We build a private, password-protected staging store on Shopify. We run a sample import on 10% to 20% of your product catalog to verify variant mapping, custom fields, and high-resolution photo loading before migrating the rest.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5">
                <h3
                  className="text-lg font-bold text-[var(--sf-ink)] mb-1"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Phase III: Theme &amp; Feature Rebuilding
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)]">
                  We configure your new Online Store 2.0 theme with modular sections. We configure payment gateways, input shipping zones and rates, connect tax calculation tools, and integrate your email marketing and fulfillment services.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5">
                <h3
                  className="text-lg font-bold text-[var(--sf-ink)] mb-1"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Phase IV: Pre-Launch Delta Sync
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)]">
                  Because your old store continued taking orders during development, new customer accounts and order records were placed. Before flipping the switch, we run delta scripts that pull newly created data so zero transactions are lost.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5">
                <h3
                  className="text-lg font-bold text-[var(--sf-ink)] mb-1"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Phase V: Zero-Downtime DNS Cutover &amp; Post-Launch Verification
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)]">
                  We switch your domain DNS records during your lowest-traffic window with shortened TTL values. We upload the verified 301 redirect map, submit your new XML sitemap to Google, and conduct live checkout tests across payment methods.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 7: COMMON TECHNICAL CHALLENGES */}
          <section id="edge-cases" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Common technical challenges and how we handle them
            </h2>

            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-6">
              Replatforming has real technical rules and edge cases. Here is how we handle the four most common ones:
            </p>

            <div className="space-y-6 text-base text-[var(--sf-ink-soft)] leading-relaxed">
              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1">
                  1. Customer Password Encryption Limits
                </h3>
                <p>
                  Passwords cannot be exported because legacy databases store them as one-way encrypted hashes. We migrate all customer profiles and send automated activation emails so shoppers can set passwords in one click.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1">
                  2. Custom Order Statuses &amp; Fulfillment Mappings
                </h3>
                <p>
                  WooCommerce and Magento allow custom order status names like &ldquo;Awaiting Cheque&rdquo; or &ldquo;Custom Assembly.&rdquo; We translate these into Shopify standard fulfillment states and attach granular historical notes as tags and order Metafields for complete customer service visibility.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1">
                  3. Products Exceeding the 100-Variant Limit
                </h3>
                <p>
                  Standard Shopify products historically limit items to 100 variants and 3 option dimensions. We structure complex multi-option items using linked parent and child products connected via visual swatches, use Shopify newer GraphQL APIs, or use line-item properties for custom options.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1">
                  4. Proprietary Custom Fields (ACF to Metafields)
                </h3>
                <p>
                  We map custom database fields—like PDF spec sheets, dimension tables, or fabric care instructions—directly into native Shopify 2.0 Metafields. Your team can edit these fields cleanly in the Shopify admin without touching template code.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 8: INDEPENDENT DEVELOPER VS AGENCY */}
          <section id="developer-vs-agency" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Why work with an independent developer instead of an agency?
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-6">
              <p>
                Large agencies often pitch migrations with a team of four or five people: an account director, a project manager, a junior designer, and an offshore developer.
              </p>
              <p>
                That setup introduces three real problems for store owners:
              </p>
            </div>

            <div className="border-l-2 border-[var(--sf-primary)] pl-5 space-y-3 text-base text-[var(--sf-ink-soft)]">
              <p>
                <strong>1. Information gets lost in transit:</strong> You explain your business rules to an account manager, who writes an internal ticket for a developer they may not work with directly. Edge cases get missed and bugs show up right before launch.
              </p>
              <p>
                <strong>2. You pay for agency overhead:</strong> A large portion of your project fee pays for agency management, sales commissions, and internal meetings rather than actual engineering.
              </p>
              <p>
                <strong>3. Fast, direct communication:</strong> When you work with an independent senior developer, you communicate directly with the person writing your database scripts, building your theme sections, and verifying your 301 redirects.
              </p>
            </div>
          </section>

          {/* SECTION 9: SERVICES INCLUDED */}
          <section id="services-included" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Services included in our Shopify migration engagements
            </h2>

            <div className="border-l-2 border-[var(--sf-primary)] pl-5 space-y-2 text-base text-[var(--sf-ink-soft)]">
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Full Catalog &amp; Historical Data Migration:</strong> Products, variants, customer profiles, and completed order records transferred without data loss.
                </li>
                <li>
                  <strong>Comprehensive 1:1 SEO 301 Redirect Architecture:</strong> Complete legacy URL crawl, mapping matrix, and Google Search Console submission.
                </li>
                <li>
                  <strong>Online Store 2.0 Theme Configuration:</strong> Lightweight Liquid storefront setup with modular sections and fast mobile performance.
                </li>
                <li>
                  <strong>Payment Gateway &amp; Checkout Setup:</strong> Shopify Payments, Shop Pay, PayPal, and regional shipping rates configured and tested.
                </li>
                <li>
                  <strong>Third-Party Integration Re-engineering:</strong> Connecting email marketing (Klaviyo), review systems, and inventory tools via direct APIs.
                </li>
                <li>
                  <strong>30-Day Post-Launch Support &amp; Monitoring:</strong> Daily traffic monitoring, 404 error tracking, and immediate developer fixes.
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 10: RELATED SERVICES */}
          <section id="related-services" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Related services and next steps
            </h2>

            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-6">
              A store migration often connects with other parts of your store build:
            </p>

            <div className="border-l-2 border-[var(--sf-ink)] pl-5 space-y-2 text-base text-[var(--sf-ink-soft)]">
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Theme Development:</strong> If you want a fresh storefront look alongside your migration, explore our{" "}
                  <Link
                    href="/services/theme-development"
                    className="text-[var(--sf-primary)] font-bold underline hover:text-[var(--sf-primary-deep)]"
                  >
                    Shopify Theme Development
                  </Link>{" "}
                  service.
                </li>
                <li>
                  <strong>Custom Logic &amp; Private Apps:</strong> For specialized business workflows or custom B2B rules, see our{" "}
                  <Link
                    href="/services/custom-shopify-development"
                    className="text-[var(--sf-primary)] font-bold underline hover:text-[var(--sf-primary-deep)]"
                  >
                    Custom Shopify Development
                  </Link>{" "}
                  page.
                </li>
                <li>
                  <strong>Large Catalog Structuring:</strong> To see how we structure high-SKU catalogs and B2B requirements, read our{" "}
                  <Link
                    href="/work/industrial-supply-direct"
                    className="text-[var(--sf-primary)] font-bold underline hover:text-[var(--sf-primary-deep)]"
                  >
                    Industrial Supply Direct case study
                  </Link>.
                </li>
                <li>
                  <strong>Enterprise Shopify Plus:</strong> If your store needs wholesale portals, multi-store expansion, or custom checkout scripts, visit our dedicated{" "}
                  <Link
                    href="/services/shopify-plus-migration"
                    className="text-[var(--sf-primary)] font-bold underline hover:text-[var(--sf-primary-deep)]"
                  >
                    Shopify Plus Migration
                  </Link>{" "}
                  page.
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 11: FAQS */}
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
                Ready to move your store to Shopify with protected search rankings?
              </h2>
              <p className="text-lg sm:text-xl text-[var(--sf-ink-soft)] leading-relaxed mb-8">
                Share your current website URL and estimated catalog size. We will review your database structure and deliver a clear migration plan with exact milestone pricing.
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
