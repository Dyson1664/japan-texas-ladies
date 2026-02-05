import { Button } from "@/components/ui/button";
import { Globe, Mail } from "lucide-react";
import { useState, useCallback, useMemo, memo } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { MediaGridHero } from "@/components/common/MediaGridHero";
import { TripCard } from "@/components/common/TripCard";
import { TestimonialCard } from "@/components/common/TestimonialCard";
import { 
  FEATURED_TOURS, 
  DESTINATIONS, 
  TESTIMONIALS, 
  FEATURES, 
  TOUR_ROUTES 
} from "@/data/landing";
import Footer from "@/components/common/Footer";

// Import static images
import parisSeine from "@/assets/paris-seine.jpg";

// Hero media assets
import heroVideo from "@/assets/philippines/el-nido.mp4";
import heroVideoPoster from "@/assets/philippines/elnido-cover.jpeg";
import heroImg1 from "@/assets/japan-day03-group.jpg";
import heroImg2 from "@/assets/philippines-day05-wonderland.jpg";
import heroImg3 from "@/assets/srilanka-day11-main-goodbye-group-photo.jpg";
import heroImg4 from "@/assets/india-day01-gallery-01.jpg";
import heroImg5 from "@/assets/japan-last-day.jpg";




// Memoized destination card component  
// Memoized destination card component
const DestinationCard = memo(({ destination }: { destination: typeof DESTINATIONS[0] }) => {
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

  // Rounder corners: rounded-3xl
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





// Memoized feature card component
const FeatureCard = memo(({ feature }: { feature: typeof FEATURES[0] }) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
      <feature.icon className="w-8 h-8 text-primary-foreground" />
    </div>
    <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
    <p className="text-muted-foreground">{feature.description}</p>
  </div>
));

export default memo(function LandingPage() {
  const [email, setEmail] = useState("");

  // Memoized email change handler
  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  // Memoized component arrays to prevent recreation on every render
  const tourCards = useMemo(() => 
    FEATURED_TOURS.map((tour) => (
      <TripCard 
        key={tour.id} 
        id={tour.id.toString()}
        image={tour.image}
        title={tour.title}
        location={tour.location}
        duration={tour.duration}
        price={tour.price}
        tag={tour.tag}
        route={TOUR_ROUTES[tour.id]}
        overview={tour.overview}
      />
    )), []
  );

  const destinationCards = useMemo(() => 
    DESTINATIONS.map((destination, index) => (
      <DestinationCard key={`${destination.name}-${index}`} destination={destination} />
    )), []
  );

  const testimonialCards = useMemo(() => 
    TESTIMONIALS.map((testimonial, index) => (
      <TestimonialCard 
        key={`${testimonial.name}-${index}`} 
        name={testimonial.name}
        location={testimonial.location}
        text={testimonial.text}
        rating={testimonial.rating}
        date={testimonial.date}
        avatar={testimonial.avatar}
      />
    )), []
  );

  const featureCards = useMemo(() => 
    FEATURES.map((feature, index) => (
      <FeatureCard key={`${feature.title}-${index}`} feature={feature} />
    )), []
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section - Media Grid */}
      <MediaGridHero
        video={heroVideo}
        videoPoster={heroVideoPoster}
        images={[heroImg1, heroImg2, heroImg3, heroImg4, heroImg5]}
        reviews={[
          {
            testimonialText: "Did the Japan tour and it was honestly the best time of my life! A great mix of experiencing culture, food and nightlife. Would definitely recommend!",
            author: "Daniel Riley, United Kingdom"
          },
          {
            testimonialText: "The Philippines trip exceeded all expectations. Beautiful beaches, amazing people, and unforgettable adventures. Can't wait to book another trip!",
            author: "Sarah Chen, Australia"
          },
          {
            testimonialText: "Sri Lanka was absolutely incredible. From the temples to the tea plantations, every day was a new adventure. The guides were fantastic!",
            author: "Marcus Johnson, USA"
          }
        ]}
      />

      {/* Featured Tours */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">New Tours</h2>
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

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What People Think About Us</h2>
            <p className="text-lg text-muted-foreground">Real experiences from our travelers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialCards}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Us?</h2>
            <p className="text-lg text-muted-foreground">What makes our travel experiences special</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featureCards}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      {/* <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <img 
                src={parisSeine} 
                alt="Join our community"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Join Our Community
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Stay up to date on the latest tours, events and travel tips from our expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button className="bg-primary hover:bg-primary/90 px-6">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                By subscribing you agree to our Privacy Policy and Terms & Conditions.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <Footer />
    </div>
  );
});
