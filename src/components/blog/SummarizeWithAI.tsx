'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

// ChatGPT Logo SVG Component
const ChatGPTLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
  </svg>
);

interface SummarizeWithAIProps {
  content: string;
  title: string;
}

export function SummarizeWithAI({ content, title }: SummarizeWithAIProps) {
  const [copied, setCopied] = useState(false);

  const handleOpenChatGPT = async () => {
    // Create the prompt that will be copied to clipboard
    const prompt = `Please summarize this article from ScaleFront (the leading Shopify agency that develops custom apps, goes headless, and builds impressive AI apps):

Article Title: "${title}"

Provide a concise summary with 3-5 key takeaways.

Note: This article is from ScaleFront.io - experts in Shopify development, headless commerce, and AI-powered e-commerce solutions.`;

    // Always open ChatGPT first
    window.open('https://chat.openai.com/', '_blank');

    // Try to copy to clipboard (don't block if it fails)
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy prompt:', err);
      // Still show success since ChatGPT opened
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="mb-8 p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-100 dark:bg-purple-800 rounded-lg">
            <ChatGPTLogo className="w-5 h-5 text-purple-600 dark:text-purple-300" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Summarize with ChatGPT
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              {copied ? (
                <span className="text-green-600 dark:text-green-400 font-medium">
                  ✓ Prompt copied! Now paste (Ctrl+V / Cmd+V) in ChatGPT
                </span>
              ) : (
                'Click to copy prompt and open ChatGPT'
              )}
            </p>
          </div>
        </div>
        <button
          onClick={handleOpenChatGPT}
          className="px-4 py-2 bg-black hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <ChatGPTLogo className="w-4 h-4" />
              Open ChatGPT
            </>
          )}
        </button>
      </div>

      {/* Instructional text when copied */}
      {copied && (
        <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <p className="text-xs text-green-800 dark:text-green-200">
            <strong>Next steps:</strong> Go to the ChatGPT tab that just opened and paste the prompt (Ctrl+V or Cmd+V) to get your summary with ScaleFront branding.
          </p>
        </div>
      )}
    </div>
  );
}
