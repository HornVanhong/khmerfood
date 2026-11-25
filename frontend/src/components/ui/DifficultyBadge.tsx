import React from 'react';
import { Difficulty } from '@/types/recipe';
import { Locale } from '@/types/api';
import { getDictionary } from '@/i18n/getDictionary';
import { cn } from '@/lib/utils';

interface DifficultyBadgeProps {
  difficulty: Difficulty;
  locale: Locale;
  className?: string;
}

export function DifficultyBadge({ difficulty, locale, className }: DifficultyBadgeProps) {
  const dict = getDictionary(locale);

  const config = {
    EASY: {
      label: dict.common.easy,
      className: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    MEDIUM: {
      label: dict.common.medium,
      className: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    HARD: {
      label: dict.common.hard,
      className: 'bg-rose-50 text-rose-700 border-rose-200',
    },
  }[difficulty] || {
    label: difficulty,
    className: 'bg-gray-50 text-gray-700 border-gray-200',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
