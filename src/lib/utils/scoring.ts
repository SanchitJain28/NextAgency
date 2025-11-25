import { AuditResult, FullAuditResults, Recommendation } from '../types';

export function calculateOverallScore(results: {
  seo: AuditResult;
  performance: AuditResult;
  accessibility: AuditResult;
  security: AuditResult;
  shopify: AuditResult;
  salesOptimization: AuditResult;
}): number {
  const weights = {
    seo: 0.20,
    performance: 0.20,
    accessibility: 0.10,
    security: 0.15,
    shopify: 0.15,
    salesOptimization: 0.20,
  };

  const totalScore =
    results.seo.score * weights.seo +
    results.performance.score * weights.performance +
    results.accessibility.score * weights.accessibility +
    results.security.score * weights.security +
    results.shopify.score * weights.shopify +
    results.salesOptimization.score * weights.salesOptimization;

  return Math.round(totalScore);
}

export function generateRecommendations(results: {
  seo: AuditResult;
  performance: AuditResult;
  accessibility: AuditResult;
  security: AuditResult;
  shopify: AuditResult;
  salesOptimization: AuditResult;
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
