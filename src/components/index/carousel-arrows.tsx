"use client";

export default function CarouselArrows({ targetId }: { targetId: string }) {
  const scrollLeft = () => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollBy({ left: -600, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollBy({ left: 600, behavior: "smooth" });
    }
  };

  return (
    <div className="hidden md:flex gap-3">
      <button
        onClick={scrollLeft}
        className="w-12 h-12 bg-white border-2 border-[var(--sf-ink)] flex items-center justify-center shadow-[4px_4px_0_var(--sf-ink)] hover:-translate-y-1 hover:shadow-[6px_6px_0_var(--sf-ink)] transition-all cursor-pointer"
        aria-label="Scroll left"
      >
        <span className="text-xl">←</span>
      </button>
      <button
        onClick={scrollRight}
        className="w-12 h-12 bg-[var(--sf-primary)] text-white border-2 border-[var(--sf-ink)] flex items-center justify-center shadow-[4px_4px_0_var(--sf-ink)] hover:-translate-y-1 hover:shadow-[6px_6px_0_var(--sf-ink)] transition-all cursor-pointer"
        aria-label="Scroll right"
      >
        <span className="text-xl">→</span>
      </button>
    </div>
  );
}
