import Link from "next/link";

type Project = {
  id: string;
  title: string;
  category: "Storefront" | "App";
  description: string;
  tags: string[];
  imagePlaceholder: string;
  link: string;
};

const PROJECTS: Project[] = [
  {
    id: "iron-crate",
    title: "Iron Crate",
    category: "Storefront",
    description:
      "A custom-built eCommerce storefront tailored for a high-performance sports supplement brand. We delivered a visually striking aesthetic while engineering every touchpoint for maximum CRO, including a gamified high-speed slide-out cart.",
    tags: ["Custom Theme", "CRO", "High-Speed Cart"],
    imagePlaceholder: "/portfolio/iron-crate/covers/cover.png",
    link: "/portfolio",
  },
  {
    id: "recovrx",
    title: "RecovrX",
    category: "Storefront",
    description:
      "A premium Shopify storefront designed for a high-end athletic recovery brand. The build centered on delivering a sleek, dark-mode aesthetic while integrating advanced CRO strategies and a high-AOV cart.",
    tags: ["Dark Mode", "High-AOV", "Mobile Responsive"],
    imagePlaceholder: "/portfolio/recovrx/covers/cover.png",
    link: "/portfolio",
  },
  {
    id: "flexform-athletics",
    title: "FlexForm Athletics",
    category: "Storefront",
    description:
      "Custom-built storefront for a premium women's activewear brand. The project focused on a minimalist, visually-driven UI that puts product imagery front and center alongside strategic upsell features.",
    tags: ["Minimalist", "Athleisure", "Upsell Carousel"],
    imagePlaceholder: "/portfolio/flexform-athletics/covers/cover.png",
    link: "/portfolio",
  },
  {
    id: "maison-luxe",
    title: "Maison Luxe",
    category: "Storefront",
    description:
      "A premium storefront designed for a luxury Scandinavian home decor brand. Built upon the Shopify Dawn architecture, the project required extensive UI customization to deliver an editorial, high-end aesthetic.",
    tags: ["Luxury", "Editorial", "Shopify Dawn"],
    imagePlaceholder: "/portfolio/maison-luxe/covers/cover.png",
    link: "/portfolio",
  },
  {
    id: "industrial-supply-direct",
    title: "Industrial Supply Direct",
    category: "Storefront",
    description:
      "Specialized B2B eCommerce platform built for the industrial manufacturing sector. We transformed a complex technical catalog into a streamlined procurement experience with volume pricing and custom quote generation.",
    tags: ["B2B", "Data-Rich", "Quote Generation"],
    imagePlaceholder: "/portfolio/industrial-supply-direct/covers/cover.png",
    link: "/portfolio",
  },
  {
    id: "360-alpha",
    title: "360 - Alpha",
    category: "Storefront",
    description:
      "A high-end storefront engineered for a premium streetwear brand. Inspired by elevated aesthetics, we delivered an immersive lookbook-style browsing experience while maintaining rigorous CRO standards.",
    tags: ["Premium", "Streetwear", "Minimalist"],
    imagePlaceholder: "/portfolio/360-alpha/covers/cover.png",
    link: "/portfolio",
  },
  {
    id: "scalefront-app",
    title: "Scalefront",
    category: "App",
    description:
      "An intelligent Shopify application engineered to automate cross-selling through AI-driven recommendations. It eliminates manual configuration by instantly generating highly relevant product suggestions.",
    tags: ["AI-Powered", "Omnichannel", "Zero-Config"],
    imagePlaceholder: "/portfolio/scalefront-app/covers/cover.png",
    link: "#",
  },
  {
    id: "pairly-app",
    title: "Pairly",
    category: "App",
    description:
      "A comprehensive Shopify bundle and upsell application designed to maximize store revenue. It combines multiple high-converting offer types with an intelligent, AI-backed recommendation engine.",
    tags: ["Bundle & Upsell", "AI Engine", "Native UI"],
    imagePlaceholder: "/portfolio/pairly-app/covers/cover.png",
    link: "#",
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="max-w-[1200px] mx-auto px-7 py-8 lg:py-16">
      <div className="mb-6 md:mb-16">
        <div className="text-[13px] font-semibold tracking-[0.14em] uppercase text-[var(--sf-primary)] mb-[16px]">
          Recent Work
        </div>
        <h2
          className="leading-[1.05] tracking-[-0.03em] text-[var(--sf-ink)]"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(32px, 4vw, 48px)",
          }}
        >
          Featured <span className="text-[var(--sf-primary)]">Projects</span>
        </h2>
      </div>

      {/* Grid of Projects */}
      <div className="flex md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 brutal-scrollbar scroll-pl-7 -mx-7 px-7 md:mx-0 md:px-0 md:scroll-pl-0">
        {PROJECTS.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            className="group flex flex-col bg-[var(--sf-paper-raised)] border-2 border-[var(--sf-ink)] overflow-hidden transition-all duration-200 hover:-translate-y-1 shadow-[6px_6px_0_var(--sf-ink)] hover:shadow-[10px_10px_0_var(--sf-ink)] w-[85vw] md:w-auto snap-start shrink-0"
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
                  fontFamily: "'Bricolage Grotesque', sans-serif",
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
                View Project →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
