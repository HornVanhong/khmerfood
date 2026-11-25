import React from 'react';
import Link from 'next/link';
import { Locale } from '@/types/api';
import { getDictionary } from '@/i18n/getDictionary';
import { getCategories } from '@/services/categoryService';
import { getFeaturedRecipes, getRecipes } from '@/services/recipeService';
import { RecipeSearch } from '@/components/recipe/RecipeSearch';
import { RecipeGrid } from '@/components/recipe/RecipeGrid';
import { CategoryCard } from '@/components/category/CategoryCard';
import { Sparkles, ArrowRight, BookOpen, Utensils } from 'lucide-react';

interface HomePageProps {
  params: {
    locale: Locale;
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = params;
  const dict = getDictionary(locale);

  // Parallel data fetching
  const [categories, featuredRecipes, latestRecipesData] = await Promise.all([
    getCategories(locale),
    getFeaturedRecipes(locale),
    getRecipes(0, 6, locale),
  ]);

  const latestRecipes = latestRecipesData.recipes;

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-khmer-green-muted/50 via-khmer-cream to-khmer-cream pt-12 pb-20 sm:pt-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-khmer-green/15 px-4 py-1.5 rounded-full text-xs font-bold text-khmer-green font-khmer shadow-sm">
            <Sparkles className="w-4 h-4 text-khmer-gold" />
            <span>{dict.common.cookingGuide}</span>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-khmer-charcoal tracking-tight font-khmer leading-tight">
              {locale === 'en' ? (
                <>
                  Discover the Soul of{' '}
                  <span className="text-khmer-green underline decoration-khmer-gold decoration-4">
                    Khmer Cooking
                  </span>
                </>
              ) : (
                <>
                  ស្វែងយល់ពីរសជាតិ និងវិធីធ្វើ{' '}
                  <span className="text-khmer-green underline decoration-khmer-gold decoration-4">
                    ម្ហូបខ្មែរប្រពៃណី
                  </span>
                </>
              )}
            </h1>
            <p className="text-base sm:text-xl text-khmer-charcoal-light font-khmer leading-relaxed">
              {dict.common.tagline}
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto pt-2">
            <RecipeSearch locale={locale} large />
          </div>

          {/* Quick Category Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 max-w-2xl mx-auto">
            <span className="text-xs text-khmer-charcoal-muted font-bold font-khmer mr-1">
              {locale === 'en' ? 'Popular:' : 'ពេញនិយម:'}
            </span>
            {categories.slice(0, 4).map((cat) => (
              <Link
                key={cat.id || cat.slug}
                href={`/${locale}/categories/${cat.slug}`}
                className="bg-white/80 hover:bg-white text-xs font-semibold text-khmer-charcoal px-3 py-1.5 rounded-full border border-gray-200/80 hover:border-khmer-green transition-all font-khmer shadow-2xs"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      {featuredRecipes.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200/80 pb-4">
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-khmer-gold-dark font-khmer mb-1">
                <Sparkles className="w-4 h-4 text-khmer-gold" />
                <span>{dict.common.featuredRecipes}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-khmer-charcoal font-khmer">
                {locale === 'en' ? 'Signature Cambodian Dishes' : 'មុខម្ហូបខ្មែរល្បីៗប្រចាំប្រទេស'}
              </h2>
            </div>
            <Link
              href={`/${locale}/recipes`}
              className="inline-flex items-center space-x-1 text-sm font-bold text-khmer-green hover:text-khmer-green-dark transition-colors font-khmer"
            >
              <span>{dict.common.viewAll}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <RecipeGrid recipes={featuredRecipes.slice(0, 6)} locale={locale} />
        </section>
      )}

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200/80 pb-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-khmer-green font-khmer mb-1">
              <Utensils className="w-4 h-4" />
              <span>{dict.common.popularCategories}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-khmer-charcoal font-khmer">
              {locale === 'en' ? 'Browse by Food Category' : 'រុករកតាមប្រភេទមុខម្ហូប'}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id || cat.slug} category={cat} locale={locale} />
          ))}
        </div>
      </section>

      {/* Latest Recipes Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200/80 pb-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-khmer-charcoal-muted font-khmer mb-1">
              <BookOpen className="w-4 h-4" />
              <span>{dict.common.latestRecipes}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-khmer-charcoal font-khmer">
              {locale === 'en' ? 'Recently Added Recipes' : 'មុខម្ហូបថ្មីៗទើបបញ្ចូល'}
            </h2>
          </div>
          <Link
            href={`/${locale}/recipes`}
            className="inline-flex items-center space-x-1 text-sm font-bold text-khmer-green hover:text-khmer-green-dark transition-colors font-khmer"
          >
            <span>{dict.common.viewAll}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <RecipeGrid recipes={latestRecipes} locale={locale} />
      </section>

      {/* Cultural Heritage Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-khmer-green-dark via-khmer-green to-khmer-green-light rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-lg">
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="bg-white/20 backdrop-blur-sm px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase font-khmer">
              {locale === 'en' ? 'Culinary Heritage' : 'កេរដំណែលវប្បធម៌ខ្មែរ'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-khmer leading-tight">
              {locale === 'en'
                ? 'Cook Authentic Cambodian Dishes at Home'
                : 'រៀនធ្វើម្ហូបខ្មែរពិតៗដោយខ្លួនឯងនៅផ្ទះ'}
            </h2>
            <p className="text-sm sm:text-base text-khmer-green-soft font-khmer leading-relaxed">
              {dict.common.aboutDescription}
            </p>
            <div className="pt-2">
              <Link
                href={`/${locale}/recipes`}
                className="inline-flex items-center space-x-2 bg-khmer-gold hover:bg-khmer-gold-light text-khmer-charcoal font-bold px-6 py-3 rounded-xl transition-all shadow-md font-khmer text-sm"
              >
                <span>{dict.common.exploreRecipes}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
