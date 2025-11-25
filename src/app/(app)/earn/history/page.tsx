'use client';

import { useState } from 'react';
import { Header } from '@/components/header-footer/Header';
import Footer from '@/components/header-footer/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingUp, TrendingDown, Calendar } from 'lucide-react';
import Link from 'next/link';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { FullAuditResults } from '@/lib/types';

interface SavedAudit {
  id: string;
  url: string;
  timestamp: string;
  overallScore: number;
  results: FullAuditResults;
}

export default function HistoryPage() {
  const [url, setUrl] = useState('');
  const [audits, setAudits] = useState<SavedAudit[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchHistory = async () => {
    if (!url) return;

    setLoading(true);
    try {
      const response = await fetch(`/api/earn/history?url=${encodeURIComponent(url)}`);
      const data = await response.json();
      setAudits(data);
    } catch (error) {
      console.error('Failed to fetch history:', error);
    } finally {
      setLoading(false);
    }
  };

  const chartData = audits.map((audit) => ({
    date: new Date(audit.timestamp).toLocaleDateString(),
    'Overall': audit.results.overallScore,
    'SEO': audit.results.seo?.score || 0,
    'Performance': audit.results.performance?.score || 0,
    'Accessibility': audit.results.accessibility?.score || 0,
    'Security': audit.results.security?.score || 0,
  })).reverse();

  const latestScore = audits[0]?.overallScore || 0;
  const previousScore = audits[1]?.overallScore || 0;
  const scoreDiff = latestScore - previousScore;

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
          <h1 className="text-4xl font-bold text-foreground mb-2">Audit History</h1>
          <p className="text-muted-foreground">
            Track your website's performance over time
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-card rounded-xl border border-border p-6 mb-8">
          <label htmlFor="history-url" className="block text-sm font-medium mb-3">
            Enter URL to view history
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              id="history-url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://your-store.com"
              className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground"
              onKeyPress={(e) => e.key === 'Enter' && fetchHistory()}
            />
            <Button onClick={fetchHistory} disabled={loading || !url}>
              {loading ? 'Loading...' : 'View History'}
            </Button>
          </div>
        </div>

        {/* Results */}
        {audits.length > 0 && (
          <>
            {/* Score Change */}
            {audits.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-card rounded-xl border border-border p-6">
                  <div className="text-sm text-muted-foreground mb-2">Latest Score</div>
                  <div className="text-4xl font-bold text-primary">{latestScore}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {new Date(audits[0].timestamp).toLocaleDateString()}
                  </div>
                </div>
                <div className="bg-card rounded-xl border border-border p-6">
                  <div className="text-sm text-muted-foreground mb-2">Change</div>
                  <div className={`text-4xl font-bold flex items-center gap-2 ${
                    scoreDiff > 0 ? 'text-green-500' : scoreDiff < 0 ? 'text-red-500' : 'text-muted-foreground'
                  }`}>
                    {scoreDiff > 0 ? <TrendingUp className="h-8 w-8" /> : scoreDiff < 0 ? <TrendingDown className="h-8 w-8" /> : null}
                    {scoreDiff > 0 ? '+' : ''}{scoreDiff}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">vs previous audit</div>
                </div>
                <div className="bg-card rounded-xl border border-border p-6">
                  <div className="text-sm text-muted-foreground mb-2">Total Audits</div>
                  <div className="text-4xl font-bold text-foreground">{audits.length}</div>
                  <div className="text-xs text-muted-foreground mt-1">historical records</div>
                </div>
              </div>
            )}

            {/* Chart */}
            {chartData.length > 1 && (
              <div className="bg-card rounded-xl border border-border p-6 mb-8">
                <h2 className="text-xl font-bold mb-6">Score Trend</h2>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="date" stroke="#999" />
                    <YAxis stroke="#999" domain={[0, 100]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1f2937',
                        border: '1px solid #374151',
                        borderRadius: '8px',
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="Overall" stroke="#91CB5A" strokeWidth={3} />
                    <Line type="monotone" dataKey="SEO" stroke="#3B82F6" strokeWidth={2} />
                    <Line type="monotone" dataKey="Performance" stroke="#F59E0B" strokeWidth={2} />
                    <Line type="monotone" dataKey="Accessibility" stroke="#8B5CF6" strokeWidth={2} />
                    <Line type="monotone" dataKey="Security" stroke="#EF4444" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* Audit List */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="text-xl font-bold mb-6">Audit History</h2>
              <div className="space-y-4">
                {audits.map((audit, index) => (
                  <div
                    key={audit.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                        <div className="text-2xl font-bold text-primary">{audit.overallScore}</div>
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          {new Date(audit.timestamp).toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                          <Calendar className="h-4 w-4" />
                          {index === 0 ? 'Latest audit' : `${index} audit${index > 1 ? 's' : ''} ago`}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-6 text-sm">
                      <div>
                        <div className="text-muted-foreground">SEO</div>
                        <div className="font-semibold">{audit.results.seo?.score || 'N/A'}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Perf</div>
                        <div className="font-semibold">{audit.results.performance?.score || 'N/A'}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">A11y</div>
                        <div className="font-semibold">{audit.results.accessibility?.score || 'N/A'}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Sec</div>
                        <div className="font-semibold">{audit.results.security?.score || 'N/A'}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {!loading && audits.length === 0 && url && (
          <div className="text-center py-12 text-muted-foreground">
            <p>No audit history found for this URL.</p>
            <p className="mt-2">Run an audit first to start tracking!</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
