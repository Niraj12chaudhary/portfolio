function Contact() {
  return (
    <section id="contact" className="border-t border-line/90 py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl space-y-8 px-6 md:px-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Let us Build Reliable Systems</h2>
          <p className="text-base leading-relaxed text-slate-300 md:text-lg">
            Open to backend engineering roles and SaaS architecture discussions.
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-panel/40 p-6">
          <div className="grid gap-6 text-slate-300 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Email</p>
              <a href="mailto:shivamkr7822@gmail.com" className="mt-1 inline-block text-base text-white hover:text-accent">
                shivamkr7822@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">GitHub</p>
              <a
                href="https://github.com/Niraj12chaudhary"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block text-base text-white hover:text-accent"
              >
                github.com/Niraj12chaudhary
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/shivam-kr-chaudhary/"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block text-base text-white hover:text-accent"
              >
                linkedin.com/in/shivam-kr-chaudhary
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
