import { createFileRoute } from "@tanstack/react-router";

import heroImg from "@/assets/hero-cricket.jpg";
import p1 from "@/assets/poster-1.jpg";
import p2 from "@/assets/poster-2.jpg";
import p3 from "@/assets/poster-3.jpg";
import p4 from "@/assets/poster-4.jpg";
import p5 from "@/assets/poster-5.jpg";
import p6 from "@/assets/poster-6.jpg";
import { LanguageToggle } from "@/components/landing/LanguageToggle";
import { PosterRail } from "@/components/landing/PosterRail";
import { useLocale } from "@/hooks/use-locale";
import { copy } from "@/lib/i18n";

const TITLE = copy.en.metaTitle;
const DESCRIPTION = copy.en.metaDescription;

const trendingImages = [p2, p1, p5, p6, p3, p4];
const sportsImages = [p4, heroImg, p2, p5, p1, p3];
const originalsImages = [p1, p6, p3, p2, p5, p4];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function withImages(items: { title: string; meta: string; badge?: string }[], images: string[]) {
  return items.map((item, index) => ({
    ...item,
    src: images[index] ?? images[0] ?? "",
  }));
}

function Landing() {
  const { locale, setLocale, t } = useLocale();
  const headingCase = locale === "en" ? "uppercase" : "normal-case";

  return (
    <div lang={locale} className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-3 sm:px-6">
          <a href="#top" className="font-display text-2xl uppercase tracking-widest">
            <span className="text-gradient-brand">Stream</span>One
          </a>
          <nav className="hidden flex-1 items-center gap-6 lg:flex">
            {t.nav.map((link) => (
              <a
                key={link}
                href={link === t.nav[0] ? "#top" : "#catalogue"}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <LanguageToggle locale={locale} onChange={setLocale} />
            <a
              href="#plans"
              className="hidden rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary sm:inline-flex"
            >
              {t.logIn}
            </a>
            <a
              href="#plans"
              className="rounded-md bg-gradient-brand px-4 py-2 text-sm font-bold text-primary-foreground shadow-glow"
            >
              {t.subscribe}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative min-h-[88vh] w-full overflow-hidden">
          <img
            src={heroImg}
            alt={t.heroAlt}
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-fade-bottom" />

          <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6">
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-accent">
              {t.liveNow}
            </span>
            <h1 className={`max-w-3xl text-5xl leading-[0.95] sm:text-7xl ${headingCase}`}>
              {t.heroTitle}
              <br />
              <span className="text-gradient-brand">{t.heroAccent}</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              {t.metaDescription}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#plans"
                className="rounded-md bg-gradient-brand px-7 py-3 text-base font-bold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                {t.startWatching}
              </a>
              <a
                href="#catalogue"
                className="rounded-md border border-border bg-card/60 px-7 py-3 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-secondary"
              >
                {t.browseCatalogue}
              </a>
            </div>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {t.stats.map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-3xl text-foreground">{value}</dt>
                  <dd className="text-xs uppercase tracking-widest text-muted-foreground">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div id="catalogue" className="scroll-mt-20 pt-6">
          <PosterRail
            title={t.trendingTitle}
            items={withImages(t.trending, trendingImages)}
            headingClassName={headingCase}
          />
          <PosterRail
            title={t.sportsTitle}
            items={withImages(t.sports, sportsImages)}
            headingClassName={headingCase}
          />
          <PosterRail
            title={t.originalsTitle}
            items={withImages(t.originals, originalsImages)}
            headingClassName={headingCase}
          />
        </div>

        <section className="border-y border-border bg-surface py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className={`text-3xl sm:text-4xl ${headingCase}`}>{t.whyTitle}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-border bg-surface-elevated p-6 transition-colors hover:border-primary/50"
                >
                  <h3 className={`text-xl ${headingCase}`}>{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="plans" className="scroll-mt-20 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className={`text-3xl sm:text-4xl ${headingCase}`}>{t.plansTitle}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t.plansSubtitle}</p>
            <div className="mt-8 mx-auto max-w-md">
              <div className="relative rounded-2xl border border-primary/60 bg-surface-elevated p-7 shadow-glow">
                <span className="absolute -top-3 left-7 rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                  {t.planBadge}
                </span>
                <h3 className={`text-2xl ${headingCase}`}>{t.planName}</h3>
                <p className="mt-3 flex items-end gap-1">
                  <span className="font-display text-4xl">{t.planPrice}</span>
                  <span className="pb-1 text-sm text-muted-foreground">{t.planPeriod}</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{t.planThen}</p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {t.planPerks.map((perk) => (
                    <li key={perk} className="flex gap-2">
                      <span aria-hidden className="text-accent">
                        ✓
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href="#plans"
                  className="mt-7 block rounded-md bg-gradient-brand px-4 py-3 text-center text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  {t.getPremium}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-surface py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl uppercase tracking-widest">
              <span className="text-gradient-brand">Stream</span>One
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              © {new Date().getFullYear()} StreamOne. {t.footerNote}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {t.footerLinks.map((link) => (
              <a key={link} href="#top" className="transition-colors hover:text-foreground">
                {link}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
