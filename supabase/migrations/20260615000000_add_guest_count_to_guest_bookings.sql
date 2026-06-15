alter table public.guest_bookings
add column if not exists guest_count integer not null default 1;
