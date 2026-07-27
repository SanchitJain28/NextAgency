import { CASE_STUDIES } from "@/data/data";

export default function CaseStudies() {
  return (
    <section id="case-studies" aria-labelledby="cases-heading" className="py-[120px] px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[#1677ff] mb-4">
          Case studies
        </div>
        <h2 id="cases-heading" className="text-[40px] font-semibold tracking-[-0.025em] leading-[1.1] text-[#111111] mb-5">
          Results we&apos;ve delivered
        </h2>
        <p className="text-[18px] text-[#6b7280] max-w-[600px] leading-[1.55] mb-12">
          Real Shopify stores. Real numbers. No invented metrics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((c) => (
            <div
              key={c.title}
              className="bg-white border border-[#d9dee7] rounded-lg p-8"
            >
              <div className="text-4xl font-semibold tracking-[-0.02em] text-[#1677ff] mb-1">
                {c.metric}
              </div>
              <div className="text-[13px] text-[#6b7280] tracking-[0.06em] uppercase mb-4">
                {c.label}
              </div>
              <h3 className="text-lg font-semibold tracking-[-0.01em] text-[#111111] mb-2">
                {c.title}
              </h3>
              <p className="text-[15px] text-[#6b7280] leading-[1.55]">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
