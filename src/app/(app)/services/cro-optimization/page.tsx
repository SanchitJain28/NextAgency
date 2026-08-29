import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ComparisonTable from "@/components/shared/ComparisonTable";

export const metadata: Metadata = {
  title: "Shopify Conversion Rate Optimization (CRO) Services | ScaleFront",
  description:
    "We identify where mobile visitors drop off on your Shopify store and fix the underlying friction — slow page loads, hidden checkout costs, and generic layouts.",
  alternates: {
    canonical: "https://scalefront.io/services/cro-optimization",
  },
  openGraph: {
    title: "Shopify Conversion Rate Optimization (CRO) Services | ScaleFront",
    description:
      "We identify where mobile visitors drop off on your Shopify store and fix the underlying friction — slow page loads, hidden checkout costs, and generic layouts.",
    url: "https://scalefront.io/services/cro-optimization",
    siteName: "ScaleFront",
    type: "website",
    images: [
      {
        url: "https://scalefront.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shopify Conversion Rate Optimization by ScaleFront",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Conversion Rate Optimization (CRO) Services | ScaleFront",
    description:
      "We identify where mobile visitors drop off on your Shopify store and fix the underlying friction — slow page loads, hidden checkout costs, and generic layouts.",
    images: ["https://scalefront.io/og-image.jpg"],
  },
};

export default function CroOptimizationPage() {
  const faqData = [
    {
      question: "What is a good conversion rate for a Shopify store?",
      answer:
        "Most Shopify stores convert between 1% and 3%, depending on price point and traffic source. High-ticket items convert lower than cheap impulse purchases. Your own month-over-month trend matters more than generic benchmarks.",
    },
    {
      question: "Do I need separate apps for CRO, or can this be built natively?",
      answer:
        "Basic testing tools work as apps, but structural features like slide-out carts, size guides, and free shipping bars should be coded directly into your theme to prevent slow mobile load times and app fees.",
    },
    {
      question: "How long does a Shopify CRO project usually take?",
      answer:
        "A focused round of audit and friction fixes typically takes 1 to 2 weeks. Ongoing optimization, where we analyze session data and test iterative changes based on live traffic, runs as a monthly partnership.",
    },
    {
      question: "Will you guarantee a specific percentage increase in conversion rate?",
      answer:
        "No, and avoid agencies that do. Conversion rates depend on ad traffic quality, product pricing, and seasonality. We guarantee that we will find verifiable user drop-off points and implement clean, high-speed fixes.",
    },
    {
      question: "What data and access do you need to begin a CRO audit?",
      answer:
        "We need view access to your Shopify analytics, Google Analytics 4, and any heatmapping tool like Microsoft Clarity or Hotjar. If you do not have heatmaps installed, we can configure them for you.",
    },
    {
      question: "Can you optimize an existing theme without rebuilding the store?",
      answer:
        "Yes. Most CRO engagements happen on live themes. We analyze what you have, isolate specific page bottlenecks, and write clean Liquid improvements to product pages and cart drawers without requiring a full theme redesign.",
    },
    {
      question: "What is the most common reason shoppers abandon Shopify carts?",
      answer:
        "Unexpected costs appearing on the final checkout screen are the leading cause. Showing transparent shipping estimates, tax calculators, and live threshold progress bars inside the drawer cart eliminates this surprise friction immediately.",
    },
    {
      question: "How does store loading speed impact my conversion rate?",
      answer:
        "Every additional second of mobile load time increases bounce rates significantly. If your product pages take over 3 seconds to load on mobile devices, buyers leave before seeing your images or add-to-cart button.",
    },
    {
      question: "Should I use popups and countdown timers to increase sales?",
      answer:
        "Generally no. Aggressive popups and artificial timers annoy mobile shoppers and damage brand trust. High-converting stores win by providing clear product specifications, transparent pricing, fast load speeds, and effortless checkout navigation instead.",
    },
    {
      question: "How do we get started with a CRO audit for our store?",
      answer:
        "Send us your store URL and current monthly traffic volume. We will review your mobile shopping journey, identify the highest-priority conversion leaks, and deliver a clear action plan within 24 hours.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://scalefront.io/services/cro-optimization#service",
        name: "Shopify Conversion Rate Optimization Services",
        serviceType: "Conversion Rate Optimization",
        description:
          "Data-driven Shopify conversion rate optimization services including mobile checkout funnel analysis, drawer cart engineering, Core Web Vitals speed tuning, and friction-free product pages.",
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
          name: "Shopify CRO Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Shopify Conversion Rate Optimization Audit",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mobile Checkout Funnel Optimization",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Native Liquid Cart & PDP Engineering",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://scalefront.io/services/cro-optimization#faq",
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
            name: "Shopify Conversion Rate Optimization",
            item: "https://scalefront.io/services/cro-optimization",
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
                Shopify Conversion Rate Optimization
              </span>
            </div>
            <div className="text-[var(--sf-ink-mute)] hidden sm:inline font-mono">
              SERVICE // STORE AUDIT &amp; CHECKOUT FUNNEL OPTIMIZATION
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
              Shopify Conversion Rate Optimization
            </h1>

            <p className="text-xl sm:text-2xl text-[var(--sf-ink-soft)] leading-relaxed mb-8 max-w-3xl">
              We find where your visitors are dropping off and fix it — slow pages, confusing checkout steps, or product pages that don&apos;t answer the question your buyer actually has.
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

          {/* SECTION 1: WHAT CRO ACTUALLY MEANS */}
          <section id="what-is-cro" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              What conversion rate optimization actually means
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
              <p>
                If 10,000 people visit your store and 200 of them buy something, your conversion rate is 2%. That is the whole mathematical formula: total orders divided by total visitors, multiplied by 100. Most Shopify stores convert somewhere between 1% and 3%, depending on product price point, niche, and traffic quality.
              </p>

              <p>
                Moving your store from 2% to 3% does not require doubling your paid advertising budget. Instead, it means fewer of the visitors you already paid for leave before completing their purchase. Real <span className="font-semibold text-[var(--sf-ink)]">shopify conversion rate optimization</span> is the disciplined process of finding exactly where shoppers drop off, identifying the specific friction causing them to hesitate, and implementing code and layout fixes that resolve it.
              </p>

              <p>
                On an eCommerce store, drop-offs happen in predictable spots: a product detail page that takes 5 seconds to render on a phone, a cart drawer that hides estimated shipping fees until the final screen, or mandatory account creation steps that interrupt the buying flow.
              </p>

              <p>
                CRO is not about adding aggressive discount popups, flashing countdown timers, or spin-to-win wheels that frustrate real customers. It is about discovering why visitors leave and eliminating that friction with clean design and fast code.
              </p>

              {/* COMPARISON TABLE */}
              <ComparisonTable
                includedHeader={
                  <>
                    What effective Shopify CRO{" "}
                    <span className="underline decoration-[var(--sf-primary)] decoration-2">
                      includes
                    </span>{" "}
                    (data-driven fixes)
                  </>
                }
                excludedHeader={
                  <>
                    What effective CRO{" "}
                    <span className="underline decoration-rose-500 decoration-2">
                      does not
                    </span>{" "}
                    include (gimmicks &amp; vanity)
                  </>
                }
                rows={[
                  {
                    included: (
                      <>
                        <span className="font-semibold text-emerald-800">
                          ✅ Reviewing real session recordings and funnel drop-offs
                        </span>{" "}
                        in GA4, Microsoft Clarity, and Hotjar.
                      </>
                    ),
                    excluded: (
                      <>
                        <span className="font-semibold text-rose-700">
                          ❌ Installing intrusive popups or artificial countdown timers
                        </span>{" "}
                        that damage brand credibility.
                      </>
                    ),
                  },
                  {
                    included: (
                      <>
                        <span className="font-semibold text-emerald-800">
                          ✅ Engineering native slide-out carts
                        </span>{" "}
                        with real-time free-shipping progress bars and one-click upsells.
                      </>
                    ),
                    excluded: (
                      <>
                        <span className="font-semibold text-rose-700">
                          ❌ Stacking 15+ separate CRO apps
                        </span>{" "}
                        that slow down page load times and charge recurring fees.
                      </>
                    ),
                  },
                  {
                    included: (
                      <>
                        <span className="font-semibold text-emerald-800">
                          ✅ Displaying clear shipping thresholds and tax estimates
                        </span>{" "}
                        early in the buying journey to eliminate surprise fees.
                      </>
                    ),
                    excluded: (
                      <>
                        <span className="font-semibold text-rose-700">
                          ❌ Hiding delivery costs until the final payment screen
                        </span>{" "}
                        where 70% of shoppers abandon carts.
                      </>
                    ),
                  },
                  {
                    included: (
                      <>
                        <span className="font-semibold text-emerald-800">
                          ✅ Tailoring product page specifications
                        </span>{" "}
                        (interactive size charts, dosage tabs, spec sheets) to your catalog.
                      </>
                    ),
                    excluded: (
                      <>
                        <span className="font-semibold text-rose-700">
                          ❌ Relying on generic, one-size-fits-all product layouts
                        </span>{" "}
                        that fail to answer specific buyer questions.
                      </>
                    ),
                  },
                  {
                    included: (
                      <>
                        <span className="font-semibold text-emerald-800">
                          ✅ Optimizing Core Web Vitals
                        </span>{" "}
                        to ensure product pages load under 2 seconds on mobile devices.
                      </>
                    ),
                    excluded: (
                      <>
                        <span className="font-semibold text-rose-700">
                          ❌ Changing button colors blindly
                        </span>{" "}
                        based on generic marketing advice without measuring real data.
                      </>
                    ),
                  },
                ]}
              />
            </div>
          </section>

          {/* SECTION 2: WHERE SHOPIFY STORES LOSE CUSTOMERS (Content Left, Image Right) */}
          <section
            id="where-stores-lose-customers"
            className="mb-16 pt-8 border-t border-[var(--sf-ink)]/15"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7">
                <h2
                  className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Where Shopify stores actually lose customers
                </h2>

                <div className="space-y-4 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
                  <p>
                    Cart abandonment is the largest source of lost revenue in eCommerce. According to independent research from the Baymard Institute, close to 7 out of every 10 online shoppers add an item to their cart and leave without completing the purchase.
                  </p>

                  <p>
                    The root causes are rarely mysterious. On Shopify stores, drop-offs consistently trace back to four specific areas:
                  </p>

                  <ul className="space-y-3 my-4 pl-4 border-l-2 border-[var(--sf-primary)] text-base sm:text-lg text-[var(--sf-ink)]">
                    <li>
                      <strong>Slow Mobile Load Times:</strong> Over 75% of eCommerce traffic comes from mobile devices. When a store runs 12+ separate apps injecting external scripts, pages take 4 to 5 seconds to load. Visitors bounce before ever reading your product copy.
                    </li>
                    <li>
                      <strong>Hidden Costs at Checkout:</strong> If unexpected shipping rates or taxes appear only on the final payment screen, customers feel misled and close the tab immediately.
                    </li>
                    <li>
                      <strong>Generic Product Pages:</strong> A clothing customer wants to know if a garment runs small; a supplement customer wants to know the active dosage per serving; an industrial buyer needs PDF spec sheets. Generic templates answer none of these questions.
                    </li>
                    <li>
                      <strong>Friction-Heavy Multi-Step Checkouts:</strong> Forcing account creation, unformatted address inputs, and slow cart slide-outs introduce unnecessary steps between intent and payment.
                    </li>
                  </ul>

                  <p>
                    None of these issues require guesswork. Every single leak can be observed directly in your store&apos;s funnel analytics and customer recordings.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <div className="border-2 border-[var(--sf-ink)] bg-white shadow-[4px_4px_0_var(--sf-ink)] overflow-hidden">
                  <Image
                    src="/portfolio/iron-crate/covers/cover.png"
                    alt="Shopify CRO - High-Converting AJAX Drawer Cart and Bundle Builder"
                    width={800}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                  <div
                    className="p-3 border-t-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] text-xs text-[var(--sf-ink-mute)] font-mono"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Iron Crate: Slide-out drawer cart with real-time spend progress for free shipping and instant one-click upsells.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: STEP-BY-STEP CRO PROCESS */}
          <section
            id="our-cro-process"
            className="mb-16 pt-8 border-t border-[var(--sf-ink)]/15 max-w-5xl"
          >
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Our step-by-step Shopify conversion optimization process
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-8">
              <p>
                We do not deliver static PDF audit reports that collect dust in your inbox. We follow a practical five-stage optimization cycle focused on identifying bottlenecks and engineering direct Liquid code fixes.
              </p>

              <div className="space-y-8 my-6">
                {/* Step 1 */}
                <div className="pl-4 sm:pl-6 border-l-2 border-[var(--sf-primary)]">
                  <div
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--sf-primary)] mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Step 01
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[var(--sf-ink)] mb-3"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    Funnel &amp; Session Recording Audit
                  </h3>
                  <p className="text-base text-[var(--sf-ink-soft)] leading-relaxed">
                    We review where shoppers drop off across desktop and mobile devices. Using Google Analytics 4, Shopify metrics, and session recording tools like Microsoft Clarity or Hotjar, we watch real visitors navigate, hesitate on specific form fields, and abandon carts.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="pl-4 sm:pl-6 border-l-2 border-[var(--sf-primary)]">
                  <div
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--sf-primary)] mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Step 02
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[var(--sf-ink)] mb-3"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    Diagnosing the Root Cause (Not Guessing)
                  </h3>
                  <p className="text-base text-[var(--sf-ink-soft)] leading-relaxed">
                    Knowing that &quot;40% of mobile users leave at the cart&quot; is incomplete. We uncover the exact reason — such as unstated delivery fees, broken mobile discount inputs, or confusing variant pickers — so we can test an accurate technical solution.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="pl-4 sm:pl-6 border-l-2 border-[var(--sf-primary)]">
                  <div
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--sf-primary)] mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Step 03
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[var(--sf-ink)] mb-3"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    Prioritizing High-Impact Wins
                  </h3>
                  <p className="text-base text-[var(--sf-ink-soft)] leading-relaxed">
                    We rank fixes by page traffic volume, estimated conversion impact, and development effort. We start with the highest-leverage pages (typically product pages and drawer carts) to eliminate the biggest drop-off points first.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="pl-4 sm:pl-6 border-l-2 border-[var(--sf-primary)]">
                  <div
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--sf-primary)] mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Step 04
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[var(--sf-ink)] mb-3"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    Native Liquid &amp; JavaScript Implementation
                  </h3>
                  <p className="text-base text-[var(--sf-ink-soft)] leading-relaxed">
                    Rather than installing another monthly app subscription, we code solutions directly into your Shopify Liquid theme. Slide-out carts, free-shipping tier meters, size chart modals, and one-click coupon buttons run on lightweight native code.
                  </p>
                </div>

                {/* Step 5 */}
                <div className="pl-4 sm:pl-6 border-l-2 border-[var(--sf-primary)]">
                  <div
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--sf-primary)] mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Step 05
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[var(--sf-ink)] mb-3"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    Live Metric Verification
                  </h3>
                  <p className="text-base text-[var(--sf-ink-soft)] leading-relaxed">
                    After changes go live, we monitor checkout completion rates and cart engagement. If a layout modification improves performance, it remains. If data shows unexpected friction, we iterate until the funnel operates smoothly.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: PIE PRIORITIZATION FRAMEWORK */}
          <section
            id="pie-framework"
            className="mb-16 pt-8 border-t border-[var(--sf-ink)]/15 max-w-5xl"
          >
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              How we prioritize what to fix first (The P.I.E. method)
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
              <p>
                When auditing an eCommerce store, it is easy to find dozens of potential design tweaks. The challenge is deciding where to start for the fastest revenue impact. We score every opportunity using the <span className="font-semibold text-[var(--sf-ink)]">P.I.E. framework</span>:
              </p>

              <ul className="space-y-4 my-6 pl-4 border-l-2 border-[var(--sf-primary)] text-base sm:text-lg text-[var(--sf-ink)]">
                <li>
                  <strong>Potential (Room for Improvement):</strong> We look at how poorly a page is currently performing. A product detail page with an 80% mobile bounce rate offers vastly higher financial upside than a cart that already converts well.
                </li>
                <li>
                  <strong>Importance (Traffic &amp; Revenue Value):</strong> We evaluate the commercial value of the traffic reaching this step. Pages receiving 80% of paid ad clicks or the final checkout screen are always prioritized over low-traffic informational pages.
                </li>
                <li>
                  <strong>Ease (Development Effort):</strong> We assess how quickly a solution can be implemented. High-impact Liquid fixes that take 2 to 3 days (like adding a sticky buy bar or free-shipping progress meter) are built immediately.
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 5: REAL EXAMPLES (Image Left, Content Right) */}
          <section
            id="real-cro-examples"
            className="mb-16 pt-8 border-t border-[var(--sf-ink)]/15"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 order-2 lg:order-1 lg:sticky lg:top-24">
                <div className="border-2 border-[var(--sf-ink)] bg-white shadow-[4px_4px_0_var(--sf-ink)] overflow-hidden">
                  <Image
                    src="/portfolio/flexform-athletics/covers/cover.png"
                    alt="Shopify CRO - Lookbook Bundles and Instant Coupon Bar"
                    width={800}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                  <div
                    className="p-3 border-t-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] text-xs text-[var(--sf-ink-mute)] font-mono"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    FlexForm Athletics: In-page coupon codes with 1-click copy functionality and instant size filtering.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <h2
                  className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Real examples: Reducing friction across the buying journey
                </h2>

                <div className="space-y-4 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
                  <p>
                    Here is how specific friction points are solved through deliberate UI and Liquid engineering:
                  </p>

                  <ul className="space-y-3 my-4 pl-4 border-l-2 border-[var(--sf-primary)] text-base sm:text-lg text-[var(--sf-ink)]">
                    <li>
                      <strong>Real-Time Free-Shipping Meter:</strong> In the Iron Crate project, the drawer cart displays a visual progress meter showing how much more the buyer needs to spend to unlock free delivery. It updates dynamically with every item added, reducing cart exit rates.
                    </li>
                    <li>
                      <strong>In-Page Discount Codes:</strong> In FlexForm Athletics, active promo codes are displayed directly beside the checkout CTA with a one-click copy button. Shoppers never leave the store to search coupon aggregator websites.
                    </li>
                    <li>
                      <strong>Instant AJAX Category Filtering:</strong> In Maison Luxe, collection filtering by room, material, and price happens in milliseconds without full page reloads, making product exploration seamless.
                    </li>
                    <li>
                      <strong>B2B Volume Pricing Tables:</strong> In Industrial Supply Direct, tiered wholesale price breaks and automated spec sheet downloads allow corporate purchasers to evaluate bulk costs instantly without phone calls.
                    </li>
                  </ul>

                  <p className="text-sm sm:text-base text-[var(--sf-ink-mute)] italic">
                    Note: These are demonstrated as architectural design solutions engineered to solve specific friction points. We do not publish fabricated conversion lift percentages for self-initiated portfolio builds.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6: ANALYTICS & DIAGNOSTIC TOOLS STACK */}
          <section
            id="tools-stack"
            className="mb-16 pt-8 border-t border-[var(--sf-ink)]/15 max-w-5xl"
          >
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              The analytics and diagnostic tools we use
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
              <p>
                High-converting stores are built on verified data rather than subjective opinions. We configure and monitor a focused diagnostic stack to diagnose user friction accurately:
              </p>

              <ul className="space-y-4 my-6 pl-4 border-l-2 border-[var(--sf-primary)] text-base sm:text-lg text-[var(--sf-ink)]">
                <li>
                  <strong>Google Analytics 4 &amp; Shopify Data:</strong> We track quantitative drop-offs across standard eCommerce funnel milestones: product views, add-to-carts, checkout initiations, and completed orders separated by device and acquisition channel.
                </li>
                <li>
                  <strong>Microsoft Clarity &amp; Hotjar:</strong> Heatmaps and anonymous session replays show where shoppers click, how far they scroll down product pages, where they experience rage clicks, and where form validation errors occur.
                </li>
                <li>
                  <strong>Littledata Server-Side Tracking:</strong> Eliminates client-side tracking gaps caused by browser ad-blockers and iOS privacy restrictions, ensuring 100% accurate purchase attribution and revenue reporting.
                </li>
                <li>
                  <strong>Convert &amp; Intelligems:</strong> Reliable A/B testing platforms engineered specifically for Shopify to test alternative templates, price elasticity, and shipping thresholds without causing page flicker.
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 7: TESTING TYPES (A/B vs Split vs Multivariate) */}
          <section
            id="testing-types"
            className="mb-16 pt-8 border-t border-[var(--sf-ink)]/15 max-w-5xl"
          >
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              A/B testing, split URL testing, and multivariate: Which fits your store?
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
              <p>
                Testing methodology depends directly on your store&apos;s monthly visitor traffic and the magnitude of the change you want to evaluate:
              </p>

              <ul className="space-y-4 my-6 pl-4 border-l-2 border-[var(--sf-primary)] text-base sm:text-lg text-[var(--sf-ink)]">
                <li>
                  <strong>1. A/B Testing (Single Component Changes):</strong> Compares a control version (A) against a single modified version (B) on the same URL — such as testing sticky buy buttons versus static buttons. Best suited for stores with 10,000+ monthly visitors seeking rapid validation on specific UX elements.
                </li>
                <li>
                  <strong>2. Split URL Testing (Full Template Redesigns):</strong> Directs incoming traffic evenly across two completely distinct page templates. Used when testing a newly engineered Liquid product page against an older marketplace theme to measure full-page architectural performance.
                </li>
                <li>
                  <strong>3. Multivariate Testing (Multiple Simultaneous Variables):</strong> Tests multiple element combinations at once (e.g. headline + hero image + pricing layout). Requires high traffic volumes (50,000+ monthly visits per variation) to achieve statistical confidence within a reasonable timeframe.
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 8: APP BLOAT VS NATIVE LIQUID */}
          <section
            id="apps-vs-native"
            className="mb-16 pt-8 border-t border-[var(--sf-ink)]/15 max-w-5xl"
          >
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Buying CRO apps vs building native theme features
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
              <p>
                When merchants want to improve conversions, the default reaction is often downloading multiple marketplace apps — one app for a slide-out cart, another for an announcement banner, another for size charts, and another for product reviews.
              </p>

              <p>
                Each app injects external JavaScript, adds CSS stylesheets, and makes third-party server requests. Running 10 to 15 apps can add 15 to 25 redundant scripts to your storefront. This script bloat degrades mobile performance and increases monthly app expenses by hundreds of dollars.
              </p>

              <p>
                Building core CRO features directly into your Liquid theme provides three immediate advantages:
              </p>

              <ul className="space-y-3 my-4 pl-4 border-l-2 border-[var(--sf-primary)] text-base sm:text-lg text-[var(--sf-ink)]">
                <li>
                  <strong>Sub-2-Second Load Speeds:</strong> Native Liquid renders on Shopify&apos;s lightning-fast edge servers before reaching the browser, avoiding client-side rendering delays.
                </li>
                <li>
                  <strong>Zero Recurring App Overhead:</strong> Native features are paid for once during development, permanently eliminating recurring monthly app subscriptions.
                </li>
                <li>
                  <strong>Full Online Store 2.0 Control:</strong> Store managers can customize banner text, update shipping thresholds, and adjust layout blocks directly inside the Shopify admin without writing code.
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 6: SPEED AS PART OF CRO */}
          <section
            id="speed-and-cro"
            className="mb-16 pt-8 border-t border-[var(--sf-ink)]/15 max-w-5xl"
          >
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Store speed is a direct conversion factor
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
              <p>
                Store speed is not just an engineering metric — it is the single most influential factor in your mobile conversion rate. If a product page takes longer than 3 seconds to load on a smartphone, over 40% of visitors leave before seeing your images or pricing.
              </p>

              <p>
                This connects directly to our approach to{" "}
                <Link
                  href="/services/theme-development"
                  className="text-[var(--sf-primary)] font-bold underline hover:text-[var(--sf-primary-deep)]"
                >
                  custom shopify theme development
                </Link>
                . A custom-built theme containing only the code and features your catalog requires loads significantly faster than pre-made marketplace templates, immediately lifting mobile engagement.
              </p>
            </div>
          </section>

          {/* SECTION 7: RELEVANT WORK / PORTFOLIO PROOF */}
          <section
            id="portfolio-proof"
            className="mb-16 pt-8 border-t border-[var(--sf-ink)]/15 max-w-5xl"
          >
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Relevant Work: High-converting Shopify storefronts
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-8">
              <p>
                Explore recent storefront builds featuring custom conversion engineering:
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
                      Iron Crate: Supplement Store with 3-Step Stack Builder
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--sf-ink-soft)]">
                    Features an interactive 3-step bundle builder, clinical dosage accordions, and an AJAX drawer cart with real-time spend rewards.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-xl font-bold text-[var(--sf-ink)] mb-1"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    <Link
                      href="/work/recovrx"
                      className="hover:text-[var(--sf-primary)] transition-colors underline"
                    >
                      RecovrX: High-Ticket Athletic Recovery Equipment
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--sf-ink-soft)]">
                    Dark mode layout engineered with technical comparison matrices, clinical trust badges, and milestone spend rewards.
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
                    Women&apos;s activewear storefront featuring 9-category visual story strips, instant size filtering, and product page lookbook bundles.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 8: FAQ */}
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

          {/* SECTION 9: FINAL CTA */}
          <section
            id="cta"
            className="pt-12 border-t-2 border-[var(--sf-ink)] text-center"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--sf-ink)] mb-4 max-w-2xl mx-auto"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Ready to stop losing visitors on your Shopify store?
            </h2>

            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] max-w-xl mx-auto mb-8 leading-relaxed">
              Share your store link and analytics context. We will review your mobile checkout flow, highlight the top friction points, and provide a clear scope.
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
