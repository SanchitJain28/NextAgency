---
name: "technical-seo"
description: "Run technical SEO audits and fixes for a website — crawling, indexing, canonicals, sitemaps, redirects, Core Web Vitals, JS rendering, structured data, hreflang, and AI-crawler governance. Use when asked to audit a site, fix indexing or ranking-infrastructure problems, write titles/meta descriptions at scale, plan a migration, or review technical SEO implementation."
---

# Technical SEO

Technical SEO is everything that determines whether a search engine (or an AI retrieval system) can **discover → crawl → render → index → serve** a page. It does not make bad content rank. It makes good content _eligible_ to rank. Treat it as infrastructure QA, not a growth tactic.

**Non-negotiable framing:** every finding must be tied to one of three failure classes, because each has different fixes and different urgency.

| Class              | Symptom                                           | Example                                                              |
| ------------------ | ------------------------------------------------- | -------------------------------------------------------------------- |
| **Visibility**     | The page is never crawled or indexed              | Blocked in robots.txt, orphaned, `noindex`, 5xx                      |
| **Interpretation** | Crawled, but understood wrongly or inconsistently | Bad canonical, JS-only content, broken hreflang, thin rendered DOM   |
| **Priority**       | Understood fine, but another page wins            | Keyword cannibalisation, weak internal links, slow CWV as tiebreaker |

Never present a flat list of "errors." Always: _class → business impact → effort → owner._

---

## 0. Workflow

Run in this order. Do not skip ahead — later checks are meaningless if earlier ones fail.

1. **Scope.** Site size (URL count), platform/CMS, rendering model (static / SSR / CSR / hybrid), languages & markets, whether it's ecommerce, whether a migration is planned, what access exists (GSC, analytics, server logs, staging).
2. **Baseline.** Pull GSC Indexing report, Crawl Stats, Core Web Vitals report, Performance (last 16 months), and a full crawl. Snapshot the numbers before changing anything.
3. **Reproduce.** For any suspected issue, verify it yourself on a live URL — `curl -I`, the URL Inspection tool's _live test_, and the _rendered_ HTML. Tool reports lie; the live response doesn't.
4. **Triage** into the three classes above.
5. **Prioritise** by `(traffic or revenue at risk) × (confidence the fix works) ÷ (engineering effort)`. Ship the top 5, not the top 50.
6. **Fix**, with an explicit acceptance test for each item.
7. **Verify** after deploy, and again after the relevant lag (index updates: days–weeks; CrUX field data: 28-day rolling window, so allow 4+ weeks).

**Always ask before auditing** if unknown: site URL, GSC access, approximate page count, CMS/framework, target countries/languages, and what triggered the request (traffic drop? migration? routine?). A traffic-drop audit is a different investigation from a routine one — start it at Section 15.

---

## 1. Crawlability

### robots.txt

- Lives **only** at `https://domain.com/robots.txt` (root of each protocol + host + port). Subdomains need their own file.
- Must return **200**. A 5xx makes Google treat the whole site as disallowed (temporarily); a 404 means "crawl everything."
- UTF-8, plain text, under 500 KiB (Google ignores content past that).
- Governed by **RFC 9309**. Google matches the **most specific** rule by path length, not by file order; `Allow` beats `Disallow` on ties.
- `Crawl-delay` is **ignored by Google** (Bing and Yandex honour it).
- Supports `*` wildcard and `$` end-anchor.

**The single most common catastrophic error:** blocking a URL in robots.txt that also carries `noindex`. Google can't read the `noindex` because it can't fetch the page — so the URL can still appear in results (URL-only, no snippet). _To de-index a page, it must remain crawlable._

**Second most common:** a staging `Disallow: /` shipped to production. Check this first on any sudden total traffic loss.

Also never use robots.txt for canonicalisation or to hide sensitive data — disallowed URLs can still be indexed from external links.

Always declare sitemaps:

```
User-agent: *
Disallow: /cart/
Disallow: /checkout/
Disallow: /*?*sort=
Disallow: /*?*filter=
Allow: /

Sitemap: https://example.com/sitemap-index.xml or https://example.com/sitemap.xml
```

### Crawl budget

Only a real concern for sites above roughly **10,000 URLs**, or any size site that changes very frequently. It is the product of:

- **Crawl capacity limit** — how much the server can take without degrading. Slow responses and 5xx/429 make Google back off fast.
- **Crawl demand** — how much Google _wants_ to crawl, driven by popularity, staleness, and perceived quality.

Levers, in order of impact:

1. Kill low-value URL generation at source (facets, session IDs, infinite calendars, internal search results, sort/paginate combinatorics).
2. Consolidate duplicates properly (canonical + internal links + redirects).
3. Improve server response time — target **TTFB under 600 ms**, ideally under 200 ms for HTML.
4. Return correct status codes so Google can drop dead URLs (410 > 404 > soft-404).
5. Keep `<lastmod>` in sitemaps accurate so crawlers can skip unchanged sections.
6. Reduce redirect chains — each hop costs a fetch.

### Faceted navigation (ecommerce critical)

The combinatorial explosion is the #1 crawl-budget killer on ecommerce.

- Pick a small set of **indexable facets** with real search demand (e.g. `/shoes/running/mens/`) — give those clean, static, linkable URLs.
- Everything else: parameter-based, `Disallow`ed in robots.txt or rendered with non-crawlable controls (`<button>`, POST), and canonicalised to the parent category.
- Never put `noindex` on robots-blocked facets (see above).
- Standardise parameter order and casing; strip empty parameters.
- Google's URL Parameters tool is long gone — this must be solved in the site's code.

### Log file analysis

The only ground truth for what bots actually do. Verify Googlebot by **reverse DNS**, not user-agent string (trivially spoofed). Look for:

- % of crawl spent on non-indexable URLs (parameters, redirects, 404s) — if over ~20%, you have a budget problem.
- Important templates that are rarely or never crawled.
- Spikes in 5xx / 429 correlated with crawl-rate drops.
- Crawl frequency by directory vs. that directory's revenue contribution.
- AI crawler traffic (GPTBot, ClaudeBot, PerplexityBot, etc.) as a separate segment.

---

## 2. Indexability

### The robots meta tag and X-Robots-Tag

