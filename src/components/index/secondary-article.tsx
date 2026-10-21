import { homepageDefaults, type HomepageContent } from "@/content/homepage";
export default function SecondaryArticle({
  content = homepageDefaults.secondary,
}: {
  content?: HomepageContent["secondary"];
}) {
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
          {content.directTechnicalWork}
        </div>

        <h2
          className="mb-[24px] max-w-[900px] leading-[1.05] tracking-[-0.03em] text-white"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 44px)",
            textWrap: "balance",
          }}
        >
          {content.whyBrandsChooseADedicated}{" "}
          <span className="text-[var(--sf-primary)]">
            {content.shopifyDevelopmentPartnerInIndia}
          </span>
          .
        </h2>

        <div className="space-y-6 max-w-[800px] text-[15px] md:text-[17px] leading-[1.6] text-[color-mix(in_srgb,var(--sf-paper)_80%,transparent)] font-medium">
          <p>
            {content.whenMerchantsLookInto}{" "}
            <strong className="text-white font-bold">
              {content.ecommerceWebsiteDevelopmentCostIn}
            </strong>
            {content.theRealBenefitGoesBeyond}
          </p>
          <p>
            {content.whenYou}{" "}
            <strong className="text-white font-bold">
              {content.hireShopifyDevelopersInIndia}
            </strong>{" "}
            {content.throughScalefrontYouTalkDirectly}
          </p>
          <p>{content.fromErpInventorySyncingAnd}</p>
        </div>
      </div>
    </section>
  );
}
