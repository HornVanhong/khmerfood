'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Locale } from '@/types/api';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleSwitch = (targetLocale: Locale) => {
    if (targetLocale === currentLocale) return;

    let newPath = `/${targetLocale}`;
    if (pathname) {
      // Replace leading /[currentLocale] with /[targetLocale]
      const segments = pathname.split('/').filter(Boolean);
      if (segments.length > 0 && (segments[0] === 'km' || segments[0] === 'en')) {
        segments[0] = targetLocale;
        newPath = '/' + segments.join('/');
      } else {
        newPath = `/${targetLocale}${pathname}`;
      }
    }

    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-1.5 bg-khmer-green-muted/60 p-1 rounded-full border border-khmer-green/10 text-xs font-medium">
      <Globe className="w-3.5 h-3.5 text-khmer-green ml-1.5" />
      <button
        type="button"
        onClick={() => handleSwitch('km')}
        className={`px-2.5 py-1 rounded-full transition-all duration-150 ${
          currentLocale === 'km'
            ? 'bg-khmer-green text-white font-bold shadow-sm'
            : 'text-khmer-charcoal hover:text-khmer-green'
        }`}
        aria-label="Khmer Language"
      >
        ខ្មែរ
      </button>
      <button
        type="button"
        onClick={() => handleSwitch('en')}
        className={`px-2.5 py-1 rounded-full transition-all duration-150 ${
          currentLocale === 'en'
            ? 'bg-khmer-green text-white font-bold shadow-sm'
            : 'text-khmer-charcoal hover:text-khmer-green'
        }`}
        aria-label="English Language"
      >
        EN
      </button>
    </div>
  );
}
