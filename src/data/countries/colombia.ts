// Import placeholder images - replace with actual Colombia images
import colombiaHero from "@/assets/colombia/colombia-hero.jpg";

import colombiaDay1 from "@/assets/colombia/colombia-day1.jpg";
import colombiaDay2 from "@/assets/colombia/colombia-day2.jpg";
import colombiaDay3 from "@/assets/colombia/colombia-day3.jpg";
import colombiaDay4 from "@/assets/colombia/colombia-day4.jpg";
import colombiaDay5 from "@/assets/colombia/colombia-day5.jpg";
import colombiaDay6 from "@/assets/colombia/colombia-day6.avif";
import colombiaDay7 from "@/assets/colombia/colombia-day7.jpg";


// Import icons for highlights
import { Home, Zap, Plane, Users, UtensilsCrossed, TreePine } from "lucide-react";

export const colombiaData = {
  id: "colombia-adventure",
  slug: "colombia",
  title: "Colombia Adventure",
  subtitle: "Discover vibrant culture, stunning landscapes, and rich history in the heart of South America",
  location: "Colombia",
  duration: "7 days",
  heroImage: colombiaHero,
  route: ["Medellín", "Rosario Islands", "Cartagena"],
  overviewGallery: [colombiaDay7, colombiaDay3, colombiaDay2, colombiaDay4],
  tags: [
    { emoji: "🏖️", label: "Beach" },
    { emoji: "🚀", label: "Adventure" },
    { emoji: "🏝️", label: "Island Hopping" },
    { emoji: "💃", label: "Culture" },
    { emoji: "🧳", label: "Solo" },
  ],
  aboutDescription: [
    "Experience the magic of Colombia, from the vibrant streets of Medellín to the breathtaking views of El Peñón Rock. Immerse yourself in rich coffee culture, colorful street art, and warm Colombian hospitality.",
    "This carefully curated journey takes you through Colombia's most iconic destinations, from learning about its complex history to climbing 650 steps for panoramic lake views."
  ],
  aboutImages: [colombiaDay2, colombiaDay3, colombiaDay5],


highlights: [
  {
    title: "Rosario Islands Private Boat Day",
    image: colombiaDay5,
  },
  {
    title: "El Peñón Rock",
    image: colombiaDay3,
  },
  {
    title: "Comuna 13 Street Art",
    image: colombiaDay2,
  },
],

// What's Included Highlights - Colombia specific
whatsIncludedHighlights: [
  {
    icon: Home,
    title: "6 NIGHTS<br />ACCOMMODATION",
    description:
      "6 nights in handpicked hotels across Medellín and Cartagena."
  },
  {
    icon: Zap,
    title: "7 DAYS OF<br />ADVENTURE",
    description:
      "Coffee tours, street art, El Peñón Rock, and island hopping.",
    link: {
      text: "Discover Colombia",
      url: "#itinerary"
    }
  },
  {
    icon: Plane,
    title: "AIRPORT TRANSFERS<br />& TRANSPORT",
    description:
      "All airport transfers, domestic flight, vans, and boat transport."
  },
  {
    icon: Users,
    title: "LOCAL<br />EXPERTS",
    description:
      "English-speaking guides with 24/7 local support."
  },
  {
    icon: UtensilsCrossed,
    title: "AUTHENTIC<br />CUISINE",
    description:
      "Welcome dinner, coffee tasting, local snacks, and beach lunch."
  },
  {
    icon: TreePine,
    title: "UNIQUE<br />EXPERIENCES",
    description:
      "Snorkeling, kayaking, paddle boarding, and party bus finale."
  }
],

  itinerary: [
    {
      day: 1,
      title: "Welcome to Medellín",
      location: "Medellín, Colombia",
      heroImage: colombiaDay1,
      description: "Your Colombian adventure begins in the City of Eternal Spring. After arriving and checking into your hotel, take time to settle in and explore the neighborhood at your own pace. Tonight, gather with your group for a welcome dinner featuring authentic Colombian cuisine—the perfect introduction to the flavors and warmth of this incredible country.",
      meals: "Dinner",
      accommodation: { name: "Hotel Park 10" },
      highlights: "Airport arrival, hotel check-in, welcome dinner, optional spa or shopping",
      transportation: {
        from: "Medellín Airport",
        to: "Hotel Park 10",
        duration: "45 Minutes",
        distance: "TBD"
      }
    },
    {
      day: 2,
      title: "City Tour & Comuna 13 Street Art",
      location: "Medellín, Colombia",
      heroImage: colombiaDay2,
      description: "Depart at 9am for a full city tour beginning at Memorial Park, where you'll learn about the complex history of Pablo Escobar and Medellín's remarkable transformation. Drive through diverse neighborhoods while your guide shares stories of resilience and renewal. Stop for authentic Colombian snacks before heading to the famous Comuna 13—once one of the most dangerous neighborhoods, now a vibrant outdoor gallery of colorful street art. Walk through this cultural hotspot and dive deep into the community's inspiring story of change.",
      meals: "Breakfast",
      accommodation: { name: "Hotel Park 10" },
      highlights: "Memorial Park tour, city neighborhoods, Colombian snacks, Comuna 13 street art, cultural immersion"
    },
    {
      day: 3,
      title: "Coffee Tour & El Peñón Rock",
      location: "Guatapé, Colombia",
      heroImage: colombiaDay3,
      description: "At 9am, board the bus and head into the stunning Colombian mountains for a private coffee tour. Watch how coffee grows, is picked, and processed, then taste fresh coffee paired with Colombian chocolate. Next, challenge yourself at the famous El Peñón Rock—climb 650 steps to the summit for absolutely breathtaking panoramic views over the lake. Continue to Guatapé, Colombia's most colorful town, where vibrant painted facades and rich culture make it an Instagram hotspot. Explore the charming streets before returning to Medellín.",
      meals: "Breakfast & Lunch",
      accommodation: { name: "Hotel Park 10" },
      highlights: "Private coffee tour, coffee tasting with chocolate, El Peñón Rock climb, Guatapé colorful town"
    },
    {
      day: 4,
      title: "Fly to Cartagena",
      location: "Cartagena, Colombia",
      heroImage: colombiaDay4,
      description: "Today we fly to the beautiful city of Cartagena, located on the stunning Caribbean Sea. After our travel day, check into your hotel and take time to relax. The rest of the day is yours to explore—wander the amazing cobblestone streets, browse colorful shops, and soak in this vibrant city's incredible atmosphere and nightlife.",
      meals: "Breakfast",
      accommodation: { name: "Hotel Don Pedro De Heredia" },
      highlights: "Domestic flight to Cartagena, hotel check-in, free time to explore, shopping & nightlife",
      transportation: {
        from: "Medellín",
        to: "Cartagena",
        duration: "1.5 Hours",
        distance: "Flight"
      }
    },
    {
      day: 5,
      title: "Rosario Islands Private Boat Day",
      location: "Rosario Islands, Colombia",
      heroImage: colombiaDay5,
      description: "Experience paradise as we head to a private island in the Rosario Islands aboard our very own luxury speedboat. Spend the day kayaking, paddle boarding, and snorkeling in the crystal-clear Caribbean waters. Relax on pristine beaches, soak up the sun, and enjoy refreshing cocktails with your feet in the sand. This is Caribbean living at its finest.",
      meals: "Breakfast & Lunch",
      accommodation: { name: "Hotel Don Pedro De Heredia" },
      highlights: "Private luxury speedboat, Rosario Islands, kayaking, paddle boarding, snorkeling, beach club, cocktails"
    },
    {
      day: 6,
      title: "City Tour & Farewell Party Bus",
      location: "Cartagena, Colombia",
      heroImage: colombiaDay6,
      description: "Start your morning at your own pace—enjoy a leisurely breakfast, explore local cafes, treat yourself to a spa session, or browse the charming shops. In the afternoon, join a walking tour through Cartagena's historic walled city and learn about its rich history and vibrant culture. As evening falls, we celebrate one last night together aboard the famous party buses that tour the city streets—the perfect send-off before we say goodbye!",
      meals: "Breakfast",
      accommodation: { name: "Hotel Don Pedro De Heredia" },
      highlights: "Free morning, spa & shopping, historic city walking tour, farewell party bus"
    },
    {
      day: 7,
      title: "Farewell Cartagena",
      location: "Cartagena, Colombia",
      heroImage: colombiaDay7,
      description: "Enjoy your final Colombian breakfast before checking out. Depending on your flight time, you may have a few hours to grab last-minute souvenirs or enjoy one more coffee in the Caribbean sun. Say goodbye to new friends and take home unforgettable memories of your Colombian adventure. ¡Hasta luego!",
      meals: "Breakfast",
      accommodation: { name: "Departure Day" },
      highlights: "Final breakfast, hotel checkout, airport transfer, departure"
    }
  ],
  summary: {
    duration: "7 Days",
    activities: "12+ Experiences",
    areas: "2 Regions",
    type: "Culture & Adventure"
  },
  included: [
    {
      title: "Accommodation",
      items: [
        { text: "6 nights in carefully selected hotels" },
        { text: "Hotel Park 10 in Medellín (3 nights)" },
        { text: "Hotel Don Pedro De Heredia in Cartagena (3 nights)" }
      ]
    },
    {
      title: "Activities & Tours",
      items: [
        { text: "Memorial Park & city tour" },
        { text: "Comuna 13 street art walking tour" },
        { text: "Private coffee plantation tour" },
        { text: "El Peñón Rock climb & Guatapé" },
        { text: "Rosario Islands private boat day" },
        { text: "Cartagena historic walking tour" }
      ]
    },
    {
      title: "Transportation",
      items: [
        { text: "Airport transfers throughout" },
        { text: "Domestic flight Medellín to Cartagena" },
        { text: "Air-conditioned private van" },
        { text: "Private luxury speedboat to islands" }
      ]
    },
    {
      title: "Culinary Experiences",
      items: [
        { text: "Welcome dinner in Medellín" },
        { text: "Coffee tasting with Colombian chocolate" },
        { text: "Authentic Colombian snacks" },
        { text: "Beach club lunch on Rosario Islands" }
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
        { text: "Kayaking & paddle boarding" },
        { text: "Snorkeling in Caribbean waters" },
        { text: "Farewell party bus experience" }
      ]
    }
  ],
faqs: [
  {
    question: "Where does the trip start & finish?",
    answer: "The trip starts in Medellín and finishes in Cartagena."
  },
  {
    question: "Which airport do I need to fly into?",
    answer: "You will need to fly into José María Córdova International Airport (MDE) in Medellín."
  },
  {
    question: "What is the closest airport to the end destination?",
    answer: "Rafael Núñez International Airport (CTG) in Cartagena."
  },
  {
    question: "How do I get back to the start destination, and is this included in the price?",
    answer:
      "The best option is to take a flight back to Medellín International Airport (MDE). " +
      "This flight is not included in the price and typically costs around $70."
  },
  {
    question: "What kind of accommodation is included on this trip?",
    answer: "Accommodation is in twin-bed hotel rooms throughout the trip."
  },
  {
    question: "How much is a pre-night?",
    answer:
      "If you would like to arrange a pre-night stay, please email bookings@imaginebeyondtravel.com for pricing and availability."
  },
  {
    question: "What is the local currency?",
    answer:
      "The local currency is the Colombian Peso (COP). We recommend carrying some cash for smaller purchases, while cards are widely accepted in cities."
  }
],

  review: {
    testimonialText: "I had an amazing trip with Imagine Beyond Travel. Everything was smooth, well-organized, and perfectly balanced with adventure, culture, and relaxation. Our tour guide was fantastic. Highly recommend.",
    author: "Montana Rae, USA",
    images: [],
    disableReadMore: true
  }
};
