import * as cheerio from 'cheerio';
import { Issue, AuditResult } from '../types';

export const performanceAuditor = {
  analyze: async (html: string, headers: Headers, responseTime: number): Promise<AuditResult> => {
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

    // JavaScript Files
    const scriptTags = $('script[src]');
    if (scriptTags.length > 15) {
      issues.push({
        severity: 'medium',
        category: 'Performance',
        issue: `High number of JavaScript files (${scriptTags.length})`,
        recommendation: 'Bundle and minify JavaScript files to reduce HTTP requests',
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
        recommendation: 'Combine CSS files to reduce HTTP requests and improve load time',
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
        cssCount: cssTags.length,
        renderBlockingScripts,
        hasCaching: !!(cacheControl && cacheControl.includes('max-age')),
      },
    };
  },
};
