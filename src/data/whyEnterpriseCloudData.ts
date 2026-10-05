import type { ElementType } from "react";

import {
  Boxes,
  BrainCircuit,
  Globe2,
  Layers3,
  LockKeyhole,
  PlugZap,
} from "lucide-react";

export interface EnterpriseBenefit {
  id: number;
  title: string;
  description: string;
  icon: ElementType;
}

export const enterpriseBenefits: EnterpriseBenefit[] = [
  {
    id: 1,
    title: "Truly Unified Platform",
    description:
      "One system for HR, Finance, Payroll, Procurement and Operations. No silos, no rekeying, every module shares a single data layer.",
    icon: Boxes,
  },
  {
    id: 2,
    title: "Deployment in Weeks",
    description:
      "Go live faster than traditional ERP. Pre built templates, zero code configuration and guided onboarding.",
    icon: Layers3,
  },
  {
    id: 3,
    title: "Enterprise Grade Security",
    description:
      "SOC 2 Type II, and GDPR compliant. Role based access, audit trails and encrypted data at rest and in transit.",
    icon: LockKeyhole,
  },
  {
    id: 4,
    title: "Real Time Intelligence",
    description:
      "AI powered dashboards surface insights the moment they matter workforce costs, cash flow, procurement risks and more.",
    icon: BrainCircuit,
  },
  {
    id: 5,
    title: "Global & Multi Entity Ready",
    description:
      "Multi currency, multi language and multi entity support out of the box. Operate across borders without extra setup.",
    icon: Globe2,
  },
  {
    id: 6,
    title: "Integration Ecosystem",
    description:
      "Pre built connectors to Salesforce, SAP, banking APIs and government API for custom integrations.",
    icon: PlugZap,
  },
];
