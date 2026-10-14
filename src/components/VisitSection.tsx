import React, { useState } from 'react';
import { MapPin, Clock, Sun, Coffee, ShieldCheck, ChevronDown, Sparkles, ExternalLink, HeartHandshake } from 'lucide-react';

export const VisitSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do I book an appointment?',
      a: 'All appointments can be booked conveniently online 24/7 through our Vagaro booking page (vagaro.com/renewandrestorebeauty) or by calling us directly at (774) 425-2817.',
    },
    {
      q: 'What are your operating hours and schedule?',
      a: 'We operate Monday through Saturday by appointment, offering flexible daytime and evening sessions tailored to your schedule. We are closed Sundays for private rest, education, and special masterclasses.',
    },
    {
      q: 'How should I arrive with my hair prepared?',
      a: 'Please arrive with your hair dry and in its everyday natural state (air-dried is wonderful). Avoid tight ponytails or heavy clips on the day of your visit so your stylist can see your organic movement, wave pattern, and natural fall.',
    },
    {
      q: 'What is your Silent Chair option?',
      a: 'We understand that appointments can be your only chance to rest. We perform a caring, in-depth consultation first, then transition into peaceful silence with soft music, tea, or a book—no pressure for casual conversation.',
    },
    {
      q: 'What is your parking and arrival access?',
      a: 'We are conveniently located at 1364 Acushnet Avenue in the heart of New Bedford, Massachusetts, with convenient street and neighborhood parking along Acushnet Ave. We are easily accessible from Route 140 and I-195.',
    },
  ];

  return (
    <section id="visit" className="py-24 bg-[#FAF7F2] border-b border-[#EFE8DE]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-[#8A7A68] uppercase mb-3">
            <span>Find Our Space</span>
            <span aria-hidden="true">·</span>
            <span>Plan Your Afternoon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#221E19] leading-[1.15] mb-4">
            A welcoming salon on Acushnet Avenue.
          </h2>
          <p className="text-base text-[#665D51] leading-relaxed">
            Located at 1364 Acushnet Avenue in New Bedford, our doors are open for your renewal. Step inside and let our caring team highlight your natural beauty.
          </p>
        </div>

        {/* Studio Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Card 1: Hours & Salon Address */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-8 border border-[#EDE4D5] shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold text-[#8C7D6C] uppercase tracking-wider block mb-2">
                  Salon Location
                </span>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#889E7E] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-serif text-[#262019]">1364 Acushnet Avenue</h3>
                    <p className="text-sm text-[#5E5448]">New Bedford, MA, USA</p>
                    <p className="text-sm font-mono text-[#262019] mt-1 font-semibold">
                      <a href="tel:7744252817" className="hover:underline">774-425-2817</a>
                    </p>
                    <p className="text-xs text-[#7D7163] mt-0.5">
                      <a href="mailto:Renewandrestorebeauty@gmail.com" className="hover:underline">Renewandrestorebeauty@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#F0E9DF]">
                <span className="text-xs font-semibold text-[#8C7D6C] uppercase tracking-wider block mb-2">
                  Salon Hours &amp; Schedule
                </span>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#889E7E] shrink-0 mt-0.5" />
                  <div className="space-y-2 text-sm text-[#4E4438] w-full">
                    <div className="flex justify-between items-baseline">
                      <span className="font-medium text-[#29221A]">Monday – Saturday</span>
                      <span className="font-mono text-xs text-[#29221A] font-medium text-right">
                        By Appointment
                      </span>
                    </div>
                    <p className="text-xs text-[#7A6F62] leading-tight">
                      Flexible morning, afternoon &amp; evening sessions with your dedicated stylist.
                    </p>
                    <div className="flex justify-between text-[#8E8375] pt-1">
                      <span>Sunday</span>
                      <span className="italic text-xs">Closed / Special Events</span>
                    </div>
                    <div className="flex justify-between items-baseline pt-1 border-t border-[#F5EFE6]">
                      <span className="text-xs font-medium text-[#29221A]">Online Booking</span>
                      <span className="font-mono text-xs text-[#1A56DB] font-medium">
                        Open 24/7 on Vagaro
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking notice indicator */}
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E9DFD2] flex items-center gap-3">
                <Sun className="w-5 h-5 text-[#D4A76A] shrink-0" />
                <div className="text-xs text-[#5D5244]">
                  <strong className="text-[#2C241C] font-medium block">Book Online or Call:</strong>
                  Reserve directly on <strong>vagaro.com/renewandrestorebeauty</strong> or call <strong>(774) 425-2817</strong> to schedule your visit.
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenBooking}
                className="flex-1 py-3 px-5 rounded-xl bg-[#2D2822] text-white text-xs font-medium uppercase tracking-wider hover:bg-[#433B32] transition-colors text-center"
              >
                Reserve Your Chair
              </button>
              <a
                href="https://www.vagaro.com/renewandrestorebeauty"
                target="_blank"
                rel="noreferrer noopener"
                className="py-3 px-4 rounded-xl bg-white border border-[#DAC9B2] text-[#2D2822] text-xs font-medium uppercase tracking-wider hover:bg-[#F4ECE1] transition-colors text-center inline-flex items-center justify-center gap-1.5"
              >
                <span>Live Availability & Reviews</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Interactive Sanctuary Amenities & Architecture */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-[#EDE4D5] shadow-xs space-y-6">
            <h3 className="text-xl font-serif text-[#241F1A]">
              Care In Every Detail
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EFE7DC] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#3A3228]">
                  <Coffee className="w-4 h-4 text-[#98816B]" />
                  <span>Nourishing Hospitality</span>
                </div>
                <p className="text-xs text-[#635749] leading-relaxed">
                  Complimentary artisanal herbal teas, oat milk golden lattes, and fresh citrus water in an unhurried atmosphere.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EFE7DC] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#3A3228]">
                  <Sparkles className="w-4 h-4 text-[#889E7E]" />
                  <span>Acoustic Softness</span>
                </div>
                <p className="text-xs text-[#635749] leading-relaxed">
                  Low-decibel ultra-quiet European hair dryers, sound-dampening acoustic oak panels, and serene ambient music.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EFE7DC] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#3A3228]">
                  <ShieldCheck className="w-4 h-4 text-[#7A936E]" />
                  <span>High-End Formulations</span>
                </div>
                <p className="text-xs text-[#635749] leading-relaxed">
                  Premium salon products, gentle ammonia-free color, and restorative care treatments designed to replenish shine and strength.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EFE7DC] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#3A3228]">
                  <HeartHandshake className="w-4 h-4 text-[#C47D65]" />
                  <span>Community Giving</span>
                </div>
                <p className="text-xs text-[#635749] leading-relaxed">
                  Rooted in New Bedford: hosting free haircuts for the homeless, back-to-school events for local students, and monthly community spa days.
                </p>
              </div>
            </div>

            {/* Thoughtful Visit FAQs */}
            <div className="pt-4 border-t border-[#F0E9DF]">
              <span className="text-xs font-semibold text-[#8C7D6C] uppercase tracking-wider block mb-3">
                Common Questions
              </span>
              <div className="space-y-2">
                {faqs.map((faq, idx) => (
                  <div
                    key={faq.q}
                    className="border border-[#EFE7DC] rounded-xl overflow-hidden bg-[#FAF8F5]"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full py-3 px-4 text-left flex items-center justify-between text-xs font-medium text-[#2E2720] hover:bg-[#F5EFE5] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#8B7E70] transition-transform ${
                          openFaq === idx ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-4 pb-3.5 text-xs text-[#63584B] leading-relaxed border-t border-[#EFE8DE] bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
