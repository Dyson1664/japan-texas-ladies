import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import { DestinationData } from "@/data/destinations";
import { getPayUrlBySlug } from '@/data/payUrls';
import Footer from "@/components/common/Footer";

interface DestinationTemplateProps {
  data: DestinationData;
}

const DestinationTemplate = ({ data }: DestinationTemplateProps) => {
  const { country, heroImage, heroSubtitle, trips } = data;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {country}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Trips Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Available Trips in {country}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully curated {country.toLowerCase()} adventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {trips.map((trip) => (
              <Card key={trip.id} className="overflow-hidden hover:shadow-coral transition-shadow duration-300">
                <div className="relative h-64">
                  <img 
                    src={trip.image} 
                    alt={trip.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{country}</span>
                    <Clock className="h-4 w-4 ml-4" />
                    <span>{trip.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {trip.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {trip.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">
                      {trip.price}
                    </span>
                    <div className="flex gap-2">
                      <Button asChild variant="outline" size="sm">
                        <Link to={trip.route}>
                          View Trip
                        </Link>
                      </Button>
                      {(() => {
                        const href = getPayUrlBySlug(trip.slug || '');
                        const isDisabled = href === '#';
                        
                        if (isDisabled) {
                          return (
                            <Button 
                              size="sm" 
                              className="pointer-events-none opacity-50"
                              aria-disabled="true"
                            >
                              Book Now
                            </Button>
                          );
                        }
                        
                        return (
                          <Button 
                            size="sm" 
                            className="bg-primary hover:bg-primary-glow"
                            onClick={(e) => {
                              e.preventDefault();
                              console.log('DestinationTemplate Book Now clicked, opening URL:', href);
                              try {
                                const newWindow = window.open(href, '_blank');
                                if (!newWindow) {
                                  window.location.href = href;
                                }
                              } catch (error) {
                                console.error('Failed to open URL:', error);
                                window.location.href = href;
                              }
                            }}
                          >
                            Book Now
                          </Button>
                        );
                      })()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DestinationTemplate;