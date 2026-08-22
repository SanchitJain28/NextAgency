"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Layers,
  ShoppingBag,
  Cpu,
  Boxes,
  Activity,
  CheckCircle2,
  ExternalLink,
  SlidersHorizontal,
} from "lucide-react";

export type ProjectItem = {
  id: string;
  title: string;
  tagline: string;
  category: "Storefront" | "App";
  vertical: string;
  description: string;
  highlights: string[];
  tags: string[];
  image: string;
  link: string;
  hasCaseStudy: boolean;
  featured?: boolean;
};

const PROJECTS: ProjectItem[] = [
  {
    id: "recovrx",
    title: "RecovrX",
    tagline: "High-Ticket CRO & Athletic Recovery Storefront",
    category: "Storefront",
    vertical: "Athletic Recovery & High-AOV Hardware",
    description:
      "A high-ticket Shopify storefront engineered for athletic recovery tech ($300–$3,500). Features diagnostic 'Shop by Concern' pathways, clinical proof modules, native Liquid 4-item bundle cross-sells, and a gamified 3-tier milestone drawer cart.",
    highlights: [
      "Native 4-Item 'Buy It With' Bundle Matrix",
      "Gamified 3-Tier Spend Milestone Drawer Cart ($500 / $1,000 / $2,000)",
      "Zero 3rd-Party Script Bloat & 0.4s TTFB",
    ],
    tags: ["High-Ticket CRO", "Dark Mode", "Liquid 2.0 Bundles", "Milestone Cart"],
    image: "/portfolio/recovrx/covers/cover.png",
    link: "/work/recovrx",
    hasCaseStudy: true,
    featured: true,
  },
  {
    id: "iron-crate",
    title: "Iron Crate",
    tagline: "Custom Sports Nutrition & Multi-SKU Stack Builder",
    category: "Storefront",
    vertical: "Sports Supplement & High-Volume Nutrition",
    description:
      "Custom Shopify theme development for sports nutrition. Built with bespoke 3-tier bundle stack builders, clinical dosage accordion PDPs, ingredient transparency grids, and a high-speed drawer cart with real-time tier progression.",
    highlights: [
      "Interactive 3-Tier Goal Stack Builder",
      "Clinical Dosage PDPs & Supplement Fact Modals",
      "Multi-SKU Atomic Checkout Payloads",
    ],
    tags: ["Sports Nutrition", "Bundle Builder", "High-Speed Cart", "Tiered Rewards"],
    image: "/portfolio/iron-crate/covers/cover.png",
    link: "/work/iron-crate",
    hasCaseStudy: true,
    featured: true,
  },
  {
    id: "industrial-supply-direct",
    title: "Industrial Supply Direct",
    tagline: "High-Volume B2B Procurement & 50,000 SKU Catalog",
    category: "Storefront",
    vertical: "Industrial Manufacturing & B2B Procurement",
    description:
      "Specialized B2B eCommerce platform designed for engineers and procurement managers. Transforms a complex 50,000+ SKU catalog into a frictionless wholesale buying experience with tiered volume pricing and multi-SKU purchase orders.",
    highlights: [
      "Tiered Volume Pricing Matrices with Dynamic Quantity Breaks",
      "1-Click Multi-SKU Quick-Order Table",
      "Technical Spec Data-Sheets & Compliance Downloads",
    ],
    tags: ["B2B Wholesale", "50k SKU Catalog", "Volume Pricing", "Quick Order Matrix"],
    image: "/portfolio/industrial-supply-direct/covers/cover.png",
    link: "/work/industrial-supply-direct",
    hasCaseStudy: true,
    featured: true,
  },
  {
    id: "flexform-athletics",
    title: "FlexForm Athletics",
    tagline: "Women's Activewear & Fit Assurance Storefront",
    category: "Storefront",
    vertical: "Women's Activewear & Performance Athleisure",
    description:
      "A minimalist, editorial Shopify storefront engineered to resolve activewear fit uncertainty. Features a 9-category visual story strip, 4-point fabric assurance badges, 1-click clipboard coupon clipping, visual fit size gauges, and an in-drawer upsell cart.",
    highlights: [
      "9-Story Visual Category Thumbnail Strip",
      "Interactive 'Offers For You' 1-Click Coupon Drawer",
      "Visual Fit Size Gauge & 4 Apparel Guarantees",
    ],
    tags: ["Women's Activewear", "Fit Size Gauge", "1-Click Coupons", "Drawer Upsells"],
    image: "/portfolio/flexform-athletics/covers/cover.png",
    link: "/work/flexform-athletics",
    hasCaseStudy: true,
    featured: true,
  },
  {
    id: "maison-luxe",
    title: "Maison Luxe",
    tagline: "Scandinavian Home Decor & Stoneware Storefront",
    category: "Storefront",
    vertical: "Scandinavian Home Decor & Ceramics",
    description:
      "A clean, editorial Shopify theme built for handcrafted home goods and stoneware. Features a 4-tab category discovery matrix, color-blocked story blocks, in-line PDP cross-sells, and a 3-tier milestone drawer cart.",
    highlights: [
      "4-Tab Category Discovery Matrix",
      "In-PDP 1-Click Stoneware Cross-Sell Widget",
      "Gamified 3-Tier Spend Milestone Cart ($50 / $100 / $200)",
    ],
    tags: ["Home Decor", "Stoneware & Ceramics", "Liquid 2.0", "Milestone Cart"],
    image: "/portfolio/maison-luxe/covers/cover.png",
    link: "/work/maison-luxe",
    hasCaseStudy: true,
    featured: true,
  },
  {
    id: "360-alpha",
    title: "360 - Alpha",
    tagline: "Luxury Streetwear & High-Contrast Lookbook",
    category: "Storefront",
    vertical: "Premium Streetwear & Limited Apparel Drops",
    description:
      "A high-contrast streetwear storefront engineered for limited-drop hype cycles. Features full-screen lookbook carousels, instant size selection drawers, and friction-free mobile checkout optimization.",
    highlights: [
      "Limited Drop Countdown & Hype Banners",
      "Immersive Full-Screen Lookbook Mode",
      "Instant 1-Click Mobile Checkout Ergonomics",
    ],
    tags: ["Streetwear", "Limited Drops", "High Contrast", "Mobile First"],
    image: "/portfolio/360-alpha/covers/cover.png",
    link: "/portfolio",
    hasCaseStudy: false,
  },
  {
    id: "pairly-app",
    title: "Pairly App",
    tagline: "Shopify Bundle & Upsell Engine",
    category: "App",
    vertical: "Shopify App Ecosystem & Revenue Optimization",
    description:
      "A high-performance Shopify application built with Remix, TypeScript, and Prisma. Enables merchants to deploy 'Frequently Bought Together', volume tiered discounts, and slide-out cart add-ons with zero manual configuration.",
    highlights: [
      "Multi-Tier Bundle Engine with Dynamic Discounts",
      "Lightweight Vanilla JS Script Tag (<15KB)",
      "Automated Product Affinity Algorithm",
    ],
    tags: ["Shopify App", "Remix & Prisma", "Bundle Builder", "AOV Optimization"],
    image: "/portfolio/pairly-app/covers/cover.png",
    link: "/upsell-cross-sell-app-shopify",
    hasCaseStudy: true,
  },
  {
    id: "scalefront-app",
    title: "Scalefront AI Cross-Sell",
    tagline: "AI-Driven Real-Time Recommendation Engine",
    category: "App",
    vertical: "Automated Merchandising & Machine Learning",
    description:
      "An intelligent Shopify application engineered to automate catalog cross-selling. Uses real-time customer cart analysis and historical purchase vectors to suggest the highest-probability complementary add-ons without merchant rule management.",
    highlights: [
      "Real-Time Cart Vector Matching",
      "Zero-Config Automated Merchandising",
      "Seamless Native Storefront Widget Integration",
    ],
    tags: ["AI Cross-Sell", "Machine Learning", "Automated Merchandising", "Shopify API"],
    image: "/portfolio/scalefront-app/covers/cover.png",
    link: "/portfolio",
    hasCaseStudy: false,
  },
];

