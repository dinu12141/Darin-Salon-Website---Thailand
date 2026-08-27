import React, { useState } from 'react';
import {
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Heart,
  Droplets,
  Phone,
  Navigation,
  ChevronDown,
  CheckCircle2,
} from 'lucide-react';
import { PageId, Language, ServiceCategory } from '../types';
import { BUSINESS_INFO } from '../data/business';
import { SERVICES_DATA } from '../data/services';
import { PROMOTIONS_DATA } from '../data/promotions';
import { TRANSLATIONS } from '../data/translations';
import { ServiceCard } from '../components/ServiceCard';

interface HomePageProps {
  onNavigate: (page: PageId, param?: string) => void;
  language: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, language }) => {
  const t = TRANSLATIONS[language];
  const isThai = language === 'th';

  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const categories: { id: ServiceCategory; label: string }[] = [
    { id: 'all', label: t.allCategories },
    { id: 'hair', label: t.catHair },
    { id: 'nails', label: t.catNails },
    { id: 'facial', label: t.catFacial },
    { id: 'spa', label: t.catSpa },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? SERVICES_DATA.slice(0, 6)
      : SERVICES_DATA.filter((s) => s.category === activeCategory).slice(0, 6);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with warm luxury grade overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/5659016/pexels-photo-5659016.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2200"
            alt="Darin Beauty and Spa ambiance in Bangkok"
            className="w-full h-full object-cover object-center transform scale-105 animate-fade-in-soft"
          />
          {/* Subtle multi-layer overlay for elegance & contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/40" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#251D18]/30 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A059]/40 mb-6 animate-fade-in-soft">
            <Sparkles className="w-3.5 h-3.5 text-[#E5D3A6]" />
            <span className="text-xs font-semibold tracking-[0.24em] text-[#E5D3A6] uppercase">
              {isThai ? 'ดาริน บิวตี้ แอนด์ สปา • กรุงเทพมหานคร' : 'DARIN BEAUTY & SPA • BANGKOK'}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight sm:tracking-wide text-white leading-[1.12] mb-6 drop-shadow-sm">
            {isThai ? BUSINESS_INFO.thaiTagline : BUSINESS_INFO.tagline}
          </h1>

          <p className="text-base sm:text-xl text-[#F2ECE4] max-w-2xl mx-auto font-light leading-relaxed mb-10 text-balance">
            {isThai ? BUSINESS_INFO.thaiSupportingText : BUSINESS_INFO.supportingText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <button
              onClick={() => onNavigate('booking')}
              className="w-full sm:w-auto px-8 py-4 text-xs font-bold tracking-[0.16em] uppercase text-[#1F1F24] bg-gradient-to-r from-[#DFCA9B] via-[#C5A059] to-[#DFCA9B] hover:brightness-105 rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4 text-[#1F1F24]" />
              <span>{t.bookAppointment}</span>
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto px-8 py-4 text-xs font-bold tracking-[0.16em] uppercase text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-full transition-all flex items-center justify-center space-x-2"
            >
              <span>{t.exploreServices}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick NAP highlights */}
          <div className="mt-14 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-[#EAE1D6]/90">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
              <span>Bangkok, Thailand ({BUSINESS_INFO.plusCode})</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="font-semibold">{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('welcome')}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 text-white/70 hover:text-white flex flex-col items-center space-y-1 transition-colors group cursor-pointer"
          aria-label="Scroll to welcome section"
        >
          <span className="text-[10px] tracking-widest uppercase font-medium">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-[#C5A059]" />
        </button>
      </section>

      {/* 2. TRUST / INTRO SECTION: WELCOME TO DARIN BEAUTY AND SPA */}
      <section id="welcome" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#EAE1D6]">
              <img
                src="https://images.pexels.com/photos/5659049/pexels-photo-5659049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200"
                alt="Relaxing facial and beauty treatment at Darin Beauty and Spa"
                className="w-full h-[420px] sm:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF4ED] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#202025]">
                    {isThai ? 'การดูแลเฉพาะบุคคล' : 'Personalized Self-Care'}
                  </h4>
                  <p className="text-xs text-[#6C6872]">
                    {isThai ? 'ผ่อนคลายในบรรยากาศส่วนตัว' : 'Tranquil haven for your daily refresh'}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative subtle gold accent border in background */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-3xl border-2 border-[#C5A059]/30" />
          </div>

          {/* Text side */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F4ECE4] text-[#9E7D39] text-xs font-semibold tracking-widest uppercase">
              <span>{isThai ? 'เกี่ยวกับเรา' : 'About Darin'}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#202025] leading-tight">
              {isThai ? BUSINESS_INFO.thaiWelcomeTitle : BUSINESS_INFO.welcomeTitle}
            </h2>

            <p className="text-base text-[#4E4A56] leading-relaxed">
              {isThai
                ? 'ดาริน บิวตี้ แอนด์ สปา คือจุดหมายปลายทางแห่งการดูแลความงามและสุขภาพใจกลางกรุงเทพมหานคร เราตั้งใจสร้างสรรค์พื้นที่อันเงียบสงบ เพื่อให้คุณได้พักผ่อนอย่างแท้จริง ท่ามกลางบรรยากาศที่อบอุ่นและใส่ใจในทุกรายละเอียด'
                : 'Darin Beauty and Spa provides a relaxing environment where beauty, self-care, and wellness come together. Step inside our tranquil space in Bangkok and let our team look after your hair, nails, skin, and well-being with thoughtful, attentive care.'}
            </p>

            <p className="text-base text-[#4E4A56] leading-relaxed">
              {isThai
                ? 'ไม่ว่าคุณจะต้องการเซ็ตทรงผมใหม่อันสง่างาม ทำเล็บมือเล็บเท้าอย่างพิถีพิถัน หรือผ่อนคลายร่างกายด้วยการนวดสปาอโรมา ทุกบริการได้รับการดูแลเพื่อให้คุณรู้สึกสดชื่นและกลับไปพร้อมความมั่นใจเต็มเปี่ยม'
                : 'Whether you are stopping by for an effortless blowout, meticulous manicure and pedicure, a revitalizing facial treatment, or a soothing aromatherapy massage, every visit is dedicated to your comfort and personal renewal.'}
            </p>

            {/* Key pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-2 text-xs font-medium text-[#3D3B42]">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>{isThai ? 'บรรยากาศสงบ ผ่อนคลาย' : 'Calm, Relaxing Environment'}</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-medium text-[#3D3B42]">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>{isThai ? 'การดูแลอย่างประณีตและเอาใจใส่' : 'Meticulous Personal Care'}</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-medium text-[#3D3B42]">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>{isThai ? 'สะอาด ถูกสุขอนามัย' : 'High Cleanliness & Hygiene'}</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-medium text-[#3D3B42]">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>{isThai ? 'ทำเลใจกลางกรุงเทพฯ' : 'Convenient Bangkok Location'}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-7 py-3.5 text-xs font-bold tracking-[0.14em] uppercase text-white bg-[#202025] hover:bg-[#C5A059] rounded-full shadow-md transition-all flex items-center space-x-2"
              >
                <span>{t.discoverDarin}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="px-6 py-3.5 text-xs font-bold tracking-[0.14em] uppercase text-[#202025] bg-white hover:bg-[#F2ECE4] border border-[#E0D5C7] rounded-full transition-all flex items-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{t.callUs}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F4ECE4] text-[#9E7D39] text-xs font-semibold tracking-widest uppercase mb-3">
            <span>{isThai ? 'การบริการระดับพรีเมียม' : 'Curated Treatments'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#202025] leading-tight">
            {isThai ? 'บริการเพื่อความงามและการผ่อนคลาย' : 'Beauty & Wellness Rituals'}
          </h2>
          <p className="text-sm sm:text-base text-[#6C6872] mt-3">
            {isThai
              ? 'สัมผัสการดูแลอย่างพิถีพิถันใน 4 หมวดหมู่หลัก โดยช่างและผู้เชี่ยวชาญที่ใส่ใจในทุกขั้นตอน'
              : 'Explore our four signature care categories tailored to bring out your natural elegance and inner peace.'}
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
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
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
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

        {/* View All Services CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-white hover:bg-[#F2ECE4] text-[#202025] font-semibold text-xs tracking-[0.14em] uppercase border border-[#DFD3C3] shadow-xs hover:shadow-md transition-all"
          >
            <span>{t.viewAllServices}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
          </button>
        </div>
      </section>

      {/* 4. BRAND PHILOSOPHY EDITORIAL BANNER */}
      <section className="relative py-20 sm:py-28 bg-[#202025] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/31234756/pexels-photo-31234756.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1800"
            alt="Darin Beauty philosophy ambiance"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-8 h-8 text-[#C5A059] mx-auto mb-6 opacity-90" />
          <span className="text-xs font-semibold tracking-[0.3em] text-[#C5A059] uppercase block mb-3">
            {isThai ? BUSINESS_INFO.thaiPhilosophyTitle : BUSINESS_INFO.philosophyTitle}
          </span>
          <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-wide text-[#FAF8F5] leading-snug mb-6 text-balance">
            "{isThai ? BUSINESS_INFO.thaiPhilosophyQuote : BUSINESS_INFO.philosophyQuote}"
          </blockquote>
          <p className="text-sm sm:text-base text-[#D1CDD8] max-w-2xl mx-auto leading-relaxed">
            {isThai
              ? 'ที่ ดาริน บิวตี้ แอนด์ สปา เราเชื่อมั่นว่าช่วงเวลาแห่งการดูแลตัวเองคือช่วงเวลาที่ล้ำค่าที่สุด ให้คุณได้ผ่อนคลาย ฟื้นฟูความสดชื่น และกลับสู่ความสมดุลในทุกวัน'
              : 'We believe true beauty emanates from a quiet, centered mind and a body that has been gently cared for. Every touch, fragrance, and treatment at Darin is designed to nurture your personal harmony.'}
          </p>
        </div>
      </section>

      {/* 5. WHY CHOOSE DARIN / VALUES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-[#EAE1D6] hover:border-[#C5A059]/50 shadow-2xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF4ED] text-[#C5A059] flex items-center justify-center mb-6">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#202025] mb-2">
              {isThai ? 'ความใส่ใจเฉพาะบุคคล' : 'Personalized Care'}
            </h3>
            <p className="text-sm text-[#5D5966] leading-relaxed">
              {isThai
                ? 'ให้คำปรึกษาและปรับแต่งบริการให้เข้ากับสภาพเส้นผม ผิวพรรณ และความต้องการของคุณมากที่สุด'
                : 'Every service begins with attentive listening so treatments align with your unique style, texture, and preferences.'}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#EAE1D6] hover:border-[#C5A059]/50 shadow-2xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF4ED] text-[#C5A059] flex items-center justify-center mb-6">
              <Droplets className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#202025] mb-2">
              {isThai ? 'ความสะอาดและมาตรฐาน' : 'Pristine Hygiene'}
            </h3>
            <p className="text-sm text-[#5D5966] leading-relaxed">
              {isThai
                ? 'อุปกรณ์ทุกชิ้นได้รับการดูแลและทำความสะอาดอย่างเข้มงวด เพื่อสุขอนามัยและความปลอดภัยสูงสุด'
                : 'All beauty equipment and spa linens are thoroughly sanitized to ensure a safe, peaceful, and clean haven.'}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#EAE1D6] hover:border-[#C5A059]/50 shadow-2xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF4ED] text-[#C5A059] flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#202025] mb-2">
              {isThai ? 'ความสบายใจและผ่อนคลาย' : 'Tranquil Atmosphere'}
            </h3>
            <p className="text-sm text-[#5D5966] leading-relaxed">
              {isThai
                ? 'บรรยากาศที่เงียบสงบ แสงไฟอบอุ่น และกลิ่นหอมอโรมา ช่วยให้คุณลืมความเหนื่อยล้าของเมืองหลวง'
                : 'Thoughtfully appointed interiors, calming aromatics, and soft sounds designed to melt away Bangkok city fatigue.'}
            </p>
          </div>
        </div>
      </section>

      {/* 6. PROMOTIONS TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#FAF5EE] via-[#F4ECE4] to-[#EDE3D6] border border-[#E3D6C5]">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#9E7D39] uppercase block mb-2">
              {isThai ? 'ข้อเสนอพิเศษ' : 'Exclusive Moments'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#202025]">
              {isThai ? 'ช่วงเวลาแห่งความงามที่คุณคู่ควร' : 'Beauty Moments Worth Sharing'}
            </h2>
            <p className="text-sm text-[#5D5966] mt-3 leading-relaxed">
              {isThai
                ? 'ค้นพบข้อเสนอประจำฤดูกาล แพ็กเกจต้อนรับลูกค้าใหม่ และแพ็กเกจการดูแลแบบผสมผสานเพื่อความคุ้มค่าและความผ่อนคลาย'
                : 'Explore our seasonal packages and welcoming offers crafted to provide an elevated self-care experience.'}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('promotions')}
                className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#202025] hover:bg-[#C5A059] rounded-xl transition-all shadow-xs"
              >
                {isThai ? 'ดูข้อเสนอทั้งหมด' : 'View All Offers'}
              </button>
              <button
                onClick={() => onNavigate('booking', PROMOTIONS_DATA[0].id)}
                className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#202025] bg-white hover:bg-[#FAF8F5] border border-[#D5C7B5] rounded-xl transition-all"
              >
                {t.bookThisOffer}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LOCATION & DIRECTIONS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#EAE1D6] p-8 sm:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold tracking-widest text-[#9E7D39] uppercase">
              {isThai ? 'ที่ตั้งและการเดินทาง' : 'Find Us in Bangkok'}
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#202025]">
              {BUSINESS_INFO.name}
            </h2>
            <p className="text-sm text-[#5D5966] leading-relaxed">
              {isThai
                ? 'ตั้งอยู่ที่พิกัด QF5X+R5 กรุงเทพมหานคร ประเทศไทย เดินทางสะดวก พร้อมที่จอดรถและการต้อนรับที่อบอุ่น'
                : `Conveniently situated at ${BUSINESS_INFO.plusCode}. Easily accessible from central Bangkok locations.`}
            </p>
            <div className="pt-2 space-y-2 text-sm text-[#3D3B42]">
              <div className="flex items-center space-x-2">
                <Navigation className="w-4 h-4 text-[#C5A059]" />
                <span className="font-medium">{BUSINESS_INFO.plusCode}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="font-semibold hover:text-[#C5A059] transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#202025] text-white hover:bg-[#C5A059] text-xs font-semibold tracking-wider uppercase transition-colors inline-flex items-center space-x-2"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{t.getDirections}</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="px-6 py-3 rounded-full bg-[#FAF6F0] text-[#202025] hover:bg-[#EDE3D6] border border-[#D5C7B5] text-xs font-semibold tracking-wider uppercase transition-colors inline-flex items-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{t.callNow}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden h-64 sm:h-80 border border-[#EAE1D6] relative bg-[#EDE4DA]">
            {/* Map visual card */}
            <iframe
              title="Darin Beauty and Spa Location Map"
              src="https://maps.google.com/maps?q=QF5X%2BR5+Bangkok+Thailand&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* 8. FINAL BOOKING CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#202025] text-white p-8 sm:p-14 text-center">
          <div className="absolute inset-0 opacity-15">
            <img
              src="https://images.pexels.com/photos/5659018/pexels-photo-5659018.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400"
              alt="Darin booking background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative max-w-2xl mx-auto space-y-4">
            <Sparkles className="w-6 h-6 text-[#C5A059] mx-auto" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide">
              {isThai ? 'พร้อมสัมผัสประสบการณ์แล้วหรือยัง?' : 'Ready to Experience Darin Beauty & Spa?'}
            </h2>
            <p className="text-sm sm:text-base text-[#D1CDD8] font-light">
              {isThai
                ? 'ส่งคำขอนัดหมายออนไลน์ หรือโทรติดต่อเราโดยตรงเพื่อยืนยันช่วงเวลาที่คุณสะดวก'
                : 'Submit an online appointment request today or call our friendly salon team to secure your preferred date and time.'}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onNavigate('booking')}
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold tracking-[0.16em] uppercase text-[#202025] bg-gradient-to-r from-[#DFCA9B] via-[#C5A059] to-[#DFCA9B] hover:brightness-105 rounded-full shadow-lg transition-all"
              >
                {t.bookAppointment}
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold tracking-[0.16em] uppercase text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
