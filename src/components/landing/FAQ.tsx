/**
 * SECTION: FAQ
 * ASSIGNED DEVELOPER: PERSON 6
 * OWNERSHIP SCOPE:
 * - Frequently Asked Questions section
 * - Interactive accordion expand/collapse functionality
 * - Question, answer, and optional categorization
 * - Enterprise security, multi-tenancy, and architecture answers
 *
 * RULES:
 * - Modify ONLY this file or companion files inside your personal scope (FAQ.tsx, CTASection.tsx, Footer.tsx).
 * - Do NOT modify App.tsx or files assigned to other developers.
 */

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqItems } from '../../data/landingData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 px-6 max-w-4xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-mono uppercase font-bold tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
          Frequently Asked Questions
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Everything You Need to Know
        </h2>
        <p className="text-base text-slate-600 max-w-lg mx-auto">
          Common architectural and operational questions regarding One Enterprise Cloud deployment and security.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqItems.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all shadow-2xs"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0" />
                  <span className="font-extrabold text-sm sm:text-base text-slate-900">
                    {item.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-indigo-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
