/**
 * SECTION: How It Works
 * ASSIGNED DEVELOPER: PERSON 4
 * OWNERSHIP SCOPE:
 * - Hierarchical structure & authoritative stepped stack visualization
 * - 5-tier progression from Cloud Platform Root down to Operational Staff
 * - Step cards with step numbers, tiers, authority scopes, and role descriptions
 * - Responsive layout for desktop vertical progression & mobile stacked cards
 *
 * RULES:
 * - Modify ONLY this file or companion files inside your personal scope.
 * - Do NOT modify App.tsx or files assigned to other developers.
 */

import React from 'react';
import { howItWorksSteps } from '../../data/landingData';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 max-w-5xl mx-auto space-y-16">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-mono uppercase font-bold tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
          Hierarchical Structure
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          How the Platform Fits Together
        </h2>
        <p className="text-base text-slate-600 max-w-xl mx-auto">
          A clear line of authority from global cloud platform governance down to everyday operational business execution.
        </p>
      </div>

      {/* 5-Step Stacked Stepper Visual */}
      <div className="space-y-4 max-w-3xl mx-auto">
        {howItWorksSteps.map((node) => (
          <div
            key={node.step}
            className={`p-6 rounded-2xl border transition-all hover:shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              node.badgeVariant === 'global'
                ? 'border-indigo-300 bg-indigo-50/40'
                : node.badgeVariant === 'tenant'
                ? 'border-slate-300 bg-white'
                : 'border-slate-200 bg-white'
            }`}
          >
            <div className="flex items-start sm:items-center gap-4">
              <div
                className={`w-10 h-10 rounded-xl font-black flex items-center justify-center shrink-0 ${
                  node.badgeVariant === 'global'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-900 text-white'
                }`}
              >
                {node.step}
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-indigo-600 uppercase">
                  {node.tier}
                </div>
                <div className="text-base font-extrabold text-slate-900">
                  {node.title}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
                  {node.desc}
                </p>
              </div>
            </div>

            <div className="text-[11px] font-mono font-semibold text-slate-500 self-start sm:self-center shrink-0 px-3 py-1 bg-slate-100 rounded-lg">
              {node.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
