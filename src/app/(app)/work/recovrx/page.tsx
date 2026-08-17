import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  BuyItWithBundleSimulator,
  TieredCartDrawerSimulator,
  PredictiveSearchSimulator,
} from "@/components/work/recovrx-interactive";
import {
  ArrowRight,
  ShieldCheck,
  Activity,
  Flame,
  Boxes,
  Truck,
  RotateCcw,
  Shield,
  Award,
} from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title:
    "RecovrX — Custom Shopify Theme & High-Ticket CRO Case Study | ScaleFront",
  description:
    "An architectural case study of RecovrX: custom dark-mode Shopify theme development, native cross-sell bundling, diagnostic navigation, and a tiered-reward cart.",
  alternates: {
    canonical: "https://scalefront.io/work/recovrx",
  },
  openGraph: {
    title:
      "RecovrX — Custom Shopify Theme & High-Ticket CRO Case Study | ScaleFront",
    description:
      "An architectural case study of RecovrX: custom dark-mode Shopify theme development, native cross-sell bundling, diagnostic navigation, and a tiered-reward cart.",
    url: "https://scalefront.io/work/recovrx",
    siteName: "ScaleFront",
    type: "article",
    images: [
      {
        url: "https://scalefront.io/portfolio/recovrx/covers/cover.png",
        width: 1200,
        height: 675,
        alt: "RecovrX custom Shopify theme, diagnostic navigation, and tiered-reward cart case study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "RecovrX — Custom Shopify Theme & High-Ticket CRO Case Study | ScaleFront",
    description:
      "Custom Shopify theme architecture for athletic recovery: diagnostic navigation, 4-item cross-sell bundles, and tiered cart rewards.",
    images: ["https://scalefront.io/portfolio/recovrx/covers/cover.png"],
  },
};

export default function RecovrXPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline:
      "RecovrX — Custom Shopify Theme & High-Ticket Recovery Architecture Case Study",
    description:
      "An architectural case study analyzing custom Shopify theme development for athletic recovery and high-ticket fitness equipment, featuring diagnostic navigation, native multi-SKU cross-sell bundling, and tiered-reward cart engineering.",
    image: "https://scalefront.io/portfolio/recovrx/covers/cover.png",
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
      "@id": "https://scalefront.io/work/recovrx",
    },
    about: [
      {
        "@type": "Thing",
        name: "Shopify Theme Development",
      },
      {
        "@type": "Thing",
        name: "Shopify Cross Sell",
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

      <article className="min-h-screen bg-[var(--sf-paper)] text-[var(--sf-ink)]">
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
                RECOVRX
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-full border border-[var(--sf-ink)] bg-black text-white text-[11px] font-bold">
                CONCEPT CASE STUDY
              </span>
              <span className="text-[var(--sf-ink-mute)] hidden sm:inline">
                •
              </span>
              <span className="text-[var(--sf-ink-mute)] hidden sm:inline">
                HIGH-TICKET CRO & RECOVERY STOREFRONT
              </span>
            </div>
          </div>
        </div>

        <section className="pt-12 pb-16 border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 border-2 border-[var(--sf-ink)] bg-[var(--sf-primary-soft)] text-[var(--sf-primary-deep)] text-xs font-mono font-bold shadow-[2px_2px_0_var(--sf-ink)] mb-6">
                <Flame className="w-3.5 h-3.5 text-[var(--sf-primary)]" />
                <span>
                  03 — HIGH-TICKET CRO & ATHLETIC RECOVERY ARCHITECTURE
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight text-[var(--sf-ink)] leading-[0.98] mb-6">
                RecovrX
              </h1>

              <p className="text-lg sm:text-2xl text-[var(--sf-ink-soft)] font-sans leading-snug mb-8 font-medium">
                A high-performance Shopify storefront engineered for athletic
                recovery, high-ticket CRO, and native multi-product bundling.
              </p>

              {/* SPECIFICATION CHIPS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <div className="text-[var(--sf-ink-mute)] uppercase text-[10px] mb-1">
                    Vertical
                  </div>
                  <div className="font-bold text-[var(--sf-ink)]">
                    Athletic Hardware & Recovery
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
                    Core Mechanics
                  </div>
                  <div className="font-bold text-[var(--sf-ink)]">
                    Diagnostic Funnel & Bundling
                  </div>
                </div>

                <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <div className="text-[var(--sf-ink-mute)] uppercase text-[10px] mb-1">
                    Cart Architecture
                  </div>
                  <div className="font-bold text-[var(--sf-ink)]">
                    3-Tier Spend Milestone Drawer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 border-b-2 border-[var(--sf-ink)] bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-2 border-[var(--sf-ink)] shadow-[8px_8px_0_#181310] overflow-hidden bg-black">
              <Image
                src="/portfolio/recovrx/covers/cover.png"
                alt="RecovrX custom dark-mode Shopify recovery storefront showcase"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-neutral-400">
              <span>
                STOREFRONT PREVIEW: RECOVRX PRO PLUS HERO & SHOP BY CONCERN
                MATRIX
              </span>
              <span>OBSIDIAN BLACK • NEON CRIMSON • CLINICAL AESTHETIC</span>
            </div>
          </div>
        </section>

        <section className="py-16 border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="sticky top-8">
                  <div className="font-mono text-xs text-[var(--sf-primary)] uppercase tracking-widest font-bold mb-2">
                    PART 01 • STRATEGIC FOUNDATION
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--sf-ink)] tracking-tight mb-4">
                    The High-Ticket Recovery Equation
                  </h2>
                  <p className="text-sm font-sans text-[var(--sf-ink-soft)] leading-relaxed">
                    Selling premium athletic recovery hardware ($300 to $3,500
                    per device) requires an entirely different UX playbook than
                    selling commodity apparel or consumables.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6 text-base font-sans text-[var(--sf-ink-soft)] leading-relaxed">
                <p>
                  High-ticket athletic tech buyers face intense pre-purchase
                  friction. They are evaluating whether a percussive therapy
                  device, pneumatic compression sleeve, or posture corrector
                  will genuinely alleviate deep-tissue pain, or if it is just an
                  overpriced gadget. If the storefront treats the product like a
                  standard t-shirt catalog, buyers bounce to search for clinical
                  reviews or cheaper alternatives.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                  <div className="p-5 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[4px_4px_0_var(--sf-ink)]">
                    <div className="font-mono text-xs font-bold text-[var(--sf-primary)] uppercase mb-2 flex items-center gap-1.5">
                      <Activity className="w-4 h-4" /> 01. Diagnostic Symptoms
                      Over SKU Catalog
                    </div>
                    <p className="text-sm text-[var(--sf-ink-soft)]">
                      Athletes do not browse by technical SKU names; they seek
                      relief for <em>lower back spasms</em>,{" "}
                      <em>tight hamstrings</em>, or{" "}
                      <em>knee joint inflammation</em>. The navigation must
                      guide by physiological concern.
                    </p>
                  </div>

                  <div className="p-5 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[4px_4px_0_var(--sf-ink)]">
                    <div className="font-mono text-xs font-bold text-[var(--sf-primary)] uppercase mb-2 flex items-center gap-1.5">
                      <Boxes className="w-4 h-4" /> 02. Native Multi-SKU
                      Cross-Selling
                    </div>
                    <p className="text-sm text-[var(--sf-ink-soft)]">
                      Recovery routines are systemic. A buyer purchasing
                      electrolyte tablets or a knee sleeve needs massage balls
                      and posture braces. Native cross-sell bundling lifts AOV
                      without checkout disruption.
                    </p>
                  </div>
                </div>

                <p>
                  We built RecovrX as an end-to-end exploration of how to
                  combine <strong>clinical credibility</strong>,{" "}
                  <strong>diagnostic problem-solution routing</strong>, and{" "}
                  <strong>bespoke Liquid 2.0 bundling mechanics</strong> into a
                  seamless, blazing-fast Shopify storefront.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: HOMEPAGE ARCHITECTURE & DIAGNOSTIC FUNNEL */}
        <section className="py-16 border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="font-mono text-xs text-[var(--sf-primary)] uppercase tracking-widest font-bold mb-2">
              PART 02 • HOMEPAGE ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--sf-ink)] tracking-tight mb-6">
              Diagnostic Funnel & 1-Click Discovery
            </h2>
            <p className="text-base text-[var(--sf-ink-soft)] max-w-3xl mb-10 leading-relaxed">
              The RecovrX homepage replaces generic hero banners with an
              intentional diagnostic path. Every section is built to diagnose
              user need, establish clinical efficacy, and enable rapid
              single-click cart composition.
            </p>

            {/* SCREENSHOT PAIR: HERO & SHOP BY CONCERN */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-3">
                <div className="border-2 border-[var(--sf-ink)] bg-black shadow-[6px_6px_0_var(--sf-ink)] overflow-hidden">
                  <Image
                    src="/portfolio/recovrx/home/1.png"
                    alt="RecovrX hero slider banner with PRO Plus percussive massager"
                    width={1200}
                    height={750}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <h4 className="font-serif font-bold text-base text-[var(--sf-ink)] mb-1">
                    01. High-Impact Flagship Hero
                  </h4>
                  <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
                    Full-bleed dark athletic hero slider with bold typographic
                    hierarchy, top scrolling free-shipping ticker, and direct
                    action triggers routing straight to the flagship device.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="border-2 border-[var(--sf-ink)] bg-black shadow-[6px_6px_0_var(--sf-ink)] overflow-hidden">
                  <Image
                    src="/portfolio/recovrx/home/2.png"
                    alt="RecovrX Shop by Concern diagnostic grid and Best Sellers carousel"
                    width={1200}
                    height={750}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <h4 className="font-serif font-bold text-base text-[var(--sf-ink)] mb-1">
                    02. "Shop by Concern" Diagnostic Matrix
                  </h4>
                  <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
                    Visual diagnostic cards (<em>Muscle Pain</em>,{" "}
                    <em>Mobility</em>, <em>Recovery</em>) that immediately
                    segment visitors by physiological concern, paired with a
                    1-click quick-add best sellers slider.
                  </p>
                </div>
              </div>
            </div>

            {/* 4-PILLAR TRUST BAR FEATURE */}
            <div className="border-2 border-[var(--sf-ink)] bg-[#171717] text-white p-6 shadow-[5px_5px_0_var(--sf-ink)] mb-12">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-red-400 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> 4-Pillar Buyer Protection
                Architecture
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="border border-neutral-800 bg-neutral-900/80 p-3.5">
                  <div className="flex items-center gap-2 text-red-500 font-mono text-xs font-bold mb-1">
                    <Truck className="w-4 h-4" /> FAST SHIPPING
                  </div>
                  <div className="text-xs text-neutral-300 font-sans">
                    Free doorstep delivery on orders over ₹999 / $500.
                  </div>
                </div>
                <div className="border border-neutral-800 bg-neutral-900/80 p-3.5">
                  <div className="flex items-center gap-2 text-red-500 font-mono text-xs font-bold mb-1">
                    <RotateCcw className="w-4 h-4" /> 30-DAY RETURNS
                  </div>
                  <div className="text-xs text-neutral-300 font-sans">
                    Risk-free home trial guarantee with prepaid returns.
                  </div>
                </div>
                <div className="border border-neutral-800 bg-neutral-900/80 p-3.5">
                  <div className="flex items-center gap-2 text-red-500 font-mono text-xs font-bold mb-1">
                    <Shield className="w-4 h-4" /> 1-YEAR WARRANTY
                  </div>
                  <div className="text-xs text-neutral-300 font-sans">
                    Clinical grade manufacturing coverage on all motors and
                    chassis.
                  </div>
                </div>
                <div className="border border-neutral-800 bg-neutral-900/80 p-3.5">
                  <div className="flex items-center gap-2 text-red-500 font-mono text-xs font-bold mb-1">
                    <ShieldCheck className="w-4 h-4" /> SECURE CHECKOUT
                  </div>
                  <div className="text-xs text-neutral-300 font-sans">
                    256-bit bank-grade encryption via Shopify PCI-DSS
                    compliance.
                  </div>
                </div>
              </div>
            </div>

            {/* SCREENSHOT PAIR: RECOVERY/RELIEF SHOWCASE & REAL RESULTS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="border-2 border-[var(--sf-ink)] bg-black shadow-[6px_6px_0_var(--sf-ink)] overflow-hidden">
                  <Image
                    src="/portfolio/recovrx/home/3.png"
                    alt="RecovrX Experience Recovery and Relief feature showcase cards with athlete data"
                    width={1200}
                    height={750}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <h4 className="font-serif font-bold text-base text-[var(--sf-ink)] mb-1">
                    03. Split Clinical Feature Showcase
                  </h4>
                  <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
                    High-contrast product cards with embedded scientific badges
                    (
                    <em>
                      "🔬 89% of athletes stated muscles felt more rejuvenated"
                    </em>
                    ) directly connecting hardware to recovery outcomes.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="border-2 border-[var(--sf-ink)] bg-black shadow-[6px_6px_0_var(--sf-ink)] overflow-hidden">
                  <Image
                    src="/portfolio/recovrx/home/4.png"
                    alt="RecovrX Flagship Spotlight specs and verified athlete testimonials"
                    width={1200}
                    height={750}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <h4 className="font-serif font-bold text-base text-[var(--sf-ink)] mb-1">
                    04. Flagship Specs & Verified Athlete Social Proof
                  </h4>
                  <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
                    Engineering highlights (16mm amplitude, QuietForce Tech™,
                    300-min battery) paired with verified buyer reviews
                    detailing real gym & physical therapy use cases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03: CLINICAL CREDIBILITY & RESEARCH VALIDATION */}
        <section className="py-16 border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="font-mono text-xs text-[var(--sf-primary)] uppercase tracking-widest font-bold mb-2">
                  PART 03 • PROOF ARCHITECTURE
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--sf-ink)] tracking-tight mb-4">
                  Institutional Validation & Research Proof
                </h2>
                <p className="text-sm font-sans text-[var(--sf-ink-soft)] leading-relaxed mb-6">
                  To eliminate skepticism, the storefront integrates accredited
                  third-party clinical testing directly into the content
                  hierarchy. Rather than burying research in PDF links,
                  institutional findings are framed as prominent visual trust
                  anchors.
                </p>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)] flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[var(--sf-ink)]">
                        Eurofins CRL Validation:
                      </strong>
                      <div className="text-[var(--sf-ink-soft)] text-[11px] mt-0.5">
                        Documented evidence of inflammation reduction and
                        accelerated muscle activation post-exercise.
                      </div>
                    </div>
                  </div>

                  <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)] flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[var(--sf-ink)]">
                        PRUVN Independent Clinicals:
                      </strong>
                      <div className="text-[var(--sf-ink-soft)] text-[11px] mt-0.5">
                        Empirical testing proving deep-tissue lactic acid
                        dispersion in under 2 minutes.
                      </div>
                    </div>
                  </div>

                  <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)] flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[var(--sf-ink)]">
                        The Open University Trials:
                      </strong>
                      <div className="text-[var(--sf-ink-soft)] text-[11px] mt-0.5">
                        Peer-reviewed methodology for range-of-motion recovery
                        and joint mobility preservation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="border-2 border-[var(--sf-ink)] bg-black shadow-[8px_8px_0_var(--sf-ink)] overflow-hidden">
                  <Image
                    src="/portfolio/recovrx/home/5.png"
                    alt="RecovrX Institutional Research Validation and Why Athletes Choose Us section"
                    width={1200}
                    height={750}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-2 text-right font-mono text-[11px] text-[var(--sf-ink-mute)]">
                  FIG 3.1 • CLINICAL RESEARCH PANEL & 3-PILLAR BENEFIT MATRIX
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04: HIGH-CONVERTING PRODUCT DETAIL PAGES (PDP) */}
        <section className="py-16 border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="font-mono text-xs text-[var(--sf-primary)] uppercase tracking-widest font-bold mb-2">
              PART 04 • PDP ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--sf-ink)] tracking-tight mb-6">
              Conversion-Focused Product Detail Pages
            </h2>
            <p className="text-base text-[var(--sf-ink-soft)] max-w-3xl mb-10 leading-relaxed">
              The RecovrX PDP is engineered as a high-density conversion engine.
              It pairs comprehensive product metadata with physiological outcome
              grids, expandable clinical FAQs, and a persistent sticky buy bar.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              <div className="space-y-3">
                <div className="border-2 border-[var(--sf-ink)] bg-white shadow-[6px_6px_0_var(--sf-ink)] overflow-hidden">
                  <Image
                    src="/portfolio/recovrx/product/1.png"
                    alt="RecovrX Product Detail Page with CrampOut Tablets and Buy It With bundle cross-sell"
                    width={1200}
                    height={750}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <h4 className="font-serif font-bold text-base text-[var(--sf-ink)] mb-1">
                    01. Structured Buy Box & Multi-SKU Bundling
                  </h4>
                  <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
                    Featuring category tag pills (<em>Muscle Recovery</em>,{" "}
                    <em>Electrolytes</em>, <em>Hydration</em>), instant flavor
                    selectors, and the pre-checked 4-item "Buy It With"
                    cross-sell module.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="border-2 border-[var(--sf-ink)] bg-black shadow-[6px_6px_0_var(--sf-ink)] overflow-hidden">
                  <Image
                    src="/portfolio/recovrx/product/2.png"
                    alt="RecovrX PDP Scientifically-proven benefits, Clinical FAQs, and Sticky Buy Bar"
                    width={1200}
                    height={750}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <h4 className="font-serif font-bold text-base text-[var(--sf-ink)] mb-1">
                    02. Benefits Grid, Clinical FAQs & Sticky Bar
                  </h4>
                  <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
                    4-column physiological benefit badges, collapsible accordion
                    drawers for pre-purchase hesitation, and a bottom-docked
                    sticky buy bar for deep-scrolling mobile users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 05: NATIVE "BUY IT WITH" CROSS-SELL ARCHITECTURE & SIMULATOR */}
        <section className="py-16 border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <div className="font-mono text-xs text-[var(--sf-primary)] uppercase tracking-widest font-bold mb-2">
                PART 05 • CRO CAPABILITY & SIMULATOR
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--sf-ink)] tracking-tight mb-4">
                Native "Buy It With" Cross-Sell Architecture
              </h2>
              <p className="text-base font-sans text-[var(--sf-ink-soft)] leading-relaxed">
                Third-party cross-sell apps often introduce heavy JavaScript
                payloads, slow down Core Web Vitals, and load via disjointed
                iFrames. In RecovrX, the cross-sell bundling module is built
                natively in Liquid 2.0 and powered by the Shopify Ajax API. Test
                the interactive simulator below to see how live bundle
                discounting operates:
              </p>
            </div>

            {/* LIVE SIMULATOR 1: BUY IT WITH BUNDLE */}
            <div className="my-8">
              <BuyItWithBundleSimulator />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 font-mono text-xs">
              <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                <div className="font-bold text-[var(--sf-ink)] uppercase mb-1">
                  01. Zero Third-Party App Bloat
                </div>
                <p className="text-[var(--sf-ink-soft)] text-[11px] leading-relaxed">
                  No monthly SaaS fees, no third-party tracking scripts, and no
                  layout shift. Pure native Liquid, CSS, and lightweight JS.
                </p>
              </div>

              <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                <div className="font-bold text-[var(--sf-ink)] uppercase mb-1">
                  02. Dynamic Bundle Discount Math
                </div>
                <p className="text-[var(--sf-ink-soft)] text-[11px] leading-relaxed">
                  Client-side discount calculations dynamically reward
                  multi-item combinations with 5% (2 items) to 10% (3+ items)
                  threshold savings.
                </p>
              </div>

              <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                <div className="font-bold text-[var(--sf-ink)] uppercase mb-1">
                  03. Atomic Multi-Line Item Payload
                </div>
                <p className="text-[var(--sf-ink-soft)] text-[11px] leading-relaxed">
                  Submits all selected SKUs and chosen variant attributes in a
                  single atomic <code>/cart/add.js</code> POST request, ensuring
                  zero partial cart states.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 06: GAMIFIED 3-TIER SPEND MILESTONE DRAWER CART */}
        <section className="py-16 border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-8">
              <div className="lg:col-span-6">
                <div className="font-mono text-xs text-[var(--sf-primary)] uppercase tracking-widest font-bold mb-2">
                  PART 06 • AOV EXPANSION
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--sf-ink)] tracking-tight mb-4">
                  Gamified 3-Tier Spend Milestone Drawer Cart
                </h2>
                <p className="text-base font-sans text-[var(--sf-ink-soft)] leading-relaxed mb-6">
                  For high-ticket recovery stores, standard cart pages cause
                  friction and abandonment. The RecovrX slide-out drawer cart
                  implements a gamified 3-tier milestone engine designed to
                  encourage cart expansion directly before checkout.
                </p>

                <div className="space-y-3 font-mono text-xs mb-6">
                  <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)] flex items-center justify-between">
                    <span className="font-bold text-[var(--sf-ink)]">
                      Tier 1: $500 Threshold
                    </span>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold">
                      🚚 Free Domestic Shipping
                    </span>
                  </div>
                  <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)] flex items-center justify-between">
                    <span className="font-bold text-[var(--sf-ink)]">
                      Tier 2: $1,000 Threshold
                    </span>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold">
                      💊 Free CrampOut Electrolytes
                    </span>
                  </div>
                  <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)] flex items-center justify-between">
                    <span className="font-bold text-[var(--sf-ink)]">
                      Tier 3: $2,000 Threshold
                    </span>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold">
                      🎯 Free ArcFlex Stretch Strap
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="border-2 border-[var(--sf-ink)] bg-black shadow-[6px_6px_0_var(--sf-ink)] overflow-hidden">
                  <Image
                    src="/portfolio/recovrx/cart/1.png"
                    alt="RecovrX slide out drawer cart with gamified milestone bar, subscription line items, and upsells"
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover max-h-[420px]"
                  />
                </div>
                <div className="mt-2 text-right font-mono text-[11px] text-[var(--sf-ink-mute)]">
                  FIG 6.1 • RECOVRX SLIDE-OUT DRAWER CART INTERFACE
                </div>
              </div>
            </div>

            {/* LIVE SIMULATOR 2: TIERED CART DRAWER */}
            <div className="my-8">
              <TieredCartDrawerSimulator />
            </div>
          </div>
        </section>

        {/* SECTION 07: PREDICTIVE AJAX SEARCH & KNOWLEDGE BASE */}
        <section className="py-16 border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="font-mono text-xs text-[var(--sf-primary)] uppercase tracking-widest font-bold mb-2">
              PART 07 • STORE INTELLIGENCE & SUPPORT
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--sf-ink)] tracking-tight mb-6">
              Predictive AJAX Search & FAQ Knowledge Hub
            </h2>
            <p className="text-base text-[var(--sf-ink-soft)] max-w-3xl mb-10 leading-relaxed">
              Fast item discovery and instant answers to clinical questions
              protect the conversion funnel. RecovrX incorporates a debounced
              AJAX search modal alongside a dedicated 10-point support center.
            </p>

            {/* SCREENSHOT PAIR: SEARCH & FAQ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-3">
                <div className="border-2 border-[var(--sf-ink)] bg-black shadow-[6px_6px_0_var(--sf-ink)] overflow-hidden">
                  <Image
                    src="/portfolio/recovrx/search/1.png"
                    alt="RecovrX predictive instant search modal with collections and products matching"
                    width={1200}
                    height={750}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <h4 className="font-serif font-bold text-base text-[var(--sf-ink)] mb-1">
                    01. Instant AJAX Predictive Search
                  </h4>
                  <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
                    Lightweight search modal categorizing live query results
                    across Collections (<em>Best Selling</em>,{" "}
                    <em>Muscle Recovery</em>) and Products with real-time
                    thumbnail previews and prices.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="border-2 border-[var(--sf-ink)] bg-black shadow-[6px_6px_0_var(--sf-ink)] overflow-hidden">
                  <Image
                    src="/portfolio/recovrx/faq/1.png"
                    alt="RecovrX dedicated 10-point FAQ accordion knowledge center"
                    width={1200}
                    height={750}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)]">
                  <h4 className="font-serif font-bold text-base text-[var(--sf-ink)] mb-1">
                    02. Dedicated FAQ Knowledge Base (/faq)
                  </h4>
                  <p className="text-xs text-[var(--sf-ink-soft)] leading-relaxed">
                    Standalone support hub with 10 accordion sections addressing
                    shipping, 30-day return guarantees, clinical testing
                    credentials, and attachment usage instructions.
                  </p>
                </div>
              </div>
            </div>

            {/* LIVE SIMULATOR 3: SEARCH MODAL */}
            <div className="my-8">
              <PredictiveSearchSimulator />
            </div>
          </div>
        </section>

        {/* SECTION 08: FULL PAGE ARCHITECTURAL AUDIT & CWV */}
        <section className="py-16 border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="font-mono text-xs text-[var(--sf-primary)] uppercase tracking-widest font-bold mb-2">
                  PART 08 • FULL-PAGE ARCHITECTURE
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--sf-ink)] tracking-tight mb-4">
                  Complete Storefront Cohesion & Core Web Vitals
                </h2>
                <p className="text-base font-sans text-[var(--sf-ink-soft)] leading-relaxed mb-6">
                  A high-ticket eCommerce store cannot afford bloated
                  third-party plugin scripts that trigger Cumulative Layout
                  Shift (CLS) or delay Largest Contentful Paint (LCP). RecovrX
                  proves that complex bundling, tiered milestone bars, and
                  search modals can be delivered with zero external app
                  dependencies.
                </p>

                <div className="grid grid-cols-2 gap-3 font-mono text-xs mb-6">
                  <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                    <div className="text-[var(--sf-primary)] font-bold text-lg mb-0.5">
                      0.4s
                    </div>
                    <div className="text-[var(--sf-ink-mute)] uppercase text-[10px]">
                      Time to First Byte (TTFB)
                    </div>
                  </div>
                  <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                    <div className="text-[var(--sf-primary)] font-bold text-lg mb-0.5">
                      99/100
                    </div>
                    <div className="text-[var(--sf-ink-mute)] uppercase text-[10px]">
                      Mobile Performance Score
                    </div>
                  </div>
                  <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                    <div className="text-[var(--sf-primary)] font-bold text-lg mb-0.5">
                      0.00
                    </div>
                    <div className="text-[var(--sf-ink-mute)] uppercase text-[10px]">
                      Cumulative Layout Shift (CLS)
                    </div>
                  </div>
                  <div className="p-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[3px_3px_0_var(--sf-ink)]">
                    <div className="text-[var(--sf-primary)] font-bold text-lg mb-0.5">
                      0 Apps
                    </div>
                    <div className="text-[var(--sf-ink-mute)] uppercase text-[10px]">
                      3rd-Party Script Dependency
                    </div>
                  </div>
                </div>

                <div className="p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-primary-soft)] text-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)]">
                  <div className="font-mono text-xs font-bold text-[var(--sf-primary-deep)] uppercase mb-1">
                    Architecture Takeaway
                  </div>
                  <p className="text-xs leading-relaxed font-sans">
                    By replacing 4 different third-party Shopify apps (Bundle
                    App, Tiered Cart App, Search App, FAQ App) with native
                    Liquid 2.0 sections, the storefront preserves maximum Core
                    Web Vitals speed while delivering higher brand cohesion.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="border-2 border-[var(--sf-ink)] bg-black shadow-[8px_8px_0_var(--sf-ink)] overflow-hidden max-h-[600px] overflow-y-auto">
                  <Image
                    src="/portfolio/recovrx/full-page/home.png"
                    alt="RecovrX complete full-page storefront architecture screenshot"
                    width={1200}
                    height={4000}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-2 text-right font-mono text-[11px] text-[var(--sf-ink-mute)]">
                  FIG 8.1 • FULL-PAGE STOREFRONT AUDIT (SCROLLABLE)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED SERVICES & CASE STUDIES NAVIGATION */}
        <section className="py-16 bg-[var(--sf-paper)]">
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
                className="px-4 py-2 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] hover:bg-[var(--sf-paper)] font-mono text-xs uppercase font-bold shadow-[3px_3px_0_var(--sf-ink)] transition-all flex items-center gap-1.5"
              >
                View All Case Studies <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* IRON CRATE LINK */}
              <Link
                href="/work/iron-crate"
                className="group border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] hover:bg-white p-6 shadow-[5px_5px_0_var(--sf-ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0_var(--sf-ink)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[var(--sf-primary)] uppercase">
                      CASE STUDY 02
                    </span>
                    <span className="font-mono text-[11px] px-2 py-0.5 border border-[var(--sf-ink)] bg-[var(--sf-paper)]">
                      SPORTS NUTRITION & BUNDLE BUILDER
                    </span>
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[var(--sf-ink)] group-hover:text-[var(--sf-primary)] transition-colors mb-2">
                    Iron Crate →
                  </h4>
                  <p className="text-sm font-sans text-[var(--sf-ink-soft)] leading-relaxed">
                    Custom Shopify theme development for sports nutrition,
                    featuring multi-SKU stack builders, clinical dosage PDPs,
                    and tiered-reward cart engineering.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--sf-ink)]/20 flex items-center justify-between font-mono text-xs font-bold text-[var(--sf-ink)]">
                  <span>Explore Iron Crate</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[var(--sf-primary)]" />
                </div>
              </Link>

              {/* INDUSTRIAL SUPPLY DIRECT LINK */}
              <Link
                href="/work/industrial-supply-direct"
                className="group border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] hover:bg-white p-6 shadow-[5px_5px_0_var(--sf-ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0_var(--sf-ink)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[var(--sf-primary)] uppercase">
                      CASE STUDY 01
                    </span>
                    <span className="font-mono text-[11px] px-2 py-0.5 border border-[var(--sf-ink)] bg-[var(--sf-paper)]">
                      B2B WHOLESALE & QUICK-ORDER MATRIX
                    </span>
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[var(--sf-ink)] group-hover:text-[var(--sf-primary)] transition-colors mb-2">
                    Industrial Supply Direct →
                  </h4>
                  <p className="text-sm font-sans text-[var(--sf-ink-soft)] leading-relaxed">
                    High-volume Shopify B2B storefront with tiered volume
                    pricing tables, technical spec data-sheets, and 1-click
                    multi-SKU purchase orders.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--sf-ink)]/20 flex items-center justify-between font-mono text-xs font-bold text-[var(--sf-ink)]">
                  <span>Explore Industrial Supply Direct</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[var(--sf-primary)]" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA STRIP */}
        <section className="py-16 border-t-2 border-[var(--sf-ink)] bg-[#181310] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-[var(--sf-primary-soft)] font-bold mb-3">
                BUILD YOUR BESPOKE STOREFRONT
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-6 leading-tight">
                Ready to engineer high-ticket conversion into your Shopify
                store?
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 font-sans mb-8 leading-relaxed">
                Whether you need native multi-SKU cross-selling, gamified
                milestone carts, or a bespoke dark-mode theme, we build clean
                Liquid 2.0 architectures that load fast and convert without app
                bloat.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
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
