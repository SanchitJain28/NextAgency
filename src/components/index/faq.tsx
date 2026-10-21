import { homepageDefaults, type HomepageContent } from "@/content/homepage";

export default function FAQ({
  content = homepageDefaults.faq,
}: {
  content?: HomepageContent["faq"];
}) {
  return (
    <section className="py-16 lg:py-24 px-7 bg-[var(--sf-paper)] border-t-2 border-[var(--sf-ink)]">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <div className="text-[13px] font-semibold tracking-[0.14em] uppercase text-[var(--sf-primary)] mb-[14px]">
            {content.faq}
          </div>
          <h2
            className="m-0 leading-[1.02] tracking-[-0.03em] text-[var(--sf-ink)]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 4.4vw, 52px)",
              textWrap: "balance",
            }}
          >
            {content.frequentlyAskedQuestions}
          </h2>
          <p className="mt-4 text-[17px] text-[var(--sf-ink-soft)] font-medium leading-[1.5]">
            {content.commonQuestionsAboutPricingTimelines}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {content.items.map((f, i) => (
            <details
              key={i}
              className="group border-2 border-[var(--sf-ink)] bg-white overflow-hidden transition-all duration-300 hover:shadow-[4px_4px_0_var(--sf-primary)]"
              style={{
                boxShadow: "4px 4px 0 var(--sf-ink)",
              }}
            >
              <summary className="p-5 md:p-6 text-[17px] font-bold tracking-[0.01em] cursor-pointer flex items-start justify-between list-none select-none text-[var(--sf-ink)] [&::-webkit-details-marker]:hidden">
                <span className="pr-6 leading-tight">{f.q}</span>
                <span className="flex-shrink-0 w-6 h-6 border-2 border-[var(--sf-ink)] rounded-full flex items-center justify-center text-[var(--sf-ink)] bg-[var(--sf-gold)] group-open:bg-[var(--sf-primary)] transition-colors">
                  <svg
                    className="w-3 h-3 group-open:rotate-180 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-5 md:px-6 pb-6 text-[15.5px] text-[var(--sf-ink-soft)] leading-[1.65] font-medium border-t-2 border-dashed border-[color-mix(in_srgb,var(--sf-ink)_20%,transparent)] mt-1 pt-5">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
