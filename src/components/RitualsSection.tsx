import React, { useState } from 'react';
import { Clock, Check, Sparkles, Plus, ArrowRight } from 'lucide-react';

export interface RitualItem {
  id: string;
  category: 'restoration' | 'cut' | 'color' | 'extensions' | 'lashes' | 'immersive';
  title: string;
  duration: string;
  price: string;
  description: string;
  highlights: string[];
  idealFor: string;
  buttonLabel?: string;
}

interface RitualsSectionProps {
  onSelectRitual: (ritual: RitualItem) => void;
}

export const RitualsSection: React.FC<RitualsSectionProps> = ({ onSelectRitual }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'restoration' | 'cut' | 'color' | 'extensions' | 'lashes' | 'immersive'>('all');

  const rituals: RitualItem[] = [
    {
      id: 'hair-care-treatment',
      category: 'restoration',
      title: 'Restorative Hair Care Treatment',
      duration: '50 min',
      price: '$110',
      description: 'Designed for ultimate indulgence, our restorative hair care treatments revive and replenish your hair, delivering restored shine, strength, and lasting smoothness.',
      highlights: ['Deep moisture cuticle sealing', 'Plant-lipid bond repair', 'Silky lightweight shine finish'],
      idealFor: 'Depleted, heat-stressed, or fragile hair longing for strength',
      buttonLabel: 'Book Restoration',
    },
    {
      id: 'bespoke-cut',
      category: 'cut',
      title: 'Precision Cut & Lived-In Styling',
      duration: '70 min',
      price: '$125',
      description: 'A bespoke precision cut designed to enhance your natural movement and lifestyle. Includes a thorough texture consultation, relaxing wash ritual, and effortless finish.',
      highlights: ['Custom dry and wet precision sculpting', 'Lived-in organic texture release', 'Effortless home styling recommendations'],
      idealFor: 'Anyone wanting healthy shape that moves naturally',
      buttonLabel: 'Book Haircut',
    },
    {
      id: 'highlights-balayage',
      category: 'color',
      title: 'Luminous Multi-Dimensional Highlights',
      duration: '140 min',
      price: '$265',
      description: 'Creates luminous, multi-dimensional color that enhances your natural beauty with seamless blending and precision. Finished with a nourishing tone refresh.',
      highlights: ['Seamless soft-blend lightening', 'Gentle low-odor formulas', 'Long-lasting natural grow-out'],
      idealFor: 'Sunlit dimensional brightness with gentle grow-out',
      buttonLabel: 'Book Highlights',
    },
    {
      id: 'full-color',
      category: 'color',
      title: 'Full Color Radiant Hair Service',
      duration: '90 min',
      price: '$165',
      description: 'Delivers rich, radiant color tailored perfectly to you, using premium formulas for long-lasting vibrancy, cuticle nourishment, and reflective shine.',
      highlights: ['Customized tone formulation', 'Nourishing scalp-safe barrier', 'Glossy multi-tonal reflection'],
      idealFor: 'Total color refresh, rich brunette, vibrant red, or seamless grey coverage',
      buttonLabel: 'Book Color',
    },
    {
      id: 'butterfly-weft-extensions',
      category: 'extensions',
      title: 'Butterfly Weft Extensions by Malia',
      duration: '90 min',
      price: 'Consultation',
      description: 'Our luxury hair extension service adding length, volume, and fullness. Installed using a beaded weft method without glue, tape, or heat for lightweight, flexible, and gentle wear.',
      highlights: ['Ethically sourced 100% human hair', 'Zero glue, tape, or heat damage', 'Re-adjustment maintenance every 6–8 weeks'],
      idealFor: 'Transformative length and fullness with natural movement',
      buttonLabel: 'Book Consultation',
    },
    {
      id: 'eyelash-extensions',
      category: 'lashes',
      title: 'Custom Luxury Eyelash Extensions',
      duration: '120 min',
      price: '$180',
      description: 'Expertly performed by Resident Eyelash & Brow Artist Rebecca. Enhances your eyes with beautifully customized, lightweight results for effortless daily glamour.',
      highlights: ['Custom eye-mapping consultation', 'Weightless medical-grade lash adhesive', 'Natural to full dramatic volume options'],
      idealFor: 'Waking up feeling effortlessly put-together and radiant',
      buttonLabel: 'Book Lash Extensions',
    },
    {
      id: 'scalp-reset',
      category: 'restoration',
      title: 'Botanical Scalp & Follicle Reset',
      duration: '60 min',
      price: '$135',
      description: 'A deep restorative treatment designed to clarify buildup, soothe inflammation, and stimulate micro-circulation with warm organic herbal oils and continuous head massage.',
      highlights: ['Scalp circulation assessment', 'Steam infusion with herbal extracts', 'Reclined quiet basin massage'],
      idealFor: 'Tired, dry, irritated, or congested scalp',
      buttonLabel: 'Book Scalp Therapy',
    },
    {
      id: 'complete-renewal',
      category: 'immersive',
      title: 'The R&R Complete Renewal Experience',
      duration: '180 min',
      price: '$380',
      description: 'Our signature immersive experience combining deep restorative hair therapy, a precision cut, and personalized radiant color gloss. Designed for a profound confidence reset.',
      highlights: ['Private quiet basin suite', 'Herbal refreshments & unhurried care', 'Full transformation finish'],
      idealFor: 'A full-body pause and complete hair & confidence renewal',
      buttonLabel: 'Book Complete Renewal',
    },
  ];

  const filtered = activeCategory === 'all' 
    ? rituals 
    : rituals.filter((r) => r.category === activeCategory);

  return (
    <section id="rituals" className="py-24 bg-[#FFFDF9] border-b border-[#EFE9E0]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading & Category Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-[#8A7A68] uppercase mb-3">
              <span>Care Menu & Offerings</span>
              <span aria-hidden="true">·</span>
              <span>Transparent Investment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#221E19] leading-[1.15]">
              Thoughtful rituals designed around your renewal.
            </h2>
          </div>

          {/* Interactive filter buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F5EFE6] rounded-xl overflow-x-auto shrink-0">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'restoration', label: 'Hair Care & Scalp' },
              { id: 'cut', label: 'Precision Cuts' },
              { id: 'color', label: 'Color & Highlights' },
              { id: 'extensions', label: 'Hair Extensions' },
              { id: 'lashes', label: 'Lashes & Brows' },
              { id: 'immersive', label: 'Complete Renewal' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all ${
                  activeCategory === tab.id
                    ? 'bg-white text-[#201C18] shadow-xs'
                    : 'text-[#6F6456] hover:text-[#201C18]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Rituals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((ritual) => (
            <div
              key={ritual.id}
              className="bg-[#FAF7F2] rounded-2xl p-7 border border-[#EBE3D5] hover:border-[#D4C3AC] transition-all flex flex-col justify-between group shadow-[0_2px_16px_rgba(40,30,20,0.02)]"
            >
              <div>
                {/* Meta: Duration and price unboxed */}
                <div className="flex items-center justify-between text-xs text-[#7A6F62] mb-4">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#918374]" />
                    <span>{ritual.duration}</span>
                  </div>
                  <span className="font-mono text-sm font-semibold text-[#29241E] tabular-nums">
                    {ritual.price}
                  </span>
                </div>

                <h3 className="text-xl font-serif text-[#221D17] mb-2.5 group-hover:text-[#1A56DB] transition-colors">
                  {ritual.title}
                </h3>

                <p className="text-sm text-[#61574B] leading-relaxed mb-6">
                  {ritual.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6 pt-4 border-t border-[#EFE7D8]">
                  <span className="text-[11px] font-semibold tracking-wider text-[#8C7D6D] uppercase block">
                    Session highlights:
                  </span>
                  <ul className="space-y-1.5">
                    {ritual.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-[#52493E] flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#7E9675] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#EFE7D8] flex items-center justify-between">
                <span className="text-[11px] text-[#7C7062] italic">
                  Includes organic botanical tea
                </span>
                <button
                  onClick={() => onSelectRitual(ritual)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-[#DAC9B2] text-xs font-medium text-[#29231D] hover:bg-[#2D2822] hover:text-white hover:border-[#2D2822] transition-colors whitespace-nowrap"
                >
                  <span>{ritual.buttonLabel || 'Book Service'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Session Note (A caring amenity for introverts / sensory relief) */}
        <div className="mt-12 bg-[#F6EFE5]/70 rounded-2xl p-6 sm:p-8 border border-[#E7DDCF] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h4 className="text-lg font-serif text-[#28221B] mb-1">
              Prefer a quiet appointment?
            </h4>
            <p className="text-xs sm:text-sm text-[#665B4E] leading-relaxed">
              We respect that renewal looks different for everyone. When reserving, you may request a “Silent Chair”—we will conduct your consultation with complete care, then let you enjoy soft music, read, or rest in peaceful silence without small talk.
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#D8C7B0] text-xs font-medium text-[#463D33]">
              <Sparkles className="w-3.5 h-3.5 text-[#889E7E]" />
              Complimentary on all offerings
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
