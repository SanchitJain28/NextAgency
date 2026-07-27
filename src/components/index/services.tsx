import Link from "next/link";
import { SERVICES } from "@/data/data";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-[60px] px-10"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[#1677ff] mb-4">
          What we do
        </div>
        <h2
          id="services-heading"
          className="text-[40px] font-semibold tracking-[-0.025em] leading-[1.1] text-[#111111] mb-5"
        >
          End-to-end Shopify development services
        </h2>
        <p className="text-[18px] text-[#6b7280] max-w-[600px] leading-[1.55] mb-12">
          From storefront architecture to post-launch optimization — our Shopify
          development agency handles every layer of your stack.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#d9dee7] border border-[#d9dee7] rounded-xl overflow-hidden">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="block p-6 md:p-8 bg-white transition-all hover:bg-[#f7f8fa]"
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 text-[#1677ff] bg-[#1677ff]/10"
                aria-hidden="true"
              >
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold tracking-[-0.01em] text-[#111111] mb-2">
                {s.title}
              </h3>
              <p className="text-[15px] text-[#6b7280] leading-[1.55]">
                {s.desc}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center h-12 px-7 text-[15px] font-semibold tracking-[0.02em] rounded-lg bg-transparent text-[#111111] border border-[#d9dee7] hover:bg-[#f7f8fa] transition-colors"
          >
            See all services
          </Link>
        </div>
      </div>
    </section>
  );
}
