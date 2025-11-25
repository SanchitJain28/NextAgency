import * as cheerio from 'cheerio';
import { Issue, AuditResult } from '../types';
import {
  parseColor,
  getContrastRatio,
  extractColorsFromStyle,
  isLargeText,
  meetsWCAGAA,
} from '../utils/colorContrast';

export const accessibilityAuditor = {
  analyze: async (html: string): Promise<AuditResult> => {
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
        recommendation: 'Add lang attribute to <html> tag (e.g., lang="en")',
      });
      score -= 10;
    }

    // Form labels
    const inputs = $('input[type="text"], input[type="email"], input[type="tel"], input[type="search"], textarea');
    let inputsWithoutLabels = 0;
    inputs.each((i, el) => {
      const id = $(el).attr('id');
      const ariaLabel = $(el).attr('aria-label');
      const placeholder = $(el).attr('placeholder');
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
        recommendation: 'Add proper <label> elements or aria-label attributes to all form inputs',
      });
      score -= 15;
    }

    // ARIA landmarks
    const hasMain = $('main, [role="main"]').length > 0;
    const hasNav = $('nav, [role="navigation"]').length > 0;
    const hasHeader = $('header, [role="banner"]').length > 0;
    const hasFooter = $('footer, [role="contentinfo"]').length > 0;

    if (!hasMain || !hasNav) {
      issues.push({
        severity: 'medium',
        category: 'Accessibility',
        issue: 'Missing ARIA landmarks',
        recommendation: 'Use semantic HTML5 elements (<main>, <nav>, <header>, <footer>) for better screen reader navigation',
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
        recommendation: 'Add a "Skip to main content" link at the top of the page for keyboard users',
      });
      score -= 5;
    }

    // Button accessibility
    const buttons = $('button, [role="button"]');
    let buttonsWithoutText = 0;
    buttons.each((i, el) => {
      const text = $(el).text().trim();
      const ariaLabel = $(el).attr('aria-label');
      const title = $(el).attr('title');
      if (!text && !ariaLabel && !title) {
        buttonsWithoutText++;
      }
    });

    if (buttonsWithoutText > 0) {
      issues.push({
        severity: 'medium',
        category: 'Accessibility',
        issue: `${buttonsWithoutText} buttons without accessible text`,
        recommendation: 'Add visible text or aria-label to all buttons',
      });
      score -= 10;
    }

    // Link accessibility
    const links = $('a');
    let linksWithoutText = 0;
    links.each((i, el) => {
      const text = $(el).text().trim();
      const ariaLabel = $(el).attr('aria-label');
      const title = $(el).attr('title');
      if (!text && !ariaLabel && !title) {
        linksWithoutText++;
      }
    });

    if (linksWithoutText > 0) {
      issues.push({
        severity: 'medium',
        category: 'Accessibility',
        issue: `${linksWithoutText} links without accessible text`,
        recommendation: 'Ensure all links have descriptive text or aria-label',
      });
      score -= 8;
    }

    // Color contrast checking
    const textElements = $(
      'p, h1, h2, h3, h4, h5, h6, a, span, div, button, label, li, td, th'
    );
    let contrastIssuesCount = 0;
    const contrastProblems: string[] = [];

    textElements.each((i, el) => {
      const style = $(el).attr('style');
      if (!style) return;

      const { color, backgroundColor } = extractColorsFromStyle(style);
      if (!color || !backgroundColor) return;

      const foreground = parseColor(color);
      const background = parseColor(backgroundColor);

      if (foreground && background) {
        const ratio = getContrastRatio(foreground, background);
        const fontSize = style.match(/font-size\s*:\s*([^;]+)/i)?.[1];
        const fontWeight = style.match(/font-weight\s*:\s*([^;]+)/i)?.[1];
        const isLarge = isLargeText(fontSize, fontWeight);

        if (!meetsWCAGAA(ratio, isLarge)) {
          contrastIssuesCount++;
          const tagName = el.tagName || 'element';
          contrastProblems.push(
            `${tagName} (ratio: ${ratio.toFixed(2)}:1, required: ${isLarge ? '3.0' : '4.5'}:1)`
          );
        }
      }
    });

    if (contrastIssuesCount > 0) {
      issues.push({
        severity: contrastIssuesCount > 5 ? 'high' : 'medium',
        category: 'Accessibility',
        issue: `${contrastIssuesCount} elements with insufficient color contrast`,
        recommendation: `Improve color contrast to meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text). Problem elements: ${contrastProblems.slice(0, 3).join(', ')}${contrastProblems.length > 3 ? ` and ${contrastProblems.length - 3} more` : ''}`,
      });
      score -= Math.min(contrastIssuesCount * 2, 15);
    }

    // Focus indicators
    const focusStyles = html.includes(':focus') || html.includes('focus-visible');
    if (!focusStyles) {
      issues.push({
        severity: 'medium',
        category: 'Accessibility',
        issue: 'No visible focus indicators detected',
        recommendation: 'Add visible focus styles for keyboard navigation',
      });
      score -= 7;
    }

    // Headings hierarchy
    const headings = $('h1, h2, h3, h4, h5, h6');
    const headingLevels: number[] = [];
    headings.each((i, el) => {
      const level = parseInt(el.tagName.substring(1));
      headingLevels.push(level);
    });

    let hierarchyIssue = false;
    for (let i = 1; i < headingLevels.length; i++) {
      if (headingLevels[i] - headingLevels[i - 1] > 1) {
        hierarchyIssue = true;
        break;
      }
    }

    if (hierarchyIssue) {
      issues.push({
        severity: 'low',
        category: 'Accessibility',
        issue: 'Heading hierarchy not sequential',
        recommendation: 'Use headings in sequential order (h1 → h2 → h3) without skipping levels',
      });
      score -= 4;
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
        hasHeaderLandmark: hasHeader,
        hasFooterLandmark: hasFooter,
        buttonsTotal: buttons.length,
        buttonsWithoutText,
        linksTotal: links.length,
        linksWithoutText,
        colorContrastIssues: contrastIssuesCount,
        hasFocusStyles: focusStyles,
        headingCount: headings.length,
      },
    };
  },
};
