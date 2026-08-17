import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  BundleBuilderSimulator,
  TieredCartSimulator,
} from "@/components/work/iron-crate-interactive";
import {
  ArrowRight,
  Zap,
  ShoppingBag,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  Activity,
  Flame,
  Boxes,
  Cpu,
  BarChart3,
  ExternalLink,
} from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title: "Iron Crate — Custom Shopify Bundle Builder & Cart Case Study | ScaleFront",
  description:
    "A deep dive into Iron Crate: custom Shopify theme architecture, interactive bundle builder, clinical dosage PDPs, and a tiered-reward cart.",
  alternates: {
    canonical: "https://scalefront.io/work/iron-crate",
  },
  openGraph: {
    title:
      "Iron Crate — Custom Shopify Bundle Builder & Cart Case Study | ScaleFront",
    description:
      "A deep dive into Iron Crate: custom Shopify theme architecture, interactive bundle builder, clinical dosage PDPs, and a tiered-reward cart.",
    url: "https://scalefront.io/work/iron-crate",
    siteName: "ScaleFront",
    type: "article",
    images: [
      {
        url: "https://scalefront.io/portfolio/iron-crate/covers/cover.png",
        width: 1200,
        height: 675,
        alt: "Iron Crate custom Shopify theme, category matrix, and tiered-reward cart case study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Iron Crate — Custom Shopify Bundle Builder & Cart Case Study | ScaleFront",
    description:
      "Custom Shopify theme architecture for sports nutrition: interactive bundle builder, clinical dosage PDPs, and tiered cart rewards.",
    images: [
      "https://scalefront.io/portfolio/iron-crate/covers/cover.png",
    ],
  },
};

export default function IronCratePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline:
      "Iron Crate — Custom Shopify Theme & Bundle Architecture Case Study",
    description:
      "An architectural case study analyzing custom Shopify theme development for sports nutrition, featuring multi-SKU stack builders, clinical PDP layouts, and tiered-reward cart engineering.",
    image: "https://scalefront.io/portfolio/iron-crate/covers/cover.png",
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
      "@id": "https://scalefront.io/work/iron-crate",
    },
    about: [
      {
        "@type": "Thing",
        name: "Shopify Theme Development",
      },
      {
        "@type": "Thing",
        name: "Shopify Bundle Builder",
      },
      {
        "@type": "Thing",
        name: "eCommerce Conversion Rate Optimization",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-[var(--sf-paper)] text-[var(--sf-ink)] min-h-screen">
        {/* Top Breadcrumb Header */}
        <div className="border-b border-[var(--sf-ink)]/10 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--sf-ink-mute)]">
              <Link href="/" className="hover:text-[var(--sf-primary)] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/portfolio"
                className="hover:text-[var(--sf-primary)] transition-colors"
              >
                Portfolio
              </Link>
              <span>/</span>
              <span className="text-[var(--sf-ink)] font-bold">Iron Crate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-[11px] font-mono font-bold uppercase bg-[var(--sf-paper-sunken)] border border-[var(--sf-ink)]/20 text-[var(--sf-ink)]">
                Storefront & Bundle Build
              </span>
            </div>
          </div>
        </div>

        {/* Project Hero Header */}
        <header className="border-b-2 border-[var(--sf-ink)] bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
            <div className="space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--sf-primary-soft)] text-[var(--sf-primary-deep)] border border-[var(--sf-primary)] text-xs font-mono font-bold tracking-wide">
                <Flame className="w-3.5 h-3.5 text-[var(--sf-primary)]" />
                SPORTS NUTRITION & ECOMMERCE ARCHITECTURE
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[var(--sf-ink)] leading-none uppercase">
                Iron Crate
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--sf-ink-soft)] leading-relaxed">
                A high-performance Shopify storefront engineered for sports nutrition, custom supplement bundles, and tiered-reward cart expansion.
              </h2>
            </div>

            {/* Architecture Metadata Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t-2 border-[var(--sf-ink)]/10 font-mono text-xs">
              <div className="p-3 bg-[var(--sf-paper-sunken)] border border-[var(--sf-ink)]/20">
                <span className="text-[var(--sf-ink-mute)] block text-[10px] uppercase">
                  Industry Vertical
                </span>
                <span className="font-bold text-[var(--sf-ink)] text-sm">
                  Sports Nutrition & Fitness
                </span>
              </div>
              <div className="p-3 bg-[var(--sf-paper-sunken)] border border-[var(--sf-ink)]/20">
                <span className="text-[var(--sf-ink-mute)] block text-[10px] uppercase">
                  Core Framework
                </span>
                <span className="font-bold text-[var(--sf-ink)] text-sm">
                  Shopify Liquid 2.0 + AJAX
                </span>
              </div>
              <div className="p-3 bg-[var(--sf-paper-sunken)] border border-[var(--sf-ink)]/20">
                <span className="text-[var(--sf-ink-mute)] block text-[10px] uppercase">
                  Key Capabilities
                </span>
                <span className="font-bold text-[var(--sf-ink)] text-sm">
                  Stack Builder & Tiered Cart
                </span>
              </div>
              <div className="p-3 bg-[var(--sf-paper-sunken)] border border-[var(--sf-ink)]/20">
                <span className="text-[var(--sf-ink-mute)] block text-[10px] uppercase">
                  Engineering Focus
                </span>
                <span className="font-bold text-[var(--sf-ink)] text-sm">
                  AOV & Formula Transparency
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Visual Cover Showcase */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="border-2 border-[var(--sf-ink)] shadow-[8px_8px_0_var(--sf-ink)] bg-black overflow-hidden relative group">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
              <Image
                src="/portfolio/iron-crate/covers/cover.png"
                alt="Iron Crate custom Shopify storefront cover showing training imagery and supplement category matrix"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            <div className="p-4 bg-[var(--sf-ink)] text-white flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-neutral-300">
                Figure 1.0: Full Iron Crate storefront visual identity and category discovery overview.
              </span>
              <span className="text-[var(--sf-primary)] font-bold">
                Custom Liquid Architecture
              </span>
            </div>
          </div>
        </section>

        <DottedSeparator />

        {/* Content Body Container */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">
          {/* Section 1: The Problem This Explores */}
          <section className="space-y-6">
            <div className="border-l-4 border-[var(--sf-primary)] pl-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--sf-primary)]">
                Part 01 • The Supplement Commerce Equation
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[var(--sf-ink)] tracking-tight mt-1">
                The Technical & Conversion Challenges of Modern Supplement Storefronts
              </h2>
            </div>

            <div className="prose prose-neutral max-w-none text-sm md:text-base leading-relaxed text-[var(--sf-ink-soft)] space-y-4">
              <p>
                Direct-to-consumer (DTC) sports nutrition is one of the most competitive verticals in eCommerce. Customer acquisition costs (CAC) across paid channels continue to climb, which means a supplement storefront cannot survive on single-item, one-time purchases alone. Sustainable margins require two fundamental levers: <strong>maximizing Average Order Value (AOV)</strong> at the point of intent and <strong>cultivating recurring subscription lifetime value (LTV)</strong>.
              </p>
              <p>
                However, standard off-the-shelf Shopify themes are rarely equipped to solve the unique technical demands of fitness nutrition brands:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 bg-white border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] space-y-2">
                <div className="w-8 h-8 rounded bg-[var(--sf-primary-soft)] border border-[var(--sf-primary)] flex items-center justify-center text-[var(--sf-primary-deep)]">
                  <Boxes className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[var(--sf-ink)]">
                  Multi-Product Stacking Friction
                </h3>
                <p className="text-xs text-[var(--sf-ink-soft)] leading-normal">
                  Athletes rarely take just one supplement—they stack pre-workouts, protein, and recovery formulas. Standard product pages force tedious navigation between 3–4 separate pages to assemble a regimen.
                </p>
              </div>

              <div className="p-5 bg-white border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] space-y-2">
                <div className="w-8 h-8 rounded bg-[var(--sf-secondary-soft)] border border-[var(--sf-secondary)] flex items-center justify-center text-[var(--sf-secondary)]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[var(--sf-ink)]">
                  The Clinical Transparency Deficit
                </h3>
                <p className="text-xs text-[var(--sf-ink-soft)] leading-normal">
                  Discerning athletes inspect dosages, third-party lab testing, and ingredient bio-availability. Generic theme descriptions lack the structured panels needed to clearly present clinical data.
                </p>
              </div>

              <div className="p-5 bg-white border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] space-y-2">
                <div className="w-8 h-8 rounded bg-[var(--sf-gold-soft)] border border-[var(--sf-gold)] flex items-center justify-center text-[var(--sf-gold-deep)]">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[var(--sf-ink)]">
                  Passive, Unmotivated Carts
                </h3>
                <p className="text-xs text-[var(--sf-ink-soft)] leading-normal">
                  Traditional drawer carts act as passive summary lists. Without dynamic milestone rewards and clear threshold incentives, shoppers exit with low-ticket single items.
                </p>
              </div>
            </div>

            <div className="p-5 bg-[var(--sf-paper-sunken)] border-2 border-[var(--sf-ink)] text-xs font-mono space-y-1">
              <span className="font-bold uppercase text-[var(--sf-primary)] block">
                The Iron Crate Build Hypothesis:
              </span>
              <p className="text-[var(--sf-ink)]">
                By engineering a bespoke Shopify storefront that combines high-energy brutalist aesthetics, an interactive multi-SKU stack builder, transparent clinical dosage accordions, and a gamified 3-tier cart, we can streamline discovery and incentivize multi-item order composition without third-party app bloat.
              </p>
            </div>
          </section>

          <DottedSeparator />

          {/* Section 2: Homepage & Category Discovery Architecture */}
          <section className="space-y-8">
            <div className="border-l-4 border-[var(--sf-secondary)] pl-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--sf-secondary)]">
                Part 02 • Homepage Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[var(--sf-ink)] tracking-tight mt-1">
                Visual Energy, Category Routing & Trust Certification Matrix
              </h2>
            </div>

            <p className="text-sm md:text-base text-[var(--sf-ink-soft)] leading-relaxed">
              The Iron Crate homepage is structured to guide visitors directly toward their athletic goals within seconds. Rather than relying on generic banner carousels, the layout introduces high-contrast category discovery cards, infinite marquee tickers, and verified ingredient badges.
            </p>

            {/* Screenshots Grid: Home 1 & Home 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] bg-white overflow-hidden">
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src="/portfolio/iron-crate/home/1.png"
                      alt="Iron Crate homepage top categories with neon borders and muscle strength supplement tiles"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="text-xs font-mono text-[var(--sf-ink-mute)]">
                  <strong>Figure 2.1:</strong> Category matrix with neon accent borders (Muscle & Strength, Protein, Health & Wellness, Performance) and marquee tickers.
                </div>
              </div>

              <div className="space-y-2">
                <div className="border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] bg-white overflow-hidden">
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src="/portfolio/iron-crate/home/2.png"
                      alt="Iron Crate featured products grid with sale badges, strikethrough prices, and view product CTAs"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="text-xs font-mono text-[var(--sf-ink-mute)]">
                  <strong>Figure 2.2:</strong> Featured product grid with brutalist borders, "SALE" badges, comparison pricing, and trust certification marquee.
                </div>
              </div>
            </div>

            {/* Screenshots Grid: Home 3 & Home 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <div className="border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] bg-white overflow-hidden">
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src="/portfolio/iron-crate/home/3.png"
                      alt="Setting the Bar trust section with athletic gym imagery and 6-point purity icon badges"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="text-xs font-mono text-[var(--sf-ink-mute)]">
                  <strong>Figure 2.3:</strong> "Setting the Bar" purity grid: 6 certified badges (*Vegan, GMO-Free, Synthetic-Free, Soy-Free, Gluten-Free, Sucralose-Free*).
                </div>
              </div>

              <div className="space-y-2">
                <div className="border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] bg-white overflow-hidden">
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src="/portfolio/iron-crate/home/4.png"
                      alt="Interactive Stack Finder quiz banner and Making Gains Together athletic storytelling section"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="text-xs font-mono text-[var(--sf-ink-mute)]">
                  <strong>Figure 2.4:</strong> "Find Your Stack" dynamic quiz/bundle CTA banner paired with athletic authority storytelling.
                </div>
              </div>
            </div>
          </section>

          <DottedSeparator />

          {/* Section 3: Dynamic Collection System & Instant Filtering */}
          <section className="space-y-8">
            <div className="border-l-4 border-[var(--sf-gold)] pl-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--sf-gold-deep)]">
                Part 03 • Collection Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[var(--sf-ink)] tracking-tight mt-1">
                Gradient Hero Banners & Zero-Reload Category Carousel
              </h2>
            </div>

            <p className="text-sm md:text-base text-[var(--sf-ink-soft)] leading-relaxed">
              Supplement buyers frequently browse across adjacent product lines (such as pre-workouts, hydration formulas, and isolates). To eliminate full-page reload latency, we engineered an interactive horizontal collection slider that seamlessly updates category views while preserving active filter states.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] bg-white overflow-hidden">
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src="/portfolio/iron-crate/collection/1.png"
                      alt="Performance supplements collection page banner with dosage details and category tab slider"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="text-xs font-mono text-[var(--sf-ink-mute)]">
                  <strong>Figure 3.1:</strong> Performance Supplements collection header detailing endurance formulations (citrulline, beta-alanine) with category switcher pills.
                </div>
              </div>

              <div className="space-y-2">
                <div className="border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] bg-white overflow-hidden">
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src="/portfolio/iron-crate/collection/2.png"
                      alt="Pre-workout collection banner with Ghost and Gorilla Mode product renders and active tab indicator"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="text-xs font-mono text-[var(--sf-ink-mute)]">
                  <strong>Figure 3.2:</strong> Pre-Workout collection view highlighting energy/focus formulas with instant sorting and faceted filters.
                </div>
              </div>
            </div>
          </section>

          <DottedSeparator />

          {/* Section 4: Clinical Dosage & Trust-First Product Detail Pages */}
          <section className="space-y-8">
            <div className="border-l-4 border-[var(--sf-primary)] pl-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--sf-primary)]">
                Part 04 • Product Detail Page (PDP) Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[var(--sf-ink)] tracking-tight mt-1">
                Clinical Transparency, One-Time vs. Subscription Toggle & Verified Reviews
              </h2>
            </div>

            <p className="text-sm md:text-base text-[var(--sf-ink-soft)] leading-relaxed">
              On high-performance supplement PDPs, conversion depends heavily on establishing empirical trust. We engineered the product template around clinical dosage breakdowns, subscription incentives, and transparent ingredient facts.
            </p>

            {/* Product Screenshots Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Product 1: Buy Box */}
              <div className="space-y-2">
                <div className="border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] bg-white overflow-hidden">
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src="/portfolio/iron-crate/product/1.png"
                      alt="Iron Crate product detail buy box with clinical dosage summary and subscribe and save selector"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="text-xs font-mono text-[var(--sf-ink-mute)]">
                  <strong>Figure 4.1:</strong> Buy Box with per-scoop formulation callout (8g Citrulline Malate, 3.2g Beta-Alanine, Alpha-GPC) and Subscribe & Save 10% toggle.
                </div>
              </div>

              {/* Product 2: Supplement Facts */}
              <div className="space-y-2">
                <div className="border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] bg-white overflow-hidden">
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src="/portfolio/iron-crate/product/2.png"
                      alt="Supplement facts label and What's Inside amino acid biochemical pathway breakdown"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="text-xs font-mono text-[var(--sf-ink-mute)]">
                  <strong>Figure 4.2:</strong> Standardized Supplement Facts table and "What's Inside" biochemical pathway explanation for nitric oxide synthesis.
                </div>
              </div>

              {/* Product 3: Customer Reviews */}
              <div className="space-y-2">
                <div className="border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] bg-white overflow-hidden">
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src="/portfolio/iron-crate/product/3.png"
                      alt="Real customer reviews grid with 5-star ratings, initials, and verified purchase badges"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="text-xs font-mono text-[var(--sf-ink-mute)]">
                  <strong>Figure 4.3:</strong> 5-Star Verified Customer Reviews grid with reviewer badges and rating distribution.
                </div>
              </div>

              {/* Product 4 & 5: FAQ & Chosen by Champions */}
              <div className="space-y-2">
                <div className="border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] bg-white overflow-hidden">
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src="/portfolio/iron-crate/product/4.png"
                      alt="Frequently asked questions high-contrast accordions on dosage and stacking"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="text-xs font-mono text-[var(--sf-ink-mute)]">
                  <strong>Figure 4.4:</strong> High-contrast FAQ accordions addressing timing, dosage duration, stacking rules, and safety testing.
                </div>
              </div>
            </div>

            {/* Chosen by champions full banner */}
            <div className="border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] bg-black overflow-hidden">
              <div className="relative w-full aspect-[21/9]">
                <Image
                  src="/portfolio/iron-crate/product/5.png"
                  alt="Chosen by Champions section highlighting third-party lab testing and Certificate of Analysis"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
              <div className="p-3 bg-[var(--sf-ink)] text-white text-xs font-mono">
                <strong>Figure 4.5:</strong> "Chosen by Champions" lab-testing component ensuring full batch-level Certificate of Analysis (COA) transparency.
              </div>
            </div>
          </section>

          <DottedSeparator />

          {/* Section 5: The Build Your Own Stack Bundle Architecture */}
          <section className="space-y-8">
            <div className="border-l-4 border-[var(--sf-secondary)] pl-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--sf-secondary)]">
                Part 05 • Multi-Product Bundling Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[var(--sf-ink)] tracking-tight mt-1">
                The "Build Your Own Stack" Custom Shopify Bundle Builder
              </h2>
            </div>

            <div className="prose prose-neutral max-w-none text-sm md:text-base leading-relaxed text-[var(--sf-ink-soft)] space-y-4">
              <p>
                A core differentiator of this build is the custom <strong>Shopify bundle builder</strong> interface located at <code>/build-your-own</code>. Rather than relying on slow, third-party iframe apps that hijack the checkout flow or slow down page speed, we engineered a native multi-SKU stack configuration app directly in Liquid and AJAX Cart APIs.
              </p>
              <p>
                The bundle builder presents a clean catalog grid of complementary protein isolates, plant-based formulas, collagen peptides, and superfoods on the left, paired with a real-time sticky bundle cart on the right that tracks line items, discount thresholds, and cumulative savings.
              </p>
            </div>

            {/* Bundle Builder Screenshot */}
            <div className="border-2 border-[var(--sf-ink)] shadow-[6px_6px_0_var(--sf-ink)] bg-white overflow-hidden">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/portfolio/iron-crate/others/build-your-own/1.png"
                  alt="Iron Crate build your own supplement stack bundle builder interface with sticky review panel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
              <div className="p-3 bg-[var(--sf-ink)] text-white text-xs font-mono flex items-center justify-between">
                <span>Figure 5.1: Custom Shopify bundle builder UI with live multi-item selection and sticky calculation drawer.</span>
                <span className="text-[var(--sf-secondary)] font-bold">/build-your-own</span>
              </div>
            </div>

            {/* Interactive Bundle Simulator */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[var(--sf-primary)]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--sf-ink)]">
                  Interactive Prototype: Test the Bundle Architecture Live
                </span>
              </div>
              <BundleBuilderSimulator />
            </div>
          </section>

          <DottedSeparator />

          {/* Section 6: Gamified Tiered-Reward Drawer Cart */}
          <section className="space-y-8">
            <div className="border-l-4 border-[var(--sf-gold)] pl-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--sf-gold-deep)]">
                Part 06 • Cart Engineering & AOV Optimization
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[var(--sf-ink)] tracking-tight mt-1">
                Gamified 3-Tier Spend Milestones in a High-Speed Drawer Cart
              </h2>
            </div>

            <div className="prose prose-neutral max-w-none text-sm md:text-base leading-relaxed text-[var(--sf-ink-soft)] space-y-4">
              <p>
                In standard supplement stores, the slide-out cart is an afterthought. In Iron Crate, the cart is designed as a primary conversion and upsell engine. The drawer includes an animated multi-tier milestone progress bar that visualizes progress toward unlocked benefits:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Tier 1 ($50):</strong> Free Standard Shipping</li>
                <li><strong>Tier 2 ($100):</strong> Free Ghoststrike Alpha Pre-Workout ($58 value)</li>
                <li><strong>Tier 3 ($200):</strong> Free Micronized Creatine Tub ($30 value)</li>
              </ul>
              <p>
                As shoppers add items or increase quantities, an animated status banner calculates the exact remaining balance required to unlock the next reward (e.g., <em>"ONLY $14.40 LEFT TO GET FREE CREATINE!"</em>), providing clear, immediate incentive for larger cart values before checkout.
              </p>
            </div>

            {/* Cart Screenshot */}
            <div className="max-w-2xl mx-auto border-2 border-[var(--sf-ink)] shadow-[6px_6px_0_var(--sf-ink)] bg-white overflow-hidden">
              <div className="relative w-full aspect-[4/5] sm:aspect-[1/1]">
                <Image
                  src="/portfolio/iron-crate/cart/1.png"
                  alt="Iron Crate gamified slide-out drawer cart with 3-tier milestone bar and subscription discount badges"
                  fill
                  className="object-contain bg-neutral-900"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="p-3 bg-[var(--sf-ink)] text-white text-xs font-mono">
                Figure 6.1: High-speed slide-out drawer cart with multi-tier progress bar and one-click subscription badges.
              </div>
            </div>

            {/* Interactive Cart Simulator */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[var(--sf-gold)]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--sf-ink)]">
                  Interactive Prototype: Test the Milestone Progression
                </span>
              </div>
              <TieredCartSimulator />
            </div>
          </section>

          <DottedSeparator />

          {/* Section 7: Technical Architecture & Core Web Vitals */}
          <section className="space-y-8">
            <div className="border-l-4 border-[var(--sf-primary)] pl-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--sf-primary)]">
                Part 07 • Technical Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[var(--sf-ink)] tracking-tight mt-1">
                Zero-App-Bloat Architecture & Sub-Second Response Speeds
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] space-y-3">
                <h3 className="text-base font-black text-[var(--sf-ink)] flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[var(--sf-primary)]" />
                  Native Metafield & Metaobject Specs
                </h3>
                <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
                  Instead of hardcoding product specifications or installing third-party table apps, all dosage breakdowns, ingredient certificates, and purity badges are stored in native Shopify Metaobjects. This allows catalog managers to update formulas across dozens of SKUs from a single centralized definition.
                </p>
              </div>

              <div className="p-6 bg-white border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] space-y-3">
                <h3 className="text-base font-black text-[var(--sf-ink)] flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[var(--sf-secondary)]" />
                  Optimized Core Web Vitals
                </h3>
                <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
                  Third-party bundle and cart apps frequently inject 300kB+ of blocking JavaScript into the storefront header. By authoring the bundle builder and slide-out cart in clean vanilla JavaScript and lightweight Liquid snippets, the storefront preserves ultra-fast Time to First Byte (TTFB) and 95+ mobile performance scores.
                </p>
              </div>
            </div>
          </section>

          <DottedSeparator />

          {/* Section 8: FAQ Section */}
          <section className="space-y-6">
            <div className="border-l-4 border-[var(--sf-ink)] pl-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--sf-ink-mute)]">
                Part 08 • Technical FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[var(--sf-ink)] tracking-tight mt-1">
                Frequently Asked Questions: Supplement Shopify Development
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-5 bg-white border-2 border-[var(--sf-ink)] shadow-[3px_3px_0_var(--sf-ink)] space-y-2">
                <h3 className="text-sm font-bold text-[var(--sf-ink)] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[var(--sf-primary)] flex-shrink-0" />
                  How do custom bundle builders handle multi-SKU inventory in Shopify?
                </h3>
                <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
                  Custom bundle builders can be engineered either via Shopify&apos;s native Bundles API (where bundle items decrement individual SKU inventories automatically without third-party sync apps) or via multi-line AJAX cart payloads that bundle child items with custom line-item properties.
                </p>
              </div>

              <div className="p-5 bg-white border-2 border-[var(--sf-ink)] shadow-[3px_3px_0_var(--sf-ink)] space-y-2">
                <h3 className="text-sm font-bold text-[var(--sf-ink)] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[var(--sf-secondary)] flex-shrink-0" />
                  Can tiered cart rewards be integrated with subscription apps like Recharge or Skio?
                </h3>
                <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
                  Yes. By listening to Shopify AJAX cart state changes, custom drawer carts can dynamically detect whether items are one-time or subscription recurring orders, applying tiered discounts or free gift SKUs conditionally based on customer spend thresholds.
                </p>
              </div>

              <div className="p-5 bg-white border-2 border-[var(--sf-ink)] shadow-[3px_3px_0_var(--sf-ink)] space-y-2">
                <h3 className="text-sm font-bold text-[var(--sf-ink)] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[var(--sf-gold-deep)] flex-shrink-0" />
                  How are batch-specific Certificates of Analysis (COAs) managed?
                </h3>
                <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
                  COAs and lab verification PDFs are linked directly to product metafields as file references or secure cloud storage URLs, ensuring that customers can inspect genuine batch-level testing data with zero manual HTML editing.
                </p>
              </div>
            </div>
          </section>

          <DottedSeparator />

          {/* Bottom Conversion CTA Strip */}
          <section className="p-8 md:p-12 bg-white border-2 border-[var(--sf-ink)] shadow-[8px_8px_0_var(--sf-ink)] space-y-6">
            <div className="max-w-3xl space-y-3">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--sf-primary)]">
                Scale Your Supplement & Nutrition Storefront
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[var(--sf-ink)] tracking-tight">
                Ready to Build a High-Converting Shopify Storefront?
              </h2>
              <p className="text-sm md:text-base text-[var(--sf-ink-soft)] leading-relaxed">
                Whether you need a custom stack bundle builder, a gamified tiered-reward cart, or a high-speed custom Liquid theme engineered for maximum AOV, we build tailored eCommerce systems that perform.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact-us"
                className="px-6 py-3.5 bg-[var(--sf-ink)] text-white text-xs font-mono font-bold uppercase tracking-wider border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-primary)] hover:bg-[var(--sf-primary)] transition-all flex items-center gap-2"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/theme-development"
                className="px-6 py-3.5 bg-white text-[var(--sf-ink)] text-xs font-mono font-bold uppercase tracking-wider border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] hover:bg-[var(--sf-paper-sunken)] transition-all"
              >
                Explore Theme Development
              </Link>
              <Link
                href="/portfolio"
                className="px-6 py-3.5 bg-[var(--sf-paper-sunken)] text-[var(--sf-ink)] text-xs font-mono font-bold uppercase tracking-wider border-2 border-[var(--sf-ink)] hover:bg-white transition-all"
              >
                View All Case Studies
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
