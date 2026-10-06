import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#111a4b] px-6 py-10">
      {/* CTA glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1c42bc]/35 blur-[90px]" />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="relative overflow-hidden rounded-[17px] border border-[#31458e] bg-[#17276b] px-6 py-14 text-center shadow-[0_0_40px_rgba(21,45,145,0.2)] sm:px-10">
          {/* Inner gradient */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(32,92,255,0.28),transparent_60%)]" />

          <div className="relative">
            <h2 className="mx-auto max-w-[520px] text-[27px] font-bold leading-[1.12] tracking-[-0.8px] text-white sm:text-[31px]">
              Ready to unify your
              <br />
              enterprise operations?
            </h2>

            <p className="mx-auto mt-4 max-w-[590px] text-[10px] leading-[1.7] text-[#9da9d6] sm:text-[11px]">
              Start with the modules you need today. Scale across all 20
              business
              <br className="hidden sm:block" />
              functions as your organization grows.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <a
                href="#login"
                className="group inline-flex items-center gap-2 rounded-full bg-[#2677ff] px-5 py-2.5 text-[9px] font-semibold text-white shadow-[0_6px_22px_rgba(38,119,255,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3482ff]"
              >
                Get Started

                <ArrowRight
                  size={11}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="#register"
                className="inline-flex items-center rounded-full border border-[#7785b7] bg-transparent px-5 py-2.5 text-[9px] font-semibold text-[#d7dcf3] transition-all duration-200 hover:bg-white/5"
              >
                Talk to sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;