'use client';

import { useState } from 'react';
import { FullAuditResults } from '@/lib/types';
import ScoreGauge from './ScoreGauge';
import IssueList from './IssueList';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Share2, Mail } from 'lucide-react';
import { downloadPDF } from '@/lib/pdf/generatePDF';

interface ResultsDashboardProps {
  results: FullAuditResults;
  onReset: () => void;
}

export default function ResultsDashboard({ results, onReset }: ResultsDashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'seo' | 'performance' | 'accessibility' | 'security' | 'shopify' | 'salesOptimization'>('overview');
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSending, setEmailSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleDownloadPDF = () => {
    downloadPDF(results);
  };

  const handleSendEmail = async () => {
    if (!email) return;

    setEmailSending(true);
    try {
      const response = await fetch('/api/earn/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: results.url,
          email,
        }),
      });

      if (response.ok) {
        setEmailSent(true);
        setTimeout(() => {
          setShowEmailDialog(false);
          setEmailSent(false);
          setEmail('');
        }, 2000);
      }
    } catch (error) {
      console.error('Failed to send email:', error);
    } finally {
      setEmailSending(false);
    }
  };

  const tabs = [
    { id: 'overview' as const, label: 'Overview', icon: '📊' },
    { id: 'seo' as const, label: 'SEO', icon: '🔍', score: results.seo.score },
    { id: 'performance' as const, label: 'Performance', icon: '⚡', score: results.performance.score },
    { id: 'accessibility' as const, label: 'Accessibility', icon: '♿', score: results.accessibility.score },
    { id: 'security' as const, label: 'Security', icon: '🔒', score: results.security.score },
    { id: 'shopify' as const, label: 'Shopify', icon: '🛍️', score: results.shopify.score },
    { id: 'salesOptimization' as const, label: 'Sales Optimization', icon: '💰', score: results.salesOptimization.score },
  ];

  const getAllCriticalIssues = () => {
    const allIssues = [
      ...results.seo.issues,
      ...results.performance.issues,
      ...results.accessibility.issues,
      ...results.security.issues,
      ...results.shopify.issues,
      ...results.salesOptimization.issues,
    ];
    return allIssues.filter(i => i.severity === 'critical' || i.severity === 'high');
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <Button
              variant="outline"
              onClick={onReset}
              className="mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              New Audit
            </Button>
            <h1 className="text-3xl font-bold text-gray-900">Audit Results</h1>
            <p className="text-gray-600 mt-1">{results.url}</p>
            <p className="text-sm text-gray-500">
              {new Date(results.timestamp).toLocaleString()}
            </p>
            {/* Accuracy Mode Badge */}
            {results.accuracyLevel && (
              <div className="mt-3">
                {results.accuracyLevel === 'enhanced' ? (
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 rounded-full text-sm font-semibold text-green-800">
                    <span className="text-base">🎯</span>
                    Enhanced Accuracy Mode
                    <span className="text-xs bg-green-200 px-2 py-0.5 rounded-full">~95%</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 border border-gray-300 rounded-full text-sm font-medium text-gray-700">
                    Basic Mode
                    <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">~65%</span>
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" onClick={() => setShowEmailDialog(true)}>
              <Mail className="mr-2 h-4 w-4" />
              Email Report
            </Button>
            <Button variant="outline" size="sm" onClick={handleDownloadPDF}>
              <Download className="mr-2 h-4 w-4" />
              Export PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Overall Score */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Overall Health Score</h2>
            <p className="text-gray-600 mb-4">
              Your store has been analyzed across 6 key categories with over 100 individual checks.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                {getAllCriticalIssues().length} critical/high priority issues found
              </span>
            </div>
          </div>
          <ScoreGauge score={results.overallScore} size="lg" />
        </div>
      </div>

      {/* Category Scores */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {tabs.slice(1).map((tab) => (
          <div key={tab.id} className="bg-white rounded-lg shadow border border-gray-200 p-4 text-center hover:border-blue-500/50 transition-colors cursor-pointer" onClick={() => setActiveTab(tab.id)}>
            <div className="text-2xl mb-2">{tab.icon}</div>
            <div className={`text-3xl font-bold mb-1 ${getScoreColor(tab.score!)}`}>
              {tab.score}
            </div>
            <div className="text-sm text-gray-600">{tab.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 px-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Priority Issues</h2>
            <div className="bg-white rounded-lg shadow border border-gray-200 p-6 mb-8">
              <IssueList issues={getAllCriticalIssues()} />
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-900">Top Recommendations</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {results.recommendations.slice(0, 6).map((rec, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow border border-gray-200 p-5">
                  <div className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      rec.priority === 'high' ? 'bg-red-500' :
                      rec.priority === 'medium' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`} />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{rec.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{rec.description}</p>
                      <span className="text-xs font-medium text-blue-600">{rec.impact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab !== 'overview' && (
          <div>
            <div className="bg-white rounded-lg shadow border border-gray-200 p-6 mb-6">
              <h2 className="text-xl font-bold mb-4 capitalize text-gray-900">{activeTab} Metrics</h2>
              <MetricsDisplay metrics={results[activeTab].metrics} />
            </div>

            {/* Show detected apps in Sales Optimization tab if available */}
            {activeTab === 'salesOptimization' && results.detectedApps && results.detectedApps.length > 0 && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg shadow border-2 border-green-200 p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span>🎯</span>
                  Detected Shopify Apps (via Admin API)
                </h3>
                <div className="flex flex-wrap gap-2">
                  {results.detectedApps.map((app, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1.5 bg-white border border-green-300 rounded-lg text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {app}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  These apps were detected using Shopify Admin API for accurate identification.
                </p>
              </div>
            )}

            <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Issues & Recommendations</h2>
              <IssueList issues={results[activeTab].issues} />
            </div>
          </div>
        )}
      </div>

      {/* Email Dialog */}
      {showEmailDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Email Audit Report</h3>
            {emailSent ? (
              <div className="text-center py-4">
                <div className="text-blue-500 text-4xl mb-2">✓</div>
                <p className="text-gray-900">Report sent successfully!</p>
              </div>
            ) : (
              <>
                <p className="text-gray-600 mb-4">
                  Enter your email address to receive the full audit report
                </p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 bg-white text-gray-900"
                />
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setShowEmailDialog(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSendEmail}
                    disabled={!email || emailSending}
                    className="flex-1"
                  >
                    {emailSending ? 'Sending...' : 'Send Report'}
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="mt-12 bg-blue-600 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Need Help Fixing These Issues?</h2>
        <p className="text-lg mb-6 opacity-90">
          ScaleFront specializes in Shopify optimization and can help you improve your store's performance.
        </p>
        <Button variant="secondary" size="lg" asChild>
          <a href="/contact-us">
            Get Expert Help
            <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
          </a>
        </Button>
      </div>
    </div>
  );
}

function MetricsDisplay({ metrics }: { metrics: Record<string, unknown> }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Object.entries(metrics).map(([key, value]) => {
        // Handle complex values
        let displayValue = value;
        if (typeof value === 'object' && value !== null) {
          if ('value' in value) {
            displayValue = value.value;
          } else {
            displayValue = JSON.stringify(value);
          }
        }

        return (
          <div key={key} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <div className="text-sm text-gray-600 mb-1 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </div>
            <div className="text-lg font-semibold text-gray-900">
              {typeof displayValue === 'boolean' ? (displayValue ? '✓ Yes' : '✗ No') : String(displayValue)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