```html
<meta
  name="robots"
  content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
/>
```

- `index, follow` is the default — you don't need to state it, but stating it explicitly is harmless and makes audits easier.
- `max-image-preview:large` is worth setting sitewide: it makes pages eligible for large image thumbnails and Discover.
- `max-snippet:-1` and `max-video-preview:-1` remove length caps on snippets.
- `nosnippet`, `noarchive`, `notranslate`, `noimageindex`, `unavailable_after:[date]` as needed.
- `data-nosnippet` on a `<span>`/`<div>`/`<section>` excludes just that block from snippets — useful for boilerplate, legal text, prices that change.
- For **non-HTML files** (PDF, images, feeds) use the HTTP header: `X-Robots-Tag: noindex`.
- Google supports `noindex` in the HTTP header **and** the meta tag; `noindex` in robots.txt is unsupported and ignored.

### Which pages should be `noindex`

Internal search results, cart/checkout, account pages, thank-you pages, filtered duplicates with no demand, tag archives with one item, staging/dev, print views, auto-generated author archives on single-author blogs.

Which should **not**: paginated pages 2+ (keep indexable, self-canonical), category pages, anything with backlinks.

### Google Search Console index states — what each actually means

| State                                         | Meaning                                                                           | Action                                                             |
| --------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| _Discovered – currently not indexed_          | Google knows the URL, hasn't crawled. Usually crawl budget or perceived low value | Improve internal links, reduce total URL count, raise page quality |
| _Crawled – currently not indexed_             | Crawled, judged not worth indexing. **A quality signal, not a bug**               | Improve depth/uniqueness, consolidate, or accept                   |
| _Duplicate, Google chose different canonical_ | Your canonical was overridden                                                     | Strengthen: consistent internal links, sitemap, redirects          |
| _Duplicate without user-selected canonical_   | No canonical declared                                                             | Add self-referencing canonicals                                    |
| _Alternate page with proper canonical tag_    | Working as intended                                                               | None                                                               |
| _Soft 404_                                    | 200 status but empty/error-like content                                           | Return real 404/410, or add real content                           |
| _Excluded by noindex_                         | Intentional? Verify                                                               | Check it's deliberate                                              |
| _Page with redirect_                          | Fine for redirect sources                                                         | Remove from sitemap                                                |
| _Blocked by robots.txt_                       | Check it's deliberate                                                             | See §1                                                             |

A healthy large site typically has **80%+ of submitted sitemap URLs indexed**. Below 60% signals a quality or duplication problem, not a technical one.

### Requesting indexing

- URL Inspection → Request Indexing: fine for a handful of URLs. Not a scaling strategy; quota is small.
- **Indexing API**: officially only for `JobPosting` and `BroadcastEvent` structured data.
- **IndexNow**: supported by Bing, Yandex, Naver, Seznam (and via Cloudflare/CDN integrations). Not used by Google. Cheap to implement — worth it for news/ecommerce.

---

## 3. Canonicalisation

Google's canonical signals, **in descending order of strength**:

1. **Redirects** (strongest)
2. **`rel="canonical"`** annotations (link element or HTTP header)
3. **Sitemap inclusion** (weak hint only)

Plus implicit signals: HTTPS preferred over HTTP, internal linking consistency, membership of an hreflang cluster, URL structure. Signals **stack** — combine them and the preference sticks.

### Rules

```html
<link rel="canonical" href="https://example.com/dresses/green-dresses" />
```

- **Absolute URLs only.** Relative paths are technically supported but break in predictable ways (e.g. a crawlable staging environment canonicalising to itself).
- Must be in the **`<head>`**, and the `<head>` must be valid HTML — an unclosed tag or a stray `<div>` before it truncates the head and the canonical is silently dropped.
- **Self-referencing canonical on every indexable page.** This is the default; add it sitewide.
- One canonical per page. Multiple conflicting canonicals = all ignored.
- Point to a URL that returns **200** and is **indexable**. Canonicalising to a 404, a redirect, or a `noindex` page is a common and damaging error.
- Never mix `noindex` + `canonical` on the same page. The signals contradict ("drop this" vs "consolidate this"). Google may honour the `noindex` and de-index the _canonical target_. Pick one.
- Don't use fragments (`#section`) — Google doesn't support them as canonicals.
- Don't specify different canonicals via different methods (e.g. one in the sitemap, another in the tag).
- `rel="canonical"` with `hreflang`, `lang`, `media`, or `type` attributes is **ignored** — use `rel="alternate"` for those.
- Canonical is a **hint**, not a directive. Google overrides it when other signals disagree. If Google keeps overriding you, the fix is to make the _other_ signals agree, not to shout louder.

### Cross-domain canonicals

Valid for syndicated content. Set `rel="canonical"` on the syndicated copy pointing to the original. Weaker than a redirect; expect inconsistent honouring.

### HTTP header canonical (for PDFs and other non-HTML)

```
Link: <https://www.example.com/downloads/white-paper.pdf>; rel="canonical"
```

Use either the header or the HTML element — not both, since they drift apart.

### Canonicals and JavaScript

Canonicalisation happens **both before and after rendering**, so ambiguity is expensive. Google's guidance:

- **Best:** set the canonical in the server-delivered HTML and never touch it with JavaScript.
- **Acceptable:** omit it from the raw HTML entirely and set it only via JavaScript.
- **Worst:** have one canonical in the raw HTML and let JS change it to a different one.

### Canonical pitfalls checklist

- [ ] All canonicals absolute and HTTPS
- [ ] Self-referencing on every indexable page
- [ ] Canonical targets return 200, are indexable, and are in the sitemap
- [ ] No chains (A→B where B→C)
- [ ] No `noindex` on canonicalised-to pages
- [ ] Paginated pages self-canonical (NOT to page 1)
- [ ] Parameter URLs canonical to the clean URL
- [ ] Trailing-slash and case variants resolve to one form
- [ ] Internal links point at the canonical version
- [ ] hreflang and canonical agree (canonical within the same locale)

---

## 4. XML sitemaps

**Hard limits:** 50,000 URLs and 50 MB uncompressed per file. A sitemap index can reference up to 50,000 sitemaps. UTF-8 encoding, absolute URLs, URLs under 2,048 characters.

