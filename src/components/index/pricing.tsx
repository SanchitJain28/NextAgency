"use client";

import Link from "next/link";
import { useGeo } from "@/hooks";

const PRICING = [
  {
    name: "Starter",
    tagline: "Perfect for emerging brands needing a professional launch.",
    priceINR: "₹25,000",
    priceUSD: "$490",
    unit: "1-2 weeks",
    featured: false,
    cta: "Start here",
    features: [
      "Up to 4 core pages (Home, Product, Collection, About)",
      "Standard eCommerce functionality",
      "Premium template setup & configuration",
      "Basic CRO optimization",
      "1 week post-launch support",
      "3 revisions free",
      "Content upload",
      "Number of products: 10",
      "Social media icons",
      "Payment integration",
    ],
    bg: "var(--sf-paper-raised)",
    ink: "var(--sf-ink)",
    mute: "var(--sf-ink-mute)",
    feat: "var(--sf-ink-soft)",
    border: "var(--sf-line)",
    shadow: "var(--sf-shadow-sm)",
    check: "var(--sf-sage-soft)",
    checkink: "var(--sf-sage-deep)",
    cta_bg: "var(--sf-ink)",
    cta_ink: "#fff",
  },
  {
    name: "Growth",
    tagline: "Custom design and development for scaling DTC brands.",
    priceINR: "₹50,000",
    priceUSD: "$990",
    unit: "2-3 weeks",
    featured: true,
    cta: "Book Growth",
    features: [
      "Custom Figma-to-Shopify conversion",
      "Custom Liquid & CSS frontend design",
      "Interactive cart & PDP animations",
      "Speed & Core Web Vitals optimization",
      "1 month post-launch support",
      "5 revisions free",
      "Payment gateway integration",
      "Content upload",
      "Number of products: 25",
      "Speed optimization",
      "Hosting setup and domain connect",
      "Social media icons",
      "Shopify app configuration",
    ],
    bg: "var(--sf-ink)",
    ink: "#fff",
    mute: "rgba(255,255,255,.66)",
    feat: "rgba(255,255,255,.86)",
    border: "var(--sf-ink)",
    shadow: "var(--sf-shadow-lg)",
    check: "rgba(224,162,51,.2)",
    checkink: "var(--sf-gold)",
    cta_bg: "var(--sf-gold)",
    cta_ink: "var(--sf-ink)",
  },
  {
    name: "Scale",
    tagline:
      "Complex functionality and custom features for high-volume stores.",
    priceINR: "₹75,000",
    priceUSD: "$1,490",
    unit: "3-4 weeks",
    featured: false,
    cta: "Talk to us",
    features: [
      "Everything in Growth, plus:",
      "Custom product features (Subscriptions, Bundles, Box Builders)",
      "Advanced API & ERP integrations",
      "Custom Shopify App development if required",
      "3 months dedicated website support",
      "10 revisions free",
      "Payment gateway integration",
      "Content upload",
      "Number of products: 50",
      "Speed optimization",
      "Hosting setup and domain connect",
      "Social media icons",
      "Shopify app configuration",
    ],
    bg: "var(--sf-paper-raised)",
    ink: "var(--sf-ink)",
    mute: "var(--sf-ink-mute)",
    feat: "var(--sf-ink-soft)",
    border: "var(--sf-line)",
    shadow: "var(--sf-shadow-sm)",
    check: "var(--sf-sage-soft)",
    checkink: "var(--sf-sage-deep)",
    cta_bg: "var(--sf-ink)",
    cta_ink: "#fff",
  },
  {
    name: "Enterprise",
    tagline: "Headless storefronts built with Next.js and Shopify.",
    priceINR: "₹1,00,000+",
    priceUSD: "$2,490+",
    unit: "4-6+ weeks",
    featured: false,
    cta: "Talk to us",
    features: [
      "Headless storefront (Next.js or Medusa.js)",
      "Sub-second page load times",
      "Custom URL structures & international routing",
      "Full Data & SEO Migration (zero downtime)",
      "3 months post-launch support",
      "Unlimited revisions",
      "Payment gateway integration",
      "Content upload",
      "Number of products: 100+",
      "Speed optimization",
      "Hosting setup and domain connect",
      "Social media icons",
      "Shopify app configuration",
    ],
    bg: "var(--sf-paper-raised)",
    ink: "var(--sf-ink)",
    mute: "var(--sf-ink-mute)",
    feat: "var(--sf-ink-soft)",
    border: "var(--sf-line)",
    shadow: "var(--sf-shadow-sm)",
    check: "var(--sf-sage-soft)",
    checkink: "var(--sf-sage-deep)",
    cta_bg: "var(--sf-ink)",
    cta_ink: "#fff",
  },
];

