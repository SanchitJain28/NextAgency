import { Issue, AuditResult } from '../types';

export const securityAuditor = {
  analyze: async (headers: Headers, url: string): Promise<AuditResult> => {
    const issues: Issue[] = [];
    let score = 100;
    const urlObj = new URL(url);

    // HTTPS Check
    if (urlObj.protocol !== 'https:') {
      issues.push({
        severity: 'critical',
        category: 'Security',
        issue: 'Site not using HTTPS',
        recommendation: 'Enable SSL/TLS certificate for secure connections. This is critical for e-commerce.',
      });
      score -= 30;
    }

    // Security Headers
    const securityHeaders = {
      'strict-transport-security': {
        name: 'HSTS (HTTP Strict Transport Security)',
        severity: 'high' as const,
        points: 12,
      },
      'x-frame-options': {
        name: 'Clickjacking protection',
        severity: 'medium' as const,
        points: 8,
      },
      'x-content-type-options': {
        name: 'MIME type sniffing protection',
        severity: 'medium' as const,
        points: 7,
      },
      'content-security-policy': {
        name: 'XSS protection (CSP)',
        severity: 'high' as const,
        points: 15,
      },
      'x-xss-protection': {
        name: 'XSS filter',
        severity: 'medium' as const,
        points: 6,
      },
      'referrer-policy': {
        name: 'Referrer policy',
        severity: 'low' as const,
        points: 4,
      },
    };

    let missingHeaders = 0;
    Object.entries(securityHeaders).forEach(([header, config]) => {
      const headerValue = headers.get(header);
      if (!headerValue) {
        missingHeaders++;
        issues.push({
          severity: config.severity,
          category: 'Security',
          issue: `Missing ${config.name} header`,
          recommendation: `Add ${header} header for enhanced security`,
        });
        score -= config.points;
      }
    });

    // Cookie Security (if cookies present)
    const setCookie = headers.get('set-cookie');
    if (setCookie) {
      if (!setCookie.includes('Secure')) {
        issues.push({
          severity: 'high',
          category: 'Security',
          issue: 'Cookies not secure',
          recommendation: 'Set Secure flag on all cookies to prevent transmission over HTTP',
        });
        score -= 10;
      }
      if (!setCookie.includes('HttpOnly')) {
        issues.push({
          severity: 'medium',
          category: 'Security',
          issue: 'Cookies missing HttpOnly flag',
          recommendation: 'Set HttpOnly flag to prevent XSS attacks from accessing cookies',
        });
        score -= 7;
      }
      if (!setCookie.includes('SameSite')) {
        issues.push({
          severity: 'medium',
          category: 'Security',
          issue: 'Cookies missing SameSite attribute',
          recommendation: 'Set SameSite attribute to protect against CSRF attacks',
        });
        score -= 6;
      }
    }

    // Check for security.txt
    // Note: This would require an additional fetch, which we skip for now

    return {
      score: Math.max(score, 0),
      issues,
      metrics: {
        isHttps: urlObj.protocol === 'https:',
        hasHSTS: !!headers.get('strict-transport-security'),
        hasCSP: !!headers.get('content-security-policy'),
        hasXFrameOptions: !!headers.get('x-frame-options'),
        hasXContentTypeOptions: !!headers.get('x-content-type-options'),
        hasReferrerPolicy: !!headers.get('referrer-policy'),
        securityHeadersCount: Object.keys(securityHeaders).length - missingHeaders,
        totalSecurityHeaders: Object.keys(securityHeaders).length,
      },
    };
  },
};
