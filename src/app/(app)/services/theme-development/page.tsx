import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ComparisonTable from "@/components/shared/ComparisonTable";

export const metadata: Metadata = {
  title: "Shopify Theme Development Services | ScaleFront",
  description:
    "We build custom Shopify themes in clean Liquid and Online Store 2.0. Tailored layouts, fast load speeds, and drag-and-drop merchant editing.",
  alternates: {
    canonical: "https://scalefront.io/services/theme-development",
  },
  openGraph: {
    title: "Shopify Theme Development Services | ScaleFront",
    description:
      "We build custom Shopify themes in clean Liquid and Online Store 2.0. Tailored layouts, fast load speeds, and drag-and-drop merchant editing.",
    url: "https://scalefront.io/services/theme-development",
    siteName: "ScaleFront",
    type: "website",
    images: [
      {
        url: "https://scalefront.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shopify Theme Development by ScaleFront",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Theme Development Services | ScaleFront",
    description:
      "We build custom Shopify themes in clean Liquid and Online Store 2.0. Tailored layouts, fast load speeds, and drag-and-drop merchant editing.",
    images: ["https://scalefront.io/og-image.jpg"],
  },
};

export default function ThemeDevelopmentPage() {
  const faqData = [
    {
      question:
        "What is the difference between custom theme development and theme customization?",
      answer:
        "Theme customization means changing settings in a pre-made theme. Custom theme development means coding an entire theme from scratch in Liquid, building unique layouts and features tailored specifically to your product catalog.",
    },
    {
      question: "Should I buy a pre-made theme or get a custom theme built?",
      answer:
        "If you are just starting out, a pre-made theme works fine. If you are scaling and need fast mobile loading, unique product layouts, and lower monthly app fees, invest in a custom theme.",
    },
    {
      question: "How much does custom Shopify theme development cost?",
      answer:
        "Custom theme builds start at ₹25,000 for standard store setups. Full custom theme development with custom product builders and advanced drawer carts ranges from ₹50,000 to ₹75,000 depending on catalog requirements.",
    },
    {
      question: "How long does a custom Shopify theme build take?",
      answer:
        "A full custom theme build typically takes 2 to 4 weeks. This timeline covers wireframing, custom Liquid development, mobile responsiveness testing across devices, speed optimization, and training your team on editing.",
    },
    {
      question: "Can I edit text and replace images myself after launch?",
      answer:
        "Yes. Every theme is built using Shopify Online Store 2.0 standards. You can easily add sections, swap photos, change banners, and update text inside the Shopify theme editor without writing any code.",
    },
    {
      question: "Will a custom theme improve my mobile store speed?",
      answer:
        "Yes. Custom themes load much faster than marketplace themes because we only include the code your store needs. We eliminate heavy JavaScript and replace slow third-party apps with native Liquid features.",
    },
    {
      question:
        "Can you convert our Figma or Adobe XD designs into a Shopify theme?",
      answer:
        "Yes. We take your exact Figma, Sketch, or Adobe XD design files and translate them into a responsive, clean Shopify theme with pixel precision, fluid mobile layouts, and custom interactive elements.",
    },
    {
      question: "Do you help migrate data when upgrading our existing theme?",
      answer:
        "Yes. We build and test your new theme in a private development environment without affecting your live store. When ready, we transfer your product data, collections, and apps with zero downtime.",
    },
    {
      question: "Why work directly with a developer instead of an agency?",
      answer:
        "You speak directly with the developer writing your theme code. This removes account manager delays, prevents miscommunication, speeds up delivery, and eliminates the heavy markups charged by traditional agency models.",
    },
    {
      question: "How do we get started on a custom theme project?",
      answer:
        "Send us your store URL and design files or feature wishlist. We will review your catalog, recommend the cleanest technical structure, and provide a fixed quote and delivery timeline within 24 hours.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://scalefront.io/services/theme-development#service",
        name: "Shopify Theme Development Services",
        serviceType: "Shopify Theme Development",
        description:
          "Custom Shopify theme development services including native Liquid coding, Online Store 2.0 modular architecture, speed optimization, and mobile-first storefront builds.",
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
          name: "Shopify Theme Development Offerings",
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
                name: "Figma to Shopify Theme Conversion",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Shopify Website Development Services",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://scalefront.io/services/theme-development#faq",
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
            name: "Shopify Theme Development",
            item: "https://scalefront.io/services/theme-development",
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
                Shopify Theme Development
              </span>
            </div>
            <div className="text-[var(--sf-ink-mute)] hidden sm:inline font-mono">
              SERVICE // NATIVE LIQUID &amp; ONLINE STORE 2.0
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
              Shopify Theme Development Services
            </h1>

            <p className="text-xl sm:text-2xl text-[var(--sf-ink-soft)] leading-relaxed mb-8 max-w-3xl">
              We build custom Shopify themes from the ground up using clean
              Liquid and Online Store 2.0. Fast mobile speeds, custom product
              pages, and easy drag-and-drop editing.
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

          {/* SECTION 1: WHAT IS SHOPIFY THEME DEVELOPMENT */}
          <section id="what-is-theme-development" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              What custom theme development really means
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
              <p>
                Custom Shopify theme development is the professional practice of
                designing, coding, and building a unique Shopify theme from
                scratch.
              </p>

              <p>
                This entire process is tailored to fit the specific branding,
                product catalog, and business goals of your company. Having said
                that, it is equally important to understand what this{" "}
                <em className="italic font-semibold text-[var(--sf-ink)]">
                  is not
                </em>
                .
              </p>

              {/* COMPARISON TABLE */}
              <ComparisonTable
                rows={[
                  {
                    included: (
                      <>
                        <span className="font-semibold text-emerald-800">
                          ✅ Designing a unique theme
                        </span>{" "}
                        from the ground up tailored to your product catalog.
                      </>
                    ),
                    excluded: (
                      <>
                        <span className="font-semibold text-rose-700">
                          ❌ Buying a pre-built &quot;premium&quot; theme
                        </span>{" "}
                        from the Shopify Theme Store or ThemeForest.
                      </>
                    ),
                  },
                  {
                    included: (
                      <>
                        <span className="font-semibold text-emerald-800">
                          ✅ Coding and building the theme
                        </span>{" "}
                        from scratch using clean Liquid, CSS, and native JavaScript.
                      </>
                    ),
                    excluded: (
                      <>
                        <span className="font-semibold text-rose-700">
                          ❌ Simply changing colors, fonts, or banner images
                        </span>{" "}
                        on an existing pre-made template.
                      </>
                    ),
                  },
                  {
                    included: (
                      <>
                        <span className="font-semibold text-emerald-800">
                          ✅ Structuring modular Online Store 2.0 sections
                        </span>{" "}
                        so merchants can easily edit content post-launch.
                      </>
                    ),
                    excluded: (
                      <>
                        <span className="font-semibold text-rose-700">
                          ❌ Relying on heavy drag-and-drop page builders
                        </span>{" "}
                        (like PageFly or Shogun) that slow down mobile load times.
                      </>
                    ),
                  },
                  {
                    included: (
                      <>
                        <span className="font-semibold text-emerald-800">
                          ✅ Building native product features
                        </span>{" "}
                        (interactive drawer carts, custom bundle builders, size guides).
                      </>
                    ),
                    excluded: (
                      <>
                        <span className="font-semibold text-rose-700">
                          ❌ Stacking 12+ third-party apps
                        </span>{" "}
                        with expensive monthly fees and duplicate tracking scripts.
                      </>
                    ),
                  },
                  {
                    included: (
                      <>
                        <span className="font-semibold text-emerald-800">
                          ✅ Aligning the entire storefront architecture
                        </span>{" "}
                        with your business goals and conversion funnel.
                      </>
                    ),
                    excluded: (
                      <>
                        <span className="font-semibold text-rose-700">
                          ❌ Forcing your product catalog
                        </span>{" "}
                        into rigid layout boxes that were designed for a different industry.
                      </>
                    ),
                  },
                ]}
              />

              <p>
                For instance, an apparel store requires interactive size charts,
                fabric close-up zoom states, color swatch variant pickers, and
                model fit notes. In contrast, an industrial machinery
                distributor requires volume discount tables, PDF technical
                specification downloads, and direct quote request buttons.
                Custom theme development gives each product type the exact
                layout it needs to convert visitors into customers.
              </p>

              <p>
                When paired with broader{" "}
                <Link
                  href="/services/custom-shopify-development"
                  className="text-[var(--sf-primary)] font-bold underline hover:text-[var(--sf-primary-deep)]"
                >
                  custom shopify development
                </Link>
                , a custom theme gives you a fast store that you can
                manage effortlessly without depending on developers for daily
                content updates.
              </p>
            </div>
          </section>

          {/* SECTION 2: CUSTOM THEMES VS PRE-MADE THEMES (Content Left, Image Right) */}
          <section
            id="custom-vs-marketplace"
            className="mb-16 pt-8 border-t border-[var(--sf-ink)]/15"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7">
                <h2
                  className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Custom Shopify themes vs pre-made marketplace themes
                </h2>

                <div className="space-y-4 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
                  <p>
                    Marketplace themes on the Shopify Theme Store or ThemeForest
                    are built to appeal to as many buyers as possible. A single
                    theme tries to cater to fashion boutiques, electronics
                    stores, furniture retailers, and food brands all at once.
                  </p>

                  <p>
                    To achieve that universal appeal, pre-made themes come
                    bloated with hundreds of unused configuration toggles, heavy
                    JavaScript libraries, and redundant stylesheets. This excess
                    code slows down mobile load times and frustrates shoppers.
                  </p>

                  <p>
                    A custom-built theme solves this problem by including only
                    the code your store actually needs:
                  </p>

                  <ul className="space-y-3 my-4 pl-4 border-l-2 border-[var(--sf-primary)] text-base sm:text-lg text-[var(--sf-ink)]">
                    <li>
                      <strong>Tailored Product Layouts:</strong> Design product
                      pages around how your customers make buying decisions,
                      including tiered bundle options, ingredient accordions,
                      and comparison tables.
                    </li>
                    <li>
                      <strong>Sub-2-Second Mobile Load Times:</strong> By
                      stripping out heavy third-party framework dependencies,
                      custom Liquid themes load rapidly on 4G and 5G mobile
                      connections.
                    </li>
                    <li>
                      <strong>Fewer Paid App Subscriptions:</strong> Build
                      slide-out carts, sticky add-to-cart bars, announcement
                      carousels, and size guides directly into the theme, saving
                      thousands in monthly app fees.
                    </li>
                    <li>
                      <strong>Clean Online Store 2.0 Architecture:</strong>{" "}
                      Manage every section, header, and footer directly in the
                      Shopify visual editor with full drag-and-drop flexibility.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <div className="border-2 border-[var(--sf-ink)] bg-white shadow-[4px_4px_0_var(--sf-ink)] overflow-hidden">
                  <Image
                    src="/portfolio/maison-luxe/covers/cover.png"
                    alt="Custom Shopify Theme Development - Maison Luxe Storefront"
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

          {/* SECTION 3: CONVERSION FEATURES (Image Left, Content Right) */}
          <section
            id="custom-theme-features"
            className="mb-16 pt-8 border-t border-[var(--sf-ink)]/15"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 order-2 lg:order-1 lg:sticky lg:top-24">
                <div className="border-2 border-[var(--sf-ink)] bg-white shadow-[4px_4px_0_var(--sf-ink)] overflow-hidden">
                  <Image
                    src="/portfolio/flexform-athletics/covers/cover.png"
                    alt="Custom Shopify Theme Development - FlexForm Athletics Activewear Storefront"
                    width={800}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                  <div
                    className="p-3 border-t-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] text-xs text-[var(--sf-ink-mute)] font-mono"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    FlexForm Athletics: Custom activewear theme featuring visual
                    category strips, lookbook bundles, and instant drawer cart.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <h2
                  className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Custom Shopify theme development built for conversion
                </h2>

                <div className="space-y-4 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
                  <p>
                    Effective eCommerce design focuses on removing hesitation
                    and making checkout effortless. When we engineer a{" "}
                    <span className="font-semibold text-[var(--sf-ink)]">
                      custom shopify theme development
                    </span>{" "}
                    project, conversion features are built directly into the
                    Liquid template structure:
                  </p>

                  <ul className="space-y-3 my-4 pl-4 border-l-2 border-[var(--sf-primary)] text-base sm:text-lg text-[var(--sf-ink)]">
                    <li>
                      <strong>Interactive Drawer Carts:</strong> Slide-out AJAX
                      carts with dynamic free-shipping progress bars, 1-click
                      product cross-sells, discount code fields, and instant
                      checkout buttons.
                    </li>
                    <li>
                      <strong>Instant AJAX Collection Filtering:</strong>{" "}
                      Shoppers can filter products by size, color, price range,
                      and availability without full page reloads, improving
                      browsing efficiency.
                    </li>
                    <li>
                      <strong>Custom Bundle &amp; Box Builders:</strong>{" "}
                      Multi-step bundle builders that allow customers to select
                      items, calculate bundle discounts automatically, and add
                      everything to the cart together.
                    </li>
                    <li>
                      <strong>Shop the Look &amp; Lookbook Modules:</strong>{" "}
                      Tagged lifestyle photo grids where shoppers click
                      hot-spots on an image to view product details and add
                      items to cart instantly.
                    </li>
                    <li>
                      <strong>Structured Metafields &amp; Metaobjects:</strong>{" "}
                      Custom admin fields for size guides, materials, care
                      instructions, and customer FAQs that render cleanly
                      without custom code.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: WEB DEVELOPMENT SERVICES & CORE WEB VITALS */}
          <section
            id="website-development-services"
            className="mb-16 pt-8 border-t border-[var(--sf-ink)]/15 max-w-5xl"
          >
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Shopify website development services focused on Core Web Vitals
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
              <p>
                Mobile page speed is one of the most critical factors
                influencing Google organic rankings and ad conversion rates. If
                your store takes longer than 3 seconds to load on mobile, up to
                40% of potential buyers leave before seeing your products.
              </p>

              <p>
                Our{" "}
                <span className="font-semibold text-[var(--sf-ink)]">
                  shopify website development services
                </span>{" "}
                are built around clean code practices. We write modern semantic
                HTML, optimized CSS, and native JavaScript without relying on
                heavy external libraries like jQuery. We also avoid slow visual
                page builders (like PageFly or Shogun) that inject excess script
                payloads into your storefront.
              </p>

              <p>
                When you partner with our{" "}
                <span className="font-semibold text-[var(--sf-ink)]">
                  shopify website developers
                </span>
                , you get direct technical communication with the person writing
                your Liquid code. We audit every third-party script, convert
                images to modern WebP formats, implement lazy-loading, and tune
                Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS)
                so your store consistently scores in the 90s on Google PageSpeed
                Insights.
              </p>
            </div>
          </section>

          {/* SECTION 5: THE CUSTOM THEME DEVELOPMENT PROCESS */}
          <section
            id="development-process"
            className="mb-16 pt-8 border-t border-[var(--sf-ink)]/15 max-w-5xl"
          >
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              The custom Shopify theme development process
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-8">
              <p>
                A successful custom theme project follows a structured engineering workflow. From initial planning to post-launch training, every stage is designed to ensure clean code, high speed, and effortless merchant control.
              </p>

              <div className="space-y-8 my-6">
                {/* Phase 1 */}
                <div className="pl-4 sm:pl-6 border-l-2 border-[var(--sf-primary)]">
                  <div
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--sf-primary)] mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Phase I
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[var(--sf-ink)] mb-3"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    Discovery and Strategy
                  </h3>
                  <p className="text-base text-[var(--sf-ink-soft)] leading-relaxed mb-4">
                    We start by analyzing how your business runs and what your buyers need before writing a single line of code.
                  </p>
                  <ul className="space-y-2 text-base text-[var(--sf-ink)]">
                    <li>
                      <strong>Goal Clarification:</strong> We define your core business targets, whether that is improving mobile conversion, reducing cart drop-off, or supporting catalog expansion.
                    </li>
                    <li>
                      <strong>Audience Analysis:</strong> We analyze how your customers browse, their mobile screen habits, and common points of hesitation during checkout.
                    </li>
                    <li>
                      <strong>Competitive Audit:</strong> We review competitor stores in your niche to identify UX shortcomings and design opportunities to make your brand stand out.
                    </li>
                    <li>
                      <strong>Technical Requirements Gathering:</strong> We map out your product variant structures, custom data fields, required third-party apps, and backend inventory workflows.
                    </li>
                  </ul>
                </div>

                {/* Phase 2 */}
                <div className="pl-4 sm:pl-6 border-l-2 border-[var(--sf-primary)]">
                  <div
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--sf-primary)] mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Phase II
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[var(--sf-ink)] mb-3"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    UI/UX Design
                  </h3>
                  <p className="text-base text-[var(--sf-ink-soft)] leading-relaxed mb-4">
                    We create intuitive storefront layouts focused on clear product presentation, fast navigation, and friction-free purchasing.
                  </p>
                  <ul className="space-y-2 text-base text-[var(--sf-ink)]">
                    <li>
                      <strong>Wireframing:</strong> We establish page layout foundations for your homepage, collection grids, product detail pages, and slide-out carts.
                    </li>
                    <li>
                      <strong>Mockups and Prototypes:</strong> We build pixel-precise visual designs in Figma showing typography scales, button states, spacing, and micro-interactions.
                    </li>
                    <li>
                      <strong>User Flow Mapping:</strong> We chart the path customers take from discovery to product selection, drawer cart interaction, and checkout.
                    </li>
                    <li>
                      <strong>Content Structure Guidance:</strong> We advise on image dimensions, lifestyle photography layouts, video embeds, and product copy formatting for maximum visual clarity.
                    </li>
                    <li>
                      <strong>Stakeholder Review Cycles:</strong> We review Figma prototypes together, incorporating your direct feedback before frontend implementation starts.
                    </li>
                  </ul>
                </div>

                {/* Phase 3 */}
                <div className="pl-4 sm:pl-6 border-l-2 border-[var(--sf-primary)]">
                  <div
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--sf-primary)] mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Phase III
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[var(--sf-ink)] mb-3"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    Development and Implementation
                  </h3>
                  <p className="text-base text-[var(--sf-ink-soft)] leading-relaxed mb-4">
                    We code your theme from scratch using modern Liquid templating, clean CSS, and lightweight JavaScript.
                  </p>
                  <ul className="space-y-2 text-base text-[var(--sf-ink)]">
                    <li>
                      <strong>Local Environment Setup:</strong> We configure a modern Shopify CLI development workflow with Git version control for transparent tracking.
                    </li>
                    <li>
                      <strong>Theme Scaffolding:</strong> We build a clean theme directory structure with organized Liquid templates, sections, snippets, and assets.
                    </li>
                    <li>
                      <strong>Template and Section Development:</strong> We build native Online Store 2.0 sections and blocks so every layout element is easily customizable in the theme customizer.
                    </li>
                    <li>
                      <strong>Front-End and Liquid Coding:</strong> We write clean semantic HTML5, responsive CSS, and native JavaScript for fast interactive features without heavy dependencies.
                    </li>
                    <li>
                      <strong>Integration Development:</strong> We connect your third-party tools, ERP systems, email providers, and review platforms using Shopify APIs and webhooks.
                    </li>
                    <li>
                      <strong>Progressive Client Review:</strong> We share live staging preview links at each milestone so you can test real store features throughout development.
                    </li>
                  </ul>
                </div>

                {/* Phase 4 */}
                <div className="pl-4 sm:pl-6 border-l-2 border-[var(--sf-primary)]">
                  <div
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--sf-primary)] mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Phase IV
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[var(--sf-ink)] mb-3"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    Quality Assurance and Testing
                  </h3>
                  <p className="text-base text-[var(--sf-ink-soft)] leading-relaxed mb-4">
                    Every section, button, and script is thoroughly tested across real devices and screen resolutions.
                  </p>
                  <ul className="space-y-2 text-base text-[var(--sf-ink)]">
                    <li>
                      <strong>Functional Testing:</strong> We verify all interactive elements, such as variant pickers, multi-tier bundle calculations, search bars, and drawer carts.
                    </li>
                    <li>
                      <strong>Performance Testing:</strong> We run Google PageSpeed Insights and WebPageTest audits to guarantee fast load times and zero layout shifts.
                    </li>
                    <li>
                      <strong>Cross-Browser and Responsive Testing:</strong> We test responsiveness across iPhone, Android, tablet, and desktop viewports on Chrome, Safari, Firefox, and Edge.
                    </li>
                    <li>
                      <strong>Usability Testing:</strong> We walk through the end-to-end shopping experience to ensure buttons are easy to tap and navigation is effortless.
                    </li>
                  </ul>
                </div>

                {/* Phase 5 */}
                <div className="pl-4 sm:pl-6 border-l-2 border-[var(--sf-primary)]">
                  <div
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--sf-primary)] mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Phase V
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[var(--sf-ink)] mb-3"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    Launch and Deployment
                  </h3>
                  <p className="text-base text-[var(--sf-ink-soft)] leading-relaxed mb-4">
                    We push your new theme live smoothly with zero downtime, full SEO protection, and complete admin handoff.
                  </p>
                  <ul className="space-y-2 text-base text-[var(--sf-ink)]">
                    <li>
                      <strong>Theme Packaging and Migration:</strong> We publish the tested theme to your live store, connecting all menus, collections, and product metafields.
                    </li>
                    <li>
                      <strong>Technical SEO Implementation:</strong> We verify structured data schema, canonical links, Open Graph tags, and set up 301 redirects to protect organic search traffic.
                    </li>
                    <li>
                      <strong>Performance Optimization:</strong> We perform live asset minification, cache checks, and script tag audits on production servers.
                    </li>
                    <li>
                      <strong>Handoff and Training:</strong> We walk your team through the Shopify admin editor, showing you how to add sections, update banners, and edit text without touching code.
                    </li>
                  </ul>
                </div>
              </div>
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
              Relevant Work: Custom Shopify themes in action
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-8">
              <p>
                Here are a few real custom Shopify themes and storefront
                features we have built:
              </p>

              <div className="space-y-6 my-6">
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

                <div>
                  <h3
                    className="text-xl font-bold text-[var(--sf-ink)] mb-1"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    <Link
                      href="/work/flexform-athletics"
                      className="hover:text-[var(--sf-primary)] transition-colors underline"
                    >
                      FlexForm Athletics: Activewear &amp; Athleisure Storefront
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--sf-ink-soft)]">
                    A women's activewear storefront with 9-category visual story
                    strips, instant size filtering, and product page lookbook
                    bundles.
                  </p>
                </div>

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
              </div>
            </div>
          </section>

          {/* SECTION 6: FAQ */}
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

          {/* SECTION 7: FINAL CTA */}
          <section
            id="cta"
            className="pt-12 border-t-2 border-[var(--sf-ink)] text-center"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--sf-ink)] mb-4 max-w-2xl mx-auto"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Ready to build a custom Shopify theme?
            </h2>

            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] max-w-xl mx-auto mb-8 leading-relaxed">
              Tell us about your brand and catalog. We will review your
              requirements, recommend the cleanest Liquid architecture, and
              share a clear scope.
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
