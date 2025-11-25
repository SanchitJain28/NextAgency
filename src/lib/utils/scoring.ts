import { AuditResult, FullAuditResults, Recommendation } from '../types';

export function calculateOverallScore(results: {
  seo: AuditResult;
  performance: AuditResult;
  accessibility: AuditResult;
  security: AuditResult;
  shopify: AuditResult;
  salesOptimization: AuditResult;
  coreWebVitals?: AuditResult;
}): number {
  // Adjust weights if Core Web Vitals is included
  const hasCoreWebVitals = results.coreWebVitals && results.coreWebVitals.score > 0;

  const weights = hasCoreWebVitals ? {
    seo: 0.18,
    performance: 0.18,
    accessibility: 0.10,
    security: 0.12,
    shopify: 0.12,
    salesOptimization: 0.18,
    coreWebVitals: 0.12,
  } : {
    seo: 0.20,
    performance: 0.20,
    accessibility: 0.10,
    security: 0.15,
    shopify: 0.15,
    salesOptimization: 0.20,
  };

  let totalScore =
    results.seo.score * weights.seo +
    results.performance.score * weights.performance +
    results.accessibility.score * weights.accessibility +
    results.security.score * weights.security +
    results.shopify.score * weights.shopify +
    results.salesOptimization.score * weights.salesOptimization;

  if (hasCoreWebVitals) {
    totalScore += results.coreWebVitals!.score * weights.coreWebVitals!;
  }

  return Math.round(totalScore);
}

export function generateRecommendations(results: {
  seo: AuditResult;
  performance: AuditResult;
  accessibility: AuditResult;
  security: AuditResult;
  shopify: AuditResult;
  salesOptimization: AuditResult;
  coreWebVitals?: AuditResult;
}): Recommendation[] {
  const recommendations: Recommendation[] = [];

  // Collect all critical and high severity issues
  const allIssues = [
    ...results.seo.issues,
    ...results.performance.issues,
    ...results.accessibility.issues,
    ...results.security.issues,
    ...results.shopify.issues,
    ...results.salesOptimization.issues,
    ...(results.coreWebVitals?.issues || []),
  ].filter(issue => issue.severity === 'critical' || issue.severity === 'high');

  // Convert to recommendations
  allIssues.forEach(issue => {
    recommendations.push({
      priority: issue.severity === 'critical' ? 'high' : 'medium',
      title: issue.issue,
      description: issue.recommendation,
      impact: issue.severity === 'critical'
        ? 'Critical - Fix immediately'
        : 'High - Should be addressed soon',
      steps: [issue.recommendation],
    });
  });

  return recommendations.slice(0, 10); // Return top 10
}
