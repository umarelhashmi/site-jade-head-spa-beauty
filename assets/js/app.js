/* ==========================================================================
   JADE HEAD SPA & BEAUTY — KISSIMMEE, FL
   Interactive Application Logic:
   - Live Eastern Time Hours HUD (Mon–Sun 10:00 AM – 10:00 PM)
   - 6-Ritual Hero Pedestal Stage Switcher
   - Complete 30-Item Official Menu Vault (Exact Names & Prices)
   - Official Google Maps & jadespafl.com Gallery Filter
   - Service Detail Modal & Direct ByChronos Online Booking
   ========================================================================== */

const BOOKING_URL = 'https://go.bychronos.com/l/kissimmee-34746-jade-head-spa-beauty-806983/a/services';
const PHONE_HREF = 'tel:+14079893326';
const PHONE_DISPLAY = '(407) 989-3326';

/* --------------------------------------------------------------------------
   1. HERO PEDESTAL 6-RITUAL STAGE DATA (AI REDRAWN CUTOUT ELEMENTS)
   -------------------------------------------------------------------------- */
const HERO_RITUALS = [
  {
    id: 'hero-head-spa',
    shortLabel: 'Head Spa',
    badge: 'SIGNATURE · GOLDEN RING WATERFALL THERAPY',
    title: '60 Mins Head Spa',
    subtitle: 'Japanese Scalp Detox, Warm Golden Halo Waterfall & Neck Relief',
    price: '$120',
    duration: '1 hour',
    image: 'assets/images/ai/cutout-golden-halo-arch.png',
    menuItemId: 'srv-128489'
  },
  {
    id: 'hero-shiseido',
    shortLabel: 'Shiseido',
    badge: 'SPECIAL MENU · PRESTIGE SHISEIDO RITUAL',
    title: 'JAPANESE HEAD SPA WITH SHISEIDO PACKAGE',
    subtitle: '45-Min Head Spa + 45-Min Massage with Shiseido Scalp Care',
    price: '$199',
    duration: '1 hour 30 min',
    image: 'assets/images/ai/cutout-shiseido-ritual.png',
    menuItemId: 'srv-138178'
  },
  {
    id: 'hero-package',
    shortLabel: 'Packages',
    badge: 'HEAD SPA PACKAGE · HEAD + BODY',
    title: '60 Mins Head plus 30 Mins Massage',
    subtitle: 'Full 60-Min Waterfall Head Spa + 30-Min Therapeutic Body Massage',
    price: '$160',
    duration: '1 hour 30 min',
    image: 'assets/images/ai/cutout-head-massage-pkg.png',
    menuItemId: 'srv-128497'
  },
  {
    id: 'hero-facial',
    shortLabel: 'Facials',
    badge: 'FACIAL · GLASS-SKIN & GENTLEMAN’S CARE',
    title: '60 Mins Korean Facial',
    subtitle: 'Deep Pore Cleanse, Botanical Steam, Mask Brushes & Hydration',
    price: '$120',
    duration: '1 hour',
    image: 'assets/images/ai/cutout-korean-facial.png',
    menuItemId: 'srv-128491'
  },
  {
    id: 'hero-couples',
    shortLabel: 'Couples',
    badge: 'COUPLE HEAD SPA · SIDE-BY-SIDE SUITE',
    title: 'Couple 60 minutes head spa',
    subtitle: 'Private Side-by-Side Golden Ring Waterfall Ritual for Two Guests',
    price: '$240',
    duration: '1 hour • 2 services',
    image: 'assets/images/ai/cutout-couple-sanctuary.png',
    menuItemId: 'pkg-2222'
  },
  {
    id: 'hero-foot',
    shortLabel: 'Foot Spa',
    badge: 'FOOT MASSAGE · RECLINER LOUNGE',
    title: '60 Mins Foot Massage',
    subtitle: 'Warm Herbal Soak, Acupressure & Lower-Leg Reflexology',
    price: '$60',
    duration: '1 hour',
    image: 'assets/images/ai/cutout-foot-reflexology.png',
    menuItemId: 'srv-128492'
  }
];

/* --------------------------------------------------------------------------
   2. COMPLETE 30-ITEM OFFICIAL SERVICE MENU (EXACT WORDING & EXACT PRICES)
      Source: https://jadespafl.com/ & ByChronos API (Location ID 6983)
   -------------------------------------------------------------------------- */
const MENU_CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'Head Spa', label: 'Head Spa' },
  { id: 'Head Spa Package', label: 'Head Spa Package' },
  { id: 'Special Menu', label: 'Special Menu (Shiseido)' },
  { id: 'Couple Head Spa', label: 'Couple Head Spa' },
  { id: 'Facial', label: 'Facial' },
  { id: 'Massage', label: 'Massage' },
  { id: 'Couple Massage', label: 'Couple Massage' },
  { id: 'Foot Massage', label: 'Foot Massage' }
];

