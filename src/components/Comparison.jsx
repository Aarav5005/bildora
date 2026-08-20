import React from 'react';
import { Layers, Users2, Key, Target, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function Comparison({ onOpenCalendly }) {
  const pillars = [
    {
      icon: Layers,
      title: 'Built Around Your Workflow',
      description: 'We do not force your business into rigid, generic software templates. Every automation and ERP workflow is engineered specifically around how your team operates.',
    },
    {
      icon: Users2,
      title: 'Direct Engineering Partnership',
      description: 'You collaborate directly with senior systems architects designing and building your solution—ensuring clear technical alignment without middle layers.',
    },
    {
      icon: Key,
      title: 'Full Source Code & IP Ownership',
      description: 'All custom source code, workflow configurations, prompts, and database schemas belong 100% to your company with zero ongoing proprietary lock-in.',
    },
    {
      icon: Target,
      title: 'Clear Milestones & Fixed Pricing',
      description: 'Before development begins, you receive a detailed technical specification, milestone roadmap, and upfront fixed quote so expectations are transparent.',
    },
    {
      icon: TrendingUp,
      title: 'Engineered to Scale with Growth',
      description: 'We build with robust, production-tested technologies (Python, React, FastAPI, PostgreSQL) that adapt smoothly as your transaction volume and team expand.',
    },
  ];

  return (
    <section id="why-bildora" className="py-24 bg-[#f9f9fa] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-slate-800 text-[11px] font-bold tracking-wider uppercase mb-3 shadow-sm">
            <span>Why Choose Bildora</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#09090b] tracking-tight">
            Why Businesses Work <span className="italic font-serif">With Bildora</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            A specialized engineering partner built for speed, transparency, and production-grade reliability.
          </p>
        </div>

        {/* 5 High-Trust Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isWide = idx === 3 || idx === 4;
            return (
              <div
                key={idx}
                className={`bento-card rounded-3xl p-7 sm:p-8 bg-white flex flex-col justify-between ${
                  isWide ? 'lg:col-span-1 md:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-800 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-[#09090b] mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-brand-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Standard on all projects</span>
                </div>
              </div>
            );
          })}

          {/* Quick CTA Card */}
          <div className="bento-card rounded-3xl p-7 sm:p-8 bg-[#09090b] text-white flex flex-col justify-between border border-slate-800">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-400 block mb-2">
                Have a unique requirement?
              </span>
              <h3 className="font-serif text-2xl font-normal text-white mb-3">
                Let's evaluate your workflows
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                Book a 30-minute discovery call to explore feasibility, timelines, and expected return on investment.
              </p>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={onOpenCalendly}
                className="w-full py-3 px-5 rounded-full text-xs font-bold text-[#09090b] bg-white hover:bg-slate-100 transition-colors cursor-pointer shadow-sm text-center"
              >
                Schedule Technical Review
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
