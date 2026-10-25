const BYCHRONOS_BOOKING_URL = 'https://go.bychronos.com/l/kissimmee-34746-jade-head-spa-beauty-806983/a/services';

const STAGE_SIGNATURES = [
  {
    serviceId: 'srv-128489',
    plateCode: 'PLATE I',
    title: '60 Mins Head Spa',
    sub: '1 hour · Deep Follicle Cleanse, Foaming Scalp Acupressure & 360° Golden Ring Waterfall',
    price: '$120',
    duration: '1 hour',
    photo: 'assets/images/gmaps/waterfall-therapist-suite.jpg',
    photoAlt: 'Specialist performing the 60 Mins Head Spa with Golden Ring Waterfall arch at Jade Head Spa & Beauty',
    cutout: 'assets/images/ai/cutout-golden-halo-arch.png',
    cutoutLabel: 'Golden Ring Hydro-Arch',
    patchTone: 'patch-silk'
  },
  {
    serviceId: 'srv-138178',
    plateCode: 'PLATE II',
    title: 'Japanese Head Spa with Shiseido Package',
    sub: '1 hour 30 min · 45-Min Head Spa + 45-Min Massage with Authentic Shiseido Scalp Care',
    price: '$199',
    duration: '1 hour 30 min',
    photo: 'assets/images/gmaps/scalp-foam-massage.jpg',
    photoAlt: 'Foaming Shiseido scalp acupressure ritual at Jade Head Spa & Beauty in Kissimmee',
    cutout: 'assets/images/ai/cutout-shiseido-ritual.png',
    cutoutLabel: 'Shiseido Tokyo Formulary',
    patchTone: 'patch-blush'
  },
  {
    serviceId: 'srv-128497',
    plateCode: 'PLATE III',
    title: '60 Mins Head plus 30 Mins Massage',
    sub: '1 hour 30 min · Full 60-Minute Golden Ring Head Spa Paired with 30-Minute Body Massage',
    price: '$160',
    duration: '1 hour 30 min',
    photo: 'assets/images/curated/female-therapist-oil-massage.jpg',
    photoAlt: 'Warm botanical oil back massage paired with Golden Ring Head Spa',
    cutout: 'assets/images/ai/cutout-head-massage-pkg.png',
    cutoutLabel: 'Crown & Body Package',
    patchTone: 'patch-celadon'
  },
  {
    serviceId: 'srv-128491',
    plateCode: 'PLATE IV',
    title: '60 Mins Korean Facial',
    sub: '1 hour · Double Cleanse, Warm Ozone Steam, Twin-Brush Mask & Lymphatic Acupressure',
    price: '$120',
    duration: '1 hour',
    photo: 'assets/images/gmaps/korean-facial-treatment.jpg',
    photoAlt: 'Esthetician performing a 60 Mins Korean Facial with warm ozone steam',
    cutout: 'assets/images/ai/cutout-korean-facial.png',
    cutoutLabel: 'Korean Skincare Studio',
    patchTone: 'patch-blush'
  },
  {
    serviceId: 'pkg-2222',
    plateCode: 'PLATE V',
    title: 'Couple 60 Minutes Head Spa',
    sub: '1 hour • 2 services · Side-by-Side Golden Ring Waterfall Suite for Two Guests ($120/person)',
    price: '$240',
    duration: '1 hour • 2 services',
    photo: 'assets/images/gmaps/white-jade-towel-roses.jpg',
    photoAlt: 'Private couples suite prepared with embroidered Jade towels and fresh pink roses',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    cutoutLabel: 'Side-by-Side Couples Suite',
    patchTone: 'patch-silk'
  },
  {
    serviceId: 'srv-128492',
    plateCode: 'PLATE VI',
    title: '60 Mins Foot Massage',
    sub: '1 hour · Warm Herbal Soak & Meridian Foot and Lower-Leg Reflexology in Leather Recliners',
    price: '$60',
    duration: '1 hour',
    photo: 'assets/images/gmaps/foot-reflexology-lounge.jpg',
    photoAlt: 'Foot reflexology treatment in the plush leather recliner lounge',
    cutout: 'assets/images/ai/cutout-foot-reflexology.png',
    cutoutLabel: 'Reflexology Recliner Lounge',
    patchTone: 'patch-celadon'
  }
];

const OFFICIAL_CATEGORIES = [
  { id: 'all', label: 'All Official Services' },
  { id: 'Head Spa', label: 'Head Spa' },
  { id: 'Head Spa Package', label: 'Head Spa Package' },
  { id: 'Special Menu', label: 'Special Menu · Shiseido' },
  { id: 'Couple Head Spa', label: 'Couple Head Spa' },
  { id: 'Facial', label: 'Facial' },
  { id: 'Massage', label: 'Massage' },
  { id: 'Couple Massage', label: 'Couple Massage' },
  { id: 'Foot Massage', label: 'Foot Massage' }
];

