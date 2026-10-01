# One Enterprise Cloud — Landing Page Project

Dedicated standalone web application for the **One Enterprise Cloud Platform Landing Page**, structured for parallel multi-developer collaboration across **6 developers with zero merge conflicts**.

---

## 1. Project Technology Stack

- **React 19**
- **TypeScript (Strict mode)**
- **Vite 8**
- **Tailwind CSS v4** (`@tailwindcss/vite` with `@theme` design tokens)
- **Lucide React** (Standard icon set)

---

## 2. Directory Structure

```
src/
├── components/
│   └── landing/
│       ├── Navbar.tsx                # PERSON 1
│       ├── HeroSection.tsx           # PERSON 1
│       ├── WhyEnterpriseCloud.tsx    # PERSON 2
│       ├── FeaturesByModule.tsx      # PERSON 3
│       ├── HowItWorks.tsx            # PERSON 4
│       ├── Testimonials.tsx          # PERSON 5
│       ├── FAQ.tsx                   # PERSON 6
│       ├── CTASection.tsx            # PERSON 6
│       └── Footer.tsx                # PERSON 6
│
├── data/
│   └── landingData.ts                # Shared data store from approved reference
│
├── types/
│   └── landing.types.ts              # Shared TypeScript contracts
│
├── assets/
│   └── .gitkeep                      # Dedicated directory for graphics & illustrations
│
├── App.tsx                           # Master composition layer
├── index.css                         # Tailwind v4 theme & global design tokens
└── main.tsx                          # App root mount
```

---

## 3. Developer Ownership & Boundaries

| Developer | Assigned Files | Scope & Responsibilities |
| :--- | :--- | :--- |
| **PERSON 1** | `src/components/landing/Navbar.tsx`<br>`src/components/landing/HeroSection.tsx` | Brand logo, nav anchor links, action buttons, mobile menu drawer, hero eyebrow, main headline, CTAs, trust badges. |
| **PERSON 2** | `src/components/landing/WhyEnterpriseCloud.tsx` | Platform topology diagram, 4 governance pillars, 7 role perspectives & interactive role KPI selector. |
| **PERSON 3** | `src/components/landing/FeaturesByModule.tsx` | 5 module showcases (HRMS, CRM, Finance, Procurement, Warehouse), tab state selector, capability checklists, console preview. |
| **PERSON 4** | `src/components/landing/HowItWorks.tsx` | 5-tier stepped stack architecture (Platform Root down to Operational Staff), responsive cards with tier badges. |
| **PERSON 5** | `src/components/landing/Testimonials.tsx` | 3-column client review cards, star ratings, quotes, company names, ROI metrics, avatar fallbacks. |
| **PERSON 6** | `src/components/landing/FAQ.tsx`<br>`src/components/landing/CTASection.tsx`<br>`src/components/landing/Footer.tsx` | Accordion FAQ with open/close state, pre-footer CTA conversion banner, categorized 5-column footer with copyright. |

---

## 4. Protected Shared Files (Do NOT edit without team coordination)

- `src/App.tsx` — Composition layer only. Do **not** inject section logic here.
- `src/types/landing.types.ts` — Shared TypeScript data models.
- `src/data/landingData.ts` — Shared data store.
- `src/index.css` — Global styling and design tokens.
- `package.json`, `vite.config.ts`, `tsconfig.*` — Build configuration.

---

## 5. Shared Design Tokens

All 6 sections must adhere to these tokens to ensure visual consistency:

- **Typography**: `font-sans` (`DM Sans`, loaded in `index.html`).
- **Primary Accent**: `text-indigo-600`, `bg-indigo-600 hover:bg-indigo-700`.
- **Backgrounds**: Alternating clean white (`bg-white`) and soft slate (`bg-slate-50/70 border-y border-slate-200/80`).
- **Containers**:
  - `max-w-7xl mx-auto px-6` (Navbar, Hero)
  - `max-w-6xl mx-auto px-6` (Platform, Modules, Testimonials, Footer)
  - `max-w-5xl mx-auto px-6` (How It Works)
  - `max-w-4xl mx-auto px-6` (FAQ, CTA)
- **Cards**: `rounded-3xl border border-slate-200 bg-white p-8 shadow-2xs hover:shadow-xs`.

---

## 6. Quickstart Commands

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Run TypeScript typecheck
npm run typecheck

# Build for production
npm run build
```
