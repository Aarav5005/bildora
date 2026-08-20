import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, DollarSign, Clock, Users, Sparkles } from 'lucide-react';
import SpecularButton from './SpecularButton';

export default function RoiCalculator({ currency, onOpenCalendly, onSelectService }) {
  const [teamSize, setTeamSize] = useState(6);
  const [hoursPerWeek, setHoursPerWeek] = useState(12);
  const [hourlyRateUSD, setHourlyRateUSD] = useState(35);
  const [hourlyRateINR, setHourlyRateINR] = useState(1200);

  // Calculations
  const totalWeeklyHours = teamSize * hoursPerWeek;
  const annualHoursSaved = Math.round(totalWeeklyHours * 50 * 0.75); // 75% automation efficiency

  const hourlyRate = currency === 'INR' ? hourlyRateINR : hourlyRateUSD;
  const annualCostSaved = annualHoursSaved * hourlyRate;

  const formattedCost = currency === 'INR'
    ? `₹${annualCostSaved.toLocaleString('en-IN')}`
    : `$${annualCostSaved.toLocaleString('en-US')}`;

  const implementationStartingCost = currency === 'INR' ? '₹8,000' : '$200';

  return (
    <section className="py-24 bg-[#f9f9fa] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-slate-800 text-[11px] font-bold tracking-wider uppercase mb-3 shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-brand-600" />
            <span>Interactive ROI Simulator</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#09090b] tracking-tight">
            Calculate your <span className="italic font-serif">operational savings</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            See how much operational capital and team bandwidth Bildora AI systems reclaim for your business every year.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Sliders (7 Cols) */}
          <div className="lg:col-span-7 bento-card rounded-3xl p-7 sm:p-10 bg-white space-y-8">
            
            {/* Slider 1: Team Members */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand-600" />
                  <span>Team members performing manual tasks:</span>
                </label>
                <span className="font-mono font-bold text-sm text-[#09090b] bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                  {teamSize} {teamSize === 1 ? 'person' : 'people'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-mono">
                <span>1 Person</span>
                <span>15 People</span>
                <span>30+ People</span>
              </div>
            </div>

            {/* Slider 2: Hours spent per week */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-600" />
                  <span>Hours spent on repetitive tasks (per person/wk):</span>
                </label>
                <span className="font-mono font-bold text-sm text-[#09090b] bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                  {hoursPerWeek} hrs/week
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="35"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-mono">
                <span>2 hrs/wk (Light)</span>
                <span>15 hrs/wk (Bottleneck)</span>
                <span>35 hrs/wk (Full-time manual)</span>
              </div>
            </div>

            {/* Slider 3: Hourly Labor Cost */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-brand-600" />
                  <span>Estimated average loaded hourly rate:</span>
                </label>
                <span className="font-mono font-bold text-sm text-[#09090b] bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                  {currency === 'INR' ? `₹${hourlyRateINR}/hr` : `$${hourlyRateUSD}/hr`}
                </span>
              </div>
              {currency === 'INR' ? (
                <input
                  type="range"
                  min="300"
                  max="4000"
                  step="100"
                  value={hourlyRateINR}
                  onChange={(e) => setHourlyRateINR(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />
              ) : (
                <input
                  type="range"
                  min="10"
                  max="120"
                  step="5"
                  value={hourlyRateUSD}
                  onChange={(e) => setHourlyRateUSD(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />
              )}
              <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-mono">
                <span>{currency === 'INR' ? '₹300/hr' : '$10/hr'}</span>
                <span>{currency === 'INR' ? '₹2,000/hr' : '$60/hr'}</span>
                <span>{currency === 'INR' ? '₹4,000+/hr' : '$120+/hr'}</span>
              </div>
            </div>

          </div>

          {/* Results Output Card (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl p-8 sm:p-10 bg-[#09090b] text-white border border-slate-800 shadow-2xl relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-400">
                  Projected ROI Output
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 text-xs font-semibold border border-emerald-800/80">
                  75% Efficiency Recovery
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-400 block mb-1">Estimated Annual Capital Saved:</span>
                <p className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
                  {formattedCost}
                </p>
                <span className="text-xs text-brand-300 font-medium mt-1 block">
                  Reclaimed back into profit margins & growth
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">Annual Hours Saved</span>
                  <span className="font-mono font-bold text-lg text-white">
                    {annualHoursSaved.toLocaleString()} hrs
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">Payback Horizon</span>
                  <span className="font-mono font-bold text-lg text-emerald-400">
                    &lt; 21 Days
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Bildora systems start from just <strong className="text-white font-semibold">{implementationStartingCost}</strong> with zero recurring seat fees.
              </p>
            </div>

            <div className="pt-6 flex justify-center">
              <SpecularButton
                size="lg"
                radius={999}
                tint="#ffffff"
                tintOpacity={1}
                textColor="#09090b"
                lineColor="#3b82f6"
                baseColor="#e2e8f0"
                intensity={1.4}
                shineSize={12}
                shineFade={45}
                thickness={1.2}
                followMouse={true}
                proximity={250}
                className="w-full"
                onClick={onOpenCalendly}
              >
                <span>Automate This Workflow</span>
                <ArrowRight className="w-4 h-4" />
              </SpecularButton>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
