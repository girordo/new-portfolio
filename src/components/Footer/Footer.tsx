import { profile } from '../../data/profile'
import { Mail, FileText, ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../icons'

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full border-t border-white/[0.06] py-10 bg-slate-950/60 relative z-10 pb-24 sm:pb-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <p className="text-xs font-mono-jb text-slate-400">
              © {new Date().getFullYear()} {profile.name}
            </p>
            <p className="text-[11px] font-reading text-slate-500 mt-1">
              Engineered with React, Vite & Tailwind CSS. Inspired by craft &
              distributed systems.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              aria-label="Email"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={profile.contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              title="Resume"
            >
              <FileText className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-1 rounded text-slate-500 hover:text-slate-300 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
