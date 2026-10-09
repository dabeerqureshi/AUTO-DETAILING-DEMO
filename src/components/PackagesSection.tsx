'use client';

import React, { useState } from 'react';
import { SERVICE_PACKAGES, VEHICLE_OPTIONS } from '@/data/services';
import { useCurrency } from '@/context/CurrencyContext';
import { VehicleCategory } from '@/types';
import { Check, Clock, Sparkles, Shield, ArrowRight, Zap, Star } from 'lucide-react';

interface PackagesSectionProps {
  onSelectPackage: (packageId: string, vehicleType: VehicleCategory) => void;
}

export default function PackagesSection({ onSelectPackage }: PackagesSectionProps) {
  const { formatPrice, currency } = useCurrency();
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleCategory>('suv_mid');

  const currentVehicleObj = VEHICLE_OPTIONS.find((v) => v.id === selectedVehicle) || VEHICLE_OPTIONS[0];

  return (
    <section id="services" className="py-24 bg-brand-darker relative overflow-hidden border-t border-brand-border">
      {/* Background accents */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-brand-amber/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Signature Service Menu
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Transparent Detailing <span className="bg-gradient-to-r from-brand-cyan to-blue-400 bg-clip-text text-transparent">Packages</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Tailored packages designed for daily commuters, family SUVs, and exotic show cars across North America.
          </p>

          {/* Vehicle Category Selector Bar */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-brand-card border border-brand-border max-w-full overflow-x-auto shadow-xl">
            {VEHICLE_OPTIONS.map((veh) => (
              <button
                key={veh.id}
                onClick={() => setSelectedVehicle(veh.id)}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  selectedVehicle === veh.id
                    ? 'bg-brand-cyan text-black shadow-glow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {veh.name.split('/')[0]}
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Showing rates for: <strong className="text-slate-200">{currentVehicleObj.name}</strong>
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_PACKAGES.map((pkg) => {
            const isPopular = pkg.popular;
            const priceUSD = Math.round(pkg.basePriceUSD * currentVehicleObj.multiplier);
            const priceCAD = Math.round(pkg.basePriceCAD * currentVehicleObj.multiplier);

            return (
              <div
                key={pkg.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative group ${
                  isPopular
                    ? 'bg-gradient-to-b from-brand-card to-brand-cardHover border-2 border-brand-amber shadow-glow-amber scale-102 lg:-translate-y-2'
                    : 'bg-brand-card border border-brand-border hover:border-slate-600'
                }`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-black text-[11px] uppercase tracking-widest px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  {/* Category Tag & Time */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3 pt-2">
                    <span className="font-bold uppercase tracking-wider text-brand-cyan text-[11px]">
                      {pkg.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {pkg.estimatedTime}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white tracking-tight">{pkg.name}</h3>
                  <p className="text-xs text-slate-300 mt-1 min-h-[36px]">{pkg.tagline}</p>

                  {/* Price Block */}
                  <div className="my-6 pb-6 border-b border-brand-border/80">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {formatPrice(priceUSD, priceCAD)}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">/ vehicle</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1 mt-1">
                      <Check className="w-3 h-3" /> All mobile equipment & water included
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      What’s Included:
                    </span>
                    <ul className="space-y-2.5 text-xs text-slate-300">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-brand-cyan/20 text-brand-cyan flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div>
                  <button
                    onClick={() => onSelectPackage(pkg.id, selectedVehicle)}
                    className={`w-full py-3.5 px-4 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-brand-amber hover:bg-amber-400 text-black shadow-glow-amber'
                        : 'bg-brand-dark hover:bg-brand-cyan hover:text-black text-white border border-brand-border'
                    }`}
                  >
                    <span>Book This Package</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    {pkg.recommendedFor}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