const OFFICIAL_MENU_ITEMS = [
  // ================= CATEGORY 1: Head Spa (3 items) =================
  {
    id: 'srv-128483',
    name: '30 Mins Head Spa',
    category: 'Head Spa',
    duration: '30 min',
    price: '$80',
    priceNum: 80,
    image: 'assets/images/gmaps/waterfall-basin-closeup.jpg',
    cutout: 'assets/images/ai/cutout-golden-halo-arch.png',
    isCutoutThumb: false,
    badge: 'Express Scalp Refresh',
    description: 'Express Japanese-inspired head spa featuring aromatic scalp cleansing, acupressure head massage, and soothing Golden Ring Waterfall therapy.'
  },
  {
    id: 'srv-128489',
    name: '60 Mins Head Spa',
    category: 'Head Spa',
    duration: '1 hour',
    price: '$120',
    priceNum: 120,
    image: 'assets/images/gmaps/waterfall-halo-hero.jpg',
    cutout: 'assets/images/ai/cutout-golden-halo-arch.png',
    isCutoutThumb: true,
    badge: 'Most Popular Head Spa',
    description: 'Our signature 60-minute Japanese Head Spa with deep follicle detox, rich foaming scalp massage, conditioning mist, Golden Ring Waterfall circulation, and neck & shoulder tension release.'
  },
  {
    id: 'srv-128499',
    name: '90 Mins Head Spa',
    category: 'Head Spa',
    duration: '1 hour 30 min',
    price: '$160',
    priceNum: 160,
    image: 'assets/images/gmaps/scalp-foam-massage.jpg',
    cutout: 'assets/images/ai/cutout-golden-halo-arch.png',
    isCutoutThumb: false,
    badge: 'Extended 90-Min Ritual',
    description: 'Extended 90-minute restorative head spa with multi-step botanical scalp therapy, warm oil meridian massage, extended Golden Ring Waterfall hydrotherapy, and upper-body relaxation.'
  },

  // ================= CATEGORY 2: Head Spa Package (5 items) =================
  {
    id: 'srv-128484',
    name: '30 Mins Head plus 30 Mins Massage',
    category: 'Head Spa Package',
    duration: '1 hour',
    price: '$120',
    priceNum: 120,
    image: 'assets/images/gmaps/aromatherapy-jade-suite.jpg',
    cutout: 'assets/images/ai/cutout-head-massage-pkg.png',
    isCutoutThumb: false,
    badge: 'Head + Body Combo',
    description: 'Balanced 60-minute combination pairing a 30-minute Golden Ring Waterfall Head Spa with a 30-minute targeted body massage.'
  },
  {
    id: 'srv-128495',
    name: '30 Mins Head plus 30 Mins Facial',
    category: 'Head Spa Package',
    duration: '1 hour',
    price: '$140',
    priceNum: 140,
    image: 'assets/images/gmaps/facial-mask-brushes.jpg',
    cutout: 'assets/images/ai/cutout-korean-facial.png',
    isCutoutThumb: false,
    badge: 'Scalp & Glow Combo',
    description: '60-minute beauty ritual combining a 30-minute Japanese Head Spa with a 30-minute hydrating facial cleanse and mask treatment.'
  },
  {
    id: 'srv-128497',
    name: '60 Mins Head plus 30 Mins Massage',
    category: 'Head Spa Package',
    duration: '1 hour 30 min',
    price: '$160',
    priceNum: 160,
    image: 'assets/images/ai/cutout-head-massage-pkg.png',
    cutout: 'assets/images/ai/cutout-head-massage-pkg.png',
    isCutoutThumb: true,
    badge: 'Guest Favorite Package',
    description: '90-minute head-to-shoulder renewal featuring our full 60-minute signature Head Spa followed by a 30-minute therapeutic body massage.'
  },
  {
    id: 'srv-128501',
    name: '60 Head plus 30 Facial',
    category: 'Head Spa Package',
    duration: '1 hour 30 min',
    price: '$180',
    priceNum: 180,
    image: 'assets/images/gmaps/korean-facial-treatment.jpg',
    cutout: 'assets/images/ai/cutout-korean-facial.png',
    isCutoutThumb: false,
    badge: '90-Min Beauty Package',
    description: '90-minute crown and complexion package combining a full 60-minute Golden Ring Waterfall Head Spa with a 30-minute radiant facial.'
  },
  {
    id: 'srv-128504',
    name: '60 Head plus 60 Massage',
    category: 'Head Spa Package',
    duration: '2 hours',
    price: '$200',
    priceNum: 200,
    image: 'assets/images/official/back-massage-official.jpg',
    cutout: 'assets/images/ai/cutout-head-massage-pkg.png',
    isCutoutThumb: false,
    badge: '2-Hour Total Immersion',
    description: 'Two full hours of uninterrupted tranquility: a 60-minute Japanese Head Spa paired with a 60-minute full-body massage.'
  },

  // ================= CATEGORY 3: Special Menu (Shiseido) (4 items) =================
  {
    id: 'srv-138178',
    name: 'JAPANESE HEAD SPA WITH SHISEIDO PACKAGE',
    category: 'Special Menu',
    duration: '1 hour 30 min',
    price: '$199',
    priceNum: 199,
    image: 'assets/images/ai/cutout-shiseido-ritual.png',
    cutout: 'assets/images/ai/cutout-shiseido-ritual.png',
    isCutoutThumb: true,
    badge: '45-Min Head Spa + 45-Min Massage',
    description: '45-Min Head Spa + 45-Min Massage powered by authentic Japanese Shiseido professional scalp and hair care formulations.'
  },
  {
    id: 'srv-138177',
    name: 'JAPANESE HEAD SPA WITH SHISEIDO PACKAGE',
    category: 'Special Menu',
    duration: '1 hour',
    price: '$159',
    priceNum: 159,
    image: 'assets/images/gmaps/waterfall-therapist-suite.jpg',
    cutout: 'assets/images/ai/cutout-shiseido-ritual.png',
    isCutoutThumb: false,
    badge: '30-Min Head Spa + 30-Min Massage',
    description: '30-Min Head Spa + 30-Min Massage featuring prestige Japanese Shiseido scalp purifying cleanser, nourishing treatment, and waterfall therapy.'
  },
  {
    id: 'srv-138175',
    name: 'JAPANESE HEAD SPA WITH SHISEIDO For Two',
    category: 'Special Menu',
    duration: '1 hour - 1 hour 30 min',
    price: 'from $318',
    priceNum: 318,
    image: 'assets/images/ai/cutout-couple-sanctuary.png',
    cutout: 'assets/images/ai/cutout-shiseido-ritual.png',
    isCutoutThumb: true,
    badge: '60 Mins ($318) · 90 Mins ($398)',
    description: 'Couples Japanese Head Spa for Two using luxury Shiseido scalp & hair care products. Available in 60 Mins ($318) or 90 Mins ($398).'
  },
  {
    id: 'srv-138174',
    name: 'JAPANESE HEAD SPA WITH SHISEIDO For One',
    category: 'Special Menu',
    duration: '1 hour - 1 hour 30 min',
    price: 'from $159',
    priceNum: 159,
    image: 'assets/images/official/golden-halo-official.jpg',
    cutout: 'assets/images/ai/cutout-shiseido-ritual.png',
    isCutoutThumb: false,
    badge: '60 Mins ($159) · 90 Mins ($199)',
    description: 'Individual Japanese Head Spa elevated with Shiseido professional scalp care. Available in 60 Mins ($159) or 90 Mins ($199).'
  },

  // ================= CATEGORY 4: Couple Head Spa (7 items) =================
  {
    id: 'pkg-2222',
    name: 'Couple 60 minutes head spa',
    category: 'Couple Head Spa',
    duration: '1 hour • 2 services',
    price: '$240',
    priceNum: 240,
    image: 'assets/images/ai/cutout-couple-sanctuary.png',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    isCutoutThumb: true,
    badge: 'For Two Guests · 60 Min',
    description: 'Includes Couple 60 minutes head spa 1st person ($120) + 2nd person ($120) side-by-side in our tranquil Golden Ring Waterfall suite.'
  },
  {
    id: 'pkg-2223',
    name: 'Couple 90 minutes head spa',
    category: 'Couple Head Spa',
    duration: '1 hour 30 min • 2 services',
    price: '$320',
    priceNum: 320,
    image: 'assets/images/gmaps/jade-towel-lily-arch.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    isCutoutThumb: false,
    badge: 'For Two Guests · 90 Min',
    description: 'Extended 90-minute side-by-side Japanese Head Spa package for two guests ($160 per person) with Golden Ring Waterfall hydrotherapy.'
  },
  {
    id: 'pkg-2224',
    name: 'Couple 60 minutes package 30 Mins head spa plus 30 Mins massage',
    category: 'Couple Head Spa',
    duration: '1 hour • 2 services',
    price: '$240',
    priceNum: 240,
    image: 'assets/images/gmaps/lily-candles-towels.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    isCutoutThumb: false,
    badge: 'Couples Head + Massage (60m)',
    description: '60-minute couples package for two guests: each person enjoys a 30-minute Head Spa plus a 30-minute body massage ($120 per guest).'
  },
  {
    id: 'pkg-2225',
    name: 'Couple 90 minutes package 30 Mins head spa plus 30 Mins massage',
    category: 'Couple Head Spa',
    duration: '50 min - 1 hr 30 min • 2 services',
    price: '$320',
    priceNum: 320,
    image: 'assets/images/gmaps/aromatherapy-oils-candles.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    isCutoutThumb: false,
    badge: 'Couples Extended Combo',
    description: 'Extended couples head spa and full-body massage retreat for two guests ($160 per person).'
  },
  {
    id: 'pkg-2226',
    name: 'Couple 60 minutes package 30 mins head spa plus 30 mins facial',
    category: 'Couple Head Spa',
    duration: '2 hours • 2 services',
    price: '$280',
    priceNum: 280,
    image: 'assets/images/gmaps/white-jade-towel-roses.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    isCutoutThumb: false,
    badge: 'Couples Head Spa + Facial',
    description: 'Couples beauty package for two guests: each guest receives a 30-minute Japanese Head Spa plus a 30-minute custom facial ($140 per guest).'
  },
  {
    id: 'pkg-2227',
    name: 'Couple 90 minutes package 60 Mins head spa plus 30 massage',
    category: 'Couple Head Spa',
    duration: '3 hours • 2 services',
    price: '$320',
    priceNum: 320,
    image: 'assets/images/gmaps/aromatherapy-jade-suite.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    isCutoutThumb: false,
    badge: '90-Min Per Guest · For Two',
    description: 'Each guest enjoys a full 60-minute Golden Ring Waterfall Head Spa plus a 30-minute relaxing massage ($160 per guest).'
  },
  {
    id: 'pkg-2228',
    name: 'Couple 90 minutes package 60 Mins head spa plus 30 facial',
    category: 'Couple Head Spa',
    duration: '3 hours • 2 services',
    price: '$360',
    priceNum: 360,
    image: 'assets/images/gmaps/facial-mask-brushes.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    isCutoutThumb: false,
    badge: 'Ultimate Couples Ritual',
    description: 'Our premier couples crown & glow package: each guest receives a 60-minute Japanese Head Spa plus a 30-minute Korean Facial ($180 per guest).'
  },

  // ================= CATEGORY 5: Facial (4 items) =================
  {
    id: 'srv-128485',
    name: '30 Mins Korean Facial',
    category: 'Facial',
    duration: '30 min',
    price: '$80',
    priceNum: 80,
    image: 'assets/images/gmaps/facial-mask-brushes.jpg',
    cutout: 'assets/images/ai/cutout-korean-facial.png',
    isCutoutThumb: false,
    badge: 'Express Glass-Skin Glow',
    description: '30-minute Korean skincare facial with botanical steam, gentle pore cleansing, twin-brush soothing mask application, and dewy hydration.'
  },
  {
    id: 'srv-128491',
    name: '60 Mins Korean Facial',
    category: 'Facial',
    duration: '1 hour',
    price: '$120',
    priceNum: 120,
    image: 'assets/images/ai/cutout-korean-facial.png',
    cutout: 'assets/images/ai/cutout-korean-facial.png',
    isCutoutThumb: true,
    badge: 'Signature Glass-Skin Facial',
    description: 'Full 60-minute Korean facial ritual featuring double cleansing under warm ozone steam, deep pore care, custom hydro-mask, and facial acupressure.'
  },
  {
    id: 'srv-128498',
    name: '30 Mins Gentlemans Facial',
    category: 'Facial',
    duration: '30 min',
    price: '$80',
    priceNum: 80,
    image: 'assets/images/gmaps/korean-facial-treatment.jpg',
    cutout: 'assets/images/ai/cutout-korean-facial.png',
    isCutoutThumb: false,
    badge: 'Men’s Express Skincare',
    description: 'Targeted 30-minute Gentleman’s Facial with warm towel steam, deep pore detox, razor-irritation relief, and lightweight hydration.'
  },
  {
    id: 'srv-128502',
    name: '60 Mins Gentlemans Facial',
    category: 'Facial',
    duration: '1 hour',
    price: '$120',
    priceNum: 120,
    image: 'assets/images/official/facial-brush-official.jpg',
    cutout: 'assets/images/ai/cutout-korean-facial.png',
    isCutoutThumb: false,
    badge: 'Men’s 60-Min Deep Cleanse',
    description: 'Complete 60-minute Gentleman’s Facial tailored for men’s skin with deep exfoliation, steam extraction, purifying mask, and face & neck massage.'
  },

  // ================= CATEGORY 6: Massage (3 items) =================
  {
    id: 'srv-128486',
    name: '30 Mins Massage',
    category: 'Massage',
    duration: '30 min',
    price: '$60',
    priceNum: 60,
    image: 'assets/images/official/head-massage-official.jpg',
    cutout: 'assets/images/ai/cutout-head-massage-pkg.png',
    isCutoutThumb: false,
    badge: 'Targeted Neck, Back & Shoulders',
    description: 'Focused 30-minute therapeutic massage targeting muscle knots in the neck, shoulders, and upper or lower back.'
  },
  {
    id: 'srv-128494',
    name: '60 Mins Massage',
    category: 'Massage',
    duration: '1 hour',
    price: '$80',
    priceNum: 80,
    image: 'assets/images/official/back-massage-official.jpg',
    cutout: 'assets/images/ai/cutout-head-massage-pkg.png',
    isCutoutThumb: false,
    badge: 'Classic Full-Body Massage',
    description: '60-minute full-body therapeutic massage blending warm aromatic oils and customized pressure to melt away stress and restore circulation.'
  },
  {
    id: 'srv-128496',
    name: '90 Mins Massage',
    category: 'Massage',
    duration: '1 hour 30 min',
    price: '$130',
    priceNum: 130,
    image: 'assets/images/gmaps/aromatherapy-oils-candles.jpg',
    cutout: 'assets/images/ai/cutout-head-massage-pkg.png',
    isCutoutThumb: false,
    badge: 'Extended Deep Recovery',
    description: '90-minute head-to-toe restorative massage with extra time dedicated to chronic tension zones, back, shoulders, hands, and feet.'
  },

  // ================= CATEGORY 7: Couple Massage (2 items) =================
  {
    id: 'pkg-2229',
    name: '60 Mins Couple Massage',
    category: 'Couple Massage',
    duration: '1 hour • 2 services',
    price: '$160',
    priceNum: 160,
    image: 'assets/images/gmaps/lily-candles-towels.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    isCutoutThumb: false,
    badge: 'For Two Guests · $80/Person',
    description: 'Includes 60 Mins Couple Massage 1st Person ($80) + 2nd Person ($80) in a candlelit private suite.'
  },
  {
    id: 'pkg-2230',
    name: '90 Mins Couple Massage',
    category: 'Couple Massage',
    duration: '1 hour 30 min • 2 services',
    price: '$260',
    priceNum: 260,
    image: 'assets/images/ai/cutout-couple-sanctuary.png',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    isCutoutThumb: true,
    badge: 'For Two Guests · $130/Person',
    description: 'Includes 90 Mins Couple Massage 1st Person ($130) + 2nd Person ($130) for deep, unhurried full-body relaxation together.'
  },

  // ================= CATEGORY 8: Foot Massage (2 items) =================
  {
    id: 'srv-128487',
    name: '30 Mins Foot Massage',
    category: 'Foot Massage',
    duration: '30 min',
    price: '$40',
    priceNum: 40,
    image: 'assets/images/gmaps/foot-reflexology-lounge.jpg',
    cutout: 'assets/images/ai/cutout-foot-reflexology.png',
    isCutoutThumb: false,
    badge: 'Express Foot Relief',
    description: '30-minute foot reflexology session in our plush leather recliner lounge—ideal after theme-park walking or long travel days.'
  },
  {
    id: 'srv-128492',
    name: '60 Mins Foot Massage',
    category: 'Foot Massage',
    duration: '1 hour',
    price: '$60',
    priceNum: 60,
    image: 'assets/images/ai/cutout-foot-reflexology.png',
    cutout: 'assets/images/ai/cutout-foot-reflexology.png',
    isCutoutThumb: true,
    badge: 'Full 60-Min Foot Reflexology',
    description: '60-minute traditional foot and lower-leg reflexology massage targeting meridian pressure points to revive tired feet and legs.'
  }
];

