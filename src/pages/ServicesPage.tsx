import React, { useState } from 'react';
import { Search, Sparkles, Phone, Info } from 'lucide-react';
import { PageId, Language, ServiceCategory } from '../types';
import { SERVICES_DATA } from '../data/services';
import { TRANSLATIONS } from '../data/translations';
import { BUSINESS_INFO } from '../data/business';
import { ServiceCard } from '../components/ServiceCard';

interface ServicesPageProps {
  onNavigate: (page: PageId, param?: string) => void;
  language: Language;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, language }) => {
  const t = TRANSLATIONS[language];
  const isThai = language === 'th';

  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ServiceCategory; label: string; count: number }[] = [
    { id: 'all', label: t.allCategories, count: SERVICES_DATA.length },
    {
      id: 'hair',
      label: t.catHair,
      count: SERVICES_DATA.filter((s) => s.category === 'hair').length,
    },
    {
      id: 'nails',
      label: t.catNails,
      count: SERVICES_DATA.filter((s) => s.category === 'nails').length,
    },
    {
      id: 'facial',
      label: t.catFacial,
      count: SERVICES_DATA.filter((s) => s.category === 'facial').length,
    },
    {
      id: 'spa',
      label: t.catSpa,
      count: SERVICES_DATA.filter((s) => s.category === 'spa').length,
    },
  ];

  const filteredServices = SERVICES_DATA.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;

    const matchesSearch =
      item.title.toLowerCase().includes(q) ||
      item.thaiTitle.toLowerCase().includes(q) ||
      item.shortDesc.toLowerCase().includes(q) ||
      item.thaiShortDesc.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-[#F4ECE4] text-[#9E7D39] text-xs font-semibold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isThai ? 'เมนูบริการทั้งหมด' : 'Service Menu'}</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#202025] leading-tight">
          {isThai ? 'บริการเสริมสวยและสปาผ่อนคลาย' : 'Our Services & Rituals'}
        </h1>

        <p className="text-base sm:text-lg text-[#5D5966] leading-relaxed">
          {isThai
            ? 'เลือกชมบริการที่คัดสรรเพื่อดูแลเส้นผม เรียวเล็บ ผิวพรรณ และการผ่อนคลายร่างกายอย่างสมบูรณ์แบบ'
            : 'Explore our complete salon and spa offerings. From precision haircuts to tranquil aromatherapy rituals, each service is designed for your revitalization.'}
        </p>

        {/* Notice on pricing / duration */}
        <div className="mt-4 p-3.5 rounded-2xl bg-[#F8F3ED] border border-[#EAE0D3] text-xs text-[#6C6872] flex items-center justify-center space-x-2">
          <Info className="w-4 h-4 text-[#C5A059] shrink-0" />
          <span>
            {isThai
              ? 'หมายเหตุ: อัตราค่าบริการและระยะเวลาที่แน่นอนจะได้รับการยืนยันโดยตรงจากทางร้านตามสภาพความต้องการเฉพาะบุคคล'
              : 'Notice: Exact pricing and duration are confirmed upon consultation or appointment request.'}
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-b border-[#EAE1D6] pb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all flex items-center space-x-1.5 ${
                activeCategory === cat.id
                  ? 'bg-[#202025] text-white shadow-xs'
                  : 'bg-white text-[#5D5966] hover:bg-[#F2ECE4] border border-[#E0D5C7]'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat.id
                    ? 'bg-white/20 text-white'
                    : 'bg-[#EFE9DF] text-[#7C7782]'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isThai ? 'ค้นหาบริการ...' : 'Search services...'}
            className="w-full pl-9 pr-4 py-2 rounded-full bg-white border border-[#E0D5C7] text-xs sm:text-sm text-[#202025] placeholder-[#9E9AA6] focus:outline-none focus:border-[#C5A059]"
          />
          <Search className="w-4 h-4 text-[#9E9AA6] absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      {/* Services Grid */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              language={language}
              onSelectService={(id) => onNavigate('service-detail', id)}
              onBookService={(id) => onNavigate('booking', id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-[#EAE1D6] p-8">
          <p className="text-base text-[#6C6872]">
            {isThai ? 'ไม่พบบริการที่ตรงกับคำค้นหา' : 'No services found matching your search.'}
          </p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="mt-4 px-5 py-2 text-xs font-semibold tracking-wider text-[#9E7D39] hover:underline"
          >
            {isThai ? 'ล้างการค้นหา' : 'Clear search filters'}
          </button>
        </div>
      )}

      {/* Need assistance card */}
      <div className="rounded-3xl bg-[#FAF4ED] border border-[#E8DFC8] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-2xl font-bold text-[#202025]">
            {isThai ? 'ต้องการคำแนะนำเกี่ยวกับบริการ?' : 'Need Guidance Choosing a Service?'}
          </h3>
          <p className="text-sm text-[#5D5966] mt-1">
            {isThai
              ? 'พูดคุยกับผู้ช่วย Darin Beauty Assistant หรือโทรหาเราเพื่อรับคำแนะนำที่เหมาะกับคุณ'
              : 'Our specialists are delighted to discuss which treatments best suit your schedule and beauty aspirations.'}
          </p>
        </div>

        <div className="flex items-center space-x-3 shrink-0">
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="px-6 py-3 rounded-full bg-[#202025] hover:bg-[#C5A059] text-white text-xs font-semibold tracking-wider uppercase transition-colors inline-flex items-center space-x-2 shadow-xs"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{t.callNow}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
