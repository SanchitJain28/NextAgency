import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative max-w-[1200px] mx-auto px-7 pt-[52px] pb-7"
      style={{ fontFamily: "var(--font-body, 'Hanken Grotesk', sans-serif)" }}
    >
      <div className="relative z-[1] grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
        <div>
          <div
            className="inline-flex items-center gap-2.5 border-2 border-[var(--sf-ink)] px-[15px] py-2 pl-[10px] mb-[26px]"
            style={{ boxShadow: "var(--sf-shadow-sm)" }}
          >
            <span className="inline-flex gap-1">
              <span
                className="w-[7px] h-[7px] bg-[var(--sf-sage)]"
                style={{
                  animation: "sf-pulse 2.4s var(--sf-ease-out) infinite",
                }}
              />
            </span>
            <span className="text-[13px] font-semibold tracking-[0.02em] text-[var(--sf-ink-soft)]">
              Shopify Partner · Based in Gurgaon
            </span>
          </div>

          {/* Headline */}
          <h1
            className="mb-[22px] leading-[0.98] tracking-[-0.035em] text-[var(--sf-ink)]"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(44px, 6.2vw, 80px)",
              textWrap: "balance",
            }}
          >
            Hire Shopify{" "}
            <span className="relative whitespace-nowrap text-[var(--sf-primary)]">
              Developer
              <span
                className="absolute left-0 right-0 bottom-[6px] h-3 -z-[1]"
                style={{
                  background: "var(--sf-gold-soft)",
                  borderRadius: "3px",
                }}
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-[34px] max-w-[520px] text-[19px] leading-[1.42] text-[var(--sf-ink-soft)]">
            Based in Gurgaon, working with Shopify brands across India. We build
            fast custom stores, private apps, and headless storefronts designed to convert.
          </p>

          <div className="flex flex-wrap gap-[14px] items-center">
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-2.5 bg-[var(--sf-primary)] text-white font-semibold text-[16px] leading-none px-[26px] py-[15px] border-2 border-[var(--sf-ink)] transition-all duration-100 hover:translate-x-[2px] hover:translate-y-[2px] shadow-[5px_5px_0_var(--sf-ink)] hover:shadow-[3px_3px_0_var(--sf-ink)] hover:bg-[var(--sf-primary-deep)]"
            >
              <img
                src="/icons/call.png"
                alt="Call icon"
                className="w-4 h-4 object-contain brightness-0 invert"
              />
              Book a call →
            </Link>
            <Link
              href="https://wa.me/919650296375"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#1FA855] text-white border-2 border-[var(--sf-ink)] font-semibold text-[16px] leading-none px-6 py-[15px] transition-all duration-100 hover:translate-x-[2px] hover:translate-y-[2px] shadow-[5px_5px_0_var(--sf-ink)] hover:shadow-[3px_3px_0_var(--sf-ink)]"
            >
              <img
                src="/icons/whatsapp.png"
                alt="WhatsApp icon"
                className="w-4.5 h-4.5 object-contain"
              />
              WhatsApp Us
            </Link>
          </div>

          <div className="flex gap-9 mt-7 flex-wrap">
            <div>
              <div
                className="text-[32px] tracking-[-0.03em] text-[var(--sf-ink)]"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                }}
              >
                +41%
              </div>
              <div className="text-[13.5px] text-[var(--sf-ink-mute)] font-medium">
                avg. conversion lift
              </div>
            </div>
            <div className="w-px bg-[var(--sf-line)]" />
            <div>
              <div
                className="text-[32px] tracking-[-0.03em] text-[var(--sf-ink)]"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                }}
              >
                180+
              </div>
              <div className="text-[13.5px] text-[var(--sf-ink-mute)] font-medium">
                stores shipped
              </div>
            </div>
            <div className="w-px bg-[var(--sf-line)]" />
            <div>
              <div
                className="text-[32px] tracking-[-0.03em] text-[var(--sf-ink)]"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                }}
              >
                4.9
                <span className="text-[18px] text-[var(--sf-gold)]">★</span>
              </div>
              <div className="text-[13.5px] text-[var(--sf-ink-mute)] font-medium">
                client rating
              </div>
            </div>
          </div>
        </div>

        {/* ─── Right column: Floating mock cards ─── */}
        <div className="relative h-[420px] hidden lg:block">
          {/* Background gradient */}
          <div
            className="absolute"
            style={{
              inset: "8% 4%",
              background:
                "linear-gradient(150deg, var(--sf-sage-soft), var(--sf-primary-soft))",
              boxShadow: "inset 0 2px 30px rgba(255,255,255,.5)",
            }}
          />

          {/* Spinning dashed border */}
          <div
            className="absolute top-[6%] left-[2%] w-[66px] h-[66px] border-2 border-dashed border-[var(--sf-primary)] opacity-50"
            style={{ animation: "sf-spin 26s linear infinite" }}
          />

          {/* Storefront mock card */}
          <div
            className="absolute top-[12%] left-[10%] w-[230px] bg-[var(--sf-paper-raised)] p-[14px]"
            style={
              {
                boxShadow: "var(--sf-shadow-lg)",
                "--r": "-4deg",
                animation: "sf-float 7s var(--sf-ease-out) infinite",
              } as React.CSSProperties
            }
          >
            <div
              className="h-[120px] flex items-end p-3"
              style={{
                background:
                  "linear-gradient(135deg, var(--sf-berry), var(--sf-primary))",
              }}
            >
              <span
                className="text-white text-[19px] leading-[1.05] tracking-[-0.02em]"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                }}
              >
                Nomad
                <br />
                Coffee Co.
              </span>
            </div>
            <div className="flex justify-between items-center mt-[11px]">
              <div>
                <div className="font-bold text-sm">Reserve blend</div>
                <div className="text-xs text-[var(--sf-ink-mute)]">
                  Single origin
                </div>
              </div>
              <div
                className="text-[var(--sf-primary)]"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                }}
              >
                $24
              </div>
            </div>
            <div className="mt-[10px] bg-[var(--sf-ink)] text-white text-center text-[12.5px] font-semibold py-[9px]">
              Add to cart
            </div>
          </div>

          {/* Metric chip */}
          <div
            className="absolute bottom-[14%] right-[4%] w-[200px] bg-[var(--sf-paper-raised)] p-4"
            style={
              {
                boxShadow: "var(--sf-shadow-lg)",
                "--r": "5deg",
                animation: "sf-float 8.5s var(--sf-ease-out) 0.6s infinite",
              } as React.CSSProperties
            }
          >
            <div className="text-xs font-semibold tracking-[0.04em] uppercase text-[var(--sf-ink-mute)]">
              Revenue / visit
            </div>
            <div className="flex items-baseline gap-2 mt-[6px]">
              <span
                className="text-[30px] tracking-[-0.03em]"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                }}
              >
                $4.82
              </span>
              <span className="text-[var(--sf-sage)] font-bold text-[13px]">
                ▲ 28%
              </span>
            </div>
            <div className="flex gap-1 items-end h-9 mt-[10px]">
              {[40, 60, 50, 80, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-[3px]"
                  style={{
                    height: `${h}%`,
                    background:
                      i >= 3 ? "var(--sf-sage)" : "var(--sf-sage-soft)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Gold star sticker */}
          <div
            className="absolute top-[2%] right-[14%] w-[58px] h-[58px] bg-[var(--sf-gold)] flex items-center justify-center"
            style={
              {
                boxShadow: "var(--sf-shadow-md)",
                "--r": "8deg",
                animation: "sf-float 6s var(--sf-ease-out) 0.3s infinite",
              } as React.CSSProperties
            }
          >
            <span
              className="text-[var(--sf-ink)] text-[13px] leading-none text-center"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
              }}
            >
              A+
              <br />
              <span className="text-[8px] font-semibold">CWV</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
