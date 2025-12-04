import { createClient } from '@supabase/supabase-js';

// Create Supabase client for client-side operations (uses anon key)
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Create Supabase admin client for server-side operations (uses service role key)
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

// Database types
export interface NewsletterSubscriber {
  id?: string;
  email: string;
  subscribed_at?: string;
  source?: string;
  status?: 'active' | 'unsubscribed';
  ip_address?: string;
  user_agent?: string;
  created_at?: string;
  updated_at?: string;
}

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  project_type: string;
  budget?: string;
  message: string;
  status?: 'new' | 'contacted' | 'in_progress' | 'converted' | 'closed';
  ip_address?: string;
  user_agent?: string;
  created_at?: string;
  updated_at?: string;
}
