import { LOCALES, type Locale } from "@/lib/i18n";

export function LanguageToggle({
  locale,
  onChange,
}: {
  locale: Locale;
  onChange: (next: Locale) => void;
}) {
  return (
    <div
      className="inline-flex rounded-md border border-border bg-card/70 p-0.5"
      role="group"
      aria-label="Language"
    >
      {LOCALES.map((item) => {
        const active = item.id === locale;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
            aria-pressed={active}
            className={`rounded-[6px] px-2.5 py-1.5 text-xs font-bold tracking-wide transition-colors ${
              active
                ? "bg-gradient-brand text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.native}
          </button>
        );
      })}
    </div>
  );
}
