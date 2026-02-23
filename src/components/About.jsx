const architectureBlocks = [
  {
    title: "Monorepo Structure",
    detail:
      "Single repository with isolated apps for web and API, shared validation contracts, and unified tooling across services.",
  },
  {
    title: "API Layer (NestJS)",
    detail:
      "Domain modules for inventory, orders, billing, and users with centralized validation and error boundaries.",
  },
  {
    title: "Database Design (PostgreSQL)",
    detail:
      "Normalized entities for shops, inventory, invoices, and transactions with composite indexes for hot queries.",
  },
  {
    title: "Redis Caching Strategy",
    detail:
      "Targeted cache for dashboard aggregates and catalog reads plus short-lived state for token checks and throttling.",
  },
  {
    title: "Auth (JWT + RBAC)",
    detail:
      "Short-lived JWT access tokens and role-based guards aligned to pharmacy owner, staff, and auditor workflows.",
  },
  {
    title: "Dockerized Environment",
    detail:
      "Docker Compose setup for API, web, PostgreSQL, and Redis to maintain dev/stage/prod consistency.",
  },
];

const tradeoffs = [
  "NestJS was chosen for modularity and maintainability, with a higher initial setup cost.",
  "Relational-first data modeling improved auditability but required join and query optimization.",
  "Redis is applied only to measured hot paths to keep cache invalidation explicit.",
  "JWT remains stateless for horizontal scale, with rotation and strict session controls.",
];

const scaling = [
  "Scale API pods behind a load balancer without sticky sessions.",
  "Introduce read replicas for reporting-heavy workloads.",
  "Move non-critical workflows to queue-backed async workers.",
  "Add tenant-aware partitioning when high-volume accounts increase.",
];

const metrics = [
  { label: "Catalog API latency", value: "~42% reduction" },
  { label: "Peak throughput", value: "3.1x sustained RPS" },
  { label: "Auth-related support load", value: "~35% decrease" },
  { label: "Rollback execution", value: "< 8 minutes" },
];

