import { WHY_US } from "@/data/data";
import { WhyUsIllustrationIcon } from "@/icons";

export default function WhyUs() {
  return (
    <section
      aria-labelledby="why-heading"
      className="py-[120px] px-10 bg-[#f7f8fa]"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[#1677ff] mb-4">
          Why ScaleFront
        </div>
        <h2
          id="why-heading"
          className="text-[40px] font-semibold tracking-[-0.025em] leading-[1.1] text-[#111111] mb-12"
        >
          Not your average Shopify agency
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-7">
            {WHY_US.map((w) => (
              <div key={w.num} className="flex gap-4 items-start">
                <div
                  className="w-7 h-7 rounded-full bg-[#1677ff]/12 text-[#1677ff] flex items-center justify-center text-[13px] font-semibold shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  {w.num}
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold tracking-[-0.01em] mb-1 text-[#111111]">
                    {w.title}
                  </h3>
                  <p className="text-[15px] text-[#6b7280] leading-[1.55]">
                    {w.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <WhyUsIllustrationIcon className="w-full max-w-[500px] h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
