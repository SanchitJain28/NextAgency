'use client';

interface ScoreGaugeProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
}

export default function ScoreGauge({ score, size = 'lg' }: ScoreGaugeProps) {
  const getColor = (score: number) => {
    if (score >= 80) return 'text-primary';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 80) return 'Good';
    if (score >= 60) return 'Needs Work';
    return 'Poor';
  };

  const sizes = {
    sm: { container: 'w-24 h-24', text: 'text-2xl', label: 'text-xs' },
    md: { container: 'w-32 h-32', text: 'text-4xl', label: 'text-sm' },
    lg: { container: 'w-40 h-40', text: 'text-5xl', label: 'text-sm' },
  };

  const sizeConfig = sizes[size];

  return (
    <div className="flex flex-col items-center gap-3">
      <div className={`${sizeConfig.container} relative flex items-center justify-center`}>
        {/* Background circle */}
        <svg className="absolute inset-0 transform -rotate-90" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            className="text-secondary/30"
          />
          {/* Score circle */}
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            className={getColor(score)}
            strokeDasharray={`${(score / 100) * 440} 440`}
          />
        </svg>
        {/* Score number */}
        <div className={`${sizeConfig.text} font-bold ${getColor(score)}`}>
          {score}
        </div>
      </div>
      <div className={`${sizeConfig.label} font-medium text-muted-foreground`}>
        {getLabel(score)}
      </div>
    </div>
  );
}
