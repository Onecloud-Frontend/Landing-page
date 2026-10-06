import React from 'react';
import { Sparkles, Check } from 'lucide-react';
import workflowIcon from '../../assets/icons/workflow_icon.png';
import aiIcon from '../../assets/icons/ai_icon.png';
import financeIcon from '../../assets/icons/finance_icon.png';
import hrmsIcon from '../../assets/icons/hrms_icon.png';
import crmIcon from '../../assets/icons/crm_icon.png';
import erpIcon from '../../assets/icons/erp_icon.png';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#171C42] px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-14 sm:pb-18 md:pb-20">
      
      {/* Root Vertical Oval Ambient Glow */}
      <div 
        className="absolute top-0 sm:top-2 lg:top-4 left-1/2 -translate-x-1/2 w-[460px] sm:w-[540px] lg:w-[620px] h-[540px] sm:h-[600px] lg:h-[660px] rounded-[50%/60%] bg-[radial-gradient(ellipse_at_top,_rgba(95,135,255,0.48)_0%,_rgba(65,98,225,0.28)_36%,_rgba(28,48,135,0.1)_62%,_transparent_78%)] blur-[55px] sm:blur-[65px] pointer-events-none z-10"
        aria-hidden="true" 
      />

      {/* Background SVG Canvas */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4D6EC8" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#8EA9FF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#4D6EC8" stopOpacity="0.25" />
          </linearGradient>

          {/* Diffused outer glow filter for the particle halo */}
          <filter id="ringHaloGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Exact circular glowing ring node matching the reference image */}
          <g id="perfectGlowingRing">
            <circle
              cx="0"
              cy="0"
              r="6.5"
              fill="none"
              stroke="#507BEB"
              strokeWidth="2.8"
              strokeOpacity="0.75"
              filter="url(#ringHaloGlow)"
            />
            <circle
              cx="0"
              cy="0"
              r="4.8"
              fill="#18244E"
              fillOpacity="0.9"
            />
            <circle
              cx="0"
              cy="0"
              r="4.8"
              fill="none"
              stroke="#9EC2FF"
              strokeWidth="1.6"
            />
          </g>
        </defs>

        {/* 6 Direct Connector Wires */}
        <g fill="none" stroke="url(#connectionGradient)" strokeWidth="1.3">
          {/* Left Cards */}
          <path id="workflowPath" d="M 500 211.5 C 400 70, 290 75, 210 145" />
          <path id="aiPath"       d="M 500 211.5 C 370 162, 260 220, 190 320" />
          <path id="financePath"  d="M 500 211.5 C 370 280, 270 415, 210 540" />

          {/* Right Cards */}
          <path id="hrmsPath"     d="M 500 211.5 C 600 70, 710 75, 790 145" />
          <path id="crmPath"      d="M 500 211.5 C 630 162, 740 220, 810 320" />
          <path id="erpPath"      d="M 500 211.5 C 630 280, 730 415, 790 540" />
        </g>

        {/* Synchronised Hollow Glowing Rings Traveling along each wire */}
        <g>
          <g>
            <animateMotion dur="5s" begin="0s" repeatCount="indefinite">
              <mpath href="#workflowPath" />
            </animateMotion>
            <use href="#perfectGlowingRing" />
          </g>
          <g>
            <animateMotion dur="5s" begin="0s" repeatCount="indefinite">
              <mpath href="#aiPath" />
            </animateMotion>
            <use href="#perfectGlowingRing" />
          </g>
          <g>
            <animateMotion dur="5s" begin="0s" repeatCount="indefinite">
              <mpath href="#financePath" />
            </animateMotion>
            <use href="#perfectGlowingRing" />
          </g>
          <g>
            <animateMotion dur="5s" begin="0s" repeatCount="indefinite">
              <mpath href="#hrmsPath" />
            </animateMotion>
            <use href="#perfectGlowingRing" />
          </g>
          <g>
            <animateMotion dur="5s" begin="0s" repeatCount="indefinite">
              <mpath href="#crmPath" />
            </animateMotion>
            <use href="#perfectGlowingRing" />
          </g>
          <g>
            <animateMotion dur="5s" begin="0s" repeatCount="indefinite">
              <mpath href="#erpPath" />
            </animateMotion>
            <use href="#perfectGlowingRing" />
          </g>
        </g>
      </svg>

      {/* Floating Module Badges - Perfectly Centered Content */}
      <div className="absolute inset-0 pointer-events-none z-20 hidden lg:block">
        {[
          { label: 'Workflow', icon: workflowIcon, side: 'left', top: '14.5%' },
          { label: 'AI', icon: aiIcon, side: 'left', top: '32%' },
          { label: 'Finance', icon: financeIcon, side: 'left', top: '54%' },
          { label: 'HRMS', icon: hrmsIcon, side: 'right', top: '14.5%' },
          { label: 'CRM', icon: crmIcon, side: 'right', top: '32%' },
          { label: 'ERP', icon: erpIcon, side: 'right', top: '54%' },
        ].map((badge) => (
          <div
            key={badge.label}
            className={`absolute -translate-x-1/2 flex h-[44px] xl:h-[46px] w-[116px] xl:w-[122px] items-center justify-center gap-2 rounded-2xl border border-[#4B6EC7]/60 bg-[#243572]/85 px-2.5 py-2 shadow-[0_0_20px_rgba(60,105,235,0.3)] backdrop-blur-md transition-all ${
              badge.side === 'left'
                ? badge.label === 'AI'
                  ? 'left-[16%] xl:left-[19%]'
                  : 'left-[18.5%] xl:left-[21%]'
                : badge.label === 'CRM'
                  ? 'left-[84%] xl:left-[81%]'
                  : 'left-[81.5%] xl:left-[79%]'
            }`}
            style={{ top: badge.top }}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
              <img src={badge.icon} alt="" className="h-4 w-4 object-contain" />
            </span>
            <span className="text-[11.5px] font-medium tracking-wide text-white">
              {badge.label}
            </span>
          </div>
        ))}
      </div>

      {/* Main Copy & Content Container */}
      <div className="relative z-30 mx-auto flex max-w-[760px] flex-col items-center text-center">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#3A56A8]/85 bg-[#1C265A]/90 px-3.5 sm:px-4 py-1.5 text-[9px] sm:text-[10px] font-semibold tracking-[0.14em] sm:tracking-[0.16em] text-[#93AEF8] shadow-[0_0_20px_rgba(65,95,220,0.45)] backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 text-[#93AEF8]" />
          <span>ONE ENTERPRISE CLOUD PLATFORM</span>
        </div>

        {/* Heading */}
        <h1 className="mt-5 sm:mt-6 lg:mt-7 max-w-[640px] text-center text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[56px] font-bold leading-[1.12] sm:leading-[1.08] tracking-[-0.03em] sm:tracking-[-0.035em]">
          <span className="block text-white">One Platform.</span>
          <span className="block">
            <span className="text-white">Every </span>
            <span 
              className="inline-block bg-gradient-to-r from-white via-[#B2C6FF] to-[#7B9BFF] bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Business
            </span>
          </span>
          <span 
            className="block bg-gradient-to-r from-[#7B9BFF] via-[#5C83FF] to-[#486FED] bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Function.
          </span>
        </h1>

        {/* Subtitle Paragraph */}
        <p className="mt-4 sm:mt-5 max-w-[580px] text-[12px] sm:text-[13px] md:text-[13.5px] font-normal leading-[1.7] sm:leading-[1.8] text-white/70 px-2 sm:px-0">
          Bring your business operations together in one connected
          <br className="hidden sm:block" />
          {' '}cloud platform designed to simplify how teams, processes,
          <br className="hidden sm:block" />
          {' '}data and workflows work together.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-6 flex flex-row items-center justify-center gap-2.5 sm:gap-3">
          <a
            href="#get-started"
            className="rounded-full bg-[#587BE8] px-5 sm:px-6 py-2 sm:py-2.5 text-[10px] sm:text-[11px] font-semibold text-white shadow-[0_0_25px_rgba(88,123,232,0.6)] hover:bg-[#6688F0] transition-colors whitespace-nowrap"
          >
            Get Started
          </a>
          <a
            href="#sales"
            className="rounded-full border border-white/80 bg-transparent px-5 sm:px-6 py-2 sm:py-2.5 text-[10px] sm:text-[11px] font-medium text-white hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            Talk to sales
          </a>
        </div>

        {/* Trust Points */}
        <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2">
          {[
            'Enterprise-ready',
            'Secure by design',
            'Built to scale',
          ].map((point) => (
            <div key={point} className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-[#55A56A]" />
              <span className="text-[9px] sm:text-[10px] font-normal text-white/60">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