const OFFICIAL_SERVICES = [
  /* 1. Head Spa (3) */
  {
    id: 'srv-128483',
    name: '30 Mins Head Spa',
    category: 'Head Spa',
    duration: '30 min',
    price: '$80',
    isCouples: false,
    photo: 'assets/images/gmaps/waterfall-basin-closeup.jpg',
    cutout: 'assets/images/ai/cutout-golden-halo-arch.png',
    useCutoutThumb: false,
    description: 'Express Japanese-inspired head spa featuring aromatic scalp cleansing, acupressure head massage, and soothing Golden Ring Waterfall therapy.',
    highlights: [
      'Aromatic botanical scalp cleanse and gentle exfoliation',
      'Cranial meridian and temple acupressure relief',
      'Warm 360° Golden Ring Waterfall hydrotherapy rinse',
      'Warm towel wrap and quick hair refresh'
    ]
  },
  {
    id: 'srv-128489',
    name: '60 Mins Head Spa',
    category: 'Head Spa',
    duration: '1 hour',
    price: '$120',
    isCouples: false,
    photo: 'assets/images/gmaps/waterfall-halo-hero.jpg',
    cutout: 'assets/images/ai/cutout-golden-halo-arch.png',
    useCutoutThumb: true,
    description: 'Our signature 60-minute Japanese Head Spa with deep follicle detox, rich foaming scalp massage, conditioning mist, Golden Ring Waterfall circulation, and neck and shoulder tension release.',
    highlights: [
      'Deep follicle purifying cleanse and rich botanical lather',
      'Extended cranial, temple, and sub-occipital acupressure',
      '360° warm Golden Ring Waterfall halo immersion and steam',
      'Conditioning treatment plus neck and shoulder massage'
    ]
  },
  {
    id: 'srv-128499',
    name: '90 Mins Head Spa',
    category: 'Head Spa',
    duration: '1 hour 30 min',
    price: '$160',
    isCouples: false,
    photo: 'assets/images/gmaps/scalp-foam-massage.jpg',
    cutout: 'assets/images/ai/cutout-golden-halo-arch.png',
    useCutoutThumb: false,
    description: 'Extended 90-minute restorative head spa with multi-step botanical scalp therapy, warm oil meridian massage, extended Golden Ring Waterfall hydrotherapy, and upper-body relaxation.',
    highlights: [
      'Multi-stage scalp detox, foaming massage, and herbal steam',
      'Extended 360° Golden Ring Waterfall hydro-halo immersion',
      'Nourishing hair mask and upper-back, neck, and arm massage',
      'Unhurried 90-minute suite session with warm towel service'
    ]
  },

  /* 2. Head Spa Package (5) */
  {
    id: 'srv-128484',
    name: '30 Mins Head plus 30 Mins Massage',
    category: 'Head Spa Package',
    duration: '1 hour',
    price: '$120',
    isCouples: false,
    photo: 'assets/images/gmaps/aromatherapy-jade-suite.jpg',
    cutout: 'assets/images/ai/cutout-head-massage-pkg.png',
    useCutoutThumb: false,
    description: 'Balanced 60-minute combination pairing a 30-minute Golden Ring Waterfall Head Spa with a 30-minute targeted body massage.',
    highlights: [
      '30-minute Japanese Head Spa with Golden Ring Waterfall rinse',
      '30-minute therapeutic neck, shoulder, and back massage',
      'Warm aromatic oils and steamed towel finish',
      'Ideal one-hour crown and upper-body reset'
    ]
  },
  {
    id: 'srv-128495',
    name: '30 Mins Head plus 30 Mins Facial',
    category: 'Head Spa Package',
    duration: '1 hour',
    price: '$140',
    isCouples: false,
    photo: 'assets/images/gmaps/facial-mask-brushes.jpg',
    cutout: 'assets/images/ai/cutout-korean-facial.png',
    useCutoutThumb: false,
    description: '60-minute beauty ritual combining a 30-minute Japanese Head Spa with a 30-minute hydrating facial cleanse and mask treatment.',
    highlights: [
      '30-minute Golden Ring Waterfall Head Spa and scalp massage',
      '30-minute express facial cleanse, steam, and twin-brush mask',
      'Facial and cranial acupressure for lifted circulation',
      'Botanical hydration finish'
    ]
  },
  {
    id: 'srv-128497',
    name: '60 Mins Head plus 30 Mins Massage',
    category: 'Head Spa Package',
    duration: '1 hour 30 min',
    price: '$160',
    isCouples: false,
    photo: 'assets/images/curated/female-therapist-oil-massage.jpg',
    cutout: 'assets/images/ai/cutout-head-massage-pkg.png',
    useCutoutThumb: true,
    description: '90-minute head-to-shoulder renewal featuring our full 60-minute signature Head Spa followed by a 30-minute therapeutic body massage.',
    highlights: [
      'Full 60-minute signature Golden Ring Waterfall Head Spa',
      '30-minute customized body massage with warm aromatic oil',
      'Deep cranial, neck, shoulder, and back tension release',
      '90 minutes of continuous restorative care'
    ]
  },
  {
    id: 'srv-128501',
    name: '60 Head plus 30 Facial',
    category: 'Head Spa Package',
    duration: '1 hour 30 min',
    price: '$180',
    isCouples: false,
    photo: 'assets/images/gmaps/korean-facial-treatment.jpg',
    cutout: 'assets/images/ai/cutout-korean-facial.png',
    useCutoutThumb: false,
    description: '90-minute crown and complexion package combining a full 60-minute Golden Ring Waterfall Head Spa with a 30-minute radiant facial.',
    highlights: [
      'Full 60-minute Japanese Head Spa with Golden Ring Waterfall',
      '30-minute Korean-style facial cleanse, ozone steam, and mask',
      'Scalp-to-face meridian massage for natural glow',
      'Complete 90-minute beauty and relaxation pairing'
    ]
  },
  {
    id: 'srv-128504',
    name: '60 Head plus 60 Massage',
    category: 'Head Spa Package',
    duration: '2 hours',
    price: '$200',
    isCouples: false,
    photo: 'assets/images/official/back-massage-official.jpg',
    cutout: 'assets/images/ai/cutout-head-massage-pkg.png',
    useCutoutThumb: false,
    description: 'Two full hours of uninterrupted tranquility: a 60-minute Japanese Head Spa paired with a 60-minute full-body massage.',
    highlights: [
      'Full 60-minute Golden Ring Waterfall Head Spa ritual',
      'Full 60-minute head-to-toe therapeutic body massage',
      'Warm aromatic essential oils and steamed herbal towels',
      'Our longest two-hour solo sanctuary immersion'
    ]
  },

  /* 3. Special Menu (Shiseido) (4) */
  {
    id: 'srv-138178',
    name: 'Japanese Head Spa with Shiseido Package (90 Mins)',
    officialName: 'JAPANESE HEAD SPA WITH SHISEIDO PACKAGE',
    category: 'Special Menu',
    duration: '1 hour 30 min',
    price: '$199',
    isCouples: false,
    photo: 'assets/images/gmaps/scalp-foam-massage.jpg',
    cutout: 'assets/images/ai/cutout-shiseido-ritual.png',
    useCutoutThumb: true,
    description: '45-Min Head Spa + 45-Min Massage powered by authentic Japanese Shiseido professional scalp and hair care formulations.',
    highlights: [
      'Authentic Japanese Shiseido professional scalp and hair care line',
      '45-minute Shiseido follicle detox, cloud-foam massage, and Golden Ring Waterfall',
      '45-minute therapeutic body massage for complete muscular relief',
      'Leaves hair weightless, glossy, and deeply conditioned'
    ]
  },
  {
    id: 'srv-138177',
    name: 'Japanese Head Spa with Shiseido Package (60 Mins)',
    officialName: 'JAPANESE HEAD SPA WITH SHISEIDO PACKAGE',
    category: 'Special Menu',
    duration: '1 hour',
    price: '$159',
    isCouples: false,
    photo: 'assets/images/gmaps/waterfall-therapist-suite.jpg',
    cutout: 'assets/images/ai/cutout-shiseido-ritual.png',
    useCutoutThumb: false,
    description: '30-Min Head Spa + 30-Min Massage featuring prestige Japanese Shiseido scalp purifying cleanser, nourishing treatment, and waterfall therapy.',
    highlights: [
      '100% authentic Japanese Shiseido salon scalp and hair products',
      '30-minute Shiseido Head Spa with Golden Ring Waterfall rinse',
      '30-minute upper-body and back therapeutic massage',
      '60-minute total duration'
    ]
  },
  {
    id: 'srv-138175',
    name: 'Japanese Head Spa with Shiseido For Two',
    officialName: 'JAPANESE HEAD SPA WITH SHISEIDO For Two',
    category: 'Special Menu',
    duration: '1 hour - 1 hour 30 min',
    price: 'from $318',
    isCouples: true,
    photo: 'assets/images/gmaps/white-jade-towel-roses.jpg',
    cutout: 'assets/images/ai/cutout-shiseido-ritual.png',
    useCutoutThumb: true,
    description: 'Couples Japanese Head Spa for Two using luxury Shiseido scalp and hair care products in our private side-by-side suite. Available in 60 Mins ($318) or 90 Mins ($398).',
    highlights: [
      'Private side-by-side suite for two guests with two dedicated specialists',
      'Authentic Japanese Shiseido scalp cleansing and conditioning',
      'Available as 60 Mins ($318 total) or 90 Mins ($398 total)',
      'Twin Golden Ring Waterfall hydrotherapy beds'
    ]
  },
  {
    id: 'srv-138174',
    name: 'Japanese Head Spa with Shiseido For One',
    officialName: 'JAPANESE HEAD SPA WITH SHISEIDO For One',
    category: 'Special Menu',
    duration: '1 hour - 1 hour 30 min',
    price: 'from $159',
    isCouples: false,
    photo: 'assets/images/official/golden-halo-official.jpg',
    cutout: 'assets/images/ai/cutout-shiseido-ritual.png',
    useCutoutThumb: false,
    description: 'Individual Japanese Head Spa elevated with Shiseido professional scalp care. Available in 60 Mins ($159) or 90 Mins ($199).',
    highlights: [
      'Solo sanctuary session powered by Japanese Shiseido formulas',
      'Choose 60 Mins ($159) or extended 90 Mins ($199) on ByChronos',
      'Deep sebum cleanse, meridian scalp massage, and waterfall halo',
      'Restores scalp balance and mirror-like hair shine'
    ]
  },

  /* 4. Couple Head Spa (7) */
  {
    id: 'pkg-2222',
    name: 'Couple 60 Minutes Head Spa',
    officialName: 'Couple 60 minutes head spa',
    category: 'Couple Head Spa',
    duration: '1 hour • 2 services',
    price: '$240',
    isCouples: true,
    photo: 'assets/images/gmaps/white-jade-towel-roses.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    useCutoutThumb: true,
    description: 'Includes Couple 60 minutes head spa 1st person ($120) + 2nd person ($120) side-by-side in our tranquil Golden Ring Waterfall suite.',
    highlights: [
      'Side-by-side 60-minute Japanese Head Spa for 2 guests ($120/person)',
      'Twin 360° Golden Ring Waterfall arches and porcelain basins',
      'Foaming scalp acupressure, conditioning steam, and neck relief',
      'Candlelit private couples sanctuary'
    ]
  },
  {
    id: 'pkg-2223',
    name: 'Couple 90 minutes head spa',
    category: 'Couple Head Spa',
    duration: '1 hour 30 min • 2 services',
    price: '$320',
    isCouples: true,
    photo: 'assets/images/gmaps/jade-towel-lily-arch.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    useCutoutThumb: false,
    description: 'Extended 90-minute side-by-side Japanese Head Spa package for two guests ($160 per person) with Golden Ring Waterfall hydrotherapy.',
    highlights: [
      '90-minute side-by-side Head Spa for 2 guests ($160/person)',
      'Extended cranial acupressure, herbal steam, and waterfall halo',
      'Nourishing hair conditioning plus neck, shoulder, and arm massage',
      'Private rose-and-lily suite for two'
    ]
  },
  {
    id: 'pkg-2224',
    name: 'Couple 60 minutes package 30 Mins head spa plus 30 Mins massage',
    category: 'Couple Head Spa',
    duration: '1 hour • 2 services',
    price: '$240',
    isCouples: true,
    photo: 'assets/images/gmaps/lily-candles-towels.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    useCutoutThumb: false,
    description: '60-minute couples package for two guests: each person enjoys a 30-minute Head Spa plus a 30-minute body massage ($120 per guest).',
    highlights: [
      'For 2 guests ($120/person) in a private couples suite',
      '30-minute Golden Ring Waterfall Head Spa per guest',
      '30-minute therapeutic body massage per guest',
      'Simultaneous care by two dedicated specialists'
    ]
  },
  {
    id: 'pkg-2225',
    name: 'Couple 90 minutes package 30 Mins head spa plus 30 Mins massage',
    category: 'Couple Head Spa',
    duration: '50 min - 1 hr 30 min • 2 services',
    price: '$320',
    isCouples: true,
    photo: 'assets/images/gmaps/aromatherapy-oils-candles.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    useCutoutThumb: false,
    description: 'Extended couples head spa and full-body massage retreat for two guests ($160 per person) in our private suite.',
    highlights: [
      'Extended 90-minute duet retreat for 2 guests ($160/person)',
      'Combines Golden Ring Waterfall Head Spa and full-body massage',
      'Warm aromatic essential oils and steamed towel service',
      'Private side-by-side suite reservation'
    ]
  },
  {
    id: 'pkg-2226',
    name: 'Couple 60 minutes package 30 mins head spa plus 30 mins facial',
    category: 'Couple Head Spa',
    duration: '2 hours • 2 services',
    price: '$280',
    isCouples: true,
    photo: 'assets/images/gmaps/facial-mask-brushes.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    useCutoutThumb: false,
    description: 'Couples beauty package for two guests: each guest receives a 30-minute Japanese Head Spa plus a 30-minute custom facial ($140 per guest).',
    highlights: [
      'For 2 guests ($140/person) side-by-side',
      '30-minute Golden Ring Waterfall Head Spa for each guest',
      '30-minute hydrating Korean-style facial and brush mask for each guest',
      'Ideal anniversary, birthday, or friends spa outing'
    ]
  },
  {
    id: 'pkg-2227',
    name: 'Couple 90 minutes package 60 Mins head spa plus 30 massage',
    category: 'Couple Head Spa',
    duration: '3 hours • 2 services',
    price: '$320',
    isCouples: true,
    photo: 'assets/images/gmaps/aromatherapy-jade-suite.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    useCutoutThumb: false,
    description: 'Each guest enjoys a full 60-minute Golden Ring Waterfall Head Spa plus a 30-minute relaxing massage ($160 per guest).',
    highlights: [
      '90 minutes of care per guest ($160/person · $320 total for 2)',
      'Full 60-minute signature Golden Ring Waterfall Head Spa each',
      '30-minute therapeutic body massage each',
      'Private candlelit suite for two'
    ]
  },
  {
    id: 'pkg-2228',
    name: 'Couple 90 minutes package 60 Mins head spa plus 30 facial',
    category: 'Couple Head Spa',
    duration: '3 hours • 2 services',
    price: '$360',
    isCouples: true,
    photo: 'assets/images/gmaps/korean-facial-treatment.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    useCutoutThumb: false,
    description: 'Our premier couples crown and glow package: each guest receives a 60-minute Japanese Head Spa plus a 30-minute Korean Facial ($180 per guest).',
    highlights: [
      'Our flagship 90-minute per guest duet ($180/person · $360 total)',
      'Full 60-minute Golden Ring Waterfall Head Spa for both guests',
      '30-minute radiant facial cleanse, steam, and mask for both guests',
      'Complete crown-to-complexion transformation together'
    ]
  },

  /* 5. Facial (4) */
  {
    id: 'srv-128485',
    name: '30 Mins Korean Facial',
    category: 'Facial',
    duration: '30 min',
    price: '$80',
    isCouples: false,
    photo: 'assets/images/gmaps/facial-mask-brushes.jpg',
    cutout: 'assets/images/ai/cutout-korean-facial.png',
    useCutoutThumb: false,
    description: '30-minute Korean skincare facial with botanical steam, gentle pore cleansing, twin-brush soothing mask application, and dewy hydration.',
    highlights: [
      'Botanical double cleanse under warm ozone mist',
      'Gentle pore refinement and exfoliation',
      'Twin fan-brush soothing hydro-mask application',
      'Dewy Korean skincare serum and moisturizer finish'
    ]
  },
  {
    id: 'srv-128491',
    name: '60 Mins Korean Facial',
    category: 'Facial',
    duration: '1 hour',
    price: '$120',
    isCouples: false,
    photo: 'assets/images/gmaps/korean-facial-treatment.jpg',
    cutout: 'assets/images/ai/cutout-korean-facial.png',
    useCutoutThumb: true,
    description: 'Full 60-minute Korean facial ritual featuring double cleansing under warm ozone steam, deep pore care, custom hydro-mask, and facial acupressure.',
    highlights: [
      '60-minute comprehensive Korean glass-skin facial protocol',
      'Warm ozone steam, magnifying lamp skin analysis, and pore care',
      'Twin-brush custom mask and hydrating ampoule infusion',
      'Lifting facial, jawline, neck, and décolleté acupressure'
    ]
  },
  {
    id: 'srv-128498',
    name: '30 Mins Gentlemans Facial',
    category: 'Facial',
    duration: '30 min',
    price: '$80',
    isCouples: false,
    photo: 'assets/images/official/facial-brush-official.jpg',
    cutout: 'assets/images/ai/cutout-korean-facial.png',
    useCutoutThumb: false,
    description: 'Targeted 30-minute Gentleman’s Facial with warm towel steam, deep pore detox, razor-irritation relief, and lightweight hydration.',
    highlights: [
      'Tailored specifically for men’s skin and beard-line comfort',
      'Warm steamed towel compress and deep pore cleanser',
      'Soothing mask to calm razor sensitivity and congestion',
      'Clean, non-greasy hydrating finish in 30 minutes'
    ]
  },
  {
    id: 'srv-128502',
    name: '60 Mins Gentlemans Facial',
    category: 'Facial',
    duration: '1 hour',
    price: '$120',
    isCouples: false,
    photo: 'assets/images/official/scalp-treatment-official.jpg',
    cutout: 'assets/images/ai/cutout-korean-facial.png',
    useCutoutThumb: false,
    description: 'Complete 60-minute Gentleman’s Facial tailored for men’s skin with deep exfoliation, steam extraction, purifying mask, and face and neck massage.',
    highlights: [
      'Full 60-minute deep-cleansing executive facial for men',
      'Enzyme exfoliation, ozone steam, and pore purification',
      'Custom purifying mask and cooling hydration therapy',
      'Includes relaxing face, temple, neck, and shoulder massage'
    ]
  },

  /* 6. Massage (3) */
  {
    id: 'srv-128486',
    name: '30 Mins Massage',
    category: 'Massage',
    duration: '30 min',
    price: '$60',
    isCouples: false,
    photo: 'assets/images/official/head-massage-official.jpg',
    cutout: 'assets/images/ai/cutout-head-massage-pkg.png',
    useCutoutThumb: false,
    description: 'Focused 30-minute therapeutic massage targeting muscle knots in the neck, shoulders, and upper or lower back.',
    highlights: [
      'Targeted 30-minute relief for neck, shoulders, and back',
      'Custom pressure from gentle Swedish to firm trigger-point work',
      'Warm botanical massage oil and steamed towel wipe',
      'Easy to pair with any Head Spa or Facial session'
    ]
  },
  {
    id: 'srv-128494',
    name: '60 Mins Massage',
    category: 'Massage',
    duration: '1 hour',
    price: '$80',
    isCouples: false,
    photo: 'assets/images/curated/female-therapist-oil-massage.jpg',
    cutout: 'assets/images/ai/cutout-head-massage-pkg.png',
    useCutoutThumb: false,
    description: '60-minute full-body therapeutic massage blending warm aromatic oils and customized pressure to melt away stress and restore circulation.',
    highlights: [
      '60-minute full-body massage in a private candlelit room',
      'Tailored pressure across back, shoulders, legs, arms, and neck',
      'Warm aromatic essential oils and heated treatment table',
      'Hot towel finish for deep muscular relaxation'
    ]
  },
  {
    id: 'srv-128496',
    name: '90 Mins Massage',
    category: 'Massage',
    duration: '1 hour 30 min',
    price: '$130',
    isCouples: false,
    photo: 'assets/images/curated/hot-stone-orchid-massage.jpg',
    cutout: 'assets/images/ai/cutout-head-massage-pkg.png',
    useCutoutThumb: false,
    description: '90-minute head-to-toe restorative massage with extra time dedicated to chronic tension zones, back, shoulders, hands, and feet.',
    highlights: [
      'Extended 90-minute full-body therapeutic bodywork',
      'Dedicated time for stubborn knots in the back, hips, and neck',
      'Warm botanical oils and soothing hot towel compresses',
      'Unhurried recovery for travelers and active locals'
    ]
  },

  /* 7. Couple Massage (2) */
  {
    id: 'pkg-2229',
    name: '60 Mins Couple Massage',
    category: 'Couple Massage',
    duration: '1 hour • 2 services',
    price: '$160',
    isCouples: true,
    photo: 'assets/images/gmaps/lily-candles-towels.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    useCutoutThumb: false,
    description: 'Includes 60 Mins Couple Massage 1st Person ($80) + 2nd Person ($80) in a candlelit private suite.',
    highlights: [
      '60-minute side-by-side full-body massage for 2 guests ($80/person)',
      'Two therapists working simultaneously in a private suite',
      'Customized pressure and warm aromatic oils for each guest',
      'Fresh florals, candlelight, and embroidered Jade linens'
    ]
  },
  {
    id: 'pkg-2230',
    name: '90 Mins Couple Massage',
    category: 'Couple Massage',
    duration: '1 hour 30 min • 2 services',
    price: '$260',
    isCouples: true,
    photo: 'assets/images/gmaps/aromatherapy-jade-suite.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    useCutoutThumb: true,
    description: 'Includes 90 Mins Couple Massage 1st Person ($130) + 2nd Person ($130) for deep, unhurried full-body relaxation together.',
    highlights: [
      '90-minute side-by-side full-body massage for 2 guests ($130/person)',
      'Extended attention to back, shoulders, neck, legs, and feet',
      'Private candlelit suite with warm oils and hot towels',
      'Our longest couples bodywork experience'
    ]
  },

  /* 8. Foot Massage (2) */
  {
    id: 'srv-128487',
    name: '30 Mins Foot Massage',
    category: 'Foot Massage',
    duration: '30 min',
    price: '$40',
    isCouples: false,
    photo: 'assets/images/gmaps/foot-reflexology-lounge.jpg',
    cutout: 'assets/images/ai/cutout-foot-reflexology.png',
    useCutoutThumb: false,
    description: '30-minute foot reflexology session in our plush leather recliner lounge—ideal after theme-park walking or long travel days.',
    highlights: [
      'Plush leather recliner lounge at 3273 Oxford Dr',
      'Warm herbal foot soak and invigorating arch point work',
      'Relieves plantar fatigue and lower-leg heaviness in 30 minutes',
      'Our most accessible express treatment ($40)'
    ]
  },
  {
    id: 'srv-128492',
    name: '60 Mins Foot Massage',
    category: 'Foot Massage',
    duration: '1 hour',
    price: '$60',
    isCouples: false,
    photo: 'assets/images/gmaps/foot-reflexology-lounge.jpg',
    cutout: 'assets/images/ai/cutout-foot-reflexology.png',
    useCutoutThumb: true,
    description: '60-minute traditional foot and lower-leg reflexology massage targeting meridian pressure points to revive tired feet and legs.',
    highlights: [
      'Full 60-minute foot and lower-leg reflexology in leather recliners',
      'Warm mineral foot bath followed by Eastern meridian point work',
      'Heel, arch, ankle, and calf lymphatic massage with hot towel wrap',
      'Perfect post-flight or post-park recovery in Kissimmee'
    ]
  }
];

