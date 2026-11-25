import React from 'react';
import Link from 'next/link';
import { Category } from '@/types/category';
import { Locale } from '@/types/api';
import { getDictionary } from '@/i18n/getDictionary';

interface RecipeFiltersProps {
  categories: Category[];
  selectedCategory?: string;
  locale: Locale;
  searchQuery?: string;
}

export function RecipeFilters({
  categories,
  selectedCategory,
  locale,
  searchQuery,
}: RecipeFiltersProps) {
  const dict = getDictionary(locale);

  const buildHref = (catSlug?: string) => {
    const params = new URLSearchParams();
    if (catSlug) params.set('category', catSlug);
    if (searchQuery) params.set('q', searchQuery);
    const qs = params.toString();
    return `/${locale}/recipes${qs ? `?${qs}` : ''}`;
  };

  return (
    <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
      <Link
        href={buildHref()}
        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 font-khmer ${
          !selectedCategory
            ? 'bg-khmer-green text-white shadow-sm'
            : 'bg-white text-khmer-charcoal border border-gray-200 hover:border-khmer-green/40 hover:bg-khmer-green-muted/30'
        }`}
      >
        {dict.common.allCategories}
      </Link>
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat.slug;
        return (
          <Link
            key={cat.id || cat.slug}
            href={buildHref(cat.slug)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 font-khmer ${
              isSelected
                ? 'bg-khmer-green text-white shadow-sm'
                : 'bg-white text-khmer-charcoal border border-gray-200 hover:border-khmer-green/40 hover:bg-khmer-green-muted/30'
            }`}
          >
            {cat.name}
          </Link>
        );
      })}
    </div>
  );
}