/* --------------------------------------------------------------------------
   3. OFFICIAL PHOTO GALLERY DATA (GOOGLE MAPS + JADESPAFL.COM)
   -------------------------------------------------------------------------- */
const GALLERY_PHOTOS = [
  {
    src: 'assets/images/gmaps/waterfall-halo-hero.jpg',
    category: 'head-spa',
    tag: 'Golden Ring Waterfall',
    title: 'Signature Golden Halo Head Spa Bed'
  },
  {
    src: 'assets/images/gmaps/scalp-foam-massage.jpg',
    category: 'head-spa',
    tag: 'Japanese Scalp Detox',
    title: 'Rich Foaming Scalp Acupressure'
  },
  {
    src: 'assets/images/gmaps/waterfall-therapist-suite.jpg',
    category: 'head-spa',
    tag: 'Private Treatment Suite',
    title: 'Candlelit Waterfall Hydrotherapy'
  },
  {
    src: 'assets/images/gmaps/waterfall-basin-closeup.jpg',
    category: 'head-spa',
    tag: 'Hydro-Halo Basin',
    title: '360° Golden Ring Water Stream'
  },
  {
    src: 'assets/images/gmaps/korean-facial-treatment.jpg',
    category: 'facial',
    tag: 'Korean Facial Care',
    title: 'Ozone Steam & Magnifying Lamp Analysis'
  },
  {
    src: 'assets/images/gmaps/facial-mask-brushes.jpg',
    category: 'facial',
    tag: 'Custom Hydro-Mask',
    title: 'Twin Fan-Brush Facial Application'
  },
  {
    src: 'assets/images/gmaps/white-jade-towel-roses.jpg',
    category: 'facial',
    tag: 'Branded Spa Linens',
    title: 'Embroidered Jade Towels & Fresh Roses'
  },
  {
    src: 'assets/images/gmaps/foot-reflexology-lounge.jpg',
    category: 'lounge',
    tag: 'Foot Massage Lounge',
    title: 'Plush Leather Reflexology Recliners'
  },
  {
    src: 'assets/images/gmaps/aromatherapy-jade-suite.jpg',
    category: 'lounge',
    tag: 'Aromatherapy Suite',
    title: 'Fresh Stargazer Lilies & Essential Oils'
  },
  {
    src: 'assets/images/gmaps/jade-towel-lily-arch.jpg',
    category: 'head-spa',
    tag: 'Sanctuary Preparation',
    title: 'Embroidered Sage Linen & Golden Arch'
  },
  {
    src: 'assets/images/gmaps/guest-tablet-consultation.jpg',
    category: 'reception',
    tag: 'Guest Reception',
    title: 'Personalized Service Consultation'
  },
  {
    src: 'assets/images/gmaps/jade-cabbage-sculpture.jpg',
    category: 'reception',
    tag: 'Imperial Jade Crest',
    title: 'Carved Nephrite Jade Centerpiece'
  }
];

