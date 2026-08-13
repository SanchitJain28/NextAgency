import Link from "next/link";

const PRICING = [
  {
    name: "Starter",
    tagline: "Perfect for emerging brands needing a professional launch.",
    price: "₹25,000",
    unit: "1-2 weeks",
    featured: false,
    cta: "Start here",
    features: [
      "Up to 4 core pages (Home, Product, Collection, About)",
      "Standard eCommerce functionality",
      "Premium template setup & configuration",
      "Basic CRO optimization",
      "1 week post-launch support",
      "3 revisions free",
      "Content upload",
      "Number of products: 10",
      "Social media icons",
      "Payment integration",
    ],
    bg: "var(--sf-paper-raised)",
    ink: "var(--sf-ink)",
    mute: "var(--sf-ink-mute)",
    feat: "var(--sf-ink-soft)",
    border: "var(--sf-line)",
    shadow: "var(--sf-shadow-sm)",
    check: "var(--sf-sage-soft)",
    checkink: "var(--sf-sage-deep)",
    cta_bg: "var(--sf-ink)",
    cta_ink: "#fff",
  },
  {
    name: "Growth",
    tagline: "Pixel-perfect custom design for scaling DTC brands.",
    price: "₹50,000",
    unit: "2-3 weeks",
    featured: true,
    cta: "Book Growth",
    features: [
      "Custom Figma-to-Shopify conversion",
      "Fully bespoke frontend design",
      "Advanced UI/UX animations",
      "Speed & Core Web Vitals optimization",
      "1 month post-launch support",
      "5 revisions free",
      "Payment gateway integration",
      "Content upload",
      "Number of products: 25",
      "Speed optimization",
      "Hosting setup and domain connect",
      "Social media icons",
      "Shopify app configuration",
    ],
    bg: "var(--sf-ink)",
    ink: "#fff",
    mute: "rgba(255,255,255,.66)",
    feat: "rgba(255,255,255,.86)",
    border: "var(--sf-ink)",
    shadow: "var(--sf-shadow-lg)",
    check: "rgba(224,162,51,.2)",
    checkink: "var(--sf-gold)",
    cta_bg: "var(--sf-gold)",
    cta_ink: "var(--sf-ink)",
  },
  {
    name: "Scale",
    tagline:
      "Complex functionality and deep customization for power merchants.",
    price: "₹75,000",
    unit: "3-4 weeks",
    featured: false,
    cta: "Talk to us",
    features: [
      "Everything in Growth, plus:",
      "Complex custom functionality (Subscriptions, Bundles, etc.)",
      "Advanced API & ERP integrations",
      "Custom Shopify App development if required",
      "3 months dedicated website support",
      "10 revisions free",
      "Payment gateway integration",
      "Content upload",
      "Number of products: 50",
      "Speed optimization",
      "Hosting setup and domain connect",
      "Social media icons",
      "Shopify app configuration",
    ],
    bg: "var(--sf-paper-raised)",
    ink: "var(--sf-ink)",
    mute: "var(--sf-ink-mute)",
    feat: "var(--sf-ink-soft)",
    border: "var(--sf-line)",
    shadow: "var(--sf-shadow-sm)",
    check: "var(--sf-sage-soft)",
    checkink: "var(--sf-sage-deep)",
    cta_bg: "var(--sf-ink)",
    cta_ink: "#fff",
  },
  {
    name: "Enterprise",
    tagline: "Blazing fast Headless commerce architectures.",
    price: "₹1,00,000+",
    unit: "4-6+ weeks",
    featured: false,
    cta: "Talk to us",
    features: [
      "Headless architecture (Next.js or Medusa.js)",
      "Sub-second page load times",
      "Limitless URL structures & flexibility",
      "Advanced Data Migration (zero downtime)",
      "3 months enterprise SLA support",
      "Unlimited revisions",
      "Payment gateway integration",
      "Content upload",
      "Number of products: 100+",
      "Speed optimization",
      "Hosting setup and domain connect",
      "Social media icons",
      "Shopify app configuration",
    ],
    bg: "var(--sf-paper-raised)",
    ink: "var(--sf-ink)",
    mute: "var(--sf-ink-mute)",
    feat: "var(--sf-ink-soft)",
    border: "var(--sf-line)",
    shadow: "var(--sf-shadow-sm)",
    check: "var(--sf-sage-soft)",
    checkink: "var(--sf-sage-deep)",
    cta_bg: "var(--sf-ink)",
    cta_ink: "#fff",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="max-w-[1200px] mx-auto px-7 py-[60px]">
      <div className="text-center max-w-[640px] mx-auto mb-8">
        <div className="text-[13px] font-semibold tracking-[0.14em] uppercase text-[var(--sf-primary)] mb-[14px]">
          Engagements
        </div>
        <h2
          className="m-0 mb-3 leading-[1.02] tracking-[-0.03em] text-[var(--sf-ink)]"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(32px, 4.4vw, 52px)",
          }}
        >
          Ways to work together.
        </h2>
        <p className="m-0 text-[17px] text-[var(--sf-ink-soft)] leading-[1.6]">
          Fixed-scope or embedded — every engagement starts with a free store
          audit.
        </p>
      </div>

      <div className="flex md:grid md:grid-cols-2 gap-5 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 brutal-scrollbar scroll-pl-7 -mx-7 px-7 md:mx-0 md:px-0 md:scroll-pl-0">
        {PRICING.map((p, i) => (
          <article
            key={i}
            className="flex flex-col relative min-w-[280px] snap-start"
            style={{
              background: p.bg,
              color: p.ink,
              border: `2px solid ${p.border}`,
              padding: "24px 22px",
              boxShadow: p.shadow,
            }}
          >
            {p.featured && (
              <span className="absolute top-[22px] right-[22px] bg-[var(--sf-gold)] text-[var(--sf-ink)] text-[12px] font-bold tracking-[0.03em] px-3 py-1.5 uppercase">
                Most picked
              </span>
            )}

            <div
              className="text-[22px] tracking-[-0.02em]"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
              }}
            >
              {p.name}
            </div>
            <div
              className="text-[14.5px] mt-1.5 leading-[1.5]"
              style={{ color: p.mute }}
            >
              {p.tagline}
            </div>

            <div className="flex items-baseline gap-1.5 my-6 mb-1">
              <span className="text-[15px]" style={{ color: p.mute }}>
                from
              </span>
              <span
                className="text-[44px] tracking-[-0.04em]"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                }}
              >
                {p.price}
              </span>
            </div>
            <div className="text-[13.5px] mb-6" style={{ color: p.mute }}>
              {p.unit}
            </div>

            <ul className="list-none m-0 mb-7 p-0 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-3">
              {p.features.map((f, fi) => (
                <li
                  key={fi}
                  className="flex gap-3 items-start text-[15px] leading-[1.4]"
                  style={{ color: p.feat }}
                >
                  <span
                    className="flex-none w-5 h-5 inline-flex items-center justify-center text-[12px] font-extrabold mt-px"
                    style={{ background: p.check, color: p.checkink }}
                  >
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className="mt-auto text-center font-semibold text-[15.5px] leading-none p-3.5 border-2 border-[var(--sf-ink)] transition-all duration-100 shadow-[4px_4px_0_var(--sf-ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--sf-ink)]"
              style={{
                background: p.cta_bg,
                color: p.cta_ink,
              }}
            >
              {p.cta}
            </Link>
          </article>
        ))}
      </div>

      {/* Add-ons */}
      <div
        className="mt-16 max-w-[800px] mx-auto border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] p-6 md:p-8"
        style={{ boxShadow: "8px 8px 0 var(--sf-ink)" }}
      >
        <h3
          className="m-0 mb-2 font-bold text-[22px] tracking-tight text-[var(--sf-ink)]"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Transparent Add-ons (A La Carte)
        </h3>
        <p className="m-0 mb-6 text-[15px] text-[var(--sf-ink-soft)] leading-snug">
          Need a little extra? Add these to any plan.
        </p>

        <div className="flex flex-col gap-3">
          {[
            { label: "10 Extra Product Uploads", price: "+ ₹1,000", time: "" },
            {
              label: "Extra Page Design & Setup",
              price: "+ ₹5,000",
              time: "Adds 2 days",
            },
            {
              label: "Extra Revision Round",
              price: "+ ₹2,000",
              time: "Adds 2 days",
            },
            {
              label: "Speed Optimization (For Starter Plan)",
              price: "+ ₹1,0000",
              time: "Adds 4 days",
            },
            {
              label: "Hosting Setup & Domain Connect (For Starter Plan)",
              price: "+ ₹10,000",
              time: "Adds 2 days",
            },
          ].map((addon, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-[var(--sf-line)] last:border-0 gap-2"
            >
              <span className="font-semibold text-[15.5px] text-[var(--sf-ink)]">
                {addon.label}
              </span>
              <div className="flex items-center gap-4 text-[14px]">
                {addon.time && (
                  <span className="text-[var(--sf-ink-mute)] font-medium bg-[var(--sf-paper-raised)] px-2 py-1">
                    {addon.time}
                  </span>
                )}
                <span className="font-bold text-[var(--sf-primary)] min-w-[70px] text-right">
                  {addon.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
