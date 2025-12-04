# Supabase Email Collection Setup Guide

This guide explains how to set up and use the Supabase database for collecting newsletter subscriptions and contact form submissions.

## 🗄️ Database Overview

Two tables have been created to store customer data:

### 1. `newsletter_subscribers`
Stores email addresses from blog newsletter signups

**Fields:**
- `id` - Unique UUID identifier
- `email` - Email address (unique)
- `subscribed_at` - When they subscribed
- `source` - Where they subscribed from (blog, homepage, footer)
- `status` - active or unsubscribed
- `ip_address` - IP address (for tracking)
- `user_agent` - Browser info (for tracking)
- `created_at` - Record creation timestamp
- `updated_at` - Record update timestamp

### 2. `contact_submissions`
Stores contact form submissions

**Fields:**
- `id` - Unique UUID identifier
- `name` - Customer name
- `email` - Email address
- `phone` - Phone number (optional)
- `company` - Company/store name (optional)
- `project_type` - Type of service requested
- `budget` - Budget range (optional)
- `message` - Project details
- `status` - new, contacted, in_progress, converted, closed
- `ip_address` - IP address (for tracking)
- `user_agent` - Browser info (for tracking)
- `created_at` - Record creation timestamp
- `updated_at` - Record update timestamp

---

## 📋 Setup Instructions

### Step 1: Run SQL Commands in Supabase

1. Go to your Supabase dashboard: https://app.supabase.com
2. Select your project: **jjymyhmepbbmjzncieqy** (Scalefront.io)
3. Click on **SQL Editor** in the left sidebar
4. Click **New Query**
5. Copy and paste the entire SQL script from below
6. Click **Run** or press `Ctrl/Cmd + Enter`

<details>
<summary><strong>Click to see SQL Script</strong></summary>

```sql
-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source VARCHAR(50) DEFAULT 'blog',
  status VARCHAR(20) DEFAULT 'active',
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  project_type VARCHAR(100) NOT NULL,
  budget VARCHAR(50),
  message TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'new',
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_status ON newsletter_subscribers(status);
CREATE INDEX IF NOT EXISTS idx_newsletter_created ON newsletter_subscribers(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_created ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_project_type ON contact_submissions(project_type);

-- Enable Row Level Security (RLS)
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies to allow inserts from your app
CREATE POLICY "Allow anonymous inserts to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts to contact"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policies for authenticated admin access
CREATE POLICY "Allow service role full access to newsletter"
  ON newsletter_subscribers
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow service role full access to contact"
  ON contact_submissions
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Add a function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers to auto-update updated_at
CREATE TRIGGER update_newsletter_subscribers_updated_at
  BEFORE UPDATE ON newsletter_subscribers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

</details>

### Step 2: Verify Tables Were Created

1. In Supabase dashboard, click **Table Editor** in the left sidebar
2. You should see two new tables:
   - `newsletter_subscribers`
   - `contact_submissions`

### Step 3: Restart Your Development Server

The environment variables have been added to `.env.local`. Restart your dev server:

```bash
# Stop the current dev server (Ctrl+C)
# Then restart it
npm run dev
```

---

## 🚀 How It Works

### Newsletter Signup (Blog Pages)

When someone enters their email in the newsletter signup form on blog pages:

1. **Frontend** (`src/components/blog/NewsletterSignup.tsx`) sends email to `/api/newsletter`
2. **API Route** (`src/app/api/newsletter/route.ts`) validates email and saves to Supabase
3. **Database** stores the email in `newsletter_subscribers` table
4. **Response** shows success message to user

### Contact Form Submissions

When someone submits the contact form:

1. **Frontend** (`src/components/ContactForm.tsx`) sends form data to `/api/contact`
2. **API Route** (`src/app/api/contact/route.ts`):
   - Saves submission to `contact_submissions` table in Supabase
   - Sends email notification to your team (hello@scalefront.io)
   - Sends confirmation email to customer
3. **Response** shows success message to user

---

## 📊 Viewing Your Data

### Option 1: Supabase Dashboard (Easy)

1. Go to Supabase dashboard: https://app.supabase.com
2. Select your project
3. Click **Table Editor** in left sidebar
4. Select `newsletter_subscribers` or `contact_submissions`
5. View all entries in a spreadsheet-like interface

### Option 2: SQL Queries

Go to **SQL Editor** and run queries:

```sql
-- View all newsletter subscribers
SELECT * FROM newsletter_subscribers ORDER BY created_at DESC;

