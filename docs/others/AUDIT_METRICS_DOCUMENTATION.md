# Earn Auditor - Metrics Data Source Documentation

This document details how each metric is collected and which APIs/methods are used.

## 1. SEO Analysis

### Meta Title & Description
- **Source**: HTML `<title>` tag and `<meta name="description">` tag
- **Method**: Cheerio HTML parsing
- **Validation**: Length check (Title: 50-60 chars, Description: 150-160 chars)
- **File**: `src/lib/auditors/seoAuditor.ts`

### Heading Structure (H1, H2, H3)
- **Source**: HTML heading tags `<h1>`, `<h2>`, `<h3>`, etc.
- **Method**: Cheerio HTML parsing
- **Validation**: H1 uniqueness, hierarchical order
- **File**: `src/lib/auditors/seoAuditor.ts`

### Image Alt Text
- **Source**: `alt` attribute on `<img>` tags
- **Method**: Cheerio HTML parsing
- **Validation**: Presence and quality check
- **File**: `src/lib/auditors/seoAuditor.ts`

### Open Graph & Twitter Cards
- **Source**: `<meta property="og:*">` and `<meta name="twitter:*">` tags
- **Method**: Cheerio HTML parsing
- **Validation**: Required tags present (og:title, og:description, og:image, twitter:card)
- **File**: `src/lib/auditors/seoAuditor.ts`

### Canonical URL
- **Source**: `<link rel="canonical">` tag
- **Method**: Cheerio HTML parsing
- **Validation**: Presence and correct format
- **File**: `src/lib/auditors/seoAuditor.ts`

### Robots.txt & Sitemap
- **Source**: Direct HTTP fetch to `/robots.txt` and `/sitemap.xml`
- **Method**: HTTP GET request
- **Validation**: File exists and is properly formatted
- **File**: `src/lib/auditors/technicalSeoAuditor.ts`

### Schema Markup
- **Source**: `<script type="application/ld+json">` tags
- **Method**: JSON parsing from HTML
- **Validation**: Valid JSON and proper schema types
- **File**: `src/lib/auditors/seoAuditor.ts`

### URL Structure
- **Source**: Current page URL
- **Method**: URL parsing
- **Validation**: Length, special characters, keyword presence
- **File**: `src/lib/auditors/seoAuditor.ts`

### Keyword Density
- **Source**: Extracted text content from HTML
- **Method**: Text analysis and word frequency calculation
- **File**: `src/lib/auditors/contentAnalysisAuditor.ts`

---

## 2. Performance Audit

### Page Load Time
- **Source**: Server-side fetch timing
- **Method**: `Date.now()` before and after fetch
- **Validation**: Compare against benchmarks (< 1s good, < 3s acceptable)
- **File**: `src/lib/utils/fetchPage.ts`

### Image Optimization
- **Source**: `<img>` tags, src attributes
- **Method**:
  - Check file extensions (.webp, .avif preferred)
  - Check for `loading="lazy"` attribute
  - Optionally fetch file size via HEAD request
- **File**: `src/lib/auditors/performanceAuditor.ts`

### JS & CSS File Size
- **Source**: `<script src>` and `<link rel="stylesheet">` tags
- **Method**: HTTP HEAD requests to get Content-Length
- **Validation**: Total size benchmarks (JS < 500KB, CSS < 100KB)
- **File**: `src/lib/auditors/performanceAuditor.ts`

### HTTP Requests Count
- **Source**: Count of external resources in HTML
- **Method**: Cheerio parsing of `<script>`, `<link>`, `<img>` tags
- **File**: `src/lib/auditors/performanceAuditor.ts`

### Compression Detection
- **Source**: HTTP response headers
- **Method**: Check `Content-Encoding` header for gzip/br
- **File**: `src/lib/auditors/performanceAuditor.ts`

### Browser Caching
- **Source**: HTTP response headers
- **Method**: Check `Cache-Control` and `Expires` headers
- **File**: `src/lib/auditors/performanceAuditor.ts`

### Render-Blocking Resources
- **Source**: `<script>` and `<link>` tags without async/defer
- **Method**: Cheerio parsing to find blocking resources
- **File**: `src/lib/auditors/performanceAuditor.ts`

### Third-Party Scripts
- **Source**: External `<script>` tags
- **Method**: URL parsing to identify external domains
- **File**: `src/lib/auditors/performanceAuditor.ts`

### Mobile Responsiveness
- **Source**: Viewport meta tag, CSS media queries
- **Method**: HTML parsing
- **File**: `src/lib/auditors/performanceAuditor.ts`

