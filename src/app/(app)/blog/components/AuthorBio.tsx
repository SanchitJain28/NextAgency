import Link from 'next/link';

interface AuthorBioProps {
  author: string;
  bio?: string;
  avatar?: string;
  twitter?: string;
  linkedin?: string;
}

export function AuthorBio({
  author,
  bio = "The ScaleFront engineering team designs and builds bespoke Shopify themes, apps, and headless architectures for scaling DTC brands.",
}: AuthorBioProps) {
  return (
    <div className="mt-12 border border-neutral-200 bg-[#faf9f6] p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row gap-5 items-start">
        <div className="w-12 h-12 border border-neutral-300 bg-neutral-900 text-white font-mono text-base font-bold flex items-center justify-center shrink-0">
          {author?.charAt(0) || 'S'}
        </div>
        <div className="flex-1">
          <div className="font-mono text-xs text-neutral-500 uppercase tracking-wider mb-1">
            PUBLISHED BY
          </div>
          <h3
            className="text-lg font-bold text-neutral-900 mb-2"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            {author}
          </h3>
          <p className="text-sm text-neutral-600 leading-relaxed mb-4">
            {bio}
          </p>
          <Link
            href="/contact-us"
            className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--sf-primary)] hover:underline"
          >
            Speak with an architect →
          </Link>
        </div>
      </div>
    </div>
  );
}
