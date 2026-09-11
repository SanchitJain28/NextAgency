import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Terminal,
  Layers,
  Database,
  Cpu,
  RefreshCw,
} from "lucide-react";
import ComparisonTable from "@/components/shared/ComparisonTable";

export const metadata: Metadata = {
  title: "Custom Shopify App Development Services | ScaleFront",
  description:
    "We build private Shopify apps that connect your store to internal ERPs, warehouses, and custom workflows — plus public apps published to the Shopify App Store.",
  alternates: {
    canonical: "https://scalefront.io/services/custom-shopify-apps",
  },
  openGraph: {
    title: "Custom Shopify App Development Services | ScaleFront",
    description:
      "We build private Shopify apps that connect your store to internal ERPs, warehouses, and custom workflows — plus public apps published to the Shopify App Store.",
    url: "https://scalefront.io/services/custom-shopify-apps",
    siteName: "ScaleFront",
    type: "website",
    images: [
      {
        url: "https://scalefront.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Shopify App Development by ScaleFront",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Shopify App Development Services | ScaleFront",
    description:
      "We build private Shopify apps that connect your store to internal ERPs, warehouses, and custom workflows — plus public apps published to the Shopify App Store.",
    images: ["https://scalefront.io/og-image.jpg"],
  },
};

export default function CustomShopifyAppsPage() {
  const faqData = [
    {
      question:
        "What is the difference between a private app and a public Shopify app?",
      answer:
        "A private custom app is built exclusively for your store to solve internal workflows and requires no App Store approval. A public app is published to the App Store for multiple merchants to install.",
    },
    {
      question:
        "Will a custom Shopify app slow down my storefront loading speed?",
      answer:
        "No. Custom apps run on dedicated backend servers or use native Shopify Functions that execute during checkout. Unlike third-party plugins, they do not inject heavy tracking scripts or bloat your theme.",
    },
    {
      question: "Do I own the source code of my custom Shopify app?",
      answer:
        "Yes. You receive full ownership of the source code, repository, and database upon project completion. You can host the application on your own cloud servers without paying recurring software licensing fees.",
    },
    {
      question:
        "How do you keep our custom app working when Shopify updates its API?",
      answer:
        "Shopify releases API updates quarterly and deprecates versions after twelve months. We build on current stable versions and provide maintenance to update endpoints and schemas before older API versions retire from production.",
    },
    {
      question:
        "Can a custom Shopify app connect our store to our existing ERP or warehouse?",
      answer:
        "Yes. We use Shopify's GraphQL Admin API and secure webhooks to synchronize orders, inventory, and customer records directly with NetSuite, SAP, custom warehouse management systems, or proprietary internal databases without data loss.",
    },
    {
      question: "Do we need Shopify Plus to build and run custom Shopify apps?",
      answer:
        "No. Custom backend apps and admin tools work on all standard Shopify plans. However, advanced checkout customizations using Shopify Functions or Checkout Extensibility require an active Shopify Plus merchant plan.",
    },
  ];

  const comparisonRows = [
    {
      included: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            One-Time Capital Investment
          </strong>
          You pay for development once and own the codebase as an asset. Cloud
          hosting costs are predictable and minimal.
        </>
      ),
      excluded: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            Compounding Monthly SaaS Fees
          </strong>
          Stacking 15+ public plugins costs $200 to $300 every month
          indefinitely, with tier price jumps as your store grows.
        </>
      ),
    },
    {
      included: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            Zero Storefront Speed Impact
          </strong>
          Built with native Shopify Functions or backend servers. Adds zero
          render-blocking JavaScript or CSS to your product pages.
        </>
      ),
      excluded: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            Heavy DOM Script Bloat
          </strong>
          Injects external tracking tags, stylesheets, and third-party scripts
          that degrade Core Web Vitals and lower mobile conversions.
        </>
      ),
    },
    {
      included: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            Complete Data Sovereignty
          </strong>
          Customer names, shipping addresses, and order histories pass directly
          between Shopify and your private encrypted database.
        </>
      ),
      excluded: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            Third-Party Data Exposure
          </strong>
          Sensitive merchant and customer data is stored on multi-tenant SaaS
          servers outside your control.
        </>
      ),
    },
    {
      included: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            Exact Business Logic Fit
          </strong>
          100% tailored to your specific warehouse workflows, ERP sync rules,
          custom discount tiers, and packaging logic.
        </>
      ),
      excluded: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            Rigid, Generic Settings
          </strong>
          Built for the average store. Forces you to compromise your operational
          workflows or use awkward manual workarounds.
        </>
      ),
    },
    {
      included: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            Unified Code Stability
          </strong>
          Single codebase engineered and tested specifically for your store
          architecture with zero third-party script collisions.
        </>
      ),
      excluded: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            Frequent App Conflicts
          </strong>
          Different app developers frequently clash on cart drawers and checkout
          pages, causing broken discounts and checkout errors.
        </>
      ),
    },
    {
      included: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            100% Code &amp; IP Ownership
          </strong>
          You own the repository, source code, and deployment pipeline. You
          control your roadmap with zero vendor lock-in.
        </>
      ),
      excluded: (
        <>
          <strong className="text-[var(--sf-ink)] block mb-1">
            Rented Software Dependency
          </strong>
          If the third-party developer raises pricing, gets acquired, or shuts
          down their servers, your store features break.
        </>
      ),
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://scalefront.io/services/custom-shopify-apps#service",
        name: "Custom Shopify App Development Services",
        serviceType: "Shopify App Development",
        description:
          "Custom Shopify app development services including private ERP/WMS integrations, Shopify Functions, Checkout Extensibility, and public SaaS apps for the Shopify App Store.",
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
          name: "Shopify App Development Offerings",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Private Shopify App Development",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Shopify Functions & Checkout Extensibility",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Public Shopify App Store Development",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://scalefront.io/services/custom-shopify-apps#faq",
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
            name: "Custom Shopify App Development",
            item: "https://scalefront.io/services/custom-shopify-apps",
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
                Custom Shopify App Development
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <header
            id="hero"
            className="mb-16 pb-12 border-b-2 border-[var(--sf-ink)]"
          >
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--sf-ink)] leading-[1.05] mb-6 max-w-4xl"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Custom Shopify App Development Services
            </h1>

            <p className="text-xl sm:text-2xl text-[var(--sf-ink-soft)] leading-relaxed mb-8 max-w-3xl">
              We build private Shopify apps that connect your store to internal
              ERPs, warehouses, and custom workflows — plus commercial public
              apps published to the Shopify App Store.
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

          <section id="what-it-means" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              What custom Shopify app development actually means
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
              <p>
                Every Shopify store starts with the same core admin: products,
                orders, customers, and discounts. For a lot of growing brands,
                that default setup is enough. But once a business reaches a
                certain scale, its daily operations stop fitting neatly into
                standard boxes.
              </p>
              <p>
                You might need your inventory to sync with a private warehouse
                management system every ten minutes. You might need wholesale
                buyers to see tiered pricing based on custom contract terms. Or
                you might want to stop paying $200 to $300 every month across
                twenty separate public app subscriptions that slow down your
                theme.
              </p>
              <p>
                Custom Shopify app development solves these problems by creating
                software built specifically for your store’s operational rules.
                Rather than forcing your business to adapt to a generic tool
                from the Shopify App Store, custom apps adapt Shopify to how you
                actually do business.
              </p>
            </div>

            <div className="mt-8 space-y-8">
              <div className="border-l-2 border-[var(--sf-primary)] pl-5">
                <h3
                  className="text-xl font-bold text-[var(--sf-ink)] mb-2"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  1. Private and Custom Apps (Built for One Store)
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)] mb-3">
                  A private app is built exclusively for your business. It is
                  installed directly on your store, connects to your private
                  database, and never appears on the public Shopify App Store.
                  Private apps are ideal for:
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-[var(--sf-ink-soft)] list-disc list-inside">
                  <li>
                    Synchronizing inventory, purchase orders, and customer data
                    with external ERPs like NetSuite, SAP, or Microsoft
                    Dynamics.
                  </li>
                  <li>
                    Automating complex warehouse routing and 3PL fulfillment
                    workflows.
                  </li>
                  <li>
                    Running custom discount logic, payment filtering, or
                    delivery rules via Shopify Functions.
                  </li>
                  <li>
                    Keeping your proprietary customer and sales data 100%
                    private, rather than routing it through third-party
                    multi-tenant SaaS servers.
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5">
                <h3
                  className="text-xl font-bold text-[var(--sf-ink)] mb-2"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  2. Public and Commercial Apps (Built for the Shopify App
                  Store)
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)] mb-3">
                  A public app is built for software companies, SaaS founders,
                  or merchants who want to launch a commercial product for
                  thousands of other Shopify merchants to install. Public apps
                  require:
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-[var(--sf-ink-soft)] list-disc list-inside">
                  <li>
                    Multi-tenant architectures capable of handling thousands of
                    store installations simultaneously.
                  </li>
                  <li>
                    OAuth 2.0 authentication flows and mandatory GDPR compliance
                    webhooks.
                  </li>
                  <li>
                    Embedded user interfaces built with Shopify Polaris and App
                    Bridge so the app feels native to the Shopify admin.
                  </li>
                  <li>
                    Integration with Shopify&apos;s Billing API for monthly
                    recurring subscriptions and usage fees.
                  </li>
                  <li>
                    Meeting Shopify&apos;s official App Store review guidelines
                    for security, accessibility, and performance.
                  </li>
                </ul>
                <p className="text-sm text-[var(--sf-ink-soft)] mt-4">
                  (For live examples of public app engineering, see our Shopify
                  App Store products:{" "}
                  <a
                    href="https://apps.shopify.com/pairly-bundles-and-upsell"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[var(--sf-primary)]"
                  >
                    Pairly Bundles &amp; Upsell
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://apps.shopify.com/solid-ai-related-products"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[var(--sf-primary)]"
                  >
                    Solid AI Related Products
                  </a>
                  .)
                </p>
              </div>
            </div>
          </section>

          <section id="why-custom-apps" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Why choose custom Shopify app development over pre-built App Store
              plugins
            </h2>

            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-6">
              The Shopify App Store has thousands of pre-built apps. When you
              first launch, installing an off-the-shelf app for reviews,
              subscriptions, or popups is fast and cheap. But as order volume
              grows, stacking pre-built plugins creates severe operational
              bottlenecks.
            </p>

            <div className="space-y-6 text-base text-[var(--sf-ink-soft)] leading-relaxed">
              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1">
                  1. The Hidden Cost of App Subscription Bloat
                </h3>
                <p>
                  Most public apps charge on a monthly SaaS model. As your
                  catalog and customer list grow, tier prices jump. A store
                  using 15 to 20 apps frequently spends between $200 to $300
                  every single month in app subscriptions. Over three years,
                  that is $5,000 to $10,000 spent on rented software you will
                  never own. A custom app is a one-time capital asset that runs
                  on your own low-cost cloud infrastructure.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1">
                  2. Storefront Speed and Core Web Vitals
                </h3>
                <p>
                  Public apps designed for the storefront inject their own
                  JavaScript libraries, CSS files, and tracking pixels into your
                  theme. When ten different apps load scripts on the product
                  page, page speed plummets. Mobile shoppers leave, bounce rates
                  rise, and conversion rates drop. Custom apps handle their
                  logic server-side or use native Shopify Functions, adding zero
                  render-blocking JavaScript to your storefront.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1">
                  3. Data Privacy and Security Risks
                </h3>
                <p>
                  When you install a third-party app, you grant external servers
                  access to your customers&apos; names, physical addresses,
                  emails, and order histories. If that app vendor experiences
                  downtime or a security breach, your store suffers. With a
                  custom private app, your data passes directly between Shopify
                  and your own secure database.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1">
                  4. Rigid Workflows and Code Clashes
                </h3>
                <p>
                  Public apps are built for the lowest common denominator. They
                  provide basic settings, but they cannot adapt to unique
                  warehouse rules, custom box packaging calculations, or complex
                  tax requirements. Worse, different public apps frequently
                  clash with each other on the cart and checkout pages, causing
                  discount errors and dropped sales.
                </p>
              </div>
            </div>
          </section>

          <section id="comparison-table" className="mb-20">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-4"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Comparing Pre-Built App Store Plugins vs. Custom Shopify Apps
            </h2>
            <p className="text-base text-[var(--sf-ink-soft)] mb-8 max-w-3xl">
              An objective comparison of total ownership cost, storefront
              performance, data control, and engineering stability.
            </p>

            <ComparisonTable
              includedHeader={
                <>
                  Custom Shopify App Development{" "}
                  <span className="underline decoration-[var(--sf-primary)] decoration-2">
                    (Owned Code Asset)
                  </span>
                </>
              }
              excludedHeader={
                <>
                  Pre-Built App Store Plugins{" "}
                  <span className="underline decoration-rose-500 decoration-2">
                    (Rented SaaS)
                  </span>
                </>
              }
              rows={comparisonRows}
            />
          </section>

          <section id="types-of-apps" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Types of custom Shopify apps we develop
            </h2>

            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-8">
              We build custom software across Shopify&apos;s platform, from
              checkout functions to backend ERP and warehouse connections.
            </p>

            <div className="space-y-8">
              <div className="border-l-2 border-[var(--sf-primary)] pl-5">
                <h3
                  className="text-xl font-bold text-[var(--sf-ink)] mb-2"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  1. Shopify Functions &amp; Checkout Extensibility (Shopify
                  Plus)
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)] mb-3">
                  Shopify has retired{" "}
                  <code className="font-mono text-xs bg-[var(--sf-paper-sunken)] px-1.5 py-0.5 border border-[var(--sf-ink-mute)]">
                    checkout.liquid
                  </code>{" "}
                  in favor of Checkout Extensibility and Shopify Functions.
                  Functions execute directly on Shopify’s worldwide
                  infrastructure in under 5 milliseconds, providing high
                  reliability during traffic spikes.
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-[var(--sf-ink-soft)] list-disc list-inside">
                  <li>
                    <strong>Custom Discount Functions:</strong> Volume-tiered
                    discounts, B2B customer-group pricing, and dynamic
                    gift-with-purchase rules that apply automatically at
                    checkout without buggy discount codes.
                  </li>
                  <li>
                    <strong>Delivery Customization Functions:</strong> Hide,
                    rename, or reorder shipping methods based on customer postal
                    codes, cart weight, hazardous materials, or delivery address
                    types.
                  </li>
                  <li>
                    <strong>Payment Customization Functions:</strong> Restrict
                    or reorder payment gateways dynamically (for example, hiding
                    Cash on Delivery for orders above $500 or showing Net-30
                    invoicing only to approved B2B accounts).
                  </li>
                  <li>
                    <strong>Cart Validation Functions:</strong> Enforce minimum
                    order quantities, require specific product combinations, or
                    require customer identity verification before checkout
                    submission.
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5">
                <h3
                  className="text-xl font-bold text-[var(--sf-ink)] mb-2"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  2. ERP, WMS, and 3PL Warehouse Integrations
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)] mb-3">
                  High-volume stores need real-time data flow between Shopify
                  and their operations center. We build custom middleware apps
                  that connect Shopify&apos;s GraphQL Admin API with:
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-[var(--sf-ink-soft)] list-disc list-inside">
                  <li>
                    <strong>Enterprise Resource Planning (ERP):</strong>{" "}
                    Automated two-way sync with NetSuite, SAP, Microsoft
                    Dynamics 365, Odoo, or proprietary ERP systems.
                  </li>
                  <li>
                    <strong>
                      Warehouse Management Systems (WMS) &amp; 3PLs:
                    </strong>{" "}
                    Automatic purchase order routing, split-shipment fulfillment
                    tracking, custom packing slip generation, and barcode
                    scanner integrations.
                  </li>
                  <li>
                    <strong>Inventory Reconciliation:</strong> Multi-location
                    inventory buffers to prevent overselling across wholesale
                    and retail channels.
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5">
                <h3
                  className="text-xl font-bold text-[var(--sf-ink)] mb-2"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  3. Custom Customer Portals &amp; B2B Wholesale Tools
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)] mb-3">
                  Deliver self-service capabilities to your buyers directly
                  within their customer accounts:
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-[var(--sf-ink-soft)] list-disc list-inside">
                  <li>
                    Custom re-ordering dashboards with single-click bulk
                    purchasing.
                  </li>
                  <li>
                    Tiered wholesale pricing catalogs and custom quote approval
                    workflows.
                  </li>
                  <li>
                    RMA return request management and warranty registration
                    portals.
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5">
                <h3
                  className="text-xl font-bold text-[var(--sf-ink)] mb-2"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  4. Commercial Public Apps for SaaS Founders
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)] mb-3">
                  For entrepreneurs and software companies looking to launch a
                  product on the Shopify App Store:
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-[var(--sf-ink-soft)] list-disc list-inside">
                  <li>
                    End-to-end multi-tenant architecture designed to scale to
                    thousands of merchants.
                  </li>
                  <li>
                    Secure OAuth 2.0 handshake, session storage, and automated
                    recurring billing hooks.
                  </li>
                  <li>
                    Compliance with all mandatory Shopify App Review standards
                    and GDPR webhook requirements.
                  </li>
                  <li className="mt-1">
                    Live App Store examples:{" "}
                    <a
                      href="https://apps.shopify.com/pairly-bundles-and-upsell"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-[var(--sf-primary)]"
                    >
                      Pairly Bundles &amp; Upsell
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://apps.shopify.com/solid-ai-related-products"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-[var(--sf-primary)]"
                    >
                      Solid AI Related Products
                    </a>
                    .
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="tech-stack" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              The modern technology stack behind our Shopify apps
            </h2>

            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-6">
              We do not use outdated legacy PHP scripts or unmaintained
              frameworks. We build custom Shopify applications using
              Shopify&apos;s official modern engineering stack:
            </p>

            <div className="space-y-4 text-base text-[var(--sf-ink-soft)] leading-relaxed">
              <div className="border-l-2 border-[var(--sf-primary)] pl-4">
                <strong className="text-[var(--sf-ink)] font-mono uppercase text-sm block mb-1">
                  Framework &amp; Runtime: Remix.js &amp; Node.js
                </strong>
                <p>
                  The official standard recommended by Shopify for
                  server-rendered speed, type safety, and fast API routing.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <strong className="text-[var(--sf-ink)] font-mono uppercase text-sm block mb-1">
                  Merchant Admin UI: Shopify Polaris &amp; App Bridge
                </strong>
                <p>
                  We use Shopify&apos;s official component system so your
                  embedded app looks, feels, and behaves identically to the
                  native Shopify admin. Your team needs zero training.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <strong className="text-[var(--sf-ink)] font-mono uppercase text-sm block mb-1">
                  API Architecture: Shopify GraphQL Admin API &amp; Storefront
                  API
                </strong>
                <p>
                  We use GraphQL to request only the exact fields needed,
                  preventing over-fetching and staying well within Shopify’s API
                  cost limits.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <strong className="text-[var(--sf-ink)] font-mono uppercase text-sm block mb-1">
                  Database &amp; State Management: PostgreSQL with Prisma ORM
                </strong>
                <p>
                  Relational database storage for session tokens, customer
                  settings, order logs, and custom sync queues.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <strong className="text-[var(--sf-ink)] font-mono uppercase text-sm block mb-1">
                  Worker Queues &amp; Caching: Redis &amp; BullMQ
                </strong>
                <p>
                  Asynchronous background task workers that process incoming
                  webhooks, inventory updates, and bulk data operations smoothly
                  without dropping requests during traffic spikes.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <strong className="text-[var(--sf-ink)] font-mono uppercase text-sm block mb-1">
                  Cloud Hosting &amp; Infrastructure: Fly.io, AWS (ECS/Fargate),
                  or GCP
                </strong>
                <p>
                  High-availability cloud hosting with automated SSL, continuous
                  deployment pipelines, daily automated database backups, and
                  Sentry error monitoring.
                </p>
              </div>
            </div>
          </section>

          <section id="lifecycle" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Our 5-phase app development lifecycle
            </h2>

            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-8">
              Building reliable software requires a clear, disciplined
              engineering process. We take your custom app from initial
              architecture scoping through to production deployment and
              long-term maintenance.
            </p>

            <div className="space-y-6">
              <div className="border-l-2 border-[var(--sf-primary)] pl-5">
                <h3
                  className="text-lg font-bold text-[var(--sf-ink)] mb-1"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Phase I: Technical Scoping &amp; Architecture Design
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)]">
                  We audit your operational requirements and define the exact
                  data models, external APIs, and Shopify endpoints needed. We
                  map all webhook events, determine required API access scopes
                  (keeping permissions minimal for maximum security), and
                  establish the hosting infrastructure requirements.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5">
                <h3
                  className="text-lg font-bold text-[var(--sf-ink)] mb-1"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Phase II: UI/UX &amp; Embedded Admin Interface
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)]">
                  For apps requiring merchant configuration, we design the
                  administrative user interface using Shopify Polaris. We
                  wireframe user flows and build prototypes inside Shopify App
                  Bridge, ensuring store managers can update settings
                  intuitively without leaving their Shopify dashboard.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5">
                <h3
                  className="text-lg font-bold text-[var(--sf-ink)] mb-1"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Phase III: Core Backend Engineering &amp; API Integration
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)]">
                  We build the core application logic using Remix and Node.js.
                  We establish secure connections to external ERPs or databases,
                  implement GraphQL queries and mutations, write background
                  worker queues for bulk jobs, and build Shopify Functions for
                  checkout customizations.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5">
                <h3
                  className="text-lg font-bold text-[var(--sf-ink)] mb-1"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Phase IV: Security, Webhook Verification &amp; Rigorous QA
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)]">
                  We test the application against extreme real-world conditions.
                  We verify cryptographic HMAC signatures on all webhooks, test
                  idempotency handling to ensure network retries never create
                  duplicate orders, and run GraphQL rate-limit stress tests on
                  private development stores.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5">
                <h3
                  className="text-lg font-bold text-[var(--sf-ink)] mb-1"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Phase V: Deployment, Monitoring &amp; Long-term Support
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)]">
                  We deploy the application to your chosen cloud infrastructure
                  with automated CI/CD pipelines. We configure real-time error
                  alerts with Sentry, verify database backup schedules, conduct
                  live end-to-end test transactions, and provide clear
                  administrative documentation for your team.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 6: WEBHOOK RELIABILITY & SECURITY */}
          <section id="security" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Webhook reliability, HMAC security, and rate-limit engineering
            </h2>

            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-6">
              A custom app is only as good as its reliability under heavy load.
              When your store runs a major sale or Black Friday campaign, your
              app must handle thousands of simultaneous events without dropping
              data.
            </p>

            <div className="space-y-6 text-base text-[var(--sf-ink-soft)] leading-relaxed">
              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1">
                  1. Cryptographic HMAC Signature Validation
                </h3>
                <p>
                  Every webhook Shopify sends includes an{" "}
                  <code className="font-mono text-xs bg-[var(--sf-paper-sunken)] px-1 py-0.5 border border-[var(--sf-ink-mute)]">
                    X-Shopify-Hmac-Sha256
                  </code>{" "}
                  header. Our apps validate this cryptographic signature against
                  your secret key before processing any payload, ensuring
                  unauthorized requests are rejected immediately.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1">
                  2. Idempotency and Queue-Based Processing
                </h3>
                <p>
                  Webhooks can occasionally be sent more than once due to
                  network retries. Our apps use database idempotency keys and
                  Redis worker queues (BullMQ) to record processed event IDs. If
                  a duplicate order webhook arrives, the worker recognizes it
                  and safely skips duplicate processing, preventing
                  double-fulfillments or incorrect inventory counts.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1">
                  3. GraphQL Cost Bucket Management
                </h3>
                <p>
                  Shopify regulates API traffic using a leaky-bucket algorithm
                  based on calculated query cost (maximum 1,000 cost points per
                  store, replenishing at 50 points per second). We design
                  tightly scoped GraphQL queries and use Shopify&apos;s
                  asynchronous Bulk Operations API for large catalog syncs,
                  ensuring your app never hits rate limits or gets throttled.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 7: LONG-TERM MAINTENANCE */}
          <section id="maintenance" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Long-term maintenance and Shopify API version upgrades
            </h2>

            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-6">
              Shopify releases a new API version every three months (
              <code className="font-mono text-xs bg-[var(--sf-paper-sunken)] px-1 py-0.5 border border-[var(--sf-ink-mute)]">
                YYYY-01
              </code>
              ,{" "}
              <code className="font-mono text-xs bg-[var(--sf-paper-sunken)] px-1 py-0.5 border border-[var(--sf-ink-mute)]">
                YYYY-04
              </code>
              ,{" "}
              <code className="font-mono text-xs bg-[var(--sf-paper-sunken)] px-1 py-0.5 border border-[var(--sf-ink-mute)]">
                YYYY-07
              </code>
              ,{" "}
              <code className="font-mono text-xs bg-[var(--sf-paper-sunken)] px-1 py-0.5 border border-[var(--sf-ink-mute)]">
                YYYY-10
              </code>
              ) and permanently deprecates each version after 12 months. An
              unmaintained app will eventually fail when Shopify sunsets older
              endpoints.
            </p>

            <div className="border-l-2 border-[var(--sf-primary)] pl-5 space-y-2 text-base text-[var(--sf-ink-soft)]">
              <p>As part of our Shopify app development services:</p>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>We build on current stable API versions.</li>
                <li>
                  We monitor Shopify deprecation warnings in your app logs.
                </li>
                <li>
                  We proactively test and upgrade your codebase to new API
                  versions before legacy endpoints reach their sunset date.
                </li>
                <li>
                  We provide ongoing server maintenance, security patches, and
                  database optimization.
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 8: FAQ ACCORDION / LIST */}
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
                Ready to build custom functionality for your Shopify store?
              </h2>
              <p className="text-lg sm:text-xl text-[var(--sf-ink-soft)] leading-relaxed mb-8">
                Tell us about the business workflow, integration, or custom
                feature you need. We will review your technical requirements and
                provide a direct architecture plan within 24 hours.
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