---

## 3. Technical SEO

### SSL/HTTPS Verification
- **Source**: URL protocol
- **Method**: Check if URL starts with https://
- **File**: `src/lib/auditors/securityAuditor.ts`

### Mobile-Friendly Test
- **Source**: Viewport meta tag, responsive design indicators
- **Method**: HTML parsing
- **File**: `src/lib/auditors/technicalSeoAuditor.ts`

### Structured Data Validation
- **Source**: JSON-LD schema markup
- **Method**: Parse and validate JSON structure
- **File**: `src/lib/auditors/technicalSeoAuditor.ts`

### XML Sitemap Analysis
- **Source**: Direct fetch of sitemap.xml
- **Method**: HTTP GET and XML parsing
- **File**: `src/lib/auditors/technicalSeoAuditor.ts`

### Broken Links Detection
- **Source**: All `<a href>` tags
- **Method**: Extract URLs and optionally verify (HEAD requests)
- **File**: `src/lib/auditors/technicalSeoAuditor.ts`

### Redirect Chains
- **Source**: HTTP response redirect headers
- **Method**: Follow redirects and count hops
- **File**: `src/lib/auditors/technicalSeoAuditor.ts`

### Core Web Vitals
- **Source**: Google PageSpeed Insights API
- **Method**: API call with `GOOGLE_PAGESPEED_API_KEY`
- **Metrics**: LCP, FID, CLS, FCP, TTI
- **File**: `src/lib/auditors/coreWebVitalsAuditor.ts`
- **API**: `https://www.googleapis.com/pagespeedonline/v5/runPagespeed`

### Indexability Status
- **Source**: Robots meta tag, X-Robots-Tag header
- **Method**: HTML parsing and header check
- **File**: `src/lib/auditors/technicalSeoAuditor.ts`

---

## 4. Content Analysis

### Content-to-HTML Ratio
- **Source**: Extracted text vs total HTML size
- **Method**: Strip HTML tags and compare sizes
- **File**: `src/lib/auditors/contentAnalysisAuditor.ts`

### Text Readability Score
- **Source**: Extracted text content
- **Method**: Flesch Reading Ease algorithm
- **File**: `src/lib/auditors/contentAnalysisAuditor.ts`

### Duplicate Content Detection
- **Source**: Text analysis
- **Method**: Hash comparison of text blocks
- **File**: `src/lib/auditors/contentAnalysisAuditor.ts`

### Internal Linking Structure
- **Source**: `<a href>` tags pointing to same domain
- **Method**: URL parsing and filtering
- **File**: `src/lib/auditors/contentAnalysisAuditor.ts`

### External Links Analysis
- **Source**: `<a href>` tags pointing to external domains
- **Method**: URL parsing and domain comparison
- **Validation**: Check for nofollow, target="_blank"
- **File**: `src/lib/auditors/contentAnalysisAuditor.ts`

### Content Freshness
- **Source**: `<meta property="article:modified_time">` or date in content
- **Method**: HTML parsing and date extraction
- **File**: `src/lib/auditors/contentAnalysisAuditor.ts`

### Word Count
- **Source**: Extracted text content
- **Method**: Text splitting and counting
- **File**: `src/lib/auditors/contentAnalysisAuditor.ts`

---

## 5. Shopify-Specific Checks

### Theme Detection
- **Source**: `Shopify.theme` JavaScript object in HTML
- **Method**: Regex parsing of inline scripts
- **File**: `src/lib/auditors/shopifyAuditor.ts`

### Shopify App Detection
- **Source**: Script sources and HTML content
- **Method**: Pattern matching for known apps (Klaviyo, Yotpo, etc.)
- **File**: `src/lib/shopify/storefrontClient.ts`

### Product Count
- **Source**: Shopify public API `/products.json`
- **Method**: HTTP GET request, count products array
- **File**: `src/lib/shopify/storefrontClient.ts`

### Collection Count
- **Source**: Shopify public API `/collections.json`
- **Method**: HTTP GET request, count collections array
- **File**: `src/lib/shopify/storefrontClient.ts`

### Cart Functionality
- **Source**: Cart form elements and data attributes
- **Method**: HTML parsing for cart-related elements
- **File**: `src/lib/auditors/shopifyAuditor.ts`

### Checkout Process
- **Source**: Shopify checkout API token meta tag
- **Method**: HTML meta tag parsing
- **File**: `src/lib/auditors/shopifyAuditor.ts`

