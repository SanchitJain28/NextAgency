"use client";

import Link from "next/link";
import { useGeo } from "@/hooks";
import { homepageDefaults, type HomepageContent } from "@/content/homepage";

export default function Pricing({
  content = homepageDefaults.pricing,
}: {
  content?: HomepageContent["pricing"];
}) {
  const { isIndia, setManualCountry } = useGeo();

  return (
    <section id="pricing" className="max-w-[1200px] mx-auto px-7 py-[60px]">
      <div className="text-center max-w-[640px] mx-auto mb-8">
        <div className="text-[13px] font-semibold tracking-[0.14em] uppercase text-[var(--sf-primary)] mb-[14px]">
          {content.engagements}
        </div>
        <h2
          className="m-0 mb-3 leading-[1.02] tracking-[-0.03em] text-[var(--sf-ink)]"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(32px, 4.4vw, 52px)",
          }}
        >
          {content.waysToWorkTogether}
        </h2>
        <p className="m-0 text-[17px] text-[var(--sf-ink-soft)] leading-[1.6] mb-5">
          {content.fixedScopeOrEmbeddedEvery}
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
            {content.inr}
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
            {content.usd}
          </button>
        </div>
      </div>

      <div className="flex md:grid md:grid-cols-2 gap-5 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 brutal-scrollbar scroll-pl-7 -mx-7 px-7 md:mx-0 md:px-0 md:scroll-pl-0">
        {content.items.map((p, i) => {
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
                  {content.mostPicked}
                </span>
              )}

              <div
                className="text-[22px] tracking-[-0.02em]"
                style={{
                  fontFamily: "'Inter', sans-serif",
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
                  {content.from}
                </span>
                <span
                  className="text-[44px] tracking-[-0.04em]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
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
                  href={content.hrefContactUs}
                  className="block w-full text-center py-3 px-4 font-bold text-[14px] tracking-[0.02em] transition-transform hover:-translate-y-0.5 active:translate-y-0"
                  style={{
                    background: p.cta_bg,
                    color: p.cta_ink,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {p.cta} {content.rarr}
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
