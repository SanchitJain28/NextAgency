import type { ReactNode } from "react";
import {
  AuditIcon,
  BackendApiIcon,
  CROIcon,
  CustomAppsIcon,
  HeadlessCommerceIcon,
  IntegrationsIcon,
  PerformanceIcon,
  ShopifyPlusIcon,
  ThemeDevelopmentIcon,
} from "../icons";

export interface Service {
  href: string;
  title: string;
  desc: string;
  icon: ReactNode;
}

export interface Stat {
  number: string;
  label: string;
}

export interface WhyUsItem {
  num: string;
  title: string;
  desc: string;
}

export interface CaseStudy {
  metric: string;
  label: string;
  title: string;
  desc: string;
}

export interface Testimonial {
  initials: string;
  name: string;
  role: string;
  quote: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export const SERVICES: Service[] = [
  {
    href: "/services/theme-development",
    title: "Custom Theme Development",
    desc: "Pixel-perfect Shopify themes built with modern tooling — no page builders, no compromises on performance.",
    icon: <ThemeDevelopmentIcon />,
  },
  {
    href: "/services/headless-commerce",
    title: "Headless Commerce",
    desc: "Hydrogen + Next.js storefronts with sub-second load times, full design freedom, and Shopify's commerce backbone.",
    icon: <HeadlessCommerceIcon />,
  },
  {
    href: "/services/custom-shopify-apps",
    title: "Custom Shopify App Development",
    desc: "Private and public Shopify apps engineered to extend your store's functionality beyond what off-the-shelf offers.",
    icon: <CustomAppsIcon />,
  },
  {
    href: "/services/performance-optimization",
    title: "Performance Optimization",
    desc: "Core Web Vitals audits, speed engineering, and Lighthouse score improvements that directly lift conversion rates.",
    icon: <PerformanceIcon />,
  },
  {
    href: "/services/shopify-migration-services",
    title: "Shopify Store Migration",
    desc: "Replatform to Shopify from WooCommerce, Magento, or WordPress. Zero order downtime, full data fidelity, and SEO preserved.",
    icon: <ShopifyPlusIcon />,
  },
  {
    href: "/services/shopify-plus-migration",
    title: "Shopify Plus Migration",
    desc: "Seamless replatforming from Magento, WooCommerce, or legacy setups — zero data loss, zero downtime guaranteed.",
    icon: <ShopifyPlusIcon />,
  },
  {
    href: "/services/cro-optimization",
    title: "CRO & A/B Testing",
    desc: "Data-driven conversion rate optimization with rigorous experimentation frameworks and checkout funnel analysis.",
    icon: <CROIcon />,
  },
  {
    href: "/services/backend-api",
    title: "Backend & API Development",
    desc: "Custom Node.js backends, GraphQL APIs, ERP/CRM integrations, and Shopify Admin + Storefront API development.",
    icon: <BackendApiIcon />,
  },
  {
    href: "/services/integrations",
    title: "Third-Party Integrations",
    desc: "Klaviyo, Recharge, NetSuite, SAP, and 50+ platform integrations built to spec with zero workflow disruption.",
    icon: <IntegrationsIcon />,
  },
  {
    href: "/services/audit-consulting",
    title: "Store Audit & Consulting",
    desc: "Deep technical and UX audits of your Shopify store with a prioritized action plan to improve speed and revenue.",
    icon: <AuditIcon />,
  },
];

export const STATS: Stat[] = [
  { number: "60+", label: "Shopify stores launched" },
  { number: "98%", label: "Client retention rate" },
  { number: "4.9★", label: "Average client rating" },
  { number: "14 days", label: "Average first delivery" },
];

export const WHY_US: WhyUsItem[] = [
  {
    num: "1",
    title: "Shopify-only focus",
    desc: "We don't split attention across platforms. Every engineer lives and breathes Shopify — Liquid, Hydrogen, Storefront API, and the full ecosystem.",
  },
  {
    num: "2",
    title: "Revenue-first engineering",
    desc: "Every technical decision ties back to conversion rate and AOV. We optimize for your revenue, not for our portfolio.",
  },
  {
    num: "3",
    title: "Senior engineers, no juniors",
    desc: "Your store is built by engineers who've shipped at scale — not handed off to someone learning the platform on your dime.",
  },
  {
    num: "4",
    title: "Transparent, async-first",
    desc: "Slack channels, Notion project boards, weekly Loom updates. No black boxes, no unnecessary status-meeting theater.",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    metric: "+340%",
    label: "Revenue increase",
    title: "Luminæ Skincare",
    desc: "Full replatform from WooCommerce to Shopify Plus with a custom Hydrogen storefront. Page load time cut from 4.2s to 0.8s — driving the revenue uplift.",
  },
  {
    metric: "22%",
    label: "CVR uplift",
    title: "Vertex Nutrition",
    desc: "Subscription-first rebuild with Recharge integration and a custom quiz-to-product funnel. AOV rose 18% alongside the conversion rate gain.",
  },
  {
    metric: "5 markets",
    label: "International launch",
    title: "Field & Forge",
    desc: "Shopify Markets rollout across EU + APAC with localized storefronts, multi-currency checkout, and regional payment methods — in 90 days.",
  },
];

export const TECH_STACK: string[] = [
  "Shopify Plus",
  "Hydrogen",
  "Next.js",
  "React",
  "TypeScript",
  "Liquid",
  "Storefront API",
  "Remix",
  "Tailwind CSS",
  "GraphQL",
];

export const TESTIMONIALS: Testimonial[] = [
  {
    initials: "MC",
    name: "Marcus Chen",
    role: "CEO, Luminæ Skincare",
    quote:
      "ScaleFront rebuilt our entire storefront in six weeks. Our conversion rate has never been higher, and the team actually understands eCommerce — not just code.",
  },
  {
    initials: "SK",
    name: "Sarah Kwan",
    role: "CTO, Vertex Nutrition",
    quote:
      "The migration was seamless — we didn't lose a single order or subscription. They handled our complex Recharge logic flawlessly. Best agency partnership we've ever had.",
  },
  {
    initials: "DR",
    name: "David Rivera",
    role: "Head of Digital, Field & Forge",
    quote:
      "We launched five international Shopify Markets storefronts in three months. ScaleFront's expertise saved us at least six months of trial and error.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: "01",
    title: "Discovery & Audit",
    desc: "Technical audit of your current stack, UX review, and a detailed scope document with timelines and delivery milestones.",
  },
  {
    num: "02",
    title: "Design & Architecture",
    desc: "Storefront architecture, component system design, and pixel-perfect Figma-to-code implementation planning.",
  },
  {
    num: "03",
    title: "Build & Integrate",
    desc: "Sprint-based development with weekly demos, staging previews, and continuous integration — no surprises.",
  },
  {
    num: "04",
    title: "Launch & Optimize",
    desc: "Zero-downtime launch, post-launch monitoring, and a 30-day optimization window included with every project.",
  },
];

export const FAQS: FAQ[] = [
  {
    q: "How long does Shopify development take?",
    a: "Most projects ship in 4–8 weeks depending on scope. A theme refresh takes 2–3 weeks; a full headless rebuild typically takes 6–10 weeks. We give you a precise timeline after the discovery audit.",
  },
  {
    q: "How much does custom Shopify development cost in India?",
    a: "Shopify development cost varies by scope. Theme customizations start around $2,000–$5,000. Custom app development ranges from $5,000–$30,000. Full headless builds for Shopify Plus brands typically run $20,000–$80,000. Every engagement starts with a fixed-price discovery sprint.",
  },
  {
    q: "Can you migrate my WooCommerce store to Shopify?",
    a: "Yes — WooCommerce to Shopify migration is one of our most common engagements. We handle product data, customer records, order history, SEO redirects, and subscription logic with zero data loss.",
  },
  {
    q: "What is headless Shopify commerce?",
    a: "Headless Shopify uses Shopify as the commerce backend (cart, checkout, inventory) while a custom frontend — built in Next.js or Hydrogen — delivers the storefront. This gives brands full design freedom and sub-second page loads.",
  },
  {
    q: "Do you work with Shopify Plus merchants?",
    a: "Yes. We're Shopify Plus partners and specialize in Plus-exclusive features: checkout extensibility, Shopify Functions, B2B, multi-currency Markets, and advanced automation flows.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Every build includes a 30-day optimization window. After that, we offer monthly retainer packages with guaranteed response times, proactive monitoring, and sprint-based iteration.",
  },
];

export const FOOTER_SERVICES = [
  { href: "/services/headless-commerce", label: "Headless Commerce" },
  { href: "/services/custom-shopify-apps", label: "Custom Shopify Apps" },
  { href: "/services/theme-development", label: "Theme Development" },
  { href: "/services/backend-api", label: "Backend & API" },
  {
    href: "/services/cro-optimization",
    label: "Conversion Optimization",
  },
  {
    href: "/services/performance-optimization",
    label: "Performance Optimization",
  },
  { href: "/services/shopify-migration-services", label: "Shopify Store Migration" },
  { href: "/services/shopify-plus-migration", label: "Shopify Plus Migration" },
  { href: "/services/integrations", label: "Third-Party Integrations" },
  { href: "/services/audit-consulting", label: "Store Audit & Consulting" },
  { href: "/services/mobile-apps", label: "Mobile Apps" },
  { href: "/services/custom-features", label: "Custom Features" },
];

export const FOOTER_COMPANY = [
  { href: "/about-us", label: "About Us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
];

export const FOOTER_PRODUCTS = [
  {
    href: "/upsell-cross-sell-app-shopify",
    label: "AI Upsell & Cross-sell App",
  },
  { href: "/earn", label: "Store Auditor Tool" },
  { href: "/ecommerce", label: "Ecommerce Solutions" },
];

export const FOOTER_RESOURCES = [
  { href: "/blog", label: "All Articles" },
  { href: "/blog/reducing-cart-abandonment", label: "Reduce Cart Abandonment" },
  { href: "/blog/increase-aov-shopify", label: "Increase Shopify AOV" },
  {
    href: "/blog/ai-vs-traditional-product-recommendations-shopify",
    label: "AI Product Recommendations",
  },
];

export const HEADER_SERVICES = [
  {
    href: "/services/headless-commerce",
    label: "Headless Commerce",
    desc: "Next.js & Hydrogen storefronts",
  },
  {
    href: "/services/custom-shopify-apps",
    label: "Custom Shopify Apps",
    desc: "Private & public app development",
  },
  {
    href: "/services/theme-development",
    label: "Theme Development",
    desc: "Pixel-perfect Shopify themes",
  },
  {
    href: "/services/backend-api",
    label: "Backend & API",
    desc: "Node.js, GraphQL, Storefront API",
  },
  {
    href: "/services/cro-optimization",
    label: "Conversion Optimization",
    desc: "CRO, A/B testing, funnel audits",
  },
  {
    href: "/services/custom-features",
    label: "Custom Features",
    desc: "Bespoke Liquid & app extensions",
  },
  {
    href: "/services/performance-optimization",
    label: "Performance Optimization",
    desc: "Core Web Vitals & speed tuning",
  },
  {
    href: "/services/mobile-apps",
    label: "Mobile Apps",
    desc: "React Native Shopify mobile apps",
  },
  {
    href: "/services/shopify-plus-migration",
    label: "Shopify Plus Migration",
    desc: "Zero-downtime replatforming",
  },
  {
    href: "/services/integrations",
    label: "Third-Party Integrations",
    desc: "ERP, CRM, Klaviyo, Recharge...",
  },
  {
    href: "/services/audit-consulting",
    label: "Store Audit & Consulting",
    desc: "Technical & UX store reviews",
  },
];

export const HEADER_SHOPIFY_APPS = [
  {
    href: "/upsell-cross-sell-app-shopify",
    label: "AI Upsell & Cross-sell",
    desc: "Smart product recommendations",
  },
];

export const HEADER_TOOLS = [
  {
    href: "/earn",
    label: "Store Auditor",
    desc: "Free Shopify store health check",
  },
];

export const HEADER_NAV_LINKS = [
  { href: "/about-us", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact" },
];
