import Link from "next/link";
import { TESTIMONIALS } from "@/data/data";
import { StarIcon } from "@/icons";

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="py-[120px] px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[#1677ff] mb-4">
          Client testimonials
        </div>
        <h2 id="testimonials-heading" className="text-[40px] font-semibold tracking-[-0.025em] leading-[1.1] text-[#111111] mb-5">
          What our clients say
        </h2>
        <p className="text-[18px] text-[#6b7280] max-w-[600px] leading-[1.55] mb-12">
          Merchants trust ScaleFront because we treat their stores like we
          built them ourselves — because we did.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="m-0 bg-white border border-[#d9dee7] rounded-lg p-8"
            >
              {/* Stars */}
              <div
                className="flex gap-0.5 mb-4 text-[#1677ff]"
                aria-label="5 stars"
              >
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4" />
                ))}
              </div>
              <blockquote className="text-[15px] leading-[1.6] text-[#111111] not-italic m-0 mb-5">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-[#1677ff]/15 flex items-center justify-center text-sm font-semibold text-[#1677ff] shrink-0"
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold tracking-[0.01em] text-[#111111]">
                    {t.name}
                  </div>
                  <div className="text-[13px] text-[#6b7280] tracking-[0.01em]">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact-us"
            className="inline-flex items-center h-12 px-7 text-[15px] font-semibold tracking-[0.02em] rounded-lg bg-transparent text-[#111111] border border-[#d9dee7] hover:bg-[#f7f8fa] transition-colors"
          >
            Work with us
          </Link>
        </div>
      </div>
    </section>
  );
}
