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
        priceNote={japanData.priceNote}
        ctaLabel={japanData.ctaLabel}
        tripSlug={japanData.slug}
      />
    </div>
  );
}
