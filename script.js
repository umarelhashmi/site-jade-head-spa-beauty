const BYCHRONOS_BOOKING_URL = 'https://go.bychronos.com/l/kissimmee-34746-jade-head-spa-beauty-806983/a/services';

const HERO_SCENES = [
  {
    serviceId: 'srv-128489',
    title: '60 Mins Head Spa',
    sub: '1 hour · Soothing scalp massage, cleansing, conditioning & Golden Ring Waterfall Therapy',
    price: '$120',
    photo: 'assets/images/gmaps/waterfall-therapist-suite.jpg',
    photoAlt: 'Specialist performing the 60 Mins Head Spa with Golden Ring Waterfall arch at Jade Head Spa & Beauty',
    cutout: 'assets/images/ai/cutout-golden-halo-arch.png',
    cutoutTitle: 'Golden Ring Waterfall',
    cutoutNote: 'Warm water arch & soothing scalp therapy'
  },
  {
    serviceId: 'srv-138178',
    title: 'Japanese Head Spa with Shiseido Package',
    sub: '1 hr 30 min · 45-Min Shiseido Head Spa + 45-Min Relaxing Body Massage',
    price: '$199',
    photo: 'assets/images/gmaps/scalp-foam-massage.jpg',
    photoAlt: 'Japanese Shiseido scalp massage at Jade Head Spa & Beauty in Kissimmee',
    cutout: 'assets/images/ai/cutout-shiseido-ritual.png',
    cutoutTitle: 'Shiseido Scalp Care',
    cutoutNote: 'Japanese Shiseido shampoo, conditioner & scalp care'
  },
  {
    serviceId: 'srv-128491',
    title: '60 Mins Korean Facial',
    sub: '1 hour · Deep facial cleansing, warm steam, soothing mask & face massage',
    price: '$120',
    photo: 'assets/images/gmaps/korean-facial-treatment.jpg',
    photoAlt: 'Esthetician performing a 60 Mins Korean Facial',
    cutout: 'assets/images/ai/cutout-korean-facial.png',
    cutoutTitle: 'Refreshing Facial Care',
    cutoutNote: 'Korean Facial & Gentleman’s Facial ($80–$120)'
  },
  {
    serviceId: 'pkg-2222',
    title: 'Couple 60 Minutes Head Spa',
    sub: '1 hour • 2 services · Side-by-side Golden Ring Waterfall room for two ($120 per guest)',
    price: '$240',
    photo: 'assets/images/gmaps/white-jade-towel-roses.jpg',
    photoAlt: 'Private couples room prepared with embroidered Jade towels and fresh pink roses',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    cutoutTitle: 'Couples Packages',
    cutoutNote: 'Side-by-side Head Spa & Massage rooms for two'
  }
];

const STAGE_SIGNATURES = [
  {
    serviceId: 'srv-128489',
    title: '60 Mins Head Spa',
    sub: '1 hour · Golden Ring Waterfall',
    price: '$120',
    duration: '1 hour',
    photo: 'assets/images/gmaps/waterfall-therapist-suite.jpg',
    photoAlt: 'Specialist performing the 60 Mins Head Spa with Golden Ring Waterfall arch',
    cutout: 'assets/images/ai/cutout-golden-halo-arch.png',
    cutoutLabel: 'Head Spa'
  },
  {
    serviceId: 'srv-138178',
    title: 'Japanese Head Spa with Shiseido Package',
    sub: '1 hour 30 min · 45m Head Spa + 45m Massage',
    price: '$199',
    duration: '1 hour 30 min',
    photo: 'assets/images/gmaps/scalp-foam-massage.jpg',
    photoAlt: 'Shiseido scalp massage at Jade Head Spa & Beauty',
    cutout: 'assets/images/ai/cutout-shiseido-ritual.png',
    cutoutLabel: 'Shiseido Special Menu'
  },
  {
    serviceId: 'srv-128497',
    title: '60 Mins Head plus 30 Mins Massage',
    sub: '1 hour 30 min · Head Spa + Body Massage',
    price: '$160',
    duration: '1 hour 30 min',
    photo: 'assets/images/curated/female-therapist-oil-massage.jpg',
    photoAlt: 'Relaxing body massage paired with Golden Ring Head Spa',
    cutout: 'assets/images/ai/cutout-head-massage-pkg.png',
    cutoutLabel: 'Head Spa Package'
  },
  {
    serviceId: 'srv-128491',
    title: '60 Mins Korean Facial',
    sub: '1 hour · Deep Cleansing & Mask',
    price: '$120',
    duration: '1 hour',
    photo: 'assets/images/gmaps/korean-facial-treatment.jpg',
    photoAlt: 'Esthetician performing a 60 Mins Korean Facial',
    cutout: 'assets/images/ai/cutout-korean-facial.png',
    cutoutLabel: 'Facial Care'
  },
  {
    serviceId: 'pkg-2222',
    title: 'Couple 60 Minutes Head Spa',
    sub: '1 hour • 2 services · Private Room ($120/guest)',
    price: '$240',
    duration: '1 hour • 2 services',
    photo: 'assets/images/gmaps/white-jade-towel-roses.jpg',
    photoAlt: 'Private couples suite prepared with embroidered Jade towels and fresh pink roses',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    cutoutLabel: 'Couple Head Spa'
  },
  {
    serviceId: 'srv-128492',
    title: '60 Mins Foot Massage',
    sub: '1 hour · Leather Recliner Lounge',
    price: '$60',
    duration: '1 hour',
    photo: 'assets/images/gmaps/foot-reflexology-lounge.jpg',
    photoAlt: 'Foot massage treatment in the leather recliner lounge',
    cutout: 'assets/images/ai/cutout-foot-reflexology.png',
    cutoutLabel: 'Foot Massage'
  }
];

const POPULAR_SERVICE_IDS = [
  'srv-128489',
  'srv-138178',
  'srv-128497',
  'srv-128491',
  'pkg-2222',
  'srv-128494'
];

const OFFICIAL_CATEGORIES = [
  { id: 'popular', label: 'Popular' },
  { id: 'Head Spa', label: 'Head Spa' },
  { id: 'Head Spa Package', label: 'Head Spa Package' },
  { id: 'Special Menu', label: 'Shiseido Special' },
  { id: 'Couple Head Spa', label: 'Couple Head Spa' },
  { id: 'Facial', label: 'Facial' },
  { id: 'Massage', label: 'Massage' },
  { id: 'Couple Massage', label: 'Couple Massage' },
  { id: 'Foot Massage', label: 'Foot Massage' },
  { id: 'all', label: 'All Services' }
];

