import { FAQS } from "@/data/data";

export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-[120px] px-10 bg-[#f7f8fa]">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[#1677ff] mb-4">
          FAQ
        </div>
        <h2 id="faq-heading" className="text-[40px] font-semibold tracking-[-0.025em] leading-[1.1] text-[#111111] mb-5">
          Frequently asked questions
        </h2>
        <p className="text-[18px] text-[#6b7280] max-w-[600px] leading-[1.55] mb-12">
          Everything you need to know before hiring a Shopify development
          agency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group border border-[#d9dee7] rounded-lg overflow-hidden bg-white"
            >
              <summary className="p-5 px-6 text-[15px] font-semibold tracking-[0.01em] cursor-pointer flex items-center justify-between list-none select-none transition-colors hover:text-[#1677ff] [&::-webkit-details-marker]:hidden">
                {f.q}
                <svg
                  className="w-4 h-4 text-[#6b7280] group-open:rotate-180 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-[15px] text-[#6b7280] leading-[1.6]">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
