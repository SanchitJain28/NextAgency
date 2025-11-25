'use client';

import { useState } from 'react';
import { Header } from '@/components/header-footer/Header';
import Footer from '@/components/header-footer/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Plus, X, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ComparisonResult {
  url: string;
  overallScore?: number;
  scores?: {
    seo: number;
    performance: number;
    accessibility: number;
    security: number;
    shopify: number;
  };
  criticalIssues?: number;
  error?: string;
}

export default function ComparePage() {
  const [urls, setUrls] = useState<string[]>(['', '']);
  const [results, setResults] = useState<ComparisonResult[]>([]);
  const [loading, setLoading] = useState(false);

  const addUrl = () => {
    if (urls.length < 5) {
      setUrls([...urls, '']);
    }
  };

  const removeUrl = (index: number) => {
    if (urls.length > 2) {
      setUrls(urls.filter((_, i) => i !== index));
    }
  };

  const updateUrl = (index: number, value: string) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  const handleCompare = async () => {
    const validUrls = urls.filter(u => u.trim());
    if (validUrls.length < 2) {
      alert('Please enter at least 2 URLs to compare');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/earn/compare', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ urls: validUrls }),
      });

      const data = await response.json();
      setResults(data.comparison);
    } catch (error) {
      console.error('Comparison failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const chartData = results
    .filter(r => !r.error)
    .map((r) => ({
      name: new URL(r.url).hostname,
      SEO: r.scores?.seo || 0,
      Performance: r.scores?.performance || 0,
      Accessibility: r.scores?.accessibility || 0,
      Security: r.scores?.security || 0,
      Shopify: r.scores?.shopify || 0,
    }));

  const winner = results.reduce((max, r) =>
    !r.error && (r.overallScore || 0) > (max.overallScore || 0) ? r : max
  , results[0]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 pb-24 max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <Link href="/earn">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Auditor
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2">Competitor Comparison</h1>
          <p className="text-muted-foreground">
            Compare up to 5 websites side by side
          </p>
        </div>

        {/* Input Form */}
        <div className="bg-card rounded-xl border border-border p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Enter URLs to Compare</h2>
          <div className="space-y-3 mb-4">
            {urls.map((url, index) => (
              <div key={index} className="flex gap-3">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => updateUrl(index, e.target.value)}
                  placeholder={`Website ${index + 1} URL`}
                  className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground"
                />
                {urls.length > 2 && (
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => removeUrl(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            {urls.length < 5 && (
              <Button variant="outline" onClick={addUrl}>
                <Plus className="mr-2 h-4 w-4" />
                Add URL
              </Button>
            )}
            <Button onClick={handleCompare} disabled={loading}>
              {loading ? 'Comparing...' : 'Compare Websites'}
            </Button>
          </div>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <>
            {/* Winner Card */}
            {winner && !winner.error && (
              <div className="bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Top Performer</h2>
                </div>
                <div className="text-lg text-muted-foreground mb-4">{winner.url}</div>
                <div className="text-5xl font-bold text-primary">{winner.overallScore}/100</div>
              </div>
            )}

            {/* Comparison Table */}
            <div className="bg-card rounded-xl border border-border p-6 mb-8 overflow-x-auto">
              <h2 className="text-xl font-bold mb-6">Score Comparison</h2>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">Website</th>
                    <th className="text-center py-3 px-4 text-muted-foreground font-medium">Overall</th>
                    <th className="text-center py-3 px-4 text-muted-foreground font-medium">SEO</th>
                    <th className="text-center py-3 px-4 text-muted-foreground font-medium">Performance</th>
                    <th className="text-center py-3 px-4 text-muted-foreground font-medium">Accessibility</th>
                    <th className="text-center py-3 px-4 text-muted-foreground font-medium">Security</th>
                    <th className="text-center py-3 px-4 text-muted-foreground font-medium">Shopify</th>
                    <th className="text-center py-3 px-4 text-muted-foreground font-medium">Critical Issues</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, index) => (
                    <tr key={index} className="border-b border-border last:border-0">
                      <td className="py-4 px-4">
                        <div className="font-medium">{new URL(result.url).hostname}</div>
                        <div className="text-xs text-muted-foreground truncate max-w-[200px]">
                          {result.url}
                        </div>
                      </td>
                      {result.error ? (
                        <td colSpan={7} className="py-4 px-4 text-center text-red-500">
                          {result.error}
                        </td>
                      ) : (
                        <>
                          <td className="py-4 px-4 text-center">
                            <span className={`font-bold text-lg ${
                              (result.overallScore || 0) >= 80 ? 'text-primary' :
                              (result.overallScore || 0) >= 60 ? 'text-yellow-500' :
                              'text-red-500'
                            }`}>
                              {result.overallScore}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-center">{result.scores?.seo}</td>
                          <td className="py-4 px-4 text-center">{result.scores?.performance}</td>
                          <td className="py-4 px-4 text-center">{result.scores?.accessibility}</td>
                          <td className="py-4 px-4 text-center">{result.scores?.security}</td>
                          <td className="py-4 px-4 text-center">{result.scores?.shopify}</td>
                          <td className="py-4 px-4 text-center">
                            <span className={result.criticalIssues && result.criticalIssues > 0 ? 'text-red-500 font-semibold' : ''}>
                              {result.criticalIssues || 0}
                            </span>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Chart */}
            {chartData.length > 0 && (
              <div className="bg-card rounded-xl border border-border p-6">
                <h2 className="text-xl font-bold mb-6">Visual Comparison</h2>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" stroke="#999" />
                    <YAxis stroke="#999" domain={[0, 100]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1f2937',
                        border: '1px solid #374151',
                        borderRadius: '8px',
                      }}
                    />
                    <Legend />
                    <Bar dataKey="SEO" fill="#3B82F6" />
                    <Bar dataKey="Performance" fill="#F59E0B" />
                    <Bar dataKey="Accessibility" fill="#8B5CF6" />
                    <Bar dataKey="Security" fill="#EF4444" />
                    <Bar dataKey="Shopify" fill="#91CB5A" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
