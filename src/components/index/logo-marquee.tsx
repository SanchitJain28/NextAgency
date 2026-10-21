import { homepageDefaults, type HomepageContent } from "@/content/homepage";

export default function LogoMarquee({
  content = homepageDefaults.logos,
}: {
  content?: HomepageContent["logos"];
}) {
  return (
    <section className="max-w-[1200px] mx-auto mt-4 px-7">
      <div className="text-center text-[12.5px] font-semibold tracking-[0.14em] uppercase text-[var(--sf-ink-mute)] mb-[22px]">
        {content.trustedByBrandsScalingOn}
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
          {[...content.items, ...content.items].map((logo, i) => (
            <span
              key={i}
              className="whitespace-nowrap opacity-[0.72] text-[var(--sf-ink-soft)] text-2xl tracking-[-0.02em]"
              style={{
                fontFamily: "'Inter', sans-serif",
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
