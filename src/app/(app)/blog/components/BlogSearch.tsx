"use client";

import { useRef } from "react";
import { Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface BlogSearchProps {
  query: string;
  onSearch: (query: string) => void;
}

export function BlogSearch({ query, onSearch }: BlogSearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div role="search" aria-label="Blog search" className="relative w-full max-w-lg">
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-neutral-400"
      />
      <Input
        ref={inputRef}
        type="search"
        aria-label="Search articles"
        value={query}
        onChange={(event) => onSearch(event.currentTarget.value)}
        placeholder="Search articles by title, topic, or tag"
        className="h-12 rounded-md border-neutral-600 bg-neutral-900 pr-12 pl-11 text-white placeholder:text-neutral-400 focus-visible:border-white focus-visible:ring-white/35 [&::-webkit-search-cancel-button]:hidden"
      />
      {query && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Clear search"
          className="absolute top-1/2 right-1 -translate-y-1/2 rounded-md text-neutral-300 hover:bg-neutral-800 hover:text-white focus-visible:ring-white/50"
          onClick={() => {
            onSearch("");
            inputRef.current?.focus();
          }}
        >
          <X aria-hidden="true" />
        </Button>
      )}
    </div>
  );
}
