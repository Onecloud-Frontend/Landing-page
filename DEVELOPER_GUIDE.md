# One Enterprise Cloud — Official Landing Page Developer Guide

> **Official Source Repository**: [https://github.com/Onecloud-Frontend/Landing-page](https://github.com/Onecloud-Frontend/Landing-page)  
> **Target Audience**: 6 Parallel Frontend Developers (PERSON 1 through PERSON 6)  
> **Core Architecture**: React 19 + TypeScript + Vite 8 + Tailwind CSS v4 + Lucide React  

---

## 1. Project Overview

The **Onecloud Landing Page** is a dedicated, high-performance web presentation layer for the **One Enterprise Cloud Platform**. It is engineered as a standalone, domain-isolated project decoupled from the core application suite (`D:\frontend`).

This repository is architected so that **six developers can work concurrently on distinct visual sections without experiencing Git merge conflicts**, while maintaining unified typography, colors, animations, and container geometry.

---

## 2. Quickstart & Local Setup

### 2.1. Cloning the Repository
```bash
git clone https://github.com/Onecloud-Frontend/Landing-page.git
cd Landing-page
```

### 2.2. Installing Dependencies
```bash
npm install
```

### 2.3. Running the Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser. Hot Module Replacement (HMR) is active.

### 2.4. Code Verification Commands
```bash
# Check TypeScript types (Strict mode)
npm run typecheck

# Validate production build bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 3. Repository & Directory Structure

```
onecloud-landing/
├── public/                       # Public static assets
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── components/
│   │   └── landing/              # 🟢 DEVELOPER COMPONENT BOUNDARY
│   │       ├── Navbar.tsx                # PERSON 1
│   │       ├── HeroSection.tsx           # PERSON 1
│   │       ├── WhyEnterpriseCloud.tsx    # PERSON 2
│   │       ├── FeaturesByModule.tsx      # PERSON 3
│   │       ├── HowItWorks.tsx            # PERSON 4
│   │       ├── Testimonials.tsx          # PERSON 5
│   │       ├── FAQ.tsx                   # PERSON 6
│   │       ├── CTASection.tsx            # PERSON 6
│   │       └── Footer.tsx                # PERSON 6
│   │
│   ├── data/
│   │   └── landingData.ts        # 🔒 PROTECTED — Baseline data store
│   │
│   ├── types/
│   │   └── landing.types.ts      # 🔒 PROTECTED — Unified TypeScript contracts
│   │
│   ├── assets/                   # Static component images/mockups
│   │   └── .gitkeep
│   │
│   ├── App.tsx                   # 🔒 PROTECTED — Master composition layer
│   ├── index.css                 # 🔒 PROTECTED — Global Tailwind v4 design tokens
│   └── main.tsx                  # Application mount
│
├── README.md                     # High-level project summary
├── DEVELOPER_GUIDE.md            # THIS COMPREHENSIVE GUIDE
├── package.json                  # Scripts & dependencies
├── vite.config.ts                # Vite & Tailwind v4 bundler configuration
├── tsconfig.json                 # TypeScript project references
├── tsconfig.app.json             # App TypeScript configuration (@/* alias)
└── .gitignore                    # Ignored artifacts (node_modules, dist, .env)
```

---

## 4. Developer Ownership Matrix

Each developer is assigned exclusive ownership of their component file(s). **Work strictly inside your designated file(s)**:

| Developer | Assigned Files | Section | Scope & Core Responsibilities |
| :--- | :--- | :--- | :--- |
| **PERSON 1** | `src/components/landing/Navbar.tsx`<br>`src/components/landing/HeroSection.tsx` | **Navbar + Hero** | • Brand identity logo and platform badges.<br>• Desktop horizontal navigation with anchor links (`#platform`, `#why-us`, `#domains`, `#how-it-works`, `#testimonials`, `#faq`).<br>• Mobile responsive navigation toggle & slide drawer.<br>• "Sign In" and "Register Organization" action links.<br>• Hero eyebrow badge, main title with accent highlight, supporting value proposition, primary CTAs, and enterprise trust indicators. |
| **PERSON 2** | `src/components/landing/WhyEnterpriseCloud.tsx` | **Why One Enterprise Cloud** | • Architectural Topology diagram ("The Connected Enterprise Nervous System") with vertical tier progression.<br>• 4 Enterprise Governance Pillars (One Connected Platform, Organization-Aware, Role-Based Experience, Integrated Domains).<br>• 7 Role Perspectives & interactive role selector tab bar with dynamic KPI metric cards and visible surface boundary telemetry. |
| **PERSON 3** | `src/components/landing/FeaturesByModule.tsx` | **Features Benefits by Module** | • Interactive domain module selector tabs (01 HRMS, 02 CRM, 03 Finance, 04 Procurement, 05 Warehouse).<br>• Feature numbering, category badges, module taglines, and descriptive summaries.<br>• Comprehensive key domain capabilities checklist with emerald checkmarks.<br>• Interactive console window preview card with domain status telemetry. |
| **PERSON 4** | `src/components/landing/HowItWorks.tsx` | **How It Works** | • 5-tier stepped stack architecture (Tier 1 Platform Root, Tier 2 Tenant Boundary, Tier 3 Organization Administration, Tier 4 Business Domains, Tier 5 Operational Execution).<br>• Stepper cards with tier badges, authority scope labels, and operational role descriptions.<br>• Responsive desktop step layout and mobile stacked progression. |
| **PERSON 5** | `src/components/landing/Testimonials.tsx` | **What Our Clients Say** | • 3-column responsive testimonial card grid.<br>• 5-star rating presentation and decorative quote styling.<br>• Customer quote body, enterprise company names, and executive titles.<br>• Quantifiable ROI highlight badges (e.g. "65% Reduction in IT Overhead").<br>• Customer avatar presentation with initials fallback badges. |
| **PERSON 6** | `src/components/landing/FAQ.tsx`<br>`src/components/landing/CTASection.tsx`<br>`src/components/landing/Footer.tsx` | **FAQ + CTA + Footer** | • Interactive accordion FAQ with animated expand/collapse state.<br>• Clear answers for multi-tenancy, domain modularity, data sync, and security.<br>• High-impact pre-footer conversion CTA banner with glowing background accents and action routing.<br>• 5-column categorized footer with brand identity, quick links, copyright, and architecture notices. |

---

## 5. Protected Shared Files (DO NOT MODIFY)

To guarantee that parallel development proceeds with **zero Git conflicts**, the following files are strictly **PROTECTED**:

```text
🔒 src/App.tsx
🔒 src/types/landing.types.ts
🔒 src/data/landingData.ts
🔒 src/index.css
🔒 vite.config.ts
🔒 tsconfig.json / tsconfig.app.json
🔒 package.json
```

### Why App.tsx is Protected:
`src/App.tsx` serves purely as the **composition layer**:
```tsx
<App>
  <Navbar />
  <HeroSection />
  <WhyEnterpriseCloud />
  <FeaturesByModule />
  <HowItWorks />
  <Testimonials />
  <FAQ />
  <CTASection />
  <Footer />
</App>
```
Individual developers must **not** edit `App.tsx` to insert section-specific code. All section logic, state, and styling must reside entirely within your assigned component file.

---

## 6. How the Six Sections Connect

- **Zero Inter-Component Coupling**: Developers must **never** import another developer's component into their own file (e.g., Person 1 must not import `WhyEnterpriseCloud.tsx`).
- **Anchors & Navigation**: Sections are linked via semantic HTML `id` attributes:
  - `#platform` &rarr; Platform Topology in `WhyEnterpriseCloud.tsx`
  - `#why-us` &rarr; Enterprise Advantages in `WhyEnterpriseCloud.tsx`
  - `#domains` &rarr; Module Showcase in `FeaturesByModule.tsx`
  - `#how-it-works` &rarr; Stepped Stack in `HowItWorks.tsx`
  - `#testimonials` &rarr; Client Proof in `Testimonials.tsx`
  - `#faq` &rarr; Accordion in `FAQ.tsx`
- **Data Consumption**: Components import read-only structured data from `src/data/landingData.ts` and types from `src/types/landing.types.ts`.

---

## 7. Shared Types and Data Policy

- All baseline content is pre-populated in `src/data/landingData.ts` matching the approved UI/UX reference.
- **Do not invent arbitrary data schemas**: Follow `src/types/landing.types.ts`.
- **Change Request Procedure**: If your section requires additional structured mock data or a modified TypeScript interface:
  1. Do **not** silently alter `landingData.ts` or `landing.types.ts`.
  2. Coordinate with the project coordinator or team lead.
  3. Update the shared contract once agreed upon, so all developers remain aligned.

---

## 8. Shared Design System & Token Rules

All six developers are building **ONE unified landing page**. The result must feel like it was crafted by a single UI/UX designer.

### 8.1. Typography
- Standard font: `font-sans` (`DM Sans`).
- Do not import external fonts or Google Font stylesheets in your component.
- Headings: `font-black text-slate-900 tracking-tight`.
- Subheadings / Eyebrows: `text-xs font-mono uppercase font-bold tracking-wider text-indigo-600`.
- Body text: `text-sm sm:text-base text-slate-600 leading-relaxed font-normal`.

### 8.2. Color Palette
- **Primary Brand Accent**: `text-indigo-600`, `bg-indigo-600 hover:bg-indigo-700`, `border-indigo-100`.
- **Dark Brand Accent**: `#0d1029` (`--color-brand-navy`).
- **Surfaces**:
  - Main background: `bg-white`
  - Alternating section background: `bg-slate-50/70 border-y border-slate-200/80`
  - Card background: `bg-white`
- **Domain Accents** (Used exclusively in Module & Role badges):
  - HRMS: `indigo`
  - CRM: `emerald`
  - Finance: `purple`
  - Procurement: `sky`
  - Warehouse: `amber`

### 8.3. Spacing & Container Geometry
- Full-width hero / header container: `max-w-7xl mx-auto px-6`
- Major section container: `max-w-6xl mx-auto px-6`
- Focused section container (How It Works, FAQ, CTA): `max-w-5xl mx-auto px-6` or `max-w-4xl mx-auto px-6`
- Section vertical rhythm: `py-20 px-6` or `py-24 px-6`

### 8.4. Cards & Elevation
- Container style: `rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-2xs hover:shadow-xs transition-all`
- Interactive card style: `ui-card-elevated`
- Avoid harsh, dark drop-shadows or unrounded boxes.

### 8.5. Buttons & Action Links
- Primary Button: `px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-extrabold shadow-sm hover:shadow-md transition-all flex items-center gap-2`
- Secondary / Outline Button: `px-8 py-3.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold transition-all`

---

## 9. Responsive Requirements

Every section must be tested and responsive across:
1. **Desktop** (&ge; 1024px): Multi-column layouts, rich telemetry visual cards, inline tabs.
2. **Tablet** (768px – 1023px): 2-column grids, wrapped navigation.
3. **Mobile** (< 768px): Single-column stacked layouts, mobile menu drawer, full-width buttons.

> **Responsive Rule**: Do not simply shrink desktop layouts. Shift from multi-column grids (`grid-cols-3`) to stacked rows (`grid-cols-1 md:grid-cols-3`), ensure tap targets are at least 44px, and verify horizontal scrollbars never appear (`overflow-x-hidden`).

---

## 10. Accessibility (a11y) Standards

- Use semantic HTML elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- **Buttons vs Links**:
  - Use `<a>` tags for page navigation or anchor jumping (`href="#domains"`).
  - Use `<button>` tags for state toggling (e.g. accordion open/close, module tabs, mobile menu).
  - Never attach `onClick` handlers to `<div>` elements without role and keyboard handlers.
- **ARIA Attributes**:
  - Provide `aria-expanded={isOpen}` on accordion and mobile menu toggles.
  - Provide meaningful `aria-label` attributes on icon-only buttons (e.g. mobile drawer button).
- **Focus Rings**:
  - Maintain visible keyboard focus indicators (`focus-visible:outline-indigo-600`).

---

## 11. Animation Standards

- Animations must be subtle, performant, and purposeful:
  - Transition duration: `transition-all duration-200 ease-in-out`
  - Accordion icon rotation: `rotate-180 transition-transform duration-200`
  - Subtle hover lift: `hover:shadow-xs hover:border-slate-300`
- **Forbidden**: Excessive bounce, rapid continuous spinning, jittery parallax, or CPU-intensive canvas effects.
- Respect `prefers-reduced-motion` settings.

---

## 12. Git Workflow & Collaboration Rules

### 12.1. Feature Branch Convention
Each developer creates their feature branch off the integration branch (`dev`):

```bash
git checkout dev
git pull origin dev

# PERSON 1
git checkout -b feature/landing-person-1

# PERSON 2
git checkout -b feature/landing-person-2

# PERSON 3
git checkout -b feature/landing-person-3

# PERSON 4
git checkout -b feature/landing-person-4

# PERSON 5
git checkout -b feature/landing-person-5

# PERSON 6
git checkout -b feature/landing-person-6
```

### 12.2. Commit Message Standards
Follow semantic commit formatting:

```bash
# Correct examples:
feat(landing): implement navbar and responsive mobile drawer
feat(landing): implement hero headline and cta action links
feat(landing): implement why enterprise cloud topology and role selector
feat(landing): implement domain module showcase tabs and capability lists
feat(landing): implement five-tier how it works stepped stack
feat(landing): implement client testimonial cards and roi metrics
feat(landing): implement faq accordion and pre-footer cta banner

# Unacceptable examples:
git commit -m "update"
git commit -m "changes"
git commit -m "fixed stuff"
git commit -m "wip"
```

### 12.3. Pre-Commit Verification Checklist
Before staging or committing:

```bash
# 1. Check TypeScript types
npm run typecheck

# 2. Check production build
npm run build

# 3. Review modified files
git status
```

### 12.4. Staging Rules
**Never run blind `git add .`!** Only stage the specific file(s) assigned to you:

```bash
# Example for PERSON 3:
git add src/components/landing/FeaturesByModule.tsx
git commit -m "feat(landing): implement module features section"
git push origin feature/landing-person-3
```

---

## 13. Pull Request (PR) Requirements

When opening a Pull Request into `dev`:

1. **Title**: `feat(landing): implement <section-name> (PERSON X)`
2. **PR Description Template**:
   ```markdown
   ### Summary of Implementation
   - Implemented <Section Name> component.
   
   ### Files Changed
   - `src/components/landing/<YourComponent>.tsx`
   
   ### Verification Completed
   - [x] `npm run typecheck` passed (0 errors)
   - [x] `npm run build` passed (0 errors)
   - [x] Verified on Desktop (1920x1080)
   - [x] Verified on Tablet (768px)
   - [x] Verified on Mobile (375px)
   
   ### Shared File Dependencies
   - None (Zero modifications outside assigned component file)
   ```
3. **Review**: The project coordinator will merge the six feature branches into `dev` and conduct the final integrated review.

---

## 14. What Developers MUST NOT Do

1. ❌ **Do NOT modify `D:\frontend`** under any circumstance.
2. ❌ **Do NOT edit files assigned to another developer** (e.g. Person 1 must never touch `HowItWorks.tsx`).
3. ❌ **Do NOT modify protected files** (`App.tsx`, `index.css`, `landingData.ts`, `landing.types.ts`, `vite.config.ts`, `package.json`).
4. ❌ **Do NOT install new npm packages** without coordinator sign-off.
5. ❌ **Do NOT push directly to `main` or `dev`**.
6. ❌ **Do NOT use `git add .`** without verifying the status output.