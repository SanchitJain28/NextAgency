"use client";

import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";

interface SalesPoint {
  id: number;
  x: number;
  y: number;
  amount: string;
  location: string;
  delay: number;
}

export function AnimatedGlobe() {
  const [salesPoints, setSalesPoints] = useState<SalesPoint[]>([]);
  const [totalSales, setTotalSales] = useState(1250000);

  useEffect(() => {
    // Generate random sales points
    const points: SalesPoint[] = [
      { id: 1, x: 20, y: 30, amount: "$12.5k", location: "New York", delay: 0 },
      { id: 2, x: 75, y: 25, amount: "$8.2k", location: "London", delay: 0.5 },
      { id: 3, x: 85, y: 60, amount: "$15.7k", location: "Singapore", delay: 1 },
      { id: 4, x: 50, y: 70, amount: "$9.3k", location: "Sydney", delay: 1.5 },
      { id: 5, x: 45, y: 40, amount: "$11.1k", location: "Dubai", delay: 2 },
      { id: 6, x: 15, y: 50, amount: "$6.8k", location: "São Paulo", delay: 2.5 },
    ];
    setSalesPoints(points);

    // Animate total sales
    const interval = setInterval(() => {
      setTotalSales(prev => prev + Math.floor(Math.random() * 5000));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center">
      {/* Animated Globe */}
      <div className="relative w-full max-w-2xl aspect-square">
        {/* Globe circle with gradient */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 blur-3xl animate-pulse" />

        {/* Main globe */}
        <div className="relative w-full h-full rounded-full border-4 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
          {/* Grid lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <circle cx="50%" cy="50%" r="45%" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/50"/>
            <ellipse cx="50%" cy="50%" rx="45%" ry="20%" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/50"/>
            <ellipse cx="50%" cy="50%" rx="20%" ry="45%" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/50"/>
          </svg>

          {/* Animated rings */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full border border-primary/20" />
          </div>

          {/* Sales points */}
          {salesPoints.map((point) => (
            <div
              key={point.id}
              className="absolute animate-ping-slow"
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
                animationDelay: `${point.delay}s`,
              }}
            >
              <div className="relative">
                {/* Pulsing dot */}
                <div className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />

                {/* Sales popup */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap opacity-0 animate-fade-in-up"
                     style={{ animationDelay: `${point.delay + 0.5}s` }}>
                  <div className="bg-card border border-primary/20 rounded-lg px-3 py-2 shadow-xl">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-3 w-3 text-primary" />
                      <span className="text-xs font-bold text-primary">{point.amount}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{point.location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Orbit lines */}
        <div className="absolute inset-0 animate-spin-reverse-slow">
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        </div>
      </div>

      {/* Total sales counter */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-card/95 backdrop-blur-sm border border-primary/20 rounded-2xl px-8 py-4 shadow-2xl">
        <div className="text-center">
          <div className="text-xs text-muted-foreground mb-1">Total Sales Today</div>
          <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ${totalSales.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse-slow {
          to { transform: rotate(-360deg); }
        }
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translate(-50%, 10px); }
          100% { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 15s linear infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
}