const ATELIER_PLATES = [
  {
    src: 'assets/images/gmaps/waterfall-therapist-suite.jpg',
    category: 'head-spa',
    caption: 'Golden Ring Waterfall Hydrotherapy Suite',
    meta: '60 Mins Head Spa · $120'
  },
  {
    src: 'assets/images/gmaps/waterfall-halo-hero.jpg',
    category: 'head-spa',
    caption: '360° Golden Ring Water Arch Immersion',
    meta: '30 / 60 / 90 Mins · $80–$160'
  },
  {
    src: 'assets/images/gmaps/scalp-foam-massage.jpg',
    category: 'head-spa',
    caption: 'Foaming Japanese Scalp Acupressure',
    meta: 'Shiseido Package · $159–$199'
  },
  {
    src: 'assets/images/gmaps/korean-facial-treatment.jpg',
    category: 'facial',
    caption: 'Korean Facial with Ozone Steam & Lamp Analysis',
    meta: '30 / 60 Mins Facial · $80–$120'
  },
  {
    src: 'assets/images/gmaps/facial-mask-brushes.jpg',
    category: 'facial',
    caption: 'Twin Fan-Brush Custom Hydro-Mask Ritual',
    meta: 'Head + Facial Pkg · $140–$180'
  },
  {
    src: 'assets/images/gmaps/foot-reflexology-lounge.jpg',
    category: 'massage',
    caption: 'Plush Leather Foot Reflexology Lounge',
    meta: '30 / 60 Mins Foot · $40–$60'
  },
  {
    src: 'assets/images/curated/female-therapist-oil-massage.jpg',
    category: 'massage',
    caption: 'Warm Botanical Oil Full-Body Massage',
    meta: '30 / 60 / 90 Mins · $60–$130'
  },
  {
    src: 'assets/images/curated/hot-stone-orchid-massage.jpg',
    category: 'massage',
    caption: 'Restorative Back & Shoulder Bodywork',
    meta: 'Couple Massage · $160–$260'
  },
  {
    src: 'assets/images/gmaps/waterfall-basin-closeup.jpg',
    category: 'head-spa',
    caption: 'Porcelain Head Spa Basin & Golden Arch',
    meta: '3273 Oxford Dr #2'
  },
  {
    src: 'assets/images/gmaps/white-jade-towel-roses.jpg',
    category: 'sanctuary',
    caption: 'Embroidered Jade Towels & Fresh Pink Roses',
    meta: 'Couples Suites · $240–$398'
  },
  {
    src: 'assets/images/gmaps/aromatherapy-jade-suite.jpg',
    category: 'sanctuary',
    caption: 'Stargazer Lilies & Essential Oil Diffuser',
    meta: 'Private Sanctuary'
  },
  {
    src: 'assets/images/gmaps/guest-tablet-consultation.jpg',
    category: 'sanctuary',
    caption: 'Reception Consultation at 3273 Oxford Dr',
    meta: 'Open Daily 10 AM – 10 PM'
  }
];

