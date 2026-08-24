import { WindowDots } from "./Terminal";

function Home() {
  return (
    <section id="home" className="relative overflow-hidden py-24 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_260px] md:gap-14">
          <div className="overflow-hidden rounded-md border border-line bg-panel/80 shadow-soft">
            <div className="flex items-center justify-between border-b border-line bg-black/30 px-4 py-2.5">
              <WindowDots />
              <span className="font-mono text-xs text-slate-500">zsh — whoami</span>
            </div>
            <div className="space-y-6 p-6 md:p-8">
              <p className="font-mono text-sm text-slate-500">
                <span className="text-accent">$</span> whoami
              </p>
              <div className="space-y-3">
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">Backend Engineer</p>
                <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                  Shivam Chaudhary
                </h1>
              </div>

              <p className="font-mono text-sm text-slate-500">
                <span className="text-accent">$</span> cat about.md
              </p>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
                I design and build production-grade backend systems for real-world SaaS
                businesses.
              </p>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
                Engineering philosophy: reliability is a product feature, so architecture
                decisions should make correctness and operability easier at scale.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-sm">
                <a
                  href="#case-studies"
                  className="rounded-md border border-accent bg-accent/10 px-5 py-2.5 font-medium text-accent hover:bg-accent/20"
                >
                  ./view-work
                </a>
                <a
                  href="https://github.com/Niraj12chaudhary"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-line px-5 py-2.5 font-medium text-slate-200 hover:border-slate-400 hover:text-white"
                >
                  ./github
                </a>
                <a
                  href="/shivam-kr-chaudhary.pdf?v=20260824"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-line px-5 py-2.5 font-medium text-slate-200 hover:border-slate-400 hover:text-white"
                >
                  ./resume
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[240px] space-y-2">
            <div className="overflow-hidden rounded-md border border-line bg-panel/80 p-2 shadow-soft">
              <img
                src="/photo.jpeg"
                alt="Shivam Chaudhary profile"
                className="aspect-square h-auto w-full rounded-sm object-cover grayscale-[15%]"
              />
            </div>
            <p className="text-center font-mono text-xs text-slate-600">./photo.jpeg</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
