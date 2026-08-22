import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Smartphone, 
  UtensilsCrossed, 
  Play, 
  CheckCircle2, 
  ArrowUpRight, 
  Video, 
  Workflow,
  X,
  Layers,
  Sparkles
} from 'lucide-react';

export default function CaseStudies() {
  const [activeModal, setActiveModal] = useState(null);

  const projects = [
    {
      id: 'asportszone',
      client: 'AsportsZone',
      industry: 'E-Commerce & Retail Logistics',
      icon: ShoppingBag,
      tagline: 'Headless Shopify & Automated Warehouse Dispatch',
      overview:
        'Engineered automated order-to-warehouse dispatch, multi-channel inventory sync, and instant 3PL carrier hooks.',
      problem: 'Manual copy-pasting of multi-channel orders caused a 4-hour delay in warehouse fulfillment and frequent stock mismatches.',
      solution: 'Custom event-driven webhook pipeline that parses Shopify orders in real time, generates pick-lists, updates ERP inventory, and pushes dispatch manifests directly to 3PL logistics carriers.',
      architecture: 'Shopify Webhooks → FastAPI Queue → Tally/ERP Sync → 3PL Carrier API',
      stack: ['Shopify Liquid', 'FastAPI', 'PostgreSQL', 'Tally ERP', 'Klaviyo'],
      results: [
        'Instant zero-touch warehouse order routing',
        '100% real-time multi-channel inventory sync',
        'Sub-second page loading speed on mobile devices'
      ],
      clientVerification: 'Verified E-Commerce Deployment • Active Production System',
    },
    {
      id: 'moxvox',
      client: 'MOX VOX',
      industry: 'Mobile Apps & Business Communications',
      icon: Smartphone,
      tagline: 'Flutter Mobile App & Automated WhatsApp Flow',
      overview:
        'Built cross-platform iOS & Android mobile apps with integrated WhatsApp Cloud API customer follow-up pipelines.',
      problem: 'Customer touchpoints were fragmented across emails and manual phone calls with slow lead qualification and response times.',
      solution: 'Unified Flutter mobile application backed by Supabase with automated WhatsApp trigger webhooks for immediate lead response, automated follow-ups, and review collection.',
      architecture: 'Flutter App → Supabase DB → WhatsApp Cloud API → Webhook Router',
      stack: ['Flutter 3.x', 'Supabase', 'WhatsApp Cloud API', 'Twilio', 'Node.js'],
      results: [
        'Sub-15s automated customer response time',
        'Unified iOS & Android mobile application client',
        'Automated review collection triggers upon order completion'
      ],
      clientVerification: 'Verified Mobile Deployment • Production App Store Active',
    },
    {
      id: 'the-spice-story',
      client: 'The Spice Story',
      industry: 'Fine Dining & Hospitality POS',
      icon: UtensilsCrossed,
      tagline: 'Restaurant Web Presence & Direct Reservation Engine',
      overview:
        'Created a fast online booking system with digital menu sync and automated SMS confirmations with zero 3rd-party fees.',
      problem: 'Heavy reliance on third-party aggregators resulted in 18-25% commission fees per booking and loss of customer data.',
      solution: 'High-speed web app with real-time table management, dynamic digital menu syncer, and instant SMS / WhatsApp reservation confirmations with direct ownership of all guest data.',
      architecture: 'React 18 → Cloudflare Edge → Twilio SMS / WhatsApp → POS Database',
      stack: ['React 18', 'Tailwind CSS', 'Twilio SMS', 'PostgreSQL', 'Cloudflare'],
      results: [
        'Direct table bookings with zero commission fees',
        'Instant automated SMS & WhatsApp confirmations',
        'Fast mobile menu access (Lighthouse 99 performance)'
      ],
      clientVerification: 'Verified Hospitality Platform • Multi-Location Active',
    },
  ];

  return (
    <section id="work" className="py-20 bg-[#f9f9fa] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-slate-800 text-[11px] font-bold tracking-wider uppercase mb-3 shadow-sm">
            <span>Case Studies</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#09090b] tracking-tight">
            Real Systems. <span className="italic font-serif">Real Businesses</span>.
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 font-normal">
            Click any deployment card to inspect the technical architecture and verified operational outcomes.
          </p>
        </div>

        {/* 3 Interactive Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                onClick={() => setActiveModal(project)}
                className="bento-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between bg-white cursor-pointer hover:ring-2 hover:ring-brand-600/40 hover:-translate-y-1 transition-all duration-300 group shadow-bento"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
                      {project.industry}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-[#09090b] group-hover:text-white flex items-center justify-center text-slate-800 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-serif text-2xl font-normal text-[#09090b] group-hover:text-brand-600 transition-colors">
                      {project.client}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  <p className="text-xs font-semibold text-brand-600 mb-2.5 tracking-wide">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                    {project.overview}
                  </p>

                  {/* Architecture Schematic */}
                  <div className="p-3 rounded-xl bg-[#09090b] text-white mb-4 border border-slate-800 font-mono text-xs">
                    <span className="text-[9px] text-brand-400 font-bold uppercase tracking-wider block mb-1 flex items-center gap-1">
                      <Workflow className="w-2.5 h-2.5" /> Pipeline Architecture
                    </span>
                    <p className="text-slate-300 leading-relaxed text-[10px]">
                      {project.architecture}
                    </p>
                  </div>

                  {/* Key Metrics / Results */}
                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80 mb-4 space-y-1.5">
                    {project.results.map((res, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-900 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 mt-0.5 shrink-0" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.stack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600 text-[10px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="rounded-xl bg-slate-100 group-hover:bg-[#09090b] text-slate-800 group-hover:text-white p-3 flex items-center justify-between transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center text-white">
                        <Play className="w-2.5 h-2.5 ml-0.5 fill-white" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold">Inspect Case Study Details</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Modal for Deployment Verification Details */}
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-600 block">
                    {activeModal.industry}
                  </span>
                  <h4 className="font-serif text-2xl sm:text-3xl font-normal text-slate-950">
                    {activeModal.client}
                  </h4>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-semibold mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{activeModal.clientVerification}</span>
              </div>

              {/* Problem & Solution Breakdown */}
              <div className="space-y-4 mb-6">
                <div>
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-1">
                    Operational Challenge
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                    {activeModal.problem}
                  </p>
                </div>

                <div>
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-1">
                    Engineered Solution
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                    {activeModal.solution}
                  </p>
                </div>
              </div>

              {/* Architecture Blueprint */}
              <div className="p-4 rounded-2xl bg-[#09090b] text-white mb-6 border border-slate-800 font-mono">
                <span className="text-[10px] text-brand-400 font-bold uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                  <Workflow className="w-3.5 h-3.5" /> Pipeline Architecture
                </span>
                <p className="text-slate-200 text-xs leading-relaxed">
                  {activeModal.architecture}
                </p>
              </div>

              {/* Video Case Study Notice */}
              <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-xs flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Deep-dive testimonial video with Co-Founder Chakrashen Maurya coming soon.</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
                <a
                  href="#contact"
                  onClick={() => setActiveModal(null)}
                  className="px-5 py-2.5 text-xs font-bold rounded-full bg-[#09090b] text-white hover:bg-brand-600 transition-colors"
                >
                  Deploy Similar System
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2.5 text-xs font-semibold rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
