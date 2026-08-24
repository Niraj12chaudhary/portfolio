import { Kicker } from "./Terminal";

const caseStudies = [
  {
    id: "knowledge-engine",
    name: "Knowledge Engine",
    tagline: "Multi-tenant RAG-as-a-service platform",
    note: "Evolved from an earlier project called Briefcase - same codebase, later phases.",
    problem: [
      "Teams need isolated, secure retrieval-augmented generation without standing up separate infrastructure per client or tenant.",
      "A shared platform where each tenant's data and queries stay strictly isolated, while still getting the right retrieval and generation setup for their specific workload.",
    ],
    architecture: [
      {
        title: "Layered FastAPI Backend",
        detail:
          "API, service, model, and async-worker layers kept separate, so retrieval, ingestion, and auth logic don't leak into each other.",
      },
      {
        title: "Tenant Isolation",
        detail:
          "Row-level filtering scoped by tenant ID at the data-access layer, enforced through a shared auth dependency and covered by dedicated cross-tenant tests - not left to the LLM or the API layer to self-police.",
      },
      {
        title: "pgvector Retrieval + Reranking",
        detail:
          "PostgreSQL + pgvector for cosine-distance similarity search, followed by a local cross-encoder reranking stage (sentence-transformers, CPU-only) before generation.",
      },
      {
        title: "Fully Local Model Stack",
        detail:
          "Embeddings and generation both call a local Ollama server over HTTP - no external LLM API dependency, no per-call cost, tenant data never leaves the infrastructure.",
      },
      {
        title: "Async Document Ingestion",
        detail: "Celery-driven ingestion with MinIO object storage and PyMuPDF/python-docx/BeautifulSoup parsing for PDF, DOCX, and HTML.",
      },
      {
        title: "Auth and Provisioning",
        detail: "API-key based auth with create/list/revoke endpoints.",
      },
    ],
    tradeoffs: [
      "Row-level filtering over schema-per-tenant: simpler operationally at current scale, at the cost of needing airtight query-layer discipline - this is why cross-tenant isolation has explicit test coverage rather than being assumed.",
      "A fully local Ollama-based stack avoids per-call LLM API cost and keeps tenant data off third-party APIs, at the cost of owning model hosting and throughput myself instead of offloading it to a provider.",
    ],
    status:
      "Local-only - not yet deployed publicly. Foundational stack, auth/tenant provisioning, and the ingestion + retrieval pipeline are built and covered by 60 automated tests (including dedicated cross-tenant isolation coverage across auth, documents, chunks, and query endpoints); public deployment and load testing are next.",
    improve: [
      "A schema-per-tenant option for higher-compliance tenants who need harder isolation guarantees than row-level filtering provides.",
      "Observability/tracing across the retrieval -> rerank -> generation pipeline, so slow or low-quality answers are traceable to a specific stage.",
      "Public deployment and load testing under real concurrent tenant traffic, and evaluating whether pgvector still holds up at higher chunk volumes.",
    ],
    signal: null,
  },
  {
    id: "parcelpilot",
    name: "ParcelPilot",
    tagline: "Agentic internal support/operations assistant",
    note: null,
    problem: [
      "Support/ops staff need fast, trustworthy answers that combine policy documents (contracts, SOPs, product docs) with live operational data (accounts, orders, tickets).",
      "The agent must never see data it isn't authorized for, and no state-changing action can happen without a human explicitly confirming it.",
    ],
    architecture: [
      {
        title: "Manual Agentic Tool-Loop",
        detail:
          "Hand-built loop, not a framework's black-box tool runner - needed to intercept one tool's result and pause for human confirmation, build a UI-visible tool-activity trace, and stay provider-agnostic (Groq/Anthropic swap via one config line).",
      },
      {
        title: "RAG Layer",
        detail:
          "Qdrant + local embeddings (fastembed/BGE, no GPU or per-call API cost) over policy/SOP/product-doc/agreement PDFs, each chunk tagged with a source-authority ranking.",
      },
      {
        title: "Structured-Data Tools",
        detail: "Parameterized Postgres lookups - no arbitrary SQL ever exposed to the model.",
      },
      {
        title: "Deterministic Calculation Tool",
        detail: "All timestamp/SLA-elapsed math is computed by code - the model never eyeballs a time delta itself.",
      },
      {
        title: "Authorization at the Tool Layer",
        detail: "Every tool call checks account access before touching data, independent of what the model asked for.",
      },
      {
        title: "Confirm-Before-Execute",
        detail:
          "The one state-changing tool (create_escalation) can only stage a pending action; the real record is created only after an explicit human click, with P1/high-value escalations additionally gated to a manager role.",
      },
    ],
    tradeoffs: [
      "A hand-built tool loop costs more upfront engineering than adopting an agent framework, but it's what made the pause-for-confirmation and provider-swap requirements possible.",
      "Source-authority ranking on retrieval adds a manual tagging step at ingestion time, but prevents outdated policy docs from outranking a signed agreement.",
    ],
    status:
      "Deployment-ready - Dockerfile and hosting config verified locally against a live running stack (Postgres, Qdrant, and a live LLM-backed agent). Not yet hosted on a public URL.",
    improve: [
      "Persist conversation history server-side (currently lives in browser state only) for audit trail and cross-device continuity.",
      "Streaming responses - a multi-tool-call turn can take several seconds.",
      "Structured extraction of contract terms at ingestion time, so SLA-target lookups are as deterministic as the time-calculation tool already is.",
    ],
    signal: {
      title: "Verified in Testing",
      items: [
        "37 automated tests covering authorization, retrieval ranking, time calculations, the full confirm/reject action lifecycle, and the agent's tool-calling loop - run against a scripted fake LLM provider, no live API key needed.",
        "8-tool-call budget per conversation turn, with an explicit fallback message rather than an infinite loop if a model gets stuck.",
        "Caught and fixed a real prompt-adherence bug during testing: the default free LLM provider was computing a time delta in free text instead of calling the deterministic calculation tool - fixed by tightening the prompt, not by trusting the model more.",
      ],
    },
  },
];

