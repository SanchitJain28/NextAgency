import { CONTACT_INFO } from "@/config/contact";
import type { Metadata } from "next";
import { homepageDefaults } from "@/content/homepage";

import { HomepageSections } from "@/components/homepage/HomepageSections";

export function generateMetadata(): Metadata {
  const { seo } = homepageDefaults;
  const title = `${seo.title} | ScaleFront`;
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: "/" },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description: seo.description,
      url: "https://www.scalefront.io",
      siteName: "ScaleFront",
      type: "website",
      images: [{ url: seo.image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: seo.description,
      images: [seo.image],
    },
  };
}

export default function HomePage() {
  const content = homepageDefaults;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.scalefront.io/#organization",
        name: "ScaleFront",
        url: "https://www.scalefront.io",
        logo: "https://www.scalefront.io/logo/updated_logo.png",
        sameAs: [
          CONTACT_INFO.twitter,
          CONTACT_INFO.companyLinkedin,
          CONTACT_INFO.github,
        ],
        email: CONTACT_INFO.email,
        telephone: CONTACT_INFO.telInternational,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HomepageSections content={content} />
    </>
  );
}