const OFFICIAL_SERVICES = [
  /* 1. Head Spa (3) */
  {
    id: 'srv-128483',
    name: '30 Mins Head Spa',
    category: 'Head Spa',
    duration: '30 min',
    timeBucket: 'short',
    focusBucket: 'head',
    price: '$80',
    isCouples: false,
    photo: 'assets/images/gmaps/waterfall-basin-closeup.jpg',
    hoverPhoto: 'assets/images/gmaps/waterfall-halo-hero.jpg',
    cutout: 'assets/images/ai/cutout-golden-halo-arch.png',
    useCutoutThumb: false,
    description: '30-minute Japanese-inspired Head Spa with soothing scalp massage, deep cleansing, conditioning, and Golden Ring Waterfall Therapy.',
    highlights: [
      'Gentle scalp cleansing and warm shampoo lather',
      'Relaxing head, temple, and scalp massage',
      'Warm Golden Ring Waterfall water therapy',
      'Warm towel wrap and quick refresh'
    ]
  },
  {
    id: 'srv-128489',
    name: '60 Mins Head Spa',
    category: 'Head Spa',
    duration: '1 hour',
    timeBucket: 'medium',
    focusBucket: 'head',
    price: '$120',
    isCouples: false,
    photo: 'assets/images/gmaps/waterfall-therapist-suite.jpg',
    hoverPhoto: 'assets/images/gmaps/waterfall-halo-hero.jpg',
    cutout: 'assets/images/ai/cutout-golden-halo-arch.png',
    useCutoutThumb: true,
    description: 'Our signature 60-minute Japanese-inspired Head Spa with deep scalp cleansing, rich foaming head massage, conditioning steam, Golden Ring Waterfall Therapy, and neck and shoulder relaxation.',
    highlights: [
      'Deep scalp cleansing and foaming head massage',
      'Warm Golden Ring Waterfall Therapy and gentle steam',
      'Nourishing hair conditioning treatment',
      'Relaxing neck and shoulder massage'
    ]
  },
  {
    id: 'srv-128499',
    name: '90 Mins Head Spa',
    category: 'Head Spa',
    duration: '1 hour 30 min',
    timeBucket: 'long',
    focusBucket: 'head',
    price: '$160',
    isCouples: false,
    photo: 'assets/images/gmaps/scalp-foam-massage.jpg',
    hoverPhoto: 'assets/images/gmaps/waterfall-therapist-suite.jpg',
    cutout: 'assets/images/ai/cutout-golden-halo-arch.png',
    useCutoutThumb: false,
    description: 'Extended 90-minute Head Spa with extra time for scalp cleansing, soothing head massage, Golden Ring Waterfall Therapy, conditioning, and upper-body relaxation.',
    highlights: [
      'Extended scalp cleansing, foaming massage, and warm steam',
      'Relaxing Golden Ring Waterfall Therapy',
      'Deep hair conditioning plus neck, shoulder, and arm massage',
      'Full 90-minute session with warm towel service'
    ]
  },

  /* 2. Head Spa Package (5) */
  {
    id: 'srv-128484',
    name: '30 Mins Head plus 30 Mins Massage',
    category: 'Head Spa Package',
    duration: '1 hour',
    timeBucket: 'medium',
    focusBucket: 'head',
    price: '$120',
    isCouples: false,
    photo: 'assets/images/gmaps/aromatherapy-jade-suite.jpg',
    hoverPhoto: 'assets/images/official/head-massage-official.jpg',
    cutout: 'assets/images/ai/cutout-head-massage-pkg.png',
    useCutoutThumb: false,
    description: '60-minute package combining a 30-minute Golden Ring Waterfall Head Spa with a 30-minute relaxing body massage.',
    highlights: [
      '30-minute Head Spa with Golden Ring Waterfall rinse',
      '30-minute relaxing neck, shoulder, and back massage',
      'Warm massage oil and steamed towel finish',
      'Complete 1-hour head and body refresh'
    ]
  },
  {
    id: 'srv-128495',
    name: '30 Mins Head plus 30 Mins Facial',
    category: 'Head Spa Package',
    duration: '1 hour',
    timeBucket: 'medium',
    focusBucket: 'facial',
    price: '$140',
    isCouples: false,
    photo: 'assets/images/gmaps/facial-mask-brushes.jpg',
    hoverPhoto: 'assets/images/gmaps/korean-facial-treatment.jpg',
    cutout: 'assets/images/ai/cutout-korean-facial.png',
    useCutoutThumb: false,
    description: '60-minute combination pairing a 30-minute Head Spa with a 30-minute refreshing facial cleanse and soothing mask.',
    highlights: [
      '30-minute Golden Ring Waterfall Head Spa and scalp massage',
      '30-minute facial cleanse, warm steam, and soothing mask',
      'Relaxing face, temple, and scalp massage',
      'Hydrating skincare finish'
    ]
  },
  {
    id: 'srv-128497',
    name: '60 Mins Head plus 30 Mins Massage',
    category: 'Head Spa Package',
    duration: '1 hour 30 min',
    timeBucket: 'long',
    focusBucket: 'head',
    price: '$160',
    isCouples: false,
    photo: 'assets/images/curated/female-therapist-oil-massage.jpg',
    hoverPhoto: 'assets/images/gmaps/waterfall-therapist-suite.jpg',
    cutout: 'assets/images/ai/cutout-head-massage-pkg.png',
    useCutoutThumb: true,
    description: '90-minute package featuring our full 60-minute signature Head Spa followed by a 30-minute relaxing body massage.',
    highlights: [
      'Full 60-minute signature Golden Ring Waterfall Head Spa',
      '30-minute body massage with warm oil',
      'Relieves tension across the head, neck, shoulders, and back',
      '90 minutes of continuous relaxation'
    ]
  },
  {
    id: 'srv-128501',
    name: '60 Head plus 30 Facial',
    category: 'Head Spa Package',
    duration: '1 hour 30 min',
    timeBucket: 'long',
    focusBucket: 'facial',
    price: '$180',
    isCouples: false,
    photo: 'assets/images/gmaps/korean-facial-treatment.jpg',
    hoverPhoto: 'assets/images/gmaps/facial-mask-brushes.jpg',
    cutout: 'assets/images/ai/cutout-korean-facial.png',
    useCutoutThumb: false,
    description: '90-minute package combining a full 60-minute Golden Ring Waterfall Head Spa with a 30-minute refreshing facial.',
    highlights: [
      'Full 60-minute Head Spa with Golden Ring Waterfall Therapy',
      '30-minute facial cleanse, warm steam, and mask',
      'Soothing scalp, face, neck, and shoulder massage',
      'Complete 90-minute head spa and facial package'
    ]
  },
  {
    id: 'srv-128504',
    name: '60 Head plus 60 Massage',
    category: 'Head Spa Package',
    duration: '2 hours',
    timeBucket: 'long',
    focusBucket: 'head',
    price: '$200',
    isCouples: false,
    photo: 'assets/images/official/back-massage-official.jpg',
    hoverPhoto: 'assets/images/gmaps/waterfall-halo-hero.jpg',
    cutout: 'assets/images/ai/cutout-head-massage-pkg.png',
    useCutoutThumb: false,
    description: 'Two full hours of relaxation: a 60-minute Golden Ring Waterfall Head Spa paired with a 60-minute full-body massage.',
    highlights: [
      'Full 60-minute Golden Ring Waterfall Head Spa',
      'Full 60-minute full-body massage',
      'Warm massage oil and steamed towel service',
      'Our longest 2-hour individual package'
    ]
  },

  /* 3. Special Menu (Shiseido) (4) */
  {
    id: 'srv-138178',
    name: 'Japanese Head Spa with Shiseido Package (90 Mins)',
    officialName: 'JAPANESE HEAD SPA WITH SHISEIDO PACKAGE',
    category: 'Special Menu',
    duration: '1 hour 30 min',
    timeBucket: 'long',
    focusBucket: 'shiseido',
    price: '$199',
    isCouples: false,
    photo: 'assets/images/gmaps/scalp-foam-massage.jpg',
    hoverPhoto: 'assets/images/gmaps/waterfall-halo-hero.jpg',
    cutout: 'assets/images/ai/cutout-shiseido-ritual.png',
    useCutoutThumb: true,
    description: '45-Min Head Spa + 45-Min Massage using authentic Japanese Shiseido professional scalp and hair care products.',
    highlights: [
      'Authentic Japanese Shiseido scalp and hair care products',
      '45-minute Shiseido Head Spa and Golden Ring Waterfall Therapy',
      '45-minute relaxing body massage',
      'Leaves hair clean, soft, and deeply conditioned'
    ]
  },
  {
    id: 'srv-138177',
    name: 'Japanese Head Spa with Shiseido Package (60 Mins)',
    officialName: 'JAPANESE HEAD SPA WITH SHISEIDO PACKAGE',
    category: 'Special Menu',
    duration: '1 hour',
    timeBucket: 'medium',
    focusBucket: 'shiseido',
    price: '$159',
    isCouples: false,
    photo: 'assets/images/gmaps/waterfall-therapist-suite.jpg',
    hoverPhoto: 'assets/images/gmaps/scalp-foam-massage.jpg',
    cutout: 'assets/images/ai/cutout-shiseido-ritual.png',
    useCutoutThumb: false,
    description: '30-Min Head Spa + 30-Min Massage featuring Japanese Shiseido scalp cleanser, conditioning treatment, and waterfall therapy.',
    highlights: [
      'Authentic Japanese Shiseido scalp and hair care products',
      '30-minute Shiseido Head Spa with Golden Ring Waterfall rinse',
      '30-minute relaxing neck, shoulder, and back massage',
      '60-minute total session'
    ]
  },
  {
    id: 'srv-138175',
    name: 'Japanese Head Spa with Shiseido For Two',
    officialName: 'JAPANESE HEAD SPA WITH SHISEIDO For Two',
    category: 'Special Menu',
    duration: '1 hour - 1 hour 30 min',
    timeBucket: 'long',
    focusBucket: 'shiseido',
    price: 'from $318',
    isCouples: true,
    photo: 'assets/images/gmaps/white-jade-towel-roses.jpg',
    hoverPhoto: 'assets/images/gmaps/jade-towel-lily-arch.jpg',
    cutout: 'assets/images/ai/cutout-shiseido-ritual.png',
    useCutoutThumb: true,
    description: 'Couples Japanese Head Spa for two guests using Shiseido scalp and hair care products in our private side-by-side room. Available in 60 Mins ($318) or 90 Mins ($398).',
    highlights: [
      'Private side-by-side room for two guests with two specialists',
      'Japanese Shiseido scalp cleansing and conditioning',
      'Available in 60 Mins ($318 total) or 90 Mins ($398 total)',
      'Two Golden Ring Waterfall head spa beds'
    ]
  },
  {
    id: 'srv-138174',
    name: 'Japanese Head Spa with Shiseido For One',
    officialName: 'JAPANESE HEAD SPA WITH SHISEIDO For One',
    category: 'Special Menu',
    duration: '1 hour - 1 hour 30 min',
    timeBucket: 'medium',
    focusBucket: 'shiseido',
    price: 'from $159',
    isCouples: false,
    photo: 'assets/images/official/golden-halo-official.jpg',
    hoverPhoto: 'assets/images/gmaps/scalp-foam-massage.jpg',
    cutout: 'assets/images/ai/cutout-shiseido-ritual.png',
    useCutoutThumb: false,
    description: 'Individual Japanese Head Spa with Shiseido professional scalp and hair care. Available in 60 Mins ($159) or 90 Mins ($199).',
    highlights: [
      'Individual session using Japanese Shiseido scalp and hair care',
      'Choose 60 Mins ($159) or 90 Mins ($199) when booking',
      'Deep scalp cleanse, soothing head massage, and waterfall therapy',
      'Leaves scalp refreshed and hair smooth and shiny'
    ]
  },

  /* 4. Couple Head Spa (7) */
  {
    id: 'pkg-2222',
    name: 'Couple 60 Minutes Head Spa',
    officialName: 'Couple 60 minutes head spa',
    category: 'Couple Head Spa',
    duration: '1 hour • 2 services',
    timeBucket: 'medium',
    focusBucket: 'head',
    price: '$240',
    isCouples: true,
    photo: 'assets/images/gmaps/white-jade-towel-roses.jpg',
    hoverPhoto: 'assets/images/gmaps/waterfall-therapist-suite.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    useCutoutThumb: true,
    description: 'Includes 60-minute Head Spa for 1st guest ($120) + 2nd guest ($120) side-by-side in our private Golden Ring Waterfall suite.',
    highlights: [
      'Side-by-side 60-minute Head Spa for 2 guests ($120/person)',
      'Two Golden Ring Waterfall basins in a private room',
      'Scalp cleansing, foaming head massage, conditioning, and neck relief',
      'Two specialists working simultaneously'
    ]
  },
  {
    id: 'pkg-2223',
    name: 'Couple 90 minutes head spa',
    category: 'Couple Head Spa',
    duration: '1 hour 30 min • 2 services',
    timeBucket: 'long',
    focusBucket: 'head',
    price: '$320',
    isCouples: true,
    photo: 'assets/images/gmaps/jade-towel-lily-arch.jpg',
    hoverPhoto: 'assets/images/gmaps/white-jade-towel-roses.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    useCutoutThumb: false,
    description: 'Extended 90-minute side-by-side Head Spa package for two guests ($160 per person) with Golden Ring Waterfall Therapy.',
    highlights: [
      '90-minute side-by-side Head Spa for 2 guests ($160/person)',
      'Extended scalp massage, warm steam, and waterfall therapy',
      'Hair conditioning plus neck, shoulder, and arm massage',
      'Private room prepared for two'
    ]
  },
  {
    id: 'pkg-2224',
    name: 'Couple 60 minutes package 30 Mins head spa plus 30 Mins massage',
    category: 'Couple Head Spa',
    duration: '1 hour • 2 services',
    timeBucket: 'medium',
    focusBucket: 'head',
    price: '$240',
    isCouples: true,
    photo: 'assets/images/gmaps/lily-candles-towels.jpg',
    hoverPhoto: 'assets/images/gmaps/aromatherapy-jade-suite.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    useCutoutThumb: false,
    description: '60-minute couples package for two guests: each person enjoys a 30-minute Head Spa plus a 30-minute body massage ($120 per guest).',
    highlights: [
      'For 2 guests ($120/person) in a private couples room',
      '30-minute Golden Ring Waterfall Head Spa per guest',
      '30-minute relaxing body massage per guest',
      'Two dedicated specialists'
    ]
  },
  {
    id: 'pkg-2225',
    name: 'Couple 90 minutes package 30 Mins head spa plus 30 Mins massage',
    category: 'Couple Head Spa',
    duration: '50 min - 1 hr 30 min • 2 services',
    timeBucket: 'long',
    focusBucket: 'head',
    price: '$320',
    isCouples: true,
    photo: 'assets/images/gmaps/aromatherapy-oils-candles.jpg',
    hoverPhoto: 'assets/images/gmaps/lily-candles-towels.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    useCutoutThumb: false,
    description: 'Extended couples Head Spa and full-body massage package for two guests ($160 per person) in our private room.',
    highlights: [
      'Extended couples package for 2 guests ($160/person)',
      'Combines Golden Ring Waterfall Head Spa and body massage',
      'Warm massage oil and steamed towel service',
      'Private side-by-side suite reservation'
    ]
  },
  {
    id: 'pkg-2226',
    name: 'Couple 60 minutes package 30 mins head spa plus 30 mins facial',
    category: 'Couple Head Spa',
    duration: '2 hours • 2 services',
    timeBucket: 'medium',
    focusBucket: 'facial',
    price: '$280',
    isCouples: true,
    photo: 'assets/images/gmaps/facial-mask-brushes.jpg',
    hoverPhoto: 'assets/images/gmaps/white-jade-towel-roses.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    useCutoutThumb: false,
    description: 'Couples package for two guests: each guest receives a 30-minute Head Spa plus a 30-minute refreshing facial ($140 per guest).',
    highlights: [
      'For 2 guests ($140/person) side-by-side',
      '30-minute Golden Ring Waterfall Head Spa for each guest',
      '30-minute facial cleanse, steam, and mask for each guest',
      'Great for couples, friends, or family visits'
    ]
  },
  {
    id: 'pkg-2227',
    name: 'Couple 90 minutes package 60 Mins head spa plus 30 massage',
    category: 'Couple Head Spa',
    duration: '3 hours • 2 services',
    timeBucket: 'long',
    focusBucket: 'head',
    price: '$320',
    isCouples: true,
    photo: 'assets/images/gmaps/aromatherapy-jade-suite.jpg',
    hoverPhoto: 'assets/images/curated/female-therapist-oil-massage.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    useCutoutThumb: false,
    description: 'Each guest enjoys a full 60-minute Golden Ring Waterfall Head Spa plus a 30-minute relaxing massage ($160 per guest).',
    highlights: [
      '90 minutes of service per guest ($160/person · $320 total)',
      'Full 60-minute signature Golden Ring Waterfall Head Spa each',
      '30-minute relaxing body massage each',
      'Private room for two'
    ]
  },
  {
    id: 'pkg-2228',
    name: 'Couple 90 minutes package 60 Mins head spa plus 30 facial',
    category: 'Couple Head Spa',
    duration: '3 hours • 2 services',
    timeBucket: 'long',
    focusBucket: 'facial',
    price: '$360',
    isCouples: true,
    photo: 'assets/images/gmaps/korean-facial-treatment.jpg',
    hoverPhoto: 'assets/images/gmaps/white-jade-towel-roses.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    useCutoutThumb: false,
    description: 'Our premier couples package: each guest receives a full 60-minute Head Spa plus a 30-minute refreshing Facial ($180 per guest).',
    highlights: [
      '90 minutes per guest ($180/person · $360 total for two)',
      'Full 60-minute Golden Ring Waterfall Head Spa for both guests',
      '30-minute facial cleanse, warm steam, and mask for both guests',
      'Side-by-side private suite experience'
    ]
  },

  /* 5. Facial (4) */
  {
    id: 'srv-128485',
    name: '30 Mins Korean Facial',
    category: 'Facial',
    duration: '30 min',
    timeBucket: 'short',
    focusBucket: 'facial',
    price: '$80',
    isCouples: false,
    photo: 'assets/images/gmaps/facial-mask-brushes.jpg',
    hoverPhoto: 'assets/images/gmaps/korean-facial-treatment.jpg',
    cutout: 'assets/images/ai/cutout-korean-facial.png',
    useCutoutThumb: false,
    description: '30-minute Korean facial with warm steam, gentle facial cleansing, soothing brush mask application, and moisturizing care.',
    highlights: [
      'Gentle facial cleansing with warm steam',
      'Pore care and light exfoliation',
      'Soothing facial mask applied with soft brushes',
      'Hydrating serum and moisturizer finish'
    ]
  },
  {
    id: 'srv-128491',
    name: '60 Mins Korean Facial',
    category: 'Facial',
    duration: '1 hour',
    timeBucket: 'medium',
    focusBucket: 'facial',
    price: '$120',
    isCouples: false,
    photo: 'assets/images/gmaps/korean-facial-treatment.jpg',
    hoverPhoto: 'assets/images/gmaps/facial-mask-brushes.jpg',
    cutout: 'assets/images/ai/cutout-korean-facial.png',
    useCutoutThumb: true,
    description: 'Full 60-minute Korean facial featuring deep cleansing with warm steam, pore care, soothing mask, and relaxing face, neck, and shoulder massage.',
    highlights: [
      'Full 60-minute Korean skincare facial',
      'Warm steam, skin consultation, and gentle pore care',
      'Custom soothing mask and deep hydration',
      'Relaxing face, neck, and shoulder massage'
    ]
  },
  {
    id: 'srv-128498',
    name: '30 Mins Gentlemans Facial',
    category: 'Facial',
    duration: '30 min',
    timeBucket: 'short',
    focusBucket: 'facial',
    price: '$80',
    isCouples: false,
    photo: 'assets/images/official/facial-brush-official.jpg',
    hoverPhoto: 'assets/images/gmaps/facial-mask-brushes.jpg',
    cutout: 'assets/images/ai/cutout-korean-facial.png',
    useCutoutThumb: false,
    description: '30-minute Gentleman’s Facial with warm towel steam, deep pore cleansing, soothing mask, and lightweight hydration.',
    highlights: [
      'Tailored for men’s skin care and comfort',
      'Warm steamed towel compress and deep pore cleanser',
      'Soothing mask to calm skin sensitivity',
      'Clean, refreshing moisturizer finish in 30 minutes'
    ]
  },
  {
    id: 'srv-128502',
    name: '60 Mins Gentlemans Facial',
    category: 'Facial',
    duration: '1 hour',
    timeBucket: 'medium',
    focusBucket: 'facial',
    price: '$120',
    isCouples: false,
    photo: 'assets/images/official/scalp-treatment-official.jpg',
    hoverPhoto: 'assets/images/official/facial-brush-official.jpg',
    cutout: 'assets/images/ai/cutout-korean-facial.png',
    useCutoutThumb: false,
    description: 'Complete 60-minute Gentleman’s Facial tailored for men’s skin with deep cleansing, warm steam, purifying mask, and face and neck massage.',
    highlights: [
      'Full 60-minute deep-cleansing facial for men',
      'Exfoliation, warm steam, and pore cleansing',
      'Purifying mask and hydrating finish',
      'Includes relaxing face, temple, neck, and shoulder massage'
    ]
  },

  /* 6. Massage (3) */
  {
    id: 'srv-128486',
    name: '30 Mins Massage',
    category: 'Massage',
    duration: '30 min',
    timeBucket: 'short',
    focusBucket: 'body',
    price: '$60',
    isCouples: false,
    photo: 'assets/images/official/head-massage-official.jpg',
    hoverPhoto: 'assets/images/curated/female-therapist-oil-massage.jpg',
    cutout: 'assets/images/ai/cutout-head-massage-pkg.png',
    useCutoutThumb: false,
    description: 'Focused 30-minute massage targeting muscle tension in the neck, shoulders, and back.',
    highlights: [
      'Targeted 30-minute relief for neck, shoulders, and back',
      'Light, medium, or firm pressure tailored to your preference',
      'Warm massage oil and steamed towel finish',
      'Easy to pair with any Head Spa or Facial'
    ]
  },
  {
    id: 'srv-128494',
    name: '60 Mins Massage',
    category: 'Massage',
    duration: '1 hour',
    timeBucket: 'medium',
    focusBucket: 'body',
    price: '$80',
    isCouples: false,
    photo: 'assets/images/official/back-massage-official.jpg',
    hoverPhoto: 'assets/images/curated/female-therapist-oil-massage.jpg',
    cutout: 'assets/images/ai/cutout-head-massage-pkg.png',
    useCutoutThumb: false,
    description: '60-minute full-body massage with warm oil and customized pressure to ease muscle tension and help you unwind.',
    highlights: [
      '60-minute full-body massage in a private room',
      'Tailored pressure across back, shoulders, legs, arms, and neck',
      'Warm massage oil and comfortable heated table',
      'Hot towel finish for deep relaxation'
    ]
  },
  {
    id: 'srv-128496',
    name: '90 Mins Massage',
    category: 'Massage',
    duration: '1 hour 30 min',
    timeBucket: 'long',
    focusBucket: 'body',
    price: '$130',
    isCouples: false,
    photo: 'assets/images/curated/hot-stone-orchid-massage.jpg',
    hoverPhoto: 'assets/images/curated/female-therapist-oil-massage.jpg',
    cutout: 'assets/images/ai/cutout-head-massage-pkg.png',
    useCutoutThumb: false,
    description: '90-minute full-body massage with extra time for tight muscles in the back, shoulders, neck, hands, and feet.',
    highlights: [
      'Extended 90-minute full-body massage',
      'Extra time for stubborn knots in the back, hips, and shoulders',
      'Warm massage oil and soothing hot towel compresses',
      'Unhurried recovery session'
    ]
  },

  /* 7. Couple Massage (2) */
  {
    id: 'pkg-2229',
    name: '60 Mins Couple Massage',
    category: 'Couple Massage',
    duration: '1 hour • 2 services',
    timeBucket: 'medium',
    focusBucket: 'body',
    price: '$160',
    isCouples: true,
    photo: 'assets/images/gmaps/lily-candles-towels.jpg',
    hoverPhoto: 'assets/images/curated/female-therapist-oil-massage.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    useCutoutThumb: false,
    description: 'Includes 60 Mins Couple Massage for 1st guest ($80) + 2nd guest ($80) side-by-side in a private room.',
    highlights: [
      '60-minute side-by-side full-body massage for 2 guests ($80/person)',
      'Two massage therapists working simultaneously in a private room',
      'Customized pressure and warm oil for each guest',
      'Warm towel finish'
    ]
  },
  {
    id: 'pkg-2230',
    name: '90 Mins Couple Massage',
    category: 'Couple Massage',
    duration: '1 hour 30 min • 2 services',
    timeBucket: 'long',
    focusBucket: 'body',
    price: '$260',
    isCouples: true,
    photo: 'assets/images/gmaps/aromatherapy-jade-suite.jpg',
    hoverPhoto: 'assets/images/curated/hot-stone-orchid-massage.jpg',
    cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
    useCutoutThumb: true,
    description: 'Includes 90 Mins Couple Massage for 1st guest ($130) + 2nd guest ($130) for extended full-body relaxation together.',
    highlights: [
      '90-minute side-by-side full-body massage for 2 guests ($130/person)',
      'Extra attention to back, shoulders, neck, legs, and feet',
      'Private couples room with warm oil and hot towels',
      'Our longest couples massage session'
    ]
  },

  /* 8. Foot Massage (2) */
  {
    id: 'srv-128487',
    name: '30 Mins Foot Massage',
    category: 'Foot Massage',
    duration: '30 min',
    timeBucket: 'short',
    focusBucket: 'body',
    price: '$40',
    isCouples: false,
    photo: 'assets/images/gmaps/foot-reflexology-lounge.jpg',
    hoverPhoto: 'assets/images/gmaps/aromatherapy-oils-candles.jpg',
    cutout: 'assets/images/ai/cutout-foot-reflexology.png',
    useCutoutThumb: false,
    description: '30-minute foot reflexology session in our comfortable leather recliner lounge—great after theme parks or travel.',
    highlights: [
      'Plush leather recliner lounge at 3273 Oxford Dr',
      'Warm foot soak and soothing arch and heel massage',
      'Relieves tired, aching feet in 30 minutes',
      'Great express add-on or standalone service ($40)'
    ]
  },
  {
    id: 'srv-128492',
    name: '60 Mins Foot Massage',
    category: 'Foot Massage',
    duration: '1 hour',
    timeBucket: 'medium',
    focusBucket: 'body',
    price: '$60',
    isCouples: false,
    photo: 'assets/images/gmaps/foot-reflexology-lounge.jpg',
    hoverPhoto: 'assets/images/gmaps/lily-candles-towels.jpg',
    cutout: 'assets/images/ai/cutout-foot-reflexology.png',
    useCutoutThumb: true,
    description: '60-minute foot and lower-leg reflexology massage in our leather recliner lounge to revive tired feet and calves.',
    highlights: [
      'Full 60-minute foot and lower-leg massage in leather recliners',
      'Warm foot soak followed by reflexology pressure-point work',
      'Heel, arch, ankle, and calf massage with warm towel wrap',
      'Ideal after long days on your feet in Kissimmee'
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
    caption: 'Korean Facial with Warm Steam & Skin Care',
    meta: '30 / 60 Mins Facial · $80–$120'
  },
  {
    src: 'assets/images/gmaps/facial-mask-brushes.jpg',
    category: 'facial',
    caption: 'Soothing Facial Mask Application',
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
let activeCategory = 'popular';
let activeGuestScope = 'all';
let searchQuery = '';
let isMenuExpanded = false;
let activePhotoFilter = 'all';
let visiblePlates = [...ATELIER_PLATES];
let currentLightboxIndex = 0;

/* Matcher State */
let matchGuests = 'all';
let matchFocus = 'all';
let matchTime = 'all';

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
        ? '3273 Oxford Dr #2, Kissimmee, FL · Open now until 10:00 pm'
        : '3273 Oxford Dr #2, Kissimmee, FL · Open daily 10:00 am – 10:00 pm';
    }
    if (visitEl) {
      visitEl.textContent = isOpen
        ? 'Open now · Monday through Sunday, 10:00 am – 10:00 pm ET'
        : 'Open Monday through Sunday, 10:00 am – 10:00 pm Eastern Time';
    }
  } catch (_) {
    /* Fallback to static copy */
  }
}

