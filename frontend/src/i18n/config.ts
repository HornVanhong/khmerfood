import { Locale } from '@/types/api';

export const defaultLocale: Locale = 'km';
export const locales: Locale[] = ['km', 'en'];

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
