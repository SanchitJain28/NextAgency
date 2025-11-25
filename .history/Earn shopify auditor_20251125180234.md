# Earn - Your Online Store Partner

**By ScaleFront.io**

Build a comprehensive Shopify Website Auditor tool that analyzes store performance, SEO, accessibility, and provides actionable recommendations to help online stores grow.

---

## Project Overview

**Tool Name:** Earn - Your Online Store Partner  
**Company:** ScaleFront.io  
**Purpose:** Comprehensive Shopify store auditing and optimization tool  
**Tech Stack:** React, Next.js, TailwindCSS, Puppeteer (for advanced analysis)

---

## Core Features to Build

### 1. **SEO Analysis Module**
- Meta tags checker (title, description, length validation)
- Heading structure analysis (H1, H2, H3 hierarchy)
- Image alt text audit
- Open Graph and Twitter Card validation
- Canonical URL verification
- Robots.txt and sitemap.xml detection
- Schema markup validation (Product, Organization, BreadcrumbList)
- URL structure analysis
- Keyword density calculator
- Internal linking structure analysis

### 2. **Performance Audit Module**
- Page load time measurement
- Image optimization checker (format, size, compression, lazy loading)
- JavaScript and CSS bundle size analysis
- HTTP request count
- Compression detection (Gzip/Brotli)
- Browser caching validation
- Render-blocking resources identification
- Third-party script performance impact
- Mobile performance score
- Core Web Vitals (LCP, FID, CLS)

### 3. **Technical SEO Module**
- SSL/HTTPS verification
- Mobile-friendly test
- Structured data validation
- XML sitemap crawler
- Broken links detector
- Redirect chains checker
- Indexability status
- Duplicate content detection
- Hreflang tags validation

### 4. **Shopify-Specific Checks**
- Theme detection and analysis
- Installed Shopify apps detection
- Liquid code optimization hints
- Collection page structure
- Product page optimization
- Cart functionality validation
- Checkout process analysis
- Product schema validation
- Multi-currency setup check
- Language/locale settings

### 5. **Accessibility Audit**
- ARIA labels and roles validation
- Color contrast ratio checker
- Form label associations
- Keyboard navigation support
- Image alt text completeness
- Skip navigation links
- Focus indicators
- Semantic HTML validation
- Screen reader compatibility

### 6. **Security Analysis**
- HTTPS implementation check
- Security headers validation (CSP, X-Frame-Options, HSTS)
- Mixed content warnings
- Cookie security attributes
- Third-party script security audit
- XSS vulnerability checks

### 7. **E-commerce Optimization**
- Product page element checker
- Add-to-cart button analysis
- Trust signals detection (reviews, badges, guarantees)
- Payment gateway identification
- Shipping information visibility
- Return policy accessibility
- Contact information presence
- Product image quality assessment
- Pricing display optimization

### 8. **Content Analysis**
- Content-to-HTML ratio
- Text readability score (Flesch-Kincaid)
- Word count per page
- Duplicate content detection
- Internal vs external links ratio
- Content freshness indicators
- Call-to-action analysis

### 9. **Competitive Insights**
- Industry benchmark comparison
- Best practices scorecard
- Competitor analysis (optional feature)
- Market positioning insights

### 10. **Sales Optimization Features Audit**
- **Upsell Detection**: Check for upsell offers on product pages
- **Cross-sell Detection**: Analyze related products/recommendations
- **Product Bundles**: Identify bundle offerings and "frequently bought together"
- **Promo Codes**: Check for visible promo code fields and discount messaging
- **Easy Customer Support**: Live chat, WhatsApp, phone visibility
- **Delivery Time Estimates**: Shipping timeline visibility
- **Wishlist Functionality**: Check for save/wishlist features
- **Abandoned Cart Recovery**: Email capture, cart save functionality
- **Loyalty & Rewards Program**: Points, referral programs detection
- **Conversion Tracking**: Google Analytics, Facebook Pixel, TikTok Pixel detection

### 11. **Lead Capture & Reporting Dashboard**
- **Pre-Audit Lead Form**: Email and mobile number collection
- Overall health score (0-100)
- Priority-based issue categorization (Critical, High, Medium, Low)
- Actionable recommendations with steps
- Visual score indicators (gauges, charts)
- Exportable PDF reports (sent to email)
- Historical audit tracking
- Comparison view (before/after)

---

## Technical Implementation Guide

### Phase 1: Project Setup

```bash
# Create Next.js project
npx create-next-app@latest earn-auditor
cd earn-auditor

# Install dependencies
npm install axios cheerio puppeteer lighthouse
npm install @headlessui/react @heroicons/react
npm install recharts react-pdf jspdf html2canvas
npm install tailwindcss postcss autoprefixer
```

### Phase 2: Core Architecture

#### File Structure
```
earn-auditor/
├── app/
│   ├── page.tsx (Landing page)
│   ├── audit/
│   │   └── page.tsx (Audit interface)
│   ├── results/
│   │   └── [id]/page.tsx (Results dashboard)
│   └── api/
│       ├── analyze/route.ts (Main audit API)
│       ├── seo/route.ts
│       ├── performance/route.ts
│       └── report/route.ts
├── components/
│   ├── AuditForm.tsx
│   ├── ResultsDashboard.tsx
│   ├── ScoreGauge.tsx
│   ├── IssueList.tsx
│   ├── RecommendationCard.tsx
│   └── ExportButton.tsx
├── lib/
│   ├── auditors/
│   │   ├── seoAuditor.ts
│   │   ├── performanceAuditor.ts
│   │   ├── accessibilityAuditor.ts
│   │   ├── securityAuditor.ts
│   │   └── shopifyAuditor.ts
│   ├── utils/
│   │   ├── scoring.ts
│   │   ├── fetchPage.ts
│   │   └── htmlParser.ts
│   └── types.ts
├── public/
│   └── logo.svg
└── styles/
    └── globals.css
```

### Phase 3: API Routes Implementation

#### `/api/analyze/route.ts`
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { seoAuditor } from '@/lib/auditors/seoAuditor';
import { performanceAuditor } from '@/lib/auditors/performanceAuditor';
import { accessibilityAuditor } from '@/lib/auditors/accessibilityAuditor';
import { securityAuditor } from '@/lib/auditors/securityAuditor';
import { shopifyAuditor } from '@/lib/auditors/shopifyAuditor';
import { salesOptimizationAuditor } from '@/lib/auditors/salesOptimizationAuditor';

