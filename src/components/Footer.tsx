import React from 'react';
import { Sparkles, MapPin, Phone, ExternalLink } from 'lucide-react';
import { PageId, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { BUSINESS_INFO } from '../data/business';

interface FooterProps {
  onNavigate: (page: PageId, param?: string) => void;
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, language }) => {
  const t = TRANSLATIONS[language];

  return (
    <footer className="bg-[#1A1A1E] text-[#ECE8E1] pt-16 pb-24 lg:pb-12 border-t border-[#313038]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#2D2C34]">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-[#FAF8F5]">
                DARIN
              </span>
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
            </div>
            <p className="text-[10px] tracking-[0.3em] font-medium text-[#C5A059] uppercase">
              BEAUTY & SPA • BANGKOK
            </p>
            <p className="text-sm text-[#A8A4B0] leading-relaxed pr-2">
              {t.footerDesc}
            </p>
            <p className="text-xs italic text-[#D8CBBF]/80 pt-1 font-serif">
              "{language === 'th' ? BUSINESS_INFO.thaiPhilosophyQuote : BUSINESS_INFO.philosophyQuote}"
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="font-serif text-base tracking-wider text-[#FAF8F5] uppercase border-b border-[#2F2E36] pb-2">
              {language === 'th' ? 'เมนูหลัก' : 'Explore'}
            </h3>
            <ul className="space-y-2 text-sm text-[#B3AFBC]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#E5D3A6] transition-colors focus:outline-none"
                >
                  {t.navHome}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#E5D3A6] transition-colors focus:outline-none"
                >
                  {t.navAbout}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#E5D3A6] transition-colors focus:outline-none"
                >
                  {t.navServices}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#E5D3A6] transition-colors focus:outline-none"
                >
                  {t.navGallery}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('promotions')}
                  className="hover:text-[#E5D3A6] transition-colors focus:outline-none"
                >
                  {t.navPromotions}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Guest Care & Information */}
          <div className="space-y-3">
            <h3 className="font-serif text-base tracking-wider text-[#FAF8F5] uppercase border-b border-[#2F2E36] pb-2">
              {language === 'th' ? 'การบริการลูกค้า' : 'Guest Care'}
            </h3>
            <ul className="space-y-2 text-sm text-[#B3AFBC]">
              <li>
                <button
                  onClick={() => onNavigate('booking')}
                  className="hover:text-[#E5D3A6] transition-colors focus:outline-none"
                >
                  {t.navBooking}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#E5D3A6] transition-colors focus:outline-none"
                >
                  {t.navContact}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-[#E5D3A6] transition-colors focus:outline-none"
                >
                  {t.navFaq}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-[#E5D3A6] transition-colors focus:outline-none flex items-center space-x-1"
                >
                  <span>{t.navPrivacy}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Location & Google Profile */}
          <div className="space-y-3">
            <h3 className="font-serif text-base tracking-wider text-[#FAF8F5] uppercase border-b border-[#2F2E36] pb-2">
              {language === 'th' ? 'ที่ตั้งและการติดต่อ' : 'Location & Connect'}
            </h3>
            <div className="space-y-2.5 text-sm text-[#B3AFBC]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.plusCode}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="hover:text-[#FAF8F5] text-white font-medium transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              {/* Verified Google Business Profile Link */}
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-[#27262D] hover:bg-[#34333C] border border-[#3A3944] text-xs text-[#E5D3A6] font-medium transition-all group"
                >
                  <span>Google Business Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A8693] space-y-3 sm:space-y-0">
          <p>© 2026 {BUSINESS_INFO.name}. {t.rightsReserved}</p>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-[#ECE8E1] transition-colors"
            >
              {t.navPrivacy}
            </button>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <span>Bangkok, Thailand</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
