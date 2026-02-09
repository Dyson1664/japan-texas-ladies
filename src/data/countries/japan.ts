// Import images
import japanHero from "@/assets/japan-hero.jpg";
import japanHero2 from "@/assets/japan-hero2.jpg";
import japanHero3 from "@/assets/japan-hero3.jpg";
import japanGarden from "@/assets/japan-garden.jpg";
import japanTokyo from "@/assets/japan-tokyo.jpg";
import japanSushi from "@/assets/japan-sushi.jpg";
import japanTorii from "@/assets/japan-torii.jpg";
import japanmtfuji from "@/assets/japan-mt-fuji.jpg";
import review1 from "@/assets/review-1.png";
import review2 from "@/assets/review-2.png";

// import japanDay01 from "@/assets/japan-day01-main-shibuya-crossing.jpg"; // Tokyo arrival + Shibuya
import japanDay01 from "@/assets/japan-day01-groupbb.jpg"; // Asakusa Sensō-ji / Kaminarimon

import japanDay02 from "@/assets/japan-day02-main-sensoji.jpg"; // Asakusa Sensō-ji / Kaminarimon
import japanDay03 from "@/assets/japan-day03-group.jpg"; // Meiji Shrine + Harajuku/Golden Gai
import japanDay04 from "@/assets/japan-day04-main-hakone-mt-fuji.jpg"; // Hakone Loop / Mt. Fuji views
import japanDay05 from "@/assets/japan-day05-main-fushimi-inari.jpg"; // Fushimi Inari torii gates

import japantea from "@/assets/japan-tea2.jpg";
import japansword from "@/assets/japan-sword2.jpg";

import japanDay06 from "@/assets/japan-day06-main-nara-deer-park.jpg"; // Nara Deer Park + samurai class
import japanDay07 from "@/assets/japan-last-day.jpg"; // Kyoto checkout / farewell

import tile01 from "@/assets/japan-tile01.jpg";
import tile02 from "@/assets/japan-tile02.jpg";
import tile03 from "@/assets/japan-tile03.jpg";
import tile04 from "@/assets/japan-tile04.jpg";

import tokyoReel from "@/assets/japan/tokyo.mp4";
import kyotoReel from "@/assets/japan/kyoto.mp4";
import mtfujiReel from "@/assets/japan/mt-fuji.mp4";

import tokyocover from "@/assets/japan/tokyo-cover.jpeg";
import kyotocover from "@/assets/japan/kyoto-cover.jpeg";
import mtfujicover from "@/assets/japan/mt-fuji-cover.jpeg";

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
  title: "Japan Golden Route",
  tags: [
    { emoji: "🚀", label: "Adventure" },
    { emoji: "🪭", label: "Culture" },
    { emoji: "🧳", label: "Solo" },
  ],
  subtitle: "Discover the perfect harmony of ancient traditions and cutting-edge modernity",
  location: "Japan",
  duration: "7 days",
  heroImage: japanHero3,
  price: "USD $1,959",
  route: ["Tokyo", "Mt. Fuji", "Kyoto"],
  aboutDescription: [
    "Discover the very best of Japan on this unforgettable 7-day journey. From Tokyo’s electric energy ancient temples, vibrant street-food alleys, cutting-edge fashion, and legendary nightlife to the timeless beauty of Kyoto’s shrines, tea ceremonies, and traditional streets, this trip captures Japan at its finest.",
    "Travel through iconic landscapes on the Hakone loop with Mount Fuji views, ride the world-famous bullet train, train like a samurai, and meet Nara’s bowing deer. Carefully designed to balance culture, adventure, food, and fun, this is the ultimate Japan experience—perfect for first-timers and travelers who want to see it all, the right way.",
  ],
  overviewGallery2x: [tile01, tile04, tile02, tile03],
  aboutImages: [japanGarden, japanTokyo],
};