### Product Schema
- **Source**: JSON-LD Product schema
- **Method**: Parse script tags with Product schema
- **File**: `src/lib/auditors/shopifyAuditor.ts`

### Currency & Language Settings
- **Source**: Currency selector elements, lang attribute
- **Method**: HTML parsing
- **File**: `src/lib/auditors/shopifyAuditor.ts`

### Store Policies
- **Source**: Shopify public endpoints (`/policies/*`)
- **Method**: HTTP HEAD requests to check policy pages
- **File**: `src/lib/shopify/storefrontClient.ts`

---

## 6. Accessibility Audit

### ARIA Labels & Roles
- **Source**: `aria-*` attributes on HTML elements
- **Method**: Cheerio HTML parsing
- **File**: `src/lib/auditors/accessibilityAuditor.ts`

### Color Contrast Ratios
- **Source**: Inline styles with color/background-color
- **Method**: WCAG contrast ratio calculation
- **Algorithm**: Relative luminance comparison
- **File**: `src/lib/utils/colorContrast.ts`

### Form Label Associations
- **Source**: `<label for>` and input id matching
- **Method**: HTML parsing and relationship verification
- **File**: `src/lib/auditors/accessibilityAuditor.ts`

### Keyboard Navigation
- **Source**: Focus styles in CSS, tabindex attributes
- **Method**: HTML and CSS parsing
- **File**: `src/lib/auditors/accessibilityAuditor.ts`

### Image Alt Text
- **Source**: `alt` attribute on images
- **Method**: HTML parsing
- **File**: `src/lib/auditors/accessibilityAuditor.ts`

### Skip Navigation Links
- **Source**: Anchor links pointing to #main or similar
- **Method**: HTML parsing of anchor tags
- **File**: `src/lib/auditors/accessibilityAuditor.ts`

### Focus Indicators
- **Source**: CSS :focus and :focus-visible styles
- **Method**: Check if styles exist in HTML/CSS
- **File**: `src/lib/auditors/accessibilityAuditor.ts`

### Semantic HTML
- **Source**: HTML5 semantic tags (header, nav, main, footer, article, section)
- **Method**: HTML parsing for landmark elements
- **File**: `src/lib/auditors/accessibilityAuditor.ts`

---

## 7. Security Analysis

### HTTPS Implementation
- **Source**: URL protocol and security headers
- **Method**: URL parsing and header check
- **File**: `src/lib/auditors/securityAuditor.ts`

### Security Headers
- **Source**: HTTP response headers
- **Method**: Check for CSP, X-Frame-Options, X-Content-Type-Options, etc.
- **File**: `src/lib/auditors/securityAuditor.ts`

### Mixed Content Warnings
- **Source**: HTTP resources on HTTPS pages
- **Method**: Parse script/link/img src for http:// on https:// pages
- **File**: `src/lib/auditors/securityAuditor.ts`

### Cookie Security
- **Source**: Set-Cookie headers
- **Method**: Check for Secure and HttpOnly flags
- **File**: `src/lib/auditors/securityAuditor.ts`

### Third-Party Script Vulnerabilities
- **Source**: External script sources
- **Method**: Check against known vulnerable CDNs/versions
- **File**: `src/lib/auditors/securityAuditor.ts`

---

## 8. E-commerce Specific (Sales Optimization)

### Product Page Optimization
- **Source**: Product page structure elements
- **Method**: HTML parsing for key elements
- **File**: `src/lib/auditors/salesOptimizationAuditor.ts`

### Add-to-Cart Button
- **Source**: Button elements with cart-related names/actions
- **Method**: HTML parsing for CTA buttons
- **File**: `src/lib/auditors/salesOptimizationAuditor.ts`

### Trust Signals (Reviews, Badges)
- **Source**: Review widgets, trust badge images
- **Method**: HTML parsing for known review platforms and badge images
- **File**: `src/lib/auditors/salesOptimizationAuditor.ts`

### Payment Gateway Detection
- **Source**: Payment form elements and scripts
- **Method**: Pattern matching for Stripe, PayPal, Shopify Payments
- **File**: `src/lib/auditors/salesOptimizationAuditor.ts`

### Shipping Information
- **Source**: Shipping-related text and elements
- **Method**: HTML parsing and text search
- **File**: `src/lib/auditors/salesOptimizationAuditor.ts`

### Return Policy
- **Source**: Link to return/refund policy
- **Method**: HTML link parsing and text search
- **File**: `src/lib/auditors/salesOptimizationAuditor.ts`

### Contact Information
- **Source**: Contact links, phone numbers, email addresses
- **Method**: Regex pattern matching in HTML
- **File**: `src/lib/auditors/salesOptimizationAuditor.ts`

