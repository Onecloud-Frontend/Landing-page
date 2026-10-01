# Onecloud Landing Page

A standalone React + TypeScript landing page for the **Onecloud Enterprise Cloud Platform**.

- **Official Repository**: [https://github.com/Onecloud-Frontend/Landing-page](https://github.com/Onecloud-Frontend/Landing-page)
- **Architecture Reference**: Standalone presentation layer decoupled from `D:\frontend`
- **Team Size**: 6 Parallel Frontend Developers with zero merge conflicts

---

## 1. Technology Stack

- **React 19**
- **TypeScript (Strict Mode)**
- **Vite 8**
- **Tailwind CSS v4** (`@tailwindcss/vite` with `@theme` design tokens)
- **Lucide React** (Icon library)

---

## 2. Quickstart & Local Development

```bash
# 1. Clone repository
git clone https://github.com/Onecloud-Frontend/Landing-page.git
cd Landing-page

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Run TypeScript typecheck
npm run typecheck

# 5. Build for production
npm run build
```

---

## 3. Project Structure

```
src/
├── components/
│   └── landing/                  # 🟢 6-Developer Component Boundary
│       ├── Navbar.tsx            # PERSON 1
│       ├── HeroSection.tsx       # PERSON 1
│       ├── WhyEnterpriseCloud.tsx# PERSON 2
│       ├── FeaturesByModule.tsx  # PERSON 3
│       ├── HowItWorks.tsx        # PERSON 4
│       ├── Testimonials.tsx      # PERSON 5
│       ├── FAQ.tsx               # PERSON 6
│       ├── CTASection.tsx        # PERSON 6
│       └── Footer.tsx            # PERSON 6
│
├── data/
│   └── landingData.ts            # 🔒 Protected: Baseline data store
│
├── types/
│   └── landing.types.ts          # 🔒 Protected: Unified TypeScript contracts
│
├── assets/                       # Static component assets / mockups
│   └── .gitkeep
│
├── App.tsx                       # 🔒 Protected: Composition layer
├── index.css                     # 🔒 Protected: Tailwind v4 theme & tokens
└── main.tsx                      # App entry point
```

---

## 4. Developer Ownership Matrix

| Developer | Assigned Files | Section | Scope |
| :--- | :--- | :--- | :--- |
| **PERSON 1** | `Navbar.tsx`<br>`HeroSection.tsx` | Navbar + Hero | Logo, nav links, Sign In/Register, mobile drawer, hero headline, CTAs, trust badges |
| **PERSON 2** | `WhyEnterpriseCloud.tsx` | Why One Enterprise Cloud | Platform topology diagram, 4 governance pillars, 7 role perspectives with KPI selector |
| **PERSON 3** | `FeaturesByModule.tsx` | Features Benefits by Module | 5 domain modules (HRMS, CRM, Finance, Procurement, Warehouse), tab selector, console preview |
| **PERSON 4** | `HowItWorks.tsx` | How It Works | 5-tier stepped stack architecture, responsive progression cards with tier badges |
| **PERSON 5** | `Testimonials.tsx` | What Our Clients Say | 3-column review cards, star ratings, quotes, company names, ROI metrics, avatar fallbacks |
| **PERSON 6** | `FAQ.tsx`<br>`CTASection.tsx`<br>`Footer.tsx` | FAQ + CTA + Footer | Accordion FAQ, pre-footer CTA conversion banner, 5-column categorized footer |

---

## 5. Developer Guide & Team Workflow

For detailed instructions on Git branching, protected files, commit standards, Pull Request requirements, responsive design rules, and design system tokens, please refer to:

👉 **[DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)**