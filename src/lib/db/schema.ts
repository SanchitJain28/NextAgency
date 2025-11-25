import { FullAuditResults } from '../types';

export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  createdAt: string;
  plan: 'free' | 'pro' | 'agency';
  auditsThisMonth: number;
  settings?: UserSettings;
}

export interface UserSettings {
  emailNotifications: boolean;
  scheduledAudits: ScheduledAudit[];
  whiteLabel?: WhiteLabelSettings;
}

export interface WhiteLabelSettings {
  companyName: string;
  logo?: string;
  primaryColor?: string;
  domain?: string;
}

export interface ScheduledAudit {
  id: string;
  url: string;
  frequency: 'daily' | 'weekly' | 'monthly';
  nextRun: string;
  enabled: boolean;
  emailResults: boolean;
}

export interface SavedAudit {
  id: string;
  userId?: string;
  url: string;
  timestamp: string;
  results: FullAuditResults;
  overallScore: number;
  tags?: string[];
}

export interface ComparisonGroup {
  id: string;
  userId: string;
  name: string;
  urls: string[];
  createdAt: string;
}
