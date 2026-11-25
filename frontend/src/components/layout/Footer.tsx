import React from 'react';
import Link from 'next/link';
import { Locale } from '@/types/api';
import { getDictionary } from '@/i18n/getDictionary';
import { CookingPot, Heart } from 'lucide-react';

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const dict = getDictionary(locale);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-khmer-green-dark text-white border-t border-khmer-green-light/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-khmer-green flex items-center justify-center text-khmer-gold shadow-inner">
                <CookingPot className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Khmer<span className="text-khmer-gold">Food</span>
              </span>
            </div>
            <p className="text-sm text-khmer-green-soft/80 max-w-md leading-relaxed font-khmer">
              {dict.common.aboutDescription}
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-khmer-gold mb-4 font-khmer">
              {dict.common.exploreRecipes}
            </h4>
            <ul className="space-y-2.5 text-sm text-khmer-green-soft font-khmer">
              <li>
                <Link href={`/${locale}/recipes`} className="hover:text-white transition-colors">
                  {dict.common.allRecipes}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/recipes?category=soups-curries`} className="hover:text-white transition-colors">
                  {locale === 'en' ? 'Soups & Curries' : 'ម្ហូបសម្ល'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/recipes?category=stir-fried`} className="hover:text-white transition-colors">
                  {locale === 'en' ? 'Stir-Fried Dishes' : 'ម្ហូបឆា'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/recipes?category=noodles`} className="hover:text-white transition-colors">
                  {locale === 'en' ? 'Noodles' : 'មី និងគុយទាវ'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-khmer-gold mb-4 font-khmer">
              {dict.common.aboutKhmerFood}
            </h4>
            <ul className="space-y-2.5 text-sm text-khmer-green-soft font-khmer">
              <li>
                <Link href={`/${locale}/about`} className="hover:text-white transition-colors">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <span className="text-khmer-green-soft/60">
                  {locale === 'en' ? 'Authentic Khmer Recipes' : 'រូបមន្តម្ហូបខ្មែរពិតៗ'}
                </span>
              </li>
              <li>
                <span className="text-khmer-green-soft/60">
                  {locale === 'en' ? 'Step-by-step Photos' : 'រូបថត និងជំហានលម្អិត'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-khmer-green/40 flex flex-col sm:flex-row items-center justify-between text-xs text-khmer-green-soft/70">
          <p>© {currentYear} KhmerFood. {dict.common.copyright}</p>
          <p className="mt-2 sm:mt-0 flex items-center space-x-1">
            <span>Preserving Cambodian culinary heritage</span>
            <Heart className="w-3.5 h-3.5 text-khmer-gold inline fill-khmer-gold" />
          </p>
        </div>
      </div>
    </footer>
  );
}
