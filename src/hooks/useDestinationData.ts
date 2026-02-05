import { useMemo } from 'react';
import { destinationsData } from '@/data/destinations';
import { DestinationData, ItineraryData, UnifiedDestinationData } from '@/data/types';

/**
 * Custom hook for accessing destination data with type safety and caching
 */
export const useDestinationData = () => {
  // Memoize the destinations list for performance
  const destinationsList = useMemo(() => 
    Object.keys(destinationsData), 
    []
  );

  /**
   * Get destination data by key
   */
  const getDestination = (key: string): DestinationData | undefined => {
    return destinationsData[key];
  };

  /**
   * Get full destination data with itinerary (if available)
   */
  const getFullDestination = (key: string): UnifiedDestinationData | undefined => {
    const destination = destinationsData[key];
    if (!destination || !destination.itinerary) {
      return undefined;
    }
    return destination as UnifiedDestinationData;
  };

  /**
   * Get only itinerary data for a destination
   */
  const getItinerary = (key: string): ItineraryData | undefined => {
    const destination = destinationsData[key];
    return destination?.itinerary;
  };

  /**
   * Get all destinations with itinerary data available
   */
  const getDestinationsWithItinerary = (): UnifiedDestinationData[] => {
    return Object.values(destinationsData)
      .filter((dest): dest is UnifiedDestinationData => !!dest.itinerary);
  };

  /**
   * Search destinations by country name
   */
  const searchByCountry = (searchTerm: string): DestinationData[] => {
    const term = searchTerm.toLowerCase();
    return Object.values(destinationsData)
      .filter(dest => dest.country.toLowerCase().includes(term));
  };

  /**
   * Get destinations by trip duration
   */
  const getByDuration = (maxDays: number): DestinationData[] => {
    return Object.values(destinationsData)
      .filter(dest => {
        const tripDuration = dest.trips[0]?.duration || '';
        const days = parseInt(tripDuration.match(/\d+/)?.[0] || '0');
        return days <= maxDays;
      });
  };

  return {
    // Data access
    destinations: destinationsData,
    destinationsList,
    getDestination,
    getFullDestination,
    getItinerary,
    
    // Filtered data
    getDestinationsWithItinerary,
    searchByCountry,
    getByDuration,
    
    // Utility
    totalDestinations: destinationsList.length,
    hasItinerary: (key: string) => !!destinationsData[key]?.itinerary,
  };
};

/**
 * Hook specifically for itinerary components
 */
export const useItineraryData = (destinationKey: string) => {
  const { getItinerary, hasItinerary } = useDestinationData();
  
  const itinerary = useMemo(() => 
    getItinerary(destinationKey), 
    [destinationKey, getItinerary]
  );

  return {
    itinerary,
    hasItinerary: hasItinerary(destinationKey),
    isLoading: false, // For future API integration
    error: null, // For future error handling
  };
};