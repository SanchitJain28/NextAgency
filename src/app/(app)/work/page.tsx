import type { Metadata } from "next";
import Link from "next/link";
import { WorkGrid } from "@/components/work/work-grid";
import {
  ArrowRight,
  Flame,
  ShieldCheck,
  Zap,
  Boxes,
  Cpu,
  Layers,
  Code2,
  Gauge,
  ShoppingBag,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Case Studies & Featured Work",
  description:
    "Explore our featured Shopify projects: custom theme architectures, high-converting checkout flows, B2B procurement portals, and bespoke apps.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Shopify Case Studies & Featured Work | ScaleFront",
    description:
      "Explore our featured Shopify projects: custom theme architectures, high-converting checkout flows, B2B procurement portals, and bespoke apps.",
    url: "https://www.scalefront.io/work",
    siteName: "ScaleFront",
    type: "website",
    images: [
      {
        url: "https://www.scalefront.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ScaleFront - Featured Shopify Work & Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Case Studies & Featured Work | ScaleFront",
    description:
      "Featured Shopify projects: custom themes, B2B portals, and bespoke Shopify apps.",
    images: ["https://www.scalefront.io/og-image.jpg"],
  },
};

export default function WorkIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "ScaleFront Portfolio & Architectural Case Studies",
    description:
      "A curated catalog of custom Shopify theme architectures, B2B catalogs, high-ticket CRO systems, and custom Shopify applications.",
    url: "https://scalefront.io/work",
    publisher: {
      "@type": "Organization",
      name: "ScaleFront",
      url: "https://scalefront.io",
      logo: {
        "@type": "ImageObject",
        url: "https://scalefront.io/logo.png",
      },
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "RecovrX — High-Ticket CRO & Athletic Recovery Storefront",
          url: "https://scalefront.io/work/recovrx",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Iron Crate — Sports Nutrition & Custom Stack Builder",
          url: "https://scalefront.io/work/iron-crate",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Industrial Supply Direct — B2B Procurement & 50k SKU Catalog",
          url: "https://scalefront.io/work/industrial-supply-direct",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "FlexForm Athletics — Women's Activewear & Fit Assurance Storefront",
          url: "https://scalefront.io/work/flexform-athletics",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Pairly — Shopify Bundle & Upsell Application",
          url: "https://scalefront.io/upsell-cross-sell-app-shopify",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[var(--sf-paper)] text-[var(--sf-ink)]">
        {/* TOP BREADCRUMB / STATUS BAR */}
        <div className="border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="text-[var(--sf-ink-mute)] hover:text-[var(--sf-primary)] transition-colors"
              >
                HOME
              </Link>
              <span className="text-[var(--sf-ink-mute)]">/</span>
              <span className="font-bold text-[var(--sf-ink)] uppercase">
                FEATURED WORK &amp; CASE STUDIES
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[var(--sf-ink)] bg-emerald-50 text-emerald-800 text-[11px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                8 PRODUCTION &amp; CONCEPT BUILDS
              </span>
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="pt-14 pb-16 border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 border-2 border-[var(--sf-ink)] bg-[var(--sf-primary-soft)] text-[var(--sf-primary-deep)] text-xs font-mono font-bold shadow-[2px_2px_0_var(--sf-ink)] mb-6">
                <Flame className="w-3.5 h-3.5 text-[var(--sf-primary)]" />
                <span>ARCHITECTURAL CASE STUDIES &amp; PRODUCTION BUILDS</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight text-[var(--sf-ink)] leading-[0.98] mb-6">
                Built for speed. <br />
                <span className="text-[var(--sf-primary)]">
                  Engineered to convert.
                </span>
              </h1>

              <p className="text-lg sm:text-2xl text-[var(--sf-ink-soft)] font-sans leading-snug mb-8 font-medium max-w-3xl">
                A showcase of custom Shopify themes, specialized B2B procurement
                portals, native bundling engines, and bespoke applications built
                with zero third-party app bloat.
              </p>

              {/* QUICK STATS CHIPS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <div className="text-[var(--sf-ink-mute)] uppercase text-[10px] mb-1">
                    Theme Engine
                  </div>
                  <div className="font-bold text-[var(--sf-ink)]">
                    Native Liquid 2.0
                  </div>
                </div>

                <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <div className="text-[var(--sf-ink-mute)] uppercase text-[10px] mb-1">
                    App Stack
                  </div>
                  <div className="font-bold text-[var(--sf-ink)]">
                    Remix &bull; TS &bull; Prisma
                  </div>
                </div>

                <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <div className="text-[var(--sf-ink-mute)] uppercase text-[10px] mb-1">
                    Average TTFB
                  </div>
                  <div className="font-bold text-[var(--sf-ink)]">
                    &lt;0.5s Worldwide
                  </div>
                </div>

                <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <div className="text-[var(--sf-ink-mute)] uppercase text-[10px] mb-1">
                    Script Bloat
                  </div>
                  <div className="font-bold text-[var(--sf-ink)]">
                    0 External Apps Needed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 CORE ENGINEERING PILLARS */}
        <section className="py-12 border-b-2 border-[var(--sf-ink)] bg-[#171717] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 border border-neutral-800 bg-neutral-900/80">
                <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold mb-2 uppercase">
                  <Zap className="w-4 h-4" /> 01. Zero App Bloat
                </div>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  Replacing monthly SaaS subscriptions with clean, native Liquid
                  sections and lightweight Ajax APIs.
                </p>
              </div>

              <div className="p-4 border border-neutral-800 bg-neutral-900/80">
                <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold mb-2 uppercase">
                  <Gauge className="w-4 h-4" /> 02. Sub-Second CWV
                </div>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  Optimized for 95+ mobile Lighthouse scores, zero Cumulative
                  Layout Shift (CLS), and lightning LCP.
                </p>
              </div>

              <div className="p-4 border border-neutral-800 bg-neutral-900/80">
                <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold mb-2 uppercase">
                  <Boxes className="w-4 h-4" /> 03. Native Bundles
                </div>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  Atomic multi-SKU payloads, dynamic quantity breaks, and
                  tiered-reward slide-out drawer carts.
                </p>
              </div>

              <div className="p-4 border border-neutral-800 bg-neutral-900/80">
                <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold mb-2 uppercase">
                  <Layers className="w-4 h-4" /> 04. Custom Design Systems
                </div>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  Bespoke editorial identities, high-contrast typography, and
                  tactile micro-interactions that stand out.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WORK GRID WITH LIVE CLIENT FILTERING */}
        <section className="py-16 border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <div className="font-mono text-xs text-[var(--sf-primary)] uppercase tracking-widest font-bold mb-2">
                PORTFOLIO CATALOG
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--sf-ink)] tracking-tight">
                Featured Case Studies &amp; Custom Builds
              </h2>
            </div>

            <WorkGrid />
          </div>
        </section>

        {/* BEFORE & AFTER TRANSFORMATION VIEWER TEASER */}
        <section className="py-16 border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] p-8 sm:p-12 shadow-[8px_8px_0_var(--sf-ink)] flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[var(--sf-primary)] uppercase tracking-wider mb-3">
                  <Code2 className="w-4 h-4" /> INTERACTIVE TOOL
                </div>
                <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[var(--sf-ink)] tracking-tight mb-4">
                  Interactive Storefront Comparison Viewer
                </h3>
                <p className="text-sm sm:text-base font-sans text-[var(--sf-ink-soft)] leading-relaxed mb-6">
                  Want to explore side-by-side interactive split-screen
                  comparisons of before &amp; after storefront transformations?
                  Try our full-screen comparison tool.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/portfolio"
                    className="px-6 py-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-ink)] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0_var(--sf-primary)] hover:bg-neutral-800 transition-all flex items-center gap-2"
                  >
                    Open Comparison Viewer{" "}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/services/theme-development"
                    className="px-6 py-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] text-[var(--sf-ink)] font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0_var(--sf-ink)] hover:bg-white transition-all"
                  >
                    Theme Engineering Services
                  </Link>
                </div>
              </div>

              <div className="w-full lg:w-72 p-5 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[4px_4px_0_var(--sf-ink)] font-mono text-xs space-y-3 shrink-0">
                <div className="font-bold text-[var(--sf-ink)] uppercase border-b border-[var(--sf-ink)]/20 pb-2">
                  Transformation Features
                </div>
                <div className="text-[var(--sf-ink-soft)] text-[11px] space-y-1.5 font-sans">
                  <div>&bull; Interactive split-slider comparison</div>
                  <div>&bull; Multi-page routing (Home, PDP, Cart)</div>
                  <div>&bull; UX teardowns &amp; speed audits</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA SECTION */}
        <section className="py-20 bg-[#181310] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-[var(--sf-primary-soft)] font-bold mb-3">
                LET&apos;S BUILD SOMETHING EXTRAORDINARY
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-6 leading-tight">
                Ready to elevate your Shopify storefront?
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 font-sans mb-8 leading-relaxed">
                Whether you need a custom theme build, native bundling
                architecture, or a bespoke Shopify app, we engineer solutions
                that load fast, look distinct, and convert.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact-us"
                  className="px-7 py-3.5 border-2 border-white bg-[var(--sf-primary)] hover:bg-[var(--sf-primary-deep)] text-white font-mono text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0_#ffffff] transition-all hover:translate-x-0.5 hover:translate-y-0.5"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/services/cro-optimization"
                  className="px-7 py-3.5 border-2 border-white bg-transparent hover:bg-white hover:text-[var(--sf-ink)] text-white font-mono text-sm font-bold uppercase tracking-wider transition-colors"
                >
                  Explore CRO Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
