import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RecipeSummary } from '@/types/recipe';
import { Locale } from '@/types/api';
import { getDictionary } from '@/i18n/getDictionary';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { Clock, Users } from 'lucide-react';
import { formatTime } from '@/lib/utils';

interface RecipeCardProps {
  recipe: RecipeSummary;
  locale: Locale;
}

export function RecipeCard({ recipe, locale }: RecipeCardProps) {
  const dict = getDictionary(locale);
  const totalMinutes = (recipe.preparationMinutes || 0) + (recipe.cookingMinutes || 0);

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Main Image */}
        <Link href={`/${locale}/recipes/${recipe.slug}`} className="block relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
          <Image
            src={recipe.imageUrl || 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80'}
            alt={recipe.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {recipe.category && (
              <span className="bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold text-khmer-green font-khmer shadow-sm">
                {recipe.category.name}
              </span>
            )}
          </div>
          <div className="absolute top-3 right-3">
            <DifficultyBadge difficulty={recipe.difficulty} locale={locale} />
          </div>
        </Link>

        {/* Content */}
        <div className="p-5">
          <Link href={`/${locale}/recipes/${recipe.slug}`} className="block group-hover:text-khmer-green transition-colors">
            <h3 className="font-bold text-lg text-khmer-charcoal leading-snug line-clamp-1 font-khmer">
              {recipe.name}
            </h3>
          </Link>
          <p className="mt-2 text-xs text-khmer-charcoal-muted line-clamp-2 leading-relaxed font-khmer">
            {recipe.description}
          </p>
        </div>
      </div>

      {/* Meta Footer */}
      <div className="px-5 py-3.5 bg-gray-50/70 border-t border-gray-100 flex items-center justify-between text-xs text-khmer-charcoal-light">
        <div className="flex items-center space-x-1.5">
          <Clock className="w-4 h-4 text-khmer-green" />
          <span>{formatTime(totalMinutes, dict.common.minutes)}</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <Users className="w-4 h-4 text-khmer-gold-dark" />
          <span>{recipe.servings} {dict.common.servings}</span>
        </div>
      </div>
    </article>
  );
}
