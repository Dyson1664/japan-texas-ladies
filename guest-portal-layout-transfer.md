# Guest Portal Layout Transfer Bundle

Paste this whole file into Codex in the other repo. Ask it to copy the guest login and guest portal dashboard layout/UI patterns only.

## What to keep in the other repo

- Keep the other repo's existing Supabase setup.
- Keep the other repo's existing auth, routes, database schema, and data types.
- Keep the other repo's existing customer lookup, login, payment, and sign-out logic unless Codex confirms a small adapter is needed.
- Use this file as the visual/layout reference for the guest-facing portal.

## UI pieces to copy

- Guest login centered card layout
- Login form spacing, messages, and button styling
- Portal dashboard top spacing, heading, signed-in email, and sign-out button placement
- Guest trip summary card
- Package and room type cards
- Balance summary column
- Shopify payment notice
- Payment schedule cards
- Payment status pill colors
- Room upgrade callout
- Itinerary PDF button placement

## Important instruction for Codex in the other repo

Do not replace Supabase config, env vars, schema migrations, auth callback, app routing, or database policies wholesale. Adapt the JSX, Tailwind classes, and local UI behavior from the components below to the existing guest login and portal dashboard in that repo.

## FILE: src/pages/GuestLogin.tsx

```tsx
import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/common/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getPortalRedirectUrl, isSupabaseConfigured, supabase } from "@/lib/supabase";

const neutralLoginMessage =
  "If this email is linked to a booking, you’ll receive a secure login link shortly.";

export default function GuestLogin() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setMessage("");
    setError("");

    if (!supabase) {
      setError("Supabase is not configured yet.");
      return;
    }

    const normalizedEmail = email.trim().toLowerCase();
    setIsSubmitting(true);
    const redirectTo = getPortalRedirectUrl("/auth/callback");

    const { data: canRequestLogin, error: allowlistError } = await supabase.rpc(
      "can_request_portal_login",
      { input_email: normalizedEmail },
    );

    if (allowlistError) {
      console.error("[portal-auth] portal login allowlist check failed", allowlistError);
      setIsSubmitting(false);
      setError("We could not process this request. Please try again.");
      return;
    }

    console.log("[portal-auth] portal login request checked", {
      allowed: Boolean(canRequestLogin),
      emailRedirectTo: redirectTo,
    });

    if (!canRequestLogin) {
      setIsSubmitting(false);
      setMessage(neutralLoginMessage);
      return;
    }

    console.log("[portal-auth] Sending magic link", {
      email: normalizedEmail,
      emailRedirectTo: redirectTo,
    });

    const { error: authError } = await supabase.auth.signInWithOtp({
      email: normalizedEmail,
      options: {
        emailRedirectTo: redirectTo,
      },
    });

    setIsSubmitting(false);

    if (authError) {
      setError(authError.message);
      return;
    }

    setMessage(neutralLoginMessage);
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto flex min-h-[70vh] max-w-xl items-center px-4 py-24">
        <section className="w-full rounded-xl border bg-card p-6 shadow-sm sm:p-8">
          <h1 className="text-2xl font-bold text-primary">Guest payment portal</h1>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Enter the email address used for your booking and we&apos;ll send you a
            secure login link. No password needed.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <label className="block text-sm font-medium text-foreground">
              Email address
              <Input
                className="mt-2"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
              />
            </label>

            <Button type="submit" className="w-full" disabled={isSubmitting || !isSupabaseConfigured}>
              {isSubmitting ? "Sending..." : "Send secure login link"}
            </Button>
          </form>

          {message ? (
            <div className="mt-5 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-foreground">
              {message}
            </div>
          ) : null}

          {error ? (
            <div className="mt-5 rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive">
              {error}
            </div>
          ) : null}

          {!isSupabaseConfigured ? (
            <p className="mt-4 text-xs text-muted-foreground">
              Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to enable login.
            </p>
          ) : null}
        </section>
      </main>
      <Footer />
    </div>
  );
}
```

