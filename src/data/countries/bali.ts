// src/data/itineraries/bali.ts
// (Adjust the path above to match your project structure)

// ✅ Icons used in What's Included
import { Home, Zap, Plane, Users, Soup, TreePine } from "lucide-react";

// ✅ Images
import baliHero from "@/assets/bali/bali-hero.jpg";
import tile1 from "@/assets/bali/tile1.jpg";
import tile2 from "@/assets/bali/tile2.jpg";

import day01 from "@/assets/bali/day-1.jpg";
import day02 from "@/assets/bali/day-2.jpg";
import day03 from "@/assets/bali/day-3.jpg";
import day04 from "@/assets/bali/day-4.jpg";
import day05 from "@/assets/bali/day-5.jpg";
import day06 from "@/assets/bali/day-6.jpg";
import day07 from "@/assets/bali/day-7.jpg";
import day08 from "@/assets/bali/day-8.jpg";
import day09 from "@/assets/bali/day-9.jpg";
import day10 from "@/assets/bali/day-10.jpg";

import hotel1 from "@/assets/bali/hotel-1.jpg";
import hotel1b from "@/assets/bali/hotel-1b.jpg";

import hotel2 from "@/assets/bali/hotel-2.jpg";
import hotel2b from "@/assets/bali/hotel-2b.jpg";

import hotel3 from "@/assets/bali/hotel-3.jpg";
import hotel3b from "@/assets/bali/hotel-3b.jpg";
import hotel3c from "@/assets/bali/hotel-3c.jpg";

// Optional: if you still want to use this unsplash temple image in highlights
const baliTemple =
  "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&q=80";

/**
 * ✅ IMPORTANT FOR THE BUTTON:
 * Your ItineraryTemplate "Reserve Now" logic must route to `/#/booking/${data.slug}`
 * (as you already updated). This file just needs `slug: "bali"` to match.
 */
