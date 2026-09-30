import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero/Hero'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { labCategories } from '../data/lab'
import { shelfItems } from '../data/shelf'
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  Radio,
  Mail,
  FileText,
  GraduationCap,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/icons'

export const HomePage = () => {
  const featuredProjects = projects.slice(0, 3)
  const featuredLab = labCategories[0].items
    .concat(labCategories[1].items.slice(0, 1))
    .slice(0, 3)
  const featuredShelf = shelfItems

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-14"
      >
        {/* Hero Component */}
        <Hero />

        {/* 3 Columns Grid: Building, Lab, Reading */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 gap-x-6 sm:gap-x-8 pt-2 border-t border-white/[0.06]">
          {/* Building */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.22em] font-mono-jb text-slate-400 mb-5 flex items-center gap-1.5">
              <span>Building</span>
            </h3>
            <ul className="space-y-4">
              {featuredProjects.map((p) => (
                <li key={p.slug}>
                  <Link to="/projects" className="group block">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif text-[15px] text-slate-200 group-hover:text-emerald-300 group-hover:underline underline-offset-[3px] transition-colors">
                        {p.title}
                      </span>
                    </div>
                    <div className="text-[12px] font-reading text-slate-400 leading-snug mt-1">
                      {p.description}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] font-mono-jb text-slate-400 hover:text-emerald-400 transition-colors mt-5 group"
            >
              <span>all projects</span>
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Homelab & Infra */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.22em] font-mono-jb text-slate-400 mb-5">
              Lab & Infra
            </h3>
            <ul className="space-y-4">
              {featuredLab.map((l) => (
                <li key={l.name}>
                  <Link to="/lab" className="group block">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif text-[15px] text-slate-200 group-hover:text-sky-300 group-hover:underline underline-offset-[3px] transition-colors">
                        {l.name}
                      </span>
                    </div>
                    <div className="text-[12px] font-reading text-slate-400 leading-snug mt-1">
                      {l.description}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/lab"
              className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] font-mono-jb text-slate-400 hover:text-sky-400 transition-colors mt-5 group"
            >
              <span>lab details</span>
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Reading */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.22em] font-mono-jb text-slate-400 mb-5">
              Reading
            </h3>
            <ul className="space-y-4">
              {featuredShelf.map((b) => (
                <li key={b.title}>
                  <Link to="/shelf" className="group block">
                    <div className="font-serif text-[15px] text-slate-200 group-hover:text-purple-300 group-hover:underline underline-offset-[3px] leading-snug transition-colors">
                      {b.title}
                    </div>
                    <div className="text-[11px] font-reading italic text-slate-400 mt-0.5">
                      {b.author}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/shelf"
              className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] font-mono-jb text-slate-400 hover:text-purple-400 transition-colors mt-5 group"
            >
              <span>shelf</span>
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>

        {/* Now Section */}
        <section className="pt-8 border-t border-white/[0.06]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[10px] uppercase tracking-[0.22em] font-mono-jb text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Now</span>
            </h2>
            <span className="text-[10px] font-mono-jb text-slate-500 uppercase tracking-widest">
              {profile.now.location}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm space-y-3">
            <div className="flex items-start gap-3">
              <Radio className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase tracking-wider font-mono-jb text-slate-400 block">
                  Current Role & Focus
                </span>
                <p className="font-reading text-xs text-slate-200 mt-0.5">
                  {profile.now.role}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 border-t border-white/[0.04]">
              <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase tracking-wider font-mono-jb text-slate-400 block">
                  Postgraduate Specialization
                </span>
                <p className="font-reading text-xs text-slate-200 mt-0.5">
                  {profile.now.academic}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 border-t border-white/[0.04]">
              <BookOpen className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase tracking-wider font-mono-jb text-slate-400 block">
                  Currently Reading
                </span>
                <p className="font-reading text-xs text-slate-300 mt-0.5">
                  {profile.now.reading}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 border-t border-white/[0.04]">
              <Sparkles className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase tracking-wider font-mono-jb text-slate-400 block">
                  Exploring & Experimenting
                </span>
                <p className="font-reading text-xs text-slate-300 mt-0.5">
                  {profile.now.exploring}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Minimalist Connect Section */}
        <section
          id="connect"
          className="pt-8 border-t border-white/[0.06] space-y-4"
        >
          <h2 className="text-[10px] uppercase tracking-[0.22em] font-mono-jb text-slate-400">
            Connect
          </h2>
          <p className="font-reading text-[15px] leading-[1.75] text-slate-300">
            Reach me directly at{' '}
            <a
              href={`mailto:${profile.contact.email}`}
              className="text-slate-100 font-medium underline underline-offset-[3px] decoration-emerald-500/50 hover:decoration-emerald-400 transition-colors"
            >
              {profile.contact.email}
            </a>
            , explore my career history in{' '}
            <Link
              to="/work"
              className="text-slate-100 font-medium underline underline-offset-[3px] decoration-emerald-500/50 hover:decoration-emerald-400 transition-colors"
            >
              work experience
            </Link>
            , or check out my full resume below.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono-jb text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono-jb text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={profile.contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono-jb text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF (All)</span>
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono-jb text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </section>
      </motion.div>
    </div>
  )
}
export default HomePage
