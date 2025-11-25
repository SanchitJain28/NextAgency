import { Issue, AuditResult } from '../types';

/**
 * Core Web Vitals Auditor using Google PageSpeed Insights API
 *
 * This auditor provides REAL performance metrics from Google:
 * - Largest Contentful Paint (LCP)
 * - First Input Delay (FID)
 * - Cumulative Layout Shift (CLS)
 * - First Contentful Paint (FCP)
 * - Time to Interactive (TTI)
 * - Total Blocking Time (TBT)
 *
 * Requirements:
 * - Google PageSpeed Insights API key (free, 25k requests/day)
 * - Set GOOGLE_PAGESPEED_API_KEY in .env
 *
 * Usage:
 * const result = await coreWebVitalsAuditor.analyze(url, 'mobile');
 */

interface PageSpeedResponse {
  lighthouseResult: {
    audits: {
      [key: string]: {
        score: number;
        numericValue: number;
        displayValue: string;
        title: string;
        description: string;
      };
    };
    categories: {
      performance: {
        score: number;
      };
    };
  };
  loadingExperience?: {
    metrics: {
      LARGEST_CONTENTFUL_PAINT_MS: { category: string; percentile: number };
      FIRST_INPUT_DELAY_MS: { category: string; percentile: number };
      CUMULATIVE_LAYOUT_SHIFT_SCORE: { category: string; percentile: number };
    };
  };
}

