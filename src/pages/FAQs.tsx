import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/common/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "What’s not included?",
    answer:
      "Flights, travel insurance, visas (if required), and your personal spending money aren’t included. We keep these flexible so you can choose airlines, coverage, and budgets that suit you.",
  },
  {
    question: "What’s included in the trips?",
    answer:
      "We handle the big stuff—accommodation, internal transport, curated activities, and a selection of meals—plus authentic local experiences and a few surprises. Some trips include airport pickup on Day 1. Every trip is led by an Imagine Beyond Travel Group Leader, with local experts joining along the way.",
  },
  {
    question: "What kind of people join the trips?",
    answer:
      "Our groups are a mix of solo travelers, friends, and couples—mostly in their 20s and 30s—taking time off work, on sabbatical, or traveling longer-term. The best part? Strangers quickly become travel friends and share unforgettable moments together.",
  },
  {
    question: "Do others come solo?",
    answer:
      "Yes—most guests join solo. Group travel makes it easy to connect from day one, whether it’s your first time traveling alone or your tenth. Expect a friendly, welcoming vibe from the start.",
  },
  {
    question: "Why choose Imagine Beyond Travel?",
    answer:
      "We craft small-group adventures designed for curious, social travelers. Think thoughtful itineraries, unique experiences, seamless logistics, and the right balance of culture, adventure, and downtime—so you can focus on having an amazing time.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "Most travelers book 3–4 months ahead, especially for peak seasons. That said, last-minute spots do pop up—if your dates are flexible, we can often help on shorter notice too.",
  },
  {
    question: "Is there much free time for myself?",
    answer:
      "Definitely. We build in a good mix of group time and personal time, so you can relax, explore, or add optional activities. Your Group Leader will have plenty of suggestions for your free periods.",
  },
  // Append these to the end of FAQ_ITEMS
{
  question: "Should I bring a backpack or a suitcase?",
  answer:
    "Totally your call. Many travelers prefer backpacks for easy movement between stops, while others love the structure of a suitcase. Whichever you pick, pack light and keep it easy to handle.",
},
{
  question: "Where do we meet when I arrive?",
  answer:
    "About a month before departure, we’ll send a Welcome Email with your meeting point, your Group Leader’s contact, and a link to the trip WhatsApp group so you can connect with everyone in advance.",
},
{
  question: "Do I need to arrive at a specific time?",
  answer:
    "We suggest arriving by early afternoon so you can settle in before the welcome meeting. If you’re landing earlier or later, no problem—just give us a heads-up. Hotel check-in is typically from 2 PM.",
},
{
  question: "How does airport pickup work?",
  answer:
    "If your trip includes an airport transfer, a driver will meet you in arrivals holding a sign with your name and take you directly to the first-night hotel—simple and stress-free.",
},
{
  question: "I’m not into partying—will I still enjoy the trip?",
  answer:
    "Absolutely. There may be optional nights out, but there’s zero pressure to join. Our itineraries focus on culture, food, nature, and authentic experiences—party or no party, you’ll fit right in.",
},
{
  question: "Who will I share a room with?",
  answer:
    "Solo travelers are paired with a roommate of the same gender. Traveling with a friend or partner? Tell us in advance and we’ll room you together.",
}
];


const FAQs = React.memo(() => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/20 rounded-full p-4">
              <HelpCircle className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions 🤔
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Got questions? We've got answers. Everything you need to know about traveling with Imagine Beyond Travel.
          </p>
        </div>
      </section>

      {/* Single FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_ITEMS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card/50 rounded-lg border border-border/50 px-4"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                  <span className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 pl-9">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

{/* Contact */}
<section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
      Still Have Questions? 💬
    </h2>
    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
      Don’t see your question? Our friendly travel experts are here to help!
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <div className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold">
        📧 Email: bookings@imaginebeyondtrvel.com
      </div>
      <div className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold">
        💬 WhatsApp: 303-704-2860
      </div>
    </div>
  </div>
</section>



      <Footer />
    </div>
  );
});

FAQs.displayName = "FAQs";

export default FAQs;