type FilterType = "all" | "storefront" | "app" | "b2b" | "cro";

export function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "storefront") return project.category === "Storefront";
    if (activeFilter === "app") return project.category === "App";
    if (activeFilter === "b2b") return project.tags.some((t) => t.toLowerCase().includes("b2b"));
    if (activeFilter === "cro") return project.tags.some((t) => t.toLowerCase().includes("cro") || t.toLowerCase().includes("bundle"));
    return true;
  });

  return (
    <div className="space-y-10">
      {/* FILTER BAR */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[4px_4px_0_var(--sf-ink)]">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-[var(--sf-ink)]">
          <SlidersHorizontal className="w-4 h-4 text-[var(--sf-primary)]" />
          <span>FILTER PROJECTS:</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-3.5 py-1.5 font-mono text-xs font-bold border-2 border-[var(--sf-ink)] transition-all ${
              activeFilter === "all"
                ? "bg-[var(--sf-ink)] text-white shadow-[2px_2px_0_var(--sf-primary)]"
                : "bg-[var(--sf-paper)] text-[var(--sf-ink)] hover:bg-white"
            }`}
          >
            All Work ({PROJECTS.length})
          </button>

          <button
            onClick={() => setActiveFilter("storefront")}
            className={`px-3.5 py-1.5 font-mono text-xs font-bold border-2 border-[var(--sf-ink)] transition-all ${
              activeFilter === "storefront"
                ? "bg-[var(--sf-ink)] text-white shadow-[2px_2px_0_var(--sf-primary)]"
                : "bg-[var(--sf-paper)] text-[var(--sf-ink)] hover:bg-white"
            }`}
          >
            Storefronts (6)
          </button>

          <button
            onClick={() => setActiveFilter("app")}
            className={`px-3.5 py-1.5 font-mono text-xs font-bold border-2 border-[var(--sf-ink)] transition-all ${
              activeFilter === "app"
                ? "bg-[var(--sf-ink)] text-white shadow-[2px_2px_0_var(--sf-primary)]"
                : "bg-[var(--sf-paper)] text-[var(--sf-ink)] hover:bg-white"
            }`}
          >
            Shopify Apps (2)
          </button>

          <button
            onClick={() => setActiveFilter("cro")}
            className={`px-3.5 py-1.5 font-mono text-xs font-bold border-2 border-[var(--sf-ink)] transition-all ${
              activeFilter === "cro"
                ? "bg-[var(--sf-ink)] text-white shadow-[2px_2px_0_var(--sf-primary)]"
                : "bg-[var(--sf-paper)] text-[var(--sf-ink)] hover:bg-white"
            }`}
          >
            CRO &amp; Bundles (4)
          </button>

          <button
            onClick={() => setActiveFilter("b2b")}
            className={`px-3.5 py-1.5 font-mono text-xs font-bold border-2 border-[var(--sf-ink)] transition-all ${
              activeFilter === "b2b"
                ? "bg-[var(--sf-ink)] text-white shadow-[2px_2px_0_var(--sf-primary)]"
                : "bg-[var(--sf-paper)] text-[var(--sf-ink)] hover:bg-white"
            }`}
          >
            B2B &amp; Wholesale (1)
          </button>
        </div>
      </div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {filteredProjects.map((project, index) => (
          <article
            key={project.id}
            className="group flex flex-col border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] shadow-[6px_6px_0_var(--sf-ink)] hover:shadow-[9px_9px_0_var(--sf-ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 overflow-hidden"
          >
            {/* PROJECT IMAGE PREVIEW */}
            <div className="relative aspect-[16/9] border-b-2 border-[var(--sf-ink)] overflow-hidden bg-neutral-900">
              <Image
                src={project.image}
                alt={`${project.title} - ${project.tagline}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* BADGES STRIP */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 bg-[var(--sf-ink)] text-white text-[11px] font-mono font-bold tracking-wider uppercase border border-white/20 shadow-[2px_2px_0_var(--sf-primary)]">
                  {project.category}
                </span>

                {project.hasCaseStudy ? (
                  <span className="px-2.5 py-1 bg-[var(--sf-primary)] text-white text-[10px] font-mono font-bold tracking-wider uppercase border border-[var(--sf-ink)] shadow-[2px_2px_0_var(--sf-ink)]">
                    ★ In-Depth Case Study
                  </span>
                ) : (
                  <span className="px-2.5 py-1 bg-black/80 text-neutral-200 text-[10px] font-mono font-bold tracking-wider uppercase border border-white/20 backdrop-blur-sm">
                    Featured Build
                  </span>
                )}
              </div>
            </div>

            {/* CONTENT AREA */}
            <div className="p-6 sm:p-8 flex flex-col flex-1">
              <div className="flex items-center justify-between gap-2 mb-2 font-mono text-xs text-[var(--sf-primary)] font-bold">
                <span>0{index + 1} • {project.vertical.toUpperCase()}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[var(--sf-ink)] tracking-tight mb-2 group-hover:text-[var(--sf-primary)] transition-colors">
                {project.title}
              </h2>

              <div className="font-mono text-xs font-semibold text-[var(--sf-ink-mute)] mb-4">
                {project.tagline}
              </div>

              <p className="text-sm sm:text-base font-sans text-[var(--sf-ink-soft)] leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              {/* ARCHITECTURE HIGHLIGHTS */}
              <div className="mb-6 p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] shadow-[3px_3px_0_var(--sf-ink)] space-y-2">
                <div className="font-mono text-[11px] font-bold text-[var(--sf-ink)] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--sf-primary)]" />
                  Key Architecture Decisions
                </div>
                {project.highlights.map((highlight, hIdx) => (
                  <div
                    key={hIdx}
                    className="flex items-start gap-2 text-xs font-sans text-[var(--sf-ink-soft)]"
                  >
                    <span className="text-[var(--sf-primary)] font-bold">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono font-bold text-[var(--sf-ink-mute)] bg-[var(--sf-paper)] border border-[var(--sf-ink)] px-2 py-0.5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* ACTION LINK */}
              <div className="mt-auto pt-4 border-t-2 border-[var(--sf-ink)]/15 flex items-center justify-between">
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--sf-ink)] group-hover:text-[var(--sf-primary)] transition-colors"
                >
                  {project.hasCaseStudy ? "Read Architectural Case Study" : "View Project Details"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <span className="font-mono text-[11px] text-[var(--sf-ink-mute)] font-bold">
                  {project.category === "Storefront" ? "LIQUID 2.0" : "REMIX / REACT"}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
