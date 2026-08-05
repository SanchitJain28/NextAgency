"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const SERVICES = [
  { no: "01", icon: "{ }", title: "Custom theme development", blurb: "Bespoke, pixel-obsessed themes built from scratch — never a bloated template retrofit.", tint: "var(--sf-primary-soft)", ink: "var(--sf-primary-deep)", delay: "0ms" },
  { no: "02", icon: "⌘", title: "Headless commerce", blurb: "Hydrogen, Next.js & composable stacks for storefronts that load instantly and scale infinitely.", tint: "var(--sf-sage-soft)", ink: "var(--sf-sage-deep)", delay: "60ms" },
  { no: "03", icon: "◈", title: "Custom Shopify apps", blurb: "Private apps and embedded tools that bend Shopify to your exact operational workflow.", tint: "var(--sf-gold-soft)", ink: "#8a6410", delay: "120ms" },
  { no: "04", icon: "↯", title: "Performance optimization", blurb: "Core Web Vitals into the green — faster stores, lower bounce, better rankings.", tint: "var(--sf-berry-soft)", ink: "var(--sf-berry)", delay: "0ms" },
  { no: "05", icon: "⇗", title: "Shopify Plus migration", blurb: "Replatform from Magento, WooCommerce or legacy Shopify with zero-drama, zero-downtime cutovers.", tint: "var(--sf-primary-soft)", ink: "var(--sf-primary-deep)", delay: "60ms" },
  { no: "06", icon: "A/B", title: "CRO & A/B testing", blurb: "Research-led experiments on the pages that move revenue, with statistically honest results.", tint: "var(--sf-sage-soft)", ink: "var(--sf-sage-deep)", delay: "120ms" },
  { no: "07", icon: "{;}", title: "Backend & API development", blurb: "Robust integrations, custom endpoints and data pipelines that keep the store humming.", tint: "var(--sf-gold-soft)", ink: "#8a6410", delay: "0ms" },
  { no: "08", icon: "⊹", title: "Third-party integrations", blurb: "ERPs, PIMs, subscriptions, loyalty, ESPs — wired together so nothing falls through the cracks.", tint: "var(--sf-berry-soft)", ink: "var(--sf-berry)", delay: "60ms" },
  { no: "09", icon: "✦", title: "Store audit & consulting", blurb: "A forensic look at UX, tech and conversion, with a prioritized roadmap you can act on today.", tint: "var(--sf-primary-soft)", ink: "var(--sf-primary-deep)", delay: "120ms" },
];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      id="services"
      className="max-w-[1200px] mx-auto px-7 pt-[60px] pb-7"
    >
      <div className="flex justify-between items-end gap-6 flex-wrap mb-7">
        <div data-reveal="" className="max-w-[640px]">
          <div className="text-[13px] font-semibold tracking-[0.14em] uppercase text-[var(--sf-primary)] mb-[14px]">
            What we do
          </div>
          <h2
            className="m-0 leading-[1.02] tracking-[-0.03em]"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 4.4vw, 52px)",
              textWrap: "balance",
            }}
          >
            Everything your store needs, under one roof.
          </h2>
        </div>
        <Link
          href="/contact"
          className="font-semibold text-[var(--sf-ink)] border-b-2 border-[var(--sf-primary)] pb-[3px] whitespace-nowrap"
        >
          Discuss your project →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((svc) => (
          <article
            key={svc.no}
            data-reveal=""
            data-delay={svc.delay}
            className="bg-[var(--sf-paper-raised)] border-2 border-[var(--sf-ink)] p-5 pb-[22px] relative overflow-hidden transition-all duration-200 hover:-translate-y-[6px]"
            style={{
              boxShadow: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "var(--sf-shadow-lift)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div className="flex justify-between items-start mb-5">
              <span
                className="w-[46px] h-[46px] inline-flex items-center justify-center text-[17px]"
                style={{
                  background: svc.tint,
                  color: svc.ink,
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 800,
                }}
              >
                {svc.icon}
              </span>
              <span
                className="text-[13px] text-[var(--sf-ink-mute)]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {svc.no}
              </span>
            </div>
            <h3
              className="m-0 mb-[9px] text-[21px] tracking-[-0.02em] leading-[1.15]"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
              }}
            >
              {svc.title}
            </h3>
            <p className="m-0 text-[15px] leading-[1.55] text-[var(--sf-ink-soft)]">
              {svc.blurb}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
