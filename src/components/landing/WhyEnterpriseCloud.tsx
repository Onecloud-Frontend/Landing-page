import React, { useState } from "react";

import {
  Boxes,
  BrainCircuit,
  Globe2,
  Layers3,
  LockKeyhole,
  PlugZap,
} from "lucide-react";

interface EnterpriseBenefit {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const enterpriseBenefits: EnterpriseBenefit[] = [
  {
    id: 1,
    title: "Truly Unified Platform",
    description:
      "One system for HR, Finance, Payroll, Procurement and Operations. No silos, no rekeying, every module shares a single data layer.",
    icon: Boxes,
  },
  {
    id: 2,
    title: "Faster Deployment in Weeks",
    description:
      "Go live faster than traditional ERP. Pre-built templates, zero code configuration and guided onboarding.",
    icon: Layers3,
  },
  {
    id: 3,
    title: "Enterprise-Grade Security",
    description:
      "SOC 2 Type II and GDPR compliant. Role-based access, audit trails and encrypted data at rest and in transit.",
    icon: LockKeyhole,
  },
  {
    id: 4,
    title: "Real-Time Intelligence",
    description:
      "AI-powered dashboards surface insights the moment they matter — workforce costs, cash flow, procurement risks and more.",
    icon: BrainCircuit,
  },
  {
    id: 5,
    title: "Multi-Entity Ready",
    description:
      "Multi-currency, multi-language and multi-entity support out of the box. Operate across borders without extra setup.",
    icon: Globe2,
  },
  {
    id: 6,
    title: "Integration Ecosystem",
    description:
      "Built-in connectors to Salesforce, SAP, banking APIs and government systems, plus an API for custom integrations.",
    icon: PlugZap,
  },
];

export const WhyEnterpriseCloud: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#17204a] py-20 sm:py-24 lg:py-28"
    >
      {/* Background atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.06] blur-[120px]" />

        <div className="absolute left-[15%] top-[30%] h-40 w-40 rounded-full bg-blue-500/[0.05] blur-[80px]" />

        <div className="absolute bottom-[20%] right-[15%] h-40 w-40 rounded-full bg-violet-500/[0.05] blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Why One Enterprise Cloud
          </h2>

          <p className="mt-3 text-sm font-medium text-slate-300 sm:text-base">
            Everything Your Enterprise Needs, Connected in One Platform
          </p>
        </div>

        {/* ========================================================= */}
        {/* Desktop overlapping cards */}
        {/* ========================================================= */}

        <div
          className="mx-auto hidden max-w-[1200px] lg:block"
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="grid grid-cols-3 gap-y-8">
            {enterpriseBenefits.map((benefit, index) => {
              const Icon = benefit.icon;

              const column = index % 3;

              const isActive = activeCard === benefit.id;

              const hasActive = activeCard !== null;

              const isInactive = hasActive && !isActive;

              return (
                <div
                  key={benefit.id}
                  className={`
                    relative
                    h-[255px]
                    w-[350px]

                    ${column === 0 ? "ml-[110px] z-[3]" : ""}
                    ${column === 1 ? "-ml-[0px] z-[2]" : ""}
                    ${column === 2 ? "-ml-[110px] z-[1]" : ""}

                    transition-all
                    duration-300
                    ease-out

                    ${isActive ? "z-50" : ""}
                  `}
                >
                  <article
                    tabIndex={0}
                    onMouseEnter={() => setActiveCard(benefit.id)}
                    onFocus={() => setActiveCard(benefit.id)}
                    onBlur={() => setActiveCard(null)}
                    className={`
                      group
                      relative
                      h-full
                      w-full
                      cursor-pointer
                      overflow-hidden
                      rounded-[34px]
                      border
                      border-slate-300/20
                      bg-gradient-to-br
                      from-white/[0.13]
                      via-white/[0.075]
                      to-white/[0.035]
                      p-7
                      shadow-[0_10px_35px_rgba(0,0,0,0.10)]
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      ease-out

                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-blue-400
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-[#17204a]

                      ${
                        isActive
                          ? `
                            z-50
                            -translate-y-2
                            scale-[1.045]
                            border-blue-400/60
                            bg-white/[0.15]
                            shadow-[0_18px_55px_rgba(0,0,0,0.28)]
                          `
                          : ""
                      }

                      ${
                        isInactive
                          ? `
                            scale-[0.97]
                            opacity-[0.30]
                            blur-[2.5px]
                          `
                          : ""
                      }
                    `}
                  >
                    {/* Asymmetric edge highlight */}
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-[34px]
                        border
                        border-white/[0.07]
                      "
                    />

                    {/* Soft internal glow */}
                    <div
                      aria-hidden="true"
                      className={`
                        pointer-events-none
                        absolute
                        -left-10
                        top-5
                        h-32
                        w-32
                        rounded-full
                        bg-blue-500/10
                        blur-3xl
                        transition-opacity
                        duration-300
                        ${isActive ? "opacity-100" : "opacity-50"}
                      `}
                    />

                    {/* Icon */}
                    <div
                      className={`
                        relative
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-[10px]
                        border
                        border-blue-400/20
                        bg-blue-500/10
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "scale-110 border-blue-400/40 bg-blue-500/20"
                            : ""
                        }
                      `}
                    >
                      <Icon
                        className="h-5 w-5 text-blue-400"
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        relative
                        mt-6
                        text-[19px]
                        font-semibold
                        italic
                        tracking-tight
                        text-white
                      "
                    >
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        relative
                        mt-5
                        max-w-[300px]
                        text-[13px]
                        font-normal
                        leading-[1.65]
                        text-slate-300
                      "
                    >
                      {benefit.description}
                    </p>

                    {/* Active bottom highlight */}
                    <div
                      className={`
                        absolute
                        bottom-0
                        left-8
                        right-8
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-blue-400/70
                        to-transparent
                        transition-opacity
                        duration-300

                        ${isActive ? "opacity-100" : "opacity-0"}
                      `}
                    />
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* Tablet / Mobile cards */}
        {/* ========================================================= */}

        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:hidden"
          onMouseLeave={() => setActiveCard(null)}
        >
          {enterpriseBenefits.map((benefit) => {
            const Icon = benefit.icon;

            const isActive = activeCard === benefit.id;

            const hasActive = activeCard !== null;

            const isInactive = hasActive && !isActive;

            return (
              <article
                key={benefit.id}
                tabIndex={0}
                onMouseEnter={() => setActiveCard(benefit.id)}
                onFocus={() => setActiveCard(benefit.id)}
                onBlur={() => setActiveCard(null)}
                className={`
                  relative
                  min-h-[235px]
                  cursor-pointer
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-slate-300/20
                  bg-gradient-to-br
                  from-white/[0.13]
                  via-white/[0.075]
                  to-white/[0.035]
                  p-6
                  backdrop-blur-xl
                  transition-all
                  duration-300

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-400
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#17204a]

                  ${
                    isActive
                      ? "-translate-y-1 border-blue-400/60 bg-white/[0.15] shadow-[0_15px_45px_rgba(0,0,0,0.25)]"
                      : ""
                  }

                  ${isInactive ? "scale-[0.98] opacity-30 blur-[2px]" : ""}
                `}
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-[10px]
                    border
                    border-blue-400/20
                    bg-blue-500/10
                  "
                >
                  <Icon className="h-5 w-5 text-blue-400" strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-[18px] font-semibold italic tracking-tight text-white">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-[13px] leading-[1.65] text-slate-300">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyEnterpriseCloud;
