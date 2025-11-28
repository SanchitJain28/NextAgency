'use client';

import { useState } from 'react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // TODO: Integrate with your email service (Mailchimp, ConvertKit, etc.)
    // For now, just simulate submission
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8 my-12">
      <div className="max-w-[540px] mx-auto text-center">
        <h3 className="text-[24px] font-bold text-[#292929] mb-3 font-serif">
          Get Shopify Tips in Your Inbox
        </h3>
        <p className="text-[16px] text-[#6B6B6B] mb-6">
          Join 1,000+ store owners getting weekly insights on Shopify optimization, conversion tactics, and growth strategies.
        </p>

        {status === 'success' ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800 text-[14px]">
            Thanks for subscribing! Check your email to confirm.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 border border-gray-300 rounded text-[15px] focus:outline-none focus:ring-2 focus:ring-[#292929] focus:border-transparent"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-[#292929] text-white font-medium rounded hover:bg-black transition-colors disabled:opacity-50 text-[15px] whitespace-nowrap"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}

        <p className="text-[12px] text-[#6B6B6B] mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
