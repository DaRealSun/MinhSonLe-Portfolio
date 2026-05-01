export const site = {
  name: 'Minh Son Le',
  shortName: 'Son',
  title: 'Backend Java Engineer',
  tagline: 'I build Spring Boot services, tune the JVM, and ship applied AI.',
  email: 'info.leminhson@gmail.com',
  phone: '(859) 786-5738',
  location: 'Washington DC – Baltimore Area',
  github: 'https://github.com/DaRealSun',
  linkedin: 'https://linkedin.com/in/son-leminh',
  resumeUrl: '/resume.pdf',
  profileImage: '/me/profile.jpg',
  aboutImage: '/me/with-duke.jpg',
  summary:
    'Backend Java engineer focused on Spring Boot services, JVM performance, and applied AI integration. I own services end-to-end — API design and database schema through deployment and on-call. Recent work centers on Retrieval Augmented Generation pipelines using Spring AI and LangChain4j, and modernizing concurrency with Java Virtual Threads.',
};

// Each skill: { label, icon } where icon is an iconify identifier from
// @iconify-json/logos (colored brand logos) or @iconify-json/simple-icons.
// Pass null for skills with no clean logo.
export type Skill = { label: string; icon: string | null };

export const skillGroups: { title: string; items: Skill[] }[] = [
  {
    title: 'Languages',
    items: [
      { label: 'Java 11/17/21', icon: 'logos:java' },
      { label: 'TypeScript', icon: 'logos:typescript-icon' },
      { label: 'JavaScript', icon: 'logos:javascript' },
      { label: 'Python', icon: 'logos:python' },
      { label: 'SQL', icon: 'simple-icons:postgresql' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { label: 'Spring Boot', icon: 'logos:spring-icon' },
      { label: 'Spring Data JPA', icon: 'logos:spring-icon' },
      { label: 'Spring Security', icon: 'logos:spring-icon' },
      { label: 'Spring AI', icon: 'logos:spring-icon' },
      { label: 'Hibernate', icon: 'logos:hibernate' },
      { label: 'PostgreSQL', icon: 'logos:postgresql' },
      { label: 'Apache Kafka', icon: 'logos:kafka-icon' },
      { label: 'Redis', icon: 'logos:redis' },
    ],
  },
  {
    title: 'JVM & Concurrency',
    items: [
      { label: 'Virtual Threads (Loom)', icon: 'logos:java' },
      { label: 'CompletableFuture', icon: 'logos:java' },
      { label: 'JDK Flight Recorder', icon: 'logos:java' },
      { label: 'GC tuning', icon: null },
      { label: 'JMH', icon: null },
    ],
  },
  {
    title: 'AI / ML',
    items: [
      { label: 'LangChain4j', icon: 'simple-icons:langchain' },
      { label: 'pgvector', icon: 'logos:postgresql' },
      { label: 'RAG', icon: null },
      { label: 'Model Context Protocol', icon: 'simple-icons:anthropic' },
      { label: 'TensorFlow', icon: 'logos:tensorflow' },
      { label: 'Keras', icon: 'simple-icons:keras' },
      { label: 'CNNs', icon: null },
      { label: 'MediaPipe', icon: 'simple-icons:google' },
    ],
  },
  {
    title: 'Testing',
    items: [
      { label: 'JUnit 5', icon: 'logos:java' },
      { label: 'Mockito', icon: null },
      { label: 'Testcontainers', icon: 'logos:docker-icon' },
      { label: 'Jest', icon: 'logos:jest' },
      { label: 'React Testing Library', icon: 'logos:react' },
    ],
  },
  {
    title: 'Observability',
    items: [
      { label: 'OpenTelemetry', icon: 'logos:opentelemetry-icon' },
      { label: 'Jaeger', icon: 'simple-icons:jaeger' },
      { label: 'Micrometer', icon: null },
    ],
  },
  {
    title: 'DevOps',
    items: [
      { label: 'Docker', icon: 'logos:docker-icon' },
      { label: 'Maven', icon: 'logos:maven' },
      { label: 'Gradle', icon: 'logos:gradle' },
      { label: 'GitHub Actions', icon: 'logos:github-actions' },
      { label: 'AWS', icon: 'logos:aws' },
      { label: 'Google Cloud', icon: 'logos:google-cloud' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { label: 'React', icon: 'logos:react' },
      { label: 'Redux Toolkit', icon: 'logos:redux' },
      { label: 'React Router', icon: 'logos:react-router' },
      { label: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
    ],
  },
];

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Health Insurance Care',
    location: 'California, US (Hybrid)',
    period: 'Jul 2019 – Oct 2025',
    bullets: [
      'Designed and built an AI document routing agent using Spring AI + LangChain4j with PostgreSQL pgvector. Cut average manual routing time from ~8 minutes to ~2 minutes per case.',
      'Owned 2 of 6 Spring Boot services in a monolith → event-driven Kafka migration. Designed the claim intake service end-to-end (REST API, schema, topic layout).',
      'Profiled hot paths with JFR, tuned GC, and removed N+1 queries with Hibernate fetch joins. Reduced peak GC pauses from ~180 ms to under 20 ms.',
      'Migrated request fan-out from ExecutorService to Java Virtual Threads after JMH benchmarking. Authored the team migration playbook.',
      'Implemented OAuth 2.0 + JWT SSO across 3 internal apps using Spring Security.',
      'Drove adoption of Testcontainers against real PostgreSQL, replacing H2 that was hiding production-only behavior.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Tristate Health Insurance Group',
    location: 'Cincinnati, OH',
    period: 'Sep 2018 – Apr 2019',
    bullets: [
      'Contributed React components and routing for a member-facing SPA serving ~10k monthly users.',
      'Picked Redux Toolkit + async thunks for the agent quoting tool after evaluating Context API and plain hooks.',
      'Implemented OAuth 2.0 sign-in/out with session expiration handling. Reduced login latency from ~2.1 s to 1.25 s.',
      'Improved Lighthouse performance score from 72 → 94 via code splitting and route-level lazy loading.',
      'Containerized the portal with Docker and deployed on Google Cloud behind Cloudflare for HTTPS + edge caching.',
    ],
  },
];

export const projects = [
  {
    title: 'profound-pipeline',
    blurb:
      'M&A-first cyber buyer-list intel for Cyber Profound (cybersecurity rollup). 12 mid-market cyber M&A advisors ranked by composite score: 75% deal-data signal (recent activity, sub-sector specialization, deal-size fit) + 25% NLP icing. Sentence-BERT (all-MiniLM-L6-v2 via @xenova/transformers) for thesis alignment, Z-scored against a 10-text generic-business null distribution with bootstrap CIs. Real cyber sub-sector multiple bands and 8 verified comp tombstones (8-K/proxy-disclosed advisors). Vitest 30/30, GitHub Actions nightly cron.',
    stack: [
      'Astro 5',
      'Tailwind',
      'TypeScript',
      'Sentence-BERT',
      'Transformers.js',
      'ONNX',
      'Cheerio',
      'Vitest',
      'Cloudflare Workers',
      'GitHub Actions',
    ],
    repo: 'https://github.com/DaRealSun/profound-pipeline',
    live: 'https://pipeline.sunhomelab.com',
  },
  {
    title: 'castellan-shadow',
    blurb:
      'Live attribution-grade dashboard for two public ETFs (CTEF, CTIF). Spring Boot 3.4 ETL scrapes the daily holdings tables on castellanetf.com and parses SEC Part F PDFs with Apache PDFBox; the schema models FLEX option contracts in a deduped table so the 1×2 ratio call spreads on DECK / JBL / MU / NCLH land with correct sign and FK linkage. Astro 5 + Tailwind frontend deployed to Cloudflare.',
    stack: [
      'Spring Boot 3.4',
      'Java 21',
      'Apache PDFBox',
      'Jsoup',
      'PostgreSQL',
      'Flyway',
      'Astro 5',
      'Tailwind',
      'Cloudflare',
    ],
    repo: 'https://github.com/DaRealSun/castellan-shadow',
    live: 'https://castellan-shadow.sunhomelab.com',
  },
  {
    title: 'virtualthread-benchmark-lab',
    blurb:
      'JMH benchmark suite comparing ExecutorService against Java Virtual Threads across I/O-bound, CPU-bound, and mixed workloads. Surfaces concrete throughput and latency tradeoffs and documents carrier-thread pinning behavior.',
    stack: ['Java 21', 'JMH', 'Project Loom'],
    repo: 'https://github.com/DaRealSun/virtualthread-benchmark-lab',
    live: null,
  },
  {
    title: 'ai-agent-service',
    blurb:
      'Spring Boot 3 service exposing a chat endpoint backed by an AI agent. LangChain4j for LLM orchestration, PostgreSQL + pgvector for RAG, MCP tools for the agent to search Java docs. Virtual threads enabled at the Tomcat layer.',
    stack: ['Spring Boot 3', 'LangChain4j', 'pgvector', 'MCP'],
    repo: 'https://github.com/DaRealSun/ai-agent-service',
    live: null,
  },
  {
    title: 'Smart Travel Planner',
    blurb:
      'Full-stack travel planning app that turns a destination and a few preferences into a day-by-day itinerary. Live demo deployed on my own infra.',
    stack: ['React', 'Spring Boot', 'PostgreSQL'],
    repo: 'https://github.com/DaRealSun/Smart-Travel-Planner',
    live: 'https://solotop.sunhomelab.com/',
  },
  {
    title: 'Netflix GPT',
    blurb:
      'Netflix-style streaming UI with GPT-powered movie search. React + Redux Toolkit on the frontend, Spring Boot 3 backend handling JWT auth and a server-side TMDB proxy that keeps API tokens off the client. OpenAI-driven recommendation flow turns a free-text mood into a curated browse row.',
    stack: ['React', 'Redux Toolkit', 'Spring Boot', 'PostgreSQL', 'JWT', 'OpenAI'],
    repo: 'https://github.com/DaRealSun/netflix-gpt',
    live: null,
  },
  {
    title: 'Job Tracker',
    blurb:
      'Full-stack job-application tracker. Spring Boot 3 + PostgreSQL backend with JWT auth, REST API for CRUD on applications. React frontend with status pipeline (Applied → Phone → Onsite → Offer), follow-up reminders, and interview prep notes per company.',
    stack: ['React', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'JWT'],
    repo: 'https://github.com/DaRealSun?tab=repositories',
    live: null,
  },
  {
    title: 'Live Facial Emotion Recognition',
    blurb:
      'Undergraduate research at NKU under Dr. Junxiu Zhou. Custom 5-layer CNN in TensorFlow/Keras trained on FER2013 (~36k images). Integrated MediaPipe Face Mesh for real-time tracking at 24 fps. Improved baseline accuracy from 66.61% → 71.20%, peaking at 73.40% in optimal lighting.',
    stack: ['TensorFlow', 'Keras', 'MediaPipe', 'Python'],
    repo: null,
    live: null,
    advisor: {
      name: 'Dr. Junxiu Zhou',
      url: 'https://www.linkedin.com/in/junxiu-zhou-7b527a103/',
    },
  },
];

export const education = {
  school: 'Northern Kentucky University',
  degree: 'B.S. Computer Science, Minor in Mathematics',
  gpa: '3.7',
  graduated: 'May 2025',
  honors: [
    'International Merit Scholarship',
    'EDGE Award',
    'Dr. Charles Frank Scholarship',
    'Sehnert-Pugh Scholarship',
  ],
};

export const certifications = [
  {
    name: 'Oracle Certified Professional, Java SE 11 Developer',
    date: 'Feb 2026',
    score: '86%',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=EF8BFA8A77FE754EDF83F731EDB055D6F56C2C058435A4B9B45B1680D982B4F7',
  },
  {
    name: 'Java Certified Foundations Associate',
    date: 'Nov 2025',
    score: null,
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=9FEE79C3BEE8AF1FCF3B74A72C00BD39F75B5E5BC5F1B607F19DB9461E7ED004',
  },
];
