import React from 'react';
import Link from 'next/link';
import { Locale } from '@/types/api';
import { getDictionary } from '@/i18n/getDictionary';
import { getCategories } from '@/services/categoryService';
import { getRecipes, getRecipesByCategory, searchRecipes } from '@/services/recipeService';
import { RecipeSearch } from '@/components/recipe/RecipeSearch';
import { RecipeFilters } from '@/components/recipe/RecipeFilters';
import { RecipeGrid } from '@/components/recipe/RecipeGrid';
import { ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';

interface RecipesPageProps {
  params: {
    locale: Locale;
  };
  searchParams: {
    category?: string;
    q?: string;
    page?: string;
  };
}

export default async function RecipesPage({ params, searchParams }: RecipesPageProps) {
  const { locale } = params;
  const dict = getDictionary(locale);

  const selectedCategory = searchParams.category;
  const searchQuery = searchParams.q;
  const currentPage = Math.max(0, parseInt(searchParams.page || '0', 10));
  const pageSize = 12;

  // Parallel data fetching
  const categories = await getCategories(locale);

  let result;
  if (searchQuery) {
    result = await searchRecipes(searchQuery, currentPage, pageSize, locale);
  } else if (selectedCategory) {
    result = await getRecipesByCategory(selectedCategory, currentPage, pageSize, locale);
  } else {
    result = await getRecipes(currentPage, pageSize, locale);
  }

  const { recipes, pagination } = result;
  const currentCategoryObj = categories.find((c) => c.slug === selectedCategory);

  const pageTitle = searchQuery
    ? locale === 'en'
      ? `Search results for "${searchQuery}"`
      : `លទ្ធផលស្វែងរកសម្រាប់ "${searchQuery}"`
    : currentCategoryObj
    ? currentCategoryObj.name
    : dict.common.allRecipes;

  const buildPageHref = (pageIndex: number) => {
    const p = new URLSearchParams();
    if (selectedCategory) p.set('category', selectedCategory);
    if (searchQuery) p.set('q', searchQuery);
    p.set('page', pageIndex.toString());
    return `/${locale}/recipes?${p.toString()}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      {/* Page Heading & Search */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200/80 pb-6">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-black text-khmer-charcoal font-khmer">
              {pageTitle}
            </h1>
            <p className="text-sm text-khmer-charcoal-muted font-khmer">
              {locale === 'en'
                ? `Showing ${pagination.totalElements} authentic Khmer recipes`
                : `បង្ហាញមុខម្ហូបខ្មែរចំនួន ${pagination.totalElements} មុខ`}
            </p>
          </div>
          <div className="w-full md:w-80">
            <RecipeSearch locale={locale} initialQuery={searchQuery} />
          </div>
        </div>

        {/* Category Filters */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-khmer-charcoal-muted font-khmer">
            <SlidersHorizontal className="w-3.5 h-3.5 text-khmer-green" />
            <span>{dict.common.filterByCategory}</span>
          </div>
          <RecipeFilters
            categories={categories}
            selectedCategory={selectedCategory}
            locale={locale}
            searchQuery={searchQuery}
          />
        </div>
      </div>

      {/* Recipe Grid */}
      <RecipeGrid recipes={recipes} locale={locale} />

      {/* Pagination Controls */}
      {pagination.totalPages > 1 && (
        <div className="flex items-center justify-center space-x-4 pt-10 border-t border-gray-200/80 font-khmer text-sm">
          {pagination.page > 0 ? (
            <Link
              href={buildPageHref(pagination.page - 1)}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-white border border-gray-200 text-khmer-charcoal hover:border-khmer-green font-semibold shadow-2xs transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{dict.common.prevPage}</span>
            </Link>
          ) : (
            <span className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 text-gray-400 cursor-not-allowed">
              <ChevronLeft className="w-4 h-4" />
              <span>{dict.common.prevPage}</span>
            </span>
          )}

          <span className="text-xs sm:text-sm text-khmer-charcoal-muted font-medium">
            {dict.common.pageOf
              .replace('{current}', (pagination.page + 1).toString())
              .replace('{total}', pagination.totalPages.toString())}
          </span>

          {pagination.page < pagination.totalPages - 1 ? (
            <Link
              href={buildPageHref(pagination.page + 1)}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-white border border-gray-200 text-khmer-charcoal hover:border-khmer-green font-semibold shadow-2xs transition-colors"
            >
              <span>{dict.common.nextPage}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <span className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 text-gray-400 cursor-not-allowed">
              <span>{dict.common.nextPage}</span>
              <ChevronRight className="w-4 h-4" />
            </span>
          )}
        </div>
      )}
    </div>
  );
}
