import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        detectSessionInUrl: true,
        persistSession: true,
      },
    })
  : null;

export function getPortalRedirectUrl(path = "/auth/callback") {
  const useHashRouter = import.meta.env.VITE_USE_HASHROUTER === "true";
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${window.location.origin}${useHashRouter ? "/#" : ""}${normalizedPath}`;
}

export function getAuthParamsFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const hash = window.location.hash || "";

  if (hash.includes("?")) {
    const hashQuery = hash.slice(hash.indexOf("?") + 1);
    new URLSearchParams(hashQuery).forEach((value, key) => {
      if (!params.has(key)) params.set(key, value);
    });
  }

  const hashWithoutRoute = hash.startsWith("#") ? hash.slice(1) : hash;
  if (hashWithoutRoute.includes("=")) {
    const authHash = hashWithoutRoute.startsWith("/") && hashWithoutRoute.includes("#")
      ? hashWithoutRoute.slice(hashWithoutRoute.indexOf("#") + 1)
      : hashWithoutRoute;

    new URLSearchParams(authHash).forEach((value, key) => {
      if (!params.has(key)) params.set(key, value);
    });
  }

  return params;
}

export async function completeSupabaseAuthFromUrl() {
  if (!supabase) {
    return { session: null, error: "Supabase is not configured." };
  }

  const params = getAuthParamsFromUrl();
  const code = params.get("code");
  const accessToken = params.get("access_token");
  const refreshToken = params.get("refresh_token");

  console.log("[portal-auth] URL auth params", {
    hasCode: Boolean(code),
    hasAccessToken: Boolean(accessToken),
    hasRefreshToken: Boolean(refreshToken),
    hash: window.location.hash,
    search: window.location.search,
  });

  if (code) {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    console.log("[portal-auth] exchangeCodeForSession result", {
      hasSession: Boolean(data.session),
      error: error?.message,
    });
    return { session: data.session, error: error?.message || null };
  }

  if (accessToken && refreshToken) {
    const { data, error } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });
    console.log("[portal-auth] setSession result", {
      hasSession: Boolean(data.session),
      error: error?.message,
    });
    return { session: data.session, error: error?.message || null };
  }

  const { data, error } = await supabase.auth.getSession();
  console.log("[portal-auth] getSession result", {
    hasSession: Boolean(data.session),
    email: data.session?.user.email,
    error: error?.message,
  });
  return { session: data.session, error: error?.message || null };
}
