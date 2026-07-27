import Link from "next/link";

export default function CTA() {
  return (
    <section
      aria-label="Start a project"
      className="py-[120px] px-10 bg-[#111111] text-center"
    >
      <div className="max-w-[680px] mx-auto">
        <h2 className="text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-white mb-5">
          Ready to scale your Shopify store?
        </h2>
        <p className="text-[18px] text-[#9ca3af] leading-[1.55] mb-9">
          Tell us about your project. We&apos;ll respond within one business
          day with a plan — not a sales pitch. We typically work with brands
          doing $1M+ in annual GMV.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact-us"
            className="inline-flex items-center h-12 px-7 text-[15px] font-semibold tracking-[0.02em] rounded-lg bg-[#1677ff] text-white hover:bg-[#1677ff]/90 transition-colors"
          >
            Start a project
          </Link>
          <Link
            href="#case-studies"
            className="inline-flex items-center h-12 px-7 text-[15px] font-semibold tracking-[0.02em] rounded-lg bg-transparent text-white border border-white/25 hover:bg-white/10 transition-colors"
          >
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}
