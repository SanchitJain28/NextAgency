import { TECH_STACK } from "@/data/data";

export default function TechStack() {
  return (
    <section aria-labelledby="tech-heading" className="py-[120px] px-10 bg-[#f7f8fa]">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[#1677ff] mb-4">
          Tech stack
        </div>
        <h2 id="tech-heading" className="text-[40px] font-semibold tracking-[-0.025em] leading-[1.1] text-[#111111] mb-5">
          Built with the tools that power modern commerce
        </h2>
        <p className="text-[18px] text-[#6b7280] max-w-[600px] leading-[1.55] mb-12">
          From Shopify Liquid to Hydrogen, Next.js to GraphQL — we work with
          the full Shopify ecosystem, not just surface-level themes.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-[#d9dee7] border border-[#d9dee7] rounded-lg overflow-hidden">
          {TECH_STACK.map((t) => (
            <div
              key={t}
              className="flex items-center justify-center px-6 py-9 text-base font-semibold tracking-[-0.01em] text-[#6b7280] bg-[#f7f8fa]"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
