function Home() {
  return (
    <section id="home" className="relative overflow-hidden py-24 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="absolute inset-0 -z-10 grid-sheen opacity-40" />
        <div className="absolute -left-16 top-0 -z-10 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-0 top-10 -z-10 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="grid items-center gap-10 md:grid-cols-[1fr_280px] md:gap-14">
          <div className="max-w-4xl space-y-7">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">
              Backend Engineer
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Shivam Chaudhary
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-slate-200 md:text-2xl">
              I design and build production-grade backend systems for real-world
              SaaS businesses.
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
              Engineering philosophy: reliability is a product feature, so
              architecture decisions should make correctness and operability
              easier at scale.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#medshop"
                className="rounded-md border border-accent bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent hover:bg-accent/20"
              >
                View Work
              </a>
              <a
                href="https://github.com/Niraj12chaudhary"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-line px-5 py-2.5 text-sm font-medium text-slate-200 hover:border-slate-300 hover:text-white"
              >
                GitHub
              </a>
              <a
                href="/shivam-kr-chaudhary.pdf?v=20260224"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-line px-5 py-2.5 text-sm font-medium text-slate-200 hover:border-slate-300 hover:text-white"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[280px]">
            <div className="overflow-hidden rounded-full border border-accent/40 bg-panel/50 p-2 shadow-soft">
              <img
                src="/photo.jpeg"
                alt="Shivam Chaudhary profile"
                className="aspect-square h-auto w-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;


