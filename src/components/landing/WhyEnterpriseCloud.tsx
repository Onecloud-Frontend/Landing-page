/**
 * SECTION: Why One Enterprise Cloud
 * ASSIGNED DEVELOPER: PERSON 2
 * OWNERSHIP SCOPE:
 * - Architectural topology diagram ("The Connected Enterprise Nervous System")
 * - 4 Enterprise Governance Pillars (Connected, Organization-Aware, Role-Based, Integrated)
 * - 7 Role-based operational perspectives & telemetry previews
 * - Interactive role preview selector tabs & KPI metric cards
 *
 * RULES:
 * - Modify ONLY this file or companion files inside your personal scope.
 * - Do NOT modify App.tsx or files assigned to other developers.
 */

import React, { useState } from 'react';
import {
  Globe,
  Building2,
  Users,
  Layers,
  Crown,
  CheckCircle2,
} from 'lucide-react';
import { valuePillars, rolePreviews } from '../../data/landingData';
import type { RolePreview } from '../../types/landing.types';

export const WhyEnterpriseCloud: React.FC = () => {
  const [activeRole, setActiveRole] = useState<RolePreview['id']>('super-admin');

  const activeRoleData =
    rolePreviews.find((r) => r.id === activeRole) || rolePreviews[0];

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-indigo-600" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-slate-800" />;
      case 'Users':
        return <Users className="w-5 h-5 text-emerald-600" />;
      case 'Layers':
      default:
        return <Layers className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <div id="why-us" className="space-y-24 py-16">
      {/* 1. ARCHITECTURAL TOPOLOGY */}
      <section id="platform" className="px-6 max-w-6xl mx-auto">
        <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/50 to-indigo-50/30 p-8 sm:p-12 shadow-xs space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase font-bold tracking-wider text-indigo-600">
              Architectural Topology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              The Connected Enterprise Nervous System
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              A unified platform backbone connecting platform governance, organization boundaries, and operational business suites.
            </p>
          </div>

          {/* Central Platform Diagram Visual */}
          <div className="space-y-4 max-w-2xl mx-auto">
            {/* Top Tier: Global Authority */}
            <div className="p-5 rounded-2xl border-2 border-indigo-500/80 bg-white shadow-xs text-center relative">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center mx-auto mb-2">
                <Crown className="w-4 h-4" />
              </div>
              <div className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                Platform Root
              </div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">
                One Enterprise Cloud Platform
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Global governance • Multi-tenant isolation • WORM audit trail
              </div>
            </div>

            {/* Connecting Vertical Trunk */}
            <div className="w-0.5 h-6 bg-indigo-200 mx-auto" />

            {/* Middle Tier: Organization Boundary */}
            <div className="p-5 rounded-2xl border border-slate-300 bg-white shadow-xs text-center">
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center mx-auto mb-2">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="text-xs font-mono font-bold text-slate-600 uppercase tracking-wider">
                Organization Boundary
              </div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">
                Enterprise Tenant Workspace
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Dedicated company units • Departments • Branches • User bindings
              </div>
            </div>

            {/* Connecting Vertical Trunk */}
            <div className="w-0.5 h-6 bg-indigo-200 mx-auto" />

            {/* Bottom Tier: Business Domains */}
            <div className="p-5 rounded-2xl border border-indigo-200 bg-indigo-50/50 shadow-xs text-center">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center mx-auto mb-2">
                <Layers className="w-4 h-4" />
              </div>
              <div className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider">
                Connected Business Suites
              </div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">
                HRMS • CRM • Finance • Procurement • Warehouse
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Native data sharing without point-to-point brittle integrations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4 ENTERPRISE GOVERNANCE PILLARS */}
      <section className="px-6 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase font-bold tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
            Enterprise Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Designed for Modern Enterprise Governance
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto">
            A cohesive architecture that delivers operational autonomy, strict data isolation, and comprehensive executive transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuePillars.map((pillar) => (
            <div
              key={pillar.id}
              className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:shadow-xs transition-shadow space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                {getPillarIcon(pillar.iconName)}
              </div>
              <h3 className="text-base font-extrabold text-slate-900">{pillar.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 7 ROLE PREVIEWS: EVERY ROLE SEES WHAT MATTERS TO THEM */}
      <section id="roles" className="px-6 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase font-bold tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
            Role-Based Perspectives
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Every Role Sees Exactly What Matters
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Select a role below to preview how One Enterprise Cloud personalizes KPIs, boundaries, and operational tooling for each stakeholder.
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 max-w-4xl mx-auto">
          {rolePreviews.map((role) => (
            <button
              key={role.id}
              onClick={() => setActiveRole(role.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeRole === role.id
                  ? 'bg-white text-indigo-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {role.label}
            </button>
          ))}
        </div>

        {/* Active Role Detail Display Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs space-y-6 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <div className="text-xs font-mono font-bold text-indigo-600 uppercase">
                {activeRoleData.scope}
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                {activeRoleData.label}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">{activeRoleData.tagline}</p>
            </div>
            <div className="text-xs px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 font-semibold border border-indigo-100 self-start sm:self-auto">
              {activeRoleData.scopeLevel === 'global'
                ? 'Global Scope'
                : activeRoleData.scopeLevel === 'tenant'
                ? 'Tenant Scope'
                : 'Domain Scope'}
            </div>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed">
            {activeRoleData.description}
          </p>

          {/* Role KPIs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {activeRoleData.kpis.map((kpi, kIdx) => (
              <div
                key={kIdx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center sm:text-left"
              >
                <div className="text-xs text-slate-500 font-medium">{kpi.label}</div>
                <div className="text-xl font-extrabold text-slate-900 mt-1">{kpi.val}</div>
              </div>
            ))}
          </div>

          {/* Responsibilities list */}
          <div className="pt-2 space-y-2">
            <div className="text-xs font-bold text-slate-900">
              Core Responsibilities:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeRoleData.operationalResponsibilities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visible Surface & Telemetry Boundary */}
          <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs text-slate-700 space-y-1">
            <span className="font-bold text-slate-900">
              Visible Surface & Boundary:{' '}
            </span>
            <span className="text-slate-600">{activeRoleData.viewSummary}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyEnterpriseCloud;
