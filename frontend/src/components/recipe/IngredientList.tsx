import React from 'react';
import Image from 'next/image';
import { Ingredient } from '@/types/recipe';
import { Locale } from '@/types/api';
import { getDictionary } from '@/i18n/getDictionary';
import { ShoppingBag } from 'lucide-react';

interface IngredientListProps {
  ingredients: Ingredient[];
  locale: Locale;
}

export function IngredientList({ ingredients, locale }: IngredientListProps) {
  const dict = getDictionary(locale);

  if (!ingredients || ingredients.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
      <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
        <div className="w-9 h-9 rounded-xl bg-khmer-green-muted flex items-center justify-center text-khmer-green">
          <ShoppingBag className="w-5 h-5" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-khmer-charcoal font-khmer">
          {dict.common.ingredients}
        </h2>
        <span className="text-xs bg-khmer-green-muted text-khmer-green px-2.5 py-0.5 rounded-full font-bold ml-auto">
          {ingredients.length}
        </span>
      </div>

      <ul className="divide-y divide-gray-100">
        {ingredients.map((ing, idx) => (
          <li
            key={idx}
            className="py-3.5 flex items-center justify-between hover:bg-gray-50/60 px-3 rounded-xl transition-colors"
          >
            <div className="flex items-center space-x-3.5">
              {ing.imageUrl ? (
                <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 flex-shrink-0">
                  <Image
                    src={ing.imageUrl}
                    alt={ing.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <span className="w-2.5 h-2.5 rounded-full bg-khmer-gold flex-shrink-0" />
              )}
              <span className="text-sm sm:text-base font-medium text-khmer-charcoal font-khmer">
                {ing.name}
              </span>
            </div>

            {(ing.quantity !== undefined || ing.unit) && (
              <span className="text-sm font-semibold text-khmer-green bg-khmer-green-muted/50 px-3 py-1 rounded-lg">
                {ing.quantity !== undefined ? ing.quantity : ''} {ing.unit || ''}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
