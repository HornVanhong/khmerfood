import React from 'react';
import Image from 'next/image';
import { CookingStep } from '@/types/recipe';
import { Locale } from '@/types/api';
import { getDictionary } from '@/i18n/getDictionary';
import { CheckCircle2 } from 'lucide-react';

interface CookingStepsProps {
  steps: CookingStep[];
  locale: Locale;
}

export function CookingSteps({ steps, locale }: CookingStepsProps) {
  const dict = getDictionary(locale);

  if (!steps || steps.length === 0) {
    return null;
  }

  const sortedSteps = [...steps].sort((a, b) => a.stepNumber - b.stepNumber);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-8">
      <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
        <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-khmer-gold-dark">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-khmer-charcoal font-khmer">
          {dict.common.instructions}
        </h2>
        <span className="text-xs bg-amber-50 text-amber-800 px-2.5 py-0.5 rounded-full font-bold ml-auto">
          {steps.length} {locale === 'en' ? 'Steps' : 'ជំហាន'}
        </span>
      </div>

      <div className="space-y-8">
        {sortedSteps.map((step) => (
          <div
            key={step.stepNumber}
            className="flex flex-col md:flex-row gap-6 p-4 sm:p-5 rounded-2xl bg-khmer-cream/40 border border-gray-100 hover:border-khmer-green/30 transition-colors"
          >
            {/* Step Number Circle & Text */}
            <div className="flex-1 space-y-3">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-khmer-green text-white font-black text-sm flex items-center justify-center shadow-sm">
                  {step.stepNumber}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-khmer-green font-khmer">
                  {dict.common.step} {step.stepNumber}
                </span>
              </div>
              <p className="text-base text-khmer-charcoal leading-relaxed font-khmer pl-11">
                {step.instruction}
              </p>
            </div>

            {/* Optional Step Image */}
            {step.imageUrl && (
              <div className="relative w-full md:w-56 aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 border border-gray-200 flex-shrink-0">
                <Image
                  src={step.imageUrl}
                  alt={`${dict.common.step} ${step.stepNumber}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 224px"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