export async function POST(request: NextRequest) {
  try {
    const { url, email, phone } = await request.json();
    
    // Validate URL
    if (!url || !isValidUrl(url)) {
      return NextResponse.json(
        { error: 'Invalid URL provided' },
        { status: 400 }
      );
    }

    // Validate email and phone
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    if (!phone || !isValidPhone(phone)) {
      return NextResponse.json(
        { error: 'Valid phone number is required' },
        { status: 400 }
      );
    }

    // Store lead information
    await storeLeadInfo({ url, email, phone, timestamp: new Date() });

    // Fetch page content
    const { html, headers, responseTime } = await fetchPage(url);
    
    // Run all auditors in parallel
    const [seo, performance, accessibility, security, shopify, salesOptimization] = 
      await Promise.all([
        seoAuditor.analyze(html, url),
        performanceAuditor.analyze(html, headers, responseTime),
        accessibilityAuditor.analyze(html),
        securityAuditor.analyze(headers, url),
        shopifyAuditor.analyze(html, url),
        salesOptimizationAuditor.analyze(html, url)
      ]);

    // Calculate overall score
    const overallScore = calculateOverallScore({
      seo,
      performance,
      accessibility,
      security,
      shopify,
      salesOptimization
    });

    const results = {
      url,
      email,
      phone,
      timestamp: new Date().toISOString(),
      overallScore,
      seo,
      performance,
      accessibility,
      security,
      shopify,
      salesOptimization,
      recommendations: generateRecommendations({
        seo,
        performance,
        accessibility,
        security,
        shopify,
        salesOptimization
      })
    };

    // Send email with report
    await sendAuditReport(email, results);

    return NextResponse.json(results);
  } catch (error) {
    console.error('Audit error:', error);
    return NextResponse.json(
      { error: 'Failed to analyze website' },
      { status: 500 }
    );
  }
}
```

### Phase 4: Auditor Modules

#### `lib/auditors/seoAuditor.ts`
```typescript
import * as cheerio from 'cheerio';

