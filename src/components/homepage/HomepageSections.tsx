import type { HomepageContent } from "@/content/homepage";
import Hero from "@/components/index/hero";
import LogoMarquee from "@/components/index/logo-marquee";
import IntroArticle from "@/components/index/intro-article";
import FeaturedWork from "@/components/index/featured-work";
import Services from "@/components/index/services";
import CaseStudies from "@/components/index/case-studies";
import ResultsBand from "@/components/index/stats";
import Testimonials from "@/components/index/testimonials";
import SecondaryArticle from "@/components/index/secondary-article";
import Pricing from "@/components/index/pricing";
import FAQ from "@/components/index/faq";
import ContactCTA from "@/components/index/contact-cta";

export function HomepageSections({ content }: { content: HomepageContent }) {
  return (
    <main className="w-full overflow-clip bg-[var(--sf-paper)]">
      <Hero content={content.hero} />
      <LogoMarquee content={content.logos} />
      <IntroArticle content={content.intro} />
      <FeaturedWork content={content.projects} />
      <Services content={content.services} />
      <CaseStudies content={content.caseStudies} />
      <ResultsBand content={content.results} />
      <Testimonials content={content.testimonials} />
      <SecondaryArticle content={content.secondary} />
      <Pricing content={content.pricing} />
      <FAQ content={content.faq} />
      <ContactCTA content={content.contact} />
    </main>
  );
}
