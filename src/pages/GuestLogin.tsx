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
