---
name: scalefront-seo-strategy
description: Use for any SEO keyword research, keyword targeting, page/section keyword mapping, or SEO strategy decision on scalefront.io — including choosing a primary/secondary keyword for a new page, deciding what to target on the homepage vs a service page vs a portfolio page, running or interpreting OpenSEO (DataForSEO) keyword research, or writing/updating an SEO.md strategy file. Trigger this whenever the user mentions "SEO," "keywords," "rank," "search volume," "difficulty," "OpenSEO," or asks what a new page should target — even if they don't explicitly ask for a "strategy." Do not guess or estimate keyword volume/difficulty from general knowledge — this skill's core rule is that every keyword target must be verified against real data first.
---

# ScaleFront SEO Strategy

Rules for keyword research, keyword targeting, and page-level SEO decisions on scalefront.io, a solo Shopify freelance practice based in Gurgaon, India, targeting DTC brands (primarily India, open to global).

## 1. Never estimate or guess keyword volume/difficulty — always verify

This is the single most important rule in this skill. Every keyword target on this site must come from actual OpenSEO (DataForSEO) data, India location, not from intuition or "obvious" service-description phrasing. This project's own history is the proof: the original keyword doc estimated `shopify development agency` at 5K–10K/month volume; real data showed 590. Repeated "obvious" long-tail phrases came back with **zero standalone volume**:

- `shopify custom development`
- `shopify plus migration`
- `shopify development agency gurgaon`
- `shopify developer vs agency`
- `shopify b2b development`
- `shopify wholesale store development`
- `shopify quote request`

While shorter head terms carried the real volume that was hidden inside those diluted phrases:

- `hire shopify developer` — 720 vol, Score 28, Comm intent
- `shopify b2b` — 260 vol, Score 29, Comm intent (found only after the long-tail "shopify b2b development" came back empty)
- `shopify theme development` — 320 vol, Score 8, Comm intent

**Process for any new page:**

1. Search the "obvious" service-description phrase first if that's the natural instinct, but don't stop there.
2. If it returns no standalone volume (OpenSEO silently substitutes a generic fallback term — e.g. plain "Shopify" — when this happens; watch for this, it's a tell, not a real result), retry with a shorter head term (drop "development," "services," "company," etc. and just use the core 2-3 word phrase).
3. Only commit a keyword to a page's H1/title tag once it has a real Volume, Score, and ideally "Comm" (commercial) intent — not "Nav" (navigational, e.g. brand/login searches) or pure "Info" intent.
4. Log dead-end searches (term + result) in that page's SEO.md so they aren't re-tested wastefully later.

## 2. Reading OpenSEO results correctly

- **Score = keyword difficulty** (0–100, lower is easier). Prioritize low-Score, real-Comm-intent keywords over high-volume Nav-intent ones.
- **Intent tags matter more than raw volume.** A 590-volume Nav-intent term (e.g. `shopify development agency`, tagged Nav) converts worse than a 720-volume Comm-intent term (e.g. `hire shopify developer`) — Nav intent often means people navigating to a known brand/portal, not shopping for a service.
- **Watch for silent fallback substitution.** If the head term shown in results doesn't match what you searched (e.g. you searched "shopify plus migration" but the panel shows "Shopify" with 673,000 volume and a list of unrelated Login/Admin/Partner keywords), that means your exact phrase had negligible volume and OpenSEO broadened the seed. Don't mistake the fallback list for real data about your original query.
- **CPC is a secondary buyer-intent signal.** High CPC (e.g. `hire shopify developer` at $56 in the US search) indicates advertisers believe real budget sits behind that search — useful as a tiebreaker between similarly-scored keywords, but not a primary metric for an organic strategy.
- Always search with **location = India** unless the user explicitly wants global/US data. US and India volumes and CPCs differ substantially (e.g. `shopify development agency`: $31.59 CPC in the US vs $1.71 in India, similar volume) — don't mix data from different locations in the same comparison.

## 3. Keyword tier system (apply to every page)

- **Tier 1 — Primary**: one keyword only, in H1/title tag/meta description. Never target multiple high-competition primary keywords on one page — this causes dilution (established early in this project as the core mistake of the original keyword doc).
- **Tier 2 — Secondary**: 2-4 keywords in H2s, subheadings, service cards.
- **Tier 3 — Zero/near-zero difficulty**: prioritize these wherever found — genuine easy-ranking opportunities (e.g. `shopify development company in india` and `shopify website development cost in india` both scored 0 difficulty). Give these dedicated body-copy or FAQ placement even if volume is modest.
- **Tier 4 — Long-tail/FAQ support**: natural mentions only, or genuine FAQ answers for trust-building (not necessarily keyword-targeted if the phrase itself has no volume — see Section 4).
- **Explicitly excluded**: vertical terms (fashion, beauty, jewelry, etc.) and tech-stack terms (hydrogen, graphql, functions, etc.) don't belong on the homepage or general service pages — reserve them for dedicated portfolio/case-study pages where that specific vertical or stack is actually demonstrated.

## 4. FAQ and comparison content: write for trust, not always for traffic

Comparison/evaluation-stage phrases (`shopify developer vs agency`, `how to vet a shopify developer`, `is hiring a shopify agency worth it`) consistently return zero or negligible standalone search volume. **Still write genuine, specific FAQ answers to these questions** — they matter for on-site conversion and trust-building for visitors who already arrived via other keywords — but don't expect organic search traffic from the exact phrase, and don't force it as an H2 SEO target.

## 5. Page-type keyword allocation

- **Homepage**: one Tier 1 primary (currently `hire shopify developer`), Gurgaon/local relevance via subheading + LocalBusiness schema only — never as H1 (verified: `shopify development agency gurgaon` has no standalone search volume, and locking a national-scope page to a single city narrows it unnecessarily for out-of-city visitors).
- **Service pages** (e.g. `/shopify-b2b-development`): verified head-term primary specific to that service (e.g. `shopify b2b`), built to reinforce a matching portfolio page via internal linking.
- **Portfolio/case-study pages**: vertical or project-type keywords excluded from the homepage live here (e.g. `shopify b2b`, `shopify app development`). If a project's natural keyword returns no real volume after testing 2-3 phrasings, don't force one — write the page for portfolio/authority value and internal linking instead, and note this in that page's SEO.md.

## 6. Deliverable format

When asked to produce or update SEO documentation for a page, write it as an `SEO.md` (or `[page-name]-seo.md`) file containing:

1. Keyword verification summary (including dead ends tested, so they aren't retested)
2. Verified target table (keyword / volume / score / intent) split into primary/secondary/excluded
3. Section-by-section or on-page mapping (title tag, meta, H1, H2s, image alt text, internal links)
4. Any positioning or content-integrity notes relevant to that page (cross-reference the content-writing skill for these — don't duplicate full rules here, just flag anything page-specific)

## 7. Budget awareness

OpenSEO/DataForSEO searches are a finite monthly resource. Before spending a search, check whether the answer is already known from a prior search in this project (many "obvious" phrases have already been tested and logged — see Section 1's dead-end list). Prioritize verifying primary/secondary keywords for new pages first; save volume-checking of minor secondary variants for when budget is clearly not a constraint.
