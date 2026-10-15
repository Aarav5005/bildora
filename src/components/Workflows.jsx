import React from 'react';
import { ArrowRight } from 'lucide-react';

const workflows = [
  {
    number: '01',
    title: 'Order to production',
    tag: 'Proposed starting focus',
    tagActive: true,
    desc: 'A WhatsApp order arrives → the system prepares a structured draft → staff verify specifications → material availability is checked → a production schedule is proposed → the team can track order progress.',
  },
  {
    number: '02',
    title: 'Stock shortage to purchase request',
    tag: 'Later',
    tagActive: false,
    desc: 'A possible shortage is flagged → approved suppliers are compared → a purchase request is drafted → a team member reviews and approves it.',
  },
  {
    number: '03',
    title: 'Invoice to accounting record',
    tag: 'Later',
    tagActive: false,
    desc: 'An invoice arrives → key fields are extracted → details are checked against order records → mismatches are flagged → approved data can be passed to accounting software.',
  },
];

export default function Workflows() {
  return (
    <section id="workflows" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-slate-800 text-[11px] font-bold tracking-wider uppercase mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse" />
            <span>Roadmap</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#09090b] tracking-tight">
            Starting with <span className="italic font-serif">one workflow.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            We&apos;re speaking with manufacturers to validate which workflow should come first. These are proposed workflows, not live deployments.
          </p>
        </div>

        {/* Workflow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {workflows.map((w) => (
            <div
              key={w.number}
              className={`bento-card rounded-3xl p-7 sm:p-8 flex flex-col shadow-bento border ${
                w.tagActive
                  ? 'bg-[#09090b] text-white border-[#09090b]'
                  : 'bg-[#f9f9fa] border-slate-200/80'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className={`font-mono text-3xl font-bold ${w.tagActive ? 'text-white/25' : 'text-slate-300'}`}>
                  {w.number}
                </span>
                <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase ${
                  w.tagActive
                    ? 'bg-white/10 border border-white/20 text-slate-200'
                    : 'bg-white border border-slate-200 text-slate-500'
                }`}>
                  {w.tag}
                </span>
              </div>
              <h3 className={`font-serif text-2xl font-normal mb-4 ${w.tagActive ? 'text-white' : 'text-[#09090b]'}`}>
                {w.title}
              </h3>
              <p className={`text-sm leading-relaxed font-normal flex-grow ${w.tagActive ? 'text-slate-300' : 'text-slate-600'}`}>
                {w.desc}
              </p>
              {w.tagActive && (
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <span>Where we&apos;re starting</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