### Upsell Features
- **Source**: Product recommendations, "You may also like" sections
- **Method**: HTML parsing for recommendation widgets
- **File**: `src/lib/auditors/salesOptimizationAuditor.ts`

### Cross-sell Features
- **Source**: Related products, bundles
- **Method**: HTML parsing for cross-sell elements
- **File**: `src/lib/auditors/salesOptimizationAuditor.ts`

### Bundles & Frequently Bought Together
- **Source**: Bundle widgets, FBT sections
- **Method**: HTML parsing for bundle indicators
- **File**: `src/lib/auditors/salesOptimizationAuditor.ts`

### Promo Codes
- **Source**: Discount code input fields
- **Method**: HTML form element parsing
- **File**: `src/lib/auditors/salesOptimizationAuditor.ts`

### Customer Support
- **Source**: Chat widgets, support links
- **Method**: HTML parsing for Intercom, Zendesk, Crisp, etc.
- **File**: `src/lib/auditors/salesOptimizationAuditor.ts`

### Estimated Delivery Time
- **Source**: Delivery estimate text on product pages
- **Method**: Text pattern matching
- **File**: `src/lib/auditors/salesOptimizationAuditor.ts`

### Wishlist Feature
- **Source**: Wishlist buttons/icons
- **Method**: HTML parsing for wishlist elements
- **File**: `src/lib/auditors/salesOptimizationAuditor.ts`

### Abandoned Cart Recovery
- **Source**: Email capture popups, exit-intent modals
- **Method**: HTML parsing for known cart recovery apps
- **File**: `src/lib/auditors/salesOptimizationAuditor.ts`

### Loyalty & Rewards Program
- **Source**: Loyalty program widgets
- **Method**: Pattern matching for Smile.io, LoyaltyLion, etc.
- **File**: `src/lib/auditors/salesOptimizationAuditor.ts`

### Conversion Tracker
- **Source**: Analytics scripts (Google Analytics, Facebook Pixel)
- **Method**: Script source parsing
- **File**: `src/lib/auditors/salesOptimizationAuditor.ts`

---

## 9. Competitive Analysis

### Industry Benchmarks Comparison
- **Source**: Internal benchmark database
- **Method**: Industry detection + score comparison
- **File**: `src/lib/utils/benchmarks.ts`

### Score Against Best Practices
- **Source**: Internal scoring algorithm
- **Method**: Weighted scoring based on all audits
- **File**: `src/lib/utils/scoring.ts`

### Priority Recommendations
- **Source**: All audit issues ranked by severity
- **Method**: Filter and sort by severity and impact
- **File**: `src/lib/utils/scoring.ts`

---

## 10. Reporting Features

### Overall Health Score
- **Source**: Aggregated scores from all auditors
- **Method**: Weighted average calculation
- **File**: `src/lib/utils/scoring.ts`

### Priority-Based Issues
- **Source**: All issues with severity tags
- **Method**: Categorization into Critical, High, Medium, Low
- **File**: All auditor files

### Actionable Recommendations
- **Source**: Generated from each audit issue
- **Method**: Template-based recommendation generation
- **File**: `src/lib/utils/scoring.ts`

### PDF Report
- **Source**: Audit results object
- **Method**: jsPDF library for client-side generation
- **File**: `src/lib/pdf/generatePDF.ts`

### Historical Tracking
- **Source**: Database storage
- **Method**: Save audit results with timestamps
- **File**: `src/lib/db/database.ts`

---

## API Keys Required

1. **Google PageSpeed Insights API**
   - Used for: Core Web Vitals (LCP, FID, CLS)
   - Env var: `GOOGLE_PAGESPEED_API_KEY`
   - Get it: https://console.cloud.google.com/

2. **Lighthouse API** (Optional, same as PageSpeed)
   - Can use Google PageSpeed API instead
   - Provides: Performance metrics, accessibility score

3. **Shopify Storefront API** (Public - No key needed)
   - Used for: Product count, collection count, policies
   - Endpoints: `/products.json`, `/collections.json`, `/policies/*`

---

## Data Accuracy Notes

- **Real-time API data** is used wherever possible (Shopify API, PageSpeed API)
- **HTTP requests** are used to verify file existence and sizes
- **HTML parsing** is used as a fallback when APIs aren't available
- **Calculations** (contrast ratios, readability scores) use industry-standard algorithms
- **Estimates** are clearly marked and based on best available data

All metrics are designed to provide actionable, accurate information for store owners.
