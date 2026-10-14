import React, { useState } from 'react';
import { Sparkles, Heart, Wind, Coffee, Droplet, Smile, Image as ImageIcon } from 'lucide-react';

interface StageDetail {
  number: string;
  title: string;
  shortDesc: string;
  quote: string;
  elements: string[];
  sensoryTone: string;
  imageSrc: string;
  imageAlt: string;
  caption: string;
}

export const AtmosphereSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const stages: StageDetail[] = [
    {
      number: '01',
      title: 'Abundant Natural Light',
      shortDesc: 'Expansive windows flood the styling floor with natural daylight, allowing you and your stylist to evaluate tone, texture, and dimension accurately.',
      quote: 'True daylight ensures your hair color, highlights, and cut look effortlessly vibrant outside the salon.',
      elements: ['Large bright windows with soft daylight diffusion', 'True-to-life tone and dimension visibility without harsh glare', 'A warm, welcoming, and open daytime styling floor'],
      sensoryTone: 'Natural Daylight · Accurate Color',
      imageSrc: '/images/hero_salon_interior.jpg',
      imageAlt: 'Spacious, wide interior view of the salon showcasing clean, comfortable surroundings, wood floors, and modern styling stations',
      caption: 'Natural Light · Bright daytime illumination showcasing genuine color and dimension',
    },
    {
      number: '02',
      title: 'Modern Styling Stations',
      shortDesc: 'Spacious, well-appointed stations featuring comfortable caramel chairs, sleek black accents, and professional salon equipment.',
      quote: 'Ergonomic seating and well-organized stations ensure you can relax comfortably throughout your entire appointment.',
      elements: ['Cushioned caramel salon chairs with supportive ergonomics', 'Full-height mirrors and modern black station accents', 'Professional high-performance styling tools and equipment'],
      sensoryTone: 'Ergonomic Comfort · Professional Equipment',
      imageSrc: '/images/hero_salon_over_shoulder.jpg',
      imageAlt: 'Professional stylist providing one-on-one personal attention and tailored hair styling from an over-the-shoulder perspective',
      caption: 'Modern Stations · Ergonomic caramel chairs and organized, professional styling stations',
    },
    {
      number: '03',
      title: 'One-on-One Personal Attention',
      shortDesc: 'Every appointment is dedicated exclusively to you. Your stylist takes time to listen to your goals, analyze your hair, and craft a personalized look.',
      quote: 'No rushed overlapping bookings. You receive our full focus, expertise, and guidance from start to finish.',
      elements: ['Comprehensive personal consultation before any service begins', 'Unhurried, dedicated appointment time without double-booking', 'Tailored recommendations for your individual hair goals and routine'],
      sensoryTone: 'Attentive Care · Focused Expertise',
      imageSrc: '/images/hero_salon_mirror_craft.jpg',
      imageAlt: 'Clean, modern styling station with illuminated mirrors, comfortable styling chair, and professional salon equipment',
      caption: 'Personal Attention · Dedicated one-on-one focus from your stylist throughout your visit',
    },
    {
      number: '04',
      title: 'Clean, Comfortable Surroundings',
      shortDesc: 'A pristine, inviting atmosphere with rich dark wood flooring, soft cream walls, and immaculate stations where you can truly relax.',
      quote: 'Impeccable cleanliness and a relaxed, welcoming atmosphere make every visit feel refreshing and effortless.',
      elements: ['Meticulously cleaned and sanitized stations and tools', 'Warm dark wood flooring, soft ivory walls, and uncluttered layout', 'Relaxed, professional atmosphere where you can feel at ease'],
      sensoryTone: 'Pristine Cleanliness · Relaxing Atmosphere',
      imageSrc: '/images/salon_interior_sunlit.jpg',
      imageAlt: 'Bright, sunlit modern salon interior with large windows, natural daylight, warm styling chairs, and dark wood flooring',
      caption: 'Comfortable Surroundings · Pristine, relaxed space designed for an enjoyable salon visit',
    },
  ];

  const current = stages[activeStage];

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section id="atmosphere" className="py-24 bg-[#FAF7F2] border-b border-[#EFE8DE] relative overflow-hidden">
      {/* Gentle ambient background sunlight glow */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-50/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-[#8A7A68] uppercase mb-3">
            <span>The Salon Experience</span>
            <span aria-hidden="true">·</span>
            <span>Salon Environment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#201C18] font-normal leading-[1.15] text-balance mb-4">
            A welcoming salon environment where your comfort comes first.
          </h2>
          <p className="text-base text-[#685E53] leading-relaxed">
            Most salons are rushed, noisy, and overwhelming. We designed our space to be the quiet antidote: a clean, light-filled environment where you receive the full, unhurried attention of your stylist.
          </p>
        </div>

        {/* Step Selector (Tab bar) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {stages.map((stage, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={stage.number}
                onClick={() => setActiveStage(idx)}
                className={`text-left p-5 rounded-xl border transition-all text-sm ${
                  isActive
                    ? 'bg-white border-[#D6C7B2] shadow-sm ring-1 ring-[#D6C7B2]/40'
                    : 'bg-[#F4ECE0]/40 border-[#E9DFCF] text-[#6E6457] hover:bg-white/60 hover:text-[#2E2822]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs ${isActive ? 'text-[#1A56DB] font-semibold' : 'text-[#8E8477]'}`}>
                    {stage.number}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#1A56DB]" />}
                </div>
                <div className={`font-medium ${isActive ? 'text-[#201C18]' : 'text-[#5B5247]'}`}>
                  {stage.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Stage Display: Two-Column Layout */}
        <div className="bg-white rounded-2xl border border-[#EDE5D8] shadow-[0_4px_30px_rgba(40,30,20,0.03)] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Descriptive Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs text-[#8A7A68]">
              <span className="font-mono">{current.number}</span>
              <span>/</span>
              <span className="font-medium text-[#4A4238]">{current.sensoryTone}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-[#241F1A]">
              {current.title}
            </h3>

            <p className="text-base text-[#5C5348] leading-relaxed">
              {current.shortDesc}
            </p>

            {/* Pull Quote */}
            <div className="p-4 rounded-xl bg-[#FAF7F2] border-l-2 border-[#CBB8A0] text-sm text-[#463E35] italic">
              “{current.quote}”
            </div>

            {/* Key Sanctuary Elements */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-semibold text-[#3D352B] tracking-wider uppercase block">
                What you will experience:
              </span>
              <ul className="space-y-2">
                {current.elements.map((el, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#5C5348]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8CA483] shrink-0" />
                    <span>{el}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Authentic Professional Salon Photography */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#EBE3D6] bg-[#FAF8F5] shadow-xs group">
              {!imageErrors[activeStage] ? (
                <img
                  src={current.imageSrc}
                  alt={current.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  onError={() => handleImageError(activeStage)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#FAF6EE] to-[#EFE7DA] p-6 text-center">
                  <ImageIcon className="w-8 h-8 text-[#C4A47C] mb-2" />
                  <span className="font-serif text-base text-[#2E2822]">{current.title}</span>
                  <p className="text-xs text-[#706456] mt-1">{current.shortDesc}</p>
                </div>
              )}

              {/* Natural light soft gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Real Photography Caption Badge */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90">
                <span className="bg-[#1F1C18]/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15">
                  {current.caption}
                </span>
                <span className="font-mono text-[11px] bg-white/20 backdrop-blur-md px-2 py-1 rounded text-white hidden sm:inline-block">
                  {current.number} / 04
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
