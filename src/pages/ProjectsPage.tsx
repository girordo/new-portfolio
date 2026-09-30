import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects, Project } from '../data/projects'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '../components/icons'

export const ProjectsPage = () => {
  const [filter, setFilter] = useState<'all' | 'open-source' | 'live' | 'wip'>(
    'all',
  )

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.status === filter)

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'open-source':
        return (
          <span className="text-[9px] font-mono-jb uppercase tracking-widest text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-1.5 py-0.5 rounded">
            open source
          </span>
        )
      case 'live':
        return (
          <span className="text-[9px] font-mono-jb uppercase tracking-widest text-sky-400 bg-sky-400/10 border border-sky-400/20 px-1.5 py-0.5 rounded">
            live
          </span>
        )
      case 'wip':
        return (
          <span className="text-[9px] font-mono-jb uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-1.5 py-0.5 rounded">
            wip
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-10"
      >
        {/* Header */}
        <section className="space-y-3">
          <span className="text-[10px] uppercase tracking-[0.24em] font-mono-jb text-sky-400">
            Portfolio & Repositories
          </span>
          <h1 className="font-serif italic text-3xl sm:text-4xl text-slate-100">
            Projects
          </h1>
          <p className="font-reading text-sm text-slate-400 leading-relaxed max-w-xl">
            Software architectures, tooling, infrastructure templates, and
            experiments crafted for speed, stability, and developer ergonomics.
          </p>
        </section>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
          {(['all', 'open-source', 'live', 'wip'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-2.5 py-1 rounded-md text-[10px] font-mono-jb uppercase tracking-wider transition-all ${
                filter === tab
                  ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <section className="space-y-6">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all space-y-3 group"
            >
              <div className="flex items-baseline justify-between gap-3">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h2 className="font-serif text-lg text-slate-100 font-medium group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h2>
                  {getStatusBadge(project.status)}
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-100 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                      title="Live Link"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="font-reading text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-mono-jb text-slate-400 bg-white/[0.03] border border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>
      </motion.div>
    </div>
  )
}
export default ProjectsPage
