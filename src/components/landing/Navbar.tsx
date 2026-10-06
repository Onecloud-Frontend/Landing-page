/**
 * Site header overlaid on the hero: logo, section links, action buttons
 * and a drawer menu below the desktop breakpoint.
 */

import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import stacklyLogo from '../../assets/stackly-logo.png';
import { NAV_ITEMS, ACTIONS } from '../../data/navData';

const BUTTON = {
  outline: 'border border-white/80 text-white hover:bg-white/10',
  primary: 'bg-[#2F6FE0] text-white shadow-[0_0_25px_rgba(47,111,224,0.7)] hover:bg-[#4A82E8]',
};

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Adds a solid background once the page is scrolled so the links stay readable over page content. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full -mb-16 sm:-mb-20 transition-colors duration-300 ${scrolled || open ? 'bg-[#0F1330]/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="flex h-16 sm:h-20 items-center justify-between px-4 sm:px-8 lg:px-10 xl:px-14">
        <a href="#" className="shrink-0">
          <img src={stacklyLogo} alt="Stackly" className="h-7 sm:h-9 lg:h-10 w-auto" />
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 gap-5 xl:gap-8 lg:flex">
          {NAV_ITEMS.map(({ label, href }) => (
            <a key={href} href={href} className="whitespace-nowrap text-[12px] xl:text-[13px] font-medium text-white/80 hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden gap-2 sm:flex lg:gap-3">
            {ACTIONS.map(({ label, href, variant }) => (
              <a key={href} href={href} className={`whitespace-nowrap rounded-full px-5 py-2.5 text-[11px] font-semibold transition-all ${BUTTON[variant]}`}>
                {label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl p-2 text-white/80 hover:bg-white/10 hover:text-white lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-white/10 bg-[#0F1330] px-5 py-4 sm:px-8 lg:hidden">
          <nav className="flex flex-col text-sm font-semibold text-white/85">
            {NAV_ITEMS.map(({ label, href }) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2.5 hover:bg-white/5">
                {label}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2.5 border-t border-white/10 pt-4 sm:hidden">
            {ACTIONS.map(({ label, href, variant }) => (
              <a key={href} href={href} className={`rounded-full py-2.5 text-center text-xs font-semibold ${BUTTON[variant]}`}>
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;