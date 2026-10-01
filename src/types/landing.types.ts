/**
 * One Enterprise Cloud - Landing Page Type Definitions
 *
 * SHARED & PROTECTED CONTRACT:
 * All 6 developers must adhere to these unified type definitions.
 * Do not modify these shared types without team consensus.
 */

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  trustPoints: string[];
}

export interface ValuePillar {
  id: string;
  iconName: string;
  title: string;
  description: string;
  badge?: string;
}

export interface RolePreviewKpi {
  label: string;
  val: string;
}

export interface RolePreview {
  id: 'super-admin' | 'org-admin' | 'hr-manager' | 'sales-manager' | 'finance-manager' | 'procurement-manager' | 'warehouse-manager';
  label: string;
  scope: string;
  scopeLevel: 'global' | 'tenant' | 'domain';
  tagline: string;
  description: string;
  kpis: RolePreviewKpi[];
  viewSummary: string;
  operationalResponsibilities: string[];
}

export interface FeatureModule {
  id: string;
  featureNumber: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  operationalRole: string;
  accentColor: string;
  iconName: string;
  keyCapabilities: string[];
  imagePlaceholder: string;
  activePath?: string;
}

export interface HowItWorksStep {
  step: string;
  tier: string;
  title: string;
  role: string;
  desc: string;
  badgeVariant: 'global' | 'tenant' | 'domain';
}

export interface ClientTestimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  testimonial: string;
  highlightMetric?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'General' | 'Security & Multi-Tenancy' | 'Integration' | 'Licensing';
}

export interface CTAContent {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
}

export interface FooterLinkSection {
  title: string;
  links: {
    label: string;
    href: string;
    isExternal?: boolean;
  }[];
}
