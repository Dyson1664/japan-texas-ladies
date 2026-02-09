import Navbar from "@/components/Navbar";
import JapanAdventureDesktopCard from "@/components/JapanAdventureDesktopCard";
import { japanData } from "@/data/countries/japan";

export default function JapanAdventureCardPreview() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <JapanAdventureDesktopCard
        title={japanData.title}
        priceLabel={japanData.price}
        ctaLabel={japanData.ctaLabel}
      />
    </div>
  );
}
