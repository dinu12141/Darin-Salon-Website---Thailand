import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle, Search, Phone } from 'lucide-react';
import { PageId, Language } from '../types';
import { FAQS_DATA } from '../data/faqs';
import { BUSINESS_INFO } from '../data/business';
import { TRANSLATIONS } from '../data/translations';

interface FAQPageProps {
  onNavigate: (page: PageId, param?: string) => void;
  language: Language;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate, language }) => {
  const t = TRANSLATIONS[language];
  const isThai = language === 'th';

  const [openIds, setOpenIds] = useState<string[]>(['services-offered', 'how-to-book']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      faq.question.toLowerCase().includes(q) ||
      faq.thaiQuestion.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q) ||
      faq.thaiAnswer.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-[#F4ECE4] text-[#9E7D39] text-xs font-semibold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isThai ? 'ตอบข้อสงสัยที่พบบ่อย' : 'Questions & Clarity'}</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#202025] leading-tight">
          {t.navFaq}
        </h1>

        <p className="text-base text-[#5D5966] leading-relaxed">
          {isThai
            ? 'รวบรวมคำถามที่ลูกค้าสอบถามบ่อยเกี่ยวกับการบริการ การจองคิว และการเดินทาง'
            : 'Find answers to common questions regarding appointments, salon location, treatments, and guest policies.'}
        </p>

        {/* Search */}
        <div className="relative max-w-md mx-auto pt-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isThai ? 'ค้นหาคำถาม...' : 'Search questions...'}
            className="w-full pl-10 pr-4 py-3 rounded-full bg-white border border-[#E2D8CC] focus:border-[#C5A059] text-xs sm:text-sm text-[#202025] focus:outline-none shadow-2xs"
          />
          <Search className="w-4 h-4 text-[#9E9AA6] absolute left-3.5 top-1/2 transform -translate-y-1/2 mt-2" />
        </div>
      </div>

      {/* Accordion Stack */}
      <div className="space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openIds.includes(faq.id);
          return (
            <div
              key={faq.id}
              className="rounded-2xl bg-white border border-[#EAE1D6] hover:border-[#C5A059]/60 transition-all overflow-hidden shadow-2xs"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(faq.id)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 rounded-full bg-[#FAF4ED] text-[#C5A059] flex items-center justify-center shrink-0">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <span className="font-serif text-base sm:text-lg font-bold text-[#202025]">
                    {isThai ? faq.thaiQuestion : faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#9E9AA6] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'transform rotate-180 text-[#C5A059]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#524E5B] leading-relaxed border-t border-[#F4ECE4] bg-[#FAF8F5]/60 animate-fade-in-soft">
                  <p>{isThai ? faq.thaiAnswer : faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 bg-white rounded-3xl border border-[#EAE1D6] p-8">
            <p className="text-sm text-[#6C6872]">
              {isThai ? 'ไม่พบคำถามที่ตรงกับคำค้นหา' : 'No matching questions found.'}
            </p>
          </div>
        )}
      </div>

      {/* Direct Contact Banner */}
      <div className="bg-[#FAF4ED] rounded-3xl border border-[#E8DFC8] p-8 text-center space-y-4">
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#202025]">
          {isThai ? 'มีคำถามอื่นๆ ที่ยังไม่ได้รับคำตอบ?' : 'Have a Question Not Listed Here?'}
        </h3>
        <p className="text-sm text-[#5D5966] max-w-lg mx-auto">
          {isThai
            ? 'กรุณาติดต่อ ดาริน บิวตี้ แอนด์ สปา โดยตรง หรือใช้ผู้ช่วย Darin Beauty Assistant ที่มุมขวาล่างค่ะ'
            : 'Please contact Darin Beauty and Spa directly at +66 88 252 4955 for the latest information.'}
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="px-6 py-3 rounded-full bg-[#202025] hover:bg-[#C5A059] text-white text-xs font-semibold tracking-wider uppercase transition-colors inline-flex items-center space-x-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 rounded-full bg-white hover:bg-[#FAF8F5] text-[#202025] border border-[#D5C7B5] text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            {t.messageUs}
          </button>
        </div>
      </div>
    </div>
  );
};
