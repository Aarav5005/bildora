import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, ShoppingBag, Smartphone, UtensilsCrossed } from 'lucide-react';
import RippleDistortion from './RippleDistortion';
import SpecularButton from './SpecularButton';

export default function Hero({ onOpenCalendly }) {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      setTimeStr(`${hours}:${mins}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] lg:min-h-[96vh] flex flex-col justify-between pt-28 pb-8 lg:pt-32 lg:pb-10 overflow-hidden bg-[#f9f9fa]">
      {/* 1. Interactive RippleDistortion Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 select-none opacity-25 hover:opacity-40 transition-opacity duration-700 pointer-events-auto">
        <RippleDistortion
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
          brushSize={95}
          strength={0.04}
          swirl={0.4}
          rings={2.5}
          spread={3.6}
          fade={2.0}
          spacing={12}
          dispersion={0.02}
          glint={0.12}
          tint="#0052ff"
          tintAmount={0.10}
          grayscale={false}
          highlightColor="#ffffff"
          trigger="both"
          clickStrength={2.0}
          quality="high"
        />
      </div>

      {/* 2. Top & Bottom Dissolves */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f9f9fa] via-[#f9f9fa]/70 to-transparent pointer-events-none z-[1]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f9f9fa] via-[#f9f9fa]/85 to-transparent pointer-events-none z-[1]" />

      {/* 3. Main Center Editorial Headline */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-10 my-auto py-6">
        
        {/* Geographic & Trust Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 text-slate-800 text-[11px] font-bold tracking-wider uppercase mb-5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse" />
          <span>India-based • Serving businesses worldwide</span>
        </div>

        {/* Crisp Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-[72px] font-normal text-[#09090b] tracking-tight leading-[1.08] max-w-3xl mx-auto mb-4">
          AI Automation & Business Systems <span className="italic font-serif">Built for Scale</span>
        </h1>

        {/* Short, Punchy 1-Sentence Subtitle */}
        <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
          We design and build AI voice agents, custom ERPs, and workflow automations that eliminate repetitive manual operations.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-10">
          <SpecularButton
            size="lg"
            radius={999}
            tint="#09090b"
            tintOpacity={1}
            textColor="#ffffff"
            lineColor="#60a5fa"
            baseColor="#1e293b"
            intensity={1.3}
            shineSize={12}
            shineFade={45}
            thickness={1.2}
            followMouse={true}
            proximity={250}
            onClick={onOpenCalendly}
          >
            <span>Book a Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </SpecularButton>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 transition-all duration-200 shadow-sm"
          >
            <span>Explore Services</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* Minimal Client Strip */}
        <div className="pt-5 border-t border-slate-200/60 max-w-2xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-slate-600 text-xs font-medium">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-3.5 h-3.5 text-slate-700" />
              <span className="font-semibold text-slate-900">AsportsZone</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-2">
              <Smartphone className="w-3.5 h-3.5 text-slate-700" />
              <span className="font-semibold text-slate-900">MOX VOX</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="w-3.5 h-3.5 text-slate-700" />
              <span className="font-semibold text-slate-900">The Spice Story</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Metadata Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-medium text-slate-500 pb-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-slate-900 font-semibold">GMT+5:30 {timeStr || '18:30'}</span>
            <span className="text-slate-300">•</span>
            <span>INDIA & WORLDWIDE</span>
          </div>

          <a
            href="mailto:contact@bildora.in"
            className="font-mono text-slate-900 hover:text-brand-600 tracking-wider uppercase font-semibold transition-colors"
          >
            HELLO@BILDORA.IN
          </a>
        </div>
      </div>

    </section>
  );
}
