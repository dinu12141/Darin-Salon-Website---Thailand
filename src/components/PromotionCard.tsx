import React from 'react';
import { Calendar, CheckCircle2, Sparkles, Clock } from 'lucide-react';
import { PromotionItem, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface PromotionCardProps {
  promotion: PromotionItem;
  language: Language;
  onBookPromotion: (promotionTitle: string) => void;
}

export const PromotionCard: React.FC<PromotionCardProps> = ({
  promotion,
  language,
  onBookPromotion,
}) => {
  const t = TRANSLATIONS[language];
  const isThai = language === 'th';

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#EAE1D6] hover:border-[#C5A059]/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
      {/* Image half */}
      <div className="relative md:w-5/12 min-h-[240px] md:min-h-[300px] overflow-hidden bg-[#F4ECE4]">
        <img
          src={promotion.image}
          alt={isThai ? promotion.thaiTitle : promotion.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#202025] bg-[#FAF8F5]/90 backdrop-blur-md shadow-xs uppercase">
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            <span>{isThai ? promotion.thaiTag : promotion.tag}</span>
          </span>
        </div>
      </div>

      {/* Details half */}
      <div className="p-6 md:p-8 md:w-7/12 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-2xl font-bold text-[#202025] group-hover:text-[#9E7D39] transition-colors leading-tight">
            {isThai ? promotion.thaiTitle : promotion.title}
          </h3>

          <p className="text-sm text-[#4E4A56] mt-3 leading-relaxed">
            {isThai ? promotion.thaiDescription : promotion.description}
          </p>

          {/* Highlights */}
          <div className="mt-4 space-y-2">
            {(isThai ? promotion.thaiHighlights : promotion.highlights).map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 text-xs text-[#5D5966]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Validity + CTA */}
        <div className="mt-6 pt-5 border-t border-[#F2ECE4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs text-[#7C7782]">
            <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span className="italic">
              {isThai ? promotion.thaiValidity : promotion.validity}
            </span>
          </div>

          <button
            onClick={() => onBookPromotion(isThai ? promotion.thaiTitle : promotion.title)}
            className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-white bg-gradient-to-r from-[#C5A059] to-[#9E7D39] hover:from-[#B89047] hover:to-[#8E6E30] rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-center space-x-2 group-hover:scale-[1.02]"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.bookThisOffer}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
