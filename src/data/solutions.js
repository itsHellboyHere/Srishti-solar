// ═══════════════════════════════════════════════
//  src/data/solutions.js
//  All Solutions page data — Srishti Solar Power
//  Real data from client, Bihar 2026
// ═══════════════════════════════════════════════

export const SOLUTIONS_HERO = {
  eyebrow:   'हमारे समाधान · Our Solutions',
  titleHi:   'बिहार के लिए',
  titleHi2:  'सोलर समाधान',
  titleEn:   'Solar Solutions for Every Need',
  desc:      'घर हो, दुकान हो, या खेत — हर ज़रूरत के लिए सोलर। सरकारी सब्सिडी के साथ, सही कीमत पर।',
  descEn:    'From homes to shops to farms — solar for every need. With government subsidy, at the right cost.',
  stats: [
    { num: '41+',          label: 'इंस्टॉलेशन',   sub: 'Installations'    },
    { num: '9',            label: 'जिले',          sub: 'Districts'        },
    { num: '₹31,98,000',  label: 'सब्सिडी दिलाई', sub: 'Subsidy Assisted' },
    { num: '₹0',          label: 'शिकायतें',       sub: 'Complaints'       },
  ],
}

export const SOLUTIONS = [
  {
    id:        'residential',
    iconKey:   'home',                        
    icon:      '🏠',
    titleHi:   'घरेलू सोलर',
    titleEn:   'Residential Rooftop Solar',
    tagline:   'अपने घर की छत से बिजली बनाएं',
    taglineEn: 'Generate electricity from your own rooftop',
    desc:      'Bihar में सबसे ज़्यादा बिकने वाला सोलर — 1 kW से 3 kW तक। PM Surya Ghar योजना के तहत ₹78,000 तक की सब्सिडी सीधे आपके बैंक में।',
    descEn:    'Most popular in Bihar — 1kW to 3kW. Get up to ₹78,000 subsidy directly in your bank under PM Surya Ghar scheme.',
    sizes:     ['1 kW', '2 kW', '3 kW'],
    subsidy:   '₹78,000 तक सब्सिडी',
    subsidyEn: 'Up to ₹78,000 subsidy',
    savingsHi: 'हर महीने ₹800–₹2,500 बचत',
    savingsEn: '₹800–₹2,500 saved monthly',
    benefits: [
      { iconKey: 'zap',     icon: '💰', hi: '25 साल तक मुफ़्त बिजली',       en: 'Free electricity for 25 years'  },
      { iconKey: 'rupee',   icon: '🏛️', hi: 'सरकारी सब्सिडी ₹78,000 तक',   en: 'Govt subsidy up to ₹78,000'     },
      { iconKey: 'wrench',  icon: '🔧', hi: 'शून्य रखरखाव',                  en: 'Zero maintenance'               },
      { iconKey: 'trending',icon: '📈', hi: 'घर की कीमत बढ़ती है',           en: 'Increases property value'       },
    ],
    image:     'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=1200&q=80',
    tag:       'सबसे लोकप्रिय',
    tagEn:     'Most Popular',
    color:     '#F4A300',
  },
  {
    id:        'commercial',
    iconKey:   'building',                     // ← Lucide: Building2
    icon:      '🏢',
    titleHi:   'व्यावसायिक सोलर',
    titleEn:   'Commercial Rooftop Solar',
    tagline:   'दुकान, ऑफिस, फैक्ट्री — बिजली का बिल ज़ीरो करें',
    taglineEn: 'Shop, office, factory — cut your electricity bill to zero',
    desc:      '5 kW से 10 kW+ तक। बिजली की लागत 80% तक कम करें। 3–5 साल में पूरा निवेश वापस। IIT BHU इंजीनियर की निगरानी में इंस्टॉलेशन।',
    descEn:    '5kW to 10kW+. Reduce electricity cost by 80%. Full ROI in 3–5 years. Installation supervised by IIT BHU engineer.',
    sizes:     ['5 kW', '6 kW', '8 kW', '10 kW+'],
    subsidy:   'MNRE approved',
    subsidyEn: 'MNRE approved',
    savingsHi: 'हर महीने ₹5,000–₹15,000 बचत',
    savingsEn: '₹5,000–₹15,000 saved monthly',
    benefits: [
      { iconKey: 'zap',      icon: '⚡', hi: '80% तक बिजली बिल कम',        en: 'Electricity bill cut by 80%'     },
      { iconKey: 'trending', icon: '📊', hi: '3–5 साल में ROI',             en: 'Full ROI in 3–5 years'          },
      { iconKey: 'hard-hat', icon: '🏭', hi: 'IIT BHU इंजीनियर की निगरानी',en: 'Supervised by IIT BHU engineer' },
      { iconKey: 'shield',   icon: '📜', hi: 'MNRE मानकों के अनुसार',       en: 'As per MNRE specifications'     },
    ],
    image:     'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&q=80',
    tag:       'High ROI',
    tagEn:     'High ROI',
    color:     '#3b82f6',
  },
  {
    id:        'offgrid',
    iconKey:   'battery',                      // ← Lucide: BatteryFull
    icon:      '🔋',
    titleHi:   'ऑफ-ग्रिड सोलर',
    titleEn:   'Off-Grid Solar with Battery',
    tagline:   'बिजली नहीं आती? अब कोई फ़र्क नहीं',
    taglineEn: "No grid power? Doesn't matter anymore",
    desc:      'बैटरी बैकअप के साथ — 24 घंटे बिजली। ग्रामीण इलाकों और लोड-शेडिंग वाले क्षेत्रों के लिए आदर्श। Bihar के दूरदराज़ ज़िलों में भी उपलब्ध।',
    descEn:    'With battery backup — 24-hour electricity. Ideal for rural areas and load-shedding zones. Available in remote Bihar districts too.',
    sizes:     ['1 kW', '2 kW', '3 kW'],
    subsidy:   'राज्य सरकार सहायता',
    subsidyEn: 'State govt support',
    savingsHi: 'बिजली कटौती से पूरी आज़ादी',
    savingsEn: 'Complete freedom from power cuts',
    benefits: [
      { iconKey: 'battery',  icon: '🔋', hi: '24 घंटे बिजली',               en: '24-hour electricity'            },
      { iconKey: 'map-pin',  icon: '🌄', hi: 'दूरदराज़ क्षेत्रों में भी',    en: 'Works in remote areas too'     },
      { iconKey: 'plug',     icon: '🔌', hi: 'लोड-शेडिंग से आज़ादी',        en: 'Freedom from load-shedding'    },
      { iconKey: 'shield',   icon: '💡', hi: 'Copper bonded earthing सुरक्षा',en: 'Copper bonded earthing safety'},
    ],
    image:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    tag:       'Bihar Villages',
    tagEn:     'Bihar Villages',
    color:     '#22c55e',
  },
  {
    id:        'subsidy',
    iconKey:   'landmark',                     // ← Lucide: Landmark
    icon:      '🏛️',
    titleHi:   'PM Surya Ghar योजना',
    titleEn:   'PM Surya Ghar Muft Bijli Yojana',
    tagline:   '300 यूनिट मुफ़्त बिजली — हर महीने',
    taglineEn: '300 units free electricity — every month',
    desc:      'केंद्र सरकार की योजना — ₹78,000 तक सीधे बैंक में। Srishti Solar Power ने अब तक ₹31,98,000 की सब्सिडी दिलाई है। हम पूरी process करते हैं।',
    descEn:    "Central govt scheme — up to ₹78,000 directly in bank. Srishti Solar has helped customers get ₹31.98L in subsidies. We handle the full process.",
    sizes:     ['1 kW', '2 kW', '3 kW'],
    subsidy:   '₹78,000 direct bank',
    subsidyEn: '₹78,000 direct to bank',
    savingsHi: '₹31,98,000 सब्सिडी दिलाई',
    savingsEn: '₹31,98,000 subsidy assisted',
    benefits: [
      { iconKey: 'rupee',    icon: '🏛️', hi: '1kW पर ₹30,000 सब्सिडी',     en: '₹30,000 subsidy for 1kW'       },
      { iconKey: 'rupee',    icon: '🏛️', hi: '2kW पर ₹60,000 सब्सिडी',     en: '₹60,000 subsidy for 2kW'       },
      { iconKey: 'rupee',    icon: '🏛️', hi: '3kW+ पर ₹78,000 सब्सिडी',    en: '₹78,000 subsidy for 3kW+'      },
      { iconKey: 'clipboard',icon: '📋', hi: 'हम पूरी process करते हैं',     en: 'We handle complete process'    },
    ],
    image:     'https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&q=80',
    tag:       'सरकारी योजना',
    tagEn:     'Govt Scheme',
    color:     '#F4A300',
  },
]

