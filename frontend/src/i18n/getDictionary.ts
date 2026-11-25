import { Locale } from '@/types/api';
import { km, Dictionary } from './dictionaries/km';
import { en } from './dictionaries/en';

export function getDictionary(locale: Locale): Dictionary {
  return locale === 'en' ? en : km;
}
