import { motion } from 'framer-motion'
import { experiences } from '../data/experience'
import { profile } from '../data/profile'
import { ArrowUpRight, FileText, CheckCircle2 } from 'lucide-react'

export const WorkPage = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        {/* Header */}
        <section className="space-y-3">
          <span className="text-[10px] uppercase tracking-[0.24em] font-mono-jb text-emerald-400">
            Trajectory & Engineering
          </span>
          <h1 className="font-serif italic text-3xl sm:text-4xl text-slate-100">
            Work Experience
          </h1>
          <p className="font-reading text-sm text-slate-400 leading-relaxed max-w-xl">
            A track record of architecting distributed web applications,
            modernizing legacy systems, and establishing resilient cloud &
            infrastructure foundations.
          </p>
          <div className="pt-2">
            <a
              href={profile.contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono-jb text-emerald-400 hover:text-emerald-300 underline underline-offset-4 decoration-emerald-500/40"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download printable resume (PDF)</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </section>

        {/* Timeline */}
        <section className="space-y-12 pt-6 border-t border-white/[0.06]">
          {experiences.map((exp, idx) => (
            <article
              key={idx}
              className="relative pl-6 sm:pl-8 border-l border-white/[0.1] space-y-4"
            >
              {/* Bullet indicator */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-slate-950" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h2 className="font-serif text-xl text-slate-100 font-medium">
                    {exp.role}
                  </h2>
                  <div className="flex items-center gap-2 text-xs font-mono-jb text-emerald-400/90 mt-0.5">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline underline-offset-2 flex items-center gap-1"
                      >
                        {exp.company}
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <span>{exp.company}</span>
                    )}
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-400">{exp.location}</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono-jb text-slate-400 uppercase tracking-widest sm:text-right shrink-0">
                  {exp.period}
                </span>
              </div>

              <p className="font-reading text-sm text-slate-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Achievements / Responsibilities */}
              <ul className="space-y-2 pt-1">
                {exp.details.map((item, aIdx) => (
                  <li
                    key={aIdx}
                    className="flex items-start gap-2.5 text-xs font-reading text-slate-300 leading-normal"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-mono-jb text-slate-400 bg-white/[0.03] border border-white/[0.06]"
                  >
                    {tech}
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
export default WorkPage