function About() {
  return (
    <section id="medshop" className="border-t border-line/90 py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-6 md:px-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Featured Case Study</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            MedShop: Production B2B SaaS for Medical Shops
          </h2>
          <p className="text-base leading-relaxed text-slate-300 md:text-lg">
            A backend-first SaaS platform built to keep pharmacy operations reliable, fast, and auditable under real daily load.
          </p>
        </div>

        <div className="grid gap-6 rounded-2xl border border-line bg-panel/60 p-6 shadow-soft md:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">Problem</h3>
            <p className="text-slate-300">
              Medical shops were handling inventory, purchase orders, and billing on disconnected tools, causing stock mismatches and delayed reconciliation.
            </p>
            <p className="text-slate-300">
              MedShop centralized these workflows into a role-aware SaaS system where consistency, authorization, and operability were non-negotiable.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">Technical Decisions and Tradeoffs</h3>
            <ul className="space-y-2 text-slate-300">
              {tradeoffs.map((item) => (
                <li key={item} className="rounded-md border border-line/80 bg-slate-900/60 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-5">
          <h3 className="text-xl font-semibold text-white">Architecture</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {architectureBlocks.map((block) => (
              <article key={block.title} className="rounded-xl border border-line bg-panel/40 p-5">
                <h4 className="font-medium text-white">{block.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{block.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-panel/50 p-6">
          <h3 className="mb-4 text-xl font-semibold text-white">Architecture Diagram</h3>
          <div className="rounded-xl border border-line bg-slate-950/50 p-3">
            <svg viewBox="0 0 980 420" role="img" aria-label="MedShop production architecture diagram" className="h-auto w-full">
              <defs>
                <linearGradient id="card" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
              </defs>

              <rect x="40" y="150" rx="14" ry="14" width="180" height="90" fill="url(#card)" stroke="#334155" />
              <text x="130" y="186" textAnchor="middle" fill="#e2e8f0" fontSize="20" fontFamily="sans-serif">
                Next.js App
              </text>
              <text x="130" y="212" textAnchor="middle" fill="#94a3b8" fontSize="14" fontFamily="sans-serif">
                B2B Dashboard
              </text>

              <rect x="290" y="120" rx="14" ry="14" width="210" height="150" fill="url(#card)" stroke="#334155" />
              <text x="395" y="162" textAnchor="middle" fill="#e2e8f0" fontSize="20" fontFamily="sans-serif">
                NestJS API
              </text>
              <text x="395" y="188" textAnchor="middle" fill="#94a3b8" fontSize="14" fontFamily="sans-serif">
                JWT + RBAC
              </text>
              <text x="395" y="212" textAnchor="middle" fill="#94a3b8" fontSize="14" fontFamily="sans-serif">
                Service Modules
              </text>

              <rect x="570" y="45" rx="14" ry="14" width="180" height="90" fill="url(#card)" stroke="#334155" />
              <text x="660" y="81" textAnchor="middle" fill="#e2e8f0" fontSize="18" fontFamily="sans-serif">
                PostgreSQL
              </text>
              <text x="660" y="107" textAnchor="middle" fill="#94a3b8" fontSize="13" fontFamily="sans-serif">
                Orders, Inventory
              </text>

              <rect x="570" y="165" rx="14" ry="14" width="180" height="90" fill="url(#card)" stroke="#334155" />
              <text x="660" y="201" textAnchor="middle" fill="#e2e8f0" fontSize="18" fontFamily="sans-serif">
                Redis
              </text>
              <text x="660" y="227" textAnchor="middle" fill="#94a3b8" fontSize="13" fontFamily="sans-serif">
                Cache + Rate Limit
              </text>

              <rect x="570" y="285" rx="14" ry="14" width="180" height="90" fill="url(#card)" stroke="#334155" />
              <text x="660" y="321" textAnchor="middle" fill="#e2e8f0" fontSize="18" fontFamily="sans-serif">
                Queue Worker
              </text>
              <text x="660" y="347" textAnchor="middle" fill="#94a3b8" fontSize="13" fontFamily="sans-serif">
                Async Jobs
              </text>

              <rect x="790" y="95" rx="14" ry="14" width="150" height="120" fill="url(#card)" stroke="#334155" />
              <text x="865" y="131" textAnchor="middle" fill="#e2e8f0" fontSize="17" fontFamily="sans-serif">
                Docker
              </text>
              <text x="865" y="156" textAnchor="middle" fill="#94a3b8" fontSize="13" fontFamily="sans-serif">
                API + Web
              </text>
              <text x="865" y="180" textAnchor="middle" fill="#94a3b8" fontSize="13" fontFamily="sans-serif">
                CI/CD Deploy
              </text>

              <rect x="790" y="245" rx="14" ry="14" width="150" height="90" fill="url(#card)" stroke="#334155" />
              <text x="865" y="281" textAnchor="middle" fill="#e2e8f0" fontSize="17" fontFamily="sans-serif">
                Observability
              </text>
              <text x="865" y="307" textAnchor="middle" fill="#94a3b8" fontSize="13" fontFamily="sans-serif">
                Logs + Metrics
              </text>

              <line x1="220" y1="195" x2="290" y2="195" stroke="#6ee7b7" strokeWidth="2.5" />
              <line x1="500" y1="155" x2="570" y2="90" stroke="#6ee7b7" strokeWidth="2.5" />
              <line x1="500" y1="195" x2="570" y2="210" stroke="#6ee7b7" strokeWidth="2.5" />
              <line x1="500" y1="240" x2="570" y2="330" stroke="#6ee7b7" strokeWidth="2.5" />
              <line x1="750" y1="90" x2="790" y2="145" stroke="#6ee7b7" strokeWidth="2.5" />
              <line x1="750" y1="210" x2="790" y2="145" stroke="#6ee7b7" strokeWidth="2.5" />
              <line x1="750" y1="330" x2="790" y2="290" stroke="#6ee7b7" strokeWidth="2.5" />
            </svg>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3 rounded-2xl border border-line bg-panel/40 p-6">
            <h3 className="text-xl font-semibold text-white">Scaling Considerations</h3>
            <ul className="space-y-2 text-slate-300">
              {scaling.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 rounded-2xl border border-line bg-panel/40 p-6">
            <h3 className="text-xl font-semibold text-white">Estimated Impact Metrics</h3>
            <ul className="space-y-3 text-slate-300">
              {metrics.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between rounded-md border border-line/70 bg-slate-900/60 px-4 py-2"
                >
                  <span>{item.label}</span>
                  <span className="font-medium text-accent">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
