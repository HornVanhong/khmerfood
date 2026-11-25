import React from 'react';
import Link from 'next/link';
import { Locale } from '@/types/api';
import { getDictionary } from '@/i18n/getDictionary';
import { Utensils } from 'lucide-react';

interface EmptyStateProps {
  locale: Locale;
  title?: string;
  description?: string;
  actionHref?: string;
  actionText?: string;
}

export function EmptyState({
  locale,
  title,
  description,
  actionHref,
  actionText,
}: EmptyStateProps) {
  const dict = getDictionary(locale);

  return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-white rounded-2xl border border-gray-100 shadow-sm my-6">
      <div className="w-16 h-16 rounded-full bg-khmer-green-muted flex items-center justify-center mb-4 text-khmer-green">
        <Utensils className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-khmer-charcoal mb-2 font-khmer">
        {title || dict.common.noRecipesFound}
      </h3>
      <p className="text-khmer-charcoal-light max-w-md mb-6 text-sm">
        {description || dict.common.tryDifferentSearch}
      </p>
      {actionHref && (
        <Link
          href={actionHref}
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-khmer-green text-white font-medium hover:bg-khmer-green-dark transition-colors shadow-sm text-sm"
        >
          {actionText || dict.common.backToHome}
        </Link>
      )}
    </div>
  );
}
