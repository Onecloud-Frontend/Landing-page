import React from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Sparkles,
  CheckCircle2,
  Workflow,
  Users,
  Bot,
  Shield,
  BarChart3,
  Boxes,
} from 'lucide-react';
import { heroData, heroFloatingBadges } from '../../data/landingData';

const iconMap: Record<string, LucideIcon> = {
  Workflow,
  Users,
  Bot,
  Shield,
  BarChart3,
  Boxes,
};

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 pb-28 px-6 bg-[#0F1330] overflow-hidden">
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#2F6FE0]/20 blur-3xl -z-0 pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="hidden lg:block absolute inset-x-0 top-0 h-[480px] pointer-events-none" aria-hidden="true">
        {heroFloatingBadges.map((badge) => {
          const Icon = iconMap[badge.iconName];
          const isLight = badge.variant === 'light';
          return (
            <div
              key={badge.id}
              className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-bold shadow-lg ${
                isLight
                  ? 'border-slate-200 bg-white text-[#0F1330]'
                  : 'border-white/25 bg-[#2F6FE0] text-white'
              }`}
              style={{ left: `${badge.xPercent}%`, top: `${badge.yPercent}%` }}
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-md ${
                  isLight ? 'bg-[#EEF2FF]' : 'bg-white'
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5 text-[#2F6FE0]" />}
              </span>
              {badge.label && <span>{badge.label}</span>}
            </div>
          );
        })}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2F6FE0]/15 border border-[#2F6FE0]/30 text-[#8EA7DD] text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#8EA7DD]" />
            <span>{heroData.eyebrow}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            {heroData.title}{' '}
            <span className="text-[#8EA7DD]">{heroData.highlightedTitle}</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed font-normal">
            {heroData.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={heroData.primaryCta.href}
              className="px-8 py-3.5 rounded-full bg-[#2F6FE0] hover:opacity-90 text-white text-sm font-extrabold shadow-sm transition-opacity"
            >
              {heroData.primaryCta.label}
            </a>
            <a
              href={heroData.secondaryCta.href}
              className="px-8 py-3.5 rounded-full border border-white hover:bg-white/10 text-white text-sm font-bold transition-colors"
            >
              {heroData.secondaryCta.label}
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-white/50 font-medium">
            {heroData.trustPoints.map((point, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2F6FE0] shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
