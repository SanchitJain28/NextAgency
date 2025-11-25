'use client';

import { Issue } from '@/lib/types';
import { AlertCircle, AlertTriangle, Info, CheckCircle } from 'lucide-react';

interface IssueListProps {
  issues: Issue[];
}

export default function IssueList({ issues }: IssueListProps) {
  if (issues.length === 0) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
        <p className="text-muted-foreground">No issues found! Great job! 🎉</p>
      </div>
    );
  }

  const getSeverityIcon = (severity: Issue['severity']) => {
    switch (severity) {
      case 'critical':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'high':
        return <AlertCircle className="h-5 w-5 text-orange-500" />;
      case 'medium':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'low':
        return <Info className="h-5 w-5 text-blue-500" />;
      default:
        return <Info className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getSeverityColor = (severity: Issue['severity']) => {
    switch (severity) {
      case 'critical':
        return 'border-red-500/20 bg-red-500/5';
      case 'high':
        return 'border-orange-500/20 bg-orange-500/5';
      case 'medium':
        return 'border-yellow-500/20 bg-yellow-500/5';
      case 'low':
        return 'border-blue-500/20 bg-blue-500/5';
      default:
        return 'border-border bg-card';
    }
  };

  // Group by severity
  const groupedIssues = {
    critical: issues.filter((i) => i.severity === 'critical'),
    high: issues.filter((i) => i.severity === 'high'),
    medium: issues.filter((i) => i.severity === 'medium'),
    low: issues.filter((i) => i.severity === 'low'),
    info: issues.filter((i) => i.severity === 'info'),
  };

  return (
    <div className="space-y-4">
      {Object.entries(groupedIssues).map(([severity, severityIssues]) => {
        if (severityIssues.length === 0) return null;

        return (
          <div key={severity}>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-3">
              {severity} ({severityIssues.length})
            </h3>
            <div className="space-y-3">
              {severityIssues.map((issue, idx) => (
                <div
                  key={idx}
                  className={`rounded-lg border p-4 ${getSeverityColor(issue.severity)}`}
                >
                  <div className="flex items-start gap-3">
                    {getSeverityIcon(issue.severity)}
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-foreground mb-1">
                        {issue.issue}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {issue.recommendation}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
