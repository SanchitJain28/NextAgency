import Link from "next/link";
import CarouselArrows from "./carousel-arrows";

type CaseStudy = {
  id: string;
  brand: string;
  industry: string;
  headline: string;
  metric: string;
  metricLabel: string;
  description: string;
  imagePlaceholder: string;
  link: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-1",
    brand: "Iron Crate",
    industry: "Sports & Fitness",
    headline: "Custom 3-step bundle builder and drawer cart.",
    metric: "+42%",
    metricLabel: "Increase in AOV",
    description:
      "We replaced a generic theme with a custom build featuring a 3-tier supplement stack builder, clinical dosage tabs, and a slide-out cart with live free-shipping rewards.",
    imagePlaceholder: "/portfolio/iron-crate/covers/cover.png",
    link: "/work/iron-crate",
  },
  {
    id: "cs-2",
    brand: "RecovrX",
    industry: "Athletic Recovery",
    headline: "Clean product layouts for high-ticket recovery gear.",
    metric: "+28%",
    metricLabel: "Conversion Rate",
    description:
      "Selling high-ticket recovery tools requires clear information. We built technical spec tables, video dosage accordions, and a 1-click cart drawer to help buyers choose with confidence.",
    imagePlaceholder: "/portfolio/recovrx/covers/cover.png",
    link: "/work/recovrx",
  },
  {
    id: "cs-3",
    brand: "Maison Luxe",
    industry: "Luxury Home Decor",
    headline: "Editorial lifestyle storefront with instant filters.",
    metric: "1.2s",
    metricLabel: "Page Load Time",
    description:
      "We removed 12 slow marketplace apps and built native Liquid 2.0 sections with room lookbook tagging and instant AJAX category filtering.",
    imagePlaceholder: "/portfolio/maison-luxe/covers/cover.png",
    link: "/portfolio",
  },
  {
    id: "cs-4",
    brand: "Industrial Supply",
    industry: "B2B Manufacturing",
    headline: "50,000 SKU catalog with tiered volume pricing.",
    metric: "3x",
    metricLabel: "Faster Quote Generation",
    description:
      "We structured a dense industrial catalog with automated spec sheet downloads, tiered bulk discount tables, and online quote submissions.",
    imagePlaceholder: "/portfolio/industrial-supply-direct/covers/cover.png",
    link: "/work/industrial-supply-direct",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-16 lg:py-24 overflow-hidden border-t-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]"
    >
      <div className="max-w-[1200px] mx-auto px-7 mb-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div className="max-w-[640px]">
            <div className="text-[13px] font-semibold tracking-[0.14em] uppercase text-[var(--sf-primary)] mb-[14px]">
              Proven Results
            </div>
            <h2
              className="m-0 leading-[1.02] tracking-[-0.03em] text-[var(--sf-ink)]"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(32px, 4.4vw, 52px)",
                textWrap: "balance",
              }}
            >
              Case studies that move the needle.
            </h2>
          </div>

          <CarouselArrows targetId="case-studies-scroll" />
        </div>
      </div>

      {/* Snap Carousel */}
      <div
        id="case-studies-scroll"
        className="pl-7 overflow-x-auto pb-10 snap-x snap-mandatory brutal-scrollbar scroll-smooth"
        style={{ scrollPaddingLeft: "1.75rem" }}
      >
        <div className="flex gap-6 w-max pr-7">
          {CASE_STUDIES.map((cs) => (
            <article
              key={cs.id}
              className="w-[85vw] md:w-[600px] lg:w-[700px] flex-shrink-0 snap-start bg-white border-2 border-[var(--sf-ink)] flex flex-col md:flex-row group hover:-translate-y-1 hover:shadow-[10px_10px_0_var(--sf-ink)] transition-all duration-300"
            >
              {/* Image Side */}
              <div className="w-full md:w-[45%] h-[250px] md:h-auto border-b-2 md:border-b-0 md:border-r-2 border-[var(--sf-ink)] overflow-hidden relative bg-[var(--sf-paper-sunken)]">
                <img
                  src={cs.imagePlaceholder}
                  alt={cs.brand}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[var(--sf-primary)] text-white text-[11px] font-bold tracking-[0.1em] uppercase px-3 py-1.5 shadow-[3px_3px_0_var(--sf-ink)] border-2 border-[var(--sf-ink)]">
                  {cs.industry}
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-[55%] p-6 md:p-8 flex flex-col">
                <div className="mb-6 border-b-2 border-dashed border-[var(--sf-ink-mute)] pb-6">
                  <span className="text-[12px] font-bold text-[var(--sf-ink-mute)] uppercase tracking-wider mb-2 block">
                    {cs.brand}
                  </span>
                  <h3
                    className="text-[22px] md:text-[26px] leading-[1.1] tracking-[-0.02em] text-[var(--sf-ink)]"
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 800,
                    }}
                  >
                    {cs.headline}
                  </h3>
                </div>

                <p className="text-[15px] leading-[1.5] text-[var(--sf-ink-soft)] font-medium mb-8 flex-1">
                  {cs.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span
                      className="text-[32px] font-black text-[var(--sf-ink)] tracking-[-0.04em] leading-none mb-1"
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                      }}
                    >
                      {cs.metric}
                    </span>
                    <span className="text-[12px] font-bold text-[var(--sf-ink-soft)] uppercase tracking-widest">
                      {cs.metricLabel}
                    </span>
                  </div>

                  <Link
                    href={cs.link}
                    className="w-12 h-12 rounded-full bg-[var(--sf-paper-raised)] border-2 border-[var(--sf-ink)] flex items-center justify-center group-hover:bg-[var(--sf-primary)] group-hover:text-white transition-colors duration-200"
                  >
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