/* --------------------------------------------------------------------------
   4. LIVE KISSIMMEE HOURS HUD (10:00 AM – 10:00 PM DAILY, ET)
   -------------------------------------------------------------------------- */
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function initLiveHoursHud() {
  const now = new Date();
  const etString = now.toLocaleString('en-US', { timeZone: 'America/New_York' });
  const etDate = new Date(etString);
  const dayIndex = etDate.getDay();
  const hour = etDate.getHours();
  const minute = etDate.getMinutes();
  const currentMins = hour * 60 + minute;

  // Open daily 10:00 AM (600) to 10:00 PM (1320)
  const openMins = 10 * 60;
  const closeMins = 22 * 60;
  const isOpen = currentMins >= openMins && currentMins < closeMins;

  const dotEl = document.getElementById('hoursStatusDot');
  const textEl = document.getElementById('hoursStatusText');
  if (dotEl && textEl) {
    dotEl.classList.toggle('closed', !isOpen);
    textEl.textContent = isOpen
      ? 'Open Now · Daily 10:00 AM – 10:00 PM'
      : 'Opens Daily at 10:00 AM · (10 AM – 10 PM)';
  }

  const renderHoursList = (ulId) => {
    const ul = document.getElementById(ulId);
    if (!ul) return;
    ul.innerHTML = DAYS.map((dayName, idx) => {
      const isToday = idx === dayIndex;
      return `<li class="${isToday ? 'today' : ''}">
        <span>${dayName}${isToday ? ' (Today)' : ''}</span>
        <span>10:00 AM – 10:00 PM</span>
      </li>`;
    }).join('');
  };

  renderHoursList('hoursHudList');
  renderHoursList('locationHoursList');

  const trigger = document.getElementById('hoursHudTrigger');
  const popover = document.getElementById('hoursHudPopover');
  const closeBtn = document.getElementById('hoursHudClose');

  if (trigger && popover) {
    trigger.addEventListener('click', () => {
      const isHidden = !popover.classList.contains('open');
      popover.classList.toggle('open', isHidden);
      popover.setAttribute('aria-hidden', String(!isHidden));
    });
  }
  if (closeBtn && popover) {
    closeBtn.addEventListener('click', () => {
      popover.classList.remove('open');
      popover.setAttribute('aria-hidden', 'true');
    });
  }
}

