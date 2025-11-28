export interface Issue {
  severity: 'critical' | 'high' | 'medium' | 'low' | 'info';
  category: string;
  issue: string;
  recommendation: string;
}

export interface AuditMetrics {
  [key: string]: string | number | boolean | object;
}

export interface AuditResult {
  score: number;
  issues: Issue[];
  metrics: AuditMetrics;
}

export interface BenchmarkComparison {
  category: string;
  yourScore: number;
  industryAverage: number;
  difference: number;
  percentile: number;
  rating: 'excellent' | 'above-average' | 'average' | 'below-average' | 'poor';
  message: string;
}

export interface ShopifyCredentials {
  shopDomain: string; // e.g., "mystore.myshopify.com"
  accessToken: string; // Admin API access token
}

export interface FullAuditResults {
  url: string;
  timestamp: string;
  overallScore: number;
  seo: AuditResult;
  performance: AuditResult;
  accessibility: AuditResult;
  security: AuditResult;
  shopify: AuditResult;
  salesOptimization: AuditResult;
  coreWebVitals?: AuditResult;
  industry?: string;
  industryDisplayName?: string;
  benchmarks?: BenchmarkComparison[];
  recommendations: Recommendation[];
  // Shopify Admin API data (optional)
  adminApiUsed?: boolean;
  accuracyLevel?: 'basic' | 'enhanced'; // 'basic' = HTML only, 'enhanced' = Admin API
  detectedApps?: string[];
}

export interface Recommendation {
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  impact: string;
  steps: string[];
}

export interface PageData {
  html: string;
  headers: Headers;
  responseTime: number;
  url: string;
}
