import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Shopify Development Services",
  description:
    "We build custom Shopify themes, private apps, and API integrations tailored to how your business actually operates.",
  alternates: {
    canonical: "/services/custom-shopify-development",
  },
  openGraph: {
    title: "Custom Shopify Development Services",
    description:
      "We build custom Shopify themes, private apps, and API integrations tailored to how your business actually operates.",
    url: "https://www.scalefront.io/services/custom-shopify-development",
    siteName: "ScaleFront",
    type: "website",
    images: [
      {
        url: "https://www.scalefront.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Shopify Development by ScaleFront",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Shopify Development Services",
    description:
      "We build custom Shopify themes, private apps, and API integrations tailored to how your business actually operates.",
    images: ["https://www.scalefront.io/og-image.jpg"],
  },
};

export default function CustomShopifyDevelopmentPage() {
  const faqData = [
    {
      question: "What is custom Shopify development?",
      answer:
        "Custom Shopify development means writing code to build features, themes, or apps that do not exist in the Shopify App Store or Theme Store, designed specifically for your store's workflow and buyers.",
    },
    {
      question:
        "How is custom development different from using a pre-made theme?",
      answer:
        "A pre-made theme is built for generic stores and contains lots of unused code. Custom development builds only what your store needs, giving you faster loading speeds, clean layouts, and better conversion.",
    },
    {
      question: "What is included in a custom Shopify development service?",
      answer:
        "It typically covers project scoping, custom theme development in Liquid, private app or API setup, mobile testing across devices, speed optimization, and training your team on using the Shopify theme editor.",
    },
    {
      question: "How much does custom Shopify development cost?",
      answer:
        "Cost depends on what you need built. Single custom sections or features start at smaller fixed scopes, while full custom themes, custom apps, or complex B2B portals require larger project investments.",
    },
    {
      question: "How long does a custom Shopify build take?",
      answer:
        "A single custom feature or section usually takes 3 to 7 days. A full custom theme build takes 3 to 6 weeks, covering design, custom Liquid coding, mobile testing, and launch.",
    },
    {
      question: "Can you customize Shopify checkout?",
      answer:
        "Yes. For Shopify Plus stores, we use Checkout Extensibility to add custom fields, upsells, and validation rules. For standard stores, we build pre-checkout drawer cart features and custom post-purchase thank-you pages.",
    },
    {
      question: "Can I edit content and layouts myself after launch?",
      answer:
        "Yes. Every custom theme is built using Shopify Online Store 2.0. You can change text, replace photos, and drag and drop sections in the Shopify admin without touching any code.",
    },
    {
      question: "Will custom development slow down my store?",
      answer:
        "No. Custom development is usually much faster than pre-made setups. We write clean Liquid and lightweight code, replacing 10 to 15 third-party apps that usually drag down mobile load speeds.",
    },
    {
      question: "What is headless Shopify and when do I need it?",
      answer:
        "Headless separates your frontend website from Shopify's commerce backend. It is best for brands needing custom web apps or 3D builders. Most stores achieve great results with custom Liquid themes instead.",
    },
    {
      question: "How do we get started with a custom build?",
      answer:
        "Send us your store link and a brief list of what you want to build. We review your requirements, recommend the cleanest technical plan, and share a clear scope and timeline.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id":
          "https://scalefront.io/services/custom-shopify-development#service",
        name: "Custom Shopify Development",
        serviceType: "Shopify Development Services",
        description:
          "Custom Shopify development services including custom Liquid themes, private Shopify apps, API integrations, and headless commerce builds.",
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
          name: "Custom Shopify Development Capabilities",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Shopify Theme Development",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Shopify App Development & API Integrations",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Headless Shopify Storefront Development",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://scalefront.io/services/custom-shopify-development#faq",
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
            item: "https://scalefront.io/services/theme-development",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Custom Shopify Development",
            item: "https://scalefront.io/services/custom-shopify-development",
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
        {/* TOP STATUS & BREADCRUMB BAR */}
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
                Custom Shopify Development
              </span>
            </div>
            <div className="text-[var(--sf-ink-mute)] hidden sm:inline font-mono">
              SERVICE // CUSTOM THEMES &amp; APPS
            </div>
          </div>
        </div>

        {/* MAIN FULL-WIDTH CONTAINER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* HERO SECTION */}
          <header
            id="hero"
            className="mb-16 pb-12 border-b-2 border-[var(--sf-ink)]"
          >
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--sf-ink)] leading-[1.05] mb-6 max-w-4xl"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Custom Shopify Development
            </h1>

            <p className="text-xl sm:text-2xl text-[var(--sf-ink-soft)] leading-relaxed mb-8 max-w-3xl">
              We build custom Shopify themes, private apps, and API integrations
              tailored to how your business actually operates.
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

          {/* SECTION 2: WHAT IS CUSTOM SHOPIFY DEVELOPMENT */}
          <section id="what-is-custom-development" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              What is custom Shopify development?
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
              <p>
                When merchants first look into custom Shopify development, they
                often assume it means tweaking colors, adjusting fonts, or
                picking pre-made sections from a theme customizer. Changing
                settings in an off-the-shelf theme is simple customization. Real
                custom development goes much further.
              </p>

              <p>
                At its core, custom Shopify development means building features,
                tools, or entire storefronts that do not exist in the Shopify
                App Store or Theme Store. Instead of trying to force your
                business into a generic template with features you do not need,
                code is written specifically for your products, your catalog
                structure, and your checkout flow.
              </p>

              <p>
                For example, imagine a store that sells gift boxes where
                customers choose 3 products from different categories. An
                off-the-shelf theme only lets buyers purchase items one by one.
                With custom development, we build an interactive step-by-step
                box builder right onto the product page. The customer picks
                their 3 items, the price updates on screen, and all 3 items add
                to the cart in a single click.
              </p>

              <p>
                Custom development also covers private apps that sync inventory
                with your warehouse, wholesale pricing portals for B2B buyers,
                special checkout validation rules, or building a brand-new
                Online Store 2.0 theme from scratch. You get a store that fits
                how your business runs — without clunky workarounds.
              </p>
            </div>
          </section>

          {/* SECTION 3: CUSTOM THEMES VS OFF-THE-SHELF (Content Left, Image Right) */}
          <section
            id="custom-themes"
            className="mb-16 pt-8 border-t border-[var(--sf-ink)]/15"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7">
                <h2
                  className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Custom Shopify theme development vs pre-made themes
                </h2>

                <div className="space-y-4 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
                  <p>
                    Pre-made themes from the Shopify Theme Store are designed to
                    work for everyone. A single theme tries to support a
                    clothing brand, an auto parts supplier, and a home decor
                    shop all at once. To do that, it comes packed with hundreds
                    of settings and heavy code files your store will never use.
                  </p>

                  <p>
                    When you invest in custom{" "}
                    <Link
                      href="/services/theme-development"
                      className="text-[var(--sf-primary)] font-bold underline hover:text-[var(--sf-primary-deep)]"
                    >
                      shopify theme development
                    </Link>
                    , every section and template is built around your specific
                    products and how your customers buy:
                  </p>

                  <ul className="space-y-3 my-4 pl-4 border-l-2 border-[var(--sf-primary)] text-base sm:text-lg text-[var(--sf-ink)]">
                    <li>
                      <strong>Tailored Product Pages:</strong> A clothing store
                      needs clear size charts, fabric close-ups, and model fit
                      notes. An industrial supplier needs part numbers,
                      technical spec sheets, and bulk quantity pricing. Custom
                      themes give each product type the exact layout it needs.
                    </li>
                    <li>
                      <strong>Fast Product Filtering:</strong> Customers can
                      filter by size, color, material, or custom tags with
                      instant AJAX updates, so they find the right item without
                      waiting for pages to reload.
                    </li>
                    <li>
                      <strong>
                        Drag-and-Drop Editing in Online Store 2.0:
                      </strong>{" "}
                      We build every section using Shopify's native Online Store
                      2.0 standards. After launch, you can change text, swap
                      images, and rearrange sections in the Shopify admin
                      without touching any code.
                    </li>
                    <li>
                      <strong>Faster Load Times with Clean Code:</strong>{" "}
                      Because custom themes only include the code your store
                      actually needs, pages load quickly on mobile devices. You
                      avoid the bloated JavaScript that slows down off-the-shelf
                      themes.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <div className="border-2 border-[var(--sf-ink)] bg-white shadow-[4px_4px_0_var(--sf-ink)] overflow-hidden">
                  <Image
                    src="/portfolio/maison-luxe/covers/cover.png"
                    alt="Custom Shopify Theme Development - Maison Luxe Scandinavian Storefront"
                    width={800}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                  <div
                    className="p-3 border-t-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] text-xs text-[var(--sf-ink-mute)] font-mono"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Maison Luxe: Custom home decor storefront with instant
                    collection filtering and clean Online Store 2.0 sections.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: APPS, INTEGRATIONS & CHECKOUT (Image Left, Content Right) */}
          <section
            id="custom-apps"
            className="mb-16 pt-8 border-t border-[var(--sf-ink)]/15"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 order-2 lg:order-1 lg:sticky lg:top-24">
                <div className="border-2 border-[var(--sf-ink)] bg-white shadow-[4px_4px_0_var(--sf-ink)] overflow-hidden">
                  <Image
                    src="/portfolio/industrial-supply-direct/covers/cover.png"
                    alt="Custom B2B Shopify Development - Industrial Supply Direct 50k SKU Catalog"
                    width={800}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                  <div
                    className="p-3 border-t-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] text-xs text-[var(--sf-ink-mute)] font-mono"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Industrial Supply Direct: Custom B2B catalog managing
                    50,000+ SKUs with volume pricing and custom quote requests.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <h2
                  className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Custom Shopify app development &amp; private integrations
                </h2>

                <div className="space-y-4 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
                  <p>
                    The Shopify App Store has thousands of public apps, but no
                    pre-made app knows your exact business rules. When you have
                    unique fulfillment workflows, custom pricing tiers, or
                    specific back-office tools,{" "}
                    <span className="font-semibold text-[var(--sf-ink)]">
                      custom shopify app development
                    </span>{" "}
                    connects your systems together.
                  </p>

                  <p>
                    Private apps and integrations run securely in the background
                    using the Shopify Admin API, Storefront API, and webhooks.
                    They handle repetitive tasks automatically so you don't
                    spend hours on manual data entry every week.
                  </p>

                  <p>Practical capabilities include:</p>

                  <ul className="space-y-3 my-4 pl-4 border-l-2 border-[var(--sf-primary)] text-base sm:text-lg text-[var(--sf-ink)]">
                    <li>
                      <strong>Warehouse and ERP Sync:</strong> Connect your
                      Shopify store to your warehouse or ERP system (like
                      NetSuite or SAP) so inventory levels, new orders, and
                      tracking numbers update automatically.
                    </li>
                    <li>
                      <strong>Wholesale and B2B Portals:</strong> Let approved
                      business customers log in to see wholesale pricing, submit
                      purchase orders, and request custom volume quotes.
                    </li>
                    <li>
                      <strong>Custom Subscription Rules:</strong> Set up custom
                      recurring orders, tiered member plans, or subscriber-only
                      product drops that go beyond standard subscription app
                      limits.
                    </li>
                    <li>
                      <strong>Custom Checkout Flows:</strong> On Shopify Plus,
                      we use Checkout Extensibility to add delivery date
                      pickers, gift message fields, or minimum order validation.
                      On standard plans, we build custom drawer carts with live
                      free-shipping thresholds and post-purchase thank-you page
                      blocks.
                    </li>
                    <li>
                      <strong>Automated Order Routing:</strong> Automatically
                      route orders, apply custom tags, and send line items to
                      different fulfillment warehouses based on product type or
                      delivery location.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: HEADLESS SHOPIFY */}
          <section
            id="headless-shopify"
            className="mb-16 pt-8 border-t border-[var(--sf-ink)]/15 max-w-5xl"
          >
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Headless Shopify and custom storefronts
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
              <p>
                For stores with unique technical needs, headless Shopify
                separates the frontend website from Shopify's backend commerce
                engine. Shopify still manages your products, inventory, orders,
                and checkout, while the frontend is built using a modern
                framework like Next.js or Shopify Hydrogen.
              </p>

              <p>
                With a headless build, you get total freedom over how pages look
                and interact. You can create instant page transitions,
                interactive 3D product visualizers, and localized international
                storefronts without the layout boundaries of standard theme
                templates.
              </p>

              <p>
                <strong>The honest tradeoff:</strong> Headless Shopify is a
                major investment and is not right for most stores. It requires a
                higher initial budget and ongoing developer support. You also
                cannot simply install plug-and-play apps from the Shopify App
                Store — every tool needs custom API integration.
              </p>

              <p>
                For roughly 90% of stores, a well-built custom Liquid theme
                delivers the same fast mobile speeds and high conversion rates
                at a fraction of the cost. We only recommend headless when you
                have specific app-like features that standard Shopify themes
                cannot support.
              </p>

              <p className="pt-2">
                <Link
                  href="/services/headless-commerce"
                  className="font-mono text-sm font-bold uppercase text-[var(--sf-primary)] hover:underline inline-flex items-center gap-1.5"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Explore our Headless Commerce services &rarr;
                </Link>
              </p>
            </div>
          </section>

          {/* SECTION 6: RELEVANT WORK / PORTFOLIO PROOF */}
          <section
            id="portfolio-proof"
            className="mb-16 pt-8 border-t border-[var(--sf-ink)]/15 max-w-5xl"
          >
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Relevant Work: Custom builds in action
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-8">
              <p>
                Here are a few real custom Shopify stores and features we have
                built:
              </p>

              <div className="space-y-6 my-6">
                <div>
                  <h3
                    className="text-xl font-bold text-[var(--sf-ink)] mb-1"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    <Link
                      href="/work/iron-crate"
                      className="hover:text-[var(--sf-primary)] transition-colors underline"
                    >
                      Iron Crate: Multi-Product Bundle Builder &amp; Nutrition
                      Store
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--sf-ink-soft)]">
                    A custom storefront featuring a 3-step supplement bundle
                    builder, dosage accordions, and an AJAX drawer cart with
                    real-time spend milestones.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-xl font-bold text-[var(--sf-ink)] mb-1"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    <Link
                      href="/work/industrial-supply-direct"
                      className="hover:text-[var(--sf-primary)] transition-colors underline"
                    >
                      Industrial Supply Direct: 50,000 SKU B2B Wholesale Store
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--sf-ink-soft)]">
                    A B2B store built for trade buyers, with tiered volume
                    pricing tables, technical spec sheets, and an online quote
                    request workflow.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-xl font-bold text-[var(--sf-ink)] mb-1"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    <Link
                      href="/work/maison-luxe"
                      className="hover:text-[var(--sf-primary)] transition-colors underline"
                    >
                      Maison Luxe: Scandinavian Home Decor &amp; Stoneware Store
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--sf-ink-soft)]">
                    An editorial lifestyle storefront with a 4-tab category
                    selector, custom room lookbooks, and an instant add-to-cart
                    slideout drawer.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 7: FAQ */}
          <section
            id="faq"
            className="mb-16 pt-8 border-t border-[var(--sf-ink)]/15 max-w-5xl"
          >
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="pb-6 border-b border-[var(--sf-ink)]/15 last:border-b-0"
                >
                  <h3
                    className="text-lg sm:text-xl font-bold text-[var(--sf-ink)] mb-2"
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

          {/* SECTION 8: FINAL CTA */}
          <section
            id="cta"
            className="pt-12 border-t-2 border-[var(--sf-ink)] text-center"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--sf-ink)] mb-4 max-w-2xl mx-auto"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Ready to build a custom Shopify store?
            </h2>

            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] max-w-xl mx-auto mb-8 leading-relaxed">
              Tell us about your project requirements. We will review your store
              needs, recommend the right technical plan, and share a clear
              scope.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="px-8 py-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-primary)] hover:bg-[var(--sf-primary-deep)] text-white text-sm font-bold uppercase tracking-wider transition-all hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 inline-flex items-center gap-2.5"
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
                Schedule a Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919650296375"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] hover:bg-white text-[var(--sf-ink)] text-sm font-bold uppercase tracking-wider transition-all hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 inline-flex items-center gap-2.5"
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
          </section>
        </div>
      </article>
    </>
  );
}