/* State */
let currentStageIndex = 0;
let activeCategory = 'all';
let activeGuestScope = 'all';
let searchQuery = '';
let activePhotoFilter = 'all';
let visiblePlates = [...ATELIER_PLATES];
let currentLightboxIndex = 0;

/* 1. Live Kissimmee Eastern Time Hours */
function updateKissimmeeHours() {
  const statusEl = document.getElementById('liveHoursStatus');
  const visitEl = document.getElementById('visitLiveHoursDetail');
  try {
    const now = new Date();
    const etParts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    }).formatToParts(now);
    const hourPart = etParts.find((p) => p.type === 'hour');
    const hour = hourPart ? parseInt(hourPart.value, 10) : 12;
    const isOpen = hour >= 10 && hour < 22;

    if (statusEl) {
      statusEl.textContent = isOpen
        ? 'Open Now in Kissimmee · 10 AM – 10 PM'
        : 'Sanctuary Hours · Daily 10 AM – 10 PM ET';
    }
    if (visitEl) {
      visitEl.textContent = isOpen
        ? 'Open Now · Monday – Sunday: 10:00 AM – 10:00 PM ET'
        : 'Monday – Sunday: 10:00 AM – 10:00 PM Eastern Time';
    }
  } catch (_) {
    /* Keep static fallback */
  }
}