function CaseStudy({ study, index }) {
  return (
    <article id={study.id} className="space-y-8 rounded-md border border-line bg-panel/60 p-6 shadow-soft md:p-8">
      <div className="space-y-2">
        <p className="font-mono text-xs text-slate-500">
          <span className="text-accent">$</span> cd ./case-studies/{study.id} <span className="text-slate-700">[{index + 1}/2]</span>
        </p>
        <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{study.name}</h3>
        <p className="text-base text-slate-300">{study.tagline}</p>
        {study.note ? <p className="text-sm italic text-slate-500">{study.note}</p> : null}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">Problem</h4>
          <div className="space-y-2 text-sm text-slate-300">
            {study.problem.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">Trade-offs</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            {study.tradeoffs.map((item) => (
              <li key={item} className="rounded-md border border-line/80 bg-slate-950/50 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">Architecture</h4>
        <div className="grid gap-4 md:grid-cols-2">
          {study.architecture.map((block) => (
            <div key={block.title} className="rounded-md border border-line bg-slate-950/40 p-4">
              <p className="font-medium text-white">{block.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{block.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {study.signal ? (
        <div className="space-y-3 rounded-md border border-accent/30 bg-accent/[0.04] p-5">
          <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">{study.signal.title}</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            {study.signal.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">Status</h4>
          <p className="text-sm leading-relaxed text-slate-300">{study.status}</p>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">What I'd Improve for Production</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            {study.improve.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function About() {
  return (
    <section id="case-studies" className="border-t border-line/90 py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-6 md:px-10">
        <div className="max-w-3xl space-y-4">
          <Kicker>featured case studies</Kicker>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Production RAG and Agentic Systems
          </h2>
          <p className="text-base leading-relaxed text-slate-300 md:text-lg">
            Two backend-first systems built around retrieval-augmented generation and
            tool-calling agents - the architecture decisions, trade-offs, and current status of each.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <CaseStudy key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