/* 2. Hero Arch Vessel Scene Switcher */
function initHeroStage() {
  const mainPhoto = document.getElementById('heroMainPhoto');
  const captionTitle = document.getElementById('heroCaptionTitle');
  const captionSub = document.getElementById('heroCaptionSub');
  const captionPrice = document.getElementById('heroCaptionPrice');
  const inspectBtn = document.getElementById('heroInspectBtn');
  const cutoutImg = document.getElementById('heroCutoutImg');
  const cutoutTitle = document.getElementById('heroCutoutTitle');
  const cutoutNote = document.getElementById('heroCutoutNote');
  const sceneButtons = document.querySelectorAll('[data-hero-scene]');

  if (!sceneButtons.length) return;

  sceneButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-hero-scene'), 10);
      const scene = HERO_SCENES[idx];
      if (!scene) return;

      sceneButtons.forEach((b) => {
        const isCurrent = b === btn;
        b.classList.toggle('active', isCurrent);
        b.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
      });

      const vessel = mainPhoto ? mainPhoto.closest('.hero-arch-vessel') : null;
      if (vessel) vessel.classList.add('is-switching');

      setTimeout(() => {
        if (mainPhoto) {
          mainPhoto.src = scene.photo;
          mainPhoto.alt = scene.photoAlt;
        }
        if (captionTitle) captionTitle.textContent = scene.title;
        if (captionSub) captionSub.textContent = scene.sub;
        if (captionPrice) captionPrice.textContent = scene.price;
        if (inspectBtn) inspectBtn.setAttribute('data-open-service', scene.serviceId);
        if (cutoutImg) {
          cutoutImg.src = scene.cutout;
          cutoutImg.alt = scene.cutoutTitle;
        }
        if (cutoutTitle) cutoutTitle.textContent = scene.cutoutTitle;
        if (cutoutNote) cutoutNote.textContent = scene.cutoutNote;

        if (vessel) vessel.classList.remove('is-switching');
      }, 140);
    });
  });
}

