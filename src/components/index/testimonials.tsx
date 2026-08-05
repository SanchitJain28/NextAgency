"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const TESTIMONIALS = [
  { quote: "They rebuilt our storefront in six weeks and our conversion rate jumped 38% the first month. No agency has ever moved this fast.", name: 'Priya Sundaram', role: 'Founder, Verdant Skincare', initials: 'PS', delay: '0ms', bg: "var(--sf-paper-raised)", ink: "var(--sf-ink)", mute: "var(--sf-ink-mute)", avatarBg: "var(--sf-sage)" },
  { quote: "The headless migration felt scary until Scalefront made it boring — in the best way. Flawless launch, instant pages.", name: 'Marcus Hale', role: 'CTO, Tidalwear', initials: 'MH', delay: '80ms', bg: 'var(--sf-paper-deep)', ink: "var(--sf-paper-raised)", mute: "color-mix(in srgb, var(--sf-paper) 70%, transparent)", avatarBg: "var(--sf-primary)" },
  { quote: "It's rare to find people who care about both the pixels and the P&L. We've hired them for three projects and counting.", name: 'Elena Rossi', role: 'VP Ecommerce, Lumen', initials: 'ER', delay: '160ms', bg: "var(--sf-paper-raised)", ink: "var(--sf-ink)", mute: "var(--sf-ink-mute)", avatarBg: "var(--sf-berry)" },
];

export default function Testimonials() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="max-w-[1200px] mx-auto px-7 py-[60px]">
      <div data-reveal="" className="text-center max-w-[640px] mx-auto mb-8">
        <div className="text-[13px] font-semibold tracking-[0.14em] uppercase text-[var(--sf-primary)] mb-[14px]">
          Kind words
        </div>
        <h2
          className="m-0 leading-[1.02] tracking-[-0.03em] text-[var(--sf-ink)]"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(32px, 4.4vw, 52px)",
          }}
        >
          Founders who came back for round two.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={i}
            data-reveal=""
            data-delay={t.delay}
            className="m-0 border-2 border-[var(--sf-ink)] rounded-none p-[22px] flex flex-col gap-[18px]"
            style={{
              background: t.bg,
              boxShadow: "var(--sf-shadow-sm)",
            }}
          >
            <div className="text-[var(--sf-gold)] text-[15px] tracking-[2px]">
              ★★★★★
            </div>
            <blockquote
              className="m-0 leading-[1.4] tracking-[-0.01em]"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 500,
                fontSize: "19px",
                color: t.ink,
              }}
            >
              &quot;{t.quote}&quot;
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-3">
              <span
                className="w-[42px] h-[42px] inline-flex items-center justify-center text-white"
                style={{
                  background: t.avatarBg,
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                }}
              >
                {t.initials}
              </span>
              <span>
                <span className="block font-bold text-[15px]" style={{ color: t.ink }}>
                  {t.name}
                </span>
                <span className="block text-[13px]" style={{ color: t.mute }}>
                  {t.role}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