export const HOW_IT_WORKS = [
  {
    step:    '01',
    titleHi: 'फ्री साइट विज़िट',
    titleEn: 'Free Site Visit',
    descHi:  'हमारी टीम आपके घर/दफ्तर आती है — छत की जांच, बिजली की खपत देखते हैं। पूरी तरह मुफ़्त।',
    descEn:  'Our team visits your home/office — checks roof, assesses electricity consumption. Completely free.',
    iconKey: 'map-pin',                        // ← Lucide: MapPin
    icon:    '🔍',
    time:    '1 दिन में',
    timeEn:  'Within 1 day',
  },
  {
    step:    '02',
    titleHi: 'कस्टम डिज़ाइन',
    titleEn: 'Custom System Design',
    descHi:  'IIT BHU इंजीनियर आपकी ज़रूरत के अनुसार सिस्टम डिज़ाइन करते हैं — MNRE मानकों के अनुसार।',
    descEn:  'IIT BHU engineer designs system per your need — as per MNRE specifications.',
    iconKey: 'pen-tool',                       // ← Lucide: PenTool
    icon:    '📐',
    time:    '2–3 दिन',
    timeEn:  '2–3 days',
  },
  {
    step:    '03',
    titleHi: 'इंस्टॉलेशन',
    titleEn: 'Professional Installation',
    descHi:  'HDG structure, Topcon panels, Tier-1 inverter, Copper earthing — सब कुछ सही से। 1–2 दिन में पूरा।',
    descEn:  'HDG structure, Topcon panels, Tier-1 inverter, Copper earthing — done right. Completed in 1–2 days.',
    iconKey: 'zap',                            // ← Lucide: Zap
    icon:    '⚡',
    time:    '1–2 दिन',
    timeEn:  '1–2 days',
  },
  {
    step:    '04',
    titleHi: 'सब्सिडी और चालू',
    titleEn: 'Subsidy & Activation',
    descHi:  'हम DISCOM registration, net metering, और PM Surya Ghar application सब करते हैं। पैसे सीधे बैंक में।',
    descEn:  'We handle DISCOM registration, net metering, and PM Surya Ghar application. Money goes straight to bank.',
    iconKey: 'landmark',                       // ← Lucide: Landmark
    icon:    '🏛️',
    time:    '30–45 दिन',
    timeEn:  '30–45 days',
  },
]

export const SUBSIDY_SLABS = [
  {
    kw:      '1 kW',
    subsidy: '₹30,000',
    units:   '~100 units/month',
    saving:  '~₹800/month',
    tag:     null,
  },
  {
    kw:      '2 kW',
    subsidy: '₹60,000',
    units:   '~200 units/month',
    saving:  '~₹1,600/month',
    tag:     'Popular',
  },
  {
    kw:      '3 kW+',
    subsidy: '₹78,000',
    units:   '~300 units/month',
    saving:  '~₹2,500/month',
    tag:     'Best Value',
  },
]