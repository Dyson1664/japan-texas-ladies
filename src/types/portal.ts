export type PaymentStatus =
  | "paid"
  | "upcoming"
  | "due_now"
  | "pending_confirmation"
  | "overdue";

export type PaymentType = "deposit" | "balance_1" | "balance_2" | "other";

export interface GuestBooking {
  id: string;
  guest_name: string;
  guest_email: string;
  trip_name: string;
  package_type: string | null;
  package_name: string | null;
  total_trip_price: number;
  deposit_amount: number;
  balance_remaining: number;
  room_upgrade_enabled: boolean;
  room_upgrade_name: string | null;
  room_upgrade_total: number | null;
  booking_status: string | null;
  created_at: string;
  updated_at: string;
}

export interface PaymentInstallment {
  id: string;
  guest_booking_id: string;
  payment_label: string;
  payment_type: PaymentType;
  base_amount: number;
  upgrade_portion: number | null;
  discount_amount: number | null;
  total_amount: number;
  currency: string;
  due_date: string | null;
  status: PaymentStatus;
  shopify_payment_link: string | null;
  paid_at: string | null;
  admin_notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface BookingWithInstallments extends GuestBooking {
  payment_installments: PaymentInstallment[];
}
