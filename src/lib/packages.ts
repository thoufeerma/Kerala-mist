export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface TourPackage {
  slug: string;
  title: string;
  duration: string;
  nights: number;
  days: number;
  price: number;
  priceLabel: string;
  highlights: string[];
  image: string;
  gallery: string[];
  overview: string;
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  tag?: string;
}

export const packages: TourPackage[] = [
  {
    slug: 'munnar-hills-retreat',
    title: 'Munnar Hills Retreat',
    duration: '3 Days / 2 Nights',
    nights: 2,
    days: 3,
    price: 8999,
    priceLabel: '₹8,999',
    highlights: ['Hill Station', 'Tea Gardens', 'Wildlife', 'Waterfalls'],
    image: '/assets/packages/munnar.png',
    gallery: [
      '/assets/packages/munnar.png',
      'https://images.unsplash.com/photo-1625505826533-5c80aca7d157?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop',
    ],
    overview:
      'Experience the misty tea gardens, serene waterfalls, and breathtaking viewpoints of Munnar — the Kashmir of South India. Wake up to cool mountain air, explore sprawling plantations, and encounter rare wildlife at Eravikulam National Park.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Mattupetty Dam',
        description:
          'Arrive at Munnar and check into your resort. After freshening up, visit Mattupetty Dam and the Echo Point. Evening walk through the tea gardens followed by a traditional Kerala dinner.',
      },
      {
        day: 2,
        title: 'Eravikulam & Top Station',
        description:
          'Start early for Eravikulam National Park to spot the endangered Nilgiri Tahr. Visit Top Station for panoramic views of the Western Ghats. Afternoon visit to a tea factory and the Tea Museum.',
      },
      {
        day: 3,
        title: 'Waterfalls & Departure',
        description:
          'Morning visit to Attukal and Lakkam waterfalls. Enjoy a leisurely breakfast and check out. Optional stop at spice gardens on the way to your drop-off point.',
      },
    ],
    included: [
      '2 nights premium resort stay',
      'Daily breakfast & dinner',
      'Private AC vehicle',
      'Expert local guide',
      'Entry fees to all attractions',
      'Welcome drink on arrival',
    ],
    excluded: [
      'Airfare / train tickets',
      'Lunch expenses',
      'Personal shopping',
      'Travel insurance',
      'Tips & gratuities',
    ],
    tag: 'Best Seller',
  },
  {
    slug: 'alleppey-backwaters',
    title: 'Alleppey Backwaters',
    duration: '2 Days / 1 Night',
    nights: 1,
    days: 2,
    price: 6499,
    priceLabel: '₹6,499',
    highlights: ['Houseboat', 'Backwaters', 'Village Life', 'Sunset Cruise'],
    image: '/assets/packages/alleppey.png',
    gallery: [
      '/assets/packages/alleppey.png',
      'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&auto=format&fit=crop',
    ],
    overview:
      'Cruise through the calm emerald backwaters in a traditional premium houseboat. Enjoy authentic Kerala cuisine prepared onboard, witness stunning village life along the canals, and experience an unforgettable sunset over the backwaters.',
    itinerary: [
      {
        day: 1,
        title: 'Board Houseboat & Backwater Cruise',
        description:
          'Check in at Alleppey boat jetty at noon. Board your private premium houseboat and begin your cruise through the scenic backwater canals. Enjoy a freshly prepared Kerala lunch onboard. Evening stop for a village walk and sunset views.',
      },
      {
        day: 2,
        title: 'Morning Cruise & Departure',
        description:
          'Wake up to the sounds of nature on the backwaters. Enjoy a traditional breakfast onboard. Continue cruise through Punnamada Lake and narrow canals. Disembark by 10 AM with transfer back to your drop-off point.',
      },
    ],
    included: [
      '1 night premium houseboat stay',
      'All meals onboard (lunch, dinner, breakfast)',
      'Private houseboat with AC bedroom',
      'Backwater cruise with experienced crew',
      'Village walk experience',
    ],
    excluded: [
      'Airfare / train tickets',
      'Beverages & snacks',
      'Personal expenses',
      'Travel insurance',
    ],
  },
  {
    slug: 'wayanad-wilderness',
    title: 'Wayanad Wilderness',
    duration: '4 Days / 3 Nights',
    nights: 3,
    days: 4,
    price: 12999,
    priceLabel: '₹12,999',
    highlights: ['Wildlife', 'Waterfalls', 'Caves', 'Bamboo Forest'],
    image: '/assets/packages/wayanad.png',
    gallery: [
      '/assets/packages/wayanad.png',
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e13?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&auto=format&fit=crop',
    ],
    overview:
      'Dive into the lush green forests of Wayanad, exploring ancient Edakkal Caves, majestic waterfalls, serene lakes, and high-altitude mountain passes. Perfect for nature lovers and adventure seekers looking for an off-the-beaten-path Kerala experience.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Pookode Lake',
        description:
          'Arrive at Wayanad and check into your eco-resort. Visit the picturesque Pookode Lake for a peaceful evening boat ride surrounded by hills and forests.',
      },
      {
        day: 2,
        title: 'Edakkal Caves & Soochipara Falls',
        description:
          'Trek up to the prehistoric Edakkal Caves with ancient petroglyphs. Post-lunch, visit the stunning three-tiered Soochipara Waterfalls for swimming and relaxation.',
      },
      {
        day: 3,
        title: 'Wildlife Safari & Bamboo Forest',
        description:
          'Morning jeep safari at Muthanga Wildlife Sanctuary. Afternoon trek through the iconic bamboo forests. Evening bonfire and BBQ at the resort.',
      },
      {
        day: 4,
        title: 'Banasura Sagar & Departure',
        description:
          'Visit the Banasura Sagar Dam — the largest earth dam in India. Enjoy speed boating. Lunch and check out with transfer to your drop-off point.',
      },
    ],
    included: [
      '3 nights eco-resort stay',
      'Daily breakfast & dinner',
      'Private AC vehicle for all transfers',
      'Safari entry & guide fees',
      'Trekking guide',
      'Bonfire & BBQ night',
    ],
    excluded: [
      'Airfare / train tickets',
      'Lunch expenses',
      'Personal shopping',
      'Travel insurance',
      'Camera fees at attractions',
    ],
    tag: 'Adventure Pick',
  },
  {
    slug: 'kochi-heritage-walk',
    title: 'Kochi Heritage Walk',
    duration: '2 Days / 1 Night',
    nights: 1,
    days: 2,
    price: 5499,
    priceLabel: '₹5,499',
    highlights: ['Heritage', 'Fort Kochi', 'Chinese Nets', 'Spice Markets'],
    image: '/assets/packages/kochi.png',
    gallery: [
      '/assets/packages/kochi.png',
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&auto=format&fit=crop',
    ],
    overview:
      'Discover the historical trails of Fort Kochi — the Queen of the Arabian Sea. Walk through colonial architecture, see the iconic Chinese fishing nets at sunset, explore vibrant spice markets, and experience the unique blend of Portuguese, Dutch, and British heritage.',
    itinerary: [
      {
        day: 1,
        title: 'Fort Kochi Walking Tour',
        description:
          'Arrive in Kochi and check into your heritage hotel. Walking tour through Fort Kochi covering St. Francis Church, Santa Cruz Basilica, and the Dutch Palace. Evening at the Chinese fishing nets with a fresh seafood dinner by the waterfront.',
      },
      {
        day: 2,
        title: 'Markets, Marine Drive & Departure',
        description:
          'Morning visit to the famous Jew Town spice market and Mattancherry antique shops. Cruise along Marine Drive. Visit the Kerala Folklore Museum. Post-lunch transfer to your onward destination.',
      },
    ],
    included: [
      '1 night heritage hotel stay',
      'Daily breakfast',
      'Expert heritage walking guide',
      'Harbour cruise tickets',
      'Seafood dinner experience',
    ],
    excluded: [
      'Airfare / train tickets',
      'Lunch expenses',
      'Shopping purchases',
      'Travel insurance',
    ],
  },
  {
    slug: 'thekkady-periyar',
    title: 'Thekkady & Periyar',
    duration: '3 Days / 2 Nights',
    nights: 2,
    days: 3,
    price: 9999,
    priceLabel: '₹9,999',
    highlights: ['Wildlife', 'Spice Garden', 'Bamboo Rafting', 'Periyar Lake'],
    image: '/assets/packages/munnar.png',
    gallery: [
      '/assets/packages/munnar.png',
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e13?w=800&auto=format&fit=crop',
    ],
    overview:
      'Explore the renowned Periyar Tiger Reserve and the aromatic spice plantations of Thekkady. Enjoy bamboo rafting on Periyar Lake, trek through elephant corridors, and immerse yourself in a traditional Kalaripayattu martial arts performance.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Spice Plantation Tour',
        description:
          'Arrive at Thekkady and check into your resort. Afternoon guided tour of an organic spice plantation — see cardamom, pepper, cinnamon, and vanilla growing in their natural habitat. Evening Kalaripayattu martial arts show.',
      },
      {
        day: 2,
        title: 'Periyar Lake & Nature Walk',
        description:
          'Morning bamboo rafting on Periyar Lake inside the Tiger Reserve. Afternoon guided nature walk through the reserve — spot elephants, bison, and exotic birds. Evening free for local market exploration.',
      },
      {
        day: 3,
        title: 'Elephant Junction & Departure',
        description:
          'Visit Elephant Junction for an elephant ride and bathing experience. Visit the Chellarkovil viewpoint for views of Tamil Nadu plains. Checkout and transfer to your next destination.',
      },
    ],
    included: [
      '2 nights resort stay',
      'Daily breakfast & dinner',
      'Private AC vehicle',
      'Spice plantation guided tour',
      'Bamboo rafting tickets',
      'Kalaripayattu show tickets',
    ],
    excluded: [
      'Airfare / train tickets',
      'Lunch expenses',
      'Elephant ride charges',
      'Personal shopping',
      'Travel insurance',
    ],
  },
  {
    slug: 'complete-kerala-circuit',
    title: 'Complete Kerala Circuit',
    duration: '7 Days / 6 Nights',
    nights: 6,
    days: 7,
    price: 24999,
    priceLabel: '₹24,999',
    highlights: ['Full State Tour', 'Houseboat', 'Hills', 'Beach', 'Heritage'],
    image: '/assets/packages/alleppey.png',
    gallery: [
      '/assets/packages/kochi.png',
      '/assets/packages/munnar.png',
      '/assets/packages/alleppey.png',
      '/assets/packages/wayanad.png',
    ],
    overview:
      'The ultimate Kerala experience — covering Kochi, Munnar, Thekkady, Alleppey, and Kovalam in one comprehensive circuit. From heritage walks and hill stations to wildlife, backwaters, and beaches, this package lets you experience the full magic of God\'s Own Country.',
    itinerary: [
      {
        day: 1,
        title: 'Kochi Arrival & City Tour',
        description:
          'Arrive at Kochi airport. Visit Fort Kochi, Chinese Fishing Nets, and St. Francis Church. Evening at Marine Drive. Overnight at heritage hotel.',
      },
      {
        day: 2,
        title: 'Kochi to Munnar',
        description:
          'Drive to Munnar (130 km, ~4 hrs). Stop at Cheeyappara Waterfalls en route. Visit Tea Museum and Mattupetty Dam. Overnight at Munnar resort.',
      },
      {
        day: 3,
        title: 'Munnar Exploration',
        description:
          'Full day in Munnar — Eravikulam National Park, Top Station, and Kundala Lake. Visit spice gardens. Overnight at Munnar.',
      },
      {
        day: 4,
        title: 'Munnar to Thekkady',
        description:
          'Drive to Thekkady (110 km, ~3.5 hrs). Afternoon spice plantation tour. Evening Kalaripayattu show and Kathakali dance performance. Overnight at Thekkady.',
      },
      {
        day: 5,
        title: 'Periyar & Transfer to Alleppey',
        description:
          'Morning Periyar Lake boat cruise. Drive to Alleppey (140 km, ~4 hrs). Board premium houseboat by 12:30 PM. Backwater cruise with all meals onboard.',
      },
      {
        day: 6,
        title: 'Alleppey to Kovalam',
        description:
          'Disembark houseboat. Drive to Kovalam (170 km, ~4 hrs). Afternoon at Kovalam Beach. Visit Vizhinjam Rock Cut Cave Temple. Sunset at the lighthouse. Overnight at beach resort.',
      },
      {
        day: 7,
        title: 'Kovalam & Departure',
        description:
          'Morning at leisure on the beach. Visit Padmanabhaswamy Temple in Trivandrum. Transfer to Trivandrum airport for departure.',
      },
    ],
    included: [
      '6 nights accommodation (mix of resorts, heritage hotel, houseboat)',
      'Daily breakfast & dinner',
      'Private AC SUV (Innova) with driver',
      'All sightseeing as per itinerary',
      'Houseboat with all meals',
      'Expert local guides at each destination',
      'Airport pickup & drop-off',
    ],
    excluded: [
      'Airfare / train tickets',
      'Lunch expenses (except houseboat day)',
      'Entry fees to optional attractions',
      'Personal shopping & expenses',
      'Travel insurance',
      'Tips & gratuities',
      'GST (5%) applicable extra',
    ],
    tag: 'Most Popular',
  },
];

export function getPackageBySlug(slug: string): TourPackage | undefined {
  return packages.find((pkg) => pkg.slug === slug);
}

export function getAllSlugs(): string[] {
  return packages.map((pkg) => pkg.slug);
}
