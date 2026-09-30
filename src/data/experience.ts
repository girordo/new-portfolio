export interface ExperienceItem {
  period: string
  role: string
  company: string
  companyUrl?: string
  location: string
  summary: string
  details: string[]
  technologies: string[]
}

export const experiences: ExperienceItem[] = [
  {
    period: 'Nov 2025 – Present',
    role: 'Senior Software Engineer',
    company: 'Instituto Eldorado',
    companyUrl: 'https://www.eldorado.org.br/',
    location: 'Campinas, Brazil (Remote)',
    summary:
      'Serving as technical reference and engineering lead for a team of 7 developers building enterprise products for Motorola (Lenovo), mentoring engineers and shaping architecture.',
    details: [
      'Serving as technical reference and engineering lead for a team of 7 developers building enterprise products for Motorola (Lenovo), mentoring interns and junior engineers.',
      'Architected scalable distributed systems leveraging GCP Pub/Sub for asynchronous event-driven messaging across decoupled microservice boundaries, enhancing fault tolerance.',
      'Provisioned and managed hybrid infrastructure across GCP (Cloud Run, Cloud Storage, Cloud SQL PostgreSQL) and dedicated bare-metal VMs monitored via PM2, leveraging Terraform for declarative IaC automation.',
      'Integrated AI-driven development workflows leveraging Google Gemini and engineering best practices, accelerating delivery velocity while preserving strict code review boundaries.',
      'Refactored frontend architecture by leveraging Zustand for global state and TanStack Query for asynchronous cache synchronization, enhancing data throughput and UI responsiveness.',
      'Engineered a drag-and-drop device layout configuration engine leveraging @dnd-kit, establishing clean component boundaries with Ant Design and Tailwind CSS 4.',
      'Collaborated with Motorola product stakeholders to define technical boundaries for complex features, translating domain constraints into robust system architecture.',
    ],
    technologies: [
      'TypeScript',
      'React',
      'Python',
      'FastAPI',
      'GCP (Cloud Run, Pub/Sub, GCS, Cloud SQL)',
      'Terraform',
      'Tailwind CSS 4',
      'Zustand',
      'TanStack Query',
      'PM2',
      'Ant Design',
      'Gemini AI',
    ],
  },
  {
    period: 'Jan 2024 – Nov 2025',
    role: 'Senior Software Engineer',
    company: 'Bosch',
    companyUrl: 'https://www.bosch.com.br/',
    location: 'Campinas, Brazil (Remote)',
    summary:
      'Modernized enterprise software frontend and automated testing pipelines for Bosch / ETAS.',
    details: [
      'Modernized legacy frontend by embedding React components into an existing jQuery architecture, establishing clean interface boundaries between legacy scripts and modern reactive interfaces.',
      'Adapted and implemented enterprise design system from ETAS (Bosch company), standardizing UI components and enhancing user experience (UX).',
      'Designed automated testing strategies for legacy components and authored comprehensive E2E integration tests using Selenium.',
      'Conducted rigorous peer code reviews to ensure code quality, architectural consistency, and team-wide engineering excellence.',
      'Delivered features and bug fixes iterated through SCRUM sprints via Jira, maintaining CI/CD automated pipelines with Jenkins.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'JavaScript',
      'React',
      'Selenium',
      'Jenkins',
      'ETAS Design System',
      'GitHub Copilot',
    ],
  },
  {
    period: 'Jul 2022 – Jan 2024',
    role: 'Frontend Engineer',
    company: 'Spocket',
    companyUrl: 'https://www.spocket.co/',
    location: 'Vancouver, Canada (Remote)',
    summary:
      'Engineered fullstack and frontend platforms, generative AI pipelines with Celery, and streamlined AWS CI/CD pipelines.',
    details: [
      'Architected asynchronous processing pipelines in Django leveraging Celery to decouple long-running generative AI (GPT) tasks.',
      'Participated in bootstrapping new products (supplier-facing Next.js apps and Django/React platforms), defining component boundaries, boilerplate scaffolding, and the core design system.',
      'Refactored CI/CD pipelines migrating execution environments from CircleCI to GitHub Actions with AWS S3 and CloudFront, cutting build times by 50% (~15 minutes faster), substantially reducing infrastructure billing.',
      'Enhanced client-side observability and error tracing leveraging Sentry, resolving critical exceptions across application boundaries to achieve an 80% reduction in production errors and warnings.',
      'Modernized legacy codebase by refactoring class-based components to modern functional React with Hooks, React Query, and Redux/Context API, enhancing runtime performance and maintainability.',
      'Scaled unit test coverage to 80% with Jest and React Testing Library (RTL) leveraging GitHub Copilot to rapidly synthesize test suites for complex edge cases.',
    ],
    technologies: [
      'TypeScript',
      'React',
      'Next.js',
      'Python',
      'Django',
      'Celery',
      'AWS (S3, CloudFront, Amplify)',
      'GitHub Actions',
      'Sentry',
      'Jest / RTL',
    ],
  },
  {
    period: 'Apr 2021 – Jul 2022',
    role: 'Software Engineer',
    company: 'Dasa',
    companyUrl: 'https://dasa.com.br/',
    location: 'São Paulo, Brazil (Remote)',
    summary:
      'Engineered genomic examination tracking platform for bioinformatics and clinical genetics teams.',
    details: [
      'Engineered a genomic examination tracking platform for bioinformatics and clinical genetics teams, building visual pipeline interfaces to monitor end-to-end genetic sequencing workflows.',
      'Refactored client state architecture by decoupling global state from Redux ("unreduxing"), leveraging React Query for server cache synchronization and Context API for local state, eliminating unnecessary boilerplate.',
      'Integrated Dasa custom design system with Ant Design UI and styled-components, refactoring legacy class components into modern functional components with PropTypes validation.',
      'Established a comprehensive unit testing culture from a zero-coverage baseline, engineering test suites with Jest and React Testing Library (RTL) to reach 80% code coverage.',
      'Optimized CI/CD automation pipelines in Jenkins, embedding SonarQube code quality gates and Fortify security analysis while reducing build execution latency by 30%.',
    ],
    technologies: [
      'JavaScript (ES6+)',
      'React',
      'React Query (TanStack)',
      'styled-components',
      'Ant Design',
      'Jest / RTL',
      'Jenkins',
      'SonarQube',
      'Fortify',
    ],
  },
  {
    period: 'Aug 2020 – Apr 2021',
    role: 'Full Stack Engineer',
    company: 'Softwrap',
    location: 'São Paulo, Brazil (Remote)',
    summary:
      'Led development of mobile and web applications with React Native, Node.js, and Firebase.',
    details: [
      'Coordinated a team of 3 developers for the development of a hybrid mobile application using React Native and Firebase for meal tickets.',
      'Mentored and supported junior developers across code quality and mobile delivery.',
      'Engineered pixel-perfect React Native accounting applications with strict accountability standards.',
    ],
    technologies: [
      'JavaScript',
      'TypeScript',
      'React',
      'React Native',
      'Node.js',
      'Firebase',
      'Docker',
    ],
  },
  {
    period: 'Feb 2020 – Jun 2020',
    role: 'Full Stack Engineer',
    company: 'SmartEnvios',
    location: 'Ribeirão Preto, Brazil',
    summary:
      'Built fullstack web crawlers, AWS infrastructure, and company website using Gatsby & TailwindCSS.',
    details: [
      'Created company website using Gatsby and TailwindCSS.',
      'Developed web crawlers using Node.js, Puppeteer and Cheerio for data scraping and automated crawling.',
      'Deployed on AWS LightSail, uploading exchange data to S3 and registering operations in PostgreSQL, with PM2 process monitoring.',
    ],
    technologies: [
      'JavaScript',
      'React',
      'Gatsby',
      'TailwindCSS',
      'Node.js',
      'Puppeteer',
      'PostgreSQL',
      'MongoDB',
      'Docker',
      'AWS LightSail',
      'S3',
      'PM2',
    ],
  },
  {
    period: 'In progress',
    role: 'MBA in Software Architecture & Solutions Architecture with AI',
    company: 'XP Educação',
    location: 'Remote, Brazil',
    summary:
      'Executive specialization in enterprise software architecture, cloud solution design, and foundation model integration.',
    details: [
      'Focusing on enterprise software architecture patterns, trade-off analysis, modularity, and distributed systems decomposition.',
      'Studying AI Engineering & Solutions Architecture: integrating foundation models into enterprise architectures with deterministic controls, LangGraph cyclic state machines, and automated evaluation harnesses.',
      'Applying modern practices in data governance, API design, security, and cloud-native topologies.',
    ],
    technologies: [
      'Software Architecture',
      'Solutions Architecture',
      'AI Engineering',
      'LangGraph',
      'Foundation Models',
      'Distributed Systems',
    ],
  },
  {
    period: '2012 – 2020',
    role: 'BSc in Biomedical Informatics & Researcher',
    company: 'Universidade de São Paulo (USP)',
    companyUrl: 'https://www.usp.br/',
    location: 'Ribeirão Preto, SP, Brazil',
    summary:
      'BSc degree with focus on bioinformatics research, data analysis, Linux server administration, and computer science foundations.',
    details: [
      'Worked as an intern researcher in bioinformatics, analyzing genomic and biomedical datasets using R (ggplot2, tidyr, dplyr, Bioconductor packages limma and GEOquery) and building dashboards with Shiny.',
      'Strengthened Linux core and shell scripting while managing virtual machines and administrating local lab servers.',
      'Completed rigorous curriculum in Algorithms and Data Structures, OOP, Databases and SQL, Machine Learning, Operating Systems, and Distributed Systems.',
      'Learned programming foundations in C, C++, Java, and R.',
    ],
    technologies: [
      'Linux Administration',
      'Shell Scripting',
      'R (Bioconductor, ggplot2, Shiny)',
      'C / C++',
      'Algorithms & Data Structures',
      'Operating Systems',
      'Distributed Systems',
      'SQL',
    ],
  },
]
