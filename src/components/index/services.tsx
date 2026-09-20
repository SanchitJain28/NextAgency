import Link from "next/link";

const SERVICES = [
  {
    no: "01",
    icon: "{ }",
    title: "Custom Shopify development",
    blurb:
      "We build custom Shopify themes, private apps, and API integrations that match how you actually manage products and fulfill orders.",
    tint: "var(--sf-primary-soft)",
    ink: "var(--sf-primary-deep)",
    delay: "0ms",
  },
  {
    no: "02",
    icon: "❖",
    title: "Theme customization",
    blurb:
      "Custom Liquid templates, drawer carts, and dynamic product sections built natively in Online Store 2.0 so you can edit content easily.",
    tint: "var(--sf-sage-soft)",
    ink: "var(--sf-sage-deep)",
    delay: "60ms",
  },
  {
    no: "03",
    icon: "A/B",
    title: "CRO optimization",
    blurb:
      "We review your analytics, identify where mobile shoppers drop off, and test checkout and cart changes to increase conversion rates.",
    tint: "var(--sf-gold-soft)",
    ink: "#8a6410",
    delay: "120ms",
  },
  {
    no: "04",
    icon: "◈",
    title: "Shopify app development",
    blurb:
      "Private apps and background scripts that connect Shopify to your warehouse, sync inventory, and automate manual order tasks.",
    tint: "var(--sf-berry-soft)",
    ink: "var(--sf-berry)",
    delay: "0ms",
  },
  {
    no: "05",
    icon: "⌘",
    title: "Headless Shopify",
    blurb:
      "Custom Next.js and Hydrogen frontends powered by Shopify's commerce backend for brands needing custom web apps or international stores.",
    tint: "var(--sf-primary-soft)",
    ink: "var(--sf-primary-deep)",
    delay: "60ms",
  },
  {
    no: "06",
    icon: "W",
    title: "Wordpress development",
    blurb:
      "Custom WordPress and WooCommerce themes built with clean PHP, minimal plugins, and fast page load times.",
    tint: "var(--sf-sage-soft)",
    ink: "var(--sf-sage-deep)",
    delay: "120ms",
  },
  {
    no: "07",
    icon: "⚡",
    title: "Headless WooCommerce",
    blurb:
      "Next.js frontends connected to WooCommerce via REST or GraphQL APIs for fast mobile speeds and custom interactive layouts.",
    tint: "var(--sf-gold-soft)",
    ink: "#8a6410",
    delay: "0ms",
  },
  {
    no: "08",
    icon: "⇗",
    title: "Store migration services",
    blurb:
      "Move products, customer history, order records, and SEO redirects from Magento, WooCommerce, or custom platforms to Shopify without losing rankings.",
    tint: "var(--sf-berry-soft)",
    ink: "var(--sf-berry)",
    delay: "60ms",
  },
  {
    no: "09",
    icon: "🛒",
    title: "E-commerce development",
    blurb:
      "End-to-end online store builds, custom payment gateway setups, and ERP inventory connections for growing online brands.",
    tint: "var(--sf-primary-soft)",
    ink: "var(--sf-primary-deep)",
    delay: "120ms",
  },
  {
    no: "10",
    icon: "M",
    title: "Medusa JS development",
    blurb:
      "Open-source headless commerce builds using Medusa.js and Next.js for brands that want full control over their code and database.",
    tint: "var(--sf-sage-soft)",
    ink: "var(--sf-sage-deep)",
    delay: "0ms",
  },
  {
    no: "11",
    icon: "P",
    title: "Prestashop development",
    blurb:
      "Custom themes and module development for self-hosted PrestaShop stores with multi-currency and multi-warehouse needs.",
    tint: "var(--sf-gold-soft)",
    ink: "#8a6410",
    delay: "60ms",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="max-w-[1200px] mx-auto px-7 pt-[60px] pb-7"
    >
      <div className="flex justify-between items-end gap-6 flex-wrap mb-7">
        <div className="max-w-[640px]">
          <div className="text-[13px] font-semibold tracking-[0.14em] uppercase text-[var(--sf-primary)] mb-[14px]">
            What we do
          </div>
          <h2
            className="m-0 leading-[1.02] tracking-[-0.03em]"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 4.4vw, 52px)",
              textWrap: "balance",
            }}
          >
            Everything your store needs, under one roof.
          </h2>
        </div>
        <Link
          href="/contact-us"
          className="font-semibold text-[var(--sf-ink)] border-b-2 border-[var(--sf-primary)] pb-[3px] whitespace-nowrap"
        >
          Discuss your project →
        </Link>
      </div>

      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 brutal-scrollbar scroll-pl-7 -mx-7 px-7 md:mx-0 md:px-0 md:scroll-pl-0">
        {SERVICES.map((svc) => (
          <article
            key={svc.no}
            className="bg-[var(--sf-paper-raised)] border-2 border-[var(--sf-ink)] p-5 pb-[22px] relative overflow-hidden transition-all duration-200 hover:-translate-y-[6px] hover:shadow-[var(--sf-shadow-lift)] w-[85vw] md:w-auto snap-start shrink-0"
          >
            <div className="flex justify-between items-start mb-5">
              <span
                className="w-[46px] h-[46px] inline-flex items-center justify-center text-[17px]"
                style={{
                  background: svc.tint,
                  color: svc.ink,
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 800,
                }}
              >
                {svc.icon}
              </span>
              <span
                className="text-[13px] text-[var(--sf-ink-mute)]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {svc.no}
              </span>
            </div>
            <h3
              className="m-0 mb-[9px] text-[21px] tracking-[-0.02em] leading-[1.15]"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
              }}
            >
              {svc.title}
            </h3>
            <p className="m-0 text-[15px] leading-[1.55] text-[var(--sf-ink-soft)]">
              {svc.blurb}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
