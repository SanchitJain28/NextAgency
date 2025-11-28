'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const analyzingSteps = [
  { icon: '🌐', message: 'Loading website...', duration: 2000 },
  { icon: '🔍', message: 'Analyzing SEO & meta tags...', duration: 3000 },
  { icon: '⚡', message: 'Checking performance & speed...', duration: 3000 },
  { icon: '♿', message: 'Testing accessibility...', duration: 2500 },
  { icon: '🔒', message: 'Verifying security headers...', duration: 2500 },
  { icon: '🛍️', message: 'Detecting Shopify features...', duration: 3000 },
  { icon: '💰', message: 'Analyzing sales optimization...', duration: 3000 },
  { icon: '📊', message: 'Running Core Web Vitals...', duration: 3000 },
  { icon: '🎯', message: 'Detecting installed apps...', duration: 2500 },
  { icon: '📈', message: 'Calculating scores...', duration: 2000 },
  { icon: '✨', message: 'Finalizing report...', duration: 2000 },
];

export default function AnalyzingAnimation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        return prev + Math.random() * 3;
      });
    }, 300);

    // Step cycling
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % analyzingSteps.length);
    }, 2800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, []);

  const currentStepData = analyzingSteps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 md:p-12">
          {/* Animated Icon */}
          <div className="flex justify-center mb-8">
            <motion.div
              key={currentStep}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-5xl shadow-lg"
            >
              {currentStepData.icon}
            </motion.div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Analyzing Your Store
          </h2>

          {/* Animated Message */}
          <div className="h-8 mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center text-lg text-gray-600 font-medium"
              >
                {currentStepData.message}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">
              {Math.round(progress)}% Complete
            </p>
          </div>

          {/* Checklist of completed steps */}
          <div className="bg-gray-50 rounded-xl p-6 space-y-3">
            {analyzingSteps.slice(0, currentStep + 1).map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 text-sm"
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  index < currentStep
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-500 text-white animate-pulse'
                }`}>
                  {index < currentStep ? '✓' : '•'}
                </div>
                <span className={index < currentStep ? 'text-gray-500' : 'text-gray-900 font-medium'}>
                  {step.message}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Info Text */}
          <p className="text-center text-xs text-gray-500 mt-6">
            This usually takes 30-60 seconds • Please don't close this page
          </p>
        </div>

        {/* Stats Cards Below */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-200"
          >
            <div className="text-2xl font-bold text-blue-600">100+</div>
            <div className="text-xs text-gray-600">Checks Running</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-200"
          >
            <div className="text-2xl font-bold text-blue-600">6</div>
            <div className="text-xs text-gray-600">Categories</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-200"
          >
            <div className="text-2xl font-bold text-blue-600 animate-pulse">●</div>
            <div className="text-xs text-gray-600">Live Analysis</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