export default function Pricing() {
  const { isIndia, setManualCountry } = useGeo();

  return (
    <section id="pricing" className="max-w-[1200px] mx-auto px-7 py-[60px]">
      <div className="text-center max-w-[640px] mx-auto mb-8">
        <div className="text-[13px] font-semibold tracking-[0.14em] uppercase text-[var(--sf-primary)] mb-[14px]">
          Engagements
        </div>
        <h2
          className="m-0 mb-3 leading-[1.02] tracking-[-0.03em] text-[var(--sf-ink)]"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(32px, 4.4vw, 52px)",
          }}
        >
          Ways to work together.
        </h2>
        <p className="m-0 text-[17px] text-[var(--sf-ink-soft)] leading-[1.6] mb-5">
          Fixed-scope or embedded — every engagement starts with a free store
          audit.
        </p>

        {/* Currency Switcher Badge */}
        <div className="inline-flex items-center gap-1 border-2 border-[var(--sf-ink)] shadow-[2px_2px_0_var(--sf-ink)] bg-[var(--sf-paper)] p-1 text-xs font-mono font-bold">
          <button
            type="button"
            onClick={() => setManualCountry("IN")}
            className={`px-3 py-1 transition-all cursor-pointer ${
              isIndia
                ? "bg-[var(--sf-primary)] text-white"
                : "hover:bg-black/5 text-[var(--sf-ink)]"
            }`}
          >
            🇮🇳 INR (₹)
          </button>
          <button
            type="button"
            onClick={() => setManualCountry("US")}
            className={`px-3 py-1 transition-all cursor-pointer ${
              !isIndia
                ? "bg-[var(--sf-primary)] text-white"
                : "hover:bg-black/5 text-[var(--sf-ink)]"
            }`}
          >
            🌎 USD ($)
          </button>
        </div>
      </div>

      <div className="flex md:grid md:grid-cols-2 gap-5 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 brutal-scrollbar scroll-pl-7 -mx-7 px-7 md:mx-0 md:px-0 md:scroll-pl-0">
        {PRICING.map((p, i) => {
          const currentPrice = isIndia ? p.priceINR : p.priceUSD;

          return (
            <article
              key={i}
              className="flex flex-col relative min-w-[280px] snap-start"
              style={{
                background: p.bg,
                color: p.ink,
                border: `2px solid ${p.border}`,
                padding: "24px 22px",
                boxShadow: p.shadow,
              }}
            >
              {p.featured && (
                <span className="absolute top-[22px] right-[22px] bg-[var(--sf-gold)] text-[var(--sf-ink)] text-[12px] font-bold tracking-[0.03em] px-3 py-1.5 uppercase">
                  Most picked
                </span>
              )}

              <div
                className="text-[22px] tracking-[-0.02em]"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                }}
              >
                {p.name}
              </div>
              <div
                className="text-[14.5px] mt-1.5 leading-[1.5]"
                style={{ color: p.mute }}
              >
                {p.tagline}
              </div>

              <div className="flex items-baseline gap-1.5 my-6 mb-1">
                <span className="text-[15px]" style={{ color: p.mute }}>
                  from
                </span>
                <span
                  className="text-[44px] tracking-[-0.04em]"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {currentPrice}
                </span>
              </div>
              <div className="text-[13.5px] mb-6" style={{ color: p.mute }}>
                {p.unit}
              </div>

              <ul className="list-none m-0 mb-7 p-0 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-3">
                {p.features.map((f, fi) => (
                  <li
                    key={fi}
                    className="flex gap-3 items-start text-[15px] leading-[1.4]"
                    style={{ color: p.feat }}
                  >
                    <span
                      className="flex-none w-5 h-5 inline-flex items-center justify-center text-[12px] font-extrabold mt-px"
                      style={{
                        background: p.check,
                        color: p.checkink,
                      }}
                    >
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Link
                  href="/contact-us"
                  className="block w-full text-center py-3 px-4 font-bold text-[14px] tracking-[0.02em] transition-transform hover:-translate-y-0.5 active:translate-y-0"
                  style={{
                    background: p.cta_bg,
                    color: p.cta_ink,
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                  }}
                >
                  {p.cta} &rarr;
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
