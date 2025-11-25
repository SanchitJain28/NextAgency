import * as cheerio from 'cheerio';
import { Issue, AuditResult } from '../types';

export const technicalSeoAuditor = {
  analyze: async (html: string, url: string, headers: Headers): Promise<AuditResult> => {
    const $ = cheerio.load(html);
    const issues: Issue[] = [];
    let score = 100;
    const urlObj = new URL(url);
    const baseUrl = `${urlObj.protocol}//${urlObj.hostname}`;

    // ========== ROBOTS.TXT CHECK ==========
    let robotsTxtExists = false;
    let robotsTxtContent = '';
    let robotsTxtErrors: string[] = [];

    try {
      const robotsResponse = await fetch(`${baseUrl}/robots.txt`, {
        method: 'GET',
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ScaleFront-Auditor/1.0)' },
        signal: AbortSignal.timeout(5000)
      });

      if (robotsResponse.ok) {
        robotsTxtExists = true;
        robotsTxtContent = await robotsResponse.text();

        // Check robots.txt content
        if (robotsTxtContent.toLowerCase().includes('disallow: /')) {
          const lines = robotsTxtContent.split('\n');
          const disallowAll = lines.some(line =>
            line.trim().toLowerCase() === 'disallow: /' ||
            line.trim().toLowerCase() === 'disallow:/'
          );

          if (disallowAll) {
            issues.push({
              severity: 'critical',
              category: 'Technical SEO',
              issue: 'robots.txt blocks all pages',
              recommendation: 'Your robots.txt contains "Disallow: /" which blocks all search engines. Remove this line.',
            });
            score -= 25;
            robotsTxtErrors.push('Blocks all pages');
          }
        }

        // Check for sitemap reference
        const hasSitemapReference = robotsTxtContent.toLowerCase().includes('sitemap:');
        if (!hasSitemapReference) {
          issues.push({
            severity: 'medium',
            category: 'Technical SEO',
            issue: 'robots.txt missing sitemap reference',
            recommendation: 'Add "Sitemap: https://yourdomain.com/sitemap.xml" to robots.txt',
          });
          score -= 5;
        }
      } else {
        issues.push({
          severity: 'low',
          category: 'Technical SEO',
          issue: 'robots.txt not found',
          recommendation: 'Create a robots.txt file to guide search engine crawlers',
        });
        score -= 3;
      }
    } catch (error) {
      // Timeout or network error
      issues.push({
        severity: 'low',
        category: 'Technical SEO',
        issue: 'Could not fetch robots.txt',
        recommendation: 'Ensure robots.txt is accessible at the root of your domain',
      });
      score -= 2;
    }

    // ========== SITEMAP.XML CHECK ==========
    let sitemapExists = false;
    let sitemapUrls = 0;
    let sitemapErrors: string[] = [];

    // Try common sitemap locations
    const sitemapUrls_toCheck = [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap_index.xml`,
      `${baseUrl}/sitemap1.xml`,
    ];

    for (const sitemapUrl of sitemapUrls_toCheck) {
      try {
        const sitemapResponse = await fetch(sitemapUrl, {
          method: 'GET',
          headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ScaleFront-Auditor/1.0)' },
          signal: AbortSignal.timeout(5000)
        });

        if (sitemapResponse.ok) {
          sitemapExists = true;
          const sitemapContent = await sitemapResponse.text();

          // Parse sitemap
          try {
            const sitemap$ = cheerio.load(sitemapContent, { xmlMode: true });
            const urlElements = sitemap$('url').length;
            const sitemapIndexElements = sitemap$('sitemap').length;

            sitemapUrls = urlElements + sitemapIndexElements;

            // Check for lastmod dates
            const hasLastMod = sitemap$('lastmod').length > 0;
            if (!hasLastMod && urlElements > 0) {
              issues.push({
                severity: 'low',
                category: 'Technical SEO',
                issue: 'Sitemap missing lastmod dates',
                recommendation: 'Add <lastmod> tags to help search engines understand content freshness',
              });
              score -= 2;
            }

            // Check for priority tags
            const hasPriority = sitemap$('priority').length > 0;
            if (!hasPriority && urlElements > 0) {
              issues.push({
                severity: 'low',
                category: 'Technical SEO',
                issue: 'Sitemap missing priority tags',
                recommendation: 'Add <priority> tags to indicate relative importance of pages',
              });
              score -= 1;
            }

            // Check sitemap size
            if (urlElements > 50000) {
              issues.push({
                severity: 'medium',
                category: 'Technical SEO',
                issue: 'Sitemap exceeds 50,000 URLs',
                recommendation: 'Split your sitemap into multiple files using a sitemap index',
              });
              score -= 5;
              sitemapErrors.push('Exceeds URL limit');
            }
          } catch (parseError) {
            sitemapErrors.push('Invalid XML format');
          }

          break; // Found a working sitemap
        }
      } catch (error) {
        // Continue to next sitemap URL
      }
    }

    if (!sitemapExists) {
      issues.push({
        severity: 'high',
        category: 'Technical SEO',
        issue: 'XML sitemap not found',
        recommendation: 'Create and submit an XML sitemap to help search engines discover your pages',
      });
      score -= 10;
    }

    // ========== BROKEN LINKS DETECTION ==========
    const links = $('a[href]');
    const uniqueLinks = new Set<string>();
    let brokenLinks: string[] = [];
    let redirectChains: string[] = [];

    // Collect unique links (sample first 50 for performance)
    links.slice(0, 50).each((i, el) => {
      const href = $(el).attr('href');
      if (href && !href.startsWith('#') && !href.startsWith('javascript:') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        try {
          // Convert relative URLs to absolute
          const absoluteUrl = new URL(href, url).href;
          uniqueLinks.add(absoluteUrl);
        } catch (e) {
          // Invalid URL
        }
      }
    });

    // Check links (limit to 20 for performance)
    let checkedLinks = 0;
    for (const link of Array.from(uniqueLinks).slice(0, 20)) {
      try {
        const linkResponse = await fetch(link, {
          method: 'HEAD',
          headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ScaleFront-Auditor/1.0)' },
          redirect: 'manual',
          signal: AbortSignal.timeout(3000)
        });

        if (linkResponse.status >= 400) {
          brokenLinks.push(link);
        } else if (linkResponse.status >= 300 && linkResponse.status < 400) {
          // Check if it's a redirect chain
          const location = linkResponse.headers.get('location');
          if (location) {
            try {
              const redirectResponse = await fetch(location, {
                method: 'HEAD',
                headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ScaleFront-Auditor/1.0)' },
                redirect: 'manual',
                signal: AbortSignal.timeout(3000)
              });

              if (redirectResponse.status >= 300 && redirectResponse.status < 400) {
                redirectChains.push(link);
              }
            } catch (e) {
              // Couldn't check redirect target
            }
          }
        }

        checkedLinks++;
      } catch (error) {
        // Link check failed (timeout or error)
      }
    }

    if (brokenLinks.length > 0) {
      issues.push({
        severity: 'medium',
        category: 'Technical SEO',
        issue: `${brokenLinks.length} broken links detected`,
        recommendation: 'Fix or remove broken links to improve user experience and SEO',
      });
      score -= Math.min(brokenLinks.length * 2, 10);
    }

    if (redirectChains.length > 0) {
      issues.push({
        severity: 'medium',
        category: 'Technical SEO',
        issue: `${redirectChains.length} redirect chains detected`,
        recommendation: 'Update links to point directly to final destination to reduce latency',
      });
      score -= Math.min(redirectChains.length * 2, 8);
    }

    // ========== INDEXABILITY STATUS ==========
    const robotsMeta = $('meta[name="robots"]').attr('content') || '';
    const xRobotsTag = headers.get('x-robots-tag') || '';

    const isNoIndex = robotsMeta.toLowerCase().includes('noindex') ||
                     xRobotsTag.toLowerCase().includes('noindex');

    if (isNoIndex) {
      issues.push({
        severity: 'critical',
        category: 'Technical SEO',
        issue: 'Page set to noindex',
        recommendation: 'Remove noindex directive if you want this page to appear in search results',
      });
      score -= 20;
    }

    // ========== DUPLICATE CONTENT (Meta Analysis) ==========
    const duplicateMetaIssues: string[] = [];

    // Check if title matches H1 exactly (potential duplicate content signal)
    const h1Text = $('h1').first().text().trim();
    const pageTitle = $('title').text().trim();

    if (h1Text && pageTitle && h1Text.toLowerCase() === pageTitle.toLowerCase()) {
      issues.push({
        severity: 'low',
        category: 'Technical SEO',
        issue: 'H1 and title tag are identical',
        recommendation: 'Differentiate H1 and title tag for better SEO optimization',
      });
      score -= 2;
    }

    // ========== MOBILE-FRIENDLY TEST ==========
    const viewport = $('meta[name="viewport"]').attr('content');
    const hasMobileViewport = viewport && viewport.includes('width=device-width');

    if (!hasMobileViewport) {
      issues.push({
        severity: 'high',
        category: 'Technical SEO',
        issue: 'Page not optimized for mobile',
        recommendation: 'Add viewport meta tag: <meta name="viewport" content="width=device-width, initial-scale=1">',
      });
      score -= 12;
    }

    // Check for mobile-unfriendly elements
    const flashElements = $('object[type="application/x-shockwave-flash"], embed[type="application/x-shockwave-flash"]').length;
    if (flashElements > 0) {
      issues.push({
        severity: 'high',
        category: 'Technical SEO',
        issue: 'Page uses Flash content',
        recommendation: 'Replace Flash with HTML5 - Flash is not supported on mobile devices',
      });
      score -= 10;
    }

    // Check viewport width
    const viewportWidth = $('meta[name="viewport"]').attr('content');
    if (viewportWidth && viewportWidth.includes('width=') && !viewportWidth.includes('device-width')) {
      issues.push({
        severity: 'medium',
        category: 'Technical SEO',
        issue: 'Fixed viewport width detected',
        recommendation: 'Use device-width instead of fixed width for better mobile compatibility',
      });
      score -= 5;
    }

    // ========== STRUCTURED DATA VALIDATION ==========
    const schemas = $('script[type="application/ld+json"]');
    let validSchemas = 0;
    let invalidSchemas = 0;

    schemas.each((i, el) => {
      try {
        const content = $(el).html();
        if (content) {
          const parsed = JSON.parse(content);
          if (parsed['@context'] && parsed['@type']) {
            validSchemas++;
          } else {
            invalidSchemas++;
          }
        }
      } catch (e) {
        invalidSchemas++;
      }
    });

    if (invalidSchemas > 0) {
      issues.push({
        severity: 'medium',
        category: 'Technical SEO',
        issue: `${invalidSchemas} invalid structured data blocks`,
        recommendation: 'Fix JSON-LD syntax errors and validate with Google\'s Rich Results Test',
      });
      score -= Math.min(invalidSchemas * 3, 10);
    }

    return {
      score: Math.max(score, 0),
      issues,
      metrics: {
        robotsTxtExists,
        robotsTxtErrors,
        sitemapExists,
        sitemapUrls,
        sitemapErrors,
        brokenLinksCount: brokenLinks.length,
        brokenLinks: brokenLinks.slice(0, 10), // Return first 10 for display
        redirectChainsCount: redirectChains.length,
        redirectChains: redirectChains.slice(0, 10),
        isIndexable: !isNoIndex,
        isMobileFriendly: hasMobileViewport,
        hasFlash: flashElements > 0,
        validSchemas,
        invalidSchemas,
        linksChecked: checkedLinks,
        totalLinks: uniqueLinks.size,
      },
    };
  },
};
