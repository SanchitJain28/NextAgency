---
name: onpage-seo-practices
description: Use for any Next.js (App Router, v16+) implementation work involving metadata, title tags, meta descriptions, Open Graph/Twitter cards, canonical URLs, JSON-LD structured data, sitemap.ts, robots.ts, or other technical/on-page SEO plumbing on scalefront.io. Trigger this whenever writing or reviewing a page.tsx/layout.tsx's metadata export or generateMetadata function, adding schema markup, setting up canonicals, or when the user asks about technical SEO, crawlability, or indexing — as distinct from keyword strategy (see scalefront-seo-strategy) or copywriting (see scalefront-content-writing). Don't hand-roll <head> tags or client-side SEO hacks — this skill enforces using Next.js's built-in Metadata API correctly.
---

# On-Page SEO Practices — Next.js 16 (App Router)

Technical/on-page SEO implementation rules for scalefront.io, built on Next.js 16.0.7 App Router. This skill covers _how to implement_ metadata and structured data correctly in Next.js — for _what keywords_ to target, see the `scalefront-seo-strategy` skill; for _how to write_ the copy itself, see `scalefront-content-writing`.

## 1. Core rule: use the Metadata API, never manual `<head>` tags

Next.js 16's App Router has a first-class, type-safe Metadata API. Never use `next/head`, client-side `<Head>` components, or manually inject `<meta>`/`<title>` tags — these are Pages Router patterns and create race conditions where crawlers may index a page before tags are injected. All indexable pages must be Server Components (already the project standard — see homepage components, all built as server components for this exact reason).

## 2. Static vs dynamic metadata — pick the right one per page

- **Static pages** (homepage, about, contact, individual hand-built service/portfolio pages): export a static `metadata` object directly. It's evaluated at build time and cached — faster, no runtime overhead.

```tsx
// app/services/shopify-theme-development/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Theme Development Services",
  description:
    "Custom Shopify theme development built for speed, conversion, and full design control. Based in Gurgaon, working with brands across India.",
  alternates: {
    canonical: "https://scalefront.io/services/shopify-theme-development",
  },
};
```

- **Dynamic pages** (any future data-driven route — e.g. a blog, or portfolio pages pulled from a CMS/database rather than hand-coded): use `generateMetadata`.

```tsx
// app/portfolio/[slug]/page.tsx
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params; // Next.js 16: params is a Promise — must be awaited
  const project = await getProject(slug);

  return {
    title: `${project.title} — Shopify Case Study`,
    description: project.summary,
    alternates: { canonical: `https://scalefront.io/portfolio/${slug}` },
  };
}
```

**Critical Next.js 16 change:** `params` (and `searchParams`) are now Promises and must be `await`ed — the old synchronous access pattern from Next.js 14 is fully removed. If you see `params.slug` used directly without `await`, that's a bug, not a stylistic choice.

**Never export both `metadata` and `generateMetadata` from the same route segment** — Next.js doesn't allow it. Pick one based on whether the page's content is static or fetched dynamically.

**Wrap data fetches used in `generateMetadata` in `cache()`** if the same fetch is also used in the page component itself — otherwise Next.js runs the fetch twice per request (once for metadata, once for the page).

## 3. Root layout: set the sitewide defaults once

```tsx
// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "ScaleFront — Hire Shopify Developer | Gurgaon, India",
    template: "%s | ScaleFront",
  },
  description: "...", // sitewide fallback, should rarely be used directly since every page should set its own
  metadataBase: new URL("https://scalefront.io"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
    },
  },
};
```

- The `template` field means a child page's title (`"Shopify Theme Development"`) automatically renders as `"Shopify Theme Development | ScaleFront"` — don't manually append "| ScaleFront" in every page's title, let the template handle it.
- `metadataBase` must be set once in the root layout — it makes relative OG image URLs and canonicals resolve correctly across the whole site.
- Next.js merges metadata from parent layouts into child pages: primitive fields (title, description) are replaced by the child; some fields (like OG images) merge — be aware a child page's `title` fully overrides the parent's, it doesn't concatenate.

## 4. Every indexable page must set, at minimum:

1. Unique `title` (via the layout template — just set the page-specific part)
2. Unique `description` — one honest sentence, includes the page's verified primary keyword naturally (per `scalefront-seo-strategy` rules — never a keyword that hasn't been checked against real data)
3. `alternates.canonical` — the full, absolute canonical URL for that exact page
4. `openGraph` block (title, description, url, siteName, images, type) — for social sharing appearance
5. Twitter card fields if not otherwise inherited from OG defaults

```tsx
export const metadata: Metadata = {
  title: "Industrial Supply Direct — Shopify B2B Case Study",
  description:
    "A self-initiated Shopify B2B development build for technical, catalog-heavy buyers.",
  alternates: {
    canonical: "https://scalefront.io/portfolio/industrial-supply-direct",
  },
  openGraph: {
    title: "Industrial Supply Direct — Shopify B2B Case Study",
    description:
      "A self-initiated Shopify B2B development build for technical, catalog-heavy buyers.",
    url: "https://scalefront.io/portfolio/industrial-supply-direct",
    siteName: "ScaleFront",
    images: [
      {
        url: "/og/industrial-supply-direct.png",
        width: 1200,
        height: 630,
        alt: "Industrial Supply Direct Shopify B2B storefront",
      },
    ],
    type: "article",
  },
};
```

## 5. Canonical URL consistency — check this across the whole domain

Canonical signals are evaluated across multiple layers (the `alternates.canonical` tag, the OG `url` field, and JSON-LD `url`/`@id` fields) — if these are inconsistent (e.g. some reference `www.scalefront.io`, others `scalefront.io`), Google's indexer can treat them as duplicate variants and split ranking signal, or index neither. Pick one canonical domain form (recommend the non-www apex, `scalefront.io`, matching what's used elsewhere in this project) and use it identically in every canonical, OG url, and schema field, site-wide.

## 6. Structured data (JSON-LD)

Implement as a small server component that renders a `<script type="application/ld+json">` tag — keep schema close to the page it describes.

**Homepage / sitewide — `LocalBusiness`** (already flagged as required in the homepage SEO strategy, for Gurgaon local-pack relevance):

```tsx
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ScaleFront",
    url: "https://scalefront.io",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurgaon",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    areaServed: ["IN", "Worldwide"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

