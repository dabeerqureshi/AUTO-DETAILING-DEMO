'use client';

import React from 'react';
import Link from 'next/link';
import { LOCATION_HUBS } from '@/data/locations';
import { Sparkles, Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <footer className="bg-brand-darker border-t border-brand-border pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-brand-border/60">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-brand-cyan flex items-center justify-center text-black font-black">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xl font-black text-white uppercase tracking-wider">
                APEX<span className="text-brand-cyan">GLOSS</span>
              </span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              North America’s premier mobile auto detailing & 9H ceramic studio. Providing hospital-grade steam extraction, 2-stage paint correction, and certified graphene coatings throughout the United States and Canada.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-cyan" />
                <span>1-800-555-APEX (2739) • Toll-Free Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                <span>concierge@apexgloss-detailing.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-brand-cyan transition-colors">
                  Essential Express Wash
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-cyan transition-colors">
                  Interior Sanctuary Restoration
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-cyan transition-colors">
                  Showroom Signature Detail
                </a>
              </li>
              <li>
                <a href="#ceramic" className="hover:text-brand-cyan transition-colors">
                  5-Year 9H Ceramic Shield
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-brand-cyan transition-colors">
                  Instant Price Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* USA Hubs */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <span>🇺🇸</span> USA Locations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Dallas / Fort Worth, TX</li>
              <li>Greater Los Angeles, CA</li>
              <li>Miami & South Florida, FL</li>
              <li>Chicago & North Shore, IL</li>
              <li>Phoenix & Scottsdale, AZ</li>
              <li>Atlanta Metro, GA</li>
            </ul>
          </div>

          {/* Canada Hubs */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <span>🇨🇦</span> Canada Locations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Greater Toronto Area (GTA), ON</li>
              <li>Metro Vancouver & North Shore, BC</li>
              <li>Calgary & Edmonton, AB</li>
              <li>Montreal & Laval, QC</li>
              <li>Ottawa / Gatineau, ON</li>
            </ul>
          </div>
        </div>

        {/* Operating Hours & Guarantee Banner */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs border-b border-brand-border/60">
          <div className="flex items-center gap-2 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Certified International Detailing Association (IDA) Member • CARFAX Registered Provider
            </span>
          </div>

          <div className="text-slate-400 text-center md:text-right">
            Mobile Operations: Mon – Sat: 7:30 AM – 7:00 PM | Sun: 8:00 AM – 5:00 PM
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} APEX GLOSS Mobile & Studio Detailing Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Rain & Reschedule Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

