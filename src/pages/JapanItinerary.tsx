import JapanAdventureDesktopCard from "@/components/JapanAdventureDesktopCard";
import { ItineraryTemplate } from "@/components/ItineraryTemplate";
import { japanData } from "@/data/countries/japan";

const JapanItinerary = () => {
  return (
    <ItineraryTemplate
      data={japanData}
      hideDesktopHero
      desktopHero={
        <div className="hidden md:block">
          <JapanAdventureDesktopCard
            title={japanData.title}
            priceLabel={japanData.price}
            ctaLabel={japanData.ctaLabel}
          />
        </div>
      }
    />
  );
};

export default JapanItinerary;
