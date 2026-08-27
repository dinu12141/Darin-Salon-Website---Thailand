import React from 'react';
import { ArrowRight, Clock, Tag, Calendar } from 'lucide-react';
import { ServiceItem, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ServiceCardProps {
  service: ServiceItem;
  language: Language;
  onSelectService: (serviceId: string) => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  language,
  onSelectService,
  onBookService,
}) => {
  const t = TRANSLATIONS[language];
  const isThai = language === 'th';

  const categoryLabels: Record<string, string> = {
    hair: t.catHair,
    nails: t.catNails,
    facial: t.catFacial,
    spa: t.catSpa,
  };

  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#EAE1D6] hover:border-[#C5A059]/60 shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image container */}
      <div className="relative h-56 sm:h-60 overflow-hidden bg-[#F4ECE4]">
        <img
          src={service.image}
          alt={isThai ? service.thaiTitle : service.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Category tag */}
        <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider text-[#202025] uppercase shadow-xs">
          {categoryLabels[service.category] || service.category}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl font-bold text-[#202025] group-hover:text-[#9E7D39] transition-colors leading-snug">
            {isThai ? service.thaiTitle : service.title}
          </h3>
          <p className="text-xs text-[#7C7782] mt-1 font-medium italic">
            {isThai ? service.thaiSubtitle : service.subtitle}
          </p>
          <p className="text-sm text-[#4E4A56] mt-3 leading-relaxed line-clamp-2">
            {isThai ? service.thaiShortDesc : service.shortDesc}
          </p>

          {/* Details badge line */}
          <div className="mt-4 pt-4 border-t border-[#F0E8DF] grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center space-x-1.5 text-[#5D5966]">
              <Clock className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#9E9AA6] block">
                  {t.durationLabel}
                </span>
                <span className="font-medium text-[#202025]">
                  {isThai ? service.thaiDuration : service.duration}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-1.5 text-[#5D5966]">
              <Tag className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#9E9AA6] block">
                  {t.priceLabel}
                </span>
                <span className="font-medium text-[#202025]">
                  {isThai ? service.thaiPriceDisplay : service.priceDisplay}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-6 pt-4 border-t border-[#F4ECE4] flex items-center justify-between gap-3">
          <button
            onClick={() => onSelectService(service.id)}
            className="flex-1 py-2 px-3 text-xs font-semibold tracking-wider text-[#3D3B42] hover:text-[#9E7D39] hover:bg-[#FAF6F0] rounded-xl border border-[#DFD5C7] transition-colors flex items-center justify-center space-x-1"
          >
            <span>{t.learnMore}</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          <button
            onClick={() => onBookService(service.id)}
            className="flex-1 py-2 px-3 text-xs font-semibold tracking-wider text-white bg-[#202025] hover:bg-[#C5A059] rounded-xl transition-all flex items-center justify-center space-x-1 shadow-xs"
          >
            <Calendar className="w-3 h-3" />
            <span>{t.bookNow}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
