import React from 'react';
import { Sparkles, Info, Phone } from 'lucide-react';
import { PageId, Language } from '../types';
import { PROMOTIONS_DATA } from '../data/promotions';
import { BUSINESS_INFO } from '../data/business';
import { PromotionCard } from '../components/PromotionCard';

interface PromotionsPageProps {
  onNavigate: (page: PageId, param?: string) => void;
  language: Language;
}

export const PromotionsPage: React.FC<PromotionsPageProps> = ({ onNavigate, language }) => {
  const isThai = language === 'th';

  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-[#F4ECE4] text-[#9E7D39] text-xs font-semibold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isThai ? 'ข้อเสนอพิเศษ & แพ็กเกจ' : 'Curated Packages & Offers'}</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#202025] leading-tight">
          {isThai ? 'ช่วงเวลาแห่งความงามที่คุณคู่ควร' : 'Beauty Moments Worth Sharing'}
        </h1>

        <p className="text-base sm:text-lg text-[#5D5966] leading-relaxed">
          {isThai
            ? 'ค้นพบข้อเสนอพิเศษที่ออกแบบมาเพื่อมอบความคุ้มค่าและความผ่อนคลายในแบบเฉพาะคุณ'
            : 'Indulge in our tailored service combinations, seasonal treatments, and first-time guest experiences in Bangkok.'}
        </p>

        {/* Informative notice */}
        <div className="mt-4 p-4 rounded-2xl bg-[#F8F3ED] border border-[#EAE0D3] text-xs text-[#6C6872] flex items-center justify-center space-x-2">
          <Info className="w-4 h-4 text-[#C5A059] shrink-0" />
          <span>
            {isThai
              ? 'โปรโมชั่นและแพ็กเกจพิเศษอาจมีการเปลี่ยนแปลงตามช่วงเวลา กรุณายืนยันสิทธิ์กับทางร้านเมื่อทำการจอง'
              : 'Promotional terms and availability may vary. Please confirm current eligibility when booking your visit.'}
          </span>
        </div>
      </div>

      {/* Promotion Cards Stack */}
      <div className="space-y-8">
        {PROMOTIONS_DATA.map((promo) => (
          <PromotionCard
            key={promo.id}
            promotion={promo}
            language={language}
            onBookPromotion={() => onNavigate('booking', promo.id)}
          />
        ))}
      </div>

      {/* Custom Package Consultation Card */}
      <div className="bg-[#202025] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
        <div className="relative max-w-2xl mx-auto space-y-4">
          <Sparkles className="w-6 h-6 text-[#C5A059] mx-auto" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            {isThai ? 'ต้องการจัดแพ็กเกจสำหรับกลุ่มหรือโอกาสพิเศษ?' : 'Looking for a Bespoke Beauty Package?'}
          </h2>
          <p className="text-sm text-[#D1CDD8] font-light leading-relaxed">
            {isThai
              ? 'เรายินดีออกแบบแพ็กเกจดูแลความงามร่วมสำหรับการจัดงาน เลี้ยงฉลอง หรือการดูแลเฉพาะกลุ่ม'
              : 'Whether you are planning bridal preparations, birthdays, or an afternoon with friends, our team can curate a customized package for your party.'}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#DFCA9B] to-[#C5A059] text-[#202025] font-bold text-xs tracking-wider uppercase transition-transform hover:scale-105 inline-flex items-center justify-center space-x-2 shadow-md"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{isThai ? 'ติดต่อจัดแพ็กเกจพิเศษ' : 'Inquire Directly'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
