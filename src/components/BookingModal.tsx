'use client';

import React, { useState, useEffect } from 'react';
import { VEHICLE_OPTIONS, SERVICE_PACKAGES, SERVICE_ADDONS } from '@/data/services';
import { useCurrency } from '@/context/CurrencyContext';
import { VehicleCategory } from '@/types';
import confetti from 'canvas-confetti';
import {
  X,
  Check,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Clock,
  MapPin,
  Car,
  ShieldCheck,
  Sparkles,
  Phone,
  Mail,
  User,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialConfig?: {
    vehicleType: VehicleCategory;
    packageId: string;
    addonIds: string[];
    totalCostFormatted?: string;
  };
}

export default function BookingModal({ isOpen, onClose, initialConfig }: BookingModalProps) {
  const { currency, formatPrice } = useCurrency();

  const [step, setStep] = useState<number>(1);
  const [vehicleType, setVehicleType] = useState<VehicleCategory>('suv_mid');
  const [vehicleYear, setVehicleYear] = useState<string>('2024');
  const [vehicleMake, setVehicleMake] = useState<string>('Tesla');
  const [vehicleModel, setVehicleModel] = useState<string>('Model Y');
  const [vehicleColor, setVehicleColor] = useState<string>('Midnight Silver');

  const [packageId, setPackageId] = useState<string>('showroom-signature');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['undercarriage-salt-shield']);

  const [serviceLocationType, setServiceLocationType] = useState<'mobile' | 'studio'>('mobile');
  const [address, setAddress] = useState<string>('');
  const [postalOrZip, setPostalOrZip] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<'USA' | 'CAN'>('USA');

  const [bookingDate, setBookingDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('09:00 AM');

  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialNotes, setSpecialNotes] = useState<string>('');

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  // Sync initial config if passed
  useEffect(() => {
    if (initialConfig) {
      if (initialConfig.vehicleType) setVehicleType(initialConfig.vehicleType);
      if (initialConfig.packageId) setPackageId(initialConfig.packageId);
      if (initialConfig.addonIds) setSelectedAddons(initialConfig.addonIds);
    }
  }, [initialConfig]);

  // Set default booking date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setBookingDate(dateStr);
  }, []);

  if (!isOpen) return null;

  const currentVehicleObj = VEHICLE_OPTIONS.find((v) => v.id === vehicleType) || VEHICLE_OPTIONS[0];
  const currentPackageObj = SERVICE_PACKAGES.find((p) => p.id === packageId) || SERVICE_PACKAGES[2];

  const baseUSD = Math.round(currentPackageObj.basePriceUSD * currentVehicleObj.multiplier);
  const baseCAD = Math.round(currentPackageObj.basePriceCAD * currentVehicleObj.multiplier);

  const addonsUSD = selectedAddons.reduce((sum, id) => {
    const item = SERVICE_ADDONS.find((a) => a.id === id);
    return sum + (item ? item.priceUSD : 0);
  }, 0);

  const addonsCAD = selectedAddons.reduce((sum, id) => {
    const item = SERVICE_ADDONS.find((a) => a.id === id);
    return sum + (item ? item.priceCAD : 0);
  }, 0);

  const totalUSD = baseUSD + addonsUSD;
  const totalCAD = baseCAD + addonsCAD;
  const grandTotalFormatted = formatPrice(totalUSD, totalCAD);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = `APX-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(generatedRef);
      setIsSubmitting(false);
      setIsCompleted(true);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00F0FF', '#F59E0B', '#10B981', '#FFFFFF'],
        });
      } catch (err) {
        // Safe fallback
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-brand-card border border-brand-border rounded-3xl w-full max-w-3xl shadow-2xl overflow-hidden relative my-auto">
        {/* Header Bar */}
        <div className="px-6 py-5 border-b border-brand-border flex items-center justify-between bg-brand-dark/95">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan font-black text-sm">
              ⚡
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-none">Instant Detailing Reservation</h3>
              <p className="text-xs text-slate-400 mt-1">
                USA & Canada Mobile Fleet • Certified Bay Specialists
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-brand-dark hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center border border-brand-border transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Indicator */}
        {!isCompleted && (
          <div className="px-6 py-3 bg-brand-cardHover border-b border-brand-border/60 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto w-full">
              {[
                { n: 1, label: 'Vehicle' },
                { n: 2, label: 'Service' },
                { n: 3, label: 'Date & Location' },
                { n: 4, label: 'Contact' },
              ].map((s) => (
                <div key={s.n} className="flex items-center gap-2 shrink-0">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] ${
                      step === s.n
                        ? 'bg-brand-cyan text-black shadow-glow'
                        : step > s.n
                        ? 'bg-emerald-500 text-white'
                        : 'bg-brand-dark text-slate-500 border border-brand-border'
                    }`}
                  >
                    {step > s.n ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : s.n}
                  </div>
                  <span
                    className={`font-semibold ${
                      step === s.n ? 'text-white' : 'text-slate-400'
                    }`}
                  >
                    {s.label}
                  </span>
                  {s.n < 4 && <ChevronRight className="w-3 h-3 text-slate-600 hidden sm:block" />}
                </div>
              ))}
            </div>
            <div className="hidden sm:block text-brand-cyan font-bold shrink-0 ml-4">
              Est: {grandTotalFormatted}
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          {isCompleted ? (
            /* Confirmation Screen */
            <div className="text-center py-6 sm:py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">
                  Reservation Confirmed!
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  You’re On the Schedule, {fullName || 'Valued Client'}!
                </h3>
                <p className="text-slate-300 text-sm mt-2 max-w-lg mx-auto">
                  Booking Reference: <span className="font-mono font-bold text-brand-amber">{bookingRef}</span>.
                  A calendar invite and SMS confirmation with your specialist’s live arrival tracker have been dispatched.
                </p>
              </div>

              {/* Receipt card */}
              <div className="bg-brand-dark/90 border border-brand-border rounded-2xl p-5 max-w-md mx-auto text-left text-xs space-y-3">
                <div className="flex justify-between border-b border-brand-border/60 pb-2">
                  <span className="text-slate-400">Service:</span>
                  <span className="font-bold text-white">{currentPackageObj.name}</span>
                </div>
                <div className="flex justify-between border-b border-brand-border/60 pb-2">
                  <span className="text-slate-400">Vehicle:</span>
                  <span className="font-bold text-white">
                    {vehicleYear} {vehicleMake} {vehicleModel} ({currentVehicleObj.name})
                  </span>
                </div>
                <div className="flex justify-between border-b border-brand-border/60 pb-2">
                  <span className="text-slate-400">Appointment:</span>
                  <span className="font-bold text-brand-cyan">{bookingDate} at {timeSlot}</span>
                </div>
                <div className="flex justify-between border-b border-brand-border/60 pb-2">
                  <span className="text-slate-400">Location Type:</span>
                  <span className="font-bold text-white capitalize">
                    {serviceLocationType === 'mobile' ? 'Mobile Unit (At Your Doorstep)' : 'In-Studio Detailing Bay'}
                  </span>
                </div>
                {address && (
                  <div className="flex justify-between border-b border-brand-border/60 pb-2">
                    <span className="text-slate-400">Address:</span>
                    <span className="font-bold text-white text-right max-w-[200px] truncate">{address}, {city}</span>
                  </div>
                )}
                <div className="flex justify-between pt-1 text-sm font-extrabold">
                  <span className="text-slate-300">Total Due at Finish:</span>
                  <span className="text-brand-cyan text-base">{grandTotalFormatted}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-brand-cyan hover:bg-brand-cyan/90 text-black font-bold text-sm shadow-glow transition-all"
                >
                  Done & Return to Site
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* STEP 1: Vehicle Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-white">Step 1: Your Vehicle Information</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Helps us allocate correct equipment, pad density, and water volume.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {VEHICLE_OPTIONS.map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setVehicleType(v.id)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          vehicleType === v.id
                            ? 'border-brand-cyan bg-brand-cyan/15 text-white shadow-glow'
                            : 'border-brand-border bg-brand-dark text-slate-300 hover:bg-brand-cardHover'
                        }`}
                      >
                        <div className="text-xs font-bold">{v.name.split('/')[0]}</div>
                        <div className="text-[10px] text-slate-400 mt-1">{v.id === 'sedan' ? 'Standard' : `+${Math.round((v.multiplier - 1) * 100)}%`}</div>
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Model Year</label>
                      <input
                        type="text"
                        value={vehicleYear}
                        onChange={(e) => setVehicleYear(e.target.value)}
                        placeholder="e.g. 2024"
                        className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Vehicle Make</label>
                      <input
                        type="text"
                        value={vehicleMake}
                        onChange={(e) => setVehicleMake(e.target.value)}
                        placeholder="e.g. Porsche, Tesla, Ford"
                        className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Model</label>
                      <input
                        type="text"
                        value={vehicleModel}
                        onChange={(e) => setVehicleModel(e.target.value)}
                        placeholder="e.g. 911 GT3, Model Y, F-150"
                        className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Paint / Interior Color</label>
                      <input
                        type="text"
                        value={vehicleColor}
                        onChange={(e) => setVehicleColor(e.target.value)}
                        placeholder="e.g. Black on Cognac Leather"
                        className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Package & Addons */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-white">Step 2: Confirm Package & Upgrades</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Choose your detailing package and optional enhancements.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SERVICE_PACKAGES.map((pkg) => {
                      const isSel = packageId === pkg.id;
                      const pUSD = Math.round(pkg.basePriceUSD * currentVehicleObj.multiplier);
                      const pCAD = Math.round(pkg.basePriceCAD * currentVehicleObj.multiplier);
                      return (
                        <div
                          key={pkg.id}
                          onClick={() => setPackageId(pkg.id)}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            isSel
                              ? 'border-brand-cyan bg-brand-cyan/10 shadow-glow'
                              : 'border-brand-border bg-brand-dark hover:bg-brand-cardHover'
                          }`}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-bold text-white text-sm">{pkg.name}</span>
                            <span className="font-black text-brand-cyan text-sm">{formatPrice(pUSD, pCAD)}</span>
                          </div>
                          <p className="text-[11px] text-slate-400 line-clamp-2">{pkg.tagline}</p>
                        </div>
                      );
                    })}
                  </div>

                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Optional Upgrades:</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {SERVICE_ADDONS.map((add) => {
                        const checked = selectedAddons.includes(add.id);
                        return (
                          <div
                            key={add.id}
                            onClick={() => toggleAddon(add.id)}
                            className={`p-3 rounded-xl border cursor-pointer flex justify-between items-center transition-all ${
                              checked
                                ? 'border-brand-amber/80 bg-brand-amber/10'
                                : 'border-brand-border bg-brand-dark hover:bg-brand-cardHover'
                            }`}
                          >
                            <div className="min-w-0 pr-2">
                              <div className="text-xs font-semibold text-white">{add.name}</div>
                              <div className="text-[10px] text-slate-400">{add.timeEstimate}</div>
                            </div>
                            <div className="text-right shrink-0">
                              <div className="text-xs font-bold text-brand-cyan">+{formatPrice(add.priceUSD, add.priceCAD)}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Location & Time */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-white">Step 3: Service Location & Schedule</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      We bring 100% self-powered mobile detailing to your driveway, or drop off at our studio bay.
                    </p>
                  </div>

                  {/* Location Mode Toggle */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setServiceLocationType('mobile')}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        serviceLocationType === 'mobile'
                          ? 'border-brand-cyan bg-brand-cyan/15 text-white shadow-glow'
                          : 'border-brand-border bg-brand-dark text-slate-400 hover:bg-brand-cardHover'
                      }`}
                    >
                      <div className="flex items-center gap-2 font-bold text-sm text-white">
                        <MapPin className="w-4 h-4 text-brand-cyan" />
                        <span>Mobile (We Come to You)</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Home, Office, or Fleet Lot. We supply water & power.
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setServiceLocationType('studio')}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        serviceLocationType === 'studio'
                          ? 'border-brand-cyan bg-brand-cyan/15 text-white shadow-glow'
                          : 'border-brand-border bg-brand-dark text-slate-400 hover:bg-brand-cardHover'
                      }`}
                    >
                      <div className="flex items-center gap-2 font-bold text-sm text-white">
                        <Sparkles className="w-4 h-4 text-brand-amber" />
                        <span>Studio Bay Drop-Off</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Climate-controlled precision lighting facility.
                      </p>
                    </button>
                  </div>

                  {/* Address inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        {serviceLocationType === 'mobile' ? 'Street Address / Suite' : 'Preferred Studio Location City'}
                      </label>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="e.g. 742 Evergreen Terrace / Studio Bay Downtown"
                        className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Postal / ZIP Code
                      </label>
                      <input
                        type="text"
                        value={postalOrZip}
                        onChange={(e) => setPostalOrZip(e.target.value)}
                        placeholder="e.g. 90210 or M5V 2T6"
                        className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan"
                      />
                    </div>
                  </div>

                  {/* Date & Time Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Date</label>
                      <div className="relative">
                        <input
                          type="date"
                          value={bookingDate}
                          onChange={(e) => setBookingDate(e.target.value)}
                          className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Time Window</label>
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan"
                      >
                        <option value="08:00 AM">08:00 AM - 10:00 AM (Early Bird)</option>
                        <option value="10:30 AM">10:30 AM - 12:30 PM (Mid Morning)</option>
                        <option value="01:30 PM">01:30 PM - 03:30 PM (Afternoon)</option>
                        <option value="04:00 PM">04:00 PM - 06:00 PM (Late Afternoon)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Contact & Final Review */}
              {step === 4 && (
                <form onSubmit={handleFinalSubmit} className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-white">Step 4: Contact Information & Notes</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      We send live GPS tracking notifications when our mobile van is 15 minutes away.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number (SMS updates) *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(555) 234-5678"
                        className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address (Calendar Invite) *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Special Notes / Access Codes</label>
                      <textarea
                        rows={2}
                        value={specialNotes}
                        onChange={(e) => setSpecialNotes(e.target.value)}
                        placeholder="e.g. Gate code is #1234, vehicle is parked in driveway, child car seats need steam cleaning."
                        className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-cyan"
                      />
                    </div>
                  </div>

                  {/* Summary recap */}
                  <div className="p-4 bg-brand-dark rounded-xl border border-brand-border flex items-center justify-between text-xs">
                    <div>
                      <span className="text-slate-400">Total payable upon service satisfaction:</span>
                      <div className="text-xl font-black text-white">{grandTotalFormatted}</div>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Zero Deposit Required</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-cyan to-blue-500 hover:from-brand-cyan/90 hover:to-blue-600 text-black font-extrabold text-base shadow-glow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Securing Your Booking Slot...</span>
                      </div>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        <span>Confirm Instant Booking ({grandTotalFormatted})</span>
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Navigation buttons for steps 1-3 */}
              {step < 4 && (
                <div className="mt-8 pt-4 border-t border-brand-border flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-5 py-2.5 rounded-xl border border-brand-border text-slate-300 hover:text-white hover:bg-brand-cardHover text-sm font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-2.5 rounded-xl bg-brand-cyan hover:bg-brand-cyan/90 text-black font-bold text-sm shadow-glow flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Continue</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