export const coreWebVitalsAuditor = {
  /**
   * Analyze Core Web Vitals using Google PageSpeed Insights API
   *
   * @param url - URL to analyze
   * @param strategy - 'mobile' or 'desktop'
   * @returns AuditResult with Core Web Vitals scores and issues
   */
  analyze: async (
    url: string,
    strategy: 'mobile' | 'desktop' = 'mobile'
  ): Promise<AuditResult> => {
    const issues: Issue[] = [];
    let score = 100;

    // Check if API key is configured
    const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY;
    if (!apiKey) {
      return {
        score: 0,
        issues: [
          {
            severity: 'info',
            category: 'Core Web Vitals',
            issue: 'Google PageSpeed API not configured',
            recommendation:
              'Add GOOGLE_PAGESPEED_API_KEY to .env to enable real Core Web Vitals measurement',
          },
        ],
        metrics: {
          apiConfigured: false,
          note: 'Get free API key at https://developers.google.com/speed/docs/insights/v5/get-started',
        },
      };
    }

    try {
      // Fetch data from Google PageSpeed Insights API
      const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
        url
      )}&key=${apiKey}&strategy=${strategy}&category=performance`;

      const response = await fetch(apiUrl, {
        signal: AbortSignal.timeout(30000), // 30 second timeout
      });

      if (!response.ok) {
        throw new Error(`PageSpeed API error: ${response.status}`);
      }

      const data: PageSpeedResponse = await response.json();

      // Extract Lighthouse scores
      const lighthouseScore = Math.round(data.lighthouseResult.categories.performance.score * 100);
      const audits = data.lighthouseResult.audits;

      // ========== LARGEST CONTENTFUL PAINT (LCP) ==========
      const lcp = audits['largest-contentful-paint'];
      const lcpValue = lcp?.numericValue || 0;
      const lcpSeconds = (lcpValue / 1000).toFixed(2);

      if (lcpValue > 4000) {
        issues.push({
          severity: 'critical',
          category: 'Core Web Vitals',
          issue: `Poor LCP: ${lcpSeconds}s`,
          recommendation:
            'LCP should be under 2.5s. Optimize images, improve server response time, and reduce render-blocking resources.',
        });
        score -= 20;
      } else if (lcpValue > 2500) {
        issues.push({
          severity: 'medium',
          category: 'Core Web Vitals',
          issue: `Needs Improvement LCP: ${lcpSeconds}s`,
          recommendation:
            'Target LCP under 2.5s for "Good" rating. Consider lazy loading, image optimization, and CDN.',
        });
        score -= 10;
      }

      // ========== FIRST INPUT DELAY (FID) / Total Blocking Time ==========
      const tbt = audits['total-blocking-time'];
      const tbtValue = tbt?.numericValue || 0;
      const tbtMs = Math.round(tbtValue);

      if (tbtValue > 600) {
        issues.push({
          severity: 'high',
          category: 'Core Web Vitals',
          issue: `High Total Blocking Time: ${tbtMs}ms`,
          recommendation:
            'Reduce JavaScript execution time. TBT should be under 300ms. Defer non-critical JS and optimize long tasks.',
        });
        score -= 15;
      } else if (tbtValue > 300) {
        issues.push({
          severity: 'medium',
          category: 'Core Web Vitals',
          issue: `Moderate Total Blocking Time: ${tbtMs}ms`,
          recommendation:
            'Optimize JavaScript to reduce blocking time below 300ms for better interactivity.',
        });
        score -= 8;
      }

      // ========== CUMULATIVE LAYOUT SHIFT (CLS) ==========
      const cls = audits['cumulative-layout-shift'];
      const clsValue = cls?.numericValue || 0;

      if (clsValue > 0.25) {
        issues.push({
          severity: 'high',
          category: 'Core Web Vitals',
          issue: `Poor CLS: ${clsValue.toFixed(3)}`,
          recommendation:
            'CLS should be under 0.1. Add width/height to images, avoid inserting content above existing content, and use CSS transforms.',
        });
        score -= 15;
      } else if (clsValue > 0.1) {
        issues.push({
          severity: 'medium',
          category: 'Core Web Vitals',
          issue: `Needs Improvement CLS: ${clsValue.toFixed(3)}`,
          recommendation:
            'Reduce layout shifts by setting image dimensions and avoiding dynamic content insertion.',
        });
        score -= 8;
      }

      // ========== FIRST CONTENTFUL PAINT (FCP) ==========
      const fcp = audits['first-contentful-paint'];
      const fcpValue = fcp?.numericValue || 0;
      const fcpSeconds = (fcpValue / 1000).toFixed(2);

      if (fcpValue > 3000) {
        issues.push({
          severity: 'medium',
          category: 'Core Web Vitals',
          issue: `Slow FCP: ${fcpSeconds}s`,
          recommendation:
            'FCP should be under 1.8s. Optimize server response, eliminate render-blocking resources, and use font-display: swap.',
        });
        score -= 10;
      } else if (fcpValue > 1800) {
        issues.push({
          severity: 'low',
          category: 'Core Web Vitals',
          issue: `Moderate FCP: ${fcpSeconds}s`,
          recommendation: 'Target FCP under 1.8s for "Good" rating.',
        });
        score -= 5;
      }

      // ========== TIME TO INTERACTIVE (TTI) ==========
      const tti = audits['interactive'];
      const ttiValue = tti?.numericValue || 0;
      const ttiSeconds = (ttiValue / 1000).toFixed(2);

      if (ttiValue > 7300) {
        issues.push({
          severity: 'medium',
          category: 'Core Web Vitals',
          issue: `Slow Time to Interactive: ${ttiSeconds}s`,
          recommendation:
            'TTI should be under 3.8s. Minimize JavaScript, defer non-critical resources, and code-split large bundles.',
        });
        score -= 10;
      } else if (ttiValue > 3800) {
        issues.push({
          severity: 'low',
          category: 'Core Web Vitals',
          issue: `Moderate TTI: ${ttiSeconds}s`,
          recommendation: 'Optimize JavaScript execution for faster interactivity.',
        });
        score -= 5;
      }

      // ========== SPEED INDEX ==========
      const speedIndex = audits['speed-index'];
      const speedIndexValue = speedIndex?.numericValue || 0;
      const speedIndexSeconds = (speedIndexValue / 1000).toFixed(2);

      if (speedIndexValue > 5800) {
        issues.push({
          severity: 'medium',
          category: 'Core Web Vitals',
          issue: `Slow Speed Index: ${speedIndexSeconds}s`,
          recommendation:
            'Speed Index should be under 3.4s. Optimize content visibility and reduce time to first paint.',
        });
        score -= 8;
      }

      // ========== FIELD DATA (Real User Metrics) ==========
      const fieldData = data.loadingExperience?.metrics;

      if (fieldData) {
        const fieldLCP = fieldData.LARGEST_CONTENTFUL_PAINT_MS;
        const fieldFID = fieldData.FIRST_INPUT_DELAY_MS;
        const fieldCLS = fieldData.CUMULATIVE_LAYOUT_SHIFT_SCORE;

        if (fieldLCP.category === 'SLOW') {
          issues.push({
            severity: 'high',
            category: 'Core Web Vitals',
            issue: 'Real users experiencing slow LCP',
            recommendation: `${fieldLCP.percentile}ms LCP in the field. Prioritize LCP optimization for real users.`,
          });
          score -= 10;
        }

        if (fieldFID.category === 'SLOW') {
          issues.push({
            severity: 'high',
            category: 'Core Web Vitals',
            issue: 'Real users experiencing slow FID',
            recommendation: `${fieldFID.percentile}ms FID in the field. Reduce JavaScript execution time.`,
          });
          score -= 10;
        }

        if (fieldCLS.category === 'SLOW') {
          issues.push({
            severity: 'high',
            category: 'Core Web Vitals',
            issue: 'Real users experiencing high CLS',
            recommendation: `CLS score of ${(fieldCLS.percentile / 100).toFixed(3)} in the field. Fix layout shifts immediately.`,
          });
          score -= 10;
        }
      }

      return {
        score: Math.max(score, 0),
        issues,
        metrics: {
          strategy,
          lighthouseScore,
          coreWebVitals: {
            lcp: {
              value: lcpValue,
              displayValue: lcpSeconds + 's',
              score: lcp?.score || 0,
              rating:
                lcpValue <= 2500 ? 'good' : lcpValue <= 4000 ? 'needs-improvement' : 'poor',
            },
            fid: {
              // TBT is used as proxy for FID in lab
              value: tbtValue,
              displayValue: tbtMs + 'ms',
              score: tbt?.score || 0,
              rating:
                tbtValue <= 300 ? 'good' : tbtValue <= 600 ? 'needs-improvement' : 'poor',
            },
            cls: {
              value: clsValue,
              displayValue: clsValue.toFixed(3),
              score: cls?.score || 0,
              rating: clsValue <= 0.1 ? 'good' : clsValue <= 0.25 ? 'needs-improvement' : 'poor',
            },
          },
          otherMetrics: {
            fcp: {
              value: fcpValue,
              displayValue: fcpSeconds + 's',
              score: fcp?.score || 0,
            },
            tti: {
              value: ttiValue,
              displayValue: ttiSeconds + 's',
              score: tti?.score || 0,
            },
            speedIndex: {
              value: speedIndexValue,
              displayValue: speedIndexSeconds + 's',
              score: speedIndex?.score || 0,
            },
          },
          fieldData: fieldData
            ? {
                lcp: {
                  percentile: fieldData.LARGEST_CONTENTFUL_PAINT_MS.percentile,
                  category: fieldData.LARGEST_CONTENTFUL_PAINT_MS.category,
                },
                fid: {
                  percentile: fieldData.FIRST_INPUT_DELAY_MS.percentile,
                  category: fieldData.FIRST_INPUT_DELAY_MS.category,
                },
                cls: {
                  percentile: fieldData.CUMULATIVE_LAYOUT_SHIFT_SCORE.percentile / 100,
                  category: fieldData.CUMULATIVE_LAYOUT_SHIFT_SCORE.category,
                },
              }
            : null,
          apiConfigured: true,
        },
      };
    } catch (error) {
      return {
        score: 0,
        issues: [
          {
            severity: 'critical',
            category: 'Core Web Vitals',
            issue: 'Failed to fetch Core Web Vitals data',
            recommendation:
              error instanceof Error
                ? `Error: ${error.message}. Check API key and network connection.`
                : 'Unknown error occurred while fetching performance data.',
          },
        ],
        metrics: {
          apiConfigured: true,
          error: error instanceof Error ? error.message : 'Unknown error',
        },
      };
    }
  },
};

/**
 * Get free Google PageSpeed Insights API key:
 * https://developers.google.com/speed/docs/insights/v5/get-started
 *
 * Free quota: 25,000 queries per day
 *
 * Add to .env:
 * GOOGLE_PAGESPEED_API_KEY=your_api_key_here
 */
