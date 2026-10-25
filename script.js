/**
 * JADE HEAD SPA & BEAUTY — INTERACTIVE SANCTUARY ENGINE
 * Powers: Solo/Couples Pricing Toggle, Category Filters, 5-Stage Choreography,
 * Bespoke Matchmaker, Ritual Detail Modal, Custom Ritual Bag Drawer,
 * Live Gift Card Atelier, Lookbook Lightbox, and FAQ Accordion.
 */

(function () {
  'use strict';

  /* =========================================================================
     1. CATALOG DATA FOR MODALS, MATCHMAKER & RITUAL BAG
     ========================================================================= */
  const RITUAL_CATALOG = {
    'luxury-hair-scalp': {
      id: 'luxury-hair-scalp',
      title: 'Luxury Hair Scalp & 24K Gold Facial Ritual',
      kicker: 'CROWN JEWEL · 90 MINUTES OF PURE BLISS',
      duration: 90,
      soloPrice: 168,
      couplesPrice: 320,
      priceLabel: 'Solo $168 · Couples Suite $320',
      photo: 'assets/images/gmaps/waterfall-therapist-suite.jpg',
      cutout: 'assets/images/ai/cutout-golden-halo-arch.png',
      desc: 'Our signature 90-minute crown-to-toe sanctuary ritual. Combines high-definition microscopic scalp diagnostics, 24K Golden Waterfall Halo hydro-therapy, organic botanical steam, a complete Korean Glass-Skin facial with 24K gold contour mask, and hot basalt stone massage.',
      steps: [
        '200x HD Microscopic Scalp & Follicle Analysis (Before & After comparison)',
        'Aromatic Essential Oil Inhalation & Dry Cranial Meridian Acupressure',
        'Deep Botanical Scalp Exfoliation & Cloud-Foam Detox Massage',
        '24K Golden Waterfall Halo Warm Hydro-Therapy & Herbal Mist Steam',
        'Full Korean Glass-Skin Facial Cleanse + Twin-Brush 24K Gold Hydro-Jelly Mask',
        'Hot Volcanic Basalt Stone Neck, Shoulder, Arm, Hand & Foot Massage',
        'Conditioning Hair Mask, Post-Scan Verification & Complimentary Silk Blow-Dry + Organic Tea'
      ]
    },
    'shiseido-head-spa': {
      id: 'shiseido-head-spa',
      title: 'Shiseido Sublimic Couture Head Spa',
      kicker: 'AUTHENTIC TOKYO SALON FORMULATIONS · 75 MINS',
      duration: 75,
      soloPrice: 138,
      couplesPrice: 260,
      priceLabel: 'Solo $138 · Couples Suite $260',
      photo: 'assets/images/gmaps/scalp-foam-massage.jpg',
      cutout: 'assets/images/ai/cutout-shiseido-ritual.png',
      desc: 'Powered 100% by authentic Shiseido Sublimic salon care imported from Japan. Purifies congested follicles, restores bounce and mirror-shine to dull strands, and melts upper-body tension.',
      steps: [
        ' Personalized Scalp Consultation & Shiseido Sublimic Elixir Selection',
        'Shiseido Purifying Sebum & Buildup Follicle Exfoliation',
        'Rich Cloud-Foam Cranial Acupressure & Temple Tension Release',
        'Warm 24K Golden Waterfall Halo Circulation Rinse & Herbal Steam',
        'Express Hydrating Facial Cleanse & Soothing Botanical Mist',
        'Neck, Shoulder & Décolleté Aroma Oil Massage',
        'Shiseido Sublimic Hair Mask Seal & Complimentary Blow-Dry Refresh'
      ]
    },
    'korean-facial-care': {
      id: 'korean-facial-care',
      title: 'Bespoke Korean Glass-Skin Facial',
      kicker: 'SEOUL ESTHETIC SCIENCE · 60 MINS',
      duration: 60,
      soloPrice: 110,
      couplesPrice: 210,
      priceLabel: 'Solo $110 · Couples Suite $210',
      photo: 'assets/images/gmaps/korean-facial-treatment.jpg',
      cutout: 'assets/images/ai/cutout-korean-facial.png',
      desc: 'Achieve luminous, poreless glass skin with our multi-step Korean facial. Performed by our gentle licensed estheticians using enzymatic botanicals, ultrasonic pore cleansing, twin-brush masks, and cryo-jade sculpting.',
      steps: [
        'Camellia Oil & Micro-Enzyme Double Cleanse Under Warm Ozone Steam',
        'Gentle Ultrasonic Spatula Pore Extraction & Blackhead Purification',
        'High-Potency Hyaluronic & Niacinamide Glass-Skin Ampoule Infusion',
        'Sculpting Facial, Jawline & Buccal Meridian Lift Massage',
        'Twin-Brush Custom Hydro-Jelly or 24K Gold Illuminating Contour Mask',
        'Chilled Jade Gua Sha Lymphatic Drainage + Neck, Shoulder & Scalp Massage'
      ]
    },
    'head-spa-body-combo': {
      id: 'head-spa-body-combo',
      title: 'The Crown & Body Harmony Duet',
      kicker: '45M WATERFALL HEAD SPA + 45M BODY MASSAGE · 90 MINS',
      duration: 90,
      soloPrice: 150,
      couplesPrice: 290,
      priceLabel: 'Solo $150 · Couples Suite $290',
      photo: 'assets/images/gmaps/facial-mask-brushes.jpg',
      cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
      desc: 'The ultimate dual-therapy escape combining 45 minutes of full-body hot stone and aroma oil massage with 45 minutes of our signature 24K Golden Waterfall Head Spa.',
      steps: [
        '45-Minute Full-Body Massage (Choice of Swedish, Deep Tissue, or Shiatsu)',
        'Warm Volcanic Basalt Stones Along Back, Shoulders & Neck',
        'Transition to Ergonomic Waterfall Head Spa Basin',
        'Botanical Foam Scalp Cleanse & Cranial Meridian Acupressure',
        '24K Golden Waterfall Halo Warm Water Immersion',
        'Twin-Brush Express Hydrating Facial Mask & Light Blow-Dry Finish'
      ]
    },
    'relaxing-head-spa': {
      id: 'relaxing-head-spa',
      title: 'Relaxing Waterfall Head Spa',
      kicker: 'ESSENTIAL HYDRO-THERAPY ESCAPE · 60 MINS',
      duration: 60,
      soloPrice: 95,
      couplesPrice: 180,
      priceLabel: 'Solo $95 · Couples Suite $180',
      photo: 'assets/images/gmaps/waterfall-halo-hero.jpg',
      cutout: 'assets/images/ai/cutout-golden-halo-arch.png',
      desc: 'Our classic 60-minute Korean & Japanese head spa ritual. Ideal for first-time guests seeking deep cranial relaxation, clean and glossy hair, and a peaceful nervous-system reset.',
      steps: [
        'Aromatic Welcome & Cranial Tension Point Release',
        'Organic Botanical Shampoo Lather & 20-Point Scalp Massage',
        '24K Golden Waterfall Halo Warm Water Cascade',
        'Nourishing Hair Conditioning Steam & Express Facial Cleanse',
        'Neck & Shoulder Unwinding Massage + Complimentary Light Blow-Dry'
      ]
    },
    'full-body-massage': {
      id: 'full-body-massage',
      title: 'Bespoke Full-Body & Hot Stone Massage',
      kicker: 'SWEDISH · DEEP TISSUE · SHIATSU · 60 / 90 MINS',
      duration: 60,
      soloPrice: 80,
      couplesPrice: 150,
      priceLabel: '60m $80 ($120 for 90m) · Couples 60m $150',
      photo: 'assets/images/curated/female-therapist-oil-massage.jpg',
      cutout: 'assets/images/ai/cutout-couple-sanctuary.png',
      desc: 'Customized full-body massage performed on heated tables with warm aromatic oils and complimentary basalt hot stones to dissolve deep muscular knots.',
      steps: [
        'Pressure & Focus-Area Consultation with Your Female Massage Specialist',
        'Full-Body Swedish Fluidity, Deep Tissue Trigger Point, or Shiatsu Work',
        'Complimentary Warm Basalt Hot Stone Placement & Gliding Along the Spine',
        'Neck, Cranial Base & Foot Reflex Integration',
        'Steamed Herbal Towel Wipe-Down & Organic Floral Tea'
      ]
    },
    'head-massage-pkg': {
      id: 'head-massage-pkg',
      title: 'Cranial Acupressure & Neck Reset',
      kicker: 'EXPRESS SCREEN & MIGRAINE RELIEF · 45 MINS',
      duration: 45,
      soloPrice: 68,
      couplesPrice: 130,
      priceLabel: 'Solo $68 · Couples $130 (45 Mins)',
      photo: 'assets/images/official/scalp-treatment-official.jpg',
      cutout: 'assets/images/ai/cutout-head-massage-pkg.png',
      desc: 'A targeted 45-minute cranial, temple, jaw, neck, and shoulder acupressure treatment—performed dry or with light botanical oil so you can return straight to your day refreshed.',
      steps: [
        'Warm Lavender Eye Pillow & Deep Breathing Grounding',
        'Crown, Temple & Occipital Ridge Acupressure for Headache Relief',
        'Jaw, Masseter & Sinus Meridian Tension Release',
        'Deep Neck, Trapezius & Shoulder Blade Unwinding',
        'Steamed Herbal Neck Compress & Refreshing Tea'
      ]
    },
    'foot-reflexology': {
      id: 'foot-reflexology',
      title: 'Royal Botanical Foot & Leg Reflexology',
      kicker: 'HERBAL SOAK & MERIDIAN LOUNGE · 60 MINS',
      duration: 60,
      soloPrice: 60,
      couplesPrice: 115,
      priceLabel: 'Solo $60 ($75 Foot + Back Combo)',
      photo: 'assets/images/gmaps/foot-reflexology-lounge.jpg',
      cutout: 'assets/images/ai/cutout-foot-reflexology.png',
      desc: 'Recline in plush velvet comfort while your feet soak in a warm sea-salt and rose-herbal bath, followed by precision reflexology across the soles, ankles, and calves.',
      steps: [
        'Warm Mineral Sea-Salt, Ginger & Rose-Petal Detox Foot Soak',
        'Neck & Shoulder Warm Compress While Feet Soak',
        'Precision Eastern Organ-Zone Foot & Arch Reflexology',
        'Lower-Leg & Calf Lymphatic Drainage Oil Massage',
        'Steamed Towel Foot Wrap (Optional Upgrade: $75 Foot + Back Combo)'
      ]
    }
  };

  /* =========================================================================
     2. 5-STAGE CHOREOGRAPHY DATA
     ========================================================================= */
  const CHOREO_STAGES = [
    {
      roman: 'ACT I OF V',
      time: 'Minutes 00 – 12',
      tag: 'Act I · Bespoke Consultation',
      title: 'HD Microscopic Scalp Analysis & Aromatic Grounding',
      desc: 'Your specialist welcomes you with warm herbal tea and uses a 200x high-definition microscopic camera to examine your follicle health, hydration levels, and sensitivity. Together, you select the exact botanical ampoules and essential oils for your session.',
      img: 'assets/images/gmaps/guest-tablet-consultation.jpg',
      pills: ['🔬 200x Follicle Camera', '🌸 Camellia & Lavender Oil', '🍵 Warm Welcome Tea']
    },
    {
      roman: 'ACT II OF V',
      time: 'Minutes 12 – 35',
      tag: 'Act II · Shiseido Cloud-Foam Detox',
      title: 'Shiseido Botanical Foam & 20-Point Cranial Acupressure',
      desc: 'Warm botanical micro-foam envelops your hair and scalp while your therapist’s rhythmic fingertips stimulate 20 cranial meridian points—releasing jaw clenching, temple tightness, and stagnant follicle buildup.',
      img: 'assets/images/gmaps/scalp-foam-massage.jpg',
      pills: ['☁️ Shiseido Sublimic Foam', '💆‍♀️ 20-Point Meridian Release', '🌿 Follicle Oxygenation']
    },
    {
      roman: 'ACT III OF V',
      time: 'Minutes 35 – 55',
      tag: 'Act III · 24K Waterfall Halo',
      title: '24K Golden Waterfall Halo & Organic Herbal Steam',
      desc: 'Our signature 24K gold halo arch glides over your crown, bathing your hairline and scalp in a whisper-quiet curtain of warm, mineral-rich water while herbal ozone mist opens the hair cuticles to drink in deep keratin nourishment.',
      img: 'assets/images/gmaps/waterfall-therapist-suite.jpg',
      pills: ['✨ 24K Golden Waterfall Arch', '♨️ Herbal Ozone Steam', '🌊 Theta-Wave Calm']
    },
    {
      roman: 'ACT IV OF V',
      time: 'Minutes 55 – 75',
      tag: 'Act IV · K-Beauty Glass Skin',
      title: 'Twin-Brush 24K Gold Mask & Cryo-Jade Sculpting',
      desc: 'While your hair drinks in a silk conditioning mask, your esthetician performs an enzymatic facial cleanse, applies a cooling 24K gold or rose hydro-jelly mask with twin fan brushes, and sculpts your cheekbones with chilled jade tools.',
      img: 'assets/images/gmaps/facial-mask-brushes.jpg',
      pills: ['🖌️ Twin-Brush Hydro-Mask', '💎 Cryo-Jade Lymphatic Lift', '🌟 Glass-Skin Glow']
    },
    {
      roman: 'ACT V OF V',
      time: 'Minutes 75 – 90',
      tag: 'Act V · Hot Stones & Tea Ceremony',
      title: 'Volcanic Hot Basalt Stones, Silk Blowout & Flower Tea',
      desc: 'Smooth volcanic basalt stones melt lingering tension across your neck, shoulders, arms, hands, and feet. After a "After" microscopic follicle scan and a gentle blow-dry refresh, you emerge glowing to sip warm organic flower tea.',
      img: 'assets/images/gmaps/aromatherapy-oils-candles.jpg',
      pills: ['🪨 Warm Basalt Hot Stones', '💨 Complimentary Blow-Dry', '🌺 Organic Rose & Chrysanthemum Tea']
    }
  ];

  /* =========================================================================
     3. BESPOKE MATCHMAKER RECOMMENDATIONS
     ========================================================================= */
  const MATCHMAKER_GOALS = {
    'all-in-glow': {
      id: 'luxury-hair-scalp',
      badge: '99% Match · Guest #1 Crown Jewel',
      title: '90-Min Luxury Hair Scalp & 24K Gold Facial ($168 Solo / $320 Couples)',
      desc: 'Experience our complete signature journey: microscopic scalp check, 24K golden waterfall halo, full Korean facial with 24K gold mask, and hot stone neck, shoulder, hand & foot massage.',
      img: 'assets/images/gmaps/waterfall-therapist-suite.jpg'
    },
    'silk-hair': {
      id: 'shiseido-head-spa',
      badge: '98% Match · Tokyo Salon Couture',
      title: '75-Min Shiseido Sublimic Couture Head Spa ($138 Solo / $260 Couples)',
      desc: 'Powered by authentic Japanese Shiseido Sublimic botanicals for deep follicle detoxification, airy root volume, waterfall halo hydro-therapy, and mirror-like hair shine.',
      img: 'assets/images/gmaps/scalp-foam-massage.jpg'
    },
    'facial-lift': {
      id: 'korean-facial-care',
      badge: '99% Match · K-Beauty Glass Skin',
      title: '60-Min Bespoke Korean Glass-Skin Facial ($110 Solo / $210 Couples)',
      desc: 'Enzymatic double cleanse, ultrasonic pore extraction, twin-brush 24K gold or hydro-jelly contour mask, and chilled jade lymphatic sculpting for an instant dewy lift.',
      img: 'assets/images/gmaps/korean-facial-treatment.jpg'
    },
    'deep-melt': {
      id: 'head-spa-body-combo',
      badge: '98% Match · Best Full-Body + Crown Duet',
      title: '90-Min Crown & Body Harmony Duet ($150 Solo / $290 Couples)',
      desc: 'Enjoy 45 minutes of full-body hot stone and aroma oil massage seamlessly paired with 45 minutes of our signature 24K Golden Waterfall Head Spa.',
      img: 'assets/images/gmaps/facial-mask-brushes.jpg'
    }
  };

  /* =========================================================================
     4. LIVE SANCTUARY STATUS, STICKY HEADER & MOBILE NAV
     ========================================================================= */
  const siteHeader = document.getElementById('siteHeader');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const primaryNav = document.getElementById('primaryNav');
  const liveStatusEl = document.getElementById('liveSanctuaryStatus');

  function updateSanctuaryStatus() {
    if (!liveStatusEl) return;
    try {
      const now = new Date();
      const sdTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
      const mins = sdTime.getHours() * 60 + sdTime.getMinutes();
      const openMins = 9 * 60 + 30;  // 9:30 AM
      const closeMins = 20 * 60 + 30; // 8:30 PM
      if (mins >= openMins && mins < closeMins) {
        liveStatusEl.textContent = 'Sanctuary Open Now in San Diego · Today until 8:30 PM';
      } else {
        liveStatusEl.textContent = 'Sanctuary Open Daily 9:30 AM – 8:30 PM · 24/7 Online Booking Open';
      }
    } catch (_) {
      // Keep default text
    }
  }
  updateSanctuaryStatus();

  window.addEventListener('scroll', function () {
    if (!siteHeader) return;
    if (window.scrollY > 24) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }, { passive: true });

  if (mobileMenuBtn && primaryNav) {
    mobileMenuBtn.addEventListener('click', function () {
      const isOpen = primaryNav.classList.toggle('nav-open');
      mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    });
    primaryNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        primaryNav.classList.remove('nav-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* =========================================================================
     5. TREATMENT MENU CATEGORY FILTERS & SOLO/COUPLES PRICING TOGGLE
     ========================================================================= */
  let currentGuestMode = 'solo'; // 'solo' | 'couples'
  const catPills = document.querySelectorAll('.cat-pill');
  const ritualCards = document.querySelectorAll('.ritual-card');
  const modeSoloBtn = document.getElementById('modeSoloBtn');
  const modeCouplesBtn = document.getElementById('modeCouplesBtn');

  catPills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      const filter = pill.getAttribute('data-filter');
      catPills.forEach(function (p) {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');

      ritualCards.forEach(function (card) {
        const cats = card.getAttribute('data-category') || '';
        if (filter === 'all' || cats.includes(filter)) {
          card.classList.remove('hidden-card');
        } else {
          card.classList.add('hidden-card');
        }
      });
    });
  });

  function setGuestPricingMode(mode) {
    currentGuestMode = mode;
    if (modeSoloBtn && modeCouplesBtn) {
      modeSoloBtn.classList.toggle('active', mode === 'solo');
      modeCouplesBtn.classList.toggle('active', mode === 'couples');
    }

    document.querySelectorAll('.ritual-price-overlay').forEach(function (overlay) {
      const amtEl = overlay.querySelector('.price-amount');
      const unitEl = overlay.querySelector('.price-unit');
      if (amtEl) {
        amtEl.textContent = mode === 'couples'
          ? amtEl.getAttribute('data-couples')
          : amtEl.getAttribute('data-solo');
      }
      if (unitEl) {
        unitEl.textContent = mode === 'couples'
          ? unitEl.getAttribute('data-couples-label')
          : unitEl.getAttribute('data-solo-label');
      }
    });

    renderRitualBag();
  }

  if (modeSoloBtn && modeCouplesBtn) {
    modeSoloBtn.addEventListener('click', function () { setGuestPricingMode('solo'); });
    modeCouplesBtn.addEventListener('click', function () { setGuestPricingMode('couples'); });
  }

  /* =========================================================================
     6. BESPOKE CONCIERGE MATCHMAKER (QUIZ RECOMMENDER)
     ========================================================================= */
  const finderChips = document.querySelectorAll('.finder-chip');
  const finderImg = document.getElementById('finderResultImg');
  const finderBadge = document.getElementById('finderResultBadge');
  const finderTitle = document.getElementById('finderResultTitle');
  const finderDesc = document.getElementById('finderResultDesc');
  const finderAddBagBtn = document.getElementById('finderAddBagBtn');

  finderChips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      const goal = chip.getAttribute('data-goal');
      const data = MATCHMAKER_GOALS[goal];
      if (!data) return;

      finderChips.forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');

      if (finderImg) finderImg.src = data.img;
      if (finderBadge) finderBadge.textContent = data.badge;
      if (finderTitle) finderTitle.textContent = data.title;
      if (finderDesc) finderDesc.textContent = data.desc;
      if (finderAddBagBtn) finderAddBagBtn.setAttribute('data-add-bag', data.id);
    });
  });

  /* =========================================================================
     7. 5-STAGE CHOREOGRAPHY INTERACTIVE SWITCHER
     ========================================================================= */
  const choreoBtns = document.querySelectorAll('.choreo-step-btn');
  const choreoImg = document.getElementById('choreoStageImg');
  const choreoTag = document.getElementById('choreoStageTag');
  const choreoRoman = document.getElementById('choreoStageRoman');
  const choreoTime = document.getElementById('choreoStageTime');
  const choreoTitle = document.getElementById('choreoStageTitle');
  const choreoDesc = document.getElementById('choreoStageDesc');
  const choreoPills = document.getElementById('choreoStagePills');

  choreoBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const idx = parseInt(btn.getAttribute('data-step'), 10);
      const stage = CHOREO_STAGES[idx];
      if (!stage) return;

      choreoBtns.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      if (choreoImg) choreoImg.src = stage.img;
      if (choreoTag) choreoTag.textContent = stage.tag;
      if (choreoRoman) choreoRoman.textContent = stage.roman;
      if (choreoTime) choreoTime.textContent = stage.time;
      if (choreoTitle) choreoTitle.textContent = stage.title;
      if (choreoDesc) choreoDesc.textContent = stage.desc;
      if (choreoPills) {
        choreoPills.innerHTML = stage.pills
          .map(function (p) { return '<span>' + p + '</span>'; })
          .join('');
      }
    });
  });

  /* =========================================================================
     8. RITUAL DETAIL MODAL (7-STEP BREAKDOWN)
     ========================================================================= */
  const ritualModal = document.getElementById('ritualDetailModal');
  const closeModalBtn = document.getElementById('closeRitualModalBtn');
  const modalImg = document.getElementById('modalRitualImg');
  const modalCutout = document.getElementById('modalRitualCutout');
  const modalKicker = document.getElementById('modalRitualKicker');
  const modalTitle = document.getElementById('modalRitualTitle');
  const modalDuration = document.getElementById('modalRitualDuration');
  const modalPrice = document.getElementById('modalRitualPrice');
  const modalDesc = document.getElementById('modalRitualDesc');
  const modalStepsList = document.getElementById('modalRitualStepsList');
  const modalAddBagBtn = document.getElementById('modalAddBagBtn');

  function openRitualModal(ritualId) {
    const item = RITUAL_CATALOG[ritualId];
    if (!item || !ritualModal) return;

    if (modalImg) modalImg.src = item.photo;
    if (modalCutout) modalCutout.src = item.cutout;
    if (modalKicker) modalKicker.textContent = item.kicker;
    if (modalTitle) modalTitle.textContent = item.title;
    if (modalDuration) modalDuration.textContent = item.duration + ' Minutes';
    if (modalPrice) modalPrice.textContent = item.priceLabel;
    if (modalDesc) modalDesc.textContent = item.desc;
    if (modalStepsList) {
      modalStepsList.innerHTML = item.steps
        .map(function (s) { return '<li>' + s + '</li>'; })
        .join('');
    }
    if (modalAddBagBtn) {
      modalAddBagBtn.setAttribute('data-add-bag', item.id);
    }

    ritualModal.classList.add('open');
    ritualModal.setAttribute('aria-hidden', 'false');
  }

  function closeRitualModal() {
    if (!ritualModal) return;
    ritualModal.classList.remove('open');
    ritualModal.setAttribute('aria-hidden', 'true');
  }

  document.querySelectorAll('[data-open-modal]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openRitualModal(btn.getAttribute('data-open-modal'));
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeRitualModal);
  if (ritualModal) {
    ritualModal.addEventListener('click', function (e) {
      if (e.target === ritualModal) closeRitualModal();
    });
  }

  /* =========================================================================
     9. MY CUSTOM SANCTUARY RITUAL BAG / CONCIERGE DRAWER
     ========================================================================= */
  const bagState = [];
  const bagTriggerBtn = document.getElementById('bagTriggerBtn');
  const bagCountBadge = document.getElementById('bagCountBadge');
  const drawerBackdrop = document.getElementById('ritualDrawerBackdrop');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const drawerItemsContainer = document.getElementById('drawerItemsContainer');
  const drawerTotalDuration = document.getElementById('drawerTotalDuration');
  const drawerTotalPrice = document.getElementById('drawerTotalPrice');
  const drawerSmsBtn = document.getElementById('drawerSmsConciergeBtn');

  function openDrawer() {
    if (!drawerBackdrop) return;
    drawerBackdrop.classList.add('open');
    drawerBackdrop.setAttribute('aria-hidden', 'false');
  }

  function closeDrawer() {
    if (!drawerBackdrop) return;
    drawerBackdrop.classList.remove('open');
    drawerBackdrop.setAttribute('aria-hidden', 'true');
  }

  function addToRitualBag(ritualId) {
    const item = RITUAL_CATALOG[ritualId];
    if (!item) return;
    if (!bagState.includes(ritualId)) {
      bagState.push(ritualId);
    }
    renderRitualBag();
    openDrawer();
  }

  function removeFromRitualBag(ritualId) {
    const idx = bagState.indexOf(ritualId);
    if (idx !== -1) {
      bagState.splice(idx, 1);
      renderRitualBag();
    }
  }

  function renderRitualBag() {
    if (bagCountBadge) {
      bagCountBadge.textContent = String(bagState.length);
    }

    document.querySelectorAll('.btn-bag-add').forEach(function (btn) {
      const id = btn.getAttribute('data-add-bag');
      if (bagState.includes(id)) {
        btn.classList.add('added');
        btn.innerHTML = '<span>✓ In Ritual</span>';
      } else {
        btn.classList.remove('added');
        btn.innerHTML = '<span>+ Add to Ritual</span>';
      }
    });

    if (!drawerItemsContainer) return;

    if (bagState.length === 0) {
      drawerItemsContainer.innerHTML =
        '<div class="drawer-empty">' +
        '<p>Your custom sanctuary ritual is currently empty.</p>' +
        '<p style="font-size:0.84rem;margin-top:0.5rem;">Click <strong>“+ Add to Ritual”</strong> on any Head Spa, Facial, or Massage service to curate your dream day.</p>' +
        '</div>';
      if (drawerTotalDuration) drawerTotalDuration.textContent = '0 Mins';
      if (drawerTotalPrice) drawerTotalPrice.textContent = '$0';
      return;
    }

    let totalMins = 0;
    let totalCost = 0;
    const names = [];

    drawerItemsContainer.innerHTML = bagState.map(function (id) {
      const item = RITUAL_CATALOG[id];
      const price = currentGuestMode === 'couples' ? item.couplesPrice : item.soloPrice;
      const modeText = currentGuestMode === 'couples' ? 'Couples Suite (2)' : 'Solo Sanctuary';
      totalMins += item.duration;
      totalCost += price;
      names.push(item.title + ' ($' + price + ')');

      return (
        '<div class="drawer-item">' +
          '<img src="' + item.photo + '" alt="' + item.title + '" />' +
          '<div class="drawer-item-info">' +
            '<strong>' + item.title + '</strong>' +
            '<span>' + item.duration + ' Mins · ' + modeText + ' · $' + price + '</span>' +
          '</div>' +
          '<button type="button" class="drawer-remove-btn" data-remove-bag="' + item.id + '">Remove</button>' +
        '</div>'
      );
    }).join('');

    drawerItemsContainer.querySelectorAll('[data-remove-bag]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        removeFromRitualBag(btn.getAttribute('data-remove-bag'));
      });
    });

    if (drawerTotalDuration) drawerTotalDuration.textContent = totalMins + ' Mins';
    if (drawerTotalPrice) drawerTotalPrice.textContent = '$' + totalCost + (currentGuestMode === 'couples' ? ' (2 Guests)' : '');

    if (drawerSmsBtn) {
      const msg = 'Hi Jade Head Spa & Beauty! I would like to reserve the following custom ritual (' +
        (currentGuestMode === 'couples' ? 'Couples Suite for 2' : 'Solo Guest') + '): ' +
        names.join(' + ') + ' (Total: $' + totalCost + ', ' + totalMins + ' mins).';
      drawerSmsBtn.href = 'sms:+18583860068?&body=' + encodeURIComponent(msg);
    }
  }

  document.addEventListener('click', function (e) {
    const addBtn = e.target.closest('[data-add-bag]');
    if (addBtn) {
      const id = addBtn.getAttribute('data-add-bag');
      closeRitualModal();
      addToRitualBag(id);
    }
  });

  if (bagTriggerBtn) bagTriggerBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', function (e) {
      if (e.target === drawerBackdrop) closeDrawer();
    });
  }

  renderRitualBag();

  /* =========================================================================
     10. LOOKBOOK GALLERY FILTER & FULLSCREEN LIGHTBOX
     ========================================================================= */
  const lookFilters = document.querySelectorAll('.look-filter');
  const lookItems = Array.from(document.querySelectorAll('.look-item'));
  const lightbox = document.getElementById('lookbookLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');
  let currentLightboxIdx = 0;

  lookFilters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filter = btn.getAttribute('data-gallery-filter');
      lookFilters.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      lookItems.forEach(function (item) {
        const cats = item.getAttribute('data-gallery-cat') || '';
        if (filter === 'all' || cats.includes(filter)) {
          item.classList.remove('hidden-look');
        } else {
          item.classList.add('hidden-look');
        }
      });
    });
  });

  function showLightboxAt(index) {
    const visibleItems = lookItems.filter(function (el) { return !el.classList.contains('hidden-look'); });
    if (visibleItems.length === 0) return;
    currentLightboxIdx = (index + visibleItems.length) % visibleItems.length;
    const item = visibleItems[currentLightboxIdx];
    if (lightboxImg) {
      lightboxImg.src = item.getAttribute('data-src') || '';
      lightboxImg.alt = item.getAttribute('data-caption') || 'Jade Head Spa Gallery Image';
    }
    if (lightboxCaption) {
      lightboxCaption.textContent = item.getAttribute('data-caption') || '';
    }
    if (lightbox) {
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
    }
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  }

  lookItems.forEach(function (item) {
    item.addEventListener('click', function () {
      const visibleItems = lookItems.filter(function (el) { return !el.classList.contains('hidden-look'); });
      const idx = visibleItems.indexOf(item);
      showLightboxAt(idx >= 0 ? idx : 0);
    });
  });

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', function () { showLightboxAt(currentLightboxIdx - 1); });
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', function () { showLightboxAt(currentLightboxIdx + 1); });
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  /* =========================================================================
     11. INTERACTIVE COUTURE GIFT CARD ATELIER
     ========================================================================= */
  const giftAmtBtns = document.querySelectorAll('.gift-amt-btn');
  const giftRecipientInput = document.getElementById('giftRecipientInput');
  const giftOccasionSelect = document.getElementById('giftOccasionSelect');
  const previewGiftAmount = document.getElementById('previewGiftAmount');
  const previewGiftOccasion = document.getElementById('previewGiftOccasion');
  const previewGiftRecipient = document.getElementById('previewGiftRecipient');
  const previewGiftRitual = document.getElementById('previewGiftRitual');
  const giftSmsLink = document.getElementById('giftSmsLink');

  let selectedGiftAmt = '$168';
  let selectedGiftRitual = '90-Min Luxury Hair Scalp & 24K Gold Facial';

  function updateGiftCardPreview() {
    const recipient = (giftRecipientInput && giftRecipientInput.value.trim()) || 'Someone Special';
    const occasion = (giftOccasionSelect && giftOccasionSelect.value) || 'A Gift of Pure Radiance & Serenity';

    if (previewGiftAmount) previewGiftAmount.textContent = selectedGiftAmt;
    if (previewGiftRitual) previewGiftRitual.textContent = selectedGiftRitual;
    if (previewGiftRecipient) previewGiftRecipient.textContent = recipient;
    if (previewGiftOccasion) previewGiftOccasion.textContent = occasion;

    if (giftSmsLink) {
      const smsBody = 'Hi Jade Head Spa! I would like to order a ' + selectedGiftAmt +
        ' Gift Card (' + selectedGiftRitual + ') for ' + recipient + '.';
      giftSmsLink.href = 'sms:+18583860068?&body=' + encodeURIComponent(smsBody);
    }
  }

  giftAmtBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      giftAmtBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      selectedGiftAmt = btn.getAttribute('data-amt') || '$168';
      selectedGiftRitual = btn.getAttribute('data-ritual') || '';
      updateGiftCardPreview();
    });
  });

  if (giftRecipientInput) giftRecipientInput.addEventListener('input', updateGiftCardPreview);
  if (giftOccasionSelect) giftOccasionSelect.addEventListener('change', updateGiftCardPreview);

  /* =========================================================================
     12. FAQ ACCORDION & KEYBOARD ESCAPE HANDLER
     ========================================================================= */
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item = btn.closest('.faq-item');
      if (!item) return;
      const isOpen = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
      const icon = btn.querySelector('.faq-icon');
      if (icon) icon.textContent = isOpen ? '−' : '+';
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeRitualModal();
      closeDrawer();
      closeLightbox();
    }
  });
})();
