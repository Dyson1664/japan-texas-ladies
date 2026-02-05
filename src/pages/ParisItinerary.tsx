import { ItineraryTemplate } from "@/components/ItineraryTemplate";
import { parisData } from "@/data/countries/paris";

const ParisItinerary = () => {
  return <ItineraryTemplate data={parisData} />;
};

export default ParisItinerary;