-- View active subscribers only
SELECT email, subscribed_at, source
FROM newsletter_subscribers
WHERE status = 'active'
ORDER BY created_at DESC;

-- Count subscribers by source
SELECT source, COUNT(*) as count
FROM newsletter_subscribers
WHERE status = 'active'
GROUP BY source;

-- View all contact submissions
SELECT * FROM contact_submissions ORDER BY created_at DESC;

-- View new contact submissions
SELECT name, email, project_type, created_at
FROM contact_submissions
WHERE status = 'new'
ORDER BY created_at DESC;

-- Count submissions by project type
SELECT project_type, COUNT(*) as count
FROM contact_submissions
GROUP BY project_type
ORDER BY count DESC;
```

### Option 3: Export to CSV/Excel

1. Go to **Table Editor**
2. Select the table
3. Click **Export** button
4. Choose CSV or Excel format

---

## 🔐 Security Features

### Row Level Security (RLS)

Both tables have RLS enabled:

- **Anonymous users** (website visitors) can only INSERT data (submit forms)
- **Anonymous users** CANNOT read any data from tables
- **Service role** (your backend) has full access to read, update, delete

This means your data is secure and website visitors cannot query or see other submissions.

### Data Protection

- Emails are stored in lowercase for consistency
- IP addresses and user agents are captured for fraud detection
- All timestamps are in UTC with timezone info

---

## 📈 Managing Your Data

### Update Contact Submission Status

When you've contacted a lead:

```sql
UPDATE contact_submissions
SET status = 'contacted'
WHERE id = 'submission-uuid-here';
```

Status options: `new`, `contacted`, `in_progress`, `converted`, `closed`

### Handle Newsletter Unsubscribes

If someone unsubscribes:

```sql
UPDATE newsletter_subscribers
SET status = 'unsubscribed'
WHERE email = 'customer@example.com';
```

The API handles resubscriptions automatically - if they sign up again, status changes back to `active`.

### Delete Spam/Test Entries

```sql
-- Delete specific entry
DELETE FROM newsletter_subscribers WHERE email = 'test@test.com';

-- Delete test entries
DELETE FROM contact_submissions WHERE email LIKE '%test%';
```

---

## 🔧 Integrations

### Export to Google Sheets (Automated)

You can set up automatic exports:

1. In Supabase, go to **Database > Webhooks**
2. Create webhook triggered on INSERT
3. Send data to Zapier/Make.com
4. Zapier/Make adds row to Google Sheets

### Slack Notifications

Get instant Slack notifications for new contact submissions:

1. Create webhook in Supabase
2. Trigger on INSERT to `contact_submissions`
3. Send POST request to Slack Webhook URL

---

## 🐛 Troubleshooting

### "Failed to subscribe" Error

**Check:**
1. Supabase tables are created (run SQL script)
2. Environment variables are set in `.env.local`
3. Dev server was restarted after adding env variables
4. Check browser console for detailed error

### "Database error" in Logs

**Check:**
1. RLS policies are created (run SQL script completely)
2. Anon key has INSERT permissions
3. Table names match exactly: `newsletter_subscribers` and `contact_submissions`

### Data Not Appearing in Dashboard

**Check:**
1. Form submission was successful (check network tab)
2. Correct table is selected in Table Editor
3. Try refreshing the page
4. Check for SQL errors in Supabase logs

---

## 📞 Support

For Supabase support:
- Documentation: https://supabase.com/docs
- Discord: https://discord.supabase.com

For code issues:
- Check browser console for errors
- Check server logs: `npm run dev` output
- Verify API routes are responding: Test with Postman/Thunder Client

---

## ✅ Quick Verification

Test if everything is working:

### Test Newsletter Signup
1. Go to any blog post: http://localhost:3000/blog/[any-post]
2. Scroll to newsletter signup
3. Enter email: test@example.com
4. Click Subscribe
5. Check Supabase Table Editor > `newsletter_subscribers`

### Test Contact Form
1. Go to contact page: http://localhost:3000/contact-us
2. Fill out form completely
3. Submit
4. Check Supabase Table Editor > `contact_submissions`
5. Check email inbox for confirmation

---

## 🎉 You're All Set!

Your website is now collecting and storing:
- ✅ Newsletter subscriber emails from blog
- ✅ Contact form submissions with all details
- ✅ IP addresses and timestamps for tracking
- ✅ Data is secure with Row Level Security

All submissions are automatically saved to Supabase and can be exported, analyzed, or integrated with other tools anytime!
