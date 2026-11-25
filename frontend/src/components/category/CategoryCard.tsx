import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@/types/category';
import { Locale } from '@/types/api';
import { getDictionary } from '@/i18n/getDictionary';

interface CategoryCardProps {
  category: Category;
  locale: Locale;
}

export function CategoryCard({ category, locale }: CategoryCardProps) {
  const dict = getDictionary(locale);

  return (
    <Link
      href={`/${locale}/categories/${category.slug}`}
      className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
        {category.imageUrl ? (
          <Image
            src={category.imageUrl}
            alt={category.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-khmer-green-muted flex items-center justify-center text-khmer-green font-bold">
            {category.name}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <h3 className="font-bold text-lg font-khmer drop-shadow-sm group-hover:text-khmer-gold transition-colors">
            {category.name}
          </h3>
          <p className="text-xs text-white/80 mt-0.5">
            {category.recipeCount} {dict.common.recipeCount}
          </p>
        </div>
      </div>
      {category.description && (
        <div className="p-3.5 text-xs text-khmer-charcoal-light line-clamp-2 font-khmer bg-white flex-1">
          {category.description}
        </div>
      )}
    </Link>
  );
}