## FILE: src/pages/PortalDashboard.tsx

```tsx
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { Session } from "@supabase/supabase-js";
import Navbar from "@/components/Navbar";
import Footer from "@/components/common/Footer";
import { Button } from "@/components/ui/button";
import { completeSupabaseAuthFromUrl, supabase } from "@/lib/supabase";
import type { BookingWithInstallments, PaymentInstallment, PaymentStatus } from "@/types/portal";

const statusLabels: Record<PaymentStatus, string> = {
  paid: "Paid",
  upcoming: "Upcoming",
  due_now: "Due now",
  pending_confirmation: "Pending confirmation",
  overdue: "Overdue",
};

const defaultItineraryPdfUrl = "/itineraries/texas-ladies-japan-itinerary.pdf";

function money(value: number | null | undefined, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(Number(value || 0));
}

function statusClass(status: PaymentStatus) {
  switch (status) {
    case "paid":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "due_now":
      return "bg-primary/10 text-primary border-primary/20";
    case "pending_confirmation":
      return "bg-amber-50 text-amber-700 border-amber-200";
    case "overdue":
      return "bg-red-50 text-red-700 border-red-200";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
}

function PaymentCard({ installment }: { installment: PaymentInstallment }) {
  const upgradePortion = Number(installment.upgrade_portion || 0);
  const discountAmount = Number(installment.discount_amount || 0);
  const isDeposit = installment.payment_type === "deposit";
  const isBalancePayment = installment.payment_type === "balance_1" || installment.payment_type === "balance_2";

  return (
    <article className="rounded-xl border bg-card p-5 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{installment.payment_label}</h3>
          {installment.due_date ? (
            <p className="mt-1 text-sm text-muted-foreground">
              Due {new Date(`${installment.due_date}T00:00:00`).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          ) : null}
        </div>
        <span className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold ${statusClass(installment.status)}`}>
          {statusLabels[installment.status]}
        </span>
      </div>

      <dl className="mt-5 space-y-2 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-muted-foreground">
            {isDeposit ? "Deposit amount" : "Base trip balance"}
          </dt>
          <dd className="font-medium">{money(installment.base_amount)}</dd>
        </div>
        {upgradePortion > 0 ? (
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Room upgrade portion</dt>
            <dd className="font-medium">{money(upgradePortion)}</dd>
          </div>
        ) : null}
        {discountAmount > 0 ? (
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Discount</dt>
            <dd className="font-medium">-{money(discountAmount)}</dd>
          </div>
        ) : null}
        <div className="flex justify-between gap-4 border-t pt-3 text-base">
          <dt className="font-semibold text-foreground">Total due</dt>
          <dd className="font-bold text-foreground">
            {money(installment.total_amount)}
          </dd>
        </div>
      </dl>

      {!isDeposit && installment.status !== "paid" ? (
        <div className="mt-5">
          {installment.shopify_payment_link ? (
            <a href={installment.shopify_payment_link} target="_blank" rel="noreferrer">
              <Button className="w-full sm:w-auto">Pay securely via Shopify</Button>
            </a>
          ) : (
            <p className="rounded-lg bg-muted px-4 py-3 text-sm text-muted-foreground">
              Payment link coming soon.
            </p>
          )}
          {isBalancePayment ? (
            <p className="mt-3 rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 text-sm leading-6 text-foreground">
              After you pay this instalment through Shopify, please allow up to 48 hours
              for our team to update this payment to paid.
            </p>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export default function PortalDashboard() {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [booking, setBooking] = useState<BookingWithInstallments | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authStatus, setAuthStatus] = useState("Checking your secure login link...");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!supabase) {
      setError("Supabase is not configured yet.");
      setIsLoading(false);
      return;
    }

    let isMounted = true;
    const { data: authListener } = supabase.auth.onAuthStateChange((event, nextSession) => {
      console.log("[portal-auth] auth state changed", {
        event,
        hasSession: Boolean(nextSession),
        email: nextSession?.user.email,
      });
      if (isMounted && nextSession) {
        setSession(nextSession);
      }
    });

    async function loadBooking(activeSession: Session) {
      if (!isMounted) return;

      setAuthStatus("Loading your booking...");
      setSession(activeSession);
      const email = activeSession.user.email;
      console.log("[portal-auth] loading guest booking", { email });

      const { data: bookings, error: bookingError } = await supabase
        .from("guest_bookings")
        .select("*")
        .eq("guest_email", email)
        .order("created_at", { ascending: false })
        .limit(1);

      if (bookingError) {
        if (!isMounted) return;
        setError(bookingError.message);
        setIsLoading(false);
        return;
      }

      const currentBooking = bookings?.[0];
      if (!currentBooking) {
        if (!isMounted) return;
        setBooking(null);
        setIsLoading(false);
        return;
      }

      const { data: installments, error: installmentError } = await supabase
        .from("payment_installments")
        .select("*")
        .eq("guest_booking_id", currentBooking.id)
        .order("due_date", { ascending: true, nullsFirst: true })
        .order("created_at", { ascending: true });

      if (installmentError) {
        if (!isMounted) return;
        setError(installmentError.message);
        setIsLoading(false);
        return;
      }

      if (!isMounted) return;
      setBooking({
        ...currentBooking,
        payment_installments: installments || [],
      });
      setIsLoading(false);
    }

    async function resolveAuthThenLoad() {
      setIsLoading(true);
      setAuthStatus("Checking your secure login link...");

      const { session: resolvedSession, error: authError } = await completeSupabaseAuthFromUrl();
      if (!isMounted) return;

      if (authError) {
        console.log("[portal-auth] auth resolution error", authError);
        setError(authError);
        setIsLoading(false);
        return;
      }

      if (!resolvedSession) {
        console.log("[portal-auth] no session after auth resolution; redirecting to guest login");
        setAuthStatus("No active session found. Redirecting to login...");
        window.setTimeout(() => {
          if (isMounted) navigate("/guest-login");
        }, 900);
        return;
      }

      await loadBooking(resolvedSession);
    }

    resolveAuthThenLoad();

    return () => {
      isMounted = false;
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  const sortedPayments = useMemo(() => {
    if (!booking) return [];
    const hasDeposit = booking.payment_installments.some((item) => item.payment_type === "deposit");
    const payments = hasDeposit
      ? booking.payment_installments
      : [
          {
            id: "deposit-paid",
            guest_booking_id: booking.id,
            payment_label: "Deposit",
            payment_type: "deposit" as const,
            base_amount: booking.deposit_amount,
            upgrade_portion: 0,
            discount_amount: 0,
            total_amount: booking.deposit_amount,
            currency: "USD",
            due_date: null,
            status: "paid" as const,
            shopify_payment_link: null,
            paid_at: null,
            admin_notes: null,
            created_at: booking.created_at,
            updated_at: booking.updated_at,
          },
          ...booking.payment_installments,
        ];
    const priority = { deposit: 0, balance_1: 1, balance_2: 2, other: 3 };
    return [...payments].sort(
      (a, b) => priority[a.payment_type] - priority[b.payment_type],
    );
  }, [booking]);

  const calculatedBalanceRemaining = useMemo(() => {
    return sortedPayments
      .filter((installment) => installment.payment_type !== "deposit")
      .filter((installment) => installment.status !== "paid")
      .reduce((total, installment) => total + Number(installment.total_amount || 0), 0);
  }, [sortedPayments]);

  const hasSingleRoomUpgrade = useMemo(() => {
    if (!booking) return false;
    return (
      Boolean(booking.room_upgrade_enabled) ||
      booking.package_type === "single_room_supplement" ||
      booking.package_type === "single_room_supplement_early_bird" ||
      Boolean(booking.package_name?.toLowerCase().includes("room supplement"))
    );
  }, [booking]);

  const itineraryPdfUrl = booking?.itinerary_pdf_url || defaultItineraryPdfUrl;

  async function signOut() {
    await supabase?.auth.signOut();
    navigate("/guest-login");
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-24">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-primary">Payment dashboard</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Signed in as {session?.user.email}
            </p>
          </div>
          <Button variant="outline" onClick={signOut}>Sign out</Button>
        </div>

        {isLoading ? (
          <div className="rounded-xl border bg-card p-6 text-sm text-muted-foreground">
            <p>{authStatus}</p>
            <p className="mt-2 text-xs">
              Debug: session email {session?.user.email || "not available yet"}
            </p>
          </div>
        ) : error ? (
          <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-6 text-sm text-destructive">
            {error}
          </div>
        ) : !booking ? (
          <div className="rounded-xl border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground">No booking found</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We could not find a booking for this email address. Please check that you used
              the email address from your booking.
            </p>
            <Link to="/contact" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
              Contact us
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <section className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
                <div>
                  <p className="text-sm text-muted-foreground">Guest</p>
                  <h2 className="mt-1 text-2xl font-bold text-foreground">{booking.guest_name}</h2>
                  <p className="mt-3 text-lg font-semibold text-primary">{booking.trip_name}</p>
                  {booking.package_name ? (
                    <p className="mt-1 text-sm font-medium text-foreground">{booking.package_name}</p>
                  ) : null}
                  {itineraryPdfUrl ? (
                    <a
                      href={itineraryPdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      download
                      className="mt-4 inline-flex"
                    >
                      <Button type="button" variant="outline">
                        Download itinerary PDF
                      </Button>
                    </a>
                  ) : null}
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border bg-background px-4 py-3">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        Package
                      </p>
                      <p className="mt-1 text-sm font-semibold text-foreground">
                        {booking.package_name || "Package details"}
                      </p>
                    </div>
                    <div
                      className={`rounded-lg border px-4 py-3 ${
                        hasSingleRoomUpgrade
                          ? "border-primary/30 bg-primary/10"
                          : "bg-background"
                      }`}
                    >
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        Room type
                      </p>
                      <p
                        className={`mt-1 text-sm font-bold ${
                          hasSingleRoomUpgrade ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {hasSingleRoomUpgrade ? "Single room upgrade included" : "Shared room"}
                      </p>
                    </div>
                  </div>
                  {hasSingleRoomUpgrade ? (
                    <p className="mt-4 rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 text-sm leading-6 text-foreground">
                      Your booking includes a <span className="font-semibold">single room upgrade</span>
                      {booking.room_upgrade_name ? `: ${booking.room_upgrade_name}` : ""}.
                      {Number(booking.room_upgrade_total || 0) > 0
                        ? ` The upgrade total is ${money(booking.room_upgrade_total)}.`
                        : ""}{" "}
                      This is already included in the balance payments shown below.
                    </p>
                  ) : null}
                </div>

                <dl className="grid gap-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Total trip price</dt>
                    <dd className="font-semibold">{money(booking.total_trip_price)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Deposit paid</dt>
                    <dd className="font-semibold">{money(booking.deposit_amount)}</dd>
                  </div>
                  <div className="flex justify-between border-t pt-3 text-base">
                    <dt className="font-semibold text-foreground">Balance remaining</dt>
                    <dd className="font-bold text-foreground">
                      {money(calculatedBalanceRemaining)}
                    </dd>
                  </div>
                </dl>
              </div>
            </section>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm leading-6 text-foreground">
              Payments are processed securely through Shopify. After payment, your portal
              balance will be updated by our team within 48 hours.
            </div>

            <section>
              <h2 className="mb-4 text-xl font-bold text-primary">Payment schedule</h2>
              <div className="grid gap-4">
                {sortedPayments.map((installment) => (
                  <PaymentCard key={installment.id} installment={installment} />
                ))}
              </div>
            </section>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
```

