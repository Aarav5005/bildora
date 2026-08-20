import React from 'react';
import { ArrowUp, Mail, Linkedin, Github } from 'lucide-react';

export default function Footer({ onOpenCalendly }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090b] text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="inline-flex items-center gap-2.5 group">
              <div className="w-7 h-7 text-brand-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current transition-transform group-hover:rotate-45 duration-300">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                Bildora
              </span>
            </a>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              Autonomous AI engineering agency architecting voice agents, bespoke ERPs, and deterministic workflow pipelines for global enterprises.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-brand-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
                HEADQUARTERED IN INDIA • SERVING GLOBALLY
              </span>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Process & SLAs
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Founder & Ethos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Intake
                </a>
              </li>
            </ul>
          </div>

          {/* Services List (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  AI Workflow & Data Automation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  AI Conversational Voice Agents
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Enterprise Web & App Platforms
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Custom ERP & Operations Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Edge Computer Vision AI
                </a>
              </li>
            </ul>
          </div>

          {/* Direct CTA (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 mb-4">
                Correspondence
              </h4>
              <a
                href="mailto:contact@bildora.in"
                className="font-mono text-sm text-slate-300 hover:text-brand-400 transition-colors block mb-3"
              >
                HELLO@BILDORA.IN
              </a>
            </div>

            <button
              type="button"
              onClick={onOpenCalendly}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-[#09090b] bg-white hover:bg-slate-200 transition-colors cursor-pointer shadow-sm mt-4"
            >
              <span>Book Discovery</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© 2025 Bildora. All rights reserved. Founded by Aarav Panchal.</p>
          
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
              aria-label="Bildora on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
              aria-label="Bildora on GitHub"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors ml-2 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
