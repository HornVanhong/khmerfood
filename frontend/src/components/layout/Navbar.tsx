'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale } from '@/types/api';
import { getDictionary } from '@/i18n/getDictionary';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X, CookingPot, UtensilsCrossed } from 'lucide-react';

interface NavbarProps {
  locale: Locale;
}

export function Navbar({ locale }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const dict = getDictionary(locale);

  const navLinks = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/recipes`, label: dict.nav.recipes },
    { href: `/${locale}/about`, label: dict.nav.about },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center space-x-3 group transition-transform active:scale-95"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-khmer-green to-khmer-green-dark flex items-center justify-center text-khmer-gold shadow-md shadow-khmer-green/10">
              <CookingPot className="w-6 h-6 transform group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-khmer-green leading-none">
                Khmer<span className="text-khmer-gold">Food</span>
              </span>
              <span className="text-[11px] text-khmer-charcoal-muted tracking-wide mt-1 font-khmer">
                ម្ហូបខ្មែរប្រពៃណី
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-150 relative py-1 font-khmer ${
                  isActive(link.href)
                    ? 'text-khmer-green'
                    : 'text-khmer-charcoal-light hover:text-khmer-green'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-khmer-gold rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right actions: Language switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher currentLocale={locale} />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <LanguageSwitcher currentLocale={locale} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-khmer-charcoal hover:text-khmer-green hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-base font-semibold font-khmer ${
                isActive(link.href)
                  ? 'bg-khmer-green-muted text-khmer-green'
                  : 'text-khmer-charcoal hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
