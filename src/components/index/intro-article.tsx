import { homepageDefaults, type HomepageContent } from "@/content/homepage";
export default function IntroArticle({
  content = homepageDefaults.intro,
}: {
  content?: HomepageContent["intro"];
}) {
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
          {content.shopifyEngineering}
        </div>

        <h2
          className="mb-[24px] max-w-[900px] leading-[1.05] tracking-[-0.03em] text-[var(--sf-ink)]"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(32px, 4vw, 48px)",
            textWrap: "balance",
          }}
        >
          {content.shopifyDevelopmentIn}{" "}
          <span className="text-[var(--sf-primary)]">{content.india}</span>{" "}
          {content.focusedOnTechnicalPrecision}
        </h2>

        <div className="space-y-6 max-w-[800px] text-[15px] md:text-[17px] leading-[1.5] text-[var(--sf-ink-soft)] font-medium">
          <p>
            {content.basedInGurgaonWeProvide}{" "}
            <strong className="text-[var(--sf-ink)] font-bold">
              {content.shopifyDevelopmentServices}
            </strong>{" "}
            {content.toFastGrowingDtcBrands}
          </p>
          <p>
            {content.fromCustomPrivateAppsTo}{" "}
            <strong className="text-[var(--sf-ink)] font-bold">
              {content.shopifyThemeDevelopment}
            </strong>
            {content.theFocusIsOnWriting}
          </p>
          <p>
            {content.whenYou}{" "}
            <strong className="text-[var(--sf-ink)] font-bold">
              {content.hireAShopifyExpert}
            </strong>
            {content.youWorkDirectlyWithThe}
          </p>
        </div>
      </div>
    </section>
  );
}
