import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Sparkles } from 'lucide-react';
import SpecularButton from './SpecularButton';

export default function Navbar({ onOpenCalendly, currency, setCurrency }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'How We Work', href: '#process' },
    { name: 'Case Studies', href: '#work' },
    { name: 'Why Bildora', href: '#why-bildora' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#f9f9fa]/90 backdrop-blur-md py-3.5 border-b border-slate-200/80 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Bildora Spark Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-7 h-7 text-brand-600 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current transition-transform group-hover:rotate-45 duration-300">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-display font-extrabold text-xl tracking-tight text-[#09090b]">
              Bildora
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-[#09090b] transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions: Currency Selector + SpecularButton CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Minimal Currency Switcher */}
            <div className="flex items-center bg-white p-0.5 rounded-full border border-slate-200/90 text-xs font-semibold text-slate-600 shadow-sm">
              <button
                type="button"
                onClick={() => setCurrency('INR')}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  currency === 'INR'
                    ? 'bg-[#09090b] text-white'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                ₹ INR
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  currency === 'USD'
                    ? 'bg-[#09090b] text-white'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                $ USD
              </button>
            </div>

            {/* SpecularButton for Navbar */}
            <SpecularButton
              size="sm"
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
              <span>Book a call</span>
            </SpecularButton>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setCurrency(currency === 'INR' ? 'USD' : 'INR')}
              className="px-2 py-1 text-xs font-bold rounded-md bg-white text-slate-700 border border-slate-200"
            >
              {currency === 'INR' ? '₹ INR' : '$ USD'}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f9f9fa] border-b border-slate-200 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-brand-600 py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalendly();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold text-white bg-[#09090b] hover:bg-brand-600 shadow-sm"
              >
                <span>Book a call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
