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

function money(value: number | null | undefined, currency = "GBP") {
  return new Intl.NumberFormat("en-GB", {
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
          <dd className="font-medium">{money(installment.base_amount, installment.currency)}</dd>
        </div>
        {upgradePortion > 0 ? (
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Room upgrade portion</dt>
            <dd className="font-medium">{money(upgradePortion, installment.currency)}</dd>
          </div>
        ) : null}
        {discountAmount > 0 ? (
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Discount</dt>
            <dd className="font-medium">-{money(discountAmount, installment.currency)}</dd>
          </div>
        ) : null}
        <div className="flex justify-between gap-4 border-t pt-3 text-base">
          <dt className="font-semibold text-foreground">Total due</dt>
          <dd className="font-bold text-foreground">
            {money(installment.total_amount, installment.currency)}
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
            currency: "GBP",
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
                    <p className="mt-1 text-sm text-muted-foreground">{booking.package_name}</p>
                  ) : null}
                  {booking.room_upgrade_enabled ? (
                    <p className="mt-4 rounded-lg bg-primary/5 px-4 py-3 text-sm text-foreground">
                      Your room upgrade has been split across your remaining balance payments.
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
                    <dd className="font-bold text-foreground">{money(booking.balance_remaining)}</dd>
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
