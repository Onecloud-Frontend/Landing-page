/**
 * SECTION: What Our Clients Say (Testimonials)
 * ASSIGNED DEVELOPER: PERSON 5
 * OWNERSHIP SCOPE:
 * - Client reviews & social proof section
 * - 3-column responsive testimonial card grid
 * - Customer name, operational title, enterprise organization
 * - Star rating visualization
 * - Highlight metrics & key ROI impact badges
 * - Avatar display with graceful initials fallback
 *
 * RULES:
 * - Modify ONLY this file or companion files inside your personal scope.
 * - Do NOT modify App.tsx or files assigned to other developers.
 */

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { clientTestimonials } from '../../data/landingData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-slate-50/70 border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase font-bold tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
            Social Proof
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto">
            Trusted by modern multi-entity enterprises running global operations on One Enterprise Cloud.
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* 5-Star Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200" />
                </div>

                {/* Testimonial Quote Body */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                {/* Highlight Metric Pill */}
                {testimonial.highlightMetric && (
                  <div className="inline-block px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
                    {testimonial.highlightMetric}
                  </div>
                )}

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs shrink-0">
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <div className="font-extrabold text-sm text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
