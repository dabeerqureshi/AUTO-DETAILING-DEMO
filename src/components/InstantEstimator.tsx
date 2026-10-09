'use client';

import React, { useState } from 'react';
import { VEHICLE_OPTIONS, SERVICE_PACKAGES, SERVICE_ADDONS } from '@/data/services';
import { useCurrency } from '@/context/CurrencyContext';
import { VehicleCategory } from '@/types';
import {
  Calculator,
  Car,
  Truck,
  ShieldAlert,
  Clock,
  Sparkles,
  Check,
  Plus,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface InstantEstimatorProps {
  onProceedToBooking: (config: {
    vehicleType: VehicleCategory;
    packageId: string;
    addonIds: string[];
    totalCostFormatted: string;
  }) => void;
}

export default function InstantEstimator({ onProceedToBooking }: InstantEstimatorProps) {
  const { currency, formatPrice, symbol } = useCurrency();

  const [selectedVehicle, setSelectedVehicle] = useState<VehicleCategory>('suv_mid');
  const [selectedPackageId, setSelectedPackageId] = useState<string>('showroom-signature');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['undercarriage-salt-shield']);

  const currentVehicleObj = VEHICLE_OPTIONS.find((v) => v.id === selectedVehicle) || VEHICLE_OPTIONS[0];
  const currentPackageObj = SERVICE_PACKAGES.find((p) => p.id === selectedPackageId) || SERVICE_PACKAGES[2];

  // Calculate base price with vehicle multiplier
  const basePriceUSD = Math.round(currentPackageObj.basePriceUSD * currentVehicleObj.multiplier);
  const basePriceCAD = Math.round(currentPackageObj.basePriceCAD * currentVehicleObj.multiplier);

  // Addons cost
  const addonsTotalUSD = selectedAddons.reduce((sum, id) => {
    const item = SERVICE_ADDONS.find((a) => a.id === id);
    return sum + (item ? item.priceUSD : 0);
  }, 0);

  const addonsTotalCAD = selectedAddons.reduce((sum, id) => {
    const item = SERVICE_ADDONS.find((a) => a.id === id);
    return sum + (item ? item.priceCAD : 0);
  }, 0);

  const totalUSD = basePriceUSD + addonsTotalUSD;
  const totalCAD = basePriceCAD + addonsTotalCAD;

  const displayTotal = formatPrice(totalUSD, totalCAD);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getVehicleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck':
        return <Truck className="w-5 h-5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      default:
        return <Car className="w-5 h-5" />;
    }
  };

  const handleBookNow = () => {
    onProceedToBooking({
      vehicleType: selectedVehicle,
      packageId: selectedPackageId,
      addonIds: selectedAddons,
      totalCostFormatted: displayTotal,
    });
  };

  return (
    <section id="estimator" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background ambiance */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-amber/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-amber/10 border border-brand-amber/30 text-brand-amber text-xs font-semibold tracking-wider uppercase mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Transparent Upfront Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Instant <span className="bg-gradient-to-r from-brand-amber to-yellow-300 bg-clip-text text-transparent">Price Estimator</span> & Builder
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Customize your detail package in seconds. No hidden fees, no surprise upsells upon arrival.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Configurator Steps */}
          <div className="lg:col-span-8 space-y-8">
            {/* Step 1: Vehicle Size */}
            <div className="bg-brand-card border border-brand-border rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-brand-cyan text-black font-extrabold flex items-center justify-center text-xs">
                    1
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Select Vehicle Classification</h3>
                </div>
                <span className="text-xs text-slate-400">Affects time & materials</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {VEHICLE_OPTIONS.map((veh) => {
                  const isSelected = selectedVehicle === veh.id;
                  return (
                    <button
                      key={veh.id}
                      onClick={() => setSelectedVehicle(veh.id)}
                      className={`text-left p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                        isSelected
                          ? 'border-brand-cyan bg-brand-cyan/10 shadow-glow'
                          : 'border-brand-border bg-brand-dark hover:bg-brand-cardHover text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className={isSelected ? 'text-brand-cyan' : 'text-slate-400'}>
                            {getVehicleIcon(veh.iconName)}
                          </span>
                          <span className={`font-semibold text-sm ${isSelected ? 'text-white font-bold' : 'text-slate-200'}`}>
                            {veh.name}
                          </span>
                        </div>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-brand-cyan text-black flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {veh.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Package Tier */}
            <div className="bg-brand-card border border-brand-border rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-brand-cyan text-black font-extrabold flex items-center justify-center text-xs">
                    2
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Choose Primary Detailing Tier</h3>
                </div>
                <span className="text-xs text-slate-400">4 Tailored Solutions</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICE_PACKAGES.map((pkg) => {
                  const isSelected = selectedPackageId === pkg.id;
                  const pkgUSD = Math.round(pkg.basePriceUSD * currentVehicleObj.multiplier);
                  const pkgCAD = Math.round(pkg.basePriceCAD * currentVehicleObj.multiplier);

                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`cursor-pointer p-4 sm:p-5 rounded-xl border transition-all duration-200 relative flex flex-col justify-between ${
                        isSelected
                          ? 'border-brand-amber bg-brand-amber/10 shadow-glow-amber'
                          : 'border-brand-border bg-brand-dark hover:bg-brand-cardHover'
                      }`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-2.5 right-4 bg-brand-amber text-black text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-wider shadow">
                          Most Popular
                        </div>
                      )}

                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <h4 className={`text-base font-bold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                            {pkg.name}
                          </h4>
                          <span className="text-base font-extrabold text-brand-cyan">
                            {formatPrice(pkgUSD, pkgCAD)}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mb-3">{pkg.tagline}</p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-brand-border/60 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {pkg.estimatedTime}
                        </span>
                        <span className={isSelected ? 'text-brand-amber font-semibold' : 'text-slate-400'}>
                          {isSelected ? 'Selected' : 'Select'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Add-on Upgrades */}
            <div className="bg-brand-card border border-brand-border rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-brand-cyan text-black font-extrabold flex items-center justify-center text-xs">
                    3
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Custom Add-on Enhancements</h3>
                </div>
                <span className="text-xs text-slate-400">Optional specialized care</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICE_ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all flex items-start justify-between gap-3 ${
                        isChecked
                          ? 'border-brand-cyan/70 bg-brand-cyan/10'
                          : 'border-brand-border bg-brand-dark hover:bg-brand-cardHover'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-semibold ${isChecked ? 'text-white' : 'text-slate-200'}`}>
                            {addon.name}
                          </span>
                          {addon.popular && (
                            <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-brand-amber/20 text-brand-amber border border-brand-amber/30">
                              Hot
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{addon.description}</p>
                      </div>

                      <div className="flex flex-col items-end shrink-0">
                        <span className="text-xs font-bold text-brand-cyan">
                          +{formatPrice(addon.priceUSD, addon.priceCAD)}
                        </span>
                        <div
                          className={`mt-1.5 w-5 h-5 rounded flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'bg-brand-cyan text-black'
                              : 'border border-slate-600 bg-transparent text-transparent'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Summary & Quote Receipt Card (Sticky) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-gradient-to-b from-brand-card to-brand-darker border-2 border-brand-cyan/40 rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-brand-border">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-brand-cyan font-bold">Live Estimate</span>
                  <h4 className="text-xl font-black text-white">Your Package Summary</h4>
                </div>
                <div className="px-2.5 py-1 rounded bg-brand-cyan/15 border border-brand-cyan/40 text-[11px] font-bold text-brand-cyan">
                  {currency}
                </div>
              </div>

              {/* Itemized Line Items */}
              <div className="py-5 space-y-4 text-sm border-b border-brand-border">
                {/* Vehicle classification */}
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-xs text-slate-400">Vehicle Category</span>
                  <span className="font-semibold text-white text-xs">{currentVehicleObj.name}</span>
                </div>

                {/* Main Package */}
                <div className="flex justify-between items-start text-slate-300">
                  <div className="max-w-[200px]">
                    <div className="font-semibold text-white text-xs sm:text-sm">{currentPackageObj.name}</div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {currentPackageObj.estimatedTime}
                    </div>
                  </div>
                  <span className="font-bold text-white text-xs sm:text-sm">
                    {formatPrice(basePriceUSD, basePriceCAD)}
                  </span>
                </div>

                {/* Addons List */}
                {selectedAddons.length > 0 && (
                  <div className="pt-2 border-t border-brand-border/60 space-y-2">
                    <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">
                      Selected Add-ons ({selectedAddons.length})
                    </span>
                    {selectedAddons.map((addonId) => {
                      const item = SERVICE_ADDONS.find((a) => a.id === addonId);
                      if (!item) return null;
                      return (
                        <div key={item.id} className="flex justify-between text-xs text-slate-300">
                          <span className="line-clamp-1">{item.name}</span>
                          <span className="font-medium text-brand-cyan shrink-0 ml-2">
                            +{formatPrice(item.priceUSD, item.priceCAD)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Total & Guarantee */}
              <div className="pt-5 space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-bold text-slate-300">Estimated Total</span>
                  <div className="text-right">
                    <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      {displayTotal}
                    </div>
                    <span className="text-[11px] text-slate-400">All taxes & equipment included</span>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="p-3 bg-brand-dark/90 rounded-xl border border-brand-border space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>100% Satisfaction Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span>Spot-Free Deionized Water System</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleBookNow}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-brand-cyan to-blue-500 hover:from-brand-cyan/90 hover:to-blue-600 text-black font-extrabold text-base shadow-glow transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Book This Configuration</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-[11px] text-slate-400">
                  Instant confirmation • Pay at service completion or card
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

