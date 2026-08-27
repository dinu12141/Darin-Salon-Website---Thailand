# ✨ Darin Beauty and Spa — Luxury Salon & Spa Website

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-amber?style=for-the-badge)](#)

> **"Your Beauty. Your Ritual. Your Moment."**  
> A bespoke, high-end digital presence for **Darin Beauty and Spa** located in Bangkok, Thailand. Designed with refined aesthetics, smooth animations, bilingual support (English & Thai), an integrated AI Concierge Chatbot, and an interactive appointment booking flow.

---

## 🌟 Key Highlights & Features

### 🌐 1. Bilingual Support (EN / TH)
- Full internationalization support for **English (`en`)** and **Thai (`th`)**.
- Real-time language switcher in the navigation bar.
- Automatic persistence using browser `localStorage` with dynamic document title and `lang` attribute updates.

### 🤖 2. Smart AI Concierge Assistant (`AIChatbot`)
- Floating interactive AI assistant with natural language understanding in both English and Thai.
- Provides instant answers regarding:
  - Spa & salon service recommendations and pricing (THB).
  - Operating hours and Bangkok location / directions.
  - Appointment booking guidance with quick deep-linking to booking forms.
  - Special promotions and package details.

### 💆‍♀️ 3. Comprehensive Service Catalog & Details
- Categorized treatments:
  - 💇 **Hair Styling & Treatments** (Organic Hair Spa, Keratin, Balayage, Scalp Detox)
  - 💅 **Nail Art & Spa Care** (Gel Extensions, Organic Spa Manicure/Pedicure)
  - 🧖‍♀️ **Facial & Skincare** (Hydra-Glow Facial, Anti-Aging Collagen Lift, Deep Cleansing)
  - 🌿 **Spa & Wellness Rituals** (Aromatherapy, Traditional Thai Herbal Compress, Hot Stone)
- Dedicated **Service Detail Pages** (`#service-detail/<id>`) with in-depth descriptions, benefits, step-by-step procedures, pricing, and 1-click booking pre-selection.

### 📅 4. Interactive Appointment Request System
- Streamlined booking flow:
  - Service selection pre-filled or chosen dynamically.
  - Preferred date, time slot, and specialist selection.
  - Client contact information with real-time field validation.
  - Instant submission feedback with booking summary.

### 🖼️ 5. Filterable Gallery with Lightbox Modal
- Visual showcase of salon interiors, private spa suites, nail stations, and styling transformations.
- Category filters (All, Salon, Spa, Nails, Treatment).
- High-resolution preview with responsive **Lightbox Modal** supporting keyboard navigation (`Esc`, Next, Prev).

### 🏷️ 6. Special Offers & Promotions
- Curated packages, seasonal discounts, and first-time visitor deals.
- Instant coupon code copy functionality and direct "Book Offer" links.

### 📱 7. Mobile-First Luxury Experience
- Sticky, blur-backdrop navigation header with sliding mobile drawer.
- **Fixed Mobile Bottom Action Bar** for instant access to Calling (`+66 88 252 4955`), Booking, Chat, and Directions.
- Optimized touch targets and responsive typography.

### 🔍 8. SEO & Local Business Optimization
- Semantic HTML5 structure with Schema.org `BeautySalon` / `LocalBusiness` JSON-LD structured data.
- OpenGraph (Facebook) and Twitter card meta tags for rich social sharing.
- Fast load times with Vite bundling and optimized font imports.

---

## 🛠️ Technology Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) | Modern reactive component architecture with hooks |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Type safety, interface definitions, and IDE autocomplete |
| **Build Tool & Bundler** | [Vite 7](https://vitejs.dev/) | Lightning-fast HMR and optimized production bundles |
| **Styling & Design** | [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first modern CSS engine with `@tailwindcss/vite` |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent, lightweight SVG icons |
| **Routing** | Hash-Based Router (`#home`, `#services`, etc.) | Client-side routing compatible with static hosting |
| **Fonts** | Google Fonts | *Cormorant Garamond*, *Playfair Display*, *Plus Jakarta Sans*, *Noto Sans Thai* |

---

## 📂 Project Structure

```text
darin-beauty-spa-website/
├── index.html                  # HTML entry point with SEO, Fonts & Schema.org JSON-LD
├── package.json                # Dependencies, scripts, and project metadata
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite bundler & plugin configuration
└── src/
    ├── main.tsx                # React application mounting point
    ├── App.tsx                 # Root component with routing, layout, and language state
    ├── index.css               # Global CSS & Tailwind configuration
    ├── types/
    │   └── index.ts            # Type definitions (Pages, Services, Bookings, Languages, etc.)
    ├── data/
    │   ├── business.ts         # Contact details, address, opening hours, social links
    │   ├── services.ts         # Complete catalog of services, pricing, and descriptions
    │   ├── promotions.ts       # Active promotions and discount packages
    │   ├── gallery.ts          # Gallery images, captions, and categories
    │   ├── faqs.ts             # FAQ questions and categorized answers
    │   └── translations.ts     # Bilingual dictionary (EN / TH)
    ├── services/
    │   └── aiAssistant.ts      # AI chatbot knowledge base & query processing engine
    ├── components/
    │   ├── Navbar.tsx          # Sticky navigation with language switcher & mobile menu
    │   ├── Footer.tsx          # Luxury footer with links, hours, and social channels
    │   ├── MobileBottomBar.tsx # Quick-action bottom floating bar for mobile users
    │   ├── AIChatbot.tsx       # Interactive AI concierge assistant dialog
    │   ├── ServiceCard.tsx     # Reusable card component for treatments
    │   ├── PromotionCard.tsx   # Card component for promotional packages
    │   └── LightboxModal.tsx   # Full-screen image lightbox viewer
    ├── pages/
    │   ├── HomePage.tsx        # Landing page with hero, curated services & reviews
    │   ├── AboutPage.tsx       # Brand story, philosophy, team, and hygiene standards
    │   ├── ServicesPage.tsx    # Filterable full services menu
    │   ├── ServiceDetailPage.tsx # Dedicated single service detail view
    │   ├── GalleryPage.tsx     # Salon & spa atmosphere gallery
    │   ├── PromotionsPage.tsx  # Special offers and discount packages
    │   ├── BookingPage.tsx     # Multi-step appointment request form
    │   ├── ContactPage.tsx     # Location, Google Maps, opening hours, contact form
    │   ├── FAQPage.tsx         # Frequently Asked Questions with search/filters
    │   └── PrivacyPolicyPage.tsx # Privacy policy and terms of service
    └── utils/
        └── navigation.ts       # Hash-based navigation and route parsing utilities
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18.0 or higher recommended) and **npm** installed on your system.

```bash
node -v
npm -v
```

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd "e:/darin-beauty-spa-website - option 1"
   ```

2. Install all dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to the local URL (usually `http://localhost:5173`).

---

## 📦 Build & Production

### Production Build
Compile TypeScript and bundle assets for high-performance production deployment:

```bash
npm run build
```
The optimized output will be generated inside the `dist/` directory.

### Preview Production Build
Locally preview the production build before deployment:

```bash
npm run preview
```

---

## 🎨 Design System & Aesthetics

- **Color Palette**:
  - `Sand / Warm Cream`: `#FAF8F5` (Background)
  - `Warm Accent / Muted Gold`: `#EBDDCF` / `#D4AF37`
  - `Deep Espresso / Charcoal`: `#202025` / `#3B2C24` (Typography & Contrast)
  - `Emerald / Sage Green`: Subtle nature-inspired highlights for organic treatments
- **Typography Pairing**:
  - **Headings**: *Cormorant Garamond* / *Playfair Display* (Timeless luxury serif)
  - **Body (EN)**: *Plus Jakarta Sans* (Crisp, modern sans-serif)
  - **Body & Headings (TH)**: *Noto Sans Thai* (Clean, legible Thai typography)

---

## 📍 Business Information

- **Name**: Darin Beauty and Spa
- **Location**: Bangkok, Thailand
- **Phone**: `+66 88 252 4955`
- **Currencies Accepted**: THB (฿)
- **Payment Methods**: Cash, Bank Transfer, Credit Card

---

## 📄 License

Private & Proprietary — Developed for **Darin Beauty and Spa**. All rights reserved.
