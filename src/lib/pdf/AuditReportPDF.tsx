import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { FullAuditResults } from '../types';

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 30,
    borderBottom: '2 solid #3b82f6',
    paddingBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  scoreSection: {
    marginTop: 20,
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
  },
  overallScore: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1e40af',
    textAlign: 'center',
    marginBottom: 8,
  },
  scoreLabel: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
  },
  industrySection: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#eff6ff',
    borderRadius: 8,
  },
  industryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 8,
  },
  industryText: {
    fontSize: 12,
    color: '#4b5563',
    lineHeight: 1.5,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
    borderBottom: '1 solid #e5e7eb',
    paddingBottom: 6,
  },
  categoryContainer: {
    marginBottom: 15,
    padding: 12,
    backgroundColor: '#f9fafb',
    borderRadius: 6,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },
  categoryScore: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  issuesList: {
    marginTop: 8,
  },
  issue: {
    marginBottom: 8,
    paddingLeft: 10,
  },
  issueTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#991b1b',
    marginBottom: 3,
  },
  issueDescription: {
    fontSize: 10,
    color: '#4b5563',
    marginBottom: 3,
    lineHeight: 1.4,
  },
  issueRecommendation: {
    fontSize: 10,
    color: '#059669',
    fontStyle: 'italic',
    lineHeight: 1.4,
  },
  benchmarkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 4,
  },
  benchmarkLabel: {
    fontSize: 11,
    color: '#6b7280',
  },
  benchmarkValue: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#111827',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 10,
    color: '#9ca3af',
    borderTop: '1 solid #e5e7eb',
    paddingTop: 10,
  },
  recommendationItem: {
    marginBottom: 12,
    padding: 10,
    backgroundColor: '#fef3c7',
    borderRadius: 4,
  },
  recommendationTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#92400e',
    marginBottom: 4,
  },
  recommendationDescription: {
    fontSize: 10,
    color: '#451a03',
    lineHeight: 1.4,
  },
});

interface AuditReportPDFProps {
  results: FullAuditResults;
}

const AuditReportPDF: React.FC<AuditReportPDFProps> = ({ results }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return '#059669';
    if (score >= 60) return '#f59e0b';
    return '#dc2626';
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Website Audit Report</Text>
          <Text style={styles.subtitle}>URL: {results.url}</Text>
          <Text style={styles.subtitle}>Date: {formatDate(results.timestamp)}</Text>
        </View>

        {/* Overall Score */}
        <View style={styles.scoreSection}>
          <Text style={{ ...styles.overallScore, color: getScoreColor(results.overallScore) }}>
            {results.overallScore}/100
          </Text>
          <Text style={styles.scoreLabel}>Overall Score</Text>
        </View>

        {/* Industry Information */}
        {results.industryDisplayName && (
          <View style={styles.industrySection}>
            <Text style={styles.industryTitle}>Industry: {results.industryDisplayName}</Text>
            {results.benchmarks && results.benchmarks[0] && (
              <Text style={styles.industryText}>
                Your overall score is {results.benchmarks[0].difference > 0 ? 'above' : 'below'} the
                industry average ({results.benchmarks[0].industryAverage}/100) by{' '}
                {Math.abs(results.benchmarks[0].difference)} points.
              </Text>
            )}
          </View>
        )}

        {/* Category Scores */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Category Breakdown</Text>

          <View style={styles.categoryContainer}>
            <View style={styles.categoryHeader}>
              <Text style={styles.categoryName}>SEO</Text>
              <Text style={{ ...styles.categoryScore, color: getScoreColor(results.seo.score) }}>
                {results.seo.score}/100
              </Text>
            </View>
            {results.seo.issues.slice(0, 3).map((issue, idx) => (
              <View key={idx} style={styles.issue}>
                <Text style={styles.issueTitle}>• {issue.issue}</Text>
                <Text style={styles.issueRecommendation}>→ {issue.recommendation}</Text>
              </View>
            ))}
          </View>

          <View style={styles.categoryContainer}>
            <View style={styles.categoryHeader}>
              <Text style={styles.categoryName}>Performance</Text>
              <Text
                style={{
                  ...styles.categoryScore,
                  color: getScoreColor(results.performance.score),
                }}
              >
                {results.performance.score}/100
              </Text>
            </View>
            {results.performance.issues.slice(0, 3).map((issue, idx) => (
              <View key={idx} style={styles.issue}>
                <Text style={styles.issueTitle}>• {issue.issue}</Text>
                <Text style={styles.issueRecommendation}>→ {issue.recommendation}</Text>
              </View>
            ))}
          </View>

          <View style={styles.categoryContainer}>
            <View style={styles.categoryHeader}>
              <Text style={styles.categoryName}>Accessibility</Text>
              <Text
                style={{
                  ...styles.categoryScore,
                  color: getScoreColor(results.accessibility.score),
                }}
              >
                {results.accessibility.score}/100
              </Text>
            </View>
            {results.accessibility.issues.slice(0, 3).map((issue, idx) => (
              <View key={idx} style={styles.issue}>
                <Text style={styles.issueTitle}>• {issue.issue}</Text>
                <Text style={styles.issueRecommendation}>→ {issue.recommendation}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Generated by ScaleFront.io Earn Auditor • {formatDate(results.timestamp)}
        </Text>
      </Page>

      {/* Page 2: More Details */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Security & E-commerce</Text>

        <View style={styles.categoryContainer}>
          <View style={styles.categoryHeader}>
            <Text style={styles.categoryName}>Security</Text>
            <Text
              style={{
                ...styles.categoryScore,
                color: getScoreColor(results.security.score),
              }}
            >
              {results.security.score}/100
            </Text>
          </View>
          {results.security.issues.slice(0, 3).map((issue, idx) => (
            <View key={idx} style={styles.issue}>
              <Text style={styles.issueTitle}>• {issue.issue}</Text>
              <Text style={styles.issueRecommendation}>→ {issue.recommendation}</Text>
            </View>
          ))}
        </View>

        <View style={styles.categoryContainer}>
          <View style={styles.categoryHeader}>
            <Text style={styles.categoryName}>Sales Optimization</Text>
            <Text
              style={{
                ...styles.categoryScore,
                color: getScoreColor(results.salesOptimization.score),
              }}
            >
              {results.salesOptimization.score}/100
            </Text>
          </View>
          {results.salesOptimization.issues.slice(0, 3).map((issue, idx) => (
            <View key={idx} style={styles.issue}>
              <Text style={styles.issueTitle}>• {issue.issue}</Text>
              <Text style={styles.issueRecommendation}>→ {issue.recommendation}</Text>
            </View>
          ))}
        </View>

        {/* Top Recommendations */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Recommendations</Text>
          {results.recommendations.slice(0, 5).map((rec, idx) => (
            <View key={idx} style={styles.recommendationItem}>
              <Text style={styles.recommendationTitle}>
                {idx + 1}. {rec.title}
              </Text>
              <Text style={styles.recommendationDescription}>{rec.description}</Text>
            </View>
          ))}
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Generated by ScaleFront.io Earn Auditor • {formatDate(results.timestamp)}
        </Text>
      </Page>
    </Document>
  );
};

export default AuditReportPDF;
