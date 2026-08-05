const LOGOS = [
  "Nomad Coffee",
  "Verdant",
  "Ashwood",
  "Tidalwear",
  "Lumen",
  "Marrow & Co",
  "Fielding",
  "Osric",
  "Blume",
  "Halcyon",
];

export default function LogoMarquee() {
  return (
    <section className="max-w-[1200px] mx-auto mt-4 px-7">
      <div className="text-center text-[12.5px] font-semibold tracking-[0.14em] uppercase text-[var(--sf-ink-mute)] mb-[22px]">
        Trusted by brands scaling on Shopify
      </div>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div
          className="flex gap-14 w-max py-[6px] px-7"
          style={{ animation: "sf-marquee 32s linear infinite" }}
        >
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <span
              key={i}
              className="whitespace-nowrap opacity-[0.72] text-[var(--sf-ink-soft)] text-2xl tracking-[-0.02em]"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
              }}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
