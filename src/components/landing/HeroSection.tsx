/**
 * SECTION: Hero Section
 * ASSIGNED DEVELOPER: PERSON 1
 * OWNERSHIP SCOPE:
 * - Eyebrow badge
 * - Main hero headline & accented text
 * - Value proposition subtitle
 * - Primary & secondary CTA buttons (Sign In, Register)
 * - Trust badges & key enterprise signals
 *
 * RULES:
 * - Modify ONLY this file or companion files inside your personal scope.
 * - Do NOT modify App.tsx or files assigned to other developers.
 */

import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { heroData } from '../../data/landingData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 pb-28 px-6 bg-gradient-to-b from-slate-50/80 via-white to-white overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>{heroData.eyebrow}</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
          {heroData.title}{' '}
          <span className="text-indigo-600">{heroData.highlightedTitle}</span>
        </h1>

        {/* Supporting Proposition */}
        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
          {heroData.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href={heroData.primaryCta.href}
            className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-extrabold shadow-sm hover:shadow-md transition-all flex items-center gap-2"
          >
            {heroData.primaryCta.label} <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={heroData.secondaryCta.href}
            className="px-8 py-3.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold transition-all"
          >
            {heroData.secondaryCta.label}
          </a>
        </div>

        {/* Supporting Trust Indicators */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
          {heroData.trustPoints.map((point, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Background Glow Accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-100/40 blur-3xl -z-0 pointer-events-none rounded-full"
        aria-hidden="true"
      />
    </section>
  );
};

export default HeroSection;
