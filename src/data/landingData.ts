import type {
  NavItem,
  HeroContent,
  ValuePillar,
  RolePreview,
  FeatureModule,
  HowItWorksStep,
  ClientTestimonial,
  FAQItem,
  CTAContent,
  FooterLinkSection,
  HeroFloatingBadge,
} from '../types/landing.types';

export const navItems: NavItem[] = [
  { label: 'Platform', href: '#platform' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Modules', href: '#domains' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Clients', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export const heroData: HeroContent = {
  eyebrow: 'ONE ENTERPRISE CLOUD PLATFORM',
  title: 'One Platform. Every',
  highlightedTitle: 'Business Function.',
  description:
    "Bring your organization's people, processes, operations, and business domains together in one unified, secure, enterprise workspace.",
  primaryCta: {
    label: 'Sign In to Console',
    href: '/login',
  },
  secondaryCta: {
    label: 'Register Organization',
    href: '/register',
  },
  trustPoints: [
    'Secure Enterprise Access',
    'Organization-Aware Boundaries',
    'Role-Based Operational Experience',
  ],
};

export const heroFloatingBadges: HeroFloatingBadge[] = [
  { id: 'badge-workflow', iconName: 'Workflow', label: 'Workflow', xPercent: 13, yPercent: 24, variant: 'filled' },
  { id: 'badge-hrms', iconName: 'Users', label: 'HRMS', xPercent: 87, yPercent: 24, variant: 'filled' },
  { id: 'badge-ai', iconName: 'Bot', label: 'AI', xPercent: 12, yPercent: 42, variant: 'filled' },
  { id: 'badge-crm', iconName: 'Shield', label: 'CRM', xPercent: 88, yPercent: 42, variant: 'filled' },
  { id: 'badge-finance', iconName: 'BarChart3', label: 'Finance', xPercent: 13, yPercent: 65, variant: 'filled' },
  { id: 'badge-erp', iconName: 'Boxes', label: 'ERP', xPercent: 85, yPercent: 65, variant: 'filled' },
];

export const valuePillars: ValuePillar[] = [
  {
    id: 'connected-platform',
    iconName: 'Globe',
    title: 'One Connected Platform',
    description:
      'Centralized enterprise experience eliminating fragmented logins, disparate SaaS tools, and data reconciliation headaches.',
  },
  {
    id: 'organization-aware',
    iconName: 'Building2',
    title: 'Organization-Aware',
    description:
      'Organizations operate within cryptographically separated tenant boundaries with dedicated units, departments, and branches.',
  },
  {
    id: 'role-based',
    iconName: 'Users',
    title: 'Role-Based Experience',
    description:
      'Every user interacts only with the workflows, metrics, and permissions relevant to their operational duties and authority.',
  },
  {
    id: 'integrated-domains',
    iconName: 'Layers',
    title: 'Integrated Domains',
    description:
      'HRMS, CRM, Finance, Procurement, and Warehouse communicate natively without brittle point-to-point connectors.',
  },
];

export const rolePreviews: RolePreview[] = [
  {
    id: 'super-admin',
    label: 'Super Administrator',
    scope: 'GLOBAL',
    scopeLevel: 'global',
    tagline: 'Global platform authority & multi-tenant operations',
    description:
      'Oversees cloud infrastructure, tenant provisioning, cross-organization security policies, and global system health.',
    kpis: [
      { label: 'Provisioned Tenants', val: '5 Active' },
      { label: 'Total Enterprise Users', val: '18,450' },
      { label: 'Cloud Uptime', val: '99.99%' },
    ],
    viewSummary:
      'Cross-tenant oversight, WORM audit trails, global feature toggles, licensing quotas.',
    operationalResponsibilities: [
      'Cloud platform governance',
      'Multi-tenant lifecycle provisioning',
      'Global runtime configuration',
      'Enterprise license quotas',
      'Tamper-evident WORM audit ledger',
    ],
  },
  {
    id: 'org-admin',
    label: 'Organization Administrator',
    scope: 'ORGANIZATION / TENANT',
    scopeLevel: 'tenant',
    tagline: 'Organization-level administration within assigned tenant',
    description:
      'Manages company structure, branches, departments, user assignments, and tenant configuration for the enterprise.',
    kpis: [
      { label: 'Tenant Headcount', val: '1,240 Users' },
      { label: 'Business Units', val: '3 Units' },
      { label: 'Active Departments', val: '6 Depts' },
    ],
    viewSummary:
      'Organization boundary controls, department user bindings, tenant audit logs.',
    operationalResponsibilities: [
      'Company and business unit setup',
      'Department & branch configuration',
      'Tenant user management & role bindings',
      'Organization security references',
      'Tenant activity & compliance reports',
    ],
  },
  {
    id: 'hr-manager',
    label: 'HR Manager',
    scope: 'DOMAIN OPERATIONAL',
    scopeLevel: 'domain',
    tagline: 'HRMS business-domain operational owner',
    description:
      'Operates day-to-day HR workflows: employee directory, attendance tracking, leave requests, and payroll processing.',
    kpis: [
      { label: 'Department Workforce', val: '412 Staff' },
      { label: 'Leave Pending', val: '14 Requests' },
      { label: 'Payroll Status', val: 'Ready for Review' },
    ],
    viewSummary:
      'HRMS operational console, employee lifecycle, compensation and benefits.',
    operationalResponsibilities: [
      'Workforce directory management',
      'Shift planning and automated attendance',
      'Multi-level leave approval chains',
      'Payroll wage calculation and review',
      'Talent acquisition and performance tracking',
    ],
  },
  {
    id: 'sales-manager',
    label: 'Sales Manager',
    scope: 'DOMAIN OPERATIONAL',
    scopeLevel: 'domain',
    tagline: 'CRM business-domain operational owner',
    description:
      'Executes commercial operations: pipeline deals, lead ingestion, quotations, customer communications, and revenue quotas.',
    kpis: [
      { label: 'Active Pipeline', val: '$2.84M' },
      { label: 'Qualified Leads', val: '24 Deals' },
      { label: 'Win Rate', val: '68.4%' },
    ],
    viewSummary:
      'CRM pipeline, customer account contracts, discount authorizations, quotes.',
    operationalResponsibilities: [
      'End-to-end deal pipeline visualization',
      'Customer contact and account history',
      'Automated sales quotation generation',
      'Commission and quota tracking',
      'Customer support portal oversight',
    ],
  },
  {
    id: 'finance-manager',
    label: 'Finance Manager',
    scope: 'DOMAIN OPERATIONAL',
    scopeLevel: 'domain',
    tagline: 'Finance & Accounting operational owner',
    description:
      'Governs fiscal transactions: accounts receivable/payable, GL reconciliation, cost center allocations, and invoice approvals.',
    kpis: [
      { label: 'Net Receivables', val: '$4.18M' },
      { label: 'Pending Payables', val: '$1.42M' },
      { label: 'GL Reconciliation', val: '99.4% Balanced' },
    ],
    viewSummary:
      'General ledger, fiscal compliance, cost center disbursements, cash flow.',
    operationalResponsibilities: [
      'Multi-currency General Ledger oversight',
      'AP/AR matching and automated invoices',
      'Bank reconciliation and cash flow forecasting',
      'Fiscal compliance and tax audit trail',
      'Departmental expense approvals',
    ],
  },
  {
    id: 'procurement-manager',
    label: 'Procurement Manager',
    scope: 'DOMAIN OPERATIONAL',
    scopeLevel: 'domain',
    tagline: 'Sourcing & Purchasing operational owner',
    description:
      'Manages supplier catalogs, RFQs, purchase requisitions, PO disbursements, and vendor delivery SLA evaluations.',
    kpis: [
      { label: 'Active Requisitions', val: '14 Orders' },
      { label: 'Vetted Suppliers', val: '28 Vendors' },
      { label: 'SLA Fulfillment', val: '98.2%' },
    ],
    viewSummary:
      'Purchase order workflows, vendor scorecards, goods receipt matching.',
    operationalResponsibilities: [
      'Supplier onboarding and compliance audits',
      'Purchase requisition to PO processing',
      'Three-way match (PO, receipt, invoice)',
      'Vendor SLA scorecards and pricing terms',
      'Spend analysis across business units',
    ],
  },
  {
    id: 'warehouse-manager',
    label: 'Warehouse Manager',
    scope: 'DOMAIN OPERATIONAL',
    scopeLevel: 'domain',
    tagline: 'Inventory & Logistics operational owner',
    description:
      'Operates physical warehouse stock: bin storage capacities, inventory cycle counts, stock movements, and freight dispatch.',
    kpis: [
      { label: 'Stock Capacity', val: '4,820 SKUs' },
      { label: 'Bin Utilization', val: '91.2%' },
      { label: 'Pending Dispatch', val: '8 Shipments' },
    ],
    viewSummary:
      'Bin allocations, SKU batch movements, storage capacity telemetry.',
    operationalResponsibilities: [
      'Multi-warehouse inventory tracking',
      'Bin, rack, and zone location optimization',
      'Automated reorder point threshold triggers',
      'Cycle count validation and stock audits',
      'Outbound order picking, packing, dispatch',
    ],
  },
];

export const featureModules: FeatureModule[] = [
  {
    id: 'hrms',
    featureNumber: '01',
    category: 'Workforce & People',
    title: 'HRMS',
    tagline: 'Human Capital & Workforce Management',
    description:
      'Streamline the entire employee lifecycle with centralized profiles, automated attendance tracking, flexible leave policies, and compliant multi-tier payroll.',
    operationalRole: 'HR Manager',
    accentColor: 'indigo',
    iconName: 'Users',
    keyCapabilities: [
      'Comprehensive employee directory & org charts',
      'Biometric & geofenced attendance tracking',
      'Customizable leave policy matrices & approvals',
      'One-click multi-tier payroll calculation & payslips',
      'Performance reviews and KPI scoring',
    ],
    imagePlaceholder: '/assets/modules/hrms-preview.png',
    activePath: '/hrms/dashboard',
  },
  {
    id: 'crm',
    featureNumber: '02',
    category: 'Sales & Growth',
    title: 'CRM',
    tagline: 'Customer & Sales Operations',
    description:
      'Accelerate revenue with intuitive deal pipelines, automated quotation workflows, comprehensive account timelines, and customer portal integrations.',
    operationalRole: 'Sales Manager',
    accentColor: 'emerald',
    iconName: 'Briefcase',
    keyCapabilities: [
      'Visual drag-and-drop opportunity kanban stages',
      'Instant quote generation with tax & discount rules',
      'Unified omnichannel customer communication logs',
      'Sales rep territory quotas and leaderboard analytics',
      'Integrated self-service customer portal',
    ],
    imagePlaceholder: '/assets/modules/crm-preview.png',
    activePath: '/crm/dashboard',
  },
  {
    id: 'finance',
    featureNumber: '03',
    category: 'Fiscal Integrity',
    title: 'Finance',
    tagline: 'Finance & Accounting',
    description:
      'Maintain rigorous double-entry accounting with real-time General Ledger entries, automated AP/AR invoice processing, and multi-currency fiscal reporting.',
    operationalRole: 'Finance Manager',
    accentColor: 'purple',
    iconName: 'DollarSign',
    keyCapabilities: [
      'Compliant double-entry General Ledger bookkeeping',
      'Automated Accounts Payable and Accounts Receivable',
      'Bank statement imports and algorithmic reconciliation',
      'Departmental budget allocation & variance alarms',
      'Real-time P&L, balance sheets, and cash flow reports',
    ],
    imagePlaceholder: '/assets/modules/finance-preview.png',
    activePath: '/finance/dashboard',
  },
  {
    id: 'procurement',
    featureNumber: '04',
    category: 'Supply Chain',
    title: 'Procurement',
    tagline: 'Sourcing & Purchasing',
    description:
      'Optimize purchasing workflows from initial requisition and vendor RFQ to verified purchase order disbursement and supplier SLA scorecards.',
    operationalRole: 'Procurement Manager',
    accentColor: 'sky',
    iconName: 'ShoppingCart',
    keyCapabilities: [
      'Vendor onboarding catalog with SLA benchmarks',
      'Multi-level purchase requisition approval routing',
      'Automated purchase order issuance and dispatch',
      'Three-way matching between PO, receipt, and invoice',
      'Spend category analytics and contract management',
    ],
    imagePlaceholder: '/assets/modules/procurement-preview.png',
    activePath: '/erp/procurement',
  },
  {
    id: 'warehouse',
    featureNumber: '05',
    category: 'Logistics',
    title: 'Warehouse & Inventory',
    tagline: 'Inventory & Logistics Operations',
    description:
      'Gain real-time physical visibility into multi-location inventory, warehouse bin utilization, batch/lot tracking, and fulfillment dispatches.',
    operationalRole: 'Warehouse Manager',
    accentColor: 'amber',
    iconName: 'Boxes',
    keyCapabilities: [
      'Multi-warehouse and bin location hierarchy mapping',
      'Real-time SKU stock level tracking and automated reordering',
      'Lot, batch, and expiration date management',
      'Barcode-assisted pick, pack, and ship workflows',
      'Cycle count audits with discrepancy resolution',
    ],
    imagePlaceholder: '/assets/modules/warehouse-preview.png',
    activePath: '/erp/inventory',
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: '01',
    tier: 'Tier 1 — Platform Root',
    title: 'Platform Administration',
    role: 'Super Administrator',
    desc:
      'Governs global cloud infrastructure, database partitioning, WORM audit ledgers, and license quotas across all enterprise tenants.',
    badgeVariant: 'global',
  },
  {
    step: '02',
    tier: 'Tier 2 — Tenant Boundary',
    title: 'Organizations & Tenants',
    role: 'Tenant Isolation',
    desc:
      'Cryptographically separated enterprise workspaces hosting companies, business units, regional branches, and data boundaries.',
    badgeVariant: 'tenant',
  },
  {
    step: '03',
    tier: 'Tier 3 — Tenant Administration',
    title: 'Organization Administration',
    role: 'Organization Administrator',
    desc:
      'Manages company departments, branches, employee user memberships, and role bindings within the tenant boundary.',
    badgeVariant: 'tenant',
  },
  {
    step: '04',
    tier: 'Tier 4 — Business Domains',
    title: 'Integrated Business Domains',
    role: 'Domain Enclosure',
    desc:
      'Dedicated functional suites (HRMS, CRM, Finance, Procurement, Warehouse) operating concurrently on a unified data layer.',
    badgeVariant: 'domain',
  },
  {
    step: '05',
    tier: 'Tier 5 — Operational Execution',
    title: 'Domain Operational Roles',
    role: 'Domain Managers & Staff',
    desc:
      'Specialized business owners (HR, Sales, Finance, Procurement, Logistics) execute day-to-day operations and workflows.',
    badgeVariant: 'domain',
  },
];

export const clientTestimonials: ClientTestimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    role: 'Chief Technology Officer',
    company: 'Apex Global Logistics',
    avatar: '/assets/testimonials/avatar-1.jpg',
    rating: 5,
    testimonial:
      'Replacing our five disconnected SaaS platforms with One Enterprise Cloud cut our monthly IT integration overhead by 65% and unified all operational data across three global regions.',
    highlightMetric: '65% Reduction in IT Overhead',
  },
  {
    id: 'test-2',
    name: 'Marcus Vance',
    role: 'VP of Finance & Operations',
    company: 'Strata Manufacturing Corp',
    avatar: '/assets/testimonials/avatar-2.jpg',
    rating: 5,
    testimonial:
      'The multi-tenant architecture with strict organization boundaries allowed us to onboard four subsidiaries in under three weeks while maintaining strictcompliance isolation.',
    highlightMetric: '3-Week Multi-Tenant Rollout',
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'Director of Human Resources',
    company: 'Novus Health Systems',
    avatar: '/assets/testimonials/avatar-3.jpg',
    rating: 5,
    testimonial:
      'Our HR and payroll teams went from spending five days on monthly close to completing it within four hours. The automated role-based views ensure complete employee data privacy.',
    highlightMetric: '90% Faster Payroll Close',
  },
];

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does One Enterprise Cloud handle multi-tenant data isolation?',
    answer:
      'Each provisioned organization operates within a cryptographically isolated tenant partition. Data layers, session tokens, audit logs, and configurationflags are partition-aware, preventing cross-organization data leakage while running on high-efficiency shared infrastructure.',
    category: 'Security & Multi-Tenancy',
  },
  {
    id: 'faq-2',
    question: 'Can individual business modules be enabled or disabled per tenant?',
    answer:
      'Yes. The Super Administrator and Organization Administrator can selectively enable, configure, and license individual domain modules (e.g. HRMS, CRM, Finance, Procurement, Warehouse) to match each organization\'s exact subscription tier.',
    category: 'Licensing',
  },
  {
    id: 'faq-3',
    question: 'Do we need third-party middleware to sync HR, CRM, and Finance data?',
    answer:
      'No. All business domains are integrated natively into the One Enterprise Cloud platform layer. Shared entities like employees, vendors, accounts, and ledger codes reference the canonical tenant repository without brittle point-to-point APIs.',
    category: 'Integration',
  },
  {
    id: 'faq-4',
    question: 'How does role-based access control (RBAC) work across domains?',
    answer:
      'The platform implements a unified 3-tier authority model: Global Super Administrators govern platform infrastructure, Organization Administrators manage tenant boundaries and memberships, and Domain Managers operate specific functional workspaces.',
    category: 'Security & Multi-Tenancy',
  },
  {
    id: 'faq-5',
    question: 'What is the deployment model for One Enterprise Cloud?',
    answer:
      'One Enterprise Cloud supports containerized cloud deployment (Docker, Kubernetes) as well as private cloud / on-premises enterprise hosting with zero vendor lock-in.',
    category: 'General',
  },
];

