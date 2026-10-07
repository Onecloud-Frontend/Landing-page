import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Check } from 'lucide-react';
import { ACTIONS } from '../../data/navData';
import { EYEBROW, SUBTITLE, TRUST_POINTS, BADGES, WIRES, DOMES, GLOWS, BASE_COLOR, ACCENT, CENTER_Y, RING_FADE, RING_DIM } from '../../data/heroData';

const RING_SCALE = 1.6;
/* Radial mask: opacity `floor` inside `from` px of the circles' centre, easing to full at `to` px. */
const radialFade = (floor: number, [from, to]: number[]) => {
  const mask = `radial-gradient(circle at 50% ${CENTER_Y}px, rgba(0,0,0,${floor}) ${from}px, #000 ${to}px)`;
  return { WebkitMaskImage: mask, maskImage: mask };
};
/* Circle fill: fades out at its cut line, or at 55% of its height when it has none. */
const domeFill = (alpha: number, top: number, cut?: number) => {
  const color = (a: number) => `rgba(${ACCENT},${a})`;
  if (!cut) return `linear-gradient(to bottom, ${color(alpha)}, transparent 55%)`;
  const end = cut - top;
  return `linear-gradient(to bottom, ${color(alpha)}, ${color(alpha * 0.6)} ${end - 30}px, transparent ${end + 8}px)`;
};

