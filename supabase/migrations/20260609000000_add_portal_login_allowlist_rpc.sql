create or replace function public.can_request_portal_login(input_email text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.guest_bookings
    where lower(guest_email) = lower(trim(input_email))
  )
  or exists (
    select 1
    from public.admin_users
    where lower(email) = lower(trim(input_email))
  );
$$;

revoke all on function public.can_request_portal_login(text) from public;
grant execute on function public.can_request_portal_login(text) to anon, authenticated;
