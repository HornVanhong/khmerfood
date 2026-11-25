import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RecipeDetail } from '@/types/recipe';
import { Locale } from '@/types/api';
import { getDictionary } from '@/i18n/getDictionary';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { Clock, Users, ChevronRight, Sparkles } from 'lucide-react';
import { formatTime } from '@/lib/utils';

interface RecipeHeaderProps {
  recipe: RecipeDetail;
  locale: Locale;
}

export function RecipeHeader({ recipe, locale }: RecipeHeaderProps) {
  const dict = getDictionary(locale);
  const totalMinutes = (recipe.preparationMinutes || 0) + (recipe.cookingMinutes || 0);

  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-xs sm:text-sm text-khmer-charcoal-muted font-khmer">
        <Link href={`/${locale}`} className="hover:text-khmer-green transition-colors">
          {dict.nav.home}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href={`/${locale}/recipes`} className="hover:text-khmer-green transition-colors">
          {dict.nav.recipes}
        </Link>
        {recipe.category && (
          <>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href={`/${locale}/categories/${recipe.category.slug}`}
              className="hover:text-khmer-green transition-colors"
            >
              {recipe.category.name}
            </Link>
          </>
        )}
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-khmer-charcoal font-medium truncate max-w-[200px]">
          {recipe.name}
        </span>
      </nav>

      {/* Title & Badge */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          {recipe.category && (
            <Link
              href={`/${locale}/categories/${recipe.category.slug}`}
              className="bg-khmer-green-muted text-khmer-green px-3 py-1 rounded-full text-xs font-bold font-khmer hover:bg-khmer-green hover:text-white transition-colors"
            >
              {recipe.category.name}
            </Link>
          )}
          <DifficultyBadge difficulty={recipe.difficulty} locale={locale} />
          {recipe.featured && (
            <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 px-2.5 py-0.5 rounded-full text-xs font-semibold border border-amber-200">
              <Sparkles className="w-3 h-3 text-khmer-gold" />
              {locale === 'en' ? 'Featured' : 'ម្ហូបពិសេស'}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-khmer-charcoal font-khmer tracking-tight">
          {recipe.name}
        </h1>

        <p className="text-base sm:text-lg text-khmer-charcoal-light leading-relaxed font-khmer max-w-3xl">
          {recipe.description}
        </p>
      </div>

      {/* Meta Stats Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-khmer-green-muted flex items-center justify-center text-khmer-green">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] text-khmer-charcoal-muted uppercase font-bold tracking-wider font-khmer">
              {dict.common.prepTime}
            </div>
            <div className="text-sm font-bold text-khmer-charcoal">
              {formatTime(recipe.preparationMinutes, dict.common.minutes)}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-khmer-green-muted flex items-center justify-center text-khmer-green">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] text-khmer-charcoal-muted uppercase font-bold tracking-wider font-khmer">
              {dict.common.cookTime}
            </div>
            <div className="text-sm font-bold text-khmer-charcoal">
              {formatTime(recipe.cookingMinutes, dict.common.minutes)}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-khmer-gold-dark">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] text-khmer-charcoal-muted uppercase font-bold tracking-wider font-khmer">
              {dict.common.totalTime}
            </div>
            <div className="text-sm font-bold text-khmer-charcoal">
              {formatTime(totalMinutes, dict.common.minutes)}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] text-khmer-charcoal-muted uppercase font-bold tracking-wider font-khmer">
              {dict.common.servings}
            </div>
            <div className="text-sm font-bold text-khmer-charcoal">
              {recipe.servings} {dict.common.servings}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-md border border-gray-100 bg-gray-100">
        <Image
          src={recipe.imageUrl || 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=1200&q=80'}
          alt={recipe.name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1200px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
