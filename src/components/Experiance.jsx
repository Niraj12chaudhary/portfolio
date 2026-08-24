import { Kicker } from "./Terminal";

const fullTimeExperience = [
  {
    company: "Synthetic People (Syntera)",
    role: "Backend Engineer",
    duration: "Feb 2026 - Present",
    focus:
      "Backend infrastructure for an AI-powered market research SaaS platform - production LLM orchestration, RAG pipelines, and platform reliability.",
    highlights: [
      "Built a 4-stage multi-provider LLM orchestration pipeline for artifact/stimulus generation, with checkpoint/resume, database persistence, API routes, and a frontend integration.",
      "Designed and shipped a production-grade LLM token cost-tracking system across ~40 call sites, with an append-only audit ledger and a per-exploration cost query endpoint.",
      "Built a RAG ingestion pipeline on Qdrant Cloud, using BullMQ for async decoupling between ingestion and indexing.",
      "Improved a production scraping pipeline's reliability from ~79% to ~90% success rate via domain blocklisting and non-retryable HTTP status handling.",
      "Reverse-engineered and documented a 50+ table PostgreSQL schema (full ERD breakdown) for the platform.",
      "Fixed data-integrity bugs in production reporting - multi-select double-counting and confidence-score consistency - with backfill scripts.",
    ],
  },
  {
    company: "OneRootFarm",
    role: "Backend Developer",
    duration: "Jul 2025 - Feb 2026",
    focus:
      "Worked on Markhet and Mandi Plus backend systems for agri marketplace, logistics, and operations dashboards.",
    highlights: [
      "Owned backend service development and production issue resolution for app and operations dashboards.",
      "Reduced API p95 latency by 52% (480ms to 230ms) by eliminating N+1 ORM queries, adding composite database indexes, and switching to cursor-based pagination.",
      "Designed an event-driven notification pipeline using RabbitMQ, Redis, and NestJS Events, decoupling 3 core services with at-least-once delivery guarantees.",
      "Implemented a Docker-based rollback strategy that cut MTTR (mean time to recovery) from 25 minutes to under 5 minutes.",
    ],
  },
  {
    company: "Sarva Suvidhaen Pvt. Ltd.",
    role: "Software Development Engineer 1",
    duration: "Jun 2024 - Jul 2025",
    focus:
      "Built backend systems for Sanchalak and RailOps to digitize railway operations and notification workflows.",
    highlights: [
      "Developed and maintained NestJS and PostgreSQL microservices for real-time notification systems.",
      "Created reusable notification templates and optimized API payloads for better efficiency.",
      "Built Django and PostgreSQL APIs for RailOps and improved response times by around 2x.",
      "Containerized services with Docker, improved delivery with CI/CD, and monitored performance in Grafana.",
      "Built idempotent microservices with Redis-backed deduplication for exactly-once-style billing, improving data accuracy by 30%.",
    ],
  },
];

function Experiance() {
  return (
    <section id="experience" className="border-t border-line/90 py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl space-y-10 px-6 md:px-10">
        <div className="max-w-3xl space-y-4">
          <Kicker>experience</Kicker>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Full-Time Experience</h2>
          <p className="text-base leading-relaxed text-slate-300 md:text-lg">
            Roles where I designed, shipped, and operated backend systems in production.
          </p>
        </div>

        <div className="space-y-4">
          {fullTimeExperience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="rounded-md border border-line bg-panel/70 p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {item.role} - {item.company}
                </h3>
                <p className="font-mono text-sm text-slate-500">{item.duration}</p>
              </div>
              <p className="mt-3 text-sm text-slate-300">{item.focus}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {item.highlights.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-accent">-</span>
                    <span>{point}</span>
                  </li>
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
