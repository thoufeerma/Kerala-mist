import { Language } from './translations';

export interface PopularDestination {
  name: { [K in Language]: string };
  image: string;
  description: { [K in Language]: string };
}

export const popularDestinations: PopularDestination[] = [
  {
    name: { en: 'Munnar', ml: 'മൂന്നാർ', hi: 'मुन्नार' },
    image: 'https://plus.unsplash.com/premium_photo-1697730334419-fba83fe143b7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&auto=format&fit=crop',
    description: {
      en: 'Breathtaking tea gardens and misty mountain peaks.',
      ml: 'മനോഹരമായ തേയിലത്തോട്ടങ്ങളും പുകമഞ്ഞുള്ള മലനിരകളും.',
      hi: 'लुभावने चाय के बागान और धुंधली पहाड़ी चोटियाँ।'
    }
  },
  {
    name: { en: 'Thekkady', ml: 'തേക്കടി', hi: 'ठेक्कडी' },
    image: 'https://images.unsplash.com/photo-1675174021956-1bfd697f783e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&auto=format&fit=crop',
    description: {
      en: 'Wildlife safaris and organic spice plantations.',
      ml: 'വന്യജീവി സഫാരികളും ജൈവ സുഗന്ധവ്യഞ്ജന തോട്ടങ്ങളും.',
      hi: 'वन्यजीव सफारी और जैविक मसाला बागान।'
    }
  },
  {
    name: { en: 'Alleppey', ml: 'ആലപ്പുഴ', hi: 'एलेप्पी' },
    image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=800&auto=format&fit=crop',
    description: {
      en: 'Serene backwater cruises and traditional houseboats.',
      ml: 'ശാന്തമായ കായൽ യാത്രകളും പരമ്പരാഗത ഹൗസ്ബോട്ടുകളും.',
      hi: 'शांत बैकवाटर क्रूज और पारंपरिक हाउसबोट।'
    }
  },
  {
    name: { en: 'Varkala', ml: 'വർക്കല', hi: 'वरकला' },
    image: 'https://images.unsplash.com/photo-1621788546583-7ecc391343f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&auto=format&fit=crop',
    description: {
      en: 'Stunning red cliffs overlooking the Arabian Sea.',
      ml: 'അറബിക്കടലിനഭിമുഖമായുള്ള അതിമനോഹരമായ ചുവന്ന പാറക്കൂട്ടങ്ങൾ.',
      hi: 'अरब सागर के सामने आश्चर्यजनक लाल चट्टानें।'
    }
  },
  {
    name: { en: 'Trivandrum', ml: 'തിരുവനന്തപുരം', hi: 'त्रिवेंद्रम' },
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&auto=format&fit=crop',
    description: {
      en: 'Cultural capital with the world\'s richest temple.',
      ml: 'ലോകത്തിലെ ഏറ്റവും സമ്പന്നമായ ക്ഷേത്രമുള്ള സാംസ്കാരിക തലസ്ഥാനം.',
      hi: 'दुनिया के सबसे अमीर मंदिर वाला सांस्कृतिक राजधानी।'
    }
  },
  {
    name: { en: 'Kovalam', ml: 'കോവളം', hi: 'कोवलम' },
    image: 'https://images.unsplash.com/photo-1586030138336-4a854c6ddb5f?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&auto=format&fit=crop',
    description: {
      en: 'Iconic lighthouse beaches and calm blue waters.',
      ml: 'പ്രശസ്തമായ ലൈറ്റ് ഹൗസ് ബീച്ചുകളും നീല ജലാശയങ്ങളും.',
      hi: 'प्रतिष्ठित लाइटहाउस समुद्र तट और शांत नीला पानी।'
    }
  }
];
