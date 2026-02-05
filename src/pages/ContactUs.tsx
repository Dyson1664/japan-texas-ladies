import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/common/Footer";
import { Mail, MessageCircle } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    details: ["bookings@imaginebeyondtrvel.com"], // plain text
    description: "We respond within 24 hours",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "WhatsApp",
    details: ["303-704-2860"], // plain text
    description: "Quick messaging support",
  },
];

const ContactUs = React.memo(() => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/20 rounded-full p-4">
              <MessageCircle className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start planning your next adventure? We’re here to help every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Information (Centered) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto place-items-center">
            {CONTACT_INFO.map((contact, index) => (
              <div
                key={index}
                className="w-full max-w-sm bg-card rounded-lg p-6 border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {contact.icon}
                </div>
                <h3 className="font-semibold text-lg text-card-foreground mb-3">
                  {contact.title}
                </h3>
                <div className="space-y-1 mb-3">
                  {contact.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-sm text-muted-foreground font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section (optional, keep if you like) */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Follow Our Adventures</h2>
          <p className="text-muted-foreground mb-8">
            Stay connected with us on social media for travel inspiration, tips, and exclusive offers!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.tiktok.com/@imaginebeyondtrav"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card hover:bg-card/80 rounded-full p-4 border border-border transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43V7.56a8.16 8.16 0 004.77 1.17v-3.4a4.85 4.85 0 01-1-.64z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61579914740539"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card hover:bg-card/80 rounded-full p-4 border border-border transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/imagine.beyond.travel/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card hover:bg-card/80 rounded-full p-4 border border-border transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
});

ContactUs.displayName = "ContactUs";

export default ContactUs;
