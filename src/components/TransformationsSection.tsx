import React, { useState } from 'react';
import { Sparkles, Sliders, Quote } from 'lucide-react';

export const TransformationsSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      client: 'Maya S.',
      role: 'Landscape Architect',
      session: 'Intuitive Shape Cut & Botanical Gloss',
      quote: 'I had stopped wearing my hair down because it felt dull and heavy. My stylist listened closely to my morning routine and reshaped it to dry naturally in the sun. I walked out standing taller.',
      stats: 'Restored bounce · 15-min morning routine',
    },
    {
      client: 'Claire B.',
      role: 'Author & Educator',
      session: 'Sunlit Balayage & Scalp Reset',
      quote: 'The quiet wash room alone was worth every minute. No frantic chatter or harsh chemical smells. Just warm steam towels, rosemary oil, and hair that looks like I spent a month by the sea.',
      stats: 'Zero brassiness · 5 months grow-out ease',
    },
    {
      client: 'Nora V.',
      role: 'Interior Designer',
      session: 'Complete Renewal Experience',
      quote: 'As someone who easily gets overstimulated, regular salons were a stressful chore. Renew & Restore was an oasis. The light, the gentle rhythm, and the care they took made me feel so respected.',
      stats: 'Deep scalp comfort · Natural glass shine',
    },
  ];

  return (
    <section id="transformations" className="py-24 bg-[#FAF7F2] border-b border-[#EFE8DE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-[#8A7A68] uppercase mb-3">
            <span>Stories of Renewal</span>
            <span aria-hidden="true">·</span>
            <span>Natural Confidence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#221E19] leading-[1.15] mb-4">
            Confidence is not an illusion. It is healthy hair moving freely.
          </h2>
          <p className="text-base text-[#665D51] leading-relaxed">
            We do not believe in masking your natural texture with heavy lacquers or endless heat damage. We work with the hair you were born with, restoring its inherent strength and light.
          </p>
        </div>

        {/* Two-Column: Interactive Renewal Slider + Attributable Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Before/After Visual Slider */}
          <div className="lg:col-span-7">
            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#EDE4D5] shadow-xs space-y-4">
              <div className="flex items-center justify-between text-xs text-[#6F6456]">
                <span className="font-medium text-[#2E2822]">Restorative Shift</span>
                <span className="text-[11px] bg-[#F5EFE6] px-2 py-0.5 rounded text-[#5D5245]">
                  Drag slider to compare
                </span>
              </div>

              {/* Slider Container */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden select-none border border-[#E9DFD0] bg-[#FAF8F5]">
                {/* AFTER IMAGE (Underneath, Full) */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src="/images/transformation_after.jpg"
                    alt="After: Healthy, restored, naturally radiant hair with renewed shine and hydration"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  {/* After label */}
                  <div className="absolute top-4 right-4 bg-[#2D2822]/90 backdrop-blur-xs px-3 py-1.5 rounded-lg text-white text-xs font-medium shadow-xs">
                    Renewed Shine
                  </div>
                </div>

                {/* BEFORE IMAGE (Clipped on the left side by sliderPosition) */}
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img
                    src="/images/transformation_before.jpg"
                    alt="Before: Over-processed & dehydrated hair with dry, depleted texture and lack of shine"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  {/* Before label */}
                  <div className="absolute top-4 left-4 bg-[#54483C]/90 backdrop-blur-xs px-3 py-1.5 rounded-lg text-white text-xs font-medium shadow-xs">
                    Depleted Texture
                  </div>
                </div>

                {/* Vertical Divider Line with handle */}
                <div 
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.35)] z-10 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-md border border-[#D8C7B0] flex items-center justify-center">
                    <Sliders className="w-3.5 h-3.5 text-[#5A4E40] rotate-90" />
                  </div>
                </div>

                {/* Range input overlay for smooth touch and click dragging */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  aria-label="Comparison slider between depleted and renewed hair"
                />
              </div>

              {/* Caption */}
              <div className="flex items-center justify-between text-xs text-[#807466] pt-1">
                <span>Before: Over-processed & dehydrated</span>
                <span>After: Healthy, restored, naturally radiant hair</span>
              </div>
            </div>
          </div>

          {/* Right Column: Attributable Real Client Stories */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {stories.map((item, idx) => (
                <div
                  key={item.client}
                  onClick={() => setActiveStory(idx)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    activeStory === idx
                      ? 'bg-white border-[#D6C4AD] shadow-xs'
                      : 'bg-white/40 border-[#EDE3D4] hover:bg-white/80'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-[#7F7466] mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#2B251E]">{item.client}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.role}</span>
                    </div>
                    <span className="text-[11px] text-[#938779]">{item.session}</span>
                  </div>

                  <p className="text-sm text-[#4E4438] leading-relaxed italic mb-4">
                    “{item.quote}”
                  </p>

                  <div className="flex items-center gap-2 text-xs font-medium text-[#7A936E]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{item.stats}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
