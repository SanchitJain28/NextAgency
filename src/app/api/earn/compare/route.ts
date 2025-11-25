import { NextRequest, NextResponse } from 'next/server';
import { seoAuditor } from '@/lib/auditors/seoAuditor';
import { performanceAuditor } from '@/lib/auditors/performanceAuditor';
import { accessibilityAuditor } from '@/lib/auditors/accessibilityAuditor';
import { securityAuditor } from '@/lib/auditors/securityAuditor';
import { shopifyAuditor } from '@/lib/auditors/shopifyAuditor';
import { salesOptimizationAuditor } from '@/lib/auditors/salesOptimizationAuditor';
import { fetchPage, isValidUrl } from '@/lib/utils/fetchPage';
import { calculateOverallScore, generateRecommendations } from '@/lib/utils/scoring';

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json();

    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: 'Please provide an array of URLs to compare' },
        { status: 400 }
      );
    }

    if (urls.length > 5) {
      return NextResponse.json(
        { error: 'Maximum 5 URLs can be compared at once' },
        { status: 400 }
      );
    }

    // Validate all URLs
    for (const url of urls) {
      if (!isValidUrl(url)) {
        return NextResponse.json(
          { error: `Invalid URL: ${url}` },
          { status: 400 }
        );
      }
    }

    // Run audits for all URLs in parallel
    const results = await Promise.all(
      urls.map(async (url: string) => {
        try {
          const { html, headers, responseTime } = await fetchPage(url);

          const [seo, performance, accessibility, security, shopify, salesOptimization] = await Promise.all([
            seoAuditor.analyze(html, url),
            performanceAuditor.analyze(html, headers, responseTime),
            accessibilityAuditor.analyze(html),
            securityAuditor.analyze(headers, url),
            shopifyAuditor.analyze(html, url),
            salesOptimizationAuditor.analyze(html, url),
          ]);

          const overallScore = calculateOverallScore({
            seo,
            performance,
            accessibility,
            security,
            shopify,
            salesOptimization,
          });

          return {
            url,
            overallScore,
            scores: {
              seo: seo.score,
              performance: performance.score,
              accessibility: accessibility.score,
              security: security.score,
              shopify: shopify.score,
              salesOptimization: salesOptimization.score,
            },
            criticalIssues: [
              ...seo.issues,
              ...performance.issues,
              ...accessibility.issues,
              ...security.issues,
              ...shopify.issues,
              ...salesOptimization.issues,
            ].filter(i => i.severity === 'critical').length,
          };
        } catch (error) {
          return {
            url,
            error: `Failed to analyze: ${error instanceof Error ? error.message : 'Unknown error'}`,
          };
        }
      })
    );

    return NextResponse.json({
      timestamp: new Date().toISOString(),
      comparison: results,
    });
  } catch (error) {
    console.error('Comparison error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred during comparison' },
      { status: 500 }
    );
  }
}
