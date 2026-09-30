export interface LabCategory {
  title: string
  description: string
  items: {
    name: string
    description: string
    tags: string[]
  }[]
}

export const labCategories: LabCategory[] = [
  {
    title: 'Virtualization & Homelab',
    description:
      'Personal home server setup used for running self-hosted services, testing new stacks, and experimenting with virtualized environments.',
    items: [
      {
        name: 'Proxmox VE & LXC Containers',
        description:
          'Running a dedicated home server hypervisor using Proxmox VE, utilizing lightweight Linux Containers (LXC) for near-native CPU and memory efficiency.',
        tags: ['Proxmox VE', 'LXC', 'Debian / Ubuntu', 'Virtualization'],
      },
      {
        name: 'Docker & Docker Compose',
        description:
          'Standardizing service deployments with multi-stage Dockerfiles and docker-compose files for local development, homelab services, and microservices.',
        tags: ['Docker', 'docker-compose', 'Containers'],
      },
      {
        name: 'Linux Administration & Shell Scripting',
        description:
          'Deep Linux core honed since academic research at USP lab servers and continuously used across homelab, remote bare-metal VMs, and workstations.',
        tags: [
          'Bash',
          'Shell Script',
          'Linux Administration',
          'Zsh / Dotfiles',
        ],
      },
    ],
  },
  {
    title: 'Infrastructure as Code & Cloud',
    description:
      'Cloud platforms and declarative automation used in production at Instituto Eldorado, Spocket, and personal infrastructure.',
    items: [
      {
        name: 'Google Cloud Platform (GCP)',
        description:
          'Production cloud architecture leveraging Cloud Run for serverless containers, Pub/Sub for asynchronous event-driven decoupling, Cloud Storage (GCS), and Cloud SQL PostgreSQL.',
        tags: [
          'Cloud Run',
          'Pub/Sub',
          'Cloud Storage (GCS)',
          'Cloud SQL',
          'GCP',
        ],
      },
      {
        name: 'Terraform & Ansible (IaC)',
        description:
          'Declarative infrastructure as code using Terraform for cloud resource management and Ansible for automated node and server configuration.',
        tags: ['Terraform', 'Ansible', 'IaC'],
      },
      {
        name: 'Amazon Web Services (AWS)',
        description:
          'Architecting and deploying systems on AWS S3, CloudFront CDN distributions, EC2 virtual machines, LightSail instances, and Amplify.',
        tags: ['AWS S3', 'CloudFront', 'EC2', 'LightSail', 'Amplify'],
      },
      {
        name: 'Edge & Static Hosting',
        description:
          'Deploying and routing applications and domains through Cloudflare, Vercel, and Netlify.',
        tags: ['Cloudflare', 'Vercel', 'Netlify'],
      },
    ],
  },
  {
    title: 'CI/CD, Observability & Quality',
    description:
      'Pipelines and tools used to guarantee code security, quality standards, and automated deployment.',
    items: [
      {
        name: 'Continuous Integration & Deployment',
        description:
          'Engineering automated pipelines in GitHub Actions, Jenkins, and CircleCI, cutting build times and eliminating manual deployments.',
        tags: ['GitHub Actions', 'Jenkins', 'CircleCI'],
      },
      {
        name: 'Quality & Security Gates',
        description:
          'Integrating SonarQube automated quality gates and Fortify security analysis into pipelines to prevent vulnerabilities and technical debt.',
        tags: ['SonarQube', 'Fortify', 'Code Quality'],
      },
      {
        name: 'Observability & Process Management',
        description:
          'Client-side error tracking with Sentry (achieving an 80% reduction in production errors) and process monitoring on VMs with PM2.',
        tags: ['Sentry', 'PM2', 'Observability'],
      },
    ],
  },
]
