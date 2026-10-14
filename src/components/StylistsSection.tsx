import React, { useState } from 'react';
import { Calendar, Heart, Award, ArrowUpRight, User } from 'lucide-react';

interface Stylist {
  id: string;
  name: string;
  title: string;
  experience: string;
  specialty: string;
  philosophy: string;
  photoUrl: string;
  photoAlt: string;
  accentBadge: string;
}

interface StylistsSectionProps {
  onBookStylist: (stylistName: string) => void;
}

export const StylistsSection: React.FC<StylistsSectionProps> = ({ onBookStylist }) => {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const stylists: Stylist[] = [
    {
      id: 'monique',
      name: 'Monique Gagne',
      title: 'Owner & Master Stylist',
      experience: 'Experienced Professional',
      specialty: 'Restoring healthy hair · Precision cuts · Bespoke color & transformation',
      philosophy: '“With a deep belief that everyone is made with purpose and beauty, I strive to empower my clients to rediscover their natural radiance and unlock their true potential.”',
      photoUrl: '/images/stylist_monique.jpg',
      photoAlt: 'Monique Gagne, salon owner and master stylist',
      accentBadge: 'Owner | Stylist',
    },
    {
      id: 'rebecca',
      name: 'Rebecca Sharples',
      title: 'Resident Eyelash & Brow Artist',
      experience: 'Behind The Chair Specialist',
      specialty: 'Custom luxury eyelash extensions · Lash lifts · Brow shaping & tinting',
      philosophy: '“Enhancing your natural features with precision lash and brow artistry so you wake up feeling effortless, radiant, and confident every single day.”',
      photoUrl: '/images/stylist_rebecca.jpg',
      photoAlt: 'Rebecca Sharples, resident eyelash and brow artist',
      accentBadge: 'Lash & Brow Artist',
    },
    {
      id: 'annamarie',
      name: 'AnnaMarie Roman',
      title: 'Stylist',
      experience: 'Color & Blonding Artist',
      specialty: 'Luminous blonding · Multi-dimensional highlights · Butterfly wefts & styling',
      philosophy: '“Renew and Restore Beauty is more than a workplace—it’s a family built on trust, resilience, and genuine care for every client who sits in our chairs.”',
      photoUrl: '/images/stylist_annamarie.jpg',
      photoAlt: 'AnnaMarie Roman, stylist',
      accentBadge: 'Stylist',
    },
    {
      id: 'avery',
      name: 'Avery',
      title: 'Student Stylist | Secretary',
      experience: 'Emerging Talent & Guest Care',
      specialty: 'Client hospitality · Blowouts & styling · Scheduling & salon support',
      philosophy: '“Creating a welcoming, warm atmosphere from the moment you step into the salon so every visit feels relaxing, seamless, and joyful.”',
      photoUrl: '/images/stylist_avery.jpg',
      photoAlt: 'Avery, student stylist and secretary',
      accentBadge: 'Student Stylist',
    },
  ];

  const handleImgError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="stylists" className="py-24 bg-[#FFFDF9] border-b border-[#EFE9DF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-[#8A7A68] uppercase mb-3">
            <span>Meet The Team</span>
            <span aria-hidden="true">·</span>
            <span>Dedicated Women &amp; Genuine Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#221E19] leading-[1.15] mb-4">
            A family built on trust, resilience, and love for what we do.
          </h2>
          <p className="text-base text-[#665D51] leading-relaxed">
            At Renew and Restore Beauty, our heart lies in the incredible women who show up every single day with unmatched dedication, passion, and genuine care for every client.
          </p>
        </div>

        {/* Stylists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stylists.map((stylist) => (
            <div
              key={stylist.id}
              className="bg-[#FAF7F2] rounded-2xl border border-[#EDE4D5] overflow-hidden flex flex-col justify-between group hover:border-[#D5C3AB] transition-all shadow-[0_2px_16px_rgba(40,30,20,0.02)]"
            >
              {/* Stylist Authentic Portrait Photo */}
              <div className="relative aspect-[4/3] bg-[#F4EFE6] overflow-hidden border-b border-[#EDE4D5]">
                {!imgErrors[stylist.id] ? (
                  <img
                    src={stylist.photoUrl}
                    alt={stylist.photoAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    onError={() => handleImgError(stylist.id)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#EFE9DF] text-[#6E6355]">
                    <User className="w-12 h-12 stroke-1" />
                  </div>
                )}

                {/* Subtle soft gradient scrim for label legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

                {/* Specialty Tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[#3E352B] border border-[#E9E1D2] shadow-xs">
                    {stylist.accentBadge}
                  </span>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#827668] mb-1">
                    <span>{stylist.experience}</span>
                    <span className="text-[#849C78] font-medium">Accepting New Clients</span>
                  </div>

                  <h3 className="text-xl font-serif text-[#221D17] mb-1">
                    {stylist.name}
                  </h3>

                  <p className="text-xs font-medium text-[#7D7060] mb-4">
                    {stylist.title}
                  </p>

                  <p className="text-xs text-[#52483C] leading-relaxed mb-4">
                    <strong className="font-semibold text-[#30281F]">Specialty: </strong>
                    {stylist.specialty}
                  </p>

                  <p className="text-xs italic text-[#635749] leading-relaxed border-l-2 border-[#D7C4AE] pl-3 py-1 bg-[#F5EFE6]/50 rounded-r-md">
                    {stylist.philosophy}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EFE7D8]">
                  <button
                    onClick={() => onBookStylist(stylist.name)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-[#DAC9B2] text-xs font-medium text-[#29231D] hover:bg-[#2D2822] hover:text-white hover:border-[#2D2822] transition-colors"
                  >
                    <span>Reserve with {stylist.name.split(' ')[0]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
