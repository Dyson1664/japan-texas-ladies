import { memo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/common/Footer";
import { HeroSection } from "@/components/common/HeroSection";

import landingHero from "@/assets/landing-hero.jpg";
import aboutus1 from "@/assets/about-us-1.jpeg";
import aboutus2 from "@/assets/about-us-2.jpeg";

// NEW: team photos (place these files in /src/assets/)
import aboutusDarrin from "@/assets/darrin5.png";
//import aboutusDave from "@/assets/dave.jpg";
import aboutusDave from "@/assets/dave8.png";


// Founders data
const FOUNDERS_INFO = {
  description:
    "Imagine Beyond Travel was founded by Darrin Wilson, from Denver, Colorado, and Dave Reilly, from Dublin, Ireland, after their paths crossed on Siargao Island in the Philippines. United by a shared vision and complementary strengths—Darrin's 5+ years in tourism and Dave's 3+ years in web development and production—we set out to build a company for solo explorers who want to join like-minded travelers and see the world together.",
};

export default memo(function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        backgroundImage={landingHero}
        title="About Us"
        subtitle="Passionate travelers creating unforgettable experiences"
        showCta={false}
        overlay="light"
      />

      {/* Our Mission Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/20 rounded-full" />
                <img
                  src={aboutus1}
                  alt="Travel adventure"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌍</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Our mission is simple: to deliver imaginative, expertly run trips that turn
                strangers into friends and destinations into lasting memories. We care deeply about
                our guests' experience, comfort, and well-being, ensuring every journey is
                thoughtfully curated, community-minded, and seamlessly organized—so you can explore
                more and worry less.
              </p>
              <p className="text-xl font-semibold text-primary italic">Dream it. Live it. Imagine Beyond</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a vibrant, inclusive, and responsible travel community. A world where
                travel is not only for new experiences but also a positive impact for the places and
                people it touches.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-400/30 rounded-full" />
              <img
                src={aboutus2}
                alt="Travel community"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">❤️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-primary to-primary/60 rounded-full opacity-20" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Our Purpose</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Our purpose is to form lifelong connections and make a positive change in every
            community we visit and the people we meet. We believe travel should enrich both the
            traveler and the destination.
          </p>
          <div className="absolute -bottom-8 right-1/4 w-16 h-16 bg-red-400/20 rounded-full" />
          <div className="absolute top-1/2 right-8 text-4xl opacity-60">✨</div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">The passionate people behind your amazing travel experiences</p>
          </div>

          <div>
            {/* Team Photos */}
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
              {/* Darrin - shown first on mobile and left on desktop */}
              <div className="text-center order-1 md:order-1">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full border-4 border-white shadow-lg overflow-hidden">
                  <img
                    src={aboutusDarrin}
                    alt="Darrin Wilson"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground">Darrin Wilson</h3>
                <p className="text-primary font-medium">Founder</p>
                <p className="text-sm text-muted-foreground">Denver, Colorado</p>
              </div>

              {/* Dave - shown second on mobile and right on desktop */}
              <div className="text-center order-2 md:order-2">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full border-4 border-white shadow-lg overflow-hidden">
                  <img
                    src={aboutusDave}
                    alt="Dave Reilly"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground">Dave Reilly</h3>
                <p className="text-primary font-medium">Co-Founder</p>
                <p className="text-sm text-muted-foreground">Dublin, Ireland</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-lg text-center">
              {FOUNDERS_INFO.description}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
});
