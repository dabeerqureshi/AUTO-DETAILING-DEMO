'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCurrency } from '@/context/CurrencyContext';
import {
  Sparkles,
  Phone,
  Calendar,
  Menu,
  X,
  Shield,
  ChevronDown,
  Globe,
  Flame,
} from 'lucide-react';

export default function Navbar({ onOpenBooking }: { onOpenBooking: () => void }) {
  const { currency, setCurrency } = useCurrency();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-darker/90 backdrop-blur-xl border-b border-brand-border py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-cyan to-blue-600 flex items-center justify-center text-black font-black text-lg shadow-glow group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider text-white uppercase flex items-center gap-1.5 leading-none">
                APEX<span className="text-brand-cyan">GLOSS</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold mt-0.5">
                Precision Auto Studio • USA & CAN
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-brand-cyan transition-colors">
              Packages
            </a>
            <a href="#estimator" className="hover:text-brand-cyan transition-colors flex items-center gap-1">
              <span>Estimator</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-brand-amber/20 text-brand-amber font-bold border border-brand-amber/30">
                Live
              </span>
            </a>
            <a href="#results" className="hover:text-brand-cyan transition-colors">
              Before / After
            </a>
            <a href="#ceramic" className="hover:text-brand-cyan transition-colors">
              Ceramic 9H
            </a>
            <a href="#mobile-studio" className="hover:text-brand-cyan transition-colors">
              Mobile vs Studio
            </a>
            <a href="#reviews" className="hover:text-brand-cyan transition-colors">
              Reviews
            </a>
            <a href="#faq" className="hover:text-brand-cyan transition-colors">
              FAQ
            </a>
          </nav>

          {/* Right Actions: Currency Selector + Phone + Book Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Currency / Region Toggle */}
            <div className="flex items-center bg-brand-card border border-brand-border rounded-xl p-1 text-xs font-bold">
              <button
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                  currency === 'USD'
                    ? 'bg-brand-cyan text-black shadow-glow'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="United States Dollar (USD)"
              >
                <span>🇺🇸</span>
                <span>USD</span>
              </button>
              <button
                onClick={() => setCurrency('CAD')}
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                  currency === 'CAD'
                    ? 'bg-brand-cyan text-black shadow-glow'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Canadian Dollar (CAD)"
              >
                <span>🇨🇦</span>
                <span>CAD</span>
              </button>
            </div>

            {/* Direct Phone */}
            <a
              href="tel:18005550198"
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-cyan" />
              <span>1-800-555-APEX</span>
            </a>

            {/* Book Now Button */}
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-cyan to-blue-500 hover:from-brand-cyan/90 hover:to-blue-600 text-black font-extrabold text-xs uppercase tracking-wider shadow-glow transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Instant Detail</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Currency toggle */}
            <div className="flex items-center bg-brand-card border border-brand-border rounded-lg p-0.5 text-xs font-bold mr-1">
              <button
                onClick={() => setCurrency(currency === 'USD' ? 'CAD' : 'USD')}
                className="px-2 py-0.5 rounded text-[11px] text-brand-cyan font-bold"
              >
                {currency === 'USD' ? '🇺🇸 USD' : '🇨🇦 CAD'}
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-card border-b border-brand-border px-5 py-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3 text-sm font-semibold text-slate-300">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-brand-cyan"
            >
              Packages & Pricing
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-brand-cyan text-brand-amber flex items-center gap-1.5"
            >
              <span>Instant Price Calculator</span>
              <span className="text-[10px] bg-brand-amber/20 px-1.5 py-0.5 rounded">Hot</span>
            </a>
            <a
              href="#results"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-brand-cyan"
            >
              Before & After Transformations
            </a>
            <a
              href="#ceramic"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-brand-cyan"
            >
              Ceramic 9H Protection
            </a>
            <a
              href="#mobile-studio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-brand-cyan"
            >
              Mobile Van vs Studio Bay
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-brand-cyan"
            >
              Client Reviews
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-brand-cyan"
            >
              FAQ
            </a>
          </nav>

          <div className="pt-4 border-t border-brand-border/60 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-brand-cyan text-black font-extrabold text-sm shadow-glow flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Instant Appointment</span>
            </button>
            <a
              href="tel:18005550198"
              className="text-center text-xs text-slate-400 py-1"
            >
              Call Us: 1-800-555-APEX
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

