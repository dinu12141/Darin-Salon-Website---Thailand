import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  Phone,
  Mail,
  User,
  Users,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Navigation,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import { PageId, Language, BookingFormData } from '../types';
import { SERVICES_DATA } from '../data/services';
import { PROMOTIONS_DATA } from '../data/promotions';
import { BUSINESS_INFO } from '../data/business';
import { TRANSLATIONS } from '../data/translations';

interface BookingPageProps {
  initialServiceId?: string;
  onNavigate: (page: PageId, param?: string) => void;
  language: Language;
}

export const BookingPage: React.FC<BookingPageProps> = ({
  initialServiceId,
  onNavigate,
  language,
}) => {
  const t = TRANSLATIONS[language];
  const isThai = language === 'th';

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '11:00',
    serviceCategory: 'all',
    serviceName: '',
    guestsCount: '1',
    preferredLanguage: language,
    specialRequests: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Sync language selection into form
  useEffect(() => {
    setFormData((prev) => ({ ...prev, preferredLanguage: language }));
  }, [language]);

  // If arrived with preselected service or promo
  useEffect(() => {
    if (!initialServiceId) return;

    // Check in services
    const matchedService = SERVICES_DATA.find((s) => s.id === initialServiceId);
    if (matchedService) {
      setFormData((prev) => ({
        ...prev,
        serviceCategory: matchedService.category,
        serviceName: matchedService.title,
      }));
      return;
    }

    // Check in promotions
    const matchedPromo = PROMOTIONS_DATA.find((p) => p.id === initialServiceId);
    if (matchedPromo) {
      setFormData((prev) => ({
        ...prev,
        serviceName: `Promotion: ${matchedPromo.title}`,
      }));
    }
  }, [initialServiceId]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = isThai ? 'กรุณาระบุชื่อ-นามสกุล' : 'Full Name is required';
    }
    if (!formData.phone.trim()) {
      errs.phone = isThai ? 'กรุณาระบุหมายเลขโทรศัพท์' : 'Phone Number is required';
    } else if (!/^[0-9+\s-]{8,20}$/.test(formData.phone.trim())) {
      errs.phone = isThai ? 'รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง' : 'Please enter a valid phone number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = isThai ? 'รูปแบบอีเมลไม่ถูกต้อง' : 'Please enter a valid email address';
    }
    if (!formData.preferredDate) {
      errs.preferredDate = isThai ? 'กรุณาเลือกวันที่ต้องการเข้ารับบริการ' : 'Preferred Date is required';
    }
    if (!formData.serviceName) {
      errs.serviceName = isThai ? 'กรุณาเลือกบริการที่ต้องการ' : 'Please select a service';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmittedData({ ...formData });
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      preferredDate: '',
      preferredTime: '11:00',
      serviceCategory: 'all',
      serviceName: '',
      guestsCount: '1',
      preferredLanguage: language,
      specialRequests: '',
    });
  };

  // Get tomorrow's date formatted for min date picker
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-[#F4ECE4] text-[#9E7D39] text-xs font-semibold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isThai ? 'สำรองคิวรับบริการ' : 'Appointment Concierge'}</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#202025] leading-tight">
          {isThai ? 'จองช่วงเวลาแห่งความงามของคุณ' : 'Book Your Beauty Experience'}
        </h1>

        <p className="text-base sm:text-lg text-[#5D5966] leading-relaxed">
          {isThai
            ? 'ส่งคำขอนัดหมายล่วงหน้าเพื่อความสะดวก ทางร้านจะติดต่อกลับเพื่อยืนยันคิวและเวลาที่ท่านต้องการ'
            : 'Submit an appointment request below. Our team will verify therapist availability and contact you directly to confirm your booking.'}
        </p>
      </div>

      {/* SUCCESS MESSAGE VIEW (Strictly complying with prompt requirement) */}
      {isSubmitted && submittedData ? (
        <div className="bg-white rounded-3xl border border-[#C5A059]/40 p-8 sm:p-12 shadow-xl animate-fade-in-soft space-y-8">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-[#FAF4ED] text-[#C5A059] flex items-center justify-center mx-auto mb-2 border border-[#DFCA9B]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#202025]">
              {t.bookingSuccessTitle}
            </h2>
            <p className="text-base text-[#4E4A56] max-w-xl mx-auto leading-relaxed">
              {t.bookingSuccessMsg}
            </p>
          </div>

          {/* Transparent Request Details Box */}
          <div className="max-w-xl mx-auto rounded-2xl bg-[#FAF8F5] border border-[#EAE1D6] p-6 space-y-3 text-xs sm:text-sm text-[#4E4A56]">
            <h4 className="font-serif text-base font-bold text-[#202025] border-b border-[#EAE1D6] pb-2">
              {isThai ? 'สรุปรายละเอียดคำขอนัดหมาย' : 'Appointment Request Summary'}
            </h4>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div>
                <span className="text-gray-400 block text-[10px] uppercase">{isThai ? 'ชื่อผู้จอง' : 'Guest Name'}</span>
                <span className="font-semibold text-[#202025]">{submittedData.fullName}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase">{isThai ? 'เบอร์โทรศัพท์' : 'Phone'}</span>
                <span className="font-semibold text-[#202025]">{submittedData.phone}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase">{isThai ? 'วันที่ต้องการ' : 'Preferred Date'}</span>
                <span className="font-semibold text-[#202025]">{submittedData.preferredDate}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase">{isThai ? 'เวลาที่ต้องการ' : 'Preferred Time'}</span>
                <span className="font-semibold text-[#202025]">{submittedData.preferredTime}</span>
              </div>
              <div className="col-span-2">
                <span className="text-gray-400 block text-[10px] uppercase">{isThai ? 'บริการที่เลือก' : 'Requested Service'}</span>
                <span className="font-semibold text-[#202025]">{submittedData.serviceName}</span>
              </div>
              {submittedData.specialRequests && (
                <div className="col-span-2">
                  <span className="text-gray-400 block text-[10px] uppercase">{isThai ? 'คำขอพิเศษ' : 'Special Requests'}</span>
                  <span className="italic text-[#6C6872]">{submittedData.specialRequests}</span>
                </div>
              )}
            </div>
          </div>

          <div className="text-center pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-full bg-[#202025] hover:bg-[#C5A059] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              {isThai ? 'ส่งคำขอใหม่อีกครั้ง' : 'Submit Another Request'}
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="px-6 py-3 rounded-full bg-white hover:bg-[#FAF8F5] text-[#202025] border border-[#D5C7B5] text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              {isThai ? 'กลับสู่หน้าแรก' : 'Return Home'}
            </button>
          </div>
        </div>
      ) : (
        /* BOOKING FORM */
        <div className="bg-white rounded-3xl border border-[#EAE1D6] p-6 sm:p-12 shadow-sm">
          {/* Important Notice */}
          <div className="mb-8 p-4 rounded-2xl bg-[#FAF6F0] border border-[#EBE1D2] flex items-start space-x-3 text-xs text-[#6C6872]">
            <AlertCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {t.bookingNoticePrompt}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Full Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3D3B42] mb-2">
                  {isThai ? 'ชื่อ - นามสกุล' : 'Full Name'} *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={isThai ? 'เช่น คุณสมศรี สดใส' : 'e.g. Elena Rostova'}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border text-sm text-[#202025] focus:outline-none transition-colors ${
                      errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2D8CC] focus:border-[#C5A059]'
                    }`}
                  />
                  <User className="w-4 h-4 text-[#9E9AA6] absolute left-3.5 top-1/2 transform -translate-y-1/2" />
                </div>
                {errors.fullName && <p className="text-rose-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3D3B42] mb-2">
                  {isThai ? 'เบอร์โทรศัพท์ติดต่อ' : 'Phone Number'} *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={isThai ? 'เช่น 088 252 4955' : '+66 88 252 4955'}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border text-sm text-[#202025] focus:outline-none transition-colors ${
                      errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2D8CC] focus:border-[#C5A059]'
                    }`}
                  />
                  <Phone className="w-4 h-4 text-[#9E9AA6] absolute left-3.5 top-1/2 transform -translate-y-1/2" />
                </div>
                {errors.phone && <p className="text-rose-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Row 2: Email & Guests Count */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3D3B42] mb-2">
                  {isThai ? 'อีเมล (ถ้ามี)' : 'Email Address (optional)'}
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="yourname@domain.com"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border text-sm text-[#202025] focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2D8CC] focus:border-[#C5A059]'
                    }`}
                  />
                  <Mail className="w-4 h-4 text-[#9E9AA6] absolute left-3.5 top-1/2 transform -translate-y-1/2" />
                </div>
                {errors.email && <p className="text-rose-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3D3B42] mb-2">
                  {isThai ? 'จำนวนผู้รับบริการ' : 'Number of Guests'}
                </label>
                <div className="relative">
                  <select
                    value={formData.guestsCount}
                    onChange={(e) => setFormData({ ...formData, guestsCount: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D8CC] focus:border-[#C5A059] text-sm text-[#202025] focus:outline-none appearance-none"
                  >
                    <option value="1">1 {isThai ? 'ท่าน' : 'Guest'}</option>
                    <option value="2">2 {isThai ? 'ท่าน (คู่หู / แฟน)' : 'Guests (Duo / Couple)'}</option>
                    <option value="3">3 {isThai ? 'ท่าน' : 'Guests'}</option>
                    <option value="4+">4+ {isThai ? 'ท่านขึ้นไป (กลุ่ม)' : 'Guests (Group booking)'}</option>
                  </select>
                  <Users className="w-4 h-4 text-[#9E9AA6] absolute left-3.5 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>
            </div>

            {/* Row 3: Service Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3D3B42] mb-2">
                  {isThai ? 'หมวดหมู่บริการ' : 'Service Category'}
                </label>
                <select
                  value={formData.serviceCategory}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      serviceCategory: e.target.value,
                      serviceName: '',
                    });
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D8CC] focus:border-[#C5A059] text-sm text-[#202025] focus:outline-none"
                >
                  <option value="all">{isThai ? 'ทุกหมวดหมู่' : 'All Categories'}</option>
                  <option value="hair">{t.catHair}</option>
                  <option value="nails">{t.catNails}</option>
                  <option value="facial">{t.catFacial}</option>
                  <option value="spa">{t.catSpa}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3D3B42] mb-2">
                  {isThai ? 'บริการที่ต้องการ' : 'Select Service / Treatment'} *
                </label>
                <select
                  value={formData.serviceName}
                  onChange={(e) => setFormData({ ...formData, serviceName: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-sm text-[#202025] focus:outline-none ${
                    errors.serviceName ? 'border-rose-400' : 'border-[#E2D8CC] focus:border-[#C5A059]'
                  }`}
                >
                  <option value="">{isThai ? '-- กรุณาเลือกบริการ --' : '-- Please select a service --'}</option>
                  {SERVICES_DATA.filter(
                    (s) => formData.serviceCategory === 'all' || s.category === formData.serviceCategory
                  ).map((s) => (
                    <option key={s.id} value={s.title}>
                      {isThai ? `${s.thaiTitle} (${s.category})` : `${s.title} (${s.category})`}
                    </option>
                  ))}
                  {/* Also show promotion packages */}
                  {PROMOTIONS_DATA.map((p) => (
                    <option key={p.id} value={`Promotion: ${p.title}`}>
                      ⭐ {isThai ? `โปรโมชั่น: ${p.thaiTitle}` : `Promotion: ${p.title}`}
                    </option>
                  ))}
                </select>
                {errors.serviceName && <p className="text-rose-500 text-xs mt-1">{errors.serviceName}</p>}
              </div>
            </div>

            {/* Row 4: Preferred Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3D3B42] mb-2">
                  {isThai ? 'วันที่ต้องการเข้ารับบริการ' : 'Preferred Date'} *
                </label>
                <div className="relative">
                  <input
                    type="date"
                    min={minDateStr}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border text-sm text-[#202025] focus:outline-none ${
                      errors.preferredDate ? 'border-rose-400' : 'border-[#E2D8CC] focus:border-[#C5A059]'
                    }`}
                  />
                  <Calendar className="w-4 h-4 text-[#9E9AA6] absolute left-3.5 top-1/2 transform -translate-y-1/2" />
                </div>
                {errors.preferredDate && (
                  <p className="text-rose-500 text-xs mt-1">{errors.preferredDate}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3D3B42] mb-2">
                  {isThai ? 'เวลาที่ต้องการ (โดยประมาณ)' : 'Preferred Time'}
                </label>
                <div className="relative">
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D8CC] focus:border-[#C5A059] text-sm text-[#202025] focus:outline-none appearance-none"
                  >
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM (Noon)</option>
                    <option value="13:00">01:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                    <option value="18:00">06:00 PM</option>
                    <option value="19:00">07:00 PM</option>
                  </select>
                  <Clock className="w-4 h-4 text-[#9E9AA6] absolute left-3.5 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>
            </div>

            {/* Row 5: Preferred Language */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3D3B42] mb-2">
                {isThai ? 'ภาษาที่ต้องการให้ติดต่อกลับ' : 'Preferred Communication Language'}
              </label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2 text-sm text-[#3D3B42] cursor-pointer">
                  <input
                    type="radio"
                    name="preferredLanguage"
                    checked={formData.preferredLanguage === 'en'}
                    onChange={() => setFormData({ ...formData, preferredLanguage: 'en' })}
                    className="text-[#C5A059] focus:ring-[#C5A059]"
                  />
                  <span>English</span>
                </label>
                <label className="flex items-center space-x-2 text-sm text-[#3D3B42] cursor-pointer">
                  <input
                    type="radio"
                    name="preferredLanguage"
                    checked={formData.preferredLanguage === 'th'}
                    onChange={() => setFormData({ ...formData, preferredLanguage: 'th' })}
                    className="text-[#C5A059] focus:ring-[#C5A059]"
                  />
                  <span>ภาษาไทย (Thai)</span>
                </label>
              </div>
            </div>

            {/* Row 6: Special Requests */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3D3B42] mb-2">
                {isThai ? 'คำขอพิเศษ / ข้อสังเกตเพิ่มเติม (ถ้ามี)' : 'Special Requests or Notes (optional)'}
              </label>
              <div className="relative">
                <textarea
                  rows={3}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder={
                    isThai
                      ? 'เช่น สภาพหนังศีรษะแพ้ง่าย หรือต้องการช่างทำเล็บเฉพาะ'
                      : 'e.g. Any scalp sensitivity, specific nail polish preference, or event timing requirements'
                  }
                  className="w-full p-4 rounded-xl bg-[#FAF8F5] border border-[#E2D8CC] focus:border-[#C5A059] text-sm text-[#202025] focus:outline-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 text-xs font-bold tracking-[0.16em] uppercase text-white bg-gradient-to-r from-[#C5A059] via-[#D0AA5C] to-[#9E7D39] hover:from-[#B89047] hover:to-[#8C6D30] rounded-2xl shadow-md hover:shadow-xl transition-all flex items-center justify-center space-x-2 group active:scale-[0.99]"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>{t.requestAppointment}</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* QUICK BOOKING & CONTACT ALTERNATIVES (As requested in prompt) */}
      <div className="pt-8 border-t border-[#EAE1D6]">
        <h3 className="font-serif text-xl font-bold text-center text-[#202025] mb-6">
          {t.quickBookingOptions}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Call Us */}
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="p-5 rounded-2xl bg-white border border-[#EAE1D6] hover:border-[#C5A059] flex items-center space-x-4 shadow-2xs hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FAF4ED] text-[#C5A059] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#202025] block">
                {t.callUs}
              </span>
              <span className="text-xs text-[#6C6872]">{BUSINESS_INFO.phone}</span>
            </div>
          </a>

          {/* Message Us */}
          <button
            onClick={() => onNavigate('contact')}
            className="p-5 rounded-2xl bg-white border border-[#EAE1D6] hover:border-[#C5A059] flex items-center space-x-4 shadow-2xs hover:shadow-md transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FAF4ED] text-[#C5A059] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#202025] block">
                {t.messageUs}
              </span>
              <span className="text-xs text-[#6C6872]">{isThai ? 'ส่งข้อความสอบถาม' : 'Online inquiry form'}</span>
            </div>
          </button>

          {/* Get Directions */}
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white border border-[#EAE1D6] hover:border-[#C5A059] flex items-center space-x-4 shadow-2xs hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FAF4ED] text-[#C5A059] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#202025] block">
                {t.getDirections}
              </span>
              <span className="text-xs text-[#6C6872]">{BUSINESS_INFO.plusCode}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
