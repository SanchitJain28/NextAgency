import Link from "next/link";

const SERVICES = [
  {
    no: "01",
    icon: "{ }",
    title: "Custom Shopify development",
    blurb:
      "As a leading Shopify development company, we build bespoke, scalable commerce solutions tailored to your unique operational workflow and business logic.",
    tint: "var(--sf-primary-soft)",
    ink: "var(--sf-primary-deep)",
    delay: "0ms",
  },
  {
    no: "02",
    icon: "❖",
    title: "Theme customization",
    blurb:
      "Expert Shopify theme development and customization. We engineer pixel-obsessed frontend experiences that drive conversions, rather than just tweaking templates.",
    tint: "var(--sf-sage-soft)",
    ink: "var(--sf-sage-deep)",
    delay: "60ms",
  },
  {
    no: "03",
    icon: "A/B",
    title: "CRO optimization",
    blurb:
      "Stop guessing. We run research-led eCommerce conversion rate optimization and A/B tests on the pages that move revenue, delivering statistically honest results.",
    tint: "var(--sf-gold-soft)",
    ink: "#8a6410",
    delay: "120ms",
  },
  {
    no: "04",
    icon: "◈",
    title: "Shopify app development",
    blurb:
      "We build custom, private applications and embedded tools that bend the Shopify ecosystem to your exact operational workflow.",
    tint: "var(--sf-berry-soft)",
    ink: "var(--sf-berry)",
    delay: "0ms",
  },
  {
    no: "05",
    icon: "⌘",
    title: "Headless Shopify",
    blurb:
      "Hire a Shopify expert to decouple your frontend. We use Next.js, Hydrogen, and composable stacks for storefronts that load instantly and scale infinitely.",
    tint: "var(--sf-primary-soft)",
    ink: "var(--sf-primary-deep)",
    delay: "60ms",
  },
  {
    no: "06",
    icon: "W",
    title: "Wordpress development",
    blurb:
      "Robust, high-performance WordPress development services. We build custom themes and plugins engineered for speed, security, and complex content management.",
    tint: "var(--sf-sage-soft)",
    ink: "var(--sf-sage-deep)",
    delay: "120ms",
  },
  {
    no: "07",
    icon: "⚡",
    title: "Headless WooCommerce",
    blurb:
      "Modernize your tech stack. We pair the flexibility of WooCommerce backends with blazing-fast Next.js frontends for ultimate eCommerce performance.",
    tint: "var(--sf-gold-soft)",
    ink: "#8a6410",
    delay: "0ms",
  },
  {
    no: "08",
    icon: "⇗",
    title: "Store migration services",
    blurb:
      "Replatform from Magento, WooCommerce, or legacy setups with zero-drama cutovers. We handle complex enterprise data migrations with absolute integrity.",
    tint: "var(--sf-berry-soft)",
    ink: "var(--sf-berry)",
    delay: "60ms",
  },
  {
    no: "09",
    icon: "🛒",
    title: "E-commerce development",
    blurb:
      "Looking for top eCommerce experts in India? We build robust platforms, custom endpoints, and custom data pipelines that keep your enterprise humming.",
    tint: "var(--sf-primary-soft)",
    ink: "var(--sf-primary-deep)",
    delay: "120ms",
  },
  {
    no: "10",
    icon: "M",
    title: "Medusa JS development",
    blurb:
      "Future-proof your business with Medusa.js. We specialize in building open-source, headless commerce architectures designed for unparalleled developer control.",
    tint: "var(--sf-sage-soft)",
    ink: "var(--sf-sage-deep)",
    delay: "0ms",
  },
  {
    no: "11",
    icon: "P",
    title: "Prestashop development",
    blurb:
      "Custom PrestaShop theme development and advanced module integration tailored for merchants who need deep customization and self-hosted control.",
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
          href="/contact"
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