/* --------------------------------------------------------------------------
   5. HERO PEDESTAL STAGE SWITCHER
   -------------------------------------------------------------------------- */
let activeHeroIndex = 0;

function renderHeroStage(index) {
  activeHeroIndex = index;
  const item = HERO_RITUALS[index];
  if (!item) return;

  const badgeEl = document.getElementById('heroRitualBadge');
  const imgEl = document.getElementById('heroCutoutImg');
  const titleEl = document.getElementById('heroRitualTitle');
  const subEl = document.getElementById('heroRitualSub');
  const priceEl = document.getElementById('heroRitualPrice');
  const captionBar = document.getElementById('heroCaptionBar');

  if (imgEl) {
    imgEl.style.opacity = '0.25';
    imgEl.style.transform = 'scale(0.95)';
    setTimeout(() => {
      imgEl.src = item.image;
      imgEl.alt = item.title;
      imgEl.style.opacity = '1';
      imgEl.style.transform = 'scale(1)';
    }, 110);
  }
  if (badgeEl) badgeEl.textContent = item.badge;
  if (titleEl) titleEl.textContent = item.title;
  if (subEl) subEl.textContent = `${item.duration} · ${item.subtitle}`;
  if (priceEl) priceEl.textContent = item.price;
  if (captionBar) {
    captionBar.onclick = () => openServiceModal(item.menuItemId);
  }

  document.querySelectorAll('.hero-switch-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === index);
  });
}

