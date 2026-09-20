import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  ShoppingBag,
  Truck,
  RotateCcw,
  Sparkles,
  Layers,
  CheckCircle2,
  Sliders,
  Gift,
  Star,
  PackageCheck,
  Grid3X3,
  SlidersHorizontal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Maison Luxe — Jewelry Store Case Study",
  description:
    "Case study: Maison Luxe luxury jewelry storefront. High-ticket custom Shopify theme with visual storytelling, metal selectors, and ring sizing.",
  alternates: {
    canonical: "/work/maison-luxe",
  },
  openGraph: {
    title: "Maison Luxe — Jewelry Store Case Study | ScaleFront",
    description:
      "Case study: Maison Luxe luxury jewelry storefront. High-ticket custom Shopify theme with visual storytelling, metal selectors, and ring sizing.",
    url: "https://www.scalefront.io/work/maison-luxe",
    siteName: "ScaleFront",
    type: "article",
    images: [
      {
        url: "https://www.scalefront.io/portfolio/maison-luxe/covers/cover.png",
        width: 1200,
        height: 675,
        alt: "Maison Luxe custom Scandinavian home decor Shopify storefront case study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Luxe — Jewelry Store Case Study | ScaleFront",
    description:
      "High-ticket custom Shopify theme with visual storytelling, metal selectors, and ring sizing.",
    images: ["https://www.scalefront.io/portfolio/maison-luxe/covers/cover.png"],
  },
};

export default function MaisonLuxePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline:
      "Maison Luxe — Custom Scandinavian Home Decor Shopify Storefront Case Study",
    description:
      "An architectural breakdown of Maison Luxe, exploring custom Shopify theme development for home decor and stoneware, featuring tabbed category browsing, editorial content blocks, in-line PDP cross-sells, and a 3-tier spend milestone drawer cart.",
    image: "https://scalefront.io/portfolio/maison-luxe/covers/cover.png",
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
      "@id": "https://scalefront.io/work/maison-luxe",
    },
    about: [
      {
        "@type": "Thing",
        name: "Shopify Theme Development",
      },
      {
        "@type": "Thing",
        name: "Home Decor eCommerce",
      },
      {
        "@type": "Thing",
        name: "eCommerce Conversion Architecture",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[var(--sf-paper)] text-[var(--sf-ink)] selection:bg-[var(--sf-primary-soft)] selection:text-[var(--sf-ink)]">
        {/* TOP BREADCRUMB & METADATA BAR */}
        <section className="border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Link
                href="/work"
                className="hover:text-[var(--sf-primary)] transition-colors uppercase font-bold"
              >
                Work &amp; Case Studies
              </Link>
              <span className="text-[var(--sf-ink-mute)]">/</span>
              <span className="text-[var(--sf-primary)] font-bold uppercase">
                Maison Luxe
              </span>
            </div>
            <div className="flex items-center gap-3 text-[var(--sf-ink-mute)]">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-[var(--sf-ink)] bg-[var(--sf-paper)] text-[var(--sf-ink)] font-bold">
                STOREFRONT // SCANDINAVIAN HOME DECOR
              </span>
            </div>
          </div>
        </section>

        {/* HERO SECTION */}
        <section className="py-12 sm:py-16 border-b-2 border-[var(--sf-ink)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 border-2 border-[var(--sf-ink)] bg-[var(--sf-primary-soft)] text-[var(--sf-primary-deep)] text-xs font-mono font-bold shadow-[2px_2px_0_var(--sf-ink)] mb-4">
                <span>CASE STUDY: BESPOKE LIQUID 2.0 STOREFRONT</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[var(--sf-ink)] tracking-tight leading-[1.1] mb-5">
                Maison Luxe: Scandinavian Home Decor &amp; Stoneware Storefront
              </h1>
              <p className="text-lg sm:text-xl text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                A custom Shopify theme built for handcrafted home goods, featuring 4-tab category browsing, editorial storytelling blocks, dual PDP checkout actions, and a 3-tier milestone drawer cart.
              </p>
            </div>

            {/* SPECS GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                <div className="text-[11px] font-mono uppercase text-[var(--sf-ink-mute)] mb-1">
                  Niche &amp; Product
                </div>
                <div className="font-serif font-bold text-base sm:text-lg text-[var(--sf-ink)]">
                  Stoneware &amp; Oak Furniture
                </div>
              </div>
              <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                <div className="text-[11px] font-mono uppercase text-[var(--sf-ink-mute)] mb-1">
                  Theme Architecture
                </div>
                <div className="font-serif font-bold text-base sm:text-lg text-[var(--sf-ink)]">
                  Custom Liquid 2.0
                </div>
              </div>
              <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                <div className="text-[11px] font-mono uppercase text-[var(--sf-ink-mute)] mb-1">
                  Average Order Value
                </div>
                <div className="font-serif font-bold text-base sm:text-lg text-[var(--sf-ink)]">
                  3-Tier Spend Cart
                </div>
              </div>
              <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                <div className="text-[11px] font-mono uppercase text-[var(--sf-ink-mute)] mb-1">
                  Scope
                </div>
                <div className="font-serif font-bold text-base sm:text-lg text-[var(--sf-ink)]">
                  Homepage, PDP &amp; Cart
                </div>
              </div>
            </div>

            {/* MAIN COVER IMAGE */}
            <div className="border-2 border-[var(--sf-ink)] bg-white shadow-[6px_6px_0_var(--sf-ink)] overflow-hidden">
              <Image
                src="/portfolio/maison-luxe/covers/cover.png"
                alt="Maison Luxe Scandinavian Home Decor Storefront Overview"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* WHY WE BUILT THIS */}
        <section className="py-12 sm:py-16 border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--sf-primary)] mb-2">
                  The Problem &amp; The Concept
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[var(--sf-ink)] mb-4 leading-tight">
                  Balancing quiet luxury with strong store conversion
                </h2>
                <p className="text-base text-[var(--sf-ink-soft)] font-sans leading-relaxed mb-4">
                  Luxury home decor and furniture stores often struggle with a basic tradeoff. When they add loud sales badges, countdown clocks, and aggressive popups, they break the calm, high-end feel customers expect.
                </p>
                <p className="text-base text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                  When they strip everything away for a clean museum look, average order value drops because customers only buy one item and leave. We built Maison Luxe to test how a quiet, editorial design can drive multi-item orders through clean layout structure alone.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <div className="w-8 h-8 rounded border border-[var(--sf-ink)] bg-[var(--sf-primary-soft)] flex items-center justify-center font-mono font-bold text-sm mb-3">
                    01
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[var(--sf-ink)] mb-2">
                    Tabbed Category Discovery
                  </h3>
                  <p className="text-sm text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                    Shoppers browse 8 key products across 4 categories without jumping between pages or waiting for full collection reloads.
                  </p>
                </div>

                <div className="p-5 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <div className="w-8 h-8 rounded border border-[var(--sf-ink)] bg-[var(--sf-primary-soft)] flex items-center justify-center font-mono font-bold text-sm mb-3">
                    02
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[var(--sf-ink)] mb-2">
                    Asymmetrical Story Blocks
                  </h3>
                  <p className="text-sm text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                    Three color-blocked lifestyle sections explain materials, woodworking, and Portuguese stoneware origins in plain words.
                  </p>
                </div>

                <div className="p-5 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <div className="w-8 h-8 rounded border border-[var(--sf-ink)] bg-[var(--sf-primary-soft)] flex items-center justify-center font-mono font-bold text-sm mb-3">
                    03
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[var(--sf-ink)] mb-2">
                    In-PDP 1-Click Cross-Sells
                  </h3>
                  <p className="text-sm text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                    Matching stoneware bowls and brass holders sit directly below product specs with their own quantity buttons for fast add-ons.
                  </p>
                </div>

                <div className="p-5 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <div className="w-8 h-8 rounded border border-[var(--sf-ink)] bg-[var(--sf-primary-soft)] flex items-center justify-center font-mono font-bold text-sm mb-3">
                    04
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[var(--sf-ink)] mb-2">
                    3-Tier Spend Milestone Cart
                  </h3>
                  <p className="text-sm text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                    A drawer cart progress bar rewards spend at $50 (Free Shipping), $100 (Scented Candle), and $200 (Ambient Table Lamp).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: HOMEPAGE DISCOVERY & 4-TAB PRODUCT MATRIX */}
        <section className="py-14 sm:py-20 border-b-2 border-[var(--sf-ink)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--sf-primary)] mb-2">
                01 // Homepage &amp; Product Discovery
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[var(--sf-ink)] tracking-tight mb-4">
                4-Tab category grid with zero page hops
              </h2>
              <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                Rather than sending users into deep collection page funnels right away, the homepage features a tabbed product grid. Shoppers can switch between <span className="font-semibold text-[var(--sf-ink)]">Home Page</span>, <span className="font-semibold text-[var(--sf-ink)]">Seasonal Edit</span>, <span className="font-semibold text-[var(--sf-ink)]">Home Office</span>, and <span className="font-semibold text-[var(--sf-ink)]">Living Essentials</span> instantly.
              </p>
            </div>

            <div className="border-2 border-[var(--sf-ink)] bg-white shadow-[6px_6px_0_var(--sf-ink)] overflow-hidden mb-8">
              <Image
                src="/portfolio/maison-luxe/home/1.png"
                alt="Maison Luxe Homepage 4-Tab Product Matrix"
                width={1200}
                height={1300}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
                <h3 className="font-serif font-bold text-base text-[var(--sf-ink)] mb-2">
                  Pale Stone Product Cards
                </h3>
                <p className="text-xs sm:text-sm text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                  Each product card uses a subtle sage-tinted background container (<code className="font-mono text-xs">#F4F6EE</code>) to frame ceramics and wood furniture cleanly.
                </p>
              </div>

              <div className="p-5 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
                <h3 className="font-serif font-bold text-base text-[var(--sf-ink)] mb-2">
                  Clean Price Hierarchy
                </h3>
                <p className="text-xs sm:text-sm text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                  Prices are shown clearly in USD without fake strikethrough markups on regular inventory, maintaining brand trust.
                </p>
              </div>

              <div className="p-5 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
                <h3 className="font-serif font-bold text-base text-[var(--sf-ink)] mb-2">
                  Solid Forest Green Actions
                </h3>
                <p className="text-xs sm:text-sm text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                  Full-width buttons provide an unambiguous tap target on both mobile screens and desktop viewports.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: COLLECTIONS & ASYMMETRICAL STORY BLOCKS */}
        <section className="py-14 sm:py-20 border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--sf-primary)] mb-2">
                02 // Collections &amp; Editorial Storytelling
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[var(--sf-ink)] tracking-tight mb-4">
                Color-blocked story sections and collection routing
              </h2>
              <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                We organized the store into 4 primary spaces: Home Office, Seasonal Edit, Bedroom Retreat, and Kitchen &amp; Dining. Below the collection tiles, three zig-zag story sections guide shoppers through materials and craftsmanship.
              </p>
            </div>

            <div className="border-2 border-[var(--sf-ink)] bg-white shadow-[6px_6px_0_var(--sf-ink)] overflow-hidden mb-8">
              <Image
                src="/portfolio/maison-luxe/home/2.png"
                alt="Maison Luxe Shop by Collection and Editorial Content Blocks"
                width={1200}
                height={1700}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-5 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                <div className="text-xs font-mono font-bold text-[#1035E4] uppercase mb-1">
                  Story Block 1 // Cream
                </div>
                <h3 className="font-serif font-bold text-base text-[var(--sf-ink)] mb-2">
                  &quot;Curate your sanctuary with intention&quot;
                </h3>
                <p className="text-xs sm:text-sm text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                  Highlights solid oak desks and timeless furniture geometry with an electric Klein blue action button.
                </p>
              </div>

              <div className="p-5 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                <div className="text-xs font-mono font-bold text-[#0E3820] uppercase mb-1">
                  Story Block 2 // Pistachio
                </div>
                <h3 className="font-serif font-bold text-base text-[var(--sf-ink)] mb-2">
                  &quot;Where function meets stillness&quot;
                </h3>
                <p className="text-xs sm:text-sm text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                  Focuses on soft home goods and rust linen cushions paired with deep forest green typography.
                </p>
              </div>

              <div className="p-5 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                <div className="text-xs font-mono font-bold text-[#601C38] uppercase mb-1">
                  Story Block 3 // Terracotta
                </div>
                <h3 className="font-serif font-bold text-base text-[var(--sf-ink)] mb-2">
                  &quot;This season: The art of less&quot;
                </h3>
                <p className="text-xs sm:text-sm text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                  Showcases charcoal matte stoneware pasta bowls on a warm clay background with plum styling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: COMMUNITY LOOKBOOK & BEST SELLERS */}
        <section className="py-14 sm:py-20 border-b-2 border-[var(--sf-ink)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--sf-primary)] mb-2">
                03 // Community Proof &amp; Limited Drops
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[var(--sf-ink)] tracking-tight mb-4">
                User-generated interior gallery and bestseller releases
              </h2>
              <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                To build social proof without fake review widgets, the homepage includes a community showcase (<code className="font-mono text-sm">@character.home</code>) and a carousel for limited-batch seasonal runs.
              </p>
            </div>

            <div className="border-2 border-[var(--sf-ink)] bg-white shadow-[6px_6px_0_var(--sf-ink)] overflow-hidden">
              <Image
                src="/portfolio/maison-luxe/home/3.png"
                alt="Maison Luxe Community Gallery and Limited Bestsellers"
                width={1200}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* SECTION 4: PRODUCT DETAIL PAGE (PDP) ARCHITECTURE */}
        <section className="py-14 sm:py-20 border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--sf-primary)] mb-2">
                04 // Product Detail Page (PDP)
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[var(--sf-ink)] tracking-tight mb-4">
                Dual checkout buttons, structured specs, and in-line cross-sells
              </h2>
              <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                The product detail page puts craftsmanship details and purchase options right at the top. We built a dual-button checkout flow, structured specifications for care, and an in-line cross-sell module directly above the reviews.
              </p>
            </div>

            {/* PDP SCREENSHOT 1 */}
            <div className="border-2 border-[var(--sf-ink)] bg-white shadow-[6px_6px_0_var(--sf-ink)] overflow-hidden mb-10">
              <Image
                src="/portfolio/maison-luxe/product/1.png"
                alt="Maison Luxe Tidal Stoneware Pasta Bowl PDP Layout"
                width={1200}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* PDP BREAKDOWN DETAILS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                <h3 className="font-serif font-bold text-lg text-[var(--sf-ink)] mb-3 flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[var(--sf-primary)]" />
                  Dual Action Purchase Funnel
                </h3>
                <p className="text-sm text-[var(--sf-ink-soft)] font-sans leading-relaxed mb-3">
                  Two distinct action buttons cater to different buying behaviors:
                </p>
                <ul className="space-y-2 text-sm text-[var(--sf-ink-soft)] font-sans">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--sf-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--sf-ink)]">Add to cart (Cream Button):</strong> Keeps users browsing and triggers the slide-out drawer cart.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--sf-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--sf-ink)]">Buy it now (Forest Green Button):</strong> Sends single-item buyers straight to checkout.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                <h3 className="font-serif font-bold text-lg text-[var(--sf-ink)] mb-3 flex items-center gap-2">
                  <PackageCheck className="w-5 h-5 text-[var(--sf-primary)]" />
                  Structured Stoneware Specifications
                </h3>
                <p className="text-sm text-[var(--sf-ink-soft)] font-sans leading-relaxed mb-3">
                  Organized under tabbed <code className="font-mono text-xs">OVERVIEW</code> and <code className="font-mono text-xs">SPECS &amp; CARE</code>:
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[var(--sf-ink-soft)] font-sans">
                  <li>• <strong>Material:</strong> High-fired Portuguese stoneware with matte charcoal finish</li>
                  <li>• <strong>Dimensions:</strong> Ø 22cm, Height 5cm, Capacity 800ml, Weight 0.7kg</li>
                  <li>• <strong>Care:</strong> Lead-free, stackable, microwave and dishwasher safe</li>
                </ul>
              </div>
            </div>

            {/* PDP SCREENSHOT 2 */}
            <div className="border-2 border-[var(--sf-ink)] bg-white shadow-[6px_6px_0_var(--sf-ink)] overflow-hidden mb-6">
              <Image
                src="/portfolio/maison-luxe/product/2.png"
                alt="Maison Luxe Complementary Products Grid and Customer Reviews"
                width={1200}
                height={1600}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="p-6 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
              <h3 className="font-serif font-bold text-lg text-[var(--sf-ink)] mb-2">
                Faceted Reviews Architecture
              </h3>
              <p className="text-sm text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                Includes a 4.6★ summary across 108 reviews, 5-bar distribution chart, sorting dropdowns (<code className="font-mono text-xs">Sort by: Most recent</code>), and buyer verified badges indicating the exact purchased colorway and room collection.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: 3-TIER SPEND MILESTONE DRAWER CART */}
        <section className="py-14 sm:py-20 border-b-2 border-[var(--sf-ink)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--sf-primary)] mb-2">
                  05 // Cart &amp; Order Value Optimization
                </div>
                <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[var(--sf-ink)] tracking-tight mb-4">
                  Gamified 3-tier spend milestone drawer cart
                </h2>
                <p className="text-base text-[var(--sf-ink-soft)] font-sans leading-relaxed mb-6">
                  Instead of generic discounts that erode margin, the slide-out cart uses a spend milestone bar. Customers see exactly how much more they need to spend to unlock free shipping, a complimentary candle set, or a designer table lamp.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
                    <div className="flex items-center gap-2 font-mono font-bold text-xs text-[var(--sf-primary)] uppercase mb-1">
                      <Truck className="w-4 h-4" />
                      Tier 1 // $50 Spend
                    </div>
                    <div className="font-serif font-bold text-base text-[var(--sf-ink)]">
                      Free Standard Shipping
                    </div>
                    <p className="text-xs text-[var(--sf-ink-soft)] mt-1">
                      Active spend progress bar with real-time countdown.
                    </p>
                  </div>

                  <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
                    <div className="flex items-center gap-2 font-mono font-bold text-xs text-[#0E3820] uppercase mb-1">
                      <Gift className="w-4 h-4" />
                      Tier 2 // $100 Spend
                    </div>
                    <div className="font-serif font-bold text-base text-[var(--sf-ink)]">
                      Free Northern Lights Scented Candle Set
                    </div>
                    <p className="text-xs text-[var(--sf-ink-soft)] mt-1">
                      Adds an artisanal scented candle set as a gift item.
                    </p>
                  </div>

                  <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
                    <div className="flex items-center gap-2 font-mono font-bold text-xs text-[#1035E4] uppercase mb-1">
                      <Sparkles className="w-4 h-4" />
                      Tier 3 // $200 Spend
                    </div>
                    <div className="font-serif font-bold text-base text-[var(--sf-ink)]">
                      Frosted Glass Ambient Table Lamp
                    </div>
                    <p className="text-xs text-[var(--sf-ink-soft)] mt-1">
                      Unlocks a high-ticket decorative lamp for substantial orders.
                    </p>
                  </div>
                </div>

                <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-primary-soft)] text-[var(--sf-ink)] text-xs font-mono font-medium">
                  <strong>1-Click Drawer Cross-Sells:</strong> High-intent accessories sit inside the drawer with direct &quot;ADD&quot; buttons so shoppers can bridge the spend gap without leaving their cart.
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="border-2 border-[var(--sf-ink)] bg-white shadow-[6px_6px_0_var(--sf-ink)] overflow-hidden">
                  <Image
                    src="/portfolio/maison-luxe/cart/1.png"
                    alt="Maison Luxe 3-Tier Spend Milestone Drawer Cart"
                    width={1000}
                    height={1100}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL SUMMARY */}
        <section className="py-14 sm:py-20 border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--sf-primary)] mb-2">
                Engineering Notes
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[var(--sf-ink)] mb-4">
                How we built this in Liquid 2.0
              </h2>
              <p className="text-base text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                Rather than loading bulky apps for tabs, milestone progress bars, and in-cart upsells, we built every feature natively in Shopify theme sections.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                <div className="font-mono text-xs font-bold uppercase text-[var(--sf-primary)] mb-2">
                  01 // Zero App Bloat
                </div>
                <h3 className="font-serif font-bold text-lg text-[var(--sf-ink)] mb-2">
                  Native Milestone Logic
                </h3>
                <p className="text-xs sm:text-sm text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                  The cart progress bar runs on lightweight JavaScript that calculates subtotal thresholds directly from the Shopify Cart API with zero third-party subscription fees.
                </p>
              </div>

              <div className="p-6 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                <div className="font-mono text-xs font-bold uppercase text-[var(--sf-primary)] mb-2">
                  02 // Clean Core Web Vitals
                </div>
                <h3 className="font-serif font-bold text-lg text-[var(--sf-ink)] mb-2">
                  Zero Cumulative Layout Shift
                </h3>
                <p className="text-xs sm:text-sm text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                  All image containers across the homepage, collection cards, and PDP galleries use explicit aspect ratios so the page never jumps while loading.
                </p>
              </div>

              <div className="p-6 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                <div className="font-mono text-xs font-bold uppercase text-[var(--sf-primary)] mb-2">
                  03 // Fast Tab Switching
                </div>
                <h3 className="font-serif font-bold text-lg text-[var(--sf-ink)] mb-2">
                  Instant Category Tabs
                </h3>
                <p className="text-xs sm:text-sm text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                  Products for all 4 categories are rendered in clean Liquid markup with client-side CSS visibility toggles for instant switching without network latency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED SERVICES & BOTTOM CTA */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-[var(--sf-ink)] bg-[var(--sf-primary-soft)] text-[var(--sf-primary-deep)] text-xs font-mono font-bold shadow-[3px_3px_0_var(--sf-ink)] mb-6 uppercase">
              <span>WORK WITH A SOLO SHOPIFY DEVELOPER</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[var(--sf-ink)] tracking-tight mb-5 max-w-2xl mx-auto">
              Need a custom Shopify theme built for your brand?
            </h2>

            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] font-sans max-w-xl mx-auto mb-10 leading-relaxed">
              We design and code clean, fast Shopify stores without agency overhead or unnecessary app bloat. You talk directly to the developer building your site.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <Link
                href="/contact-us"
                className="px-8 py-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-primary)] hover:bg-[var(--sf-primary-deep)] text-white font-mono text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0_var(--sf-ink)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none inline-flex items-center gap-2"
              >
                Discuss a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/theme-development"
                className="px-8 py-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] hover:bg-white text-[var(--sf-ink)] font-mono text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0_var(--sf-ink)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none inline-flex items-center gap-2"
              >
                Explore Theme Services
              </Link>
            </div>

            {/* RELATED CASE STUDIES */}
            <div className="border-t-2 border-[var(--sf-ink)] pt-12 text-left">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--sf-ink-mute)]">
                  More Case Studies
                </h3>
                <Link
                  href="/work"
                  className="font-mono text-xs font-bold uppercase text-[var(--sf-primary)] hover:underline flex items-center gap-1"
                >
                  View All Work &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Link
                  href="/work/flexform-athletics"
                  className="group p-5 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] hover:bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)] hover:shadow-[5px_5px_0_var(--sf-ink)] hover:-translate-y-0.5 transition-all"
                >
                  <div className="text-[11px] font-mono text-[var(--sf-primary)] uppercase font-bold mb-1">
                    Storefront // Activewear
                  </div>
                  <div className="font-serif font-bold text-lg text-[var(--sf-ink)] group-hover:text-[var(--sf-primary)] transition-colors mb-2">
                    FlexForm Athletics
                  </div>
                  <p className="text-xs text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                    Women&apos;s activewear theme with fit size gauges, 1-click coupon drawers, and an in-drawer upsell cart.
                  </p>
                </Link>

                <Link
                  href="/work/iron-crate"
                  className="group p-5 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] hover:bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)] hover:shadow-[5px_5px_0_var(--sf-ink)] hover:-translate-y-0.5 transition-all"
                >
                  <div className="text-[11px] font-mono text-[var(--sf-primary)] uppercase font-bold mb-1">
                    Storefront // Nutrition
                  </div>
                  <div className="font-serif font-bold text-lg text-[var(--sf-ink)] group-hover:text-[var(--sf-primary)] transition-colors mb-2">
                    Iron Crate
                  </div>
                  <p className="text-xs text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                    Sports supplement storefront with custom multi-product stack builder and clinical dosage PDP panels.
                  </p>
                </Link>

                <Link
                  href="/work/industrial-supply-direct"
                  className="group p-5 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] hover:bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)] hover:shadow-[5px_5px_0_var(--sf-ink)] hover:-translate-y-0.5 transition-all"
                >
                  <div className="text-[11px] font-mono text-[var(--sf-primary)] uppercase font-bold mb-1">
                    Storefront // B2B Wholesale
                  </div>
                  <div className="font-serif font-bold text-lg text-[var(--sf-ink)] group-hover:text-[var(--sf-primary)] transition-colors mb-2">
                    Industrial Supply Direct
                  </div>
                  <p className="text-xs text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                    High-volume B2B manufacturing storefront with volume pricing matrices and quick-order tables.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
