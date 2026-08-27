import { BUSINESS_INFO } from '../data/business';
import { Language } from '../types';

export interface ChatMessage {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  timestamp: string;
  actionButtons?: {
    label: string;
    actionType: 'navigate' | 'call' | 'maps' | 'preset';
    target: string;
  }[];
}

// Extensible provider interface for future OpenAI, Gemini, or custom LLM integration
export interface LLMConfig {
  provider?: 'local' | 'openai' | 'gemini';
  apiKey?: string;
  modelName?: string;
}

export class AIAssistantService {
  private config: LLMConfig;

  constructor(config: LLMConfig = { provider: 'local' }) {
    this.config = config;
  }

  public updateConfig(newConfig: Partial<LLMConfig>) {
    this.config = { ...this.config, ...newConfig };
  }

  public async generateResponse(
    userMessage: string,
    language: Language = 'en'
  ): Promise<{
    text: string;
    actionButtons?: ChatMessage['actionButtons'];
  }> {
    // If the owner configured an external LLM in the future, it hooks here.
    if (this.config.provider !== 'local' && this.config.apiKey) {
      try {
        return await this.callExternalLLM(userMessage, language);
      } catch (err) {
        console.warn('External LLM error, falling back to local safe engine', err);
      }
    }

    return this.safeLocalIntelligence(userMessage.trim().toLowerCase(), language);
  }

