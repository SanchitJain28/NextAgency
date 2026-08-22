export default function SecondaryArticle() {
  return (
    <section className="max-w-[1200px] mx-auto px-7 py-16 lg:py-24">
      <div
        className="w-full bg-[var(--sf-paper-deep)] p-6 md:p-12 border-2 border-[var(--sf-ink)] relative"
        style={{
          boxShadow: "8px 8px 0 var(--sf-ink)",
        }}
      >
        <div
          className="absolute -top-3 -right-3 w-6 h-6 bg-[var(--sf-gold)] border-2 border-[var(--sf-ink)]"
          style={{ boxShadow: "-2px 2px 0 var(--sf-ink)" }}
        />

        <div className="text-[13px] font-semibold tracking-[0.14em] uppercase text-[var(--sf-gold)] mb-[16px]">
          Direct Technical Work
        </div>

        <h2
          className="mb-[24px] max-w-[900px] leading-[1.05] tracking-[-0.03em] text-white"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 44px)",
            textWrap: "balance",
          }}
        >
          Why brands choose a dedicated{" "}
          <span className="text-[var(--sf-primary)]">
            Shopify development partner in India
          </span>
          .
        </h2>

        <div className="space-y-6 max-w-[800px] text-[15px] md:text-[17px] leading-[1.6] text-[color-mix(in_srgb,var(--sf-paper)_80%,transparent)] font-medium">
          <p>
            When merchants look into{" "}
            <strong className="text-white font-bold">
              ecommerce website development cost in India
            </strong>
            , the real benefit goes beyond rates. It is working directly with
            experienced developers who understand store speed, Liquid code, and
            checkout conversion.
          </p>
          <p>
            When you{" "}
            <strong className="text-white font-bold">
              hire Shopify developers in India
            </strong>{" "}
            through ScaleFront, you talk directly with the developer writing
            your code. There are no middle layers, account managers, or
            miscommunication. If a cart feature needs an update or a product
            feed breaks, you get it fixed right away.
          </p>
          <p>
            From ERP inventory syncing and warehouse connections to custom
            Online Store 2.0 themes and Next.js headless storefronts, we focus
            on clean code that holds up under high traffic. Your store stays
            fast during sales and peak seasons without surprise crashes.
          </p>
        </div>
      </div>
    </section>
  );
}
