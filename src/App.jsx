import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStackTicker from './components/TechStackTicker';
import Services from './components/Services';
import RoiCalculator from './components/RoiCalculator';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import Comparison from './components/Comparison';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CalendlyModal from './components/CalendlyModal';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [currency, setCurrency] = useState('INR');
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenCalendly = () => {
    setIsCalendlyOpen(true);
  };

  const handleCloseCalendly = () => {
    setIsCalendlyOpen(false);
  };

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-brand-600 selection:text-white">
      {/* Skip to Main Content Accessibility Link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#09090b] focus:text-white focus:rounded-xl focus:shadow-xl focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Sticky Glassmorphic Navigation */}
      <Navbar
        onOpenCalendly={handleOpenCalendly}
        currency={currency}
        setCurrency={setCurrency}
      />

      {/* Main Experience Flow */}
      <main id="main" className="flex-grow">
        <Hero onOpenCalendly={handleOpenCalendly} />
        <TechStackTicker />
        <Services currency={currency} onSelectService={handleSelectService} />
        <RoiCalculator
          currency={currency}
          onOpenCalendly={handleOpenCalendly}
          onSelectService={handleSelectService}
        />
        <Process onOpenCalendly={handleOpenCalendly} />
        <CaseStudies />
        <Comparison onOpenCalendly={handleOpenCalendly} />
        <About onOpenCalendly={handleOpenCalendly} />
        <FAQ onOpenCalendly={handleOpenCalendly} />
        <Contact
          onOpenCalendly={handleOpenCalendly}
          selectedService={selectedService}
          currency={currency}
        />
      </main>

      {/* Footer */}
      <Footer onOpenCalendly={handleOpenCalendly} />

      {/* Floating WhatsApp Quick-Chat Widget */}
      <WhatsAppButton phoneNumber="918882558262" />

      {/* Calendly Booking Overlay */}
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={handleCloseCalendly}
      />
    </div>
  );
}