export const japanData = {
  ...japanOverview,

  // Trip highlights — Japan (7 days)
  highlights: [
    {
      title: "Tokyo",
      /*description:
        "Glide by ropeway over Owakudani, sail Lake Ashi on the pirate ship, and (weather permitting) catch iconic views of Mt. Fuji.",
      */
      image: tokyocover,
      video: tokyoReel, // Hakone / Mt. Fuji day
    },
    {
      title: "Kyoto",
      /*description:
        "Walk the vermilion torii tunnels of Kyoto’s most photographed shrine—serene at sunrise and pure Kyoto magic.",
      */
      image: kyotocover,
      video: kyotoReel, // Fushimi Inari day
    },
    {
      title: "Mt. Fuji & Hakone Loop",
      /*description:
        "Glide by ropeway over Owakudani, sail Lake Ashi on the pirate ship, and (weather permitting) catch iconic views of Mt. Fuji.",
      */
      image: mtfujicover,
      video: mtfujiReel, // Hakone / Mt. Fuji day
    },
  ],

  // What's Included Highlights - Japan specific
  whatsIncludedHighlights: [
    {
      icon: Home,
      title: "6 NIGHTS<br />ACCOMM",
      description: "Comfortable stays in well-located hotels",
    },
    {
      icon: Zap,
      title: "SIGNATURE<br />ACTIVITIES",
      description: "Tea ceremonies, Samurai class, Temple visits, Bullet trains, Golden Gai",
      link: {
        text: "Explore the Inclusions",
        url: "#itinerary",
      },
    },
    {
      icon: Plane,
      title: "AIRPORT PICKUP",
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
      description:
        "Stylish contemporary hotel with its own bakery in the heart of Tokyo's entertainment district with easy metro access.",
      images: [tokyohotel, tokyohotel2, tokyohotel3, tokyohotel4],
    },
    {
      title: "Prince Smart Inn Shijo Omiya",
      description: "Modern Kyoto hotel perfectly positioned for exploring ancient temples and traditional districts.",
      images: [kyotohotel2, kyotohotel, kyotohotel3, kyotohotel4],
    },
  ],

  itinerary: [
    // --- JAPAN: Days 1–4 (paste over your existing day 1–4 objects) ---
    {
      day: 1,
      title: "Tokyo Arrival & Welcome Dinner",
      location: "Tokyo, Japan",
      heroImage: japanDay01,
      description:
        "Welcome to Tokyo! Upon arrival, your guide will assist you with an easy train transfer to the hotel. After checking in, take some time to relax or explore the nearby shopping districts. In the evening, meet your guide and travel crew for a welcome dinner featuring two hours of free-flow drinks. The perfect way to kick off your Japan adventure.",
      meals: "Dinner",
      accommodation: { name: "The Knot Tokyo Shinjuku" },
      highlights: "Dinner and free flow drinks,",
      transportation: {
        from: "Narita/Haneda Airport",
        to: "The Knot Tokyo",
        duration: "≈ 60 Minutes by train",
      },
    },
    {
      day: 2,
      title: "Tokyo walking tour",
      location: "Tokyo, Japan",
      heroImage: japanTokyo,
      description:
        "We start in Asakusa, passing through the iconic Kaminari-mon Gate to Sensō-ji, Tokyo’s oldest temple. Enjoy a guided sake tasting at Premium Sake Pub Gashue, then explore Ameyoko Market for street food, snacks, and quirky finds. The evening is yours for dinner, followed by possible karaoke and classic Tokyo fun.",
      accommodation: { name: "The Knot Tokyo Shinjuku" },
      highlights: "Sake tasting, Street-food alleys, Temples, Optional Mari Kart",
    },
    {
      day: 3,
      title: "Explore Tokyo",
      location: "Tokyo, Japan",
      heroImage: japanDay03,
      description:
        "Begin with a peaceful visit to Meiji-jingū Shrine, then dive into the color and energy of Harajuku’s Takeshita-dōri. Enjoy a free afternoon to explore cafés, vintage shops, or Omotesandō, before dinner and a night out in Shinjuku’s legendary Golden Gai.",
      accommodation: { name: "The Knot Tokyo Shinjuku" },
      highlights: "Meiji-jingū, Harajuku Takeshita-dōri, Golden Gai nightlife",
    },
    {
      day: 4,
      // Title = keep your existing one (“GOOD”)
      title: "Mt. Fuji Day (Hakone Loop) → Kyoto",
      location: "Kyoto, Japan",
      heroImage: japanDay04,
      description:
        "Adventure day! We’re off to do the classic Hakone loop, see mountains, sail a pirate ship across mirror-still Lake Ashi, float by ropeway over the steaming vents of Owakudani, and if the skies are kind, gasp at sweeping views of Mount Fuji. By mid-afternoon, hop the legendary shinkansen from Odawara and rocket to timeless Kyoto.",
      accommodation: { name: "Prince Smart Inn Shijo Omiya" },
      // keep meals as they were in your file if you had one; otherwise omit
      highlights: "Hakone loop, Lake Ashi cruise, Owakudani ropeway, Mt Fuji views",
    },
    {
      day: 5,
      title: "Exploring Classics of Kyoto",
      location: "Kyoto, Japan",
      heroImage: japantea,
      description:
        "Begin with a peaceful walk through Fushimi Inari Taisha, passing beneath the glowing orange torii gates of the Senbon Torii. Then enjoy a traditional tea ceremony, where you’ll be dressed in kimonos and welcome to keep them on for the rest of the day, perfect for memorable photos. In the afternoon, explore the atmospheric streets around Kiyomizudera and the historic Gion district.",
      meals: "Light breakfast",
      accommodation: { name: "Prince Smart Inn Shijo Omiya" },
      highlights: "Tea ceremony (kimonos included), Kiyomizudera",
    },
    {
      day: 6,
      title: "Kyoto — Adventure & Activities",
      location: "Kyoto & Nara, Japan",
      heroImage: japansword,
      description:
        "Start the day with a hands-on samurai class, learning sword basics and the legends behind Japan’s warrior tradition. Then take a scenic train ride to Nara, where you’ll stroll through Nara Park, home to the famous bowing sika deer, and visit the awe-inspiring Great Buddha at Tōdai-ji Temple. Return to Kyoto for last-minute shopping or a final night of fun before farewell.",
      meals: "Light breakfast",
      accommodation: { name: "Prince Smart Inn Shijo Omiya" },
      highlights: "Samurai class, Nara Park, Tōdai-ji Great Buddha",
    },
    {
      day: 7,
      title: "Sayōnara (check out)",
      location: "Kyoto, Japan",
      heroImage: japanDay07,
      description:
        "Check out and say goodbye to Japan and your travel crew, leaving with unforgettable memories and new friendships",
      meals: "Light breakfast",
    },
  ],
  summary: {
    duration: "7 Days",
    activities: "18 Experiences",
    areas: "2 Cities",
    type: "Culture & Nature",
  },
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
        { text: "Sake tasting experience" },
      ],
    },
    {
      title: "Tokyo Highlights",
      items: [
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
        { text: "Samurai class" },
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
      question: "Do you have an age limit for tours?",
      answer:
        "Our tours cater to adventurous travelers aged 18–45, with most guests between 21–35. If you're close to this range and feel you're a good fit, reach out.",
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
