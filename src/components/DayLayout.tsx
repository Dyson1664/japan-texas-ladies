import { memo, useCallback, useEffect, useState } from "react";
import { Car, Ship, Bus, Train, Plane } from "lucide-react";
import srilankaColomboDayImage from "@/assets/srilanka-colombo.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface Accommodation {
  name: string;
  rating?: string;
  roomTypes?: string[];
  website?: string;
  image?: string;
}

interface Transportation {
  from: string;
  to: string;
  duration: string;
  distance?: string;
}

interface DayLayoutProps {
  dayNumber: number;
  date: string;
  location: string;
  siteName?: string;
  heroImage: string;
  description: string;
  carouselImages: string[];
  accommodation?: Accommodation;
  transportation?: Transportation;
  meals?: string;
  highlights?: string;
}

export const DayLayout = memo(({ 
  dayNumber, 
  date, 
  location,
  siteName, 
  heroImage, 
  description, 
  carouselImages, 
  accommodation,
  transportation,
  meals,
  highlights
}: DayLayoutProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  const advanceCarousel = useCallback(() => {
    if (api) {
      const nextIndex = Math.min(current + 2, carouselImages.length - 1);
      api.scrollTo(nextIndex);
    }
  }, [api, current, carouselImages.length]);
  return (
    <div className="bg-background">
      {/* Hero Image */}
      <div className="px-4 md:px-10 pt-6">

        <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-sm">
          <img
            src={heroImage}
            alt={`Day ${dayNumber} - ${location}`}
            className="w-full h-full object-cover"
          />
          {/* Date overlay in top left corner */}
          {date && (
            <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-white px-2 py-0.5 rounded text-xs font-light tracking-wide">
              {date}
            </div>
          )}
          {/* Site name overlay in top right corner */}
          <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white px-2 py-0.5 rounded text-xs font-light tracking-wide">
            {siteName || location}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="px-4 py-10 md:px-10 bg-background">
        <p className="text-muted-foreground leading-relaxed text-sm">
          {description}
        </p>
      </div>

      {/* Day Highlights */}
      <div className="px-4 pb-10 md:px-10 bg-background">
        <div className="flex flex-col space-y-3 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 max-w-4xl">
          {/* Row 1 on desktop */}
          <div className="flex items-start gap-3">
            <span className="text-lg">📍</span>
            <div>
              <span className="text-sm font-medium text-foreground">Location: </span>
              <span className="text-sm text-muted-foreground">{location}</span>
            </div>
          </div>
          {accommodation && (
            <div className="flex items-start gap-3">
              <span className="text-lg">🏠</span>
              <div>
                <span className="text-sm font-medium text-foreground">Where we stay: </span>
                <span className="text-sm text-muted-foreground">{accommodation.name}</span>
              </div>
            </div>
          )}
          {/* Row 2 on desktop */}
          {meals && (
            <div className="flex items-start gap-3">
              <span className="text-lg">🍽️</span>
              <div>
                <span className="text-sm font-medium text-foreground">Included meals: </span>
                <span className="text-sm text-muted-foreground">{meals}</span>
              </div>
            </div>
          )}
          {highlights && (
            <div className="flex items-start gap-3">
              <span className="text-lg">🙌🏼</span>
              <div>
                <span className="text-sm font-medium text-foreground">Key highlights: </span>
                <span className="text-sm text-muted-foreground">{highlights}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Image Carousel Section */}
      {carouselImages.length > 0 && (
        <div className="px-4 pb-10 md:px-10 bg-background">
          <h4 className="text-lg font-semibold text-foreground mb-4">Gallery</h4>
          <Carousel setApi={setApi} className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/2">
                  <div className="relative h-48 md:h-60 overflow-hidden rounded-lg cursor-pointer" onClick={advanceCarousel}>
                    <img
                      src={image}
                      alt={`${location} gallery image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex -left-9" />
            <CarouselNext className="hidden lg:flex -right-9" />
          </Carousel>
          
          {/* Dots Navigation for Mobile/Tablet */}
          <div className="flex justify-center gap-2 mt-4 lg:hidden">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === current 
                    ? "bg-primary" 
                    : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Transportation Section */}
      {transportation && (
        <div className="px-4 pb-10 md:px-10 bg-background">
          <h4 className="text-lg font-semibold text-foreground mb-4">Transportation</h4>
          <div className="space-y-4">
            {/* Transportation Icons */}
            <div className="flex justify-center gap-4 mb-6">
              <Car className="w-8 h-8 text-primary" />
              <Ship className="w-8 h-8 text-muted-foreground/40" />
              <Bus className="w-8 h-8 text-muted-foreground/40" />
              <Train className="w-8 h-8 text-muted-foreground/40" />
              <Plane className="w-8 h-8 text-muted-foreground/40" />
            </div>
            
            {/* Route Line */}
            <div className="flex flex-col md:flex-row items-center justify-center relative max-w-sm mx-auto">
              <div className="text-center mb-1 md:mb-0">
                <p className="font-medium text-foreground text-sm">{transportation.from}</p>
              </div>
              <div className="my-1 md:mx-3 md:my-0 relative flex flex-col md:flex-row items-center">
                <div className="w-1 h-16 md:w-60 md:h-1 bg-primary rounded-full relative">
                  {/* Mobile vertical dotted line */}
                  <div 
                    className="absolute inset-0 bg-primary rounded-full md:hidden"
                    style={{
                      background: 'linear-gradient(180deg, #0FC2BF 0%, #0FC2BF 50%, #0FC2BF 100%)',
                      backgroundImage: 'repeating-linear-gradient(180deg, transparent, transparent 4px, white 4px, white 8px)'
                    }}
                  ></div>
                  {/* Desktop horizontal dotted line */}
                  <div 
                    className="absolute inset-0 bg-primary rounded-full hidden md:block"
                    style={{
                      background: 'linear-gradient(90deg, #0FC2BF 0%, #0FC2BF 50%, #0FC2BF 100%)',
                      backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 4px, white 4px, white 8px)'
                    }}
                  ></div>
                </div>
                <div className="mt-0.5 md:ml-1 md:mt-0">
                  <svg className="w-4 h-4 text-primary transform rotate-90 md:rotate-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="text-center mt-1 md:mt-0">
                <p className="font-medium text-foreground text-sm">{transportation.to}</p>
              </div>
            </div>
            
            {/* Duration and Distance */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {transportation.duration}
                {transportation.distance && ` | ${transportation.distance}`}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});
