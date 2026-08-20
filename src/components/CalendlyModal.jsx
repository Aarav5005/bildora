import React, { useEffect } from 'react';
import { X, Calendar, Clock, Video, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';
import SpecularButton from './SpecularButton';

export default function CalendlyModal({ isOpen, onClose }) {
  const calendlyUrl = "https://calendly.com/aarav55aman55/30min?hide_gdpr_banner=1&primary_color=0052ff&text_color=09090b";

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-7 bg-[#09090b] text-white flex items-start justify-between relative overflow-hidden border-b border-slate-800">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-600/20 blur-3xl rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-slate-200 text-xs font-mono mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
              <span>Direct Discovery Calendar</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
              Schedule a Session with <span className="italic font-serif">Aarav</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-lg font-normal">
              30-minute 1-on-1 architecture consultation to evaluate operational bottlenecks and define your custom AI scope.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors relative z-10 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Calendly Embedded Scheduler */}
        <div className="flex-1 overflow-y-auto min-h-[480px] bg-white relative">
          <iframe
            src={calendlyUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a 30-Minute Meeting with Aarav"
            className="w-full h-full min-h-[500px] border-0"
          />
        </div>

        {/* Footer fallback link */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-medium text-slate-700">Live Real-Time Availability (Asia/Calcutta)</span>
          </div>
          <a
            href="https://calendly.com/aarav55aman55/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700 font-semibold transition-colors"
          >
            <span>Open in Calendly Window</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
