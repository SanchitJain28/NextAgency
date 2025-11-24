"use client";

import { useState, useEffect } from "react";
import { Clock, Zap } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  status: "available" | "in-meeting" | "offline";
  activity?: string;
}

export function TeamAvailability() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeMembers, setActiveMembers] = useState(12);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate active team member count changes
  useEffect(() => {
    const countInterval = setInterval(() => {
      setActiveMembers(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newCount = prev + change;
        return Math.max(8, Math.min(15, newCount)); // Keep between 8-15
      });
    }, 5000);
    return () => clearInterval(countInterval);
  }, []);

  // Simulate team availability (in a real app, this would come from an API)
  const teamMembers: TeamMember[] = [
    {
      name: "Development Team",
      role: "Shopify Experts",
      status: "available",
      activity: "Building custom solutions",
    },
    {
      name: "Support Team",
      role: "24/7 Support",
      status: "available",
      activity: "Assisting clients",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-white";
      case "in-meeting":
        return "bg-gray-400";
      case "offline":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "available":
        return "Available Now";
      case "in-meeting":
        return "In Meeting";
      case "offline":
        return "Offline";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="backdrop-blur-md bg-background/40 border-2 border-primary/30 rounded-2xl p-6 shadow-2xl hover:shadow-primary/20 transition-all hover:scale-105">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary animate-pulse" />
          <h3 className="font-semibold text-lg">Team Status</h3>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{currentTime.toLocaleTimeString()}</span>
        </div>
      </div>

      {/* Active Members Counter */}
      <div className="mb-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Active Team Members</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-lg font-bold text-primary tabular-nums">{activeMembers}</span>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="space-y-3">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="flex items-center gap-3 p-3 rounded-lg bg-background/30 border border-primary/10 hover:bg-background/50 transition-colors"
          >
            {/* Status Indicator */}
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(member.status)} animate-pulse`} />
              </div>
              <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full ${getStatusColor(member.status)} border-2 border-background`} />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="font-medium text-sm truncate">{member.name}</h4>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  member.status === "available" ? "bg-white/20 text-white" : "bg-gray-500/20 text-gray-500"
                }`}>
                  {getStatusText(member.status)}
                </span>
              </div>
              <p className="text-xs text-muted-foreground truncate">{member.role}</p>
              {member.activity && (
                <p className="text-xs text-primary truncate mt-1">{member.activity}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Action */}
      <div className="mt-4 pt-4 border-t border-primary/10">
        <button className="w-full bg-primary/10 hover:bg-primary/20 text-primary py-2 px-4 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2">
          <Zap className="h-4 w-4" />
          Start Consultation
        </button>
      </div>
    </div>
  );
}
