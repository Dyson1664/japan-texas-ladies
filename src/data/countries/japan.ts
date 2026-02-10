// Import images
import japanHero2 from "@/assets/japan-hero2.jpg";
import japanHero3 from "@/assets/japan-hero3.jpg";
import japanGarden from "@/assets/japan-garden.jpg";
import japanTokyo from "@/assets/japan-tokyo.jpg";
import japanSushi from "@/assets/japan-sushi.jpg";
import japanTorii from "@/assets/japan-torii.jpg";
import japanMtFuji from "@/assets/japan-mt-fuji.jpg";

import texas1 from "@/assets/texas1.jpeg";
import texas2 from "@/assets/texas2.jpeg";
import texas3 from "@/assets/texas3.jpeg";
import texas4 from "@/assets/texas4.jpeg";
import texas5 from "@/assets/texas5.jpeg";
import texas6 from "@/assets/texas6.jpeg";
import texas7 from "@/assets/texas7.jpeg";







import texasday1 from "@/assets/texasday1.jpg";
import texasday2 from "@/assets/texasday2.jpg";
import texasday3 from "@/assets/texasday3.jpg";
import texasday5 from "@/assets/texasday5.jpeg";
import texasday from "@/assets/texasday.jpg";

import mtfujiReel from "@/assets/japan/mt-fuji.mp4";
import kyotoReel from "@/assets/japan/kyoto.mp4";


import kyotocover from "@/assets/japan/kyoto-cover.jpeg";
import mtfujicover from "@/assets/japan/mt-fuji-cover.jpeg";


// import japanDay01 from "@/assets/japan-day01-main-shibuya-crossing.jpg"; // Tokyo arrival + Shibuya
import japanDay01 from "@/assets/japan-day01-groupbb.jpg"; // Asakusa Sensō-ji / Kaminarimon

import japanDay03 from "@/assets/japan-day03-group.jpg"; // Meiji Shrine + Harajuku/Golden Gai
import japanDay04 from "@/assets/japan-day04-main-hakone-mt-fuji.jpg"; // Hakone Loop / Mt. Fuji views

import japantea from "@/assets/japan-tea2.jpg";
import japansword from "@/assets/japan-sword2.jpg";

import japanDay07 from "@/assets/japan-last-day.jpg"; // Kyoto checkout / farewell

import tile01 from "@/assets/japan-tile01.jpg";
import tile02 from "@/assets/japan-tile02.jpg";
import tile03 from "@/assets/japan-tile03.jpg";
import tile04 from "@/assets/japan-tile04.jpg";

// hotels (using available local assets)
import japanHero from "@/assets/japan-hero.jpg";

// hotels
import tokyohotel from "@/assets/tokyo-hotel.jpg";
import tokyohotel2 from "@/assets/tokyo-hotel-2.jpg";
import tokyohotel3 from "@/assets/tokyo-hotel-3.jpg";
import tokyohotel4 from "@/assets/tokyo-hotel-4.jpg";

import kyotohotel from "@/assets/kyoto-hotel.webp";
import kyotohotel2 from "@/assets/kyoto-hotel-2.jpg";
import kyotohotel3 from "@/assets/kyoto-hotel-3.jpg";
import kyotohotel4 from "@/assets/kyoto-hotel-4.jpg";


// Import icons for highlights
import { Home, Zap, Plane, Users, Soup, TreePine } from "lucide-react";

const japanOverview = {
  id: "japan-journey",
  slug: "japan",
  title: "Texas Ladies Best of Japan",
  tags: [],
  subtitle: "Discover the perfect harmony of ancient traditions and cutting-edge modernity",
  location: "Japan",
  duration: "8 days",
  heroImage: texas5,
  price: "$2,395",
  priceNote: "First 6 bookings, then $2,495",
  ctaLabel: "Reserve Now",
  route: ["Tokyo", "Mt. Fuji", "Kyoto"],
  aboutDescription: [
  "Discover Japan on a thoughtfully paced 8-day journey created for culture and ease. This Texas Ladies Get Outdoors & Travel experience takes you from the bright energy of Tokyo to the timeless beauty of Kyoto—blending iconic landmarks with meaningful moments.",
  "You’ll explore Japan’s traditions through tea ceremonies, temple visits, and carefully planned activities, with time to relax and take in your surroundings. From Mount Fuji views to serene gardens, the journey highlights both well-known sights and quieter corners.",
  "Every detail is thoughtfully planned to allow time for exploration and immersion in Japan’s history and daily life, showcasing the contrast between modern cities and centuries-old traditions across one of the world’s most fascinating countries."
]
,
  overviewGallery2x: [tile01, tile04, tile02, tile03],
  aboutImages: [japanGarden, japanTokyo],
};

