import * as cheerio from 'cheerio';
import { Issue, AuditResult } from '../types';

export const enhancedSeoAuditor = {
  analyze: async (html: string, url: string): Promise<AuditResult> => {
    const $ = cheerio.load(html);
    const issues: Issue[] = [];
    let score = 100;

    // ========== META TAGS ==========
    const title = $('title').text();
    if (!title) {
      issues.push({
        severity: 'critical',
        category: 'SEO',
        issue: 'Missing page title',
        recommendation: 'Add a unique, descriptive title tag (50-60 characters)',
      });
      score -= 15;
    } else if (title.length > 60) {
      issues.push({
        severity: 'medium',
        category: 'SEO',
        issue: 'Title too long',
        recommendation: `Title is ${title.length} characters. Keep it under 60.`,
      });
      score -= 5;
    } else if (title.length < 30) {
      issues.push({
        severity: 'low',
        category: 'SEO',
        issue: 'Title too short',
        recommendation: `Title is ${title.length} characters. Aim for 50-60 characters.`,
      });
      score -= 3;
    }

    const description = $('meta[name="description"]').attr('content');
    if (!description) {
      issues.push({
        severity: 'high',
        category: 'SEO',
        issue: 'Missing meta description',
        recommendation: 'Add a compelling meta description (150-160 characters)',
      });
      score -= 10;
    } else if (description.length > 160) {
      issues.push({
        severity: 'low',
        category: 'SEO',
        issue: 'Meta description too long',
        recommendation: 'Shorten meta description to under 160 characters',
      });
      score -= 3;
    } else if (description.length < 120) {
      issues.push({
        severity: 'low',
        category: 'SEO',
        issue: 'Meta description too short',
        recommendation: 'Expand meta description to 150-160 characters for better visibility',
      });
      score -= 2;
    }

    // ========== HEADING STRUCTURE ==========
    const h1Tags = $('h1');
    if (h1Tags.length === 0) {
      issues.push({
        severity: 'high',
        category: 'SEO',
        issue: 'No H1 tag found',
        recommendation: 'Add exactly one H1 tag with your main keyword',
      });
      score -= 10;
    } else if (h1Tags.length > 1) {
      issues.push({
        severity: 'medium',
        category: 'SEO',
        issue: `Multiple H1 tags found (${h1Tags.length})`,
        recommendation: 'Use only one H1 tag per page',
      });
      score -= 5;
    }

    // Check heading hierarchy
    const headings = $('h1, h2, h3, h4, h5, h6');
    const headingLevels: number[] = [];
    headings.each((i, el) => {
      const level = parseInt(el.tagName.substring(1));
      headingLevels.push(level);
    });

    let hierarchyBroken = false;
    for (let i = 1; i < headingLevels.length; i++) {
      if (headingLevels[i] - headingLevels[i - 1] > 1) {
        hierarchyBroken = true;
        break;
      }
    }

    if (hierarchyBroken) {
      issues.push({
        severity: 'medium',
        category: 'SEO',
        issue: 'Heading hierarchy not sequential',
        recommendation: 'Use headings in order (h1 → h2 → h3) without skipping levels',
      });
      score -= 5;
    }

    // ========== IMAGE ALT TEXT ==========
    const images = $('img');
    const imagesWithoutAlt = images.filter((i, el) => !$(el).attr('alt')).length;
    if (imagesWithoutAlt > 0) {
      issues.push({
        severity: 'medium',
        category: 'SEO',
        issue: `${imagesWithoutAlt} images missing alt text`,
        recommendation: 'Add descriptive alt text to all images for accessibility and SEO',
      });
      score -= Math.min(imagesWithoutAlt * 2, 15);
    }

    // Check for empty alt tags
    const emptyAltImages = images.filter((i, el) => {
      const alt = $(el).attr('alt');
      return alt === '';
    }).length;

    if (emptyAltImages > 0) {
      issues.push({
        severity: 'low',
        category: 'SEO',
        issue: `${emptyAltImages} images have empty alt attributes`,
        recommendation: 'Replace empty alt="" with descriptive text, or remove if decorative',
      });
      score -= Math.min(emptyAltImages, 5);
    }

    // ========== OPEN GRAPH TAGS ==========
    const ogTitle = $('meta[property="og:title"]').attr('content');
    const ogDescription = $('meta[property="og:description"]').attr('content');
    const ogImage = $('meta[property="og:image"]').attr('content');
    const ogUrl = $('meta[property="og:url"]').attr('content');
    const ogType = $('meta[property="og:type"]').attr('content');

    if (!ogTitle || !ogDescription || !ogImage) {
      issues.push({
        severity: 'medium',
        category: 'SEO',
        issue: 'Incomplete Open Graph tags',
        recommendation: 'Add og:title, og:description, og:image, og:url, and og:type for better social sharing',
      });
      score -= 5;
    }

    // ========== TWITTER CARD TAGS ==========
    const twitterCard = $('meta[name="twitter:card"]').attr('content');
    const twitterTitle = $('meta[name="twitter:title"]').attr('content');
    const twitterDescription = $('meta[name="twitter:description"]').attr('content');
    const twitterImage = $('meta[name="twitter:image"]').attr('content');

    if (!twitterCard || !twitterTitle || !twitterDescription || !twitterImage) {
      issues.push({
        severity: 'low',
        category: 'SEO',
        issue: 'Incomplete Twitter Card tags',
        recommendation: 'Add Twitter Card meta tags for optimized Twitter sharing',
      });
      score -= 3;
    }

    // ========== CANONICAL URL ==========
    const canonical = $('link[rel="canonical"]').attr('href');
    if (!canonical) {
      issues.push({
        severity: 'medium',
        category: 'SEO',
        issue: 'Missing canonical URL',
        recommendation: 'Add canonical tag to prevent duplicate content issues',
      });
      score -= 5;
    } else {
      // Check if canonical is absolute URL
      try {
        new URL(canonical);
      } catch {
        issues.push({
          severity: 'low',
          category: 'SEO',
          issue: 'Canonical URL is not absolute',
          recommendation: 'Use absolute URLs for canonical tags (e.g., https://example.com/page)',
        });
        score -= 2;
      }
    }

    // ========== SCHEMA MARKUP ==========
    const schemas = $('script[type="application/ld+json"]');
    const schemaTypes: string[] = [];

    schemas.each((i, el) => {
      try {
        const content = $(el).html();
        if (content) {
          const parsed = JSON.parse(content);
          const type = parsed['@type'];
          if (type) {
            if (Array.isArray(type)) {
              schemaTypes.push(...type);
            } else {
              schemaTypes.push(type);
            }
          }
        }
      } catch (e) {
        // Invalid JSON
      }
    });

    if (schemas.length === 0) {
      issues.push({
        severity: 'high',
        category: 'SEO',
        issue: 'No structured data found',
        recommendation: 'Add schema markup (Product, Organization, BreadcrumbList) for rich results',
      });
      score -= 10;
    } else {
      // Check for recommended schema types
      const hasOrganization = schemaTypes.includes('Organization');
      const hasWebSite = schemaTypes.includes('WebSite');
      const hasBreadcrumb = schemaTypes.includes('BreadcrumbList');

      if (!hasOrganization) {
        issues.push({
          severity: 'low',
          category: 'SEO',
          issue: 'Missing Organization schema',
          recommendation: 'Add Organization schema for better brand recognition in search',
        });
        score -= 3;
      }

      if (!hasWebSite) {
        issues.push({
          severity: 'low',
          category: 'SEO',
          issue: 'Missing WebSite schema',
          recommendation: 'Add WebSite schema with search action for sitelinks searchbox',
        });
        score -= 2;
      }
    }

    // ========== INTERNAL LINKS ==========
    const internalLinks = $('a[href^="/"], a[href^="' + url + '"]').length;
    if (internalLinks < 3) {
      issues.push({
        severity: 'low',
        category: 'SEO',
        issue: 'Few internal links',
        recommendation: 'Add more internal links to improve site structure and crawlability',
      });
      score -= 3;
    } else if (internalLinks > 100) {
      issues.push({
        severity: 'low',
        category: 'SEO',
        issue: `Too many internal links (${internalLinks})`,
        recommendation: 'Reduce internal links to under 100 per page for better link equity distribution',
      });
      score -= 2;
    }

    // ========== EXTERNAL LINKS ==========
    const externalLinks = $('a[href^="http"]').filter((i, el) => {
      const href = $(el).attr('href');
      return href && !href.includes(new URL(url).hostname);
    });

    let externalLinksWithoutNofollow = 0;
    externalLinks.each((i, el) => {
      const rel = $(el).attr('rel');
      if (!rel || !rel.includes('nofollow')) {
        externalLinksWithoutNofollow++;
      }
    });

    // ========== ROBOTS META TAG ==========
    const robotsMeta = $('meta[name="robots"]').attr('content');
    if (robotsMeta && (robotsMeta.includes('noindex') || robotsMeta.includes('nofollow'))) {
      issues.push({
        severity: 'critical',
        category: 'SEO',
        issue: 'Page is set to noindex or nofollow',
        recommendation: 'Remove noindex/nofollow directives unless intentional',
      });
      score -= 20;
    }

    // ========== VIEWPORT META TAG ==========
    const viewport = $('meta[name="viewport"]').attr('content');
    if (!viewport) {
      issues.push({
        severity: 'high',
        category: 'SEO',
        issue: 'Missing viewport meta tag',
        recommendation: 'Add <meta name="viewport" content="width=device-width, initial-scale=1"> for mobile optimization',
      });
      score -= 8;
    } else if (!viewport.includes('width=device-width')) {
      issues.push({
        severity: 'medium',
        category: 'SEO',
        issue: 'Viewport not set for mobile devices',
        recommendation: 'Set viewport width to device-width for responsive design',
      });
      score -= 5;
    }

    // ========== LANGUAGE ATTRIBUTE ==========
    const htmlLang = $('html').attr('lang');
    if (!htmlLang) {
      issues.push({
        severity: 'medium',
        category: 'SEO',
        issue: 'Missing language attribute',
        recommendation: 'Add lang attribute to <html> tag (e.g., <html lang="en">)',
      });
      score -= 5;
    }

    // ========== HREFLANG TAGS (for international sites) ==========
    const hreflangLinks = $('link[rel="alternate"][hreflang]');
    const hasHreflang = hreflangLinks.length > 0;

    // ========== URL STRUCTURE ANALYSIS ==========
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;

    if (pathname.includes('_') || pathname.includes('%20')) {
      issues.push({
        severity: 'low',
        category: 'SEO',
        issue: 'URL contains underscores or spaces',
        recommendation: 'Use hyphens (-) instead of underscores (_) or spaces in URLs',
      });
      score -= 2;
    }

    if (pathname.length > 100) {
      issues.push({
        severity: 'low',
        category: 'SEO',
        issue: 'URL is too long',
        recommendation: 'Keep URLs under 100 characters for better usability and SEO',
      });
      score -= 2;
    }

    // Check for URL parameters
    if (urlObj.search) {
      issues.push({
        severity: 'low',
        category: 'SEO',
        issue: 'URL contains query parameters',
        recommendation: 'Use clean URLs without parameters when possible, or use canonical tags',
      });
      score -= 1;
    }

    // ========== KEYWORD DENSITY ANALYSIS ==========
    const bodyText = $('body').text().toLowerCase();
    const words = bodyText.split(/\s+/).filter(w => w.length > 3);
    const wordCount = words.length;

    // Count word frequency
    const wordFrequency: { [key: string]: number } = {};
    words.forEach(word => {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });

    // Get top keywords
    const topKeywords = Object.entries(wordFrequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([word, count]) => ({
        word,
        count,
        density: ((count / wordCount) * 100).toFixed(2) + '%'
      }));

    // Check if title keywords are in content
    const titleWords = title.toLowerCase().split(/\s+/).filter(w => w.length > 3);
    const titleKeywordsInContent = titleWords.filter(word =>
      bodyText.includes(word)
    ).length;

    if (titleWords.length > 0 && titleKeywordsInContent / titleWords.length < 0.5) {
      issues.push({
        severity: 'medium',
        category: 'SEO',
        issue: 'Title keywords not found in content',
        recommendation: 'Ensure keywords from your title appear in the page content',
      });
      score -= 5;
    }

    return {
      score: Math.max(score, 0),
      issues,
      metrics: {
        title: { value: title, length: title?.length || 0 },
        description: { value: description || 'N/A', length: description?.length || 0 },
        h1Count: h1Tags.length,
        headingHierarchy: headingLevels,
        imagesTotal: images.length,
        imagesWithoutAlt,
        imagesWithEmptyAlt: emptyAltImages,
        internalLinks,
        externalLinks: externalLinks.length,
        externalLinksWithoutNofollow,
        hasSchema: schemas.length > 0,
        schemaTypes,
        hasCanonical: !!canonical,
        hasOpenGraph: !!(ogTitle && ogDescription && ogImage),
        openGraphComplete: !!(ogTitle && ogDescription && ogImage && ogUrl && ogType),
        hasTwitterCard: !!(twitterCard && twitterTitle && twitterDescription && twitterImage),
        hasViewport: !!viewport,
        hasLangAttribute: !!htmlLang,
        hasHreflang,
        urlLength: pathname.length,
        wordCount,
        topKeywords,
        robotsDirective: robotsMeta || 'none',
      },
    };
  },
};
