import { FormEvent, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Session } from "@supabase/supabase-js";
import Navbar from "@/components/Navbar";
import Footer from "@/components/common/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/lib/supabase";
import type { GuestBooking, PaymentInstallment, PaymentStatus, PaymentType } from "@/types/portal";

const statuses: PaymentStatus[] = ["paid", "upcoming", "due_now", "pending_confirmation", "overdue"];
const paymentTypes: PaymentType[] = ["deposit", "balance_1", "balance_2", "other"];

type PackageType =
  | "early_bird"
  | "standard_twin_sharing"
  | "single_room_supplement"
  | "single_room_supplement_early_bird";

type PackageTemplate = {
  type: PackageType;
  name: string;
  totalTripPrice: number;
  deposit: number;
  balanceRemaining: number;
  balance1: number;
  balance2: number;
  balance1DueDate: string;
  balance2DueDate: string;
};

const packageTemplates: PackageTemplate[] = [
  {
    type: "early_bird",
    name: "Early Bird Standard",
    totalTripPrice: 2395,
    deposit: 650,
    balanceRemaining: 1745,
    balance1: 870,
    balance2: 875,
    balance1DueDate: "2026-08-15",
    balance2DueDate: "2027-02-05",
  },
  {
    type: "single_room_supplement_early_bird",
    name: "Early Bird Room Supplement",
    totalTripPrice: 3130,
    deposit: 650,
    balanceRemaining: 2480,
    balance1: 1240,
    balance2: 1240,
    balance1DueDate: "2026-08-15",
    balance2DueDate: "2027-02-05",
  },
  {
    type: "standard_twin_sharing",
    name: "Standard",
    totalTripPrice: 2495,
    deposit: 650,
    balanceRemaining: 1845,
    balance1: 920,
    balance2: 925,
    balance1DueDate: "2026-08-15",
    balance2DueDate: "2027-02-05",
  },
  {
    type: "single_room_supplement",
    name: "Standard Room Supplement",
    totalTripPrice: 3230,
    deposit: 650,
    balanceRemaining: 2580,
    balance1: 1290,
    balance2: 1290,
    balance1DueDate: "2026-08-15",
    balance2DueDate: "2027-02-05",
  },
];

function getPackageTemplate(type?: string | null) {
  return packageTemplates.find((template) => template.type === type);
}

const emptyBooking = {
  guest_name: "",
  guest_email: "",
  trip_name: "",
  package_type: "",
  package_name: "",
  total_trip_price: 0,
  deposit_amount: 0,
  balance_remaining: 0,
  room_upgrade_enabled: false,
  room_upgrade_name: "",
  room_upgrade_total: 0,
  booking_status: "active",
};

const emptyInstallment = {
  payment_label: "Balance Payment 1",
  payment_type: "balance_1" as PaymentType,
  base_amount: 0,
  upgrade_portion: 0,
  discount_amount: 0,
  total_amount: 0,
  currency: "USD",
  due_date: "",
  status: "upcoming" as PaymentStatus,
  shopify_payment_link: "",
  admin_notes: "",
};

type BookingForm = typeof emptyBooking & { id?: string };
type InstallmentForm = typeof emptyInstallment & { id?: string; guest_booking_id?: string };

function money(value: number | null | undefined) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(value || 0));
}

function toNumber(value: FormDataEntryValue | null) {
  return Number(value || 0);
}

function templateInstallments(template: PackageTemplate) {
  return [
    {
      payment_label: "Deposit",
      payment_type: "deposit" as PaymentType,
      base_amount: template.deposit,
      upgrade_portion: 0,
      discount_amount: 0,
      total_amount: template.deposit,
      currency: "USD",
      due_date: null,
      status: "paid" as PaymentStatus,
    },
    {
      payment_label: "Balance Payment 1",
      payment_type: "balance_1" as PaymentType,
      base_amount: template.balance1,
      upgrade_portion: 0,
      discount_amount: 0,
      total_amount: template.balance1,
      currency: "USD",
      due_date: template.balance1DueDate,
      status: "due_now" as PaymentStatus,
    },
    {
      payment_label: "Balance Payment 2",
      payment_type: "balance_2" as PaymentType,
      base_amount: template.balance2,
      upgrade_portion: 0,
      discount_amount: 0,
      total_amount: template.balance2,
      currency: "USD",
      due_date: template.balance2DueDate,
      status: "upcoming" as PaymentStatus,
    },
  ];
}

