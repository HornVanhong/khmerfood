import React from 'react';
import { RecipeSummary } from '@/types/recipe';
import { Locale } from '@/types/api';
import { RecipeCard } from './RecipeCard';
import { RecipeCardSkeleton } from '@/components/ui/Skeleton';
import { EmptyState } from '@/components/ui/EmptyState';

interface RecipeGridProps {
  recipes: RecipeSummary[];
  locale: Locale;
  loading?: boolean;
}

export function RecipeGrid({ recipes, locale, loading }: RecipeGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <RecipeCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!recipes || recipes.length === 0) {
    return <EmptyState locale={locale} />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id || recipe.slug} recipe={recipe} locale={locale} />
      ))}
    </div>
  );
}
