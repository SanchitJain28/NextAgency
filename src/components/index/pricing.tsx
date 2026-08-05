"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const PRICING = [
  {
    name: "Launch",
    tagline: "For new brands that need to look established from day one.",
    price: "$12k",
    unit: "fixed-scope build · 4–6 weeks",
    featured: false,
    cta: "Start here",
    features: [
      "Custom Shopify theme",
      "Up to 8 templates",
      "CRO-ready product pages",
      "Speed-optimized build",
      "30 days post-launch support",
    ],
    delay: "0ms",
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
    tagline: "Our most-picked engagement for scaling DTC brands.",
    price: "$28k",
    unit: "end-to-end build · 8–12 weeks",
    featured: true,
    cta: "Book Growth",
    features: [
      "Everything in Launch",
      "Headless or advanced theme",
      "Custom app or integration",
      "A/B testing program",
      "Analytics & dashboards",
      "Dedicated strategist",
    ],
    delay: "80ms",
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
    tagline: "Embedded team for enterprise & Shopify Plus merchants.",
    price: "$15k",
    unit: "per month · retainer",
    featured: false,
    cta: "Talk to us",
    features: [
      "Dedicated pod (design + dev)",
      "Roadmap & sprint planning",
      "Continuous experimentation",
      "Priority SLA & on-call",
      "Quarterly business reviews",
    ],
    delay: "160ms",
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
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="pricing" className="max-w-[1200px] mx-auto px-7 py-[60px]">
      <div data-reveal="" className="text-center max-w-[640px] mx-auto mb-8">
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
        <p className="m-0 text-[17px] text-[var(--sf-ink-soft)] leading-[1.6]">
          Fixed-scope or embedded — every engagement starts with a free store audit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {PRICING.map((p, i) => (
          <article
            key={i}
            data-reveal=""
            data-delay={p.delay}
            className="flex flex-col relative"
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
            <div className="text-[14.5px] mt-1.5 leading-[1.5]" style={{ color: p.mute }}>
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
                {p.price}
              </span>
            </div>
            <div className="text-[13.5px] mb-6" style={{ color: p.mute }}>
              {p.unit}
            </div>

            <ul className="list-none m-0 mb-7 p-0 flex flex-col gap-3">
              {p.features.map((f, fi) => (
                <li
                  key={fi}
                  className="flex gap-3 items-start text-[15px] leading-[1.4]"
                  style={{ color: p.feat }}
                >
                  <span
                    className="flex-none w-5 h-5 inline-flex items-center justify-center text-[12px] font-extrabold mt-px"
                    style={{ background: p.check, color: p.checkink }}
                  >
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className="mt-auto text-center font-semibold text-[15.5px] leading-none p-3.5 border-2 border-[var(--sf-ink)] transition-all duration-100"
              style={{
                background: p.cta_bg,
                color: p.cta_ink,
                boxShadow: "4px 4px 0 var(--sf-ink)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translate(2px, 2px)";
                e.currentTarget.style.boxShadow = "2px 2px 0 var(--sf-ink)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "4px 4px 0 var(--sf-ink)";
              }}
            >
              {p.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
