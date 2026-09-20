import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioViewer } from "@/components/portfolio/portfolio-viewer";
import { ArrowRight, CheckCircle2, Zap, Layout, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Store Transformations Portfolio",
  description:
    "Explore before-and-after Shopify transformations, custom theme builds, and performance case studies engineered by the ScaleFront development team.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Shopify Store Transformations Portfolio",
    description:
      "Explore before-and-after Shopify transformations, custom theme builds, and performance case studies engineered by the ScaleFront development team.",
    url: "https://www.scalefront.io/portfolio",
    siteName: "ScaleFront",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Store Transformations Portfolio",
    description:
      "Explore before-and-after Shopify transformations, custom theme builds, and performance case studies engineered by the ScaleFront development team.",
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[var(--sf-paper)] text-[var(--sf-ink)]">
      {/* Breadcrumb & Intro Header */}
      <section className="border-b-2 border-[var(--sf-ink)] bg-white px-6 py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--sf-ink-mute)]">
            <Link href="/" className="hover:text-[var(--sf-primary)] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[var(--sf-ink)] font-bold">Portfolio</span>
          </div>

          <div className="space-y-3 max-w-4xl">
            <span className="inline-block px-3 py-1 bg-[var(--sf-gold-soft)] text-[var(--sf-ink)] text-xs font-mono font-bold uppercase tracking-wider border border-[var(--sf-ink)] shadow-[2px_2px_0_var(--sf-ink)]">
              Before & After Case Studies
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-tight">
              Shopify Store Transformations & Visual Portfolio
            </h1>
            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
              Compare real-world merchant transformations before and after partnering with ScaleFront. We eliminate third-party app bloat, re-engineer bespoke Liquid architectures, and design high-converting e-commerce experiences engineered for sub-second page loads.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Drag-to-Compare Visual Showcase */}
      <section className="border-b-2 border-[var(--sf-ink)]">
        <PortfolioViewer />
      </section>

      {/* In-Depth Engineering Highlights */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--sf-primary)] block mb-2">
            Engineering Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight">
            How We Transform Shopify Stores
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--sf-ink-soft)] leading-relaxed">
            Every store redesign in our portfolio is engineered around performance, conversion rate optimization, and scalability. We do not use bloated pre-purchased themes. Every template is handcrafted with clean Liquid, modular Tailwind styling, and native Shopify 2.0 architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] space-y-3">
            <div className="w-10 h-10 bg-[var(--sf-primary)]/10 border border-[var(--sf-primary)] flex items-center justify-center text-[var(--sf-primary)]">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-tight">
              Sub-Second Speed
            </h3>
            <p className="text-xs sm:text-sm text-[var(--sf-ink-soft)] leading-relaxed">
              We audit and replace heavy third-party JavaScript apps with native Liquid sections, Shopify Functions, and lean client-side state management for 90+ mobile Core Web Vitals.
            </p>
          </div>

          <div className="p-6 bg-white border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] space-y-3">
            <div className="w-10 h-10 bg-emerald-50 border border-emerald-600 flex items-center justify-center text-emerald-700">
              <Layout className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-tight">
              Conversion Architecture
            </h3>
            <p className="text-xs sm:text-sm text-[var(--sf-ink-soft)] leading-relaxed">
              From slide-out tiered reward carts to dynamic product bundle builders, every interface element is designed to reduce purchasing friction and increase average order value (AOV).
            </p>
          </div>

          <div className="p-6 bg-white border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] space-y-3">
            <div className="w-10 h-10 bg-amber-50 border border-amber-600 flex items-center justify-center text-amber-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-tight">
              Shopify Plus & B2B
            </h3>
            <p className="text-xs sm:text-sm text-[var(--sf-ink-soft)] leading-relaxed">
              Bespoke wholesale pricing tables, volume tiering, custom checkout validation rules, and ERP integrations built for high-volume enterprise merchants.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Deep Dives */}
      <section className="border-t-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--sf-primary)] block mb-2">
                Detailed Technical Reports
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                Read Full Engineering Case Studies
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--sf-primary)] hover:underline"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-[var(--sf-ink)] p-6 flex flex-col justify-between shadow-[4px_4px_0_var(--sf-ink)]">
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold uppercase text-[var(--sf-ink-mute)]">
                  Fitness & Activewear
                </span>
                <h3 className="text-lg font-bold tracking-tight">FlexForm Athletics</h3>
                <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
                  Headless Shopify migration resulting in 98/100 mobile performance, +34% conversion rate uplift, and sub-second page transitions.
                </p>
              </div>
              <Link
                href="/work/flexform-athletics"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[var(--sf-primary)] hover:underline"
              >
                <span>Read FlexForm Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white border-2 border-[var(--sf-ink)] p-6 flex flex-col justify-between shadow-[4px_4px_0_var(--sf-ink)]">
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold uppercase text-[var(--sf-ink-mute)]">
                  Luxury Jewelry
                </span>
                <h3 className="text-lg font-bold tracking-tight">Maison Luxe</h3>
                <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
                  Bespoke Shopify Online Store 2.0 theme engineering with interactive ring customizer, video PDP integration, and high-converting VIP checkout.
                </p>
              </div>
              <Link
                href="/work/maison-luxe"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[var(--sf-primary)] hover:underline"
              >
                <span>Read Maison Luxe Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white border-2 border-[var(--sf-ink)] p-6 flex flex-col justify-between shadow-[4px_4px_0_var(--sf-ink)]">
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold uppercase text-[var(--sf-ink-mute)]">
                  B2B & Industrial Supplies
                </span>
                <h3 className="text-lg font-bold tracking-tight">Industrial Supply Direct</h3>
                <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
                  Enterprise B2B Shopify Plus build featuring native volume tiered pricing, quick-order matrixes, and custom quote generation.
                </p>
              </div>
              <Link
                href="/work/industrial-supply-direct"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[var(--sf-primary)] hover:underline"
              >
                <span>Read Industrial Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t-2 border-[var(--sf-ink)] bg-[var(--sf-ink)] text-white py-16 px-6">
        <div className="max-w-[800px] mx-auto text-center space-y-6">
          <span className="inline-block px-3 py-1 bg-[var(--sf-primary)] text-white text-xs font-mono font-bold uppercase tracking-wider border border-white">
            Ready For A Transformation?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            Transform Your Shopify Store
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            Get a comprehensive technical review of your existing store architecture, Core Web Vitals, and conversion rate bottlenecks.
          </p>
          <div className="pt-2">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--sf-primary)] text-white text-xs font-mono font-bold uppercase tracking-wider border-2 border-white shadow-[4px_4px_0_white] hover:bg-white hover:text-[var(--sf-ink)] transition-all"
            >
              <span>Get Your Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
