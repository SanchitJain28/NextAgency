import Link from "next/link";
import { homepageDefaults, type HomepageContent } from "@/content/homepage";

export default function Services({
  content = homepageDefaults.services,
}: {
  content?: HomepageContent["services"];
}) {
  return (
    <section
      id="services"
      className="max-w-[1200px] mx-auto px-7 pt-[60px] pb-7"
    >
      <div className="flex justify-between items-end gap-6 flex-wrap mb-7">
        <div className="max-w-[640px]">
          <div className="text-[13px] font-semibold tracking-[0.14em] uppercase text-[var(--sf-primary)] mb-[14px]">
            {content.whatWeDo}
          </div>
          <h2
            className="m-0 leading-[1.02] tracking-[-0.03em]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 4.4vw, 52px)",
              textWrap: "balance",
            }}
          >
            {content.everythingYourStoreNeedsUnder}
          </h2>
        </div>
        <Link
          href={content.hrefContactUs}
          className="font-semibold text-[var(--sf-ink)] border-b-2 border-[var(--sf-primary)] pb-[3px] whitespace-nowrap"
        >
          {content.discussYourProject}
        </Link>
      </div>

      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 brutal-scrollbar scroll-pl-7 -mx-7 px-7 md:mx-0 md:px-0 md:scroll-pl-0">
        {content.items.map((svc) => (
          <article
            key={svc.no}
            className="bg-[var(--sf-paper-raised)] border-2 border-[var(--sf-ink)] p-5 pb-[22px] relative overflow-hidden transition-all duration-200 hover:-translate-y-[6px] hover:shadow-[var(--sf-shadow-lift)] w-[85vw] md:w-auto snap-start shrink-0"
          >
            <div className="flex justify-between items-start mb-5">
              <span
                className="w-[46px] h-[46px] inline-flex items-center justify-center text-[17px]"
                style={{
                  background: svc.tint,
                  color: svc.ink,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                }}
              >
                {svc.icon}
              </span>
              <span
                className="text-[13px] text-[var(--sf-ink-mute)]"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {svc.no}
              </span>
            </div>
            <h3
              className="m-0 mb-[9px] text-[21px] tracking-[-0.02em] leading-[1.15]"
              style={{
                fontFamily: "'Inter', sans-serif",
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
