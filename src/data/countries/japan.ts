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

//import japanDay01 from "@/assets/japan-day01-main-shibuya-crossing.jpg";      // Tokyo arrival + Shibuya
import japanDay01  from "@/assets/japan-day01-groupbb.jpg";               // Asakusa Sensō-ji / Kaminarimon

import japanDay02  from "@/assets/japan-day02-main-sensoji.jpg";               // Asakusa Sensō-ji / Kaminarimon
import japanDay03  from "@/assets/japan-day03-group.jpg";           // Meiji Shrine + Harajuku/Golden Gai
import japanDay04  from "@/assets/japan-day04-main-hakone-mt-fuji.jpg";        // Hakone Loop / Mt. Fuji views
import japanDay05  from "@/assets/japan-day05-main-fushimi-inari.jpg";

import japantea from "@/assets/japan-tea2.jpg";
import japansword from "@/assets/japan-sword2.jpg";

        // Fushimi Inari torii gates
import japanDay06  from "@/assets/japan-day06-main-nara-deer-park.jpg";        // Nara Deer Park + samurai class
import japanDay07  from "@/assets/japan-last-day.jpg";        // Kyoto checkout / farewell

import tile01  from "@/assets/japan-tile01.jpg";
import tile02  from "@/assets/japan-tile02.jpg";
import tile03  from "@/assets/japan-tile03.jpg";
import tile04  from "@/assets/japan-tile04.jpg";

import tokyoReel from "@/assets/japan/tokyo.mp4";
import kyotoReel from "@/assets/japan/kyoto.mp4";
import mtfujiReel from "@/assets/japan/mt-fuji.mp4";

import tokyocover from "@/assets/japan/tokyo-cover.jpeg";
import kyotocover from "@/assets/japan/kyoto-cover.jpeg";
import mtfujicover from "@/assets/japan/mt-fuji-cover.jpeg";

// Import icons for highlights
import { Home, Zap, Plane, Users, Soup, TreePine } from "lucide-react";

