// Static data for itinerary template optimization

export const STATIC_STYLES = {
  gradient: "min-h-screen bg-gradient-subtle",
  heroHeight: "h-[60vh]",
  stickyHeader: "bg-background border-b border-gray-200 sticky top-0 z-10",
  dayBadge: "w-12 h-12 bg-gradient-coral rounded-full flex items-center justify-center shadow-coral",
  accordionItem: "border border-gray-200 rounded-lg bg-card shadow-sm",
  summaryCard: "mt-16 p-6 bg-card rounded-xl border border-gray-200 shadow-sm",
  includedSection: "mt-16 bg-card border-t border-gray-200 shadow-sm"
} as const;

export const STATIC_TEXT = {
  aboutTitle: "About This Trip",
  itineraryTitle: "Itinerary",
  summaryTitle: "Trip Summary",
  includedTitle: "What's Included",
  bookNow: "Book This Trip Now",
  shareText: "Share",
  saveText: "Save",
} as const;

export const SUMMARY_LABELS = {
  duration: "Duration",
  activities: "Activities", 
  areas: "Areas",
  type: "Type"
} as const;

// Performance constants
export const VIRTUALIZATION_THRESHOLD = 50; // Start virtualizing after 50 activities
export const ITEM_HEIGHT = 300; // Approximate height per activity card
export const CONTAINER_HEIGHT = 600; // Height of virtual scroll container