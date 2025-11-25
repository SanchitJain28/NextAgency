import * as cheerio from 'cheerio';
import { Issue, AuditResult } from '../types';

export const performanceAuditor = {
  analyze: async (html: string, headers: Headers, responseTime: number, url?: string): Promise<AuditResult> => {
    const $ = cheerio.load(html);
    const issues: Issue[] = [];
    let score = 100;

    // Response Time
    if (responseTime > 3000) {
      issues.push({
        severity: 'critical',
        category: 'Performance',
        issue: `Slow page load time (${responseTime}ms)`,
        recommendation: 'Optimize server response time to under 1000ms. Consider using a CDN, optimizing database queries, and enabling caching.',
      });
      score -= 20;
    } else if (responseTime > 1000) {
      issues.push({
        severity: 'medium',
        category: 'Performance',
        issue: `Page load time could be improved (${responseTime}ms)`,
        recommendation: 'Target response time under 1000ms for optimal user experience',
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
        recommendation: 'Enable Gzip or Brotli compression to reduce transfer size by up to 70%',
      });
      score -= 15;
    }

    // Image Optimization
    const images = $('img');
    let unoptimizedImages = 0;
    let nonLazyImages = 0;

    images.each((i, el) => {
      const src = $(el).attr('src');
      const loading = $(el).attr('loading');

      if (src && !src.includes('.webp') && !src.includes('.avif') && !src.includes('cdn.shopify.com')) {
        unoptimizedImages++;
      }

      if (i > 2 && (!loading || loading !== 'lazy')) {
        nonLazyImages++;
      }
    });

    if (unoptimizedImages > 0) {
      issues.push({
        severity: 'medium',
        category: 'Performance',
        issue: `${unoptimizedImages} images not optimized`,
        recommendation: 'Convert images to WebP or AVIF format for 30-50% smaller file sizes',
      });
      score -= Math.min(unoptimizedImages * 2, 15);
    }

    if (nonLazyImages > 0) {
      issues.push({
        severity: 'medium',
        category: 'Performance',
        issue: `${nonLazyImages} images without lazy loading`,
        recommendation: 'Add loading="lazy" attribute to below-the-fold images',
      });
      score -= Math.min(nonLazyImages, 10);
    }

    // JavaScript Files - Measure actual sizes
    const scriptTags = $('script[src]');
    const scriptSources: string[] = [];
    scriptTags.each((i, el) => {
      const src = $(el).attr('src');
      if (src) scriptSources.push(src);
    });

    let totalJSSize = 0;
    let measuredJSFiles = 0;
    const largeJSFiles: string[] = [];

    // Measure first 10 JS files to avoid too many requests
    if (url && scriptSources.length > 0) {
      const jsFilesToMeasure = scriptSources.slice(0, Math.min(10, scriptSources.length));

      await Promise.all(
        jsFilesToMeasure.map(async (src) => {
          try {
            const absoluteUrl = src.startsWith('http') ? src : new URL(src, url).href;
            const response = await fetch(absoluteUrl, {
              method: 'HEAD',
              signal: AbortSignal.timeout(3000),
            });
            const size = parseInt(response.headers.get('content-length') || '0');
            if (size > 0) {
              totalJSSize += size;
              measuredJSFiles++;
              // Flag files larger than 200KB
              if (size > 200000) {
                largeJSFiles.push(`${src.split('/').pop()} (${(size / 1024).toFixed(0)}KB)`);
              }
            }
          } catch (error) {
            // Skip files we can't measure
          }
        })
      );
    }

    const avgJSSize = measuredJSFiles > 0 ? totalJSSize / measuredJSFiles : 0;
    const estimatedTotalJSSize = avgJSSize * scriptSources.length;
    const totalJSSizeMB = estimatedTotalJSSize / (1024 * 1024);

    // Check for too many JS files
    if (scriptTags.length > 15) {
      issues.push({
        severity: 'medium',
        category: 'Performance',
        issue: `High number of JavaScript files (${scriptTags.length})`,
        recommendation: 'Bundle and minify JavaScript files to reduce HTTP requests',
      });
      score -= 10;
    }

    // Check for large total JS size
    if (totalJSSizeMB > 1) {
      issues.push({
        severity: 'high',
        category: 'Performance',
        issue: `Large total JavaScript size (~${totalJSSizeMB.toFixed(1)}MB)`,
        recommendation: 'Reduce JavaScript bundle size through code splitting, tree shaking, and removing unused dependencies. Target under 500KB total.',
      });
      score -= 15;
    } else if (totalJSSizeMB > 0.5) {
      issues.push({
        severity: 'medium',
        category: 'Performance',
        issue: `JavaScript size could be optimized (~${totalJSSizeMB.toFixed(1)}MB)`,
        recommendation: 'Consider code splitting and lazy loading to reduce initial bundle size',
      });
      score -= 8;
    }

    // Report individual large files
    if (largeJSFiles.length > 0) {
      issues.push({
        severity: 'medium',
        category: 'Performance',
        issue: `Large JavaScript files detected: ${largeJSFiles.join(', ')}`,
        recommendation: 'Split large bundles or lazy load non-critical JavaScript',
      });
      score -= 5;
    }

    // CSS Files - Measure actual sizes
    const cssTags = $('link[rel="stylesheet"]');
    const cssSources: string[] = [];
    cssTags.each((i, el) => {
      const href = $(el).attr('href');
      if (href) cssSources.push(href);
    });

    let totalCSSSize = 0;
    let measuredCSSFiles = 0;
    const largeCSSFiles: string[] = [];

    // Measure first 10 CSS files to avoid too many requests
    if (url && cssSources.length > 0) {
      const cssFilesToMeasure = cssSources.slice(0, Math.min(10, cssSources.length));

      await Promise.all(
        cssFilesToMeasure.map(async (href) => {
          try {
            const absoluteUrl = href.startsWith('http') ? href : new URL(href, url).href;
            const response = await fetch(absoluteUrl, {
              method: 'HEAD',
              signal: AbortSignal.timeout(3000),
            });
            const size = parseInt(response.headers.get('content-length') || '0');
            if (size > 0) {
              totalCSSSize += size;
              measuredCSSFiles++;
              // Flag files larger than 100KB
              if (size > 100000) {
                largeCSSFiles.push(`${href.split('/').pop()} (${(size / 1024).toFixed(0)}KB)`);
              }
            }
          } catch (error) {
            // Skip files we can't measure
          }
        })
      );
    }

    const avgCSSSize = measuredCSSFiles > 0 ? totalCSSSize / measuredCSSFiles : 0;
    const estimatedTotalCSSSize = avgCSSSize * cssSources.length;
    const totalCSSSizeKB = estimatedTotalCSSSize / 1024;

    // Check for too many CSS files
    if (cssTags.length > 5) {
      issues.push({
        severity: 'low',
        category: 'Performance',
        issue: `Multiple CSS files (${cssTags.length})`,
        recommendation: 'Combine CSS files to reduce HTTP requests and improve load time',
      });
      score -= 5;
    }

    // Check for large total CSS size
    if (totalCSSSizeKB > 200) {
      issues.push({
        severity: 'medium',
        category: 'Performance',
        issue: `Large total CSS size (~${totalCSSSizeKB.toFixed(0)}KB)`,
        recommendation: 'Reduce CSS file size by removing unused styles, minifying CSS, and using CSS purging tools. Target under 100KB total.',
      });
      score -= 10;
    } else if (totalCSSSizeKB > 100) {
      issues.push({
        severity: 'low',
        category: 'Performance',
        issue: `CSS size could be optimized (~${totalCSSSizeKB.toFixed(0)}KB)`,
        recommendation: 'Consider removing unused CSS and using critical CSS techniques',
      });
      score -= 5;
    }

    // Report individual large CSS files
    if (largeCSSFiles.length > 0) {
      issues.push({
        severity: 'low',
        category: 'Performance',
        issue: `Large CSS files detected: ${largeCSSFiles.join(', ')}`,
        recommendation: 'Split large CSS files or remove unused styles',
      });
      score -= 3;
    }

    // Render-blocking Resources
    const renderBlockingScripts = $('script:not([async]):not([defer])').length;
    if (renderBlockingScripts > 3) {
      issues.push({
        severity: 'medium',
        category: 'Performance',
        issue: `${renderBlockingScripts} render-blocking scripts`,
        recommendation: 'Add async or defer attributes to non-critical scripts to improve page render time',
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
        recommendation: 'Set appropriate Cache-Control headers (max-age) for static assets',
      });
      score -= 7;
    }

    // Font optimization
    const fontLinks = $('link[rel="preload"][as="font"], link[href*="fonts"]');
    const fontsWithoutPreload = $('link[href*="fonts"]:not([rel="preload"])').length;

    if (fontsWithoutPreload > 0) {
      issues.push({
        severity: 'low',
        category: 'Performance',
        issue: 'Fonts not preloaded',
        recommendation: 'Use <link rel="preload"> for critical fonts to reduce render-blocking',
      });
      score -= 4;
    }

    // Inline styles
    const inlineStyles = $('[style]').length;
    if (inlineStyles > 20) {
      issues.push({
        severity: 'low',
        category: 'Performance',
        issue: `Too many inline styles (${inlineStyles} elements)`,
        recommendation: 'Move inline styles to CSS files for better caching and maintainability',
      });
      score -= 3;
    }

    return {
      score: Math.max(score, 0),
      issues,
      metrics: {
        responseTime: `${responseTime}ms`,
        compression: contentEncoding || 'none',
        imageCount: images.length,
        unoptimizedImages,
        nonLazyImages,
        scriptCount: scriptTags.length,
        scriptSize: totalJSSizeMB > 0 ? `${totalJSSizeMB.toFixed(2)}MB` : 'Unknown',
        cssCount: cssTags.length,
        cssSize: totalCSSSizeKB > 0 ? `${totalCSSSizeKB.toFixed(0)}KB` : 'Unknown',
        renderBlockingScripts,
        hasCaching: !!(cacheControl && cacheControl.includes('max-age')),
      },
    };
  },
};
