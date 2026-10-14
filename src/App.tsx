import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { SalonHeroVisual } from './components/SalonHeroVisual';
import { AtmosphereSection } from './components/AtmosphereSection';
import { RitualsSection, RitualItem } from './components/RitualsSection';
import { TransformationsSection } from './components/TransformationsSection';
import { StylistsSection } from './components/StylistsSection';
import { VisitSection } from './components/VisitSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { Sparkles, ArrowRight, Sun, Scissors, Users, ShieldCheck, Heart } from 'lucide-react';

export default function App() {
  const [timeOfDay, setTimeOfDay] = useState<'morning' | 'noon' | 'afternoon'>('morning');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRitualForBooking, setSelectedRitualForBooking] = useState<RitualItem | null>(null);
  const [selectedStylistForBooking, setSelectedStylistForBooking] = useState<string>('');

  const handleOpenBooking = () => {
    setSelectedRitualForBooking(null);
    setSelectedStylistForBooking('');
    setBookingModalOpen(true);
  };

  const handleSelectRitual = (ritual: RitualItem) => {
    setSelectedRitualForBooking(ritual);
    setBookingModalOpen(true);
  };

  const handleBookStylist = (stylistName: string) => {
    setSelectedStylistForBooking(stylistName);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2D2A26] selection:bg-[#EAE2D5] selection:text-[#1F1C18]">
      {/* Top Navigation conforming to strict 3-zone contract */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main className="flex-1">
        {/* ========================================================================= */}
        {/* HERO SECTION: The First Screen                                            */}
        {/* Immediately bright, welcoming, professional, and trustworthy             */}
        {/* ========================================================================= */}
        <section 
          id="sanctuary" 
          className="relative pt-8 pb-20 md:pt-14 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#FFFDF9] to-[#FAF7F2] border-b border-[#EFE9DF]"
        >
          {/* Subtle natural sunlight diffusion in background */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-100/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#E8EFE5]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Top Quiet Trust Ribbon adhering strictly to zero-pill rule */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#7A6F62] mb-8 font-normal">
              <span className="text-[#3F362C] font-semibold">Renew &amp; Restore Beauty</span>
              <span aria-hidden="true" className="text-[#CCC1B3]">·</span>
              <span>1364 Acushnet Avenue, New Bedford, MA</span>
              <span aria-hidden="true" className="text-[#CCC1B3]">·</span>
              <span>(774) 425-2817</span>
              <span aria-hidden="true" className="text-[#CCC1B3]">·</span>
              <span>Mon–Sat by Appointment</span>
              <span aria-hidden="true" className="text-[#CCC1B3]">·</span>
              <span>Restoring Beauty from Within</span>
            </div>

            {/* Two-Column Grid: Narrative & Value Proposition Left, Authentic Salon Visual Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              
              {/* Left Column: Clear Visual Hierarchy & Generous Spacing */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1F1C18] leading-[1.12] tracking-tight text-balance">
                    Where confidence is renewed, and true beauty is restored.
                  </h1>
                  
                  <p className="text-base sm:text-lg text-[#615649] font-normal leading-relaxed text-pretty">
                    Step into a bright, welcoming chair where you are genuinely heard. We believe true transformation begins with personal care, healthy hair, and a warm team dedicated to lifting you up from within.
                  </p>
                </div>

                {/* Primary & Secondary Action buttons (Single-line controls) */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <button
                    onClick={handleOpenBooking}
                    className="px-6 py-3.5 rounded-xl bg-[#2D2822] hover:bg-[#433B32] active:bg-[#1E1A16] text-white text-xs font-medium uppercase tracking-wider transition-all shadow-xs text-center whitespace-nowrap"
                  >
                    Reserve a Chair
                  </button>
                  <a
                    href="#rituals"
                    className="px-6 py-3.5 rounded-xl bg-white hover:bg-[#F6EFE5] border border-[#DACBB8] text-xs font-medium text-[#382F25] transition-all text-center whitespace-nowrap"
                  >
                    Explore Care Menu
                  </a>
                </div>

                {/* 3 Core Grounding Pillars (Clean typography, no garish icons) */}
                <div className="pt-6 border-t border-[#EFE8DE] grid grid-cols-3 gap-4">
                  <div>
                    <span className="block text-xl font-serif text-[#221C16]">Welcoming</span>
                    <span className="text-xs text-[#7A6F62] leading-snug block mt-0.5">
                      Family-built local care
                    </span>
                  </div>
                  <div>
                    <span className="block text-xl font-serif text-[#221C16]">1-on-1</span>
                    <span className="text-xs text-[#7A6F62] leading-snug block mt-0.5">
                      Unhurried attention
                    </span>
                  </div>
                  <div>
                    <span className="block text-xl font-serif text-[#221C16]">From Within</span>
                    <span className="text-xs text-[#7A6F62] leading-snug block mt-0.5">
                      Restored confidence
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual Feature */}
              {/* Feature a stylist naturally working with a client while the salon environment remains visible */}
              <div className="lg:col-span-7">
                <SalonHeroVisual
                  timeOfDay={timeOfDay}
                  onTimeChange={(t) => setTimeOfDay(t)}
                />
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SALON ENVIRONMENT HIGHLIGHTS: Real Salon Benefits                         */}
        {/* ========================================================================= */}
        <div className="bg-[#FFFDF9] py-8 border-b border-[#EFE9DF]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <Sun className="w-5 h-5 text-[#889E7E] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-semibold text-[#29221B] uppercase tracking-wide">
                    Abundant Natural Light
                  </h3>
                  <p className="text-xs text-[#6F6456] mt-0.5">
                    Bright daytime windows reveal true color &amp; shine
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <Scissors className="w-5 h-5 text-[#889E7E] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-semibold text-[#29221B] uppercase tracking-wide">
                    Modern Styling Stations
                  </h3>
                  <p className="text-xs text-[#6F6456] mt-0.5">
                    Comfortable caramel chairs &amp; professional tools
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <Users className="w-5 h-5 text-[#889E7E] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-semibold text-[#29221B] uppercase tracking-wide">
                    One-on-One Attention
                  </h3>
                  <p className="text-xs text-[#6F6456] mt-0.5">
                    Unhurried, dedicated appointments with your stylist
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#889E7E] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-semibold text-[#29221B] uppercase tracking-wide">
                    Clean, Comfortable Space
                  </h3>
                  <p className="text-xs text-[#6F6456] mt-0.5">
                    Pristine workstations &amp; a warm, welcoming vibe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* THE ATMOSPHERE OF CARE (Section 2)                                        */}
        {/* The 4 stages of renewal and relaxation                                    */}
        {/* ========================================================================= */}
        <AtmosphereSection />

        {/* ========================================================================= */}
        {/* CARE RITUALS & OFFERINGS (Section 3)                                      */}
        {/* ========================================================================= */}
        <RitualsSection onSelectRitual={handleSelectRitual} />

        {/* ========================================================================= */}
        {/* RESTORATION & CONFIDENCE STORIES (Section 4)                              */}
        {/* Interactive before-and-after renewal comparison slider                    */}
        {/* ========================================================================= */}
        <TransformationsSection />

        {/* ========================================================================= */}
        {/* OUR MASTER STYLISTS (Section 5)                                           */}
        {/* ========================================================================= */}
        <StylistsSection onBookStylist={handleBookStylist} />

        {/* ========================================================================= */}
        {/* VISIT & HOURS (Section 6)                                                 */}
        {/* ========================================================================= */}
        <VisitSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Quiet, refined footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedRitual={selectedRitualForBooking}
        preselectedStylist={selectedStylistForBooking}
      />
    </div>
  );
}
