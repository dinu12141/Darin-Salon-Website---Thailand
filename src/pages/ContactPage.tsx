import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Calendar,
  Send,
  Sparkles,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import { PageId, Language } from '../types';
import { BUSINESS_INFO } from '../data/business';
import { TRANSLATIONS } from '../data/translations';

interface ContactPageProps {
  onNavigate: (page: PageId, param?: string) => void;
  language: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, language }) => {
  const t = TRANSLATIONS[language];
  const isThai = language === 'th';

  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryPhone.trim() || !inquiryMessage.trim()) return;

    setIsSent(true);
    setTimeout(() => {
      setInquiryName('');
      setInquiryPhone('');
      setInquiryMessage('');
    }, 1000);
  };

  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-[#F4ECE4] text-[#9E7D39] text-xs font-semibold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isThai ? 'ติดต่อเรา' : 'Get in Touch'}</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#202025] leading-tight">
          {t.contactSalon}
        </h1>

        <p className="text-base sm:text-lg text-[#5D5966] leading-relaxed">
          {isThai
            ? 'เรายินดีต้อนรับและพร้อมให้คำแนะนำเกี่ยวกับบริการเสริมสวยและสปาผ่อนคลายในกรุงเทพมหานคร'
            : 'We welcome your questions, booking requests, and visit inquiries. Connect with our dedicated salon team below.'}
        </p>
      </div>

      {/* Main Grid: NAP Card & Quick Action Buttons */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Business Details & Action Buttons */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Info Card */}
          <div className="bg-white rounded-3xl border border-[#EAE1D6] p-8 shadow-xs space-y-6">
            <div>
              <span className="text-[10px] tracking-[0.24em] font-bold text-[#9E7D39] uppercase block mb-1">
                {BUSINESS_INFO.category}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#202025]">
                {BUSINESS_INFO.name}
              </h2>
              <p className="text-xs text-[#7C7782] mt-1 font-serif italic">
                {isThai ? BUSINESS_INFO.thaiName : 'Bangkok, Thailand'}
              </p>
            </div>

            <div className="space-y-4 pt-2 border-t border-[#F0E8DF] text-sm text-[#4E4A56]">
              {/* Location */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#FAF4ED] text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E9AA6] block">
                    {isThai ? 'สถานที่ตั้ง' : 'Location'}
                  </span>
                  <span className="font-medium text-[#202025]">{BUSINESS_INFO.plusCode}</span>
                  <span className="text-xs text-[#7C7782] block mt-0.5">
                    Bangkok, Thailand
                  </span>
                </div>
              </div>

              {/* Phone (Clickable on Mobile) */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#FAF4ED] text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E9AA6] block">
                    {isThai ? 'โทรศัพท์' : 'Phone'}
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="font-bold text-base text-[#202025] hover:text-[#C5A059] transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <span className="text-xs text-[#7C7782] block mt-0.5">
                    {isThai ? 'แตะเพื่อโทรออกทันที' : 'Tap to call directly'}
                  </span>
                </div>
              </div>
            </div>

            {/* Google Business Profile Verified Link */}
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#FAF6F0] hover:bg-[#F2EAE0] border border-[#E0D5C7] text-xs font-semibold text-[#202025] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#C5A059]" />
                  <span>Google Business Profile</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#9E7D39] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Quick Action 4-Buttons Grid */}
            <div className="pt-2 border-t border-[#F0E8DF] grid grid-cols-2 gap-2.5">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="py-3 px-2 rounded-xl bg-[#202025] hover:bg-[#C5A059] text-white text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center space-x-1.5 shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{t.callNow}</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-2 rounded-xl bg-white hover:bg-[#FAF8F5] border border-[#D5C7B5] text-[#202025] text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center space-x-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{t.getDirections}</span>
              </a>

              <button
                onClick={() => onNavigate('booking')}
                className="col-span-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#9E7D39] hover:from-[#B89047] hover:to-[#8E6E30] text-white text-xs font-bold tracking-[0.14em] uppercase transition-all shadow-xs flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.bookAppointment}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Google Maps Interactive Embed & Inquiry Form */}
        <div className="lg:col-span-7 space-y-6">
          {/* Find Us / Interactive Map */}
          <div className="bg-white rounded-3xl border border-[#EAE1D6] p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#202025]">
                  {t.findUs}
                </h3>
                <p className="text-xs text-[#7C7782]">
                  {BUSINESS_INFO.address}
                </p>
              </div>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#9E7D39] hover:underline flex items-center space-x-1"
              >
                <span>{isThai ? 'เปิดใน Google Maps' : 'Open in Google Maps'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Map Frame */}
            <div className="rounded-2xl overflow-hidden h-72 sm:h-80 border border-[#E8DFC8] relative bg-[#EDE4DA]">
              <iframe
                title="Darin Beauty and Spa Google Map"
                src="https://maps.google.com/maps?q=QF5X%2BR5+Bangkok+Thailand&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Quick Message Us Form */}
          <div className="bg-white rounded-3xl border border-[#EAE1D6] p-6 sm:p-8 shadow-xs">
            <h3 className="font-serif text-xl font-bold text-[#202025] mb-1">
              {t.messageUs}
            </h3>
            <p className="text-xs text-[#7C7782] mb-6">
              {isThai
                ? 'ส่งคำถามหรือข้อความสั้นๆ ถึงเรา เราจะติดต่อกลับโดยเร็วที่สุด'
                : 'Send us a brief inquiry and our team will get back to you.'}
            </p>

            {isSent ? (
              <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E8DEC9] text-center space-y-2 animate-fade-in-soft">
                <CheckCircle2 className="w-8 h-8 text-[#C5A059] mx-auto" />
                <h4 className="font-serif text-lg font-bold text-[#202025]">
                  {isThai ? 'ส่งข้อความเรียบร้อยแล้ว' : 'Message Sent Successfully'}
                </h4>
                <p className="text-xs text-[#5D5966]">
                  {isThai
                    ? 'ขอบคุณสำหรับข้อความ เจ้าหน้าที่จะติดต่อกลับตามหมายเลขที่ท่านแจ้งไว้ค่ะ'
                    : 'Thank you for reaching out. Darin Beauty and Spa will contact you shortly.'}
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="mt-3 text-xs font-semibold text-[#9E7D39] hover:underline"
                >
                  {isThai ? 'ส่งข้อความอื่นเพิ่มเติม' : 'Send another inquiry'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3D3B42] mb-1.5">
                      {isThai ? 'ชื่อของคุณ' : 'Your Name'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      placeholder={isThai ? 'ชื่อผู้ติดต่อ' : 'Your full name'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E2D8CC] focus:border-[#C5A059] text-xs sm:text-sm text-[#202025] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3D3B42] mb-1.5">
                      {isThai ? 'เบอร์โทรศัพท์' : 'Phone Number'} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      placeholder="+66..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E2D8CC] focus:border-[#C5A059] text-xs sm:text-sm text-[#202025] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3D3B42] mb-1.5">
                    {isThai ? 'ข้อความหรือข้อสงสัย' : 'Message or Question'} *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder={
                      isThai
                        ? 'พิมพ์ข้อความของคุณที่นี่...'
                        : 'How can we assist you with our salon & spa services?'
                    }
                    className="w-full p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E2D8CC] focus:border-[#C5A059] text-xs sm:text-sm text-[#202025] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#202025] hover:bg-[#C5A059] text-white text-xs font-bold tracking-[0.14em] uppercase transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isThai ? 'ส่งข้อความ' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
