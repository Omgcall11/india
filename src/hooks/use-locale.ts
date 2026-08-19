import { useCallback, useEffect, useState } from "react";

import { copy, LOCALE_STORAGE_KEY, type Locale } from "@/lib/i18n";

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  if (saved === "hi" || saved === "en") return saved;
  if (window.navigator.language.toLowerCase().startsWith("hi")) return "hi";
  return "en";
}

export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    setLocaleState(readStoredLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = copy[locale].metaTitle;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
  }, []);

  return { locale, setLocale, t: copy[locale] };
}
