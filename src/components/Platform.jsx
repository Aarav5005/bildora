import React from 'react';
import {
  Network, ClipboardList, Boxes, Factory, Truck, Receipt, LineChart,
  MessageCircle, Phone, Mail, FileText, Plug,
  Lock, ScrollText, UserCheck, AlertTriangle,
} from 'lucide-react';

const modules = [
  {
    icon: Network,
    name: 'Orchestrator / Operations Manager',
    desc: 'Interprets requests, coordinates work, tracks status, and requests approvals.',
  },
  {
    icon: ClipboardList,
    name: 'Order module',
    desc: 'Extracts order details from incoming channels and prepares structured drafts.',
  },
  {
    icon: Boxes,
    name: 'Inventory module',
    desc: 'Checks available stock, material requirements, and possible shortages.',
  },
  {
    icon: Factory,
    name: 'Production module',
    desc: 'Organizes job status, dependencies, and potential delays.',
  },
  {
    icon: Truck,
    name: 'Procurement module',
    desc: 'Prepares purchase requests and compares approved suppliers.',
  },
  {
    icon: Receipt,
    name: 'Accounts module',
    desc: 'Extracts invoice details and checks them against available order records.',
  },
  {
    icon: LineChart,
    name: 'Owner insights module',
    desc: 'Summarizes pending orders, risks, and exceptions for review.',
  },
];

const channels = [
  { icon: MessageCircle, label: 'WhatsApp' },
  { icon: Phone, label: 'Voice' },
  { icon: Mail, label: 'Email' },
  { icon: FileText, label: 'PDF' },
  { icon: Plug, label: 'Existing software' },
];

const controls = [
  { icon: Lock, label: 'Company-specific permissions' },
  { icon: ScrollText, label: 'Audit logs' },
  { icon: UserCheck, label: 'Human approval for consequential actions' },
  { icon: AlertTriangle, label: 'Error handling' },
];

export default function Platform() {
  return (
    <section id="platform" className="py-20 sm:py-24 bg-[#f9f9fa] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-slate-800 text-[11px] font-bold tracking-wider uppercase mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse" />
            <span>The Platform · In Development</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#09090b] tracking-tight">
            One system. <span className="italic font-serif">Specialized modules.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            This is the architecture we&apos;re building toward — not a claim that every module is live. We&apos;re starting with one workflow and speaking with manufacturers to understand what is valuable enough to test and pay for. Initially, capabilities will be coordinated as modules under one orchestrator.
          </p>
        </div>

        {/* Input Channels */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mr-1">
            Input channels:
          </span>
          {channels.map((c) => {
            const Icon = c.icon;
            return (
              <span
                key={c.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/90 text-sm font-medium text-slate-700 shadow-sm"
              >
                <Icon className="w-4 h-4 text-slate-500" />
                {c.label}
              </span>
            );
          })}
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {modules.map((m) => {
            const Icon = m.icon;
            const isWide = m.name.startsWith('Orchestrator');
            return (
              <div
                key={m.name}
                className={`bento-card rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/80 shadow-bento ${isWide ? 'md:col-span-2 lg:col-span-1 border-brand-600/30 ring-1 ring-brand-600/20' : ''}`}
              >
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-4 ${isWide ? 'bg-[#09090b] text-white' : 'bg-slate-100 text-slate-800'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-normal text-[#09090b] mb-2">
                  {m.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {m.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Shared Controls */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#09090b] text-white p-8 sm:p-10">
          <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mb-2 text-center">
            Shared controls we intend to build
          </h3>
          <p className="text-sm text-slate-400 text-center mb-8 font-normal">
            Your company&apos;s data stays yours — separated from every other business on the platform.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {controls.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10">
                  <Icon className="w-4 h-4 text-slate-300 shrink-0" />
                  <span className="text-sm text-slate-200 font-normal">{c.label}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