/* 3. Interactive 3-Tap Service Matcher */
function initRitualMatcher() {
  const grid = document.getElementById('matcherResultsGrid');
  const countText = document.getElementById('matcherCountText');
  const resetBtn = document.getElementById('matcherResetBtn');
  const jumpLink = document.getElementById('matcherJumpToMenu');

  if (!grid) return;

  function renderMatches() {
    const matches = OFFICIAL_SERVICES.filter((srv) => {
      const okGuests =
        matchGuests === 'all' ||
        (matchGuests === 'couples' && srv.isCouples) ||
        (matchGuests === 'solo' && !srv.isCouples);
      const okFocus = matchFocus === 'all' || srv.focusBucket === matchFocus;
      const okTime = matchTime === 'all' || srv.timeBucket === matchTime;
      return okGuests && okFocus && okTime;
    });

    const isDefault = matchGuests === 'all' && matchFocus === 'all' && matchTime === 'all';
    const displayList = isDefault
      ? [
          OFFICIAL_SERVICES.find((s) => s.id === 'srv-128489'),
          OFFICIAL_SERVICES.find((s) => s.id === 'srv-138178'),
          OFFICIAL_SERVICES.find((s) => s.id === 'srv-128491'),
          OFFICIAL_SERVICES.find((s) => s.id === 'pkg-2222')
        ].filter(Boolean)
      : matches.slice(0, 4);

    if (countText) {
      if (isDefault) {
        countText.textContent = 'Showing 4 popular starting points from our 30 official treatments';
      } else if (matches.length === 0) {
        countText.textContent = 'No exact match for that combination — try broadening session length or service type';
      } else {
        countText.textContent = `Found ${matches.length} matching ${matches.length === 1 ? 'service' : 'services'} (showing top ${displayList.length})`;
      }
    }

    if (displayList.length === 0) {
      grid.innerHTML = `
        <div class="match-card" style="grid-column: 1 / -1;">
          <p>No service matched all three filters simultaneously. Tap "Reset filters" to explore all 30 treatments.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = displayList
      .map(
        (srv) => `
        <article class="match-card">
          <div class="match-card-top">
            <img src="${srv.photo}" alt="${srv.name}" class="match-card-thumb" />
            <div class="match-card-meta">
              <span>${srv.category} · ${srv.duration}</span>
              <h3>${srv.name}</h3>
            </div>
          </div>
          <div class="match-card-bottom">
            <span class="match-card-price">${srv.price}</span>
            <div class="match-card-actions">
              <button type="button" class="match-btn-info" data-open-service="${srv.id}">Details</button>
              <a href="${BYCHRONOS_BOOKING_URL}" target="_blank" rel="noopener noreferrer" class="match-btn-book">Book</a>
            </div>
          </div>
        </article>
      `
      )
      .join('');
  }

  document.querySelectorAll('[data-match-guests]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-match-guests]').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      matchGuests = btn.getAttribute('data-match-guests') || 'all';
      renderMatches();
    });
  });

  document.querySelectorAll('[data-match-focus]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-match-focus]').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      matchFocus = btn.getAttribute('data-match-focus') || 'all';
      renderMatches();
    });
  });

  document.querySelectorAll('[data-match-time]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-match-time]').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      matchTime = btn.getAttribute('data-match-time') || 'all';
      renderMatches();
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      matchGuests = 'all';
      matchFocus = 'all';
      matchTime = 'all';
      document.querySelectorAll('[data-match-guests], [data-match-focus], [data-match-time]').forEach((b) => {
        const isAll =
          b.getAttribute('data-match-guests') === 'all' ||
          b.getAttribute('data-match-focus') === 'all' ||
          b.getAttribute('data-match-time') === 'all';
        b.classList.toggle('active', isAll);
      });
      renderMatches();
    });
  }

  if (jumpLink) {
    jumpLink.addEventListener('click', () => {
      if (matchGuests !== 'all') {
        activeGuestScope = matchGuests;
        document.querySelectorAll('.mode-btn').forEach((b) => {
          b.classList.toggle('active', b.getAttribute('data-guest-scope') === activeGuestScope);
        });
      }
      if (matchFocus === 'shiseido') activeCategory = 'Special Menu';
      else if (matchFocus === 'facial') activeCategory = 'Facial';
      else activeCategory = 'popular';
      isMenuExpanded = false;
      renderTariffRail();
      renderTariffLedger();
    });
  }

  renderMatches();
}

/* 4. Render Six Guest Favorites Overview */
function renderSignaturesPatchwork() {
  const container = document.getElementById('signaturesPatchwork');
  if (!container) return;

  container.innerHTML = STAGE_SIGNATURES.map((sig) => {
    const fullService = OFFICIAL_SERVICES.find((s) => s.id === sig.serviceId);
    const desc = fullService ? fullService.description : sig.sub;
    return `
      <article class="apothecary-item">
        <div>
          <div class="apothecary-stage">
            <img src="${sig.cutout}" alt="${sig.title}" class="apothecary-cutout" />
            <div class="apothecary-room-cameo" title="Real room view at 3273 Oxford Dr">
              <img src="${sig.photo}" alt="${sig.photoAlt}" />
            </div>
          </div>
          <div class="apothecary-body">
            <div class="apothecary-meta-line">
              <span>${sig.cutoutLabel}</span>
              <span>${sig.duration}</span>
            </div>
            <div class="apothecary-title-row">
              <h3 class="apothecary-title">${sig.title}</h3>
              <span class="apothecary-price">${sig.price}</span>
            </div>
            <p class="apothecary-desc">${desc}</p>
          </div>
        </div>
        <div class="apothecary-actions">
          <button type="button" class="btn-secondary btn-sm" data-open-service="${sig.serviceId}">
            View details
          </button>
          <a href="${BYCHRONOS_BOOKING_URL}" target="_blank" rel="noopener noreferrer" class="btn-primary btn-sm">
            Book (${sig.price})
          </a>
        </div>
      </article>
    `;
  }).join('');
}

/* 5. Render Curated Treatment Menu Cards (Compact 6-card default + Category / Solo / Couples filters) */
function getFilteredServices() {
  const q = searchQuery.trim().toLowerCase();

  return OFFICIAL_SERVICES.filter((srv) => {
    const matchesGuest =
      activeGuestScope === 'all' ||
      (activeGuestScope === 'couples' && srv.isCouples) ||
      (activeGuestScope === 'solo' && !srv.isCouples);

    const matchesQuery =
      !q ||
      srv.name.toLowerCase().includes(q) ||
      srv.category.toLowerCase().includes(q) ||
      srv.description.toLowerCase().includes(q) ||
      srv.price.toLowerCase().includes(q) ||
      srv.duration.toLowerCase().includes(q);

    if (!matchesGuest || !matchesQuery) return false;

    if (q) return true;
    if (activeCategory === 'all') return true;
    if (activeCategory === 'popular') {
      if (activeGuestScope === 'couples') return srv.isCouples;
      if (activeGuestScope === 'solo') return POPULAR_SERVICE_IDS.includes(srv.id) || !srv.isCouples;
      return POPULAR_SERVICE_IDS.includes(srv.id);
    }
    return srv.category === activeCategory;
  });
}

function renderTariffRail() {
  const rail = document.getElementById('tariffCategoryRail');
  if (!rail) return;

  rail.innerHTML = OFFICIAL_CATEGORIES.map((cat) => {
    const count =
      cat.id === 'popular'
        ? 6
        : cat.id === 'all'
        ? OFFICIAL_SERVICES.length
        : OFFICIAL_SERVICES.filter((s) => s.category === cat.id).length;
    const isActive = activeCategory === cat.id;
    return `
      <button
        type="button"
        class="cat-pill ${isActive ? 'active' : ''}"
        role="tab"
        aria-selected="${isActive ? 'true' : 'false'}"
        data-cat-id="${cat.id}"
      >
        <span>${cat.label} (${count})</span>
      </button>
    `;
  }).join('');
}

function renderTariffLedger() {
  const ledgerBody = document.getElementById('tariffLedgerBody');
  const countEl = document.getElementById('ritualsShowingCount');
  const expandBtn = document.getElementById('toggleExpandMenuBtn');
  if (!ledgerBody) return;

  const filtered = getFilteredServices();
  if (filtered.length === 0) {
    ledgerBody.innerHTML = `
      <div class="ritual-card" style="grid-column: 1 / -1; padding: 2rem;">
        <p>No services matched your search. Clear the search box or select "Popular (6)" to browse our featured services.</p>
      </div>
    `;
    if (countEl) countEl.textContent = '0 matching services';
    if (expandBtn) expandBtn.hidden = true;
    return;
  }

  const maxCompact = 6;
  const shouldTruncate = !isMenuExpanded && filtered.length > maxCompact;
  const visibleItems = shouldTruncate ? filtered.slice(0, maxCompact) : filtered;

  if (countEl) {
    countEl.textContent = `Showing ${visibleItems.length} of ${filtered.length} matching ${
      filtered.length === 1 ? 'service' : 'services'
    } (out of 30 total treatments)`;
  }

  if (expandBtn) {
    if (filtered.length > maxCompact) {
      expandBtn.hidden = false;
      expandBtn.textContent = isMenuExpanded
        ? 'Show fewer services (6)'
        : `Show all ${filtered.length} matching services`;
    } else {
      expandBtn.hidden = true;
    }
  }

  ledgerBody.innerHTML = visibleItems
    .map((srv) => {
      const isFeatured = POPULAR_SERVICE_IDS.includes(srv.id);
      const badgeClass =
        srv.category === 'Special Menu'
          ? 'badge-gold'
          : srv.isCouples
          ? 'badge-rose'
          : 'badge-jade';
      const badgeLabel =
        srv.category === 'Special Menu'
          ? 'Shiseido Special Menu'
          : srv.isCouples
          ? 'Private Couples Suite'
          : srv.category;
      const unitLabel = srv.isCouples ? 'For 2 Guests' : 'Solo Sanctuary';
      const hoverSrc = srv.hoverPhoto || srv.photo;

      return `
        <article class="ritual-card ${isFeatured ? 'featured-ritual' : ''}">
          <div class="ritual-media">
            <img
              src="${srv.photo}"
              alt="${srv.name}"
              class="ritual-img-primary"
              loading="lazy"
            />
            <img
              src="${hoverSrc}"
              alt="${srv.name} room view"
              class="ritual-img-hover"
              loading="lazy"
            />
            <div class="ritual-badges">
              <span class="badge ${badgeClass}">${badgeLabel}</span>
              <span class="badge badge-duration">${srv.duration}</span>
            </div>
            <div class="ritual-price-overlay">
              <span class="price-amount">${srv.price}</span>
              <span class="price-unit">${unitLabel}</span>
            </div>
          </div>

          <div class="ritual-content">
            <div class="ritual-kicker">${srv.category.toUpperCase()} · ${srv.duration.toUpperCase()}</div>
            <h3 class="ritual-title">${srv.name}</h3>
            <p class="ritual-desc">${srv.description}</p>

            <ul class="ritual-highlights">
              ${(srv.highlights || []).map((h) => `<li>${h}</li>`).join('')}
            </ul>

            <div class="ritual-actions">
              <button type="button" class="btn-text-detail" data-open-service="${srv.id}">
                <span>View Service Details</span>
              </button>
              <div class="ritual-cta-group">
                <a
                  href="${BYCHRONOS_BOOKING_URL}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-primary btn-sm"
                >
                  <span>Book Now</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join('');
}

function initTariffControls() {
  const rail = document.getElementById('tariffCategoryRail');
  const searchInput = document.getElementById('tariffSearchInput');
  const guestBtns = document.querySelectorAll('.mode-btn');
  const expandBtn = document.getElementById('toggleExpandMenuBtn');

  renderTariffRail();
  renderTariffLedger();

  if (rail) {
    rail.addEventListener('click', (e) => {
      const btn = e.target.closest('.cat-pill');
      if (!btn) return;
      activeCategory = btn.getAttribute('data-cat-id') || 'popular';
      isMenuExpanded = false;
      renderTariffRail();
      renderTariffLedger();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value || '';
      isMenuExpanded = false;
      renderTariffLedger();
    });
  }

  guestBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      guestBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeGuestScope = btn.getAttribute('data-guest-scope') || 'all';
      if (activeGuestScope === 'couples' && activeCategory === 'popular') {
        activeCategory = 'all';
      } else if (activeGuestScope === 'all' && activeCategory === 'all') {
        activeCategory = 'popular';
      }
      isMenuExpanded = false;
      renderTariffRail();
      renderTariffLedger();
    });
  });

  if (expandBtn) {
    expandBtn.addEventListener('click', () => {
      isMenuExpanded = !isMenuExpanded;
      renderTariffLedger();
    });
  }

  document.querySelectorAll('[data-jump-cat]').forEach((link) => {
    link.addEventListener('click', () => {
      const targetCat = link.getAttribute('data-jump-cat');
      if (targetCat) {
        activeCategory = targetCat;
        activeGuestScope = 'all';
        isMenuExpanded = false;
        guestBtns.forEach((b) => b.classList.toggle('active', b.getAttribute('data-guest-scope') === 'all'));
        renderTariffRail();
        renderTariffLedger();
      }
    });
  });
}