export default function AdminPayments() {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [bookings, setBookings] = useState<GuestBooking[]>([]);
  const [installments, setInstallments] = useState<PaymentInstallment[]>([]);
  const [selectedBookingId, setSelectedBookingId] = useState<string>("");
  const [bookingForm, setBookingForm] = useState<BookingForm>(emptyBooking);
  const [installmentForm, setInstallmentForm] = useState<InstallmentForm>(emptyInstallment);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  function applyPackageTemplate(type: string) {
    const template = getPackageTemplate(type);
    if (!template) return;

    setBookingForm((current) => ({
      ...current,
      package_type: template.type,
      package_name: template.name,
      total_trip_price: template.totalTripPrice,
      deposit_amount: template.deposit,
      balance_remaining: template.balanceRemaining,
      room_upgrade_enabled: template.name.toLowerCase().includes("single room"),
      room_upgrade_name: template.name.toLowerCase().includes("single room")
        ? "Single room supplement"
        : current.room_upgrade_name,
      room_upgrade_total: template.name.toLowerCase().includes("single room")
        ? template.totalTripPrice - getPackageTemplate("standard_twin_sharing")!.totalTripPrice
        : current.room_upgrade_total,
    }));

    const firstBalance = templateInstallments(template).find(
      (payment) => payment.payment_type === "balance_1",
    );

    if (firstBalance) {
      setInstallmentForm((current) => ({
        ...current,
        ...firstBalance,
        due_date: firstBalance.due_date || "",
        shopify_payment_link: current.shopify_payment_link,
        admin_notes: current.admin_notes,
      }));
    }
  }

  async function loadData() {
    if (!supabase) {
      setError("Supabase is not configured yet.");
      setIsLoading(false);
      return;
    }

    setError("");
    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData.session) {
      navigate("/guest-login");
      return;
    }

    setSession(sessionData.session);
    const email = sessionData.session.user.email?.toLowerCase();

    const { data: adminRows, error: adminError } = await supabase
      .from("admin_users")
      .select("id")
      .ilike("email", email || "")
      .limit(1);

    if (adminError || !adminRows?.length) {
      setIsAdmin(false);
      setIsLoading(false);
      return;
    }

    setIsAdmin(true);

    const [{ data: bookingRows, error: bookingsError }, { data: installmentRows, error: installmentsError }] =
      await Promise.all([
        supabase.from("guest_bookings").select("*").order("created_at", { ascending: false }),
        supabase.from("payment_installments").select("*").order("due_date", { ascending: true, nullsFirst: true }),
      ]);

    if (bookingsError || installmentsError) {
      setError(bookingsError?.message || installmentsError?.message || "Unable to load admin data.");
      setIsLoading(false);
      return;
    }

    setBookings(bookingRows || []);
    setInstallments(installmentRows || []);
    if (!selectedBookingId && bookingRows?.[0]) {
      selectBooking(bookingRows[0], installmentRows || []);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  function selectBooking(booking: GuestBooking, installmentRows = installments) {
    setSelectedBookingId(booking.id);
    setBookingForm({
      id: booking.id,
      guest_name: booking.guest_name || "",
      guest_email: booking.guest_email || "",
      trip_name: booking.trip_name || "",
      package_type: booking.package_type || "",
      package_name: booking.package_name || "",
      total_trip_price: Number(booking.total_trip_price || 0),
      deposit_amount: Number(booking.deposit_amount || 0),
      balance_remaining: Number(booking.balance_remaining || 0),
      room_upgrade_enabled: Boolean(booking.room_upgrade_enabled),
      room_upgrade_name: booking.room_upgrade_name || "",
      room_upgrade_total: Number(booking.room_upgrade_total || 0),
      booking_status: booking.booking_status || "active",
    });

    const firstPayment = installmentRows.find((item) => item.guest_booking_id === booking.id);
    setInstallmentForm(firstPayment ? fromInstallment(firstPayment) : { ...emptyInstallment, guest_booking_id: booking.id });
  }

  function fromInstallment(installment: PaymentInstallment): InstallmentForm {
    return {
      id: installment.id,
      guest_booking_id: installment.guest_booking_id,
      payment_label: installment.payment_label || "",
      payment_type: installment.payment_type,
      base_amount: Number(installment.base_amount || 0),
      upgrade_portion: Number(installment.upgrade_portion || 0),
      discount_amount: Number(installment.discount_amount || 0),
      total_amount: Number(installment.total_amount || 0),
      currency: installment.currency || "USD",
      due_date: installment.due_date || "",
      status: installment.status,
      shopify_payment_link: installment.shopify_payment_link || "",
      admin_notes: installment.admin_notes || "",
    };
  }

  const selectedInstallments = installments.filter((item) => item.guest_booking_id === selectedBookingId);

  const filteredRows = useMemo(() => {
    const term = search.toLowerCase();
    return bookings.filter((booking) => {
      const bookingInstallments = installments.filter((item) => item.guest_booking_id === booking.id);
      const matchesSearch = [booking.guest_name, booking.guest_email, booking.trip_name]
        .join(" ")
        .toLowerCase()
        .includes(term);
      const matchesStatus =
        statusFilter === "all" || bookingInstallments.some((item) => item.status === statusFilter);
      return matchesSearch && matchesStatus;
    });
  }, [bookings, installments, search, statusFilter]);

  const paymentCounts = useMemo(() => {
    return statuses.reduce((acc, status) => {
      acc[status] = installments.filter((item) => item.status === status).length;
      return acc;
    }, {} as Record<PaymentStatus, number>);
  }, [installments]);

  async function applyTemplateScheduleToBooking(bookingId: string, template: PackageTemplate) {
    if (!supabase) return;

    const existingRows = installments.filter((item) => item.guest_booking_id === bookingId);

    for (const payment of templateInstallments(template)) {
      const existing = existingRows.find((item) => item.payment_type === payment.payment_type);
      const payload = {
        guest_booking_id: bookingId,
        ...payment,
        shopify_payment_link: existing?.shopify_payment_link || "",
        admin_notes: existing?.admin_notes || "",
        paid_at:
          payment.status === "paid"
            ? existing?.paid_at || new Date().toISOString()
            : existing?.paid_at || null,
      };

      const { error: scheduleError } = existing
        ? await supabase.from("payment_installments").update(payload).eq("id", existing.id)
        : await supabase.from("payment_installments").insert(payload);

      if (scheduleError) {
        throw scheduleError;
      }
    }
  }

  async function saveBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!supabase) return;

    const formData = new FormData(event.currentTarget);
    const payload = {
      guest_name: String(formData.get("guest_name") || ""),
      guest_email: String(formData.get("guest_email") || "").toLowerCase(),
      trip_name: String(formData.get("trip_name") || ""),
      package_type: bookingForm.package_type || null,
      package_name: String(formData.get("package_name") || ""),
      total_trip_price: toNumber(formData.get("total_trip_price")),
      deposit_amount: toNumber(formData.get("deposit_amount")),
      balance_remaining: toNumber(formData.get("balance_remaining")),
      room_upgrade_enabled: bookingForm.room_upgrade_enabled,
      room_upgrade_name: String(formData.get("room_upgrade_name") || ""),
      room_upgrade_total: toNumber(formData.get("room_upgrade_total")),
      booking_status: String(formData.get("booking_status") || "active"),
    };

    const query = bookingForm.id
      ? supabase.from("guest_bookings").update(payload).eq("id", bookingForm.id).select("*").single()
      : supabase.from("guest_bookings").insert(payload).select("*").single();

    const { data, error: saveError } = await query;
    if (saveError) {
      setError(saveError.message);
      return;
    }

    const selectedTemplate = getPackageTemplate(bookingForm.package_type);
    if (data && selectedTemplate) {
      try {
        await applyTemplateScheduleToBooking(data.id, selectedTemplate);
      } catch (scheduleError) {
        setError(scheduleError instanceof Error ? scheduleError.message : "Unable to apply package schedule.");
        return;
      }
    }

    setMessage(selectedTemplate ? "Booking and package payment schedule saved." : "Booking saved.");
    await loadData();
    if (data) selectBooking(data);
  }

  async function saveInstallment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!supabase || !selectedBookingId) return;

    const formData = new FormData(event.currentTarget);
    const status = installmentForm.status;
    const payload = {
      guest_booking_id: selectedBookingId,
      payment_label: String(formData.get("payment_label") || ""),
      payment_type: installmentForm.payment_type,
      base_amount: toNumber(formData.get("base_amount")),
      upgrade_portion: toNumber(formData.get("upgrade_portion")),
      discount_amount: toNumber(formData.get("discount_amount")),
      total_amount: toNumber(formData.get("total_amount")),
      currency: "USD",
      due_date: String(formData.get("due_date") || "") || null,
      status,
      shopify_payment_link: String(formData.get("shopify_payment_link") || ""),
      paid_at: status === "paid" ? new Date().toISOString() : null,
      admin_notes: String(formData.get("admin_notes") || ""),
    };

    const query = installmentForm.id
      ? supabase.from("payment_installments").update(payload).eq("id", installmentForm.id).select("*").single()
      : supabase.from("payment_installments").insert(payload).select("*").single();

    const { data, error: saveError } = await query;
    if (saveError) {
      setError(saveError.message);
      return;
    }

    setMessage("Payment installment saved.");
    await loadData();
    if (data) setInstallmentForm(fromInstallment(data));
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-24 text-sm text-muted-foreground">
          Loading admin payments...
        </main>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="mx-auto max-w-xl px-4 py-24">
          <section className="rounded-xl border bg-card p-6">
            <h1 className="text-xl font-bold text-foreground">Admin access required</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Sign in with an approved admin email to manage payment records.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">Signed in as {session?.user.email || "not signed in"}</p>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-24">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-primary">Admin payments</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Manually manage guest bookings, Shopify links, amounts, statuses, and notes.
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              setSelectedBookingId("");
              setBookingForm(emptyBooking);
              setInstallmentForm(emptyInstallment);
            }}
          >
            New booking
          </Button>
        </div>

        {message ? <div className="mb-4 rounded-lg border bg-card px-4 py-3 text-sm">{message}</div> : null}
        {error ? <div className="mb-4 rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">{error}</div> : null}

        <section className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {statuses.slice(1).map((status) => (
            <div key={status} className="rounded-xl border bg-card p-4">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">{status.replace("_", " ")}</p>
              <p className="mt-2 text-2xl font-bold text-foreground">{paymentCounts[status]}</p>
            </div>
          ))}
        </section>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-xl border bg-card p-4 shadow-sm">
            <div className="grid gap-3 sm:grid-cols-[1fr_180px]">
              <Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search guest, email, trip" />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  {statuses.map((status) => (
                    <SelectItem key={status} value={status}>{status.replace("_", " ")}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="mt-4 max-h-[680px] space-y-2 overflow-auto">
              {filteredRows.map((booking) => {
                const bookingInstallments = installments.filter((item) => item.guest_booking_id === booking.id);
                return (
                  <button
                    key={booking.id}
                    type="button"
                    onClick={() => selectBooking(booking)}
                    className={`w-full rounded-lg border p-4 text-left transition hover:border-primary/40 ${
                      booking.id === selectedBookingId ? "border-primary bg-primary/5" : "bg-background"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-foreground">{booking.guest_name}</p>
                        <p className="text-xs text-muted-foreground">{booking.guest_email}</p>
                        <p className="mt-1 text-sm text-primary">{booking.trip_name}</p>
                      </div>
                      <span className="text-sm font-semibold text-foreground">
                        {money(booking.balance_remaining)}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {bookingInstallments.map((item) => (
                        <span key={item.id} className="rounded-full bg-muted px-2 py-1 text-[11px] text-muted-foreground">
                          {item.payment_label}: {item.status.replace("_", " ")}
                        </span>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          <div className="space-y-6">
            <form onSubmit={saveBooking} className="rounded-xl border bg-card p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground">Booking record</h2>
              <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-4">
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Package type
                </label>
                <Select
                  value={bookingForm.package_type || ""}
                  onValueChange={applyPackageTemplate}
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select a package to auto-fill pricing" />
                  </SelectTrigger>
                  <SelectContent>
                    {packageTemplates.map((template) => (
                      <SelectItem key={template.type} value={template.type}>
                        {template.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {getPackageTemplate(bookingForm.package_type) ? (
                  <div className="mt-3 grid gap-2 text-xs text-muted-foreground sm:grid-cols-3">
                    {templateInstallments(getPackageTemplate(bookingForm.package_type)!).map((payment) => (
                      <div key={payment.payment_type} className="rounded-md bg-background px-3 py-2">
                        <p className="font-semibold text-foreground">{payment.payment_label}</p>
                        <p>{money(payment.total_amount)}</p>
                        <p>{payment.due_date ? `Due ${payment.due_date}` : "Paid deposit"}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
                <p className="mt-3 text-xs text-muted-foreground">
                  Selecting a package fills the booking totals and creates or updates Deposit,
                  Balance Payment 1, and Balance Payment 2 when you save. Shopify links stay manual.
                </p>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Input name="guest_name" value={bookingForm.guest_name} onChange={(e) => setBookingForm({ ...bookingForm, guest_name: e.target.value })} placeholder="Guest name" required />
                <Input name="guest_email" type="email" value={bookingForm.guest_email} onChange={(e) => setBookingForm({ ...bookingForm, guest_email: e.target.value })} placeholder="Guest email" required />
                <Input name="trip_name" value={bookingForm.trip_name} onChange={(e) => setBookingForm({ ...bookingForm, trip_name: e.target.value })} placeholder="Trip name" required />
                <Input name="package_name" value={bookingForm.package_name} onChange={(e) => setBookingForm({ ...bookingForm, package_name: e.target.value })} placeholder="Package / room summary" />
                <Input name="total_trip_price" type="number" step="0.01" value={bookingForm.total_trip_price} onChange={(e) => setBookingForm({ ...bookingForm, total_trip_price: Number(e.target.value) })} placeholder="Total trip price" />
                <Input name="deposit_amount" type="number" step="0.01" value={bookingForm.deposit_amount} onChange={(e) => setBookingForm({ ...bookingForm, deposit_amount: Number(e.target.value) })} placeholder="Deposit paid" />
                <Input name="balance_remaining" type="number" step="0.01" value={bookingForm.balance_remaining} onChange={(e) => setBookingForm({ ...bookingForm, balance_remaining: Number(e.target.value) })} placeholder="Balance remaining" />
                <Input name="booking_status" value={bookingForm.booking_status} onChange={(e) => setBookingForm({ ...bookingForm, booking_status: e.target.value })} placeholder="Booking status" />
              </div>

              <div className="mt-4 rounded-lg border p-4">
                <label className="flex items-center gap-3 text-sm font-medium">
                  <Checkbox
                    checked={bookingForm.room_upgrade_enabled}
                    onCheckedChange={(checked) => setBookingForm({ ...bookingForm, room_upgrade_enabled: checked === true })}
                  />
                  Room upgrade enabled
                </label>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Input name="room_upgrade_name" value={bookingForm.room_upgrade_name} onChange={(e) => setBookingForm({ ...bookingForm, room_upgrade_name: e.target.value })} placeholder="Room upgrade name" />
                  <Input name="room_upgrade_total" type="number" step="0.01" value={bookingForm.room_upgrade_total} onChange={(e) => setBookingForm({ ...bookingForm, room_upgrade_total: Number(e.target.value) })} placeholder="Room upgrade total" />
                </div>
              </div>

              <Button className="mt-4" type="submit">Save booking</Button>
            </form>

            <section className="rounded-xl border bg-card p-5 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-lg font-semibold text-foreground">Payment instalments</h2>
                <Button
                  type="button"
                  variant="outline"
                  disabled={!selectedBookingId}
                  onClick={() => setInstallmentForm({ ...emptyInstallment, guest_booking_id: selectedBookingId })}
                >
                  New instalment
                </Button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {selectedInstallments.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setInstallmentForm(fromInstallment(item))}
                    className={`rounded-full border px-3 py-1 text-xs ${
                      item.id === installmentForm.id ? "border-primary bg-primary/10 text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item.payment_label}
                  </button>
                ))}
              </div>

              <form onSubmit={saveInstallment} className="mt-5 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input name="payment_label" value={installmentForm.payment_label} onChange={(e) => setInstallmentForm({ ...installmentForm, payment_label: e.target.value })} placeholder="Payment label" required />
                  <Select value={installmentForm.payment_type} onValueChange={(value: PaymentType) => setInstallmentForm({ ...installmentForm, payment_type: value })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {paymentTypes.map((type) => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <Input name="base_amount" type="number" step="0.01" value={installmentForm.base_amount} onChange={(e) => setInstallmentForm({ ...installmentForm, base_amount: Number(e.target.value) })} placeholder="Base amount" />
                  <Input name="upgrade_portion" type="number" step="0.01" value={installmentForm.upgrade_portion} onChange={(e) => setInstallmentForm({ ...installmentForm, upgrade_portion: Number(e.target.value) })} placeholder="Upgrade portion" />
                  <Input name="discount_amount" type="number" step="0.01" value={installmentForm.discount_amount} onChange={(e) => setInstallmentForm({ ...installmentForm, discount_amount: Number(e.target.value) })} placeholder="Discount amount" />
                  <Input name="total_amount" type="number" step="0.01" value={installmentForm.total_amount} onChange={(e) => setInstallmentForm({ ...installmentForm, total_amount: Number(e.target.value) })} placeholder="Total due" />
                  <Input name="currency" value="USD" readOnly className="bg-muted" placeholder="Currency" />
                  <Input name="due_date" type="date" value={installmentForm.due_date} onChange={(e) => setInstallmentForm({ ...installmentForm, due_date: e.target.value })} />
                </div>

                <Select value={installmentForm.status} onValueChange={(value: PaymentStatus) => setInstallmentForm({ ...installmentForm, status: value })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {statuses.map((status) => <SelectItem key={status} value={status}>{status.replace("_", " ")}</SelectItem>)}
                  </SelectContent>
                </Select>

                <Input
                  name="shopify_payment_link"
                  value={installmentForm.shopify_payment_link}
                  onChange={(e) => setInstallmentForm({ ...installmentForm, shopify_payment_link: e.target.value })}
                  placeholder="Manual Shopify payment link"
                />
                <Textarea
                  name="admin_notes"
                  value={installmentForm.admin_notes}
                  onChange={(e) => setInstallmentForm({ ...installmentForm, admin_notes: e.target.value })}
                  placeholder="Admin notes"
                />
                <Button type="submit" disabled={!selectedBookingId}>Save instalment</Button>
              </form>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
