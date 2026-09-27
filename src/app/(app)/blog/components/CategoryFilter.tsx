'use client';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-4 py-2 rounded-full text-[14px] font-medium transition-colors ${
          selectedCategory === null
            ? 'bg-[#292929] dark:bg-white text-white dark:text-[#292929]'
            : 'bg-gray-100 dark:bg-gray-800 text-[#6B6B6B] dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        All Posts
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full text-[14px] font-medium transition-colors ${
            selectedCategory === category
              ? 'bg-[#292929] dark:bg-white text-white dark:text-[#292929]'
              : 'bg-gray-100 dark:bg-gray-800 text-[#6B6B6B] dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
