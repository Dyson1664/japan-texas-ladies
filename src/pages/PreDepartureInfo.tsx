import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/common/Footer";
import { AlertCircle, Globe, CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const GOV_LINKS: Record<string, { label: string; url: string }[]> = {
  "Australia": [
    { label: "Travel Advice & Destination Information", url: "https://www.smartraveller.gov.au/" },
    { label: "Before You Go Checklist", url: "https://www.smartraveller.gov.au/before-you-go/the-basics" },
  ],
  "Canada": [
    { label: "Travel Advice & Destination Information", url: "https://travel.gc.ca/" },
    { label: "Interactive Tool – Ask Travel", url: "https://travel.gc.ca/assistance/ask-travel" },
  ],
  "European Union (Member States)": [
    { label: "European Commission – Travel Advice Directory", url: "https://ec.europa.eu/consularprotection/content/travel-advice_en" },
  ],
  "New Zealand": [
    { label: "Travel Advice & Destination Information", url: "https://www.safetravel.govt.nz/" },
    { label: "Quick Checklist & Tips", url: "https://www.safetravel.govt.nz/quick-checklist-and-tips" },
  ],
  "United Kingdom": [
    { label: "Travel Advice & Destination Information", url: "https://www.gov.uk/browse/abroad" },
    { label: "Foreign Travel Checklist", url: "https://www.gov.uk/guidance/foreign-travel-checklist" },
  ],
  "United States of America": [
    { label: "Travel Advice & Destination Information", url: "https://travel.state.gov/content/travel/en/international-travel.html" },
    { label: "Traveler’s Checklist", url: "https://travel.state.gov/content/travel/en/international-travel/before-you-go/travelers-checklist.html" },
  ],
};

const PreDepartureInfo = React.memo(() => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Pre-departure Information
          </h1>
          <p className="mt-3 text-lg md:text-xl text-muted-foreground">
            Be prepared before you go on your trip
          </p>
        </div>
      </section>

      {/* Main card */}
      <section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm space-y-8">
            {/* Intro */}
            <div className="flex gap-3">
              <AlertCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-card-foreground">
                  Make sure you're well-prepared
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Make sure you're well-prepared before embarking on your trip by carefully reviewing the following information, which is aimed at ensuring a smooth travel experience: Entry requirements and restrictions imposed by foreign governments can change frequently, regardless of your travel date. These regulations may vary based on factors such as your country of residence, passport nationality, destination, transit points, and travel history. Thus, travellers are responsible for researching and understanding the latest travel and health requirements and restrictions relevant to their destinations at the time of travel.
                </p>
              </div>
            </div>

            {/* Key points */}
            <div className="rounded-xl border border-border/70 bg-background p-5 md:p-6">
              <h3 className="font-semibold text-foreground mb-3">Key points to remember:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Stay updated on current travel and health requirements and restrictions for all countries you’ll transit or visit—not just your starting point.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Avoid booking international flights until you’ve done your own research or consulted our team/your travel agent.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Check for additional entry requirements if your itinerary includes multiple countries.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Traveling with minors (under 18) may require extra documentation—contact the relevant Embassy/Consulate to confirm.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Boating trip itineraries can change due to weather or safety conditions—flexibility keeps the journey safe and enjoyable.</span>
                </li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                We appreciate your cooperation and can’t wait to share an incredible adventure together!
              </p>
            </div>




            {/* Government links */}
            <div className="rounded-2xl border border-border bg-background p-5 md:p-6">
              <div className="flex items-start gap-3 mb-2">
                <Globe className="w-6 h-6 text-primary mt-0.5" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Travel Advice & Resources by your home government
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Below are links provided and updated by various governments. If you have any queries about the information on these pages, reach out to your home government.
                    <br />
                    <span className="italic">Visa information is included within these resources.</span>
                  </p>
                </div>
              </div>

              <Accordion type="single" collapsible className="mt-4 space-y-2">
                {Object.entries(GOV_LINKS).map(([name, links], idx) => (
                  <AccordionItem
                    key={name}
                    value={`${idx}`}
                    className="bg-card/40 rounded-md border border-border px-4"
                  >
                    <AccordionTrigger className="py-3 text-left hover:no-underline">
                      <span className="font-medium">{name}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {links.map((l, i) => (
                          <li key={i}>
                            <a
                              href={l.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline break-all"
                            >
                              {l.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <p className="mt-4 text-sm text-muted-foreground">
                If your country isn't listed, please consult your home government’s foreign travel website for official guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
});

PreDepartureInfo.displayName = "PreDepartureInfo";
export default PreDepartureInfo;
