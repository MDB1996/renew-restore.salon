import React from 'react';
import { Sun, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF7F2] text-[#4F453A] border-t border-[#EAE1D3] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#EDE3D4]">
          {/* Brand & Ethos */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-2xl font-serif text-[#221C16] block">
              Renew &amp; Restore Beauty
            </span>
            <p className="text-sm text-[#6C6053] leading-relaxed max-w-sm">
              A beauty salon offering full-service hair care, coloring, and styling with a fresh outlook on the definition of beauty. Restoring confidence from within.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#807364]">
              <span className="w-2 h-2 rounded-full bg-[#8CA483]" />
              <span>Family-Built &amp; Community-Rooted in New Bedford, MA</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#352D24] block">
              Explore
            </span>
            <ul className="space-y-2 text-sm text-[#675B4D]">
              <li><a href="#atmosphere" className="hover:text-[#1F1C18] transition-colors">The Salon Atmosphere</a></li>
              <li><a href="#rituals" className="hover:text-[#1F1C18] transition-colors">Care Rituals & Pricing</a></li>
              <li><a href="#transformations" className="hover:text-[#1F1C18] transition-colors">Restoration Stories</a></li>
              <li><a href="#stylists" className="hover:text-[#1F1C18] transition-colors">Our Master Stylists</a></li>
              <li><a href="#visit" className="hover:text-[#1F1C18] transition-colors">Location & Hours</a></li>
            </ul>
          </div>

          {/* Direct Contact & Visit */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#352D24] block">
              New Bedford Salon
            </span>
            <p className="text-sm text-[#675B4D] leading-relaxed">
              1364 Acushnet Avenue<br />
              New Bedford, MA, USA
            </p>
            <div className="text-xs text-[#675B4D] space-y-1 pt-1">
              <p>
                <strong className="text-[#352D24]">Hours: </strong>
                Monday – Saturday: By Appointment
              </p>
              <p className="text-[#877A6C]">Sunday: Closed / Special Events</p>
            </div>
            <p className="text-sm text-[#675B4D] pt-1 space-y-0.5">
              <a href="mailto:Renewandrestorebeauty@gmail.com" className="block font-mono text-xs text-[#241F1A] hover:underline">
                Renewandrestorebeauty@gmail.com
              </a>
              <a href="tel:7744252817" className="block font-mono text-xs text-[#241F1A] hover:underline">
                (774) 425-2817
              </a>
            </p>
            <div className="pt-1 flex flex-col gap-1 text-xs">
              <a
                href="https://www.vagaro.com/renewandrestorebeauty"
                target="_blank"
                rel="noreferrer noopener"
                className="text-[#1A56DB] hover:underline font-medium inline-flex items-center gap-1"
              >
                <span>Book Online on Vagaro</span>
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://www.renewandrestorebeauty.shop"
                target="_blank"
                rel="noreferrer noopener"
                className="text-[#7A6E60] hover:underline"
              >
                renewandrestorebeauty.shop
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Quiet Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#877A6C]">
          <p>© {new Date().getFullYear()} Renew &amp; Restore Beauty. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#2E2822] cursor-pointer">Quiet Care Charter</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-[#2E2822] cursor-pointer">Eco Commitment</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-[#2E2822] cursor-pointer">Privacy & Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