/* 6. Lookbook Gallery & Native <dialog> Lightbox */
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
      <figure class="lookbook-item" data-plate-index="${idx}" tabindex="0" role="button" aria-label="View larger: ${plate.caption}">
        <img src="${plate.src}" alt="${plate.caption}" loading="lazy" />
        <figcaption class="lookbook-caption">
          <span>${plate.caption}</span>
          <strong>${plate.meta}</strong>
        </figcaption>
      </figure>
    `
    )
    .join('');
}

function attachDialogLightDismissFallback(dialog) {
  if (!dialog) return;
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    dialog.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const isDialogContent =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (isDialogContent) return;
      dialog.close();
    });
  }
}

function initAtelierGallery() {
  const tabs = document.querySelectorAll('.lookbook-tab');
  const grid = document.getElementById('atelierPlatesGrid');
  const lightbox = document.getElementById('plateLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  renderAtelierPlates();
  attachDialogLightDismissFallback(lightbox);

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
    if (!lightbox.open) {
      lightbox.showModal();
    }
  }

  if (grid) {
    grid.addEventListener('click', (e) => {
      const fig = e.target.closest('.lookbook-item');
      if (!fig) return;
      const idx = parseInt(fig.getAttribute('data-plate-index'), 10);
      if (!Number.isNaN(idx)) showLightboxPlate(idx);
    });

    grid.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const fig = e.target.closest('.lookbook-item');
        if (!fig) return;
        e.preventDefault();
        const idx = parseInt(fig.getAttribute('data-plate-index'), 10);
        if (!Number.isNaN(idx)) showLightboxPlate(idx);
      }
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', () => lightbox && lightbox.close());
  if (prevBtn) prevBtn.addEventListener('click', () => showLightboxPlate(currentLightboxIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showLightboxPlate(currentLightboxIndex + 1));

  document.addEventListener('keydown', (e) => {
    if (lightbox && lightbox.open) {
      if (e.key === 'ArrowLeft') showLightboxPlate(currentLightboxIndex - 1);
      if (e.key === 'ArrowRight') showLightboxPlate(currentLightboxIndex + 1);
    }
  });
}

/* 7. Native <dialog> Treatment Detail Modal */
function openServiceDrawer(serviceId) {
  const srv = OFFICIAL_SERVICES.find((s) => s.id === serviceId);
  const dialog = document.getElementById('serviceDetailDialog');
  if (!srv || !dialog) return;

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
    cutoutEl.alt = `${srv.name} apothecary object`;
  }
  if (titleEl) titleEl.textContent = srv.name;
  if (priceEl) priceEl.textContent = srv.price;
  if (durEl) durEl.textContent = `Duration: ${srv.duration} · 3273 Oxford Dr #2, Kissimmee, FL`;
  if (descEl) descEl.textContent = srv.description;
  if (listEl) {
    listEl.innerHTML = (srv.highlights || []).map((h) => `<li>${h}</li>`).join('');
  }

  if (!dialog.open) {
    dialog.showModal();
  }
}

