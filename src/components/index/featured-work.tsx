import Link from "next/link";
import { homepageDefaults, type HomepageContent } from "@/content/homepage";

export default function FeaturedWork({
  content = homepageDefaults.projects,
  layout = "carousel",
}: {
  content?: HomepageContent["projects"];
  layout?: "carousel" | "grid";
}) {
  return (
    <section id="work" className="max-w-[1200px] mx-auto px-7 py-8 lg:py-16">
      <div className="mb-6 md:mb-16">
        <div className="text-[13px] font-semibold tracking-[0.14em] uppercase text-[var(--sf-primary)] mb-[16px]">
          {content.recentWork}
        </div>
        <h2
          className="leading-[1.05] tracking-[-0.03em] text-[var(--sf-ink)]"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(32px, 4vw, 48px)",
          }}
        >
          {content.featured}
          <span className="text-[var(--sf-primary)]">{content.projects}</span>
        </h2>
      </div>

      {/* Grid of Projects */}
      <div className={layout === "grid"
        ? "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10"
        : "flex md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 brutal-scrollbar scroll-pl-7 -mx-7 px-7 md:mx-0 md:px-0 md:scroll-pl-0"}>
        {content.items.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            className={`group flex flex-col bg-[var(--sf-paper-raised)] border-2 border-[var(--sf-ink)] overflow-hidden transition-all duration-200 hover:-translate-y-1 shadow-[6px_6px_0_var(--sf-ink)] hover:shadow-[10px_10px_0_var(--sf-ink)] ${layout === "grid" ? "min-w-0" : "w-[85vw] md:w-auto snap-start shrink-0"}`}
          >
            {/* Image Container */}
            <div className="relative aspect-[16/9] border-b-2 border-[var(--sf-ink)] overflow-hidden bg-[var(--sf-paper-sunken)]">
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10 bg-[var(--sf-ink)] text-white text-[11px] font-bold tracking-[0.08em] uppercase px-3 py-1.5 shadow-[3px_3px_0_var(--sf-primary)]">
                {project.category}
              </div>

              <img
                src={project.imagePlaceholder}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Content Container */}
            <div className="p-5 md:p-6 flex flex-col flex-1">
              <h3
                className="text-[20px] tracking-[-0.01em] text-[var(--sf-ink)] mb-2"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                }}
              >
                {project.title}
              </h3>

              <p className="text-[14.5px] text-[var(--sf-ink-soft)] font-medium leading-[1.5] mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto mb-5">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-bold tracking-[0.02em] text-[var(--sf-ink-mute)] bg-[var(--sf-paper)] border-2 border-[var(--sf-ink)] px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto text-[13px] font-bold tracking-[0.05em] uppercase text-[var(--sf-primary)] group-hover:translate-x-1 transition-transform duration-200">
                {content.viewProject}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
