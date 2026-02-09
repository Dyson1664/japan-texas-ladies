// Import all destination hero images
import japanHeroImage from "@/assets/japan-hero.jpg";
import indiaHeroImage from "@/assets/india-hero.jpg";
import bhutanHeroImage from "@/assets/bhutan-hero.jpg";
import colombiaHeroImage from "@/assets/colombia/colombia-hero.jpg";
import vietnamHeroImage from "@/assets/vietnam-hero.jpg";
import thailandHeroImage from "@/assets/thailand-hero.jpg";
import srilankaHeroImage from "@/assets/srilanka-hero.jpg";
import philippinesHeroImage from "@/assets/philippines-hero.jpg";

// Import country-specific itinerary data
import { japanData } from "@/data/countries/japan";
import { thailandData } from "@/data/countries/thailand";
import { philippinesData } from "@/data/countries/philippines";
import { srilankaData } from "@/data/countries/srilanka";

// Import types
import { DestinationData, ItineraryData } from "@/data/types";

export type { Trip, DestinationData, ItineraryData } from "@/data/types";

export const destinationsData: Record<string, DestinationData> = {
  japan: {
    country: "Japan",
    heroImage: japanHeroImage,
    heroSubtitle: "Experience the fascinating blend of ancient traditions and modern innovation",
    trips: [
      {
        id: "japan-journey",
        slug: "japan",
        title: "Best of Japan",
        duration: "10 days",
        description: "Discover the perfect harmony of ancient traditions and cutting-edge modernity",
        image: japanHeroImage,
        price: "From $1,899",
        route: "/japan-itinerary"
      }
    ],
    itinerary: japanData
  },
  india: {
    country: "India",
    heroImage: indiaHeroImage,
    heroSubtitle: "Immerse yourself in the colors, flavors, and ancient wisdom of incredible India",
    trips: [
      {
        id: "india-journey",
        title: "India Journey",
        duration: "12 days",
        description: "Discover the incredible diversity of India from the Taj Mahal to vibrant markets and spiritual temples",
        image: indiaHeroImage,
        price: "From $1,529",
        route: "/india-itinerary"
      }
    ]
  },
  bhutan: {
    country: "Bhutan",
    heroImage: bhutanHeroImage,
    heroSubtitle: "Discover the Land of the Thunder Dragon and the pursuit of Gross National Happiness",
    trips: [
      {
        id: "bhutan-happiness",
        title: "Bhutan Happiness",
        duration: "7 days",
        description: "Experience the last Shangri-La with pristine monasteries, stunning mountains, and gross national happiness",
        image: bhutanHeroImage,
        price: "From $2,199",
        route: "/bhutan-itinerary"
      }
    ]
  },
  colombia: {
    country: "Colombia",
    heroImage: colombiaHeroImage,
    heroSubtitle: "Experience the magical realism of Colombia with its colorful cities and warm people",
    trips: [
      {
        id: "colombia-adventure",
        title: "Colombia Adventure",
        duration: "10 days",
        description: "Explore vibrant cities, pristine beaches, and rich coffee culture in this South American gem",
        image: colombiaHeroImage,
        price: "From $1,799",
        route: "/colombia-itinerary"
      }
    ]
  },
  vietnam: {
    country: "Vietnam",
    heroImage: vietnamHeroImage,
    heroSubtitle: "Discover the beauty of Vietnam from Ha Long Bay to bustling Saigon",
    trips: [
      {
        id: "vietnam-explorer",
        title: "Vietnam Explorer",
        duration: "9 days",
        description: "Journey through stunning landscapes, vibrant cities, and rich cultural heritage of Vietnam",
        image: vietnamHeroImage,
        price: "From $1,699",
        route: "/vietnam-itinerary"
      }
    ]
  },
  thailand: {
    country: "Thailand",
    heroImage: thailandHeroImage,
    heroSubtitle: "Discover the perfect blend of ancient traditions and tropical paradise",
    trips: [
      {
        id: "thailand-discovery",
        slug: "thailand",
        title: "Thailand Discovery",
        duration: "8 days",
        description: "Immerse yourself in the vibrant culture, stunning temples, and pristine beaches of the Land of Smiles",
        image: thailandHeroImage,
        price: "From $1,599",
        route: "/thailand-itinerary"
      }
    ],
    itinerary: thailandData
  },
  srilanka: {
    country: "Sri Lanka",
    heroImage: srilankaHeroImage,
    heroSubtitle: "Discover the pearl of the Indian Ocean with incredible biodiversity and culture",
    trips: [
      {
        id: "srilanka-serenity",
        slug: "sri-lanka",
        title: "Sri Lanka Serenity",
        duration: "9 days",
        description: "Experience the pearl of the Indian Ocean with its rich culture, wildlife, and stunning landscapes",
        image: srilankaHeroImage,
        price: "From $1,449",
        route: "/srilanka-itinerary"
      }
    ],
    itinerary: srilankaData
  },
  philippines: {
    country: "Philippines",
    heroImage: philippinesHeroImage,
    heroSubtitle: "Experience over 7,000 islands of pristine beaches and rich culture",
    trips: [
      {
        id: "philippines-paradise",
        title: "Philippines Paradise",
        duration: "9 days",
        description: "Explore tropical islands, ancient rice terraces, and vibrant Filipino culture",
        image: philippinesHeroImage,
        price: "From $1,679",
        route: "/philippines-itinerary"
      }
    ],
    itinerary: philippinesData
  }
};
