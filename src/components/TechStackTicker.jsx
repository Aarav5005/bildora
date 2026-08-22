import React from 'react';
import { Cpu, Zap, Bot, Database, Code2, Globe, Shield, Terminal, Sparkles } from 'lucide-react';

export default function TechStackTicker() {
  const clients = [
    { name: 'AsportsZone', sector: 'E-Commerce' },
    { name: 'MOX VOX', sector: 'Mobile & Voice' },
    { name: 'The Spice Story', sector: 'Hospitality' },
    { name: 'CoreOS Systems', sector: 'Infrastructure' },
    { name: 'Warpspeed AI', sector: 'Logistics' },
    { name: 'Ikigai Labs', sector: 'Analytics' },
    { name: 'Visionwork AI', sector: 'Computer Vision' },
    { name: 'Convergence AI', sector: 'Enterprise SaaS' },
  ];

  return (
    <div className="py-14 bg-[#f7f7f8] border-b border-slate-200/80 relative overflow-hidden max-w-full select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-[11px] font-bold tracking-wider uppercase mb-2 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse" />
            <span>Trusted Global Ecosystem</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-slate-950 font-normal tracking-tight">
            Trusted by fast-growing enterprises
          </h3>
        </div>
        <p className="text-xs text-slate-500 max-w-xs font-normal">
          Deploying autonomous intelligence across North America, Europe, UAE, and India.
        </p>
      </div>

      {/* Marquee Logo Strip */}
      <div className="relative w-full max-w-full overflow-hidden flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#f7f7f8] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#f7f7f8] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {[...clients, ...clients].map((client, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 transition-all text-sm font-semibold text-slate-800 shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-brand-600" />
              <span className="font-display font-extrabold tracking-tight text-slate-900">{client.name}</span>
              <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 font-normal">
                {client.sector}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
