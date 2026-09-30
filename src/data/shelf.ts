export interface ShelfItem {
  title: string
  author: string
  category:
    | 'AI & Machine Learning'
    | 'Software Architecture'
    | 'Software Design & Craft'
  status: 'reading' | 'completed'
  period?: string
  takeaway?: string
}

export const shelfItems: ShelfItem[] = [
  {
    title: 'AI Engineering: Building Applications with Foundation Models',
    author: 'Chip Huyen',
    category: 'AI & Machine Learning',
    status: 'reading',
    period: 'Currently Reading',
    takeaway:
      'Practical engineering principles for evaluation, latency, caching, and building reliable enterprise systems on top of foundation models.',
  },
  {
    title: 'Software Architecture: The Hard Parts',
    author: 'Neal Ford, Mark Richards, Pramod Sadalage & Zhamak Dehghani',
    category: 'Software Architecture',
    status: 'reading',
    period: 'Currently Reading',
    takeaway:
      'Modern trade-off analysis for distributed architectures, data decomposition, transactional sagas, and service granularity.',
  },
  {
    title: 'Fundamentals of Software Architecture',
    author: 'Mark Richards & Neal Ford',
    category: 'Software Architecture',
    status: 'completed',
    period: 'Read this year',
    takeaway:
      'Comprehensive foundation covering architectural patterns, component cohesion, fitness functions, and engineering leadership.',
  },
  {
    title: 'Tidy First?: A Personal Exercise in Empirical Software Design',
    author: 'Kent Beck',
    category: 'Software Design & Craft',
    status: 'completed',
    period: 'Read this year',
    takeaway:
      'Pragmatic guide on when and how to tidy code before changing behavior, managing software economics, and separating structural changes from behavioral changes.',
  },
]
