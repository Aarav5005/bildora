import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Mic2, 
  Globe2, 
  Layers, 
  Camera, 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  Pause, 
  Volume2, 
  Terminal, 
  Gauge, 
  Database, 
  Activity 
} from 'lucide-react';
import SpecularButton from './SpecularButton';

export default function Services({ currency, onSelectService }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);
  const [isSimulatingFlow, setIsSimulatingFlow] = useState(false);

  useEffect(() => {
    let interval;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsPlayingAudio(false);
            return 0;
          }
          return prev + 5;
        });
      }, 150);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio]);

  const [simulationLog, setSimulationLog] = useState('Idle: Ready to test pipeline');

  const triggerWorkflowSimulation = (e) => {
    e?.stopPropagation();
    setIsSimulatingFlow(true);
    setActiveWorkflowStep(1);
    setSimulationLog('1/4: Ingesting Webhook Event...');
    
    setTimeout(() => {
      setActiveWorkflowStep(2);
      setSimulationLog('2/4: Parsing Payload & Documents...');
    }, 450);

    setTimeout(() => {
      setActiveWorkflowStep(3);
      setSimulationLog('3/4: Validating Schema & Business Rules...');
    }, 900);

    setTimeout(() => {
      setActiveWorkflowStep(4);
      setSimulationLog('4/4: Sync Complete → ERP Updated (380ms) ✓');
      setIsSimulatingFlow(false);
    }, 1400);
  };

  const services = [
    {
      id: 'ai-automation',
      number: '01',
      title: 'AI Workflow Automation',
      icon: Bot,
      description: 'Automate repetitive workflows, invoice extraction, and multi-tool database synchronizations.',
      priceINR: '₹8,000',
      priceUSD: '$200',
      specs: ['Custom API Webhooks', 'Document & Invoice Parsing', 'CRM & Database Sync'],
      previewType: 'workflow',
      span: 'lg:col-span-3',
    },
    {
      id: 'ai-voice-agents',
      number: '02',
      title: 'Conversational Voice AI',
      icon: Mic2,
      description: 'AI phone agents that handle customer inquiries, qualify leads, and book calendar appointments.',
      priceINR: '₹5,000',
      priceUSD: '$150',
      specs: ['Natural Voice Flow', 'Calendar Scheduling', 'Live Call Transfer'],
      previewType: 'voice',
      span: 'lg:col-span-3',
    },
    {
      id: 'web-app-dev',
      number: '03',
      title: 'Web & App Platforms',
      icon: Globe2,
      description: 'Custom React & Next.js web applications engineered for speed, SEO, and high conversions.',
      priceINR: '₹12,000',
      priceUSD: '$300',
      specs: ['Sub-Second Page Load', 'Secure Payment Flow', '100% Mobile Fluidity'],
      previewType: 'web',
      span: 'lg:col-span-2',
    },
    {
      id: 'erp-business-systems',
      number: '04',
      title: 'Custom ERP Systems',
      icon: Layers,
      description: 'Unified dashboards for inventory tracking, multi-branch operations, and automated GST billing.',
      priceINR: '₹40,000',
      priceUSD: '$900',
      specs: ['Live Inventory Ledgers', 'Role Permissions', 'Automated GST Invoicing'],
      previewType: 'erp',
      span: 'lg:col-span-2',
    },
    {
      id: 'ai-camera-systems',
      number: '05',
      title: 'Computer Vision AI',
      icon: Camera,
      description: 'Turn CCTV cameras into intelligent tools for footfall analytics, safety monitoring, and alerts.',
      priceINR: '₹20,000',
      priceUSD: '$500',
      specs: ['Local Edge Processing', 'Instant Event Alerts', 'Footfall Heatmaps'],
      previewType: 'vision',
      span: 'lg:col-span-2',
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#f9f9fa] relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-slate-800 text-[11px] font-bold tracking-wider uppercase mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse" />
            <span>Capabilities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#09090b] tracking-tight">
            Systems Built for <span className="italic font-serif">Business Outcomes</span>
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 font-normal">
            Custom software that integrates directly into your existing operational stack.
          </p>
        </div>

        {/* 6-Column Bento Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 items-stretch"
          onMouseLeave={() => setHoveredCard(null)}
        >
          {services.map((service) => {
            const Icon = service.icon;
            const price = currency === 'INR' ? service.priceINR : service.priceUSD;
            const isHovered = hoveredCard === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                className={`bento-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between bg-white transition-all duration-300 relative ${service.span} ${
                  isHovered
                    ? 'ring-2 ring-brand-600/30 shadow-bento-hover -translate-y-1'
                    : 'shadow-bento'
                }`}
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                        isHovered ? 'bg-[#09090b] text-white' : 'bg-slate-100 text-slate-800'
                      }`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {service.number}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[9px] uppercase font-mono tracking-wider text-slate-400 font-semibold block">From</span>
                      <span className="font-display font-extrabold text-base text-[#09090b]">
                        {price}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#09090b] mb-1.5 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                    {service.description}
                  </p>

                  {/* Micro-Consoles */}
                  {service.previewType === 'voice' && (
                    <div className="p-3 rounded-2xl bg-[#09090b] text-white mb-4 border border-slate-800">
                      <div className="flex items-center justify-between text-[10px] pb-1.5 mb-1.5 border-b border-slate-800">
                        <span className="flex items-center gap-1.5 text-slate-300 font-mono text-[10px]">
                          <Volume2 className="w-3 h-3 text-brand-400" /> Voice Stream
                        </span>
                        <span className="font-mono text-[9px] text-emerald-400">
                          ● Active
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsPlayingAudio(!isPlayingAudio);
                          }}
                          className="w-7 h-7 rounded-full bg-brand-600 hover:bg-brand-500 text-white flex items-center justify-center cursor-pointer shrink-0 transition-transform active:scale-95 shadow-sm"
                        >
                          {isPlayingAudio ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5 fill-white" />}
                        </button>
                        <div className="flex-1 flex items-center gap-1 h-5 bg-slate-900 px-2 rounded-lg border border-slate-800">
                          {[35, 70, 45, 90, 50, 80, 40, 95, 60, 75, 40, 85, 55, 90].map((h, i) => (
                            <div
                              key={i}
                              style={{ height: `${isPlayingAudio ? Math.max(25, (h * Math.random()).toFixed(0)) : h}%` }}
                              className={`flex-1 rounded-full transition-all duration-150 ${
                                (i / 14) * 100 <= audioProgress ? 'bg-brand-400' : 'bg-slate-700'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {service.previewType === 'workflow' && (
                    <div className="p-3 rounded-2xl bg-[#09090b] text-white mb-4 border border-slate-800">
                      <div className="flex items-center justify-between text-[10px] pb-1.5 mb-1.5 border-b border-slate-800">
                        <span className="flex items-center gap-1.5 text-slate-300 font-mono text-[10px]">
                          <Terminal className="w-3 h-3 text-brand-400" /> Auto-Pipeline
                        </span>
                        <button
                          type="button"
                          onClick={triggerWorkflowSimulation}
                          disabled={isSimulatingFlow}
                          className="text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white cursor-pointer active:scale-95 transition-transform"
                        >
                          {isSimulatingFlow ? 'Simulating...' : '▶ Run Test Demo'}
                        </button>
                      </div>
                      <div className="grid grid-cols-4 gap-1 text-center font-mono text-[9px] mb-2">
                        {['1. Ingest', '2. Parse', '3. Verify', '4. Sync'].map((step, i) => {
                          const stepNum = i + 1;
                          const isCurrent = activeWorkflowStep === stepNum;
                          const isPast = activeWorkflowStep > stepNum;
                          return (
                            <div
                              key={i}
                              className={`p-1 rounded-md border transition-all duration-200 ${
                                isCurrent
                                  ? 'bg-brand-600/30 border-brand-400 text-white ring-1 ring-brand-400'
                                  : isPast
                                  ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-400 font-bold'
                                  : 'bg-slate-900 border-slate-800 text-slate-500'
                              }`}
                            >
                              {step}
                            </div>
                          );
                        })}
                      </div>
                      <p className="text-[10px] font-mono text-slate-300 text-center truncate px-1">
                        {simulationLog}
                      </p>
                    </div>
                  )}

                  {service.previewType === 'web' && (
                    <div className="p-2.5 rounded-2xl bg-[#09090b] text-white mb-4 border border-slate-800 font-mono text-center">
                      <div className="flex items-center justify-between text-[9px] pb-1 mb-1 border-b border-slate-800 text-slate-400">
                        <span className="flex items-center gap-1 text-emerald-400">
                          <Gauge className="w-2.5 h-2.5" /> Performance
                        </span>
                        <span>0.8s TTFB</span>
                      </div>
                      <div className="grid grid-cols-4 gap-1">
                        <div className="p-1 rounded bg-slate-900 text-emerald-400 font-bold text-xs">
                          99 <span className="text-[7px] text-slate-400 block">Perf</span>
                        </div>
                        <div className="p-1 rounded bg-slate-900 text-emerald-400 font-bold text-xs">
                          100 <span className="text-[7px] text-slate-400 block">Acc</span>
                        </div>
                        <div className="p-1 rounded bg-slate-900 text-emerald-400 font-bold text-xs">
                          100 <span className="text-[7px] text-slate-400 block">Best</span>
                        </div>
                        <div className="p-1 rounded bg-slate-900 text-emerald-400 font-bold text-xs">
                          100 <span className="text-[7px] text-slate-400 block">SEO</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {service.previewType === 'erp' && (
                    <div className="p-2.5 rounded-2xl bg-[#09090b] text-white mb-4 border border-slate-800 font-mono text-xs">
                      <div className="flex items-center justify-between text-[9px] pb-1 mb-1 border-b border-slate-800 text-slate-400">
                        <span className="flex items-center gap-1 text-slate-300 font-mono text-[9px]">
                          <Database className="w-2.5 h-2.5 text-brand-400" /> Ledger Sync
                        </span>
                        <span className="text-emerald-400 text-[9px]">● Live</span>
                      </div>
                      <div className="flex justify-between items-center bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-[10px]">
                        <span className="text-slate-400">Inventory Sync:</span>
                        <span className="text-emerald-400 font-bold">Automated</span>
                      </div>
                    </div>
                  )}

                  {service.previewType === 'vision' && (
                    <div className="p-2.5 rounded-2xl bg-[#09090b] text-white mb-4 border border-slate-800 font-mono text-xs">
                      <div className="flex items-center justify-between text-[9px] pb-1 mb-1 border-b border-slate-800 text-slate-400">
                        <span className="flex items-center gap-1 text-slate-300 font-mono text-[9px]">
                          <Activity className="w-2.5 h-2.5 text-brand-400" /> Video Analytics
                        </span>
                        <span>30 FPS</span>
                      </div>
                      <div className="h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-[9px] text-emerald-400">
                        Real-Time Detection Active
                      </div>
                    </div>
                  )}

                  {/* Specs Checklist */}
                  <div className="space-y-1 mb-5">
                    {service.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-brand-600 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom CTA Button */}
                <div>
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
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(service.title);
                    }}
                  >
                    <span>Request Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </SpecularButton>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
