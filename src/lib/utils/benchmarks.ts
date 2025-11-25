/**
 * Industry benchmarks for different e-commerce sectors
 * These benchmarks represent average scores for each category
 */

export interface IndustryBenchmark {
  seo: number;
  performance: number;
  accessibility: number;
  security: number;
  shopify: number;
  salesOptimization: number;
  overall: number;
}

export const industryBenchmarks: Record<string, IndustryBenchmark> = {
  fashion: {
    seo: 75,
    performance: 65,
    accessibility: 70,
    security: 80,
    shopify: 72,
    salesOptimization: 68,
    overall: 72,
  },
  electronics: {
    seo: 78,
    performance: 70,
    accessibility: 68,
    security: 85,
    shopify: 75,
    salesOptimization: 72,
    overall: 75,
  },
  beauty: {
    seo: 76,
    performance: 68,
    accessibility: 72,
    security: 82,
    shopify: 74,
    salesOptimization: 70,
    overall: 74,
  },
  home: {
    seo: 74,
    performance: 66,
    accessibility: 69,
    security: 81,
    shopify: 71,
    salesOptimization: 67,
    overall: 71,
  },
  food: {
    seo: 73,
    performance: 64,
    accessibility: 71,
    security: 83,
    shopify: 70,
    salesOptimization: 69,
    overall: 72,
  },
  jewelry: {
    seo: 77,
    performance: 69,
    accessibility: 70,
    security: 84,
    shopify: 73,
    salesOptimization: 71,
    overall: 74,
  },
  sports: {
    seo: 75,
    performance: 67,
    accessibility: 69,
    security: 80,
    shopify: 72,
    salesOptimization: 68,
    overall: 72,
  },
  general: {
    seo: 75,
    performance: 67,
    accessibility: 70,
    security: 82,
    shopify: 72,
    salesOptimization: 69,
    overall: 73,
  },
};

export interface BenchmarkComparison {
  category: string;
  yourScore: number;
  industryAverage: number;
  difference: number;
  percentile: number; // Estimated percentile based on score
  rating: 'excellent' | 'above-average' | 'average' | 'below-average' | 'poor';
  message: string;
}

/**
 * Detect industry based on site content and metadata
 * This is a simple heuristic-based detection
 */
export function detectIndustry(html: string, url: string): string {
  const lowerHtml = html.toLowerCase();
  const lowerUrl = url.toLowerCase();

  // Fashion keywords
  if (
    lowerHtml.includes('fashion') ||
    lowerHtml.includes('clothing') ||
    lowerHtml.includes('apparel') ||
    lowerHtml.includes('dress') ||
    lowerUrl.includes('fashion') ||
    lowerUrl.includes('clothing')
  ) {
    return 'fashion';
  }

  // Electronics keywords
  if (
    lowerHtml.includes('electronics') ||
    lowerHtml.includes('gadget') ||
    lowerHtml.includes('phone') ||
    lowerHtml.includes('laptop') ||
    lowerHtml.includes('computer') ||
    lowerUrl.includes('tech') ||
    lowerUrl.includes('electronics')
  ) {
    return 'electronics';
  }

  // Beauty keywords
  if (
    lowerHtml.includes('beauty') ||
    lowerHtml.includes('cosmetic') ||
    lowerHtml.includes('makeup') ||
    lowerHtml.includes('skincare') ||
    lowerUrl.includes('beauty') ||
    lowerUrl.includes('cosmetic')
  ) {
    return 'beauty';
  }

  // Home keywords
  if (
    lowerHtml.includes('furniture') ||
    lowerHtml.includes('home decor') ||
    lowerHtml.includes('homeware') ||
    lowerUrl.includes('home') ||
    lowerUrl.includes('furniture')
  ) {
    return 'home';
  }

  // Food keywords
  if (
    lowerHtml.includes('food') ||
    lowerHtml.includes('grocery') ||
    lowerHtml.includes('restaurant') ||
    lowerHtml.includes('cafe') ||
    lowerUrl.includes('food') ||
    lowerUrl.includes('restaurant')
  ) {
    return 'food';
  }

  // Jewelry keywords
  if (
    lowerHtml.includes('jewelry') ||
    lowerHtml.includes('jewellery') ||
    lowerHtml.includes('diamond') ||
    lowerHtml.includes('necklace') ||
    lowerUrl.includes('jewelry') ||
    lowerUrl.includes('jewellery')
  ) {
    return 'jewelry';
  }

  // Sports keywords
  if (
    lowerHtml.includes('sports') ||
    lowerHtml.includes('fitness') ||
    lowerHtml.includes('athletic') ||
    lowerHtml.includes('workout') ||
    lowerUrl.includes('sports') ||
    lowerUrl.includes('fitness')
  ) {
    return 'sports';
  }

  // Default to general
  return 'general';
}

/**
 * Calculate percentile based on score
 * Simple estimation: assumes normal distribution
 */
