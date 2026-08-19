type Poster = {
  src: string;
  title: string;
  meta: string;
  badge?: string;
};

export function PosterRail({
  title,
  items,
  headingClassName = "uppercase tracking-wide",
}: {
  title: string;
  items: Poster[];
  headingClassName?: string;
}) {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className={`mb-4 text-2xl sm:text-3xl ${headingClassName}`}>{title}</h2>
        <div className="rail-scroll">
          {items.map((item) => (
            <article
              key={item.title}
              className="group w-[150px] sm:w-[190px]"
              aria-label={item.title}
            >
              <div className="relative overflow-hidden rounded-lg bg-surface shadow-card ring-1 ring-border transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-glow">
                <img
                  src={item.src}
                  alt={`${item.title} poster`}
                  loading="lazy"
                  width={640}
                  height={960}
                  className="aspect-2/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.badge ? (
                  <span className="absolute left-2 top-2 rounded-sm bg-gradient-brand px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                    {item.badge}
                  </span>
                ) : null}
              </div>
              <h3 className="mt-2 truncate text-base font-semibold tracking-normal">
                {item.title}
              </h3>
              <p className="truncate text-xs text-muted-foreground">{item.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
