import React from 'react';
import { Search, Cpu, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

export default function Process({ onOpenCalendly }) {
  const steps = [
    {
      number: '01',
      title: 'Understand & Audit',
      icon: Search,
      phase: 'Step 01 / Discovery',
      description:
        'We map your current workflows, identify high-friction bottlenecks, and define what should be automated before any code is written.',
      deliverables: ['Workflow Bottleneck Audit', 'Technical Architecture Plan', 'Guaranteed Timeline & Fixed Quote'],
    },
    {
      number: '02',
      title: 'Engineer & Integrate',
      icon: Cpu,
      phase: 'Step 02 / Build',
      description:
        'We design, develop, and integrate the system with your existing tools, ensuring thorough testing, validation, and data security.',
      deliverables: ['Production Deployment', 'Hardened API Webhooks', 'End-to-End System Testing'],
    },
    {
      number: '03',
      title: 'Deploy & Support',
      icon: TrendingUp,
      phase: 'Step 03 / Launch',
      description:
        'We launch the system, train your team, and provide proactive hypercare monitoring to ensure smooth, continuous operations.',
      deliverables: ['Full Source Code & IP Transfer', 'Team Onboarding & Guides', '30-Day Hypercare Support'],
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#f9f9fa] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-slate-800 text-[11px] font-bold tracking-wider uppercase mb-3 shadow-sm">
            <span>Deterministic Delivery Framework</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#09090b] tracking-tight">
            From Business Problem to <span className="italic font-serif">Working System</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            A transparent, milestone-driven engineering cycle designed to deliver tangible operational efficiency with zero business downtime.
          </p>
        </div>

        {/* 3 Sequential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bento-card rounded-3xl p-8 flex flex-col justify-between bg-white"
              >
                <div>
                  {/* Top Row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-brand-600 tracking-tighter">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-800">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    {step.phase}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#09090b] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Project Deliverables:
                  </span>
                  {step.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Trigger */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={onOpenCalendly}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#09090b] hover:text-brand-600 transition-colors cursor-pointer"
          >
            <span>Have questions about your tech stack? Let's discuss on a 30-minute discovery call</span>
            <ArrowRight className="w-4 h-4 text-brand-600" />
          </button>
        </div>

      </div>
    </section>
  );
}
