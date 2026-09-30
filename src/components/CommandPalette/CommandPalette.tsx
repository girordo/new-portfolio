import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Search,
  FileText,
  Mail,
  Compass,
  Briefcase,
  Layers,
  Server,
  BookOpen,
  Check,
  X,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../icons'
import { profile } from '../../data/profile'

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

interface CommandItem {
  id: string
  title: string
  subtitle?: string
  category: 'Navigation' | 'Quick Actions'
  icon: any
  action: () => void
}

export const CommandPalette = ({ isOpen, onClose }: CommandPaletteProps) => {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const items: CommandItem[] = [
    {
      id: 'nav-home',
      title: 'About & Overview',
      subtitle: 'Home page, biography, and "Now" updates',
      category: 'Navigation',
      icon: Compass,
      action: () => {
        navigate('/')
        onClose()
      },
    },
    {
      id: 'nav-work',
      title: 'Career & Work Experience',
      subtitle: 'Instituto Eldorado, cloud architecture, and history',
      category: 'Navigation',
      icon: Briefcase,
      action: () => {
        navigate('/work')
        onClose()
      },
    },
    {
      id: 'nav-projects',
      title: 'Projects & Open Source',
      subtitle: 'Software engineering, tools, and libraries',
      category: 'Navigation',
      icon: Layers,
      action: () => {
        navigate('/projects')
        onClose()
      },
    },
    {
      id: 'nav-lab',
      title: 'Homelab & Infrastructure',
      subtitle: 'Proxmox, LXC, Ansible, GCP Pub/Sub, and network',
      category: 'Navigation',
      icon: Server,
      action: () => {
        navigate('/lab')
        onClose()
      },
    },
    {
      id: 'nav-shelf',
      title: 'Shelf & Readings',
      subtitle: 'Distributed systems books, papers, and notes',
      category: 'Navigation',
      icon: BookOpen,
      action: () => {
        navigate('/shelf')
        onClose()
      },
    },
    {
      id: 'action-copy-email',
      title: copiedEmail
        ? 'Email copied to clipboard!'
        : `Copy Email (${profile.contact.email})`,
      subtitle: 'Reach out directly',
      category: 'Quick Actions',
      icon: copiedEmail ? Check : Mail,
      action: () => {
        navigator.clipboard.writeText(profile.contact.email)
        setCopiedEmail(true)
        setTimeout(() => setCopiedEmail(false), 2000)
      },
    },
    {
      id: 'action-resume',
      title: 'View Resume (PDF)',
      subtitle: 'Open latest CV on GitHub',
      category: 'Quick Actions',
      icon: FileText,
      action: () => {
        window.open(profile.contact.resumeUrl, '_blank', 'noopener,noreferrer')
        onClose()
      },
    },
    {
      id: 'action-github',
      title: 'GitHub Profile',
      subtitle: 'github.com/girordo',
      category: 'Quick Actions',
      icon: GithubIcon,
      action: () => {
        window.open(profile.contact.github, '_blank', 'noopener,noreferrer')
        onClose()
      },
    },
    {
      id: 'action-linkedin',
      title: 'LinkedIn Profile',
      subtitle: 'Connect professionally',
      category: 'Quick Actions',
      icon: LinkedinIcon,
      action: () => {
        window.open(profile.contact.linkedin, '_blank', 'noopener,noreferrer')
        onClose()
      },
    },
  ]

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      (item.subtitle &&
        item.subtitle.toLowerCase().includes(query.toLowerCase())),
  )

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(
          (prev) =>
            (prev - 1 + filteredItems.length) % (filteredItems.length || 1),
        )
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, filteredItems, selectedIndex, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Palette Modal */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-xl bg-slate-900/95 border border-white/[0.1] shadow-2xl backdrop-blur-xl animate-fadeIn">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08] gap-3">
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or jump to page..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSelectedIndex(0)
            }}
            className="flex-1 bg-transparent text-sm text-slate-100 placeholder:text-slate-500 outline-none font-reading"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-slate-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-sm font-reading text-slate-500">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const Icon = item.icon
              const isSelected = index === selectedIndex
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-xs transition-colors ${
                    isSelected
                      ? 'bg-emerald-500/15 text-white'
                      : 'text-slate-300 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-1.5 rounded-md ${
                        isSelected
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-white/[0.05] text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <p className="font-reading font-medium truncate">
                        {item.title}
                      </p>
                      {item.subtitle && (
                        <p className="text-[11px] text-slate-400 truncate">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="text-[9px] font-mono-jb uppercase tracking-wider text-slate-500 shrink-0 ml-2">
                    {item.category}
                  </span>
                </button>
              )
            })
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-white/[0.06] bg-slate-950/40 text-[10px] font-mono-jb text-slate-500">
          <div className="flex items-center gap-3">
            <span>↑↓ navigate</span>
            <span>↵ select</span>
            <span>esc close</span>
          </div>
          <span className="text-emerald-400/80">Tarcísio Giroldo</span>
        </div>
      </div>
    </div>
  )
}
export default CommandPalette
