import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Smartphone, 
  UtensilsCrossed, 
  Play, 
  CheckCircle2, 
  ArrowUpRight, 
  Video, 
  Workflow 
} from 'lucide-react';

export default function CaseStudies() {
  const [activeModal, setActiveModal] = useState(null);

  const projects = [
    {
      id: 'asportszone',
      client: 'AsportsZone',
      industry: 'E-Commerce & Logistics',
      icon: ShoppingBag,
      tagline: 'Headless Shopify & Automated Warehouse Dispatch',
      overview:
        'Engineered automated order-to-warehouse dispatch, multi-channel inventory sync, and instant 3PL carrier hooks.',
      architecture: 'Shopify Webhooks → FastAPI Queue → Inventory Sync → 3PL API',
      stack: ['Shopify Liquid', 'FastAPI', 'Tally ERP', 'Klaviyo'],
      results: [
        'Automated order-to-warehouse dispatch',
        'Real-time multi-channel inventory sync',
        'Sub-second page loading on mobile'
      ],
      clientVerification: 'Verified E-Commerce Deployment • Active Production System',
    },
    {
      id: 'moxvox',
      client: 'MOX VOX',
      industry: 'Mobile & Communications',
      icon: Smartphone,
      tagline: 'Flutter Mobile App & Automated WhatsApp Flow',
      overview:
        'Built cross-platform iOS & Android mobile apps with integrated WhatsApp Cloud API customer follow-up pipelines.',
      architecture: 'Flutter App → Supabase DB → WhatsApp API → Webhook Router',
      stack: ['Flutter 3.x', 'Supabase', 'WhatsApp API', 'Twilio'],
      results: [
        'Sub-15s automated customer response',
        'Unified iOS & Android mobile client',
        'Automated review collection triggers'
      ],
      clientVerification: 'Verified Mobile Deployment • Production App Store Active',
    },
    {
      id: 'the-spice-story',
      client: 'The Spice Story',
      industry: 'Hospitality POS',
      icon: UtensilsCrossed,
      tagline: 'Restaurant Web Presence & Direct Reservation Engine',
      overview:
        'Created a fast online booking system with digital menu sync and automated SMS confirmations with zero 3rd-party fees.',
      architecture: 'React 18 → Cloudflare Edge → Twilio SMS → POS Database',
      stack: ['React 18', 'Tailwind CSS', 'Twilio SMS', 'PostgreSQL'],
      results: [
        'Direct table bookings with zero commission',
        'Instant automated SMS confirmations',
        'Fast mobile menu access (Lighthouse 99)'
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
            Software architectures engineered to eliminate bottlenecks and enable scale.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="bento-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between bg-white"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
                      {project.industry}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif text-2xl font-normal text-[#09090b] mb-1">
                    {project.client}
                  </h3>
                  <p className="text-xs font-semibold text-brand-600 mb-2.5 tracking-wide">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                    {project.overview}
                  </p>

                  {/* Architecture Schematic */}
                  <div className="p-3 rounded-xl bg-[#09090b] text-white mb-4 border border-slate-800 font-mono text-xs">
                    <span className="text-[9px] text-brand-400 font-bold uppercase tracking-wider block mb-1 flex items-center gap-1">
                      <Workflow className="w-2.5 h-2.5" /> Architecture
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

                {/* Verification Action */}
                <div className="pt-3 border-t border-slate-100">
                  <div 
                    onClick={() => setActiveModal(project)}
                    className="cursor-pointer rounded-xl bg-[#09090b] text-white p-3 flex items-center justify-between hover:bg-slate-900 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center text-white">
                        <Play className="w-2.5 h-2.5 ml-0.5 fill-white" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">Verified Deployment</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Modal for Deployment Verification Details */}
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative">
              <div className="w-10 h-10 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-3">
                <Video className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-2xl font-normal text-slate-950 mb-1">
                {activeModal.client}
              </h4>
              <p className="text-xs text-brand-600 font-semibold mb-2">
                {activeModal.clientVerification}
              </p>
              <p className="text-xs text-slate-600 mb-5 leading-relaxed font-normal">
                Full production source code, architecture schema, and system integration details available upon technical discovery call.
              </p>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2 text-xs font-semibold rounded-full bg-[#09090b] text-white hover:bg-brand-600 transition-colors cursor-pointer"
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
