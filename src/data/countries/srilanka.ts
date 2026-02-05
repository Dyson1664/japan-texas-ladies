// Import images
import srilankaHero from "@/assets/srilanka-hero.jpg";
import srilankaTea from "@/assets/srilanka-tea.jpg";
import srilankaBeach from "@/assets/srilanka-beach.jpg";
import srilankaColombo from "@/assets/srilanka-colombo.png";
import sigiriyaRock from "@/assets/sigiriya-rock.jpg";

// 2x (retina) gallery images — Sri Lanka (4 tiles)
import tile1_800_srilanka from "@/assets/srilanka-tile2.jpg";
import tile2_800_srilanka from "@/assets/tile2_800_srilanka.webp";
import tile3_800_srilanka from "@/assets/tile3_800_srilanka.webp";
import tile4_800_srilanka from "@/assets/srilanka-tile.jpg";

import mirissaBeach from "@/assets/srilanka-mirissa-beach.jpg";
import hillCountryTrain from "@/assets/srilanka-hill-country-train.jpg";

// Review images
import review1 from "@/assets/review-1.png";
import review2 from "@/assets/review-2.png";

import srilankaDay02 from "@/assets/srilanka-day02-temple.webp";
import srilankaDay04 from "@/assets/srilanka-day04-main-temple-of-tooth.jpg";
import srilankaDay05 from "@/assets/srilanka-day05-main-kandy-2.jpg";
import srilankaDay06 from "@/assets/srilanka-day05-ella-bridge.jpg";
import srilankaDay07 from "@/assets/srilanka-day07-little-adams-peak.jpg";

import srilankaDay08 from "@/assets/india-high-safari.jpg";
import srilankaDay09 from "@/assets/srilanka-day09-main-surfing.jpg";
import srilankaDay10 from "@/assets/srilanka-day10-main-mirissa-beach.jpg";
import srilankaDay11 from "@/assets/srilanka-day11-main-goodbye-group-photo.jpg"; // only if you actually have Day 11

import videotrain from "@/assets/sri-lanka/sri-lanka-train.mp4";
import videorock from "@/assets/sri-lanka/sri-lanka-rock.mp4";
import videomirissa from "@/assets/sri-lanka/mirissa-sri-lanka.mp4";

import covertrain from "@/assets/sri-lanka/cover-sri-lanka-train.jpg";
import coverrock from "@/assets/sri-lanka/lions-rock-2.jpg";
import covermirissa from "@/assets/sri-lanka/cover-mirissa.jpg";

// Import icons for highlightsn
import { Home, Zap, Plane, Users, Soup, TreePine } from "lucide-react";