export const HeroSection: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [ringTransform, setRingTransform] = useState(`scale(${RING_SCALE})`);

  /* The wire canvas is stretched to fill the section; rings get the inverse scale so they stay circular. */
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const update = () => {
      const { width, height } = svg.getBoundingClientRect();
      if (width && height) setRingTransform(`scale(${(RING_SCALE * 1000) / width}, ${(RING_SCALE * 1000) / height})`);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0F1330] px-4 sm:px-6 pt-28 sm:pt-32 md:pt-40 lg:pt-56 pb-14 sm:pb-16 md:pb-20">
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[360px] sm:w-[540px] lg:w-[620px] h-[620px] sm:h-[680px] lg:h-[740px] rounded-[50%/60%] bg-[radial-gradient(ellipse_at_top,_rgba(95,135,255,0.48)_0%,_rgba(65,98,225,0.28)_36%,_rgba(28,48,135,0.1)_62%,_transparent_78%)] blur-[55px] sm:blur-[65px] pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Concentric circles behind the heading; solid ones hide the wires behind them (desktop) */}
      <div className="absolute inset-0 pointer-events-none z-[1] hidden lg:block" aria-hidden="true">
        {DOMES.map(({ top, size, alpha, solid, cut }) => (
          <div
            key={top}
            className="absolute left-1/2 -translate-x-1/2 rounded-full"
            style={{
              top,
              width: size,
              height: size,
              backgroundColor: solid ? BASE_COLOR : 'transparent',
              backgroundImage: domeFill(alpha, top, cut),
            }}
          />
        ))}
      </div>

      {/* Soft feathered glows behind the heading and subtitle (desktop) */}
      {GLOWS.map(({ top, width, height, alpha, blur }) => {
        const c = (k: number) => `rgba(${ACCENT},${(alpha * k).toFixed(3)})`;
        return (
          <div
            key={top}
            className="absolute left-1/2 -translate-x-1/2 rounded-[50%] pointer-events-none z-[1] hidden lg:block"
            style={{
              top,
              width,
              height,
              filter: `blur(${blur}px)`,
              backgroundImage: `radial-gradient(closest-side, ${c(1)} 0%, ${c(0.67)} 33%, ${c(0.3)} 60%, ${c(0.08)} 82%, transparent 100%)`,
            }}
            aria-hidden="true"
          />
        );
      })}      {/* Wire layers (desktop): each wire fades in as it leaves the circles; rings stay visible but dim behind them */}
      {[
        ...WIRES.map(({ id, d, fade }) => ({ key: id, style: radialFade(0, fade), paths: [{ id, d }], rings: false })),
        { key: 'rings', style: radialFade(RING_DIM, RING_FADE), paths: WIRES.map(({ id, d }) => ({ id: `${id}Ring`, d })), rings: true },
      ].map(({ key, style, paths, rings }) => (
        <svg
          key={key}
          ref={rings ? svgRef : undefined}
          style={style}
          className={`absolute inset-x-0 top-20 h-[calc(100%-5rem)] w-full pointer-events-none hidden lg:block ${rings ? 'z-[2]' : 'z-[1]'}`}
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            {rings ? (
              <>
                <filter id="ringGlow" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="3.2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <g id="ring">
                  <circle r="6.5" fill="none" stroke="#2F6FE0" strokeWidth="2.8" strokeOpacity="0.75" filter="url(#ringGlow)" />
                  <circle r="4.8" fill="#18244E" fillOpacity="0.9" />
                  <circle r="4.8" fill="none" stroke="#9EC2FF" strokeWidth="1.6" />
                </g>
              </>
            ) : (
              <linearGradient id={`${key}Gradient`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4D6EC8" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#8EA9FF" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#4D6EC8" stopOpacity="0.25" />
              </linearGradient>
            )}
          </defs>

          <g fill="none" stroke={rings ? 'none' : `url(#${key}Gradient)`} strokeWidth="1.3">
            {paths.map(({ id, d }) => <path key={id} id={id} d={d} />)}
          </g>

          {rings && paths.map(({ id }) => (
            <g key={id}>
              <animateMotion dur="5s" repeatCount="indefinite"><mpath href={`#${id}`} /></animateMotion>
              <use href="#ring" transform={ringTransform} />
            </g>
          ))}
        </svg>
      ))}      {/* Module badges (desktop) */}
      <div className="absolute inset-x-0 bottom-0 top-20 pointer-events-none z-20 hidden lg:block">
        {BADGES.map(({ label, icon, top, pos }) => (
          <div
            key={label}
            style={{ top }}
            className={`absolute -translate-x-1/2 flex h-[44px] xl:h-[46px] w-[116px] xl:w-[122px] items-center justify-center gap-2 rounded-2xl border border-[#2F6FE0]/60 bg-[#243572]/85 shadow-[0_0_20px_rgba(47,111,224,0.3)] backdrop-blur-md ${pos}`}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-white">
              <img src={icon} alt="" className="h-4 w-4 object-contain" />
            </span>
            <span className="text-[11.5px] font-medium tracking-wide text-white">{label}</span>
          </div>
        ))}
      </div>

      {/* Copy */}
      <div className="relative z-30 mx-auto flex max-w-[760px] flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 lg:gap-1.5 lg:mt-[3px] lg:-translate-y-4 rounded-full border border-[#3A56A8]/85 bg-[#1C265A]/90 px-4 lg:px-3 py-1.5 lg:py-1 text-[9px] sm:text-[10px] lg:text-[9px] font-semibold tracking-[0.12em] sm:tracking-[0.16em] lg:tracking-[0.12em] text-[#93AEF8] shadow-[0_0_20px_rgba(47,111,224,0.4)] backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 lg:h-3 lg:w-3 shrink-0" />
          <span>{EYEBROW}</span>
        </div>

        <h1 className="mt-5 sm:mt-6 lg:mt-[31px] max-w-[640px] text-[30px] sm:text-[44px] md:text-[52px] xl:text-[56px] font-bold leading-[1.1] tracking-[-0.03em] text-white">
          <span className="block">One Platform.</span>
          <span className="block">
            Every{' '}
            <span className="bg-gradient-to-r from-white via-[#B2C6FF] to-[#7B9BFF] bg-clip-text text-transparent">Business</span>
          </span>
          <span className="block bg-gradient-to-r from-[#7B9BFF] via-[#5C83FF] to-[#2F6FE0] bg-clip-text text-transparent">Function.</span>
        </h1>

        <p className="mt-4 sm:mt-5 max-w-[580px] text-[13px] sm:text-[14px] lg:text-[13.5px] leading-[1.75] text-white/70">
          {SUBTITLE.map((line, i) => (
            <React.Fragment key={line}>
              {i > 0 && <br className="hidden sm:block" />} {line}
            </React.Fragment>
          ))}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {[...ACTIONS].reverse().map(({ label, href, variant }) => (
            <a
              key={href}
              href={href}
              className={`whitespace-nowrap rounded-full px-6 py-2.5 text-[11px] font-semibold text-white transition-colors ${
                variant === 'primary'
                  ? 'bg-[#2F6FE0] shadow-[0_0_25px_rgba(47,111,224,0.6)] hover:bg-[#4A82E8]'
                  : 'border border-white/80 hover:bg-white/10'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {TRUST_POINTS.map((point) => (
            <div key={point} className="flex items-center gap-1.5 text-[10px] text-white/60">
              <Check className="h-3 w-3 text-[#55A56A]" />
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;