function initHeroSwitcher() {
  const container = document.getElementById('heroQuickSwitcher');
  if (!container) return;

  container.innerHTML = HERO_RITUALS.map((r, idx) => `
    <button type="button" class="hero-switch-btn ${idx === 0 ? 'active' : ''}" data-idx="${idx}" aria-label="Preview ${r.title}">
      <img src="${r.image}" alt="${r.shortLabel}" width="38" height="38" />
      <span>${r.shortLabel}</span>
    </button>
  `).join('');

  container.querySelectorAll('.hero-switch-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.getAttribute('data-idx'));
      renderHeroStage(idx);
    });
  });

  const captionBar = document.getElementById('heroCaptionBar');
  if (captionBar) {
    captionBar.style.cursor = 'pointer';
    captionBar.onclick = () => openServiceModal(HERO_RITUALS[0].menuItemId);
  }
}

/* --------------------------------------------------------------------------
   6. SIGNATURE RITUALS 6-CARD SHOWCASE (AI CUTOUTS + EXACT PRICES)
   -------------------------------------------------------------------------- */
function renderSignatureRituals() {
  const grid = document.getElementById('signatureGrid');
  if (!grid) return;

  const featuredIds = [
    'srv-128489', // 60 Mins Head Spa ($120)
    'srv-138178', // JAPANESE HEAD SPA WITH SHISEIDO PACKAGE ($199)
    'srv-128497', // 60 Mins Head plus 30 Mins Massage ($160)
    'srv-128491', // 60 Mins Korean Facial ($120)
    'pkg-2222',   // Couple 60 minutes head spa ($240)
    'srv-128492'  // 60 Mins Foot Massage ($60)
  ];

  grid.innerHTML = featuredIds.map((id) => {
    const item = OFFICIAL_MENU_ITEMS.find((m) => m.id === id);
    if (!item) return '';
    return `
      <article class="sig-card" data-service-id="${item.id}" role="button" tabindex="0" aria-label="${item.name} ${item.price}">
        <div class="sig-card-top">
          <span class="sig-category-tag">${item.category}</span>
          <span class="sig-duration-tag">${item.duration}</span>
        </div>
        <div class="sig-visual-box">
          <img src="${item.cutout}" alt="${item.name}" width="200" height="165" loading="lazy" />
        </div>
        <h3 class="sig-title">${item.name}</h3>
        <p class="sig-desc">${item.description}</p>
        <div class="sig-footer">
          <span class="sig-price">${item.price}</span>
          <span class="sig-cta-text">Inspect &amp; Book →</span>
        </div>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('.sig-card').forEach((card) => {
    card.addEventListener('click', () => {
      openServiceModal(card.getAttribute('data-service-id'));
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openServiceModal(card.getAttribute('data-service-id'));
      }
    });
  });
}

/* --------------------------------------------------------------------------
   7. COMPLETE 30-ITEM OFFICIAL MENU VAULT (SEARCH + CATEGORY TABS)
   -------------------------------------------------------------------------- */
let activeCategory = 'all';
let searchQuery = '';

function renderCategoryTabs() {
  const tabsEl = document.getElementById('menuCategoryTabs');
  if (!tabsEl) return;

  tabsEl.innerHTML = MENU_CATEGORIES.map((cat) => {
    const count = cat.id === 'all'
      ? OFFICIAL_MENU_ITEMS.length
      : OFFICIAL_MENU_ITEMS.filter((i) => i.category === cat.id).length;

    return `
      <button
        type="button"
        role="tab"
        aria-selected="${activeCategory === cat.id}"
        class="cat-tab ${activeCategory === cat.id ? 'active' : ''}"
        data-cat="${cat.id}"
      >
        <span>${cat.label}</span>
        <span class="count-badge">${count}</span>
      </button>
    `;
  }).join('');

  tabsEl.querySelectorAll('.cat-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCategory = btn.getAttribute('data-cat') || 'all';
      renderCategoryTabs();
      renderMenuGrid();
    });
  });
}

function renderMenuGrid() {
  const gridEl = document.getElementById('fullMenuGrid');
  if (!gridEl) return;

  const q = searchQuery.trim().toLowerCase();
  const filtered = OFFICIAL_MENU_ITEMS.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesQuery = !q ||
      item.name.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.badge.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    gridEl.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem 1rem; background: #fff; border-radius: 16px; border: 1px solid rgba(67,87,73,0.16);">
        <p style="font-family: var(--font-display); font-size: 1.35rem; color: var(--jade-deep); margin-bottom: 0.5rem;">
          No services match "${searchQuery}"
        </p>
        <button type="button" class="btn btn-jade" id="resetMenuFilterBtn">Show All 30 Official Services</button>
      </div>
    `;
    const resetBtn = document.getElementById('resetMenuFilterBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        activeCategory = 'all';
        searchQuery = '';
        const input = document.getElementById('menuSearchInput');
        if (input) input.value = '';
        renderCategoryTabs();
        renderMenuGrid();
      });
    }
    return;
  }

  gridEl.innerHTML = filtered.map((item) => `
    <article class="menu-item-card" data-service-id="${item.id}" role="button" tabindex="0" aria-label="${item.name} ${item.price}">
      <div class="menu-item-thumb">
        <img
          src="${item.image}"
          alt="${item.name}"
          class="${item.isCutoutThumb ? 'cutout-thumb' : ''}"
          width="84"
          height="84"
          loading="lazy"
        />
      </div>
      <div class="menu-item-body">
        <div class="menu-item-top">
          <h3 class="menu-item-name">${item.name}</h3>
          <span class="menu-item-price">${item.price}</span>
        </div>
        <div class="menu-item-meta">
          <span>${item.category}</span>
          <span>•</span>
          <span>${item.duration}</span>
          <span>•</span>
          <span>${item.badge}</span>
        </div>
        <p class="menu-item-desc">${item.description}</p>
      </div>
    </article>
  `).join('');

  gridEl.querySelectorAll('.menu-item-card').forEach((card) => {
    card.addEventListener('click', () => {
      openServiceModal(card.getAttribute('data-service-id'));
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openServiceModal(card.getAttribute('data-service-id'));
      }
    });
  });
}

