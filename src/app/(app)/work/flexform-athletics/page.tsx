import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Flame,
  ShieldCheck,
  Activity,
  Boxes,
  Truck,
  RotateCcw,
  Sparkles,
  ShoppingBag,
  Tag,
  Scissors,
  CheckCircle2,
  Sliders,
  Layers,
  Heart,
  Eye,
  Percent,
} from "lucide-react";

export const metadata: Metadata = {
  title: "FlexForm Athletics — Store Case Study",
  description:
    "Case study: Custom Shopify activewear theme for FlexForm Athletics. Featuring visual category discovery, fit assurance, and in-drawer upsells.",
  alternates: {
    canonical: "/work/flexform-athletics",
  },
  openGraph: {
    title: "FlexForm Athletics — Store Case Study | ScaleFront",
    description:
      "Case study: Custom Shopify activewear theme for FlexForm Athletics. Featuring visual category discovery, fit assurance, and in-drawer upsells.",
    url: "https://www.scalefront.io/work/flexform-athletics",
    siteName: "ScaleFront",
    type: "article",
    images: [
      {
        url: "https://www.scalefront.io/portfolio/flexform-athletics/covers/cover.png",
        width: 1200,
        height: 675,
        alt: "FlexForm Athletics custom Shopify activewear storefront case study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlexForm Athletics — Store Case Study | ScaleFront",
    description:
      "Custom Shopify activewear storefront: visual category discovery, fit assurance modules, and in-drawer upsells.",
    images: [
      "https://www.scalefront.io/portfolio/flexform-athletics/covers/cover.png",
    ],
  },
};

export default function FlexFormAthleticsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline:
      "FlexForm Athletics — Custom Shopify Activewear Storefront Case Study",
    description:
      "An architectural case study analyzing custom Shopify theme development for women's activewear and athleisure, featuring visual category discovery, fit and fabric assurance modules, 1-click coupon clipping, and slide-out cart upsells.",
    image:
      "https://scalefront.io/portfolio/flexform-athletics/covers/cover.png",
    author: {
      "@type": "Organization",
      name: "ScaleFront",
      url: "https://scalefront.io",
    },
    publisher: {
      "@type": "Organization",
      name: "ScaleFront",
      logo: {
        "@type": "ImageObject",
        url: "https://scalefront.io/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://scalefront.io/work/flexform-athletics",
    },
    about: [
      {
        "@type": "Thing",
        name: "Shopify Theme Development",
      },
      {
        "@type": "Thing",
        name: "Apparel eCommerce CRO",
      },
      {
        "@type": "Thing",
        name: "Activewear Storefront Architecture",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen bg-[var(--sf-paper)] text-[var(--sf-ink)]">
        {/* BREADCRUMB STRIP */}
        <div className="border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Link
                href="/work"
                className="text-[var(--sf-ink-mute)] hover:text-[var(--sf-primary)] transition-colors"
              >
                PORTFOLIO
              </Link>
              <span className="text-[var(--sf-ink-mute)]">/</span>
              <span className="font-bold text-[var(--sf-ink)] uppercase">
                FLEXFORM ATHLETICS
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-full border border-[var(--sf-ink)] bg-black text-white text-[11px] font-bold">
                CONCEPT CASE STUDY
              </span>
              <span className="text-[var(--sf-ink-mute)] hidden sm:inline">•</span>
              <span className="text-[var(--sf-ink-mute)] hidden sm:inline">
                WOMEN&apos;S ACTIVEWEAR & CRO ARCHITECTURE
              </span>
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="pt-12 pb-16 border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 border-2 border-[var(--sf-ink)] bg-[var(--sf-primary-soft)] text-[var(--sf-primary-deep)] text-xs font-mono font-bold shadow-[2px_2px_0_var(--sf-ink)] mb-6">
                <Flame className="w-3.5 h-3.5 text-[var(--sf-primary)]" />
                <span>04 — ATHLEISURE ECOMMERCE & FIT ASSURANCE ARCHITECTURE</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight text-[var(--sf-ink)] leading-[0.98] mb-6">
                FlexForm Athletics
              </h1>

              <p className="text-lg sm:text-2xl text-[var(--sf-ink-soft)] font-sans leading-snug mb-8 font-medium">
                A modern Shopify activewear storefront engineered for visual category discovery, fit confidence, and high-engagement cart upsells.
              </p>

              {/* SPECIFICATION CHIPS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <div className="text-[var(--sf-ink-mute)] uppercase text-[10px] mb-1">
                    Vertical
                  </div>
                  <div className="font-bold text-[var(--sf-ink)]">
                    Women&apos;s Activewear & Athleisure
                  </div>
                </div>

                <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <div className="text-[var(--sf-ink-mute)] uppercase text-[10px] mb-1">
                    Theme Engine
                  </div>
                  <div className="font-bold text-[var(--sf-ink)]">
                    Custom Liquid 2.0 & Ajax API
                  </div>
                </div>

                <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <div className="text-[var(--sf-ink-mute)] uppercase text-[10px] mb-1">
                    Key Mechanics
                  </div>
                  <div className="font-bold text-[var(--sf-ink)]">
                    Fit Gauge & 1-Click Coupons
                  </div>
                </div>

                <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <div className="text-[var(--sf-ink-mute)] uppercase text-[10px] mb-1">
                    Cart Architecture
                  </div>
                  <div className="font-bold text-[var(--sf-ink)]">
                    Slide-Out Drawer with Upsells
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HERO SHOWCASE IMAGE */}
        <section className="py-12 border-b-2 border-[var(--sf-ink)] bg-[#0d1e24]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-2 border-[var(--sf-ink)] shadow-[8px_8px_0_#181310] overflow-hidden bg-white">
              <Image
                src="/portfolio/flexform-athletics/covers/cover.png"
                alt="FlexForm Athletics custom Shopify activewear storefront cover"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-neutral-300">
              <span>STOREFRONT PREVIEW: VISUAL CATEGORY STRIP & HERO CAMPAIGN</span>
              <span>CLEAN EDITORIAL AESTHETIC • OCEAN TEAL ACCENTS • HIGH-CONTRAST PHOTOGRAPHY</span>
            </div>
          </div>
        </section>

        {/* PART 01: THE ACTIVEWEAR FIT CONFIDENCE CHALLENGE */}
        <section className="py-16 border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="sticky top-8">
                  <div className="font-mono text-xs text-[var(--sf-primary)] uppercase tracking-widest font-bold mb-2">
                    PART 01 • STRATEGIC CONTEXT
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--sf-ink)] tracking-tight mb-4">
                    The Fit Confidence & Conversion Challenge
                  </h2>
                  <p className="text-sm font-sans text-[var(--sf-ink-soft)] leading-relaxed">
                    Online activewear buyers hesitate at two distinct friction points: sizing uncertainty and fabric performance doubts.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6 text-base font-sans text-[var(--sf-ink-soft)] leading-relaxed">
                <p>
                  In women&apos;s activewear eCommerce, return rates frequently exceed 30% when buyers cannot verify how a fabric stretches, whether leggings are genuinely squat-proof, or how a sports bra fits across different body proportions. Standard product pages bury essential sizing notes in collapsed text blocks, leading to pre-purchase hesitation and abandoned carts.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                  <div className="p-5 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[4px_4px_0_var(--sf-ink)]">
                    <div className="font-mono text-xs font-bold text-[var(--sf-primary)] uppercase mb-2 flex items-center gap-1.5">
                      <Sliders className="w-4 h-4" /> 01. Visual Fit & Fabric Assurance
                    </div>
                    <p className="text-sm text-[var(--sf-ink-soft)]">
                      Replacing ambiguous size charts with visual fit gauges, stretch ratings, and clear model body measurements directly inside the primary buy box.
                    </p>
                  </div>

                  <div className="p-5 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[4px_4px_0_var(--sf-ink)]">
                    <div className="font-mono text-xs font-bold text-[var(--sf-primary)] uppercase mb-2 flex items-center gap-1.5">
                      <Percent className="w-4 h-4" /> 02. Frictionless Coupon Discovery
                    </div>
                    <p className="text-sm text-[var(--sf-ink-soft)]">
                      Embedding 1-click clipboard coupon drawers directly on the PDP to prevent shoppers from leaving the store to search third-party discount sites.
                    </p>
                  </div>
                </div>

                <p>
                  We built FlexForm Athletics to demonstrate how thoughtful Liquid architecture can pair <strong>editorial brand aesthetics</strong> with <strong>high-converting apparel reassurance modules</strong> and <strong>slide-out drawer upsells</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PART 02: HOMEPAGE ARCHITECTURE & VISUAL DISCOVERY */}
        <section className="py-16 border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="font-mono text-xs text-[var(--sf-primary)] uppercase tracking-widest font-bold mb-2">
              PART 02 • HOMEPAGE ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--sf-ink)] tracking-tight mb-6">
              Visual Discovery & Lifestyle Pathways
            </h2>
            <p className="text-base text-[var(--sf-ink-soft)] max-w-3xl mb-10 leading-relaxed">
              The FlexForm homepage prioritizes visual exploration. A 9-item thumbnail story strip and tabbed category carousel allow shoppers to navigate by look, fit, and workout intent.
            </p>

            {/* SCREENSHOT 1: HERO & CATEGORY STRIP */}
            <div className="border-2 border-[var(--sf-ink)] bg-white shadow-[6px_6px_0_var(--sf-ink)] overflow-hidden mb-8">
              <Image
                src="/portfolio/flexform-athletics/home/1.png"
                alt="FlexForm Athletics homepage hero slider and 9-category thumbnail story strip"
                width={1600}
                height={900}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 font-mono text-xs">
              <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                <div className="font-bold text-[var(--sf-ink)] uppercase mb-1">
                  01. 9-Story Visual Category Strip
                </div>
                <p className="text-[var(--sf-ink-soft)] text-[11px] leading-relaxed font-sans">
                  Circular and square image thumbnails positioned directly under the header for instantaneous mobile category navigation.
                </p>
              </div>

              <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                <div className="font-bold text-[var(--sf-ink)] uppercase mb-1">
                  02. Campaign Promo Slider
                </div>
                <p className="text-[var(--sf-ink-soft)] text-[11px] leading-relaxed font-sans">
                  High-energy seasonal promotional banner with direct CTA routing to limited-time collections.
                </p>
              </div>

              <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                <div className="font-bold text-[var(--sf-ink)] uppercase mb-1">
                  03. Lifestyle Collection Tiles
                </div>
                <p className="text-[var(--sf-ink-soft)] text-[11px] leading-relaxed font-sans">
                  Oversized typography tiles segmenting products into <em>Co-Ords</em>, <em>All-Day Wear</em>, and <em>Travel Wear</em>.
                </p>
              </div>
            </div>

            {/* SCREENSHOT 2: TABBED CATEGORY SHOWCASE */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-3">
                <div className="border-2 border-[var(--sf-ink)] bg-white shadow-[6px_6px_0_var(--sf-ink)] overflow-hidden">
                  <Image
                    src="/portfolio/flexform-athletics/home/2.png"
                    alt="FlexForm Athletics tabbed category showcase and editorial model grid"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <h3 className="font-serif font-bold text-base text-[var(--sf-ink)] mb-1">
                    Tabbed &quot;Shop by Category&quot; Grid
                  </h3>
                  <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
                    Interactive filter pills (<em>Tops</em>, <em>Sports Bras</em>, <em>Best Sellers</em>, <em>Leggings</em>) dynamically switching product grids with hover quick-add triggers.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="border-2 border-[var(--sf-ink)] bg-white shadow-[6px_6px_0_var(--sf-ink)] overflow-hidden">
                  <Image
                    src="/portfolio/flexform-athletics/home/3.png"
                    alt="FlexForm Athletics UGC Instagram lookbook and customer feedback carousel"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <h3 className="font-serif font-bold text-base text-[var(--sf-ink)] mb-1">
                    Community &amp; Lifestyle Lookbook
                  </h3>
                  <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
                    Customer review spotlight paired with a 12-image UGC lifestyle gallery showcasing real styling and gym workouts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PART 03: COLLECTION ARCHIVE & FACETED FILTERING */}
        <section className="py-16 border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="font-mono text-xs text-[var(--sf-primary)] uppercase tracking-widest font-bold mb-2">
                  PART 03 • CATALOG ARCHITECTURE
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--sf-ink)] tracking-tight mb-4">
                  Collection Architecture &amp; Faceted Filtering
                </h2>
                <p className="text-sm font-sans text-[var(--sf-ink-soft)] leading-relaxed mb-6">
                  Catalog pages feature panoramic collection hero banners, real-time availability and price filters, and responsive 4-column product cards with instant quick-add bag triggers.
                </p>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                    <strong className="text-[var(--sf-ink)]">Panoramic Category Header:</strong>
                    <div className="text-[var(--sf-ink-soft)] text-[11px] mt-0.5 font-sans">
                      Sky-blue gradient banner establishing collection identity and seasonal mood.
                    </div>
                  </div>

                  <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                    <strong className="text-[var(--sf-ink)]">Faceted Dropdown Controls:</strong>
                    <div className="text-[var(--sf-ink-soft)] text-[11px] mt-0.5 font-sans">
                      Filter by availability, price range, and sort order without page reloads.
                    </div>
                  </div>

                  <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                    <strong className="text-[var(--sf-ink)]">Comfort Guarantee Badges:</strong>
                    <div className="text-[var(--sf-ink-soft)] text-[11px] mt-0.5 font-sans">
                      Visual tags highlighting <em>&quot;Tested for Comfort&quot;</em> and promotional discount percentages.
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="border-2 border-[var(--sf-ink)] bg-white shadow-[8px_8px_0_var(--sf-ink)] overflow-hidden">
                  <Image
                    src="/portfolio/flexform-athletics/collection/1.png"
                    alt="FlexForm Athletics collection archive page with Outerwear and Layers banner and filters"
                    width={1400}
                    height={900}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-2 text-right font-mono text-[11px] text-[var(--sf-ink-mute)]">
                  FIG 3.1 • COLLECTION ARCHIVE &amp; FACETED PRODUCT GRID
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PART 04: HIGH-CONVERTING PRODUCT DETAIL PAGES */}
        <section className="py-16 border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="font-mono text-xs text-[var(--sf-primary)] uppercase tracking-widest font-bold mb-2">
              PART 04 • PDP ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--sf-ink)] tracking-tight mb-6">
              Fit Assurance &amp; Conversion Modules
            </h2>
            <p className="text-base text-[var(--sf-ink-soft)] max-w-3xl mb-10 leading-relaxed">
              The FlexForm product page solves apparel sizing and fabric doubts above the fold, featuring 4 core fabric badges, an interactive coupon drawer, visual fit gauges, and performance guarantees.
            </p>

            {/* SCREENSHOT 1: PDP BUY BOX & COUPONS */}
            <div className="border-2 border-[var(--sf-ink)] bg-white shadow-[6px_6px_0_var(--sf-ink)] overflow-hidden mb-8">
              <Image
                src="/portfolio/flexform-athletics/product/1.png"
                alt="FlexForm Athletics PDP with fabric badges, coupon drawer, and fit gauge"
                width={1600}
                height={900}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 font-mono text-xs">
              <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                <div className="font-bold text-[var(--sf-ink)] uppercase mb-1">
                  01. Fabric Attribute Badges
                </div>
                <p className="text-[var(--sf-ink-soft)] text-[11px] leading-relaxed font-sans">
                  Four quick-scan visual icons: <em>Comfort</em>, <em>Breathable</em>, <em>Cotton</em>, and <em>Super Soft</em> confirming tactile quality.
                </p>
              </div>

              <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                <div className="font-bold text-[var(--sf-ink)] uppercase mb-1">
                  02. 1-Click Coupon Drawer
                </div>
                <p className="text-[var(--sf-ink-soft)] text-[11px] leading-relaxed font-sans">
                  Pre-configured discount cards (<code>GETACTIVE</code>, <code>FLEXSET</code>, <code>FREESHIP</code>) with instant copy-to-clipboard buttons.
                </p>
              </div>

              <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                <div className="font-bold text-[var(--sf-ink)] uppercase mb-1">
                  03. Interactive Fit Size Gauge
                </div>
                <p className="text-[var(--sf-ink-soft)] text-[11px] leading-relaxed font-sans">
                  Visual spectrum slider indicating whether an item runs small, true to size, or large alongside exact model dimensions.
                </p>
              </div>
            </div>

            {/* SCREENSHOT PAIR: PERFORMANCE GUARANTEES & REVIEWS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="border-2 border-[var(--sf-ink)] bg-white shadow-[6px_6px_0_var(--sf-ink)] overflow-hidden">
                  <Image
                    src="/portfolio/flexform-athletics/product/2.png"
                    alt="FlexForm Athletics performance guarantee icons, activity bar, and FAQs"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <h3 className="font-serif font-bold text-base text-[var(--sf-ink)] mb-1">
                    4 Performance Guarantees &amp; Activity Bar
                  </h3>
                  <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
                    Addressing activewear concerns with explicit badges: <em>No Camel Toe Show</em>, <em>Anti-Slip</em>, <em>Squat Proof</em>, and <em>4-Way Stretch</em>.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="border-2 border-[var(--sf-ink)] bg-white shadow-[6px_6px_0_var(--sf-ink)] overflow-hidden">
                  <Image
                    src="/portfolio/flexform-athletics/product/3.png"
                    alt="FlexForm Athletics cross-sell product grid and customer reviews breakdown"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <h3 className="font-serif font-bold text-base text-[var(--sf-ink)] mb-1">
                    Complementary Cross-Sells &amp; Reviews
                  </h3>
                  <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
                    &quot;You may also like&quot; 4-item outfit builder grid paired with verified customer review distribution breakdowns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PART 05: SLIDE-OUT DRAWER CART & IN-CART UPSELLS */}
        <section className="py-16 border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="font-mono text-xs text-[var(--sf-primary)] uppercase tracking-widest font-bold mb-2">
                  PART 05 • CHECKOUT FLOW
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--sf-ink)] tracking-tight mb-4">
                  Slide-Out Drawer Cart &amp; In-Cart Upsells
                </h2>
                <p className="text-sm font-sans text-[var(--sf-ink-soft)] leading-relaxed mb-6">
                  To keep shoppers immersed in the catalog, cart interactions occur inside a lightweight slide-out drawer that displays selected sizes, quantities, and high-intent accessory upsells.
                </p>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                    <strong className="text-[var(--sf-ink)]">Zero Page Disruption:</strong>
                    <div className="text-[var(--sf-ink-soft)] text-[11px] mt-0.5 font-sans">
                      Shoppers can add items, modify sizes, and explore complementary products without full-page reloads.
                    </div>
                  </div>

                  <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                    <strong className="text-[var(--sf-ink)]">In-Drawer &quot;You May Also Like&quot; Carousel:</strong>
                    <div className="text-[var(--sf-ink-soft)] text-[11px] mt-0.5 font-sans">
                      Horizontal carousel offering instant 1-click accessory additions directly above the checkout CTA.
                    </div>
                  </div>

                  <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                    <strong className="text-[var(--sf-ink)]">Native Ajax Cart State:</strong>
                    <div className="text-[var(--sf-ink-soft)] text-[11px] mt-0.5 font-sans">
                      Synchronized line-item quantities and estimated totals powered natively by Shopify Ajax endpoints.
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="border-2 border-[var(--sf-ink)] bg-white shadow-[8px_8px_0_var(--sf-ink)] overflow-hidden">
                  <Image
                    src="/portfolio/flexform-athletics/cart/1.png"
                    alt="FlexForm Athletics slide out drawer cart with line items and in-cart upsells"
                    width={1400}
                    height={900}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-2 text-right font-mono text-[11px] text-[var(--sf-ink-mute)]">
                  FIG 5.1 • SLIDE-OUT DRAWER CART WITH IN-CART CROSS-SELL SLIDER
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED CASE STUDIES NAVIGATION */}
        <section className="py-16 bg-[var(--sf-paper-sunken)] border-b-2 border-[var(--sf-ink)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[var(--sf-ink)] pb-6 mb-10">
              <div>
                <div className="font-mono text-xs text-[var(--sf-primary)] uppercase tracking-widest font-bold">
                  EXPLORE MORE WORK
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--sf-ink)] mt-1">
                  Related Shopify Architecture Case Studies
                </h3>
              </div>
              <Link
                href="/work"
                className="px-4 py-2 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] hover:bg-white font-mono text-xs uppercase font-bold shadow-[3px_3px_0_var(--sf-ink)] transition-all flex items-center gap-1.5"
              >
                View All Case Studies <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* RECOVRX LINK */}
              <Link
                href="/work/recovrx"
                className="group border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] hover:bg-white p-6 shadow-[5px_5px_0_var(--sf-ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0_var(--sf-ink)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[var(--sf-primary)] uppercase">
                      CASE STUDY 03
                    </span>
                    <span className="font-mono text-[11px] px-2 py-0.5 border border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
                      HIGH-TICKET CRO &amp; RECOVERY
                    </span>
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[var(--sf-ink)] group-hover:text-[var(--sf-primary)] transition-colors mb-2">
                    RecovrX →
                  </h4>
                  <p className="text-sm font-sans text-[var(--sf-ink-soft)] leading-relaxed">
                    Custom dark-mode Shopify storefront featuring diagnostic &quot;Shop by Concern&quot; navigation, 4-item bundling, and a 3-tier milestone drawer cart.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--sf-ink)]/20 flex items-center justify-between font-mono text-xs font-bold text-[var(--sf-ink)]">
                  <span>Explore RecovrX</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[var(--sf-primary)]" />
                </div>
              </Link>

              {/* IRON CRATE LINK */}
              <Link
                href="/work/iron-crate"
                className="group border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] hover:bg-white p-6 shadow-[5px_5px_0_var(--sf-ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0_var(--sf-ink)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[var(--sf-primary)] uppercase">
                      CASE STUDY 02
                    </span>
                    <span className="font-mono text-[11px] px-2 py-0.5 border border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
                      SPORTS NUTRITION &amp; BUNDLE BUILDER
                    </span>
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[var(--sf-ink)] group-hover:text-[var(--sf-primary)] transition-colors mb-2">
                    Iron Crate →
                  </h4>
                  <p className="text-sm font-sans text-[var(--sf-ink-soft)] leading-relaxed">
                    Custom Shopify theme development for sports nutrition, featuring multi-SKU stack builders, clinical dosage PDPs, and tiered-reward cart engineering.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--sf-ink)]/20 flex items-center justify-between font-mono text-xs font-bold text-[var(--sf-ink)]">
                  <span>Explore Iron Crate</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[var(--sf-primary)]" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA STRIP */}
        <section className="py-16 bg-[#181310] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-[var(--sf-primary-soft)] font-bold mb-3">
                CUSTOM ACTIVEWEAR STOREFRONT DEVELOPMENT
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-6 leading-tight">
                Ready to elevate your activewear store with custom Shopify architecture?
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 font-sans mb-8 leading-relaxed">
                We build clean, fast Liquid 2.0 storefronts that reduce return friction, highlight fit confidence, and maximize order value without app bloat.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact-us"
                  className="px-7 py-3.5 border-2 border-white bg-[var(--sf-primary)] hover:bg-[var(--sf-primary-deep)] text-white font-mono text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0_#ffffff] transition-all hover:translate-x-0.5 hover:translate-y-0.5"
                >
                  Discuss Your Project
                </Link>
                <Link
                  href="/services/theme-development"
                  className="px-7 py-3.5 border-2 border-white bg-transparent hover:bg-white hover:text-[var(--sf-ink)] text-white font-mono text-sm font-bold uppercase tracking-wider transition-colors"
                >
                  Explore Theme Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
