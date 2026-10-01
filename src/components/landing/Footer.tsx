/**
 * SECTION: Public Footer
 * ASSIGNED DEVELOPER: PERSON 6
 * OWNERSHIP SCOPE:
 * - Enterprise platform public footer
 * - Brand badge, logo, and tagline
 * - Multi-column categorized links (Platform, Business Modules, Access & Portals)
 * - Legal notices and copyright line
 *
 * RULES:
 * - Modify ONLY this file or companion files inside your personal scope (FAQ.tsx, CTASection.tsx, Footer.tsx).
 * - Do NOT modify App.tsx or files assigned to other developers.
 */

import React from 'react';
import { Sparkles } from 'lucide-react';
import { footerData } from '../../data/landingData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-16 px-6 text-xs text-slate-500">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Info Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="font-extrabold text-slate-900 text-sm">
                  {footerData.brandName}
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  {footerData.tagline}
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Unified enterprise operating system connecting cloud governance, multi-tenant boundaries, and functional domain suites into one cohesive platform.
            </p>
          </div>

          {/* Categorized Links Columns */}
          {footerData.linkSections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px] font-mono">
                {section.title}
              </div>
              <ul className="space-y-2">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      className="hover:text-indigo-600 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono">
          <div>{footerData.copyright}</div>
          <div className="flex items-center gap-6">
            <span>Enterprise Multi-Tenant Architecture</span>
            <span>•</span>
            <span>React 19 & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
