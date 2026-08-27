import React from 'react';
import {
  Calendar,
  Clock,
  Tag,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  Phone,
  HelpCircle,
  AlertCircle,
} from 'lucide-react';
import { PageId, Language } from '../types';
import { SERVICES_DATA } from '../data/services';
import { TRANSLATIONS } from '../data/translations';
import { BUSINESS_INFO } from '../data/business';

interface ServiceDetailPageProps {
  serviceId?: string;
  onNavigate: (page: PageId, param?: string) => void;
  language: Language;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceId,
  onNavigate,
  language,
}) => {
  const t = TRANSLATIONS[language];
  const isThai = language === 'th';

  // Find target service or fallback to first
  const service =
    SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];

  const relatedServices = SERVICES_DATA.filter(
    (s) => s.category === service.category && s.id !== service.id
  ).slice(0, 3);

  const categoryNames: Record<string, string> = {
    hair: t.catHair,
    nails: t.catNails,
    facial: t.catFacial,
    spa: t.catSpa,
  };

  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <div>
        <button
          onClick={() => onNavigate('services')}
          className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-[#5D5966] hover:text-[#9E7D39] transition-colors py-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.backToServices}</span>
        </button>
      </div>

      {/* Main Service Presentation Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Large Service Image */}
        <div className="lg:col-span-6 relative">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-[#EAE1D6] bg-[#F4ECE4] h-[360px] sm:h-[480px]">
            <img
              src={service.image}
              alt={isThai ? service.thaiTitle : service.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-4 left-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider text-[#202025] bg-white/90 backdrop-blur-md shadow-xs uppercase">
              {categoryNames[service.category]}
            </span>
          </div>
        </div>

        {/* Title, Subtitle, Full Description, and Meta badges */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#9E7D39] uppercase block mb-1">
              {categoryNames[service.category]}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#202025] leading-tight">
              {isThai ? service.thaiTitle : service.title}
            </h1>
            <p className="text-sm sm:text-base text-[#7C7782] italic mt-2">
              {isThai ? service.thaiSubtitle : service.subtitle}
            </p>
          </div>

          <p className="text-base text-[#4E4A56] leading-relaxed">
            {isThai ? service.thaiFullDesc : service.fullDesc}
          </p>

          {/* Duration & Price Fields (strictly following guidelines) */}
          <div className="grid grid-cols-2 gap-4 p-5 rounded-2xl bg-white border border-[#EAE1D6] shadow-2xs">
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E9AA6] block">
                  {t.durationLabel}
                </span>
                <span className="text-sm font-semibold text-[#202025]">
                  {isThai ? service.thaiDuration : service.duration}
                </span>
                <span className="text-[10px] text-[#918C99] block mt-0.5">
                  {isThai ? 'ขึ้นอยู่กับบริการเฉพาะ' : 'Subject to consultation'}
                </span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Tag className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E9AA6] block">
                  {t.priceLabel}
                </span>
                <span className="text-sm font-semibold text-[#202025]">
                  {isThai ? service.thaiPriceDisplay : service.priceDisplay}
                </span>
                <span className="text-[10px] text-[#918C99] block mt-0.5">
                  {isThai ? 'สอบถามราคาประเมิน' : 'Personalized quote'}
                </span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => onNavigate('booking', service.id)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#202025] hover:bg-[#C5A059] text-white text-xs font-bold tracking-[0.16em] uppercase shadow-md hover:shadow-xl transition-all flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.bookThisService}</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-white hover:bg-[#FAF6F0] text-[#202025] border border-[#D5C7B5] text-xs font-bold tracking-[0.16em] uppercase transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>{t.callNow}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3 Columns Information: Benefits, What to Expect, Preparation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        {/* Key Benefits */}
        <div className="bg-white p-7 rounded-3xl border border-[#EAE1D6] shadow-2xs space-y-4">
          <div className="flex items-center space-x-2.5 text-[#9E7D39]">
            <Sparkles className="w-5 h-5" />
            <h3 className="font-serif text-lg font-bold text-[#202025]">
              {t.benefitsTitle}
            </h3>
          </div>
          <ul className="space-y-3">
            {(isThai ? service.thaiBenefits : service.benefits).map((benefit, idx) => (
              <li key={idx} className="flex items-start space-x-2.5 text-xs text-[#5D5966] leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What to Expect */}
        <div className="bg-white p-7 rounded-3xl border border-[#EAE1D6] shadow-2xs space-y-4">
          <div className="flex items-center space-x-2.5 text-[#9E7D39]">
            <HelpCircle className="w-5 h-5" />
            <h3 className="font-serif text-lg font-bold text-[#202025]">
              {t.whatToExpectTitle}
            </h3>
          </div>
          <ol className="space-y-3">
            {(isThai ? service.thaiWhatToExpect : service.whatToExpect).map((step, idx) => (
              <li key={idx} className="flex items-start space-x-2.5 text-xs text-[#5D5966] leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-[#FAF4ED] text-[#C5A059] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-[#DFCA9B]/40">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* How to Prepare */}
        <div className="bg-white p-7 rounded-3xl border border-[#EAE1D6] shadow-2xs space-y-4">
          <div className="flex items-center space-x-2.5 text-[#9E7D39]">
            <AlertCircle className="w-5 h-5" />
            <h3 className="font-serif text-lg font-bold text-[#202025]">
              {t.preparationTitle}
            </h3>
          </div>
          <ul className="space-y-3">
            {(isThai ? service.thaiPreparation : service.preparation).map((prep, idx) => (
              <li key={idx} className="flex items-start space-x-2.5 text-xs text-[#5D5966] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-1.5" />
                <span>{prep}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE1D6] text-[11px] text-[#7C7782]">
            {isThai
              ? 'หากคุณมีข้อจำกัดหรืออาการแพ้ สามารถแจ้งทีมงานของเราได้เสมอ'
              : 'Our specialists will consult with you on the day to ensure supreme comfort.'}
          </div>
        </div>
      </div>

      {/* Related Services in Same Category */}
      {relatedServices.length > 0 && (
        <div className="pt-12 border-t border-[#EAE1D6]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#9E7D39] uppercase">
                {isThai ? 'บริการที่เกี่ยวข้อง' : 'Explore More'}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#202025]">
                {isThai ? 'บริการอื่นๆ ในหมวดเดียวกัน' : 'Complementary Treatments'}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs font-semibold text-[#9E7D39] hover:underline"
            >
              {t.viewAllServices} →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onNavigate('service-detail', rel.id)}
                className="group cursor-pointer bg-white rounded-2xl border border-[#EAE1D6] hover:border-[#C5A059] overflow-hidden p-4 flex items-center space-x-4 transition-all hover:shadow-md"
              >
                <img
                  src={rel.image}
                  alt={isThai ? rel.thaiTitle : rel.title}
                  className="w-20 h-20 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform"
                />
                <div>
                  <h3 className="font-serif text-base font-bold text-[#202025] group-hover:text-[#9E7D39] transition-colors leading-snug">
                    {isThai ? rel.thaiTitle : rel.title}
                  </h3>
                  <span className="text-xs text-[#7C7782] block mt-1">
                    {isThai ? rel.thaiDuration : rel.duration}
                  </span>
                  <span className="text-xs font-semibold text-[#C5A059] inline-flex items-center space-x-1 mt-1">
                    <span>{t.learnMore}</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
