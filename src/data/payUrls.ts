// src/data/payUrls.ts

export const PAY_URLS: Record<string, string | undefined> = {
  "thailand": import.meta.env.VITE_PAY_URL_THAILAND,
  "sri-lanka": import.meta.env.VITE_PAY_URL_SRI_LANKA,
  "japan": import.meta.env.VITE_PAY_URL_JAPAN,
  "india-journey": import.meta.env.VITE_PAY_URL_INDIA,
  "philippines": import.meta.env.VITE_PAY_URL_PHILIPPINES,

  // add these if you have them:
  // "colombia-adventure": import.meta.env.VITE_PAY_URL_COLOMBIA,
  // "vietnam-explorer": import.meta.env.VITE_PAY_URL_VIETNAM,
  // "bhutan-happiness": import.meta.env.VITE_PAY_URL_BHUTAN,
};

export const getPayUrlBySlug = (slug: string) => {
  const url = PAY_URLS[slug];
  if (!url) {
    console.warn(`Missing payment URL for slug: ${slug}`);
    return "#";
  }
  return url;
};

// Keep legacy function name, but route it to the same source of truth
export const getPayUrl = (idOrSlug: string) => getPayUrlBySlug(idOrSlug);

// Keep exported name so imports don't break, but also route to PAY_URLS
export const payUrls: Record<string, string> = Object.fromEntries(
  Object.entries(PAY_URLS).map(([k, v]) => [k, v ?? "#"])
);
