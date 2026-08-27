import React from 'react';
import { Phone, Navigation, Calendar } from 'lucide-react';
import { PageId, Language } from '../types';
import { BUSINESS_INFO } from '../data/business';

interface MobileBottomBarProps {
  onNavigate: (page: PageId, param?: string) => void;
  language: Language;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onNavigate, language }) => {
  const isThai = language === 'th';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#EAE1D6] px-3 py-2 shadow-lg safe-area-pb">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Call CTA */}
        <a
          href={`tel:${BUSINESS_INFO.phoneClean}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white border border-[#E8DFC8] text-[#202025] hover:bg-[#FAF6F0] active:scale-95 transition-all shadow-2xs"
          aria-label="Call salon"
        >
          <Phone className="w-4 h-4 text-[#C5A059] mb-1" />
          <span className="text-[11px] font-semibold tracking-tight leading-none">
            {isThai ? 'โทรเลย' : 'Call Now'}
          </span>
        </a>

        {/* Directions CTA */}
        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white border border-[#E8DFC8] text-[#202025] hover:bg-[#FAF6F0] active:scale-95 transition-all shadow-2xs"
          aria-label="Get directions to salon"
        >
          <Navigation className="w-4 h-4 text-[#C5A059] mb-1" />
          <span className="text-[11px] font-semibold tracking-tight leading-none">
            {isThai ? 'แผนที่' : 'Directions'}
          </span>
        </a>

        {/* Book Appointment CTA */}
        <button
          onClick={() => onNavigate('booking')}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#9E7D39] text-white active:scale-95 transition-all shadow-xs"
          aria-label="Book appointment"
        >
          <Calendar className="w-4 h-4 text-white mb-1" />
          <span className="text-[11px] font-semibold tracking-tight leading-none">
            {isThai ? 'จองคิว' : 'Book'}
          </span>
        </button>
      </div>
    </div>
  );
};
