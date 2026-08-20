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
      {/* Sticky Glassmorphic Navigation */}
      <Navbar
        onOpenCalendly={handleOpenCalendly}
        currency={currency}
        setCurrency={setCurrency}
      />

      {/* Main Experience Flow */}
      <main className="flex-grow">
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

      {/* Calendly Booking Overlay */}
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={handleCloseCalendly}
      />
    </div>
  );
}
