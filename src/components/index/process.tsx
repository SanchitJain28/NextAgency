import { PROCESS_STEPS } from "@/data/data";

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-[120px] px-10"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[#1677ff] mb-4">
          How we work
        </div>
        <h2
          id="process-heading"
          className="text-[40px] font-semibold tracking-[-0.025em] leading-[1.1] text-[#111111] mb-5"
        >
          From kickoff to launch in four steps
        </h2>
        <p className="text-[18px] text-[#6b7280] max-w-[600px] leading-[1.55] mb-12">
          Our Shopify development process is built around clarity, speed, and
          zero surprises at launch.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 relative gap-y-10 md:gap-y-0">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.num} className="text-center px-6 relative">
              {i < PROCESS_STEPS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden md:block absolute top-[28px] left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-[#d9dee7]"
                />
              )}
              <div
                className="w-14 h-14 rounded-full bg-[#f7f8fa] border border-[#d9dee7] flex items-center justify-center mx-auto mb-5 text-[20px] font-semibold tracking-[-0.01em] text-[#111111]"
                aria-hidden="true"
              >
                {step.num}
              </div>
              <h3 className="text-[17px] font-semibold tracking-[-0.01em] mb-2 text-[#111111]">
                {step.title}
              </h3>
              <p className="text-sm text-[#6b7280] leading-[1.5]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