export const japanData = {
  ...japanOverview,

  highlights: [
    {
      title: "Kyoto",
      image: kyotocover,
      video: kyotoReel
    },
    {
      title: "Mt. Fuji & Hakone Loop",
      image: mtfujicover,
      video: mtfujiReel
    },
  ],

  // What's Included Highlights - Japan specific
  whatsIncludedHighlights: [
    {
      icon: Home,
      title: "7 NIGHTS<br />ACCOMM",
      description: "Comfortable stays in well-located hotels",
    },
    {
      icon: Zap,
      title: "SIGNATURE<br />ACTIVITIES",
      description: "Tea ceremony, Sake Tasting, Temple visits, Shibuya Crossing, Bullet trains, Golden Gai",
      link: {
        text: "Explore the Inclusions",
        url: "#itinerary",
      },
    },
    {
      icon: Plane,
      title: "AIRPORT TRANSFER",
      description: "Train transfer to the hotel is covered by the tour’s provided IC card.",
    },
    {
      icon: Users,
      title: "CULTURAL<br />EXPERTS",
      description: "Knowledgeable local guide who speaks fluent English and provide deep cultural insights.",
    },
    {
      icon: Soup,
      title: "AUTHENTIC<br />CUISINE",
      description: "3 light breakfasts, 1 dinner.",
    },
    {
      icon: TreePine,
      title: "100% CARBON<br />NEUTRAL",
      description: "Your Japan journey is completely carbon neutral through our verified environmental program.",
    },
  ],
 accommodations: [
    {
      title: "THE KNOT TOKYO Shinjuku",
      description: "Stylish contemporary hotel with its own bakery in the heart of Tokyo's entertainment district with easy metro access.",
      images: [tokyohotel, tokyohotel2, tokyohotel3, tokyohotel4]

    },
    {
      title: "Prince Smart Inn Shijo Omiya",
      description: "Modern Kyoto hotel perfectly positioned for exploring ancient temples and traditional districts.",
      images: [kyotohotel2, kyotohotel, kyotohotel3, kyotohotel4]
    }
  ],

  itinerary: [
    // --- JAPAN: Days 1–4 (paste over your existing day 1–4 objects) ---
    {
      day: 1,
      title: "Tokyo Arrival & Welcome Dinner",
      location: "Tokyo",
      heroImage: texasday1,
      description:
        "Welcome to Tokyo! Upon arrival, your guide will assist you with an easy train transfer to the hotel. After checking in, take some time to relax or explore the nearby shopping districts. In the evening, meet your guide and travel crew for a welcome dinner featuring two hours of free-flow drinks. The perfect way to kick off your Japan adventure.",
      meals: "Dinner",
      accommodation: { name: "The Knot Tokyo Shinjuku" },
      highlights: "Dinner and free flow drinks,",
      transportation: {
          mode: "Train",
        from: "Narita/Haneda Airport",
        to: "The Knot Tokyo",
        duration: "≈ 60 Minutes by train",

      },
    },
    {
      day: 2,
      title: "Tokyo walking tour",
      location: "Tokyo",
      heroImage: texasday2,
      description:
        "We start in Asakusa, passing through the iconic Kaminari-mon Gate to Sensō-ji, Tokyo’s oldest temple. Enjoy a guided sake tasting at Premium Sake Pub Gashue, then explore Ameyoko Market for street food, snacks, and quirky finds. The evening is yours for dinner, followed by possible karaoke and classic Tokyo fun.",
      accommodation: { name: "The Knot Tokyo Shinjuku" },
      highlights: "Sake tasting, Temples",
    },
    {
      day: 3,
      title: "Explore Tokyo",
      location: "Tokyo",
      heroImage: texasday3,
      description:
        "Begin at the peaceful Meiji Jingu Shrine, hidden within a lush forest. Head to Harajuku's Takeshita Street for bold fashion and pop culture, followed by free time. Optional activities include the famous Shibuya Crossing, visiting quirky animal cafés or racing through the streets in a Mario Kart-style go-kart experience. At night, experience Tokyo nightlife in Golden Gai, famous for its tiny themed bars.",
      accommodation: { name: "The Knot Tokyo Shinjuku" },
      highlights: "Meiji Jingu Shrine, Shibuya Crossing, Golden Gai nightlife",
    },
    {
      day: 4,
      title: "Mt. Fuji Day (Hakone Loop) → Kyoto",
      location: "Tokyo → Kyoto",
      heroImage: japanHero,
      description:
        "Today is all about the journey. Travel toward Mount Fuji, riding cable cars, enjoying stunning views, and cruising by boat across Lake Ashi. Continue on to Kyoto via trains and bus, taking in Japan's beautiful countryside along the way.",
      accommodation: { name: "The Knot Tokyo Shinjuku" },
      highlights: "Hakone loop, Lake Ashi cruise, Owakudani ropeway, Mt Fuji views",
    },
    {
      day: 5,
      title: "Exploring Classics of Kyoto",
      location: "Kyoto",
      heroImage: texas2,
      description:
        "Begin with a peaceful walk through Fushimi Inari Taisha, passing beneath the glowing orange torii gates of the Senbon Torii. Then enjoy a traditional tea ceremony, where you’ll be dressed in kimonos and welcome to keep them on for the rest of the day, perfect for memorable photos. In the afternoon, explore the atmospheric streets around Kiyomizudera and the historic Gion district.",
      meals: "Light breakfast",
      accommodation: { name: "Prince Smart Inn Shijo Omiya" },
      highlights: "Tea ceremony (kimonos included), Kiyomizudera",
    },
    {
      day: 6,
      title: "Nara Park",
      location: "Kyoto",
      heroImage: texasday,
      description:
        "Today we explore more of Kyoto, starting with a visit to Todai-ji Temple (Great Buddha Hall), one of the city’s most iconic landmarks. We then travel to Nara, where we visit Nara Park and encounter the famous free-roaming sika deer. ",
      meals: "Light breakfast",
      accommodation: { name: "Prince Smart Inn Shijo Omiya" },
      highlights: "Nara Park, Great Buddha Hall",
    },
    {
      day: 7,
      title: "Kyoto — Free Day",
      location: "Kyoto",
      heroImage: texas7,
      description:
        "Today is all yours. After several incredible days exploring together, enjoy a free day in Kyoto to move at your own pace and dive deeper into whatever calls to you most. Whether you’re craving culture, nature, shopping, or food-hopping, Kyoto has endless options.",
      meals: "Light breakfast",
      accommodation: { name: "Prince Smart Inn Shijo Omiya" },
      highlights: "Shopping, Monkey Park",
    },
    {
      day: 8,
      title: "Sayōnara (check out)",
      location: "Kyoto",
      heroImage: texas4,
      description:
        "Check out and say goodbye to Japan and your travel crew, leaving with unforgettable memories and new friendships",
      meals: "Light breakfast",

    },
  ],

  included: [
    {
      title: "Transportation & Passes",
      items: [
        {
          text: "Pre-loaded IC transit card covering all itinerary travel + extra credit for airport → hotel transfer",
        },
      ],
    },
    {
      title: "Meals",
      items: [
        { text: "3 × Light breakfast" },
        { text: "1 × Dinner, 2 hours free flow" },

      ],
    },
    {
      title: "Tokyo Highlights",
      items: [
          { text: "Welcome Dinner" },
          { text: "Sake tasting experience" },
        { text: "Guided visit to Sensō-ji Temple" },
        { text: "Visit to Meiji Shrine" },
        { text: "Golden Gai night crawl (bar entrances not included)" },
      ],
    },
    {
      title: "Mount Fuji & Hakone",
      items: [
        { text: "Mount Fuji viewpoints (weather permitting)" },
        { text: "Lake Ashi pirate boat ride" },
        { text: "Hakone ropeway ride" },
      ],
    },
    {
      title: "Kyoto & Nara Experiences",
      items: [
        { text: "Matcha tea ceremony" },
        { text: "Kimono rental" },
        { text: "Fushimi Inari Shrine visit" },
        { text: "Nara Deer Park visit" },
        { text: "Tenryū-ji Temple" },
        { text: "Nishiki Market visit" },
      ],
    },
  ],
  faqs: [
    {
      question: "Is this an active walking tour?",
      answer:
        "This is a walking-focused trip. Expect to walk an average of 2–3 miles per day at a relaxed pace with frequent stops.",
    },
    {
      question: "Which airport do I need to fly into?",
      answer:
        "You can arrive at either Narita International Airport (NRT) or Tokyo International Airport (HND, a.k.a. Haneda).",
    },
    {
      question: "Which airport do I need to fly out from?",
      answer:
        "You can depart from Narita (NRT), Haneda (HND), or Osaka's Kansai International Airport (KIX), depending on your onward plans.",
    },
    {
      question: "What is the local currency?",
      answer: "Japanese Yen (JPY). Many places accept cards, but having some cash is useful for smaller shops and street food.",
    },
    {
      question: "What are the visa requirements?",
      answer:
        "Visa requirements depend on your nationality and length of stay. Please check your own government's travel site and Japan's official guidance. For U.S. travelers, see \"Japan International Travel Information\" from the U.S. Department of State: https://travel.state.gov",
    },
  ],

};
