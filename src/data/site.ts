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
  summary:
    'Backend Java engineer focused on Spring Boot services, JVM performance, and applied AI integration. I own services end-to-end — API design and database schema through deployment and on-call. Recent work centers on Retrieval Augmented Generation pipelines using Spring AI and LangChain4j, and modernizing concurrency with Java Virtual Threads.',
};

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Java 11/17/21', 'TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    title: 'Backend',
    items: [
      'Spring Boot',
      'Spring Data JPA',
      'Spring Security',
      'Spring AI',
      'Hibernate',
      'PostgreSQL',
      'Apache Kafka',
      'Redis',
    ],
  },
  {
    title: 'JVM & Concurrency',
    items: [
      'Virtual Threads (Loom)',
      'CompletableFuture',
      'JDK Flight Recorder',
      'GC tuning',
      'JMH',
    ],
  },
  {
    title: 'AI / ML',
    items: [
      'LangChain4j',
      'pgvector',
      'RAG',
      'Model Context Protocol',
      'TensorFlow',
      'Keras',
      'CNNs',
      'MediaPipe',
    ],
  },
  {
    title: 'Testing',
    items: ['JUnit 5', 'Mockito', 'Testcontainers', 'Jest', 'React Testing Library'],
  },
  {
    title: 'Observability',
    items: ['OpenTelemetry', 'Jaeger', 'Micrometer'],
  },
  {
    title: 'DevOps',
    items: ['Docker', 'Maven', 'Gradle', 'GitHub Actions', 'AWS', 'Google Cloud'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Redux Toolkit', 'React Router', 'Tailwind CSS'],
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
    title: 'virtualthread-benchmark-lab',
    blurb:
      'JMH benchmark suite comparing ExecutorService against Java Virtual Threads across I/O-bound, CPU-bound, and mixed workloads. Surfaces concrete throughput and latency tradeoffs and documents carrier-thread pinning behavior.',
    stack: ['Java 21', 'JMH', 'Project Loom'],
    repo: 'https://github.com/DaRealSun/virtualthread-benchmark-lab',
    live: null,
    featured: true,
  },
  {
    title: 'ai-agent-service',
    blurb:
      'Spring Boot 3 service exposing a chat endpoint backed by an AI agent. LangChain4j for LLM orchestration, PostgreSQL + pgvector for RAG, MCP tools for the agent to search Java docs. Virtual threads enabled at the Tomcat layer.',
    stack: ['Spring Boot 3', 'LangChain4j', 'pgvector', 'MCP'],
    repo: 'https://github.com/DaRealSun/ai-agent-service',
    live: null,
    featured: true,
  },
  {
    title: 'Smart Travel Planner',
    blurb:
      'Full-stack travel planning app that turns a destination and a few preferences into a day-by-day itinerary. Live demo deployed on my own infra.',
    stack: ['React', 'Spring Boot', 'PostgreSQL'],
    repo: 'https://github.com/DaRealSun/Smart-Travel-Planner',
    live: 'https://solotop.sunhomelab.com/',
    featured: true,
  },
  {
    title: 'Live Facial Emotion Recognition',
    blurb:
      'Undergraduate research at NKU under Dr. Junxiu Zhou. Custom 5-layer CNN in TensorFlow/Keras trained on FER2013 (~36k images). Integrated MediaPipe Face Mesh for real-time tracking at 24 fps. Improved baseline accuracy from 66.61% → 71.20%, peaking at 73.40% in optimal lighting.',
    stack: ['TensorFlow', 'Keras', 'MediaPipe', 'Python'],
    repo: null,
    live: null,
    featured: false,
  },
  {
    title: 'Netflix GPT',
    blurb:
      'Netflix-style streaming UI with GPT-powered movie search. React + Redux Toolkit on the frontend, Spring Boot 3 backend handling JWT auth and a server-side TMDB proxy that keeps API tokens off the client. OpenAI-driven recommendation flow turns a free-text mood ("a slow burn thriller, no jump scares") into a curated browse row.',
    stack: ['React', 'Redux Toolkit', 'Spring Boot', 'PostgreSQL', 'JWT', 'OpenAI'],
    repo: 'https://github.com/DaRealSun/netflix-gpt',
    live: null,
    featured: true,
  },
  {
    title: 'Job Tracker',
    blurb:
      'Full-stack job-application tracker. Spring Boot 3 + PostgreSQL backend with JWT auth, REST API for CRUD on applications. React frontend with status pipeline (Applied → Phone → Onsite → Offer), follow-up reminders, and interview prep notes per company.',
    stack: ['React', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'JWT'],
    repo: 'https://github.com/DaRealSun?tab=repositories',
    live: null,
    featured: true,
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
  },
  {
    name: 'Java Certified Foundations Associate',
    date: 'Nov 2025',
    score: null,
  },
];