export const baliData = {
  id: "bali-gili-escape",
  slug: "bali",
  title: "Bali & Gili Islands",
  subtitle: "Come solo. Leave with a tan, memories, and a whole new crew.",
  location: "Bali & Gili Islands, Indonesia",
  duration: "10 days",
  heroImage: baliHero,
  price: "USD $1,169",
  route: ["Canggu", "Ubud", "Gili Islands"],

  tags: [
    { emoji: "🏖️", label: "Beach" },
    { emoji: "⚖️", label: "Culture" },
    { emoji: "🧳", label: "Solo" },
    { emoji: "🍹", label: "Cocktails" },
  ],

  aboutDescription: [
    "Welcome to the ultimate 10-day group escape through Bali and the Gili Islands. From temple hopping and surf lessons to island parties and sunset cocktails, this trip has it all. Come solo, leave with a tan, memories, and a whole new crew.",
  ],

  // ✅ Hero right-side tiles (desktop grid)
  overviewGallery2x: [tile1, tile2, tile1, tile2],
  aboutImages: [tile1, tile2],

  highlights: [
    {
      title: "Snorkeling with Sea Turtles",
      image: day08,
      description: "Crystal-clear water, colorful reefs, and real-life turtle sightings.",
    },
    {
      title: "Ubud Rice Fields",
      image: baliTemple,
      description: "Iconic terraces, jungle swings, and dreamy views.",
    },
    {
      title: "Surf Lesson",
      image: day03,
      description: "Beginner-friendly waves + lots of laughs (wipeouts encouraged).",
    },
  ],

  whatsIncludedHighlights: [
    {
      icon: Home,
      title: "9 NIGHTS<br />ACCOMM",
      description:
        "Beautiful hotels from beachfront Bali to tropical Gili island stays.",
    },
    {
      icon: Zap,
      title: "SIGNATURE<br />ACTIVITIES",
      description:
        "Surf lessons, temples, beach clubs, island hopping & unforgettable group experiences.",
      link: { text: "Explore the itinerary", url: "#itinerary" },
    },
    {
      icon: Plane,
      title: "AIRPORT<br />PICKUP",
      description:
        "Private transfer from Ngurah Rai International Airport to your first accommodation.",
    },
    {
      icon: Users,
      title: "LOCAL<br />GUIDES",
      description:
        "Knowledgeable guides sharing deep cultural insights and hidden gems.",
    },
    {
      icon: Soup,
      title: "DAILY<br />BREAKFAST",
      description:
        "Start every day right with included breakfast at your accommodation.",
    },
    {
      icon: TreePine,
      title: "100% CARBON<br />NEUTRAL",
      description:
        "Your Bali journey is completely carbon neutral through our verified environmental program.",
    },
  ],

  // ✅ Used by your updated WhereWeStay (and inner HotelImageGallery)
  accommodations: [
    {
      title: "Koa D Surfer, Canggu",
      description:
        "Laid-back surf-style stay in Canggu, close to cafes, beaches, and Bali’s buzzing surf scene.",
      images: [hotel1, hotel1b],
    },
    {
      title: "Evitel Hotel, Ubud",
      description:
        "Comfortable central Ubud hotel within walking distance of shops, markets, and cultural highlights.",
      images: [hotel2, hotel2b],
    },
    {
      title: "Trawangan Nirvana, Gili Trawangan",
      description:
        "Relaxed beachfront-style accommodation offering island vibes, pools, and easy access to Gili T’s sunsets.",
      images: [hotel3, hotel3c, hotel3b],
    },
  ],

  itinerary: [
    {
      day: 1,
      title: "Touchdown in Paradise",
      location: "Canggu, Bali",
      heroImage: day01,
      description:
        "Welcome to Bali, baby! ✈️🌴 Get picked up from the airport, check into your hotel, and switch instantly into island mode. Spend the afternoon chilling by the pool, dipping your toes in the ocean, or exploring nearby beach streets before we kick things off with our welcome dinner — drinks flowing, laughs guaranteed, friendships officially forming.",
      meals: "Dinner",
      accommodation: { name: "Koa D Surfer, Canggu" },
      highlights: "Sunset beach walks, poolside lounging, Canggu shopping spree",
      transportation: {
        from: "Ngurah Rai Airport",
        to: "Koa D Surfer, Canggu",
        duration: "≈ 45 minutes",
        distance: "15 km",
      },
    },
    {
      day: 2,
      title: "Temples, Culture & Jaw-Dropping Views",
      location: "Canggu",
      heroImage: day02,
      description:
        "Rise and shine (but not too early 😉). Today we dive into Bali's spiritual side with visits to the stunning Taman Ayun Royal Temple and the iconic Tanah Lot Temple, perched dramatically over the ocean. Expect epic photos, cultural magic, and serious wow moments.",
      meals: "Breakfast",
      accommodation: { name: "Koa D Surfer, Canggu" },
      highlights:
        "Taman Ayun Royal Temple, Tanah Lot Temple, beach hangs, pool recovery",
    },
    {
      day: 3,
      title: "Surf's Up & Sunset Vibes",
      location: "Canggu",
      heroImage: day03,
      description:
        "It's time to live out your surf dream 🌊. Head to Kuta Beach for a fun, beginner-friendly surf lesson with expert local instructors. Wipeouts are encouraged (laughing is mandatory). Later, we hit Finn’s Beach Club to sip cocktails and watch the sky turn every shade of magic at sunset.",
      meals: "Breakfast",
      accommodation: { name: "Koa D Surfer, Canggu" },
      highlights: "Surf lesson at Kuta Beach, Finn’s Beach Club, sunset cocktails",
    },
    {
      day: 4,
      title: "Waterfalls & Jungle Energy",
      location: "Ubud, Bali",
      heroImage: day04,
      description:
        "We swap beach life for jungle vibes as we head to Ubud. First stop: the stunning Tegenungan Waterfall — hike down, swim, pose, repeat. Afterward, unwind at your rooftop pool or wander Ubud's colorful local markets.",
      meals: "Breakfast",
      accommodation: { name: "Evitel Hotel, Ubud" },
      highlights: "Tegenungan Waterfall, pool time, market exploring",
    },
    {
      day: 5,
      title: "Cook, Eat & Monkey Business",
      location: "Ubud, Bali",
      heroImage: day05,
      description:
        "Today is chef era 🍴. Start at the local markets, then join a Balinese family for a hands-on cooking class where you'll learn to whip up traditional dishes (and eat everything after). Later, we meet the island's most mischievous residents at the Sacred Monkey Forest, keep your sunglasses close!",
      meals: "Breakfast",
      accommodation: { name: "Evitel Hotel, Ubud" },
      highlights: "Local market visit, Balinese cooking class, Sacred Monkey Forest",
    },
    {
      day: 6,
      title: "Rice Terraces & Volcano Views",
      location: "Ubud, Bali",
      heroImage: day06,
      description:
        "Welcome to one of Bali's most iconic days 📸. Wander through the dreamy Tegalalang Rice Terraces, snap Insta-worthy pics on jungle swings, sip fresh coconuts, and soak up the scenery. Then enjoy lunch with jaw-dropping views of Mount Batur, an active volcano that looks unreal in person.",
      meals: "Breakfast",
      accommodation: { name: "Evitel Hotel, Ubud" },
      highlights:
        "Tegalalang Rice Terraces, jungle swings, Mount Batur volcano lookout",
    },
    {
      day: 7,
      title: "Island Time Activated",
      location: "Gili Trawangan",
      heroImage: day07,
      description:
        "Snacks packed? Good. Today we travel by bus and ferry to the dreamy island of Gili Trawangan — no cars, just bikes, beaches, and bliss. Check in, dive into turquoise waters, and officially enter island time.",
      meals: "Breakfast",
      accommodation: { name: "Trawangan Nirvana, Gili Trawangan" },
      highlights: "Ferry ride, beach exploring",
    },
    {
      day: 8,
      title: "Snorkels, Turtles & Cocktails",
      location: "Gili Islands, Indonesia",
      heroImage: day08,
      description:
        "Island hopping day! 🌊 Snorkel around Gili Meno and nearby reefs, spotting colorful fish, coral, turtles, and maybe even a shark (the friendly kind). End the day with sunset cocktails and beach bar hopping — because balance.",
      meals: "Breakfast",
      accommodation: { name: "Trawangan Nirvana, Gili Trawangan" },
      highlights:
        "Snorkeling tour, turtle spotting, sunset cocktails, beach bar hopping",
    },
    {
      day: 9,
      title: "Bikes, Views & One Last Party",
      location: "Gili Trawangan, Indonesia",
      heroImage: day09,
      description:
        "Cycle around the island, explore hidden beaches, and hike up to Gili's best viewpoint for a final pinch-me moment. Tonight, we wrap things up with a farewell dinner and last big night out, memories made, group chat forever activated.",
      meals: "Breakfast, Dinner",
      accommodation: { name: "Trawangan Nirvana, Gili Trawangan" },
      highlights:
        "Bicycle island tour, viewpoint hike, farewell dinner, final night out",
    },
    {
      day: 10,
      title: "Until Next Time",
      location: "Gili Trawangan, Indonesia",
      heroImage: day10,
      description:
        "Hugs, goodbyes, and plans to meet again somewhere else in the world 🌍. You came solo, but you're leaving with stories, friendships, and a camera roll that goes hard.",
      meals: "Breakfast",
      highlights: "Check out, goodbyes, lifelong friendships",
    },
  ],

  summary: {
    duration: "10 Days",
    activities: "25+ Experiences",
    areas: "3 Regions",
    type: "Adventure & Culture",
  },

  included: [
    {
      title: "Accommodation and Support",
      items: [{ text: "9 nights in hand-picked 3–4★ hotels" }, { text: "24/7 tour guide" }],
    },
    {
      title: "Meals",
      items: [{ text: "Daily breakfasts" }, { text: "Welcome dinner" }, { text: "Farewell dinner" }],
    },
    {
      title: "Transportation",
      items: [
        { text: "Airport pickup and drop-off transfers" },
        { text: "All transportation between destinations" },
        { text: "Ferry transfers to Gili Islands" },
      ],
    },
    {
      title: "Activities & Experiences",
      items: [
        { text: "Surf lesson at Kuta Beach" },
        { text: "Balinese cooking class" },
        { text: "Temple visits (Taman Ayun & Tanah Lot)" },
        { text: "Waterfall adventure (Tegenungan)" },
        { text: "Rice terraces & volcano views" },
        { text: "Snorkeling tour + gear included" },
        { text: "Sacred Monkey Forest visit" },
      ],
    },
  ],

  faqs: [
    {
      question: "What is the best time to visit Bali?",
      answer:
        "Bali's dry season (April–October) offers the best weather. The wet season (November–March) sees afternoon showers but fewer crowds. Our tours run year-round with adjusted activities as needed.",
    },
    {
      question: "Which airport do I fly into?",
      answer:
        "Fly into Ngurah Rai International Airport (DPS), also known as Bali Denpasar Airport. It's the main airport serving Bali.",
    },
    {
      question: "Do I need a visa for Indonesia?",
      answer:
        "Many nationalities can get a visa on arrival for tourism. Check your government's travel advice and Indonesian immigration for current requirements.",
    },
    {
      question: "What should I pack?",
      answer:
        "Light, breathable clothing, modest attire for temples (shoulders and knees covered), comfortable walking shoes, swimwear, sunscreen, and a light rain jacket.",
    },
    {
      question: "Is Bali safe for solo travelers?",
      answer:
        "Bali is very safe and welcoming for solo travelers. You'll be with a group and experienced guides throughout the trip.",
    },
  ],

  review: {
    testimonialText:
      "I had an amazing trip with Imagine Beyond Travel. Everything was smooth, well-organized, and perfectly balanced with adventure, culture, and relaxation. Our tour guide was fantastic. Highly recommend.",
    author: "Montana Rae, USA",
    images: [],
    disableReadMore: true,
  },
};

export default baliData;
