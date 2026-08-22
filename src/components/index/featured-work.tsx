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
      "A custom sports nutrition store featuring an interactive 3-step supplement bundle builder, clear dosage accordions, and an AJAX drawer cart with real-time spend rewards.",
    tags: ["Custom Theme", "Bundle Builder", "Drawer Cart"],
    imagePlaceholder: "/portfolio/iron-crate/covers/cover.png",
    link: "/work/iron-crate",
  },
  {
    id: "recovrx",
    title: "RecovrX",
    category: "Storefront",
    description:
      "A custom Shopify store for athletic recovery tools, featuring a clean dark mode design, technical comparison tables, and a milestone spend reward cart.",
    tags: ["Dark Mode", "Conversion-Focused", "Mobile Responsive"],
    imagePlaceholder: "/portfolio/recovrx/covers/cover.png",
    link: "/work/recovrx",
  },
  {
    id: "flexform-athletics",
    title: "FlexForm Athletics",
    category: "Storefront",
    description:
      "A women's activewear storefront with 9-category visual story strips, instant size filtering, and product page lookbook bundles.",
    tags: ["Minimalist", "Athleisure", "Lookbook Bundles"],
    imagePlaceholder: "/portfolio/flexform-athletics/covers/cover.png",
    link: "/work/flexform-athletics",
  },
  {
    id: "maison-luxe",
    title: "Maison Luxe",
    category: "Storefront",
    description:
      "A Scandinavian home decor storefront built on Shopify Online Store 2.0 with a 4-tab category grid, editorial room showcases, and instant cart slide-outs.",
    tags: ["Home Decor", "Editorial Layout", "Online Store 2.0"],
    imagePlaceholder: "/portfolio/maison-luxe/covers/cover.png",
    link: "/work/maison-luxe",
  },
  {
    id: "industrial-supply-direct",
    title: "Industrial Supply Direct",
    category: "Storefront",
    description:
      "A B2B store managing 50,000+ technical SKUs with instant spec sheet downloads, tiered volume pricing tables, and online quote requests.",
    tags: ["B2B Wholesale", "50k SKUs", "Quote Requests"],
    imagePlaceholder: "/portfolio/industrial-supply-direct/covers/cover.png",
    link: "/work/industrial-supply-direct",
  },
  {
    id: "360-alpha",
    title: "360 - Alpha",
    category: "Storefront",
    description:
      "A streetwear storefront featuring collection lookbook galleries, quick-add size selectors, and fast mobile checkout.",
    tags: ["Streetwear", "Lookbook Grid", "Quick Add"],
    imagePlaceholder: "/portfolio/360-alpha/covers/cover.png",
    link: "/portfolio",
  },
  {
    id: "scalefront-app",
    title: "Scalefront",
    category: "App",
    description:
      "A Shopify app that automatically recommends related products on product pages and inside drawer carts based on purchase history.",
    tags: ["Cross-Sell App", "Cart Recommendations", "Zero-Config"],
    imagePlaceholder: "/portfolio/scalefront-app/covers/cover.png",
    link: "#",
  },
  {
    id: "pairly-app",
    title: "Pairly",
    category: "App",
    description:
      "A Shopify app that lets merchants create buy-one-get-one deals, bundle discounts, and post-purchase checkout upsells in a few clicks.",
    tags: ["Bundle & Upsell", "Volume Discounts", "Native Checkout"],
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
