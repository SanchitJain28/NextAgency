'use client';

import { useState, useEffect } from 'react';

type FontSize = 'small' | 'medium' | 'large';

export function FontSizeControl() {
  const [fontSize, setFontSize] = useState<FontSize>('medium');

  useEffect(() => {
    const saved = localStorage.getItem('blog-font-size') as FontSize;
    if (saved) {
      setFontSize(saved);
      applyFontSize(saved);
    }
  }, []);

  const applyFontSize = (size: FontSize) => {
    const root = document.documentElement;
    root.setAttribute('data-font-size', size);
  };

  const handleSizeChange = (size: FontSize) => {
    setFontSize(size);
    localStorage.setItem('blog-font-size', size);
    applyFontSize(size);
  };

  return (
    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2">
      <span className="text-[12px] text-[#6B6B6B] dark:text-gray-400 font-medium px-2">Text size:</span>
      <button
        onClick={() => handleSizeChange('small')}
        className={`px-3 py-1 rounded text-[12px] font-medium transition-colors ${
          fontSize === 'small'
            ? 'bg-[#292929] dark:bg-white text-white dark:text-[#292929]'
            : 'text-[#6B6B6B] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
      >
        A
      </button>
      <button
        onClick={() => handleSizeChange('medium')}
        className={`px-3 py-1 rounded text-[14px] font-medium transition-colors ${
          fontSize === 'medium'
            ? 'bg-[#292929] dark:bg-white text-white dark:text-[#292929]'
            : 'text-[#6B6B6B] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
      >
        A
      </button>
      <button
        onClick={() => handleSizeChange('large')}
        className={`px-3 py-1 rounded text-[16px] font-medium transition-colors ${
          fontSize === 'large'
            ? 'bg-[#292929] dark:bg-white text-white dark:text-[#292929]'
            : 'text-[#6B6B6B] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
      >
        A
      </button>
    </div>
  );
}
