'use client';

import React from 'react';
import Image from 'next/image';
import { useCurrency } from '@/context/CurrencyContext';
import {
  Sparkles,
  ShieldCheck,
  Star,
  MapPin,
  ArrowRight,
  Zap,
  Droplets,
  Award,
  CheckCircle2,
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const { currency } = useCurrency();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-brand-darker">
      {/* Background Hero Image with atmospheric overlays */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury car detailing and ceramic gloss reflection"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center opacity-30 filter contrast-125"
        />
        {/* Radial Darkening Vignette & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/60 to-transparent" />
        <div className="absolute inset-0 bg-gloss-mesh" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Top Trust Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-card/90 border border-brand-border backdrop-blur-md shadow-xl mb-6">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold text-white">4.9 / 5.0</span>
            <span className="text-slate-500">•</span>
            <span className="text-xs font-medium text-slate-300">
              1,400+ Verified Reviews Across USA & Canada
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
            Showroom Perfection.{' '}
            <span className="bg-gradient-to-r from-brand-cyan via-teal-300 to-blue-400 bg-clip-text text-transparent">
              Delivered To Your Driveway.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
            North America’s premier mobile auto detailing & 9H ceramic studio. We bring hospital-grade dry steam sanitization, multi-stage paint correction, and aerospace graphene coatings directly to your home or office.
          </p>

          {/* Key Value Points Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-semibold text-slate-200">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-card/80 border border-brand-border">
              <Droplets className="w-4 h-4 text-brand-cyan" />
              <span>100% Deionized Spot-Free Water</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-card/80 border border-brand-border">
              <Zap className="w-4 h-4 text-brand-amber" />
              <span>100% Self-Contained Mobile Power</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-card/80 border border-brand-border">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>CARFAX Verified Ceramic Warranties</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="py-4 px-8 rounded-2xl bg-gradient-to-r from-brand-cyan to-blue-500 hover:from-brand-cyan/90 hover:to-blue-600 text-black font-extrabold text-base shadow-glow transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Book Mobile Detail</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#estimator"
              className="py-4 px-8 rounded-2xl bg-brand-card hover:bg-brand-cardHover border border-brand-border text-white font-bold text-base transition-all flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-5 h-5 text-brand-amber" />
              <span>Calculate Instant Price</span>
            </a>
          </div>

          {/* Real-time availability indicator */}
          <div className="mt-8 flex items-center gap-3 text-xs text-slate-400">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>
              Next available mobile slot in your area: <strong className="text-white">Tomorrow, 9:00 AM</strong> (USA & Canada Hubs)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