**Practical sizing:** 1,000–20,000 URLs per file. Smaller files are fetched and reprocessed more often, and Search Console reports submitted-vs-indexed _per sitemap_, which is the real reason to split.

### What belongs in a sitemap

Only URLs that are: canonical, `200`, indexable, and genuinely worth indexing. Nothing else. A sitemap is a quality declaration, not an inventory.

**Exclude:** redirects, 404s, `noindex` pages, non-canonical duplicates, parameter URLs, paginated pages beyond page 1 (optional — opinions differ; including them is harmless if they're indexable).

### `<lastmod>`

Use W3C datetime format (`2026-09-20` or `2026-09-20T14:30:00+05:30`). Google, Bing and AI crawlers all use it as a freshness signal — **but only if it's trustworthy**. If every URL's `lastmod` updates on every deploy, the signal is discarded entirely. Update it only on meaningful content change.

`<priority>` and `<changefreq>` are ignored by Google. Harmless to omit.

### Structure

Split by content type or section so indexing gaps are diagnosable:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://example.com/sitemap-products.xml</loc>
    <lastmod>2026-09-20</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://example.com/sitemap-categories.xml</loc>
    <lastmod>2026-09-19</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://example.com/sitemap-blog.xml</loc>
    <lastmod>2026-09-18</lastmod>
  </sitemap>
</sitemapindex>
```

The index entry's `<lastmod>` should be the newest `lastmod` inside that child file, so crawlers can skip unchanged sections. Child sitemaps must be on the same host as the index.

**Extensions:** image sitemaps (useful when images are JS-loaded), video sitemaps (`thumbnail_loc`, `duration`, `publication_date`), news sitemaps (last 2 days only, max 1,000 URLs).

Reference the index in `robots.txt` **and** submit it in Search Console.

---

## 5. Site architecture, URLs and internal linking

### Architecture

- Every important page reachable within **3 clicks** of the homepage.
- Flat-ish hierarchy for small/medium sites; siloed hierarchy for large sites where topical grouping aids both users and crawl efficiency.
- **Zero orphan pages.** Cross-reference the crawl against the sitemap and GA/GSC landing pages to find them — orphans are the single most under-detected indexing problem.
- Hub pages (category/pillar) should link out to and receive links from their children.

### URL structure

- Lowercase, hyphens as separators, no underscores, no spaces, no uppercase.
- Short and readable; describe the content, not the CMS.
- Stable — changing URLs costs equity every time.
- Avoid dates in URLs for evergreen content.
- One consistent trailing-slash convention, enforced by redirect.
- Keep depth shallow: `/category/product/` beats `/shop/c/12/sub/44/p/998877/`.
- No session IDs, no tracking parameters in canonical URLs.

### Internal linking

- Use real `<a href="...">` elements. `onclick` handlers, `<div>` click targets, `<button>`-driven navigation and `javascript:void(0)` are **not links** and pass nothing.
- Descriptive anchor text, varied naturally. Avoid "click here" and avoid using the exact same anchor for 400 links.
- Link to canonical URLs only — never to a redirecting or parameterised version.
- Breadcrumbs on every page below the homepage, marked up with `BreadcrumbList`.
- Fix broken internal links and internal redirects on every crawl; they're pure waste.
- Deep-link from high-authority pages to money pages you're trying to lift.

### Pagination

`rel="next"` / `rel="prev"` has been unused by Google since 2019. Current best practice:

- Crawlable `<a href>` links to numbered pages.
- Each paginated page **self-canonicals** (page 2 canonicals to page 2).
- Paginated pages stay indexable unless they're genuinely worthless.
- Never canonical page 2+ to page 1 — it orphans everything on those pages.
- Infinite scroll must be backed by real paginated URLs (History API + `<a href>` fallbacks).
- "View all" page is acceptable if it loads fast; canonical the paginated set to it only if it truly contains everything.

---

## 6. On-page technical metadata

### Title tag — the numbers

| Spec                              | Value                                            |
| --------------------------------- | ------------------------------------------------ |
| Target length                     | **50–60 characters**                             |
| Pixel budget (desktop truncation) | **~580–600 px**                                  |
| Absolute floor                    | ~30 characters (below this you're wasting space) |
| Rewritten by Google almost always | over ~70 characters                              |

Google publishes **no hard character limit** — truncation is by _pixel width_, and characters differ in width (an `i` is narrow, a `W` wide). So 50–60 characters is a safety margin, not a law. Check the actual pixel width with a SERP preview tool for high-value pages.

**Rules:**

- **Front-load.** Distinctive words first, brand last. If truncation hits, you lose the brand, not the message.
- Unique on every page. Duplicate titles across a template is a top-3 finding on most audits.
- One page, one intent. Stuffing three keyword variants reads as spam and invites a rewrite.
- Separator: hyphen or pipe. (Some practitioners now prefer hyphens; either is fine — be consistent.)
- Avoid more than two segments: `Primary Topic - Brand`, not `Topic | Qualifier | City | Brand | Tagline`.
- No dates unless you will maintain them. "Best X 2024" in 2026 actively repels clicks.
- Match the `<h1>` in intent, but they need not be identical — the title serves the SERP, the H1 serves the page.

**Why Google rewrites titles** (roughly a third of the time): title doesn't match page content, it's keyword-stuffed, it's boilerplate across the site, it's truncated, or the H1/anchor text is a better description. The fix is a better title, not more keywords.

### Meta description — the numbers

| Spec                 | Value                                     |
| -------------------- | ----------------------------------------- |
| Target length        | **120–160 characters**                    |
| Desktop pixel budget | **~920 px**                               |
| Mobile pixel budget  | **~680 px** (~105–120 characters visible) |

**Not a ranking factor.** It is a click-through-rate lever, and increasingly it is the sentence AI assistants reuse when summarising your page. Write it as the sentence you want quoted.

- Unique per page. Never auto-generate from the first 160 characters of body copy.
- Include the primary term naturally — matched terms are bolded in the SERP.
- State the specific value and one concrete differentiator, then a soft call to action.
- Google rewrites descriptions a large share of the time, especially vague or duplicated ones. Specific and accurate descriptions survive most often.
- Missing is better than duplicated: if you can't write a unique one, let Google generate it.

**Product page pattern:** `{Product} in {N} variants. {Key spec}. {Trust signal — free shipping / returns / rating}.`
**Article pattern:** `{What the reader will learn}. {Why this source is credible}. {Scope}.`

### Headings

- One `<h1>` per page (multiple are technically valid in HTML5 and Google tolerates them, but one is cleaner and easier to audit).
- Logical hierarchy, no skipped levels for structural reasons; `h2` → `h3` → `h4`.
- Headings describe content — don't use them purely for font size.
- Descriptive headings genuinely help both screen readers and AI extraction.

### Other head elements

```html
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>…</title>
<meta name="description" content="…" />
<link rel="canonical" href="https://…" />
<meta property="og:title" content="…" />
<meta property="og:description" content="…" />
<meta property="og:image" content="https://…" />
<!-- 1200×630 -->
<meta property="og:url" content="https://…" />
<meta property="og:type" content="article" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="icon" href="/favicon.ico" sizes="any" />
```

Open Graph and Twitter cards don't affect ranking; they affect how links look when shared, which affects clicks and links. Favicon must be a multiple of 48×48, crawlable, and stable.

**`<head>` validity matters more than people expect.** Invalid elements inside `<head>` (an `<iframe>`, a `<div>`, an unclosed tag) cause browsers and Googlebot to close the head early, dropping every tag after it — canonical, hreflang, robots meta and all.

---

## 7. HTTP status codes and redirects

| Code                | Use                                                                                                                     |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **200**             | The page exists. Required for JS rendering (see §9)                                                                     |
| **301**             | Permanent move. Consolidates signals. Default for migrations                                                            |
| **302 / 307**       | Temporary. Keeps the original indexed. Use only when genuinely temporary                                                |
| **308**             | Permanent, preserves request method                                                                                     |
| **304**             | Not modified — good for crawl efficiency                                                                                |
| **404**             | Not found. Fine in bulk; Google expects them                                                                            |
| **410**             | Gone, permanently. Removed from the index faster than 404                                                               |
| **429**             | Rate limited. Causes Google to back off crawl                                                                           |
| **451**             | Unavailable for legal reasons                                                                                           |
| **500 / 502 / 503** | Server error. Sustained 5xx causes de-indexing. **503 + `Retry-After`** is the correct response for planned maintenance |

### Redirect rules

- Redirect to the **closest equivalent page**, never en masse to the homepage — bulk homepage redirects are treated as soft 404s and pass nothing.
- Maximum **one hop**. Google follows up to ~10 but equity and crawl budget leak at each hop, and browsers give up sooner.
- **No loops.** Test every rule set with `curl -IL`.
- Update internal links to the destination; don't rely on the redirect permanently.
- Keep redirects live for **at least a year** after a migration; indefinitely if the old URL has backlinks.
- Server-side (HTTP) redirects are fastest to be picked up. Meta refresh and JS redirects work but are slower and less reliable.
- Redirect chains from HTTP → HTTPS → www → trailing slash are the classic 3-hop waste. Collapse them into one rule.

### Soft 404s

A 200 response with empty, error-like, or placeholder content. Google classifies these itself and excludes them. Causes: out-of-stock products that return an empty template, empty search results, empty category pages, "no results found" pages, JS that fails to render content.

**Ecommerce out-of-stock rule:** permanently discontinued → 404/410 (or 301 to the closest alternative). Temporarily out of stock → keep it **200**, keep the content, show restock/alternatives, and mark `availability` correctly in `Product` schema. Never delete a page that has backlinks and rankings because inventory ran out.

---

## 8. Core Web Vitals and performance

### Thresholds (unchanged, measured at the **75th percentile** of real users)

| Metric                     | Good     | Needs improvement | Poor     |
| -------------------------- | -------- | ----------------- | -------- |
| **LCP** (loading)          | ≤ 2.5 s  | 2.5–4.0 s         | > 4.0 s  |
| **INP** (responsiveness)   | ≤ 200 ms | 200–500 ms        | > 500 ms |
| **CLS** (visual stability) | ≤ 0.1    | 0.1–0.25          | > 0.25   |

**INP replaced FID in March 2024.** Any guide still listing FID is out of date. INP measures the full latency of _all_ interactions across the page lifecycle, not just the delay before the first one — which is why it's much harder to pass and is now the most commonly failed vital.

**Field data is what counts.** Google grades from the Chrome User Experience Report (CrUX) on a **28-day rolling window**, at the URL level where data exists, falling back to origin level where it doesn't. A perfect Lighthouse score in DevTools proves nothing if a quarter of real visitors on mid-range phones are slow. Allow 4+ weeks after a deploy before judging a fix.

CWV is a confirmed but modest ranking signal — realistically a tiebreaker between pages of comparable relevance and authority. Sell it internally on conversion, not on rankings.

### Fix order

1. Whichever metric is in the **Poor** band.
2. Then **INP** (hardest, needs architectural change).
3. Then **LCP** (biggest commercial impact).
4. Then **CLS** (easiest).

Don't optimise a metric that's already green.

### LCP fixes

LCP breaks into four sub-parts — diagnose which one dominates before fixing anything:

1. **TTFB** — server time. Fix: caching, CDN, faster origin, edge rendering. Target < 600 ms, ideally < 200 ms.
2. **Resource load delay** — time between TTFB and the LCP resource starting. Fix: `<link rel="preload">` the hero image, `fetchpriority="high"`, never lazy-load the LCP element, get it out of JS-dependent rendering.
3. **Resource load time** — Fix: AVIF/WebP, responsive `srcset`/`sizes`, right-sized images, compression, CDN.
4. **Element render delay** — Fix: remove render-blocking CSS/JS, inline critical CSS, `defer`/`async` scripts, self-host and preload fonts with `font-display: swap`.

Other levers: `preconnect` to critical third-party origins, HTTP/2 or HTTP/3, Brotli compression, eliminate client-side redirects on entry URLs.

### INP fixes

INP is a JavaScript architecture problem. Levers:

- **Ship less JavaScript.** Code-split, tree-shake, remove unused dependencies and dead polyfills.
- Break up long tasks (>50 ms). Yield to the main thread — `scheduler.yield()` where available, `setTimeout`/`isInputPending` as fallback.
- Move heavy work to Web Workers.
- Debounce expensive input handlers; avoid synchronous layout reads inside them (forced reflow).
- Give immediate visual feedback on interaction, then do the work — perceived responsiveness is what's measured.
- Audit third-party tags: chat widgets, A/B testing scripts, tag managers and consent banners are the usual culprits. Load them with `async`, or after interaction, or not at all.
- Reduce DOM size (aim under ~1,500 nodes) and CSS selector complexity.

### CLS fixes

- Always set `width` and `height` (or `aspect-ratio`) on images, videos, iframes and embeds.
- Reserve space for ads, banners, cookie notices and dynamically injected content.
- Preload fonts and use `size-adjust`/`font-display: optional` to reduce swap shift.
- Never insert content above existing content unless it's a response to user interaction.
- Use CSS `transform` for animation, not properties that trigger layout (`top`, `left`, `width`, `height`).
- Watch late-loading cookie/consent banners — a top CLS offender.

### Measurement stack

- **Field:** GSC Core Web Vitals report, PageSpeed Insights (CrUX section), CrUX BigQuery/API, a RUM tool (DebugBear, SpeedCurve, or `web-vitals` JS library).
- **Lab:** Lighthouse, Chrome DevTools Performance panel, WebPageTest.
- Diagnose in the lab, **grade in the field**.

---

## 9. Mobile and JavaScript rendering

### Mobile

Google indexes the **mobile** version of the page. Everything below follows from that:

- Content parity: the mobile page must contain the same primary content, headings, structured data and metadata as desktop. Hiding content behind mobile accordions is fine; _omitting_ it is not.
- Responsive design is the recommended pattern (one URL, one HTML). Separate `m.` sites and dynamic serving still work but need `rel=alternate`/`rel=canonical` pairs or `Vary: User-Agent` and are much more failure-prone.
- Viewport meta tag on every page.
- Tap targets ≥ 48 px with adequate spacing; body text ≥ 16 px; no horizontal scroll.
- No intrusive interstitials on entry — full-screen popups covering main content on mobile are a demotion signal. Legally required cookie/age notices and reasonably sized banners are fine.
- Note: Google retired the standalone Mobile-Friendly Test and the Mobile Usability report. Use Lighthouse and real-device testing instead.

### JavaScript SEO

Google processes JS in a **two-phase** pipeline: crawl → queue → render (evergreen Chromium) → index. Rendering can lag by seconds, days, or longer.

**Critical rule (clarified by Google in December 2025):** all pages returning **200** are queued for rendering, whether or not they contain JavaScript. Pages returning a **non-200** status code **may have rendering skipped entirely**. So any page whose content depends on client-side JS _must_ return 200 — otherwise Google only ever sees the raw, empty HTML.

The practical consequence: never ship a page with `noindex` in the raw HTML and rely on JS to remove it. Googlebot can drop the page before it ever executes the script — and it may never reverse. This pattern has silently de-indexed entire product catalogues.

**Checklist:**

- Prefer **SSR**, **SSG**, or hybrid rendering over pure client-side rendering. Dynamic rendering is officially a workaround, not a recommendation.
- Verify the **rendered** DOM, not the source: GSC URL Inspection → Live Test → View Tested Page → HTML, or Chrome DevTools "Copy outerHTML".
- Never block JS/CSS bundles in robots.txt — Google needs them to render.
- All navigation as `<a href>`. Never `onclick`-only routing.
- Use the History API, not hash-based routes (`#/page`). Google ignores fragments.
- Set title, meta description, canonical and structured data **server-side** where possible.
- Native `loading="lazy"` for below-fold images; never for the LCP image. Intersection-Observer lazy loading must trigger well before viewport entry.
- Avoid content behind user interaction (click-to-load tabs) if it matters for ranking — render it in the DOM and hide with CSS instead.
- Cache-bust bundles with content hashes, but keep URLs stable enough to be cached across crawls.
- Don't rely on cookies, localStorage, sessionStorage, IndexedDB or service workers — Googlebot renders stateless and discards state between page loads.
- Handle failed API calls gracefully: a client-side fetch failure must not produce an empty page with a 200 status (instant soft 404).

---

## 10. Structured data

Use **JSON-LD** in `<head>` or `<body>`. It's Google's recommended format and is far easier to maintain than microdata or RDFa.

**Calibration:** structured data is not a ranking factor and is **not required** for visibility in AI search features. It earns you _rich result eligibility_ and helps disambiguate entities. Implement it well, but don't let it eat the budget that should go to indexing or performance.

### Types worth implementing

| Type                                                                            | Where                 | Key properties                                                                                                                          |
| ------------------------------------------------------------------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `Organization`                                                                  | Homepage, sitewide    | `name`, `url`, `logo`, `sameAs`, `contactPoint`                                                                                         |
| `WebSite` + `SearchAction`                                                      | Homepage              | Enables sitelinks search box                                                                                                            |
| `BreadcrumbList`                                                                | Every page below home | `itemListElement` with `position`, `name`, `item`                                                                                       |
| `Article` / `NewsArticle` / `BlogPosting`                                       | Editorial             | `headline`, `author` (as a `Person` **entity**, not a bare string), `datePublished`, `dateModified`, `publisher`, `image`               |
| `Product` + `Offer`                                                             | Product pages         | `name`, `image`, `description`, `sku`, `brand`, `offers` (`price`, `priceCurrency`, `availability`), `aggregateRating`                  |
| `LocalBusiness`                                                                 | Location pages        | `address`, `geo`, `openingHoursSpecification`, `telephone`                                                                              |
| `FAQPage`                                                                       | Sparingly             | Rich results were heavily restricted from 2023 and further demoted in late 2025 — still useful for entity clarity, no longer a CTR play |
| `Event`, `Recipe`, `JobPosting`, `VideoObject`, `Course`, `SoftwareApplication` | As applicable         | See Google's feature guides                                                                                                             |
| `Person`                                                                        | Author bios           | `name`, `sameAs`, `jobTitle`, `worksFor`                                                                                                |

### Rules

- Structured data must **match visible content**. Marking up content users can't see is a spam policy violation and can trigger a manual action.
- Connect entities with `@id` references so `Organization`, `Person`, `WebPage` and `Product` form one graph rather than disconnected islands.
- Use `sameAs` to link to authoritative profiles (Wikipedia, Wikidata, LinkedIn, Crunchbase) — this is how entity disambiguation actually works.
- No fake or aggregated-from-elsewhere reviews. `AggregateRating` must reflect reviews collected on your own property.
- Keep `dateModified` honest.
- Validate with the **Rich Results Test** (eligibility) and the **Schema Markup Validator** (syntax). Monitor the Enhancements reports in GSC.
- Retired/no longer shown: `HowTo`, `PracticeProblem`, most `FAQPage` results, `Critic Review`. Don't build new work on these.

---

## 11. International SEO (hreflang)

```html
<link rel="alternate" hreflang="en-us" href="https://example.com/us/" />
<link rel="alternate" hreflang="en-gb" href="https://example.com/uk/" />
<link rel="alternate" hreflang="de" href="https://example.com/de/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/" />
```

### Rules

- **Language code is required** (ISO 639-1); **region is optional** (ISO 3166-1 Alpha-2). `hreflang="de"` is valid; `hreflang="de-DE"` is valid; `hreflang="DE"` alone is **not** — `DE` would be read as a language code, and there isn't one.
- **Bidirectional.** If A points to B, B must point back to A. One-way annotations are discarded.
- **Self-referencing.** Every page in the cluster includes itself in its own hreflang set.
- Absolute URLs, correct protocol, no redirects, no `noindex` pages in the cluster.
- Include an **`x-default`** for the fallback / language-selector page.
- Pick **one** delivery method — HTML `<head>`, HTTP header, or XML sitemap. Sitemap delivery scales best for large sites and keeps page weight down. Don't mix.
- Canonical must be **self-referencing within each locale**. Canonicalising all locales to one "main" version destroys the cluster — this is the most common hreflang failure.
- hreflang manages _which_ version is shown to whom. It does **not** solve duplicate content across locales, and it is not a ranking boost.
- Google prefers URLs that are part of an hreflang cluster when choosing canonicals, so a complete cluster is a genuine signal.

### Targeting structure

| Structure                        | Geo-targeting        | Notes                                                 |
| -------------------------------- | -------------------- | ----------------------------------------------------- |
| ccTLD (`example.de`)             | Strongest, automatic | Expensive, splits authority                           |
| Subdirectory (`example.com/de/`) | Good, set in GSC     | **Usually the best default** — consolidates authority |
| Subdomain (`de.example.com`)     | Good, set in GSC     | Middle ground                                         |
| Parameter (`?loc=de`)            | Not recommended      | Avoid                                                 |

Also: don't auto-redirect by IP (it traps crawlers in one locale and users in the wrong one). Offer a banner or selector instead, and let every locale be directly accessible.

---

## 12. Security and infrastructure

- **HTTPS everywhere.** Valid, non-expired certificate matching the full hostname (watch wildcard vs. subdomain mismatches). Google strongly prefers HTTPS as canonical — but an invalid cert or an HTTPS→HTTP redirect flips that preference hard, and HSTS cannot override it.
- **No mixed content.** An HTTPS page pulling HTTP sub-resources (other than images) undermines canonical selection.
- **HSTS** (`Strict-Transport-Security`) to lock in HTTPS. Consider preload once you're confident.
- **One canonical hostname.** Pick www or non-www and 301 everything else, in a single hop.
- **HTTP/2 or HTTP/3** — multiplexing removes the old "concatenate everything" tradeoff.
- **Brotli** compression for text assets; gzip fallback.
- **Caching headers:** long `max-age` + `immutable` for hashed static assets; short/validated for HTML.
- **CDN** for global sites — measure TTFB from your actual markets, not from your office.
- Security headers (`X-Content-Type-Options`, `Referrer-Policy`, CSP) — no direct SEO effect, but a hacked site is an SEO catastrophe.
- Monitor GSC **Security Issues** and **Manual Actions** on every audit.
- Ensure the server doesn't rate-limit or WAF-block Googlebot. Verify by reverse DNS, and check CDN bot-management rules — aggressive bot protection blocking legitimate crawlers is an increasingly common cause of sudden indexing loss.

---

## 13. Images, video and media

- Descriptive filenames (`merino-wool-crew-navy.avif`, not `IMG_4471.jpg`).
- **Alt text** on every meaningful image: describe the image, include the keyword only if it genuinely belongs. Decorative images get `alt=""`.
- Modern formats: **AVIF** first, **WebP** fallback, JPEG/PNG last.
- Responsive `srcset` + `sizes`; serve the size actually displayed.
- Explicit `width`/`height` on every image (CLS).
- `loading="lazy"` below the fold; `fetchpriority="high"` + preload for the LCP image.
- Image sitemaps if images are injected by JS.
- `ImageObject` / `license` markup for licensable imagery.
- **Video:** `VideoObject` schema with `thumbnailUrl`, `uploadDate`, `duration`, `contentUrl`; a video sitemap; a transcript on the page; self-hosted or embedded on a crawlable URL. Video must not be the only source of key information.

---

## 14. AI search, crawler governance, and what to ignore

### What Google officially says (and it matters, because most 2026 advice contradicts it)

Google's generative AI features are grounded in the **same core Search index and ranking systems**, via retrieval-augmented generation and query fan-out. So optimising for AI Overviews and AI Mode _is_ SEO. To be eligible, a page must be indexed, eligible to appear with a snippet, and not opted out of AI features in Search Console.

Google explicitly states these are **not** needed:

- **`llms.txt` and similar AI text files** — Google Search does not use them. Creating one neither helps nor harms Google rankings. Maintain one only if a _non-Google_ service you care about consumes it.
- **"Chunking" content** into tiny pieces — unnecessary; Google handles multi-topic pages.
- **Rewriting content specifically for AI** — systems understand synonyms and intent.
- **Chasing inauthentic "mentions"** across the web.
- **Over-investing in structured data for AI** — helpful for rich results, not required for AI features.

What _does_ carry: unique, non-commodity, first-hand content; clean crawl and index paths; good page experience; high-quality images and video; low duplication; semantic HTML (for accessibility and browser agents, not because it's required).

Measure with the **Generative AI performance report** in Search Console. Be sceptical of third-party tools claiming access to internal Google AI metrics — none have it.

### AI crawler governance (robots.txt)

Training and retrieval are now separate user agents, so this is a real policy decision, not a binary.

| Token                | Operator     | Purpose                                                                                                            |
| -------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------ |
| `GPTBot`             | OpenAI       | Training                                                                                                           |
| `OAI-SearchBot`      | OpenAI       | Search indexing                                                                                                    |
| `ChatGPT-User`       | OpenAI       | User-triggered fetch                                                                                               |
| `ClaudeBot`          | Anthropic    | Training                                                                                                           |
| `Claude-SearchBot`   | Anthropic    | Search indexing                                                                                                    |
| `Claude-User`        | Anthropic    | User-triggered fetch                                                                                               |
| `PerplexityBot`      | Perplexity   | Search indexing                                                                                                    |
| `Perplexity-User`    | Perplexity   | User-triggered fetch                                                                                               |
| `Google-Extended`    | Google       | **Control token** for Gemini/Vertex training — does **not** affect Google Search ranking, and won't appear in logs |
| `Applebot-Extended`  | Apple        | Control token for Apple AI training                                                                                |
| `CCBot`              | Common Crawl | Dataset used by most LLM training                                                                                  |
| `Bytespider`         | ByteDance    | Training                                                                                                           |
| `meta-externalagent` | Meta         | Training                                                                                                           |
| `Amazonbot`          | Amazon       | Mixed                                                                                                              |

**Typical visibility-first configuration** — stay citable in AI answers, opt out of model training:

```
# Allow AI search & user-triggered retrieval
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: Claude-User
Allow: /
User-agent: PerplexityBot
Allow: /

# Opt out of model training
User-agent: GPTBot
Disallow: /
User-agent: ClaudeBot
Disallow: /
User-agent: Google-Extended
Disallow: /
User-agent: Applebot-Extended
Disallow: /
User-agent: CCBot
Disallow: /
User-agent: meta-externalagent
Disallow: /
```

**Never `Disallow: /` for `Googlebot`, `Bingbot`, or `Googlebot-Image`.** Blocking `Googlebot` removes the site from Google Search entirely. `Google-Extended` is the training control; they are not the same thing.

**Caveats to state plainly to any client:** robots.txt is voluntary (RFC 9309) and enforced only by good-faith compliance. Some crawlers ignore it, user agents can be spoofed, and real-time user-triggered fetches often bypass robots.txt logic entirely. For hard enforcement, use server/CDN/WAF rules returning 403, and verify by published IP range rather than by user-agent header.

---

## 15. Migrations and traffic-drop diagnosis

### Migration checklist (domain, platform, HTTPS, or URL restructure)

**Before**

- [ ] Full crawl of the old site — every URL, status, title, canonical, meta
- [ ] Export GSC Performance (16 months), all indexed URLs, and top backlink targets
- [ ] Build a **1:1 redirect map** old → new. Every old URL gets a destination or a deliberate 410
- [ ] Preserve URL structure where possible — the safest migration is the one that changes fewest URLs
- [ ] Stage the new site behind auth (not robots.txt — staging sites blocked only by robots.txt still get indexed from links)
- [ ] Prepare new sitemaps; keep old sitemaps temporarily so Google recrawls old URLs and sees the redirects

**Launch**

- [ ] Remove `noindex` / `Disallow: /` from the new environment — verify by fetching, don't assume
- [ ] Deploy redirects; test a sample with `curl -IL` for single-hop, correct status
- [ ] Verify the new property in GSC; use the **Change of Address** tool for domain moves
- [ ] Submit new sitemaps
- [ ] Check canonicals, hreflang, robots meta, structured data on templates

**After**

- [ ] Monitor GSC Coverage, Crawl Stats and 404s daily for 2 weeks, then weekly for 3 months
- [ ] Watch for redirect chains introduced by later rules
- [ ] Reclaim broken backlinks
- [ ] Expect a dip; a well-executed migration recovers in 2–8 weeks. No recovery after 3 months means something structural is wrong

### Diagnosing a traffic drop

Work through in order, and stop at the first confirmed cause:

1. **Is it a tracking problem?** Compare GSC clicks to analytics. Broken tag = fake drop.
2. **Is it seasonal / year-over-year normal?** Compare to the same period last year.
3. **Is it a technical break?** Check indexed page count, robots.txt, sitewide `noindex`, server errors, cert expiry, CDN/WAF blocking Googlebot. Sudden and total → almost always technical.
4. **Is it a manual action or security issue?** Check GSC.
5. **Does it align with a known core or spam update?** Check the Google ranking-updates history. Gradual, broad, content-quality-shaped → likely algorithmic.
6. **Is it SERP-feature loss?** Lost a featured snippet, rich result, or got displaced by AI Overviews — impressions steady, clicks down.
7. **Is it competitive?** Someone else improved. Impressions and position drop on specific query clusters only.

Segment the drop by **query type (brand vs non-brand), page type, device, and country** before theorising. The segmentation usually names the cause.

---

## 16. Monitoring cadence

| Frequency           | Checks                                                                                                                                             |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Weekly**          | GSC Coverage anomalies, new 404s, Crawl Stats spikes, manual actions/security, sitemap errors                                                      |
| **Monthly**         | Full crawl diff vs. last month, CWV field data, structured data enhancements, broken internal links, new orphan pages, index-to-sitemap ratio      |
| **Quarterly**       | Full technical audit, log file analysis, redirect-chain cleanup, hreflang validation, competitor technical benchmark, AI-crawler robots.txt review |
| **Event-triggered** | After any redesign, migration, CMS/plugin update, CDN change, or confirmed Google update                                                           |

---

## Reference: the numbers, in one place

| Item                         | Value                                           |
| ---------------------------- | ----------------------------------------------- |
| Title tag                    | 50–60 chars / ~580–600 px desktop               |
| Meta description             | 120–160 chars / ~920 px desktop, ~680 px mobile |
| LCP                          | ≤ 2.5 s (p75)                                   |
| INP                          | ≤ 200 ms (p75)                                  |
| CLS                          | ≤ 0.1 (p75)                                     |
| CrUX window                  | 28 days rolling                                 |
| Sitemap                      | 50,000 URLs / 50 MB uncompressed                |
| Sitemap index                | up to 50,000 sitemaps                           |
| URL length in sitemap        | ≤ 2,048 chars                                   |
| robots.txt size Google reads | 500 KiB                                         |
| Max redirect hops            | 1 (Google follows ~10)                          |
| Click depth for key pages    | ≤ 3                                             |
| TTFB target                  | < 600 ms (ideal < 200 ms)                       |
| DOM size target              | < 1,500 nodes                                   |
| Long task threshold          | 50 ms                                           |
| Tap target                   | ≥ 48 px                                         |
| Open Graph image             | 1200 × 630                                      |
| Healthy sitemap index rate   | > 80%                                           |

---

## Deliverable format

Unless the user asks otherwise, deliver an audit as:

1. **Executive summary** — 3–5 sentences. What's broken, what it's costing, what to do first. No jargon.
2. **Priority matrix** — a table: Issue | Class (visibility/interpretation/priority) | Affected URLs | Estimated impact | Effort | Owner.
3. **Findings by section**, each with: what was found, how it was verified (the exact check), why it matters, the specific fix (with code where applicable), and the acceptance test.
4. **Quick wins** — anything under 2 hours of work.
5. **Roadmap** — 30 / 60 / 90 days.
6. **Baseline metrics** to re-measure against.

When the audit is large or the user will act on it over time, produce it as a document artifact or file. When it's a focused question, answer in the reply.

**Tone:** be specific and falsifiable. "142 product URLs canonical to a 404 at /collections/archive" beats "canonical issues found." Always name the URL count and give an example URL. Never pad a report with generic best practices the site already follows.

---

## Tooling

| Job                 | Tools                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------ |
| Site crawl          | Screaming Frog SEO Spider, Sitebulb, Ahrefs Site Audit, Semrush Site Audit, JetOctopus / Botify (enterprise) |
| Index & crawl truth | Google Search Console, Bing Webmaster Tools, server logs                                                     |
| Performance         | PageSpeed Insights, Lighthouse, Chrome DevTools, WebPageTest, CrUX API/BigQuery, DebugBear, SpeedCurve       |
| Structured data     | Rich Results Test, Schema Markup Validator (schema.org)                                                      |
| Rendering           | GSC URL Inspection live test, DevTools "Copy outerHTML", `curl` vs rendered diff                             |
| hreflang            | hreflang tag testing tools, Screaming Frog's hreflang report                                                 |
| Redirects & headers | `curl -IL`, httpstatus.io, Redirect Path extension                                                           |
| SERP preview        | Any pixel-width title/description preview tool                                                               |

**Verification habits:** `curl -I <url>` for headers; `curl -sL <url> \| grep -i canonical` for the raw-HTML canonical; compare against the rendered DOM. Trust the response, not the crawler's summary.

---

## References

- Google Search Central — Documentation: https://developers.google.com/search/docs
- Search Essentials (technical requirements & spam policies): https://developers.google.com/search/docs/essentials
- Canonicalisation — how to specify a canonical: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Fix canonicalisation issues: https://developers.google.com/search/docs/crawling-indexing/canonicalization-troubleshooting
- robots.txt introduction: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- How Google interprets robots.txt: https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec
- Robots meta tag / X-Robots-Tag: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- Sitemaps — build and submit: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Large sitemaps & sitemap index: https://developers.google.com/search/docs/crawling-indexing/sitemaps/large-sitemaps
- Redirects and Google Search: https://developers.google.com/search/docs/crawling-indexing/301-redirects
- JavaScript SEO basics: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- Fix search-related JavaScript problems: https://developers.google.com/search/docs/crawling-indexing/javascript/fix-search-javascript
- Mobile-first indexing: https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing
- Crawl budget: https://developers.google.com/crawling/docs/crawl-budget
- Faceted navigation: https://developers.google.com/crawling/docs/faceted-navigation
- HTTP status codes and Google's crawlers: https://developers.google.com/crawling/docs/http-status-codes
- Title links: https://developers.google.com/search/docs/appearance/title-link
- Snippets & meta descriptions: https://developers.google.com/search/docs/appearance/snippet
- Core Web Vitals: https://developers.google.com/search/docs/appearance/core-web-vitals
- Page experience: https://developers.google.com/search/docs/appearance/page-experience
- Structured data general guidelines: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- Structured data feature gallery: https://developers.google.com/search/docs/appearance/structured-data/search-gallery
- Localised versions / hreflang: https://developers.google.com/search/docs/specialty/international/localized-versions
- Managing multi-regional sites: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
- Site move with URL changes: https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes
- Debug traffic drops: https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops
- **Optimizing for generative AI on Google Search**: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Evaluating third-party SEO advice: https://developers.google.com/search/docs/fundamentals/third-party-seo
- Latest documentation updates (check this every quarter): https://developers.google.com/search/updates
- Google ranking updates history: https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history
- web.dev — Core Web Vitals: https://web.dev/explore/learn-core-web-vitals
- web.dev — Optimize LCP: https://web.dev/articles/optimize-lcp
- web.dev — Optimize INP: https://web.dev/articles/optimize-inp
- web.dev — Optimize CLS: https://web.dev/articles/optimize-cls
- web.dev — Agent-friendly website best practices: https://web.dev/articles/ai-agent-site-ux
- Sitemaps protocol: https://www.sitemaps.org/protocol.html
- RFC 9309 (Robots Exclusion Protocol): https://www.rfc-editor.org/rfc/rfc9309.html
- Schema.org: https://schema.org
- IndexNow: https://www.indexnow.org
- Bing Webmaster Guidelines: https://www.bing.com/webmasters/help/webmasters-guidelines-30fba23a

---

## Guardrails

- **Verify before asserting.** SEO thresholds and Google behaviour change. Before stating a current spec (a threshold, a supported feature, a retired rich result), check Google's documentation changelog rather than relying on memory.
- **Never promise rankings.** State expected direction and the mechanism, not a number.
- **Distinguish confirmed from inferred.** Label anything that comes from community consensus rather than Google documentation.
- **Don't recommend anything that risks a manual action:** cloaking, hidden text, doorway pages, sneaky redirects, marked-up content that isn't visible, fabricated reviews, scaled content abuse.
- **Prefer fewer, higher-confidence recommendations** over exhaustive lists. An audit nobody implements has zero value.
