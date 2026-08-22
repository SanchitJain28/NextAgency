export default function IntroArticle() {
  return (
    <section className="max-w-[1200px] mx-auto px-7 py-16 lg:py-24">
      <div
        className="w-full bg-[var(--sf-paper-sunken)] p-6 md:p-12 border-2 border-[var(--sf-ink)] relative"
        style={{
          boxShadow: "8px 8px 0 var(--sf-ink)",
        }}
      >
        <div
          className="absolute -top-3 -left-3 w-6 h-6 bg-[var(--sf-primary)] border-2 border-[var(--sf-ink)]"
          style={{ boxShadow: "2px 2px 0 var(--sf-ink)" }}
        />

        <div className="text-[13px] font-semibold tracking-[0.14em] uppercase text-[var(--sf-primary)] mb-[16px]">
          Shopify Engineering
        </div>

        <h2
          className="mb-[24px] max-w-[900px] leading-[1.05] tracking-[-0.03em] text-[var(--sf-ink)]"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(32px, 4vw, 48px)",
            textWrap: "balance",
          }}
        >
          Shopify development in{" "}
          <span className="text-[var(--sf-primary)]">India</span> focused on
          technical precision.
        </h2>

        <div className="space-y-6 max-w-[800px] text-[15px] md:text-[17px] leading-[1.5] text-[var(--sf-ink-soft)] font-medium">
          <p>
            Based in Gurgaon, we provide dedicated{" "}
            <strong className="text-[var(--sf-ink)] font-bold">
              Shopify development services
            </strong>{" "}
            to fast-growing DTC brands. Instead of installing pre-made
            templates, we build storefronts from the ground up using custom
            Liquid sections, Metaobjects, and the Storefront API to match
            how you actually sell.
          </p>
          <p>
            From custom private apps to dedicated{" "}
            <strong className="text-[var(--sf-ink)] font-bold">
              Shopify theme development
            </strong>
            , the focus is on writing clean, lightweight code. Building native
            features directly into your theme removes the need for 10+ slow
            third-party apps. This reduces your monthly app fees, speeds up
            mobile page loads, and gives you total control over your store.
          </p>
          <p>
            When you{" "}
            <strong className="text-[var(--sf-ink)] font-bold">
              hire a Shopify expert
            </strong>
            , you work directly with the developer building your store — no
            account managers or telephone games. Just direct technical work
            for theme redesigns, headless storefronts, catalog migrations, and
            custom ERP connections.
          </p>
        </div>
      </div>
    </section>
  );
}
