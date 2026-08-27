import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  // Hair & Styling
  {
    id: 'hair-styling',
    category: 'hair',
    title: 'Hair Styling',
    thaiTitle: 'จัดแต่งและตัดแต่งทรงผม',
    subtitle: 'Tailored haircutting, shaping, and personalized everyday or event styling.',
    thaiSubtitle: 'บริการตัดแต่ง จัดทรงผม และสไตล์ลิ่งเฉพาะบุคคลสำหรับทุกโอกาส',
    shortDesc: 'Enhance your personal style with professional hair shaping, trimming, and custom styling tailored to your face and preferences.',
    thaiShortDesc: 'เสริมเสน่ห์ที่เป็นเอกลักษณ์ของคุณด้วยการตัดแต่งทรงผมและจัดทรงอย่างประณีต',
    fullDesc: 'At Darin Beauty and Spa, hair styling is treated as a personalized craft. Our specialists consult with you to understand your hair texture, daily routine, and desired aesthetic, ensuring you leave with a refined look that looks stunning and feels effortless to maintain.',
    thaiFullDesc: 'ที่ ดาริน บิวตี้ แอนด์ สปา เราใส่ใจในทุกรายละเอียดของการดีไซน์ทรงผม โดยคำนึงถึงสภาพเส้นผมและรูปหน้า เพื่อให้คุณได้ทรงผมที่สวยสง่าและดูแลได้ง่ายในชีวิตประจำวัน',
    duration: 'To be confirmed',
    thaiDuration: 'โปรดยืนยันกับทางร้าน',
    priceDisplay: 'Contact us',
    thaiPriceDisplay: 'ติดต่อสอบถามราคา',
    benefits: [
      'Personalized style consultation',
      'Gentle scalp wash and conditioning',
      'Professional cut and texturizing',
      'Finished with heat styling and light serum'
    ],
    thaiBenefits: [
      'ให้คำปรึกษาทรงผมที่เหมาะกับบุคลิกภาพ',
      'สระและนวดบำรุงหนังศีรษะอย่างอ่อนโยน',
      'ตัดแต่งทรงผมอย่างประณีต',
      'เซ็ตทรงผมให้เงางามพร้อมออกงาน'
    ],
    whatToExpect: [
      'Initial consultation regarding desired style and hair health',
      'Relaxing hair wash and deep condition at the basin',
      'Precision cutting and styling by experienced stylists',
      'Styling advice for keeping your look fresh at home'
    ],
    thaiWhatToExpect: [
      'พูดคุยปรึกษาทรงผมที่ต้องการและสุขภาพเส้นผม',
      'สระผมและบำรุงด้วยทรีตเมนต์ที่เตียงสระผ่อนคลาย',
      'ตัดแต่งและเซ็ตทรงอย่างประณีต',
      'คำแนะนำการดูแลทรงผมด้วยตนเองที่บ้าน'
    ],
    preparation: [
      'Feel free to bring photos or inspiration of styles you admire',
      'Mention any scalp sensitivities or chemical treatments in the past 6 months'
    ],
    thaiPreparation: [
      'สามารถนำรูปถ่ายทรงผมที่ชื่นชอบมาประกอบการปรึกษาได้',
      'แจ้งประวัติการดัด ทำสี หรือสภาพหนังศีรษะที่บอบบาง'
    ],
    image: 'https://images.pexels.com/photos/7440129/pexels-photo-7440129.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    featured: true,
  },
  {
    id: 'hair-treatments',
    category: 'hair',
    title: 'Hair Treatments',
    thaiTitle: 'ทรีตเมนต์ฟื้นฟูเส้นผมล้ำลึก',
    subtitle: 'Intensive nourishing care for dry, damaged, or color-treated tresses.',
    thaiSubtitle: 'การดูแลบำรุงเข้มข้นเพื่อฟื้นฟูผมแห้งเสียและผมผ่านการทำเคมี',
    shortDesc: 'Deep conditioning and restorative masks formulated to restore moisture, shine, and natural softness to stressed hair.',
    thaiShortDesc: 'มาสก์เข้มข้นฟื้นฟูความชุ่มชื้น คืนความเงางามและสัมผัสนุ่มลื่นให้กับเส้นผม',
    fullDesc: 'Revive tired or heat-damaged locks with our rejuvenating salon treatments. Using nutrient-rich formulations, this treatment infuses deep moisture into the hair cuticle, restoring bounce, strength, and a silky smooth finish.',
    thaiFullDesc: 'ฟื้นฟูเส้นผมที่แห้งเสียจากความร้อนหรือสารเคมี ด้วยสารอาหารบำรุงเข้มข้นที่ซึมซาบสู่แกนผม คืนความเงางามและมีน้ำหนักให้แก่เส้นผมของคุณ',
    duration: 'To be confirmed',
    thaiDuration: 'โปรดยืนยันกับทางร้าน',
    priceDisplay: 'Contact us',
    thaiPriceDisplay: 'ติดต่อสอบถามราคา',
    benefits: [
      'Restores moisture and lipid balance to hair cuticles',
      'Improves hair softness, elasticity, and shine',
      'Reduces frizz and split ends appearance',
      'Helps protect against humidity and pollution'
    ],
    thaiBenefits: [
      'คืนสมดุลความชุ่มชื้นสู่เกล็ดผม',
      'เพิ่มความนุ่มสลวย ยืดหยุ่น และเงางาม',
      'ลดปัญหาผมชี้ฟูและปลายผมแห้งกรอบ',
      'ปกป้องเส้นผมจากมลภาวะและความชื้น'
    ],
    whatToExpect: [
      'Scalp and hair fiber assessment',
      'Clarifying cleanse to prepare hair for absorption',
      'Even application of nutrient-rich repair mask with gentle steaming',
      'Rinse with cool water lock-in technique and smooth blow dry'
    ],
    thaiWhatToExpect: [
      'ประเมินสภาพเส้นผมและหนังศีรษะ',
      'สระทำความสะอาดล้ำลึกเพื่อเปิดเกล็ดผมรับการบำรุง',
      'ลงทรีตเมนต์เข้มข้นพร้อมอบไอน้ำละมุน',
      'ล้างออกและเป่าไดร์จัดทรงสวย'
    ],
    preparation: [
      'Let us know if you have recent bleach, relaxer, or keratin coatings',
      'No special prep needed; come ready to relax'
    ],
    thaiPreparation: [
      'แจ้งประวัติการทำเคมีหรือฟอกผมล่าสุด',
      'ไม่ต้องเตรียมตัวล่วงหน้า มาผ่อนคลายได้ทันที'
    ],
    image: 'https://images.pexels.com/photos/14615061/pexels-photo-14615061.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    featured: false,
  },
  {
    id: 'hair-care',
    category: 'hair',
    title: 'Hair Care & Scalp Ritual',
    thaiTitle: 'การดูแลผมและสปาหนังศีรษะ',
    subtitle: 'Harmonious scalp massage and purifying care for holistic hair wellness.',
    thaiSubtitle: 'การนวดหนังศีรษะผ่อนคลายและดีท็อกซ์เพื่อสุขภาพผมที่แข็งแรง',
    shortDesc: 'A soothing scalp cleanse and nourishing ritual designed to invigorate roots, release head tension, and promote vibrant hair health.',
    thaiShortDesc: 'ทำความสะอาดหนังศีรษะและนวดผ่อนคลาย ช่วยกระตุ้นการไหลเวียนและบรรเทาความตึงเครียด',
    fullDesc: 'Healthy, radiant hair starts with a balanced scalp. Our Hair Care ritual pairs gentle scalp purification with soothing acupressure massage techniques, relieving daily tension while encouraging healthy follicle vitality in an atmosphere of serene relaxation.',
    thaiFullDesc: 'ผมสวยสุขภาพดีเริ่มต้นจากหนังศีรษะที่สมดุล สปาหนังศีรษะของเราผสานการทำความสะอาดอย่างล้ำลึกกับการกดจุดนวดผ่อนคลาย คลายความเมื่อยล้าและฟื้นบำรุงรากผม',
    duration: 'To be confirmed',
    thaiDuration: 'โปรดยืนยันกับทางร้าน',
    priceDisplay: 'Contact us',
    thaiPriceDisplay: 'ติดต่อสอบถามราคา',
    benefits: [
      'Gentle scalp exfoliation and sebum balance',
      'Aromatherapeutic head and neck relaxation massage',
      'Stimulates microcirculation at hair roots',
      'Leaves hair light, bouncy, and revitalized'
    ],
    thaiBenefits: [
      'ผลัดเซลล์ผิวหนังศีรษะอย่างอ่อนโยนและปรับสมดุลความมัน',
      'นวดผ่อนคลายศีรษะและลำคอด้วยกลิ่นหอมอโรมา',
      'กระตุ้นการไหลเวียนโลหิตบริเวณโคนผม',
      'เส้นผมเบาสบาย มีวอลลุ่ม และสดชื่น'
    ],
    whatToExpect: [
      'Sensory consultation and choice of aromatic essence',
      'Purifying scalp cleanse with botanical formulations',
      'Warm towel wrap and rhythmic scalp acupressure',
      'Nourishing rinse followed by gentle blow dry'
    ],
    thaiWhatToExpect: [
      'เลือกกลิ่นเอสเซนส์อโรมาที่ชื่นชอบ',
      'ทำความสะอาดหนังศีรษะด้วยสารสกัดธรรมชาติ',
      'ประคบผ้าอุ่นและนวดกดจุดผ่อนคลายศีรษะ',
      'ล้างทำความสะอาดและไดร์จัดแต่งทรงอย่างนุ่มนวล'
    ],
    preparation: [
      'Avoid heavy styling products or hairsprays right before your visit'
    ],
    thaiPreparation: [
      'หลีกเลี่ยงการฉีดสเปรย์จัดทรงผมหนาแน่นก่อนเข้ารับบริการ'
    ],
    image: 'https://images.pexels.com/photos/5659016/pexels-photo-5659016.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    featured: true,
  },
  {
    id: 'blow-dry-styling',
    category: 'hair',
    title: 'Blow Dry & Styling',
    thaiTitle: 'ไดร์และเซ็ตผมระดับพรีเมียม',
    subtitle: 'Signature bouncy blowouts, sleek straight finishes, or soft salon waves.',
    thaiSubtitle: 'ไดร์วอลลุ่ม ไดร์ตรงสลวย หรือม้วนลอนคลายธรรมชาติ',
    shortDesc: 'Step out looking effortlessly polished with our professional blowout service, perfect for work, special dinners, or weekend outings.',
    thaiShortDesc: 'เติมความมั่นใจในทุกวันสำคัญด้วยการไดร์และเซ็ตทรงผมเงางาม มีวอลลุ่มสวยสมบูรณ์แบบ',
    fullDesc: 'Whether you desire voluminous waves, glass-like sleek straight hair, or natural movement with lasting bounce, our blow dry styling service uses quality heat-protectant products and round-brush mastery to create a luxurious, camera-ready finish.',
    thaiFullDesc: 'ไม่ว่าคุณจะชอบลอนวอลลุ่มมีชีวิตชีวา ผมตรงเงางาม หรือลอนคลายธรรมชาติ ช่างผู้ชำนาญการจะช่วยเนรมิตทรงผมที่สวยสะกดสายตา พร้อมออกงานได้ทันที',
    duration: 'To be confirmed',
    thaiDuration: 'โปรดยืนยันกับทางร้าน',
    priceDisplay: 'Contact us',
    thaiPriceDisplay: 'ติดต่อสอบถามราคา',
    benefits: [
      'Long-lasting hold and radiant shine',
      'Thermal protection applied prior to styling',
      'Customized wave, volume, or straight style',
      'Leaves hair light with touchable softness'
    ],
    thaiBenefits: [
      'ทรงผมอยู่ทรงยาวนานและเงางามเป็นธรรมชาติ',
      'ลงผลิตภัณฑ์ปกป้องความร้อนก่อนเซ็ตทรง',
      'เลือกสไตล์ได้ตามต้องการ ทั้งลอนคลายและไดร์ตรง',
      'ผมนุ่มลื่นไม่เหนียวเหนอะหนะ'
    ],
    whatToExpect: [
      'Warm basin cleanse and conditioner',
      'Application of lightweight heat barrier serum',
      'Round-brush sectioning and blowout styling',
      'Fine finishing mist for hold and luster'
    ],
    thaiWhatToExpect: [
      'สระผมและบำรุงด้วยครีมนวดคุณภาพสูง',
      'ชโลมเซรั่มปกป้องความร้อน',
      'ไดร์เซ็ตทรงทีละช่อด้วยแปรงกลม',
      'พ่นสเปรย์ละอองละเอียดเพื่อล็อกทรงสวย'
    ],
    preparation: [
      'Wear comfortable clothing suitable for washing chair'
    ],
    thaiPreparation: [
      'สวมเสื้อผ้าสบายๆ สำหรับนั่งเตียงสระผม'
    ],
    image: 'https://images.pexels.com/photos/14615063/pexels-photo-14615063.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    featured: false,
  },

  // Nails
  {
    id: 'manicure',
    category: 'nails',
    title: 'Manicure',
    thaiTitle: 'ทำเล็บมือและสปามือ',
    subtitle: 'Refined cuticle care, nail shaping, and elegant nail polish application.',
    thaiSubtitle: 'ตัดแต่งทรงเล็บ ดูแลหนังกำพร้า และทาสีเล็บสวยเรียบหรู',
    shortDesc: 'Pamper your hands with meticulous cuticle grooming, buffing, moisturizing hand massage, and long-wearing polish in your choice of shade.',
    thaiShortDesc: 'ปรนนิบัติมือและเล็บของคุณด้วยการตัดแต่งทรงเล็บ ขัดบำรุง และนวดมือผ่อนคลาย',
    fullDesc: 'Our manicure service transforms your hands into a showcase of neat elegance. Every tool is carefully sanitized, and each step is carried out with gentle precision—from shaping the nail bed to trimming cuticles and applying smooth, lustrous color.',
    thaiFullDesc: 'บริการทำเล็บมือที่เน้นความสะอาด ปลอดภัย และความประณีต ดูแลหนังรอบเล็บ ตะไบแต่งทรง และทาสีเล็บที่เข้ากับโทนสีผิวของคุณอย่างลงตัว',
    duration: 'To be confirmed',
    thaiDuration: 'โปรดยืนยันกับทางร้าน',
    priceDisplay: 'Contact us',
    thaiPriceDisplay: 'ติดต่อสอบถามราคา',
    benefits: [
      'Hygienic and sanitized tools for total peace of mind',
      'Precision shaping tailored to your hands',
      'Nourishing hand and finger cuticle oil massage',
      'Wide choice of classic, nude, and elegant shades'
    ],
    thaiBenefits: [
      'อุปกรณ์ผ่านการทำความสะอาดและฆ่าเชื้อตามมาตรฐาน',
      'ตะไบแต่งทรงเล็บที่รับกับรูปนิ้วมือ',
      'นวดบำรุงด้วยน้ำมันออร์แกนิกและครีมบำรุงมือ',
      'มีเฉดสีคลาสสิก นู้ด และสีแฟชั่นให้เลือกมากมาย'
    ],
    whatToExpect: [
      'Warm sanitizing hand soak',
      'Gentle cuticle softening, push-back, and neat trimming',
      'Nail filing, shaping, and buffing',
      'Hydrating hand massage followed by high-gloss color or buff finish'
    ],
    thaiWhatToExpect: [
      'แช่มือในน้ำอุ่นเพื่อผ่อนคลาย',
      'ตัดแต่งหนังกำพร้ารอบเล็บอย่างนุ่มนวล',
      'ตะไบตกแต่งทรงเล็บและขัดหน้าเล็บให้เรียบเนียน',
      'นวดบำรุงมือก่อนทาสีเล็บเงางาม'
    ],
    preparation: [
      'Let the technician know if you have existing gel or acrylic that needs removal'
    ],
    thaiPreparation: [
      'แจ้งช่างล่วงหน้าหากมีสีเจลหรือต่อเล็บเดิมที่ต้องถอดออก'
    ],
    image: 'https://images.pexels.com/photos/5484948/pexels-photo-5484948.png?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    featured: true,
  },
  {
    id: 'pedicure',
    category: 'nails',
    title: 'Pedicure',
    thaiTitle: 'ทำเล็บเท้าและสปาเท้า',
    subtitle: 'Relaxing foot bath, soothing scrub, heel smoothing, and pedicure care.',
    thaiSubtitle: 'แช่เท้าผ่อนคลาย สครับผลัดเซลล์ผิว ส้นเท้าเนียนนุ่ม และตกแต่งเล็บเท้า',
    shortDesc: 'A rejuvenating foot care experience featuring an herbal soak, heel smoothing, nail shaping, and a comforting foot massage.',
    thaiShortDesc: 'ดูแลเรียวเท้าให้ผ่อนคลาย ด้วยการแช่น้ำอุ่น สครับส้นเท้า และตัดแต่งเล็บเท้าให้สะอาดหมดจด',
    fullDesc: 'Give tired feet the attention they deserve. Our pedicure service combines therapeutic relaxation with thorough hygiene. After an aromatic foot soak and gentle exfoliating scrub, your nails and heels are neatly groomed and conditioned to baby-soft perfection.',
    thaiFullDesc: 'ปรนนิบัติเท้าที่เมื่อยล้าด้วยการแช่เท้าด้วยเกลืออโรมา สครับขัดเซลล์ผิวที่แห้งกร้าน และตัดแต่งทรงเล็บเท้าให้สะอาด สวยงาม และเบาสบาย',
    duration: 'To be confirmed',
    thaiDuration: 'โปรดยืนยันกับทางร้าน',
    priceDisplay: 'Contact us',
    thaiPriceDisplay: 'ติดต่อสอบถามราคา',
    benefits: [
      'Relieves foot fatigue and improves circulation',
      'Smoothes dry and rough heel texture',
      'Meticulous nail trimming to prevent ingrown discomfort',
      'Deeply hydrating foot balm application'
    ],
    thaiBenefits: [
      'ช่วยคลายความเมื่อยล้าและกระตุ้นการไหลเวียน',
      'ลดรอยแห้งกร้านบริเวณส้นเท้าให้เนียนนุ่ม',
      'ตัดแต่งทรงเล็บอย่างระมัดระวัง ป้องกันเล็บขบ',
      'บำรุงด้วยบาล์มเข้มข้นเพื่อความชุ่มชื้น'
    ],
    whatToExpect: [
      'Warm aromatic foot bath with sea salts',
      'Exfoliating foot scrub targeting heels and soles',
      'Toenail trimming, shaping, and cuticle grooming',
      'Soothing foot massage and clean lacquer application'
    ],
    thaiWhatToExpect: [
      'แช่เท้าในอ่างน้ำอุ่นผสมเกลือสปาอโรมา',
      'สครับขัดผิวบริเวณส้นเท้าและฝ่าเท้า',
      'ตัดแต่งและตะไบทรงเล็บเท้า',
      'นวดผ่อนคลายฝ่าเท้าและทาสีเล็บ'
    ],
    preparation: [
      'Open-toe footwear is recommended if selecting regular polish'
    ],
    thaiPreparation: [
      'แนะนำสวมรองเท้าแตะเปิดปลายเท้าหากเลือกทาสีธรรมดา'
    ],
    image: 'https://images.pexels.com/photos/7755558/pexels-photo-7755558.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    featured: false,
  },
  {
    id: 'nail-care',
    category: 'nails',
    title: 'Nail Care & Restoration',
    thaiTitle: 'การดูแลและฟื้นบำรุงเล็บสุขภาพดี',
    subtitle: 'Strengthening treatments and deep hydration for delicate or brittle nails.',
    thaiSubtitle: 'ทรีตเมนต์เสริมความแข็งแรงและบำรุงเล็บที่เปราะบาง',
    shortDesc: 'Targeted botanical treatments, keratin fortification, and deep moisture for thin, peeling, or overworked nails.',
    thaiShortDesc: 'ฟื้นฟูสุขภาพเล็บที่ผ่านการทำสีหรือเปราะบาง ด้วยเคราตินและน้ำมันสกัดเข้มข้น',
    fullDesc: 'Ideal for those seeking a break from color or recovering from extensions, our Nail Care treatment focuses exclusively on strengthening the natural nail plate and repairing damaged cuticles with vitamin-infused serums and gentle buffing.',
    thaiFullDesc: 'เหมาะสำหรับผู้ที่ต้องการพักเล็บหรือฟื้นฟูเล็บที่บางเปราะ ให้กลับมาแข็งแรง เรียบเนียน และมีสุขภาพดีตามธรรมชาติด้วยวิตามินและสารสกัดบำรุงเข้มข้น',
    duration: 'To be confirmed',
    thaiDuration: 'โปรดยืนยันกับทางร้าน',
    priceDisplay: 'Contact us',
    thaiPriceDisplay: 'ติดต่อสอบถามราคา',
    benefits: [
      'Reinforces brittle and breaking nails',
      'Infuses cuticle area with essential vitamins E & B',
      'Restores natural pink glow and smooth surface',
      'Non-chemical, gentle, and restorative'
    ],
    thaiBenefits: [
      'ช่วยเสริมความแข็งแรงให้กับเล็บที่หักหรือฉีกง่าย',
      'เติมสารอาหารและวิตามินอี บี ให้โคนเล็บ',
      'คืนความชมพูสุขภาพดีและผิวสัมผัสเรียบเนียน',
      'อ่อนโยน ปลอดสารเคมีรุนแรง'
    ],
    whatToExpect: [
      'Gentle removal of any residual polish without harsh scraping',
      'Nutrient oil bath and light cuticle maintenance',
      'Keratin-infused strengthening shield application',
      'Nourishing moisture wrap'
    ],
    thaiWhatToExpect: [
      'ทำความสะอาดหน้าเล็บอย่างอ่อนโยน',
      'แช่บำรุงด้วยน้ำมันวิตามินและดูแลหนังกำพร้า',
      'ลงเคลือบทรีตเมนต์เคราตินปกป้องหน้าเล็บ',
      'ประคบผ้าร้อนบำรุงความชุ่มชื้น'
    ],
    preparation: [
      'Let us know about any brittle nail history or allergies'
    ],
    thaiPreparation: [
      'แจ้งประวัติการแพ้หรือปัญหาเล็บเปราะบาง'
    ],
    image: 'https://images.pexels.com/photos/7755287/pexels-photo-7755287.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    featured: false,
  },
  {
    id: 'nail-styling',
    category: 'nails',
    title: 'Nail Styling & Art',
    thaiTitle: 'ดีไซน์และแต่งแต้มลวดลายเล็บ',
    subtitle: 'Subtle ombré, elegant French tips, chrome finishes, and refined nail art.',
    thaiSubtitle: 'ไล่เฉดสี ออมเบร เฟรนช์เนล คลาสสิก หรือลวดลายมินิมอลหรูหรา',
    shortDesc: 'Express your individuality with elegant nail art, modern minimalist accents, chrome sheens, or timeless French designs.',
    thaiShortDesc: 'แต่งแต้มความงามให้กับปลายนิ้วด้วยดีไซน์มินิมอล ลายหินอ่อน หรือสีกลิตเตอร์ประกายละเอียด',
    fullDesc: 'Elevate your manicure with bespoke nail artistry. Whether you love understated minimalist lines, soft champagne ombré, classic French tips, or delicate floral accents, our nail technicians work with steady hands and high quality pigments to create sophisticated art.',
    thaiFullDesc: 'สร้างสรรค์ศิลปะบนเรียวนิ้วในแบบที่คุณชื่นชอบ ตั้งแต่งานเพ้นท์มินิมอล ไล่โทนสีนู้ดละมุน ไปจนถึงดีไซน์หรูหราที่ประณีตงดงาม',
    duration: 'To be confirmed',
    thaiDuration: 'โปรดยืนยันกับทางร้าน',
    priceDisplay: 'Contact us',
    thaiPriceDisplay: 'ติดต่อสอบถามราคา',
    benefits: [
      'Customized nail designs suited to your style',
      'High quality, non-chipping pigments and gel coats',
      'Long-lasting glossy top coat protection',
      'Fine precision brushes and luxury details'
    ],
    thaiBenefits: [
      'ออกแบบลวดลายเฉพาะตัวตามสไตล์ที่ชอบ',
      'ใช้สีเจลคุณภาพพรีเมียม เงางามและติดทน',
      'ท็อปโค้ตเกรดพรีเมียมป้องกันรอยขีดข่วน',
      'ลายเส้นละเอียดอ่อนช้อย สวยงามทุกมุมมอง'
    ],
    whatToExpect: [
      'Design consultation and shade selection',
      'Base manicure prep and cuticle neatening',
      'Detailed hand-painted or accent application',
      'UV/LED curing and hydrating cuticle balm'
    ],
    thaiWhatToExpect: [
      'ปรึกษาและเลือกดีไซน์ร่วมกับช่างทำเล็บ',
      'เตรียมหน้าเล็บและตัดแต่งทรงอย่างประณีต',
      'วาดลวดลายหรือลงดีไซน์ทีละนิ้วอย่างพิถีพิถัน',
      'อบเคลือบเจลและบำรุงด้วยออยล์ออร์แกนิก'
    ],
    preparation: [
      'Bring reference images or browse our in-salon palette lookbook'
    ],
    thaiPreparation: [
      'สามารถนำรูปภาพตัวอย่างที่อยากได้มาให้ช่างดูได้'
    ],
    image: 'https://images.pexels.com/photos/7755653/pexels-photo-7755653.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    featured: false,
  },

  // Facial & Skincare
  {
    id: 'facial-treatments',
    category: 'facial',
    title: 'Facial Treatments',
    thaiTitle: 'ทรีตเมนต์ปรนนิบัติผิวหน้า',
    subtitle: 'Rejuvenating skin rituals designed to replenish moisture and restore natural glow.',
    thaiSubtitle: 'พิธีกรรมดูแลผิวเพื่อเติมความชุ่มชื้น คืนความเปล่งปลั่งและสุขภาพดี',
    shortDesc: 'A deeply relaxing facial treatment combining gentle cleansing, facial massage, hydrating masks, and skin barrier replenishment.',
    thaiShortDesc: 'ทรีตเมนต์บำรุงผิวหน้าผ่อนคลาย ทำความสะอาดล้ำลึก นวดกระตุ้นการไหลเวียน และมาสก์บำรุง',
    fullDesc: 'Escape Bangkok’s bustling pace with our signature facial treatments. Crafted to revitalize fatigued skin, this ritual combines aromatic cleansing, gentle exfoliation, lymph-stimulating facial massage, and customized masking to restore skin clarity, hydration, and an enviable lit-from-within glow.',
    thaiFullDesc: 'หลีกหนีความวุ่นวายมาผ่อนคลายกับทรีตเมนต์ผิวหน้าของ ดาริน บิวตี้ แอนด์ สปา ผสานการทำความสะอาดอย่างอ่อนโยน การนวดกระตุ้นการไหลเวียน และมาสก์บำรุงล้ำลึก เพื่อผิวที่สดชื่น กระจ่างใส และอิ่มน้ำ',
    duration: 'To be confirmed',
    thaiDuration: 'โปรดยืนยันกับทางร้าน',
    priceDisplay: 'Contact us',
    thaiPriceDisplay: 'ติดต่อสอบถามราคา',
    benefits: [
      'Removes daily impurities and environmental build-up',
      'Boosts skin hydration and elasticity',
      'Soothes facial tension with gentle lymphatic drainage',
      'Leaves skin glowing, soft, and refreshed'
    ],
    thaiBenefits: [
      'ชำระล้างสิ่งสกปรกและมลภาวะตกค้างบนใบหน้า',
      'เติมน้ำให้ผิวและเสริมความยืดหยุ่น',
      'ผ่อนคลายกล้ามเนื้อใบหน้าด้วยท่านวดนุ่มนวล',
      'เผยผิวกระจ่างใส นุ่มนวล เปล่งปลั่ง'
    ],
    whatToExpect: [
      'Double cleanse to melt away sunscreen and makeup',
      'Gentle enzyme or botanical exfoliation',
      'Face, neck, and décolleté soothing massage',
      'Targeted hydrating mask and barrier cream finish'
    ],
    thaiWhatToExpect: [
      'ทำความสะอาดผิวหน้าสองขั้นตอนเพื่อขจัดสิ่งตกค้าง',
      'ผลัดเซลล์ผิวเก่าอย่างอ่อนโยนด้วยเอนไซม์ธรรมชาติ',
      'นวดผ่อนคลายใบหน้า ลำคอ และเนินอก',
      'มาสก์เติมความชุ่มชื้นและลงครีมบำรุงปกป้องผิว'
    ],
    preparation: [
      'Avoid harsh retinoids or direct intense sun exposure 24 hours prior'
    ],
    thaiPreparation: [
      'หลีกเลี่ยงการใช้กรดผลัดเซลล์ผิวเข้มข้นก่อนเข้ารับบริการ 1 วัน'
    ],
    image: 'https://images.pexels.com/photos/5659049/pexels-photo-5659049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    featured: true,
  },
  {
    id: 'skin-care',
    category: 'facial',
    title: 'Skin Care & Brightening',
    thaiTitle: 'ดูแลผิวหน้ากระจ่างใสและฟื้นฟูผิว',
    subtitle: 'Targeted botanical infusions to smooth texture, even tone, and boost luminosity.',
    thaiSubtitle: 'สารสกัดจากพฤกษาธรรมชาติเพื่อปรับสีผิวให้สม่ำเสมอ เรียบเนียน กระจ่างใส',
    shortDesc: 'A delicate brightening skincare session utilizing antioxidant-rich serums, soothing rose mists, and nutrient-dense formulations.',
    thaiShortDesc: 'ฟื้นฟูผิวหน้าด้วยสารสกัดแอนตี้ออกซิแดนท์และน้ำกุหลาบบริสุทธิ์ เติมความสดชื่นให้ผิวแลดูมีชีวิตชีวา',
    fullDesc: 'Formulated to counteract the dulling effects of urban life and sunshine, our Skin Care ritual enriches your skin with concentrated botanicals and vitamins. The result is a visibly brighter, calmer, and more balanced complexion.',
    thaiFullDesc: 'ฟื้นบำรุงผิวที่หมองคล้ำจากแสงแดดและมลภาวะในเมืองหลวง ด้วยเซรั่มและวิตามินเข้มข้น มอบผลลัพธ์ผิวที่ดูกระจ่างใส สีผิวสม่ำเสมอ และดูสดใสอย่างเป็นธรรมชาติ',
    duration: 'To be confirmed',
    thaiDuration: 'โปรดยืนยันกับทางร้าน',
    priceDisplay: 'Contact us',
    thaiPriceDisplay: 'ติดต่อสอบถามราคา',
    benefits: [
      'Targeted care for uneven skin tone and dullness',
      'Infused with antioxidant-packed botanicals',
      'Deep soothing action for calm and comfortable skin',
      'Prepares skin for flawless makeup application'
    ],
    thaiBenefits: [
      'ดูแลปัญหาผิวหมองคล้ำและสีผิวไม่สม่ำเสมอ',
      'อุดมด้วยสารสกัดธรรมชาติเพื่อการบำรุงล้ำลึก',
      'ปลอบประโลมผิวให้รู้สึกสดชื่นและสบายผิว',
      'ช่วยให้ผิวพร้อมสำหรับการแต่งหน้าที่เรียบเนียนยิ่งขึ้น'
    ],
    whatToExpect: [
      'Gentle botanical face bath',
      'Antioxidant serum infusion using gentle patting motions',
      'Calming cooling globes or jade roller therapy',
      'Lightweight protective sun and moisture veil'
    ],
    thaiWhatToExpect: [
      'ทำความสะอาดผิวด้วยโฟมพฤกษาธรรมชาติ',
      'ผลักเซรั่มบำรุงด้วยเทคนิคนวดกดจุดแผ่วเบา',
      'ปรนนิบัติผิวด้วยความเย็นเพื่อกระชับรูขุมขน',
      'ปกป้องผิวด้วยมอยส์เจอไรเซอร์และครีมกันแดดเนื้อบางเบา'
    ],
    preparation: [
      'Arrive without heavy waterproof makeup if convenient'
    ],
    thaiPreparation: [
      'หากสะดวก สามารถมาโดยไม่แต่งหน้ากันน้ำแบบหนาแน่น'
    ],
    image: 'https://images.pexels.com/photos/5659018/pexels-photo-5659018.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    featured: false,
  },
  {
    id: 'beauty-treatments',
    category: 'facial',
    title: 'Beauty Treatments',
    thaiTitle: 'ทรีตเมนต์เสริมความงามเฉพาะจุด',
    subtitle: 'Nourishing eye contour, lip pampering, and targeted facial care.',
    thaiSubtitle: 'บำรุงรอบดวงตา ริมฝีปาก และการดูแลผิวเฉพาะจุดอย่างประณีต',
    shortDesc: 'Targeted beauty care focusing on delicate facial zones including soothing eye therapy, lip nourishment, and revitalizing neck masks.',
    thaiShortDesc: 'การดูแลเฉพาะจุดที่ต้องการความเอาใจใส่เป็นพิเศษ เช่น รอบดวงตาและริมฝีปาก',
    fullDesc: 'Sometimes your skin needs focused attention where fine lines and fatigue show first. Our Beauty Treatments combine targeted collagen-infused eye patches, gentle lip smoothing scrubs, and firming neck elixirs for complete beauty harmony.',
    thaiFullDesc: 'ดูแลส่วนที่บอบบางที่สุดของใบหน้า ทรีตเมนต์นี้ช่วยลดเลือนความอ่อนล้ารอบดวงตา บำรุงริมฝีปากให้เนียนนุ่ม และบำรุงผิวบริเวณลำคอให้ตึงกระชับ',
    duration: 'To be confirmed',
    thaiDuration: 'โปรดยืนยันกับทางร้าน',
    priceDisplay: 'Contact us',
    thaiPriceDisplay: 'ติดต่อสอบถามราคา',
    benefits: [
      'De-puffs and brightens tired under-eye circles',
      'Softens and hydrates dry, chapped lips',
      'Nourishes and smooths neck and jawline',
      'Quick add-on or standalone self-care treat'
    ],
    thaiBenefits: [
      'ลดอาการบวมและรอยคล้ำรอบดวงตา',
      'เติมความชุ่มชื้นให้ริมฝีปากนุ่มเนียน',
      'บำรุงผิวบริเวณลำคอและแนวกรามให้กระชับ',
      'เหมาะสำหรับการเสริมคู่กับทรีตเมนต์อื่นๆ'
    ],
    whatToExpect: [
      'Gentle eye and lip make-up cleanse',
      'Cooling hydrogel patch placement under eyes',
      'Gentle sugar lip polish and conditioning balm',
      'Delicate acupressure around brow bones and temples'
    ],
    thaiWhatToExpect: [
      'ทำความสะอาดรอบดวงตาและริมฝีปาก',
      'แปะไฮโดรเจลมาสก์สูตรเย็นบำรุงใต้ตา',
      'สครับริมฝีปากอย่างอ่อนโยนและลงบาล์มเข้มข้น',
      'กดจุดผ่อนคลายบริเวณขมับและหัวคิ้ว'
    ],
    preparation: [
      'Contact lenses can be removed if preferred for eye comfort'
    ],
    thaiPreparation: [
      'สามารถถอดคอนแทคเลนส์ออกได้หากต้องการความสบายตาสูงสุด'
    ],
    image: 'https://images.pexels.com/photos/8460604/pexels-photo-8460604.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    featured: false,
  },

  // Spa & Relaxation
  {
    id: 'relaxation-treatments',
    category: 'spa',
    title: 'Relaxation Treatments',
    thaiTitle: 'ทรีตเมนต์สปาเพื่อการผ่อนคลาย',
    subtitle: 'Serene body rituals infused with essential oils to melt away daily stress.',
    thaiSubtitle: 'ผ่อนคลายร่างกายและจิตใจด้วยน้ำมันหอมระเหยและสัมผัสอันนุ่มนวล',
    shortDesc: 'Immerse yourself in gentle aromatic body massage techniques designed to ease muscle tension, quiet the mind, and restore inner equilibrium.',
    thaiShortDesc: 'ทรีตเมนต์นวดผ่อนคลายด้วยน้ำมันอโรมา คลายความตึงเครียดของกล้ามเนื้อ และคืนความสงบสู่จิตใจ',
    fullDesc: 'Surrounded by soft lighting, soothing ambient sounds, and delicate natural aromas, our Relaxation Treatments provide a sanctuary from city life. Through fluid, rhythmic strokes and warming organic oils, physical fatigue dissolves while your body regains its natural state of peaceful calm.',
    thaiFullDesc: 'ท่ามกลางบรรยากาศเงียบสงบ แสงไฟอบอุ่น และกลิ่นหอมธรรมชาติ ทรีตเมนต์ผ่อนคลายของเราช่วยปลดปล่อยความตึงเครียดสะสม ให้คุณได้พักผ่อนอย่างเต็มที่ทั้งร่างกายและจิตวิญญาณ',
    duration: 'To be confirmed',
    thaiDuration: 'โปรดยืนยันกับทางร้าน',
    priceDisplay: 'Contact us',
    thaiPriceDisplay: 'ติดต่อสอบถามราคา',
    benefits: [
      'Reduces muscular tension and daily physical stress',
      'Promotes deeper, more restful sleep',
      'Nourishes and moisturizes skin with premium botanical oils',
      'Restores mental calm and serene presence'
    ],
    thaiBenefits: [
      'คลายความตึงเกร็งของกล้ามเนื้อและความเหนื่อยล้า',
      'ช่วยให้นอนหลับได้สนิทและลึกยิ่งขึ้น',
      'บำรุงผิวให้นุ่มชุ่มชื้นด้วยน้ำมันพฤกษาธรรมชาติ',
      'สร้างความสงบและคืนความสดชื่นสู่จิตใจ'
    ],
    whatToExpect: [
      'Welcome consultation and aromatherapy selection',
      'Private relaxing spa suite with comfortable bed and fresh linen',
      'Full body relaxing massage using medium-soft soothing strokes',
      'Warm herbal towel compress to finish'
    ],
    thaiWhatToExpect: [
      'เลือกกลิ่นน้ำมันอโรมาที่ตรงกับอารมณ์ความรู้สึก',
      'ห้องทรีตเมนต์ส่วนตัวที่เงียบสงบ สะอาด และอบอุ่น',
      'นวดผ่อนคลายร่างกายด้วยจังหวะที่นุ่มนวลพอเหมาะ',
      'ประคบด้วยผ้าอุ่นสมุนไพรปิดท้ายอย่างละมุนละไม'
    ],
    preparation: [
      'Avoid eating large meals within 1 hour before your treatment',
      'Notify therapist of any pressure preferences or sensitive areas'
    ],
    thaiPreparation: [
      'หลีกเลี่ยงการรับประทานอาหารมื้อหนักก่อนนวด 1 ชั่วโมง',
      'สามารถแจ้งระดับน้ำหนักการนวดที่ต้องการกับพนักงานได้ตลอดเวลา'
    ],
    image: 'https://images.pexels.com/photos/31234756/pexels-photo-31234756.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    featured: true,
  },
  {
    id: 'body-care',
    category: 'spa',
    title: 'Body Care & Exfoliation',
    thaiTitle: 'สครับผิวกายและบำรุงผิวพรรณ',
    subtitle: 'Silky smooth skin exfoliation, herbal body polish, and rich body wraps.',
    thaiSubtitle: 'ขัดเซลล์ผิวเก่าอย่างอ่อนโยน สครับสมุนไพร และพอกบำรุงผิวกาย',
    shortDesc: 'A lavish full-body polish that removes dead skin cells and infuses deep hydration, revealing silky, radiant, and luminous skin.',
    thaiShortDesc: 'ผลัดเซลล์ผิวเก่าที่หมองคล้ำทั่วเรือนร่าง เผยผิวใหม่ที่เนียนนุ่ม ชุ่มชื้น กระจ่างใส และน่าสัมผัส',
    fullDesc: 'Revitalize skin from shoulders to toes. Our Body Care ritual pairs gentle natural exfoliants—such as organic rice bran, sea salt, or gentle botanical grains—with hydrating body butters. Your skin emerges incredibly soft, smooth, and radiantly luminous.',
    thaiFullDesc: 'ฟื้นฟูผิวทั่วเรือนร่างด้วยสครับธรรมชาติสูตรอ่อนโยน ผสานการบำรุงด้วยบอดี้บัตเตอร์เข้มข้น ช่วยให้ผิวสัมผัสเนียนลื่น กระจ่างใส และเปล่งปลั่งอย่างเห็นได้ชัด',
    duration: 'To be confirmed',
    thaiDuration: 'โปรดยืนยันกับทางร้าน',
    priceDisplay: 'Contact us',
    thaiPriceDisplay: 'ติดต่อสอบถามราคา',
    benefits: [
      'Sloughs away dull, dry surface skin cells',
      'Promotes cellular renewal and glowing skin tone',
      'Deeply conditions with organic botanical oils',
      'Leaves skin silky to the touch with a subtle scent'
    ],
    thaiBenefits: [
      'ขจัดเซลล์ผิวที่แห้งกร้านและหมองคล้ำ',
      'กระตุ้นการผลัดเซลล์ผิวใหม่ให้ผิวสดใส',
      'บำรุงผิวล้ำลึกด้วยน้ำมันธรรมชาติ',
      'ผิวนุ่มละมุนและมีกลิ่นหอมอ่อนๆ ติดผิวยาวนาน'
    ],
    whatToExpect: [
      'Gentle warm-up towel cleanse',
      'Full body scrub application using gentle circular motions',
      'Warm rainfall shower or rinse',
      'Lush application of rich body cream to lock in moisture'
    ],
    thaiWhatToExpect: [
      'เช็ดทำความสะอาดผิวกายด้วยผ้าอุ่น',
      'ลงสครับขัดผิวทั่วเรือนร่างอย่างนุ่มนวล',
      'ล้างทำความสะอาดด้วยน้ำอุ่น',
      'ชโลมครีมบำรุงผิวกายสูตรเข้มข้นล็อกความชุ่มชื้น'
    ],
    preparation: [
      'Do not shave or wax on the morning of your treatment to prevent irritation'
    ],
    thaiPreparation: [
      'หลีกเลี่ยงการโกนหรือแว็กซ์ขนในเช้าวันที่เข้ารับบริการเพื่อลดการระคายเคือง'
    ],
    image: 'https://images.pexels.com/photos/9146378/pexels-photo-9146378.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    featured: false,
  },
  {
    id: 'wellness-treatments',
    category: 'spa',
    title: 'Wellness Treatments',
    thaiTitle: 'การดูแลสุขภาพแบบองค์รวม',
    subtitle: 'Holistic rituals to restore harmony, ease tension, and nurture personal well-being.',
    thaiSubtitle: 'พิธีกรรมฟื้นฟูสุขภาพองค์รวม บรรเทาความเมื่อยล้า และฟื้นคืนพลังชีวิต',
    shortDesc: 'A holistic wellness journey focusing on muscle relief, tension release, and deep energetic renewal in a serene Bangkok setting.',
    thaiShortDesc: 'ทรีตเมนต์ฟื้นฟูพลังกายและใจ คลายความเมื่อยล้าสะสมจากการทำงานและการเดินทาง',
    fullDesc: 'Crafted for modern individuals experiencing fatigue, stiffness, or mental overwhelm. Our Wellness Treatments combine therapeutic acupressure, soothing heat therapy, and mindful breathing practices to release tension blocks and leave you feeling completely recharged.',
    thaiFullDesc: 'ออกแบบมาเป็นพิเศษสำหรับคนเมืองที่มีความเมื่อยล้าสะสมจากการทำงานหรือการเดินทาง ด้วยการกดจุดคลายกล้ามเนื้อ ผสานการประคบอุ่น ช่วยฟื้นฟูพลังงานในร่างกายให้กลับมาสดชื่นเต็มเปี่ยม',
    duration: 'To be confirmed',
    thaiDuration: 'โปรดยืนยันกับทางร้าน',
    priceDisplay: 'Contact us',
    thaiPriceDisplay: 'ติดต่อสอบถามราคา',
    benefits: [
      'Relieves chronic stiffness in shoulders, upper back, and neck',
      'Improves circulation and general vitality',
      'Harmonizes body rhythms after hectic schedules',
      'Provides quiet time for mindfulness and reflection'
    ],
    thaiBenefits: [
      'คลายความตึงเกร็งบริเวณคอ บ่า ไหล่ และแผ่นหลัง',
      'กระตุ้นการไหลเวียนโลหิตและเพิ่มความกระปรี้กระเปร่า',
      'ปรับสมดุลร่างกายหลังจากการทำงานหนักหรือการเดินทาง',
      'ช่วยให้จิตใจสงบและมีสมาธิ'
    ],
    whatToExpect: [
      'Consultation on current physical tension points',
      'Targeted pressure-point massage on tension zones',
      'Herbal warmth pack applied to back and shoulders',
      'Gentle cool-down stretches and calming warm tea'
    ],
    thaiWhatToExpect: [
      'ปรึกษาจุดที่รู้สึกตึงหรือเมื่อยล้าเป็นพิเศษ',
      'นวดเน้นเฉพาะจุดด้วยแรงกดที่พอเหมาะ',
      'ประคบสมุนไพรอุ่นเพื่อผ่อนคลายกล้ามเนื้อ',
      'ยืดเหยียดผ่อนคลายกล้ามเนื้อและดื่มชาร้อนเพื่อสุขภาพ'
    ],
    preparation: [
      'Let the therapist know of any past injuries or areas needing special care'
    ],
    thaiPreparation: [
      'แจ้งประวัติการบาดเจ็บหรือจุดที่ต้องการให้ระวังเป็นพิเศษ'
    ],
    image: 'https://images.pexels.com/photos/3757657/pexels-photo-3757657.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    featured: true,
  },
];
