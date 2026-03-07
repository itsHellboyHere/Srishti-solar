// ═══════════════════════════════════════════════
//  src/data/about.js  —  All verified client data
//  Source: Client questionnaire, March 2026
// ═══════════════════════════════════════════════

export const STORY = {
  founded:      2024,
  founderName:  'Dayamani',
  founderTitle: 'Founder & Owner',
  mission:      'For the people of Bihar.',
  origin: `Renewable energy is necessary for the world to survive. Solar energy is the best and most abundant source. People worldwide desire to reduce CO₂, so my organization's goal is to help people achieve a cleaner atmosphere.`,
  challenge:    `Customers had no knowledge of Rooftop Solar Plants. They only knew the cost, and many vendors were providing poor materials at high costs.`,
  today:        `Ranked #1 in technical efficiency at the 2026 Bihar Solar Expo, as stated by the Energy Secretary of Bihar.`,
}

export const MISSION = {
  statement:    'To provide the best quality material at the right cost.',
  statementHindi: 'सही कीमत पर सबसे अच्छी गुणवत्ता।',
  vision:       'To ensure every person in Bihar is well-informed and knowledgeable about solar energy.',
  visionHindi:  'बिहार के हर व्यक्ति को सोलर ऊर्जा के बारे में जागरूक और जानकार बनाना।',
  philosophy:   'Provide plants according to the specifications of the Ministry of Renewable Energy of India and spread awareness.',
}

export const TEAM = [
  {
    name:        'Dayamani',
    role:        'Founder & Owner',
    roleHindi:   'संस्थापक और मालिक',
    experience:  '25+ Years',
    education:   'MA, MBA, LLB',
    bio:         'Visionary founder with 25+ years of experience. Personally collects monthly feedback from every customer.',
    bioHindi:    'दूरदर्शी संस्थापक जो हर महीने ग्राहकों से व्यक्तिगत रूप से फीडबैक लेते हैं।',
    photo:       '/team/dayamani1.jpg',
    featured:    true,
  },
  {
    name:        'Bijendra Kr Nirala',
    role:        'Technical Adviser',
    roleHindi:   'तकनीकी सलाहकार',
    experience:  '30 Years',
    education:   null,
    bio:         '30 years of deep technical experience in electrical and solar energy systems across Bihar.',
    bioHindi:    'बिहार में बिजली और सोलर सिस्टम में 30 साल का गहरा तकनीकी अनुभव।',
    photo:       '/team/bijendra1.jpg',
    featured:    false,
  },
  {
    name:        'Engr. Yash',
    role:        'Technical Head',
    roleHindi:   'तकनीकी प्रमुख',
    experience:  '5 Years',
    education:   'B.Tech — IIT BHU',
    bio:         'IIT BHU graduate leading all technical installations. Ensures every system meets MNRE specifications.',
    bioHindi:    'IIT BHU से B.Tech। हर इंस्टॉलेशन MNRE मानकों के अनुसार सुनिश्चित करते हैं।',
    photo:       null,
    featured:    false,
  },
  {
    name:        'Dr. Srishti',
    role:        'HR Head',
    roleHindi:   'HR प्रमुख',
    experience:  '5 Years',
    education:   'MBBS',
    bio:         'Leads team welfare and human resources. Ensures every team member is trained, motivated, and customer-first.',
    bioHindi:    'टीम कल्याण और HR की प्रमुख। सुनिश्चित करती हैं कि हर सदस्य प्रशिक्षित और ग्राहक-केंद्रित हो।',
    photo:       '/team/dr-srishti.jpg',
    featured:    false,
  },
]

export const ACHIEVEMENTS = {
  installations:  '41+',
  districts:      '09',
  employees:      '29',
  subsidyHelped:  '₹31,98,000',
  awards: [
    {
      title: 'Ranked #1 — Technical Efficiency',
      org:   '2026 Bihar Solar Expo',
      by:    'Energy Secretary of Bihar',
      year:  2026,
    },
    {
      title: 'Highly Honored at Solar Mela',
      org:   'Bihar State Power Holding Co.',
      by:    'Chairman & Energy Secretary, BSPHCL',
      year:  2026,
    },
  ],
  media: [
    {
      outlet:    'Dainik Jagran',
      headline:  'Srishti Solar Power featured with CMD',
      date:      'February 26, 2026',
      image:     '/media/dainik-jagran.jpg',  // ← upload client's image here
      url:       null,
    },
    {
      outlet:    'Bihar State Power Holding Company (BSPHCL)',
      headline:  'Featured on official BSPHCL Facebook page',
      date:      '2026',
      image:     null,
      url:       null,
    },
  ],
}

export const DIFFERENTIATORS = [
  {
    icon:     'structure',
    title:    'Hot-Dip Galvanised Structure',
    hindi:    'उच्च-गुणवत्ता स्ट्रक्चर',
    desc:     'HDG structures with SS (Stainless Steel) nuts, bolts, and better angles — built to last 25+ years in Bihar\'s weather.',
    descHindi:'HDG स्ट्रक्चर, SS नट-बोल्ट और बेहतर कोण — 25+ साल टिकाऊ।',
  },
  {
    icon:     'panel',
    title:    'Topcon Panels + Tier-1 Inverters',
    hindi:    'प्रीमियम तकनीक',
    desc:     'Latest Topcon solar panels for maximum efficiency, Tier-1 inverters, and MC4 connectors — no compromise on technology.',
    descHindi:'Topcon पैनल, Tier-1 इन्वर्टर, MC4 कनेक्टर — तकनीक में कोई समझौता नहीं।',
  },
  {
    icon:     'safety',
    title:    'Copper Bonded Earthing + ACDB/DCDB',
    hindi:    'सुरक्षा और दीर्घायु',
    desc:     'Copper bonded earthing, L&A material, best-quality ACDB and DCDB for complete electrical safety and long system life.',
    descHindi:'कॉपर अर्थिंग, L&A मटेरियल, ACDB/DCDB — पूरी सुरक्षा और लंबी उम्र।',
  },
]

export const WHY_SOLAR = [
  { icon: '🌍', text: 'Environmental protection',    hindi: 'पर्यावरण संरक्षण'        },
  { icon: '💨', text: 'Zero pollution',               hindi: 'शून्य प्रदूषण'           },
  { icon: '💰', text: 'Cheaper electricity',          hindi: 'सस्ती बिजली'            },
  { icon: '🔧', text: 'Near-zero maintenance',        hindi: 'लगभग शून्य रखरखाव'       },
  { icon: '⚡', text: 'Long-term energy independence', hindi: 'दीर्घकालिक ऊर्जा स्वतंत्रता' },
]

export const TIMELINE = [
  { year: 2024, title: 'कंपनी की स्थापना',     titleEn: 'Company Founded',             desc: 'Srishti Solar Power launched in Bihar with a clear mission — quality solar at the right cost.' },
  { year: 2025, title: '9 जिलों में पहुँचे',   titleEn: 'Expanded to 9 Districts',     desc: 'Grew operations across 9 districts of Bihar, installing 41+ systems with zero post-install complaints.' },
  { year: 2026, title: 'Bihar Solar Expo #1',   titleEn: '#1 Technical Efficiency',     desc: 'Ranked #1 in technical efficiency at the 2026 Bihar Solar Expo by Energy Secretary of Bihar. Featured in Dainik Jagran.' },
]