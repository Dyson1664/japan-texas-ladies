import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/common/Footer";
import {
  Shield,
  AlertTriangle,
  Plane,
  Bus,
  TrainFront,
  Ship,
  Hotel,
  MapPin,
  Camera,
  Sun,
  LifeBuoy,
  Globe,
  CheckCircle2,
  Heart,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const INTRO_POINTS = [
  "Local laws, transport rules, safety standards, and infrastructure can differ from what you’re used to at home.",
  "Some itineraries include challenging activities and remote regions that require reasonable physical stamina.",
  "Political conditions can change and may be less predictable in certain destinations.",
  "Natural events—such as storms or earthquakes—can occur worldwide, including places we visit.",
  "Most people you’ll meet are warm and genuine, but—as anywhere—staying alert is smart.",
  "In remote areas, assistance and services may be limited or slower to access.",
  "Hospitals and emergency services can vary significantly from country to country.",
];

const BASICS = [
  "Make copies of your passport and key documents; store digital scans in your email/cloud.",
  "Register your travel with your embassy/consulate so they can contact you in an emergency.",
  "Purchase comprehensive travel insurance—no one plans for mishaps, but it’s vital when you need it.",
  "Share your itinerary with friends/family so someone always knows where you’ll be.",
];

const HEALTH = [
  "Consult your doctor or a travel clinic well in advance for vaccines and destination-specific advice.",
  "Allow time for vaccinations/boosters to become effective before departure.",
  "Pack prescription meds in original packaging and bring extra in case of delays.",
];

const AIR_TIPS = [
  "Pay attention to the safety briefing—even if you’ve heard it before.",
  "Count rows to the nearest exit (useful in low-visibility situations).",
  "Go easy on alcohol—its effects can be stronger at altitude.",
  "Follow crew instructions—they’re there for your safety.",
  "Keep your seatbelt fastened when seated—turbulence happens.",
];

const BUS_TRAIN_TIPS = [
  "Keep valuables on you or in sight; consider small locks where appropriate.",
  "Mind uneven steps or slippery platforms when boarding/alighting.",
  "Stay alert to distractions and potential pickpockets in crowded stations.",
  "Know your stop beforehand and set an alarm if you might doze off.",
];

const TAXI_TIPS = [
  "Ask your hotel/guide to call a licensed taxi or use reputable apps.",
  "Use official taxi stands where available.",
  "Keep essentials (phone, passport copy, wallet) on your person for quick exit if needed.",
  "Check the vehicle/driver details before getting in.",
];

const WATER_TIPS = [
  "Listen to briefings and wear life jackets when required.",
  "Maintain three points of contact when moving around the vessel.",
  "Protect from sun glare/reflection: sunscreen, hat, and hydration.",
  "If you get seasick, take medication before boarding as directed.",
];

const LODGING_TIPS = [
  "Keep an eye on luggage until it’s inside the lobby or your room.",
  "Lobbies are busy—watch your belongings during check-in/out.",
  "Confirm the door closes/locks properly; use additional latches/bolts.",
  "Check the peephole before opening your door to anyone.",
  "Use the in-room safe for cash, documents, and valuables.",
  "Review the emergency plan posted on the back of the room door.",
  "Keep your key in a consistent place for quick access in an emergency.",
];

const EXPLORATION_TIPS = [
  "Blend in—dress similarly to locals and avoid flashy displays.",
  "Check maps discreetly; if lost, ask uniformed staff or officials.",
  "Stick to busy, well-lit areas—especially at night.",
  "Keep cameras out of sight when not in use.",
  "Withdraw cash in daylight at busy locations; shield your PIN.",
  "Leave excess cash/documents/jewelry in the hotel safe.",
  "Carry bags securely; cross-body with flap inward is best.",
  "Avoid walking alone late at night—go with a friend or group.",
  "Carry the hotel card/address for easy return by taxi.",
  "Trust your instincts—if something feels off, step away.",
];

const OPTIONAL_ACTIVITIES = [
  "For activities booked independently on free days, verify safety standards and insurance.",
  "Ask operators about qualifications, equipment checks, and emergency procedures.",
  "For water activities, use a certified guide and follow local rules.",
  "If unsure, ask your Group Leader for vetted recommendations.",
];

const TravelSafety = React.memo(() => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-primary/15 to-background py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Travel Safety</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Safety First
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Joining an Imagine Beyond Travel tour opens a world of adventure. Here’s how we—and you—keep it safe, informed, and fun.
          </p>
        </div>
      </section>

      {/* Intro card */}
      <section className="py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start gap-3">
              <Globe className="w-6 h-6 text-primary mt-1" />
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Travel comes with new environments and different norms. The points below outline what you may encounter—and how to prepare. We take every reasonable precaution to support your safety and enjoyment, and this guide shares ways you can further protect yourself on the road.
                </p>
                <ul className="mt-4 space-y-2">
                  {INTRO_POINTS.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-6 md:py-10">
        <div className="max-w-5xl mx-auto px-4 space-y-10">

          {/* 1. The Basics */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">1. The Basics</h2>
            </div>
            <p className="text-muted-foreground">
              Before you set off, a few simple steps at home go a long way toward a smooth, safe trip:
            </p>
            <ul className="mt-4 grid md:grid-cols-2 gap-3">
              {BASICS.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* TBFF Link */}
          <Link 
            to="/project/tbff" 
            className="block bg-primary/10 border border-primary/20 rounded-2xl p-6 md:p-8 shadow-sm hover:bg-primary/15 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-xl font-semibold text-foreground">Explore TBFF Tours</h3>
                <p className="text-muted-foreground mt-1">Check out our featured group travel experiences.</p>
              </div>
            </div>
          </Link>

          {/* 2. Health First */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">2. Health First</h2>
            </div>
            <p className="text-muted-foreground">
              New climates and cuisines are part of the fun—prepare with medical guidance in advance:
            </p>
            <ul className="mt-4 grid md:grid-cols-2 gap-3">
              {HEALTH.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Transport (Accordion with sub-sections) */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">3. Transport</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              You’ll use a mix of transport types. These quick tips keep things smooth and safe:
            </p>

            <Accordion type="multiple" className="space-y-3">
              <AccordionItem value="air" className="border rounded-lg px-4">
                <AccordionTrigger className="py-3 hover:no-underline">
                  <div className="flex items-center gap-2">
                    <Plane className="w-5 h-5 text-primary" />
                    <span className="font-medium">Air Travel</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <ul className="space-y-2 text-muted-foreground">
                    {AIR_TIPS.map((t, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="bus-train" className="border rounded-lg px-4">
                <AccordionTrigger className="py-3 hover:no-underline">
                  <div className="flex items-center gap-2">
                    <TrainFront className="w-5 h-5 text-primary" />
                    <span className="font-medium">Buses & Trains</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <ul className="space-y-2 text-muted-foreground">
                    {BUS_TRAIN_TIPS.map((t, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="taxi" className="border rounded-lg px-4">
                <AccordionTrigger className="py-3 hover:no-underline">
                  <div className="flex items-center gap-2">
                    <Bus className="w-5 h-5 text-primary" />
                    <span className="font-medium">Taxis & Rides</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <ul className="space-y-2 text-muted-foreground">
                    {TAXI_TIPS.map((t, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="water" className="border rounded-lg px-4">
                <AccordionTrigger className="py-3 hover:no-underline">
                  <div className="flex items-center gap-2">
                    <Ship className="w-5 h-5 text-primary" />
                    <span className="font-medium">Water Transport</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <ul className="space-y-2 text-muted-foreground">
                    {WATER_TIPS.map((t, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* 4. Your Stay */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Hotel className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">4. Your Stay</h2>
            </div>
            <p className="text-muted-foreground">
              Accommodations are your base—keep them secure with simple habits:
            </p>
            <ul className="mt-4 grid md:grid-cols-2 gap-3">
              {LODGING_TIPS.map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Exploration */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Camera className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">5. Exploration</h2>
            </div>
            <p className="text-muted-foreground">
              Dive into new places while staying street-smart:
            </p>
            <ul className="mt-4 grid md:grid-cols-2 gap-3">
              {EXPLORATION_TIPS.map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 6. Other Activities */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <LifeBuoy className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">6. Other Activities</h2>
            </div>
            <p className="text-muted-foreground">
              We vet the activities we include. For anything booked independently on free days:
            </p>
            <ul className="mt-4 space-y-2">
              {OPTIONAL_ACTIVITIES.map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Last note */}
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-primary mt-0.5" />
              <p className="text-muted-foreground">
                Imagine Beyond Travel takes care to plan responsibly and adapt to changing conditions. Your awareness and preparation are powerful safety tools—thanks for being a smart traveler.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Gentle CTA */}
      <section className="py-14 bg-gradient-to-b from-background to-primary/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">Stay Safe, Travel Smart 🌟</h3>
          <p className="mt-3 text-lg text-muted-foreground">
            Prepared travelers have the best adventures. We’ll handle the heavy lifting—bring your curiosity.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
});

TravelSafety.displayName = "TravelSafety";
export default TravelSafety;
