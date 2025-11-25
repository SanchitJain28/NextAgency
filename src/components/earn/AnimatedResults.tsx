'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Info,
  Download,
  Share2,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  TrendingDown,
  Minus,
  Search,
  Zap,
  Globe,
  FileText,
  Eye,
  Shield,
  ShoppingCart,
} from 'lucide-react';

interface ResultsProps {
  results: {
    overallScore: number;
    url: string;
    timestamp: string;
    seo?: any;
    performance?: any;
    technical?: any;
    content?: any;
    accessibility?: any;
    security?: any;
    shopify?: any;
    sales?: any;
  };
}

const CATEGORY_CONFIG = [
  { id: 'seo', label: 'SEO Analysis', icon: Search, color: 'blue' },
  { id: 'performance', label: 'Performance', icon: Zap, color: 'yellow' },
  { id: 'technical', label: 'Technical SEO', icon: Globe, color: 'purple' },
  { id: 'content', label: 'Content Quality', icon: FileText, color: 'green' },
  { id: 'accessibility', label: 'Accessibility', icon: Eye, color: 'indigo' },
  { id: 'security', label: 'Security', icon: Shield, color: 'red' },
  { id: 'shopify', label: 'Shopify Features', icon: ShoppingCart, color: 'pink' },
  { id: 'sales', label: 'Sales Optimization', icon: TrendingUp, color: 'orange' },
];