function calculatePercentile(score: number, average: number): number {
  const stdDev = 15; // Assumed standard deviation
  const zScore = (score - average) / stdDev;

  // Simplified percentile calculation
  if (zScore >= 2) return 98;
  if (zScore >= 1.5) return 93;
  if (zScore >= 1) return 84;
  if (zScore >= 0.5) return 69;
  if (zScore >= 0) return 50;
  if (zScore >= -0.5) return 31;
  if (zScore >= -1) return 16;
  if (zScore >= -1.5) return 7;
  return 2;
}

/**
 * Get rating based on difference from average
 */
function getRating(difference: number): BenchmarkComparison['rating'] {
  if (difference >= 15) return 'excellent';
  if (difference >= 5) return 'above-average';
  if (difference >= -5) return 'average';
  if (difference >= -15) return 'below-average';
  return 'poor';
}

/**
 * Get message based on rating
 */
function getMessage(rating: BenchmarkComparison['rating'], category: string): string {
  switch (rating) {
    case 'excellent':
      return `Your ${category} score is exceptional! You're significantly outperforming the industry average.`;
    case 'above-average':
      return `Your ${category} score is above industry standards. Keep up the good work!`;
    case 'average':
      return `Your ${category} score is on par with industry standards. There's room for improvement.`;
    case 'below-average':
      return `Your ${category} score is below industry average. Focus on improvements to stay competitive.`;
    case 'poor':
      return `Your ${category} score needs immediate attention. Significant improvements required to match competitors.`;
  }
}

/**
 * Compare scores against industry benchmarks
 */
export function compareToBenchmarks(
  scores: {
    seo: number;
    performance: number;
    accessibility: number;
    security: number;
    shopify: number;
    salesOptimization: number;
    overall: number;
  },
  industry: string
): BenchmarkComparison[] {
  const benchmark = industryBenchmarks[industry] || industryBenchmarks.general;

  const comparisons: BenchmarkComparison[] = [
    {
      category: 'Overall',
      yourScore: scores.overall,
      industryAverage: benchmark.overall,
      difference: scores.overall - benchmark.overall,
      percentile: calculatePercentile(scores.overall, benchmark.overall),
      rating: getRating(scores.overall - benchmark.overall),
      message: getMessage(getRating(scores.overall - benchmark.overall), 'overall'),
    },
    {
      category: 'SEO',
      yourScore: scores.seo,
      industryAverage: benchmark.seo,
      difference: scores.seo - benchmark.seo,
      percentile: calculatePercentile(scores.seo, benchmark.seo),
      rating: getRating(scores.seo - benchmark.seo),
      message: getMessage(getRating(scores.seo - benchmark.seo), 'SEO'),
    },
    {
      category: 'Performance',
      yourScore: scores.performance,
      industryAverage: benchmark.performance,
      difference: scores.performance - benchmark.performance,
      percentile: calculatePercentile(scores.performance, benchmark.performance),
      rating: getRating(scores.performance - benchmark.performance),
      message: getMessage(getRating(scores.performance - benchmark.performance), 'performance'),
    },
    {
      category: 'Accessibility',
      yourScore: scores.accessibility,
      industryAverage: benchmark.accessibility,
      difference: scores.accessibility - benchmark.accessibility,
      percentile: calculatePercentile(scores.accessibility, benchmark.accessibility),
      rating: getRating(scores.accessibility - benchmark.accessibility),
      message: getMessage(getRating(scores.accessibility - benchmark.accessibility), 'accessibility'),
    },
    {
      category: 'Security',
      yourScore: scores.security,
      industryAverage: benchmark.security,
      difference: scores.security - benchmark.security,
      percentile: calculatePercentile(scores.security, benchmark.security),
      rating: getRating(scores.security - benchmark.security),
      message: getMessage(getRating(scores.security - benchmark.security), 'security'),
    },
    {
      category: 'Shopify Features',
      yourScore: scores.shopify,
      industryAverage: benchmark.shopify,
      difference: scores.shopify - benchmark.shopify,
      percentile: calculatePercentile(scores.shopify, benchmark.shopify),
      rating: getRating(scores.shopify - benchmark.shopify),
      message: getMessage(getRating(scores.shopify - benchmark.shopify), 'Shopify features'),
    },
    {
      category: 'Sales Optimization',
      yourScore: scores.salesOptimization,
      industryAverage: benchmark.salesOptimization,
      difference: scores.salesOptimization - benchmark.salesOptimization,
      percentile: calculatePercentile(scores.salesOptimization, benchmark.salesOptimization),
      rating: getRating(scores.salesOptimization - benchmark.salesOptimization),
      message: getMessage(getRating(scores.salesOptimization - benchmark.salesOptimization), 'sales optimization'),
    },
  ];

  return comparisons;
}

/**
 * Get industry display name
 */
export function getIndustryDisplayName(industry: string): string {
  const displayNames: Record<string, string> = {
    fashion: 'Fashion & Apparel',
    electronics: 'Electronics & Technology',
    beauty: 'Beauty & Cosmetics',
    home: 'Home & Furniture',
    food: 'Food & Beverage',
    jewelry: 'Jewelry & Accessories',
    sports: 'Sports & Fitness',
    general: 'General E-commerce',
  };

  return displayNames[industry] || 'General E-commerce';
}
