import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { AppRouter } from "./router";

import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import TermsConditions from "./pages/TermsConditions";
import JapanAdventureCardPreview from "./pages/JapanAdventureCardPreview";
import JapanItinerary from "./pages/JapanItinerary";

import BookingPage from "./pages/booking/BookingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppRouter>
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/terms" element={<TermsConditions />} />

          <Route path="/" element={<JapanItinerary />} />
          <Route path="/bali-itinerary" element={<JapanAdventureCardPreview />} />
          <Route path="/booking/:slug" element={<BookingPage />} />
          <Route path="/japan-adventure-preview" element={<JapanAdventureCardPreview />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
