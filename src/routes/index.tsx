import { createFileRoute } from "@tanstack/react-router";

import heroImg from "@/assets/hero-cricket.jpg";
import p1 from "@/assets/poster-1.jpg";
import p2 from "@/assets/poster-2.jpg";
import p3 from "@/assets/poster-3.jpg";
import p4 from "@/assets/poster-4.jpg";
import p5 from "@/assets/poster-5.jpg";
import p6 from "@/assets/poster-6.jpg";
import { PosterRail } from "@/components/landing/PosterRail";

const TITLE = "StreamOne — Live Cricket, Football, Movies & Series";
const DESCRIPTION =
  "Stream 100,000+ hours of movies, series and originals in 17 languages, plus live cricket and football — on any device, from one subscription.";

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

const navLinks = ["Home", "Sports", "Movies", "TV Shows", "Originals", "Languages"];

const trending = [
  { src: p2, title: "Empire of Dust", meta: "Series · Historical drama", badge: "New" },
  { src: p1, title: "Night Signal", meta: "Series · Thriller" },
  { src: p5, title: "Beyond Orbit", meta: "Movie · Sci-fi", badge: "Premium" },
  { src: p6, title: "Festival of Us", meta: "Movie · Romance" },
  { src: p3, title: "House Full of Us", meta: "Series · Comedy" },
  { src: p4, title: "Extra Time", meta: "Sports · Docu-series" },
];

const sports = [
  { src: p4, title: "Premier Football", meta: "Live · Tonight 21:30", badge: "Live" },
  { src: heroImg, title: "T20 Super Series", meta: "Live · Match 14", badge: "Live" },
  { src: p2, title: "Kabaddi League", meta: "Highlights · 12 min" },
  { src: p5, title: "Formula Weekend", meta: "Race replay" },
  { src: p1, title: "Boxing Nights", meta: "Live · Sat 23:00" },
  { src: p3, title: "Fan Zone", meta: "Talk show · Daily" },
];

const originals = [
  { src: p1, title: "Neon Alley", meta: "Original · Crime", badge: "Original" },
  { src: p6, title: "Monsoon Hearts", meta: "Original · Drama", badge: "Original" },
  { src: p3, title: "The Family Plan", meta: "Original · Comedy" },
  { src: p2, title: "Kingdoms", meta: "Original · Epic" },
  { src: p5, title: "Signal Lost", meta: "Original · Mystery" },
  { src: p4, title: "Ninety Minutes", meta: "Original · Sports fiction" },
];

const plans = [
  {
    name: "Mobile",
    price: "₹149",
    period: "/ 3 months",
    perks: ["1 device · mobile only", "720p quality", "Ads supported", "All sports live"],
  },
  {
    name: "Super",
    price: "₹899",
    period: "/ year",
    perks: ["2 devices · TV & mobile", "1080p Full HD", "Ads supported", "Live sports + originals"],
    featured: true,
  },
  {
    name: "Premium",
    price: "₹1499",
    period: "/ year",
    perks: ["4 devices · all screens", "4K + Dolby Atmos", "Ad-free movies & shows", "Downloads"],
  },
];

const features = [
  { title: "17 languages", text: "Dubbed and subtitled catalogue across every major Indian language." },
  { title: "Every big match", text: "Cricket, football, kabaddi and tennis with multi-camera live feeds." },
  { title: "Watch anywhere", text: "Phone, tablet, web, smart TV and console — pick up where you left off." },
  { title: "Downloads", text: "Save shows offline and watch on the metro, the plane or the village." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-3 sm:px-6">
          <a href="#top" className="font-display text-2xl uppercase tracking-widest">
            <span className="text-gradient-brand">Stream</span>One
          </a>
          <nav className="hidden flex-1 items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#catalogue"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <a
              href="#plans"
              className="hidden rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary sm:inline-flex"
            >
              Log in
            </a>
            <a
              href="#plans"
              className="rounded-md bg-gradient-brand px-4 py-2 text-sm font-bold text-primary-foreground shadow-glow"
            >
              Subscribe
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative min-h-[88vh] w-full overflow-hidden">
          <img
            src={heroImg}
            alt="Floodlit cricket stadium packed with fans during a night match"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-fade-bottom" />

          <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6">
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Live now · T20 Super Series
            </span>
            <h1 className="max-w-3xl text-5xl uppercase leading-[0.95] sm:text-7xl">
              One subscription.
              <br />
              <span className="text-gradient-brand">Every story, every match.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">{DESCRIPTION}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#plans"
                className="rounded-md bg-gradient-brand px-7 py-3 text-base font-bold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                Start watching
              </a>
              <a
                href="#catalogue"
                className="rounded-md border border-border bg-card/60 px-7 py-3 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-secondary"
              >
                Browse catalogue
              </a>
            </div>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {[
                ["100k+", "hours of content"],
                ["17", "languages"],
                ["4K", "Dolby Atmos"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-3xl text-foreground">{value}</dt>
                  <dd className="text-xs uppercase tracking-widest text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div id="catalogue" className="scroll-mt-20 pt-6">
          <PosterRail title="Trending this week" items={trending} />
          <PosterRail title="Live sports & highlights" items={sports} />
          <PosterRail title="StreamOne Originals" items={originals} />
        </div>

        <section className="border-y border-border bg-surface py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-3xl uppercase sm:text-4xl">Why StreamOne</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-border bg-surface-elevated p-6 transition-colors hover:border-primary/50"
                >
                  <h3 className="text-xl uppercase">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="plans" className="scroll-mt-20 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-3xl uppercase sm:text-4xl">Choose your plan</h2>
            <p className="mt-2 text-sm text-muted-foreground">Cancel anytime. Prices include taxes.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl border p-7 ${
                    plan.featured
                      ? "border-primary/60 bg-surface-elevated shadow-glow"
                      : "border-border bg-card"
                  }`}
                >
                  {plan.featured ? (
                    <span className="absolute -top-3 left-7 rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                      Most popular
                    </span>
                  ) : null}
                  <h3 className="text-2xl uppercase">{plan.name}</h3>
                  <p className="mt-3 flex items-end gap-1">
                    <span className="font-display text-4xl">{plan.price}</span>
                    <span className="pb-1 text-sm text-muted-foreground">{plan.period}</span>
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex gap-2">
                        <span aria-hidden className="text-accent">
                          ✓
                        </span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#top"
                    className={`mt-7 block rounded-md px-4 py-3 text-center text-sm font-bold transition-transform hover:scale-[1.02] ${
                      plan.featured
                        ? "bg-gradient-brand text-primary-foreground"
                        : "border border-border text-foreground"
                    }`}
                  >
                    Get {plan.name}
                  </a>
                </div>
              ))}
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
              © {new Date().getFullYear()} StreamOne. A demo streaming landing page.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["About", "Help centre", "Terms", "Privacy", "Careers"].map((link) => (
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
