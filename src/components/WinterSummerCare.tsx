'use client';

import React from 'react';
import { Snowflake, SunMedium, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

export default function WinterSummerCare({ onExploreAddons }: { onExploreAddons: () => void }) {
  return (
    <section className="py-20 bg-brand-dark relative overflow-hidden border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <ShieldAlert className="w-3.5 h-3.5" />
            Engineered For North American Climates
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tailored For <span className="text-brand-cyan">USA & Canada</span> Weather Extremes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            From sub-zero Canadian snowstorms and road brine to blazing Texas & California solar radiation, our protection protocols are formulated for regional realities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Northern US & Canadian Winter Defense */}
          <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-blue-950/20 to-brand-card border border-blue-500/30 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-cyan-300 flex items-center justify-center">
                <Snowflake className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  Canada & Northern US Protocol
                </span>
                <h3 className="text-xl font-bold text-white">Winter Salt & Brine Neutralizer</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
              Municipal road crews use aggressive liquid calcium chloride and magnesium brine that corrodes brake lines, suspension components, and etches clear coat within weeks.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>Chemical salt neutralizer rinse dissolves bonded crystalline salts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>High-pressure undercarriage chassis wash removes packed road slush</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>All-weather rubber floor mat deep degrease and UV matte revitalization</span>
              </li>
            </ul>

            <button
              onClick={onExploreAddons}
              className="text-xs font-bold text-brand-cyan hover:underline flex items-center gap-1.5"
            >
              <span>Add Salt Shield to your package &rarr;</span>
            </button>
          </div>

          {/* Southern US & Summer Heat Shield */}
          <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-amber-950/20 to-brand-card border border-amber-500/30 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-300 flex items-center justify-center">
                <SunMedium className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Southern US & Summer Protocol
                </span>
                <h3 className="text-xl font-bold text-white">Solar UV & Acid Etch Shield</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
              Intense 100°F+ sunlight bakes lovebugs, tree sap, and bird droppings into clear coats in hours, accelerating clear-coat failure and cracking premium leather.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-amber shrink-0" />
                <span>SiO2 ceramic barrier blocks harmful UV-A & UV-B solar degradation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-amber shrink-0" />
                <span>Enzyme bug splatter softener prevents clear coat acid etching</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-amber shrink-0" />
                <span>Leather conditioner with SPF 50+ UV stabilizers prevents dash splitting</span>
              </li>
            </ul>

            <button
              onClick={onExploreAddons}
              className="text-xs font-bold text-brand-amber hover:underline flex items-center gap-1.5"
            >
              <span>Explore Sun & UV Protection &rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

