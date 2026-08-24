import { Kicker } from "./Terminal";

const openSourceMerged = [
  "Fixed a dead ecosystem doc link (Daytona plugin reference) in the docs site.",
  "Fixed a missing language link in the Arabic README.",
];

const openSourceSubmitted = [
  "TUI event-stream reconnect after an OS sleep/lock disconnect.",
  "Diff-view rendering fix for uppercase artifacts.",
  "RPM package naming fix (packaged as open-code instead of opencode).",
];

const principles = [
  "Design database relationships and lifecycle rules before exposing API contracts.",
  "Measure first, optimize second, and tie every performance claim to metrics.",
  "Treat failure paths as first-class with retries, idempotency, and timeouts.",
  "Prefer maintainable modules over clever abstractions with hidden cost.",
  "Design authorization at boundaries instead of scattering checks across services.",
  "Dockerize local and CI workflows for deterministic environments.",
];

const technicalDepth = [
  {
    area: "Backend Engineering",
    summary:
      "Modular NestJS services, DTO validation, clean service boundaries, and predictable behavior under load.",
  },
  {
    area: "Database Design",
    summary:
      "PostgreSQL schema design around query patterns, transactional consistency, and migration discipline.",
  },
  {
    area: "Caching and Performance",
    summary:
      "Redis for measured hot-path caching, session lookups, and rate limiting with controlled invalidation.",
  },
  {
    area: "DevOps and Infrastructure",
    summary:
      "Dockerized services, CI/CD delivery, and practical observability and rollback readiness.",
  },
  {
    area: "System Design",
    summary:
      "Balancing consistency, throughput, and operability for B2B SaaS architecture decisions.",
  },
];

const exploring = [
  "Event-driven systems for notifications and async workflows.",
  "Distributed locking and idempotency for high-concurrency operations.",
  "System design patterns for backpressure and queue orchestration.",
  "Multi-tenant SaaS hardening with tenant isolation and traffic partitioning.",
];

const parkingLotHighlights = [
  "Transactional entry and exit flow with pessimistic locking to prevent allocation race conditions.",
  "Strategy-based pricing engine with hourly, night, and surge pricing implementations.",
  "Real-time occupancy and ticket lifecycle updates via WebSocket events.",
  "JWT auth, role-based guards, throttling, and request validation for secure API boundaries.",
  "Migration and scenario seeding workflow for realistic report and load testing.",
];

function PortFolio() {
  return (
    <section id="parking-lot" className="border-t border-line/90 py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-6 md:px-10">
        <div className="max-w-3xl space-y-4">
          <Kicker>project reference</Kicker>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Parking-Lot-Backend</h2>
          <p className="text-base leading-relaxed text-slate-300 md:text-lg">
            A backend reference project that reflects production patterns used in real SaaS systems.
          </p>
        </div>

        <div className="rounded-md border border-line bg-panel/70 p-6">
          <div className="flex flex-wrap items-center gap-2">
            {["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "JWT", "RBAC", "Socket.IO", "Docker"].map((item) => (
              <span key={item} className="rounded-md border border-line bg-slate-950/70 px-2.5 py-1 text-xs text-slate-300">
                {item}
              </span>
            ))}
          </div>
          <ul className="mt-5 space-y-2 text-sm text-slate-300">
            {parkingLotHighlights.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="text-accent">-</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <a
              href="https://github.com/Niraj12chaudhary/Parking-Lot-Backend"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-md border border-line px-4 py-2 text-sm text-slate-200 hover:border-slate-400 hover:text-white"
            >
              ./view-repository
            </a>
          </div>
        </div>

        <div id="depth" className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3 rounded-md border border-line bg-panel/60 p-6">
            <h3 className="text-xl font-semibold text-white">Engineering Principles</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {principles.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 rounded-md border border-line bg-panel/60 p-6">
            <h3 className="text-xl font-semibold text-white">Currently Exploring</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {exploring.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Technical Depth</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {technicalDepth.map((item) => (
              <article key={item.area} className="rounded-md border border-line bg-panel/60 p-6">
                <h4 className="text-lg font-semibold text-white">{item.area}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>

        <div id="open-source" className="space-y-4 rounded-md border border-line bg-panel/60 p-6">
          <Kicker>open source</Kicker>
          <h3 className="text-xl font-semibold text-white">opencode</h3>
          <p className="text-sm text-slate-400">AI coding agent, 200k+ GitHub stars.</p>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Merged</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-300">
              {openSourceMerged.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Submitted</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-300">
              {openSourceSubmitted.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <a
              href="https://github.com/anomalyco/opencode"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-md border border-line px-4 py-2 text-sm text-slate-200 hover:border-slate-400 hover:text-white"
            >
              ./view-repository
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default PortFolio;
