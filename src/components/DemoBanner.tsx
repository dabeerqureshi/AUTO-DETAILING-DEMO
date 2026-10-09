'use client';

import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Rocket, X, Mail, Phone, Send } from 'lucide-react';

export default function DemoBanner() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Top / Floating Business Notice Ribbon */}
      <aside aria-label="Demo notice banner" className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 border-b border-brand-cyan/30 py-2.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center">
            <span className="px-2 py-0.5 rounded bg-brand-cyan text-black font-black uppercase text-[10px] tracking-wider animate-pulse">
              Live Demo
            </span>
            <span className="text-slate-200">
              Own an auto detailing business in the <strong className="text-white">USA or Canada</strong>? Want this high-converting website for your brand?
            </span>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-cyan hover:bg-brand-cyan/90 text-black font-bold text-xs transition-all cursor-pointer shadow-glow shrink-0"
          >
            <span>Get This For Your Business</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </aside>

      {/* Inquiry Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-brand-card border border-brand-cyan/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => {
                setModalOpen(false);
                setSubmitted(false);
              }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white">Inquiry Received!</h3>
                <p className="text-sm text-slate-300">
                  Thanks, <strong className="text-white">{businessName}</strong>! We will contact you at <strong className="text-brand-cyan">{contactEmail}</strong> with full setup details, custom domain configuration, and Vercel 1-click deployment guide.
                </p>
                <button
                  onClick={() => {
                    setModalOpen(false);
                    setSubmitted(false);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-brand-cyan text-black font-bold text-xs"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-2">
                  <Rocket className="w-4 h-4" />
                  Turnkey Website Solution
                </div>
                <h3 className="text-2xl font-black text-white">
                  Launch This Website For Your Detailing Business
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Engineered with Next.js & Tailwind CSS. Ready to deploy directly to Vercel with your custom branding, local pricing, phone numbers, and Stripe / Square integration.
                </p>

                <div className="my-5 p-4 bg-brand-dark rounded-xl border border-brand-border space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>Includes Instant Price Calculator & Multi-Step Booking Funnel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>Supports USD ($) and CAD ($) multi-currency toggle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>100% Mobile Responsive & 100/100 Lighthouse Performance</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Business Name / Detail Shop
                    </label>
                    <input
                      type="text"
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="e.g. Metro Auto Detailing / Apex Ceramic Studio"
                      className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="owner@yourcompany.com"
                      className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-brand-cyan hover:bg-brand-cyan/90 text-black font-extrabold text-sm shadow-glow flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request Custom Website Details</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

