/**
 * SECTION: Navbar
 * ASSIGNED DEVELOPER: PERSON 1
 * OWNERSHIP SCOPE:
 * - Public navigation header
 * - Platform branding logo
 * - Navigation anchor links (#platform, #why-us, #domains, #how-it-works, #testimonials, #faq)
 * - Sign In & Register action buttons
 * - Mobile responsive navigation toggle and drawer
 *
 * RULES:
 * - Modify ONLY this file or companion files inside your personal scope.
 * - Do NOT modify App.tsx or files assigned to other developers.
 */

import React, { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import { navItems } from '../../data/landingData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0F1330]/95 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#2F6FE0] flex items-center justify-center text-white shadow-xs group-hover:opacity-90 transition-opacity">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="font-extrabold text-base tracking-tight text-white leading-tight">
              One Enterprise
            </div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-[#2F6FE0] font-bold">
              Cloud Platform
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-white/70">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#login"
            className="px-5 py-2.5 rounded-full border border-white/20 text-xs font-bold text-white hover:bg-white/5 transition-colors"
          >
            Talk to sales
          </a>
          <a
            href="#register"
            className="px-5 py-2.5 rounded-full bg-[#2F6FE0] hover:opacity-90 text-white text-xs font-bold shadow-xs transition-opacity"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-white/80 hover:bg-white/10"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0F1330] px-6 py-5 space-y-4 shadow-lg">
          <nav className="flex flex-col gap-3 text-sm font-semibold text-white/80">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="#login"
              className="w-full text-center py-2.5 rounded-full border border-white/20 text-xs font-bold text-white hover:bg-white/5"
            >
              Talk to sales
            </a>
            <a
              href="#register"
              className="w-full text-center py-2.5 rounded-full bg-[#2F6FE0] text-white text-xs font-bold hover:opacity-90"
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
