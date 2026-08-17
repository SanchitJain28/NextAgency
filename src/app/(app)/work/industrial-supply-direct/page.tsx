import type { Metadata } from "next";
import Link from "next/link";
import {
  IndustrialSpecViewer,
  VolumePricingCalculator,
  RFQFlowDemo,
} from "@/components/work/industrial-supply-interactive";
import {
  ArrowRight,
  Zap,
  Database,
  Cpu,
  FileSpreadsheet,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  Workflow,
  Boxes,
} from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title:
    "Industrial Supply Direct — Shopify B2B Development Case Study | ScaleFront",
  description:
    "A deep dive into building Industrial Supply Direct: custom Shopify B2B architecture, tabbed technical specifications, tiered volume pricing, and automated quote requests.",
  alternates: {
    canonical: "https://scalefront.io/work/industrial-supply-direct",
  },
  openGraph: {
    title:
      "Industrial Supply Direct — Shopify B2B Development Case Study | ScaleFront",
    description:
      "A deep dive into building Industrial Supply Direct: custom Shopify B2B architecture, tabbed technical specifications, tiered volume pricing, and automated quote requests.",
    url: "https://scalefront.io/work/industrial-supply-direct",
    siteName: "ScaleFront",
    type: "article",
    images: [
      {
        url: "https://scalefront.io/portfolio/industrial-supply-direct/covers/cover.png",
        width: 1200,
        height: 675,
        alt: "Industrial Supply Direct B2B product page with tabbed technical specifications and volume tier pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Industrial Supply Direct — Shopify B2B Development Case Study | ScaleFront",
    description:
      "Custom Shopify B2B architecture for technical procurement: tabbed specs, volume pricing, and seamless quote requests.",
    images: [
      "https://scalefront.io/portfolio/industrial-supply-direct/covers/cover.png",
    ],
  },
};

export default function IndustrialSupplyDirectPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline:
      "Industrial Supply Direct — Shopify B2B Architecture & Case Study",
    description:
      "How to build high-performance Shopify B2B storefronts for catalog-heavy industrial, wholesale, and technical procurement merchants.",
    image:
      "https://scalefront.io/portfolio/industrial-supply-direct/covers/cover.png",
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
      "@id": "https://scalefront.io/work/industrial-supply-direct",
    },
    about: [
      { "@type": "Thing", name: "Shopify B2B" },
      { "@type": "Thing", name: "B2B Ecommerce" },
      { "@type": "Thing", name: "Shopify Theme Engineering" },
      { "@type": "Thing", name: "Metaobjects" },
    ],
  };

  return (
    <div className="w-full bg-[var(--sf-paper)] text-[var(--sf-ink)] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] py-3 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <nav className="flex items-center gap-2 text-[var(--sf-ink-mute)]">
            <Link
              href="/"
              className="hover:text-[var(--sf-primary)] transition-colors"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/portfolio"
              className="hover:text-[var(--sf-primary)] transition-colors"
            >
              Work
            </Link>
            <span>/</span>
            <span className="text-[var(--sf-ink)] font-bold">
              Industrial Supply Direct
            </span>
          </nav>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[var(--sf-gold-soft)] text-[var(--sf-ink)] border border-[var(--sf-ink)] font-bold uppercase tracking-wider text-[10px]">
              <Cpu className="w-3 h-3 text-[var(--sf-ink)]" />
              Technical Case Study
            </span>
            <span className="text-[var(--sf-ink-mute)] hidden sm:inline">
              •
            </span>
            <span className="text-[var(--sf-ink-mute)] hidden sm:inline">
              Theme Architecture & Metaobjects
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <header className="max-w-[1200px] mx-auto px-6 pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="max-w-[960px]">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--sf-primary-soft)] text-[var(--sf-primary-deep)] border-2 border-[var(--sf-ink)] text-xs font-mono font-bold uppercase tracking-widest mb-6 shadow-[2px_2px_0_var(--sf-ink)]">
            <Boxes className="w-3.5 h-3.5 text-[var(--sf-primary)]" />
            Wholesale & Industrial Commerce
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.02] text-[var(--sf-ink)] mb-6"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Industrial Supply Direct
          </h1>

          <h2
            className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-[var(--sf-ink-soft)] tracking-[-0.01em] mb-8"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            A self-initiated{" "}
            <span className="text-[var(--sf-primary)]">Shopify B2B</span> build
            engineered for technical, catalog-heavy wholesale buyers.
          </h2>

          <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] font-medium leading-relaxed max-w-[820px] mb-10">
            Wholesale and industrial procurement is fundamentally different from
            consumer retail. B2B buyers—plant engineers, facility operators, and
            purchasing managers—do not purchase based on lifestyle branding.
            They purchase based on dimensional tolerances, alloy grade
            certifications, volume tier pricing, and instant quote generation.
            This project demonstrates how to structure a 50,000+ SKU technical
            catalog natively on Shopify without sluggish third-party app
            dependencies.
          </p>

          {/* Key Project Specs Card */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[var(--sf-paper-sunken)] border-2 border-[var(--sf-ink)] shadow-[6px_6px_0_var(--sf-ink)]">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase text-[var(--sf-ink-mute)] block font-bold">
                Vertical Focus
              </span>
              <span className="text-sm md:text-base font-bold text-[var(--sf-ink)] block">
                Industrial MRO & Fasteners
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase text-[var(--sf-ink-mute)] block font-bold">
                Architecture
              </span>
              <span className="text-sm md:text-base font-bold text-[var(--sf-ink)] block">
                Liquid 2.0 + Metaobjects
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase text-[var(--sf-ink-mute)] block font-bold">
                Core Capabilities
              </span>
              <span className="text-sm md:text-base font-bold text-[var(--sf-ink)] block">
                Volume Tiers & RFQ Funnel
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase text-[var(--sf-ink-mute)] block font-bold">
                Page Speed Target
              </span>
              <span className="text-sm md:text-base font-bold text-emerald-700 block font-mono">
                98+ Core Web Vitals
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Visual Showcase / Screenshot */}
      <section className="max-w-[1200px] mx-auto px-6 mb-20">
        <div className="relative border-2 border-[var(--sf-ink)] shadow-[10px_10px_0_var(--sf-ink)] overflow-hidden bg-[var(--sf-paper-sunken)] group">
          <div className="bg-[var(--sf-ink)] text-white px-5 py-3 flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
              <span className="ml-2 font-bold uppercase tracking-wider text-[var(--sf-paper-sunken)]">
                Storefront Interface • Technical PDP Architecture
              </span>
            </span>
            <span className="text-[var(--sf-ink-mute)] hidden sm:inline">
              scalefront.io/showcase
            </span>
          </div>

          <div className="relative w-full aspect-[16/9] md:aspect-[21/10] bg-[var(--sf-paper-sunken)]">
            <img
              src="/portfolio/industrial-supply-direct/covers/cover.png"
              alt="Industrial Supply Direct B2B product page with tabbed technical specifications and volume tier pricing"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>

          <div className="p-4 bg-white border-t-2 border-[var(--sf-ink)] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[var(--sf-ink-soft)]">
            <span>
              <strong>Figure 1.0:</strong> Desktop overview featuring structured
              specification tables, volume pricing matrix, and 1-click RFQ
              submission drawer.
            </span>
            <span className="text-[var(--sf-primary)] font-bold">
              100% Native Shopify Liquid
            </span>
          </div>
        </div>
      </section>

      {/* Section 1: The Problem This Explores */}
      <section className="max-w-[1200px] mx-auto px-6 py-12 md:py-16 border-t-2 border-[var(--sf-ink)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--sf-primary)]">
                01 / Architectural Thesis
              </div>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--sf-ink)]"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                The friction in traditional B2B procurement
              </h2>
              <p className="text-sm text-[var(--sf-ink-mute)] font-medium leading-relaxed">
                Why standard Shopify themes fall apart under the weight of
                industrial specifications and complex wholesale rules.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-[var(--sf-ink-soft)] font-medium leading-relaxed">
            <p>
              Most industrial suppliers and distributors operate in digital
              paralysis. They are trapped between sluggish legacy ERP customer
              portals that require days of training to navigate, and generic
              consumer Shopify themes that treat a precision CNC fastener the
              exact same way they treat a cotton t-shirt.
            </p>
            <p>
              When an enterprise buyer visits a{" "}
              <strong className="text-[var(--sf-ink)] font-bold">
                Shopify B2B store
              </strong>
              , their procurement workflow requires instant answers to four
              critical questions:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="p-4 bg-[var(--sf-paper-sunken)] border-2 border-[var(--sf-ink)]">
                <span className="font-mono text-xs font-bold text-[var(--sf-primary)] block mb-1">
                  01. Compliance & Specs
                </span>
                <p className="text-sm text-[var(--sf-ink)] font-bold">
                  Does this exact alloy meet ASTM / ISO tolerances for our
                  machinery?
                </p>
              </div>
              <div className="p-4 bg-[var(--sf-paper-sunken)] border-2 border-[var(--sf-ink)]">
                <span className="font-mono text-xs font-bold text-[var(--sf-primary)] block mb-1">
                  02. Quantity Pricing
                </span>
                <p className="text-sm text-[var(--sf-ink)] font-bold">
                  What is our discounted unit price at 50, 500, or 2,500 units?
                </p>
              </div>
              <div className="p-4 bg-[var(--sf-paper-sunken)] border-2 border-[var(--sf-ink)]">
                <span className="font-mono text-xs font-bold text-[var(--sf-primary)] block mb-1">
                  03. Purchasing Flexibility
                </span>
                <p className="text-sm text-[var(--sf-ink)] font-bold">
                  Can we buy now via corporate card, or do we need a formal RFQ
                  with Net 30 terms?
                </p>
              </div>
              <div className="p-4 bg-[var(--sf-paper-sunken)] border-2 border-[var(--sf-ink)]">
                <span className="font-mono text-xs font-bold text-[var(--sf-primary)] block mb-1">
                  04. Logistics & Lead Time
                </span>
                <p className="text-sm text-[var(--sf-ink)] font-bold">
                  Can we download CAD models for assembly simulation and verify
                  dispatch hubs?
                </p>
              </div>
            </div>

            <p>
              Standard Shopify templates hide these answers behind buried tabs
              or force merchants to install half a dozen third-party apps. Each
              app injects external JavaScript, slows down load times, and
              creates a fragmented checkout flow. This project was designed to
              test whether all of these high-utility{" "}
              <strong className="text-[var(--sf-ink)] font-bold">
                Shopify B2B features
              </strong>{" "}
              could be engineered directly into the native theme architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Catalog Architecture & Tabbed Tech Specs */}
      <section className="max-w-[1200px] mx-auto px-6 py-12 md:py-16 border-t-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
        <div className="max-w-[960px] mb-8">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--sf-primary)] mb-2">
            02 / Data Model & Frontend Engineering
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--sf-ink)] mb-4"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Structuring technical catalogs with native Metaobjects
          </h2>
          <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] font-medium leading-relaxed">
            In industrial{" "}
            <strong className="text-[var(--sf-ink)] font-bold">
              shopify b2b commerce
            </strong>
            , product attributes are dense and multi-dimensional. We bypassed
            third-party spec table plugins entirely, creating a native schema
            using Shopify Metaobjects and variant-level metafields rendered
            directly into server-side Liquid templates.
          </p>
        </div>

        {/* Live Interactive Spec Viewer */}
        <div className="my-8">
          <IndustrialSpecViewer />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-5 bg-white border-2 border-[var(--sf-ink)] space-y-2">
            <Database className="w-5 h-5 text-[var(--sf-primary)]" />
            <h3 className="text-base font-bold text-[var(--sf-ink)]">
              Parametric Metaobject Schema
            </h3>
            <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
              Every SKU links to structured metaobjects for material
              composition, yield strength, and compliance standards. Updates to
              an alloy certification propagate across thousands of products
              instantly.
            </p>
          </div>

          <div className="p-5 bg-white border-2 border-[var(--sf-ink)] space-y-2">
            <Zap className="w-5 h-5 text-[var(--sf-primary)]" />
            <h3 className="text-base font-bold text-[var(--sf-ink)]">
              Zero-Layout-Shift Spec Tables
            </h3>
            <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
              Specification tables are rendered server-side via Liquid without
              client-side DOM rewrites. This guarantees instantaneous rendering
              with zero cumulative layout shift (CLS).
            </p>
          </div>

          <div className="p-5 bg-white border-2 border-[var(--sf-ink)] space-y-2">
            <FileSpreadsheet className="w-5 h-5 text-[var(--sf-primary)]" />
            <h3 className="text-base font-bold text-[var(--sf-ink)]">
              Direct CAD & Data Sheet CDN
            </h3>
            <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
              Native file metafields provide 1-click downloads for .STEP, .IGES,
              and vector PDF spec sheets, giving engineers the files they need
              for CAD assemblies before purchasing.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Tiered Volume Pricing Matrix */}
      <section className="max-w-[1200px] mx-auto px-6 py-12 md:py-16 border-t-2 border-[var(--sf-ink)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--sf-primary)]">
                03 / Margin & Pricing Logic
              </div>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--sf-ink)]"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Tiered volume pricing with instant client-side calculation
              </h2>
              <p className="text-sm text-[var(--sf-ink-mute)] font-medium leading-relaxed">
                Empowering bulk procurement with transparent quantity discounts
                and automatic tiered discounts without requiring third-party
                discount apps.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] font-medium leading-relaxed">
              B2B transactions live and die by price break transparency. Forcing
              a purchasing manager to add 500 items to their cart just to
              calculate whether they qualify for a wholesale tier creates
              massive drop-off.
            </p>
            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] font-medium leading-relaxed">
              We engineered a dynamic volume discount engine that displays clear
              quantity thresholds directly above the buy-box. When adjusting
              quantities via the stepper or input field, unit costs and total
              savings recalculate instantly.
            </p>

            {/* Live Pricing Calculator Demo */}
            <div className="my-6">
              <VolumePricingCalculator />
            </div>

            <div className="p-5 bg-[var(--sf-paper-sunken)] border-2 border-[var(--sf-ink)] space-y-3">
              <h4 className="text-sm font-bold font-mono uppercase text-[var(--sf-ink)] flex items-center gap-2">
                <Workflow className="w-4 h-4 text-[var(--sf-primary)]" />
                How the Discount Rules Execute in Checkout:
              </h4>
              <p className="text-xs sm:text-sm text-[var(--sf-ink-soft)] leading-relaxed">
                On standard Shopify stores, volume discount apps often create
                dummy variant duplicates or require external script tags. In
                this architecture, discounts are powered by native Shopify
                Functions (or Shopify Plus B2B Price Lists), ensuring that
                wholesale pricing synchronizes flawlessly with inventory counts,
                ERP inventory systems, and commercial invoices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Frictionless Quote Request & Hybrid Funnel */}
      <section className="max-w-[1200px] mx-auto px-6 py-12 md:py-16 border-t-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
        <div className="max-w-[960px] mb-8">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--sf-primary)] mb-2">
            04 / Lead & Sales Engineering
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--sf-ink)] mb-4"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Hybrid procurement: Instant self-checkout meets automated RFQ
          </h2>
          <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] font-medium leading-relaxed">
            In enterprise{" "}
            <strong className="text-[var(--sf-ink)] font-bold">
              shopify b2b ecommerce
            </strong>
            , buyers need two distinct paths: standard catalog items can be
            purchased immediately via corporate purchasing cards, while
            high-volume custom production runs require formal quotation
            approval.
          </p>
        </div>

        {/* Live Interactive RFQ Demo */}
        <div className="my-8">
          <RFQFlowDemo />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-white border-2 border-[var(--sf-ink)] space-y-3">
            <h3 className="text-base font-bold text-[var(--sf-ink)] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[var(--sf-sage)]" />
              Tax Exemption & Entity Validation
            </h3>
            <p className="text-xs sm:text-sm text-[var(--sf-ink-soft)] leading-relaxed">
              The RFQ flow captures verified business identifiers (GSTIN, VAT,
              DUNS) and state tax exemption certificates. This eliminates sales
              tax on wholesale purchases and tags customer profiles for
              automatic Net Terms invoicing.
            </p>
          </div>

          <div className="p-6 bg-white border-2 border-[var(--sf-ink)] space-y-3">
            <h3 className="text-base font-bold text-[var(--sf-ink)] flex items-center gap-2">
              <Zap className="w-4 h-4 text-[var(--sf-primary)]" />
              1-Click Draft Order Synchronization
            </h3>
            <p className="text-xs sm:text-sm text-[var(--sf-ink-soft)] leading-relaxed">
              When sales engineering finalizes customized quotes, Shopify
              automatically generates a pre-populated Draft Order. The client
              receives a secure checkout link locked with their agreed volume
              terms and custom freight routing.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Component Cross-Selling & AOV Architecture */}
      <section className="max-w-[1200px] mx-auto px-6 py-12 md:py-16 border-t-2 border-[var(--sf-ink)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--sf-primary)]">
                05 / Revenue Engineering
              </div>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--sf-ink)]"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Industrial component cross-selling & AOV design
              </h2>
              <p className="text-sm text-[var(--sf-ink-mute)] font-medium leading-relaxed">
                Why generic "You Might Also Like" recommendation widgets fail in
                B2B, and how technical part pairing drives higher order values.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-[var(--sf-ink-soft)] font-medium leading-relaxed">
            <p>
              In consumer fashion or beauty, cross-selling relies on visual
              aesthetics. In industrial manufacturing, cross-selling is an
              operational necessity: if an engineer buys high-pressure flange
              bolts, they also require the matching high-temperature gaskets,
              Belleville washers, and thread sealant.
            </p>
            <p>
              Rather than generic recommendation algorithms, we engineered a
              dedicated{" "}
              <strong className="text-[var(--sf-ink)] font-bold">
                Frequently Sourced With
              </strong>{" "}
              module built on native Shopify product metafields:
            </p>

            <div className="bg-[var(--sf-paper-sunken)] border-2 border-[var(--sf-ink)] p-6 space-y-4 shadow-[4px_4px_0_var(--sf-ink)]">
              <div className="flex items-center justify-between border-b border-[var(--sf-ink)] pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--sf-ink)]">
                  Contextual Parts Bundle Module
                </span>
                <span className="text-[11px] font-mono text-[var(--sf-primary)] font-bold">
                  1-Click Multi-Add
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white border border-[var(--sf-ink)] text-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--sf-sage)]" />
                    <div>
                      <div className="font-bold text-[var(--sf-ink)]">
                        Primary: M16 Flange Bolt (316 Stainless)
                      </div>
                      <div className="text-[var(--sf-ink-mute)] font-mono">
                        SKU: IND-316-M16
                      </div>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-[var(--sf-ink)]">
                    $34.90 / 250pk
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-white border border-[var(--sf-ink)] text-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--sf-primary)]" />
                    <div>
                      <div className="font-bold text-[var(--sf-ink)]">
                        Addon 1: High-Temp PTFE Gasket Set (16mm)
                      </div>
                      <div className="text-[var(--sf-ink-mute)] font-mono">
                        SKU: GSK-PTFE-16
                      </div>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-[var(--sf-ink)]">
                    +$14.20
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-white border border-[var(--sf-ink)] text-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--sf-primary)]" />
                    <div>
                      <div className="font-bold text-[var(--sf-ink)]">
                        Addon 2: Heavy-Duty Threadlocking Sealant (50ml)
                      </div>
                      <div className="text-[var(--sf-ink-mute)] font-mono">
                        SKU: SLN-HD-050
                      </div>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-[var(--sf-ink)]">
                    +$19.80
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <span className="text-[var(--sf-ink-soft)]">
                  Total Assembly Bundle:{" "}
                  <strong className="text-[var(--sf-ink)]">$68.90</strong>
                </span>
                <span className="px-3 py-1.5 bg-[var(--sf-ink)] text-white font-bold border border-[var(--sf-ink)]">
                  Add Complete Assembly to Cart
                </span>
              </div>
            </div>

            <p>
              This architectural pattern enables multi-SKU selection with a
              single cart API payload, cutting friction for procurement teams
              while naturally elevating Average Order Value (AOV) per
              transaction.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Performance & Clean Code Standards */}
      <section className="max-w-[1200px] mx-auto px-6 py-12 md:py-16 border-t-2 border-[var(--sf-ink)] bg-white">
        <div className="max-w-[960px] mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--sf-sage-soft)] text-[var(--sf-sage-deep)] border border-[var(--sf-sage)] text-xs font-mono font-bold uppercase tracking-widest mb-3">
            Clean Engineering Standards
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--sf-ink)] mb-4"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Zero-App-Bloat Architecture & Core Web Vitals
          </h2>
          <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] font-medium max-w-[720px] mx-auto leading-relaxed">
            Every added third-party{" "}
            <strong className="text-[var(--sf-ink)] font-bold">
              shopify b2b app
            </strong>{" "}
            adds 200–500ms of latency, multiple network roundtrips, and CSS
            conflicts. Building native theme features preserves peak speed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-[var(--sf-paper-sunken)] border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] space-y-2">
            <span className="text-3xl font-black text-[var(--sf-primary)] font-mono block">
              0.6s
            </span>
            <h4 className="text-sm font-bold text-[var(--sf-ink)]">
              First Contentful Paint (FCP)
            </h4>
            <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
              Static Liquid rendering and zero external CSS frameworks ensure
              immediate browser paint.
            </p>
          </div>

          <div className="p-6 bg-[var(--sf-paper-sunken)] border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] space-y-2">
            <span className="text-3xl font-black text-emerald-700 font-mono block">
              &lt; 0.01
            </span>
            <h4 className="text-sm font-bold text-[var(--sf-ink)]">
              Cumulative Layout Shift (CLS)
            </h4>
            <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
              Pre-allocated table bounding boxes prevent visual jumps while
              specification matrices load.
            </p>
          </div>

          <div className="p-6 bg-[var(--sf-paper-sunken)] border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] space-y-2">
            <span className="text-3xl font-black text-[var(--sf-ink)] font-mono block">
              0 Apps
            </span>
            <h4 className="text-sm font-bold text-[var(--sf-ink)]">
              For Spec Tables & Tiers
            </h4>
            <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
              All tabular data, volume calculations, and RFQ forms execute
              natively inside the theme code.
            </p>
          </div>

          <div className="p-6 bg-[var(--sf-paper-sunken)] border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] space-y-2">
            <span className="text-3xl font-black text-[var(--sf-gold)] font-mono block">
              100%
            </span>
            <h4 className="text-sm font-bold text-[var(--sf-ink)]">
              Direct Developer Access
            </h4>
            <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
              No account managers or middleman handoffs. You work directly with
              the developer building the store.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: B2B Shopify FAQ Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-12 md:py-16 border-t-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
        <div className="max-w-[960px] mx-auto mb-10">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--sf-primary)] mb-2">
            Frequently Asked Questions
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--sf-ink)] mb-4"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Engineering Shopify for B2B & Wholesale
          </h2>
          <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] font-medium leading-relaxed">
            Direct, technical answers to common questions about structuring
            high-volume B2B operations on Shopify.
          </p>
        </div>

        <div className="max-w-[960px] mx-auto space-y-4">
          {[
            {
              question:
                "Can Shopify support both B2B wholesale and DTC retail on the same store?",
              answer:
                "Yes. Depending on your licensing (Shopify Plus vs. standard Shopify), you can either utilize native Shopify Plus B2B Company Profiles and Price Lists, or build a hybrid theme with customer tag gating and custom Liquid templates. This allows retail visitors to view MSRP prices and checkout instantly, while authenticated wholesale buyers unlock dedicated tiered price lists and Net Terms.",
            },
            {
              question:
                "How do custom quote requests work alongside standard Shopify checkout?",
              answer:
                "We implement a hybrid purchasing workflow directly on the Product Detail Page (PDP) and slide-out cart. Buyers can either complete an immediate purchase using a credit card or click 'Request Wholesale Quote'. The quote funnel captures project specifications, CAD attachments, and company tax exemption details, automatically generating a Draft Order inside Shopify Admin for sales team review.",
            },
            {
              question:
                "How are complex technical specifications and CAD files managed natively in Shopify?",
              answer:
                "We structure technical parameters using Shopify Metaobjects and variant-level metafields rather than third-party plugins. This allows you to define parametric fields (tensile strength, tolerance classes, operating temperatures) in a structured admin schema, automatically rendering them in responsive, zero-layout-shift Liquid tables.",
            },
            {
              question:
                "When should a merchant build custom theme features vs. installing a B2B Shopify app?",
              answer:
                "Installing 5+ third-party apps creates heavy script bloat, monthly subscription overhead ($200–$800/month), and fragmented UI styling that breaks across devices. For high-traffic catalogs, building native Liquid spec tables, volume pricing tiers, and RFQ forms directly into your theme ensures sub-second load times, total styling control, and zero monthly plugin fees.",
            },
            {
              question:
                "How does ScaleFront handle large catalog migrations from legacy ERP systems?",
              answer:
                "We build custom data transformation pipelines using the Shopify Admin GraphQL API. We map legacy ERP fields (from systems like SAP, NetSuite, Epicor, or Microsoft Dynamics) into Shopify Products, Metaobjects, and Price Lists with automated batch scripts to maintain data integrity.",
            },
            {
              question:
                "What is the advantage of working with a solo technical developer over an agency?",
              answer:
                "You communicate directly with the engineer writing your Liquid code, designing your Metaobject architecture, and testing your API integrations. There are no account managers, no miscommunicated specifications, and no bloated agency overhead—just focused, high-precision execution.",
            },
          ].map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-[var(--sf-ink)] p-6 shadow-[4px_4px_0_var(--sf-ink)] space-y-2"
            >
              <h3 className="text-base sm:text-lg font-bold text-[var(--sf-ink)] flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-[var(--sf-primary)] shrink-0 mt-0.5" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[var(--sf-ink-soft)] font-medium leading-relaxed pl-7.5">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Conversion CTA & Internal Links */}
      <section className="max-w-[1200px] mx-auto px-6 py-16 md:py-24 border-t-2 border-[var(--sf-ink)]">
        <div
          className="w-full bg-[var(--sf-ink)] text-white p-8 md:p-14 border-2 border-[var(--sf-ink)] relative overflow-hidden"
          style={{ boxShadow: "10px 10px 0 var(--sf-primary)" }}
        >
          <div className="max-w-[720px] space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[var(--sf-gold)]">
              <Sparkles className="w-3.5 h-3.5" />
              Direct Technical Collaboration
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Ready to build high-performance B2B commerce on Shopify?
            </h2>

            <p className="text-base sm:text-lg text-[var(--sf-paper-sunken)] leading-relaxed font-medium">
              Whether you are migrating a 50,000+ SKU industrial catalog or need
              native volume pricing and RFQ workflows engineered into your
              Shopify storefront, let&apos;s discuss your technical
              requirements.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--sf-primary)] text-white text-sm font-mono font-bold uppercase tracking-wider border-2 border-white shadow-[4px_4px_0_white] hover:bg-[var(--sf-primary-deep)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <span>Schedule a Technical Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent text-white text-sm font-mono font-bold uppercase tracking-wider border-2 border-white hover:bg-white hover:text-[var(--sf-ink)] transition-all"
              >
                <span>View More Portfolio Builds</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Relevant Service Links */}
        <div className="mt-12 pt-8 border-t border-[var(--sf-ink-mute)]/30 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[var(--sf-ink-mute)]">
          <span className="font-bold uppercase tracking-wider text-[var(--sf-ink)]">
            Explore Related Shopify Services:
          </span>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services/theme-development"
              className="text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)] underline transition-colors"
            >
              Custom Theme Development
            </Link>
            <span>•</span>
            <Link
              href="/services/custom-shopify-apps"
              className="text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)] underline transition-colors"
            >
              Custom Shopify Apps
            </Link>
            <span>•</span>
            <Link
              href="/services/shopify-plus-migration"
              className="text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)] underline transition-colors"
            >
              Shopify Plus Migration
            </Link>
            <span>•</span>
            <Link
              href="/services/headless-commerce"
              className="text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)] underline transition-colors"
            >
              Headless Commerce
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
