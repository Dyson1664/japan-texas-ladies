alter table public.guest_bookings
add column if not exists package_type text;
