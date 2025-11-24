"use client";

import { useState, useEffect, useMemo } from "react";
import { Globe } from "@/components/ui/globe";
import { TrendingUp, DollarSign, Star } from "lucide-react";
import Image from "next/image";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  const particlesOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: ["#ffffff", "#e0e0e0", "#cccccc"],
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.08,
          width: 1,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "bounce" as const,
          },
          random: true,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: { min: 0.3, max: 0.8 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        shape: {
          type: "circle" as const,
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* TSParticles Galaxy Effect */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0"
      />

      {/* Galaxy background glow */}
      {/* Globe Container */}
      <div className="relative w-full max-w-[600px] aspect-square">
        {/* Minimal glow rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[105%] h-[105%] rounded-full bg-white/3 blur-xl" />
        </div>

        {/* Circular Glass Frame */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[85%] h-[85%] rounded-full backdrop-blur-md bg-background/20 border-2 border-white/20 shadow-2xl shadow-white/10 animate-pulse"
               style={{
                 boxShadow: 'inset 0 0 60px rgba(255, 255, 255, 0.05), 0 0 80px rgba(255, 255, 255, 0.08)'
               }}
          />
        </div>

        {/* Globe */}
        <Globe className="top-0" />

        {/* Active connection indicators */}
        {activeConnections.map((id) => (
          <div
            key={id}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              animation: 'pulse 0.5s ease-out',
            }}
          >
            <div className="w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50" />
          </div>
        ))}
      </div>

      {/* Top Section: Sales Counter and Review Image */}
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
              <TrendingUp className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground font-medium">
                +${salesVelocity.toLocaleString()}/min
              </span>
            </div>
          )}
        </div>

        {/* Happy Customer - Top Right */}
        <div className="relative hover:scale-105 transition-transform">
          <div className="relative w-28 h-28 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/reviewImage/reviewImage_pe1rjnpe1rjnpe1r.png"
              alt="Happy Customer"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-0.5 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full border border-primary/20">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-primary text-primary" />
            ))}
          </div>
        </div>
      </div>

      {/* Side Review Images - Larger */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 p-4 pointer-events-none">
        {/* Happy Customer - Left */}
        <div className="relative hover:scale-105 transition-transform">
          <div className="relative w-28 h-28 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/reviewImage/reviewImage_lhz9twlhz9twlhz9 (1).png"
              alt="Happy Customer"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-0.5 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full border border-primary/20">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-primary text-primary" />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 p-4 pointer-events-none">
        {/* Happy Customer - Right */}
        <div className="relative hover:scale-105 transition-transform">
          <div className="relative w-28 h-28 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/reviewImage/reviewImage_pe1rjnpe1rjnpe1r (1).png"
              alt="Happy Customer"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-0.5 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full border border-primary/20">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-primary text-primary" />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Review Image */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 p-4 pointer-events-none">
        {/* Happy Customer - Bottom */}
        <div className="relative hover:scale-105 transition-transform">
          <div className="relative w-28 h-28 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/reviewImage/reviewImage_lhz9twlhz9twlhz9.png"
              alt="Happy Customer"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-0.5 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full border border-primary/20">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-primary text-primary" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