export const ctaData: CTAContent = {
  title: 'Bring Your Enterprise Together.',
  subtitle:
    'Access the One Enterprise Cloud Platform and experience your organization through a connected, modern, and high-performance enterprise workspace.',
  primaryButtonText: 'Sign In to Console',
  primaryButtonHref: '#login',
  secondaryButtonText: 'Register Organization',
  secondaryButtonHref: '#register',
};

export const footerData = {
  brandName: 'One Enterprise Cloud Platform',
  tagline: 'Connected Enterprise Operating System',
  copyright: '© 2026 One Enterprise • Architecture Reference. All rights reserved.',
  linkSections: [
    {
      title: 'Platform',
      links: [
        { label: 'Platform Topology', href: '#platform' },
        { label: 'Why Enterprise Cloud', href: '#why-us' },
        { label: 'Hierarchical Structure', href: '#how-it-works' },
        { label: 'Security & Compliance', href: '#security' },
      ],
    },
    {
      title: 'Business Modules',
      links: [
        { label: 'HRMS Suite', href: '#domains' },
        { label: 'CRM & Pipeline', href: '#domains' },
        { label: 'Finance & Ledger', href: '#domains' },
        { label: 'Procurement', href: '#domains' },
        { label: 'Warehouse & Inventory', href: '#domains' },
      ],
    },
    {
      title: 'Access & Portals',
      links: [
        { label: 'Sign In to Console', href: '#login' },
        { label: 'Register Organization', href: '#register' },
        { label: 'Client Feedback', href: '#testimonials' },
        { label: 'Frequently Asked Questions', href: '#faq' },
      ],
    },
  ] as FooterLinkSection[],
};