export const japanData = {
  id: "japan-journey",
  slug: "japan",
  title: "Japan Golden Route",
  tags: [
    { emoji: "🚀", label: "Adventure" },
    { emoji: "🪭", label: "Culture" },
    { emoji: "🧳", label: "Solo" }
  ],
  subtitle: "Discover the perfect harmony of ancient traditions and cutting-edge modernity",
  location: "Japan",
  duration: "7 days",
  heroImage: japanHero3,
  price: "USD $1,959",
  route: ["Tokyo", "Mt. Fuji", "Kyoto"],
  aboutDescription: [
    "Experience the mesmerizing contrast of Japan, where bullet trains glide past ancient temples and neon-lit cities coexist with serene gardens. This 7-day journey takes you from the bustling metropolis of Tokyo to the cultural heart of Kyoto.",
    "Immerse yourself in Japanese culture through tea ceremonies, temple visits, and authentic culinary experiences. From the iconic Mount Fuji to the peaceful bamboo groves, discover why Japan captivates travelers from around the world."
  ],
  overviewGallery2x:[tile01, tile04, tile02, tile03],
  aboutImages: [japanGarden, japanTokyo],


// Trip highlights — Japan (7 days)
highlights: [
  {
  title: "Tokyo – Sensō-ji to Shibuya",
  // description: "From ancient temples to neon nights. A seamless flow through the best of Tokyo.",
  image: tokyocover,
  video: tokyoReel
}
,
  {
    title: "Kyoto",
    /*description:
      "Walk the vermilion torii tunnels of Kyoto’s most photographed shrine—serene at sunrise and pure Kyoto magic.",
    */image: kyotocover,
    video: kyotoReel // Fushimi Inari day
  },
  {
    title: "Mt. Fuji & Hakone Loop",
    /*description:
      "Glide by ropeway over Owakudani, sail Lake Ashi on the pirate ship, and (weather permitting) catch iconic views of Mt. Fuji.",
    */
    image: mtfujicover,
    video: mtfujiReel// Hakone / Mt. Fuji day
  } ,
],



  // What's Included Highlights - Japan specific
whatsIncludedHighlights: [
  {
    icon: Home,
    title: "6 NIGHTS<br />ACCOMM",
    description: "Comfortable stays in well-located hotels/ryokan-style properties."
  },
  {
    icon: Zap,
    title: "SIGNATURE<br />ACTIVITIES",
    description: "Tea ceremonies, temple visits, bullet trains, Golden Gai, Samurai class & authentic experiences.",
    link: {
      text: "Explore the itinerary",
      url: "#itinerary"
    }
  },
  {
    icon: Plane,
    title: "AIRPORT PICKUP",
    description: "Train transfer to the hotel is covered by the tour’s provided IC card."
  },
  {
    icon: Users,
    title: "CULTURAL<br />EXPERTS",
    description: "Knowledgeable local guides who speak fluent English and provide deep cultural insights."
  },
  {
    icon: Soup,
    title: "AUTHENTIC<br />CUISINE",
    description: "3 breakfasts, 1 dinner."
  },
  {
    icon: TreePine,
    title: "100% CARBON<br />NEUTRAL",
    description: "Your Japan journey is completely carbon neutral through our verified environmental program."
  }
],

  itinerary: [
  // --- JAPAN: Days 1–4 (paste over your existing day 1–4 objects) ---
{
  day: 1,
  title: "Tokyo Arrival & Welcome Dinner",
  location: "Tokyo, Japan",
  heroImage: japanDay01,
  description:
    "Welcome to Tokyo! There’s no airport pickup—your guide will help with directions for the train (about 1 hour; recommended). Taxis are available but expensive. Check in, relax, or explore nearby shopping areas. Meet the guide and crew at 7:00 PM for a relaxed welcome dinner.",
  meals: "Dinner",
  accommodation: { name: "THE KNOT TOKYO Shinjuku" },
  highlights: "Self-guided neighborhood strolls, optional Mario Kart street karts, shopping districts",
  transportation: {
    from: "Narita/Haneda Airport",
    to: "The Knot Tokyo",
    duration: "≈ 60 Minutes by train",
    distance: "—"
  }
},
{
  day: 2,
  title: "Tokyo walking tour",
  location: "Tokyo, Japan",
  heroImage: japanTokyo,
  description:
    "We kick off in Asakusa, Tokyo’s historic heart—duck under the Kaminari-mon Gate and wander toward Sensō-ji, the city’s oldest temple, where red lanterns glow and incense drifts through the courtyards. At midday, pop into Premium Sake Pub Gashue for a guided tasting of rare regional brews paired with crisp rice crackers and local snacks. In the afternoon, follow the market path to Ameyoko, a once–postwar black market turned street-food playground. Snack on takoyaki, browse for quirky souvenirs, and soak up the buzz. Dinner is your choice to explore on your own or join a small group for cozy local restaurants. We’ll then cap the night with karaoke—carefree fun.",
  accommodation: { name: "THE KNOT TOKYO Shinjuku" },
  highlights: "Temples, sake tasting & street-food alleys, karaoke"
},

{
  day: 3,
  title: "Explore Tokyo",
  location: "Tokyo, Japan",
  heroImage: japanDay03,
  description:
    "We start in the serenity of Meiji-jingū Shrine, nestled in a forest just steps from the city. Then hop over to Harajuku’s Takeshita-dōri, where rainbow crepes, pastel goth, and cosplay culture collide. The afternoon is wide open—visit an owl café, thrift for vintage finds, or walk the elegant Omotesandō boulevard for designer eye candy. As the sun sets, we gather for dinner, then head into the legendary nightlife maze of Golden Gai in Shinjuku—six narrow alleyways, 200 pint-sized bars, and enough character to fill a film reel.",
  accommodation: { name: "THE KNOT TOKYO Shinjuku" },
  highlights: "Meiji-jingū, Harajuku Takeshita-dōri, Golden Gai nightlife"
},

{
  day: 4,
  // Title = keep your existing one (“GOOD”)
  title: "Mt. Fuji Day (Hakone Loop) → Kyoto",
  location: "Kyoto, Japan",
  heroImage: japanDay04,
  description:
    "Adventure day! We’re off to do the classic Hakone loop—see mountains, sail a pirate ship across mirror-still Lake Ashi, float by ropeway over the steaming vents of Owakudani, and if the skies are kind, gasp at sweeping views of Mount Fuji. By mid-afternoon, hop the legendary shinkansen from Odawara and rocket to timeless Kyoto. Once you arrive, slurp a soul-warming bowl of tonkotsu ramen or sink into a soothing soak at a neighborhood sentō. Scenic, playful, and unforgettable from start to finish.",
  accommodation: { name: "Prince Smart Inn Shijo Omiya" },
  // keep meals as they were in your file if you had one; otherwise omit
  highlights: "Hakone loop, Lake Ashi cruise, Owakudani ropeway, Mt Fuji views, shinkansen to Kyoto"
},

{
  day: 5,
  title: "Exploring Classics of Kyoto",
  location: "Kyoto, Japan",
  heroImage: japantea,
  description:
    "We start early with a peaceful visit to Fushimi Inari Taisha and its glowing orange torii gates—walking through the Senbon Torii just after sunrise is magic. Later in the morning, step into Kyoto’s refined past at the Hosomi Museum’s tea salon for a traditional tea ceremony with hands-on matcha whisking. Afternoon brings a stroll through the atmospheric lanes around Kiyomizu-dera and the historic Gion district. You may spot a geisha flitting between teahouses or discover handmade sweets in a tucked-away shop. Evening is yours—choose from Kyoto’s many kaiseki restaurants or catch a traditional geiko performance.",
  meals: "Breakfast",
  accommodation: { name: "Prince Smart Inn Shijo Omiya" },
  highlights: "Fushimi Inari (orange torii gates), tea ceremony (Hosomi Museum), Kiyomizu-dera, Gion"
}
,
{
  day: 6,
  title: "Kyoto — Adventure & Activities",
  location: "Kyoto & Nara, Japan",
  heroImage: japansword,
  description:
    "Today kicks off with a hands-on samurai class learning sword basics and diving into the legends, history, and culture of Japan’s warrior tradition. Then we zip to Nara on a scenic train ride (just under an hour). Wander Nara Park, home to over a thousand bowing sika deer—feed them rice crackers and then marvel at the mighty Great Buddha inside Tōdai-ji Temple. We’ll return to Kyoto in time for last-minute treasure hunting at Nishiki Market or one final round of karaoke before we say goodbye.",
  meals: "Breakfast",
  accommodation: { name: "Prince Smart Inn Shijo Omiya" },
  highlights: "Samurai class, Nara Park, Tōdai-ji Great Buddha"
},
{
  day: 7,
  title: "Sayōnara (check out)",
  location: "Kyoto, Japan",
  heroImage: japanDay07,
  description:
    "Sayōnara—for now! Check-out day in Kyoto wraps our adventure with smiles, hugs, and a few happy tears. Swap photos and contacts, promise future reunions, and take one last look at the city that brought everyone together. With souvenirs packed and new friendships that feel like old ones, we head out—hearts full and already dreaming of the next journey. Safe travels!",
  meals: "Breakfast",
  accommodation: { name: "Prince Smart Inn Shijo Omiya" },
  highlights: "Onward travel"
}

]
,
  summary: {
    duration: "7 Days",
    activities: "18 Experiences",
    areas: "2 Cities",
    type: "Culture & Nature"
  },
  included: [
  {
    title: "Transportation & Passes",
    items: [
      { text: "Pre-loaded IC transit card covering all itinerary travel + extra credit for airport → hotel transfer" }
    ]
  },
  {
    title: "Meals",
    items: [
      { text: "3 × Breakfast" },
      { text: "1 × Dinner" },
      { text: "Sake tasting experience" }
    ]
  },
  {
    title: "Tokyo Highlights",
    items: [
      { text: "Guided visit to Sensō-ji Temple" },
      { text: "Visit to Meiji Shrine" },
      { text: "Golden Gai night crawl (bar entrances not included)" }
    ]
  },
  {
    title: "Mount Fuji & Hakone",
    items: [
      { text: "Mount Fuji viewpoints (weather permitting)" },
      { text: "Lake Ashi pirate boat ride" },
      { text: "Hakone ropeway ride" }
    ]
  },
  {
    title: "Kyoto & Nara Experiences",
    items: [
      { text: "Matcha tea ceremony" },
      { text: "Kimono rental" },
      { text: "Fushimi Inari Shrine visit" },
      { text: "Kendō samurai class" },
      { text: "Nara Deer Park visit" },
      { text: "Bamboo Grove walk in Arashiyama" },
      { text: "Tenryū-ji Temple or Zen garden visit" },
      { text: "Nishiki Market visit" }
    ]
  }
]
,
  faqs: [
  {
    question: "Is this an active walking tour?",
    answer: "This is a walking-focused trip. Expect to walk an average of 2–3 miles per day at a relaxed pace with frequent stops."
  },
  {
    question: "Which airport do I need to fly into?",
    answer: "You can arrive at either Narita International Airport (NRT) or Tokyo International Airport (HND, a.k.a. Haneda)."
  },
  {
    question: "Which airport do I need to fly out from?",
    answer: "You can depart from Narita (NRT), Haneda (HND), or Osaka's Kansai International Airport (KIX), depending on your onward plans."
  },
  {
    question: "Do you have an age limit for tours?",
    answer: "Our tours cater to adventurous travelers aged 18–45, with most guests between 21–35. If you're close to this range and feel you're a good fit, reach out."
  },
  {
    question: "What is the local currency?",
    answer: "Japanese Yen (JPY). Many places accept cards, but having some cash is useful for smaller shops and street food."
  },
  {
    question: "What are the visa requirements?",
    answer: "Visa requirements depend on your nationality and length of stay. Please check your own government's travel site and Japan's official guidance. For U.S. travelers, see \"Japan International Travel Information\" from the U.S. Department of State: https://travel.state.gov"
  }
],

review: {
  testimonialText: "Did the Japan tour and it was honestly the best time of my life! A great mix of experiencing culture, food and nightlife. Would definitely recommend, one ticked off the bucket list!",
  author: "Daniel Riley, United Kingdom",
  images: []
}

};