const STATS = [
  {
    value: "50+",
    label: "Custom Shopify stores and storefronts launched",
    delay: "0ms",
  },
  {
    value: "90+",
    label: "Mobile Core Web Vitals score on custom Liquid builds",
    delay: "80ms",
  },
  {
    value: "100%",
    label: "Direct developer communication. No account manager layers.",
    delay: "160ms",
  },
  {
    value: "Zero",
    label: "Unused marketplace apps. Clean code written for your catalog.",
    delay: "240ms",
  },
];

export default function ResultsBand() {
  return (
    <section
      id="work"
      className="mt-8"
      style={{ background: "var(--sf-paper-deep)", color: "var(--sf-paper)" }}
    >
      <div className="max-w-[1200px] mx-auto px-7 py-[52px]">
        <div className="max-w-[620px] mb-8">
          <div className="text-[13px] font-semibold tracking-[0.14em] uppercase text-[var(--sf-gold)] mb-[14px]">
            The receipts
          </div>
          <h2
            className="m-0 leading-[1.02] tracking-[-0.03em] text-[var(--sf-paper-raised)]"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 4.4vw, 52px)",
            }}
          >
            We don&apos;t just build looks. We build for speed and conversion.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[22px]">
          {STATS.map((st) => (
            <div
              key={st.value}
              className="pt-5"
              style={{
                borderTop:
                  "2px solid color-mix(in srgb, var(--sf-gold) 60%, transparent)",
              }}
            >
              <div
                className="leading-none text-[var(--sf-paper-raised)]"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(38px, 5vw, 58px)",
                  letterSpacing: "-0.04em",
                }}
              >
                {st.value}
              </div>
              <div
                className="mt-3 text-[14.5px] leading-[1.5]"
                style={{
                  color: "color-mix(in srgb, var(--sf-paper) 74%, transparent)",
                }}
              >
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
