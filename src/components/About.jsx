import React from 'react';
import { Target, Code2, Lock, ArrowRight, UserCheck } from 'lucide-react';
import SpecularButton from './SpecularButton';

export default function About({ onOpenCalendly }) {
  const pillars = [
    {
      icon: Code2,
      title: 'Direct Engineering',
      desc: 'Work directly with senior systems architects who build and maintain your system.',
    },
    {
      icon: Target,
      title: 'Outcome-Driven',
      desc: 'We only build systems that tangibly reduce manual hours and operational costs.',
    },
    {
      icon: Lock,
      title: 'Full Data Isolation',
      desc: 'Strict API key management, encrypted storage, and zero model training on your data.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#f9f9fa] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Founder Story + Ethos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-slate-800 text-[11px] font-bold tracking-wider uppercase mb-3 shadow-sm">
              <UserCheck className="w-3.5 h-3.5 text-brand-600" />
              <span>Founder & Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#09090b] tracking-tight leading-[1.15] mb-4">
              Built by Engineers. <span className="italic font-serif">Focused on Business Outcomes</span>.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-6">
              Founded by <strong className="text-[#09090b] font-semibold">Aarav Panchal</strong>, Bildora designs and builds custom AI voice agents, ERP platforms, and workflow automations for growing companies across India and worldwide.
            </p>

            <div>
              <SpecularButton
                size="md"
                radius={999}
                tint="#09090b"
                tintOpacity={1}
                textColor="#ffffff"
                lineColor="#60a5fa"
                baseColor="#1e293b"
                intensity={1.2}
                shineSize={10}
                shineFade={40}
                thickness={1}
                followMouse={true}
                proximity={200}
                onClick={onOpenCalendly}
              >
                <span>Schedule a Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </SpecularButton>
            </div>
          </div>

          {/* Right Column: Founder Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#09090b] text-white p-7 sm:p-8 shadow-2xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-600/15 blur-3xl rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-white mb-5 shadow-md">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>

                <blockquote className="font-serif text-lg sm:text-xl font-normal text-slate-100 leading-relaxed italic mb-5">
                  "Our goal is straightforward: eliminate the friction in your daily operations so your team can focus on growth."
                </blockquote>

                <div className="pt-3.5 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">Aarav Panchal</h4>
                    <p className="text-xs text-brand-400 font-medium">Founder & Systems Architect</p>
                  </div>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-300 font-mono border border-slate-700">
                    bildora.in
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar, pIdx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pIdx}
                className="bento-card rounded-3xl p-6 bg-white"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-3.5">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg font-normal text-[#09090b] mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
