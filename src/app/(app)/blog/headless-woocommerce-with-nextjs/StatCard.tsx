"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { ReactNode } from "react";

interface StatCardProps {
  value: number;       // Target number to count up to
  label: string;       // Label text under the number
  suffix?: string;     // Optional suffix like "+" or "%"
  icon?: ReactNode;    // ReactNode so you can pass <Icon /> or emoji
}

export  const StatCard = ({ value, label, suffix, icon }: StatCardProps) => {
    const { count, ref } = useCountUp(value);

    return (
      <div
        ref={ref}
        className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg text-center transform transition-all hover:scale-105"
      >
        <div className="flex justify-center items-center mb-4">
          <span className="text-4xl">{icon}</span>
        </div>
        <p className="text-5xl font-bold text-[#16A34A]">
          {count}
          {suffix}
        </p>
        <p className="mt-2 text-base text-gray-600">{label}</p>
      </div>
    );
  };