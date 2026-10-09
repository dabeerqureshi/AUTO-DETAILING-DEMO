'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DemoBanner from '@/components/DemoBanner';
import PackagesSection from '@/components/PackagesSection';
import InstantEstimator from '@/components/InstantEstimator';
import InteractiveSlider from '@/components/InteractiveSlider';
import CeramicDeepDive from '@/components/CeramicDeepDive';
import MobileVsStudio from '@/components/MobileVsStudio';
import WinterSummerCare from '@/components/WinterSummerCare';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { VehicleCategory } from '@/types';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingConfig, setBookingConfig] = useState<{
    vehicleType: VehicleCategory;
    packageId: string;
    addonIds: string[];
    totalCostFormatted?: string;
  }>({
    vehicleType: 'suv_mid',
    packageId: 'showroom-signature',
    addonIds: ['undercarriage-salt-shield'],
  });

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleSelectPackageFromCards = (packageId: string, vehicleType: VehicleCategory) => {
    setBookingConfig({
      vehicleType,
      packageId,
      addonIds: [],
    });
    setIsBookingOpen(true);
  };

  const handleProceedFromEstimator = (config: {
    vehicleType: VehicleCategory;
    packageId: string;
    addonIds: string[];
    totalCostFormatted: string;
  }) => {
    setBookingConfig(config);
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-brand-darker text-white selection:bg-brand-cyan selection:text-black">
      {/* Turnkey Demo Banner for business owners */}
      <DemoBanner />

      {/* Sticky Navbar with multi-currency switch */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Luxury Hero Section */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* Package Menu Cards */}
      <PackagesSection onSelectPackage={handleSelectPackageFromCards} />

      {/* Live Interactive Price Estimator & Builder */}
      <InstantEstimator onProceedToBooking={handleProceedFromEstimator} />

      {/* Interactive Before & After Slider */}
      <InteractiveSlider onBookNow={handleOpenBooking} />

      {/* Science of 9H Ceramic Coating */}
      <CeramicDeepDive onBookCeramic={() => {
        setBookingConfig({
          vehicleType: 'sedan',
          packageId: 'apex-ceramic-reserve',
          addonIds: [],
        });
        setIsBookingOpen(true);
      }} />

      {/* Mobile Van vs Studio Bay */}
      <MobileVsStudio onOpenBooking={handleOpenBooking} />

      {/* North American Seasonal Care: US Sun & Canadian Salt */}
      <WinterSummerCare onExploreAddons={() => {
        const el = document.getElementById('estimator');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Social Proof & Customer Reviews */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Luxury Footer with USA & Canada hubs */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* 4-Step Interactive Booking Funnel Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialConfig={bookingConfig}
      />
    </main>
  );
}

