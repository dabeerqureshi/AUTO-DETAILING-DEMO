'use client';

import React from 'react';
import Image from 'next/image';
import { TESTIMONIALS } from '@/data/locations';
import { Star, CheckCircle, Quote, ThumbsUp } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-brand-darker relative overflow-hidden border-t border-brand-border">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold tracking-wider uppercase mb-4">
            <Star className="w-3.5 h-3.5 fill-current" />
            Social Proof & Trust
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Loved By Car Enthusiasts In <span className="bg-gradient-to-r from-brand-cyan to-blue-400 bg-clip-text text-transparent">USA & Canada</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Over 1,400+ five-star reviews on Google, Yelp, and Trustpilot. Here is what real supercar owners and everyday drivers have to say.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-6 sm:gap-12 p-4 rounded-2xl bg-brand-card border border-brand-border shadow-xl">
            <div className="text-center">
              <div className="text-2xl font-black text-white">4.9 / 5.0</div>
              <div className="flex items-center justify-center text-amber-400 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <div className="text-[10px] text-slate-400 font-bold uppercase">Google Reviews</div>
            </div>
            <div className="w-px h-10 bg-brand-border hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl font-black text-white">99.8%</div>
              <div className="text-xs text-emerald-400 font-bold my-1">Guaranteed</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase">Satisfaction Rate</div>
            </div>
            <div className="w-px h-10 bg-brand-border hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl font-black text-white">1,400+</div>
              <div className="text-xs text-brand-cyan font-bold my-1">Vehicles Restored</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase">North America Wide</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-brand-card border border-brand-border rounded-3xl p-6 sm:p-7 shadow-xl hover:border-slate-600 transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Header: Stars & Country Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-brand-dark border border-brand-border text-slate-300 flex items-center gap-1">
                    <span>{t.country === 'USA' ? '🇺🇸' : '🇨🇦'}</span>
                    <span>{t.location}</span>
                  </span>
                </div>

                {/* Vehicle Pill */}
                <div className="inline-block px-2.5 py-1 rounded-lg bg-brand-dark/90 text-brand-cyan text-xs font-semibold mb-4 border border-brand-border/60">
                  🚗 {t.car}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{t.name}</span>
                    {t.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Service: {t.service.split(' ')[0]} {t.service.split(' ')[1]}
                  </div>
                </div>
                <span className="text-[10px] text-slate-500 font-medium">{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

