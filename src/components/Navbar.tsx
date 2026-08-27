import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Sparkles, MapPin } from 'lucide-react';
import { PageId, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { BUSINESS_INFO } from '../data/business';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, param?: string) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  language,
  onLanguageChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = TRANSLATIONS[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: t.navHome },
    { id: 'about', label: t.navAbout },
    { id: 'services', label: t.navServices },
    { id: 'gallery', label: t.navGallery },
    { id: 'promotions', label: t.navPromotions },
    { id: 'booking', label: t.navBooking },
    { id: 'contact', label: t.navContact },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#EAE1D6] py-3'
            : 'bg-[#FAF8F5]/80 backdrop-blur-sm border-b border-[#F0E8DF] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex flex-col items-start text-left shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded"
            aria-label="Darin Beauty and Spa Home"
          >
            <div className="flex items-center space-x-1.5">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.16em] sm:tracking-[0.18em] text-[#202025] group-hover:text-[#9E7D39] transition-colors whitespace-nowrap">
                DARIN
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059] transition-transform group-hover:scale-110 shrink-0" />
            </div>
            <span className="text-[8.5px] sm:text-[9.5px] tracking-[0.24em] sm:tracking-[0.28em] font-medium text-[#7C7782] uppercase whitespace-nowrap">
              BEAUTY & SPA • BANGKOK
            </span>
          </button>

          {/* Desktop Navigation Links (Clean Single-Line Alignment) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-7 shrink-0" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xs xl:text-[13px] font-medium tracking-wider uppercase transition-colors relative py-1 whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A059] ${
                    isActive
                      ? 'text-[#9E7D39] font-semibold'
                      : 'text-[#3D3B42] hover:text-[#C5A059]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A059] rounded-full transition-all" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions: Language Selector + Compact Luxury Book CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#EFE9DF] rounded-full p-0.5 text-xs font-semibold tracking-wider shrink-0">
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded-full transition-all text-xs ${
                  language === 'en'
                    ? 'bg-white text-[#202025] shadow-xs'
                    : 'text-[#6C6872] hover:text-[#202025]'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('th')}
                className={`px-2.5 py-1 rounded-full transition-all text-xs ${
                  language === 'th'
                    ? 'bg-white text-[#202025] shadow-xs'
                    : 'text-[#6C6872] hover:text-[#202025]'
                }`}
                aria-label="เปลี่ยนเป็นภาษาไทย"
              >
                ไทย
              </button>
            </div>

            {/* Compact Professional Book Appointment CTA Button */}
            <button
              onClick={() => handleNavClick('booking')}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 xl:px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#C5A059] via-[#CCA760] to-[#B89249] hover:from-[#B89047] hover:to-[#A47D34] rounded-full shadow-xs hover:shadow-md transition-all whitespace-nowrap shrink-0 active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5 shrink-0 text-white/95" />
              <span>{t.bookAppointment}</span>
            </button>
          </div>

          {/* Mobile & Tablet Right Controls (< lg): Language + Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex items-center bg-[#EFE9DF] rounded-full p-0.5 text-[11px] font-semibold shrink-0">
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  language === 'en' ? 'bg-white text-[#202025] shadow-xs' : 'text-[#6C6872]'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('th')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  language === 'th' ? 'bg-white text-[#202025] shadow-xs' : 'text-[#6C6872]'
                }`}
              >
                ไทย
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-[#202025] hover:bg-[#EAE1D6] focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs transition-opacity lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FAF8F5] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-fade-in-soft"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-[#EAE1D6] pb-4 mb-6">
                <div>
                  <span className="font-serif text-xl font-bold tracking-[0.16em] text-[#202025]">
                    DARIN
                  </span>
                  <p className="text-[9px] tracking-[0.2em] text-[#7C7782] uppercase">
                    BEAUTY & SPA • BANGKOK
                  </p>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-[#4A4750] hover:bg-[#EAE1D6]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
                {navItems.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-[#F2ECE4] text-[#9E7D39] font-semibold'
                          : 'text-[#3D3B42] hover:bg-[#F7F2EC]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />}
                    </button>
                  );
                })}

                <button
                  onClick={() => handleNavClick('faq')}
                  className={`text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    currentPage === 'faq'
                      ? 'bg-[#F2ECE4] text-[#9E7D39] font-semibold'
                      : 'text-[#3D3B42] hover:bg-[#F7F2EC]'
                  }`}
                >
                  {t.navFaq}
                </button>
              </nav>
            </div>

            {/* Mobile Drawer Bottom Info & CTAs */}
            <div className="pt-6 border-t border-[#EAE1D6] space-y-4">
              <button
                onClick={() => handleNavClick('booking')}
                className="w-full py-3 text-center text-xs font-semibold tracking-[0.14em] uppercase text-white bg-gradient-to-r from-[#C5A059] to-[#9E7D39] rounded-xl shadow-md flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.bookAppointment}</span>
              </button>

              <div className="space-y-2 pt-2 text-xs text-[#595561]">
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="flex items-center space-x-2.5 p-2 rounded-lg hover:bg-[#EFE9DF] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span className="font-semibold text-[#202025]">{BUSINESS_INFO.phone}</span>
                </a>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2.5 p-2 rounded-lg hover:bg-[#EFE9DF] transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#C5A059]" />
                  <span>{BUSINESS_INFO.plusCode}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