export const seoAuditor = {
  analyze: async (html: string, url: string) => {
    const $ = cheerio.load(html);
    const issues: Issue[] = [];
    let score = 100;

    // Meta Title Check
    const title = $('title').text();
    if (!title) {
      issues.push({
        severity: 'critical',
        category: 'SEO',
        issue: 'Missing page title',
        recommendation: 'Add a unique, descriptive title tag (50-60 characters)'
      });
      score -= 15;
    } else if (title.length > 60) {
      issues.push({
        severity: 'medium',
        category: 'SEO',
        issue: 'Title too long',
        recommendation: `Title is ${title.length} characters. Keep it under 60.`
      });
      score -= 5;
    }

    // Meta Description Check
    const description = $('meta[name="description"]').attr('content');
    if (!description) {
      issues.push({
        severity: 'high',
        category: 'SEO',
        issue: 'Missing meta description',
        recommendation: 'Add a compelling meta description (150-160 characters)'
      });
      score -= 10;
    } else if (description.length > 160) {
      issues.push({
        severity: 'low',
        category: 'SEO',
        issue: 'Meta description too long',
        recommendation: 'Shorten meta description to under 160 characters'
      });
      score -= 3;
    }

    // Heading Structure
    const h1Tags = $('h1');
    if (h1Tags.length === 0) {
      issues.push({
        severity: 'high',
        category: 'SEO',
        issue: 'No H1 tag found',
        recommendation: 'Add exactly one H1 tag with your main keyword'
      });
      score -= 10;
    } else if (h1Tags.length > 1) {
      issues.push({
        severity: 'medium',
        category: 'SEO',
        issue: `Multiple H1 tags found (${h1Tags.length})`,
        recommendation: 'Use only one H1 tag per page'
      });
      score -= 5;
    }

    // Image Alt Text
    const images = $('img');
    const imagesWithoutAlt = images.filter((i, el) => !$(el).attr('alt')).length;
    if (imagesWithoutAlt > 0) {
      issues.push({
        severity: 'medium',
        category: 'SEO',
        issue: `${imagesWithoutAlt} images missing alt text`,
        recommendation: 'Add descriptive alt text to all images'
      });
      score -= Math.min(imagesWithoutAlt * 2, 15);
    }

    // Open Graph Tags
    const ogTitle = $('meta[property="og:title"]').attr('content');
    const ogDescription = $('meta[property="og:description"]').attr('content');
    const ogImage = $('meta[property="og:image"]').attr('content');
    
    if (!ogTitle || !ogDescription || !ogImage) {
      issues.push({
        severity: 'medium',
        category: 'SEO',
        issue: 'Incomplete Open Graph tags',
        recommendation: 'Add og:title, og:description, and og:image for social sharing'
      });
      score -= 5;
    }

    // Canonical URL
    const canonical = $('link[rel="canonical"]').attr('href');
    if (!canonical) {
      issues.push({
        severity: 'medium',
        category: 'SEO',
        issue: 'Missing canonical URL',
        recommendation: 'Add canonical tag to prevent duplicate content issues'
      });
      score -= 5;
    }

    // Schema Markup
    const schemas = $('script[type="application/ld+json"]');
    if (schemas.length === 0) {
      issues.push({
        severity: 'high',
        category: 'SEO',
        issue: 'No structured data found',
        recommendation: 'Add Product and Organization schema markup'
      });
      score -= 10;
    }

    // Internal Links
    const internalLinks = $('a[href^="/"], a[href^="' + url + '"]').length;
    if (internalLinks < 3) {
      issues.push({
        severity: 'low',
        category: 'SEO',
        issue: 'Few internal links',
        recommendation: 'Add more internal links to improve site structure'
      });
      score -= 3;
    }

    return {
      score: Math.max(score, 0),
      issues,
      metrics: {
        title: { value: title, length: title?.length || 0 },
        description: { value: description, length: description?.length || 0 },
        h1Count: h1Tags.length,
        imagesTotal: images.length,
        imagesWithoutAlt,
        internalLinks,
        hasSchema: schemas.length > 0,
        hasCanonical: !!canonical
      }
    };
  }
};
```

#### `lib/auditors/performanceAuditor.ts`
```typescript
export const performanceAuditor = {
  analyze: async (html: string, headers: Headers, responseTime: number) => {
    const $ = cheerio.load(html);
    const issues: Issue[] = [];
    let score = 100;

    // Response Time
    if (responseTime > 3000) {
      issues.push({
        severity: 'critical',
        category: 'Performance',
        issue: `Slow page load time (${responseTime}ms)`,
        recommendation: 'Optimize server response time to under 1000ms'
      });
      score -= 20;
    } else if (responseTime > 1000) {
      issues.push({
        severity: 'medium',
        category: 'Performance',
        issue: `Page load time could be improved (${responseTime}ms)`,
        recommendation: 'Target response time under 1000ms'
      });
      score -= 10;
    }

    // Compression
    const contentEncoding = headers.get('content-encoding');
    if (!contentEncoding || !['gzip', 'br'].includes(contentEncoding)) {
      issues.push({
        severity: 'high',
        category: 'Performance',
        issue: 'No compression detected',
        recommendation: 'Enable Gzip or Brotli compression'
      });
      score -= 15;
    }

    // Image Optimization
    const images = $('img');
    let unoptimizedImages = 0;
    images.each((i, el) => {
      const src = $(el).attr('src');
      const loading = $(el).attr('loading');
      
      if (src && !src.includes('.webp') && !src.includes('cdn.shopify.com')) {
        unoptimizedImages++;
      }
      
      if (!loading || loading !== 'lazy') {
        // Count non-lazy loaded images
      }
    });

    if (unoptimizedImages > 0) {
      issues.push({
        severity: 'medium',
        category: 'Performance',
        issue: `${unoptimizedImages} images not optimized`,
        recommendation: 'Convert images to WebP format and use lazy loading'
      });
      score -= Math.min(unoptimizedImages * 3, 15);
    }

    // JavaScript Files
    const scriptTags = $('script[src]');
    if (scriptTags.length > 15) {
      issues.push({
        severity: 'medium',
        category: 'Performance',
        issue: `High number of JavaScript files (${scriptTags.length})`,
        recommendation: 'Bundle and minify JavaScript files'
      });
      score -= 10;
    }

    // CSS Files
    const cssTags = $('link[rel="stylesheet"]');
    if (cssTags.length > 5) {
      issues.push({
        severity: 'low',
        category: 'Performance',
        issue: `Multiple CSS files (${cssTags.length})`,
        recommendation: 'Combine CSS files to reduce HTTP requests'
      });
      score -= 5;
    }

    // Render-blocking Resources
    const renderBlockingScripts = $('script:not([async]):not([defer])').length;
    if (renderBlockingScripts > 3) {
      issues.push({
        severity: 'medium',
        category: 'Performance',
        issue: `${renderBlockingScripts} render-blocking scripts`,
        recommendation: 'Add async or defer attributes to non-critical scripts'
      });
      score -= 8;
    }

    // Caching Headers
    const cacheControl = headers.get('cache-control');
    if (!cacheControl || !cacheControl.includes('max-age')) {
      issues.push({
        severity: 'medium',
        category: 'Performance',
        issue: 'Browser caching not optimized',
        recommendation: 'Set appropriate Cache-Control headers'
      });
      score -= 7;
    }

    return {
      score: Math.max(score, 0),
      issues,
      metrics: {
        responseTime,
        compression: contentEncoding || 'none',
        imageCount: images.length,
        scriptCount: scriptTags.length,
        cssCount: cssTags.length,
        renderBlockingScripts
      }
    };
  }
};
```

#### `lib/auditors/accessibilityAuditor.ts`
```typescript
export const accessibilityAuditor = {
  analyze: async (html: string) => {
    const $ = cheerio.load(html);
    const issues: Issue[] = [];
    let score = 100;

    // Language attribute
    const htmlLang = $('html').attr('lang');
    if (!htmlLang) {
      issues.push({
        severity: 'high',
        category: 'Accessibility',
        issue: 'Missing language attribute',
        recommendation: 'Add lang attribute to <html> tag'
      });
      score -= 10;
    }

    // Form labels
    const inputs = $('input[type="text"], input[type="email"], input[type="tel"], textarea');
    let inputsWithoutLabels = 0;
    inputs.each((i, el) => {
      const id = $(el).attr('id');
      const ariaLabel = $(el).attr('aria-label');
      const hasLabel = id && $(`label[for="${id}"]`).length > 0;
      
      if (!hasLabel && !ariaLabel) {
        inputsWithoutLabels++;
      }
    });

    if (inputsWithoutLabels > 0) {
      issues.push({
        severity: 'high',
        category: 'Accessibility',
        issue: `${inputsWithoutLabels} form fields without labels`,
        recommendation: 'Add proper labels or aria-label to all form inputs'
      });
      score -= 15;
    }

    // ARIA landmarks
    const hasMain = $('main, [role="main"]').length > 0;
    const hasNav = $('nav, [role="navigation"]').length > 0;
    
    if (!hasMain || !hasNav) {
      issues.push({
        severity: 'medium',
        category: 'Accessibility',
        issue: 'Missing ARIA landmarks',
        recommendation: 'Use semantic HTML5 elements (main, nav, header, footer)'
      });
      score -= 8;
    }

    // Skip navigation
    const skipLink = $('a[href^="#"]').first();
    const skipLinkText = skipLink.text().toLowerCase();
    if (!skipLinkText.includes('skip') && !skipLinkText.includes('jump')) {
      issues.push({
        severity: 'low',
        category: 'Accessibility',
        issue: 'No skip navigation link',
        recommendation: 'Add a "Skip to main content" link at the top of the page'
      });
      score -= 5;
    }

    // Button accessibility
    const buttons = $('button, [role="button"]');
    let buttonsWithoutText = 0;
    buttons.each((i, el) => {
      const text = $(el).text().trim();
      const ariaLabel = $(el).attr('aria-label');
      if (!text && !ariaLabel) {
        buttonsWithoutText++;
      }
    });

    if (buttonsWithoutText > 0) {
      issues.push({
        severity: 'medium',
        category: 'Accessibility',
        issue: `${buttonsWithoutText} buttons without accessible text`,
        recommendation: 'Add visible text or aria-label to all buttons'
      });
      score -= 10;
    }

    // Color contrast (basic check for inline styles)
    const elementsWithStyles = $('[style*="color"]');
    if (elementsWithStyles.length > 5) {
      issues.push({
        severity: 'low',
        category: 'Accessibility',
        issue: 'Review color contrast',
        recommendation: 'Ensure text has sufficient contrast ratio (4.5:1 minimum)'
      });
      score -= 5;
    }

    return {
      score: Math.max(score, 0),
      issues,
      metrics: {
        hasLangAttribute: !!htmlLang,
        inputsTotal: inputs.length,
        inputsWithoutLabels,
        hasMainLandmark: hasMain,
        hasNavLandmark: hasNav,
        buttonsTotal: buttons.length,
        buttonsWithoutText
      }
    };
  }
};
```

#### `lib/auditors/securityAuditor.ts`
```typescript
export const securityAuditor = {
  analyze: async (headers: Headers, url: string) => {
    const issues: Issue[] = [];
    let score = 100;
    const urlObj = new URL(url);

    // HTTPS Check
    if (urlObj.protocol !== 'https:') {
      issues.push({
        severity: 'critical',
        category: 'Security',
        issue: 'Site not using HTTPS',
        recommendation: 'Enable SSL/TLS certificate for secure connections'
      });
      score -= 30;
    }

    // Security Headers
    const securityHeaders = {
      'strict-transport-security': 'HSTS',
      'x-frame-options': 'Clickjacking protection',
      'x-content-type-options': 'MIME type sniffing protection',
      'content-security-policy': 'XSS protection',
      'x-xss-protection': 'XSS filter'
    };

    let missingHeaders = 0;
    Object.entries(securityHeaders).forEach(([header, description]) => {
      if (!headers.get(header)) {
        missingHeaders++;
        const severity = header === 'content-security-policy' ? 'high' : 'medium';
        issues.push({
          severity,
          category: 'Security',
          issue: `Missing ${description} header`,
          recommendation: `Add ${header} header for enhanced security`
        });
        score -= header === 'content-security-policy' ? 15 : 8;
      }
    });

    // Cookie Security (if cookies present)
    const setCookie = headers.get('set-cookie');
    if (setCookie && !setCookie.includes('Secure')) {
      issues.push({
        severity: 'high',
        category: 'Security',
        issue: 'Cookies not secure',
        recommendation: 'Set Secure flag on all cookies'
      });
      score -= 10;
    }

    return {
      score: Math.max(score, 0),
      issues,
      metrics: {
        isHttps: urlObj.protocol === 'https:',
        hasHSTS: !!headers.get('strict-transport-security'),
        hasCSP: !!headers.get('content-security-policy'),
        hasXFrameOptions: !!headers.get('x-frame-options'),
        securityHeadersCount: 5 - missingHeaders
      }
    };
  }
};
```

#### `lib/auditors/shopifyAuditor.ts`
```typescript
export const shopifyAuditor = {
  analyze: async (html: string, url: string) => {
    const $ = cheerio.load(html);
    const issues: Issue[] = [];
    let score = 100;

    // Detect if it's a Shopify store
    const isShopify = html.includes('Shopify.shop') || 
                      html.includes('cdn.shopify.com') ||
                      $('meta[name="shopify-checkout-api-token"]').length > 0;

    if (!isShopify) {
      return {
        score: 0,
        issues: [{
          severity: 'info',
          category: 'Shopify',
          issue: 'Not a Shopify store',
          recommendation: 'This tool is optimized for Shopify stores'
        }],
        metrics: { isShopify: false }
      };
    }

    // Theme Detection
    const themeId = html.match(/Shopify\.theme\s*=\s*{\s*"name":\s*"([^"]+)"/);
    const themeName = themeId ? themeId[1] : 'Unknown';

    // Product Schema
    const productSchema = $('script[type="application/ld+json"]').filter((i, el) => {
      const content = $(el).html();
      return content && content.includes('"@type":"Product"');
    });

    if ($('.product').length > 0 && productSchema.length === 0) {
      issues.push({
        severity: 'high',
        category: 'Shopify',
        issue: 'Missing product structured data',
        recommendation: 'Add Product schema for better search visibility'
      });
      score -= 15;
    }

    // Add to Cart Button
    const addToCartButton = $('button[name="add"], button[type="submit"].product-form__submit, .shopify-payment-button');
    if (addToCartButton.length === 0 && $('.product').length > 0) {
      issues.push({
        severity: 'critical',
        category: 'Shopify',
        issue: 'Add to cart button not found',
        recommendation: 'Ensure product pages have a clear add to cart button'
      });
      score -= 20;
    }

    // Shopify Apps Detection
    const appScripts = $('script[src]').filter((i, el) => {
      const src = $(el).attr('src');
      return src && (src.includes('apps.shopify.com') || src.includes('shopifyapps'));
    });

    // Currency Selector
    const currencySelector = $('[name="currencies"], .currency-picker, [data-currency-picker]');
    const hasCurrencySelector = currencySelector.length > 0;

    // Trust Badges
    const trustBadges = $('.trust-badge, .security-badge, [class*="trust"], [class*="secure"]').length;
    if (trustBadges === 0 && $('.product').length > 0) {
      issues.push({
        severity: 'low',
        category: 'Shopify',
        issue: 'No trust badges found',
        recommendation: 'Add security and trust badges to increase conversions'
      });
      score -= 5;
    }

    // Product Images
    const productImages = $('.product img, [class*="product-"] img');
    if (productImages.length > 0) {
      let lowQualityImages = 0;
      productImages.each((i, el) => {
        const src = $(el).attr('src');
        if (src && !src.includes('_large') && !src.includes('_grande') && !src.includes('_1024x')) {
          lowQualityImages++;
        }
      });

      if (lowQualityImages > 0) {
        issues.push({
          severity: 'medium',
          category: 'Shopify',
          issue: `${lowQualityImages} product images may be low quality`,
          recommendation: 'Use high-resolution images (at least 1024px)'
        });
        score -= 8;
      }
    }

    // Cart Functionality
    const cartElement = $('[data-cart], .cart, #cart');
    if (cartElement.length === 0) {
      issues.push({
        severity: 'medium',
        category: 'Shopify',
        issue: 'Cart element not easily identifiable',
        recommendation: 'Ensure cart is accessible and visible to users'
      });
      score -= 7;
    }

    // Search Functionality
    const searchForm = $('form[action*="/search"], input[name="q"]');
    if (searchForm.length === 0) {
      issues.push({
        severity: 'low',
        category: 'Shopify',
        issue: 'No search functionality found',
        recommendation: 'Add search to help customers find products'
      });
      score -= 5;
    }

    // Newsletter Signup
    const newsletterForm = $('form[action*="/contact"], input[name="contact[email]"]');
    const hasNewsletter = newsletterForm.length > 0;

    return {
      score: Math.max(score, 0),
      issues,
      metrics: {
        isShopify,
        themeName,
        hasProductSchema: productSchema.length > 0,
        hasAddToCart: addToCartButton.length > 0,
        installedApps: appScripts.length,
        hasCurrencySelector,
        trustBadgesCount: trustBadges,
        hasCart: cartElement.length > 0,
        hasSearch: searchForm.length > 0,
        hasNewsletter
      }
    };
  }
};
```

#### `lib/auditors/salesOptimizationAuditor.ts`
```typescript
import * as cheerio from 'cheerio';

