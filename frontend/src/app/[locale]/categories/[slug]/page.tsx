import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Locale } from '@/types/api';
import { getDictionary } from '@/i18n/getDictionary';
import { getCategoryBySlug } from '@/services/categoryService';
import { getRecipesByCategory } from '@/services/recipeService';
import { RecipeGrid } from '@/components/recipe/RecipeGrid';
import { ChevronRight, ArrowLeft } from 'lucide-react';

interface CategoryPageProps {
  params: {
    locale: Locale;
    slug: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { locale, slug } = params;
  const category = await getCategoryBySlug(slug, locale);

  if (!category) {
    return {
      title: 'Category Not Found — KhmerFood',
    };
  }

  return {
    title: `${category.name} Recipes — KhmerFood`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, slug } = params;
  const dict = getDictionary(locale);

  const [category, recipesData] = await Promise.all([
    getCategoryBySlug(slug, locale),
    getRecipesByCategory(slug, 0, 50, locale),
  ]);

  if (!category) {
    notFound();
  }

  const { recipes } = recipesData;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-xs sm:text-sm text-khmer-charcoal-muted font-khmer">
        <Link href={`/${locale}`} className="hover:text-khmer-green transition-colors">
          {dict.nav.home}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href={`/${locale}/recipes`} className="hover:text-khmer-green transition-colors">
          {dict.nav.recipes}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-khmer-charcoal font-medium">{category.name}</span>
      </nav>

      {/* Category Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-khmer-green to-khmer-green-dark p-8 sm:p-12 text-white shadow-md">
        {category.imageUrl && (
          <div className="absolute inset-0 opacity-20">
            <Image
              src={category.imageUrl}
              alt={category.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="relative z-10 max-w-2xl space-y-3">
          <span className="bg-white/20 backdrop-blur-sm px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-khmer">
            {dict.common.popularCategories}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-khmer">
            {category.name}
          </h1>
          <p className="text-base sm:text-lg text-khmer-green-soft font-khmer leading-relaxed">
            {category.description}
          </p>
          <div className="pt-2 text-xs text-white/80 font-semibold font-khmer">
            {recipes.length} {dict.common.recipeCount}
          </div>
        </div>
      </div>

      {/* Recipe Grid */}
      <section className="space-y-6">
        <RecipeGrid recipes={recipes} locale={locale} />
      </section>

      {/* Back button */}
      <div>
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
