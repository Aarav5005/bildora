import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function FAQ({ onOpenCalendly }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How fast can you build and deploy an AI automation or voice bot?',
      a: 'Most workflow automations and voice agents are delivered in 7 to 14 days. Custom ERPs and vision systems typically take 3 to 6 weeks with weekly milestone demos.',
    },
    {
      q: 'How does your pricing work?',
      a: 'Workflows start from ₹8,000 / $200. Larger platforms are scoped with transparent, upfront fixed quotes based on your tools and requirements.',
    },
    {
      q: 'Can you integrate with our existing legacy tools and databases?',
      a: 'Yes. We build custom API connectors for Shopify, Tally, Zoho, Salesforce, QuickBooks, HubSpot, SAP, and custom PostgreSQL databases.',
    },
    {
      q: 'Do we own 100% of the code and intellectual property?',
      a: 'Yes, completely. All custom source code, configurations, and database schemas belong 100% to your company with zero ongoing license fees.',
    },
    {
      q: 'How is confidential business and customer data protected?',
      a: 'We use zero-retention AI endpoints, encrypted credential vaults, and private database VPCs. Your data is never used to train public models.',
    },
    {
      q: 'Do you work with businesses outside India?',
      a: 'Yes. We actively work with clients across North America, the UK, Europe, the UAE, and Asia with cross-timezone communication.',
    },
  ];

  const toggle = (i) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <section className="py-20 bg-[#f9f9fa] border-b border-slate-200/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-slate-800 text-[11px] font-bold tracking-wider uppercase mb-3 shadow-sm">
            <span>FAQ</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#09090b] tracking-tight">
            Frequently Asked <span className="italic font-serif">Questions</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-normal">
            Quick answers on timelines, pricing, and IP ownership.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="bento-card rounded-2xl bg-white overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-serif text-lg sm:text-xl font-normal text-[#09090b]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-brand-50 text-brand-600' : ''
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick CTA */}
        <div className="mt-10 text-center p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-base font-normal text-[#09090b]">Have a specific workflow question?</h4>
            <p className="text-xs text-slate-500 font-normal">Ask Aarav directly during your 30-minute discovery call.</p>
          </div>
          <button
            type="button"
            onClick={onOpenCalendly}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#09090b] hover:bg-brand-600 transition-colors shrink-0 cursor-pointer shadow-sm"
          >
            <span>Book a Call</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </section>
  );
}
