"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: { label: string; count: number }[];
  total: number;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({
  categories,
  total,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  const options = [{ label: "", count: total }, ...categories];

  return (
    <div
      role="group"
      aria-label="Filter by category"
      className="-mx-1 flex gap-2 overflow-x-auto px-1 py-1 md:flex-wrap"
    >
      {options.map(({ label, count }) => {
        const isSelected = selectedCategory.toLowerCase() === label.toLowerCase();

        return (
          <Button
            key={label}
            type="button"
            variant="outline"
            aria-pressed={isSelected}
            onClick={() => onSelectCategory(isSelected ? "" : label)}
            className={cn(
              "rounded-md px-3 text-sm font-medium shadow-none focus-visible:border-white focus-visible:ring-white/50",
              isSelected
                ? "border-white bg-white text-neutral-900 hover:bg-neutral-200 hover:text-neutral-900"
                : "border-neutral-700 bg-neutral-900 text-neutral-200 hover:border-neutral-500 hover:bg-neutral-800 hover:text-white",
            )}
          >
            {label || "All articles"} ({count})
          </Button>
        );
      })}
    </div>
  );
}
