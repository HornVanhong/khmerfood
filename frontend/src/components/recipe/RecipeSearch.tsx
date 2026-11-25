'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Locale } from '@/types/api';
import { getDictionary } from '@/i18n/getDictionary';
import { Search, X } from 'lucide-react';

interface RecipeSearchProps {
  locale: Locale;
  initialQuery?: string;
  onSearch?: (query: string) => void;
  className?: string;
  large?: boolean;
}

export function RecipeSearch({
  locale,
  initialQuery = '',
  onSearch,
  className = '',
  large = false,
}: RecipeSearchProps) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();
  const dict = getDictionary(locale);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    } else {
      const q = query.trim();
      if (q) {
        router.push(`/${locale}/recipes?q=${encodeURIComponent(q)}`);
      } else {
        router.push(`/${locale}/recipes`);
      }
    }
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) {
      onSearch('');
    } else {
      router.push(`/${locale}/recipes`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative w-full ${className}`}>
      <div className="relative flex items-center">
        <Search
          className={`absolute left-4 text-khmer-charcoal-muted pointer-events-none ${
            large ? 'w-6 h-6' : 'w-4 h-4'
          }`}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={dict.common.searchPlaceholder}
          className={`w-full rounded-2xl bg-white border border-gray-200 text-khmer-charcoal placeholder-khmer-charcoal-muted focus:outline-none focus:ring-2 focus:ring-khmer-green focus:border-transparent transition-all shadow-sm font-khmer ${
            large
              ? 'py-4 pl-14 pr-28 text-base sm:text-lg'
              : 'py-2.5 pl-11 pr-24 text-sm'
          }`}
        />
        <div className="absolute right-2 flex items-center space-x-1">
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="submit"
            className={`rounded-xl bg-khmer-green text-white font-semibold hover:bg-khmer-green-dark transition-colors shadow-sm font-khmer ${
              large ? 'px-5 py-2.5 text-sm' : 'px-3.5 py-1.5 text-xs'
            }`}
          >
            {dict.common.searchButton}
          </button>
        </div>
      </div>
    </form>
  );
}