export const srilankaData = {
  id: "srilanka-serenity",
  slug: "sri-lanka",
  title: "Sri Lanka Explorer",
  tags: [
    { emoji: "🚀", label: "Adventure" },
    { emoji: "🪭", label: "Culture" },
    { emoji: "🏖️", label: "Beach" },
    { emoji: "🧳", label: "Solo" }
  ],
  subtitle: "Discover the Pearl of the Indian Ocean with its ancient heritage and stunning landscapes",
  location: "Sri Lanka",
  duration: "11 days",
  heroImage: srilankaDay06,
  price: "USD $1,449",
  startDate: "April 19th",
  overviewGallery2x:[tile1_800_srilanka, tile2_800_srilanka, tile3_800_srilanka, tile4_800_srilanka],
  route: ["Colombo", "Sigiriya", "Kandy", "Ella", "Mirissa"],
  aboutDescription: [
    "Embarking on a journey through Sri Lanka is like stepping into a vibrant adventure! Imagine frolicking on picture-perfect beaches, wandering through emerald tea gardens, exploring ancient temples, or exciting wildlife safaris. Savor mouthwatering local dishes, dance along with colorful festivals, and laugh with the friendly locals who will make you feel right at home. Whether you're craving thrills, chill time, or cultural discoveries, Sri Lanka is a fun-filled, one-of-a-kind paradise that promises unforgettable memories at every turn."],
  aboutImages: [srilankaTea, srilankaBeach],

  // What's Included Highlights - Sri Lanka specific
  whatsIncludedHighlights: [
    {
      icon: Home,
      title: "10 NIGHTS<br />ACCOMM",
      description: "From heritage hotels to tea plantation bungalows and beach resorts across the island!"
    },
    {
      icon: Zap,
      title: "11 DAYS OF<br />DISCOVERY",
      description: "Ancient rock fortresses, tea country railways, wildlife safaris & pristine beaches!",
      link: {
        text: "See full itinerary",
        url: "#itinerary"
      }
    },
    {
      icon: Plane,
      title: "AIRPORT TRANSFERS<br />& TRANSPORT",
      description: "Meet & greet at Colombo airport plus private vehicle with driver throughout your journey."
    },
    {
      icon: Users,
      title: "EXPERT LOCAL<br />GUIDES",
      description: "Knowledgeable Sri Lankan guides who share the island's rich history and cultural insights."
    },
    {
      icon: Soup,
      title: "AUTHENTIC<br />CUISINE",
      description: "3 Dinners, 10 Breakfasts featuring rice & curry, tea tastings & local specialties!"
    },
    {
      icon: TreePine,
      title: "100% CARBON<br />NEUTRAL",
      description: "Your Sri Lankan adventure supports local conservation and sustainable wildlife protection."
    }
  ],

  highlights: [
  {
    title: "Hill Country Train",
    description: "Ride the famous tea-country railway through misty mountains and emerald plantations.",
    image: covertrain,
    video: videotrain
  },
  {
    title: "Lion's Rock",
    description: "Climb Sri Lanka’s iconic Lion's Rock.",
    image: coverrock,
    video: videorock
  },
  {
    title: "Mirissa",
    description: "Sun, surf, and golden beaches on the south coast.",
    image: covermirissa,
    video: videomirissa
  }
],


  itinerary: [
  {
    day: 1,
    date: "April 19th",
    title: "Island Welcome & Urban First Tastes",
    location: "Colombo",
    heroImage: srilankaColombo,
    description:
      "Begin your Sri Lankan adventure in the vibrant capital city of Colombo. This bustling metropolis perfectly blends colonial heritage with modern urban energy, offering your first taste of the island's rich culture and warm hospitality. From historic landmarks to trendy districts, Colombo provides the perfect introduction to your Sri Lankan journey.",
    meals: "Dinner",
    accommodation: { name: "Sofia Hotel Colombo or Cinnamon Red Hotel" },
    highlights: "Welcome dinner",
    transportation: {
      from: "Bandaranaike Airport",
      to: "Colombo City",
      duration: "45 Minutes",
      distance: "35 km"
    }
  },
  {
    day: 2,
    date: "April 20th",
    title: "Temples, canals & city vibes",
    location: "Sigiriya",
    heroImage: srilankaDay02,
    description:
      "Journey into Sri Lanka's Cultural Triangle, where ancient wonders and natural beauty converge. Sigiriya stands as a testament to centuries of history, spirituality, and artistic mastery. This UNESCO World Heritage site offers unforgettable views across lush countryside, village life, and sacred shrines. Whether you're seeking cultural immersion or scenic beauty, Sigiriya is your gateway to unforgettable experiences.",
    meals: "Breakfast",
    accommodation: { name: "Into the Wild Sigiriya Hotel" },
    highlights: "Temples",
  },
  {
    day: 3,
    date: "April 21st",
    title: "Ancient Wonders & Sacred Sites",
    location: "Sigiriya",
    heroImage: sigiriyaRock,
    description:
      "Get ready for an epic adventure at the stunning Sigiriya Rock Fortress, one of Sri Lanka's coolest UNESCO World Heritage sites! Imagine a majestic ancient citadel popping up from the jungle, with mind-blowing views and stories of King Kashyapa's 5th-century palace. After soaking in the history and taking in the breathtaking scenery, you can enjoy the best, most beautiful hike around. Then, kick back and relax with an optional spa or pool dip before heading out for a village safari—where you can try canoeing Sri Lankan style, enjoy a delicious local dinner, and end the night with a cozy bonfire and fun-filled games. It's a wild, wonderful day you won't forget!",
    meals: "Breakfast, Dinner",
    accommodation: { name: "Into the Wild Sigiriya Hotel" },
    highlights: "Sigiriya Rock, village safari"
  },
  {
    day: 4,
    date: "April 22nd",
    title: "Royal Heritage & Sacred Tooth",
    location: "Kandy",
    heroImage: srilankaDay04,
    description:
      "Get ready for an exciting trip to the hill capital of Kandy, Sri Lanka's cultural treasure and the last kingdom of the ancient kings! This UNESCO World Heritage city is packed with awesome sights like the sacred Temple of the Tooth Relic, lush botanical gardens, and stunning lake views framed by misty hills. On the way, we'll make fun stops at vibrant tea plantations and aromatic spice gardens—where you can taste fresh teas and smell incredible spices. It's a journey full of history, nature, and flavor that'll leave you awe-inspired and craving more!",
    meals: "Breakfast",
    accommodation: { name: "Queens Hotel or Swiss Hotel Kandy" },
    highlights: "Tea plantation, Temple of Tooth"
  },
  {
    day: 5,
    date: "April 23rd",
    title: "Exploring Kandy and Cooking Class",
    location: "Kandy",
    heroImage: srilankaDay05,
    description:
      "Kick off your day with a delightful breakfast. Fuel up and get ready for an exciting day ahead! A van will pick you up for a lush adventure at the botanic gardens — explore beautiful plants, relax in nature, and maybe snap some amazing photos! After your botanical exploration, enjoy a leisurely lunch followed by some chill time at the hotel. Whether you want to shop for souvenirs, take a refreshing swim, or just kick back and relax your way. In the afternoon, get ready for a fun and tasty cooking class where you'll learn new recipes and skills. The van will pick you up from the hotel, so bring your excitement and appetite for a memorable day!",
    meals: "Breakfast",
    accommodation: { name: "Queens Hotel or Swiss Hotel Kandy" },
    highlights: "Cooking class, Botanic gardens"
  },
  {
    day: 6,
    date: "April 24th",
    title: "Travel to Ella",
    location: "Ella",
    heroImage: srilankaDay06,
    description:
      "Start your day bright and early with a delicious breakfast to fuel your adventure! Then, we're off to Ella train station for a scenic journey like no other. Hop aboard the famous afternoon train and enjoy breathtaking jungle views, snap plenty of photos from the iconic glassy scenic area though those open doors, and feel the thrill of the ride through lush greenery. As the train winds into the charming mountain town of Ella, you'll be greeted by a laid-back, hippie vibe that feels like a slice of paradise. Arrive in the evening and get ready to dive into the vibrant night scene exploring cozy cafes, enjoying live music, or just soaking up the chilled-out atmosphere of this magical town. An unforgettable day filled with stunning sights and cool vibes awaits!",
    meals: "Breakfast",
    accommodation: { name: "Flower Garden or Ella Gap Hotel" },
    highlights: "Train ride, Town of Ella"
  },
  {
    day: 7,
    date: "April 25th",
    title: "Ella Adventures",
    location: "Ella",
    heroImage: srilankaDay07,
    description:
      "Get ready for an amazing day in Ella! Late in the morning, we'll head to the iconic Nine Arch Bridge — a breathtaking spot where you can watch the train chug lazily through the lush valley and marvel at this engineering marvel surrounded by stunning greenery. It's a perfect photo op and a great way to soak in the magic of Ella! Later in the day, unleash your adventurous spirit with a scenic hike up Little Adam's Peak. As the sun begins to set, you'll be rewarded with jaw-dropping panoramic views and golden hues that make the moment truly special.",
    meals: "Breakfast",
    accommodation: { name: "Flower Garden or Ella Gap Hotel" },
    highlights: "Nine Arch Bridge, Little Adam's Peak"
  },
  {
    day: 8,
    date: "April 26th",
    title: "Wildlife & Coastal Beauty",
    location: "Mirissa",
    heroImage: srilankaDay08,
    description:
      "Today's adventure kicks off with us leaving the charming town of Ella after a hearty breakfast. Our journey takes us to the exciting Udawalawe, with an exciting stop at the stunning Quick Water Falls. Next, we explore the adorable Baby Elephant Home, where over 100 orphaned baby elephants are lovingly cared for — a truly heartwarming sight! After a delicious lunch, we dive into the jungle for an epic safari, where we'll spot majestic elephants, crocodiles, colorful birds, and other incredible wildlife. Get ready for an unforgettable day of fun and adventure! We then head into the beautiful town of Mirissa.",
    meals: "Breakfast",
    accommodation: { name: "Randiya Sea View or Mimoza Mirissa" },
    highlights: "Baby Elephant Home, Safari"
  },
  {
    day: 9,
    date: "April 27th",
    title: "Surf, History & Beach Vibes",
    location: "Mirissa/Galle",
    heroImage: srilankaDay09,
    description:
      "Kick off the morning to a delicious breakfast to fuel your epic surf adventure, to soak in the island vibe. Get ready to hit the waves with an exciting surf lesson, ride like you're a pro and feel the thrill! Afterward, indulge in a tasty lunch, then explore the historic Galle Fort in the afternoon, marveling at its rich history and stunning architecture. As the sun sets, experience breathtaking views during sunset and enjoy a lavish dinner buffet. The night isn't over—head back to the beach for an unforgettable evening of dancing, singing karaoke, and endless fun under the stars!",
    meals: "Breakfast",
    accommodation: { name: "Randiya Sea View or Mimoza Mirissa" },
    highlights: "Surfing lesson, Galle Fort"
  },
  {
    day: 10,
    date: "April 28th",
    title: "Last Beach Day & Farewell Celebration",
    location: "Mirissa",
    heroImage: srilankaDay10,
    description:
      "This morning we can start with laid-back late breakfast and soak up the chill beach vibes. Since it's our last day together, let's make it epic and bask in the sun, catch some rays, and enjoy the ocean breeze with a nice cold cocktail in hand. We also like to leave a positive mark by cleaning up the beach with a quick trash pickup for the environment! Feeling adventurous? Maybe squeeze in another surf session and ride those waves one last time. Later, explore some local shops and pick up cool souvenirs. As the evening arrives, get ready for our unforgettable farewell dinner under the stars with an epic night filled with good food, dancing and laughs. This is the perfect way to wrap up our amazing Sri Lanka Adventure!",
    meals: "Breakfast, Dinner",
    accommodation: { name: "Randiya Sea View or Mimoza Mirissa" },
    highlights: "Chill day, fun in the sun"
  },
  {
    day: 11,
    date: "April 29th",
    title: "Farewell & Departure",
    location: "Mirissa/Departure",
    heroImage: srilankaDay11,
    description:
      "Gihin Ennam for now! Check-out day in Mirissa wraps our 11-day adventure with smiles, hugs, and a few happy tears. Swap photos and contacts, promise future reunions, and take one last look at the city that brought everyone together. With souvenirs packed and new friendships that feel like old ones, we head out in different directions—hearts full and already dreaming of the next journey. Safe travels!",
    meals: "Breakfast",
    accommodation: { name: "Check-out" },
    highlights: "Check-out, farewell"
  }
]
,
  summary: {
    duration: "11 Days",
    activities: "20 Experiences", 
    areas: "5 Regions",
    type: "Culture & Nature"
  },
  included: [
    {
      title: "Accommodation & Meals",
      items: [
        { text: "10 nights in premium hotels and lodges" },
        { text: "Traditional Sri Lankan breakfast daily" },
        { text: "Tea plantation bungalow experience" },
        { text: "3 Dinners" },
        { text: "10 Breakfasts" }
      ]
    },
    {
      title: "Activities & Tours",
      items: [
        { text: "Temple Visit (Colombo)" },
        { text: "Language immersion class" },
        { text: "Cultural Dance Show in Sigiriya" },
        { text: "Sigiriya Rock Fortress Hike" },
        { text: "Tea Plantation Visit & Tasting" },
        { text: "World-Famous Blue Train Ride" },
        { text: "Nine-Arch Bridge Visit" },
        { text: "Little Adam's Peak Hike" },
        { text: "Udawalawe Wildlife Safari (open-air jeep)" },
        { text: "Elephant Transit Home Visit" },
        { text: "Turtle Conservation Project" },
        { text: "Galle Fort Exploration" },
        { text: "Surf Lesson in Mirissa" }
      ]
    },
    {
      title: "Transportation",
      items: [
        { text: "Airport pick-up from Bandaranaike International Airport (Day 1)" },
        { text: "Private transport between all cities and regions (Colombo ➜ Sigiriya ➜ Ella ➜ Mirissa)" },
        { text: "Blue Train ticket from Nanu Oya to Ella (scenic ride)" },
        { text: "Transport to all included experiences (temples, hikes, beaches, etc.)" },
        { text: "Private vehicle with driver throughout journey" }
      ]
    },
    {
      title: "Culinary Experiences",
      items: [
        { text: "Traditional rice and curry meals" },
        { text: "Tea tasting sessions" },
        { text: "Spice garden visits and cooking demos" }
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
        { text: "Sunrise at Sigiriya Rock" },
        { text: "Traditional cultural performances" },
        { text: "Wildlife safari experiences" }
      ]
    }
  ],
  faqs: [
    {
      question: "Which airport do I need to fly into?",
      answer: "Colombo Bandaranaike International Airport (CMB)"
    },
    {
      question: "Where does the trip start & finish?",
      answer: "Starts in Colombo and ends in Mirissa"
    },
    {
      question: "How far is the airport from start hotel?",
      answer: "30 – 40 minutes depending on traffic"
    },
    {
      question: "How far is the airport from end hotel?",
      answer: "2.5 hours, can take taxi or Uber (transfer not included). Departure from Colombo Bandaranaike International Airport (CMB)"
    },
    {
      question: "Do you have an age limit for tours?",
      answer: "Our tours cater to adventurous travelers aged 18-45, with most guests between 21-35 years old. Perfect for people of all different backgrounds to share travel experiences."
    },
    {
      question: "What is the local currency?",
      answer: "The local currency is Sri Lankan Rupee"
    },
    {
      question: "What are the Visa Requirements?",
      answer: "Apply for E-VISA. Electronic Travel Authorization (ETA): Most visitors can obtain a tourist ETA online through the Sri Lankan government's ETA website: https://www.eta.gov.lk/slvisa/visainfo/center.jsp?locale=en_US"
    }
  ],
  review: {
    testimonialText: "I had an amazing trip with Imagine Beyond Travel. Everything was smooth, well-organized, and perfectly balanced with adventure, culture, and relaxation. Our tour guide was fantastic. Highly recommend.",
    author: "Montana Rae, USA",
    images: [review1, review2],
    disableReadMore: true
  }
};
