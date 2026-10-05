/**
 * Site navigation header: brand logo, anchor links to each page section,
 * sign-in/register actions, and a mobile drawer menu.
 */

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import stacklyLogo from '../../assets/stackly-logo.png';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#171C42]/90 backdrop-blur-md border-b border-white/[0.06] transition-all">
      <div className="w-full px-8 lg:px-14 h-20 flex items-center justify-between">
        {/* Prominent Stackly Brand Logo */}
        <a href="#" className="flex items-center shrink-0">
          <img 
            src={stacklyLogo} 
            alt="Stackly" 
            className="h-9 lg:h-10 w-auto object-contain transition-transform hover:scale-105" 
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {[
            { label: 'Why One Enterprise', href: '#enterprise' },
            { label: 'Features', href: '#features' },
            { label: 'How it works', href: '#how-it-works' },
            { label: 'Clients', href: '#clients' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[13px] font-medium text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#sales"
            className="px-5 py-2.5 rounded-full border border-white/80 text-[11px] font-medium text-white hover:bg-white/10 transition-colors"
          >
            Talk to sales
          </a>
          <a
            href="#get-started"
            className="rounded-full bg-[#587BE8] px-6 py-2.5 text-[11px] font-semibold text-white shadow-[0_0_25px_rgba(88,123,232,0.85)] [text-shadow:0_0_12px_rgba(255,255,255,0.9)] hover:bg-[#6688F0] hover:shadow-[0_0_30px_rgba(102,136,240,1)] transition-all"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-700 bg-[#171C42] px-6 py-5 space-y-4 shadow-lg">
          <nav className="flex flex-col gap-3 text-sm font-semibold text-white/85">
            {[
              { label: 'Why One Enterprise', href: '#enterprise' },
              { label: 'Features', href: '#features' },
              { label: 'How it works', href: '#how-it-works' },
              { label: 'Clients', href: '#clients' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#7895EA] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="#sales"
              className="w-full text-center py-2.5 rounded-full border border-white/80 text-xs font-medium text-white hover:bg-white/10"
            >
              Talk to sales
            </a>
            <a
              href="#get-started"
              className="w-full text-center py-2.5 rounded-full bg-[#587BE8] text-white text-xs font-semibold shadow-[0_0_25px_rgba(88,123,232,0.85)] [text-shadow:0_0_12px_rgba(255,255,255,0.9)] hover:bg-[#6688F0]"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
