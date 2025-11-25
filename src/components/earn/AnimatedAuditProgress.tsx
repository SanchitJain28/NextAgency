'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  Search,
  Zap,
  Shield,
  Eye,
  ShoppingCart,
  TrendingUp,
  CheckCircle2,
  Loader2,
  FileText,
  Globe,
  Image as ImageIcon,
  Link as LinkIcon,
  BarChart3,
  Sparkles,
  Rocket
} from 'lucide-react';

export interface AuditStep {
  id: string;
  category: string;
  icon: any;
  label: string;
  description: string;
  status: 'pending' | 'analyzing' | 'completed' | 'error';
  score?: number;
  issues?: number;
  duration?: number;
}

interface AnimatedAuditProgressProps {
  steps: AuditStep[];
  currentStep: number;
  onComplete?: () => void;
}

export default function AnimatedAuditProgress({
  steps,
  currentStep,
  onComplete,
}: AnimatedAuditProgressProps) {
  const [displayedScore, setDisplayedScore] = useState(0);
  const currentStepData = steps[currentStep];

  // Animate score counting
  useEffect(() => {
    if (currentStepData?.score !== undefined) {
      const targetScore = currentStepData.score;
      const duration = 500;
      const steps = 30;
      const increment = targetScore / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetScore) {
          setDisplayedScore(targetScore);
          clearInterval(timer);
        } else {
          setDisplayedScore(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [currentStepData?.score]);

  // Trigger completion
  useEffect(() => {
    if (currentStep === steps.length && onComplete) {
      const timer = setTimeout(() => onComplete(), 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, steps.length, onComplete]);

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="inline-block mb-4"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
            <Rocket className="w-10 h-10 text-white" />
          </div>
        </motion.div>
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          Analyzing Your Store
        </h2>
        <p className="text-gray-600 text-lg">
          Running comprehensive audit across {steps.length} categories
        </p>
      </motion.div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Progress
          </span>
          <span className="text-sm font-medium text-blue-600">
            {currentStep} / {steps.length}
          </span>
        </div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${(currentStep / steps.length) * 100}%`,
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative overflow-hidden"
          >
            <motion.div
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          </motion.div>
        </div>
      </div>

      {/* Current Step Highlight */}
      <AnimatePresence mode="wait">
        {currentStepData && (
          <motion.div
            key={currentStepData.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-8 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200"
          >
            <div className="flex items-start gap-6">
              {/* Animated Icon */}
              <motion.div
                animate={{
                  rotate: currentStepData.status === 'analyzing' ? 360 : 0,
                  scale: currentStepData.status === 'completed' ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  rotate: {
                    duration: 2,
                    repeat: currentStepData.status === 'analyzing' ? Infinity : 0,
                    ease: 'linear',
                  },
                  scale: {
                    duration: 0.5,
                  },
                }}
                className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                  currentStepData.status === 'completed'
                    ? 'bg-green-500'
                    : currentStepData.status === 'analyzing'
                    ? 'bg-blue-500'
                    : 'bg-gray-400'
                }`}
              >
                {currentStepData.status === 'completed' ? (
                  <CheckCircle2 className="w-8 h-8 text-white" />
                ) : currentStepData.status === 'analyzing' ? (
                  <currentStepData.icon className="w-8 h-8 text-white" />
                ) : (
                  <Loader2 className="w-8 h-8 text-white animate-spin" />
                )}
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {currentStepData.label}
                  </h3>
                  {currentStepData.status === 'analyzing' && (
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="flex items-center gap-2 text-blue-600"
                    >
                      <div className="flex gap-1">
                        <motion.div
                          animate={{ y: [0, -8, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0,
                          }}
                          className="w-2 h-2 bg-blue-600 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -8, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.2,
                          }}
                          className="w-2 h-2 bg-blue-600 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -8, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.4,
                          }}
                          className="w-2 h-2 bg-blue-600 rounded-full"
                        />
                      </div>
                      <span className="text-sm font-medium">Analyzing</span>
                    </motion.div>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{currentStepData.description}</p>

                {/* Score Display */}
                {currentStepData.score !== undefined && (
                  <div className="flex items-center gap-4">
                    <div className="flex items-baseline gap-2">
                      <motion.span
                        key={displayedScore}
                        initial={{ scale: 1.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-4xl font-bold text-blue-600"
                      >
                        {displayedScore}
                      </motion.span>
                      <span className="text-xl text-gray-500">/100</span>
                    </div>

                    {currentStepData.issues !== undefined && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="px-4 py-2 bg-white rounded-lg border border-gray-200"
                      >
                        <span className="text-sm text-gray-600">
                          {currentStepData.issues} issues found
                        </span>
                      </motion.div>
                    )}

                    {currentStepData.duration && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="px-4 py-2 bg-white rounded-lg border border-gray-200"
                      >
                        <span className="text-sm text-gray-600">
                          {currentStepData.duration}ms
                        </span>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Scanning Animation */}
                {currentStepData.status === 'analyzing' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 space-y-2"
                  >
                    {[
                      'Checking meta tags...',
                      'Analyzing content structure...',
                      'Validating links...',
                      'Measuring performance...',
                    ].map((text, i) => (
                      <motion.div
                        key={text}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                          className="w-2 h-2 bg-blue-500 rounded-full"
                        />
                        {text}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* All Steps List */}
      <div className="space-y-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ delay: index * 0.05 }}
            className={`p-4 rounded-xl border-2 transition-all ${
              index === currentStep
                ? 'border-blue-500 bg-blue-50 shadow-lg scale-[1.02]'
                : step.status === 'completed'
                ? 'border-green-200 bg-green-50'
                : 'border-gray-200 bg-white'
            }`}
          >
            <div className="flex items-center gap-4">
              {/* Step Number / Status Icon */}
              <motion.div
                animate={{
                  scale:
                    index === currentStep
                      ? [1, 1.1, 1]
                      : step.status === 'completed'
                      ? 1
                      : 1,
                }}
                transition={{
                  duration: 0.5,
                  repeat: index === currentStep ? Infinity : 0,
                }}
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${
                  step.status === 'completed'
                    ? 'bg-green-500 text-white'
                    : index === currentStep
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step.status === 'completed' ? (
                  <CheckCircle2 className="w-6 h-6" />
                ) : index === currentStep ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  index + 1
                )}
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <step.icon className="w-5 h-5 text-gray-600" />
                  <h4 className="font-semibold text-gray-900">{step.label}</h4>
                </div>
                <p className="text-sm text-gray-600 mt-1">{step.description}</p>
              </div>

              {/* Score Badge */}
              {step.score !== undefined && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className={`px-3 py-1 rounded-full font-semibold text-sm ${
                    step.score >= 80
                      ? 'bg-green-100 text-green-700'
                      : step.score >= 60
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {step.score}/100
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Completion State */}
      {currentStep >= steps.length && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 1,
              times: [0, 0.5, 1],
            }}
            className="inline-block mb-4"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            Audit Complete!
          </h3>
          <p className="text-gray-600 text-lg">
            Your comprehensive report is ready
          </p>

          {/* Confetti Animation */}
          <div className="relative">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: 0, opacity: 1 }}
                animate={{
                  y: -200,
                  x: (Math.random() - 0.5) * 400,
                  rotate: Math.random() * 360,
                  opacity: 0,
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.05,
                  ease: 'easeOut',
                }}
                className="absolute top-0 left-1/2"
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: [
                    '#3B82F6',
                    '#10B981',
                    '#F59E0B',
                    '#EF4444',
                    '#8B5CF6',
                  ][i % 5],
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

// Predefined audit categories with icons
export const AUDIT_CATEGORIES = [
  {
    id: 'seo',
    category: 'SEO',
    icon: Search,
    label: 'SEO Analysis',
    description: 'Checking meta tags, keywords, and search optimization',
  },
  {
    id: 'performance',
    category: 'Performance',
    icon: Zap,
    label: 'Performance Audit',
    description: 'Measuring page speed, load time, and optimization',
  },
  {
    id: 'technical',
    category: 'Technical SEO',
    icon: Globe,
    label: 'Technical SEO',
    description: 'Validating robots.txt, sitemap, and broken links',
  },
  {
    id: 'content',
    category: 'Content',
    icon: FileText,
    label: 'Content Analysis',
    description: 'Analyzing readability, word count, and content quality',
  },
  {
    id: 'accessibility',
    category: 'Accessibility',
    icon: Eye,
    label: 'Accessibility Check',
    description: 'Ensuring ARIA labels, contrast, and screen reader support',
  },
  {
    id: 'security',
    category: 'Security',
    icon: Shield,
    label: 'Security Audit',
    description: 'Checking HTTPS, headers, and security best practices',
  },
  {
    id: 'shopify',
    category: 'Shopify',
    icon: ShoppingCart,
    label: 'Shopify Features',
    description: 'Validating product pages, cart, and Shopify-specific features',
  },
  {
    id: 'sales',
    category: 'Sales',
    icon: TrendingUp,
    label: 'Sales Optimization',
    description: 'Detecting upsells, cross-sells, and conversion features',
  },
];
