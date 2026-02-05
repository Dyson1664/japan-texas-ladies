import { useMemo, memo } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { TripCard } from "@/components/common/TripCard";
import TBFFFooter from "@/components/common/TBFFFooter";

// Import destination images
import thailandHero from "@/assets/thailand-hero.jpg";
import srilankaHero from "@/assets/srilanka-hero.jpg";
import philippinesHero from "@/assets/philippines-hero.jpg";
import japanHero from "@/assets/japan-hero.jpg";
import srilankaDay06 from "@/assets/srilanka-day05-ella-bridge.jpg";

// TBFF specific tours - Japan, Sri Lanka, Philippines
const TBFF_TOURS = [
  {
    id: 1,
    title: "Japan Golden Route",
    location: "Tokyo, Japan",
    duration: "7 days",
    price: "From $1,899",
    image: japanHero,
    tag: "",
    route: "/project/tbff/japan-itinerary",
    overview: "Neon cities to Zen temples—Tokyo to Kyoto by bullet train, sushi, and shrines."
  },
  {
    id: 2,
    title: "Sri Lanka Explorer",
    location: "Colombo, Sri Lanka",
    duration: "11 days",
    price: "From $1,449",
    image: srilankaDay06,
    tag: "",
    route: "/project/tbff/srilanka-itinerary",
    overview: "From Colombo's vibrant streets to Ella's trails and Arugam Bay's waves—Sri Lanka awaits."
  },
  {
    id: 3,
    title: "Philippines Island Hopping",
    location: "Manila, Philippines",
    duration: "10 days",
    price: "From $1,299",
    image: philippinesHero,
    tag: "",
    route: "/project/tbff/philippines-itinerary",
    overview: "Crystal lagoons, hidden beaches, and island paradise await in the Philippines."
  }
] as const;

interface Destination {
  name: string;
  image: string;
  route?: string;
  comingSoon?: boolean;
}

const TBFF_DESTINATIONS: readonly Destination[] = [
  { name: "Thailand", image: thailandHero, route: "/project/tbff/thailand-itinerary" },
  { name: "Sri Lanka", image: srilankaHero, route: "/project/tbff/srilanka-itinerary" },
  { name: "Philippines", image: philippinesHero, route: "/project/tbff/philippines-itinerary" },
  { name: "Japan", image: japanHero, route: "/project/tbff/japan-itinerary" },
] as const;

// Memoized destination card component
const DestinationCard = memo(({ destination }: { destination: Destination }) => {
  const isComingSoon = destination.comingSoon === true || !destination.route;

  const badge = (
    <span
      className="inline-flex items-center text-[9px] font-semibold uppercase tracking-wide
                 bg-white text-gray-900 px-1.5 py-0.5 rounded-full shadow ring-1 ring-black/10"
    >
      Coming soon
    </span>
  );

  const content = (
    <>
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      {isComingSoon && (
        <div className="absolute top-2 left-2 z-10">
          {badge}
        </div>
      )}
      <div className="absolute bottom-4 left-4">
        <h3 className="text-white font-semibold text-lg drop-shadow">{destination.name}</h3>
      </div>
    </>
  );

  return isComingSoon ? (
    <div
      className="relative aspect-square overflow-hidden rounded-3xl group ring-1 ring-black/10 select-none"
      aria-disabled="true"
      title={`${destination.name} — Coming soon`}
    >
      {content}
    </div>
  ) : (
    <Link
      to={destination.route!}
      className="relative aspect-square overflow-hidden rounded-3xl group cursor-pointer"
      onClick={() => window.scrollTo(0, 0)}
      title={destination.name}
    >
      {content}
    </Link>
  );
});

export default memo(function TBFFLandingPage() {
  // CSS filter to shift teal (#0FC2BF) to olive green (#506345)
  const tbffLogoStyle = {
    filter: 'brightness(0) saturate(100%) invert(35%) sepia(15%) saturate(600%) hue-rotate(70deg) brightness(95%) contrast(90%)'
  };

  const tourCards = useMemo(() => 
    TBFF_TOURS.map((tour) => (
      <TripCard 
        key={tour.id} 
        id={tour.id.toString()}
        image={tour.image}
        title={tour.title}
        location={tour.location}
        duration={tour.duration}
        price={tour.price}
        tag={tour.tag}
        route={tour.route}
        overview={tour.overview}
      />
    )), []
  );

  const destinationCards = useMemo(() => 
    TBFF_DESTINATIONS.map((destination, index) => (
      <DestinationCard key={`${destination.name}-${index}`} destination={destination} />
    )), []
  );

  return (
    <div className="tbff-theme min-h-screen bg-background">
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
        .tbff-theme .bg-primary\\/10 {
          background-color: rgba(251, 221, 218, 0.3) !important;
        }
        .tbff-theme .hover\\:text-primary:hover {
          color: #506345 !important;
        }
      `}</style>
      {/* Navigation */}
      <Navbar logoStyle={tbffLogoStyle} />

      {/* Video Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            TBFF Adventures
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl drop-shadow-md">
            Discover hidden gems and iconic landmarks with curated experiences for those who say yes to adventure
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Tours</h2>
            <p className="text-lg text-muted-foreground">Handpicked experiences for unforgettable journeys</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourCards}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Your Next Destination</h2>
            <p className="text-lg text-muted-foreground">Explore the world's most captivating destinations</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destinationCards}
          </div>
        </div>
      </section>

      {/* Footer */}
      <TBFFFooter />
    </div>
  );
});