export const salesOptimizationAuditor = {
  analyze: async (html: string, url: string) => {
    const $ = cheerio.load(html);
    const issues: Issue[] = [];
    let score = 100;
    const features = {
      upsell: false,
      crossSell: false,
      bundles: false,
      frequentlyBoughtTogether: false,
      promoCodes: false,
      liveChat: false,
      whatsapp: false,
      phone: false,
      deliveryEstimate: false,
      wishlist: false,
      abandonedCart: false,
      loyaltyProgram: false,
      googleAnalytics: false,
      facebookPixel: false,
      tiktokPixel: false
    };

    // 1. UPSELL DETECTION
    const upsellIndicators = [
      '.upsell', '[data-upsell]', '.product-recommendations--upsell',
      '[class*="upsell"]', '[id*="upsell"]', '.upgrade-option',
      '.premium-option', '[data-product-upsell]'
    ];
    
    upsellIndicators.forEach(selector => {
      if ($(selector).length > 0) {
        features.upsell = true;
      }
    });

    if (!features.upsell && $('.product').length > 0) {
      issues.push({
        severity: 'high',
        category: 'Sales Optimization',
        issue: 'No upsell functionality detected',
        recommendation: 'Add upsell offers to increase average order value by 10-30%',
        impact: 'High revenue impact - can increase AOV by $15-50'
      });
      score -= 12;
    }

    // 2. CROSS-SELL / RELATED PRODUCTS
    const crossSellIndicators = [
      '.product-recommendations', '[data-recommendations]', 
      '.related-products', '.you-may-also-like', '[class*="cross-sell"]',
      '.recommended-products', '[data-related-products]', '.also-bought'
    ];

    crossSellIndicators.forEach(selector => {
      if ($(selector).length > 0) {
        features.crossSell = true;
      }
    });

    if (!features.crossSell && $('.product').length > 0) {
      issues.push({
        severity: 'high',
        category: 'Sales Optimization',
        issue: 'No cross-sell or related products found',
        recommendation: 'Add "You May Also Like" or "Related Products" section',
        impact: '15-25% increase in items per order'
      });
      score -= 12;
    }

    // 3. PRODUCT BUNDLES
    const bundleIndicators = [
      '.bundle', '[data-bundle]', '.product-bundle', 
      '[class*="bundle"]', '.combo-deal', '.package-deal',
      '[data-product-bundle]', '.buy-together'
    ];

    bundleIndicators.forEach(selector => {
      if ($(selector).length > 0) {
        features.bundles = true;
      }
    });

    // 4. FREQUENTLY BOUGHT TOGETHER
    const fbtText = html.toLowerCase();
    if (fbtText.includes('frequently bought together') || 
        fbtText.includes('often bought with') ||
        fbtText.includes('buy it with') ||
        $('.frequently-bought-together').length > 0) {
      features.frequentlyBoughtTogether = true;
    }

    if (!features.bundles && !features.frequentlyBoughtTogether) {
      issues.push({
        severity: 'medium',
        category: 'Sales Optimization',
        issue: 'No bundle or "Frequently Bought Together" offers',
        recommendation: 'Implement bundle deals to increase cart value',
        impact: 'Can increase AOV by 20-40%'
      });
      score -= 10;
    }

    // 5. PROMO CODE VISIBILITY
    const promoCodeIndicators = [
      'input[name*="discount"]', 'input[name*="coupon"]',
      'input[name*="promo"]', '[placeholder*="promo"]',
      '[placeholder*="coupon"]', '[placeholder*="discount"]',
      '.discount-code', '.promo-code', '.coupon-code'
    ];

    promoCodeIndicators.forEach(selector => {
      if ($(selector).length > 0) {
        features.promoCodes = true;
      }
    });

    const promoText = html.toLowerCase();
    const hasPromoMention = promoText.includes('discount') || 
                           promoText.includes('coupon') || 
                           promoText.includes('promo code');

    if (!features.promoCodes && !hasPromoMention) {
      issues.push({
        severity: 'low',
        category: 'Sales Optimization',
        issue: 'No visible promo code field or discount messaging',
        recommendation: 'Add promo code field and promotional banners',
        impact: 'Encourages conversions and email collection'
      });
      score -= 5;
    }

    // 6. LIVE CHAT SUPPORT
    const liveChatIndicators = [
      '#tidio-chat', '.intercom-messenger', '[id*="drift"]',
      '[class*="crisp"]', '[id*="zendesk"]', '[class*="livechat"]',
      '[id*="tawk"]', '.gorgias-chat', '[class*="chat-widget"]',
      'iframe[src*="chat"]', '[data-live-chat]'
    ];

    liveChatIndicators.forEach(selector => {
      if ($(selector).length > 0) {
        features.liveChat = true;
      }
    });

    // 7. WHATSAPP SUPPORT
    const whatsappLinks = $('a[href*="wa.me"], a[href*="whatsapp"], a[href*="api.whatsapp"]');
    if (whatsappLinks.length > 0) {
      features.whatsapp = true;
    }

    // 8. PHONE NUMBER VISIBILITY
    const phoneRegex = /(\+\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/;
    const bodyText = $('body').text();
    if (phoneRegex.test(bodyText) || $('a[href^="tel:"]').length > 0) {
      features.phone = true;
    }

    if (!features.liveChat && !features.whatsapp && !features.phone) {
      issues.push({
        severity: 'high',
        category: 'Sales Optimization',
        issue: 'No easy customer support options visible',
        recommendation: 'Add live chat, WhatsApp button, or prominent phone number',
        impact: 'Reduces cart abandonment by 15-20%'
      });
      score -= 13;
    }

    // 9. DELIVERY TIME ESTIMATE
    const deliveryIndicators = [
      '.delivery-date', '.estimated-delivery', '[class*="shipping-time"]',
      '.arrival-date', '[data-delivery-estimate]', '.delivery-estimate'
    ];

    deliveryIndicators.forEach(selector => {
      if ($(selector).length > 0) {
        features.deliveryEstimate = true;
      }
    });

    const deliveryText = html.toLowerCase();
    if (deliveryText.includes('estimated delivery') || 
        deliveryText.includes('ships in') ||
        deliveryText.includes('arrives by') ||
        deliveryText.includes('delivery by')) {
      features.deliveryEstimate = true;
    }

    if (!features.deliveryEstimate && $('.product').length > 0) {
      issues.push({
        severity: 'medium',
        category: 'Sales Optimization',
        issue: 'No delivery time estimate shown',
        recommendation: 'Display estimated delivery dates on product pages',
        impact: 'Increases purchase confidence and conversions'
      });
      score -= 8;
    }

    // 10. WISHLIST FUNCTIONALITY
    const wishlistIndicators = [
      '.wishlist', '[data-wishlist]', '.add-to-wishlist',
      '[class*="wishlist"]', '.save-for-later', '.favorites',
      'button[aria-label*="wishlist"]', '[data-add-to-wishlist]'
    ];

    wishlistIndicators.forEach(selector => {
      if ($(selector).length > 0) {
        features.wishlist = true;
      }
    });

    if (!features.wishlist) {
      issues.push({
        severity: 'medium',
        category: 'Sales Optimization',
        issue: 'No wishlist or save for later functionality',
        recommendation: 'Add wishlist feature to capture interested buyers',
        impact: 'Enables remarketing and increases return visits'
      });
      score -= 8;
    }

    // 11. ABANDONED CART RECOVERY
    const cartRecoveryIndicators = [
      'input[type="email"][name*="cart"]',
      '[data-cart-recovery]', '.cart-save',
      'form[action*="cart"][action*="email"]'
    ];

    cartRecoveryIndicators.forEach(selector => {
      if ($(selector).length > 0) {
        features.abandonedCart = true;
      }
    });

    // Check for email capture in cart
    const cartEmailInput = $('.cart input[type="email"], [data-cart] input[type="email"]');
    if (cartEmailInput.length > 0) {
      features.abandonedCart = true;
    }

    if (!features.abandonedCart) {
      issues.push({
        severity: 'high',
        category: 'Sales Optimization',
        issue: 'No abandoned cart recovery mechanism detected',
        recommendation: 'Implement email capture at cart stage for recovery campaigns',
        impact: 'Can recover 10-15% of abandoned carts'
      });
      score -= 12;
    }

    // 12. LOYALTY & REWARDS PROGRAM
    const loyaltyIndicators = [
      '.loyalty', '.rewards', '[data-loyalty]', '[data-rewards]',
      '[class*="points"]', '.referral-program', '[class*="loyalty"]',
      '[class*="rewards"]', '.vip-program', '.membership'
    ];

    loyaltyIndicators.forEach(selector => {
      if ($(selector).length > 0) {
        features.loyaltyProgram = true;
      }
    });

    const loyaltyText = html.toLowerCase();
    if (loyaltyText.includes('loyalty program') || 
        loyaltyText.includes('rewards program') ||
        loyaltyText.includes('earn points') ||
        loyaltyText.includes('referral program')) {
      features.loyaltyProgram = true;
    }

    if (!features.loyaltyProgram) {
      issues.push({
        severity: 'medium',
        category: 'Sales Optimization',
        issue: 'No loyalty or rewards program detected',
        recommendation: 'Implement a loyalty program to increase repeat purchases',
        impact: 'Increases customer lifetime value by 25-50%'
      });
      score -= 10;
    }

    // 13. CONVERSION TRACKING - Google Analytics, Facebook Pixel, TikTok Pixel
    const scripts = $('script');
    scripts.each((i, el) => {
      const scriptContent = $(el).html() || '';
      const scriptSrc = $(el).attr('src') || '';
      
      // Google Analytics
      if (scriptContent.includes('gtag') || 
          scriptContent.includes('google-analytics') ||
          scriptContent.includes('GoogleAnalyticsObject') ||
          scriptSrc.includes('googletagmanager.com') ||
          scriptSrc.includes('google-analytics.com')) {
        features.googleAnalytics = true;
      }

      // Facebook Pixel
      if (scriptContent.includes('fbq') || 
          scriptContent.includes('facebook-jssdk') ||
          scriptSrc.includes('connect.facebook.net')) {
        features.facebookPixel = true;
      }

      // TikTok Pixel
      if (scriptContent.includes('ttq') || 
          scriptContent.includes('tiktok') ||
          scriptSrc.includes('analytics.tiktok.com')) {
        features.tiktokPixel = true;
      }
    });

    if (!features.googleAnalytics) {
      issues.push({
        severity: 'high',
        category: 'Sales Optimization',
        issue: 'Google Analytics not detected',
        recommendation: 'Install Google Analytics 4 for conversion tracking',
        impact: 'Essential for measuring ROI and optimizing campaigns'
      });
      score -= 13;
    }

    if (!features.facebookPixel) {
      issues.push({
        severity: 'medium',
        category: 'Sales Optimization',
        issue: 'Facebook Pixel not detected',
        recommendation: 'Install Facebook Pixel for retargeting and attribution',
        impact: 'Improves Facebook ad performance by 20-40%'
      });
      score -= 8;
    }

    if (!features.tiktokPixel) {
      issues.push({
        severity: 'low',
        category: 'Sales Optimization',
        issue: 'TikTok Pixel not detected',
        recommendation: 'Install TikTok Pixel if running TikTok ads',
        impact: 'Better targeting and measurement for TikTok campaigns'
      });
      score -= 5;
    }

    // Calculate feature adoption score
    const totalFeatures = Object.keys(features).length;
    const adoptedFeatures = Object.values(features).filter(v => v).length;
    const adoptionRate = (adoptedFeatures / totalFeatures) * 100;

    return {
      score: Math.max(score, 0),
      issues,
      features,
      metrics: {
        adoptionRate: Math.round(adoptionRate),
        featuresEnabled: adoptedFeatures,
        totalFeatures,
        hasUpsell: features.upsell,
        hasCrossSell: features.crossSell,
        hasBundles: features.bundles || features.frequentlyBoughtTogether,
        hasCustomerSupport: features.liveChat || features.whatsapp || features.phone,
        hasWishlist: features.wishlist,
        hasLoyaltyProgram: features.loyaltyProgram,
        trackingPixels: {
          googleAnalytics: features.googleAnalytics,
          facebookPixel: features.facebookPixel,
          tiktokPixel: features.tiktokPixel
        }
      },
      recommendations: [
        ...(adoptionRate < 50 ? [{
          priority: 'critical',
          message: `Only ${adoptionRate}% of sales optimization features implemented`,
          action: 'Focus on implementing high-impact features first'
        }] : []),
        ...(!features.upsell ? [{
          priority: 'high',
          message: 'Implement upsell functionality',
          action: 'Can increase AOV by 10-30% - Quick win!'
        }] : []),
        ...(!features.abandonedCart ? [{
          priority: 'high',
          message: 'Set up abandoned cart recovery',
          action: 'Recover 10-15% of lost sales automatically'
        }] : [])
      ]
    };
  }
};
```

### Phase 5: Frontend Components

#### `components/AuditForm.tsx`
```typescript
'use client';

import { useState } from 'react';

export default function AuditForm({ onSubmit, loading }) {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({ url: '', email: '', phone: '' });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validateUrl = (url: string) => {
    try {
      let testUrl = url.trim();
      if (!testUrl.startsWith('http://') && !testUrl.startsWith('https://')) {
        testUrl = 'https://' + testUrl;
      }
      new URL(testUrl);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    const newErrors = { url: '', email: '', phone: '' };
    
    // Validate all fields
    if (!url.trim()) {
      newErrors.url = 'Store URL is required';
    } else if (!validateUrl(url)) {
      newErrors.url = 'Please enter a valid URL';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required to receive your report';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);

    // If no errors, submit
    if (!newErrors.url && !newErrors.email && !newErrors.phone) {
      onSubmit({ url: url.trim(), email: email.trim(), phone: phone.trim() });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="text-center mb-8">
        <div className="inline-block mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <span className="text-3xl">💰</span>
          </div>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-3">
          Earn
        </h1>
        <p className="text-2xl text-gray-700 mb-2">
          Your Online Store Partner
        </p>
        <p className="text-base text-gray-500">
          By <span className="font-semibold text-blue-600">ScaleFront.io</span>
        </p>
        <p className="text-sm text-gray-600 mt-4 max-w-xl mx-auto">
          Get a comprehensive audit of your Shopify store in 60 seconds. Discover what's holding back your sales and get actionable recommendations to increase revenue.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <span className="text-2xl mr-3">🎁</span>
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Free Comprehensive Audit</h3>
              <p className="text-sm text-blue-700">
                We'll analyze 100+ factors and send a detailed PDF report to your email within 2 minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Store URL Input */}
        <div>
          <label htmlFor="url" className="block text-sm font-semibold text-gray-700 mb-2">
            Your Shopify Store URL *
          </label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="example.myshopify.com or yourdomain.com"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
              errors.url ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
            disabled={loading}
          />
          {errors.url && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <span className="mr-1">⚠️</span>
              {errors.url}
            </p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
              errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
            disabled={loading}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <span className="mr-1">⚠️</span>
              {errors.email}
            </p>
          )}
          <p className="mt-1 text-xs text-gray-500">
            We'll send your detailed audit report to this email
          </p>
        </div>

        {/* Phone Input */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
              errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
            disabled={loading}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <span className="mr-1">⚠️</span>
              {errors.phone}
            </p>
          )}
          <p className="mt-1 text-xs text-gray-500">
            For priority support and consultation booking
          </p>
        </div>

        <button
          type="submit"
          disabled={loading || !url.trim() || !email.trim() || !phone.trim()}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing Your Store...
            </span>
          ) : (
            '🚀 Get My Free Audit Report'
          )}
        </button>

        <p className="text-xs text-center text-gray-500 mt-4">
          By submitting, you agree to receive your audit report and occasional tips from ScaleFront.io. 
          We respect your privacy and never spam.
        </p>
      </form>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            10+
          </div>
          <div className="text-sm text-gray-600 mt-1">Audit Categories</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            100+
          </div>
          <div className="text-sm text-gray-600 mt-1">Checks Performed</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            60s
          </div>
          <div className="text-sm text-gray-600 mt-1">Average Time</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Free
          </div>
          <div className="text-sm text-gray-600 mt-1">No Credit Card</div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-10 text-center">
        <p className="text-sm text-gray-600 mb-4">Trusted by 500+ Shopify stores</p>
        <div className="flex justify-center items-center space-x-8 text-gray-400">
          <div className="flex items-center">
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <span className="ml-2 text-sm text-gray-600">4.9/5 rating</span>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-4xl mb-3">📊</div>
          <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Analysis</h3>
          <p className="text-sm text-gray-600">
            SEO, Performance, Security, Sales Optimization & more
          </p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-3">💡</div>
          <h3 className="font-semibold text-gray-900 mb-2">Actionable Insights</h3>
          <p className="text-sm text-gray-600">
            Get clear, prioritized recommendations you can implement today
          </p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-3">📈</div>
          <h3 className="font-semibold text-gray-900 mb-2">Increase Revenue</h3>
          <p className="text-sm text-gray-600">
            Find hidden opportunities to boost conversions and sales
          </p>
        </div>
      </div>
    </div>
  );
}
```

#### `components/ResultsDashboard.tsx`
```typescript
'use client';

