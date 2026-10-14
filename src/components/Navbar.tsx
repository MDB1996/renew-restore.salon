import React, { useState } from 'react';
import { Menu, X, Calendar, Clock, Sun } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'The Salon', href: '#sanctuary' },
    { label: 'Care Menu', href: '#rituals' },
    { label: 'Atmosphere', href: '#atmosphere' },
    { label: 'Stylists', href: '#stylists' },
    { label: 'Visit & Hours', href: '#visit' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EFE9DF] transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark in display serif face */}
        <a 
          href="#" 
          className="text-2xl font-serif tracking-tight text-[#1F1C18] hover:text-[#524639] transition-colors"
          aria-label="Renew & Restore Beauty Homepage"
        >
          Renew &amp; Restore Beauty
        </a>

        {/* Zone 2: 4–6 text navigation links with subtle hover underlines */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#645A4F]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#1F1C18] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#8C7B6B] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1–2 primary actions */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 text-xs font-medium tracking-wide uppercase text-white bg-[#2D2822] hover:bg-[#433B32] active:bg-[#1E1A16] rounded-xl transition-all shadow-xs whitespace-nowrap"
          >
            Reserve a Visit
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="px-3.5 py-2 text-xs font-medium text-white bg-[#2D2822] rounded-lg whitespace-nowrap"
          >
            Reserve
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#4A4238] hover:text-[#1F1C18] rounded-lg"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#EFE9DF] bg-[#FAF8F5] px-6 py-5 space-y-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#4D453C] hover:text-[#1F1C18] py-1 border-b border-[#F4EFE6]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-center text-xs font-medium tracking-wider uppercase text-white bg-[#2D2822] rounded-xl"
            >
              Reserve an Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
