export type EducationItem = {
  degree: string
  institution: string
  period: string
  location?: string
  status?: 'ongoing' | 'completed'
}

export type Profile = {
  name: string
  handle: string
  title: string
  shortBio: string
  fullBio: string
  currentCompany: {
    name: string
    url: string
    role: string
    client?: string
  }
  education: EducationItem[]
  contact: {
    email: string
    website: string
    resumeUrl: string
    github: string
    linkedin: string
  }
  now: {
    role: string
    academic: string
    reading: string
    exploring: string
    location: string
  }
  interests: string
}

export const profile: Profile = {
  name: 'Tarcísio Giroldo',
  handle: 'girordo',
  title: 'Senior Software Engineer',
  shortBio:
    "I'm a senior software engineer with over 8 years of experience across several types of business. Mainly focused on TypeScript and its ecosystem, also using Python as a side language.",
  fullBio:
    'Senior software engineer with over 8 years of experience across diverse industries. Currently pursuing an MBA in Software Architecture & Solutions Architecture with AI at XP Educação. Mainly focused on TypeScript, React, Python, and software architecture. Experienced in refactoring applications, unit testing, performance, observability, and cloud/DevOps environments (GCP, AWS, Docker, Terraform, Ansible, Proxmox, LXC). Exploring AI engineering: stateful orchestration with LangGraph and automated evaluation harnesses. In my free time, I like to read and spend time with my dog, family, and friends.',
  currentCompany: {
    name: 'Instituto Eldorado',
    url: 'https://www.eldorado.org.br/',
    role: 'Senior Software Engineer',
    client: 'Motorola (Lenovo)',
  },
  education: [
    {
      degree: 'MBA in Software Architecture & Solutions Architecture with AI',
      institution: 'XP Educação',
      period: 'In progress',
      status: 'ongoing',
    },
    {
      degree: 'BSc in Biomedical Informatics',
      institution: 'Universidade de São Paulo (USP)',
      period: '2012 – 2020',
      location: 'Ribeirão Preto, SP, Brazil',
      status: 'completed',
    },
  ],
  contact: {
    email: 'tsgiroldo@gmail.com',
    website: 'https://giroldo.dev',
    resumeUrl:
      'https://github.com/girordo/data-driven-cv/blob/main/resumes/Tarcisio-Resume-All.pdf',
    github: 'https://github.com/girordo',
    linkedin: 'https://www.linkedin.com/in/targiroldo/',
  },
  now: {
    role: 'Engineering lead for enterprise solutions for Motorola at Instituto Eldorado',
    academic:
      'MBA in Software Architecture & Solutions Architecture with AI at XP Educação',
    reading:
      'AI Engineering: Building Applications with Foundation Models & Software Architecture: The Hard Parts',
    exploring:
      'AI Engineering: stateful agent workflows with LangGraph, LLM test harnesses & evaluation suites',
    location: 'Ribeirão Preto, Brazil (Remote)',
  },
  interests:
    "I'm studying AI Engineering and distributed systems · In my free time, I like to read and spend time with my dog, family, and friends.",
}
