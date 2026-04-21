export type Language = 'en' | 'ml' | 'hi';

interface Translations {
  [key: string]: {
    [K in Language]: string;
  };
}

export const translations: Translations = {
  // Navbar
  nav_home: { en: 'Home', ml: 'ഹോം', hi: 'होम' },
  nav_about: { en: 'About', ml: 'ഞങ്ങളെക്കുറിച്ച്', hi: 'हमारे बारे में' },
  nav_services: { en: 'Services', ml: 'സേവനങ്ങൾ', hi: 'सेवाएं' },
  nav_packages: { en: 'Packages', ml: 'പാക്കേജുകൾ', hi: 'पैकेज' },
  nav_contact: { en: 'Contact', ml: 'ബന്ധപ്പെടുക', hi: 'संपर्क' },
  nav_whatsapp: { en: 'WhatsApp', ml: 'വാട്ട്സ്ആപ്പ്', hi: 'व्हाट्सएप' },

  // Hero
  hero_badge: { en: 'Your Premium Kerala Partner', ml: 'നിങ്ങളുടെ പ്രീമിയം കേരള പാർട്ണർ', hi: 'आपका प्रीमियम केरल पार्टनर' },
  hero_title_1: { en: 'Kerala', ml: 'കേരളം', hi: 'केरल' },
  hero_title_2: { en: 'Made Special', ml: 'സവിശേഷമാക്കാം', hi: 'बनाया खास' },
  hero_p: { 
    en: 'Custom tours covering Munnar, Alleppey, Kochi & more. Local expertise, tailored itineraries, and 24/7 support — crafted exclusively for your dream vacation.',
    ml: 'മൂന്നാർ, ആലപ്പുഴ, കൊച്ചി തുടങ്ങിയ സ്ഥലങ്ങളിലേക്ക് പ്രത്യേക പാക്കേജുകൾ. പ്രാദേശിക വൈദഗ്ധ്യം, നിങ്ങൾക്കനുയോജ്യമായ യാത്രാ പദ്ധതികൾ, 24/7 പിന്തുണ.',
    hi: 'मुन्नार, एलेप्पी, कोच्चि और अन्य जगहों के लिए कस्टम टूर। स्थानीय विशेषज्ञता, व्यक्तिगत यात्रा कार्यक्रम और 24/7 सहायता।'
  },
  cta_view_packages: { en: 'View Packages', ml: 'പാക്കേജുകൾ കാണുക', hi: 'पैकेज देखें' },
  cta_whatsapp_now: { en: 'WhatsApp Now', ml: 'വാട്ട്സ്ആപ്പ് ചെയ്യുക', hi: 'अभी व्हाट्सएप करें' },

  // General
  get_quote: { en: 'Get Quote on WhatsApp', ml: 'വാട്ട്സ്ആപ്പിൽ ക്വോട്ട് ചോദിക്കാം', hi: 'व्हाट्सएप पर कोट प्राप्त करें' },
  contact_price: { en: 'Contact for Price', ml: 'വിലയ്ക്കായി ബന്ധപ്പെടുക', hi: 'कीमत के लिए संपर्क करें' },
  starting_from: { en: 'Starting from', ml: 'തുടങ്ങുന്നത്', hi: 'से शुरू' },
  view_details: { en: 'View Details', ml: 'വിവരങ്ങൾ കാണുക', hi: 'വിവരങ്ങൾ കാണുക' },
  view_all_packages: { en: 'View All Packages', ml: 'എല്ലാ പാക്കേജുകളും കാണുക', hi: 'सभी पैकेज देखें' },
  join_travelers: { en: 'Join 50k+ travelers', ml: '50,000-ത്തിലധികം യാത്രക്കാർക്കൊപ്പം ചേരുക', hi: '50k+ यात्रियों से जुड़ें' },
  
  // Sections
  popular_tours: { en: 'Popular Tours', ml: 'പ്രശസ്തമായ സ്ഥലങ്ങൾ', hi: 'लोकप्रिय पर्यटन' },
  popular_destinations_title: { en: 'Iconic Kerala Destinations', ml: 'കേരളത്തിലെ ശ്രദ്ധേയമായ സ്ഥലങ്ങൾ', hi: 'प्रतिष्ठित केरल गंतव्य' },
  popular_destinations_p: { 
    en: 'From misty hills to golden beaches, explore the most loved spots in God\'s Own Country.',
    ml: 'കോടമഞ്ഞുള്ള മലനിരകൾ മുതൽ സുവർണ്ണ കടൽതീരങ്ങൾ വരെ, ദൈവത്തിന്റെ സ്വന്തം നാട്ടിലെ പ്രിയപ്പെട്ട ഇടങ്ങൾ പര്യവേക്ഷണം ചെയ്യുക.',
    hi: 'धुंधली पहाड़ियों से लेकर सुनहरे समुद्र तटों तक, गॉड्स ओन कंट्री में सबसे पसंदीदा जगहों का अन्वेषण करें।'
  },
  location_kerala: { en: 'Kerala, India', ml: 'കേരളം, ഇന്ത്യ', hi: 'केरल, भारत' },
  advantage_title: { en: 'The Kerala Mist Advantage', ml: 'കേരള മിസ്റ്റ് പ്രത്യേകതകൾ', hi: 'केरल मिസ്റ്റ് के लाभ' },
  why_choose_us: { en: 'Why Choose Us', ml: 'എന്തുകൊണ്ട് ഞങ്ങളെ തിരഞ്ഞെടുക്കണം', hi: 'हमें क्यों चुनें' },
  features_subtitle: { 
    en: 'We don\'t just book hotels — we curate unforgettable journeys focused on authentic local culture, comfort, and value.',
    ml: 'ഞങ്ങൾ വെറും ഹോട്ടലുകൾ ബുക്ക് ചെയ്യുകയല്ല - പ്രാദേശിക സംസ്കാരം, സുഘസൗകര്യങ്ങൾ, മൂല്യം എന്നിവയിൽ ശ്രദ്ധ കേന്ദ്രീകരിച്ച അവിസ്മരണീയമായ യാത്രകൾ ഞങ്ങൾ തയ്യാറാക്കുന്നു.',
    hi: 'हम केवल होटल बुक नहीं करते - हम प्रामाणिक स्थानीय संस्कृति, आराम और मूल्य पर केंद्रित अविस्मरणीय यात्राएं तैयार करते हैं।'
  },
  feature_1_title: { en: 'Transparent Pricing', ml: 'സുതാര്യമായ വിലകൾ', hi: 'पारदर्शी मूल्य निर्धारण' },
  feature_1_desc: { en: 'No hidden charges, no surprise fees. Every rupee accounted for upfront.', ml: 'മറഞ്ഞിരിക്കുന്ന ചാർജുകളില്ല, സർപ്രൈസ് ഫീസുകളില്ല. ഓരോ രൂപയും മുൻകൂട്ടി കണക്കാക്കുന്നു.', hi: 'कोई छिपा हुआ शुल्क नहीं, कोई आश्चर्य शुल्क नहीं। हर रुपये का हिसाब पहले से।' },
  feature_2_title: { en: 'Local Guides', ml: 'പ്രാദേശിക ഗൈഡുകൾ', hi: 'स्थानीय गाइड' },
  feature_2_desc: { en: 'Our guides know every hidden trail and secret viewpoint.', ml: 'ഞങ്ങളുടെ ഗൈഡുകൾക്ക് ഓരോ രഹസ്യ വഴികളും കാഴ്ചകളും അറിയാം.', hi: 'हमारे गाइड हर छिपे हुए रास्ते और गुप्त दृश्य बिंदु को जानते हैं।' },
  feature_3_title: { en: 'Customizable Itineraries', ml: 'മാറ്റം വരുത്താവുന്ന യാത്രാപദ്ധതികൾ', hi: 'कस्टमाइज़ेबल यात्रा कार्यक्रम' },
  feature_3_desc: { en: 'Every itinerary is tailor-made to match your ideal vacation.', ml: 'ഓരോ യാത്രാപദ്ധതിയും നിങ്ങളുടെ താൽപ്പര്യത്തിനനുസരിച്ച് തയ്യാറാക്കുന്നു.', hi: 'हर यात्रा कार्यक्रम आपकी आदर्श छुट्टी के अनुसार तैयार किया गया है।' },
  feature_4_title: { en: '24/7 Support', ml: '24/7 പിന്തുണ', hi: '24/7 सहायता' },
  feature_4_desc: { en: 'Our team is on standby available around the clock via WhatsApp.', ml: 'വാട്ട്സ്ആപ്പ് വഴി അഹോരാത്രം ഞങ്ങളുടെ ടീം ലഭ്യമാണ്.', hi: 'हमारी टीम व्हाट्सएप के माध्यम से चौबीसों घंटे स्टैंडबाय पर उपलब्ध है।' },

  featured_packages_title: { en: 'Featured Experiences', ml: 'മികച്ച അനുഭവങ്ങൾ', hi: 'चुनिंदा अनुभव' },
  featured_packages_p: { 
    en: 'Hand-picked packages designed for every kind of traveler. Each one fully customizable to your preferences.',
    ml: 'എല്ലാത്തരം യാത്രക്കാർക്കുമായി തിരഞ്ഞെടുത്ത പാക്കേജുകൾ. ഓരോന്നും നിങ്ങളുടെ താൽപ്പര്യത്തിനനുസരിച്ച് മാറ്റം വരുത്താവുന്നതാണ്.',
    hi: 'हर तरह के यात्री के लिए डिज़ाइन किए गए चुनिंदा पैकेज। आपकी पसंद के अनुसार प्रत्येक पूरी तरह से कस्टमाइज़ेबल।'
  },

  trivandrum_title: { en: 'Sree Padmanabhaswamy Temple', ml: 'ശ്രീ പത്മനാഭസ്വാമി ക്ഷേത്രം', hi: 'श्री पद्मनाभस्वामी मंदिर' },
  trivandrum_p: {
    en: 'Witness the awe-inspiring architecture of the world\'s wealthiest temple. A blend of Kerala and Dravidian styles.',
    ml: 'ലോകത്തിലെ ഏറ്റവും സമ്പന്നമായ ക്ഷേത്രത്തിന്റെ അത്ഭുതകരമായ വാസ്തുവിദ്യ കാണുക. കേരളത്തിന്റെയും ദ്രാവിഡ ശൈലിയുടെയും സമന്വയം.',
    hi: 'दुनिया के सबसे अमीर मंदिर की विस्मयकारी वास्तुकला को देखें। केरल और द्रविड़ शैलियों का मिश्रण।'
  },
  cultural_masterpiece: { en: 'Cultural Masterpiece', ml: 'സാംസ്കാരിക വിസ്മയം', hi: 'सांस्कृतिक उत्कृष्ट कृति' },
  years_legacy: { en: 'Years of Spiritual Legacy in Trivandrum', ml: 'തിരുവനന്തപുരത്തെ ആത്മീയ പാരമ്പര്യത്തിന്റെ വർഷങ്ങൾ', hi: 'त्रिवेंद्रम में आध्यात्मिक विरासत के वर्ष' },
  
  reach_out: { en: 'Reach Out', ml: 'ബന്ധപ്പെടാം', hi: 'संपर्क करें' },
  reach_out_title: { en: 'Ready to Experience the Magic of Kerala?', ml: 'കേരളത്തിന്റെ മാന്ത്രികത അനുഭവിക്കാൻ തയ്യാറാണോ?', hi: 'केरल के जादू का अनुभव करने के लिए तैयार हैं?' },
  reach_out_p: {
    en: 'Skip the long forms. Chat with us directly for instant quotes and custom itineraries.',
    ml: 'നീണ്ട ഫോമുകൾ ഒഴിവാക്കുക. തൽക്ഷണ ക്വോട്ടുകൾക്കും യാത്രാ പദ്ധതികൾക്കുമായി ഞങ്ങളുമായി നേരിട്ട് ചാറ്റ് ചെയ്യുക.',
    hi: 'लंबे फॉर्म छोड़ें। तत्काल कोट और कस्टम यात्रा कार्यक्रमों के लिए हमसे सीधे चैट करें।'
  },
  reach_out_footer: { en: 'Join 50k+ travelers following our journey online.', ml: 'ഞങ്ങളുടെ യാത്രകൾ പിന്തുടരുന്ന 50,000-ത്തിലധികം യാത്രക്കാർക്കൊപ്പം ചേരുക.', hi: 'ऑनलाइन हमारी यात्रा का अनुसरण करने वाले 50k+ यात्रियों में शामिल हों।' },

  // About Page
  about_hero_p: { en: 'Your trusted local partners since 2014.', ml: '2014 മുതൽ നിങ്ങളുടെ വിശ്വസ്ത പ്രാദേശിക പങ്കാളി.', hi: '2014 से आपके भरोसेमंद स्थानीय भागीदार।' },
  about_who_we_are: { en: 'Who We Are', ml: 'ഞങ്ങൾ ആര്', hi: 'हम कौन हैं' },
  about_heart_title: { en: 'Sharing the Heart of God\'s Own Country', ml: 'ദൈവത്തിന്റെ സ്വന്തം നാടിന്റെ ഹൃദയം പങ്കിടുന്നു', hi: 'गॉड्स ओन कंट्री के दिल को साझा करना' },
  about_intro_1: { en: 'We are locals dedicated to showing you the real Kerala.', ml: 'യഥാർത്ഥ കേരളം നിങ്ങൾക്ക് കാണിച്ചുതരാൻ ആഗ്രഹിക്കുന്ന നാട്ടുകാരാണ് ഞങ്ങൾ.', hi: 'हम असली केरल दिखाने के लिए समर्पित स्थानीय लोग हैं।' },
  about_intro_2: { en: 'We design journeys that are personal and unforgettable.', ml: 'വ്യക്തിഗതവും അവിസ്മരണീയവുമായ യാത്രകൾ ഞങ്ങൾ രൂപകൽപ്പന ചെയ്യുന്നു.', hi: 'हम ऐसी यात्राएं डिजाइन करते हैं जो व्यक्तिगत और अविस्मरणीय हों।' },
  about_sets_us_apart: { en: 'What Sets Us Apart', ml: 'ഞങ്ങളുടെ പ്രത്യേകതകൾ', hi: 'हमें क्या अलग बनाता है' },
  about_stat_xp: { en: 'Years of Experience', ml: 'വർഷത്തെ പരിചയം', hi: 'वर्षों का अनुभव' },
  about_stat_happy: { en: 'Happy Travelers', ml: 'സന്തുഷ്ടരായ യാത്രക്കാർ', hi: 'खुश यात्री' },
  about_stat_dest: { en: 'Destinations', ml: 'ലക്ഷ്യസ്ഥാനങ്ങൾ', hi: 'गंतव्य' },
  about_stat_rating: { en: 'Average Rating', ml: 'ശരാശരി റേറ്റിംഗ്', hi: 'औसत रेटिंग' },
  about_core_exp: { en: 'Our Core Experience', ml: 'ഞങ്ങളുടെ പ്രധാന സേവനങ്ങൾ', hi: 'हमारा मुख्य अनुभव' },
  about_value_1_title: { en: 'Local Expertise', ml: 'പ്രാദേശിക വൈദഗ്ധ്യം', hi: 'स्थानीय विशेषज्ञता' },
  about_value_1_desc: { en: 'Born and raised in Kerala, our team knows every hidden gem.', ml: 'കേരളത്തിൽ ജനിച്ചു വളർന്ന ഞങ്ങളുടെ ടീമിന് ഓരോ രഹസ്യ കേന്ദ്രങ്ങളും അറിയാം.', hi: 'केरल में जन्मे और पले-बढ़े, हमारी टीम हर छिपे हुए रत्न को जानती है।' },
  about_value_2_title: { en: 'Custom Tours', ml: 'കസ്റ്റം ടൂറുകൾ', hi: 'कस्टम टूर' },
  about_value_2_desc: { en: 'Every itinerary is tailor-made to your preferences.', ml: 'ഓരോ യാത്രാപദ്ധതിയും നിങ്ങളുടെ താൽപ്പര്യത്തിനനുസരിച്ച് തയ്യാറാക്കുന്നു.', hi: 'हर यात्रा कार्यक्रम आपकी पसंद के अनुसार तैयार किया गया है।' },
  about_value_3_title: { en: '24/7 Support', ml: '24/7 പിന്തുണ', hi: '24/7 सहायता' },
  about_value_3_desc: { en: 'Available around the clock via WhatsApp and phone.', ml: 'വാട്ട്സ്ആപ്പ് വഴിയും ഫോൺ വഴിയും എപ്പോഴും ലഭ്യമാണ്.', hi: 'व्हाट्सएप और फोन के माध्यम से चौबीसों घंटे उपलब्ध।' },
  about_value_4_title: { en: 'Value Guarantee', ml: 'മികച്ച മൂല്യം', hi: 'मूल्य गारंटी' },
  about_value_4_desc: { en: 'Premium experiences at local expertise rates.', ml: 'മികച്ച സേവനങ്ങൾ മിതമായ നിരക്കിൽ ലഭ്യമാക്കുന്നു.', hi: 'स्थानीय विशेषज्ञता दरों पर प्रीमियम अनुभव।' },
  about_transform_dreams: { en: 'Transform Your Travel Dreams', ml: 'നിങ്ങളുടെ യാത്രാ സ്വപ്നങ്ങൾ സാക്ഷാത്കരിക്കൂ', hi: 'अपने यात्रा सपनों को बदलें' },
  about_transform_p: { en: 'We replace complex bookings with a conversation. Chat with our local experts now.', ml: 'ബുക്കിംഗ് പ്രക്രിയകൾ ഞങ്ങൾ എളുപ്പമാക്കുന്നു. ഇപ്പോൾ തന്നെ ഞങ്ങളോട് സംസാരിക്കൂ.', hi: 'हम बातचीत के साथ जटिल बुकिंग बदलते हैं। अब हमारे स्थानीय विशेषज्ञों के साथ चैट करें।' },

  // Services Page
  services_hero_p: { en: 'Complete travel solutions crafted by local experts.', ml: 'പ്രാദേശിക വിദഗ്ധർ തയ്യാറാക്കിയ മികച്ച യാത്രാ സേവനങ്ങൾ.', hi: 'स्थानीय विशेषज्ञों द्वारा तैयार किए गए संपूर्ण यात्रा समाधान।' },
  services_our_offerings: { en: 'Our Offerings', ml: 'ഞങ്ങളുടെ സേവനങ്ങൾ', hi: 'हमारी पेशकश' },
  services_title_main: { en: 'World-Class Comfort, Local Expertise', ml: 'മികച്ച സൗകര്യങ്ങൾ, പ്രാദേശിക വൈദഗ്ധ്യം', hi: 'विश्व स्तरीय आराम, स्थानीय विशेषज्ञता' },
  services_subtitle_main: { en: 'We handle every detail from arrival to departure.', ml: 'എത്തുന്നത് മുതൽ മടങ്ങുന്നത് വരെയുള്ള എല്ലാ കാര്യങ്ങളും ഞങ്ങൾ നോക്കുന്നു.', hi: 'हम आगमन से प्रस्थान तक हर विवरण संभालते हैं।' },
  services_1_title: { en: 'Tour Packages', ml: 'ടൂർ പാക്കേജുകൾ', hi: 'टूर पैकेज' },
  services_1_desc: { en: 'Curated itineraries and custom tours across Kerala.', ml: 'കേരളത്തിലുടനീളം തയ്യാറാക്കിയതും കസ്റ്റം ടൂറുകളും.', hi: 'केरल भर में क्यूरेटेड यात्रा कार्यक्रम और कस्टम टूर।' },
  services_2_title: { en: 'Luxury Stays', ml: 'ലക്ഷ്വറി താമസം', hi: 'लक्जरी प्रवास' },
  services_2_desc: { en: 'Handpicked accommodations from heritage to premium resorts.', ml: 'പൈതൃക കേന്ദ്രങ്ങൾ മുതൽ പ്രീമിയം റിസോർട്ടുകൾ വരെയുള്ള താമസസൗകര്യങ്ങൾ.', hi: 'हेरिटेज से लेकर प्रीमियम रिसॉर्ट्स तक चुनिंदा आवास।' },
  services_3_title: { en: 'Premium Transport', ml: 'പ്രീമിയം ട്രാൻസ്പോർട്ട്', hi: 'प्रीमियम परिवहन' },
  services_3_desc: { en: 'Airport transfers and full-trip cab services.', ml: 'എയർപോർട്ട് ട്രാൻസ്ഫർ, ഫുൾ-ട്രിപ്പ് ക്യാബ് സേവനങ്ങൾ.', hi: 'हवाई अड्डा स्थानांतरण और पूर्ण-यात्रा कैब सेवाएं।' },
  services_4_title: { en: 'Honeymoon Specials', ml: 'ഹണിമൂൺ സ്പെഷ്യലുകൾ', hi: 'हनीमून स्पेशल' },
  services_4_desc: { en: 'Romantic getaways designed exclusively for couples.', ml: 'ദമ്പതികൾക്കായി മാത്രം രൂപകൽപ്പന ചെയ്ത റൊമാന്റിക് യാത്രകൾ.', hi: 'विशेष रूप से जोड़ों के लिए डिज़ाइन किए गए रोमांटिक गेटवे।' },
  services_5_title: { en: 'Group Expeditions', ml: 'ഗ്രൂപ്പ് യാത്രകൾ', hi: 'ग्रुप अभियान' },
  services_5_desc: { en: 'Travel for families, corporate groups, and friends.', ml: 'കുടുംബങ്ങൾക്കും സുഹൃത്തുക്കൾക്കും വേണ്ടിയുള്ള ഗ്രൂപ്പ് യാത്രകൾ.', hi: 'परिवारों, कॉर्पोरेट समूहों और दोस्तों के लिए यात्रा।' },
  services_6_title: { en: 'Custom Curations', ml: 'കസ്റ്റം ക്യൂറേഷൻസ്', hi: 'कस्टम क्यूरेशन' },
  services_6_desc: { en: 'Unique local experiences personalized for you.', ml: 'നിങ്ങൾക്കായി തഴാറാക്കിയ സവിശേഷ പ്രാദേശിക അനുഭവങ്ങൾ.', hi: 'आपके लिए व्यक्तिगत अद्वितीय स्थानीय अनुभव।' },
  services_enquire_whatsapp: { en: 'Enquire on WhatsApp', ml: 'വാട്ട്സ്ആപ്പിൽ ചോദിക്കാം', hi: 'व्हाट्सएप पर पूछें' },
  services_unique_title: { en: 'Looking for something truly unique?', ml: 'സവിശേഷമായ എന്തെങ്കിലും അന്വേഷിക്കുകയാണോ?', hi: 'कुछ वास्तव में अद्वितीय खोज रहे हैं?' },
  services_unique_p: { en: 'Our travel consultants are ready to build a bespoke itinerary.', ml: 'നിങ്ങൾക്കായി ഒരു സവിശേഷ യാത്രാപദ്ധതി തയ്യാറാക്കാൻ ഞങ്ങളുടെ കൺസൾട്ടന്റുമാർ തയ്യാറാണ്.', hi: 'हमारे यात्रा सलाहकार एक bespoke यात्रा कार्यक्रम बनाने के लिए तैयार हैं।' },
  services_chat_consultant: { en: 'Chat with Consultant', ml: 'കൺസൾട്ടന്റുമായി സംസാരിക്കൂ', hi: 'सलाहकार के साथ चैट करें' },
  services_send_request: { en: 'Send Request', ml: 'അപേക്ഷ അയക്കൂ', hi: 'अनुरोध भेजें' },

  // Contact Page
  contact_hero_p: { en: 'Ready to plan your dream Kerala trip?', ml: 'നിങ്ങളുടെ സ്വപ്ന യാത്ര ആസൂത്രണം ചെയ്യാൻ തയ്യാറാണോ?', hi: 'अपनी सपनों की केरल यात्रा की योजना बनाने के लिए तैयार हैं?' },
  contact_form_title: { en: 'Send an Enquiry', ml: 'അന്വേഷണങ്ങൾ അയക്കൂ', hi: 'एक पूछताछ भेजें' },
  contact_form_p: { en: 'Fill in the form below and we\'ll get back to you.', ml: 'താഴെ കാണുന്ന ഫോം പൂരിപ്പിക്കുക, ഞങ്ങൾ നിങ്ങളെ ബന്ധപ്പെടും.', hi: 'नीचे दिया गया फॉर्म भरें और हम आपसे संपर्क करेंगे।' },
  contact_full_name: { en: 'Full Name', ml: 'പൂർണ്ണനാമം', hi: 'पूरा नाम' },
  contact_phone_number: { en: 'Phone Number', ml: 'ഫോൺ നമ്പർ', hi: 'फोन नंबर' },
  contact_travel_date: { en: 'Preferred Travel Date', ml: 'യാത്ര ചെയ്യാൻ ഉദ്ദേശിക്കുന്ന തീയതി', hi: 'पसंदीदा यात्रा तिथि' },
  contact_message_label: { en: 'Message', ml: 'സന്ദേശം', hi: 'संदेश' },
  contact_message_optional: { en: '(optional)', ml: '(നിബന്ധനയില്ല)', hi: '(वैकल्पिक)' },
  contact_message_placeholder: { en: 'Tell us about your travel plans.', ml: 'നിങ്ങളുടെ യാത്രാ പദ്ധതികളെക്കുറിച്ച് ഞങ്ങളോട് പറയൂ.', hi: 'हमें अपनी यात्रा योजनाओं के बारे में बताएं।' },
  contact_submit_success: { en: 'Success!', ml: 'വിജയിച്ചു!', hi: 'सफलता!' },
  contact_info_title: { en: 'Contact Information', ml: 'ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ', hi: 'संपर्क जानकारी' },
  contact_phone_label: { en: 'Phone', ml: 'ഫോൺ', hi: 'फोन' },
  contact_email_label: { en: 'Email', ml: 'ഇമെയിൽ', hi: 'ईमेल' },
  contact_address_label: { en: 'Address', ml: 'വിലാസം', hi: 'पता' },
  contact_availability_label: { en: 'Availability', ml: 'ലഭ്യത', hi: 'उपलब्धता' },
  contact_fastest_response: { en: 'Fastest response →', ml: 'പെട്ടെന്നുള്ള മറുപടി →', hi: 'सबसे तेज प्रतिक्रिया →' },

  // Packages Page
  packages_hero_p: { en: 'Handpicked experiences across Kerala. Every package is fully customizable.', ml: 'കേരളത്തിലുടനീളം തിരഞ്ഞെടുത്ത യാത്രാ അനുഭവങ്ങൾ. ഓരോന്നും കസ്റ്റമൈസ് ചെയ്യാവുന്നതാണ്.', hi: 'केरल भर में चुनिंदा अनुभव। हर पैकेज पूरी तरह से कस्टमाज करने योग्य है।' },
  packages_filter_duration: { en: 'Filter by Duration', ml: 'ദൈർഘ്യമനുസരിച്ച് തിരഞ്ഞെടുക്കാം', hi: 'अवधि के अनुसार छानें' },
  filter_all: { en: 'All', ml: 'എല്ലാം', hi: 'सभी' },
  filter_short: { en: '1–2 Days', ml: '1–2 ദിവസങ്ങൾ', hi: '1-2 दिन' },
  filter_medium: { en: '3–4 Days', ml: '3–4 ദിവസങ്ങൾ', hi: '3-4 दिन' },
  filter_long: { en: '5+ Days', ml: '5+ ദിവസങ്ങൾ', hi: '5+ दिन' },
  filter_clear: { en: 'Clear Filters', ml: 'ഫിൽട്ടറുകൾ ഒഴിവാക്കാം', hi: 'फिल्टर हटाएं' },
  packages_showing: { en: 'Showing', ml: 'കാണിക്കുന്നത്', hi: 'दिखा रहा है' },
  packages_of: { en: 'of', ml: 'ല്‍', hi: 'का' },
  packages_no_match: { en: 'No packages match your filters.', ml: 'നിങ്ങൾ തിരഞ്ഞെടുത്തവയ്ക്ക് അനുയോജ്യമായ പാക്കേജുകൾ ലഭ്യമല്ല.', hi: 'आपकी पसंद के अनुसार कोई भी पैकेज नहीं मिला।' },
  packages_clear_all_filters: { en: 'Clear all filters', ml: 'എല്ലാ ഫിൽട്ടറുകളും ഒഴിവാക്കാം', hi: 'सभी फ़िल्टर हटाएँ' },

  // Package Detail Page
  package_not_found: { en: 'Package Not Found', ml: 'പാക്കേജ് ലഭ്യമല്ല', hi: 'पैकेज नहीं मिला' },
  package_not_found_p: { en: 'The tour package you\'re looking for doesn\'t exist.', ml: 'നിങ്ങൾ തിരയുന്ന പാക്കേജ് നിലവിലില്ല.', hi: 'जिस टूर पैकेज की आप तलाश कर रहे हैं उसका अस्तित्व नहीं है।' },
  back_to_packages: { en: 'Back to Packages', ml: 'പാക്കേജുകളിലേക്ക് തിരിച്ചുപോകാം', hi: 'पैकेजों पर वापस जाएं' },
  package_overview: { en: 'Overview', ml: 'വിവരണം', hi: 'अवलोकन' },
  package_day: { en: 'Day', ml: 'ദിവസം', hi: 'दिन' },
  package_itinerary_title: { en: 'Your Unique Journey', ml: 'നിങ്ങളുടെ യാത്രാ പദ്ധതി', hi: 'आपकी अनूठी यात्रा' },
  package_details_title: { en: 'Package Details', ml: 'പാക്കേജ് വിവരങ്ങൾ', hi: 'पैकेज विवरण' },
  package_included: { en: 'Included', ml: 'ഉൾപ്പെടുത്തിയിട്ടുള്ളവ', hi: 'शामिल' },
  package_not_included: { en: 'Not Included', ml: 'ഉൾപ്പെടാത്തവ', hi: 'शामिल नहीं' },
  package_bespoke_label: { en: 'Bespoke Itinerary', ml: 'സവിശേഷ യാത്രാപദ്ധതി', hi: 'विशेष यात्रा कार्यक्रम' },
  package_tailored_p: { en: 'Tailored to your budget and travel preferences.', ml: 'നിങ്ങളുടെ ബജറ്റിനും താൽപ്പര്യങ്ങൾക്കും അനുസരിച്ച് തയ്യാറാക്കിയത്.', hi: 'आपके बजट और यात्रा प्राथमिकताओं के अनुरूप।' },
  package_free_consultation: { en: 'Free Consultation & Custom Planning', ml: 'സൗജന്യ കൺസൾട്ടേഷനും പ്ലാനിംഗും', hi: 'मुफ्त परामर्श और कस्टम योजना' },
  package_other_enquiries: { en: 'Other Enquiries', ml: 'മറ്റ് അന്വേഷണങ്ങൾ', hi: 'अन्य पूछताछ' },
  package_direct_call: { en: 'Direct Call', ml: 'വിളിക്കൂ', hi: 'सीधी कॉल' },

  // Footer & Copy
  footer_bio: {
    en: 'Premium, locally-curated travel experiences across God\'s Own Country. Transparent pricing, local guides, and unforgettable journeys.',
    ml: 'ദൈവത്തിന്റെ സ്വന്തം നാട്ടിലുടനീളം പ്രാദേശികമായി ക്യൂറേറ്റ് ചെയ്ത മികച്ച യാത്രാ അനുഭവങ്ങൾ. സുതാര്യമായ വിലകൾ, പ്രാദേശിക ഗൈഡുകൾ, അവിസ്മരണീയമായ യാത്രകൾ.',
    hi: 'गॉड्स ओन कंट्री में प्रीमियम, स्थानीय रूप से क्यूरेटेड यात्रा अनुभव। पारदर्शी मूल्य निर्धारण, स्थानीय गाइड और अविस्मरणीय यात्राएं।'
  },
  footer_quick_links: { en: 'Quick Links', ml: 'ലിങ്കുകൾ', hi: 'त्वरित लिंक' },
  footer_reach_out: { en: 'Reach Out', ml: 'ബന്ധപ്പെടുക', hi: 'संपर्क करें' },
  copyright: { en: 'All rights reserved.', ml: 'എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.', hi: 'सर्वाधिकार सुरक्षित।' },
};
