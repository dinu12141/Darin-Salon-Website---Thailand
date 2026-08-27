import React, { useState } from 'react';
import { Sparkles, Eye } from 'lucide-react';
import { PageId, Language } from '../types';
import { GALLERY_DATA } from '../data/gallery';
import { LightboxModal } from '../components/LightboxModal';

interface GalleryPageProps {
  onNavigate: (page: PageId, param?: string) => void;
  language: Language;
}

type GalleryCategory = 'all' | 'salon' | 'hair' | 'nails' | 'beauty' | 'spa' | 'interior';

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate: _onNavigate, language }) => {
  const isThai = language === 'th';

  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: { id: GalleryCategory; labelEn: string; labelTh: string }[] = [
    { id: 'all', labelEn: 'All Views', labelTh: 'ทั้งหมด' },
    { id: 'salon', labelEn: 'Salon', labelTh: 'ร้านซาลอน' },
    { id: 'hair', labelEn: 'Hair', labelTh: 'บริการผม' },
    { id: 'nails', labelEn: 'Nails', labelTh: 'บริการเล็บ' },
    { id: 'beauty', labelEn: 'Beauty', labelTh: 'ความงาม' },
    { id: 'spa', labelEn: 'Spa', labelTh: 'สปาผ่อนคลาย' },
    { id: 'interior', labelEn: 'Interior', labelTh: 'บรรยากาศร้าน' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
    );
  };

  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-[#F4ECE4] text-[#9E7D39] text-xs font-semibold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isThai ? 'แกลเลอรีภาพบรรยากาศ' : 'Visual Ambiance'}</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#202025] leading-tight">
          {isThai ? 'สัมผัสบรรยากาศความสงบและความงาม' : 'The Darin Experience'}
        </h1>

        <p className="text-base sm:text-lg text-[#5D5966] leading-relaxed">
          {isThai
            ? 'ชมภาพบรรยากาศร้าน พื้นที่ทำผม มุมทำเล็บ และห้องทรีตเมนต์สปาส่วนตัว ที่ออกแบบเพื่อความผ่อนคลายสูงสุดของคุณ'
            : 'Take a glimpse into our serene spaces, modern styling stations, dedicated manicure lounges, and tranquil spa suites in Bangkok.'}
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 pt-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#202025] text-white shadow-xs'
                  : 'bg-white text-[#5D5966] hover:bg-[#F2ECE4] border border-[#E0D5C7]'
              }`}
            >
              {isThai ? cat.labelTh : cat.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry / Grid Gallery */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => openLightbox(idx)}
            className="group relative cursor-pointer break-inside-avoid rounded-3xl overflow-hidden bg-white border border-[#EAE1D6] hover:border-[#C5A059] shadow-xs hover:shadow-xl transition-all duration-300"
          >
            <div className="relative overflow-hidden bg-[#F4ECE4]">
              <img
                src={item.image}
                alt={isThai ? item.thaiTitle : item.title}
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] tracking-widest uppercase text-[#DFCA9B] font-semibold">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-bold text-white mt-1">
                  {isThai ? item.thaiTitle : item.title}
                </h3>
                <p className="text-xs text-[#E8E4EC] mt-1 line-clamp-2">
                  {isThai ? item.thaiCaption : item.caption}
                </p>
                <div className="mt-3 flex items-center space-x-1.5 text-xs text-[#DFCA9B]">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{isThai ? 'คลิกดูภาพขยาย' : 'View Full Image'}</span>
                </div>
              </div>
            </div>

            {/* Subtle caption bottom */}
            <div className="p-4 bg-white border-t border-[#F2ECE4] flex items-center justify-between">
              <span className="font-serif text-sm font-semibold text-[#202025]">
                {isThai ? item.thaiTitle : item.title}
              </span>
              <span className="text-[10px] tracking-wider uppercase text-[#9E9AA6] px-2 py-0.5 rounded-full bg-[#FAF8F5] border border-[#EAE1D6]">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          items={filteredItems}
          currentIndex={lightboxIndex}
          isOpen={lightboxIndex !== null}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
          language={language}
        />
      )}
    </div>
  );
};
