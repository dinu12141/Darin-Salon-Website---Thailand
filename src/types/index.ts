export type Language = 'en' | 'th';

export type ServiceCategory = 'all' | 'hair' | 'nails' | 'facial' | 'spa';

export interface ServiceItem {
  id: string;
  category: 'hair' | 'nails' | 'facial' | 'spa';
  title: string;
  thaiTitle: string;
  subtitle: string;
  thaiSubtitle: string;
  shortDesc: string;
  thaiShortDesc: string;
  fullDesc: string;
  thaiFullDesc: string;
  duration: string;
  thaiDuration: string;
  priceDisplay: string;
  thaiPriceDisplay: string;
  benefits: string[];
  thaiBenefits: string[];
  whatToExpect: string[];
  thaiWhatToExpect: string[];
  preparation: string[];
  thaiPreparation: string[];
  image: string;
  featured?: boolean;
}

export interface PromotionItem {
  id: string;
  title: string;
  thaiTitle: string;
  tag: string;
  thaiTag: string;
  description: string;
  thaiDescription: string;
  validity: string;
  thaiValidity: string;
  highlights: string[];
  thaiHighlights: string[];
  image: string;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  thaiTitle: string;
  category: 'salon' | 'hair' | 'nails' | 'beauty' | 'spa' | 'interior';
  image: string;
  aspect?: 'landscape' | 'portrait' | 'square';
  caption: string;
  thaiCaption: string;
}

export interface FAQItem {
  id: string;
  category: string;
  thaiCategory: string;
  question: string;
  thaiQuestion: string;
  answer: string;
  thaiAnswer: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  serviceCategory: string;
  serviceName: string;
  guestsCount: string;
  preferredLanguage: 'en' | 'th';
  specialRequests: string;
}

export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'service-detail'
  | 'gallery'
  | 'promotions'
  | 'booking'
  | 'contact'
  | 'faq'
  | 'privacy';
