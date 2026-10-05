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

/** Resolves a data-driven iconName string to its Lucide component. */
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
      {/* Radial glow accent behind the headline */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#2F6FE0]/20 blur-3xl -z-0 pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Floating module badges, desktop only, driven entirely by shared data */}
        <div className="hidden lg:block">
          {heroFloatingBadges.map((badge) => {
            const Icon = iconMap[badge.iconName];
            return (
              <div
                key={badge.id}
                className={`absolute ${badge.position} flex items-center gap-2 rounded-xl border border-white/10 bg-[#172B5C]/10 backdrop-blur-sm px-3 py-2 text-xs font-semibold text-white shadow-lg`}
              >
                {Icon && <Icon className="w-4 h-4 text-[#2F6FE0]" />}
                {badge.label && <span>{badge.label}</span>}
              </div>
            );
          })}
        </div>

        <div className="text-center space-y-8">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#172B5C]/10 border border-white/10 text-white/80 text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#2F6FE0]" />
            <span>{heroData.eyebrow}</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            {heroData.title}{' '}
            <span className="text-[#2F6FE0]">{heroData.highlightedTitle}</span>
          </h1>

          {/* Supporting Proposition */}
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed font-normal">
            {heroData.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={heroData.primaryCta.href}
              className="px-8 py-3.5 rounded-full bg-[#2F6FE0] hover:opacity-90 text-white text-sm font-extrabold shadow-sm transition-opacity"
            >
              {heroData.primaryCta.label}
            </a>
            <a
              href={heroData.secondaryCta.href}
              className="px-8 py-3.5 rounded-full border border-white/20 hover:bg-white/5 text-white text-sm font-bold transition-colors"
            >
              {heroData.secondaryCta.label}
            </a>
          </div>

          {/* Supporting Trust Indicators */}
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
