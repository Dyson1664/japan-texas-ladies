alter table public.guest_bookings
add column if not exists itinerary_pdf_url text;
