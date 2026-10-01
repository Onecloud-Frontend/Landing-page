/**
 * SECTION: Call To Action (CTA)
 * ASSIGNED DEVELOPER: PERSON 6
 * OWNERSHIP SCOPE:
 * - High-impact pre-footer CTA section
 * - Compelling enterprise headline and value proposition
 * - Quick-action portal routing (Sign In, Register Organization)
 * - Gradient background and visual sparkle accent
 *
 * RULES:
 * - Modify ONLY this file or companion files inside your personal scope (FAQ.tsx, CTASection.tsx, Footer.tsx).
 * - Do NOT modify App.tsx or files assigned to other developers.
 */

import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { ctaData } from '../../data/landingData';

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-indigo-50/30 to-indigo-100/40 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Visual Icon Badge */}
        <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mx-auto shadow-md">
          <Sparkles className="w-7 h-7" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          {ctaData.title}
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {ctaData.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={ctaData.primaryButtonHref}
            className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-extrabold shadow-sm hover:shadow-md transition-all flex items-center gap-2"
          >
            {ctaData.primaryButtonText} <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={ctaData.secondaryButtonHref}
            className="px-8 py-3.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold transition-all"
          >
            {ctaData.secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
