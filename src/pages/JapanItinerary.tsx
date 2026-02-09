import JapanAdventureDesktopCard from "@/components/JapanAdventureDesktopCard";
import { ItineraryTemplate } from "@/components/ItineraryTemplate";
import { japanData } from "@/data/countries/japan";

const JapanItinerary = () => {
  return (
    <>
      <div className="hidden md:block">
        <JapanAdventureDesktopCard />
      </div>
      <ItineraryTemplate data={japanData} />
    </>
  );
};

export default JapanItinerary;
