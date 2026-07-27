import { STATS } from "@/data/data";

export default function Stats() {
  return (
    <section aria-label="Key statistics" className="md:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 bg-[#d9dee7] gap-[1px] rounded-lg overflow-hidden border border-[#d9dee7]">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="text-center py-6 md:py-10 px-4 md:px-5 bg-[#f7f8fa]"
          >
            <div className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-[#111111] mb-1.5">
              {s.number}
            </div>
            <div className="text-xs md:text-sm text-[#6b7280] tracking-[0.01em]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