/* 2. First Viewport Six-Ritual Stage Switcher */
function initHeroStage() {
  const rowsContainer = document.getElementById('heroStageRows');
  const platePhoto = document.getElementById('stagePlatePhoto');
  const activeTitle = document.getElementById('stageActiveTitle');
  const activeSub = document.getElementById('stageActiveSub');
  const activePrice = document.getElementById('stageActivePrice');
  const cutoutImg = document.getElementById('stageCutoutImg');
  const cutoutLabel = document.getElementById('stageCutoutLabel');
  const cutoutTrigger = document.getElementById('stageCutoutTrigger');
  const inspectBtn = document.getElementById('heroInspectActiveBtn');

  if (!rowsContainer) return;

  function setStage(index) {
    const item = STAGE_SIGNATURES[index];
    if (!item) return;
    currentStageIndex = index;

    const buttons = rowsContainer.querySelectorAll('.index-row');
    buttons.forEach((btn, idx) => {
      const isSelected = idx === index;
      btn.classList.toggle('active', isSelected);
      btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });

    const plateFrame = platePhoto ? platePhoto.closest('.hero-plate-frame') : null;
    if (plateFrame) plateFrame.classList.add('is-switching');
    if (cutoutTrigger) cutoutTrigger.classList.add('is-switching');

    setTimeout(() => {
      if (platePhoto) {
        platePhoto.src = item.photo;
        platePhoto.alt = item.photoAlt;
      }
      if (activeTitle) activeTitle.textContent = item.title;
      if (activeSub) activeSub.textContent = item.sub;
      if (activePrice) activePrice.textContent = item.price;
      if (cutoutImg) {
        cutoutImg.src = item.cutout;
        cutoutImg.alt = `${item.title} studio cutout`;
      }
      if (cutoutLabel) cutoutLabel.textContent = item.cutoutLabel;

      if (plateFrame) plateFrame.classList.remove('is-switching');
      if (cutoutTrigger) cutoutTrigger.classList.remove('is-switching');
    }, 140);
  }

  rowsContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.index-row');
    if (!btn) return;
    const idx = parseInt(btn.getAttribute('data-stage-index'), 10);
    if (!Number.isNaN(idx)) {
      setStage(idx);
    }
  });

  if (cutoutTrigger) {
    cutoutTrigger.addEventListener('click', () => {
      const item = STAGE_SIGNATURES[currentStageIndex];
      if (item) openServiceDrawer(item.serviceId);
    });
  }

  if (inspectBtn) {
    inspectBtn.addEventListener('click', () => {
      const item = STAGE_SIGNATURES[currentStageIndex];
      if (item) openServiceDrawer(item.serviceId);
    });
  }
}

