/**
 * SECTION: Features Benefits by Module
 * ASSIGNED DEVELOPER: PERSON 3
 *
 * Matches the Features Benefits by Module reference design.
 *
 * RULES:
 * - Modify ONLY this file or companion files inside your personal scope.
 * - Do NOT modify App.tsx or files assigned to other developers.
 */
import React, { useState } from "react";
import {
  Users,
  Wallet,
  Banknote,
  ShoppingCart,
  Settings2,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import { featureModules } from "../../data/landingData";
import hrWorkforceImage from "../../assets/features/hr-workforce.png";
import financeImage from "../../assets/features/finance-accounting.png";
import payrollImage from "../../assets/features/payroll.png";
import procurementImage from "../../assets/features/procurement.png";
import operationsImage from "../../assets/features/operations.png";
const moduleImages: Record<string, string> = {
  "hr-workforce": hrWorkforceImage,
  "finance-accounting": financeImage,
  payroll: payrollImage,
  procurement: procurementImage,
  operations: operationsImage,
};
const moduleIcons = {
  Users,
  Wallet,
  Banknote,
  ShoppingCart,
  Settings2,
};
const FeaturesByModule: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const activeModule = featureModules[activeIndex];
  const ActiveIcon =
    moduleIcons[activeModule.iconName as keyof typeof moduleIcons] || Settings2;
  const activeImage = moduleImages[activeModule.id];
  const changeModule = (direction: "next" | "previous") => {
    if (isChanging) {
      return;
    }
    setIsChanging(true);
    setIsFadingOut(true);
    window.setTimeout(() => {
      setActiveIndex((current) => {
        if (direction === "next") {
          return current === featureModules.length - 1 ? 0 : current + 1;
        }
        return current === 0 ? featureModules.length - 1 : current - 1;
      });
      setIsFadingOut(false);
      setIsChanging(false);
    }, 200);
  };
  const goPrevious = () => {
    changeModule("previous");
  };
  const goNext = () => {
    changeModule("next");
  };
  return (
    <section
      id="domains"
      className="relative overflow-hidden bg-[#13183A] px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-8"
    >
      <div className="mx-auto max-w-[900px]">
        <div className="mb-5 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-[32px]">
            Features Benefits by Module
          </h2>
          <p className="mt-2 text-[14px] font-bold leading-relaxed text-slate-300">
            A unified platform designed to bring people, processes, data, and
            business functions together.
          </p>
        </div>
        <article
          aria-live="polite"
          className={`relative h-[320px] overflow-hidden rounded-[9px] border border-[#30385F] bg-[#202750] transition-opacity duration-500 ease-in-out ${
            isFadingOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="grid h-full grid-cols-1 md:grid-cols-[1.08fr_0.92fr]">
            <div className="flex h-full flex-col px-6 py-6 sm:px-7 sm:py-7">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[44px] font-light leading-none tracking-tight text-white">
                  {activeModule.featureNumber}
                </span>
              </div>
              <div className="mt-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#3975FF] bg-[#1D2851] px-3 py-1.5 text-[15px] font-bold text-white">
                  <ActiveIcon className="h-4 w-4" aria-hidden="true" />
                  {activeModule.category}
                </span>
              </div>
              <h3 className="mt-3 max-w-[390px] text-[24px] font-bold leading-[1.2] tracking-tight text-white">
                {activeModule.tagline}
              </h3>
              <div className="mt-3 grid max-w-[390px] grid-cols-2 gap-x-5 gap-y-2">
                {activeModule.keyCapabilities.map((feature) => (
                  <div key={feature} className="flex items-start gap-1.5">
                    <span className="mt-[2px] flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-[#263B79]">
                      <Check
                        className="h-2 w-2 text-[#4F83FF]"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="text-[11px] font-medium leading-[1.4] text-[#E2E7F5]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex h-full items-center justify-center px-6 py-5 sm:px-7">
              {activeImage ? (
                <img
                  src={activeImage}
                  alt={`${activeModule.title} module preview`}
                  className="h-[210px] w-full max-w-[293px] rounded-[8px] border border-[#2771FF] object-cover"
                />
              ) : (
                <div className="flex h-[210px] w-full max-w-[293px] items-center justify-center rounded-[8px] border border-[#2771FF] bg-[#172044]">
                  <div className="text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#222E5C] text-[#6C96FF]">
                      <ActiveIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="text-xs font-semibold text-white">
                      {activeModule.title}
                    </p>
                    <p className="mt-1 text-[9px] text-slate-400">
                      Module Preview
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={goPrevious}
            disabled={isChanging}
            aria-label="Previous module"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl text-white transition-all duration-200 ease-in-out hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            <ChevronLeft className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={isChanging}
            aria-label="Next module"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl text-white transition-all duration-200 ease-in-out hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            <ChevronRight className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default FeaturesByModule;
