import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { profile } from '../../data/profile'
import { Command, Menu, X, Sparkles } from 'lucide-react'

interface NavbarProps {
  onOpenCommand: () => void
}

export const Navbar = ({ onOpenCommand }: NavbarProps) => {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'about', path: '/' },
    { name: 'work', path: '/work' },
    { name: 'projects', path: '/projects' },
    { name: 'lab', path: '/lab' },
    { name: 'shelf', path: '/shelf' },
  ]

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <Link
          to="/"
          className="group inline-flex items-center gap-2.5 shrink-0"
          aria-label="Home"
        >
          <div className="w-5 h-5 rounded-sm bg-gradient-to-tr from-emerald-500 via-sky-500 to-purple-600 flex items-center justify-center text-[10px] font-mono-jb font-bold text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
            TG
          </div>
          <span className="text-[11px] font-mono-jb uppercase tracking-[0.24em] text-slate-400 group-hover:text-slate-100 transition-colors">
            {profile.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-5">
            {navLinks.map((link) => {
              const active = isActive(link.path)
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[11px] font-mono-jb uppercase tracking-[0.22em] py-1 transition-colors relative ${
                    active
                      ? 'text-emerald-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-emerald-400/80 rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2 pl-2 border-l border-white/[0.08]">
            <button
              type="button"
              onClick={onOpenCommand}
              title="Open command palette (⌘K)"
              className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-mono-jb tracking-wider text-slate-400 hover:text-slate-100 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] transition-all"
            >
              <Command className="w-3 h-3 text-emerald-400" />
              <span>⌘K</span>
            </button>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={onOpenCommand}
            className="p-1.5 rounded-md text-slate-400 hover:text-slate-100 bg-white/[0.04] border border-white/[0.08]"
            aria-label="Open command palette"
          >
            <Command className="w-3.5 h-3.5 text-emerald-400" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-md text-slate-400 hover:text-slate-100"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-background/95 backdrop-blur-xl px-4 py-4 space-y-2 animate-fadeIn">
          {navLinks.map((link) => {
            const active = isActive(link.path)
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-[12px] font-mono-jb uppercase tracking-[0.2em] transition-colors ${
                  active
                    ? 'bg-emerald-500/10 text-emerald-400 font-semibold'
                    : 'text-slate-300 hover:bg-white/[0.04]'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
export default Navbar
