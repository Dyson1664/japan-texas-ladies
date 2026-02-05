import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/common/Footer";
import { Scale, Shield, AlertCircle } from "lucide-react";

const BRAND_TEAL = "#0FC2BF";

/* =========================
   SECTIONS 1 ONLY (CUSTOM)
========================= */
const SECTION_ONE = {
  title: "1. Booking & Payment",
  content: [
    "Deposit (non-refundable): Your spot is confirmed once the USD $300 deposit is received.",
    "Balance: The remaining balance is due no later than 60 days before the tour start date.",
    "All prices are quoted and charged in United States Dollars (USD).",
    "The traveler who paid a deposit may assign or transfer that deposit and booking to another person by written notice with the new traveler’s full name and contact details. Transfer is only permitted to the same tour date and may be subject to any third-party change fees.",
    "You must be 18 years or older to make a booking."
  ]
};

/* =========================
   SECTIONS 3–18 (UPDATED)
========================= */
const TERMS_SECTIONS = [
  {
    title: "3. Travel & Medical Insurance (Mandatory)",
    content: [
      "Adequate travel insurance is mandatory and must cover medical expenses, emergency evacuation, repatriation, trip cancellation, interruption, and personal liability.",
      "Participants are responsible for ensuring they are medically and physically fit to travel.",
      "Failure to maintain adequate insurance releases Imagine Beyond Travel (IBT) from liability for losses that would otherwise be covered.",
      "Participants acknowledge that they will be required to review and sign a separate Liability Waiver and Release Agreement prior to tour departure. Failure or refusal to sign the waiver may result in denial of participation without refund."
    ]
  },
  {
    title: "4. Health, Fitness & Medical Disclosure",
    content: [
      "Participants must disclose any medical condition, disability, pregnancy, allergy, or injury prior to departure.",
      "IBT may require medical clearance or restrict participation for safety reasons.",
      "Failure to disclose material medical information may result in denial of participation without refund.",
      "Cancellations due to medical or pregnancy-related reasons are subject to the standard cancellation policy."
    ]
  },
  {
    title: "5. Passports, Visas & Entry Requirements",
    content: [
      "Participants are responsible for complying with all passport, visa, vaccination, and entry requirements.",
      "Passports must generally be valid for at least six (6) months beyond the tour end date.",
      "IBT is not liable for denied boarding or entry."
    ]
  },
  {
    title: "6. Chargebacks & Payment Disputes",
    content: [
      "Customers agree to contact Imagine Beyond Travel (IBT) directly before initiating any chargeback or payment dispute.",
      "Initiating a chargeback or payment dispute after accepting these Terms & Conditions may be considered a breach of contract.",
      "IBT reserves the right to recover any disputed amounts, including chargeback fees and reasonable administrative or legal costs.",
      "IBT further reserves the right to pursue legal action to recover unpaid balances, damages, and costs arising from unauthorized or unjustified chargebacks, to the fullest extent permitted by law.",
      "The refund and cancellation policies outlined in these Terms & Conditions apply regardless of any chargeback or payment dispute attempt.",
      "Guests acknowledge that initiating a chargeback or payment dispute does not relieve them of their payment obligations under this agreement."
    ]
  },
  {
    title: "7. Airfare & Transportation",
    content: [
      "International flights are not included unless explicitly stated.",
      "IBT is not responsible for airline delays, cancellations, missed connections, or lost baggage.",
      "Missed tour services due to flight disruptions are non-refundable."
    ]
  },
  {
    title: "8. Cardholder Declaration",
    content: [
      "You certify that the payment card used is your own, or that you have formal authorization to use it, and that all details provided are true and correct."
    ]
  },
  {
    title: "9. Itinerary Changes",
    content: [
      "IBT reserves the right to modify itineraries, accommodations, transportation, or activities due to operational, safety, weather, or supplier reasons.",
      "Unused services are non-refundable.",
      "Alternative arrangements may be offered but are not guaranteed."
    ]
  },
  {
    title: "10. Assumption of Risk",
    content: [
      "You acknowledge that our trips may involve inherent risks, including travel in locations with different political, cultural, environmental, and weather conditions.",
      "You agree to follow all safety instructions provided by trip leaders and local partners."
    ]
  },
  {
    title: "11. Participant Conduct",
    content: [
      "IBT reserves the right to remove any participant for unsafe, disruptive, abusive, illegal, or inappropriate behavior without refund."
    ]
  },
  {
    title: "12. Force Majeure & Extraordinary Events",
    content: [
      "IBT is not liable for delays, changes, or cancellations caused by events beyond its control, including natural disasters, pandemics, government actions, civil unrest, supplier failure, or transportation disruptions.",
      "IBT may modify, suspend, shorten, or cancel tours where required for safety, operational, legal, or force majeure reasons.",
      "No refunds will be issued for fear of travel, perceived risk, or media coverage where the tour continues lawfully."
    ]
  },
  {
    title: "13. External / Independent Activities",
    content: [
      "Activities not arranged by Imagine Beyond Travel are undertaken at your own risk.",
      "IBT is not liable for damages or losses arising from independently booked activities."
    ]
  },
  {
    title: "14. Images & Marketing",
    content: [
      "By participating in an IBT tour, you grant a perpetual, worldwide, royalty-free license for the use of photos or videos featuring your likeness for marketing purposes."
    ]
  },
  {
    title: "15. Complaints",
    content: [
      "Issues must be raised immediately with the group leader during the tour.",
      "Written complaints must be submitted within 30 days of tour completion."
    ]
  },
  {
    title: "16. Governing Law & Jurisdiction",
    content: [
      "These Terms & Conditions are governed by the laws of the State of Colorado, USA. Any disputes shall be subject to the exclusive jurisdiction of Colorado courts."
    ]
  },
  {
    title: "17. Privacy & Communications",
    content: [
      "By booking, you consent to receive transactional communications related to your booking and acknowledge IBT’s Privacy Policy."
    ]
  },
  {
    title: "18. Acceptance",
    content: [
      "Payment of a deposit or full balance constitutes acceptance of these Terms & Conditions."
    ]
  }
];

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Scale className="mx-auto w-12 h-12 text-primary mb-6" />
          <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-muted-foreground text-lg">
            Please read these terms carefully before booking your travel with Imagine Beyond Travel.
          </p>
        </div>
      </section>

      {/* Terms */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <style>{`:root { --brand-teal: ${BRAND_TEAL}; }`}</style>

          {/* Section 1 */}
          <div className="bg-card p-8 border rounded-lg">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Shield className="w-5 h-5 mr-3 text-primary" />
              {SECTION_ONE.title}
            </h3>
            <ul className="list-disc pl-6 space-y-3 marker:text-[var(--brand-teal)]">
              {SECTION_ONE.content.map((item, i) => (
                <li key={i} className="text-muted-foreground">{item}</li>
              ))}
            </ul>
          </div>

          {/* Section 2 */}
<div className="bg-card p-8 border rounded-lg">
  <h3 className="text-xl font-semibold mb-6 flex items-center">
    <Shield className="w-5 h-5 mr-3 text-primary" />
    2. Refunds & Cancellations
  </h3>

  <ul className="list-disc pl-6 space-y-3 marker:text-[var(--brand-teal)]">
    <li className="text-muted-foreground">
      All deposits and balance payments made to Imagine Beyond Travel are non-refundable,
      except where Imagine Beyond Travel cancels the trip. This includes, but is not limited
      to, circumstances where a traveler is unable to attend the tour for personal, medical,
      or scheduling reasons.
    </li>

    <li className="text-muted-foreground">
      If Imagine Beyond Travel cancels the trip for any reason, you will receive a 100% refund
      of all amounts paid to Imagine Beyond Travel.
    </li>

    <li className="text-muted-foreground">
      Guests unable to travel may transfer their booking to another eligible participant,
      subject to full payment, acceptance of these Terms & Conditions, and any applicable fees.
    </li>
  </ul>
</div>


          {/* Sections 3–18 */}
          {TERMS_SECTIONS.map(section => (
            <div key={section.title} className="bg-card p-8 border rounded-lg">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Shield className="w-5 h-5 mr-3 text-primary" />
                {section.title}
              </h3>
              <ul className="list-disc pl-6 space-y-3 marker:text-[var(--brand-teal)]">
                {section.content.map((item, i) => (
                  <li key={i} className="text-muted-foreground">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;
