'use client';

import { useState, useEffect } from 'react';
import AnimatedAuditProgress, {
  AuditStep,
  AUDIT_CATEGORIES,
} from './AnimatedAuditProgress';
import AnimatedResults from './AnimatedResults';

interface AuditWithAnimationsProps {
  url: string;
  email?: string;
  phone?: string;
}

export default function AuditWithAnimations({
  url,
  email,
  phone,
}: AuditWithAnimationsProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<AuditStep[]>(
    AUDIT_CATEGORIES.map((cat, index) => ({
      ...cat,
      status: index === 0 ? 'analyzing' : 'pending',
    }))
  );
  const [results, setResults] = useState<any>(null);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    runAudit();
  }, [url]);

  async function runAudit() {
    const startTime = Date.now();

    try {
      // Fetch the page once
      const pageResponse = await fetch(url);
      const html = await pageResponse.text();
      const headers = pageResponse.headers;

      // Run each audit with visual feedback
      const auditResults: any = {};

      for (let i = 0; i < AUDIT_CATEGORIES.length; i++) {
        const category = AUDIT_CATEGORIES[i];

        // Mark current as analyzing
        setSteps((prev) =>
          prev.map((s, idx) => ({
            ...s,
            status:
              idx === i ? 'analyzing' : idx < i ? 'completed' : 'pending',
          }))
        );
        setCurrentStep(i);

        // Simulate realistic audit time (min 800ms for animation)
        const auditStartTime = Date.now();

        let result;
        try {
          // Run the actual audit
          switch (category.id) {
            case 'seo':
              const { seoAuditor } = await import(
                '@/lib/auditors/seoAuditor'
              );
              result = await seoAuditor.analyze(html, url);
              break;

            case 'performance':
              const { performanceAuditor } = await import(
                '@/lib/auditors/performanceAuditor'
              );
              const responseTime = Date.now() - startTime;
              result = await performanceAuditor.analyze(
                html,
                headers,
                responseTime
              );
              break;

            case 'technical':
              // Import enhanced technical SEO auditor
              const { technicalSeoAuditor } = await import(
                '@/lib/auditors/technicalSeoAuditor'
              );
              result = await technicalSeoAuditor.analyze(html, url, headers);
              break;

            case 'content':
              // Import content analysis auditor
              const { contentAnalysisAuditor } = await import(
                '@/lib/auditors/contentAnalysisAuditor'
              );
              result = await contentAnalysisAuditor.analyze(html, url);
              break;

            case 'accessibility':
              const { accessibilityAuditor } = await import(
                '@/lib/auditors/accessibilityAuditor'
              );
              result = await accessibilityAuditor.analyze(html);
              break;

            case 'security':
              const { securityAuditor } = await import(
                '@/lib/auditors/securityAuditor'
              );
              result = await securityAuditor.analyze(headers, url);
              break;

            case 'shopify':
              const { shopifyAuditor } = await import(
                '@/lib/auditors/shopifyAuditor'
              );
              result = await shopifyAuditor.analyze(html, url);
              break;

            case 'sales':
              const { salesOptimizationAuditor } = await import(
                '@/lib/auditors/salesOptimizationAuditor'
              );
              result = await salesOptimizationAuditor.analyze(html, url);
              break;

            default:
              result = { score: 0, issues: [], metrics: {} };
          }

          auditResults[category.id] = result;

          // Ensure minimum animation time
          const auditDuration = Date.now() - auditStartTime;
          if (auditDuration < 800) {
            await new Promise((resolve) =>
              setTimeout(resolve, 800 - auditDuration)
            );
          }

          // Update step with results
          setSteps((prev) =>
            prev.map((s, idx) =>
              idx === i
                ? {
                    ...s,
                    status: 'completed',
                    score: result.score,
                    issues: result.issues.length,
                    duration: Date.now() - auditStartTime,
                  }
                : s
            )
          );
        } catch (error) {
          console.error(`Error in ${category.id} audit:`, error);
          setSteps((prev) =>
            prev.map((s, idx) =>
              idx === i
                ? {
                    ...s,
                    status: 'error',
                    score: 0,
                    issues: 0,
                  }
                : s
            )
          );
        }
      }

      // Mark all as completed
      setCurrentStep(AUDIT_CATEGORIES.length);

      // Calculate overall score
      const overallScore = calculateOverallScore(auditResults);

      // Set final results
      setResults({
        ...auditResults,
        overallScore,
        url,
        timestamp: new Date().toISOString(),
      });

      // Wait for completion animation
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Show results
      setShowResults(true);

      // Send email if provided
      if (email) {
        try {
          await fetch('/api/earn/send-report', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email,
              phone,
              url,
              results: { ...auditResults, overallScore },
            }),
          });
        } catch (error) {
          console.error('Failed to send email:', error);
        }
      }
    } catch (error) {
      console.error('Audit failed:', error);
      // Handle error state
    }
  }

  function calculateOverallScore(results: any): number {
    const weights = {
      seo: 0.2,
      performance: 0.2,
      technical: 0.15,
      content: 0.1,
      accessibility: 0.1,
      security: 0.1,
      shopify: 0.1,
      sales: 0.05,
    };

    let totalScore = 0;
    Object.entries(weights).forEach(([key, weight]) => {
      if (results[key]) {
        totalScore += results[key].score * weight;
      }
    });

    return Math.round(totalScore);
  }

  if (showResults && results) {
    return <AnimatedResults results={results} />;
  }

  return (
    <AnimatedAuditProgress
      steps={steps}
      currentStep={currentStep}
      onComplete={() => {
        // Completion handled in runAudit
      }}
    />
  );
}
