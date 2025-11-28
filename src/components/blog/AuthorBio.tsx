import Image from 'next/image';
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
  bio = "The ScaleFront team helps Shopify brands optimize their stores, improve conversion rates, and scale profitably.",
  avatar = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop",
  twitter,
  linkedin
}: AuthorBioProps) {
  return (
    <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-12">
      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
            {avatar && (
              <Image
                src={avatar}
                alt={author}
                fill
                className="object-cover"
              />
            )}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-[18px] font-bold text-[#292929] dark:text-white">
              Written by {author}
            </h3>
            {(twitter || linkedin) && (
              <div className="flex items-center gap-2">
                {twitter && (
                  <a
                    href={`https://twitter.com/${twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B6B6B] dark:text-gray-400 hover:text-[#292929] dark:hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                )}
                {linkedin && (
                  <a
                    href={`https://linkedin.com/in/${linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B6B6B] dark:text-gray-400 hover:text-[#292929] dark:hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>
          <p className="text-[15px] text-[#6B6B6B] dark:text-gray-300 leading-[1.6] mb-4">
            {bio}
          </p>
          <Link
            href="/contact-us"
            className="text-[14px] text-[#292929] dark:text-white font-medium hover:underline"
          >
            Get in touch →
          </Link>
        </div>
      </div>
    </div>
  );
}
