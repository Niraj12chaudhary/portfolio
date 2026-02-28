const fullTimeExperience = [
  {
    company: "OneRootFarm",
    role: "Backend Developer",
    duration: "Jul 2025 - Present",
    focus:
      "Worked on Markhet and Mandi Plus backend systems for agri marketplace, logistics, and operations dashboards.",
    highlights: [
      "Owned backend service development and production issue resolution for app and operations dashboards.",
      "Improved API response times by around 2x using PostgreSQL query optimization and pagination.",
      "Architected asynchronous task workflows with RabbitMQ and Redis for background jobs and user notifications.",
      "Managed AWS deployment lifecycle with Docker and CI/CD for stable release consistency.",
    ],
  },
  {
    company: "Sarva Suvidhaen Pvt. Ltd.",
    role: "Software Development Engineer 1",
    duration: "June 2024 - Jul 2025",
    focus:
      "Built backend systems for Sanchalak and RailOps to digitize railway operations and notification workflows.",
    highlights: [
      "Developed and maintained NestJS and PostgreSQL microservices for real-time notification systems.",
      "Created reusable notification templates and optimized API payloads for better efficiency.",
      "Built Django and PostgreSQL APIs for RailOps and improved response times by around 2x.",
      "Containerized services with Docker, improved delivery with CI/CD, and monitored performance in Grafana.",
    ],
  },
];

function Experiance() {
  return (
    <section id="experience" className="border-t border-line/90 py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl space-y-10 px-6 md:px-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Experience</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Full-Time Experience</h2>
          <p className="text-base leading-relaxed text-slate-300 md:text-lg">
            Roles where I designed, shipped, and operated backend systems in production.
          </p>
        </div>

        <div className="space-y-4">
          {fullTimeExperience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="rounded-2xl border border-line bg-panel/50 p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {item.role} - {item.company}
                </h3>
                <p className="text-sm text-slate-400">{item.duration}</p>
              </div>
              <p className="mt-3 text-sm text-slate-300">{item.focus}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {item.highlights.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiance;

