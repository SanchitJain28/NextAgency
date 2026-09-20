# Implementation Plan: Resolving 1,295 Issues from Updated SEO Audit

**Date**: 2026-09-20  
**Target**: Resolve all 1,295 crawler issues in `audit-issues_updated.json` across 276 URLs on `https://www.scalefront.io`.

---

## User Review Required

> **301 Permanent Redirects Confirmation**:
> We will add permanent (301) redirects in `next.config.ts` for:
> - `/services/store-audit-consulting` ➔ `/services/audit-consulting`
> - `/services/theme-customization` ➔ `/services/theme-development`
> - `/about-us` ➔ `/about`
> - `/privacy` ➔ `/privacy-policy`
> - `/terms` ➔ `/terms-of-service`
> - 9 legacy blog post slugs (e.g. `/blog/conversion-optimization-guide`) ➔ their active blog counterparts.
> 
> **Faceted Blog Parameter Crawling**:
> In `src/app/robots.ts`, we will disallow `/blog?*` so crawlers do not waste crawl budget exploring endless tag/category combinations. Users can still click and use tag filters normally.

---

## Problem & Root Cause Breakdown

An in-depth analysis of the 1,295 issues in `audit-issues_updated.json` shows they map directly to 6 systemic root causes:

| Root Cause | Affected Issues | Impact |
| :--- | :--- | :--- |
| **1. Faceted Blog Filter Parameters (`?tag=`, `?category=`)** | 211 duplicate titles, 211 duplicate descriptions, 211 duplicate content, 211 title too long | **844 issues** |
| **2. RSS Feed 500 Error (`/blog/rss.xml`)** | 212 broken internal links (linked from all blog pages), 1 server error | **213 issues** |
| **3. Canonical Domain Missing `www.`** | Blog posts declaring canonical on `https://scalefront.io` rather than `https://www.scalefront.io` | **44 issues** |
| **4. Broken Internal Links in Markdown & Missing Redirects** | Dead links to old service routes, legal pages, and renamed blog posts | **32 issues** |
| **5. Multiple `<h1>` Tags in Blog Posts** | Hero title generates `<h1>` and markdown `# Heading` generates a second `<h1>` | **17 issues** |
| **6. Meta Descriptions Length & Orphan Pages** | Descriptions > 160 chars and sub-services unlinked in footer | **145 issues** |
| **TOTAL** | | **1,295 issues** |

---

## Proposed Changes

### 1. Crawl Optimization & Blog Canonicalization

#### `src/app/robots.ts`
- Add `'/blog?*'` to `disallow` for all user agents.
- Ensures Googlebot and other crawlers don't consume crawl budget on parameterized filter pages.

#### `src/app/(app)/blog/page.tsx`
- Set explicit canonical URL to `https://www.scalefront.io/blog`.
- Update OpenGraph and RSS links to strictly use `https://www.scalefront.io`.

#### `src/app/(app)/blog/[slug]/page.tsx`
- Change default fallback `siteUrl` from `https://scalefront.io` to `https://www.scalefront.io`.
- Add `rel="nofollow"` on tag links and category breadcrumbs so crawlers do not follow faceted URL parameters.

---

### 2. Resilient RSS Feed Route

#### `src/app/(app)/blog/rss.xml/route.ts`
- Await `getAllPosts()`: `const posts = await getAllPosts();` (currently unawaited, causing `posts.map` to crash with 500 error).
- Wrap in try/catch with fallback to `getMDPosts()` so the RSS feed can never fail even if database queries encounter an issue.
- Ensure all URLs inside RSS XML use `https://www.scalefront.io`.

---

### 3. Heading Hierarchy Normalization

#### `src/components/blog/MarkdownContent.tsx`
- Configure `h1` in `ReactMarkdown` components to render as an `<h2>`.
- Preserves the blog post hero title as the single, authoritative `<h1>` on every blog post, instantly eliminating all 17 `multiple-h1` warnings.

---

### 4. 301 Permanent Redirects & Markdown Link Updates

#### `next.config.ts`
Add redirects in the `redirects()` array:
- `/services/store-audit-consulting` ➔ `/services/audit-consulting` (permanent: true)
- `/services/theme-customization` ➔ `/services/theme-development` (permanent: true)
- `/privacy` ➔ `/privacy-policy` (permanent: true)
- `/terms` ➔ `/terms-of-service` (permanent: true)
- `/about-us` ➔ `/about` (permanent: true)
- 9 legacy blog post URLs pointing to their live counterpart slugs.

#### `src/content/blog/*.md`
- Run a surgical link replacement script across all blog markdown files to update all 21 broken internal links to their active, canonical paths.

---

### 5. Navigation & Orphan Pages Resolution

#### `src/components/header-footer/Footer.tsx`
- Add links to sub-services in the footer under Services/Solutions:
  - `/services/mobile-apps`
  - `/services/backend-api`
  - `/services/custom-features`
  - `/services/integrations`
- Add link to `/upsell-cross-sell-app-shopify` and its privacy policy.
- Resolves all 6 `orphan-page` warnings.

---

### 6. Meta Description & Title Length Trimming

#### `src/content/blog/*.md`
- Batch-trim the 36 frontmatter `description` fields exceeding 160 characters down to 140–155 characters.
- Trim overly verbose frontmatter titles that exceed search snippet limits.

---

## Verification Plan

### Automated Verification Script
1. Create `scratch/verify-updated-audit.mjs` that loads all 1,295 issues from `audit-issues_updated.json` and evaluates each against the codebase and dev server:
   - Check that `/blog/rss.xml` returns 200 OK and valid XML.
   - Check that all 13 previously broken URLs return 301 redirects or 200 OK.
   - Verify that `/blog` and `/blog/[slug]` output canonical tags with `https://www.scalefront.io`.
   - Verify that blog post pages contain exactly one `<h1>`.
   - Verify that `robots.txt` disallows `/blog?*`.
2. Run `npm run build` in `/Users/sanchitjain/vscode_files/NextAgency/next-agency` to ensure 100% clean compilation with 0 errors.

### Manual Verification
- Curl `/blog/rss.xml` to verify it returns `HTTP/1.1 200 OK`.
- Curl `/robots.txt` to verify the disallow rules.
- Test blog post pages in browser.
