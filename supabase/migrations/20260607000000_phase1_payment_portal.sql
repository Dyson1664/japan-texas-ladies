create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.guest_bookings (
  id uuid primary key default gen_random_uuid(),
  guest_name text not null,
  guest_email text not null,
  trip_name text not null,
  package_name text,
  total_trip_price numeric(10, 2) not null default 0,
  deposit_amount numeric(10, 2) not null default 0,
  balance_remaining numeric(10, 2) not null default 0,
  room_upgrade_enabled boolean not null default false,
  room_upgrade_name text,
  room_upgrade_total numeric(10, 2) not null default 0,
  booking_status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.payment_installments (
  id uuid primary key default gen_random_uuid(),
  guest_booking_id uuid not null references public.guest_bookings(id) on delete cascade,
  payment_label text not null,
  payment_type text not null check (payment_type in ('deposit', 'balance_1', 'balance_2', 'other')),
  base_amount numeric(10, 2) not null default 0,
  upgrade_portion numeric(10, 2) not null default 0,
  discount_amount numeric(10, 2) not null default 0,
  total_amount numeric(10, 2) not null default 0,
  currency text not null default 'GBP',
  due_date date,
  status text not null default 'upcoming' check (status in ('paid', 'upcoming', 'due_now', 'pending_confirmation', 'overdue')),
  shopify_payment_link text,
  paid_at timestamptz,
  admin_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists guest_bookings_guest_email_idx on public.guest_bookings (lower(guest_email));
create index if not exists payment_installments_booking_idx on public.payment_installments (guest_booking_id);
create index if not exists payment_installments_status_idx on public.payment_installments (status);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists guest_bookings_set_updated_at on public.guest_bookings;
create trigger guest_bookings_set_updated_at
before update on public.guest_bookings
for each row execute function public.set_updated_at();

drop trigger if exists payment_installments_set_updated_at on public.payment_installments;
create trigger payment_installments_set_updated_at
before update on public.payment_installments
for each row execute function public.set_updated_at();

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_users
    where lower(email) = lower(auth.email())
  );
$$;

alter table public.admin_users enable row level security;
alter table public.guest_bookings enable row level security;
alter table public.payment_installments enable row level security;

drop policy if exists "Admins can read admin users" on public.admin_users;
create policy "Admins can read admin users"
on public.admin_users
for select
using (public.is_admin() or lower(email) = lower(auth.email()));

drop policy if exists "Guests can read their own bookings" on public.guest_bookings;
create policy "Guests can read their own bookings"
on public.guest_bookings
for select
using (public.is_admin() or lower(guest_email) = lower(auth.email()));

drop policy if exists "Admins can insert bookings" on public.guest_bookings;
create policy "Admins can insert bookings"
on public.guest_bookings
for insert
with check (public.is_admin());

drop policy if exists "Admins can update bookings" on public.guest_bookings;
create policy "Admins can update bookings"
on public.guest_bookings
for update
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Admins can delete bookings" on public.guest_bookings;
create policy "Admins can delete bookings"
on public.guest_bookings
for delete
using (public.is_admin());

drop policy if exists "Guests can read own payment installments" on public.payment_installments;
create policy "Guests can read own payment installments"
on public.payment_installments
for select
using (
  public.is_admin()
  or exists (
    select 1
    from public.guest_bookings gb
    where gb.id = payment_installments.guest_booking_id
      and lower(gb.guest_email) = lower(auth.email())
  )
);

drop policy if exists "Admins can insert payment installments" on public.payment_installments;
create policy "Admins can insert payment installments"
on public.payment_installments
for insert
with check (public.is_admin());

drop policy if exists "Admins can update payment installments" on public.payment_installments;
create policy "Admins can update payment installments"
on public.payment_installments
for update
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Admins can delete payment installments" on public.payment_installments;
create policy "Admins can delete payment installments"
on public.payment_installments
for delete
using (public.is_admin());