  private safeLocalIntelligence(
    query: string,
    language: Language
  ): {
    text: string;
    actionButtons?: ChatMessage['actionButtons'];
  } {
    const isThai = language === 'th';

    // 1. Guardrail against medical / clinical claims
    if (
      query.includes('cure') ||
      query.includes('medical') ||
      query.includes('doctor') ||
      query.includes('surgery') ||
      query.includes('botox') ||
      query.includes('filler') ||
      query.includes('หมอ') ||
      query.includes('รักษาโรค') ||
      query.includes('ฉีดหน้า')
    ) {
      return {
        text: isThai
          ? `ดาริน บิวตี้ แอนด์ สปา ให้บริการเพื่อความผ่อนคลายและการดูแลความงามทั่วไป ไม่มีการทำหัตถการทางการแพทย์หรือรักษาโรคค่ะ หากท่านมีข้อสงสัยเฉพาะทาง สามารถติดต่อสอบถามโดยตรงได้ที่ ${BUSINESS_INFO.phone}`
          : `Darin Beauty and Spa specializes in luxury salon care and relaxation spa rituals. We do not provide clinical medical procedures or medical diagnoses. For specialized inquiries, please contact us directly at ${BUSINESS_INFO.phone}.`,
        actionButtons: [
          { label: isThai ? 'โทรสอบถาม' : 'Call Salon', actionType: 'call', target: BUSINESS_INFO.phoneClean },
          { label: isThai ? 'ดูบริการสปา' : 'Explore Spa', actionType: 'navigate', target: 'services' },
        ],
      };
    }

    // 2. Guardrail on prices: never invent exact prices
    if (
      query.includes('price') ||
      query.includes('cost') ||
      query.includes('how much') ||
      query.includes('rate') ||
      query.includes('fee') ||
      query.includes('ราคา') ||
      query.includes('กี่บาท') ||
      query.includes('เท่าไหร่') ||
      query.includes('แพงไหม')
    ) {
      return {
        text: isThai
          ? `อัตราค่าบริการของ ดาริน บิวตี้ แอนด์ สปา จะขึ้นอยู่กับบริการและการประเมินเฉพาะบุคคลค่ะ ฉันไม่สามารถระบุราคาตายตัวได้ กรุณาติดต่อทางร้านโดยตรงที่ ${BUSINESS_INFO.phone} เพื่อรับการประเมินราคาและข้อเสนอที่แน่นอนนะคะ`
          : `I don't have fixed price figures for all services, as rates vary based on personalized requirements. Please contact Darin Beauty and Spa directly at ${BUSINESS_INFO.phone} for exact pricing and personalized quotes.`,
        actionButtons: [
          { label: isThai ? 'โทรสอบถามราคา' : 'Call For Rates', actionType: 'call', target: BUSINESS_INFO.phoneClean },
          { label: isThai ? 'ส่งคำขอนัดหมาย' : 'Request Booking', actionType: 'navigate', target: 'booking' },
        ],
      };
    }

    // 3. Guardrail on opening hours: never invent unverified opening hours
    if (
      query.includes('open') ||
      query.includes('hour') ||
      query.includes('close') ||
      query.includes('time') ||
      query.includes('schedule') ||
      query.includes('เวลาเปิด') ||
      query.includes('ปิดกี่โมง') ||
      query.includes('เปิดกี่โมง') ||
      query.includes('เปิดวันไหน')
    ) {
      return {
        text: isThai
          ? `สำหรับเวลาเปิดให้บริการและคิวว่างในแต่ละวัน กรุณาติดต่อสอบถาม ดาริน บิวตี้ แอนด์ สปา โดยตรงที่หมายเลข ${BUSINESS_INFO.phone} เพื่อความถูกต้องและได้ช่วงเวลาที่สะดวกที่สุดสำหรับท่านค่ะ`
          : `I don't have verified daily opening hours yet. Please contact Darin Beauty and Spa directly at ${BUSINESS_INFO.phone} to confirm daily hours and reserve your preferred time slot.`,
        actionButtons: [
          { label: isThai ? 'โทรติดต่อร้าน' : 'Call Now', actionType: 'call', target: BUSINESS_INFO.phoneClean },
          { label: isThai ? 'จองล่วงหน้า' : 'Book in Advance', actionType: 'navigate', target: 'booking' },
        ],
      };
    }

    // 4. Guardrail on staff names / credentials / awards / years of experience
    if (
      query.includes('staff') ||
      query.includes('therapist name') ||
      query.includes('award') ||
      query.includes('certification') ||
      query.includes('years') ||
      query.includes('owner') ||
      query.includes('พนักงานชื่อ') ||
      query.includes('รางวัล') ||
      query.includes('เปิดมากี่ปี')
    ) {
      return {
        text: isThai
          ? `ฉันไม่มีข้อมูลส่วนบุคคลของพนักงานหรือข้อมูลประวัติรางวัลที่ได้รับการยืนยันค่ะ กรุณาติดต่อ ดาริน บิวตี้ แอนด์ สปา โดยตรงที่ ${BUSINESS_INFO.phone} สำหรับรายละเอียดเพิ่มเติมนะคะ`
          : `I don't have that information yet. Please contact Darin Beauty and Spa directly at ${BUSINESS_INFO.phone} for the latest details regarding our specialists and appointments.`,
        actionButtons: [
          { label: isThai ? 'ติดต่อร้าน' : 'Contact Salon', actionType: 'call', target: BUSINESS_INFO.phoneClean },
        ],
      };
    }

    // 5. Booking inquiries
    if (
      query.includes('book') ||
      query.includes('appointment') ||
      query.includes('reserve') ||
      query.includes('schedule') ||
      query.includes('จอง') ||
      query.includes('นัด') ||
      query.includes('คิว')
    ) {
      return {
        text: isThai
          ? `ท่านสามารถส่งคำขอจองคิวออนไลน์ได้ทันทีผ่านหน้า "จองบริการ" บนเว็บไซต์ หรือโทรจองด่วนกับเจ้าหน้าที่ได้ที่ ${BUSINESS_INFO.phone} ค่ะ หลังจากส่งคำขอแล้ว ทางร้านจะติดต่อกลับเพื่อยืนยันคิวค่ะ`
          : `You can easily request an appointment directly on our website, or give us a quick call at ${BUSINESS_INFO.phone}. Our team will review availability and confirm your booking with you.`,
        actionButtons: [
          { label: isThai ? 'ไปยังหน้าจองคิว' : 'Go to Booking Form', actionType: 'navigate', target: 'booking' },
          { label: isThai ? 'โทรจองด่วน' : 'Call To Book', actionType: 'call', target: BUSINESS_INFO.phoneClean },
        ],
      };
    }

    // 6. Location & Directions
    if (
      query.includes('where') ||
      query.includes('location') ||
      query.includes('address') ||
      query.includes('map') ||
      query.includes('direction') ||
      query.includes('bangkok') ||
      query.includes('อยู่ที่ไหน') ||
      query.includes('แผนที่') ||
      query.includes('พิกัด') ||
      query.includes('เดินทาง')
    ) {
      return {
        text: isThai
          ? `ดาริน บิวตี้ แอนด์ สปา ตั้งอยู่ที่พิกัด ${BUSINESS_INFO.plusCode} กรุงเทพมหานคร ท่านสามารถกดปุ่มเพื่อเปิด Google Maps และนำทางได้ทันทีค่ะ`
          : `Darin Beauty and Spa is located at ${BUSINESS_INFO.plusCode} in Bangkok, Thailand. You can view our verified pin and navigation instructions via Google Maps.`,
        actionButtons: [
          { label: isThai ? 'เปิด Google Maps' : 'Open Google Maps', actionType: 'maps', target: BUSINESS_INFO.googleMapsUrl },
          { label: isThai ? 'ดูหน้าติดต่อเรา' : 'Contact Page', actionType: 'navigate', target: 'contact' },
        ],
      };
    }

    // 7. Contact phone / channel
    if (
      query.includes('phone') ||
      query.includes('call') ||
      query.includes('contact') ||
      query.includes('tel') ||
      query.includes('number') ||
      query.includes('เบอร์') ||
      query.includes('โทร') ||
      query.includes('ติดต่อ')
    ) {
      return {
        text: isThai
          ? `ท่านสามารถโทรติดต่อ ดาริน บิวตี้ แอนด์ สปา ได้โดยตรงที่หมายเลข ${BUSINESS_INFO.phone} หรือแวะมาที่หน้าร้านได้เลยค่ะ`
          : `You can reach Darin Beauty and Spa directly at ${BUSINESS_INFO.phone}. Our welcoming team looks forward to assisting you.`,
        actionButtons: [
          { label: isThai ? 'โทรเลย' : 'Call +66 88 252 4955', actionType: 'call', target: BUSINESS_INFO.phoneClean },
          { label: isThai ? 'หน้าติดต่อเรา' : 'Contact Info', actionType: 'navigate', target: 'contact' },
        ],
      };
    }

    // 8. Hair questions
    if (
      query.includes('hair') ||
      query.includes('blow') ||
      query.includes('cut') ||
      query.includes('styling') ||
      query.includes('scalp') ||
      query.includes('ผม') ||
      query.includes('สระ') ||
      query.includes('ไดร์') ||
      query.includes('ตัดผม')
    ) {
      return {
        text: isThai
          ? `บริการเกี่ยวกับเส้นผมของเรามีทั้ง การตัดแต่งและจัดทรงผม (Hair Styling), ทรีตเมนต์ฟื้นบำรุงเส้นผมล้ำลึก (Hair Treatments), สปาบำรุงผมและหนังศีรษะ (Hair Care & Scalp Ritual) รวมถึงไดร์จัดทรงสวย (Blow Dry & Styling) ค่ะ`
          : `Our Hair & Styling care includes precision Hair Styling, intensive restorative Hair Treatments, Scalp Rituals, and professional Blow Dry Styling. Each is crafted for healthy, silky elegance.`,
        actionButtons: [
          { label: isThai ? 'ดูบริการผม' : 'View Hair Services', actionType: 'navigate', target: 'services' },
          { label: isThai ? 'จองคิวทำผม' : 'Book Hair Session', actionType: 'navigate', target: 'booking' },
        ],
      };
    }

    // 9. Nails questions
    if (
      query.includes('nail') ||
      query.includes('manicure') ||
      query.includes('pedicure') ||
      query.includes('gel') ||
      query.includes('เล็บ') ||
      query.includes('ทาสี') ||
      query.includes('เพ้นท์') ||
      query.includes('สปาเท้า')
    ) {
      return {
        text: isThai
          ? `บริการเล็บของเรามีทั้ง ทำเล็บมือ (Manicure), ทำเล็บเท้าและสปาเท้า (Pedicure), ทรีตเมนต์ฟื้นบำรุงเล็บสุขภาพดี (Nail Care) และการดีไซน์ลวดลายเล็บ (Nail Styling & Art) ภายใต้มาตรฐานสุขอนามัยและความประณีตค่ะ`
          : `Our Nail services include Classic & Gel Manicures, Luxury Pedicure Spa, Nail Care restoration, and custom Nail Styling & Art using sanitized tools and premium pigments.`,
        actionButtons: [
          { label: isThai ? 'ดูบริการเล็บ' : 'View Nail Services', actionType: 'navigate', target: 'services' },
          { label: isThai ? 'จองคิวทำเล็บ' : 'Book Nail Care', actionType: 'navigate', target: 'booking' },
        ],
      };
    }

    // 10. Facial & Skincare questions
    if (
      query.includes('facial') ||
      query.includes('skin') ||
      query.includes('glow') ||
      query.includes('face') ||
      query.includes('หน้า') ||
      query.includes('ผิวหน้า') ||
      query.includes('มาร์ค') ||
      query.includes('มาสก์')
    ) {
      return {
        text: isThai
          ? `บริการดูแลผิวหน้าของเราประกอบด้วย ทรีตเมนต์ปรนนิบัติผิวหน้าเติมความชุ่มชื้น (Facial Treatments), สกินแคร์ฟื้นบำรุงผิวหมองคล้ำ (Skin Care & Brightening) และทรีตเมนต์บำรุงเฉพาะจุดรอบดวงตาและริมฝีปากค่ะ`
          : `Our facial rituals feature Deep Hydration Facial Treatments, Brightening Skincare, and Targeted Beauty Care for delicate zones like the eyes and lips to leave your complexion glowing.`,
        actionButtons: [
          { label: isThai ? 'ดูบริการผิวหน้า' : 'View Facial Care', actionType: 'navigate', target: 'services' },
          { label: isThai ? 'จองทรีตเมนต์' : 'Book Facial', actionType: 'navigate', target: 'booking' },
        ],
      };
    }

    // 11. Spa & Relaxation questions
    if (
      query.includes('massage') ||
      query.includes('spa') ||
      query.includes('relax') ||
      query.includes('aromatherapy') ||
      query.includes('wellness') ||
      query.includes('นวด') ||
      query.includes('สปา') ||
      query.includes('ผ่อนคลาย') ||
      query.includes('อโรมา')
    ) {
      return {
        text: isThai
          ? `บริการสปาเพื่อการผ่อนคลายของเรามีทั้ง สปานวดอโรมา (Relaxation Treatments), สครับและบำรุงผิวกาย (Body Care & Exfoliation) และการนวดฟื้นฟูสุขภาพองค์รวม (Wellness Treatments) ช่วยคลายความตึงเครียดในบรรยากาศที่เงียบสงบค่ะ`
          : `Our Spa & Relaxation rituals include soothing Aromatherapy Relaxation Massage, full-body exfoliation Body Care, and targeted holistic Wellness Treatments designed to melt away fatigue.`,
        actionButtons: [
          { label: isThai ? 'ดูบริการสปา' : 'View Spa Services', actionType: 'navigate', target: 'services' },
          { label: isThai ? 'จองเวลาสปา' : 'Book Spa Session', actionType: 'navigate', target: 'booking' },
        ],
      };
    }

    // 12. Promotions
    if (
      query.includes('promotion') ||
      query.includes('special') ||
      query.includes('deal') ||
      query.includes('discount') ||
      query.includes('offer') ||
      query.includes('โปร') ||
      query.includes('ลดราคา') ||
      query.includes('แพ็กเกจ')
    ) {
      return {
        text: isThai
          ? `เรามีข้อเสนอความงามประจำฤดูกาล, แพ็กเกจต้อนรับลูกค้าใหม่, และแพ็กเกจคอมโบสปาที่ปรับเปลี่ยนตามช่วงเวลา สามารถดูรายละเอียดได้ที่หน้า "โปรโมชั่น" หรือสอบถามเจ้าหน้าที่ได้เลยค่ะ`
          : `We offer Seasonal Beauty Offers, New Customer Welcome Packages, and Signature Duo Packages. Visit our Promotions page or contact the salon directly for current eligibility.`,
        actionButtons: [
          { label: isThai ? 'ดูโปรโมชั่น' : 'View Promotions', actionType: 'navigate', target: 'promotions' },
          { label: isThai ? 'สอบถามทางโทรศัพท์' : 'Call Salon', actionType: 'call', target: BUSINESS_INFO.phoneClean },
        ],
      };
    }

    // Default polite safe fallback matching strict instructions:
    return {
      text: isThai
        ? `ฉันไม่มีข้อมูลในส่วนนี้ที่ได้รับการยืนยันค่ะ กรุณาติดต่อ ดาริน บิวตี้ แอนด์ สปา โดยตรงที่หมายเลข ${BUSINESS_INFO.phone} เพื่อสอบถามรายละเอียดล่าสุดจากเจ้าหน้าที่นะคะ ✨`
        : `I don't have that information yet. Please contact Darin Beauty and Spa directly at ${BUSINESS_INFO.phone} for the latest details. ✨`,
      actionButtons: [
        { label: isThai ? 'โทรหาเรา' : 'Call Us Directly', actionType: 'call', target: BUSINESS_INFO.phoneClean },
        { label: isThai ? 'ดูบริการทั้งหมด' : 'Explore Services', actionType: 'navigate', target: 'services' },
        { label: isThai ? 'ส่งข้อความ' : 'Contact Page', actionType: 'navigate', target: 'contact' },
      ],
    };
  }

  // Future external LLM implementation wrapper
  private async callExternalLLM(
    _userMessage: string,
    _language: Language
  ): Promise<{ text: string }> {
    // This allows business owner to simply configure OpenAI or Gemini endpoint
    return {
      text: "I don't have that information yet. Please contact Darin Beauty and Spa directly for the latest details.",
    };
  }
}

export const aiAssistantService = new AIAssistantService();
