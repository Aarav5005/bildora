import React from 'react';
import { Target, Code2, Lock, ArrowRight, UserCheck, Linkedin, Sparkles, Video } from 'lucide-react';
import SpecularButton from './SpecularButton';

export default function About({ onOpenCalendly }) {
  const pillars = [
    {
      icon: Code2,
      title: 'Direct Engineering',
      desc: 'Work directly with senior systems architects who build, test, and maintain your software.',
    },
    {
      icon: Target,
      title: 'Outcome-Driven',
      desc: 'We only build systems that tangibly reduce manual hours, prevent errors, and lower costs.',
    },
    {
      icon: Lock,
      title: 'Full Data Isolation',
      desc: 'Strict API token vaults, VPC database isolation, and zero model training on confidential data.',
    },
  ];

  const founders = [
    {
      name: 'Aarav Panchal',
      role: 'Co-Founder & Systems Architect',
      focus: 'AI Architecture • Autonomous Agents • Workflow Engineering',
      image: '/founder-aarav.jpg',
      initials: 'AP',
      linkedin: 'https://www.linkedin.com/in/aarav-panchal-a667ba363',
      bio: 'Leads AI model integration, voice agent pipelines, and high-performance custom application engineering.',
    },
    {
      name: 'Chakrashen Maurya',
      role: 'Co-Founder & Systems Engineer',
      focus: 'ERP Infrastructure • Operations Automation • Data Pipelines',
      image: '/founder-chakrashen.jpg',
      initials: 'CM',
      linkedin: '#',
      bio: 'Leads enterprise ERP systems, database architectures, and production deployment stability.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#f9f9fa] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header & Story */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-slate-800 text-[11px] font-bold tracking-wider uppercase mb-3 shadow-sm">
            <UserCheck className="w-3.5 h-3.5 text-brand-600" />
            <span>Leadership & Ethos</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#09090b] tracking-tight leading-[1.15] mb-4">
            Built by Engineers. <span className="italic font-serif">Focused on Business Outcomes</span>.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Founded by <strong className="text-[#09090b] font-semibold">Aarav Panchal</strong> and <strong className="text-[#09090b] font-semibold">Chakrashen Maurya</strong>, Bildora designs and builds custom AI voice agents, ERP platforms, and workflow automations for growing companies across India and worldwide.
          </p>
        </div>

        {/* Co-Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {founders.map((founder, fIdx) => (
            <div
              key={fIdx}
              className="rounded-3xl bg-[#09090b] text-white p-7 sm:p-8 shadow-2xl relative overflow-hidden border border-slate-800 flex flex-col justify-between group hover:border-slate-700 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/10 blur-3xl rounded-full pointer-events-none group-hover:bg-brand-600/20 transition-all duration-500" />
              
              <div className="relative z-10">
                {/* Header with Executive Portrait & Role */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
                  <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl bg-slate-900 border border-slate-700/90 shadow-xl shrink-0 overflow-hidden relative">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                      className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[0.98]"
                    />
                    <span className="hidden items-center justify-center w-full h-full font-mono text-brand-400 font-extrabold text-2xl">
                      {founder.initials}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display font-bold text-2xl text-white">
                        {founder.name}
                      </h3>
                      {founder.linkedin && founder.linkedin !== '#' && (
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800"
                          aria-label={`${founder.name} on LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4 text-brand-400" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-brand-400 font-semibold font-mono mt-1">
                      {founder.role}
                    </p>
                    <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 text-[11px] font-mono">
                      <Sparkles className="w-3 h-3 text-brand-400" />
                      <span>{founder.focus}</span>
                    </div>
                  </div>
                </div>

                {/* Bio / Focus */}
                <p className="text-sm text-slate-300 leading-relaxed font-normal bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80">
                  {founder.bio}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  BILDORA LEADERSHIP
                </span>
                <span className="text-brand-400 font-semibold">FOUNDING TEAM</span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonial Teaser Banner */}
        <div className="rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 mb-12 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center shrink-0">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-normal text-[#09090b]">
                Case Study & System Breakdown Video
              </h4>
              <p className="text-xs text-slate-500 font-normal">
                Featuring Co-Founder Chakrashen Maurya detailing enterprise client deployments.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse" />
              Recording in Progress
            </span>
          </div>
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
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

        {/* Bottom Discovery CTA */}
        <div className="text-center pt-2">
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
            <span>Schedule a Discovery Call with Aarav & Chakrashen</span>
            <ArrowRight className="w-4 h-4" />
          </SpecularButton>
        </div>

      </div>
    </section>
  );
}
