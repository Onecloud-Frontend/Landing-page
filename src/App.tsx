/**
 * One Enterprise Cloud - Master Landing Page Application
 *
 * ARCHITECTURAL ROLE: Pure Composition Layer
 *
 * ⚠️ TEAM WORKFLOW RULES:
 * 1. This file is a PROTECTED composition file.
 * 2. Developers must NOT add section-specific UI or logic here.
 * 3. Each developer works exclusively inside their assigned file in:
 *    src/components/landing/
 * 4. This file composes the sections in the approved order:
 *    - Navbar (PERSON 1)
 *    - HeroSection (PERSON 1)
 *    - WhyEnterpriseCloud (PERSON 2)
 *    - FeaturesByModule (PERSON 3)
 *    - HowItWorks (PERSON 4)
 *    - Testimonials (PERSON 5)
 *    - FAQ (PERSON 6)
 *    - CTASection (PERSON 6)
 *    - Footer (PERSON 6)
 */

import React from 'react';
import Navbar from './components/landing/Navbar';
import HeroSection from './components/landing/HeroSection';
import WhyEnterpriseCloud from './components/landing/WhyEnterpriseCloud';
import FeaturesByModule from './components/landing/FeaturesByModule';
import HowItWorks from './components/landing/HowItWorks';
import Testimonials from './components/landing/Testimonials';
import FAQ from './components/landing/FAQ';
import CTASection from './components/landing/CTASection';
import Footer from './components/landing/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-indigo-100 selection:text-indigo-900 flex flex-col">
      {/* 1. Navbar (PERSON 1) */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section (PERSON 1) */}
        <HeroSection />

        {/* 3. Why One Enterprise Cloud (PERSON 2) */}
        <WhyEnterpriseCloud />

        {/* 4. Features Benefits by Module (PERSON 3) */}
        <FeaturesByModule />

        {/* 5. How It Works (PERSON 4) */}
        <HowItWorks />

        {/* 6. What Our Clients Say (PERSON 5) */}
        <Testimonials />

        {/* 7. FAQ (PERSON 6) */}
        <FAQ />

        {/* 8. CTA Section (PERSON 6) */}
        <CTASection />
      </main>

      {/* 9. Footer (PERSON 6) */}
      <Footer />
    </div>
  );
};

export default App;
