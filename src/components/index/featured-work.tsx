import Link from "next/link";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  category: "Storefront" | "App";
  description: string;
  tags: string[];
  imagePlaceholder: string;
  link: string;
};

// 10 Placeholder projects (8 Storefronts, 2 Apps) as requested
const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Storefront Alpha",
    category: "Storefront",
    description: "A high-performance custom Liquid theme engineered for sub-second load times.",
    tags: ["Custom Theme", "CRO", "Speed Optimization"],
    imagePlaceholder: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop",
    link: "/portfolio",
  },
  {
    id: "project-2",
    title: "Storefront Beta",
    category: "Storefront",
    description: "Complete redesign and custom architecture replacing slow third-party apps.",
    tags: ["Redesign", "Liquid", "Metaobjects"],
    imagePlaceholder: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
    link: "/portfolio",
  },
  {
    id: "project-3",
    title: "UpsellPro App",
    category: "App",
    description: "A native Shopify public app enabling complex in-cart upselling without theme conflicts.",
    tags: ["Public App", "Remix", "Prisma"],
    imagePlaceholder: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "project-4",
    title: "Storefront Gamma",
    category: "Storefront",
    description: "Headless commerce migration using Next.js and Shopify Storefront API.",
    tags: ["Headless", "Next.js", "API"],
    imagePlaceholder: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    link: "/portfolio",
  },
  {
    id: "project-5",
    title: "Storefront Delta",
    category: "Storefront",
    description: "Custom checkout extensions and specialized B2B wholesale portal.",
    tags: ["B2B", "Checkout Ext", "Custom"],
    imagePlaceholder: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop",
    link: "/portfolio",
  },
  {
    id: "project-6",
    title: "Storefront Epsilon",
    category: "Storefront",
    description: "Subscription-first DTC brand with highly customized customer portal.",
    tags: ["Subscriptions", "Liquid API", "UI/UX"],
    imagePlaceholder: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=800&auto=format&fit=crop",
    link: "/portfolio",
  },
  {
    id: "project-7",
    title: "Storefront Zeta",
    category: "Storefront",
    description: "Internationalization strategy with multi-currency and localized storefronts.",
    tags: ["Shopify Plus", "Markets", "I18n"],
    imagePlaceholder: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop",
    link: "/portfolio",
  },
  {
    id: "project-8",
    title: "BundleBuilder App",
    category: "App",
    description: "Private custom app to handle complex mixed-pallet shipping and bundling logic.",
    tags: ["Private App", "Node.js", "Backend"],
    imagePlaceholder: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "project-9",
    title: "Storefront Eta",
    category: "Storefront",
    description: "Bespoke animations, 3D product viewer, and advanced media integration.",
    tags: ["3D Models", "WebGL", "Custom Theme"],
    imagePlaceholder: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop",
    link: "/portfolio",
  },
  {
    id: "project-10",
    title: "Storefront Theta",
    category: "Storefront",
    description: "Migration from Magento to Shopify Plus with full data integrity.",
    tags: ["Migration", "Data", "Shopify Plus"],
    imagePlaceholder: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
    link: "/portfolio",
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="max-w-[1200px] mx-auto px-7 py-16 lg:py-24">
      {/* Section Header */}
      <div className="mb-12 md:mb-16">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {PROJECTS.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            className="group flex flex-col bg-[var(--sf-paper-raised)] border-2 border-[var(--sf-ink)] overflow-hidden transition-all duration-200 hover:-translate-y-1 shadow-[6px_6px_0_var(--sf-ink)] hover:shadow-[10px_10px_0_var(--sf-ink)]"
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
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <h3
                className="text-[24px] tracking-[-0.02em] text-[var(--sf-ink)] mb-3"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 800,
                }}
              >
                {project.title}
              </h3>
              
              <p className="text-[16px] text-[var(--sf-ink-soft)] font-medium leading-[1.4] mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[12px] font-semibold text-[var(--sf-ink-mute)] bg-[var(--sf-paper)] border-2 border-[var(--sf-ink)] px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
