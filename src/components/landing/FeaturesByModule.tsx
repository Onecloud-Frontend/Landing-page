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

import hrWorkforceImage from "../../assets/hr-workforce.png";
import financeImage from "../../assets/finance-accounting.png";
import payrollImage from "../../assets/payroll.png";
import procurementImage from "../../assets/procurement.png";
import operationsImage from "../../assets/operations.png";

type Module = {
  number: string;
  category: string;
  title: string;
  tagline: string;
  features: string[];
  image?: string;
  icon: React.ReactNode;
};

const modules: Module[] = [
  {
    number: "01",
    category: "HR & Workforce",
    title: "HR & Workforce",
    tagline: "One Platform for Every HR Workflow",
    icon: <Users className="h-4 w-4" />,
    image: hrWorkforceImage,
    features: [
      "Employee Self Service Portal",
      "Recruitment & ATS",
      "Performance Management",
      "Learning & Development",
      "Leave & Attendance Management",
      "Org Chart & Succession Planning",
    ],
  },
  {
    number: "02",
    category: "Finance & Accounting",
    title: "Finance & Accounting",
    tagline: "Close Faster. Report Smarter.",
    icon: <Wallet className="h-4 w-4" />,
    image: financeImage,
    features: [
      "General Ledger & Sub Ledgers",
      "AP / AR Automation",
      "Multi Currency & Multi Entity",
      "Budget Planning & Forecasting",
      "Financial Consolidation",
      "Regulatory Reporting",
    ],
  },
  {
    number: "03",
    category: "Payroll",
    title: "Payroll",
    tagline: "Error-Free Payroll, Every Cycle",
    icon: <Banknote className="h-4 w-4" />,
    image: payrollImage,
    features: [
      "Multi State & Multi Country Payroll",
      "Statutory Compliance Automation",
      "Payslip & Form 16 Generation",
      "Bank Integration & Direct Deposit",
      "Arrear & Incentive Processing",
      "Full & Final Settlement",
    ],
  },
  {
    number: "04",
    category: "Procurement",
    title: "Procurement",
    tagline: "Source Smarter. Spend Leaner.",
    icon: <ShoppingCart className="h-4 w-4" />,
    image: procurementImage,
    features: [
      "Vendor Onboarding & Evaluation",
      "Purchase Requisition & PO",
      "Contract Management",
      "Three Way Matching",
      "Spend Analytics Dashboard",
      "Vendor Payment Portal",
    ],
  },
  {
    number: "05",
    category: "Operations",
    title: "Operations",
    tagline: "Streamline Every Operational Process",
    icon: <Settings2 className="h-4 w-4" />,
    image: operationsImage,
    features: [
      "Asset & Inventory Management",
      "Facilities & Maintenance",
      "Project & Task Management",
      "Workflow Automation Builder",
      "Field Operations Tracking",
      "Helpdesk & Ticketing",
    ],
  },
];

const FeaturesByModule: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeModule = modules[activeIndex];

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? modules.length - 1 : current - 1,
    );
  };

  const goNext = () => {
    setActiveIndex((current) =>
      current === modules.length - 1 ? 0 : current + 1,
    );
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
        <div className="relative overflow-hidden rounded-[9px] border border-[#30385F] bg-[#202750]">
          <div className="grid min-h-[265px] grid-cols-1 md:grid-cols-[1.08fr_0.92fr]">
            <div className="flex flex-col px-6 py-6 sm:px-7 sm:py-7">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[44px] font-light leading-none tracking-tight text-white">
                  {activeModule.number}
                </span>
              </div>
              <div className="mt-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#3975FF] bg-[#1D2851] px-3 py-1.5 text-[11px] font-semibold text-white">
                  {activeModule.icon}
                  {activeModule.category}
                </span>
              </div>
              <h3 className="mt-3 max-w-[390px] text-[24px] font-bold leading-[1.2] tracking-tight text-white">
                {activeModule.tagline}
              </h3>
              <div className="mt-3 grid max-w-[390px] grid-cols-2 gap-x-5 gap-y-2">
                {activeModule.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-1.5">
                    <span className="mt-[2px] flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-[#263B79]">
                      <Check className="h-2 w-2 text-[#4F83FF]" />
                    </span>
                    <span className="text-[11px] font-medium leading-[1.4] text-[#E2E7F5]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center px-6 py-5 sm:px-7">
              {activeModule.image ? (
                <img
                  src={activeModule.image}
                  alt={`${activeModule.title} module`}
                  className="h-[210px] w-full max-w-[293px] rounded-[8px] border border-[#2771FF] object-cover"
                />
              ) : (
                <div className="flex h-[210px] w-full max-w-[293px] items-center justify-center rounded-[8px] border border-[#2771FF] bg-[#172044]">
                  <div className="text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#222E5C] text-[#6C96FF]">
                      {activeModule.icon}
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
        </div>
        <div className="mt-4 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={goPrevious}
            aria-label="Previous module"
            className="text-white transition-opacity hover:opacity-60"
          >
            <ChevronLeft className="h-4 w-4 stroke-[1.5]" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next module"
            className="text-white transition-opacity hover:opacity-60"
          >
            <ChevronRight className="h-4 w-4 stroke-[1.5]" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default FeaturesByModule;
