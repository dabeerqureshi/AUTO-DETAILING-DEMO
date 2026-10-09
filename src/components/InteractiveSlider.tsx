'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Sparkles, SlidersHorizontal, ShieldCheck, Flame } from 'lucide-react';

interface ComparisonCase {
  id: string;
  title: string;
  category: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  stats: string;
}

const COMPARISON_CASES: ComparisonCase[] = [
  {
    id: 'paint',
    title: '2-Stage Paint Correction & Ceramic 9H',
    category: 'Exterior Paint',
    beforeLabel: 'Severe Swirls & Dull Oxidation',
    afterLabel: 'Mirror Finish & 9H Ceramic Depth',
    description: 'Notice how spider-web swirls, haze, and light surface scratches are eliminated, restoring pure optical reflection and liquid depth.',
    beforeImg: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    afterImg: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
    stats: '95% Swirl Removal • 5-Year Protection',
  },
  {
    id: 'interior',
    title: 'Heated Steam Extraction & Leather Rebirth',
    category: 'Interior Sanctuary',
    beforeLabel: 'Grime, Stains & Salt Crust',
    afterLabel: 'Sanitized Matte Leather & Deep Extraction',
    description: 'Dry high-pressure steam at 220°F kills bacteria and extracts embedded ground-in dirt, returning leather to its natural non-greasy matte factory feel.',
    beforeImg: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    afterImg: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    stats: 'Hospital-Grade Sanitization • Zero Chemical Residue',
  },
  {
    id: 'wheels',
    title: 'Baked Brake Dust & Caliper Ceramic Coating',
    category: 'Wheels & Finish',
    beforeLabel: 'Burnt Brake Dust & Heavy Tar',
    afterLabel: 'Acid-Free Decon & Ceramic Barrel Shield',
    description: 'Dissolves sintered metallic iron deposits in wheel barrels and seals calipers with 1200°F heat-resistant ceramic coating for effortless wash-offs.',
    beforeImg: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80',
    afterImg: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80',
    stats: '1,200°F Thermal Resistance • Effortless Cleaning',
  },
];

export default function InteractiveSlider({ onBookNow }: { onBookNow?: () => void }) {
  const [selectedCase, setSelectedCase] = useState<ComparisonCase>(COMPARISON_CASES[0]);
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPos(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="results" className="py-24 bg-brand-darker relative overflow-hidden border-t border-brand-border">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Proof of Precision
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Interactive <span className="bg-gradient-to-r from-brand-cyan to-blue-400 bg-clip-text text-transparent">Before & After</span> Results
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Slide the divider back and forth to inspect real multi-stage paint restorations and steam-sanitized interiors.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {COMPARISON_CASES.map((item) => {
            const isActive = selectedCase.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedCase(item);
                  setSliderPos(50);
                }}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-brand-cyan text-black shadow-glow font-bold'
                    : 'bg-brand-card hover:bg-brand-cardHover text-slate-300 border border-brand-border'
                }`}
              >
                <span>{item.category}</span>
                <span className="text-xs opacity-75 hidden sm:inline">({item.title.split(' ')[0]})</span>
              </button>
            );
          })}
        </div>

        {/* Comparison Box */}
        <div className="bg-brand-card border border-brand-border rounded-3xl p-4 sm:p-6 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-brand-border/60 gap-3 mb-4">
            <div>
              <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">{selectedCase.category}</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">{selectedCase.title}</h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400 bg-brand-dark/80 px-3.5 py-1.5 rounded-lg border border-brand-border self-start md:self-auto">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{selectedCase.stats}</span>
            </div>
          </div>

          {/* Interactive Drag Stage */}
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[360px] sm:h-[480px] lg:h-[550px] w-full rounded-2xl overflow-hidden select-none cursor-ew-resize group"
          >
            {/* AFTER Image (Full width background) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={selectedCase.afterImg}
                alt={selectedCase.afterLabel}
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
              />
              {/* After Tag */}
              <div className="absolute top-4 right-4 bg-emerald-500/90 backdrop-blur-md text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
                <span>AFTER: {selectedCase.afterLabel}</span>
              </div>
            </div>

            {/* BEFORE Image (Clipped overlay) */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="relative w-full h-full" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}>
                <Image
                  src={selectedCase.beforeImg}
                  alt={selectedCase.beforeLabel}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover filter contrast-90 brightness-95"
                />
              </div>
              {/* Before Tag */}
              <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md text-rose-400 border border-rose-500/30 text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-rose-400" />
                <span>BEFORE: {selectedCase.beforeLabel}</span>
              </div>
            </div>

            {/* Slider Dividing Bar & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-brand-cyan shadow-[0_0_15px_#00F0FF] z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-black/90 border-2 border-brand-cyan text-brand-cyan flex items-center justify-center shadow-glow">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
            </div>

            {/* Hint overlay on mobile/desktop */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md px-4 py-1.5 rounded-full text-xs text-slate-300 pointer-events-none border border-white/10 hidden sm:flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Drag or swipe left / right to compare transformation</span>
            </div>
          </div>

          {/* Description & Action footer */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-brand-border/60">
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              {selectedCase.description}
            </p>
            {onBookNow && (
              <button
                onClick={onBookNow}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-cyan hover:bg-brand-cyan/90 text-black font-bold text-sm shadow-glow transition-all whitespace-nowrap self-start sm:self-center"
              >
                <span>Get This Result For Your Car</span>
                <Sparkles className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

