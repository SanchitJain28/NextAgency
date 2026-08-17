# FlexForm Athletics — Portfolio Page SEO Strategy

Verified via DataForSEO (IN, UK, US), OpenSEO Pro + SAM chat agent. Self-initiated/concept project — not a paid client engagement (see positioning note below).

---

## Keyword Verification Summary

Tested across 3 markets. Documenting all findings so this isn't re-tested later.

### IN/en

| Keyword                     | Volume | KD  | Intent        | Status                                |
| --------------------------- | ------ | --- | ------------- | ------------------------------------- |
| `shopify clothing store`    | 210    | 28  | Navigational  | Real, but wrong intent                |
| `shopify discount code app` | 70     | —   | Commercial    | Real, marginal, recent spike unproven |
| `shopify size guide app`    | 10     | —   | Informational | Negligible                            |
| `shopify activewear store`  | —      | —   | —             | Dead                                  |
| `shopify athleisure store`  | —      | —   | —             | Dead                                  |
| `shopify coupon popup`      | —      | —   | —             | Dead                                  |
| `shopify quick add to cart` | —      | —   | —             | Dead                                  |

### UK vs US comparison

| Keyword                     | IN                 | UK                | US                                   |
| --------------------------- | ------------------ | ----------------- | ------------------------------------ |
| `shopify clothing store`    | 210/mo, KD 28, nav | 70/mo, KD 15, nav | 390/mo, KD 32, nav                   |
| `shopify discount code app` | 70/mo, commercial  | 10/mo, commercial | 320/mo, KD 64, $7.49 CPC, commercial |
| `shopify quick add to cart` | Dead               | 10/mo, nav        | 10/mo, KD 24, nav                    |
| `shopify size guide app`    | 10/mo, info        | 10/mo, info       | 10/mo, info, $19.07 CPC anomaly      |
| `shopify activewear store`  | Dead               | Dead              | Dead                                 |
| `shopify athleisure store`  | Dead               | Dead              | Dead                                 |
| `shopify coupon popup`      | Dead               | Dead              | Dead                                 |

---

## Decision: No Dedicated Primary Keyword — Portfolio/Authority Page Only

Two candidates surfaced with real volume, both rejected:

- **`shopify clothing store`** — real, low-difficulty volume in every market tested (210 IN / 70 UK / 390 US), but **Navigational intent in all three markets, no exception.** Searchers want to browse existing Shopify-built clothing stores, not hire a developer to build one. A case study page cannot satisfy that intent even if it ranked — same trap identified on `shopify bundle app` and `shopify subscription app` for the Iron Crate page. Low KD does not override wrong intent.
- **`shopify discount code app` (US)** — genuinely Commercial intent, real volume (320/mo) and real ad spend behind it ($7.49 CPC) — the one legitimately interesting number in this whole research pass. **Deliberately not pursued** because it would require targeting US searchers on a single portfolio page, in isolation from the rest of the site's consistent India-first positioning. Market expansion is a whole-site business decision, not a page-by-page one — same reasoning applied when UK data was found for Iron Crate. **Worth revisiting only if/when a deliberate decision is made to build a dedicated `/apps/shopify-discount-code-app` (or similar) service page targeting US clients.**

Vertical-specific terms (`activewear store`, `athleisure store`) and feature terms (`coupon popup`, `quick add to cart`, `size guide app`) are dead or negligible in every market tested — consistent with the pattern seen on Iron Crate and Industrial Supply Direct: niche vertical/feature phrasing in this space largely doesn't exist as real search queries.

**Conclusion:** Third portfolio page in a row to reach this same verdict. This is now the expected default for case-study pages on this site, not something to hopefully re-test each time — portfolio pages earn SEO value through internal linking from keyword-carrying service pages, not standalone rankings.

---

## Content Integrity Issues to Fix Before Publishing

1. **Fabricated social proof.** "4.8★ from 1,590 reviews," "108-review breakdown," "2 lakh+ Happy customers," and the "Women's Running Awards Editor's Choice" claim all read as real, verifiable brand metrics. Since this is a self-initiated concept project, these numbers are fabricated and must be removed or clearly reworked as illustrative UI content, not asserted as real outcomes — same rule applied to Iron Crate's brand-history claims.
2. **Real Instagram handles used without consent.** `@sanaabanana_`, `@ladylolita__`, `@shikhamehra` appear to be real, findable Instagram usernames tagged as "influencer" partners for a brand that doesn't exist. This is a real risk — it implies an endorsement/partnership that never happened. Replace with clearly fictional placeholder handles.
3. **Check "KICA" for brand collision.** The promo copy ("KICA Pink Love Sale," "our KICA Chicas") uses a specific brand name — verify this isn't an existing real activewear/fitness brand before publishing. If it is, rename to avoid any appearance of impersonation.

---

## Page Structure & On-Page SEO

**Title tag:** `FlexForm Athletics — Custom Shopify Activewear Storefront Case Study | ScaleFront`
(Descriptive, not keyword-optimized for ranking — same approach as Iron Crate and Industrial Supply Direct.)

**Meta description:** One honest sentence describing the actual build — CRO architecture, fit/fabric assurance modules, in-drawer upsell cart. No fabricated claims, no real metrics that don't exist.

**H1:** `FlexForm Athletics` (project name — case study convention, consistent with other portfolio pages)

**Body sections (H2s), based on the real architecture breakdown:**

1. The problem this explores (activewear-brand fit confidence and conversion friction — natural framing, no forced keyword)
2. Homepage discovery & category architecture (visual story strip, campaign carousel — descriptive, not keyword-driven)
3. Product detail page architecture (fabric assurance badges, fit gauge, coupon drawer — natural mention of "clothing store" or "activewear" is fine as accurate description, not as a ranking target)
4. The friction-free slide-out cart & upsell system (framed as design intent, not claimed AOV/conversion result, per site-wide "no unverified stats" rule)

**Image alt text:** Unique per screenshot, e.g. `"FlexForm Athletics product page with fit size gauge and fabric assurance badges"`.

**Internal linking:**

- Link to `/services/shopify-theme-development` (verified real keyword, Score 8, IN — carries actual SEO weight)
- Link back to homepage and Featured Work index

---

## Positioning & Content Integrity Rules (carried over from site-wide standards)

1. No fabricated metrics — see issues flagged above, must be resolved before publishing.
2. No implied client relationship — build/creator voice throughout ("we built," "this project explores"), never "the client needed."
3. "We" language, consistent with site-wide positioning.
4. No shared boilerplate with the other 7 portfolio pages — this page's coupon-drawer, fit-gauge, and influencer-lookbook mechanics are distinctive enough that overlap risk is low, but check internal repetition (this page alone reuses "1-click," "quick-add," and "upsell" language across multiple sections — vary phrasing within the page).
5. Frame all outcome language as design intent, not claimed results.

---

## Schema

`CreativeWork` structured data. Do not use `Product` or `Review` schema — no real transaction or customer review exists.

---

## Search Budget Used

~14 searches spent verifying this page's keywords across 3 markets. Confirms the now-established project pattern: portfolio/case-study pages in this niche consistently show either dead vertical/feature terms or real-volume terms with mismatched (Navigational/Transactional) intent. Default expectation for remaining portfolio pages (Maison Luxe, 360-Alpha, Scalefront app, Pairly app) should be the same — verify quickly, don't expect a standalone SEO win, move on.
