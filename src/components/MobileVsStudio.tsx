'use client';

import React from 'react';
import { Truck, Building2, Check, Droplets, Zap, ShieldCheck, Sparkles, Coffee } from 'lucide-react';

export default function MobileVsStudio({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section id="mobile-studio" className="py-24 bg-brand-darker relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-amber/10 border border-brand-amber/30 text-brand-amber text-xs font-semibold tracking-wider uppercase mb-4">
            <Truck className="w-3.5 h-3.5" />
            Convenience Meets Mastery
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Mobile Van vs. <span className="bg-gradient-to-r from-brand-cyan to-blue-400 bg-clip-text text-transparent">Studio Bay</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Choose the experience that fits your schedule: we bring the entire shop to your driveway, or welcome you to our climate-controlled detailing studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Mobile Detailing Van */}
          <div className="bg-brand-card border border-brand-border rounded-3xl p-7 sm:p-9 shadow-2xl relative flex flex-col justify-between">
            <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan text-xs font-bold uppercase">
              Maximum Convenience
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-cyan/15 text-brand-cyan flex items-center justify-center mb-6">
                <Truck className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                At-Your-Doorstep Mobile Fleet
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Our custom Mercedes Sprinter and Ford Transit vans arrive 100% self-sufficient at your residence, office park, or high-rise parking deck.
              </p>

              <div className="space-y-3.5 mb-8 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-cyan/20 text-brand-cyan flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-white">Zero Customer Hookups Needed:</strong> We supply our own 100-gal deionized spot-free water & silent inverter power.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-cyan/20 text-brand-cyan flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-white">Live Technician GPS Tracking:</strong> Receive live SMS notifications with estimated arrival time.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-cyan/20 text-brand-cyan flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-white">Ideal For:</strong> Express details, interior sanitization, Showroom Signature, and maintenance club visits.
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 rounded-xl bg-brand-cyan hover:bg-brand-cyan/90 text-black font-extrabold text-xs uppercase tracking-wider shadow-glow transition-all"
            >
              Book Mobile Van Service
            </button>
          </div>

          {/* Card 2: Climate-Controlled Studio Bay */}
          <div className="bg-brand-card border border-brand-border rounded-3xl p-7 sm:p-9 shadow-2xl relative flex flex-col justify-between">
            <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-brand-amber/20 border border-brand-amber/40 text-brand-amber text-xs font-bold uppercase">
              Precision Environment
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-amber/15 text-brand-amber flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Climate-Controlled Precision Bay
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Engineered for multi-stage paint correction, long-term ceramic coatings, and PPF installations requiring hospital-grade environmental control.
              </p>

              <div className="space-y-3.5 mb-8 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-amber/20 text-brand-amber flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-white">Scangrip Optical Inspection Bays:</strong> 5000K CRI 96+ lighting arrays expose microscopic paint imperfections.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-amber/20 text-brand-amber flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-white">Dust-Filtered Ceramic Curing:</strong> Temperature and humidity-stabilized chambers guarantee flawless bonding.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-amber/20 text-brand-amber flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-white">Executive Waiting Lounge:</strong> High-speed gigabit Wi-Fi, private workstations, and complimentary espresso.
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 rounded-xl bg-brand-card hover:bg-brand-cardHover border border-brand-border text-white hover:text-brand-amber font-extrabold text-xs uppercase tracking-wider transition-all"
            >
              Reserve Studio Bay Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

