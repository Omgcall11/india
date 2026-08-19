export type Locale = "en" | "hi";

export const LOCALES: { id: Locale; label: string; native: string }[] = [
  { id: "en", label: "English", native: "EN" },
  { id: "hi", label: "हिन्दी", native: "हि" },
];

export const LOCALE_STORAGE_KEY = "streamone-locale";

type PosterCopy = {
  title: string;
  meta: string;
  badge?: string;
};

export type Copy = {
  metaTitle: string;
  metaDescription: string;
  nav: string[];
  logIn: string;
  subscribe: string;
  liveNow: string;
  heroTitle: string;
  heroAccent: string;
  startWatching: string;
  browseCatalogue: string;
  stats: [string, string][];
  heroAlt: string;
  trendingTitle: string;
  sportsTitle: string;
  originalsTitle: string;
  trending: PosterCopy[];
  sports: PosterCopy[];
  originals: PosterCopy[];
  whyTitle: string;
  features: { title: string; text: string }[];
  plansTitle: string;
  plansSubtitle: string;
  planName: string;
  planBadge: string;
  planPrice: string;
  planPeriod: string;
  planThen: string;
  planPerks: string[];
  getPremium: string;
  footerNote: string;
  footerLinks: string[];
};

export const copy: Record<Locale, Copy> = {
  en: {
    metaTitle: "StreamOne — Live Cricket, Football, Movies & Series",
    metaDescription:
      "Stream 100,000+ hours of movies, series and originals in 17 languages, plus live cricket and football — on any device, from one subscription.",
    nav: ["Home", "Sports", "Movies", "TV Shows", "Originals", "Languages"],
    logIn: "Log in",
    subscribe: "Subscribe",
    liveNow: "Live now · T20 Super Series",
    heroTitle: "One subscription.",
    heroAccent: "Every story, every match.",
    startWatching: "Start watching",
    browseCatalogue: "Browse catalogue",
    stats: [
      ["100k+", "hours of content"],
      ["17", "languages"],
      ["4K", "Dolby Atmos"],
    ],
    heroAlt: "Floodlit cricket stadium packed with fans during a night match",
    trendingTitle: "Trending this week",
    sportsTitle: "Live sports & highlights",
    originalsTitle: "StreamOne Originals",
    trending: [
      { title: "Empire of Dust", meta: "Series · Historical drama", badge: "New" },
      { title: "Night Signal", meta: "Series · Thriller" },
      { title: "Beyond Orbit", meta: "Movie · Sci-fi", badge: "Premium" },
      { title: "Festival of Us", meta: "Movie · Romance" },
      { title: "House Full of Us", meta: "Series · Comedy" },
      { title: "Extra Time", meta: "Sports · Docu-series" },
    ],
    sports: [
      { title: "Premier Football", meta: "Live · Tonight 21:30", badge: "Live" },
      { title: "T20 Super Series", meta: "Live · Match 14", badge: "Live" },
      { title: "Kabaddi League", meta: "Highlights · 12 min" },
      { title: "Formula Weekend", meta: "Race replay" },
      { title: "Boxing Nights", meta: "Live · Sat 23:00" },
      { title: "Fan Zone", meta: "Talk show · Daily" },
    ],
    originals: [
      { title: "Neon Alley", meta: "Original · Crime", badge: "Original" },
      { title: "Monsoon Hearts", meta: "Original · Drama", badge: "Original" },
      { title: "The Family Plan", meta: "Original · Comedy" },
      { title: "Kingdoms", meta: "Original · Epic" },
      { title: "Signal Lost", meta: "Original · Mystery" },
      { title: "Ninety Minutes", meta: "Original · Sports fiction" },
    ],
    whyTitle: "Why StreamOne",
    features: [
      {
        title: "17 languages",
        text: "Dubbed and subtitled catalogue across every major Indian language.",
      },
      {
        title: "Every big match",
        text: "Cricket, football, kabaddi and tennis with multi-camera live feeds.",
      },
      {
        title: "Watch anywhere",
        text: "Phone, tablet, web, smart TV and console — pick up where you left off.",
      },
      {
        title: "Downloads",
        text: "Save shows offline and watch on the metro, the plane or the village.",
      },
    ],
    plansTitle: "Choose your plan",
    plansSubtitle: "First month free. Cancel anytime. Prices include taxes.",
    planName: "Premium",
    planBadge: "First month free",
    planPrice: "₹0",
    planPeriod: "/ first month",
    planThen: "Then ₹1,499 / year",
    planPerks: [
      "First month free",
      "4 devices · all screens",
      "4K + Dolby Atmos",
      "Ad-free movies & shows",
      "Downloads",
    ],
    getPremium: "Get Premium",
    footerNote: "A demo streaming landing page.",
    footerLinks: ["About", "Help centre", "Terms", "Privacy", "Careers"],
  },
  hi: {
    metaTitle: "StreamOne — लाइव क्रिकेट, फुटबॉल, फ़िल्में और सीरीज़",
    metaDescription:
      "17 भाषाओं में 1,00,000+ घंटे फ़िल्में, सीरीज़ और ओरिजिनल्स, साथ ही लाइव क्रिकेट और फुटबॉल — एक सब्सक्रिप्शन से किसी भी डिवाइस पर।",
    nav: ["होम", "स्पोर्ट्स", "फ़िल्में", "टीवी शो", "ओरिजिनल्स", "भाषाएँ"],
    logIn: "लॉग इन",
    subscribe: "सब्सक्राइब",
    liveNow: "अभी लाइव · T20 सुपर सीरीज़",
    heroTitle: "एक सब्सक्रिप्शन।",
    heroAccent: "हर कहानी, हर मैच।",
    startWatching: "देखना शुरू करें",
    browseCatalogue: "कैटलॉग देखें",
    stats: [
      ["100k+", "घंटे कंटेंट"],
      ["17", "भाषाएँ"],
      ["4K", "Dolby Atmos"],
    ],
    heroAlt: "रात के मैच में रोशनी से भरा क्रिकेट स्टेडियम और दर्शक",
    trendingTitle: "इस सप्ताह ट्रेंडिंग",
    sportsTitle: "लाइव स्पोर्ट्स और हाइलाइट्स",
    originalsTitle: "StreamOne ओरिजिनल्स",
    trending: [
      { title: "एम्पायर ऑफ़ डस्ट", meta: "सीरीज़ · ऐतिहासिक ड्रामा", badge: "नया" },
      { title: "नाइट सिग्नल", meta: "सीरीज़ · थ्रिलर" },
      { title: "बियॉन्ड ऑर्बिट", meta: "फ़िल्म · साइंस-फिक्शन", badge: "प्रीमियम" },
      { title: "फेस्टिवल ऑफ़ अस", meta: "फ़िल्म · रोमांस" },
      { title: "हाउस फुल ऑफ़ अस", meta: "सीरीज़ · कॉमेडी" },
      { title: "एक्स्ट्रा टाइम", meta: "स्पोर्ट्स · डॉक्यू-सीरीज़" },
    ],
    sports: [
      { title: "प्रीमियर फुटबॉल", meta: "लाइव · आज रात 21:30", badge: "लाइव" },
      { title: "T20 सुपर सीरीज़", meta: "लाइव · मैच 14", badge: "लाइव" },
      { title: "कबड्डी लीग", meta: "हाइलाइट्स · 12 मिनट" },
      { title: "फॉर्मूला वीकेंड", meta: "रेस रीप्ले" },
      { title: "बॉक्सिंग नाइट्स", meta: "लाइव · शनि 23:00" },
      { title: "फैन ज़ोन", meta: "टॉक शो · रोज़" },
    ],
    originals: [
      { title: "नियॉन एली", meta: "ओरिजिनल · क्राइम", badge: "ओरिजिनल" },
      { title: "मानसून हार्ट्स", meta: "ओरिजिनल · ड्रामा", badge: "ओरिजिनल" },
      { title: "द फैमिली प्लान", meta: "ओरिजिनल · कॉमेडी" },
      { title: "किंगडम्स", meta: "ओरिजिनल · एपिक" },
      { title: "सिग्नल लॉस्ट", meta: "ओरिजिनल · मिस्ट्री" },
      { title: "नाइंटी मिनट्स", meta: "ओरिजिनल · स्पोर्ट्स फिक्शन" },
    ],
    whyTitle: "StreamOne क्यों",
    features: [
      { title: "17 भाषाएँ", text: "भारत की हर प्रमुख भाषा में डब और सबटाइटल के साथ कैटलॉग।" },
      {
        title: "हर बड़ा मैच",
        text: "क्रिकेट, फुटबॉल, कबड्डी और टेनिस — मल्टी-कैमरा लाइव फीड के साथ।",
      },
      {
        title: "कहीं भी देखें",
        text: "फ़ोन, टैबलेट, वेब, स्मार्ट टीवी और कंसोल — जहाँ छोड़ा, वहीं से जारी।",
      },
      { title: "डाउनलोड", text: "शो ऑफ़लाइन सेव करें और मेट्रो, विमान या गाँव में देखें।" },
    ],
    plansTitle: "अपना प्लान चुनें",
    plansSubtitle: "पहला महीना मुफ्त। कभी भी रद्द करें। कीमतों में टैक्स शामिल है।",
    planName: "प्रीमियम",
    planBadge: "पहला महीना मुफ्त",
    planPrice: "₹0",
    planPeriod: "/ पहला महीना",
    planThen: "फिर ₹1,499 / वर्ष",
    planPerks: [
      "पहला महीना मुफ्त",
      "4 डिवाइस · सभी स्क्रीन",
      "4K + Dolby Atmos",
      "फ़िल्में और शो बिना विज्ञापन",
      "डाउनलोड",
    ],
    getPremium: "Get Premium",
    footerNote: "एक डेमो स्ट्रीमिंग लैंडिंग पेज।",
    footerLinks: ["हमारे बारे में", "सहायता केंद्र", "नियम", "गोपनीयता", "करियर"],
  },
};
