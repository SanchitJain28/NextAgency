const SWATCHES = [
  { name: 'Clay', hex: '#D9481F' }, { name: 'Espresso', hex: '#181310' }, { name: 'Sage', hex: '#4C6B49' },
  { name: 'Gold', hex: '#E39A16' }, { name: 'Berry', hex: '#8B2F45' }, { name: 'Paper', hex: '#FFFFFF' },
];

export default function DesignShowcase() {
  return (
    <section id="system" className="bg-[var(--sf-paper-sunken)] mt-9 border-t-2 border-[var(--sf-ink)]">
      <div className="max-w-[1200px] mx-auto px-7 py-14">
        <div className="max-w-[660px] mb-8">
          <div className="text-[13px] font-semibold tracking-[0.14em] uppercase text-[var(--sf-primary)] mb-[14px]">
            The system
          </div>
          <h2
            className="m-0 mb-3 leading-[1.02] tracking-[-0.03em] text-[var(--sf-ink)]"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(30px, 4vw, 46px)",
            }}
          >
            A living design language.
          </h2>
          <p className="m-0 text-[17px] text-[var(--sf-ink-soft)] leading-[1.6]">
            The same tokens, type, and components power every screen we ship — so brands stay consistent as they scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-[22px]">
          {/* Palette */}
          <div className="bg-[var(--sf-paper-raised)] p-[22px]" style={{ boxShadow: "var(--sf-shadow-sm)" }}>
            <div className="text-[12px] text-[var(--sf-ink-mute)] mb-[18px]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              01 — COLOR
            </div>
            <div className="grid grid-cols-3 gap-3">
              {SWATCHES.map((sw) => (
                <div key={sw.hex}>
                  <div
                    className="h-16"
                    style={{
                      background: sw.hex,
                      boxShadow: "inset 0 0 0 1px rgba(0,0,0,.05)",
                    }}
                  />
                  <div className="mt-2 font-semibold text-[13px] text-[var(--sf-ink)]">{sw.name}</div>
                  <div className="text-[11.5px] text-[var(--sf-ink-mute)]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {sw.hex}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Type */}
          <div className="bg-[var(--sf-paper-raised)] p-[22px]" style={{ boxShadow: "var(--sf-shadow-sm)" }}>
            <div className="text-[12px] text-[var(--sf-ink-mute)] mb-[18px]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              02 — TYPE
            </div>
            <div className="border-b-2 border-[var(--sf-ink)] pb-4 mb-4">
              <div className="text-[12px] text-[var(--sf-ink-mute)] mb-1">Display — Bricolage Grotesque</div>
              <div
                className="text-[40px] leading-none tracking-[-0.03em] text-[var(--sf-ink)]"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700 }}
              >
                Aa Scale
              </div>
            </div>
            <div>
              <div className="text-[12px] text-[var(--sf-ink-mute)] mb-1.5">Body — Hanken Grotesk</div>
              <p className="m-0 text-[16px] leading-[1.6] text-[var(--sf-ink-soft)]">
                We design for the merchant on their phone at 11pm and the shopper who just wants to check out. Clarity first, always.
              </p>
            </div>
          </div>
        </div>

        {/* Components row */}
        <div className="bg-[var(--sf-paper-raised)] p-[22px] mt-[22px]" style={{ boxShadow: "var(--sf-shadow-sm)" }}>
          <div className="text-[12px] text-[var(--sf-ink-mute)] mb-5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            03 — COMPONENTS
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <button
              className="bg-[var(--sf-primary)] text-white font-semibold text-[15px] px-[22px] py-[13px] border-none cursor-pointer transition-all duration-200 hover:-translate-y-[2px] hover:bg-[var(--sf-primary-deep)]"
              style={{ boxShadow: "var(--sf-shadow-sm)" }}
            >
              Primary
            </button>
            <button
              className="bg-[var(--sf-paper-raised)] text-[var(--sf-ink)] font-semibold text-[15px] px-[22px] py-3 border-2 border-[var(--sf-ink)] cursor-pointer transition-all duration-200 hover:-translate-y-[2px]"
            >
              Secondary
            </button>
            <button className="bg-transparent text-[var(--sf-primary)] font-semibold text-[15px] px-2 py-3 border-none cursor-pointer">
              Ghost link →
            </button>
            <span className="inline-flex items-center gap-[7px] bg-[var(--sf-sage-soft)] text-[var(--sf-sage-deep)] font-semibold text-[13px] px-3.5 py-[7px]">
              <span className="w-[7px] h-[7px] bg-[var(--sf-sage)]" />
              In stock
            </span>
            <span className="bg-[var(--sf-primary)] text-white font-bold text-[13px] px-[13px] py-[7px]">
              -30%
            </span>
            <span className="bg-[var(--sf-gold-soft)] text-[#8a6410] font-bold text-[13px] px-[13px] py-[7px]">
              Award winner
            </span>
            <div className="flex items-center gap-2.5 bg-[var(--sf-paper)] border-2 border-[var(--sf-ink)] px-1.5 py-[5px] pl-[18px] min-w-[230px]">
              <input
                placeholder="Search the catalog…"
                className="border-none bg-transparent outline-none text-[14px] text-[var(--sf-ink)] flex-1 w-full"
              />
              <span className="w-[34px] h-[34px] bg-[var(--sf-ink)] text-white inline-flex items-center justify-center">
                ⌕
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
