// Static navigation data extracted from components for better performance

export interface NavigationTrip {
  title: string;
  duration: string;
  location: string;
  link: string;
}

export interface NavigationDestination {
  city: string;
  country: string;
  description: string;
  link: string;
}

// Extract trips data to module level - prevents recreation on every render
export const NAVIGATION_TRIPS: readonly NavigationTrip[] = [
  { title: "India Journey", duration: "14 Days", location: "India", link: "/india-itinerary" },
  { title: "Japan Golden Route", duration: "7 Days", location: "Japan", link: "/japan-itinerary" },
  { title: "Philippines Paradise", duration: "10 Days", location: "Philippines", link: "/philippines-itinerary" },
  { title: "Sri Lanka Explorer", duration: "11 Days", location: "Sri Lanka", link: "/srilanka-itinerary" },
  { title: "Colombia Adventure", duration: "7 Days", location: "Colombia", link: "/colombia-itinerary" },
  { title: "Thailand Discovery", duration: "Coming Soon", location: "Thailand", link: "#" },
  { title: "Vietnam Culture Journey", duration: "Coming Soon", location: "Vietnam", link: "#" },
  //{ title: "Bhutan Monastery Trek", duration: "9 Days", location: "Bhutan", link: "/bhutan-itinerary" },
] as const;

// Extract destinations data to module level
export const NAVIGATION_DESTINATIONS: readonly NavigationDestination[] = [
  { city: "Thailand", country: "Asia", description: "Temples, beaches & culture", link: "/thailand" },
  { city: "Sri Lanka", country: "Asia", description: "Pearl of the Indian Ocean", link: "/srilanka" },
  { city: "Philippines", country: "Asia", description: "Tropical islands paradise", link: "/philippines" },
  { city: "Japan", country: "Asia", description: "Ancient traditions & modern cities", link: "/japan" },
  //{ city: "Colombia", country: "South America", description: "Coffee culture & vibrant cities", link: "/colombia" },
  { city: "India", country: "Asia", description: "Rich heritage & diverse culture", link: "/india" },
  //{ city: "Bhutan", country: "Asia", description: "Land of the Thunder Dragon", link: "/bhutan" },
  //{ city: "Vietnam", country: "Asia", description: "Historic charm & natural beauty", link: "/vietnam" }
] as const;
