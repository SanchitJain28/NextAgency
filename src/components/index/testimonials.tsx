import CarouselArrows from "./carousel-arrows";
import { homepageDefaults, type HomepageContent } from "@/content/homepage";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-[var(--sf-gold)]">
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star) {
          return (
            <svg
              key={star}
              className="w-[18px] h-[18px] fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          );
        } else if (rating >= star - 0.5) {
          return (
            <div key={star} className="relative w-[18px] h-[18px]">
              <svg
                className="absolute top-0 left-0 w-[18px] h-[18px] text-[var(--sf-gold)]"
                stroke="currentColor"
                fill="transparent"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
              <div className="absolute top-0 left-0 w-[50%] h-full overflow-hidden">
                <svg
                  className="w-[18px] h-[18px] fill-current text-[var(--sf-gold)]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            </div>
          );
        } else {
          return (
            <svg
              key={star}
              className="w-[18px] h-[18px] text-[var(--sf-gold)]"
              stroke="currentColor"
              fill="transparent"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
          );
        }
      })}
    </div>
  );
}

export default function Testimonials({
  content = homepageDefaults.testimonials,
}: {
  content?: HomepageContent["testimonials"];
}) {
  return (
    <section className="py-16 lg:py-24 overflow-hidden bg-[var(--sf-paper-sunken)] border-t-2 border-[var(--sf-ink)]">
      <div className="max-w-[1200px] mx-auto px-7 mb-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div className="max-w-[640px]">
            <div className="text-[13px] font-semibold tracking-[0.14em] uppercase text-[var(--sf-primary)] mb-[14px]">
              {content.kindWords}
            </div>
            <h2
              className="m-0 leading-[1.02] tracking-[-0.03em] text-[var(--sf-ink)]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(32px, 4.4vw, 52px)",
                textWrap: "balance",
              }}
            >
              {content.foundersWhoCameBackFor}
            </h2>
          </div>
          <CarouselArrows targetId="testimonials-scroll" />
        </div>
      </div>

      <div
        id="testimonials-scroll"
        className="pl-7 overflow-x-auto pb-10 snap-x snap-mandatory brutal-scrollbar scroll-smooth"
        style={{ scrollPaddingLeft: "1.75rem" }}
      >
        <div className="flex gap-6 w-max pr-7">
          {content.items.map((t) => (
            <figure
              key={t.id}
              className="w-[85vw] md:w-[450px] flex-shrink-0 snap-start m-0 border-2 border-[var(--sf-ink)] p-8 flex flex-col gap-[24px] hover:-translate-y-1 hover:shadow-[10px_10px_0_var(--sf-ink)] transition-all duration-300"
              style={{
                background: t.bg,
                boxShadow: "var(--sf-shadow-sm)",
              }}
            >
              <StarRating rating={t.rating} />

              <blockquote
                className="m-0 leading-[1.45] tracking-[-0.01em] flex-1"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "19px",
                  color: t.ink,
                }}
              >
                &quot;{t.quote}&quot;
              </blockquote>

              <figcaption className="mt-auto pt-6 border-t-2 border-dashed border-[color-mix(in_srgb,var(--sf-ink)_20%,transparent)] flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-[36px] h-[36px] border-2 border-[var(--sf-ink)] object-cover bg-white"
                  loading="lazy"
                />
                <div className="flex flex-col">
                  <span
                    className="font-bold text-[15px]"
                    style={{ color: t.ink }}
                  >
                    {t.name}
                  </span>
                  <span
                    className="text-[13px] mt-0.5"
                    style={{ color: t.mute }}
                  >
                    {t.role}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
