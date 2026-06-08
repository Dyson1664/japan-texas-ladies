import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/common/Footer";
import { completeSupabaseAuthFromUrl } from "@/lib/supabase";

export default function AuthCallback() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("Confirming your secure login link...");
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function completeLogin() {
      console.log("[portal-auth] auth callback mounted", {
        href: window.location.href,
        hash: window.location.hash,
        search: window.location.search,
      });

      const { session, error: authError } = await completeSupabaseAuthFromUrl();
      if (!isMounted) return;

      if (authError) {
        setError(authError);
        setStatus("We could not complete the login link.");
        return;
      }

      if (!session) {
        setError("No Supabase session was created from this login link.");
        setStatus("We could not find an active session.");
        return;
      }

      console.log("[portal-auth] callback session confirmed", {
        email: session.user.email,
      });
      setStatus("Login confirmed. Opening your dashboard...");
      navigate("/portal/dashboard", { replace: true });
    }

    completeLogin();

    return () => {
      isMounted = false;
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto flex min-h-[70vh] max-w-xl items-center px-4 py-24">
        <section className="w-full rounded-xl border bg-card p-6 shadow-sm sm:p-8">
          <h1 className="text-2xl font-bold text-primary">Secure login</h1>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{status}</p>
          {error ? (
            <div className="mt-5 rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive">
              {error}
            </div>
          ) : null}
          <p className="mt-5 text-xs text-muted-foreground">
            Debug logs are available in the browser console under `[portal-auth]`.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