/* 3. Render Six Signature Studio Cutout Plates */
function renderSignaturesPatchwork() {
  const container = document.getElementById('signaturesPatchwork');
  if (!container) return;

  container.innerHTML = STAGE_SIGNATURES.map((sig) => {
    const fullService = OFFICIAL_SERVICES.find((s) => s.id === sig.serviceId);
    const desc = fullService ? fullService.description : sig.sub;
    return `
      <article class="sig-patch ${sig.patchTone}">
        <div class="sig-patch-stage">
          <div class="sig-cutout-well">
            <span class="sig-plate-code">${sig.plateCode}</span>
            <img src="${sig.cutout}" alt="${sig.title} studio illustration" loading="lazy" />
          </div>
          <div class="sig-photo-well">
            <img src="${sig.photo}" alt="${sig.photoAlt}" loading="lazy" />
            <span class="sig-duration-tag">${sig.duration}</span>
          </div>
        </div>
        <div class="sig-patch-body">
          <div>
            <div class="sig-title-row">
              <h3 class="sig-title">${sig.title}</h3>
              <span class="sig-price">${sig.price}</span>
            </div>
            <p class="sig-desc">${desc}</p>
          </div>
          <div class="sig-patch-actions">
            <button type="button" class="sig-btn-inspect" data-open-service="${sig.serviceId}">
              Service Sheet
            </button>
            <a href="${BYCHRONOS_BOOKING_URL}" target="_blank" rel="noopener noreferrer" class="sig-btn-book">
              <span>Book (${sig.price})</span>
              <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.5" />
              </svg>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* 4. Render 30-Treatment Official Tariff Ledger */
function getFilteredServices() {
  return OFFICIAL_SERVICES.filter((srv) => {
    const matchesCat = activeCategory === 'all' || srv.category === activeCategory;
    const matchesGuest =
      activeGuestScope === 'all' ||
      (activeGuestScope === 'couples' && srv.isCouples) ||
      (activeGuestScope === 'solo' && !srv.isCouples);
    const q = searchQuery.trim().toLowerCase();
    const matchesQuery =
      !q ||
      srv.name.toLowerCase().includes(q) ||
      srv.category.toLowerCase().includes(q) ||
      srv.description.toLowerCase().includes(q) ||
      srv.price.toLowerCase().includes(q) ||
      srv.duration.toLowerCase().includes(q);
    return matchesCat && matchesGuest && matchesQuery;
  });
}

function renderTariffRail() {
  const rail = document.getElementById('tariffCategoryRail');
  if (!rail) return;

  rail.innerHTML = OFFICIAL_CATEGORIES.map((cat) => {
    const count =
      cat.id === 'all'
        ? OFFICIAL_SERVICES.length
        : OFFICIAL_SERVICES.filter((s) => s.category === cat.id).length;
    const isActive = activeCategory === cat.id;
    return `
      <button
        type="button"
        class="rail-cat-btn ${isActive ? 'active' : ''}"
        role="tab"
        aria-selected="${isActive ? 'true' : 'false'}"
        data-cat-id="${cat.id}"
      >
        <span>${cat.label}</span>
        <span class="rail-count">${count}</span>
      </button>
    `;
  }).join('');
}

function renderTariffLedger() {
  const ledgerBody = document.getElementById('tariffLedgerBody');
  if (!ledgerBody) return;

  const filtered = getFilteredServices();
  if (filtered.length === 0) {
    ledgerBody.innerHTML = `
      <div class="tariff-empty">
        <p>No treatments matched your filter. Reset the search or category to view all 30 official services.</p>
      </div>
    `;
    return;
  }

  const categoriesToRender =
    activeCategory === 'all'
      ? OFFICIAL_CATEGORIES.filter((c) => c.id !== 'all').map((c) => c.id)
      : [activeCategory];

  const blocksHtml = categoriesToRender
    .map((catId) => {
      const items = filtered.filter((s) => s.category === catId);
      if (items.length === 0) return '';

      const rowsHtml = items
        .map((srv) => {
          const thumbSrc = srv.useCutoutThumb ? srv.cutout : srv.photo;
          const thumbClass = srv.useCutoutThumb ? 'ledger-thumb is-cutout' : 'ledger-thumb';
          return `
            <article class="ledger-service-row">
              <div class="${thumbClass}">
                <img src="${thumbSrc}" alt="${srv.name}" loading="lazy" width="60" height="60" />
              </div>
              <div class="ledger-main-info">
                <h4 class="ledger-service-name">${srv.name}</h4>
                <p class="ledger-service-desc">${srv.description}</p>
              </div>
              <div class="ledger-duration">${srv.duration}</div>
              <div class="ledger-price">${srv.price}</div>
              <div class="ledger-actions">
                <button type="button" class="ledger-btn-sheet" data-open-service="${srv.id}">
                  Details
                </button>
                <a href="${BYCHRONOS_BOOKING_URL}" target="_blank" rel="noopener noreferrer" class="ledger-btn-book">
                  <span>Book</span>
                  <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.5" />
                  </svg>
                </a>
              </div>
            </article>
          `;
        })
        .join('');

      return `
        <section class="ledger-category-block" aria-label="${catId}">
          <header class="ledger-category-header">
            <h3>${catId}</h3>
            <span>${items.length} ${items.length === 1 ? 'Treatment' : 'Treatments'}</span>
          </header>
          <div class="ledger-rows-wrap">
            ${rowsHtml}
          </div>
        </section>
      `;
    })
    .join('');

  ledgerBody.innerHTML = blocksHtml;
}

function initTariffControls() {
  const rail = document.getElementById('tariffCategoryRail');
  const searchInput = document.getElementById('tariffSearchInput');
  const guestBtns = document.querySelectorAll('.guest-filter-btn');

  renderTariffRail();
  renderTariffLedger();

  if (rail) {
    rail.addEventListener('click', (e) => {
      const btn = e.target.closest('.rail-cat-btn');
      if (!btn) return;
      activeCategory = btn.getAttribute('data-cat-id') || 'all';
      renderTariffRail();
      renderTariffLedger();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value || '';
      renderTariffLedger();
    });
  }

  guestBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      guestBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeGuestScope = btn.getAttribute('data-guest-scope') || 'all';
      renderTariffLedger();
    });
  });

  document.querySelectorAll('[data-jump-cat]').forEach((link) => {
    link.addEventListener('click', () => {
      const targetCat = link.getAttribute('data-jump-cat');
      if (targetCat) {
        activeCategory = targetCat;
        activeGuestScope = 'all';
        guestBtns.forEach((b) => b.classList.toggle('active', b.getAttribute('data-guest-scope') === 'all'));
        renderTariffRail();
        renderTariffLedger();
      }
    });
  });
}

/* 5. Atelier Photographic Plates & Lightbox */
function renderAtelierPlates() {
  const grid = document.getElementById('atelierPlatesGrid');
  if (!grid) return;

  visiblePlates =
    activePhotoFilter === 'all'
      ? [...ATELIER_PLATES]
      : ATELIER_PLATES.filter((p) => p.category === activePhotoFilter);

  grid.innerHTML = visiblePlates
    .map(
      (plate, idx) => `
      <figure class="atelier-plate-item" data-plate-index="${idx}" tabindex="0" role="button" aria-label="Enlarge ${plate.caption}">
        <img src="${plate.src}" alt="${plate.caption}" loading="lazy" />
        <figcaption class="plate-edge-note">
          <span>${plate.caption}</span>
          <strong>${plate.meta}</strong>
        </figcaption>
      </figure>
    `
    )
    .join('');
}

function initAtelierGallery() {
  const tabs = document.querySelectorAll('.atelier-tab');
  const grid = document.getElementById('atelierPlatesGrid');
  const lightbox = document.getElementById('plateLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  renderAtelierPlates();

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      activePhotoFilter = tab.getAttribute('data-photo-filter') || 'all';
      renderAtelierPlates();
    });
  });

  function showLightboxPlate(index) {
    if (!visiblePlates.length || !lightbox || !lightboxImg || !lightboxCaption) return;
    currentLightboxIndex = (index + visiblePlates.length) % visiblePlates.length;
    const item = visiblePlates[currentLightboxIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.caption;
    lightboxCaption.textContent = `${item.caption} — ${item.meta}`;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  }

  if (grid) {
    grid.addEventListener('click', (e) => {
      const fig = e.target.closest('.atelier-plate-item');
      if (!fig) return;
      const idx = parseInt(fig.getAttribute('data-plate-index'), 10);
      if (!Number.isNaN(idx)) showLightboxPlate(idx);
    });

    grid.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const fig = e.target.closest('.atelier-plate-item');
        if (!fig) return;
        e.preventDefault();
        const idx = parseInt(fig.getAttribute('data-plate-index'), 10);
        if (!Number.isNaN(idx)) showLightboxPlate(idx);
      }
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => showLightboxPlate(currentLightboxIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showLightboxPlate(currentLightboxIndex + 1));

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (lightbox && lightbox.classList.contains('open')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showLightboxPlate(currentLightboxIndex - 1);
      if (e.key === 'ArrowRight') showLightboxPlate(currentLightboxIndex + 1);
    }
  });
}

/* 6. Service Detail Sheet Drawer */
function openServiceDrawer(serviceId) {
  const srv = OFFICIAL_SERVICES.find((s) => s.id === serviceId);
  const drawer = document.getElementById('serviceDetailDrawer');
  if (!srv || !drawer) return;

  const catEl = document.getElementById('drawerServiceCategory');
  const photoEl = document.getElementById('drawerServicePhoto');
  const cutoutEl = document.getElementById('drawerServiceCutout');
  const titleEl = document.getElementById('drawerServiceTitle');
  const priceEl = document.getElementById('drawerServicePrice');
  const durEl = document.getElementById('drawerServiceDuration');
  const descEl = document.getElementById('drawerServiceDesc');
  const listEl = document.getElementById('drawerServiceHighlights');

  if (catEl) catEl.textContent = srv.category;
  if (photoEl) {
    photoEl.src = srv.photo;
    photoEl.alt = srv.name;
  }
  if (cutoutEl) {
    cutoutEl.src = srv.cutout;
    cutoutEl.alt = `${srv.name} illustration`;
  }
  if (titleEl) titleEl.textContent = srv.name;
  if (priceEl) priceEl.textContent = srv.price;
  if (durEl) durEl.textContent = `Duration: ${srv.duration} · 3273 Oxford Dr #2, Kissimmee, FL`;
  if (descEl) descEl.textContent = srv.description;
  if (listEl) {
    listEl.innerHTML = (srv.highlights || []).map((h) => `<li>${h}</li>`).join('');
  }

  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
}

function closeServiceDrawer() {
  const drawer = document.getElementById('serviceDetailDrawer');
  if (!drawer) return;
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
}

function initServiceDrawerEvents() {
  const closeBtn = document.getElementById('drawerCloseBtn');
  const backdrop = document.getElementById('drawerBackdropClose');

  if (closeBtn) closeBtn.addEventListener('click', closeServiceDrawer);
  if (backdrop) backdrop.addEventListener('click', closeServiceDrawer);

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-service]');
    if (!trigger) return;
    const id = trigger.getAttribute('data-open-service');
    if (id) {
      e.preventDefault();
      openServiceDrawer(id);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeServiceDrawer();
  });
}

/* 7. Etiquette FAQ Accordion & Mobile Menu Sheet */
function initAccordionAndMobileNav() {
  const faqAccordion = document.getElementById('faqAccordion');
  if (faqAccordion) {
    faqAccordion.addEventListener('click', (e) => {
      const btn = e.target.closest('.faq-trigger');
      if (!btn) return;
      const row = btn.closest('.faq-row');
      if (!row) return;
      const isOpen = row.classList.contains('open');

      faqAccordion.querySelectorAll('.faq-row').forEach((r) => {
        r.classList.remove('open');
        const t = r.querySelector('.faq-trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        row.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  }

  const navToggle = document.getElementById('mobileNavToggle');
  const navDrawer = document.getElementById('mobileNavDrawer');
  if (navToggle && navDrawer) {
    navToggle.addEventListener('click', () => {
      const isOpen = navDrawer.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navDrawer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    });

    navDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navDrawer.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navDrawer.setAttribute('aria-hidden', 'true');
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateKissimmeeHours();
  initHeroStage();
  renderSignaturesPatchwork();
  initTariffControls();
  initAtelierGallery();
  initServiceDrawerEvents();
  initAccordionAndMobileNav();
});
