import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Locale } from '@/types/api';
import { getDictionary } from '@/i18n/getDictionary';
import { CookingPot, Sparkles, Heart, Award, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  params: {
    locale: Locale;
  };
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = params;
  return {
    title: locale === 'en' ? 'About KhmerFood — Cambodian Culinary Heritage' : 'អំពី KhmerFood — វប្បធម៌ម្ហូបខ្មែរ',
    description: 'Learn about our mission to document and celebrate authentic Cambodian cuisine and traditional Khmer cooking.',
  };
}

export default function AboutPage({ params }: AboutPageProps) {
  const { locale } = params;
  const dict = getDictionary(locale);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Hero */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-khmer-green-muted text-khmer-green px-4 py-1.5 rounded-full text-xs font-bold font-khmer">
          <Sparkles className="w-4 h-4 text-khmer-gold" />
          <span>{dict.common.aboutKhmerFood}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-khmer-charcoal font-khmer tracking-tight">
          {locale === 'en' ? 'Preserving Cambodian Culinary Soul' : 'ថែរក្សា និងផ្សព្វផ្សាយរសជាតិម្ហូបខ្មែរ'}
        </h1>
        <p className="text-base sm:text-lg text-khmer-charcoal-light font-khmer max-w-2xl mx-auto leading-relaxed">
          {dict.common.aboutDescription}
        </p>
      </div>

      {/* Featured visual */}
      <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-md bg-gray-100">
        <Image
          src="https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=1200&q=80"
          alt="Traditional Khmer cuisine"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 896px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white font-khmer">
          <h3 className="text-xl font-bold">
            {locale === 'en' ? 'The Wonders of Cambodian Flavors' : 'ភាពអស្ចារ្យនៃរសជាតិ និងគ្រឿងផ្សំខ្មែរ'}
          </h3>
          <p className="text-xs text-white/80 mt-1">
            {locale === 'en' ? 'Tonle Sap freshwater fish, aromatic kroeung, and Kampot pepper' : 'ត្រីទឹកសាបបឹងទន្លេសាប គ្រឿងបុកស្លឹកគ្រៃ និងម្រេចកំពត'}
          </p>
        </div>
      </div>

      {/* Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <CookingPot className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg text-khmer-charcoal font-khmer">
            {locale === 'en' ? 'Authentic Recipes' : 'រូបមន្តពិតប្រាកដ'}
          </h3>
          <p className="text-sm text-khmer-charcoal-light font-khmer leading-relaxed">
            {locale === 'en'
              ? 'Every dish respects Cambodian home cooking traditions, balancing sweet, sour, salty, and aromatic depth.'
              : 'រាល់មុខម្ហូបត្រូវបានចងក្រងយ៉ាងផ្ចិតផ្ចង់ ដោយរក្សានូវរសជាតិដើម ជូរ ផ្អែម ប្រៃ និងក្លិនឈ្ងុយប្រហើរ។'}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg text-khmer-charcoal font-khmer">
            {locale === 'en' ? 'Clear Step-by-Step' : 'ជំហានច្បាស់លាស់'}
          </h3>
          <p className="text-sm text-khmer-charcoal-light font-khmer leading-relaxed">
            {locale === 'en'
              ? 'Beginners and experienced cooks alike can easily follow ordered photographic cooking instructions.'
              : 'ងាយស្រួលយល់ និងអនុវត្តតាម ទាំងអ្នកទើបរៀនធ្វើម្ហូប និងចុងភៅជំនាញ តាមរយៈរូបថត និងការពន្យល់លម្អិត។'}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center">
            <Heart className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg text-khmer-charcoal font-khmer">
            {locale === 'en' ? 'Bilingual Heritage' : 'ពីរភាសា ខ្មែរ និងអង់គ្លេស'}
          </h3>
          <p className="text-sm text-khmer-charcoal-light font-khmer leading-relaxed">
            {locale === 'en'
              ? 'Full Khmer and English support connects local families and global food enthusiasts to Cambodian cuisine.'
              : 'ការគាំទ្រទាំងភាសាខ្មែរ និងអង់គ្លេស ជួយផ្សារភ្ជាប់ប្រជាជនកម្ពុជា និងមិត្តភក្តិជុំវិញពិភពលោក។'}
          </p>
        </div>
      </div>

      {/* Action CTA */}
      <div className="text-center pt-6">
        <Link
          href={`/${locale}/recipes`}
          className="inline-flex items-center space-x-2 bg-khmer-green hover:bg-khmer-green-dark text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md font-khmer text-sm"
        >
          <span>{dict.common.exploreRecipes}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