import { useState } from 'react';
import ScoreGauge from './ScoreGauge';
import IssueList from './IssueList';
import RecommendationCard from './RecommendationCard';

export default function ResultsDashboard({ results }) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'seo', label: 'SEO', icon: '🔍' },
    { id: 'performance', label: 'Performance', icon: '⚡' },
    { id: 'accessibility', label: 'Accessibility', icon: '♿' },
    { id: 'security', label: 'Security', icon: '🔒' },
    { id: 'shopify', label: 'Shopify', icon: '🛍️' },
    { id: 'salesOptimization', label: 'Sales Features', icon: '💰' }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Audit Results</h1>
            <p className="text-gray-600">{results.url}</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Export PDF
          </button>
        </div>
      </div>

      {/* Overall Score */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="flex items-center justify-center">
          <ScoreGauge score={results.overallScore} />
        </div>
        <p className="text-center mt-4 text-gray-600">
          Overall Health Score
        </p>
      </div>

      {/* Category Scores */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {Object.entries(results).map(([key, data]) => {
          if (['seo', 'performance', 'accessibility', 'security', 'shopify', 'salesOptimization'].includes(key)) {
            return (
              <div key={key} className="bg-white rounded-lg shadow p-4 text-center">
                <div className={`text-3xl font-bold ${
                  data.score >= 80 ? 'text-green-600' :
                  data.score >= 60 ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  {data.score}
                </div>
                <div className="text-sm text-gray-600 capitalize">
                  {key === 'salesOptimization' ? 'Sales' : key}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex space-x-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Top Priority Issues</h2>
            <IssueList issues={getAllCriticalIssues(results)} />
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Quick Wins</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {results.recommendations.slice(0, 4).map((rec, idx) => (
                <RecommendationCard key={idx} recommendation={rec} />
              ))}
            </div>
          </div>
        )}

        {['seo', 'performance', 'accessibility', 'security', 'shopify', 'salesOptimization'].includes(activeTab) && (
          <div>
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-bold mb-4 capitalize">
                {activeTab === 'salesOptimization' ? 'Sales Optimization' : activeTab} Metrics
              </h2>
              <MetricsDisplay metrics={results[activeTab].metrics} />
            </div>
            
            <IssueList issues={results[activeTab].issues} />
          </div>
        )}
      </div>
    </div>
  );
}

function getAllCriticalIssues(results) {
  const allIssues = [];
  ['seo', 'performance', 'accessibility', 'security', 'shopify', 'salesOptimization'].forEach(category => {
    if (results[category]?.issues) {
      allIssues.push(...results[category].issues.filter(i => i.severity === 'critical'));
    }
  });
  return allIssues;
}

function MetricsDisplay({ metrics }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {Object.entries(metrics).map(([key, value]) => (
        <div key={key} className="border border-gray-200 rounded p-3">
          <div className="text-sm text-gray-600 capitalize">
            {key.replace(/([A-Z])/g, ' $1').trim()}
          </div>
          <div className="text-lg font-semibold">
            {typeof value === 'boolean' ? (value ? '✓ Yes' : '✗ No') : value}
          </div>
        </div>
      ))}
    </div>
  );
}
```

### Phase 6: Lead Management & Email Reports

#### Lead Storage (`lib/leads/storeLeadInfo.ts`)
```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function storeLeadInfo(leadData: {
  url: string;
  email: string;
  phone: string;
  timestamp: Date;
}) {
  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          store_url: leadData.url,
          email: leadData.email,
          phone: leadData.phone,
          created_at: leadData.timestamp,
          status: 'pending',
          source: 'audit_tool'
        }
      ]);

    if (error) throw error;

    // Optional: Send to external CRM via webhook
    if (process.env.LEADS_WEBHOOK_URL) {
      await fetch(process.env.LEADS_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData)
      });
    }

    return data;
  } catch (error) {
    console.error('Error storing lead:', error);
    throw error;
  }
}
```

#### Email Report Sender (`lib/email/sendAuditReport.ts`)
```typescript
import nodemailer from 'nodemailer';
import { generatePDFReport } from '../pdf/generateReport';

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendAuditReport(email: string, results: any) {
  try {
    // Generate PDF report
    const pdfBuffer = await generatePDFReport(results);

    const mailOptions = {
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: email,
      subject: `Your Shopify Store Audit Report - ${results.overallScore}/100`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px; }
            .score { font-size: 48px; font-weight: bold; margin: 20px 0; }
            .section { background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px; }
            .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; color: #666; font-size: 12px; margin-top: 40px; }
            .priority { display: inline-block; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: bold; }
            .critical { background: #fee; color: #c00; }
            .high { background: #ffeaa7; color: #d63031; }
            .medium { background: #fff3cd; color: #856404; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>💰 Earn - Your Store Audit</h1>
              <div class="score">${results.overallScore}/100</div>
              <p>Your comprehensive Shopify store analysis is ready!</p>
            </div>

            <div class="section">
              <h2>🎯 Overall Health Score: ${results.overallScore}/100</h2>
              <p>We've analyzed your store across 6 key categories:</p>
              <ul>
                <li>SEO: ${results.seo.score}/100</li>
                <li>Performance: ${results.performance.score}/100</li>
                <li>Accessibility: ${results.accessibility.score}/100</li>
                <li>Security: ${results.security.score}/100</li>
                <li>Shopify Features: ${results.shopify.score}/100</li>
                <li>Sales Optimization: ${results.salesOptimization.score}/100</li>
              </ul>
            </div>

            <div class="section">
              <h2>🚨 Top Priority Issues</h2>
              ${getCriticalIssues(results).slice(0, 5).map(issue => `
                <div style="margin: 10px 0; padding: 10px; background: white; border-left: 4px solid #c00;">
                  <span class="priority ${issue.severity}">${issue.severity.toUpperCase()}</span>
                  <strong>${issue.issue}</strong>
                  <p style="margin: 5px 0 0 0; color: #666;">${issue.recommendation}</p>
                </div>
              `).join('')}
            </div>

            <div class="section">
              <h2>💡 Quick Wins (Easy Fixes)</h2>
              <p>These high-impact changes can be implemented quickly:</p>
              ${results.recommendations.slice(0, 3).map(rec => `
                <div style="margin: 10px 0; padding: 10px; background: white;">
                  ✅ <strong>${rec.title}</strong>
                  <p style="margin: 5px 0 0 0; color: #666;">${rec.description}</p>
                </div>
              `).join('')}
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <p><strong>📄 Your detailed PDF report is attached!</strong></p>
              <a href="https://scalefront.io/earn" class="button">
                View Full Report Online
              </a>
            </div>

            <div class="section">
              <h2>📈 Want Help Implementing These Changes?</h2>
              <p>ScaleFront.io specializes in Shopify optimization. Our team can:</p>
              <ul>
                <li>Fix all technical SEO issues</li>
                <li>Improve page load speed by 50%+</li>
                <li>Implement conversion optimization features</li>
                <li>Set up abandoned cart recovery systems</li>
                <li>Install and configure sales optimization apps</li>
              </ul>
              <a href="https://scalefront.io/contact" class="button">
                Book Free Consultation
              </a>
            </div>

            <div class="footer">
              <p><strong>Earn - Your Online Store Partner</strong></p>
              <p>By ScaleFront.io</p>
              <p>Questions? Reply to this email or visit <a href="https://scalefront.io">scalefront.io</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
      attachments: [
        {
          filename: `${results.domain}-audit-report.pdf`,
          content: pdfBuffer,
          contentType: 'application/pdf'
        }
      ]
    };

    await transporter.sendMail(mailOptions);
    console.log('Audit report sent to:', email);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

function getCriticalIssues(results: any) {
  const allIssues: any[] = [];
  ['seo', 'performance', 'accessibility', 'security', 'shopify', 'salesOptimization'].forEach(category => {
    if (results[category]?.issues) {
      allIssues.push(...results[category].issues);
    }
  });
  return allIssues
    .filter(i => ['critical', 'high'].includes(i.severity))
    .sort((a, b) => {
      const severityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
      return severityOrder[a.severity] - severityOrder[b.severity];
    });
}
```

#### Database Schema (Supabase)
```sql
-- Create leads table
CREATE TABLE leads (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  store_url TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending',
  source TEXT DEFAULT 'audit_tool',
  overall_score INTEGER,
  audit_data JSONB,
  follow_up_date TIMESTAMP WITH TIME ZONE,
  notes TEXT
);

-- Create index for faster queries
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_leads_status ON leads(status);

-- Create audit_results table for historical tracking
CREATE TABLE audit_results (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  lead_id UUID REFERENCES leads(id),
  store_url TEXT NOT NULL,
  audit_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  overall_score INTEGER,
  seo_score INTEGER,
  performance_score INTEGER,
  accessibility_score INTEGER,
  security_score INTEGER,
  shopify_score INTEGER,
  sales_optimization_score INTEGER,
  full_results JSONB,
  recommendations JSONB
);
```

### Phase 7: PDF Report Generation

#### Deployment Options
1. **Vercel** (Recommended for Next.js)
   ```bash
   vercel --prod
   ```

2. **Netlify**
   ```bash
   netlify deploy --prod
   ```

3. **Docker**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

---

## Additional Features to Implement

### 1. PDF Report Generation
```bash
npm install jspdf html2canvas
```

### 2. Historical Tracking
- Store audit results in database (Supabase/PostgreSQL)
- Show trend charts
- Compare audits over time

### 3. Scheduled Audits
- Set up cron jobs
- Email notifications
- Weekly/monthly reports

### 4. White-Label Option
- Custom branding
- Remove ScaleFront branding
- Custom domain support

### 5. API Access
- RESTful API for programmatic access
- Webhook integrations
- Batch auditing

---

## Environment Variables

```env
# .env.local
NEXT_PUBLIC_APP_NAME="Earn - Your Online Store Partner"
NEXT_PUBLIC_COMPANY_NAME="ScaleFront.io"
NEXT_PUBLIC_APP_URL="https://earn.scalefront.io"

# Database (if using persistence)
DATABASE_URL="postgresql://..."
SUPABASE_URL="https://..."
SUPABASE_ANON_KEY="..."

# Email (for notifications and report delivery)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-password"
FROM_EMAIL="reports@scalefront.io"
FROM_NAME="Earn - ScaleFront.io"

# SMS (Twilio for SMS notifications - optional)
TWILIO_ACCOUNT_SID="your-twilio-sid"
TWILIO_AUTH_TOKEN="your-twilio-token"
TWILIO_PHONE_NUMBER="+1234567890"

# Lead Management
LEADS_WEBHOOK_URL="https://your-crm.com/webhook" # Optional: Send leads to CRM

# Analytics
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

---

## Testing Strategy

### Unit Tests
```bash
npm install --save-dev jest @testing-library/react
```

### E2E Tests
```bash
npm install --save-dev playwright
```

### Test Coverage
- SEO auditor: 100+ test URLs
- Performance: Different load times
- Accessibility: WCAG compliance
- Security: Various header configurations

---

## Monetization Strategy

### Pricing Tiers
1. **Free Tier**
   - 3 audits per month
   - Basic recommendations
   - No historical data

2. **Pro Tier** ($29/month)
   - Unlimited audits
   - Historical tracking
   - Priority recommendations
   - PDF exports

3. **Agency Tier** ($99/month)
   - Everything in Pro
   - White-label reports
   - API access
   - Multiple team members
   - Bulk auditing

---

## Marketing Integration

### Lead Capture
- Email collection before showing full results
- CTA for ScaleFront.io services
- Free consultation booking

### Analytics
- Track most common issues
- Conversion funnel analysis
- User behavior tracking

---

## Next Steps

1. **Phase 1**: Build core auditing engine
2. **Phase 2**: Create frontend dashboard
3. **Phase 3**: Add PDF export
4. **Phase 4**: Implement user accounts
5. **Phase 5**: Add historical tracking
6. **Phase 6**: Launch beta version
7. **Phase 7**: Marketing & SEO
8. **Phase 8**: Scale and optimize

---

## Support & Documentation

### User Documentation
- How to interpret scores
- Understanding recommendations
- Best practices guide
- Video tutorials

### Developer Documentation
- API reference
- Integration guides
- Custom plugin development

---

## Success Metrics

- Audits performed per day
- User signup rate
- Free to paid conversion
- Average audit score improvement
- Customer retention rate

---

Built with ❤️ by ScaleFront.io