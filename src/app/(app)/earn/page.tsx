'use client';

import { useState } from 'react';
import Script from 'next/script';
import { Header } from '@/components/header-footer/Header';
import Footer from '@/components/header-footer/Footer';
import AuditForm from '@/components/earn/AuditForm';
import ResultsDashboard from '@/components/earn/ResultsDashboard';
import EmailCollectionModal from '@/components/earn/EmailCollectionModal';
import AnalyzingAnimation from '@/components/earn/AnalyzingAnimation';
import { FullAuditResults } from '@/lib/types';

export default function EarnAuditorPage() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Earn - Shopify Store Auditor",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Free Shopify store auditor tool that analyzes SEO, performance, accessibility, security, and sales optimization in 60 seconds.",
    "featureList": [
      "SEO Analysis & Optimization",
      "Performance & Speed Testing",
      "Accessibility Compliance Check",
      "Security & Trust Signals Verification",
      "Shopify-Specific Features Analysis",
      "Sales Optimization Analysis",
      "100+ Critical Checks",
      "Instant Results in 60 Seconds"
    ],
    "author": {
      "@type": "Organization",
      "name": "ScaleFront.io",
      "url": "https://scalefront.io"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<FullAuditResults | null>(null);
  const [error, setError] = useState<string>('');
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [auditUrl, setAuditUrl] = useState<string>('');

  const handleAudit = async (url: string, credentials?: { shopDomain: string; accessToken: string }) => {
    setLoading(true);
    setError('');
    setAuditUrl(url);

    try {
      const response = await fetch('/api/earn/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url,
          shopifyCredentials: credentials // Pass optional credentials to API
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to analyze website');
      }

      setResults(result);
      // Show email collection modal after audit completes
      setShowEmailModal(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
      console.error('Audit error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSendReport = async (email: string, phone: string) => {
    if (!results) return;

    try {
      await fetch('/api/earn/send-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          phone,
          url: auditUrl,
          results,
        }),
      });
      setShowEmailModal(false);
    } catch (error) {
      console.error('Failed to send report:', error);
      // Still close modal and show results even if email fails
      setShowEmailModal(false);
    }
  };

  const handleReset = () => {
    setResults(null);
    setError('');
  };

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />

      <main className="pt-16">
          {error && (
            <div className="max-w-4xl mx-auto p-6 pt-6">
              <div className="bg-red-100 border border-red-300 text-red-700 rounded-xl p-4 mb-6 shadow-sm">
                <strong className="font-semibold">Error:</strong> {error}
              </div>
            </div>
          )}

          {loading ? (
            <AnalyzingAnimation />
          ) : !results ? (
            <AuditForm onSubmit={handleAudit} loading={loading} />
          ) : (
            <ResultsDashboard results={results} onReset={handleReset} />
          )}

          {/* Email Collection Modal */}
          <EmailCollectionModal
            isOpen={showEmailModal}
            onSubmit={handleSendReport}
            onSkip={() => setShowEmailModal(false)}
          />
      </main>

      <Footer />
    </div>
  );
}
