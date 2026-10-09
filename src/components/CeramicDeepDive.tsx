'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Droplets, Sun, Sparkles, FileText, CheckCircle2, Award, Zap } from 'lucide-react';

export default function CeramicDeepDive({ onBookCeramic }: { onBookCeramic: () => void }) {
  return (
    <section id="ceramic" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-amber/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual & Science Feature */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-brand-border shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80"
                alt="Ceramic coating water beading on exotic car hood"
                width={800}
                height={600}
                unoptimized
                className="w-full h-[450px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/40 to-transparent" />

              {/* Floating Technology Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-brand-card/90 backdrop-blur-xl border border-brand-border p-5 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-brand-cyan" />
                    <span className="font-extrabold text-white text-sm">Graphene & SiO2 Nano-Matrix</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-amber">9H PENCIL HARDNESS</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Covalently bonds to factory clear coat at the molecular level, creating a sacrificial quartz shield impervious to chemicals pH 2 to 12.
                </p>
              </div>
            </div>

            {/* Sub-badge: CARFAX Warranty */}
            <div className="absolute -top-4 -right-4 bg-brand-card border-2 border-emerald-500/50 rounded-2xl p-3.5 shadow-2xl hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-black text-white">CARFAX Registered</div>
                <div className="text-[10px] text-slate-400">Verifiable protection on VIN history</div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Benefits & Comparison */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold tracking-wider uppercase mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                Next-Gen Surface Defense
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                The Science of True <span className="bg-gradient-to-r from-brand-cyan to-blue-400 bg-clip-text text-transparent">9H Ceramic Shield</span>
              </h2>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                Traditional carnauba waxes break down in weeks under North American summer heat and winter salt. Our multi-layer 9H ceramic coatings form an impenetrable glass-like barrier that endures for up to 5 full years.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-brand-card border border-brand-border">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-brand-cyan flex items-center justify-center mb-3">
                  <Droplets className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">&gt;115° Contact Angle</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Extreme hydrophobicity. Rainwater immediately beads into spheres and rolls away, sweeping dirt and road grime with it.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-brand-card border border-brand-border">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-brand-amber flex items-center justify-center mb-3">
                  <Sun className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">UV & Oxidation Immunity</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Shields clear coat from harsh solar radiation, preventing clear coat failure, chalking, and paint fading common in sunny states.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-brand-card border border-brand-border">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-brand-cyan flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">Winter Salt & Chemical Guard</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Resistant to calcium chloride road brine, magnesium chloride, bug splatter, and bird droppings that etch unprotected paint.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-brand-card border border-brand-border">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">Increases Vehicle Resale Value</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Registered directly with CARFAX to provide prospective buyers verified documentation of showroom condition.
                </p>
              </div>
            </div>

            {/* Comparison Bar */}
            <div className="p-5 rounded-2xl bg-brand-card border border-brand-border space-y-3">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-400">Durability Comparison</span>
                <span className="text-brand-cyan">Traditional Wax (1 Mo) vs APEX 9H Ceramic (60 Mos)</span>
              </div>
              <div className="w-full bg-brand-dark rounded-full h-3 overflow-hidden p-0.5 border border-brand-border">
                <div className="bg-gradient-to-r from-brand-cyan to-blue-500 h-full rounded-full w-[95%]" />
              </div>
            </div>

            {/* Action */}
            <div className="pt-2">
              <button
                onClick={onBookCeramic}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-cyan to-blue-500 hover:from-brand-cyan/90 hover:to-blue-600 text-black font-extrabold text-sm shadow-glow transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Reserve Ceramic Coating Package</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

