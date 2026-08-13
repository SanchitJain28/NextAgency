export default function SecondaryArticle() {
  return (
    <section className="max-w-[1200px] mx-auto px-7 py-16 lg:py-24">
      <div
        className="w-full bg-[var(--sf-paper-deep)] p-8 md:p-12 border-2 border-[var(--sf-ink)] relative"
        style={{
          boxShadow: "8px 8px 0 var(--sf-ink)",
        }}
      >
        <div
          className="absolute -top-3 -right-3 w-6 h-6 bg-[var(--sf-gold)] border-2 border-[var(--sf-ink)]"
          style={{ boxShadow: "-2px 2px 0 var(--sf-ink)" }}
        />

        <div className="text-[13px] font-semibold tracking-[0.14em] uppercase text-[var(--sf-gold)] mb-[16px]">
          The Indian Advantage
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
          Why leading brands choose a top-tier{" "}
          <span className="text-[var(--sf-primary)]">Shopify development company in India</span>.
        </h2>

        <div className="space-y-6 max-w-[800px] text-[17px] leading-[1.6] text-[color-mix(in_srgb,var(--sf-paper)_80%,transparent)] font-medium">
          <p>
            When merchants look to scale, the conversation eventually turns to the{" "}
            <strong className="text-white font-bold">
              ecommerce website development cost in India
            </strong>
            . However, the true advantage isn't just cost arbitrage—it is gaining access to specialized, deep technical talent that operates as an extension of your own engineering team. 
          </p>
          <p>
            Unlike traditional outsourcing farms, we are a specialized boutique agency. When you{" "}
            <strong className="text-white font-bold">
              hire Shopify developers in India
            </strong>{" "}
            through Scalefront, you are partnering directly with the architects who will build your headless stack, write your custom Liquid, and optimize your Core Web Vitals. We eliminate the layers of account managers that dilute technical execution.
          </p>
          <p>
            From complex backend integrations and ERP syncing, to bespoke frontend architectures using Next.js and Hydrogen, our developers deliver enterprise-grade solutions. We focus on writing clean, scalable code that ensures your storefront remains lightning fast during peak holiday traffic, driving long-term revenue rather than short-term fixes.
          </p>
        </div>
      </div>
    </section>
  );
}
