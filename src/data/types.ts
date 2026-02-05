// Core type definitions for travel data

export interface Activity {
  time: string;
  title: string;
  location: string;
  description: string;
  image: string;
  duration: string;
}

export interface Experience {
  title: string;
  description?: string;
  image: string;
}

export interface Accommodation {
  name: string;
  rating?: string;
  roomTypes?: string[];
  website?: string;
  image?: string;
}

export interface Transportation {
  from: string;
  to: string;
  duration: string;
  distance?: string;
}

export interface DayItinerary {
  day: number;
  date?: string;
  title: string;
  location?: string;
  siteName?: string; // Name of the building/attraction shown in the image
  heroImage?: string;
  description?: string;
  galleryImages?: string[];
  activities?: Activity[];
  experiences?: Experience[];
  accommodation?: Accommodation;
  transportation?: Transportation;
  meals?: string;
  highlights?: string;
}

export interface ItineraryDay {
  day: number;
  date: string;
  title: string;
  activities?: Activity[];
}

export interface TourSummary {
  duration: string;
  activities: string;
  areas: string;
  type: string;
}

export interface IncludedItem {
  text: string;
}

export interface IncludedCategory {
  title: string;
  items: IncludedItem[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Review {
  testimonialText: string;
  author: string;
  images: string[];
}

export interface ItineraryData {
  id?: string;
  slug?: string;
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  heroImage: string;
  aboutDescription: string[];
  aboutImages: string[];
  itinerary: DayItinerary[];
  summary: TourSummary;
  included: IncludedCategory[];
  faqs: FAQ[];
  review?: Review;
}

export interface Trip {
  id: string;
  slug?: string;
  title: string;
  duration: string;
  description: string;
  image: string;
  price: string;
  route: string;
}

export interface DestinationData {
  country: string;
  heroImage: string;
  heroSubtitle: string;
  trips: Trip[];
  itinerary?: ItineraryData; // Optional full itinerary data
}

// Unified data structure for all destinations
export interface UnifiedDestinationData extends DestinationData {
  itinerary: ItineraryData;
}