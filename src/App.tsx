import { useState, useEffect } from 'react';
import { PageId, Language } from './types';
import { parseCurrentHash, navigateTo } from './utils/navigation';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { AIChatbot } from './components/AIChatbot';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { GalleryPage } from './pages/GalleryPage';
import { PromotionsPage } from './pages/PromotionsPage';
import { BookingPage } from './pages/BookingPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

export function App() {
  const [routeState, setRouteState] = useState(parseCurrentHash());
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('darin_lang');
    return (saved === 'th' || saved === 'en') ? saved : 'en';
  });

  // Listen to hash changes (browser back/forward or programmatic navigation)
  useEffect(() => {
    const handleHashChange = () => {
      setRouteState(parseCurrentHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync document title and html lang on route or language change
  useEffect(() => {
    document.documentElement.lang = language;
    const pageTitles: Record<PageId, { en: string; th: string }> = {
      home: {
        en: 'Darin Beauty and Spa | Luxury Beauty Salon & Spa in Bangkok',
        th: 'ดาริน บิวตี้ แอนด์ สปา | ร้านเสริมสวยและสปาเพื่อการผ่อนคลาย กรุงเทพฯ',
      },
      about: {
        en: 'About Us | Darin Beauty and Spa Bangkok',
        th: 'เกี่ยวกับเรา | ดาริน บิวตี้ แอนด์ สปา กรุงเทพฯ',
      },
      services: {
        en: 'Services Menu | Darin Beauty and Spa',
        th: 'บริการทั้งหมด | ดาริน บิวตี้ แอนด์ สปา',
      },
      'service-detail': {
        en: 'Service Details | Darin Beauty and Spa',
        th: 'รายละเอียดบริการ | ดาริน บิวตี้ แอนด์ สปา',
      },
      gallery: {
        en: 'Salon & Spa Gallery | Darin Beauty and Spa',
        th: 'ภาพบรรยากาศร้าน | ดาริน บิวตี้ แอนด์ สปา',
      },
      promotions: {
        en: 'Special Promotions & Packages | Darin Beauty and Spa',
        th: 'โปรโมชั่นและแพ็กเกจพิเศษ | ดาริน บิวตี้ แอนด์ สปา',
      },
      booking: {
        en: 'Book an Appointment Request | Darin Beauty and Spa',
        th: 'ส่งคำขอจองคิวรับบริการ | ดาริน บิวตี้ แอนด์ สปา',
      },
      contact: {
        en: 'Contact & Location Bangkok | Darin Beauty and Spa',
        th: 'ติดต่อเราและแผนที่เดินทาง | ดาริน บิวตี้ แอนด์ สปา',
      },
      faq: {
        en: 'Frequently Asked Questions | Darin Beauty and Spa',
        th: 'คำถามที่พบบ่อย | ดาริน บิวตี้ แอนด์ สปา',
      },
      privacy: {
        en: 'Privacy Policy | Darin Beauty and Spa',
        th: 'นโยบายความเป็นส่วนตัว | ดาริน บิวตี้ แอนด์ สปา',
      },
    };

    const titleObj = pageTitles[routeState.page] || pageTitles.home;
    document.title = language === 'th' ? titleObj.th : titleObj.en;
  }, [routeState.page, language]);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    try {
      localStorage.setItem('darin_lang', newLang);
    } catch {
      // safe fallback for restricted cookies/storage
    }
  };

  const handleNavigate = (page: PageId, param?: string) => {
    navigateTo(page, param);
    setRouteState({ page, param });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#202025] font-sans selection:bg-[#EBDDCF] selection:text-[#3B2C24]">
      {/* Sticky Header with Navigation & Language Switcher */}
      <Navbar
        currentPage={routeState.page}
        onNavigate={handleNavigate}
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      {/* Main Multi-Page Content Area */}
      <main className="flex-1">
        {routeState.page === 'home' && (
          <HomePage onNavigate={handleNavigate} language={language} />
        )}
        {routeState.page === 'about' && (
          <AboutPage onNavigate={handleNavigate} language={language} />
        )}
        {routeState.page === 'services' && (
          <ServicesPage onNavigate={handleNavigate} language={language} />
        )}
        {routeState.page === 'service-detail' && (
          <ServiceDetailPage
            serviceId={routeState.param}
            onNavigate={handleNavigate}
            language={language}
          />
        )}
        {routeState.page === 'gallery' && (
          <GalleryPage onNavigate={handleNavigate} language={language} />
        )}
        {routeState.page === 'promotions' && (
          <PromotionsPage onNavigate={handleNavigate} language={language} />
        )}
        {routeState.page === 'booking' && (
          <BookingPage
            initialServiceId={routeState.param}
            onNavigate={handleNavigate}
            language={language}
          />
        )}
        {routeState.page === 'contact' && (
          <ContactPage onNavigate={handleNavigate} language={language} />
        )}
        {routeState.page === 'faq' && (
          <FAQPage onNavigate={handleNavigate} language={language} />
        )}
        {routeState.page === 'privacy' && (
          <PrivacyPolicyPage onNavigate={handleNavigate} language={language} />
        )}
      </main>

      {/* Sophisticated Luxury Footer */}
      <Footer onNavigate={handleNavigate} language={language} />

      {/* Fixed Bottom Action Bar for Mobile Devices */}
      <MobileBottomBar onNavigate={handleNavigate} language={language} />

      {/* Floating AI Chatbot Assistant on Every Page */}
      <AIChatbot onNavigate={handleNavigate} language={language} />
    </div>
  );
}

export default App;
