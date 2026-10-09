'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Do you need access to my home water spigot or electrical outlet?',
    answer: 'No! Our mobile detailing vans are 100% self-sufficient. Each vehicle is equipped with a commercial-grade 100-gallon deionized spot-free water tank and an ultra-quiet Honda inverter generator. We can service your vehicle anywhere—your driveway, office parking garage, or apartment complex without touching your utilities.',
  },
  {
    question: 'What is the actual difference between car wax and 9H ceramic coating?',
    answer: 'Traditional carnauba wax or store-bought spray sealants simply sit on top of your clear coat and melt or degrade after 3 to 6 weeks under sun or car washes. A professional 9H ceramic coating forms a permanent covalent bond with your factory clear coat, providing years of resistance against chemical etching, UV damage, road salt, bird droppings, and microscopic scratching while maintaining an incredible glass-like gloss.',
  },
  {
    question: 'How do you handle winter road salt in Canada and Northern US states?',
    answer: 'Winter road treatments (magnesium chloride and rock salt) calcify in carpets and corrode undercarriage components. We utilize heated dry steam extraction (220°F) paired with chemical salt neutralizers that chemically dissolve crystalline salt bonds without damaging carpet fibers or automotive underbody coatings.',
  },
  {
    question: 'How long does a detailing appointment usually take?',
    answer: 'Our Essential Express detail takes approximately 1.5 to 2 hours. The Showroom Signature Full Detail takes between 4 to 5.5 hours. Multi-year Ceramic Coating packages with 2-stage paint correction require 6 to 8 hours and typically need an overnight cure inside a climate-controlled bay for maximum hardness.',
  },
  {
    question: 'What happens if it rains on the day of my mobile appointment?',
    answer: 'If you have a home garage or covered carport, our mobile technicians can comfortably complete interior and exterior details in inclement weather. If no shelter is available and heavy rain is forecasted, our dispatch team will contact you to reschedule at no charge, or upgrade your booking to our indoor studio bay.',
  },
  {
    question: 'Can this website template be customized for my own detailing company?',
    answer: 'Yes! This entire website was built with Next.js, Tailwind CSS, and TypeScript specifically as the premier turnkey solution for auto detailing shops and mobile operators in the USA and Canada. You can easily connect your own booking calendar, logo, local phone numbers, stripe checkout, and custom package rates in minutes.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-brand-dark relative overflow-hidden border-t border-brand-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold tracking-wider uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="bg-gradient-to-r from-brand-cyan to-blue-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Clear, honest answers to help you pick the perfect treatment for your vehicle.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-brand-cardHover/50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center shrink-0 border border-brand-border transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-cyan' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-brand-border/40 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

