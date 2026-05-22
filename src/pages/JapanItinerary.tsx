import { useEffect } from "react";
import JapanAdventureDesktopCard from "@/components/JapanAdventureDesktopCard";
import { ItineraryTemplate } from "@/components/ItineraryTemplate";
import { japanData } from "@/data/countries/japan";

const JapanItinerary = () => {
  // 🔽 Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <ItineraryTemplate
      data={japanData}
      hideDesktopHero
      desktopHero={
        <div className="hidden md:block">
          <JapanAdventureDesktopCard
            title={japanData.title}
            priceLabel={japanData.price}
            priceNote={japanData.priceNote}
            ctaLabel={japanData.ctaLabel}
            tripSlug={japanData.slug}
          />
        </div>
      }
    />
  );
};

export default JapanItinerary;
