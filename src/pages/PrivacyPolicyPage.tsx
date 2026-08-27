import React from 'react';
import { ShieldCheck, Sparkles, ArrowLeft } from 'lucide-react';
import { PageId, Language } from '../types';
import { BUSINESS_INFO } from '../data/business';
import { TRANSLATIONS } from '../data/translations';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageId, param?: string) => void;
  language: Language;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate, language }) => {
  const t = TRANSLATIONS[language];
  const isThai = language === 'th';

  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-[#5D5966] hover:text-[#9E7D39] transition-colors py-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isThai ? '← กลับสู่หน้าแรก' : '← Back to Home'}</span>
        </button>
      </div>

      <div className="space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-[#F4ECE4] text-[#9E7D39] text-xs font-semibold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isThai ? 'ความโปร่งใสและการคุ้มครองข้อมูล' : 'Guest Confidentiality'}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#202025] leading-tight">
          {t.navPrivacy}
        </h1>

        <p className="text-xs text-[#7C7782]">
          {isThai ? 'ปรับปรุงล่าสุด: มกราคม 2569 (2026)' : 'Last Updated: January 2026'}
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-[#EAE1D6] p-8 sm:p-12 shadow-xs space-y-8 text-sm text-[#4E4A56] leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center space-x-2 text-[#202025]">
            <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
            <h2 className="font-serif text-xl font-bold">
              {isThai ? '1. บทนำและความมุ่งมั่นของเรา' : '1. Overview & Commitment'}
            </h2>
          </div>
          <p>
            {isThai
              ? `ดาริน บิวตี้ แอนด์ สปา (${BUSINESS_INFO.name}) ให้ความสำคัญอย่างยิ่งต่อการคุ้มครองข้อมูลส่วนบุคคลและความเป็นส่วนตัวของลูกค้าทุกท่าน เอกสารฉบับนี้อธิบายถึงแนวทางการรวบรวม การใช้ และการเก็บรักษาข้อมูลเมื่อท่านใช้งานเว็บไซต์หรือส่งคำขอนัดหมายรับบริการ`
              : `At ${BUSINESS_INFO.name}, we hold our guests' privacy and personal information in the highest regard. This Privacy Policy details how we handle the information you provide when browsing our website or submitting appointment requests for our Bangkok salon and spa.`}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#202025]">
            {isThai ? '2. ข้อมูลที่เรารวบรวม' : '2. Information We Collect'}
          </h2>
          <p>
            {isThai
              ? 'เมื่อท่านส่งคำขอจองคิวหรือติดต่อสอบถามผ่านเว็บไซต์ เราอาจรวบรวมข้อมูลต่อไปนี้:'
              : 'When you submit an appointment request, contact inquiry, or communicate with our assistant, we collect:'}
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>{isThai ? 'ชื่อและนามสกุล' : 'Full Name'}</li>
            <li>{isThai ? 'หมายเลขโทรศัพท์สำหรับการติดต่อยืนยันคิว' : 'Phone Number for appointment confirmation'}</li>
            <li>{isThai ? 'ที่อยู่อีเมล (กรณีที่ท่านระบุ)' : 'Email address (if provided)'}</li>
            <li>{isThai ? 'วันที่ เวลา และประเภทบริการที่ต้องการ' : 'Preferred date, time, and service selection'}</li>
            <li>{isThai ? 'ข้อสังเกตหรือคำขอพิเศษสำหรับการดูแลความงาม' : 'Special requests or preferences regarding treatments'}</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#202025]">
            {isThai ? '3. วัตถุประสงค์ในการใช้ข้อมูล' : '3. Purpose of Use'}
          </h2>
          <p>
            {isThai
              ? 'ข้อมูลของท่านจะถูกนำไปใช้เพื่อวัตถุประสงค์ต่อไปนี้เท่านั้น:'
              : 'Information collected is strictly utilized to:'}
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>{isThai ? 'การติดต่อกลับเพื่อตรวจสอบคิวและยืนยันเวลานัดหมาย' : 'Contact you to confirm availability and appointment times'}</li>
            <li>{isThai ? 'การจัดเตรียมบริการและผู้เชี่ยวชาญให้ตรงกับความต้องการเฉพาะบุคคล' : 'Prepare treatments and products tailored to your preferences'}</li>
            <li>{isThai ? 'การตอบข้อซักถามหรือให้ข้อมูลเกี่ยวกับบริการเสริมสวยและสปา' : 'Respond to inquiries and provide assistance'}</li>
          </ul>
          <p className="pt-1">
            {isThai
              ? 'เราไม่มีนโยบายการจำหน่าย แลกเปลี่ยน หรือส่งต่อข้อมูลส่วนบุคคลของท่านให้แก่บุคคลที่สามเพื่อการค้าหรือการตลาด'
              : 'We do not sell, rent, or distribute personal guest data to third-party advertisers or marketers.'}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#202025]">
            {isThai ? '4. ความปลอดภัยของข้อมูล' : '4. Data Security & Storage'}
          </h2>
          <p>
            {isThai
              ? 'เราใช้มาตรการทางเทคนิคและการจัดการที่เหมาะสมเพื่อปกป้องข้อมูลส่วนบุคคลของท่านจากการเข้าถึงโดยไม่ได้รับอนุญาต การสูญหาย หรือการเปิดเผยโดยมิชอบ'
              : 'We employ suitable administrative and technical measures to safeguard your personal details from unauthorized access, loss, or misuse.'}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#202025]">
            {isThai ? '5. สิทธิของเจ้าของข้อมูล' : '5. Your Rights'}
          </h2>
          <p>
            {isThai
              ? 'ท่านมีสิทธิในการขอตรวจสอบ แก้ไข หรือขอลบข้อมูลส่วนบุคคลที่ท่านเคยให้ไว้กับทางร้าน โดยสามารถติดต่อเราได้โดยตรงตามข้อมูลการติดต่อด้านล่าง'
              : 'In accordance with applicable privacy standards (including Thailand PDPA), you may contact us at any time to review, update, or request the deletion of your personal contact records.'}
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-[#EAE1D6]">
          <h2 className="font-serif text-xl font-bold text-[#202025]">
            {isThai ? '6. การติดต่อเกี่ยวกับนโยบายความเป็นส่วนตัว' : '6. Contact Regarding Privacy'}
          </h2>
          <p>
            {isThai
              ? `หากมีข้อสงสัยเกี่ยวกับนโยบายความเป็นส่วนตัว สามารถติดต่อได้ที่:`
              : `For inquiries regarding this privacy statement, please contact:`}
          </p>
          <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE1D6] space-y-1 text-xs sm:text-sm">
            <p className="font-bold text-[#202025]">{BUSINESS_INFO.name}</p>
            <p>{BUSINESS_INFO.address}</p>
            <p>{isThai ? 'โทรศัพท์' : 'Phone'}: <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-[#9E7D39] font-semibold">{BUSINESS_INFO.phone}</a></p>
          </div>
        </section>
      </div>
    </div>
  );
};
