import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Locale } from '@/types/api';
import { getDictionary } from '@/i18n/getDictionary';
import { getRecipeBySlug, getRecipesByCategory } from '@/services/recipeService';
import { RecipeHeader } from '@/components/recipe/RecipeHeader';
import { IngredientList } from '@/components/recipe/IngredientList';
import { CookingSteps } from '@/components/recipe/CookingSteps';
import { RecipeCard } from '@/components/recipe/RecipeCard';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface RecipeDetailPageProps {
  params: {
    locale: Locale;
    slug: string;
  };
}

export async function generateMetadata({ params }: RecipeDetailPageProps): Promise<Metadata> {
  const { locale, slug } = params;
  const recipe = await getRecipeBySlug(slug, locale);

  if (!recipe) {
    return {
      title: 'Recipe Not Found — KhmerFood',
    };
  }

  return {
    title: `${recipe.name} — KhmerFood`,
    description: recipe.description,
    openGraph: {
      title: `${recipe.name} — Authentic Cambodian Recipe`,
      description: recipe.description,
      images: [
        {
          url: recipe.imageUrl,
          width: 1200,
          height: 630,
          alt: recipe.name,
        },
      ],
    },
  };
}

export default async function RecipeDetailPage({ params }: RecipeDetailPageProps) {
  const { locale, slug } = params;
  const dict = getDictionary(locale);

  const recipe = await getRecipeBySlug(slug, locale);

  if (!recipe) {
    notFound();
  }

  // Related recipes from same category
  const relatedData = recipe.category?.slug
    ? await getRecipesByCategory(recipe.category.slug, 0, 4, locale)
    : { recipes: [] };

  const relatedRecipes = relatedData.recipes.filter((r) => r.slug !== recipe.slug).slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      {/* Recipe Header */}
      <RecipeHeader recipe={recipe} locale={locale} />

      {/* Main Content Layout: Ingredients + Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 items-start">
        {/* Ingredients sidebar / column */}
        <div className="lg:col-span-1 lg:sticky lg:top-28">
          <IngredientList ingredients={recipe.ingredients} locale={locale} />
        </div>

        {/* Cooking Steps main column */}
        <div className="lg:col-span-2">
          <CookingSteps steps={recipe.steps} locale={locale} />
        </div>
      </div>

      {/* Related Recipes */}
      {relatedRecipes.length > 0 && (
        <section className="pt-12 border-t border-gray-200/80 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-khmer-charcoal font-khmer">
              {locale === 'en' ? 'More Similar Dishes' : 'មុខម្ហូបស្រដៀងគ្នានេះ'}
            </h2>
            <Link
              href={`/${locale}/categories/${recipe.category.slug}`}
              className="text-xs sm:text-sm font-semibold text-khmer-green hover:underline font-khmer"
            >
              {dict.common.viewAll}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedRecipes.map((rel) => (
              <RecipeCard key={rel.id || rel.slug} recipe={rel} locale={locale} />
            ))}
          </div>
        </section>
      )}

      {/* Back button */}
      <div className="pt-6">
        <Link
          href={`/${locale}/recipes`}
          className="inline-flex items-center space-x-2 text-sm font-bold text-khmer-green hover:text-khmer-green-dark transition-colors font-khmer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{dict.common.allRecipes}</span>
        </Link>
      </div>
    </div>
  );
}
