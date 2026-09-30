export interface Project {
  slug: string
  title: string
  status: 'open-source' | 'live' | 'wip'
  description: string
  tags: string[]
  githubUrl: string
  liveUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'data-driven-cv',
    title: 'Data-Driven CV Engine',
    status: 'open-source',
    description:
      'Continuous integration pipeline and generator compiling structured career YAML data into customized PDFs and multi-language resumes.',
    tags: ['Python', 'LaTeX', 'YAML', 'GitHub Actions', 'CI/CD'],
    githubUrl: 'https://github.com/girordo/data-driven-cv',
    liveUrl:
      'https://github.com/girordo/data-driven-cv/blob/main/resumes/Tarcisio-Resume-All.pdf',
    featured: true,
  },
  {
    slug: 'nestjs-api',
    title: 'NestJS Enterprise API Architecture',
    status: 'open-source',
    description:
      'Robust backend API utilizing NestJS, Prisma ORM, Swagger OpenAPI documentation, JWT authentication, and Docker multi-stage containerization.',
    tags: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Docker', 'Swagger'],
    githubUrl: 'https://github.com/girordo/nestjs-api',
    featured: true,
  },
  {
    slug: 'microfrontends-with-react',
    title: 'Microfrontends Architecture with React',
    status: 'open-source',
    description:
      'Microfrontends architectural pattern implementation with React, exploring runtime isolation, shared dependency management, and decoupled deployment.',
    tags: ['React', 'JavaScript', 'Microfrontends', 'Architecture'],
    githubUrl: 'https://github.com/girordo/microfrontends-with-react',
    featured: true,
  },
  {
    slug: 'dotfiles',
    title: 'Developer Dotfiles & Linux Environment',
    status: 'open-source',
    description:
      'Personal Linux and developer workstation dotfiles, terminal configurations, shell scripts, and workflow optimizations.',
    tags: ['Shell', 'Linux', 'Zsh', 'Automation', 'Bash'],
    githubUrl: 'https://github.com/girordo/dotfiles',
    featured: true,
  },
]