function initMenuControls() {
  renderCategoryTabs();
  renderMenuGrid();

  const searchInput = document.getElementById('menuSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value || '';
      renderMenuGrid();
    });
  }

  // Wire quick-category links in footer/subnav if clicked
  document.querySelectorAll('[data-jump-category]').forEach((el) => {
    el.addEventListener('click', () => {
      const cat = el.getAttribute('data-jump-category');
      if (cat) {
        activeCategory = cat;
        renderCategoryTabs();
        renderMenuGrid();
      }
    });
  });
}

/* --------------------------------------------------------------------------
   8. OFFICIAL GALLERY FILTER
   -------------------------------------------------------------------------- */
let activeGalleryFilter = 'all';

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  const list = activeGalleryFilter === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeGalleryFilter);

  grid.innerHTML = list.map((photo) => `
    <figure class="gallery-card">
      <img src="${photo.src}" alt="${photo.title} at Jade Head Spa & Beauty" width="400" height="300" loading="lazy" />
      <figcaption class="gallery-caption">
        <span>${photo.tag}</span>
        <strong>${photo.title}</strong>
      </figcaption>
    </figure>
  `).join('');
}

function initGallery() {
  renderGallery();
  document.querySelectorAll('[data-gallery-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeGalleryFilter = btn.getAttribute('data-gallery-filter') || 'all';
      document.querySelectorAll('[data-gallery-filter]').forEach((b) => {
        b.classList.toggle('active', b === btn);
      });
      renderGallery();
    });
  });
}

