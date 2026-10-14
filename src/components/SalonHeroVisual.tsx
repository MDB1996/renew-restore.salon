import React, { useState } from 'react';
import { Sun, Heart, Sparkles, CheckCircle2, Eye, Compass } from 'lucide-react';

interface SalonHeroVisualProps {
  timeOfDay: 'morning' | 'noon' | 'afternoon';
  onTimeChange: (time: 'morning' | 'noon' | 'afternoon') => void;
}

export const SalonHeroVisual: React.FC<SalonHeroVisualProps> = ({
  timeOfDay,
  onTimeChange,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [viewAngle, setViewAngle] = useState<'floor' | 'craft'>('floor');
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  // Sunlight atmosphere lighting overlay based on selected time of day
  const lighting = {
    morning: {
      label: 'Morning Sun',
      timeText: '9:30 AM · Soft Dawn Light',
      overlayGradient: 'from-amber-100/15 via-yellow-50/5 to-transparent',
      filterStyle: 'brightness(1.01) contrast(1.01) saturate(1.02)',
    },
    noon: {
      label: 'Midday Radiance',
      timeText: '1:00 PM · Clear Natural Daylight',
      overlayGradient: 'from-white/10 via-yellow-50/5 to-transparent',
      filterStyle: 'brightness(1.02) contrast(1.0) saturate(1.0)',
    },
    afternoon: {
      label: 'Golden Hour',
      timeText: '4:45 PM · Warm Honey Glow',
      overlayGradient: 'from-amber-200/20 via-orange-100/10 to-transparent',
      filterStyle: 'brightness(0.99) contrast(1.02) saturate(1.05)',
    },
  }[timeOfDay];

  const currentImageSrc =
    viewAngle === 'floor'
      ? '/images/hero_salon_interior.jpg'
      : '/images/hero_salon_over_shoulder.jpg';

  const currentImageAlt =
    viewAngle === 'floor'
      ? 'Bright, open-concept modern salon interior with elegant styling stations, mirrors, and a stylist working naturally with a client in a relaxed chair'
      : 'Over-the-shoulder view of a stylist carefully shaping and styling healthy hair in a bright, sunlit salon environment';

  const handleImageError = (key: string) => {
    setImgErrors((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_16px_50px_rgba(60,45,30,0.07)] border border-[#EBE3D5] bg-[#FAF7F2] transition-colors duration-700">
      {/* Top Atmosphere Status, Angle Toggle & Daylight Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-[#F5EFE5]/80 border-b border-[#E8DFC8] text-xs text-[#6B6154]">
        {/* Salon Status Indicator */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#8EAA83] animate-pulse" />
          <span className="font-medium text-[#383129]">Renew &amp; Restore Studio</span>
          <span className="text-[#B5AAA0]">·</span>
          <span>{lighting.timeText}</span>
        </div>

        {/* View & Lighting Controls */}
        <div className="flex items-center gap-2.5">
          {/* Subtle View Angle Selector */}
          <div className="flex items-center gap-1 bg-[#EAE2D5]/70 p-0.5 rounded-lg text-[11px]">
            <button
              onClick={() => setViewAngle('floor')}
              className={`px-2 py-0.5 rounded-md font-medium transition-all ${
                viewAngle === 'floor'
                  ? 'bg-white text-[#29231D] shadow-xs font-semibold'
                  : 'text-[#7A6E60] hover:text-[#29231D]'
              }`}
              title="Wide view of salon floor, stations, and mirrors"
            >
              Salon Floor
            </button>
            <button
              onClick={() => setViewAngle('craft')}
              className={`px-2 py-0.5 rounded-md font-medium transition-all ${
                viewAngle === 'craft'
                  ? 'bg-white text-[#29231D] shadow-xs font-semibold'
                  : 'text-[#7A6E60] hover:text-[#29231D]'
              }`}
              title="Over-the-shoulder craft and hair detail"
            >
              Over-Shoulder
            </button>
          </div>

          {/* Segmented sunlight ambiance controller */}
          <div className="flex items-center gap-0.5 bg-[#EAE2D5]/80 p-0.5 rounded-lg">
            {(['morning', 'noon', 'afternoon'] as const).map((t) => (
              <button
                key={t}
                onClick={() => onTimeChange(t)}
                className={`px-2 py-0.5 rounded-md text-[11px] font-medium transition-all ${
                  timeOfDay === t
                    ? 'bg-white text-[#29231D] shadow-xs font-semibold'
                    : 'text-[#7A6E60] hover:text-[#29231D]'
                }`}
                title={`Switch salon daylight to ${t}`}
              >
                {t === 'morning' && 'Morning'}
                {t === 'noon' && 'Midday'}
                {t === 'afternoon' && 'Golden'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Visual: Realistic Salon Photography (Rear / Over-the-shoulder angle, faces not in focus) */}
      <div
        className="relative w-full aspect-[16/11] sm:aspect-[16/10] overflow-hidden select-none bg-[#F5EFE6]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!imgErrors[viewAngle] ? (
          <img
            key={currentImageSrc}
            src={currentImageSrc}
            alt={currentImageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-all duration-700 ease-out"
            style={{
              transform: isHovered ? 'scale(1.025)' : 'scale(1.0)',
              filter: lighting.filterStyle,
            }}
            onError={() => handleImageError(viewAngle)}
          />
        ) : (
          /* Graceful styled fallback container complying with Zero-Broken-Image policy */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#FAF6EE] to-[#EFE7DA] p-8 text-center">
            <Sun className="w-10 h-10 text-[#C4A47C] mb-3" />
            <h4 className="font-serif text-lg text-[#322A21]">Authentic Salon Environment</h4>
            <p className="text-xs text-[#6F6354] max-w-sm mt-1">
              Natural daylight, warm wood stations, and a skilled stylist working gently with a client.
            </p>
          </div>
        )}

        {/* Dynamic Natural Sunlight Light-Ray Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-tr ${lighting.overlayGradient} pointer-events-none transition-all duration-700`}
        />

        {/* Soft edge vignette to integrate with warm cream borders */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5 pointer-events-none" />

        {/* Atmospheric overlays emphasizing craft and environment over posed faces */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
          {/* Left: Moment description */}
          <div className="bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/80 shadow-xs text-xs text-[#3E362C] flex items-center gap-2">
            <Heart className="w-3.5 h-3.5 text-[#C47D65] fill-[#C47D65]/20" />
            <span className="font-semibold text-[#29221A]">
              {viewAngle === 'floor' ? 'Open Floor Plan:' : 'Attentive Craft:'}
            </span>
            <span className="text-[#685D50]">
              {viewAngle === 'floor'
                ? 'Warm caramel seating, dark wood flooring & clean black stations'
                : 'Focus on natural texture, healthy movement & precision'}
            </span>
          </div>

          {/* Right: Authenticity badge */}
          <div className="hidden sm:flex items-center gap-2 bg-[#FAF7F2]/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#E8DFC8] text-xs text-[#584D40]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#7E9674]" />
            <span>Restoring beauty from within</span>
          </div>
        </div>
      </div>

      {/* Under-image caption reflecting the real spirit of Renew & Restore Beauty */}
      <div className="px-5 py-3.5 bg-[#FAF7F2] border-t border-[#EBE3D5] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#73685B]">
        <p className="leading-relaxed">
          <strong className="text-[#262019] font-semibold">Welcoming, open, and unhurried.</strong> Warm caramel and tan salon chairs, rich dark wood flooring, soft ivory walls, and black styling stations in natural daylight.
        </p>
        <span className="shrink-0 text-[#827566] font-mono text-[11px]">
          1364 Acushnet Ave · Working Salon
        </span>
      </div>
    </div>
  );
};
