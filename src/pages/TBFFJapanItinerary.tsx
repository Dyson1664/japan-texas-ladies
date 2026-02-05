import { ItineraryTemplate } from "@/components/ItineraryTemplate";
import { japanData } from "@/data/countries/japan";
import TBFFFooter from "@/components/common/TBFFFooter";

const TBFFJapanItinerary = () => {
  // CSS filter to shift teal (#0FC2BF) to olive green (#506345)
  // Using filter combination to approximate the target color
  const tbffLogoStyle = {
    filter: 'brightness(0) saturate(100%) invert(35%) sepia(15%) saturate(600%) hue-rotate(70deg) brightness(95%) contrast(90%)'
  };

  return (
    <div className="tbff-theme">
      <style>{`
        .tbff-theme .bg-primary {
          background-color: #fbddda !important;
          color: #506345 !important;
          border-color: #fbddda !important;
        }
        .tbff-theme .bg-primary .text-white,
        .tbff-theme .bg-primary [class*="text-white"] {
          color: #506345 !important;
        }
        .tbff-theme .fill-primary {
          fill: #506345 !important;
        }
        .tbff-theme .text-primary {
          color: #506345 !important;
        }
        .tbff-theme .bg-gray-50,
        .tbff-theme .bg-muted,
        .tbff-theme [class*="gradient"] {
          background: #506345 !important;
        }
        .tbff-theme [class*="bg-primary"] {
          background-color: #fbddda !important;
        }
        .tbff-theme .text-foreground {
          color: #506345 !important;
        }
        /* Transportation dotted lines - override hardcoded teal to pink */
        .tbff-theme [style*="0FC2BF"] {
          background: #fbddda !important;
        }
        .tbff-theme .w-1.h-16.bg-primary,
        .tbff-theme .md\\:w-60.md\\:h-1.bg-primary {
          background-color: #fbddda !important;
        }
        .tbff-theme .w-1.h-16.bg-primary > div,
        .tbff-theme .md\\:w-60.md\\:h-1.bg-primary > div {
          background: linear-gradient(180deg, #fbddda 0%, #fbddda 50%, #fbddda 100%) !important;
          background-image: repeating-linear-gradient(180deg, transparent, transparent 4px, white 4px, white 8px) !important;
        }
      `}</style>
      <ItineraryTemplate data={japanData} logoStyle={tbffLogoStyle} FooterComponent={TBFFFooter} />
    </div>
  );
};

export default TBFFJapanItinerary;
