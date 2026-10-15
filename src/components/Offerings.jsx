import React from 'react';
import { Wrench, Factory } from 'lucide-react';

export default function Offerings() {
  return (
    <section id="offerings" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-slate-800 text-[11px] font-bold tracking-wider uppercase mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse" />
            <span>Engagement Models</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#09090b] tracking-tight">
            Two ways to work <span className="italic font-serif">with Bildora</span>
          </h2>
        </div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* Automation Services */}
          <div className="bento-card rounded-3xl p-8 sm:p-10 bg-[#f9f9fa] border border-slate-200/80 flex flex-col shadow-bento">
            <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-800 mb-6 shadow-sm">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#09090b] mb-3">
              Bildora Automation Services
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal flex-grow">
              Custom integrations, workflow automation, AI agents, and internal tools — scoped to your operational problem and priced per project. For businesses that need a specific workflow improved now.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-200/80">
              <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                Project-based · Fixed-scope packages
              </span>
            </div>
          </div>

          {/* Operations Platform */}
          <div className="bento-card rounded-3xl p-8 sm:p-10 bg-[#09090b] text-white flex flex-col shadow-bento relative overflow-hidden">
            <div className="absolute top-6 right-6">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-mono font-semibold tracking-wider uppercase text-slate-200">
                In development · Starting with manufacturing
              </span>
            </div>
            <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white mb-6">
              <Factory className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-3">
              Bildora Operations Platform
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal flex-grow">
              A repeatable AI operations layer for manufacturers, designed around order, inventory, production, procurement, and accounts workflows. Setup and subscription pricing will be scoped after discovery as the product and its first workflows are validated.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                Setup fee + recurring subscription
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
