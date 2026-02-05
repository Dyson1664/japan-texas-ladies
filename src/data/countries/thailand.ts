// Import images
import thailandHero from "@/assets/thailand-hero.jpg";
import thailandMarket from "@/assets/thailand-market.jpg";
import thailandTemple from "@/assets/thailand-temple.jpg";
import thailandPalace from "@/assets/thailand-palace.jpg";
import thailandBoat from "@/assets/thailand-boat.jpg";

// Import icons for highlights
import { Home, Zap, Plane, Users, UtensilsCrossed, TreePine } from "lucide-react";

export const thailandData = {
  id: "thailand-discovery",
  slug: "thailand",
  title: "Thailand Discovery",
  subtitle: "Experience the Land of Smiles through ancient temples, vibrant markets, and pristine beaches",
  location: "Thailand",
  duration: "9 days",
  heroImage: thailandHero,
  route: ["Bangkok", "Railay Beach", "Phi Phi Islands", "Phuket"],
  aboutDescription: [
    "Embark on an unforgettable journey through Thailand, where ancient traditions meet modern vibrancy. From the bustling streets of Bangkok to the serene beaches of the islands, this 8-day adventure showcases the best of what Thailand has to offer.",
    "Discover golden temples, sample incredible street food, explore floating markets, and relax on world-famous beaches. This carefully curated itinerary balances cultural immersion with natural beauty, creating memories that will last a lifetime."
  ],
  aboutImages: [thailandMarket, thailandTemple],

  // What's Included Highlights - Thailand specific
  whatsIncludedHighlights: [
    {
      icon: Home,
      title: "7 NIGHTS<br />ACCOMM",
      description: "From luxury Bangkok hotels to beachfront resorts and traditional Thai-style accommodations!"
    },
    {
      icon: Zap,
      title: "8 DAYS OF<br />THAI ADVENTURES",
      description: "Ancient temples, floating markets, Thai cooking classes, island hopping & cultural immersion!",
      link: {
        text: "Discover Thailand",
        url: "#itinerary"
      }
    },
    {
      icon: Plane,
      title: "AIRPORT TRANSFERS<br />& TRANSPORT",
      description: "Meet & greet in Bangkok plus all transfers including domestic flights and boat transfers."
    },
    {
      icon: Users,
      title: "THAI CULTURAL<br />EXPERTS",
      description: "Local guides fluent in English who share deep knowledge of Thai history and traditions."
    },
    {
      icon: UtensilsCrossed,
      title: "AUTHENTIC<br />THAI CUISINE",
      description: "7 Breakfasts, 5 Lunches & 4 Dinners plus hands-on Thai cooking classes and street food tours!"
    },
    {
      icon: TreePine,
      title: "100% CARBON<br />NEUTRAL",
      description: "Your Thailand journey supports local conservation and sustainable tourism initiatives."
    }
  ],
  itinerary: [
    {
  day: 1,
  title: "Bangkok Arrival & Welcome Dinner",
  location: "Bangkok, Thailand",
  heroImage: thailandPalace,
  description:
    "Your journey begins in the vibrant heart of Thailand. After landing at Suvarnabhumi, meet your private driver and head into the city. Check in, unwind, then board our private Sky Tower van for a scenic evening ride through neon-lit Bangkok. Gather for a welcome dinner—your first taste of Thailand’s bold flavors. Optional: rooftop swim or browse nearby night markets.",
  meals: "Dinner",
  accommodation: { name: "Chillex" },
  highlights: "Airport pickup, evening city drive, welcome dinner, optional rooftop swim & night market",
  transportation: {
    from: "Suvarnabhumi Airport",
    to: "Central Bangkok Hotel",
    duration: "45 Minutes",
    distance: "35 km"
  }
},
{
  day: 2,
  title: "Bangkok by River: Wat Arun & Wat Pho",
  location: "Bangkok, Thailand",
  heroImage: thailandMarket,
  description:
    "Fuel up with breakfast, then walk to the river for a breezy Chao Phraya cruise. Step ashore to explore two icons: the shimmering spires of Wat Arun and the golden Reclining Buddha at Wat Pho. A tuk-tuk returns you to the hotel. Free time to shop boutiques, sip iced Thai tea, or relax by the pool.",
  meals: "Breakfast",
  accommodation: { name: "Chillex" },
  highlights: "Chao Phraya river cruise, Wat Arun, Wat Pho, tuk-tuk ride, free afternoon"
},
{
  day: 3,
  title: "Fly South to Krabi • Railay Beach Arrival",
  location: "Railay Beach, Krabi",
  heroImage: thailandBoat,
  description:
    "Trade city streets for sandy shores. Catch a morning flight to Krabi, then transfer by road and long-tail boat to the car-free peninsula of Railay. Check in, hike to a cliffside viewpoint, and wander beachside walking streets. Sunset coconuts with limestone cliffs as your backdrop.",
  meals: "Breakfast",
  accommodation: { name: "Phutawan Resort" },
  highlights: "Domestic flight to Krabi, long-tail boat transfer, Railay viewpoint hike, sunset on the beach"
},
{
  day: 4,
  title: "Railay Adventures: Kayak & Climb",
  location: "Railay Beach, Krabi",
  heroImage: thailandBoat,
  description:
    "After a poolside breakfast, adventure takes over: kayak Railay’s emerald waters, then try guided rock climbing on the famous limestone routes (all levels welcome). In the evening, catch the beach fire show and soak up Railay’s laid-back vibe.",
  meals: "Breakfast",
  accommodation: { name: "Phutawan Resort" },
  highlights: "Sea kayaking, guided rock climbing, evening beach fire show"
},{
  day: 5,
  title: "Phi Phi Arrival: Beaches & Nightlife",
  location: "Phi Phi Islands, Krabi",
  heroImage: thailandBoat,
  description:
    "High-speed ferry to the world-famous Phi Phi Islands. Check in, grab a beachfront lunch, and join a guided walk to get your bearings—or jump straight into the sea. Afternoon vibes ramp up with pool parties, village strolling, and golden-hour swims. After dark, fire dancers and beach bars light up the shoreline.",
  meals: "Breakfast",
  accommodation: { name: "Chaokoh Phi Phi Hotel And Resort" },
  highlights: "Ferry transfer, guided walking tour, beachfront hangouts, pool party, island nightlife"
},
{
  day: 6,
  title: "Maya Bay, Pileh Lagoon & Island Hopping",
  location: "Phi Phi Islands, Krabi",
  heroImage: thailandBoat,
  description:
    "Ease into the morning—sunrise viewpoint hike or a lazy smoothie on the sand—then set sail for a full-day adventure. Swim the emerald waters of Pileh Lagoon, step onto iconic Maya Bay (conditions permitting), snorkel coral gardens, and discover hidden coves. Picnic lunch aboard before a mellow sunset return.",
  meals: "Breakfast & Lunch",
  accommodation: { name: "Chaokoh Phi Phi Hotel And Resort" },
  highlights: "Maya Bay, Pileh Lagoon, full-day island hopping, snorkeling gear included"
},
{
  day: 7,
  title: "Phuket Arrival: Markets, Massages & Sunset",
  location: "Phuket, Thailand",
  heroImage: thailandBoat,
  description:
    "Farewell Phi Phi—ferry to Phuket, then settle into your resort. The afternoon is yours: explore Patong’s lively streets, browse local crafts, or unwind with a traditional Thai massage. As evening falls, choose beach bars, street eats, or a calm coastal stroll.",
  meals: "Breakfast",
  accommodation: { name: "Zenseana Resort & Spa" },
  highlights: "Ferry to Phuket, resort downtime, Patong exploration, traditional Thai massage"
},
{
  day: 8,
  title: "Ethical Elephant Sanctuary & Farewell Dinner",
  location: "Phuket, Thailand",
  heroImage: thailandTemple,
  description:
    "A heartwarming day at an ethical elephant sanctuary—feed, bathe, and learn the stories behind these rescued giants while supporting real conservation work. After a rustic lunch on-site, return to the resort for pool time or last-minute shopping. In the evening, gather for a celebratory farewell dinner.",
  meals: "Breakfast & Lunch",
  accommodation: { name: "Zenseana Resort & Spa" },
  highlights: "Ethical elephant sanctuary visit, hands-on care, conservation learning, farewell dinner"
},
{
  day: 9,
  title: "Phuket Farewell",
  location: "Phuket, Thailand",
  heroImage: thailandPalace,
  description:
    "A light tropical breakfast, one last dip, and easy check-out. Continue your Thailand travels or head to the airport for your onward flight—khop khun kha/khrap for an unforgettable escape.",
  meals: "Breakfast",
  accommodation: { name: "Zenseana Resort & Spa" },
  highlights: "Tropical breakfast, beach strolls, departure day ease"
}
],
  summary: {
    duration: "8 Days",
    activities: "15 Experiences",
    areas: "3 Regions",
    type: "Culture & Adventure"
  },
  included: [
    {
      title: "Accommodation",
      items: [
        { text: "7 nights in carefully selected hotels" },
        { text: "Traditional Thai breakfast daily" },
        { text: "Pool and spa facilities access" }
      ]
    },
    {
      title: "Activities & Tours",
      items: [
        { text: "Grand Palace and temple entrances" },
        { text: "Floating market boat tour" },
        { text: "Ethical elephant sanctuary visit" },
        { text: "Traditional cooking class" }
      ]
    },
    {
      title: "Transportation",
      items: [
        { text: "Airport transfers throughout" },
        { text: "Domestic flight Bangkok-Chiang Mai" },
        { text: "Private transport for day trips" }
      ]
    },
    {
      title: "Culinary Experiences",
      items: [
        { text: "Street food tours in Bangkok" },
        { text: "Traditional Thai cooking class" },
        { text: "Floating market food sampling" }
      ]
    },
    {
      title: "Support & Guidance",
      items: [
        { text: "English-speaking local guides" },
        { text: "24/7 support during your trip" },
        { text: "Cultural orientation sessions" }
      ]
    },
    {
      title: "Special Experiences",
      items: [
        { text: "Sunset temple visits" },
        { text: "Traditional Thai massage session" },
        { text: "Local artisan workshop visits" }
      ]
    }
  ],
  faqs: [
    {
      question: "What is the best time to visit Thailand?",
      answer: "November to March is ideal with cooler, dry weather. April-May is hot season, and June-October is rainy season. Each season has its charm, and we plan activities accordingly."
    },
    {
      question: "What should I wear when visiting temples?",
      answer: "Dress modestly with covered shoulders and knees. Avoid shorts, tank tops, or revealing clothing. We recommend bringing a light scarf or shawl for easy temple visits."
    },
    {
      question: "Is Thai food very spicy?",
      answer: "Thai cuisine can be spicy, but most restaurants can adjust spice levels. Our culinary experiences include mild to medium spiced dishes, and we'll always ask about your spice preferences."
    },
    {
      question: "How much should I tip in Thailand?",
      answer: "Tipping isn't mandatory but appreciated. 10% at restaurants, 20-50 baht for hotel staff, and 100-200 baht per day for tour guides are standard amounts."
    },
    {
      question: "Can I drink tap water in Thailand?",
      answer: "We recommend bottled water for drinking. All our accommodations provide complimentary bottled water, and our restaurants use filtered water for cooking and ice."
    }
  ]
};