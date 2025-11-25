import * as cheerio from 'cheerio';
import { Issue, AuditResult } from '../types';

export const seoAuditor = {
  analyze: async (html: string, url: string): Promise<AuditResult> => {
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

    // Meta Description Check
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

    // Heading Structure
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

    // Image Alt Text
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

    // Open Graph Tags
    const ogTitle = $('meta[property="og:title"]').attr('content');
    const ogDescription = $('meta[property="og:description"]').attr('content');
    const ogImage = $('meta[property="og:image"]').attr('content');

    if (!ogTitle || !ogDescription || !ogImage) {
      issues.push({
        severity: 'medium',
        category: 'SEO',
        issue: 'Incomplete Open Graph tags',
        recommendation: 'Add og:title, og:description, and og:image for better social sharing',
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
        recommendation: 'Add canonical tag to prevent duplicate content issues',
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
        recommendation: 'Add Product and Organization schema markup for rich results',
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
        recommendation: 'Add more internal links to improve site structure and crawlability',
      });
      score -= 3;
    }

    // Check for robots meta tag
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

    return {
      score: Math.max(score, 0),
      issues,
      metrics: {
        title: { value: title, length: title?.length || 0 },
        description: { value: description || 'N/A', length: description?.length || 0 },
        h1Count: h1Tags.length,
        imagesTotal: images.length,
        imagesWithoutAlt,
        internalLinks,
        hasSchema: schemas.length > 0,
        hasCanonical: !!canonical,
        hasOpenGraph: !!(ogTitle && ogDescription && ogImage),
      },
    };
  },
};
