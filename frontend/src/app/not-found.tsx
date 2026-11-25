import React from 'react';
import Link from 'next/link';
import { defaultLocale } from '@/i18n/config';
import { Utensils, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-khmer-cream p-4">
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-khmer-green-muted flex items-center justify-center mx-auto text-khmer-green">
          <Utensils className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-black text-khmer-charcoal font-khmer">
            404 — រកមិនឃើញទំព័រ
          </h1>
          <p className="text-sm text-khmer-charcoal-muted font-khmer">
            Page Not Found. The recipe or page you are looking for may have been moved or does not exist.
          </p>
        </div>
        <div>
          <Link
            href={`/${defaultLocale}`}
            className="inline-flex items-center space-x-2 bg-khmer-green text-white font-bold px-6 py-2.5 rounded-xl hover:bg-khmer-green-dark transition-colors text-sm font-khmer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ត្រឡប់ទៅទំព័រដើម (Homepage)</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