**Portfolio/case-study pages — `CreativeWork` or `Article`** (per the Industrial Supply Direct SEO doc — never `Product` or `Review` schema on self-initiated projects, since there's no real transaction or customer review to back it):

```tsx
const schema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Industrial Supply Direct — Shopify B2B Case Study",
  url: "https://scalefront.io/portfolio/industrial-supply-direct",
  creator: { "@type": "Organization", name: "ScaleFront" },
};
```

**FAQ sections — `FAQPage`** schema, matched exactly to the visible on-page FAQ content (don't add schema for questions not actually shown on the page — mismatched schema can trigger a manual action):

```tsx
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};
```

Validate every schema block with Google's Rich Results Test before shipping.

## 7. Sitemap and robots — file-based, not manual

Use Next.js's file conventions, not a hand-written static file:

```tsx
// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://scalefront.io", lastModified: new Date(), priority: 1 },
    {
      url: "https://scalefront.io/services/shopify-b2b-development",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://scalefront.io/portfolio/industrial-supply-direct",
      lastModified: new Date(),
      priority: 0.6,
    },
    // ...generate dynamic entries from a project/service list rather than hardcoding as the site grows
  ];
}
```

```tsx
// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://scalefront.io/sitemap.xml",
  };
}
```

Keep both in version control (they live as normal TS files in `app/`), and regenerate the sitemap's dynamic entries whenever a new service or portfolio page is added — don't let it silently go stale.

## 8. OG images

Prefer Next.js's dynamic OG image generation (`opengraph-image.tsx` file convention) for pages where the image should reflect page-specific content (e.g. a portfolio project's name/screenshot), and static image files only for pages where a fixed brand image is fine (homepage, generic service pages).

## 9. Common mistakes to catch when reviewing a page's metadata

- Missing `await` on `params` in `generateMetadata` (Next.js 16 requirement — will error, not just warn)
- Both `metadata` and `generateMetadata` exported from the same file
- No `alternates.canonical` set on a dynamic route (causes duplicate-content issues from URL variations like `?ref=` query params)
- Title not relying on the root layout's `template` (redundant "| ScaleFront" hardcoded into every page title)
- Generic/duplicate meta description copy-pasted across pages instead of unique per-page copy (cross-check with `scalefront-content-writing` skill's no-boilerplate rule)
- JSON-LD schema describing content that isn't actually visible on the page
- Inconsistent canonical domain form (www vs non-www) across canonical tag, OG url, and schema
- SEO-critical content rendered only in a Client Component — verify the page is a Server Component so crawlers get fully-rendered HTML, not a JS-dependent shell

## 10. Verification workflow before shipping a new page

1. Confirm the page is a Server Component
2. Confirm `metadata` or `generateMetadata` is set with unique title/description/canonical
3. Confirm the primary keyword used matches a keyword verified per `scalefront-seo-strategy` (don't let unverified keywords slip into title tags at implementation time)
4. Add/verify relevant JSON-LD schema
5. Add the new URL to `sitemap.ts`
6. Inspect rendered `<head>` output in browser DevTools to confirm everything resolved correctly (metadata evaluates async — confirm it isn't silently falling back to layout defaults)
