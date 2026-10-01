/**
 * SECTION: Features Benefits by Module
 * ASSIGNED DEVELOPER: PERSON 3
 * OWNERSHIP SCOPE:
 * - Domain modules showcase (HRMS, CRM, Finance, Procurement, Warehouse)
 * - Module navigation state (active module selector / tab switching)
 * - Feature number, category, title, description, operational role
 * - Key domain capabilities checklist
 * - Visual module mockup preview / image placeholder
 *
 * RULES:
 * - Modify ONLY this file or companion files inside your personal scope.
 * - Do NOT modify App.tsx or files assigned to other developers.
 */

import React, { useState } from 'react';
import {
  Users,
  Briefcase,
  DollarSign,
  ShoppingCart,
  Boxes,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { featureModules } from '../../data/landingData';
import type { FeatureModule } from '../../types/landing.types';

export const FeaturesByModule: React.FC = () => {
  const [activeModuleId, setActiveModuleId] = useState<string>(
    featureModules[0].id,
  );

  const activeModule: FeatureModule =
    featureModules.find((m) => m.id === activeModuleId) || featureModules[0];

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5 text-indigo-600" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-emerald-600" />;
      case 'DollarSign':
        return <DollarSign className="w-5 h-5 text-purple-600" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-5 h-5 text-sky-600" />;
      case 'Boxes':
      default:
        return <Boxes className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="domains" className="py-24 px-6 bg-slate-50/70 border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase font-bold tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
            Autonomous Business Domains
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Comprehensive Enterprise Modules
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Each business module is an autonomous domain designed for specialized workflows, running on a unified, partition-isolated core.
          </p>
        </div>

        {/* Module Navigation Tabs (Data-Driven Navigation State) */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs max-w-3xl mx-auto">
          {featureModules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setActiveModuleId(mod.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeModuleId === mod.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span>{mod.featureNumber}</span>
              <span>{mod.title}</span>
            </button>
          ))}
        </div>

        {/* Active Module Detailed Showcase Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Details & Capabilities */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                  Module {activeModule.featureNumber} • {activeModule.category}
                </span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold">
                  Role: {activeModule.operationalRole}
                </span>
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                {activeModule.title}
              </h3>
              <p className="text-xs font-semibold text-slate-500 font-mono">
                {activeModule.tagline}
              </p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {activeModule.description}
            </p>

            {/* Key Capabilities Checklist */}
            <div className="space-y-2.5 pt-2 border-t border-slate-100">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                Key Domain Capabilities:
              </div>
              <div className="space-y-2">
                {activeModule.keyCapabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Link to module console */}
            <div className="pt-4">
              <a
                href="#login"
                className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                Access {activeModule.title} Workspace <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Module UI Preview / Visual Mockup */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 to-indigo-50/40 p-6 flex flex-col justify-between min-h-[300px] shadow-2xs">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                  {activeModule.id}-console.onecloud
                </div>
              </div>

              {/* Mockup Body Content */}
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center mx-auto">
                  {getModuleIcon(activeModule.iconName)}
                </div>
                <div className="font-extrabold text-sm text-slate-900">
                  {activeModule.title} Console
                </div>
                <div className="text-xs text-slate-500 max-w-xs mx-auto">
                  Interactive operational interface configured for the {activeModule.operationalRole}.
                </div>
              </div>

              {/* Status footer inside mockup */}
              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Domain Status</span>
                <span className="text-emerald-600 font-bold">● Active & Connected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesByModule;
