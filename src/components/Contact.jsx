import React, { useState } from 'react';
import { 
  Send, 
  Calendar, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact({ onOpenCalendly, selectedService = '', currency = 'INR' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    country: 'India',
    service: selectedService || 'AI Workflow & Data Automation',
    budget: currency === 'INR' ? '₹20,000 - ₹50,000' : '$500 - $1,500',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  React.useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const budgetOptions = currency === 'INR' ? [
    '₹8,000 - ₹20,000',
    '₹20,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000+',
  ] : [
    '$200 - $500',
    '$500 - $1,500',
    '$1,500 - $3,500',
    '$3,500+',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please provide your name, work email, and a brief description of what you want to automate.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mgawdvwo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          businessName: formData.businessName,
          country: formData.country,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
          _subject: `New Bildora Project Inquiry: ${formData.name} (${formData.businessName || formData.country})`,
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#0052ff', '#3b82f6', '#93c5fd', '#10b981'],
          });
        } catch (err) {}
      } else {
        const data = await response.json();
        setIsSubmitting(false);
        if (data && data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map((err) => err.message).join(', '));
        } else {
          setErrorMessage('There was an issue submitting your inquiry. Please try again or email us directly at admin@bildora.in');
        }
      }
    } catch (err) {
      setIsSubmitting(false);
      setErrorMessage('Network connection error. Please try again or email us directly at admin@bildora.in');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#f9f9fa] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-slate-800 text-[11px] font-bold tracking-wider uppercase mb-3 shadow-sm">
            <span>Get in Touch</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#09090b] tracking-tight">
            Have a process <span className="italic font-serif">worth automating</span>?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Tell us what you're trying to improve. We'll review your workflow and assess where software or AI can genuinely help.
          </p>
        </div>

        {/* Dual Intake Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Path 1: Project Intake Form */}
          <div className="lg:col-span-7 bento-card rounded-3xl bg-white p-7 sm:p-10">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
              <div>
                <h3 className="font-serif text-2xl font-normal text-[#09090b]">
                  Get a Technical Assessment
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 font-normal">
                  Receive a structured technical review, timeline estimate, and milestone quote.
                </p>
              </div>
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                ● Replies within 24 hrs
              </span>
            </div>

            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-3xl font-normal text-[#09090b] mb-2">
                  Inquiry Received
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 font-normal leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Aarav and our engineering team will review your workflow details and respond at <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      businessName: '',
                      country: 'India',
                      service: 'AI Workflow & Data Automation',
                      budget: currency === 'INR' ? '₹20,000 - ₹50,000' : '$500 - $1,500',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 text-xs font-semibold rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                action="https://formspree.io/f/mgawdvwo" 
                method="POST" 
                className="space-y-5"
              >
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Name <span className="text-brand-600">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#09090b] focus:border-transparent transition-all placeholder:text-slate-400 bg-[#fbfbfb]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Work Email <span className="text-brand-600">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#09090b] focus:border-transparent transition-all placeholder:text-slate-400 bg-[#fbfbfb]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-business" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      id="contact-business"
                      name="businessName"
                      type="text"
                      autoComplete="organization"
                      placeholder="e.g. Acme Enterprises"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#09090b] focus:border-transparent transition-all placeholder:text-slate-400 bg-[#fbfbfb]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-country" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Country / Region
                    </label>
                    <input
                      id="contact-country"
                      name="country"
                      type="text"
                      autoComplete="country-name"
                      placeholder="e.g. India, UAE, USA, UK"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#09090b] focus:border-transparent transition-all placeholder:text-slate-400 bg-[#fbfbfb]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Service of Interest
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#09090b] focus:border-transparent transition-all bg-[#fbfbfb]"
                  >
                    <option value="AI Workflow & Data Automation">AI Workflow & Data Automation</option>
                    <option value="AI Conversational Voice Agents">AI Conversational Voice Agents</option>
                    <option value="Web & App Development">Web & App Development</option>
                    <option value="ERP & Business Systems">ERP & Business Systems</option>
                    <option value="Computer Vision & AI Cameras">Computer Vision & AI Cameras</option>
                    <option value="Full Architecture Deployment">Full Architecture Deployment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Estimated Project Budget
                  </label>
                  <input type="hidden" name="budget" value={formData.budget} />
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetOptions.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`py-2 px-2.5 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                          formData.budget === b
                            ? 'bg-[#09090b] border-[#09090b] text-white shadow-sm'
                            : 'border-slate-200 text-slate-600 hover:border-slate-400 bg-[#fbfbfb]'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Describe what you'd like to improve <span className="text-brand-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Briefly describe the repetitive task or workflow bottleneck you want to automate, and which tools you currently use..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#09090b] focus:border-transparent transition-all placeholder:text-slate-400 resize-none bg-[#fbfbfb]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full text-sm font-bold text-white bg-[#09090b] hover:bg-brand-600 active:scale-[0.99] transition-all duration-200 shadow-sm disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Technical Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Path 2: Live Discovery Scheduler */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-3xl bg-[#09090b] text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-600/15 blur-2xl rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center mb-6">
                  <Calendar className="w-6 h-6" />
                </div>

                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-400 block mb-1">
                  Direct Strategy Call
                </span>
                <h3 className="font-serif text-3xl font-normal text-white mb-3">
                  Prefer a live discussion?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  Schedule a 30-minute discovery call directly on Aarav's calendar to explore your workflow bottlenecks and evaluate automation ROI in real time.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <Clock className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>30 Minutes • Live Google Meet / Zoom</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Technical feasibility and timeline breakdown</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onOpenCalendly}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full text-sm font-bold text-[#09090b] bg-white hover:bg-slate-100 transition-all duration-200 shadow-md group cursor-pointer"
                >
                  <span>Book a Discovery Call</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Direct Email & WhatsApp Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bento-card rounded-3xl bg-white p-6">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Email Correspondence
                </span>
                <a
                  href="mailto:admin@bildora.in"
                  className="font-mono text-sm font-bold text-[#09090b] hover:text-brand-600 transition-colors block"
                >
                  ADMIN@BILDORA.IN
                </a>
                <p className="text-[11px] text-slate-500 mt-1 font-normal">
                  For RFPs & scoping documents.
                </p>
              </div>

              <div className="bento-card rounded-3xl bg-white p-6">
                <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-wider block mb-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Direct WhatsApp
                </span>
                <a
                  href="https://wa.me/918882558262?text=Hello%20Bildora!%20I%20would%20like%20to%20discuss%20an%20automation%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm font-bold text-[#09090b] hover:text-emerald-600 transition-colors block"
                >
                  +91 88825 58262
                </a>
                <p className="text-[11px] text-slate-500 mt-1 font-normal">
                  Instant response & chats.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