function initServiceDrawerEvents() {
  const dialog = document.getElementById('serviceDetailDialog');
  const closeBtn = document.getElementById('drawerCloseBtn');

  attachDialogLightDismissFallback(dialog);

  if (closeBtn && dialog) {
    closeBtn.addEventListener('click', () => dialog.close());
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-service]');
    if (!trigger) return;
    const id = trigger.getAttribute('data-open-service');
    if (id) {
      e.preventDefault();
      openServiceDrawer(id);
    }
  });
}

/* 8. Mobile Navigation Drawer */
function initMobileNav() {
  const navToggle = document.getElementById('mobileNavToggle');
  const navDrawer = document.getElementById('mobileNavDrawer');
  if (!navToggle || !navDrawer) return;

  navToggle.addEventListener('click', () => {
    const isHidden = navDrawer.hasAttribute('hidden');
    if (isHidden) {
      navDrawer.removeAttribute('hidden');
      navToggle.setAttribute('aria-expanded', 'true');
    } else {
      navDrawer.setAttribute('hidden', '');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  navDrawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navDrawer.setAttribute('hidden', '');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateKissimmeeHours();
  initHeroStage();
  initRitualMatcher();
  renderSignaturesPatchwork();
  initTariffControls();
  initAtelierGallery();
  initServiceDrawerEvents();
  initMobileNav();
});