/* --------------------------------------------------------------------------
   9. SERVICE DETAIL MODAL
   -------------------------------------------------------------------------- */
function openServiceModal(serviceId) {
  const item = OFFICIAL_MENU_ITEMS.find((m) => m.id === serviceId);
  const backdrop = document.getElementById('serviceModalBackdrop');
  const content = document.getElementById('serviceModalContent');
  if (!item || !backdrop || !content) return;

  content.innerHTML = `
    <div class="modal-hero-img">
      <img
        src="${item.cutout || item.image}"
        alt="${item.name}"
        class="${item.cutout ? 'cutout-modal' : ''}"
      />
    </div>
    <div class="modal-body">
      <div style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem; margin-bottom:0.45rem;">
        <span class="eyebrow" style="margin-bottom:0;">${item.category} · ${item.badge}</span>
        <span style="font-size:0.8rem; font-weight:700; color:var(--text-muted);">${item.duration}</span>
      </div>
      <h3 style="font-family:var(--font-display); font-size:1.65rem; font-weight:700; color:var(--jade-deep); line-height:1.15; margin-bottom:0.5rem;">
        ${item.name}
      </h3>
      <div style="font-family:var(--font-display); font-size:1.75rem; font-weight:700; color:var(--gold-deep); margin-bottom:0.85rem;">
        ${item.price}
      </div>
      <p style="font-size:0.9rem; color:var(--text-body); line-height:1.6; margin-bottom:1.25rem;">
        ${item.description}
      </p>
      <div style="display:flex; flex-wrap:wrap; gap:0.65rem;">
        <a href="${BOOKING_URL}" target="_blank" rel="noopener" class="btn btn-gold" style="flex:1.2;">
          Book Online Now →
        </a>
        <a href="${PHONE_HREF}" class="btn btn-jade" style="flex:1;">
          Call ${PHONE_DISPLAY}
        </a>
      </div>
    </div>
  `;

  backdrop.classList.add('open');
  backdrop.setAttribute('aria-hidden', 'false');
}

function initModal() {
  const backdrop = document.getElementById('serviceModalBackdrop');
  const closeBtn = document.getElementById('serviceModalClose');
  if (!backdrop) return;

  const closeModal = () => {
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   10. HEADER SCROLL STATE & BOOTSTRAP
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initLiveHoursHud();
  initHeroSwitcher();
  renderSignatureRituals();
  initMenuControls();
  initGallery();
  initModal();

  const header = document.getElementById('siteHeader');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 24);
    }, { passive: true });
  }
});