const SEVERITY_CONFIG = {
  critical: { icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' },
  high: { icon: AlertTriangle, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' },
  medium: { icon: AlertTriangle, color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' },
  low: { icon: Info, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
  info: { icon: Info, color: 'text-gray-600', bg: 'bg-gray-50', border: 'border-gray-200' },
};

export default function AnimatedResults({ results }: ResultsProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedIssue, setExpandedIssue] = useState<number | null>(null);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-lime-600';
    if (score >= 70) return 'text-yellow-600';
    if (score >= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'from-green-500 to-emerald-600';
    if (score >= 80) return 'from-lime-500 to-green-600';
    if (score >= 70) return 'from-yellow-500 to-orange-500';
    if (score >= 60) return 'from-orange-500 to-red-500';
    return 'from-red-500 to-rose-600';
  };

  const getScoreRating = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 80) return 'Good';
    if (score >= 70) return 'Fair';
    if (score >= 60) return 'Poor';
    return 'Critical';
  };

  const getTrendIcon = (score: number) => {
    if (score >= 80) return <TrendingUp className="w-5 h-5" />;
    if (score >= 60) return <Minus className="w-5 h-5" />;
    return <TrendingDown className="w-5 h-5" />;
  };

  // Aggregate all issues by severity
  const allIssues: any[] = [];
  CATEGORY_CONFIG.forEach(cat => {
    const categoryData = results[cat.id as keyof typeof results];
    if (categoryData && categoryData.issues) {
      categoryData.issues.forEach((issue: any) => {
        allIssues.push({
          ...issue,
          category: cat.label,
          categoryId: cat.id,
          icon: cat.icon,
          color: cat.color,
        });
      });
    }
  });

  const criticalIssues = allIssues.filter(i => i.severity === 'critical');
  const highIssues = allIssues.filter(i => i.severity === 'high');
  const mediumIssues = allIssues.filter(i => i.severity === 'medium');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header with Overall Score */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className={`relative w-40 h-40 mx-auto bg-gradient-to-br ${getScoreBg(results.overallScore)} rounded-full shadow-2xl flex items-center justify-center`}>
              <div className="absolute inset-2 bg-white rounded-full flex flex-col items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className={`text-5xl font-bold ${getScoreColor(results.overallScore)}`}
                >
                  {results.overallScore}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm text-gray-600 font-medium"
                >
                  out of 100
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {getScoreRating(results.overallScore)} Performance
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Audit completed for <span className="font-semibold text-blue-600">{results.url}</span>
            </p>
            <p className="text-sm text-gray-500">
              {new Date(results.timestamp).toLocaleString()}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center mt-8"
          >
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
              <Download className="w-5 h-5" />
              Download Report
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors shadow-lg border border-gray-200">
              <Share2 className="w-5 h-5" />
              Share Results
            </button>
          </motion.div>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg border-2 border-red-200"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-gray-600">Critical Issues</h3>
              <AlertCircle className="w-5 h-5 text-red-600" />
            </div>
            <div className="text-3xl font-bold text-red-600">{criticalIssues.length}</div>
            <p className="text-xs text-gray-500 mt-1">Requires immediate attention</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg border-2 border-orange-200"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-gray-600">High Priority</h3>
              <AlertTriangle className="w-5 h-5 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-orange-600">{highIssues.length}</div>
            <p className="text-xs text-gray-500 mt-1">Should be fixed soon</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-200"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-gray-600">Medium Priority</h3>
              <Info className="w-5 h-5 text-yellow-600" />
            </div>
            <div className="text-3xl font-bold text-yellow-600">{mediumIssues.length}</div>
            <p className="text-xs text-gray-500 mt-1">Improvements recommended</p>
          </motion.div>
        </motion.div>

        {/* Category Scores */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Category Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CATEGORY_CONFIG.map((cat, index) => {
              const categoryData = results[cat.id as keyof typeof results];
              if (!categoryData) return null;

              const score = categoryData.score || 0;
              const issues = categoryData.issues?.length || 0;
              const Icon = cat.icon;

              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 cursor-pointer"
                  onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 bg-${cat.color}-100 rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 text-${cat.color}-600`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{cat.label}</h3>
                        <p className="text-sm text-gray-500">{issues} issues found</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`text-3xl font-bold ${getScoreColor(score)}`}>
                        {score}
                      </div>
                      {getTrendIcon(score)}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${score}%` }}
                      transition={{ delay: 1.4 + index * 0.1, duration: 0.8 }}
                      className={`h-full bg-gradient-to-r ${getScoreBg(score)}`}
                    />
                  </div>

                  {/* Expandable Issues */}
                  <AnimatePresence>
                    {expandedCategory === cat.id && categoryData.issues?.length > 0 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-200"
                      >
                        <div className="space-y-2">
                          {categoryData.issues.slice(0, 5).map((issue: any, idx: number) => {
                            const SeverityIcon = SEVERITY_CONFIG[issue.severity as keyof typeof SEVERITY_CONFIG].icon;
                            const severityColor = SEVERITY_CONFIG[issue.severity as keyof typeof SEVERITY_CONFIG].color;

                            return (
                              <div
                                key={idx}
                                className={`flex items-start gap-2 p-3 rounded-lg ${SEVERITY_CONFIG[issue.severity as keyof typeof SEVERITY_CONFIG].bg} ${SEVERITY_CONFIG[issue.severity as keyof typeof SEVERITY_CONFIG].border} border`}
                              >
                                <SeverityIcon className={`w-4 h-4 mt-0.5 ${severityColor} flex-shrink-0`} />
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900">{issue.issue}</p>
                                  <p className="text-xs text-gray-600 mt-1">{issue.recommendation}</p>
                                </div>
                              </div>
                            );
                          })}
                          {categoryData.issues.length > 5 && (
                            <p className="text-xs text-gray-500 text-center py-2">
                              +{categoryData.issues.length - 5} more issues
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Top Priority Issues */}
        {criticalIssues.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-red-600" />
              Critical Issues - Fix Immediately
            </h2>
            <div className="space-y-4">
              {criticalIssues.map((issue, index) => {
                const Icon = issue.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2 + index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg border-2 border-red-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900 text-lg">{issue.issue}</h3>
                            <p className="text-sm text-gray-500">{issue.category}</p>
                          </div>
                          <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                            CRITICAL
                          </span>
                        </div>
                        <p className="text-gray-700 mb-3">{issue.recommendation}</p>
                        <div className="flex items-center gap-2 text-sm text-blue-600">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Mark as fixed</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-2xl text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-2">Ready to Improve Your Score?</h2>
          <p className="text-blue-100 mb-6">
            Let our experts help you implement these recommendations and boost your website performance.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Schedule Free Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
}
