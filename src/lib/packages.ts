import { Language } from './translations';

export interface ItineraryDay {
  day: number;
  title: { [K in Language]: string };
  description: { [K in Language]: string };
}

export interface TourPackage {
  slug: string;
  title: { [K in Language]: string };
  duration: { [K in Language]: string };
  nights: number;
  days: number;
  price: number;
  priceLabel: { [K in Language]: string };
  highlights: { [K in Language]: string[] };
  image: string;
  gallery: string[];
  overview: { [K in Language]: string };
  itinerary: ItineraryDay[];
  included: { [K in Language]: string[] };
  excluded: { [K in Language]: string[] };
  tag?: { [K in Language]: string };
}

export const packages: TourPackage[] = [
  {
    slug: 'munnar-hills-retreat',
    title: { en: 'Munnar Hills Retreat', ml: 'മൂന്നാർ ഹിൽസ് റിട്രീറ്റ്', hi: 'मुन्नार हिल्स रिट्रीट' },
    duration: { en: '3 Days / 2 Nights', ml: '3 പകൽ / 2 രാത്രി', hi: '3 दिन / 2 रात' },
    nights: 2,
    days: 3,
    price: 8999,
    priceLabel: { en: '₹8,999', ml: '₹8,999', hi: '₹8,999' },
    highlights: {
      en: ['Hill Station', 'Tea Gardens', 'Wildlife', 'Waterfalls'],
      ml: ['ഹിൽ സ്റ്റേഷൻ', 'തേയിലത്തോട്ടങ്ങൾ', 'വന്യജീവി', 'വെള്ളച്ചാട്ടങ്ങൾ'],
      hi: ['हिल स्टेशन', 'चाय के बागान', 'वन्यजीव', 'झरने']
    },
    image: '/assets/packages/munnar.png',
    gallery: [
      '/assets/packages/munnar.png',
      'https://images.unsplash.com/photo-1625505826533-5c80aca7d157?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop',
    ],
    overview: {
      en: 'Experience the misty tea gardens, serene waterfalls, and breathtaking viewpoints of Munnar — the Kashmir of South India. Wake up to cool mountain air, explore sprawling plantations, and encounter rare wildlife at Eravikulam National Park.',
      ml: 'ദക്ഷിണേന്ത്യയുടെ കാശ്മീർ എന്നറിയപ്പെടുന്ന മൂന്നാറിലെ കോടമഞ്ഞുള്ള തേയിലത്തോട്ടങ്ങളും ശാന്തമായ വെള്ളച്ചാട്ടങ്ങളും മനോഹരമായ കാഴ്ചകളും ആസ്വദിക്കൂ. കുളിർമയുള്ള മലയോരവായുവും വിശാലമായ പ്ലാന്റേഷനുകളും ഇരവികുളം നാഷണൽ പാർക്കിലെ അപൂർവ്വ വന്യജീവികളും നിങ്ങളെ കാത്തിരിക്കുന്നു.',
      hi: 'दक्षिण भारत के कश्मीर कहे जाने वाले मुन्नार के धुंधले चाय बागानों, शांत झरनों और लुभावने दृश्यों का अनुभव करें। ठंडी पहाड़ी हवा में जागें, विशाल बागानों का पता लगाएं और इराविकुलम नेशनल पार्क में दुर्लभ वन्यजीवों का सामना करें।'
    },
    itinerary: [
      {
        day: 1,
        title: { en: 'Arrival & Mattupetty Dam', ml: 'ആഗമനവും മാട്ടുപ്പെട്ടി ഡാമും', hi: 'आगमन और मट्टुपेट्टी बांध' },
        description: {
          en: 'Arrive at Munnar and check into your resort. After freshening up, visit Mattupetty Dam and the Echo Point. Evening walk through the tea gardens followed by a traditional Kerala dinner.',
          ml: 'മൂന്നാറിലെത്തി റിസോർട്ടിൽ ചെക്ക്-ഇൻ ചെയ്യുക. മാട്ടുപ്പെട്ടി ഡാം, എക്കോ പോയിന്റ് എന്നിവ സന്ദർശിക്കുക. വൈകുന്നേരം തേയിലത്തോട്ടങ്ങളിലൂടെ ഒരു നടത്തവും തുടർന്ന് പരമ്പരാഗത കേരള ഭക്ഷണവും.',
          hi: 'मुन्नार पहुँचें और अपने रिसॉर्ट में चेक-इन करें। तरोताजा होने के बाद, मट्टुपेट्टी बांध और इको पॉइंट पर जाएं। शाम को चाय के बागानों की सैर और उसके बाद पारंपरिक केरल रात्री भोज।'
        },
      },
      {
        day: 2,
        title: { en: 'Eravikulam & Top Station', ml: 'ഇരവികുളവും ടോപ്പ് സ്റ്റേഷനും', hi: 'इराविकुलम और टॉप स्टेशन' },
        description: {
          en: 'Start early for Eravikulam National Park to spot the endangered Nilgiri Tahr. Visit Top Station for panoramic views of the Western Ghats. Afternoon visit to a tea factory and the Tea Museum.',
          ml: 'വരയാടുകളെ കാണാനായി അതിരാവിലെ ഇരവികുളം നാഷണൽ പാർക്കിലേക്ക് പോകുക. പശ്ചിമഘട്ടത്തിന്റെ മനോഹരമായ കാഴ്ചകൾക്കായി ടോപ്പ് സ്റ്റേഷൻ സന്ദർശിക്കുക. ഉച്ചകഴിഞ്ഞ് ടീ ഫാക്ടറിയും ടീ മ്യൂസിയവും സന്ദർശിക്കുക.',
          hi: 'लुप्तप्राय नीलगिरी तहर को देखने के लिए इराविकुलम नेशनल पार्क के लिए जल्दी शुरुआत करें। पश्चिमी घाट के मनोरम दृश्यों के लिए टॉप स्टेशन पर जाएँ। दोपहर में चाय फैक्ट्री और टी म्यूजियम का दौरा।'
        },
      },
      {
        day: 3,
        title: { en: 'Waterfalls & Departure', ml: 'വെള്ളച്ചാട്ടങ്ങളും മടക്കയാത്രയും', hi: 'झरने और प्रस्थान' },
        description: {
          en: 'Morning visit to Attukal and Lakkam waterfalls. Enjoy a leisurely breakfast and check out. Optional stop at spice gardens on the way to your drop-off point.',
          ml: 'രാവിലെ ആറ്റുകാൽ, ലക്കം വെള്ളച്ചാട്ടങ്ങൾ സന്ദർശിക്കുക. പ്രഭാതഭക്ഷണത്തിന് ശേഷം ചെക്ക്-ഔട്ട് ചെയ്യുക. മടക്കയാത്രയിൽ സുഗന്ധവ്യഞ്ജന തോട്ടങ്ങൾ സന്ദർശിക്കാം.',
          hi: 'सुबह अट्टुकल और लक्कम झरनों का दौरा। इत्मीनान से नाश्ते का आनंद लें और चेक आउट करें। अपने ड्रॉप-ऑफ बिंदु के रास्ते में मसाला बागानों में वैकल्पिक ठहराव।'
        },
      },
    ],
    included: {
      en: ['2 nights premium resort stay', 'Daily breakfast & dinner', 'Private AC vehicle', 'Expert local guide', 'Welcome drink on arrival'],
      ml: ['2 രാത്രി പ്രീമിയം റിസോർട്ട് താമസം', 'പ്രഭാതഭക്ഷണവും അത്താഴവും', 'സ്വകാര്യ എസി വാഹനം', 'പ്രാദേശിക ഗൈഡ്', 'ആഗമന വേളയിൽ വെൽക്കം ഡ്രിങ്ക്'],
      hi: ['2 रातें प्रीमियम रिसॉर्ट प्रवास', 'दैनिक नाश्ता और रात का खाना', 'निजी एसी वाहन', 'विशेषज्ञ स्थानीय गाइड', 'आगमन पर स्वागत पेय']
    },
    excluded: {
      en: ['Airfare / train tickets', 'Lunch expenses', 'Personal shopping', 'Travel insurance'],
      ml: ['വിമാന/ട്രെയിൻ ടിക്കറ്റുകൾ', 'ഉച്ചഭക്ഷണ ചെലവുകൾ', 'വ്യക്തിഗത ഷോപ്പിംഗ്', 'യാത്രാ ഇൻഷുറൻസ്'],
      hi: ['हवाई किराया / ट्रेन टिकट', 'दोपहर के भोजन का खर्च', 'व्यक्तिगत खरीदारी', 'यात्रा बीमा']
    },
    tag: { en: 'Best Seller', ml: 'ഏറ്റവും മികച്ചത്', hi: 'बेस्ट सेलर' },
  },
  {
    slug: 'alleppey-backwaters',
    title: { en: 'Alleppey Backwaters', ml: 'ആലപ്പുഴ കായൽ യാത്ര', hi: 'एलेप्पी बैकवाटर' },
    duration: { en: '2 Days / 1 Night', ml: '2 പകൽ / 1 രാത്രി', hi: '2 दिन / 1 रात' },
    nights: 1,
    days: 2,
    price: 6499,
    priceLabel: { en: '₹6,499', ml: '₹6,499', hi: '₹6,499' },
    highlights: {
      en: ['Houseboat', 'Backwaters', 'Village Life', 'Sunset Cruise'],
      ml: ['ഹൗസ്ബോട്ട്', 'കായലുകൾ', 'ഗ്രാമീണ ജീവിതം', 'സൂര്യാസ്തമയ യാത്ര'],
      hi: ['हाउसबोट', 'बैकवाटर', 'ग्रामीण जीवन', 'सूर्यास्त क्रूज']
    },
    image: '/assets/packages/alleppey.png',
    gallery: [
      '/assets/packages/alleppey.png',
      'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&auto=format&fit=crop',
    ],
    overview: {
      en: 'Cruise through the calm emerald backwaters in a traditional premium houseboat. Enjoy authentic Kerala cuisine prepared onboard, witness stunning village life along the canals, and experience an unforgettable sunset over the backwaters.',
      ml: 'പരമ്പരാഗത പ്രീമിയം ഹൗസ്ബോട്ടിൽ ശാന്തമായ കായലിലൂടെയുള്ള യാത്ര. ബോട്ടിൽ തയ്യാറാക്കിയ തനി കേരളീയ ഭക്ഷണം ആസ്വദിക്കൂ, കായലോരത്തെ ഗ്രാമീണ ജീവിതത്തിന് സാക്ഷ്യം വഹിക്കൂ, അവിസ്മരണീയമായ സൂര്യാസ്തമയം കാണൂ.',
      hi: 'एक पारंपरिक प्रीमियम हाउसबोट में शांत पन्ना बैकवाटर के माध्यम से क्रूज। बोर्ड पर तैयार प्रामाणिक केरल व्यंजनों का आनंद लें, नहरों के किनारे आश्चर्यजनक ग्रामीण जीवन देखें और बैकवाटर पर एक अविस्मरणीय सूर्यास्त का अनुभव करें।'
    },
    itinerary: [
      {
        day: 1,
        title: { en: 'Board Houseboat & Backwater Cruise', ml: 'ഹൗസ്ബോട്ടിൽ കയറലും കായൽ യാത്രയും', hi: 'हाउसबोट बोर्डिंग और बैकवाटर क्रूज' },
        description: {
          en: 'Check in at Alleppey boat jetty at noon. Board your private premium houseboat and begin your cruise through the scenic backwater canals. Enjoy a freshly prepared Kerala lunch onboard.',
          ml: 'ഉച്ചയ്ക്ക് ആലപ്പുഴ ബോട്ട് ജെട്ടിയിൽ എത്തുക. സ്വകാര്യ ഹൗസ്ബോട്ടിൽ കയറി മനോഹരമായ കായലിലൂടെയുള്ള യാത്ര തുടങ്ങുക. ബോട്ടിൽ തയ്യാറാക്കിയ ഉച്ചഭക്ഷണം ആസ്വദിക്കാം.',
          hi: 'दोपहर में एलेप्पी बोट जेटी पर चेक इन करें। अपनी निजी प्रीमियम हाउसबोट पर सवार हों और प्राकृतिक बैकवाटर नहरों के माध्यम से अपना क्रूज शुरू करें। बोर्ड पर ताज़ा तैयार केरल दोपहर के भोजन का आनंद लें।'
        },
      },
      {
        day: 2,
        title: { en: 'Morning Cruise & Departure', ml: 'രാവിലെ കായൽ യാത്രയും മടക്കയാത്രയും', hi: 'सुबह का क्रूज और प्रस्थान' },
        description: {
          en: 'Wake up to the sounds of nature on the backwaters. Enjoy a traditional breakfast onboard. Disembark by 10 AM with transfer back to your drop-off point.',
          ml: 'കായലോരത്തെ പ്രകൃതിയുടെ ശബ്ദങ്ങൾ കേട്ടുണരുക. ബോട്ടിൽ നിന്നുള്ള പ്രഭാതഭക്ഷണം ആസ്വദിക്കുക. 10 മണിക്ക് ബോട്ട് യാത്ര അവസാനിപ്പിച്ച് മടക്കയാത്ര തുടങ്ങാം.',
          hi: 'बैकवाटर पर प्रकृति की आवाज़ के साथ जागें। बोर्ड पर पारंपरिक नाश्ते का आनंद लें। सुबह 10 बजे तक उतरें और अपने ड्रॉप-ऑफ बिंदु पर वापस स्थानांतरण करें।'
        },
      },
    ],
    included: {
      en: ['1 night premium houseboat stay', 'All meals onboard', 'Private AC houseboat'],
      ml: ['1 രാത്രി പ്രീമിയം ഹൗസ്ബോട്ട് താമസം', 'എല്ലാ ഭക്ഷണവും ബോട്ടിൽ', 'സ്വകാര്യ എസി ഹൗസ്ബോട്ട്'],
      hi: ['1 रात प्रीमियम हाउसबोट प्रवास', 'बोर्ड पर सभी भोजन', 'निजी एसी हाउसबोट']
    },
    excluded: {
      en: ['Airfare / train tickets', 'Personal expenses'],
      ml: ['വിമാന/ട്രെയിൻ ടിക്കറ്റുകൾ', 'വ്യക്തിഗത ചെലവുകൾ'],
      hi: ['हवाई किराया / ट्रेन टिकट', 'व्यक्तिगत खर्च']
    },
  },
  {
    slug: 'wayanad-wilderness',
    title: { en: 'Wayanad Wilderness', ml: 'വയനാട് വൈൽഡർനസ്സ്', hi: 'वायनाड जंगल' },
    duration: { en: '4 Days / 3 Nights', ml: '4 പകൽ / 3 രാത്രി', hi: '4 दिन / 3 रात' },
    nights: 3,
    days: 4,
    price: 12999,
    priceLabel: { en: '₹12,999', ml: '₹12,999', hi: '₹12,999' },
    highlights: {
      en: ['Wildlife', 'Waterfalls', 'Caves', 'Bamboo Forest'],
      ml: ['വന്യജീവി', 'വെള്ളച്ചാട്ടങ്ങൾ', 'ഗുഹകൾ', 'മുളങ്കാടുകൾ'],
      hi: ['वन्यजीव', 'झरने', 'गुफाएं', 'बांस का जंगल']
    },
    image: '/assets/packages/wayanad.png',
    gallery: [
      '/assets/packages/wayanad.png',
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e13?w=800&auto=format&fit=crop',
    ],
    overview: {
      en: 'Dive into the lush green forests of Wayanad, exploring ancient Edakkal Caves, majestic waterfalls, and wildlife sanctuaries.',
      ml: 'വയനാട്ടിലെ നിബിഡ വനങ്ങളിലേക്ക് ഇറങ്ങിച്ചെല്ലൂ, പുരാതന എടയ്ക്കൽ ഗുഹകളും ഗാംഭീര്യമുള്ള വെള്ളച്ചാട്ടങ്ങളും വന്യജീവി സങ്കേതങ്ങളും പര്യവേക്ഷണം ചെയ്യൂ.',
      hi: 'वायनाड के हरे-भरे जंगलों में गोता लगाएँ, प्राचीन एडक्कल गुफाओं, राजसी झरनों और वन्यजीव अभयारण्यों की खोज करें।'
    },
    itinerary: [
        { day: 1, title: { en: 'Arrival', ml: 'ആഗമനം', hi: 'आगमन' }, description: { en: 'Arrival and check-in.', ml: 'എത്തലും ചെക്ക്-ഇന്നും.', hi: 'आगमन और चेक-इन।' } }
    ],
    included: { en: ['Accomodation'], ml: ['താമസം'], hi: ['आवास'] },
    excluded: { en: ['Travel'], ml: ['യാത്ര'], hi: ['यात्रा'] }
  },
  {
    slug: 'kochi-heritage-walk',
    title: { en: 'Kochi Heritage Walk', ml: 'കൊച്ചി ഹെറിറ്റേജ് വാക്ക്', hi: 'कोच्चि हेरिटेज वॉक' },
    duration: { en: '2 Days / 1 Night', ml: '2 പകൽ / 1 രാത്രി', hi: '2 दिन / 1 रात' },
    nights: 1,
    days: 2,
    price: 5499,
    priceLabel: { en: '₹5,499', ml: '₹5,499', hi: '₹5,499' },
    highlights: { en: ['Heritage'], ml: ['പൈതൃകം'], hi: ['विरासत'] },
    image: '/assets/packages/kochi.png',
    gallery: [],
    overview: { en: 'Heritage walk.', ml: 'പൈതൃക യാത്ര.', hi: 'विरासत की सैर।' },
    itinerary: [],
    included: { en: ['Stay'], ml: ['താമസം'], hi: ['रहना'] },
    excluded: { en: ['Lunch'], ml: ['ഉച്ചഭക്ഷണം'], hi: ['दोपहर का भोजन'] }
  },
  {
    slug: 'thekkady-periyar',
    title: { en: 'Thekkady & Periyar', ml: 'തേക്കടി പര്യവേഷണം', hi: 'ठेक्कडी और पेरियार' },
    duration: { en: '3 Days / 2 Nights', ml: '3 പകൽ / 2 രാത്രി', hi: '3 दिन / 2 रात' },
    nights: 2,
    days: 3,
    price: 9999,
    priceLabel: { en: '₹9,999', ml: '₹9,999', hi: '₹9,999' },
    highlights: { en: ['Wildlife'], ml: ['വന്യജീവി'], hi: ['वन्यजीव'] },
    image: '/assets/packages/munnar.png',
    gallery: [],
    overview: { en: 'Wildlife tour.', ml: 'വന്യജീവി യാത്ര.', hi: 'वन्यजीव दौरा।' },
    itinerary: [],
    included: { en: ['Stay'], ml: ['താമസം'], hi: ['रहना'] },
    excluded: { en: ['Shopping'], ml: ['ഷോപ്പിംഗ്'], hi: ['खरीदारी'] }
  },
  {
    slug: 'complete-kerala-circuit',
    title: { en: 'Complete Kerala Circuit', ml: 'കേരള പര്യടനം', hi: 'कम्पलीट केरल सर्किट' },
    duration: { en: '7 Days / 6 Nights', ml: '7 പകൽ / 6 രാത്രി', hi: '7 दिन / 6 रात' },
    nights: 6,
    days: 7,
    price: 24999,
    priceLabel: { en: '₹24,999', ml: '₹24,999', hi: '₹24,999' },
    highlights: { en: ['Full Tour'], ml: ['മുഴുവൻ യാത്ര'], hi: ['पूर्ण दौरा'] },
    image: '/assets/packages/alleppey.png',
    gallery: [],
    overview: { en: 'Complete tour.', ml: 'മുഴുവൻ കേരള യാത്ര.', hi: 'पूरा दौरा।' },
    itinerary: [],
    included: { en: ['Innova'], ml: ['ഇന്നോവ'], hi: ['इनोवा'] },
    excluded: { en: ['GST'], ml: ['ജിഎസ്ടി'], hi: ['जीएसटी'] }
  }
];

export function getPackageBySlug(slug: string): TourPackage | undefined {
  return packages.find((pkg) => pkg.slug === slug);
}

export function getAllSlugs(): string[] {
  return packages.map((pkg) => pkg.slug);
}
