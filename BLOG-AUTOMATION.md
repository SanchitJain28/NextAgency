# Blog Automation Strategy

**Goal**: SEO-driven organic growth to promote Shopify apps and acquire clients.
**Timeline**: 6-12 months minimum before meaningful organic traffic.
**Cadence**: 2-3 posts/week (existing 1-year-old domain allows the higher end sooner).
**Core principle**: Competitor-gap content is the floor, not the ceiling. Every post needs a differentiation angle (real product data, screenshots, case studies, opinions) or it caps out at parity ranking.

---

## Pipeline Overview

```
1. Topic Research        →  what to write about
2. Competitor Gap Analysis →  what to include / what to do better
3. Outline Generation      →  structure before drafting
4. Draft Generation        →  DeepSeek-V4-Pro writes the post
5. Human Review Gate       →  non-negotiable QC + edit
6. SEO Formatting          →  meta, slug, internal links, schema
7. Publish                 →  push to CMS
8. Performance Tracking    →  feed real data back into step 1
```

Each stage is a separate script/module. State lives in SQLite. No stage auto-advances to the next without an explicit status flag — especially the review gate.

---

## Stage 1: Topic Research

**Input**: nothing (cold start) or Search Console data (after month 1+)
**Output**: ranked list of candidate keywords/topics, stored in `topics` table

**What it does**:

- Pulls existing impressions/queries from Google Search Console API — surfaces keywords you already get impressions for but rank poorly on (page 2-3). This is the highest-priority list since you already have partial relevance signal.
- Pulls trend/volume signal from Google Trends (`google-trends-api`) and Google Keyword Planner for fresh topic ideas tied to your Shopify apps' niche.
- Filters/scores candidates by: relevance to your app's niche (manual tag or keyword match), estimated difficulty (proxy: how established are top-10 ranking domains for that term), and content gap potential (carried from Stage 2).
- Avoids scattergun topics — every topic should map to a defined content cluster (e.g., if your app is for inventory management, clusters might be "inventory forecasting," "stock management workflows," "Shopify inventory apps comparison").

**Output schema** (`topics` table): `id, keyword, cluster, search_console_impressions, est_difficulty, priority_score, status (pending/selected/done)`

---

## Stage 2: Competitor Gap Analysis

**Input**: a selected topic/keyword from Stage 1
**Output**: structured gap report — what top-ranking pages cover, what they miss, word counts, heading structures

**What it does**:

- Takes the keyword, identifies top 5-10 ranking URLs (manual search or lightweight scrape of SERP — no paid API needed).
- Fetches each page via `axios`/`cheerio` (static HTML). Falls back to Playwright only if content is confirmed JS-rendered (check `view-source` first — don't default to a headless browser).
- Extracts: H1-H3 structure, approximate word count, presence/absence of comparison tables, code samples, screenshots, FAQs, pricing mentions.
- Diffs this against a checklist — flags subtopics covered by 3+ competitors that you don't have planned, and flags subtopics _no_ competitor covers (your differentiation opportunity).
- Respects robots.txt, adds delay between requests, doesn't scrape sites whose ToS explicitly forbids it.

**Output schema** (`gap_reports` table): `topic_id, competitor_urls (json), common_subtopics (json), missing_subtopics (json), avg_word_count, differentiation_angle (manual or LLM-suggested)`

**Critical addition over pure gap-filling**: this stage should also flag a slot for _your_ unique input — a place in the outline reserved for app screenshots, real usage data, or an opinionated take competitors don't have. If this slot is empty, the post is parity content, not authority content.

---

## Stage 3: Outline Generation

**Input**: topic + gap report
**Output**: structured outline (JSON), stored as draft skeleton

**What it does**:

- Prompts DeepSeek-V4-Pro with: target keyword, common subtopics (must include), missing subtopics (opportunity), and an explicit instruction to reserve one section for original product insight/data tied to your Shopify app.
- Forces structured JSON output (title, meta description draft, H2/H3 list, target word count, suggested internal links to existing posts/app pages) — avoids freeform parsing later.

---

## Stage 4: Draft Generation

**Input**: approved outline
**Output**: full draft (markdown), status `pending_review`

**What it does**:

- Prompts DeepSeek-V4-Pro section-by-section (better quality control than one giant generation) using the outline as scaffold.
- Explicit instructions: mention the Shopify app naturally where relevant (not stuffed), avoid generic filler, write at least 1200 words of substantive (not padded) content, maintain a consistent voice/tone.
- Output saved as markdown file + inserted into SQLite with status `pending_review`.

---

## Stage 5: Human Review Gate (non-negotiable)

**Input**: draft in `pending_review` status
**Output**: status changed to `approved` or `rejected`, edited markdown

**What it does**:

- Draft exported to a markdown file or Google Doc for manual editing.
- You review for: factual accuracy, voice, whether the differentiation section actually adds value (not just AI filler), natural (not forced) app mentions, and general "would a human searching this be glad they landed here" test.
- Status flag in SQLite flips only on explicit manual action — nothing auto-publishes.
- This is the step that protects you from scaled-content-abuse flags. Skipping it, even occasionally, is the single biggest risk to the whole pipeline's long-term survival.

---

## Stage 6: SEO Formatting Pass

**Input**: approved draft
**Output**: publish-ready payload (title, meta description, slug, body HTML/markdown, internal links, alt text, schema markup)

**What it does**:

- Finalizes meta title/description (within character limits).
- Generates slug from title.
- Inserts internal links — varied anchor text, not the same app page linked from every post (avoids looking like a link farm).
- Adds alt text for any images.
- Adds schema markup (Article/BlogPosting JSON-LD) if your CMS supports custom head injection.

---

## Stage 7: Publish

**Input**: finalized payload
**Output**: live URL, status `published`

**What it does**:

- Pushes to CMS via API — Shopify Admin API (`articles` under a Blog resource) if hosted on Shopify, or your CMS's equivalent.
- Records published URL + timestamp in SQLite.
- Enforces cadence — script checks last publish date and topic queue, doesn't publish in bursts even if multiple drafts are sitting "approved."

---

## Stage 8: Performance Tracking

**Input**: nothing (runs independently on a schedule, e.g., weekly)
**Output**: updated metrics on `topics`/`published_posts` tables

**What it does**:

- Pulls impressions, clicks, average position per published URL from Search Console API.
- Feeds back into Stage 1 — topics with rising impressions but low position become high-priority candidates for a follow-up post or an update to the existing one (refreshing > always writing new).
- Over months, this is what shifts the pipeline from "guessing topics" to "topics validated by real data."

---

## What This Strategy Does NOT Include (and why)

- **No paid SEO SaaS** (Ahrefs/SEMrush/DataForSEO) — replaced by Search Console + Keyword Planner + Trends, all free.
- **No daily publishing** — frequency isn't the ranking lever; consistency + quality + differentiation is. Daily AI-output without proportional review time is how sites get hit by scaled-content-abuse signals.
- **No custom admin UI for review** — markdown/Google Doc + a status flag is sufficient at this scale; building a UI is solved-problem effort better spent on content quality.
- **No queue/worker infrastructure** — GitHub Actions cron at 2-3x/week doesn't need Redis, workers, or a persistent server.

## Honest Risk Note

This pipeline gets you indexed, structured, and covering the right topics. It does **not** by itself guarantee rankings in a competitive niche — that typically also requires some backlink acquisition or distribution (sharing in relevant communities, etc.) alongside publishing. Treat "publish consistently" as necessary, not sufficient.
