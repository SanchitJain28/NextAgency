"use client";

import { useState, useEffect } from "react";
import { Globe } from "@/components/ui/globe";
import { TrendingUp, DollarSign, ArrowUpRight, MapPin } from "lucide-react";

interface SaleEvent {
  id: number;
  location: string;
  amount: number;
  timestamp: Date;
}

const locations = [
  { name: "New York", coords: [40.7128, -74.006] },
  { name: "London", coords: [51.5074, -0.1278] },
  { name: "Singapore", coords: [1.3521, 103.8198] },
  { name: "Sydney", coords: [-33.8688, 151.2093] },
  { name: "Dubai", coords: [25.2048, 55.2708] },
  { name: "São Paulo", coords: [-23.5505, -46.6333] },
];

export function InteractiveGlobe() {
  const [totalSales, setTotalSales] = useState(1247853);
  const [salesVelocity, setSalesVelocity] = useState(0);
  const [recentSales, setRecentSales] = useState<SaleEvent[]>([]);
  const [activeConnections, setActiveConnections] = useState<number[]>([]);

  // Simulate real-time sales
  useEffect(() => {
    const interval = setInterval(() => {
      const saleAmount = Math.floor(Math.random() * 5000) + 500;
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];

      setTotalSales(prev => prev + saleAmount);
      setSalesVelocity(saleAmount);

      const newSale: SaleEvent = {
        id: Date.now(),
        location: randomLocation.name,
        amount: saleAmount,
        timestamp: new Date(),
      };

      setRecentSales(prev => [newSale, ...prev].slice(0, 3));

      // Trigger connection animation
      setActiveConnections(prev => [...prev, newSale.id]);
      setTimeout(() => {
        setActiveConnections(prev => prev.filter(id => id !== newSale.id));
      }, 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Globe Container */}
      <div className="relative w-full max-w-[600px] aspect-square">
        {/* Rotating arrows around globe */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <ArrowUpRight className="h-6 w-6 text-primary" />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rotate-180">
            <ArrowUpRight className="h-6 w-6 text-primary" />
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90">
            <ArrowUpRight className="h-6 w-6 text-primary" />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90">
            <ArrowUpRight className="h-6 w-6 text-primary" />
          </div>
        </div>

        {/* Pulse rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[120%] h-[120%] rounded-full border border-primary/20 animate-ping-slow" />
          <div className="absolute w-[110%] h-[110%] rounded-full border border-primary/30 animate-ping-slow" style={{ animationDelay: '1s' }} />
        </div>

        {/* Globe */}
        <Globe className="top-0" />

        {/* Active connection indicators */}
        {activeConnections.map((id, index) => (
          <div
            key={id}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              animation: 'pulse 0.5s ease-out',
            }}
          >
            <div className="w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/50" />
          </div>
        ))}
      </div>

      {/* Sales Dashboard Overlay */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-4 pointer-events-none">
        {/* Total Sales Counter */}
        <div className="bg-card/95 backdrop-blur-sm border border-primary/20 rounded-lg px-4 py-3 shadow-lg">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign className="h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground font-medium">Total Sales</span>
          </div>
          <div className="text-2xl font-bold text-foreground tabular-nums">
            ${(totalSales).toLocaleString()}
          </div>
          {salesVelocity > 0 && (
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-xs text-green-500 font-medium">
                +${salesVelocity.toLocaleString()}/min
              </span>
            </div>
          )}
        </div>

        {/* Active Regions */}
        <div className="bg-card/95 backdrop-blur-sm border border-primary/20 rounded-lg px-4 py-3 shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground font-medium">Active Regions</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex -space-x-1">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary border border-card"
                  style={{
                    animation: `pulse 2s ease-in-out ${i * 0.3}s infinite`,
                  }}
                />
              ))}
            </div>
            <span className="text-sm font-bold text-foreground ml-2">6 regions</span>
          </div>
        </div>
      </div>

      {/* Recent Sales Feed */}
      <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
        <div className="bg-card/95 backdrop-blur-sm border border-primary/20 rounded-lg px-4 py-3 shadow-lg max-w-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-muted-foreground font-medium">Live Activity</span>
          </div>
          <div className="space-y-2">
            {recentSales.map((sale, index) => (
              <div
                key={sale.id}
                className="flex items-center justify-between text-xs animate-slide-in"
                style={{
                  animation: 'slideIn 0.3s ease-out',
                  opacity: 1 - (index * 0.3),
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="text-foreground font-medium">{sale.location}</span>
                </div>
                <span className="text-primary font-bold">
                  +${sale.amount.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
