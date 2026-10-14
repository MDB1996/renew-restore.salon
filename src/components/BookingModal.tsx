import React, { useState } from 'react';
import { X, Calendar, Clock, Check, Sparkles, User, Mail, Phone, Heart } from 'lucide-react';
import { RitualItem } from './RitualsSection';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRitual?: RitualItem | null;
  preselectedStylist?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedRitual,
  preselectedStylist,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedRitual, setSelectedRitual] = useState<string>(
    preselectedRitual ? preselectedRitual.id : 'bespoke-cut'
  );
  const [selectedStylist, setSelectedStylist] = useState<string>(
    preselectedStylist || 'first-available'
  );
  const [sessionStyle, setSessionStyle] = useState<'quiet' | 'conversational'>('conversational');
  const [selectedDate, setSelectedDate] = useState('Thursday, October 15');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  
  // Guest details form state
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestNotes, setGuestNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmedBookingId, setConfirmedBookingId] = useState<string | null>(null);

  if (!isOpen) return null;

  const ritualNames: Record<string, { title: string; duration: string; price: string }> = {
    'hair-care-treatment': { title: 'Restorative Hair Care Treatment', duration: '50 min', price: '$110' },
    'bespoke-cut': { title: 'Precision Cut & Lived-In Styling', duration: '70 min', price: '$125' },
    'highlights-balayage': { title: 'Luminous Multi-Dimensional Highlights', duration: '140 min', price: '$265' },
    'full-color': { title: 'Full Color Radiant Hair Service', duration: '90 min', price: '$165' },
    'butterfly-weft-extensions': { title: 'Butterfly Weft Extensions by Malia', duration: '90 min', price: 'Consultation' },
    'eyelash-extensions': { title: 'Custom Luxury Eyelash Extensions', duration: '120 min', price: '$180' },
    'scalp-reset': { title: 'Botanical Scalp & Follicle Reset', duration: '60 min', price: '$135' },
    'complete-renewal': { title: 'The R&R Complete Renewal Experience', duration: '180 min', price: '$380' },
  };

  const handleNextToDetails = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!guestName.trim()) newErrors.name = 'Please enter your name';
    if (!guestEmail.trim() || !guestEmail.includes('@')) newErrors.email = 'Please provide a valid email';
    if (!guestPhone.trim()) newErrors.phone = 'Please provide a contact phone';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const randomId = 'RRB-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmedBookingId(randomId);
    setStep(3);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1F1C18]/40 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-[#FAF8F5] rounded-2xl border border-[#EDE4D5] shadow-2xl p-6 sm:p-8 my-8 text-[#2D2821] animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#7D7060] hover:text-[#201C18] hover:bg-[#F2ECE1] transition-colors"
          aria-label="Close reservation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-[#8A7A68] block mb-1">
            Renew &amp; Restore Beauty · New Bedford
          </span>
          <h2 id="booking-modal-title" className="text-2xl font-serif text-[#221D17]">
            {step === 3 ? 'Your Visit is Confirmed' : 'Reserve Your Moment of Care'}
          </h2>
          {step !== 3 && (
            <p className="text-xs text-[#6F6355] mt-1">
              Step {step} of 2 · Unhurried 1-on-1 dedicated time
            </p>
          )}
        </div>

        {/* STEP 1: Service, Stylist, Atmosphere & Schedule Selection */}
        {step === 1 && (
          <form onSubmit={handleNextToDetails} className="space-y-6">
            {/* Ritual Picker */}
            <div>
              <label className="text-xs font-semibold text-[#3C342A] uppercase tracking-wider block mb-2">
                1. Select Service
              </label>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {Object.entries(ritualNames).map(([id, info]) => {
                  const isSelected = selectedRitual === id;
                  return (
                    <button
                      type="button"
                      key={id}
                      onClick={() => setSelectedRitual(id)}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between text-xs ${
                        isSelected
                          ? 'bg-white border-[#C9B59C] shadow-xs ring-1 ring-[#C9B59C]'
                          : 'bg-[#F4ECE1]/60 border-[#E8DED0] hover:bg-white text-[#52493D]'
                      }`}
                    >
                      <div>
                        <span className="font-medium text-[#262018] block">{info.title}</span>
                        <span className="text-[11px] text-[#7A6F62]">{info.duration}</span>
                      </div>
                      <span className="font-mono font-semibold text-[#29221A]">{info.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Stylist Preference */}
            <div>
              <label className="text-xs font-semibold text-[#3C342A] uppercase tracking-wider block mb-2">
                2. Stylist / Artist Preference
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {[
                  { id: 'first-available', label: 'First Open' },
                  { id: 'Monique Gagne', label: 'Monique G.' },
                  { id: 'Rebecca Sharples', label: 'Rebecca S.' },
                  { id: 'AnnaMarie Roman', label: 'AnnaMarie R.' },
                  { id: 'Avery', label: 'Avery' },
                ].map((s) => (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => setSelectedStylist(s.id)}
                    className={`p-2.5 rounded-xl border text-xs font-medium text-center transition-all ${
                      selectedStylist === s.id
                        ? 'bg-white border-[#C9B59C] shadow-xs text-[#221D17]'
                        : 'bg-[#F4ECE1]/40 border-[#E8DED0] text-[#695E51] hover:bg-white'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Session Atmosphere (Quiet Chair vs Conversation) */}
            <div>
              <label className="text-xs font-semibold text-[#3C342A] uppercase tracking-wider block mb-2">
                3. Chair Atmosphere
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSessionStyle('conversational')}
                  className={`p-3 rounded-xl border text-left text-xs transition-all ${
                    sessionStyle === 'conversational'
                      ? 'bg-white border-[#C9B59C] shadow-xs'
                      : 'bg-[#F4ECE1]/40 border-[#E8DED0] text-[#63574A]'
                  }`}
                >
                  <span className="font-medium text-[#241E17] block">Gentle Dialogue</span>
                  <span className="text-[11px] text-[#7A6F62]">Relaxed friendly salon exchange</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSessionStyle('quiet')}
                  className={`p-3 rounded-xl border text-left text-xs transition-all ${
                    sessionStyle === 'quiet'
                      ? 'bg-white border-[#C9B59C] shadow-xs'
                      : 'bg-[#F4ECE1]/40 border-[#E8DED0] text-[#63574A]'
                  }`}
                >
                  <span className="font-medium text-[#241E17] block">Silent Chair</span>
                  <span className="text-[11px] text-[#7A6F62]">Quiet reading, rest & tea</span>
                </button>
              </div>
            </div>

            {/* Time Slot */}
            <div>
              <label className="text-xs font-semibold text-[#3C342A] uppercase tracking-wider block mb-2">
                4. Preferred Time Window
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['9:30 AM', '1:00 PM', '3:30 PM'].map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`py-2 px-3 rounded-xl border text-xs font-mono text-center transition-all ${
                      selectedTime === slot
                        ? 'bg-white border-[#C9B59C] shadow-xs font-semibold text-[#221D17]'
                        : 'bg-[#F4ECE1]/40 border-[#E8DED0] text-[#685D50] hover:bg-white'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-[#2D2822] text-white text-xs font-medium uppercase tracking-wider hover:bg-[#433B32] transition-colors"
              >
                Continue to Guest Details
              </button>
              <div className="text-center">
                <a
                  href="https://www.vagaro.com/renewandrestorebeauty"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[11px] text-[#1A56DB] hover:underline"
                >
                  Or schedule directly via Vagaro Online Booking ↗
                </a>
              </div>
            </div>
          </form>
        )}

        {/* STEP 2: Guest Details Form */}
        {step === 2 && (
          <form onSubmit={handleFinalSubmit} className="space-y-4">
            <div className="p-3.5 rounded-xl bg-[#F5EFE6] border border-[#E9DFD2] text-xs text-[#52473A] space-y-1">
              <div className="flex justify-between font-medium">
                <span>{ritualNames[selectedRitual]?.title}</span>
                <span className="font-mono">{ritualNames[selectedRitual]?.price}</span>
              </div>
              <div className="text-[11px] text-[#7A6F62]">
                With: {selectedStylist === 'first-available' ? 'First Available Stylist' : selectedStylist} · {sessionStyle === 'quiet' ? 'Silent Chair' : 'Gentle Dialogue'} · {selectedTime}
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-[#463D33] block mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g. Eleanor Vance"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDCFBE] bg-white text-sm text-[#241F1A] placeholder-[#9E9284] focus:border-[#8C7B6B]"
              />
              {errors.name && <p className="text-[11px] text-rose-700 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="text-xs font-medium text-[#463D33] block mb-1">
                Email Address *
              </label>
              <input
                type="email"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                placeholder="eleanor@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDCFBE] bg-white text-sm text-[#241F1A] placeholder-[#9E9284] focus:border-[#8C7B6B]"
              />
              {errors.email && <p className="text-[11px] text-rose-700 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="text-xs font-medium text-[#463D33] block mb-1">
                Mobile Number *
              </label>
              <input
                type="tel"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                placeholder="(774) 425-2817"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDCFBE] bg-white text-sm text-[#241F1A] placeholder-[#9E9284] focus:border-[#8C7B6B]"
              />
              {errors.phone && <p className="text-[11px] text-rose-700 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="text-xs font-medium text-[#463D33] block mb-1">
                Notes for Your Stylist (Optional)
              </label>
              <textarea
                rows={2}
                value={guestNotes}
                onChange={(e) => setGuestNotes(e.target.value)}
                placeholder="Share any sensitivities, current hair frustrations, or goals..."
                className="w-full px-3.5 py-2 rounded-xl border border-[#DDCFBE] bg-white text-sm text-[#241F1A] placeholder-[#9E9284] focus:border-[#8C7B6B]"
              />
            </div>

            <div className="flex items-center gap-3 pt-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-3 rounded-xl border border-[#DACBB8] text-xs font-medium text-[#4D4336] hover:bg-[#F2ECE1]"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-2/3 py-3 rounded-xl bg-[#2D2822] text-white text-xs font-medium uppercase tracking-wider hover:bg-[#433B32] transition-colors"
              >
                Confirm Reservation
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Booking Confirmed Success Card */}
        {step === 3 && (
          <div className="text-center space-y-6 py-4">
            <div className="w-14 h-14 rounded-full bg-[#EBF3E8] border border-[#CCDDC6] text-[#69885E] mx-auto flex items-center justify-center">
              <Check className="w-7 h-7" />
            </div>

            <div>
              <span className="font-mono text-xs text-[#7A6E60] bg-[#F4ECE1] px-2.5 py-1 rounded-md">
                Confirmation #{confirmedBookingId}
              </span>
              <h3 className="text-xl font-serif text-[#241F1A] mt-3">
                We look forward to welcoming you, {guestName.split(' ')[0]}
              </h3>
              <p className="text-xs text-[#6B5F51] mt-1 max-w-sm mx-auto leading-relaxed">
                A confirmation has been sent to <strong>{guestEmail}</strong> with arrival directions and pre-visit care notes.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#EBE1D2] text-left text-xs space-y-2 max-w-sm mx-auto">
              <div className="flex justify-between text-[#5C5144]">
                <span>Ritual:</span>
                <span className="font-medium text-[#29221B]">{ritualNames[selectedRitual]?.title}</span>
              </div>
              <div className="flex justify-between text-[#5C5144]">
                <span>Time:</span>
                <span className="font-medium text-[#29221B]">{selectedDate} at {selectedTime}</span>
              </div>
              <div className="flex justify-between text-[#5C5144]">
                <span>Stylist:</span>
                <span className="font-medium text-[#29221B]">
                  {selectedStylist === 'first-available' ? 'First Available Master Stylist' : selectedStylist}
                </span>
              </div>
              <div className="flex justify-between text-[#5C5144]">
                <span>Experience:</span>
                <span className="font-medium text-[#29221B]">
                  {sessionStyle === 'quiet' ? 'Silent Rest Chair' : 'Gentle Dialogue'}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl bg-[#2D2822] text-white text-xs font-medium uppercase tracking-wider hover:bg-[#433B32] transition-colors"
              >
                Return to Studio
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
