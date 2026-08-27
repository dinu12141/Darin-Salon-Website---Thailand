import React from 'react';
import { Sparkles, Heart, ShieldCheck, Droplets, Coffee, Flower2, Phone, Calendar } from 'lucide-react';
import { PageId, Language } from '../types';
import { BUSINESS_INFO } from '../data/business';
import { TRANSLATIONS } from '../data/translations';

interface AboutPageProps {
  onNavigate: (page: PageId, param?: string) => void;
  language: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, language }) => {
  const t = TRANSLATIONS[language];
  const isThai = language === 'th';

  return (
    <div className="space-y-20 sm:space-y-28 py-8 sm:py-12">
      {/* 1. HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-[#F4ECE4] text-[#9E7D39] text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isThai ? 'เรื่องราวของเรา' : 'Our Story & Purpose'}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#202025] leading-tight">
            {isThai ? 'ความงาม การดูแล และความผ่อนคลาย' : 'Beauty, Care & Relaxation'}
          </h1>

          <p className="text-base sm:text-lg text-[#5D5966] leading-relaxed">
            {isThai
              ? 'ที่ ดาริน บิวตี้ แอนด์ สปา เราเชื่อว่าความงามที่แท้จริงเริ่มต้นจากความรู้สึกดีในตัวเอง ท่ามกลางบรรยากาศที่ช่วยให้คุณได้พักผ่อนอย่างเต็มที่'
              : 'At Darin Beauty and Spa, we believe that true beauty starts with how you feel inside — in an environment where you are free to pause, unwind, and receive attentive care.'}
          </p>
        </div>

        {/* Hero split image collage */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl overflow-hidden shadow-sm h-72 sm:h-96">
            <img
              src="https://images.pexels.com/photos/7195809/pexels-photo-7195809.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700"
              alt="Darin Beauty salon reception"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-sm h-72 sm:h-96 md:-mt-6">
            <img
              src="https://images.pexels.com/photos/5659016/pexels-photo-5659016.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700"
              alt="Head spa relaxation treatment at Darin Beauty and Spa"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-sm h-72 sm:h-96">
            <img
              src="https://images.pexels.com/photos/5484948/pexels-photo-5484948.png?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700"
              alt="Artistic manicure at Darin Beauty and Spa"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY SECTION */}
      <section className="bg-[#F8F3ED] py-20 border-y border-[#EBE1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-[#EFE4D6] text-[#C5A059] flex items-center justify-center mx-auto mb-2">
            <Flower2 className="w-6 h-6" />
          </div>

          <h2 className="text-xs font-bold tracking-[0.26em] text-[#9E7D39] uppercase">
            {isThai ? BUSINESS_INFO.thaiPhilosophyTitle : BUSINESS_INFO.philosophyTitle}
          </h2>

          <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#202025] leading-tight">
            "{isThai ? BUSINESS_INFO.thaiPhilosophyQuote : BUSINESS_INFO.philosophyQuote}"
          </blockquote>

          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto my-6" />

          <p className="text-base text-[#5D5966] leading-relaxed max-w-2xl mx-auto">
            {isThai
              ? 'นิยามความงามของ ดาริน บิวตี้ แอนด์ สปา ไม่ใช่เพียงภาพลักษณ์ภายนอก แต่คือความสุข ความมั่นใจ และความผ่อนคลายที่คุณสัมผัสได้เมื่อก้าวออกจากร้านของเรา ทุกการบริการถูกคิดค้นขึ้นมาเพื่อให้เวลาของคุณมีความหมายที่สุด'
              : 'Our view of beauty goes beyond mirrors and cosmetics. It is about quiet confidence, revitalized energy, and how comfortable you feel in your own skin. When you grant yourself the time for restorative care, beauty follows naturally.'}
          </p>
        </div>
      </section>

      {/* 3. SIX CORE COMMITMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#202025]">
            {isThai ? 'สิ่งที่เรายึดมั่นในการดูแลคุณ' : 'Our Commitments to Every Guest'}
          </h2>
          <p className="text-sm text-[#7C7782] mt-3">
            {isThai
              ? 'หัวใจสำคัญที่ทำให้ทุกครั้งที่คุณมาเยือน ดาริน บิวตี้ แอนด์ สปา เป็นช่วงเวลาที่น่าประทับใจ'
              : 'Core values guiding every appointment and treatment at Darin Beauty and Spa.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Item 1: Personalized beauty care */}
          <div className="bg-white p-8 rounded-3xl border border-[#EAE1D6] hover:border-[#C5A059]/50 shadow-2xs transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF4ED] text-[#C5A059] flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#202025]">
              {isThai ? 'การดูแลเฉพาะบุคคล' : 'Personalized Beauty Care'}
            </h3>
            <p className="text-sm text-[#5D5966] leading-relaxed">
              {isThai
                ? 'เราเข้าใจว่าแต่ละบุคคลมีเอกลักษณ์และความต้องการเฉพาะตัว ช่างของเราจึงพร้อมรับฟังและปรับแต่งการบริการให้ตรงใจคุณที่สุด'
                : 'No two individuals are alike. We listen to your preferences, inspect your hair and skin condition, and tailor our care accordingly.'}
            </p>
          </div>

          {/* Item 2: Relaxing environment */}
          <div className="bg-white p-8 rounded-3xl border border-[#EAE1D6] hover:border-[#C5A059]/50 shadow-2xs transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF4ED] text-[#C5A059] flex items-center justify-center">
              <Flower2 className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#202025]">
              {isThai ? 'บรรยากาศผ่อนคลาย' : 'Relaxing Environment'}
            </h3>
            <p className="text-sm text-[#5D5966] leading-relaxed">
              {isThai
                ? 'พื้นที่อันเงียบสงบ แสงไฟละมุน และกลิ่นหอมธรรมชาติ ออกแบบมาเพื่อตัดขาดจากความเร่งรีบภายนอก'
                : 'A peaceful haven amidst bustling Bangkok, featuring warm gentle lighting, soothing aromatics, and serene music.'}
            </p>
          </div>

          {/* Item 3: Professional service */}
          <div className="bg-white p-8 rounded-3xl border border-[#EAE1D6] hover:border-[#C5A059]/50 shadow-2xs transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF4ED] text-[#C5A059] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#202025]">
              {isThai ? 'การบริการระดับมืออาชีพ' : 'Professional Service'}
            </h3>
            <p className="text-sm text-[#5D5966] leading-relaxed">
              {isThai
                ? 'การดูแลอย่างประณีต ใส่ใจทุกรายละเอียด ด้วยความสุภาพและการต้อนรับที่ให้เกียรติผู้มารับบริการทุกท่าน'
                : 'Attentive, respectful, and detail-driven assistance from the moment you step through our door until you depart.'}
            </p>
          </div>

          {/* Item 4: Customer comfort */}
          <div className="bg-white p-8 rounded-3xl border border-[#EAE1D6] hover:border-[#C5A059]/50 shadow-2xs transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF4ED] text-[#C5A059] flex items-center justify-center">
              <Coffee className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#202025]">
              {isThai ? 'ความสะดวกสบายของลูกค้า' : 'Customer Comfort First'}
            </h3>
            <p className="text-sm text-[#5D5966] leading-relaxed">
              {isThai
                ? 'เก้าอี้และเตียงสระที่นุ่มสบาย อุณหภูมิที่พอเหมาะ และเครื่องดื่มต้อนรับ เพื่อความสบายใจสูงสุดของคุณ'
                : 'Ergonomic treatment chairs, plush spa beds, welcoming refreshments, and respectful privacy throughout your visit.'}
            </p>
          </div>

          {/* Item 5: Self-care */}
          <div className="bg-white p-8 rounded-3xl border border-[#EAE1D6] hover:border-[#C5A059]/50 shadow-2xs transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF4ED] text-[#C5A059] flex items-center justify-center">
              <Droplets className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#202025]">
              {isThai ? 'คุณค่าแห่งการดูแลตนเอง' : 'Dedicated Self-Care'}
            </h3>
            <p className="text-sm text-[#5D5966] leading-relaxed">
              {isThai
                ? 'สนับสนุนให้คุณมอบเวลาคุณภาพให้กับตัวเอง เพื่อฟื้นฟูพลังกายและพลังใจให้พร้อมก้าวต่อไปอย่างมีความสุข'
                : 'We champion the importance of mindful pauses. Dedicating time to your hair, skin, and body restores internal vitality.'}
            </p>
          </div>

          {/* Item 6: Quality experience & cleanliness */}
          <div className="bg-white p-8 rounded-3xl border border-[#EAE1D6] hover:border-[#C5A059]/50 shadow-2xs transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF4ED] text-[#C5A059] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#202025]">
              {isThai ? 'สุขอนามัยและคุณภาพ' : 'Pristine Cleanliness'}
            </h3>
            <p className="text-sm text-[#5D5966] leading-relaxed">
              {isThai
                ? 'รักษามาตรฐานความสะอาดของอุปกรณ์ เตียง และผลิตภัณฑ์อย่างเข้มงวด เพื่อให้คุณวางใจได้อย่างเต็มที่'
                : 'Rigorous sanitization protocols for every tool, towel, and surface, ensuring your complete wellness and safety.'}
            </p>
          </div>
        </div>
      </section>

      {/* 4. INVITATION & CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF4ED] rounded-3xl border border-[#E8DFC8] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-3">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#202025]">
              {isThai ? 'ยินดีต้อนรับสู่ ดาริน บิวตี้ แอนด์ สปา' : 'We Welcome You to Visit'}
            </h3>
            <p className="text-sm text-[#5D5966] leading-relaxed">
              {isThai
                ? 'แวะมาสัมผัสบรรยากาศความสงบ หรือส่งคำขอนัดหมายล่วงหน้าเพื่อให้เราได้เตรียมการต้อนรับคุณอย่างดีที่สุด'
                : 'Experience our hospitality firsthand. Reach out with your preferred date or stop by our Bangkok location.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => onNavigate('booking')}
              className="px-6 py-3.5 text-xs font-bold tracking-[0.14em] uppercase text-white bg-[#202025] hover:bg-[#C5A059] rounded-xl shadow-md transition-all flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.bookAppointment}</span>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="px-6 py-3.5 text-xs font-bold tracking-[0.14em] uppercase text-[#202025] bg-white hover:bg-[#FAF8F5] border border-[#D5C7B5] rounded-xl transition-all flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>{t.callNow}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
